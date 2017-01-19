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
var args31806 = [];
var len__26121__auto___31812 = arguments.length;
var i__26122__auto___31813 = (0);
while(true){
if((i__26122__auto___31813 < len__26121__auto___31812)){
args31806.push((arguments[i__26122__auto___31813]));

var G__31814 = (i__26122__auto___31813 + (1));
i__26122__auto___31813 = G__31814;
continue;
} else {
}
break;
}

var G__31808 = args31806.length;
switch (G__31808) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31806.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31809 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31809 = (function (f,blockable,meta31810){
this.f = f;
this.blockable = blockable;
this.meta31810 = meta31810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31811,meta31810__$1){
var self__ = this;
var _31811__$1 = this;
return (new cljs.core.async.t_cljs$core$async31809(self__.f,self__.blockable,meta31810__$1));
});

cljs.core.async.t_cljs$core$async31809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31811){
var self__ = this;
var _31811__$1 = this;
return self__.meta31810;
});

cljs.core.async.t_cljs$core$async31809.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31809.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31809.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31809.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31810","meta31810",-867997095,null)], null);
});

cljs.core.async.t_cljs$core$async31809.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31809.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31809";

cljs.core.async.t_cljs$core$async31809.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async31809");
});

cljs.core.async.__GT_t_cljs$core$async31809 = (function cljs$core$async$__GT_t_cljs$core$async31809(f__$1,blockable__$1,meta31810){
return (new cljs.core.async.t_cljs$core$async31809(f__$1,blockable__$1,meta31810));
});

}

return (new cljs.core.async.t_cljs$core$async31809(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args31818 = [];
var len__26121__auto___31821 = arguments.length;
var i__26122__auto___31822 = (0);
while(true){
if((i__26122__auto___31822 < len__26121__auto___31821)){
args31818.push((arguments[i__26122__auto___31822]));

var G__31823 = (i__26122__auto___31822 + (1));
i__26122__auto___31822 = G__31823;
continue;
} else {
}
break;
}

var G__31820 = args31818.length;
switch (G__31820) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31818.length)].join('')));

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
var args31825 = [];
var len__26121__auto___31828 = arguments.length;
var i__26122__auto___31829 = (0);
while(true){
if((i__26122__auto___31829 < len__26121__auto___31828)){
args31825.push((arguments[i__26122__auto___31829]));

var G__31830 = (i__26122__auto___31829 + (1));
i__26122__auto___31829 = G__31830;
continue;
} else {
}
break;
}

var G__31827 = args31825.length;
switch (G__31827) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31825.length)].join('')));

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
var args31832 = [];
var len__26121__auto___31835 = arguments.length;
var i__26122__auto___31836 = (0);
while(true){
if((i__26122__auto___31836 < len__26121__auto___31835)){
args31832.push((arguments[i__26122__auto___31836]));

var G__31837 = (i__26122__auto___31836 + (1));
i__26122__auto___31836 = G__31837;
continue;
} else {
}
break;
}

var G__31834 = args31832.length;
switch (G__31834) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31832.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31839 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31839);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31839,ret){
return (function (){
return fn1.call(null,val_31839);
});})(val_31839,ret))
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
var args31840 = [];
var len__26121__auto___31843 = arguments.length;
var i__26122__auto___31844 = (0);
while(true){
if((i__26122__auto___31844 < len__26121__auto___31843)){
args31840.push((arguments[i__26122__auto___31844]));

var G__31845 = (i__26122__auto___31844 + (1));
i__26122__auto___31844 = G__31845;
continue;
} else {
}
break;
}

var G__31842 = args31840.length;
switch (G__31842) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31840.length)].join('')));

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
var n__25961__auto___31847 = n;
var x_31848 = (0);
while(true){
if((x_31848 < n__25961__auto___31847)){
(a[x_31848] = (0));

var G__31849 = (x_31848 + (1));
x_31848 = G__31849;
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

var G__31850 = (i + (1));
i = G__31850;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31854 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31854 = (function (alt_flag,flag,meta31855){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta31855 = meta31855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31856,meta31855__$1){
var self__ = this;
var _31856__$1 = this;
return (new cljs.core.async.t_cljs$core$async31854(self__.alt_flag,self__.flag,meta31855__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31856){
var self__ = this;
var _31856__$1 = this;
return self__.meta31855;
});})(flag))
;

cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31854.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31855","meta31855",684699359,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31854.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31854";

cljs.core.async.t_cljs$core$async31854.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async31854");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31854 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31854(alt_flag__$1,flag__$1,meta31855){
return (new cljs.core.async.t_cljs$core$async31854(alt_flag__$1,flag__$1,meta31855));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31854(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31860 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31860 = (function (alt_handler,flag,cb,meta31861){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta31861 = meta31861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31862,meta31861__$1){
var self__ = this;
var _31862__$1 = this;
return (new cljs.core.async.t_cljs$core$async31860(self__.alt_handler,self__.flag,self__.cb,meta31861__$1));
});

cljs.core.async.t_cljs$core$async31860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31862){
var self__ = this;
var _31862__$1 = this;
return self__.meta31861;
});

cljs.core.async.t_cljs$core$async31860.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31860.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31860.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31860.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31861","meta31861",-1970592009,null)], null);
});

cljs.core.async.t_cljs$core$async31860.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31860";

cljs.core.async.t_cljs$core$async31860.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async31860");
});

cljs.core.async.__GT_t_cljs$core$async31860 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31860(alt_handler__$1,flag__$1,cb__$1,meta31861){
return (new cljs.core.async.t_cljs$core$async31860(alt_handler__$1,flag__$1,cb__$1,meta31861));
});

}

return (new cljs.core.async.t_cljs$core$async31860(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31863_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31863_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31864_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31864_SHARP_,port], null));
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
var G__31865 = (i + (1));
i = G__31865;
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
var len__26121__auto___31871 = arguments.length;
var i__26122__auto___31872 = (0);
while(true){
if((i__26122__auto___31872 < len__26121__auto___31871)){
args__26128__auto__.push((arguments[i__26122__auto___31872]));

var G__31873 = (i__26122__auto___31872 + (1));
i__26122__auto___31872 = G__31873;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31868){
var map__31869 = p__31868;
var map__31869__$1 = ((((!((map__31869 == null)))?((((map__31869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31869):map__31869);
var opts = map__31869__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31866){
var G__31867 = cljs.core.first.call(null,seq31866);
var seq31866__$1 = cljs.core.next.call(null,seq31866);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31867,seq31866__$1);
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
var args31874 = [];
var len__26121__auto___31924 = arguments.length;
var i__26122__auto___31925 = (0);
while(true){
if((i__26122__auto___31925 < len__26121__auto___31924)){
args31874.push((arguments[i__26122__auto___31925]));

var G__31926 = (i__26122__auto___31925 + (1));
i__26122__auto___31925 = G__31926;
continue;
} else {
}
break;
}

var G__31876 = args31874.length;
switch (G__31876) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31874.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31761__auto___31928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto___31928){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto___31928){
return (function (state_31900){
var state_val_31901 = (state_31900[(1)]);
if((state_val_31901 === (7))){
var inst_31896 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
var statearr_31902_31929 = state_31900__$1;
(statearr_31902_31929[(2)] = inst_31896);

(statearr_31902_31929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (1))){
var state_31900__$1 = state_31900;
var statearr_31903_31930 = state_31900__$1;
(statearr_31903_31930[(2)] = null);

(statearr_31903_31930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (4))){
var inst_31879 = (state_31900[(7)]);
var inst_31879__$1 = (state_31900[(2)]);
var inst_31880 = (inst_31879__$1 == null);
var state_31900__$1 = (function (){var statearr_31904 = state_31900;
(statearr_31904[(7)] = inst_31879__$1);

return statearr_31904;
})();
if(cljs.core.truth_(inst_31880)){
var statearr_31905_31931 = state_31900__$1;
(statearr_31905_31931[(1)] = (5));

} else {
var statearr_31906_31932 = state_31900__$1;
(statearr_31906_31932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (13))){
var state_31900__$1 = state_31900;
var statearr_31907_31933 = state_31900__$1;
(statearr_31907_31933[(2)] = null);

(statearr_31907_31933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (6))){
var inst_31879 = (state_31900[(7)]);
var state_31900__$1 = state_31900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31900__$1,(11),to,inst_31879);
} else {
if((state_val_31901 === (3))){
var inst_31898 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31900__$1,inst_31898);
} else {
if((state_val_31901 === (12))){
var state_31900__$1 = state_31900;
var statearr_31908_31934 = state_31900__$1;
(statearr_31908_31934[(2)] = null);

(statearr_31908_31934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (2))){
var state_31900__$1 = state_31900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31900__$1,(4),from);
} else {
if((state_val_31901 === (11))){
var inst_31889 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
if(cljs.core.truth_(inst_31889)){
var statearr_31909_31935 = state_31900__$1;
(statearr_31909_31935[(1)] = (12));

} else {
var statearr_31910_31936 = state_31900__$1;
(statearr_31910_31936[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (9))){
var state_31900__$1 = state_31900;
var statearr_31911_31937 = state_31900__$1;
(statearr_31911_31937[(2)] = null);

(statearr_31911_31937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (5))){
var state_31900__$1 = state_31900;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31912_31938 = state_31900__$1;
(statearr_31912_31938[(1)] = (8));

} else {
var statearr_31913_31939 = state_31900__$1;
(statearr_31913_31939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (14))){
var inst_31894 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
var statearr_31914_31940 = state_31900__$1;
(statearr_31914_31940[(2)] = inst_31894);

(statearr_31914_31940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (10))){
var inst_31886 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
var statearr_31915_31941 = state_31900__$1;
(statearr_31915_31941[(2)] = inst_31886);

(statearr_31915_31941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (8))){
var inst_31883 = cljs.core.async.close_BANG_.call(null,to);
var state_31900__$1 = state_31900;
var statearr_31916_31942 = state_31900__$1;
(statearr_31916_31942[(2)] = inst_31883);

(statearr_31916_31942[(1)] = (10));


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
});})(c__31761__auto___31928))
;
return ((function (switch__31740__auto__,c__31761__auto___31928){
return (function() {
var cljs$core$async$state_machine__31741__auto__ = null;
var cljs$core$async$state_machine__31741__auto____0 = (function (){
var statearr_31920 = [null,null,null,null,null,null,null,null];
(statearr_31920[(0)] = cljs$core$async$state_machine__31741__auto__);

(statearr_31920[(1)] = (1));

return statearr_31920;
});
var cljs$core$async$state_machine__31741__auto____1 = (function (state_31900){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_31900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e31921){if((e31921 instanceof Object)){
var ex__31744__auto__ = e31921;
var statearr_31922_31943 = state_31900;
(statearr_31922_31943[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31944 = state_31900;
state_31900 = G__31944;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
cljs$core$async$state_machine__31741__auto__ = function(state_31900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31741__auto____1.call(this,state_31900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31741__auto____0;
cljs$core$async$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31741__auto____1;
return cljs$core$async$state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto___31928))
})();
var state__31763__auto__ = (function (){var statearr_31923 = f__31762__auto__.call(null);
(statearr_31923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto___31928);

return statearr_31923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto___31928))
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
return (function (p__32132){
var vec__32133 = p__32132;
var v = cljs.core.nth.call(null,vec__32133,(0),null);
var p = cljs.core.nth.call(null,vec__32133,(1),null);
var job = vec__32133;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31761__auto___32319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto___32319,res,vec__32133,v,p,job,jobs,results){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto___32319,res,vec__32133,v,p,job,jobs,results){
return (function (state_32140){
var state_val_32141 = (state_32140[(1)]);
if((state_val_32141 === (1))){
var state_32140__$1 = state_32140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32140__$1,(2),res,v);
} else {
if((state_val_32141 === (2))){
var inst_32137 = (state_32140[(2)]);
var inst_32138 = cljs.core.async.close_BANG_.call(null,res);
var state_32140__$1 = (function (){var statearr_32142 = state_32140;
(statearr_32142[(7)] = inst_32137);

return statearr_32142;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32140__$1,inst_32138);
} else {
return null;
}
}
});})(c__31761__auto___32319,res,vec__32133,v,p,job,jobs,results))
;
return ((function (switch__31740__auto__,c__31761__auto___32319,res,vec__32133,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____0 = (function (){
var statearr_32146 = [null,null,null,null,null,null,null,null];
(statearr_32146[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__);

(statearr_32146[(1)] = (1));

return statearr_32146;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____1 = (function (state_32140){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_32140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e32147){if((e32147 instanceof Object)){
var ex__31744__auto__ = e32147;
var statearr_32148_32320 = state_32140;
(statearr_32148_32320[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32321 = state_32140;
state_32140 = G__32321;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__ = function(state_32140){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____1.call(this,state_32140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto___32319,res,vec__32133,v,p,job,jobs,results))
})();
var state__31763__auto__ = (function (){var statearr_32149 = f__31762__auto__.call(null);
(statearr_32149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto___32319);

return statearr_32149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto___32319,res,vec__32133,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32150){
var vec__32151 = p__32150;
var v = cljs.core.nth.call(null,vec__32151,(0),null);
var p = cljs.core.nth.call(null,vec__32151,(1),null);
var job = vec__32151;
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
var n__25961__auto___32322 = n;
var __32323 = (0);
while(true){
if((__32323 < n__25961__auto___32322)){
var G__32154_32324 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32154_32324) {
case "compute":
var c__31761__auto___32326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32323,c__31761__auto___32326,G__32154_32324,n__25961__auto___32322,jobs,results,process,async){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (__32323,c__31761__auto___32326,G__32154_32324,n__25961__auto___32322,jobs,results,process,async){
return (function (state_32167){
var state_val_32168 = (state_32167[(1)]);
if((state_val_32168 === (1))){
var state_32167__$1 = state_32167;
var statearr_32169_32327 = state_32167__$1;
(statearr_32169_32327[(2)] = null);

(statearr_32169_32327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (2))){
var state_32167__$1 = state_32167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32167__$1,(4),jobs);
} else {
if((state_val_32168 === (3))){
var inst_32165 = (state_32167[(2)]);
var state_32167__$1 = state_32167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32167__$1,inst_32165);
} else {
if((state_val_32168 === (4))){
var inst_32157 = (state_32167[(2)]);
var inst_32158 = process.call(null,inst_32157);
var state_32167__$1 = state_32167;
if(cljs.core.truth_(inst_32158)){
var statearr_32170_32328 = state_32167__$1;
(statearr_32170_32328[(1)] = (5));

} else {
var statearr_32171_32329 = state_32167__$1;
(statearr_32171_32329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (5))){
var state_32167__$1 = state_32167;
var statearr_32172_32330 = state_32167__$1;
(statearr_32172_32330[(2)] = null);

(statearr_32172_32330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (6))){
var state_32167__$1 = state_32167;
var statearr_32173_32331 = state_32167__$1;
(statearr_32173_32331[(2)] = null);

(statearr_32173_32331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (7))){
var inst_32163 = (state_32167[(2)]);
var state_32167__$1 = state_32167;
var statearr_32174_32332 = state_32167__$1;
(statearr_32174_32332[(2)] = inst_32163);

(statearr_32174_32332[(1)] = (3));


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
});})(__32323,c__31761__auto___32326,G__32154_32324,n__25961__auto___32322,jobs,results,process,async))
;
return ((function (__32323,switch__31740__auto__,c__31761__auto___32326,G__32154_32324,n__25961__auto___32322,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____0 = (function (){
var statearr_32178 = [null,null,null,null,null,null,null];
(statearr_32178[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__);

(statearr_32178[(1)] = (1));

return statearr_32178;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____1 = (function (state_32167){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_32167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e32179){if((e32179 instanceof Object)){
var ex__31744__auto__ = e32179;
var statearr_32180_32333 = state_32167;
(statearr_32180_32333[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32334 = state_32167;
state_32167 = G__32334;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__ = function(state_32167){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____1.call(this,state_32167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__;
})()
;})(__32323,switch__31740__auto__,c__31761__auto___32326,G__32154_32324,n__25961__auto___32322,jobs,results,process,async))
})();
var state__31763__auto__ = (function (){var statearr_32181 = f__31762__auto__.call(null);
(statearr_32181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto___32326);

return statearr_32181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(__32323,c__31761__auto___32326,G__32154_32324,n__25961__auto___32322,jobs,results,process,async))
);


break;
case "async":
var c__31761__auto___32335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32323,c__31761__auto___32335,G__32154_32324,n__25961__auto___32322,jobs,results,process,async){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (__32323,c__31761__auto___32335,G__32154_32324,n__25961__auto___32322,jobs,results,process,async){
return (function (state_32194){
var state_val_32195 = (state_32194[(1)]);
if((state_val_32195 === (1))){
var state_32194__$1 = state_32194;
var statearr_32196_32336 = state_32194__$1;
(statearr_32196_32336[(2)] = null);

(statearr_32196_32336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (2))){
var state_32194__$1 = state_32194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32194__$1,(4),jobs);
} else {
if((state_val_32195 === (3))){
var inst_32192 = (state_32194[(2)]);
var state_32194__$1 = state_32194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32194__$1,inst_32192);
} else {
if((state_val_32195 === (4))){
var inst_32184 = (state_32194[(2)]);
var inst_32185 = async.call(null,inst_32184);
var state_32194__$1 = state_32194;
if(cljs.core.truth_(inst_32185)){
var statearr_32197_32337 = state_32194__$1;
(statearr_32197_32337[(1)] = (5));

} else {
var statearr_32198_32338 = state_32194__$1;
(statearr_32198_32338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (5))){
var state_32194__$1 = state_32194;
var statearr_32199_32339 = state_32194__$1;
(statearr_32199_32339[(2)] = null);

(statearr_32199_32339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (6))){
var state_32194__$1 = state_32194;
var statearr_32200_32340 = state_32194__$1;
(statearr_32200_32340[(2)] = null);

(statearr_32200_32340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (7))){
var inst_32190 = (state_32194[(2)]);
var state_32194__$1 = state_32194;
var statearr_32201_32341 = state_32194__$1;
(statearr_32201_32341[(2)] = inst_32190);

(statearr_32201_32341[(1)] = (3));


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
});})(__32323,c__31761__auto___32335,G__32154_32324,n__25961__auto___32322,jobs,results,process,async))
;
return ((function (__32323,switch__31740__auto__,c__31761__auto___32335,G__32154_32324,n__25961__auto___32322,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____0 = (function (){
var statearr_32205 = [null,null,null,null,null,null,null];
(statearr_32205[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__);

(statearr_32205[(1)] = (1));

return statearr_32205;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____1 = (function (state_32194){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_32194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e32206){if((e32206 instanceof Object)){
var ex__31744__auto__ = e32206;
var statearr_32207_32342 = state_32194;
(statearr_32207_32342[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32343 = state_32194;
state_32194 = G__32343;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__ = function(state_32194){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____1.call(this,state_32194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__;
})()
;})(__32323,switch__31740__auto__,c__31761__auto___32335,G__32154_32324,n__25961__auto___32322,jobs,results,process,async))
})();
var state__31763__auto__ = (function (){var statearr_32208 = f__31762__auto__.call(null);
(statearr_32208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto___32335);

return statearr_32208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(__32323,c__31761__auto___32335,G__32154_32324,n__25961__auto___32322,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32344 = (__32323 + (1));
__32323 = G__32344;
continue;
} else {
}
break;
}

var c__31761__auto___32345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto___32345,jobs,results,process,async){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto___32345,jobs,results,process,async){
return (function (state_32230){
var state_val_32231 = (state_32230[(1)]);
if((state_val_32231 === (1))){
var state_32230__$1 = state_32230;
var statearr_32232_32346 = state_32230__$1;
(statearr_32232_32346[(2)] = null);

(statearr_32232_32346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32231 === (2))){
var state_32230__$1 = state_32230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32230__$1,(4),from);
} else {
if((state_val_32231 === (3))){
var inst_32228 = (state_32230[(2)]);
var state_32230__$1 = state_32230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32230__$1,inst_32228);
} else {
if((state_val_32231 === (4))){
var inst_32211 = (state_32230[(7)]);
var inst_32211__$1 = (state_32230[(2)]);
var inst_32212 = (inst_32211__$1 == null);
var state_32230__$1 = (function (){var statearr_32233 = state_32230;
(statearr_32233[(7)] = inst_32211__$1);

return statearr_32233;
})();
if(cljs.core.truth_(inst_32212)){
var statearr_32234_32347 = state_32230__$1;
(statearr_32234_32347[(1)] = (5));

} else {
var statearr_32235_32348 = state_32230__$1;
(statearr_32235_32348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32231 === (5))){
var inst_32214 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32230__$1 = state_32230;
var statearr_32236_32349 = state_32230__$1;
(statearr_32236_32349[(2)] = inst_32214);

(statearr_32236_32349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32231 === (6))){
var inst_32216 = (state_32230[(8)]);
var inst_32211 = (state_32230[(7)]);
var inst_32216__$1 = cljs.core.async.chan.call(null,(1));
var inst_32217 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32218 = [inst_32211,inst_32216__$1];
var inst_32219 = (new cljs.core.PersistentVector(null,2,(5),inst_32217,inst_32218,null));
var state_32230__$1 = (function (){var statearr_32237 = state_32230;
(statearr_32237[(8)] = inst_32216__$1);

return statearr_32237;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32230__$1,(8),jobs,inst_32219);
} else {
if((state_val_32231 === (7))){
var inst_32226 = (state_32230[(2)]);
var state_32230__$1 = state_32230;
var statearr_32238_32350 = state_32230__$1;
(statearr_32238_32350[(2)] = inst_32226);

(statearr_32238_32350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32231 === (8))){
var inst_32216 = (state_32230[(8)]);
var inst_32221 = (state_32230[(2)]);
var state_32230__$1 = (function (){var statearr_32239 = state_32230;
(statearr_32239[(9)] = inst_32221);

return statearr_32239;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32230__$1,(9),results,inst_32216);
} else {
if((state_val_32231 === (9))){
var inst_32223 = (state_32230[(2)]);
var state_32230__$1 = (function (){var statearr_32240 = state_32230;
(statearr_32240[(10)] = inst_32223);

return statearr_32240;
})();
var statearr_32241_32351 = state_32230__$1;
(statearr_32241_32351[(2)] = null);

(statearr_32241_32351[(1)] = (2));


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
});})(c__31761__auto___32345,jobs,results,process,async))
;
return ((function (switch__31740__auto__,c__31761__auto___32345,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____0 = (function (){
var statearr_32245 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32245[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__);

(statearr_32245[(1)] = (1));

return statearr_32245;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____1 = (function (state_32230){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_32230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e32246){if((e32246 instanceof Object)){
var ex__31744__auto__ = e32246;
var statearr_32247_32352 = state_32230;
(statearr_32247_32352[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32353 = state_32230;
state_32230 = G__32353;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__ = function(state_32230){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____1.call(this,state_32230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto___32345,jobs,results,process,async))
})();
var state__31763__auto__ = (function (){var statearr_32248 = f__31762__auto__.call(null);
(statearr_32248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto___32345);

return statearr_32248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto___32345,jobs,results,process,async))
);


var c__31761__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto__,jobs,results,process,async){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto__,jobs,results,process,async){
return (function (state_32286){
var state_val_32287 = (state_32286[(1)]);
if((state_val_32287 === (7))){
var inst_32282 = (state_32286[(2)]);
var state_32286__$1 = state_32286;
var statearr_32288_32354 = state_32286__$1;
(statearr_32288_32354[(2)] = inst_32282);

(statearr_32288_32354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (20))){
var state_32286__$1 = state_32286;
var statearr_32289_32355 = state_32286__$1;
(statearr_32289_32355[(2)] = null);

(statearr_32289_32355[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (1))){
var state_32286__$1 = state_32286;
var statearr_32290_32356 = state_32286__$1;
(statearr_32290_32356[(2)] = null);

(statearr_32290_32356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (4))){
var inst_32251 = (state_32286[(7)]);
var inst_32251__$1 = (state_32286[(2)]);
var inst_32252 = (inst_32251__$1 == null);
var state_32286__$1 = (function (){var statearr_32291 = state_32286;
(statearr_32291[(7)] = inst_32251__$1);

return statearr_32291;
})();
if(cljs.core.truth_(inst_32252)){
var statearr_32292_32357 = state_32286__$1;
(statearr_32292_32357[(1)] = (5));

} else {
var statearr_32293_32358 = state_32286__$1;
(statearr_32293_32358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (15))){
var inst_32264 = (state_32286[(8)]);
var state_32286__$1 = state_32286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32286__$1,(18),to,inst_32264);
} else {
if((state_val_32287 === (21))){
var inst_32277 = (state_32286[(2)]);
var state_32286__$1 = state_32286;
var statearr_32294_32359 = state_32286__$1;
(statearr_32294_32359[(2)] = inst_32277);

(statearr_32294_32359[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (13))){
var inst_32279 = (state_32286[(2)]);
var state_32286__$1 = (function (){var statearr_32295 = state_32286;
(statearr_32295[(9)] = inst_32279);

return statearr_32295;
})();
var statearr_32296_32360 = state_32286__$1;
(statearr_32296_32360[(2)] = null);

(statearr_32296_32360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (6))){
var inst_32251 = (state_32286[(7)]);
var state_32286__$1 = state_32286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32286__$1,(11),inst_32251);
} else {
if((state_val_32287 === (17))){
var inst_32272 = (state_32286[(2)]);
var state_32286__$1 = state_32286;
if(cljs.core.truth_(inst_32272)){
var statearr_32297_32361 = state_32286__$1;
(statearr_32297_32361[(1)] = (19));

} else {
var statearr_32298_32362 = state_32286__$1;
(statearr_32298_32362[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (3))){
var inst_32284 = (state_32286[(2)]);
var state_32286__$1 = state_32286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32286__$1,inst_32284);
} else {
if((state_val_32287 === (12))){
var inst_32261 = (state_32286[(10)]);
var state_32286__$1 = state_32286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32286__$1,(14),inst_32261);
} else {
if((state_val_32287 === (2))){
var state_32286__$1 = state_32286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32286__$1,(4),results);
} else {
if((state_val_32287 === (19))){
var state_32286__$1 = state_32286;
var statearr_32299_32363 = state_32286__$1;
(statearr_32299_32363[(2)] = null);

(statearr_32299_32363[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (11))){
var inst_32261 = (state_32286[(2)]);
var state_32286__$1 = (function (){var statearr_32300 = state_32286;
(statearr_32300[(10)] = inst_32261);

return statearr_32300;
})();
var statearr_32301_32364 = state_32286__$1;
(statearr_32301_32364[(2)] = null);

(statearr_32301_32364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (9))){
var state_32286__$1 = state_32286;
var statearr_32302_32365 = state_32286__$1;
(statearr_32302_32365[(2)] = null);

(statearr_32302_32365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (5))){
var state_32286__$1 = state_32286;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32303_32366 = state_32286__$1;
(statearr_32303_32366[(1)] = (8));

} else {
var statearr_32304_32367 = state_32286__$1;
(statearr_32304_32367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (14))){
var inst_32266 = (state_32286[(11)]);
var inst_32264 = (state_32286[(8)]);
var inst_32264__$1 = (state_32286[(2)]);
var inst_32265 = (inst_32264__$1 == null);
var inst_32266__$1 = cljs.core.not.call(null,inst_32265);
var state_32286__$1 = (function (){var statearr_32305 = state_32286;
(statearr_32305[(11)] = inst_32266__$1);

(statearr_32305[(8)] = inst_32264__$1);

return statearr_32305;
})();
if(inst_32266__$1){
var statearr_32306_32368 = state_32286__$1;
(statearr_32306_32368[(1)] = (15));

} else {
var statearr_32307_32369 = state_32286__$1;
(statearr_32307_32369[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (16))){
var inst_32266 = (state_32286[(11)]);
var state_32286__$1 = state_32286;
var statearr_32308_32370 = state_32286__$1;
(statearr_32308_32370[(2)] = inst_32266);

(statearr_32308_32370[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (10))){
var inst_32258 = (state_32286[(2)]);
var state_32286__$1 = state_32286;
var statearr_32309_32371 = state_32286__$1;
(statearr_32309_32371[(2)] = inst_32258);

(statearr_32309_32371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (18))){
var inst_32269 = (state_32286[(2)]);
var state_32286__$1 = state_32286;
var statearr_32310_32372 = state_32286__$1;
(statearr_32310_32372[(2)] = inst_32269);

(statearr_32310_32372[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32287 === (8))){
var inst_32255 = cljs.core.async.close_BANG_.call(null,to);
var state_32286__$1 = state_32286;
var statearr_32311_32373 = state_32286__$1;
(statearr_32311_32373[(2)] = inst_32255);

(statearr_32311_32373[(1)] = (10));


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
});})(c__31761__auto__,jobs,results,process,async))
;
return ((function (switch__31740__auto__,c__31761__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____0 = (function (){
var statearr_32315 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32315[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__);

(statearr_32315[(1)] = (1));

return statearr_32315;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____1 = (function (state_32286){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_32286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e32316){if((e32316 instanceof Object)){
var ex__31744__auto__ = e32316;
var statearr_32317_32374 = state_32286;
(statearr_32317_32374[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32375 = state_32286;
state_32286 = G__32375;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__ = function(state_32286){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____1.call(this,state_32286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31741__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto__,jobs,results,process,async))
})();
var state__31763__auto__ = (function (){var statearr_32318 = f__31762__auto__.call(null);
(statearr_32318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto__);

return statearr_32318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto__,jobs,results,process,async))
);

return c__31761__auto__;
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
var args32376 = [];
var len__26121__auto___32379 = arguments.length;
var i__26122__auto___32380 = (0);
while(true){
if((i__26122__auto___32380 < len__26121__auto___32379)){
args32376.push((arguments[i__26122__auto___32380]));

var G__32381 = (i__26122__auto___32380 + (1));
i__26122__auto___32380 = G__32381;
continue;
} else {
}
break;
}

var G__32378 = args32376.length;
switch (G__32378) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32376.length)].join('')));

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
var args32383 = [];
var len__26121__auto___32386 = arguments.length;
var i__26122__auto___32387 = (0);
while(true){
if((i__26122__auto___32387 < len__26121__auto___32386)){
args32383.push((arguments[i__26122__auto___32387]));

var G__32388 = (i__26122__auto___32387 + (1));
i__26122__auto___32387 = G__32388;
continue;
} else {
}
break;
}

var G__32385 = args32383.length;
switch (G__32385) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32383.length)].join('')));

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
var args32390 = [];
var len__26121__auto___32443 = arguments.length;
var i__26122__auto___32444 = (0);
while(true){
if((i__26122__auto___32444 < len__26121__auto___32443)){
args32390.push((arguments[i__26122__auto___32444]));

var G__32445 = (i__26122__auto___32444 + (1));
i__26122__auto___32444 = G__32445;
continue;
} else {
}
break;
}

var G__32392 = args32390.length;
switch (G__32392) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32390.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31761__auto___32447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto___32447,tc,fc){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto___32447,tc,fc){
return (function (state_32418){
var state_val_32419 = (state_32418[(1)]);
if((state_val_32419 === (7))){
var inst_32414 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32420_32448 = state_32418__$1;
(statearr_32420_32448[(2)] = inst_32414);

(statearr_32420_32448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (1))){
var state_32418__$1 = state_32418;
var statearr_32421_32449 = state_32418__$1;
(statearr_32421_32449[(2)] = null);

(statearr_32421_32449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (4))){
var inst_32395 = (state_32418[(7)]);
var inst_32395__$1 = (state_32418[(2)]);
var inst_32396 = (inst_32395__$1 == null);
var state_32418__$1 = (function (){var statearr_32422 = state_32418;
(statearr_32422[(7)] = inst_32395__$1);

return statearr_32422;
})();
if(cljs.core.truth_(inst_32396)){
var statearr_32423_32450 = state_32418__$1;
(statearr_32423_32450[(1)] = (5));

} else {
var statearr_32424_32451 = state_32418__$1;
(statearr_32424_32451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (13))){
var state_32418__$1 = state_32418;
var statearr_32425_32452 = state_32418__$1;
(statearr_32425_32452[(2)] = null);

(statearr_32425_32452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (6))){
var inst_32395 = (state_32418[(7)]);
var inst_32401 = p.call(null,inst_32395);
var state_32418__$1 = state_32418;
if(cljs.core.truth_(inst_32401)){
var statearr_32426_32453 = state_32418__$1;
(statearr_32426_32453[(1)] = (9));

} else {
var statearr_32427_32454 = state_32418__$1;
(statearr_32427_32454[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (3))){
var inst_32416 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32418__$1,inst_32416);
} else {
if((state_val_32419 === (12))){
var state_32418__$1 = state_32418;
var statearr_32428_32455 = state_32418__$1;
(statearr_32428_32455[(2)] = null);

(statearr_32428_32455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (2))){
var state_32418__$1 = state_32418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32418__$1,(4),ch);
} else {
if((state_val_32419 === (11))){
var inst_32395 = (state_32418[(7)]);
var inst_32405 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32418__$1,(8),inst_32405,inst_32395);
} else {
if((state_val_32419 === (9))){
var state_32418__$1 = state_32418;
var statearr_32429_32456 = state_32418__$1;
(statearr_32429_32456[(2)] = tc);

(statearr_32429_32456[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (5))){
var inst_32398 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32399 = cljs.core.async.close_BANG_.call(null,fc);
var state_32418__$1 = (function (){var statearr_32430 = state_32418;
(statearr_32430[(8)] = inst_32398);

return statearr_32430;
})();
var statearr_32431_32457 = state_32418__$1;
(statearr_32431_32457[(2)] = inst_32399);

(statearr_32431_32457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (14))){
var inst_32412 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32432_32458 = state_32418__$1;
(statearr_32432_32458[(2)] = inst_32412);

(statearr_32432_32458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (10))){
var state_32418__$1 = state_32418;
var statearr_32433_32459 = state_32418__$1;
(statearr_32433_32459[(2)] = fc);

(statearr_32433_32459[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (8))){
var inst_32407 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
if(cljs.core.truth_(inst_32407)){
var statearr_32434_32460 = state_32418__$1;
(statearr_32434_32460[(1)] = (12));

} else {
var statearr_32435_32461 = state_32418__$1;
(statearr_32435_32461[(1)] = (13));

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
});})(c__31761__auto___32447,tc,fc))
;
return ((function (switch__31740__auto__,c__31761__auto___32447,tc,fc){
return (function() {
var cljs$core$async$state_machine__31741__auto__ = null;
var cljs$core$async$state_machine__31741__auto____0 = (function (){
var statearr_32439 = [null,null,null,null,null,null,null,null,null];
(statearr_32439[(0)] = cljs$core$async$state_machine__31741__auto__);

(statearr_32439[(1)] = (1));

return statearr_32439;
});
var cljs$core$async$state_machine__31741__auto____1 = (function (state_32418){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_32418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e32440){if((e32440 instanceof Object)){
var ex__31744__auto__ = e32440;
var statearr_32441_32462 = state_32418;
(statearr_32441_32462[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32463 = state_32418;
state_32418 = G__32463;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
cljs$core$async$state_machine__31741__auto__ = function(state_32418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31741__auto____1.call(this,state_32418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31741__auto____0;
cljs$core$async$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31741__auto____1;
return cljs$core$async$state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto___32447,tc,fc))
})();
var state__31763__auto__ = (function (){var statearr_32442 = f__31762__auto__.call(null);
(statearr_32442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto___32447);

return statearr_32442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto___32447,tc,fc))
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
var c__31761__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto__){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto__){
return (function (state_32527){
var state_val_32528 = (state_32527[(1)]);
if((state_val_32528 === (7))){
var inst_32523 = (state_32527[(2)]);
var state_32527__$1 = state_32527;
var statearr_32529_32550 = state_32527__$1;
(statearr_32529_32550[(2)] = inst_32523);

(statearr_32529_32550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (1))){
var inst_32507 = init;
var state_32527__$1 = (function (){var statearr_32530 = state_32527;
(statearr_32530[(7)] = inst_32507);

return statearr_32530;
})();
var statearr_32531_32551 = state_32527__$1;
(statearr_32531_32551[(2)] = null);

(statearr_32531_32551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (4))){
var inst_32510 = (state_32527[(8)]);
var inst_32510__$1 = (state_32527[(2)]);
var inst_32511 = (inst_32510__$1 == null);
var state_32527__$1 = (function (){var statearr_32532 = state_32527;
(statearr_32532[(8)] = inst_32510__$1);

return statearr_32532;
})();
if(cljs.core.truth_(inst_32511)){
var statearr_32533_32552 = state_32527__$1;
(statearr_32533_32552[(1)] = (5));

} else {
var statearr_32534_32553 = state_32527__$1;
(statearr_32534_32553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (6))){
var inst_32514 = (state_32527[(9)]);
var inst_32507 = (state_32527[(7)]);
var inst_32510 = (state_32527[(8)]);
var inst_32514__$1 = f.call(null,inst_32507,inst_32510);
var inst_32515 = cljs.core.reduced_QMARK_.call(null,inst_32514__$1);
var state_32527__$1 = (function (){var statearr_32535 = state_32527;
(statearr_32535[(9)] = inst_32514__$1);

return statearr_32535;
})();
if(inst_32515){
var statearr_32536_32554 = state_32527__$1;
(statearr_32536_32554[(1)] = (8));

} else {
var statearr_32537_32555 = state_32527__$1;
(statearr_32537_32555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (3))){
var inst_32525 = (state_32527[(2)]);
var state_32527__$1 = state_32527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32527__$1,inst_32525);
} else {
if((state_val_32528 === (2))){
var state_32527__$1 = state_32527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32527__$1,(4),ch);
} else {
if((state_val_32528 === (9))){
var inst_32514 = (state_32527[(9)]);
var inst_32507 = inst_32514;
var state_32527__$1 = (function (){var statearr_32538 = state_32527;
(statearr_32538[(7)] = inst_32507);

return statearr_32538;
})();
var statearr_32539_32556 = state_32527__$1;
(statearr_32539_32556[(2)] = null);

(statearr_32539_32556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (5))){
var inst_32507 = (state_32527[(7)]);
var state_32527__$1 = state_32527;
var statearr_32540_32557 = state_32527__$1;
(statearr_32540_32557[(2)] = inst_32507);

(statearr_32540_32557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (10))){
var inst_32521 = (state_32527[(2)]);
var state_32527__$1 = state_32527;
var statearr_32541_32558 = state_32527__$1;
(statearr_32541_32558[(2)] = inst_32521);

(statearr_32541_32558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (8))){
var inst_32514 = (state_32527[(9)]);
var inst_32517 = cljs.core.deref.call(null,inst_32514);
var state_32527__$1 = state_32527;
var statearr_32542_32559 = state_32527__$1;
(statearr_32542_32559[(2)] = inst_32517);

(statearr_32542_32559[(1)] = (10));


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
});})(c__31761__auto__))
;
return ((function (switch__31740__auto__,c__31761__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31741__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31741__auto____0 = (function (){
var statearr_32546 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32546[(0)] = cljs$core$async$reduce_$_state_machine__31741__auto__);

(statearr_32546[(1)] = (1));

return statearr_32546;
});
var cljs$core$async$reduce_$_state_machine__31741__auto____1 = (function (state_32527){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_32527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e32547){if((e32547 instanceof Object)){
var ex__31744__auto__ = e32547;
var statearr_32548_32560 = state_32527;
(statearr_32548_32560[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32561 = state_32527;
state_32527 = G__32561;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31741__auto__ = function(state_32527){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31741__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31741__auto____1.call(this,state_32527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31741__auto____0;
cljs$core$async$reduce_$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31741__auto____1;
return cljs$core$async$reduce_$_state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto__))
})();
var state__31763__auto__ = (function (){var statearr_32549 = f__31762__auto__.call(null);
(statearr_32549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto__);

return statearr_32549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto__))
);

return c__31761__auto__;
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
var args32562 = [];
var len__26121__auto___32614 = arguments.length;
var i__26122__auto___32615 = (0);
while(true){
if((i__26122__auto___32615 < len__26121__auto___32614)){
args32562.push((arguments[i__26122__auto___32615]));

var G__32616 = (i__26122__auto___32615 + (1));
i__26122__auto___32615 = G__32616;
continue;
} else {
}
break;
}

var G__32564 = args32562.length;
switch (G__32564) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32562.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31761__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto__){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto__){
return (function (state_32589){
var state_val_32590 = (state_32589[(1)]);
if((state_val_32590 === (7))){
var inst_32571 = (state_32589[(2)]);
var state_32589__$1 = state_32589;
var statearr_32591_32618 = state_32589__$1;
(statearr_32591_32618[(2)] = inst_32571);

(statearr_32591_32618[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32590 === (1))){
var inst_32565 = cljs.core.seq.call(null,coll);
var inst_32566 = inst_32565;
var state_32589__$1 = (function (){var statearr_32592 = state_32589;
(statearr_32592[(7)] = inst_32566);

return statearr_32592;
})();
var statearr_32593_32619 = state_32589__$1;
(statearr_32593_32619[(2)] = null);

(statearr_32593_32619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32590 === (4))){
var inst_32566 = (state_32589[(7)]);
var inst_32569 = cljs.core.first.call(null,inst_32566);
var state_32589__$1 = state_32589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32589__$1,(7),ch,inst_32569);
} else {
if((state_val_32590 === (13))){
var inst_32583 = (state_32589[(2)]);
var state_32589__$1 = state_32589;
var statearr_32594_32620 = state_32589__$1;
(statearr_32594_32620[(2)] = inst_32583);

(statearr_32594_32620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32590 === (6))){
var inst_32574 = (state_32589[(2)]);
var state_32589__$1 = state_32589;
if(cljs.core.truth_(inst_32574)){
var statearr_32595_32621 = state_32589__$1;
(statearr_32595_32621[(1)] = (8));

} else {
var statearr_32596_32622 = state_32589__$1;
(statearr_32596_32622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32590 === (3))){
var inst_32587 = (state_32589[(2)]);
var state_32589__$1 = state_32589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32589__$1,inst_32587);
} else {
if((state_val_32590 === (12))){
var state_32589__$1 = state_32589;
var statearr_32597_32623 = state_32589__$1;
(statearr_32597_32623[(2)] = null);

(statearr_32597_32623[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32590 === (2))){
var inst_32566 = (state_32589[(7)]);
var state_32589__$1 = state_32589;
if(cljs.core.truth_(inst_32566)){
var statearr_32598_32624 = state_32589__$1;
(statearr_32598_32624[(1)] = (4));

} else {
var statearr_32599_32625 = state_32589__$1;
(statearr_32599_32625[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32590 === (11))){
var inst_32580 = cljs.core.async.close_BANG_.call(null,ch);
var state_32589__$1 = state_32589;
var statearr_32600_32626 = state_32589__$1;
(statearr_32600_32626[(2)] = inst_32580);

(statearr_32600_32626[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32590 === (9))){
var state_32589__$1 = state_32589;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32601_32627 = state_32589__$1;
(statearr_32601_32627[(1)] = (11));

} else {
var statearr_32602_32628 = state_32589__$1;
(statearr_32602_32628[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32590 === (5))){
var inst_32566 = (state_32589[(7)]);
var state_32589__$1 = state_32589;
var statearr_32603_32629 = state_32589__$1;
(statearr_32603_32629[(2)] = inst_32566);

(statearr_32603_32629[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32590 === (10))){
var inst_32585 = (state_32589[(2)]);
var state_32589__$1 = state_32589;
var statearr_32604_32630 = state_32589__$1;
(statearr_32604_32630[(2)] = inst_32585);

(statearr_32604_32630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32590 === (8))){
var inst_32566 = (state_32589[(7)]);
var inst_32576 = cljs.core.next.call(null,inst_32566);
var inst_32566__$1 = inst_32576;
var state_32589__$1 = (function (){var statearr_32605 = state_32589;
(statearr_32605[(7)] = inst_32566__$1);

return statearr_32605;
})();
var statearr_32606_32631 = state_32589__$1;
(statearr_32606_32631[(2)] = null);

(statearr_32606_32631[(1)] = (2));


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
});})(c__31761__auto__))
;
return ((function (switch__31740__auto__,c__31761__auto__){
return (function() {
var cljs$core$async$state_machine__31741__auto__ = null;
var cljs$core$async$state_machine__31741__auto____0 = (function (){
var statearr_32610 = [null,null,null,null,null,null,null,null];
(statearr_32610[(0)] = cljs$core$async$state_machine__31741__auto__);

(statearr_32610[(1)] = (1));

return statearr_32610;
});
var cljs$core$async$state_machine__31741__auto____1 = (function (state_32589){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_32589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e32611){if((e32611 instanceof Object)){
var ex__31744__auto__ = e32611;
var statearr_32612_32632 = state_32589;
(statearr_32612_32632[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32633 = state_32589;
state_32589 = G__32633;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
cljs$core$async$state_machine__31741__auto__ = function(state_32589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31741__auto____1.call(this,state_32589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31741__auto____0;
cljs$core$async$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31741__auto____1;
return cljs$core$async$state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto__))
})();
var state__31763__auto__ = (function (){var statearr_32613 = f__31762__auto__.call(null);
(statearr_32613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto__);

return statearr_32613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto__))
);

return c__31761__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async32859 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32859 = (function (mult,ch,cs,meta32860){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta32860 = meta32860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32861,meta32860__$1){
var self__ = this;
var _32861__$1 = this;
return (new cljs.core.async.t_cljs$core$async32859(self__.mult,self__.ch,self__.cs,meta32860__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32861){
var self__ = this;
var _32861__$1 = this;
return self__.meta32860;
});})(cs))
;

cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32859.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32860","meta32860",-1881999007,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32859.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32859";

cljs.core.async.t_cljs$core$async32859.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async32859");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32859 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32859(mult__$1,ch__$1,cs__$1,meta32860){
return (new cljs.core.async.t_cljs$core$async32859(mult__$1,ch__$1,cs__$1,meta32860));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32859(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31761__auto___33084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto___33084,cs,m,dchan,dctr,done){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto___33084,cs,m,dchan,dctr,done){
return (function (state_32996){
var state_val_32997 = (state_32996[(1)]);
if((state_val_32997 === (7))){
var inst_32992 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_32998_33085 = state_32996__$1;
(statearr_32998_33085[(2)] = inst_32992);

(statearr_32998_33085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (20))){
var inst_32895 = (state_32996[(7)]);
var inst_32907 = cljs.core.first.call(null,inst_32895);
var inst_32908 = cljs.core.nth.call(null,inst_32907,(0),null);
var inst_32909 = cljs.core.nth.call(null,inst_32907,(1),null);
var state_32996__$1 = (function (){var statearr_32999 = state_32996;
(statearr_32999[(8)] = inst_32908);

return statearr_32999;
})();
if(cljs.core.truth_(inst_32909)){
var statearr_33000_33086 = state_32996__$1;
(statearr_33000_33086[(1)] = (22));

} else {
var statearr_33001_33087 = state_32996__$1;
(statearr_33001_33087[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (27))){
var inst_32864 = (state_32996[(9)]);
var inst_32944 = (state_32996[(10)]);
var inst_32937 = (state_32996[(11)]);
var inst_32939 = (state_32996[(12)]);
var inst_32944__$1 = cljs.core._nth.call(null,inst_32937,inst_32939);
var inst_32945 = cljs.core.async.put_BANG_.call(null,inst_32944__$1,inst_32864,done);
var state_32996__$1 = (function (){var statearr_33002 = state_32996;
(statearr_33002[(10)] = inst_32944__$1);

return statearr_33002;
})();
if(cljs.core.truth_(inst_32945)){
var statearr_33003_33088 = state_32996__$1;
(statearr_33003_33088[(1)] = (30));

} else {
var statearr_33004_33089 = state_32996__$1;
(statearr_33004_33089[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (1))){
var state_32996__$1 = state_32996;
var statearr_33005_33090 = state_32996__$1;
(statearr_33005_33090[(2)] = null);

(statearr_33005_33090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (24))){
var inst_32895 = (state_32996[(7)]);
var inst_32914 = (state_32996[(2)]);
var inst_32915 = cljs.core.next.call(null,inst_32895);
var inst_32873 = inst_32915;
var inst_32874 = null;
var inst_32875 = (0);
var inst_32876 = (0);
var state_32996__$1 = (function (){var statearr_33006 = state_32996;
(statearr_33006[(13)] = inst_32876);

(statearr_33006[(14)] = inst_32914);

(statearr_33006[(15)] = inst_32874);

(statearr_33006[(16)] = inst_32875);

(statearr_33006[(17)] = inst_32873);

return statearr_33006;
})();
var statearr_33007_33091 = state_32996__$1;
(statearr_33007_33091[(2)] = null);

(statearr_33007_33091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (39))){
var state_32996__$1 = state_32996;
var statearr_33011_33092 = state_32996__$1;
(statearr_33011_33092[(2)] = null);

(statearr_33011_33092[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (4))){
var inst_32864 = (state_32996[(9)]);
var inst_32864__$1 = (state_32996[(2)]);
var inst_32865 = (inst_32864__$1 == null);
var state_32996__$1 = (function (){var statearr_33012 = state_32996;
(statearr_33012[(9)] = inst_32864__$1);

return statearr_33012;
})();
if(cljs.core.truth_(inst_32865)){
var statearr_33013_33093 = state_32996__$1;
(statearr_33013_33093[(1)] = (5));

} else {
var statearr_33014_33094 = state_32996__$1;
(statearr_33014_33094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (15))){
var inst_32876 = (state_32996[(13)]);
var inst_32874 = (state_32996[(15)]);
var inst_32875 = (state_32996[(16)]);
var inst_32873 = (state_32996[(17)]);
var inst_32891 = (state_32996[(2)]);
var inst_32892 = (inst_32876 + (1));
var tmp33008 = inst_32874;
var tmp33009 = inst_32875;
var tmp33010 = inst_32873;
var inst_32873__$1 = tmp33010;
var inst_32874__$1 = tmp33008;
var inst_32875__$1 = tmp33009;
var inst_32876__$1 = inst_32892;
var state_32996__$1 = (function (){var statearr_33015 = state_32996;
(statearr_33015[(13)] = inst_32876__$1);

(statearr_33015[(15)] = inst_32874__$1);

(statearr_33015[(16)] = inst_32875__$1);

(statearr_33015[(17)] = inst_32873__$1);

(statearr_33015[(18)] = inst_32891);

return statearr_33015;
})();
var statearr_33016_33095 = state_32996__$1;
(statearr_33016_33095[(2)] = null);

(statearr_33016_33095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (21))){
var inst_32918 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_33020_33096 = state_32996__$1;
(statearr_33020_33096[(2)] = inst_32918);

(statearr_33020_33096[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (31))){
var inst_32944 = (state_32996[(10)]);
var inst_32948 = done.call(null,null);
var inst_32949 = cljs.core.async.untap_STAR_.call(null,m,inst_32944);
var state_32996__$1 = (function (){var statearr_33021 = state_32996;
(statearr_33021[(19)] = inst_32948);

return statearr_33021;
})();
var statearr_33022_33097 = state_32996__$1;
(statearr_33022_33097[(2)] = inst_32949);

(statearr_33022_33097[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (32))){
var inst_32938 = (state_32996[(20)]);
var inst_32936 = (state_32996[(21)]);
var inst_32937 = (state_32996[(11)]);
var inst_32939 = (state_32996[(12)]);
var inst_32951 = (state_32996[(2)]);
var inst_32952 = (inst_32939 + (1));
var tmp33017 = inst_32938;
var tmp33018 = inst_32936;
var tmp33019 = inst_32937;
var inst_32936__$1 = tmp33018;
var inst_32937__$1 = tmp33019;
var inst_32938__$1 = tmp33017;
var inst_32939__$1 = inst_32952;
var state_32996__$1 = (function (){var statearr_33023 = state_32996;
(statearr_33023[(20)] = inst_32938__$1);

(statearr_33023[(22)] = inst_32951);

(statearr_33023[(21)] = inst_32936__$1);

(statearr_33023[(11)] = inst_32937__$1);

(statearr_33023[(12)] = inst_32939__$1);

return statearr_33023;
})();
var statearr_33024_33098 = state_32996__$1;
(statearr_33024_33098[(2)] = null);

(statearr_33024_33098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (40))){
var inst_32964 = (state_32996[(23)]);
var inst_32968 = done.call(null,null);
var inst_32969 = cljs.core.async.untap_STAR_.call(null,m,inst_32964);
var state_32996__$1 = (function (){var statearr_33025 = state_32996;
(statearr_33025[(24)] = inst_32968);

return statearr_33025;
})();
var statearr_33026_33099 = state_32996__$1;
(statearr_33026_33099[(2)] = inst_32969);

(statearr_33026_33099[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (33))){
var inst_32955 = (state_32996[(25)]);
var inst_32957 = cljs.core.chunked_seq_QMARK_.call(null,inst_32955);
var state_32996__$1 = state_32996;
if(inst_32957){
var statearr_33027_33100 = state_32996__$1;
(statearr_33027_33100[(1)] = (36));

} else {
var statearr_33028_33101 = state_32996__$1;
(statearr_33028_33101[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (13))){
var inst_32885 = (state_32996[(26)]);
var inst_32888 = cljs.core.async.close_BANG_.call(null,inst_32885);
var state_32996__$1 = state_32996;
var statearr_33029_33102 = state_32996__$1;
(statearr_33029_33102[(2)] = inst_32888);

(statearr_33029_33102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (22))){
var inst_32908 = (state_32996[(8)]);
var inst_32911 = cljs.core.async.close_BANG_.call(null,inst_32908);
var state_32996__$1 = state_32996;
var statearr_33030_33103 = state_32996__$1;
(statearr_33030_33103[(2)] = inst_32911);

(statearr_33030_33103[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (36))){
var inst_32955 = (state_32996[(25)]);
var inst_32959 = cljs.core.chunk_first.call(null,inst_32955);
var inst_32960 = cljs.core.chunk_rest.call(null,inst_32955);
var inst_32961 = cljs.core.count.call(null,inst_32959);
var inst_32936 = inst_32960;
var inst_32937 = inst_32959;
var inst_32938 = inst_32961;
var inst_32939 = (0);
var state_32996__$1 = (function (){var statearr_33031 = state_32996;
(statearr_33031[(20)] = inst_32938);

(statearr_33031[(21)] = inst_32936);

(statearr_33031[(11)] = inst_32937);

(statearr_33031[(12)] = inst_32939);

return statearr_33031;
})();
var statearr_33032_33104 = state_32996__$1;
(statearr_33032_33104[(2)] = null);

(statearr_33032_33104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (41))){
var inst_32955 = (state_32996[(25)]);
var inst_32971 = (state_32996[(2)]);
var inst_32972 = cljs.core.next.call(null,inst_32955);
var inst_32936 = inst_32972;
var inst_32937 = null;
var inst_32938 = (0);
var inst_32939 = (0);
var state_32996__$1 = (function (){var statearr_33033 = state_32996;
(statearr_33033[(20)] = inst_32938);

(statearr_33033[(21)] = inst_32936);

(statearr_33033[(27)] = inst_32971);

(statearr_33033[(11)] = inst_32937);

(statearr_33033[(12)] = inst_32939);

return statearr_33033;
})();
var statearr_33034_33105 = state_32996__$1;
(statearr_33034_33105[(2)] = null);

(statearr_33034_33105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (43))){
var state_32996__$1 = state_32996;
var statearr_33035_33106 = state_32996__$1;
(statearr_33035_33106[(2)] = null);

(statearr_33035_33106[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (29))){
var inst_32980 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_33036_33107 = state_32996__$1;
(statearr_33036_33107[(2)] = inst_32980);

(statearr_33036_33107[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (44))){
var inst_32989 = (state_32996[(2)]);
var state_32996__$1 = (function (){var statearr_33037 = state_32996;
(statearr_33037[(28)] = inst_32989);

return statearr_33037;
})();
var statearr_33038_33108 = state_32996__$1;
(statearr_33038_33108[(2)] = null);

(statearr_33038_33108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (6))){
var inst_32928 = (state_32996[(29)]);
var inst_32927 = cljs.core.deref.call(null,cs);
var inst_32928__$1 = cljs.core.keys.call(null,inst_32927);
var inst_32929 = cljs.core.count.call(null,inst_32928__$1);
var inst_32930 = cljs.core.reset_BANG_.call(null,dctr,inst_32929);
var inst_32935 = cljs.core.seq.call(null,inst_32928__$1);
var inst_32936 = inst_32935;
var inst_32937 = null;
var inst_32938 = (0);
var inst_32939 = (0);
var state_32996__$1 = (function (){var statearr_33039 = state_32996;
(statearr_33039[(20)] = inst_32938);

(statearr_33039[(30)] = inst_32930);

(statearr_33039[(21)] = inst_32936);

(statearr_33039[(29)] = inst_32928__$1);

(statearr_33039[(11)] = inst_32937);

(statearr_33039[(12)] = inst_32939);

return statearr_33039;
})();
var statearr_33040_33109 = state_32996__$1;
(statearr_33040_33109[(2)] = null);

(statearr_33040_33109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (28))){
var inst_32936 = (state_32996[(21)]);
var inst_32955 = (state_32996[(25)]);
var inst_32955__$1 = cljs.core.seq.call(null,inst_32936);
var state_32996__$1 = (function (){var statearr_33041 = state_32996;
(statearr_33041[(25)] = inst_32955__$1);

return statearr_33041;
})();
if(inst_32955__$1){
var statearr_33042_33110 = state_32996__$1;
(statearr_33042_33110[(1)] = (33));

} else {
var statearr_33043_33111 = state_32996__$1;
(statearr_33043_33111[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (25))){
var inst_32938 = (state_32996[(20)]);
var inst_32939 = (state_32996[(12)]);
var inst_32941 = (inst_32939 < inst_32938);
var inst_32942 = inst_32941;
var state_32996__$1 = state_32996;
if(cljs.core.truth_(inst_32942)){
var statearr_33044_33112 = state_32996__$1;
(statearr_33044_33112[(1)] = (27));

} else {
var statearr_33045_33113 = state_32996__$1;
(statearr_33045_33113[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (34))){
var state_32996__$1 = state_32996;
var statearr_33046_33114 = state_32996__$1;
(statearr_33046_33114[(2)] = null);

(statearr_33046_33114[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (17))){
var state_32996__$1 = state_32996;
var statearr_33047_33115 = state_32996__$1;
(statearr_33047_33115[(2)] = null);

(statearr_33047_33115[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (3))){
var inst_32994 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32996__$1,inst_32994);
} else {
if((state_val_32997 === (12))){
var inst_32923 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_33048_33116 = state_32996__$1;
(statearr_33048_33116[(2)] = inst_32923);

(statearr_33048_33116[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (2))){
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32996__$1,(4),ch);
} else {
if((state_val_32997 === (23))){
var state_32996__$1 = state_32996;
var statearr_33049_33117 = state_32996__$1;
(statearr_33049_33117[(2)] = null);

(statearr_33049_33117[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (35))){
var inst_32978 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_33050_33118 = state_32996__$1;
(statearr_33050_33118[(2)] = inst_32978);

(statearr_33050_33118[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (19))){
var inst_32895 = (state_32996[(7)]);
var inst_32899 = cljs.core.chunk_first.call(null,inst_32895);
var inst_32900 = cljs.core.chunk_rest.call(null,inst_32895);
var inst_32901 = cljs.core.count.call(null,inst_32899);
var inst_32873 = inst_32900;
var inst_32874 = inst_32899;
var inst_32875 = inst_32901;
var inst_32876 = (0);
var state_32996__$1 = (function (){var statearr_33051 = state_32996;
(statearr_33051[(13)] = inst_32876);

(statearr_33051[(15)] = inst_32874);

(statearr_33051[(16)] = inst_32875);

(statearr_33051[(17)] = inst_32873);

return statearr_33051;
})();
var statearr_33052_33119 = state_32996__$1;
(statearr_33052_33119[(2)] = null);

(statearr_33052_33119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (11))){
var inst_32873 = (state_32996[(17)]);
var inst_32895 = (state_32996[(7)]);
var inst_32895__$1 = cljs.core.seq.call(null,inst_32873);
var state_32996__$1 = (function (){var statearr_33053 = state_32996;
(statearr_33053[(7)] = inst_32895__$1);

return statearr_33053;
})();
if(inst_32895__$1){
var statearr_33054_33120 = state_32996__$1;
(statearr_33054_33120[(1)] = (16));

} else {
var statearr_33055_33121 = state_32996__$1;
(statearr_33055_33121[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (9))){
var inst_32925 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_33056_33122 = state_32996__$1;
(statearr_33056_33122[(2)] = inst_32925);

(statearr_33056_33122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (5))){
var inst_32871 = cljs.core.deref.call(null,cs);
var inst_32872 = cljs.core.seq.call(null,inst_32871);
var inst_32873 = inst_32872;
var inst_32874 = null;
var inst_32875 = (0);
var inst_32876 = (0);
var state_32996__$1 = (function (){var statearr_33057 = state_32996;
(statearr_33057[(13)] = inst_32876);

(statearr_33057[(15)] = inst_32874);

(statearr_33057[(16)] = inst_32875);

(statearr_33057[(17)] = inst_32873);

return statearr_33057;
})();
var statearr_33058_33123 = state_32996__$1;
(statearr_33058_33123[(2)] = null);

(statearr_33058_33123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (14))){
var state_32996__$1 = state_32996;
var statearr_33059_33124 = state_32996__$1;
(statearr_33059_33124[(2)] = null);

(statearr_33059_33124[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (45))){
var inst_32986 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_33060_33125 = state_32996__$1;
(statearr_33060_33125[(2)] = inst_32986);

(statearr_33060_33125[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (26))){
var inst_32928 = (state_32996[(29)]);
var inst_32982 = (state_32996[(2)]);
var inst_32983 = cljs.core.seq.call(null,inst_32928);
var state_32996__$1 = (function (){var statearr_33061 = state_32996;
(statearr_33061[(31)] = inst_32982);

return statearr_33061;
})();
if(inst_32983){
var statearr_33062_33126 = state_32996__$1;
(statearr_33062_33126[(1)] = (42));

} else {
var statearr_33063_33127 = state_32996__$1;
(statearr_33063_33127[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (16))){
var inst_32895 = (state_32996[(7)]);
var inst_32897 = cljs.core.chunked_seq_QMARK_.call(null,inst_32895);
var state_32996__$1 = state_32996;
if(inst_32897){
var statearr_33064_33128 = state_32996__$1;
(statearr_33064_33128[(1)] = (19));

} else {
var statearr_33065_33129 = state_32996__$1;
(statearr_33065_33129[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (38))){
var inst_32975 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_33066_33130 = state_32996__$1;
(statearr_33066_33130[(2)] = inst_32975);

(statearr_33066_33130[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (30))){
var state_32996__$1 = state_32996;
var statearr_33067_33131 = state_32996__$1;
(statearr_33067_33131[(2)] = null);

(statearr_33067_33131[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (10))){
var inst_32876 = (state_32996[(13)]);
var inst_32874 = (state_32996[(15)]);
var inst_32884 = cljs.core._nth.call(null,inst_32874,inst_32876);
var inst_32885 = cljs.core.nth.call(null,inst_32884,(0),null);
var inst_32886 = cljs.core.nth.call(null,inst_32884,(1),null);
var state_32996__$1 = (function (){var statearr_33068 = state_32996;
(statearr_33068[(26)] = inst_32885);

return statearr_33068;
})();
if(cljs.core.truth_(inst_32886)){
var statearr_33069_33132 = state_32996__$1;
(statearr_33069_33132[(1)] = (13));

} else {
var statearr_33070_33133 = state_32996__$1;
(statearr_33070_33133[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (18))){
var inst_32921 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_33071_33134 = state_32996__$1;
(statearr_33071_33134[(2)] = inst_32921);

(statearr_33071_33134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (42))){
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32996__$1,(45),dchan);
} else {
if((state_val_32997 === (37))){
var inst_32964 = (state_32996[(23)]);
var inst_32864 = (state_32996[(9)]);
var inst_32955 = (state_32996[(25)]);
var inst_32964__$1 = cljs.core.first.call(null,inst_32955);
var inst_32965 = cljs.core.async.put_BANG_.call(null,inst_32964__$1,inst_32864,done);
var state_32996__$1 = (function (){var statearr_33072 = state_32996;
(statearr_33072[(23)] = inst_32964__$1);

return statearr_33072;
})();
if(cljs.core.truth_(inst_32965)){
var statearr_33073_33135 = state_32996__$1;
(statearr_33073_33135[(1)] = (39));

} else {
var statearr_33074_33136 = state_32996__$1;
(statearr_33074_33136[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (8))){
var inst_32876 = (state_32996[(13)]);
var inst_32875 = (state_32996[(16)]);
var inst_32878 = (inst_32876 < inst_32875);
var inst_32879 = inst_32878;
var state_32996__$1 = state_32996;
if(cljs.core.truth_(inst_32879)){
var statearr_33075_33137 = state_32996__$1;
(statearr_33075_33137[(1)] = (10));

} else {
var statearr_33076_33138 = state_32996__$1;
(statearr_33076_33138[(1)] = (11));

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
});})(c__31761__auto___33084,cs,m,dchan,dctr,done))
;
return ((function (switch__31740__auto__,c__31761__auto___33084,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31741__auto__ = null;
var cljs$core$async$mult_$_state_machine__31741__auto____0 = (function (){
var statearr_33080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33080[(0)] = cljs$core$async$mult_$_state_machine__31741__auto__);

(statearr_33080[(1)] = (1));

return statearr_33080;
});
var cljs$core$async$mult_$_state_machine__31741__auto____1 = (function (state_32996){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_32996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e33081){if((e33081 instanceof Object)){
var ex__31744__auto__ = e33081;
var statearr_33082_33139 = state_32996;
(statearr_33082_33139[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33140 = state_32996;
state_32996 = G__33140;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31741__auto__ = function(state_32996){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31741__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31741__auto____1.call(this,state_32996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31741__auto____0;
cljs$core$async$mult_$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31741__auto____1;
return cljs$core$async$mult_$_state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto___33084,cs,m,dchan,dctr,done))
})();
var state__31763__auto__ = (function (){var statearr_33083 = f__31762__auto__.call(null);
(statearr_33083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto___33084);

return statearr_33083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto___33084,cs,m,dchan,dctr,done))
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
var args33141 = [];
var len__26121__auto___33144 = arguments.length;
var i__26122__auto___33145 = (0);
while(true){
if((i__26122__auto___33145 < len__26121__auto___33144)){
args33141.push((arguments[i__26122__auto___33145]));

var G__33146 = (i__26122__auto___33145 + (1));
i__26122__auto___33145 = G__33146;
continue;
} else {
}
break;
}

var G__33143 = args33141.length;
switch (G__33143) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33141.length)].join('')));

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
var len__26121__auto___33158 = arguments.length;
var i__26122__auto___33159 = (0);
while(true){
if((i__26122__auto___33159 < len__26121__auto___33158)){
args__26128__auto__.push((arguments[i__26122__auto___33159]));

var G__33160 = (i__26122__auto___33159 + (1));
i__26122__auto___33159 = G__33160;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((3) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26129__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33152){
var map__33153 = p__33152;
var map__33153__$1 = ((((!((map__33153 == null)))?((((map__33153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33153):map__33153);
var opts = map__33153__$1;
var statearr_33155_33161 = state;
(statearr_33155_33161[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__33153,map__33153__$1,opts){
return (function (val){
var statearr_33156_33162 = state;
(statearr_33156_33162[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33153,map__33153__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_33157_33163 = state;
(statearr_33157_33163[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33148){
var G__33149 = cljs.core.first.call(null,seq33148);
var seq33148__$1 = cljs.core.next.call(null,seq33148);
var G__33150 = cljs.core.first.call(null,seq33148__$1);
var seq33148__$2 = cljs.core.next.call(null,seq33148__$1);
var G__33151 = cljs.core.first.call(null,seq33148__$2);
var seq33148__$3 = cljs.core.next.call(null,seq33148__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33149,G__33150,G__33151,seq33148__$3);
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
if(typeof cljs.core.async.t_cljs$core$async33329 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33329 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33330){
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
this.meta33330 = meta33330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33331,meta33330__$1){
var self__ = this;
var _33331__$1 = this;
return (new cljs.core.async.t_cljs$core$async33329(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33330__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33329.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33331){
var self__ = this;
var _33331__$1 = this;
return self__.meta33330;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33329.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33329.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33329.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async33329.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33329.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33329.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33329.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33329.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33329.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33330","meta33330",-151264032,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33329.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33329";

cljs.core.async.t_cljs$core$async33329.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async33329");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33329 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33329(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33330){
return (new cljs.core.async.t_cljs$core$async33329(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33330));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33329(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31761__auto___33494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto___33494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto___33494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33431){
var state_val_33432 = (state_33431[(1)]);
if((state_val_33432 === (7))){
var inst_33347 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33433_33495 = state_33431__$1;
(statearr_33433_33495[(2)] = inst_33347);

(statearr_33433_33495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (20))){
var inst_33359 = (state_33431[(7)]);
var state_33431__$1 = state_33431;
var statearr_33434_33496 = state_33431__$1;
(statearr_33434_33496[(2)] = inst_33359);

(statearr_33434_33496[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (27))){
var state_33431__$1 = state_33431;
var statearr_33435_33497 = state_33431__$1;
(statearr_33435_33497[(2)] = null);

(statearr_33435_33497[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (1))){
var inst_33335 = (state_33431[(8)]);
var inst_33335__$1 = calc_state.call(null);
var inst_33337 = (inst_33335__$1 == null);
var inst_33338 = cljs.core.not.call(null,inst_33337);
var state_33431__$1 = (function (){var statearr_33436 = state_33431;
(statearr_33436[(8)] = inst_33335__$1);

return statearr_33436;
})();
if(inst_33338){
var statearr_33437_33498 = state_33431__$1;
(statearr_33437_33498[(1)] = (2));

} else {
var statearr_33438_33499 = state_33431__$1;
(statearr_33438_33499[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (24))){
var inst_33391 = (state_33431[(9)]);
var inst_33382 = (state_33431[(10)]);
var inst_33405 = (state_33431[(11)]);
var inst_33405__$1 = inst_33382.call(null,inst_33391);
var state_33431__$1 = (function (){var statearr_33439 = state_33431;
(statearr_33439[(11)] = inst_33405__$1);

return statearr_33439;
})();
if(cljs.core.truth_(inst_33405__$1)){
var statearr_33440_33500 = state_33431__$1;
(statearr_33440_33500[(1)] = (29));

} else {
var statearr_33441_33501 = state_33431__$1;
(statearr_33441_33501[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (4))){
var inst_33350 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
if(cljs.core.truth_(inst_33350)){
var statearr_33442_33502 = state_33431__$1;
(statearr_33442_33502[(1)] = (8));

} else {
var statearr_33443_33503 = state_33431__$1;
(statearr_33443_33503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (15))){
var inst_33376 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
if(cljs.core.truth_(inst_33376)){
var statearr_33444_33504 = state_33431__$1;
(statearr_33444_33504[(1)] = (19));

} else {
var statearr_33445_33505 = state_33431__$1;
(statearr_33445_33505[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (21))){
var inst_33381 = (state_33431[(12)]);
var inst_33381__$1 = (state_33431[(2)]);
var inst_33382 = cljs.core.get.call(null,inst_33381__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33383 = cljs.core.get.call(null,inst_33381__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33384 = cljs.core.get.call(null,inst_33381__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33431__$1 = (function (){var statearr_33446 = state_33431;
(statearr_33446[(13)] = inst_33383);

(statearr_33446[(10)] = inst_33382);

(statearr_33446[(12)] = inst_33381__$1);

return statearr_33446;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33431__$1,(22),inst_33384);
} else {
if((state_val_33432 === (31))){
var inst_33413 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
if(cljs.core.truth_(inst_33413)){
var statearr_33447_33506 = state_33431__$1;
(statearr_33447_33506[(1)] = (32));

} else {
var statearr_33448_33507 = state_33431__$1;
(statearr_33448_33507[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (32))){
var inst_33390 = (state_33431[(14)]);
var state_33431__$1 = state_33431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33431__$1,(35),out,inst_33390);
} else {
if((state_val_33432 === (33))){
var inst_33381 = (state_33431[(12)]);
var inst_33359 = inst_33381;
var state_33431__$1 = (function (){var statearr_33449 = state_33431;
(statearr_33449[(7)] = inst_33359);

return statearr_33449;
})();
var statearr_33450_33508 = state_33431__$1;
(statearr_33450_33508[(2)] = null);

(statearr_33450_33508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (13))){
var inst_33359 = (state_33431[(7)]);
var inst_33366 = inst_33359.cljs$lang$protocol_mask$partition0$;
var inst_33367 = (inst_33366 & (64));
var inst_33368 = inst_33359.cljs$core$ISeq$;
var inst_33369 = (inst_33367) || (inst_33368);
var state_33431__$1 = state_33431;
if(cljs.core.truth_(inst_33369)){
var statearr_33451_33509 = state_33431__$1;
(statearr_33451_33509[(1)] = (16));

} else {
var statearr_33452_33510 = state_33431__$1;
(statearr_33452_33510[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (22))){
var inst_33391 = (state_33431[(9)]);
var inst_33390 = (state_33431[(14)]);
var inst_33389 = (state_33431[(2)]);
var inst_33390__$1 = cljs.core.nth.call(null,inst_33389,(0),null);
var inst_33391__$1 = cljs.core.nth.call(null,inst_33389,(1),null);
var inst_33392 = (inst_33390__$1 == null);
var inst_33393 = cljs.core._EQ_.call(null,inst_33391__$1,change);
var inst_33394 = (inst_33392) || (inst_33393);
var state_33431__$1 = (function (){var statearr_33453 = state_33431;
(statearr_33453[(9)] = inst_33391__$1);

(statearr_33453[(14)] = inst_33390__$1);

return statearr_33453;
})();
if(cljs.core.truth_(inst_33394)){
var statearr_33454_33511 = state_33431__$1;
(statearr_33454_33511[(1)] = (23));

} else {
var statearr_33455_33512 = state_33431__$1;
(statearr_33455_33512[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (36))){
var inst_33381 = (state_33431[(12)]);
var inst_33359 = inst_33381;
var state_33431__$1 = (function (){var statearr_33456 = state_33431;
(statearr_33456[(7)] = inst_33359);

return statearr_33456;
})();
var statearr_33457_33513 = state_33431__$1;
(statearr_33457_33513[(2)] = null);

(statearr_33457_33513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (29))){
var inst_33405 = (state_33431[(11)]);
var state_33431__$1 = state_33431;
var statearr_33458_33514 = state_33431__$1;
(statearr_33458_33514[(2)] = inst_33405);

(statearr_33458_33514[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (6))){
var state_33431__$1 = state_33431;
var statearr_33459_33515 = state_33431__$1;
(statearr_33459_33515[(2)] = false);

(statearr_33459_33515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (28))){
var inst_33401 = (state_33431[(2)]);
var inst_33402 = calc_state.call(null);
var inst_33359 = inst_33402;
var state_33431__$1 = (function (){var statearr_33460 = state_33431;
(statearr_33460[(15)] = inst_33401);

(statearr_33460[(7)] = inst_33359);

return statearr_33460;
})();
var statearr_33461_33516 = state_33431__$1;
(statearr_33461_33516[(2)] = null);

(statearr_33461_33516[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (25))){
var inst_33427 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33462_33517 = state_33431__$1;
(statearr_33462_33517[(2)] = inst_33427);

(statearr_33462_33517[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (34))){
var inst_33425 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33463_33518 = state_33431__$1;
(statearr_33463_33518[(2)] = inst_33425);

(statearr_33463_33518[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (17))){
var state_33431__$1 = state_33431;
var statearr_33464_33519 = state_33431__$1;
(statearr_33464_33519[(2)] = false);

(statearr_33464_33519[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (3))){
var state_33431__$1 = state_33431;
var statearr_33465_33520 = state_33431__$1;
(statearr_33465_33520[(2)] = false);

(statearr_33465_33520[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (12))){
var inst_33429 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33431__$1,inst_33429);
} else {
if((state_val_33432 === (2))){
var inst_33335 = (state_33431[(8)]);
var inst_33340 = inst_33335.cljs$lang$protocol_mask$partition0$;
var inst_33341 = (inst_33340 & (64));
var inst_33342 = inst_33335.cljs$core$ISeq$;
var inst_33343 = (inst_33341) || (inst_33342);
var state_33431__$1 = state_33431;
if(cljs.core.truth_(inst_33343)){
var statearr_33466_33521 = state_33431__$1;
(statearr_33466_33521[(1)] = (5));

} else {
var statearr_33467_33522 = state_33431__$1;
(statearr_33467_33522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (23))){
var inst_33390 = (state_33431[(14)]);
var inst_33396 = (inst_33390 == null);
var state_33431__$1 = state_33431;
if(cljs.core.truth_(inst_33396)){
var statearr_33468_33523 = state_33431__$1;
(statearr_33468_33523[(1)] = (26));

} else {
var statearr_33469_33524 = state_33431__$1;
(statearr_33469_33524[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (35))){
var inst_33416 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
if(cljs.core.truth_(inst_33416)){
var statearr_33470_33525 = state_33431__$1;
(statearr_33470_33525[(1)] = (36));

} else {
var statearr_33471_33526 = state_33431__$1;
(statearr_33471_33526[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (19))){
var inst_33359 = (state_33431[(7)]);
var inst_33378 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33359);
var state_33431__$1 = state_33431;
var statearr_33472_33527 = state_33431__$1;
(statearr_33472_33527[(2)] = inst_33378);

(statearr_33472_33527[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (11))){
var inst_33359 = (state_33431[(7)]);
var inst_33363 = (inst_33359 == null);
var inst_33364 = cljs.core.not.call(null,inst_33363);
var state_33431__$1 = state_33431;
if(inst_33364){
var statearr_33473_33528 = state_33431__$1;
(statearr_33473_33528[(1)] = (13));

} else {
var statearr_33474_33529 = state_33431__$1;
(statearr_33474_33529[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (9))){
var inst_33335 = (state_33431[(8)]);
var state_33431__$1 = state_33431;
var statearr_33475_33530 = state_33431__$1;
(statearr_33475_33530[(2)] = inst_33335);

(statearr_33475_33530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (5))){
var state_33431__$1 = state_33431;
var statearr_33476_33531 = state_33431__$1;
(statearr_33476_33531[(2)] = true);

(statearr_33476_33531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (14))){
var state_33431__$1 = state_33431;
var statearr_33477_33532 = state_33431__$1;
(statearr_33477_33532[(2)] = false);

(statearr_33477_33532[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (26))){
var inst_33391 = (state_33431[(9)]);
var inst_33398 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33391);
var state_33431__$1 = state_33431;
var statearr_33478_33533 = state_33431__$1;
(statearr_33478_33533[(2)] = inst_33398);

(statearr_33478_33533[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (16))){
var state_33431__$1 = state_33431;
var statearr_33479_33534 = state_33431__$1;
(statearr_33479_33534[(2)] = true);

(statearr_33479_33534[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (38))){
var inst_33421 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33480_33535 = state_33431__$1;
(statearr_33480_33535[(2)] = inst_33421);

(statearr_33480_33535[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (30))){
var inst_33383 = (state_33431[(13)]);
var inst_33391 = (state_33431[(9)]);
var inst_33382 = (state_33431[(10)]);
var inst_33408 = cljs.core.empty_QMARK_.call(null,inst_33382);
var inst_33409 = inst_33383.call(null,inst_33391);
var inst_33410 = cljs.core.not.call(null,inst_33409);
var inst_33411 = (inst_33408) && (inst_33410);
var state_33431__$1 = state_33431;
var statearr_33481_33536 = state_33431__$1;
(statearr_33481_33536[(2)] = inst_33411);

(statearr_33481_33536[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (10))){
var inst_33335 = (state_33431[(8)]);
var inst_33355 = (state_33431[(2)]);
var inst_33356 = cljs.core.get.call(null,inst_33355,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33357 = cljs.core.get.call(null,inst_33355,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33358 = cljs.core.get.call(null,inst_33355,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33359 = inst_33335;
var state_33431__$1 = (function (){var statearr_33482 = state_33431;
(statearr_33482[(16)] = inst_33356);

(statearr_33482[(7)] = inst_33359);

(statearr_33482[(17)] = inst_33358);

(statearr_33482[(18)] = inst_33357);

return statearr_33482;
})();
var statearr_33483_33537 = state_33431__$1;
(statearr_33483_33537[(2)] = null);

(statearr_33483_33537[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (18))){
var inst_33373 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33484_33538 = state_33431__$1;
(statearr_33484_33538[(2)] = inst_33373);

(statearr_33484_33538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (37))){
var state_33431__$1 = state_33431;
var statearr_33485_33539 = state_33431__$1;
(statearr_33485_33539[(2)] = null);

(statearr_33485_33539[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (8))){
var inst_33335 = (state_33431[(8)]);
var inst_33352 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33335);
var state_33431__$1 = state_33431;
var statearr_33486_33540 = state_33431__$1;
(statearr_33486_33540[(2)] = inst_33352);

(statearr_33486_33540[(1)] = (10));


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
});})(c__31761__auto___33494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31740__auto__,c__31761__auto___33494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31741__auto__ = null;
var cljs$core$async$mix_$_state_machine__31741__auto____0 = (function (){
var statearr_33490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33490[(0)] = cljs$core$async$mix_$_state_machine__31741__auto__);

(statearr_33490[(1)] = (1));

return statearr_33490;
});
var cljs$core$async$mix_$_state_machine__31741__auto____1 = (function (state_33431){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_33431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e33491){if((e33491 instanceof Object)){
var ex__31744__auto__ = e33491;
var statearr_33492_33541 = state_33431;
(statearr_33492_33541[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33542 = state_33431;
state_33431 = G__33542;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31741__auto__ = function(state_33431){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31741__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31741__auto____1.call(this,state_33431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31741__auto____0;
cljs$core$async$mix_$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31741__auto____1;
return cljs$core$async$mix_$_state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto___33494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31763__auto__ = (function (){var statearr_33493 = f__31762__auto__.call(null);
(statearr_33493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto___33494);

return statearr_33493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto___33494,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args33543 = [];
var len__26121__auto___33546 = arguments.length;
var i__26122__auto___33547 = (0);
while(true){
if((i__26122__auto___33547 < len__26121__auto___33546)){
args33543.push((arguments[i__26122__auto___33547]));

var G__33548 = (i__26122__auto___33547 + (1));
i__26122__auto___33547 = G__33548;
continue;
} else {
}
break;
}

var G__33545 = args33543.length;
switch (G__33545) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33543.length)].join('')));

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
var args33551 = [];
var len__26121__auto___33676 = arguments.length;
var i__26122__auto___33677 = (0);
while(true){
if((i__26122__auto___33677 < len__26121__auto___33676)){
args33551.push((arguments[i__26122__auto___33677]));

var G__33678 = (i__26122__auto___33677 + (1));
i__26122__auto___33677 = G__33678;
continue;
} else {
}
break;
}

var G__33553 = args33551.length;
switch (G__33553) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33551.length)].join('')));

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
return (function (p1__33550_SHARP_){
if(cljs.core.truth_(p1__33550_SHARP_.call(null,topic))){
return p1__33550_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33550_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25046__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33554 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33554 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33555){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33555 = meta33555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33556,meta33555__$1){
var self__ = this;
var _33556__$1 = this;
return (new cljs.core.async.t_cljs$core$async33554(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33555__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33554.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33556){
var self__ = this;
var _33556__$1 = this;
return self__.meta33555;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33554.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33554.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33554.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async33554.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33554.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33554.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33554.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33554.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33555","meta33555",1637923777,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33554.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33554";

cljs.core.async.t_cljs$core$async33554.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async33554");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33554 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33554(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33555){
return (new cljs.core.async.t_cljs$core$async33554(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33555));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33554(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31761__auto___33680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto___33680,mults,ensure_mult,p){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto___33680,mults,ensure_mult,p){
return (function (state_33628){
var state_val_33629 = (state_33628[(1)]);
if((state_val_33629 === (7))){
var inst_33624 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
var statearr_33630_33681 = state_33628__$1;
(statearr_33630_33681[(2)] = inst_33624);

(statearr_33630_33681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (20))){
var state_33628__$1 = state_33628;
var statearr_33631_33682 = state_33628__$1;
(statearr_33631_33682[(2)] = null);

(statearr_33631_33682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (1))){
var state_33628__$1 = state_33628;
var statearr_33632_33683 = state_33628__$1;
(statearr_33632_33683[(2)] = null);

(statearr_33632_33683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (24))){
var inst_33607 = (state_33628[(7)]);
var inst_33616 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33607);
var state_33628__$1 = state_33628;
var statearr_33633_33684 = state_33628__$1;
(statearr_33633_33684[(2)] = inst_33616);

(statearr_33633_33684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (4))){
var inst_33559 = (state_33628[(8)]);
var inst_33559__$1 = (state_33628[(2)]);
var inst_33560 = (inst_33559__$1 == null);
var state_33628__$1 = (function (){var statearr_33634 = state_33628;
(statearr_33634[(8)] = inst_33559__$1);

return statearr_33634;
})();
if(cljs.core.truth_(inst_33560)){
var statearr_33635_33685 = state_33628__$1;
(statearr_33635_33685[(1)] = (5));

} else {
var statearr_33636_33686 = state_33628__$1;
(statearr_33636_33686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (15))){
var inst_33601 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
var statearr_33637_33687 = state_33628__$1;
(statearr_33637_33687[(2)] = inst_33601);

(statearr_33637_33687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (21))){
var inst_33621 = (state_33628[(2)]);
var state_33628__$1 = (function (){var statearr_33638 = state_33628;
(statearr_33638[(9)] = inst_33621);

return statearr_33638;
})();
var statearr_33639_33688 = state_33628__$1;
(statearr_33639_33688[(2)] = null);

(statearr_33639_33688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (13))){
var inst_33583 = (state_33628[(10)]);
var inst_33585 = cljs.core.chunked_seq_QMARK_.call(null,inst_33583);
var state_33628__$1 = state_33628;
if(inst_33585){
var statearr_33640_33689 = state_33628__$1;
(statearr_33640_33689[(1)] = (16));

} else {
var statearr_33641_33690 = state_33628__$1;
(statearr_33641_33690[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (22))){
var inst_33613 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
if(cljs.core.truth_(inst_33613)){
var statearr_33642_33691 = state_33628__$1;
(statearr_33642_33691[(1)] = (23));

} else {
var statearr_33643_33692 = state_33628__$1;
(statearr_33643_33692[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (6))){
var inst_33609 = (state_33628[(11)]);
var inst_33559 = (state_33628[(8)]);
var inst_33607 = (state_33628[(7)]);
var inst_33607__$1 = topic_fn.call(null,inst_33559);
var inst_33608 = cljs.core.deref.call(null,mults);
var inst_33609__$1 = cljs.core.get.call(null,inst_33608,inst_33607__$1);
var state_33628__$1 = (function (){var statearr_33644 = state_33628;
(statearr_33644[(11)] = inst_33609__$1);

(statearr_33644[(7)] = inst_33607__$1);

return statearr_33644;
})();
if(cljs.core.truth_(inst_33609__$1)){
var statearr_33645_33693 = state_33628__$1;
(statearr_33645_33693[(1)] = (19));

} else {
var statearr_33646_33694 = state_33628__$1;
(statearr_33646_33694[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (25))){
var inst_33618 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
var statearr_33647_33695 = state_33628__$1;
(statearr_33647_33695[(2)] = inst_33618);

(statearr_33647_33695[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (17))){
var inst_33583 = (state_33628[(10)]);
var inst_33592 = cljs.core.first.call(null,inst_33583);
var inst_33593 = cljs.core.async.muxch_STAR_.call(null,inst_33592);
var inst_33594 = cljs.core.async.close_BANG_.call(null,inst_33593);
var inst_33595 = cljs.core.next.call(null,inst_33583);
var inst_33569 = inst_33595;
var inst_33570 = null;
var inst_33571 = (0);
var inst_33572 = (0);
var state_33628__$1 = (function (){var statearr_33648 = state_33628;
(statearr_33648[(12)] = inst_33570);

(statearr_33648[(13)] = inst_33571);

(statearr_33648[(14)] = inst_33572);

(statearr_33648[(15)] = inst_33569);

(statearr_33648[(16)] = inst_33594);

return statearr_33648;
})();
var statearr_33649_33696 = state_33628__$1;
(statearr_33649_33696[(2)] = null);

(statearr_33649_33696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (3))){
var inst_33626 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33628__$1,inst_33626);
} else {
if((state_val_33629 === (12))){
var inst_33603 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
var statearr_33650_33697 = state_33628__$1;
(statearr_33650_33697[(2)] = inst_33603);

(statearr_33650_33697[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (2))){
var state_33628__$1 = state_33628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33628__$1,(4),ch);
} else {
if((state_val_33629 === (23))){
var state_33628__$1 = state_33628;
var statearr_33651_33698 = state_33628__$1;
(statearr_33651_33698[(2)] = null);

(statearr_33651_33698[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (19))){
var inst_33609 = (state_33628[(11)]);
var inst_33559 = (state_33628[(8)]);
var inst_33611 = cljs.core.async.muxch_STAR_.call(null,inst_33609);
var state_33628__$1 = state_33628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33628__$1,(22),inst_33611,inst_33559);
} else {
if((state_val_33629 === (11))){
var inst_33583 = (state_33628[(10)]);
var inst_33569 = (state_33628[(15)]);
var inst_33583__$1 = cljs.core.seq.call(null,inst_33569);
var state_33628__$1 = (function (){var statearr_33652 = state_33628;
(statearr_33652[(10)] = inst_33583__$1);

return statearr_33652;
})();
if(inst_33583__$1){
var statearr_33653_33699 = state_33628__$1;
(statearr_33653_33699[(1)] = (13));

} else {
var statearr_33654_33700 = state_33628__$1;
(statearr_33654_33700[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (9))){
var inst_33605 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
var statearr_33655_33701 = state_33628__$1;
(statearr_33655_33701[(2)] = inst_33605);

(statearr_33655_33701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (5))){
var inst_33566 = cljs.core.deref.call(null,mults);
var inst_33567 = cljs.core.vals.call(null,inst_33566);
var inst_33568 = cljs.core.seq.call(null,inst_33567);
var inst_33569 = inst_33568;
var inst_33570 = null;
var inst_33571 = (0);
var inst_33572 = (0);
var state_33628__$1 = (function (){var statearr_33656 = state_33628;
(statearr_33656[(12)] = inst_33570);

(statearr_33656[(13)] = inst_33571);

(statearr_33656[(14)] = inst_33572);

(statearr_33656[(15)] = inst_33569);

return statearr_33656;
})();
var statearr_33657_33702 = state_33628__$1;
(statearr_33657_33702[(2)] = null);

(statearr_33657_33702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (14))){
var state_33628__$1 = state_33628;
var statearr_33661_33703 = state_33628__$1;
(statearr_33661_33703[(2)] = null);

(statearr_33661_33703[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (16))){
var inst_33583 = (state_33628[(10)]);
var inst_33587 = cljs.core.chunk_first.call(null,inst_33583);
var inst_33588 = cljs.core.chunk_rest.call(null,inst_33583);
var inst_33589 = cljs.core.count.call(null,inst_33587);
var inst_33569 = inst_33588;
var inst_33570 = inst_33587;
var inst_33571 = inst_33589;
var inst_33572 = (0);
var state_33628__$1 = (function (){var statearr_33662 = state_33628;
(statearr_33662[(12)] = inst_33570);

(statearr_33662[(13)] = inst_33571);

(statearr_33662[(14)] = inst_33572);

(statearr_33662[(15)] = inst_33569);

return statearr_33662;
})();
var statearr_33663_33704 = state_33628__$1;
(statearr_33663_33704[(2)] = null);

(statearr_33663_33704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (10))){
var inst_33570 = (state_33628[(12)]);
var inst_33571 = (state_33628[(13)]);
var inst_33572 = (state_33628[(14)]);
var inst_33569 = (state_33628[(15)]);
var inst_33577 = cljs.core._nth.call(null,inst_33570,inst_33572);
var inst_33578 = cljs.core.async.muxch_STAR_.call(null,inst_33577);
var inst_33579 = cljs.core.async.close_BANG_.call(null,inst_33578);
var inst_33580 = (inst_33572 + (1));
var tmp33658 = inst_33570;
var tmp33659 = inst_33571;
var tmp33660 = inst_33569;
var inst_33569__$1 = tmp33660;
var inst_33570__$1 = tmp33658;
var inst_33571__$1 = tmp33659;
var inst_33572__$1 = inst_33580;
var state_33628__$1 = (function (){var statearr_33664 = state_33628;
(statearr_33664[(12)] = inst_33570__$1);

(statearr_33664[(13)] = inst_33571__$1);

(statearr_33664[(14)] = inst_33572__$1);

(statearr_33664[(15)] = inst_33569__$1);

(statearr_33664[(17)] = inst_33579);

return statearr_33664;
})();
var statearr_33665_33705 = state_33628__$1;
(statearr_33665_33705[(2)] = null);

(statearr_33665_33705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (18))){
var inst_33598 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
var statearr_33666_33706 = state_33628__$1;
(statearr_33666_33706[(2)] = inst_33598);

(statearr_33666_33706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (8))){
var inst_33571 = (state_33628[(13)]);
var inst_33572 = (state_33628[(14)]);
var inst_33574 = (inst_33572 < inst_33571);
var inst_33575 = inst_33574;
var state_33628__$1 = state_33628;
if(cljs.core.truth_(inst_33575)){
var statearr_33667_33707 = state_33628__$1;
(statearr_33667_33707[(1)] = (10));

} else {
var statearr_33668_33708 = state_33628__$1;
(statearr_33668_33708[(1)] = (11));

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
});})(c__31761__auto___33680,mults,ensure_mult,p))
;
return ((function (switch__31740__auto__,c__31761__auto___33680,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31741__auto__ = null;
var cljs$core$async$state_machine__31741__auto____0 = (function (){
var statearr_33672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33672[(0)] = cljs$core$async$state_machine__31741__auto__);

(statearr_33672[(1)] = (1));

return statearr_33672;
});
var cljs$core$async$state_machine__31741__auto____1 = (function (state_33628){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_33628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e33673){if((e33673 instanceof Object)){
var ex__31744__auto__ = e33673;
var statearr_33674_33709 = state_33628;
(statearr_33674_33709[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33710 = state_33628;
state_33628 = G__33710;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
cljs$core$async$state_machine__31741__auto__ = function(state_33628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31741__auto____1.call(this,state_33628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31741__auto____0;
cljs$core$async$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31741__auto____1;
return cljs$core$async$state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto___33680,mults,ensure_mult,p))
})();
var state__31763__auto__ = (function (){var statearr_33675 = f__31762__auto__.call(null);
(statearr_33675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto___33680);

return statearr_33675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto___33680,mults,ensure_mult,p))
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
var args33711 = [];
var len__26121__auto___33714 = arguments.length;
var i__26122__auto___33715 = (0);
while(true){
if((i__26122__auto___33715 < len__26121__auto___33714)){
args33711.push((arguments[i__26122__auto___33715]));

var G__33716 = (i__26122__auto___33715 + (1));
i__26122__auto___33715 = G__33716;
continue;
} else {
}
break;
}

var G__33713 = args33711.length;
switch (G__33713) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33711.length)].join('')));

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
var args33718 = [];
var len__26121__auto___33721 = arguments.length;
var i__26122__auto___33722 = (0);
while(true){
if((i__26122__auto___33722 < len__26121__auto___33721)){
args33718.push((arguments[i__26122__auto___33722]));

var G__33723 = (i__26122__auto___33722 + (1));
i__26122__auto___33722 = G__33723;
continue;
} else {
}
break;
}

var G__33720 = args33718.length;
switch (G__33720) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33718.length)].join('')));

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
var args33725 = [];
var len__26121__auto___33796 = arguments.length;
var i__26122__auto___33797 = (0);
while(true){
if((i__26122__auto___33797 < len__26121__auto___33796)){
args33725.push((arguments[i__26122__auto___33797]));

var G__33798 = (i__26122__auto___33797 + (1));
i__26122__auto___33797 = G__33798;
continue;
} else {
}
break;
}

var G__33727 = args33725.length;
switch (G__33727) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33725.length)].join('')));

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
var c__31761__auto___33800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto___33800,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto___33800,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33766){
var state_val_33767 = (state_33766[(1)]);
if((state_val_33767 === (7))){
var state_33766__$1 = state_33766;
var statearr_33768_33801 = state_33766__$1;
(statearr_33768_33801[(2)] = null);

(statearr_33768_33801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (1))){
var state_33766__$1 = state_33766;
var statearr_33769_33802 = state_33766__$1;
(statearr_33769_33802[(2)] = null);

(statearr_33769_33802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (4))){
var inst_33730 = (state_33766[(7)]);
var inst_33732 = (inst_33730 < cnt);
var state_33766__$1 = state_33766;
if(cljs.core.truth_(inst_33732)){
var statearr_33770_33803 = state_33766__$1;
(statearr_33770_33803[(1)] = (6));

} else {
var statearr_33771_33804 = state_33766__$1;
(statearr_33771_33804[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (15))){
var inst_33762 = (state_33766[(2)]);
var state_33766__$1 = state_33766;
var statearr_33772_33805 = state_33766__$1;
(statearr_33772_33805[(2)] = inst_33762);

(statearr_33772_33805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (13))){
var inst_33755 = cljs.core.async.close_BANG_.call(null,out);
var state_33766__$1 = state_33766;
var statearr_33773_33806 = state_33766__$1;
(statearr_33773_33806[(2)] = inst_33755);

(statearr_33773_33806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (6))){
var state_33766__$1 = state_33766;
var statearr_33774_33807 = state_33766__$1;
(statearr_33774_33807[(2)] = null);

(statearr_33774_33807[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (3))){
var inst_33764 = (state_33766[(2)]);
var state_33766__$1 = state_33766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33766__$1,inst_33764);
} else {
if((state_val_33767 === (12))){
var inst_33752 = (state_33766[(8)]);
var inst_33752__$1 = (state_33766[(2)]);
var inst_33753 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33752__$1);
var state_33766__$1 = (function (){var statearr_33775 = state_33766;
(statearr_33775[(8)] = inst_33752__$1);

return statearr_33775;
})();
if(cljs.core.truth_(inst_33753)){
var statearr_33776_33808 = state_33766__$1;
(statearr_33776_33808[(1)] = (13));

} else {
var statearr_33777_33809 = state_33766__$1;
(statearr_33777_33809[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (2))){
var inst_33729 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33730 = (0);
var state_33766__$1 = (function (){var statearr_33778 = state_33766;
(statearr_33778[(7)] = inst_33730);

(statearr_33778[(9)] = inst_33729);

return statearr_33778;
})();
var statearr_33779_33810 = state_33766__$1;
(statearr_33779_33810[(2)] = null);

(statearr_33779_33810[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (11))){
var inst_33730 = (state_33766[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33766,(10),Object,null,(9));
var inst_33739 = chs__$1.call(null,inst_33730);
var inst_33740 = done.call(null,inst_33730);
var inst_33741 = cljs.core.async.take_BANG_.call(null,inst_33739,inst_33740);
var state_33766__$1 = state_33766;
var statearr_33780_33811 = state_33766__$1;
(statearr_33780_33811[(2)] = inst_33741);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33766__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (9))){
var inst_33730 = (state_33766[(7)]);
var inst_33743 = (state_33766[(2)]);
var inst_33744 = (inst_33730 + (1));
var inst_33730__$1 = inst_33744;
var state_33766__$1 = (function (){var statearr_33781 = state_33766;
(statearr_33781[(7)] = inst_33730__$1);

(statearr_33781[(10)] = inst_33743);

return statearr_33781;
})();
var statearr_33782_33812 = state_33766__$1;
(statearr_33782_33812[(2)] = null);

(statearr_33782_33812[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (5))){
var inst_33750 = (state_33766[(2)]);
var state_33766__$1 = (function (){var statearr_33783 = state_33766;
(statearr_33783[(11)] = inst_33750);

return statearr_33783;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33766__$1,(12),dchan);
} else {
if((state_val_33767 === (14))){
var inst_33752 = (state_33766[(8)]);
var inst_33757 = cljs.core.apply.call(null,f,inst_33752);
var state_33766__$1 = state_33766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33766__$1,(16),out,inst_33757);
} else {
if((state_val_33767 === (16))){
var inst_33759 = (state_33766[(2)]);
var state_33766__$1 = (function (){var statearr_33784 = state_33766;
(statearr_33784[(12)] = inst_33759);

return statearr_33784;
})();
var statearr_33785_33813 = state_33766__$1;
(statearr_33785_33813[(2)] = null);

(statearr_33785_33813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (10))){
var inst_33734 = (state_33766[(2)]);
var inst_33735 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33766__$1 = (function (){var statearr_33786 = state_33766;
(statearr_33786[(13)] = inst_33734);

return statearr_33786;
})();
var statearr_33787_33814 = state_33766__$1;
(statearr_33787_33814[(2)] = inst_33735);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33766__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (8))){
var inst_33748 = (state_33766[(2)]);
var state_33766__$1 = state_33766;
var statearr_33788_33815 = state_33766__$1;
(statearr_33788_33815[(2)] = inst_33748);

(statearr_33788_33815[(1)] = (5));


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
});})(c__31761__auto___33800,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31740__auto__,c__31761__auto___33800,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31741__auto__ = null;
var cljs$core$async$state_machine__31741__auto____0 = (function (){
var statearr_33792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33792[(0)] = cljs$core$async$state_machine__31741__auto__);

(statearr_33792[(1)] = (1));

return statearr_33792;
});
var cljs$core$async$state_machine__31741__auto____1 = (function (state_33766){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_33766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e33793){if((e33793 instanceof Object)){
var ex__31744__auto__ = e33793;
var statearr_33794_33816 = state_33766;
(statearr_33794_33816[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33817 = state_33766;
state_33766 = G__33817;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
cljs$core$async$state_machine__31741__auto__ = function(state_33766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31741__auto____1.call(this,state_33766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31741__auto____0;
cljs$core$async$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31741__auto____1;
return cljs$core$async$state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto___33800,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31763__auto__ = (function (){var statearr_33795 = f__31762__auto__.call(null);
(statearr_33795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto___33800);

return statearr_33795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto___33800,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args33819 = [];
var len__26121__auto___33877 = arguments.length;
var i__26122__auto___33878 = (0);
while(true){
if((i__26122__auto___33878 < len__26121__auto___33877)){
args33819.push((arguments[i__26122__auto___33878]));

var G__33879 = (i__26122__auto___33878 + (1));
i__26122__auto___33878 = G__33879;
continue;
} else {
}
break;
}

var G__33821 = args33819.length;
switch (G__33821) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33819.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31761__auto___33881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto___33881,out){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto___33881,out){
return (function (state_33853){
var state_val_33854 = (state_33853[(1)]);
if((state_val_33854 === (7))){
var inst_33832 = (state_33853[(7)]);
var inst_33833 = (state_33853[(8)]);
var inst_33832__$1 = (state_33853[(2)]);
var inst_33833__$1 = cljs.core.nth.call(null,inst_33832__$1,(0),null);
var inst_33834 = cljs.core.nth.call(null,inst_33832__$1,(1),null);
var inst_33835 = (inst_33833__$1 == null);
var state_33853__$1 = (function (){var statearr_33855 = state_33853;
(statearr_33855[(7)] = inst_33832__$1);

(statearr_33855[(9)] = inst_33834);

(statearr_33855[(8)] = inst_33833__$1);

return statearr_33855;
})();
if(cljs.core.truth_(inst_33835)){
var statearr_33856_33882 = state_33853__$1;
(statearr_33856_33882[(1)] = (8));

} else {
var statearr_33857_33883 = state_33853__$1;
(statearr_33857_33883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33854 === (1))){
var inst_33822 = cljs.core.vec.call(null,chs);
var inst_33823 = inst_33822;
var state_33853__$1 = (function (){var statearr_33858 = state_33853;
(statearr_33858[(10)] = inst_33823);

return statearr_33858;
})();
var statearr_33859_33884 = state_33853__$1;
(statearr_33859_33884[(2)] = null);

(statearr_33859_33884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33854 === (4))){
var inst_33823 = (state_33853[(10)]);
var state_33853__$1 = state_33853;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33853__$1,(7),inst_33823);
} else {
if((state_val_33854 === (6))){
var inst_33849 = (state_33853[(2)]);
var state_33853__$1 = state_33853;
var statearr_33860_33885 = state_33853__$1;
(statearr_33860_33885[(2)] = inst_33849);

(statearr_33860_33885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33854 === (3))){
var inst_33851 = (state_33853[(2)]);
var state_33853__$1 = state_33853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33853__$1,inst_33851);
} else {
if((state_val_33854 === (2))){
var inst_33823 = (state_33853[(10)]);
var inst_33825 = cljs.core.count.call(null,inst_33823);
var inst_33826 = (inst_33825 > (0));
var state_33853__$1 = state_33853;
if(cljs.core.truth_(inst_33826)){
var statearr_33862_33886 = state_33853__$1;
(statearr_33862_33886[(1)] = (4));

} else {
var statearr_33863_33887 = state_33853__$1;
(statearr_33863_33887[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33854 === (11))){
var inst_33823 = (state_33853[(10)]);
var inst_33842 = (state_33853[(2)]);
var tmp33861 = inst_33823;
var inst_33823__$1 = tmp33861;
var state_33853__$1 = (function (){var statearr_33864 = state_33853;
(statearr_33864[(10)] = inst_33823__$1);

(statearr_33864[(11)] = inst_33842);

return statearr_33864;
})();
var statearr_33865_33888 = state_33853__$1;
(statearr_33865_33888[(2)] = null);

(statearr_33865_33888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33854 === (9))){
var inst_33833 = (state_33853[(8)]);
var state_33853__$1 = state_33853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33853__$1,(11),out,inst_33833);
} else {
if((state_val_33854 === (5))){
var inst_33847 = cljs.core.async.close_BANG_.call(null,out);
var state_33853__$1 = state_33853;
var statearr_33866_33889 = state_33853__$1;
(statearr_33866_33889[(2)] = inst_33847);

(statearr_33866_33889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33854 === (10))){
var inst_33845 = (state_33853[(2)]);
var state_33853__$1 = state_33853;
var statearr_33867_33890 = state_33853__$1;
(statearr_33867_33890[(2)] = inst_33845);

(statearr_33867_33890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33854 === (8))){
var inst_33823 = (state_33853[(10)]);
var inst_33832 = (state_33853[(7)]);
var inst_33834 = (state_33853[(9)]);
var inst_33833 = (state_33853[(8)]);
var inst_33837 = (function (){var cs = inst_33823;
var vec__33828 = inst_33832;
var v = inst_33833;
var c = inst_33834;
return ((function (cs,vec__33828,v,c,inst_33823,inst_33832,inst_33834,inst_33833,state_val_33854,c__31761__auto___33881,out){
return (function (p1__33818_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33818_SHARP_);
});
;})(cs,vec__33828,v,c,inst_33823,inst_33832,inst_33834,inst_33833,state_val_33854,c__31761__auto___33881,out))
})();
var inst_33838 = cljs.core.filterv.call(null,inst_33837,inst_33823);
var inst_33823__$1 = inst_33838;
var state_33853__$1 = (function (){var statearr_33868 = state_33853;
(statearr_33868[(10)] = inst_33823__$1);

return statearr_33868;
})();
var statearr_33869_33891 = state_33853__$1;
(statearr_33869_33891[(2)] = null);

(statearr_33869_33891[(1)] = (2));


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
});})(c__31761__auto___33881,out))
;
return ((function (switch__31740__auto__,c__31761__auto___33881,out){
return (function() {
var cljs$core$async$state_machine__31741__auto__ = null;
var cljs$core$async$state_machine__31741__auto____0 = (function (){
var statearr_33873 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33873[(0)] = cljs$core$async$state_machine__31741__auto__);

(statearr_33873[(1)] = (1));

return statearr_33873;
});
var cljs$core$async$state_machine__31741__auto____1 = (function (state_33853){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_33853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e33874){if((e33874 instanceof Object)){
var ex__31744__auto__ = e33874;
var statearr_33875_33892 = state_33853;
(statearr_33875_33892[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33893 = state_33853;
state_33853 = G__33893;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
cljs$core$async$state_machine__31741__auto__ = function(state_33853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31741__auto____1.call(this,state_33853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31741__auto____0;
cljs$core$async$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31741__auto____1;
return cljs$core$async$state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto___33881,out))
})();
var state__31763__auto__ = (function (){var statearr_33876 = f__31762__auto__.call(null);
(statearr_33876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto___33881);

return statearr_33876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto___33881,out))
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
var args33894 = [];
var len__26121__auto___33943 = arguments.length;
var i__26122__auto___33944 = (0);
while(true){
if((i__26122__auto___33944 < len__26121__auto___33943)){
args33894.push((arguments[i__26122__auto___33944]));

var G__33945 = (i__26122__auto___33944 + (1));
i__26122__auto___33944 = G__33945;
continue;
} else {
}
break;
}

var G__33896 = args33894.length;
switch (G__33896) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33894.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31761__auto___33947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto___33947,out){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto___33947,out){
return (function (state_33920){
var state_val_33921 = (state_33920[(1)]);
if((state_val_33921 === (7))){
var inst_33902 = (state_33920[(7)]);
var inst_33902__$1 = (state_33920[(2)]);
var inst_33903 = (inst_33902__$1 == null);
var inst_33904 = cljs.core.not.call(null,inst_33903);
var state_33920__$1 = (function (){var statearr_33922 = state_33920;
(statearr_33922[(7)] = inst_33902__$1);

return statearr_33922;
})();
if(inst_33904){
var statearr_33923_33948 = state_33920__$1;
(statearr_33923_33948[(1)] = (8));

} else {
var statearr_33924_33949 = state_33920__$1;
(statearr_33924_33949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33921 === (1))){
var inst_33897 = (0);
var state_33920__$1 = (function (){var statearr_33925 = state_33920;
(statearr_33925[(8)] = inst_33897);

return statearr_33925;
})();
var statearr_33926_33950 = state_33920__$1;
(statearr_33926_33950[(2)] = null);

(statearr_33926_33950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33921 === (4))){
var state_33920__$1 = state_33920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33920__$1,(7),ch);
} else {
if((state_val_33921 === (6))){
var inst_33915 = (state_33920[(2)]);
var state_33920__$1 = state_33920;
var statearr_33927_33951 = state_33920__$1;
(statearr_33927_33951[(2)] = inst_33915);

(statearr_33927_33951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33921 === (3))){
var inst_33917 = (state_33920[(2)]);
var inst_33918 = cljs.core.async.close_BANG_.call(null,out);
var state_33920__$1 = (function (){var statearr_33928 = state_33920;
(statearr_33928[(9)] = inst_33917);

return statearr_33928;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33920__$1,inst_33918);
} else {
if((state_val_33921 === (2))){
var inst_33897 = (state_33920[(8)]);
var inst_33899 = (inst_33897 < n);
var state_33920__$1 = state_33920;
if(cljs.core.truth_(inst_33899)){
var statearr_33929_33952 = state_33920__$1;
(statearr_33929_33952[(1)] = (4));

} else {
var statearr_33930_33953 = state_33920__$1;
(statearr_33930_33953[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33921 === (11))){
var inst_33897 = (state_33920[(8)]);
var inst_33907 = (state_33920[(2)]);
var inst_33908 = (inst_33897 + (1));
var inst_33897__$1 = inst_33908;
var state_33920__$1 = (function (){var statearr_33931 = state_33920;
(statearr_33931[(8)] = inst_33897__$1);

(statearr_33931[(10)] = inst_33907);

return statearr_33931;
})();
var statearr_33932_33954 = state_33920__$1;
(statearr_33932_33954[(2)] = null);

(statearr_33932_33954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33921 === (9))){
var state_33920__$1 = state_33920;
var statearr_33933_33955 = state_33920__$1;
(statearr_33933_33955[(2)] = null);

(statearr_33933_33955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33921 === (5))){
var state_33920__$1 = state_33920;
var statearr_33934_33956 = state_33920__$1;
(statearr_33934_33956[(2)] = null);

(statearr_33934_33956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33921 === (10))){
var inst_33912 = (state_33920[(2)]);
var state_33920__$1 = state_33920;
var statearr_33935_33957 = state_33920__$1;
(statearr_33935_33957[(2)] = inst_33912);

(statearr_33935_33957[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33921 === (8))){
var inst_33902 = (state_33920[(7)]);
var state_33920__$1 = state_33920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33920__$1,(11),out,inst_33902);
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
});})(c__31761__auto___33947,out))
;
return ((function (switch__31740__auto__,c__31761__auto___33947,out){
return (function() {
var cljs$core$async$state_machine__31741__auto__ = null;
var cljs$core$async$state_machine__31741__auto____0 = (function (){
var statearr_33939 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33939[(0)] = cljs$core$async$state_machine__31741__auto__);

(statearr_33939[(1)] = (1));

return statearr_33939;
});
var cljs$core$async$state_machine__31741__auto____1 = (function (state_33920){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_33920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e33940){if((e33940 instanceof Object)){
var ex__31744__auto__ = e33940;
var statearr_33941_33958 = state_33920;
(statearr_33941_33958[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33959 = state_33920;
state_33920 = G__33959;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
cljs$core$async$state_machine__31741__auto__ = function(state_33920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31741__auto____1.call(this,state_33920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31741__auto____0;
cljs$core$async$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31741__auto____1;
return cljs$core$async$state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto___33947,out))
})();
var state__31763__auto__ = (function (){var statearr_33942 = f__31762__auto__.call(null);
(statearr_33942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto___33947);

return statearr_33942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto___33947,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33967 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33967 = (function (map_LT_,f,ch,meta33968){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33968 = meta33968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33969,meta33968__$1){
var self__ = this;
var _33969__$1 = this;
return (new cljs.core.async.t_cljs$core$async33967(self__.map_LT_,self__.f,self__.ch,meta33968__$1));
});

cljs.core.async.t_cljs$core$async33967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33969){
var self__ = this;
var _33969__$1 = this;
return self__.meta33968;
});

cljs.core.async.t_cljs$core$async33967.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33967.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33967.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33967.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33967.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33970 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33970 = (function (map_LT_,f,ch,meta33968,_,fn1,meta33971){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33968 = meta33968;
this._ = _;
this.fn1 = fn1;
this.meta33971 = meta33971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33972,meta33971__$1){
var self__ = this;
var _33972__$1 = this;
return (new cljs.core.async.t_cljs$core$async33970(self__.map_LT_,self__.f,self__.ch,self__.meta33968,self__._,self__.fn1,meta33971__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33970.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33972){
var self__ = this;
var _33972__$1 = this;
return self__.meta33971;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33970.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33970.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33970.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33970.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33960_SHARP_){
return f1.call(null,(((p1__33960_SHARP_ == null))?null:self__.f.call(null,p1__33960_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33970.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33968","meta33968",-424677352,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33967","cljs.core.async/t_cljs$core$async33967",1187729762,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33971","meta33971",-1729290500,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33970.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33970";

cljs.core.async.t_cljs$core$async33970.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async33970");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33970 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33970(map_LT___$1,f__$1,ch__$1,meta33968__$1,___$2,fn1__$1,meta33971){
return (new cljs.core.async.t_cljs$core$async33970(map_LT___$1,f__$1,ch__$1,meta33968__$1,___$2,fn1__$1,meta33971));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33970(self__.map_LT_,self__.f,self__.ch,self__.meta33968,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async33967.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33967.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33967.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33968","meta33968",-424677352,null)], null);
});

cljs.core.async.t_cljs$core$async33967.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33967";

cljs.core.async.t_cljs$core$async33967.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async33967");
});

cljs.core.async.__GT_t_cljs$core$async33967 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33967(map_LT___$1,f__$1,ch__$1,meta33968){
return (new cljs.core.async.t_cljs$core$async33967(map_LT___$1,f__$1,ch__$1,meta33968));
});

}

return (new cljs.core.async.t_cljs$core$async33967(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33976 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33976 = (function (map_GT_,f,ch,meta33977){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta33977 = meta33977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33978,meta33977__$1){
var self__ = this;
var _33978__$1 = this;
return (new cljs.core.async.t_cljs$core$async33976(self__.map_GT_,self__.f,self__.ch,meta33977__$1));
});

cljs.core.async.t_cljs$core$async33976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33978){
var self__ = this;
var _33978__$1 = this;
return self__.meta33977;
});

cljs.core.async.t_cljs$core$async33976.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33976.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33976.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33976.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33976.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33976.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33977","meta33977",1805492629,null)], null);
});

cljs.core.async.t_cljs$core$async33976.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33976";

cljs.core.async.t_cljs$core$async33976.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async33976");
});

cljs.core.async.__GT_t_cljs$core$async33976 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33976(map_GT___$1,f__$1,ch__$1,meta33977){
return (new cljs.core.async.t_cljs$core$async33976(map_GT___$1,f__$1,ch__$1,meta33977));
});

}

return (new cljs.core.async.t_cljs$core$async33976(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33982 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33982 = (function (filter_GT_,p,ch,meta33983){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta33983 = meta33983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33984,meta33983__$1){
var self__ = this;
var _33984__$1 = this;
return (new cljs.core.async.t_cljs$core$async33982(self__.filter_GT_,self__.p,self__.ch,meta33983__$1));
});

cljs.core.async.t_cljs$core$async33982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33984){
var self__ = this;
var _33984__$1 = this;
return self__.meta33983;
});

cljs.core.async.t_cljs$core$async33982.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33982.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33982.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33982.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33982.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33982.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33982.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33983","meta33983",730035025,null)], null);
});

cljs.core.async.t_cljs$core$async33982.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33982";

cljs.core.async.t_cljs$core$async33982.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async33982");
});

cljs.core.async.__GT_t_cljs$core$async33982 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33982(filter_GT___$1,p__$1,ch__$1,meta33983){
return (new cljs.core.async.t_cljs$core$async33982(filter_GT___$1,p__$1,ch__$1,meta33983));
});

}

return (new cljs.core.async.t_cljs$core$async33982(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args33985 = [];
var len__26121__auto___34029 = arguments.length;
var i__26122__auto___34030 = (0);
while(true){
if((i__26122__auto___34030 < len__26121__auto___34029)){
args33985.push((arguments[i__26122__auto___34030]));

var G__34031 = (i__26122__auto___34030 + (1));
i__26122__auto___34030 = G__34031;
continue;
} else {
}
break;
}

var G__33987 = args33985.length;
switch (G__33987) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33985.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31761__auto___34033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto___34033,out){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto___34033,out){
return (function (state_34008){
var state_val_34009 = (state_34008[(1)]);
if((state_val_34009 === (7))){
var inst_34004 = (state_34008[(2)]);
var state_34008__$1 = state_34008;
var statearr_34010_34034 = state_34008__$1;
(statearr_34010_34034[(2)] = inst_34004);

(statearr_34010_34034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (1))){
var state_34008__$1 = state_34008;
var statearr_34011_34035 = state_34008__$1;
(statearr_34011_34035[(2)] = null);

(statearr_34011_34035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (4))){
var inst_33990 = (state_34008[(7)]);
var inst_33990__$1 = (state_34008[(2)]);
var inst_33991 = (inst_33990__$1 == null);
var state_34008__$1 = (function (){var statearr_34012 = state_34008;
(statearr_34012[(7)] = inst_33990__$1);

return statearr_34012;
})();
if(cljs.core.truth_(inst_33991)){
var statearr_34013_34036 = state_34008__$1;
(statearr_34013_34036[(1)] = (5));

} else {
var statearr_34014_34037 = state_34008__$1;
(statearr_34014_34037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (6))){
var inst_33990 = (state_34008[(7)]);
var inst_33995 = p.call(null,inst_33990);
var state_34008__$1 = state_34008;
if(cljs.core.truth_(inst_33995)){
var statearr_34015_34038 = state_34008__$1;
(statearr_34015_34038[(1)] = (8));

} else {
var statearr_34016_34039 = state_34008__$1;
(statearr_34016_34039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (3))){
var inst_34006 = (state_34008[(2)]);
var state_34008__$1 = state_34008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34008__$1,inst_34006);
} else {
if((state_val_34009 === (2))){
var state_34008__$1 = state_34008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34008__$1,(4),ch);
} else {
if((state_val_34009 === (11))){
var inst_33998 = (state_34008[(2)]);
var state_34008__$1 = state_34008;
var statearr_34017_34040 = state_34008__$1;
(statearr_34017_34040[(2)] = inst_33998);

(statearr_34017_34040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (9))){
var state_34008__$1 = state_34008;
var statearr_34018_34041 = state_34008__$1;
(statearr_34018_34041[(2)] = null);

(statearr_34018_34041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (5))){
var inst_33993 = cljs.core.async.close_BANG_.call(null,out);
var state_34008__$1 = state_34008;
var statearr_34019_34042 = state_34008__$1;
(statearr_34019_34042[(2)] = inst_33993);

(statearr_34019_34042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (10))){
var inst_34001 = (state_34008[(2)]);
var state_34008__$1 = (function (){var statearr_34020 = state_34008;
(statearr_34020[(8)] = inst_34001);

return statearr_34020;
})();
var statearr_34021_34043 = state_34008__$1;
(statearr_34021_34043[(2)] = null);

(statearr_34021_34043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (8))){
var inst_33990 = (state_34008[(7)]);
var state_34008__$1 = state_34008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34008__$1,(11),out,inst_33990);
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
});})(c__31761__auto___34033,out))
;
return ((function (switch__31740__auto__,c__31761__auto___34033,out){
return (function() {
var cljs$core$async$state_machine__31741__auto__ = null;
var cljs$core$async$state_machine__31741__auto____0 = (function (){
var statearr_34025 = [null,null,null,null,null,null,null,null,null];
(statearr_34025[(0)] = cljs$core$async$state_machine__31741__auto__);

(statearr_34025[(1)] = (1));

return statearr_34025;
});
var cljs$core$async$state_machine__31741__auto____1 = (function (state_34008){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_34008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e34026){if((e34026 instanceof Object)){
var ex__31744__auto__ = e34026;
var statearr_34027_34044 = state_34008;
(statearr_34027_34044[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34045 = state_34008;
state_34008 = G__34045;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
cljs$core$async$state_machine__31741__auto__ = function(state_34008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31741__auto____1.call(this,state_34008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31741__auto____0;
cljs$core$async$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31741__auto____1;
return cljs$core$async$state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto___34033,out))
})();
var state__31763__auto__ = (function (){var statearr_34028 = f__31762__auto__.call(null);
(statearr_34028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto___34033);

return statearr_34028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto___34033,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34046 = [];
var len__26121__auto___34049 = arguments.length;
var i__26122__auto___34050 = (0);
while(true){
if((i__26122__auto___34050 < len__26121__auto___34049)){
args34046.push((arguments[i__26122__auto___34050]));

var G__34051 = (i__26122__auto___34050 + (1));
i__26122__auto___34050 = G__34051;
continue;
} else {
}
break;
}

var G__34048 = args34046.length;
switch (G__34048) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34046.length)].join('')));

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
var c__31761__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto__){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto__){
return (function (state_34218){
var state_val_34219 = (state_34218[(1)]);
if((state_val_34219 === (7))){
var inst_34214 = (state_34218[(2)]);
var state_34218__$1 = state_34218;
var statearr_34220_34261 = state_34218__$1;
(statearr_34220_34261[(2)] = inst_34214);

(statearr_34220_34261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (20))){
var inst_34184 = (state_34218[(7)]);
var inst_34195 = (state_34218[(2)]);
var inst_34196 = cljs.core.next.call(null,inst_34184);
var inst_34170 = inst_34196;
var inst_34171 = null;
var inst_34172 = (0);
var inst_34173 = (0);
var state_34218__$1 = (function (){var statearr_34221 = state_34218;
(statearr_34221[(8)] = inst_34170);

(statearr_34221[(9)] = inst_34171);

(statearr_34221[(10)] = inst_34172);

(statearr_34221[(11)] = inst_34195);

(statearr_34221[(12)] = inst_34173);

return statearr_34221;
})();
var statearr_34222_34262 = state_34218__$1;
(statearr_34222_34262[(2)] = null);

(statearr_34222_34262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (1))){
var state_34218__$1 = state_34218;
var statearr_34223_34263 = state_34218__$1;
(statearr_34223_34263[(2)] = null);

(statearr_34223_34263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (4))){
var inst_34159 = (state_34218[(13)]);
var inst_34159__$1 = (state_34218[(2)]);
var inst_34160 = (inst_34159__$1 == null);
var state_34218__$1 = (function (){var statearr_34224 = state_34218;
(statearr_34224[(13)] = inst_34159__$1);

return statearr_34224;
})();
if(cljs.core.truth_(inst_34160)){
var statearr_34225_34264 = state_34218__$1;
(statearr_34225_34264[(1)] = (5));

} else {
var statearr_34226_34265 = state_34218__$1;
(statearr_34226_34265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (15))){
var state_34218__$1 = state_34218;
var statearr_34230_34266 = state_34218__$1;
(statearr_34230_34266[(2)] = null);

(statearr_34230_34266[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (21))){
var state_34218__$1 = state_34218;
var statearr_34231_34267 = state_34218__$1;
(statearr_34231_34267[(2)] = null);

(statearr_34231_34267[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (13))){
var inst_34170 = (state_34218[(8)]);
var inst_34171 = (state_34218[(9)]);
var inst_34172 = (state_34218[(10)]);
var inst_34173 = (state_34218[(12)]);
var inst_34180 = (state_34218[(2)]);
var inst_34181 = (inst_34173 + (1));
var tmp34227 = inst_34170;
var tmp34228 = inst_34171;
var tmp34229 = inst_34172;
var inst_34170__$1 = tmp34227;
var inst_34171__$1 = tmp34228;
var inst_34172__$1 = tmp34229;
var inst_34173__$1 = inst_34181;
var state_34218__$1 = (function (){var statearr_34232 = state_34218;
(statearr_34232[(8)] = inst_34170__$1);

(statearr_34232[(9)] = inst_34171__$1);

(statearr_34232[(14)] = inst_34180);

(statearr_34232[(10)] = inst_34172__$1);

(statearr_34232[(12)] = inst_34173__$1);

return statearr_34232;
})();
var statearr_34233_34268 = state_34218__$1;
(statearr_34233_34268[(2)] = null);

(statearr_34233_34268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (22))){
var state_34218__$1 = state_34218;
var statearr_34234_34269 = state_34218__$1;
(statearr_34234_34269[(2)] = null);

(statearr_34234_34269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (6))){
var inst_34159 = (state_34218[(13)]);
var inst_34168 = f.call(null,inst_34159);
var inst_34169 = cljs.core.seq.call(null,inst_34168);
var inst_34170 = inst_34169;
var inst_34171 = null;
var inst_34172 = (0);
var inst_34173 = (0);
var state_34218__$1 = (function (){var statearr_34235 = state_34218;
(statearr_34235[(8)] = inst_34170);

(statearr_34235[(9)] = inst_34171);

(statearr_34235[(10)] = inst_34172);

(statearr_34235[(12)] = inst_34173);

return statearr_34235;
})();
var statearr_34236_34270 = state_34218__$1;
(statearr_34236_34270[(2)] = null);

(statearr_34236_34270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (17))){
var inst_34184 = (state_34218[(7)]);
var inst_34188 = cljs.core.chunk_first.call(null,inst_34184);
var inst_34189 = cljs.core.chunk_rest.call(null,inst_34184);
var inst_34190 = cljs.core.count.call(null,inst_34188);
var inst_34170 = inst_34189;
var inst_34171 = inst_34188;
var inst_34172 = inst_34190;
var inst_34173 = (0);
var state_34218__$1 = (function (){var statearr_34237 = state_34218;
(statearr_34237[(8)] = inst_34170);

(statearr_34237[(9)] = inst_34171);

(statearr_34237[(10)] = inst_34172);

(statearr_34237[(12)] = inst_34173);

return statearr_34237;
})();
var statearr_34238_34271 = state_34218__$1;
(statearr_34238_34271[(2)] = null);

(statearr_34238_34271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (3))){
var inst_34216 = (state_34218[(2)]);
var state_34218__$1 = state_34218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34218__$1,inst_34216);
} else {
if((state_val_34219 === (12))){
var inst_34204 = (state_34218[(2)]);
var state_34218__$1 = state_34218;
var statearr_34239_34272 = state_34218__$1;
(statearr_34239_34272[(2)] = inst_34204);

(statearr_34239_34272[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (2))){
var state_34218__$1 = state_34218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34218__$1,(4),in$);
} else {
if((state_val_34219 === (23))){
var inst_34212 = (state_34218[(2)]);
var state_34218__$1 = state_34218;
var statearr_34240_34273 = state_34218__$1;
(statearr_34240_34273[(2)] = inst_34212);

(statearr_34240_34273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (19))){
var inst_34199 = (state_34218[(2)]);
var state_34218__$1 = state_34218;
var statearr_34241_34274 = state_34218__$1;
(statearr_34241_34274[(2)] = inst_34199);

(statearr_34241_34274[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (11))){
var inst_34170 = (state_34218[(8)]);
var inst_34184 = (state_34218[(7)]);
var inst_34184__$1 = cljs.core.seq.call(null,inst_34170);
var state_34218__$1 = (function (){var statearr_34242 = state_34218;
(statearr_34242[(7)] = inst_34184__$1);

return statearr_34242;
})();
if(inst_34184__$1){
var statearr_34243_34275 = state_34218__$1;
(statearr_34243_34275[(1)] = (14));

} else {
var statearr_34244_34276 = state_34218__$1;
(statearr_34244_34276[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (9))){
var inst_34206 = (state_34218[(2)]);
var inst_34207 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34218__$1 = (function (){var statearr_34245 = state_34218;
(statearr_34245[(15)] = inst_34206);

return statearr_34245;
})();
if(cljs.core.truth_(inst_34207)){
var statearr_34246_34277 = state_34218__$1;
(statearr_34246_34277[(1)] = (21));

} else {
var statearr_34247_34278 = state_34218__$1;
(statearr_34247_34278[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (5))){
var inst_34162 = cljs.core.async.close_BANG_.call(null,out);
var state_34218__$1 = state_34218;
var statearr_34248_34279 = state_34218__$1;
(statearr_34248_34279[(2)] = inst_34162);

(statearr_34248_34279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (14))){
var inst_34184 = (state_34218[(7)]);
var inst_34186 = cljs.core.chunked_seq_QMARK_.call(null,inst_34184);
var state_34218__$1 = state_34218;
if(inst_34186){
var statearr_34249_34280 = state_34218__$1;
(statearr_34249_34280[(1)] = (17));

} else {
var statearr_34250_34281 = state_34218__$1;
(statearr_34250_34281[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (16))){
var inst_34202 = (state_34218[(2)]);
var state_34218__$1 = state_34218;
var statearr_34251_34282 = state_34218__$1;
(statearr_34251_34282[(2)] = inst_34202);

(statearr_34251_34282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (10))){
var inst_34171 = (state_34218[(9)]);
var inst_34173 = (state_34218[(12)]);
var inst_34178 = cljs.core._nth.call(null,inst_34171,inst_34173);
var state_34218__$1 = state_34218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34218__$1,(13),out,inst_34178);
} else {
if((state_val_34219 === (18))){
var inst_34184 = (state_34218[(7)]);
var inst_34193 = cljs.core.first.call(null,inst_34184);
var state_34218__$1 = state_34218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34218__$1,(20),out,inst_34193);
} else {
if((state_val_34219 === (8))){
var inst_34172 = (state_34218[(10)]);
var inst_34173 = (state_34218[(12)]);
var inst_34175 = (inst_34173 < inst_34172);
var inst_34176 = inst_34175;
var state_34218__$1 = state_34218;
if(cljs.core.truth_(inst_34176)){
var statearr_34252_34283 = state_34218__$1;
(statearr_34252_34283[(1)] = (10));

} else {
var statearr_34253_34284 = state_34218__$1;
(statearr_34253_34284[(1)] = (11));

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
});})(c__31761__auto__))
;
return ((function (switch__31740__auto__,c__31761__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31741__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31741__auto____0 = (function (){
var statearr_34257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34257[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31741__auto__);

(statearr_34257[(1)] = (1));

return statearr_34257;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31741__auto____1 = (function (state_34218){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_34218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e34258){if((e34258 instanceof Object)){
var ex__31744__auto__ = e34258;
var statearr_34259_34285 = state_34218;
(statearr_34259_34285[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34286 = state_34218;
state_34218 = G__34286;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31741__auto__ = function(state_34218){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31741__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31741__auto____1.call(this,state_34218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31741__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31741__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto__))
})();
var state__31763__auto__ = (function (){var statearr_34260 = f__31762__auto__.call(null);
(statearr_34260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto__);

return statearr_34260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto__))
);

return c__31761__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args34287 = [];
var len__26121__auto___34290 = arguments.length;
var i__26122__auto___34291 = (0);
while(true){
if((i__26122__auto___34291 < len__26121__auto___34290)){
args34287.push((arguments[i__26122__auto___34291]));

var G__34292 = (i__26122__auto___34291 + (1));
i__26122__auto___34291 = G__34292;
continue;
} else {
}
break;
}

var G__34289 = args34287.length;
switch (G__34289) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34287.length)].join('')));

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
var args34294 = [];
var len__26121__auto___34297 = arguments.length;
var i__26122__auto___34298 = (0);
while(true){
if((i__26122__auto___34298 < len__26121__auto___34297)){
args34294.push((arguments[i__26122__auto___34298]));

var G__34299 = (i__26122__auto___34298 + (1));
i__26122__auto___34298 = G__34299;
continue;
} else {
}
break;
}

var G__34296 = args34294.length;
switch (G__34296) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34294.length)].join('')));

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
var args34301 = [];
var len__26121__auto___34352 = arguments.length;
var i__26122__auto___34353 = (0);
while(true){
if((i__26122__auto___34353 < len__26121__auto___34352)){
args34301.push((arguments[i__26122__auto___34353]));

var G__34354 = (i__26122__auto___34353 + (1));
i__26122__auto___34353 = G__34354;
continue;
} else {
}
break;
}

var G__34303 = args34301.length;
switch (G__34303) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34301.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31761__auto___34356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto___34356,out){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto___34356,out){
return (function (state_34327){
var state_val_34328 = (state_34327[(1)]);
if((state_val_34328 === (7))){
var inst_34322 = (state_34327[(2)]);
var state_34327__$1 = state_34327;
var statearr_34329_34357 = state_34327__$1;
(statearr_34329_34357[(2)] = inst_34322);

(statearr_34329_34357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (1))){
var inst_34304 = null;
var state_34327__$1 = (function (){var statearr_34330 = state_34327;
(statearr_34330[(7)] = inst_34304);

return statearr_34330;
})();
var statearr_34331_34358 = state_34327__$1;
(statearr_34331_34358[(2)] = null);

(statearr_34331_34358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (4))){
var inst_34307 = (state_34327[(8)]);
var inst_34307__$1 = (state_34327[(2)]);
var inst_34308 = (inst_34307__$1 == null);
var inst_34309 = cljs.core.not.call(null,inst_34308);
var state_34327__$1 = (function (){var statearr_34332 = state_34327;
(statearr_34332[(8)] = inst_34307__$1);

return statearr_34332;
})();
if(inst_34309){
var statearr_34333_34359 = state_34327__$1;
(statearr_34333_34359[(1)] = (5));

} else {
var statearr_34334_34360 = state_34327__$1;
(statearr_34334_34360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (6))){
var state_34327__$1 = state_34327;
var statearr_34335_34361 = state_34327__$1;
(statearr_34335_34361[(2)] = null);

(statearr_34335_34361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (3))){
var inst_34324 = (state_34327[(2)]);
var inst_34325 = cljs.core.async.close_BANG_.call(null,out);
var state_34327__$1 = (function (){var statearr_34336 = state_34327;
(statearr_34336[(9)] = inst_34324);

return statearr_34336;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34327__$1,inst_34325);
} else {
if((state_val_34328 === (2))){
var state_34327__$1 = state_34327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34327__$1,(4),ch);
} else {
if((state_val_34328 === (11))){
var inst_34307 = (state_34327[(8)]);
var inst_34316 = (state_34327[(2)]);
var inst_34304 = inst_34307;
var state_34327__$1 = (function (){var statearr_34337 = state_34327;
(statearr_34337[(10)] = inst_34316);

(statearr_34337[(7)] = inst_34304);

return statearr_34337;
})();
var statearr_34338_34362 = state_34327__$1;
(statearr_34338_34362[(2)] = null);

(statearr_34338_34362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (9))){
var inst_34307 = (state_34327[(8)]);
var state_34327__$1 = state_34327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34327__$1,(11),out,inst_34307);
} else {
if((state_val_34328 === (5))){
var inst_34307 = (state_34327[(8)]);
var inst_34304 = (state_34327[(7)]);
var inst_34311 = cljs.core._EQ_.call(null,inst_34307,inst_34304);
var state_34327__$1 = state_34327;
if(inst_34311){
var statearr_34340_34363 = state_34327__$1;
(statearr_34340_34363[(1)] = (8));

} else {
var statearr_34341_34364 = state_34327__$1;
(statearr_34341_34364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (10))){
var inst_34319 = (state_34327[(2)]);
var state_34327__$1 = state_34327;
var statearr_34342_34365 = state_34327__$1;
(statearr_34342_34365[(2)] = inst_34319);

(statearr_34342_34365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (8))){
var inst_34304 = (state_34327[(7)]);
var tmp34339 = inst_34304;
var inst_34304__$1 = tmp34339;
var state_34327__$1 = (function (){var statearr_34343 = state_34327;
(statearr_34343[(7)] = inst_34304__$1);

return statearr_34343;
})();
var statearr_34344_34366 = state_34327__$1;
(statearr_34344_34366[(2)] = null);

(statearr_34344_34366[(1)] = (2));


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
});})(c__31761__auto___34356,out))
;
return ((function (switch__31740__auto__,c__31761__auto___34356,out){
return (function() {
var cljs$core$async$state_machine__31741__auto__ = null;
var cljs$core$async$state_machine__31741__auto____0 = (function (){
var statearr_34348 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34348[(0)] = cljs$core$async$state_machine__31741__auto__);

(statearr_34348[(1)] = (1));

return statearr_34348;
});
var cljs$core$async$state_machine__31741__auto____1 = (function (state_34327){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_34327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e34349){if((e34349 instanceof Object)){
var ex__31744__auto__ = e34349;
var statearr_34350_34367 = state_34327;
(statearr_34350_34367[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34368 = state_34327;
state_34327 = G__34368;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
cljs$core$async$state_machine__31741__auto__ = function(state_34327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31741__auto____1.call(this,state_34327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31741__auto____0;
cljs$core$async$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31741__auto____1;
return cljs$core$async$state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto___34356,out))
})();
var state__31763__auto__ = (function (){var statearr_34351 = f__31762__auto__.call(null);
(statearr_34351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto___34356);

return statearr_34351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto___34356,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args34369 = [];
var len__26121__auto___34439 = arguments.length;
var i__26122__auto___34440 = (0);
while(true){
if((i__26122__auto___34440 < len__26121__auto___34439)){
args34369.push((arguments[i__26122__auto___34440]));

var G__34441 = (i__26122__auto___34440 + (1));
i__26122__auto___34440 = G__34441;
continue;
} else {
}
break;
}

var G__34371 = args34369.length;
switch (G__34371) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34369.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31761__auto___34443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto___34443,out){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto___34443,out){
return (function (state_34409){
var state_val_34410 = (state_34409[(1)]);
if((state_val_34410 === (7))){
var inst_34405 = (state_34409[(2)]);
var state_34409__$1 = state_34409;
var statearr_34411_34444 = state_34409__$1;
(statearr_34411_34444[(2)] = inst_34405);

(statearr_34411_34444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34410 === (1))){
var inst_34372 = (new Array(n));
var inst_34373 = inst_34372;
var inst_34374 = (0);
var state_34409__$1 = (function (){var statearr_34412 = state_34409;
(statearr_34412[(7)] = inst_34374);

(statearr_34412[(8)] = inst_34373);

return statearr_34412;
})();
var statearr_34413_34445 = state_34409__$1;
(statearr_34413_34445[(2)] = null);

(statearr_34413_34445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34410 === (4))){
var inst_34377 = (state_34409[(9)]);
var inst_34377__$1 = (state_34409[(2)]);
var inst_34378 = (inst_34377__$1 == null);
var inst_34379 = cljs.core.not.call(null,inst_34378);
var state_34409__$1 = (function (){var statearr_34414 = state_34409;
(statearr_34414[(9)] = inst_34377__$1);

return statearr_34414;
})();
if(inst_34379){
var statearr_34415_34446 = state_34409__$1;
(statearr_34415_34446[(1)] = (5));

} else {
var statearr_34416_34447 = state_34409__$1;
(statearr_34416_34447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34410 === (15))){
var inst_34399 = (state_34409[(2)]);
var state_34409__$1 = state_34409;
var statearr_34417_34448 = state_34409__$1;
(statearr_34417_34448[(2)] = inst_34399);

(statearr_34417_34448[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34410 === (13))){
var state_34409__$1 = state_34409;
var statearr_34418_34449 = state_34409__$1;
(statearr_34418_34449[(2)] = null);

(statearr_34418_34449[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34410 === (6))){
var inst_34374 = (state_34409[(7)]);
var inst_34395 = (inst_34374 > (0));
var state_34409__$1 = state_34409;
if(cljs.core.truth_(inst_34395)){
var statearr_34419_34450 = state_34409__$1;
(statearr_34419_34450[(1)] = (12));

} else {
var statearr_34420_34451 = state_34409__$1;
(statearr_34420_34451[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34410 === (3))){
var inst_34407 = (state_34409[(2)]);
var state_34409__$1 = state_34409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34409__$1,inst_34407);
} else {
if((state_val_34410 === (12))){
var inst_34373 = (state_34409[(8)]);
var inst_34397 = cljs.core.vec.call(null,inst_34373);
var state_34409__$1 = state_34409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34409__$1,(15),out,inst_34397);
} else {
if((state_val_34410 === (2))){
var state_34409__$1 = state_34409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34409__$1,(4),ch);
} else {
if((state_val_34410 === (11))){
var inst_34389 = (state_34409[(2)]);
var inst_34390 = (new Array(n));
var inst_34373 = inst_34390;
var inst_34374 = (0);
var state_34409__$1 = (function (){var statearr_34421 = state_34409;
(statearr_34421[(10)] = inst_34389);

(statearr_34421[(7)] = inst_34374);

(statearr_34421[(8)] = inst_34373);

return statearr_34421;
})();
var statearr_34422_34452 = state_34409__$1;
(statearr_34422_34452[(2)] = null);

(statearr_34422_34452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34410 === (9))){
var inst_34373 = (state_34409[(8)]);
var inst_34387 = cljs.core.vec.call(null,inst_34373);
var state_34409__$1 = state_34409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34409__$1,(11),out,inst_34387);
} else {
if((state_val_34410 === (5))){
var inst_34377 = (state_34409[(9)]);
var inst_34374 = (state_34409[(7)]);
var inst_34373 = (state_34409[(8)]);
var inst_34382 = (state_34409[(11)]);
var inst_34381 = (inst_34373[inst_34374] = inst_34377);
var inst_34382__$1 = (inst_34374 + (1));
var inst_34383 = (inst_34382__$1 < n);
var state_34409__$1 = (function (){var statearr_34423 = state_34409;
(statearr_34423[(12)] = inst_34381);

(statearr_34423[(11)] = inst_34382__$1);

return statearr_34423;
})();
if(cljs.core.truth_(inst_34383)){
var statearr_34424_34453 = state_34409__$1;
(statearr_34424_34453[(1)] = (8));

} else {
var statearr_34425_34454 = state_34409__$1;
(statearr_34425_34454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34410 === (14))){
var inst_34402 = (state_34409[(2)]);
var inst_34403 = cljs.core.async.close_BANG_.call(null,out);
var state_34409__$1 = (function (){var statearr_34427 = state_34409;
(statearr_34427[(13)] = inst_34402);

return statearr_34427;
})();
var statearr_34428_34455 = state_34409__$1;
(statearr_34428_34455[(2)] = inst_34403);

(statearr_34428_34455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34410 === (10))){
var inst_34393 = (state_34409[(2)]);
var state_34409__$1 = state_34409;
var statearr_34429_34456 = state_34409__$1;
(statearr_34429_34456[(2)] = inst_34393);

(statearr_34429_34456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34410 === (8))){
var inst_34373 = (state_34409[(8)]);
var inst_34382 = (state_34409[(11)]);
var tmp34426 = inst_34373;
var inst_34373__$1 = tmp34426;
var inst_34374 = inst_34382;
var state_34409__$1 = (function (){var statearr_34430 = state_34409;
(statearr_34430[(7)] = inst_34374);

(statearr_34430[(8)] = inst_34373__$1);

return statearr_34430;
})();
var statearr_34431_34457 = state_34409__$1;
(statearr_34431_34457[(2)] = null);

(statearr_34431_34457[(1)] = (2));


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
});})(c__31761__auto___34443,out))
;
return ((function (switch__31740__auto__,c__31761__auto___34443,out){
return (function() {
var cljs$core$async$state_machine__31741__auto__ = null;
var cljs$core$async$state_machine__31741__auto____0 = (function (){
var statearr_34435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34435[(0)] = cljs$core$async$state_machine__31741__auto__);

(statearr_34435[(1)] = (1));

return statearr_34435;
});
var cljs$core$async$state_machine__31741__auto____1 = (function (state_34409){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_34409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e34436){if((e34436 instanceof Object)){
var ex__31744__auto__ = e34436;
var statearr_34437_34458 = state_34409;
(statearr_34437_34458[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34459 = state_34409;
state_34409 = G__34459;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
cljs$core$async$state_machine__31741__auto__ = function(state_34409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31741__auto____1.call(this,state_34409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31741__auto____0;
cljs$core$async$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31741__auto____1;
return cljs$core$async$state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto___34443,out))
})();
var state__31763__auto__ = (function (){var statearr_34438 = f__31762__auto__.call(null);
(statearr_34438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto___34443);

return statearr_34438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto___34443,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args34460 = [];
var len__26121__auto___34534 = arguments.length;
var i__26122__auto___34535 = (0);
while(true){
if((i__26122__auto___34535 < len__26121__auto___34534)){
args34460.push((arguments[i__26122__auto___34535]));

var G__34536 = (i__26122__auto___34535 + (1));
i__26122__auto___34535 = G__34536;
continue;
} else {
}
break;
}

var G__34462 = args34460.length;
switch (G__34462) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34460.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31761__auto___34538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto___34538,out){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto___34538,out){
return (function (state_34504){
var state_val_34505 = (state_34504[(1)]);
if((state_val_34505 === (7))){
var inst_34500 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
var statearr_34506_34539 = state_34504__$1;
(statearr_34506_34539[(2)] = inst_34500);

(statearr_34506_34539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (1))){
var inst_34463 = [];
var inst_34464 = inst_34463;
var inst_34465 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34504__$1 = (function (){var statearr_34507 = state_34504;
(statearr_34507[(7)] = inst_34464);

(statearr_34507[(8)] = inst_34465);

return statearr_34507;
})();
var statearr_34508_34540 = state_34504__$1;
(statearr_34508_34540[(2)] = null);

(statearr_34508_34540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (4))){
var inst_34468 = (state_34504[(9)]);
var inst_34468__$1 = (state_34504[(2)]);
var inst_34469 = (inst_34468__$1 == null);
var inst_34470 = cljs.core.not.call(null,inst_34469);
var state_34504__$1 = (function (){var statearr_34509 = state_34504;
(statearr_34509[(9)] = inst_34468__$1);

return statearr_34509;
})();
if(inst_34470){
var statearr_34510_34541 = state_34504__$1;
(statearr_34510_34541[(1)] = (5));

} else {
var statearr_34511_34542 = state_34504__$1;
(statearr_34511_34542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (15))){
var inst_34494 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
var statearr_34512_34543 = state_34504__$1;
(statearr_34512_34543[(2)] = inst_34494);

(statearr_34512_34543[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (13))){
var state_34504__$1 = state_34504;
var statearr_34513_34544 = state_34504__$1;
(statearr_34513_34544[(2)] = null);

(statearr_34513_34544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (6))){
var inst_34464 = (state_34504[(7)]);
var inst_34489 = inst_34464.length;
var inst_34490 = (inst_34489 > (0));
var state_34504__$1 = state_34504;
if(cljs.core.truth_(inst_34490)){
var statearr_34514_34545 = state_34504__$1;
(statearr_34514_34545[(1)] = (12));

} else {
var statearr_34515_34546 = state_34504__$1;
(statearr_34515_34546[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (3))){
var inst_34502 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34504__$1,inst_34502);
} else {
if((state_val_34505 === (12))){
var inst_34464 = (state_34504[(7)]);
var inst_34492 = cljs.core.vec.call(null,inst_34464);
var state_34504__$1 = state_34504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34504__$1,(15),out,inst_34492);
} else {
if((state_val_34505 === (2))){
var state_34504__$1 = state_34504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34504__$1,(4),ch);
} else {
if((state_val_34505 === (11))){
var inst_34468 = (state_34504[(9)]);
var inst_34472 = (state_34504[(10)]);
var inst_34482 = (state_34504[(2)]);
var inst_34483 = [];
var inst_34484 = inst_34483.push(inst_34468);
var inst_34464 = inst_34483;
var inst_34465 = inst_34472;
var state_34504__$1 = (function (){var statearr_34516 = state_34504;
(statearr_34516[(7)] = inst_34464);

(statearr_34516[(11)] = inst_34484);

(statearr_34516[(12)] = inst_34482);

(statearr_34516[(8)] = inst_34465);

return statearr_34516;
})();
var statearr_34517_34547 = state_34504__$1;
(statearr_34517_34547[(2)] = null);

(statearr_34517_34547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (9))){
var inst_34464 = (state_34504[(7)]);
var inst_34480 = cljs.core.vec.call(null,inst_34464);
var state_34504__$1 = state_34504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34504__$1,(11),out,inst_34480);
} else {
if((state_val_34505 === (5))){
var inst_34468 = (state_34504[(9)]);
var inst_34472 = (state_34504[(10)]);
var inst_34465 = (state_34504[(8)]);
var inst_34472__$1 = f.call(null,inst_34468);
var inst_34473 = cljs.core._EQ_.call(null,inst_34472__$1,inst_34465);
var inst_34474 = cljs.core.keyword_identical_QMARK_.call(null,inst_34465,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34475 = (inst_34473) || (inst_34474);
var state_34504__$1 = (function (){var statearr_34518 = state_34504;
(statearr_34518[(10)] = inst_34472__$1);

return statearr_34518;
})();
if(cljs.core.truth_(inst_34475)){
var statearr_34519_34548 = state_34504__$1;
(statearr_34519_34548[(1)] = (8));

} else {
var statearr_34520_34549 = state_34504__$1;
(statearr_34520_34549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (14))){
var inst_34497 = (state_34504[(2)]);
var inst_34498 = cljs.core.async.close_BANG_.call(null,out);
var state_34504__$1 = (function (){var statearr_34522 = state_34504;
(statearr_34522[(13)] = inst_34497);

return statearr_34522;
})();
var statearr_34523_34550 = state_34504__$1;
(statearr_34523_34550[(2)] = inst_34498);

(statearr_34523_34550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (10))){
var inst_34487 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
var statearr_34524_34551 = state_34504__$1;
(statearr_34524_34551[(2)] = inst_34487);

(statearr_34524_34551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (8))){
var inst_34464 = (state_34504[(7)]);
var inst_34468 = (state_34504[(9)]);
var inst_34472 = (state_34504[(10)]);
var inst_34477 = inst_34464.push(inst_34468);
var tmp34521 = inst_34464;
var inst_34464__$1 = tmp34521;
var inst_34465 = inst_34472;
var state_34504__$1 = (function (){var statearr_34525 = state_34504;
(statearr_34525[(7)] = inst_34464__$1);

(statearr_34525[(14)] = inst_34477);

(statearr_34525[(8)] = inst_34465);

return statearr_34525;
})();
var statearr_34526_34552 = state_34504__$1;
(statearr_34526_34552[(2)] = null);

(statearr_34526_34552[(1)] = (2));


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
});})(c__31761__auto___34538,out))
;
return ((function (switch__31740__auto__,c__31761__auto___34538,out){
return (function() {
var cljs$core$async$state_machine__31741__auto__ = null;
var cljs$core$async$state_machine__31741__auto____0 = (function (){
var statearr_34530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34530[(0)] = cljs$core$async$state_machine__31741__auto__);

(statearr_34530[(1)] = (1));

return statearr_34530;
});
var cljs$core$async$state_machine__31741__auto____1 = (function (state_34504){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_34504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e34531){if((e34531 instanceof Object)){
var ex__31744__auto__ = e34531;
var statearr_34532_34553 = state_34504;
(statearr_34532_34553[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34554 = state_34504;
state_34504 = G__34554;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
cljs$core$async$state_machine__31741__auto__ = function(state_34504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31741__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31741__auto____1.call(this,state_34504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31741__auto____0;
cljs$core$async$state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31741__auto____1;
return cljs$core$async$state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto___34538,out))
})();
var state__31763__auto__ = (function (){var statearr_34533 = f__31762__auto__.call(null);
(statearr_34533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto___34538);

return statearr_34533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto___34538,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1484780641329
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
var args31798 = [];
var len__26121__auto___31804 = arguments.length;
var i__26122__auto___31805 = (0);
while(true){
if((i__26122__auto___31805 < len__26121__auto___31804)){
args31798.push((arguments[i__26122__auto___31805]));

var G__31806 = (i__26122__auto___31805 + (1));
i__26122__auto___31805 = G__31806;
continue;
} else {
}
break;
}

var G__31800 = args31798.length;
switch (G__31800) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31798.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31801 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31801 = (function (f,blockable,meta31802){
this.f = f;
this.blockable = blockable;
this.meta31802 = meta31802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31803,meta31802__$1){
var self__ = this;
var _31803__$1 = this;
return (new cljs.core.async.t_cljs$core$async31801(self__.f,self__.blockable,meta31802__$1));
});

cljs.core.async.t_cljs$core$async31801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31803){
var self__ = this;
var _31803__$1 = this;
return self__.meta31802;
});

cljs.core.async.t_cljs$core$async31801.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31801.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31801.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31801.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31802","meta31802",720633452,null)], null);
});

cljs.core.async.t_cljs$core$async31801.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31801";

cljs.core.async.t_cljs$core$async31801.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async31801");
});

cljs.core.async.__GT_t_cljs$core$async31801 = (function cljs$core$async$__GT_t_cljs$core$async31801(f__$1,blockable__$1,meta31802){
return (new cljs.core.async.t_cljs$core$async31801(f__$1,blockable__$1,meta31802));
});

}

return (new cljs.core.async.t_cljs$core$async31801(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args31810 = [];
var len__26121__auto___31813 = arguments.length;
var i__26122__auto___31814 = (0);
while(true){
if((i__26122__auto___31814 < len__26121__auto___31813)){
args31810.push((arguments[i__26122__auto___31814]));

var G__31815 = (i__26122__auto___31814 + (1));
i__26122__auto___31814 = G__31815;
continue;
} else {
}
break;
}

var G__31812 = args31810.length;
switch (G__31812) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31810.length)].join('')));

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
var args31817 = [];
var len__26121__auto___31820 = arguments.length;
var i__26122__auto___31821 = (0);
while(true){
if((i__26122__auto___31821 < len__26121__auto___31820)){
args31817.push((arguments[i__26122__auto___31821]));

var G__31822 = (i__26122__auto___31821 + (1));
i__26122__auto___31821 = G__31822;
continue;
} else {
}
break;
}

var G__31819 = args31817.length;
switch (G__31819) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31817.length)].join('')));

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
var args31824 = [];
var len__26121__auto___31827 = arguments.length;
var i__26122__auto___31828 = (0);
while(true){
if((i__26122__auto___31828 < len__26121__auto___31827)){
args31824.push((arguments[i__26122__auto___31828]));

var G__31829 = (i__26122__auto___31828 + (1));
i__26122__auto___31828 = G__31829;
continue;
} else {
}
break;
}

var G__31826 = args31824.length;
switch (G__31826) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31824.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31831 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31831);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31831,ret){
return (function (){
return fn1.call(null,val_31831);
});})(val_31831,ret))
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
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31832.length)].join('')));

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
var n__25961__auto___31839 = n;
var x_31840 = (0);
while(true){
if((x_31840 < n__25961__auto___31839)){
(a[x_31840] = (0));

var G__31841 = (x_31840 + (1));
x_31840 = G__31841;
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

var G__31842 = (i + (1));
i = G__31842;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31846 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31846 = (function (alt_flag,flag,meta31847){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta31847 = meta31847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31848,meta31847__$1){
var self__ = this;
var _31848__$1 = this;
return (new cljs.core.async.t_cljs$core$async31846(self__.alt_flag,self__.flag,meta31847__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31848){
var self__ = this;
var _31848__$1 = this;
return self__.meta31847;
});})(flag))
;

cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31846.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31847","meta31847",185791331,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31846.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31846";

cljs.core.async.t_cljs$core$async31846.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async31846");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31846 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31846(alt_flag__$1,flag__$1,meta31847){
return (new cljs.core.async.t_cljs$core$async31846(alt_flag__$1,flag__$1,meta31847));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31846(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31852 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31852 = (function (alt_handler,flag,cb,meta31853){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta31853 = meta31853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31854,meta31853__$1){
var self__ = this;
var _31854__$1 = this;
return (new cljs.core.async.t_cljs$core$async31852(self__.alt_handler,self__.flag,self__.cb,meta31853__$1));
});

cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31854){
var self__ = this;
var _31854__$1 = this;
return self__.meta31853;
});

cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31853","meta31853",-1092233411,null)], null);
});

cljs.core.async.t_cljs$core$async31852.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31852";

cljs.core.async.t_cljs$core$async31852.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async31852");
});

cljs.core.async.__GT_t_cljs$core$async31852 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31852(alt_handler__$1,flag__$1,cb__$1,meta31853){
return (new cljs.core.async.t_cljs$core$async31852(alt_handler__$1,flag__$1,cb__$1,meta31853));
});

}

return (new cljs.core.async.t_cljs$core$async31852(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31855_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31855_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31856_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31856_SHARP_,port], null));
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
var G__31857 = (i + (1));
i = G__31857;
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
var len__26121__auto___31863 = arguments.length;
var i__26122__auto___31864 = (0);
while(true){
if((i__26122__auto___31864 < len__26121__auto___31863)){
args__26128__auto__.push((arguments[i__26122__auto___31864]));

var G__31865 = (i__26122__auto___31864 + (1));
i__26122__auto___31864 = G__31865;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31860){
var map__31861 = p__31860;
var map__31861__$1 = ((((!((map__31861 == null)))?((((map__31861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31861):map__31861);
var opts = map__31861__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31858){
var G__31859 = cljs.core.first.call(null,seq31858);
var seq31858__$1 = cljs.core.next.call(null,seq31858);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31859,seq31858__$1);
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
var args31866 = [];
var len__26121__auto___31916 = arguments.length;
var i__26122__auto___31917 = (0);
while(true){
if((i__26122__auto___31917 < len__26121__auto___31916)){
args31866.push((arguments[i__26122__auto___31917]));

var G__31918 = (i__26122__auto___31917 + (1));
i__26122__auto___31917 = G__31918;
continue;
} else {
}
break;
}

var G__31868 = args31866.length;
switch (G__31868) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31866.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31753__auto___31920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto___31920){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto___31920){
return (function (state_31892){
var state_val_31893 = (state_31892[(1)]);
if((state_val_31893 === (7))){
var inst_31888 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
var statearr_31894_31921 = state_31892__$1;
(statearr_31894_31921[(2)] = inst_31888);

(statearr_31894_31921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (1))){
var state_31892__$1 = state_31892;
var statearr_31895_31922 = state_31892__$1;
(statearr_31895_31922[(2)] = null);

(statearr_31895_31922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (4))){
var inst_31871 = (state_31892[(7)]);
var inst_31871__$1 = (state_31892[(2)]);
var inst_31872 = (inst_31871__$1 == null);
var state_31892__$1 = (function (){var statearr_31896 = state_31892;
(statearr_31896[(7)] = inst_31871__$1);

return statearr_31896;
})();
if(cljs.core.truth_(inst_31872)){
var statearr_31897_31923 = state_31892__$1;
(statearr_31897_31923[(1)] = (5));

} else {
var statearr_31898_31924 = state_31892__$1;
(statearr_31898_31924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (13))){
var state_31892__$1 = state_31892;
var statearr_31899_31925 = state_31892__$1;
(statearr_31899_31925[(2)] = null);

(statearr_31899_31925[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (6))){
var inst_31871 = (state_31892[(7)]);
var state_31892__$1 = state_31892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31892__$1,(11),to,inst_31871);
} else {
if((state_val_31893 === (3))){
var inst_31890 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31892__$1,inst_31890);
} else {
if((state_val_31893 === (12))){
var state_31892__$1 = state_31892;
var statearr_31900_31926 = state_31892__$1;
(statearr_31900_31926[(2)] = null);

(statearr_31900_31926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (2))){
var state_31892__$1 = state_31892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31892__$1,(4),from);
} else {
if((state_val_31893 === (11))){
var inst_31881 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
if(cljs.core.truth_(inst_31881)){
var statearr_31901_31927 = state_31892__$1;
(statearr_31901_31927[(1)] = (12));

} else {
var statearr_31902_31928 = state_31892__$1;
(statearr_31902_31928[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (9))){
var state_31892__$1 = state_31892;
var statearr_31903_31929 = state_31892__$1;
(statearr_31903_31929[(2)] = null);

(statearr_31903_31929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (5))){
var state_31892__$1 = state_31892;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31904_31930 = state_31892__$1;
(statearr_31904_31930[(1)] = (8));

} else {
var statearr_31905_31931 = state_31892__$1;
(statearr_31905_31931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (14))){
var inst_31886 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
var statearr_31906_31932 = state_31892__$1;
(statearr_31906_31932[(2)] = inst_31886);

(statearr_31906_31932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (10))){
var inst_31878 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
var statearr_31907_31933 = state_31892__$1;
(statearr_31907_31933[(2)] = inst_31878);

(statearr_31907_31933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (8))){
var inst_31875 = cljs.core.async.close_BANG_.call(null,to);
var state_31892__$1 = state_31892;
var statearr_31908_31934 = state_31892__$1;
(statearr_31908_31934[(2)] = inst_31875);

(statearr_31908_31934[(1)] = (10));


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
});})(c__31753__auto___31920))
;
return ((function (switch__31732__auto__,c__31753__auto___31920){
return (function() {
var cljs$core$async$state_machine__31733__auto__ = null;
var cljs$core$async$state_machine__31733__auto____0 = (function (){
var statearr_31912 = [null,null,null,null,null,null,null,null];
(statearr_31912[(0)] = cljs$core$async$state_machine__31733__auto__);

(statearr_31912[(1)] = (1));

return statearr_31912;
});
var cljs$core$async$state_machine__31733__auto____1 = (function (state_31892){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_31892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e31913){if((e31913 instanceof Object)){
var ex__31736__auto__ = e31913;
var statearr_31914_31935 = state_31892;
(statearr_31914_31935[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31936 = state_31892;
state_31892 = G__31936;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
cljs$core$async$state_machine__31733__auto__ = function(state_31892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31733__auto____1.call(this,state_31892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31733__auto____0;
cljs$core$async$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31733__auto____1;
return cljs$core$async$state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto___31920))
})();
var state__31755__auto__ = (function (){var statearr_31915 = f__31754__auto__.call(null);
(statearr_31915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto___31920);

return statearr_31915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto___31920))
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
return (function (p__32124){
var vec__32125 = p__32124;
var v = cljs.core.nth.call(null,vec__32125,(0),null);
var p = cljs.core.nth.call(null,vec__32125,(1),null);
var job = vec__32125;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31753__auto___32311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto___32311,res,vec__32125,v,p,job,jobs,results){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto___32311,res,vec__32125,v,p,job,jobs,results){
return (function (state_32132){
var state_val_32133 = (state_32132[(1)]);
if((state_val_32133 === (1))){
var state_32132__$1 = state_32132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32132__$1,(2),res,v);
} else {
if((state_val_32133 === (2))){
var inst_32129 = (state_32132[(2)]);
var inst_32130 = cljs.core.async.close_BANG_.call(null,res);
var state_32132__$1 = (function (){var statearr_32134 = state_32132;
(statearr_32134[(7)] = inst_32129);

return statearr_32134;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32132__$1,inst_32130);
} else {
return null;
}
}
});})(c__31753__auto___32311,res,vec__32125,v,p,job,jobs,results))
;
return ((function (switch__31732__auto__,c__31753__auto___32311,res,vec__32125,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____0 = (function (){
var statearr_32138 = [null,null,null,null,null,null,null,null];
(statearr_32138[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__);

(statearr_32138[(1)] = (1));

return statearr_32138;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____1 = (function (state_32132){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_32132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e32139){if((e32139 instanceof Object)){
var ex__31736__auto__ = e32139;
var statearr_32140_32312 = state_32132;
(statearr_32140_32312[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32313 = state_32132;
state_32132 = G__32313;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__ = function(state_32132){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____1.call(this,state_32132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto___32311,res,vec__32125,v,p,job,jobs,results))
})();
var state__31755__auto__ = (function (){var statearr_32141 = f__31754__auto__.call(null);
(statearr_32141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto___32311);

return statearr_32141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto___32311,res,vec__32125,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32142){
var vec__32143 = p__32142;
var v = cljs.core.nth.call(null,vec__32143,(0),null);
var p = cljs.core.nth.call(null,vec__32143,(1),null);
var job = vec__32143;
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
var n__25961__auto___32314 = n;
var __32315 = (0);
while(true){
if((__32315 < n__25961__auto___32314)){
var G__32146_32316 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32146_32316) {
case "compute":
var c__31753__auto___32318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32315,c__31753__auto___32318,G__32146_32316,n__25961__auto___32314,jobs,results,process,async){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (__32315,c__31753__auto___32318,G__32146_32316,n__25961__auto___32314,jobs,results,process,async){
return (function (state_32159){
var state_val_32160 = (state_32159[(1)]);
if((state_val_32160 === (1))){
var state_32159__$1 = state_32159;
var statearr_32161_32319 = state_32159__$1;
(statearr_32161_32319[(2)] = null);

(statearr_32161_32319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (2))){
var state_32159__$1 = state_32159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32159__$1,(4),jobs);
} else {
if((state_val_32160 === (3))){
var inst_32157 = (state_32159[(2)]);
var state_32159__$1 = state_32159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32159__$1,inst_32157);
} else {
if((state_val_32160 === (4))){
var inst_32149 = (state_32159[(2)]);
var inst_32150 = process.call(null,inst_32149);
var state_32159__$1 = state_32159;
if(cljs.core.truth_(inst_32150)){
var statearr_32162_32320 = state_32159__$1;
(statearr_32162_32320[(1)] = (5));

} else {
var statearr_32163_32321 = state_32159__$1;
(statearr_32163_32321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (5))){
var state_32159__$1 = state_32159;
var statearr_32164_32322 = state_32159__$1;
(statearr_32164_32322[(2)] = null);

(statearr_32164_32322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (6))){
var state_32159__$1 = state_32159;
var statearr_32165_32323 = state_32159__$1;
(statearr_32165_32323[(2)] = null);

(statearr_32165_32323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (7))){
var inst_32155 = (state_32159[(2)]);
var state_32159__$1 = state_32159;
var statearr_32166_32324 = state_32159__$1;
(statearr_32166_32324[(2)] = inst_32155);

(statearr_32166_32324[(1)] = (3));


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
});})(__32315,c__31753__auto___32318,G__32146_32316,n__25961__auto___32314,jobs,results,process,async))
;
return ((function (__32315,switch__31732__auto__,c__31753__auto___32318,G__32146_32316,n__25961__auto___32314,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____0 = (function (){
var statearr_32170 = [null,null,null,null,null,null,null];
(statearr_32170[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__);

(statearr_32170[(1)] = (1));

return statearr_32170;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____1 = (function (state_32159){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_32159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e32171){if((e32171 instanceof Object)){
var ex__31736__auto__ = e32171;
var statearr_32172_32325 = state_32159;
(statearr_32172_32325[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32326 = state_32159;
state_32159 = G__32326;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__ = function(state_32159){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____1.call(this,state_32159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__;
})()
;})(__32315,switch__31732__auto__,c__31753__auto___32318,G__32146_32316,n__25961__auto___32314,jobs,results,process,async))
})();
var state__31755__auto__ = (function (){var statearr_32173 = f__31754__auto__.call(null);
(statearr_32173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto___32318);

return statearr_32173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(__32315,c__31753__auto___32318,G__32146_32316,n__25961__auto___32314,jobs,results,process,async))
);


break;
case "async":
var c__31753__auto___32327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32315,c__31753__auto___32327,G__32146_32316,n__25961__auto___32314,jobs,results,process,async){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (__32315,c__31753__auto___32327,G__32146_32316,n__25961__auto___32314,jobs,results,process,async){
return (function (state_32186){
var state_val_32187 = (state_32186[(1)]);
if((state_val_32187 === (1))){
var state_32186__$1 = state_32186;
var statearr_32188_32328 = state_32186__$1;
(statearr_32188_32328[(2)] = null);

(statearr_32188_32328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (2))){
var state_32186__$1 = state_32186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32186__$1,(4),jobs);
} else {
if((state_val_32187 === (3))){
var inst_32184 = (state_32186[(2)]);
var state_32186__$1 = state_32186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32186__$1,inst_32184);
} else {
if((state_val_32187 === (4))){
var inst_32176 = (state_32186[(2)]);
var inst_32177 = async.call(null,inst_32176);
var state_32186__$1 = state_32186;
if(cljs.core.truth_(inst_32177)){
var statearr_32189_32329 = state_32186__$1;
(statearr_32189_32329[(1)] = (5));

} else {
var statearr_32190_32330 = state_32186__$1;
(statearr_32190_32330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (5))){
var state_32186__$1 = state_32186;
var statearr_32191_32331 = state_32186__$1;
(statearr_32191_32331[(2)] = null);

(statearr_32191_32331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (6))){
var state_32186__$1 = state_32186;
var statearr_32192_32332 = state_32186__$1;
(statearr_32192_32332[(2)] = null);

(statearr_32192_32332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (7))){
var inst_32182 = (state_32186[(2)]);
var state_32186__$1 = state_32186;
var statearr_32193_32333 = state_32186__$1;
(statearr_32193_32333[(2)] = inst_32182);

(statearr_32193_32333[(1)] = (3));


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
});})(__32315,c__31753__auto___32327,G__32146_32316,n__25961__auto___32314,jobs,results,process,async))
;
return ((function (__32315,switch__31732__auto__,c__31753__auto___32327,G__32146_32316,n__25961__auto___32314,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____0 = (function (){
var statearr_32197 = [null,null,null,null,null,null,null];
(statearr_32197[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__);

(statearr_32197[(1)] = (1));

return statearr_32197;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____1 = (function (state_32186){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_32186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e32198){if((e32198 instanceof Object)){
var ex__31736__auto__ = e32198;
var statearr_32199_32334 = state_32186;
(statearr_32199_32334[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32335 = state_32186;
state_32186 = G__32335;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__ = function(state_32186){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____1.call(this,state_32186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__;
})()
;})(__32315,switch__31732__auto__,c__31753__auto___32327,G__32146_32316,n__25961__auto___32314,jobs,results,process,async))
})();
var state__31755__auto__ = (function (){var statearr_32200 = f__31754__auto__.call(null);
(statearr_32200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto___32327);

return statearr_32200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(__32315,c__31753__auto___32327,G__32146_32316,n__25961__auto___32314,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32336 = (__32315 + (1));
__32315 = G__32336;
continue;
} else {
}
break;
}

var c__31753__auto___32337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto___32337,jobs,results,process,async){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto___32337,jobs,results,process,async){
return (function (state_32222){
var state_val_32223 = (state_32222[(1)]);
if((state_val_32223 === (1))){
var state_32222__$1 = state_32222;
var statearr_32224_32338 = state_32222__$1;
(statearr_32224_32338[(2)] = null);

(statearr_32224_32338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32223 === (2))){
var state_32222__$1 = state_32222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32222__$1,(4),from);
} else {
if((state_val_32223 === (3))){
var inst_32220 = (state_32222[(2)]);
var state_32222__$1 = state_32222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32222__$1,inst_32220);
} else {
if((state_val_32223 === (4))){
var inst_32203 = (state_32222[(7)]);
var inst_32203__$1 = (state_32222[(2)]);
var inst_32204 = (inst_32203__$1 == null);
var state_32222__$1 = (function (){var statearr_32225 = state_32222;
(statearr_32225[(7)] = inst_32203__$1);

return statearr_32225;
})();
if(cljs.core.truth_(inst_32204)){
var statearr_32226_32339 = state_32222__$1;
(statearr_32226_32339[(1)] = (5));

} else {
var statearr_32227_32340 = state_32222__$1;
(statearr_32227_32340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32223 === (5))){
var inst_32206 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32222__$1 = state_32222;
var statearr_32228_32341 = state_32222__$1;
(statearr_32228_32341[(2)] = inst_32206);

(statearr_32228_32341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32223 === (6))){
var inst_32208 = (state_32222[(8)]);
var inst_32203 = (state_32222[(7)]);
var inst_32208__$1 = cljs.core.async.chan.call(null,(1));
var inst_32209 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32210 = [inst_32203,inst_32208__$1];
var inst_32211 = (new cljs.core.PersistentVector(null,2,(5),inst_32209,inst_32210,null));
var state_32222__$1 = (function (){var statearr_32229 = state_32222;
(statearr_32229[(8)] = inst_32208__$1);

return statearr_32229;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32222__$1,(8),jobs,inst_32211);
} else {
if((state_val_32223 === (7))){
var inst_32218 = (state_32222[(2)]);
var state_32222__$1 = state_32222;
var statearr_32230_32342 = state_32222__$1;
(statearr_32230_32342[(2)] = inst_32218);

(statearr_32230_32342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32223 === (8))){
var inst_32208 = (state_32222[(8)]);
var inst_32213 = (state_32222[(2)]);
var state_32222__$1 = (function (){var statearr_32231 = state_32222;
(statearr_32231[(9)] = inst_32213);

return statearr_32231;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32222__$1,(9),results,inst_32208);
} else {
if((state_val_32223 === (9))){
var inst_32215 = (state_32222[(2)]);
var state_32222__$1 = (function (){var statearr_32232 = state_32222;
(statearr_32232[(10)] = inst_32215);

return statearr_32232;
})();
var statearr_32233_32343 = state_32222__$1;
(statearr_32233_32343[(2)] = null);

(statearr_32233_32343[(1)] = (2));


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
});})(c__31753__auto___32337,jobs,results,process,async))
;
return ((function (switch__31732__auto__,c__31753__auto___32337,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____0 = (function (){
var statearr_32237 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32237[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__);

(statearr_32237[(1)] = (1));

return statearr_32237;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____1 = (function (state_32222){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_32222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e32238){if((e32238 instanceof Object)){
var ex__31736__auto__ = e32238;
var statearr_32239_32344 = state_32222;
(statearr_32239_32344[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32345 = state_32222;
state_32222 = G__32345;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__ = function(state_32222){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____1.call(this,state_32222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto___32337,jobs,results,process,async))
})();
var state__31755__auto__ = (function (){var statearr_32240 = f__31754__auto__.call(null);
(statearr_32240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto___32337);

return statearr_32240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto___32337,jobs,results,process,async))
);


var c__31753__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto__,jobs,results,process,async){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto__,jobs,results,process,async){
return (function (state_32278){
var state_val_32279 = (state_32278[(1)]);
if((state_val_32279 === (7))){
var inst_32274 = (state_32278[(2)]);
var state_32278__$1 = state_32278;
var statearr_32280_32346 = state_32278__$1;
(statearr_32280_32346[(2)] = inst_32274);

(statearr_32280_32346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (20))){
var state_32278__$1 = state_32278;
var statearr_32281_32347 = state_32278__$1;
(statearr_32281_32347[(2)] = null);

(statearr_32281_32347[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (1))){
var state_32278__$1 = state_32278;
var statearr_32282_32348 = state_32278__$1;
(statearr_32282_32348[(2)] = null);

(statearr_32282_32348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (4))){
var inst_32243 = (state_32278[(7)]);
var inst_32243__$1 = (state_32278[(2)]);
var inst_32244 = (inst_32243__$1 == null);
var state_32278__$1 = (function (){var statearr_32283 = state_32278;
(statearr_32283[(7)] = inst_32243__$1);

return statearr_32283;
})();
if(cljs.core.truth_(inst_32244)){
var statearr_32284_32349 = state_32278__$1;
(statearr_32284_32349[(1)] = (5));

} else {
var statearr_32285_32350 = state_32278__$1;
(statearr_32285_32350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (15))){
var inst_32256 = (state_32278[(8)]);
var state_32278__$1 = state_32278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32278__$1,(18),to,inst_32256);
} else {
if((state_val_32279 === (21))){
var inst_32269 = (state_32278[(2)]);
var state_32278__$1 = state_32278;
var statearr_32286_32351 = state_32278__$1;
(statearr_32286_32351[(2)] = inst_32269);

(statearr_32286_32351[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (13))){
var inst_32271 = (state_32278[(2)]);
var state_32278__$1 = (function (){var statearr_32287 = state_32278;
(statearr_32287[(9)] = inst_32271);

return statearr_32287;
})();
var statearr_32288_32352 = state_32278__$1;
(statearr_32288_32352[(2)] = null);

(statearr_32288_32352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (6))){
var inst_32243 = (state_32278[(7)]);
var state_32278__$1 = state_32278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32278__$1,(11),inst_32243);
} else {
if((state_val_32279 === (17))){
var inst_32264 = (state_32278[(2)]);
var state_32278__$1 = state_32278;
if(cljs.core.truth_(inst_32264)){
var statearr_32289_32353 = state_32278__$1;
(statearr_32289_32353[(1)] = (19));

} else {
var statearr_32290_32354 = state_32278__$1;
(statearr_32290_32354[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (3))){
var inst_32276 = (state_32278[(2)]);
var state_32278__$1 = state_32278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32278__$1,inst_32276);
} else {
if((state_val_32279 === (12))){
var inst_32253 = (state_32278[(10)]);
var state_32278__$1 = state_32278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32278__$1,(14),inst_32253);
} else {
if((state_val_32279 === (2))){
var state_32278__$1 = state_32278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32278__$1,(4),results);
} else {
if((state_val_32279 === (19))){
var state_32278__$1 = state_32278;
var statearr_32291_32355 = state_32278__$1;
(statearr_32291_32355[(2)] = null);

(statearr_32291_32355[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (11))){
var inst_32253 = (state_32278[(2)]);
var state_32278__$1 = (function (){var statearr_32292 = state_32278;
(statearr_32292[(10)] = inst_32253);

return statearr_32292;
})();
var statearr_32293_32356 = state_32278__$1;
(statearr_32293_32356[(2)] = null);

(statearr_32293_32356[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (9))){
var state_32278__$1 = state_32278;
var statearr_32294_32357 = state_32278__$1;
(statearr_32294_32357[(2)] = null);

(statearr_32294_32357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (5))){
var state_32278__$1 = state_32278;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32295_32358 = state_32278__$1;
(statearr_32295_32358[(1)] = (8));

} else {
var statearr_32296_32359 = state_32278__$1;
(statearr_32296_32359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (14))){
var inst_32258 = (state_32278[(11)]);
var inst_32256 = (state_32278[(8)]);
var inst_32256__$1 = (state_32278[(2)]);
var inst_32257 = (inst_32256__$1 == null);
var inst_32258__$1 = cljs.core.not.call(null,inst_32257);
var state_32278__$1 = (function (){var statearr_32297 = state_32278;
(statearr_32297[(11)] = inst_32258__$1);

(statearr_32297[(8)] = inst_32256__$1);

return statearr_32297;
})();
if(inst_32258__$1){
var statearr_32298_32360 = state_32278__$1;
(statearr_32298_32360[(1)] = (15));

} else {
var statearr_32299_32361 = state_32278__$1;
(statearr_32299_32361[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (16))){
var inst_32258 = (state_32278[(11)]);
var state_32278__$1 = state_32278;
var statearr_32300_32362 = state_32278__$1;
(statearr_32300_32362[(2)] = inst_32258);

(statearr_32300_32362[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (10))){
var inst_32250 = (state_32278[(2)]);
var state_32278__$1 = state_32278;
var statearr_32301_32363 = state_32278__$1;
(statearr_32301_32363[(2)] = inst_32250);

(statearr_32301_32363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (18))){
var inst_32261 = (state_32278[(2)]);
var state_32278__$1 = state_32278;
var statearr_32302_32364 = state_32278__$1;
(statearr_32302_32364[(2)] = inst_32261);

(statearr_32302_32364[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32279 === (8))){
var inst_32247 = cljs.core.async.close_BANG_.call(null,to);
var state_32278__$1 = state_32278;
var statearr_32303_32365 = state_32278__$1;
(statearr_32303_32365[(2)] = inst_32247);

(statearr_32303_32365[(1)] = (10));


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
});})(c__31753__auto__,jobs,results,process,async))
;
return ((function (switch__31732__auto__,c__31753__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____0 = (function (){
var statearr_32307 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32307[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__);

(statearr_32307[(1)] = (1));

return statearr_32307;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____1 = (function (state_32278){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_32278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e32308){if((e32308 instanceof Object)){
var ex__31736__auto__ = e32308;
var statearr_32309_32366 = state_32278;
(statearr_32309_32366[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32367 = state_32278;
state_32278 = G__32367;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__ = function(state_32278){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____1.call(this,state_32278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto__,jobs,results,process,async))
})();
var state__31755__auto__ = (function (){var statearr_32310 = f__31754__auto__.call(null);
(statearr_32310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto__);

return statearr_32310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto__,jobs,results,process,async))
);

return c__31753__auto__;
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
var args32368 = [];
var len__26121__auto___32371 = arguments.length;
var i__26122__auto___32372 = (0);
while(true){
if((i__26122__auto___32372 < len__26121__auto___32371)){
args32368.push((arguments[i__26122__auto___32372]));

var G__32373 = (i__26122__auto___32372 + (1));
i__26122__auto___32372 = G__32373;
continue;
} else {
}
break;
}

var G__32370 = args32368.length;
switch (G__32370) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32368.length)].join('')));

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
var args32375 = [];
var len__26121__auto___32378 = arguments.length;
var i__26122__auto___32379 = (0);
while(true){
if((i__26122__auto___32379 < len__26121__auto___32378)){
args32375.push((arguments[i__26122__auto___32379]));

var G__32380 = (i__26122__auto___32379 + (1));
i__26122__auto___32379 = G__32380;
continue;
} else {
}
break;
}

var G__32377 = args32375.length;
switch (G__32377) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32375.length)].join('')));

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
var args32382 = [];
var len__26121__auto___32435 = arguments.length;
var i__26122__auto___32436 = (0);
while(true){
if((i__26122__auto___32436 < len__26121__auto___32435)){
args32382.push((arguments[i__26122__auto___32436]));

var G__32437 = (i__26122__auto___32436 + (1));
i__26122__auto___32436 = G__32437;
continue;
} else {
}
break;
}

var G__32384 = args32382.length;
switch (G__32384) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32382.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31753__auto___32439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto___32439,tc,fc){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto___32439,tc,fc){
return (function (state_32410){
var state_val_32411 = (state_32410[(1)]);
if((state_val_32411 === (7))){
var inst_32406 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
var statearr_32412_32440 = state_32410__$1;
(statearr_32412_32440[(2)] = inst_32406);

(statearr_32412_32440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (1))){
var state_32410__$1 = state_32410;
var statearr_32413_32441 = state_32410__$1;
(statearr_32413_32441[(2)] = null);

(statearr_32413_32441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (4))){
var inst_32387 = (state_32410[(7)]);
var inst_32387__$1 = (state_32410[(2)]);
var inst_32388 = (inst_32387__$1 == null);
var state_32410__$1 = (function (){var statearr_32414 = state_32410;
(statearr_32414[(7)] = inst_32387__$1);

return statearr_32414;
})();
if(cljs.core.truth_(inst_32388)){
var statearr_32415_32442 = state_32410__$1;
(statearr_32415_32442[(1)] = (5));

} else {
var statearr_32416_32443 = state_32410__$1;
(statearr_32416_32443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (13))){
var state_32410__$1 = state_32410;
var statearr_32417_32444 = state_32410__$1;
(statearr_32417_32444[(2)] = null);

(statearr_32417_32444[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (6))){
var inst_32387 = (state_32410[(7)]);
var inst_32393 = p.call(null,inst_32387);
var state_32410__$1 = state_32410;
if(cljs.core.truth_(inst_32393)){
var statearr_32418_32445 = state_32410__$1;
(statearr_32418_32445[(1)] = (9));

} else {
var statearr_32419_32446 = state_32410__$1;
(statearr_32419_32446[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (3))){
var inst_32408 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32410__$1,inst_32408);
} else {
if((state_val_32411 === (12))){
var state_32410__$1 = state_32410;
var statearr_32420_32447 = state_32410__$1;
(statearr_32420_32447[(2)] = null);

(statearr_32420_32447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (2))){
var state_32410__$1 = state_32410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32410__$1,(4),ch);
} else {
if((state_val_32411 === (11))){
var inst_32387 = (state_32410[(7)]);
var inst_32397 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32410__$1,(8),inst_32397,inst_32387);
} else {
if((state_val_32411 === (9))){
var state_32410__$1 = state_32410;
var statearr_32421_32448 = state_32410__$1;
(statearr_32421_32448[(2)] = tc);

(statearr_32421_32448[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (5))){
var inst_32390 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32391 = cljs.core.async.close_BANG_.call(null,fc);
var state_32410__$1 = (function (){var statearr_32422 = state_32410;
(statearr_32422[(8)] = inst_32390);

return statearr_32422;
})();
var statearr_32423_32449 = state_32410__$1;
(statearr_32423_32449[(2)] = inst_32391);

(statearr_32423_32449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (14))){
var inst_32404 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
var statearr_32424_32450 = state_32410__$1;
(statearr_32424_32450[(2)] = inst_32404);

(statearr_32424_32450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (10))){
var state_32410__$1 = state_32410;
var statearr_32425_32451 = state_32410__$1;
(statearr_32425_32451[(2)] = fc);

(statearr_32425_32451[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (8))){
var inst_32399 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
if(cljs.core.truth_(inst_32399)){
var statearr_32426_32452 = state_32410__$1;
(statearr_32426_32452[(1)] = (12));

} else {
var statearr_32427_32453 = state_32410__$1;
(statearr_32427_32453[(1)] = (13));

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
});})(c__31753__auto___32439,tc,fc))
;
return ((function (switch__31732__auto__,c__31753__auto___32439,tc,fc){
return (function() {
var cljs$core$async$state_machine__31733__auto__ = null;
var cljs$core$async$state_machine__31733__auto____0 = (function (){
var statearr_32431 = [null,null,null,null,null,null,null,null,null];
(statearr_32431[(0)] = cljs$core$async$state_machine__31733__auto__);

(statearr_32431[(1)] = (1));

return statearr_32431;
});
var cljs$core$async$state_machine__31733__auto____1 = (function (state_32410){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_32410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e32432){if((e32432 instanceof Object)){
var ex__31736__auto__ = e32432;
var statearr_32433_32454 = state_32410;
(statearr_32433_32454[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32455 = state_32410;
state_32410 = G__32455;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
cljs$core$async$state_machine__31733__auto__ = function(state_32410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31733__auto____1.call(this,state_32410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31733__auto____0;
cljs$core$async$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31733__auto____1;
return cljs$core$async$state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto___32439,tc,fc))
})();
var state__31755__auto__ = (function (){var statearr_32434 = f__31754__auto__.call(null);
(statearr_32434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto___32439);

return statearr_32434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto___32439,tc,fc))
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
var c__31753__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto__){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto__){
return (function (state_32519){
var state_val_32520 = (state_32519[(1)]);
if((state_val_32520 === (7))){
var inst_32515 = (state_32519[(2)]);
var state_32519__$1 = state_32519;
var statearr_32521_32542 = state_32519__$1;
(statearr_32521_32542[(2)] = inst_32515);

(statearr_32521_32542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32520 === (1))){
var inst_32499 = init;
var state_32519__$1 = (function (){var statearr_32522 = state_32519;
(statearr_32522[(7)] = inst_32499);

return statearr_32522;
})();
var statearr_32523_32543 = state_32519__$1;
(statearr_32523_32543[(2)] = null);

(statearr_32523_32543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32520 === (4))){
var inst_32502 = (state_32519[(8)]);
var inst_32502__$1 = (state_32519[(2)]);
var inst_32503 = (inst_32502__$1 == null);
var state_32519__$1 = (function (){var statearr_32524 = state_32519;
(statearr_32524[(8)] = inst_32502__$1);

return statearr_32524;
})();
if(cljs.core.truth_(inst_32503)){
var statearr_32525_32544 = state_32519__$1;
(statearr_32525_32544[(1)] = (5));

} else {
var statearr_32526_32545 = state_32519__$1;
(statearr_32526_32545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32520 === (6))){
var inst_32506 = (state_32519[(9)]);
var inst_32502 = (state_32519[(8)]);
var inst_32499 = (state_32519[(7)]);
var inst_32506__$1 = f.call(null,inst_32499,inst_32502);
var inst_32507 = cljs.core.reduced_QMARK_.call(null,inst_32506__$1);
var state_32519__$1 = (function (){var statearr_32527 = state_32519;
(statearr_32527[(9)] = inst_32506__$1);

return statearr_32527;
})();
if(inst_32507){
var statearr_32528_32546 = state_32519__$1;
(statearr_32528_32546[(1)] = (8));

} else {
var statearr_32529_32547 = state_32519__$1;
(statearr_32529_32547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32520 === (3))){
var inst_32517 = (state_32519[(2)]);
var state_32519__$1 = state_32519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32519__$1,inst_32517);
} else {
if((state_val_32520 === (2))){
var state_32519__$1 = state_32519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32519__$1,(4),ch);
} else {
if((state_val_32520 === (9))){
var inst_32506 = (state_32519[(9)]);
var inst_32499 = inst_32506;
var state_32519__$1 = (function (){var statearr_32530 = state_32519;
(statearr_32530[(7)] = inst_32499);

return statearr_32530;
})();
var statearr_32531_32548 = state_32519__$1;
(statearr_32531_32548[(2)] = null);

(statearr_32531_32548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32520 === (5))){
var inst_32499 = (state_32519[(7)]);
var state_32519__$1 = state_32519;
var statearr_32532_32549 = state_32519__$1;
(statearr_32532_32549[(2)] = inst_32499);

(statearr_32532_32549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32520 === (10))){
var inst_32513 = (state_32519[(2)]);
var state_32519__$1 = state_32519;
var statearr_32533_32550 = state_32519__$1;
(statearr_32533_32550[(2)] = inst_32513);

(statearr_32533_32550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32520 === (8))){
var inst_32506 = (state_32519[(9)]);
var inst_32509 = cljs.core.deref.call(null,inst_32506);
var state_32519__$1 = state_32519;
var statearr_32534_32551 = state_32519__$1;
(statearr_32534_32551[(2)] = inst_32509);

(statearr_32534_32551[(1)] = (10));


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
});})(c__31753__auto__))
;
return ((function (switch__31732__auto__,c__31753__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31733__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31733__auto____0 = (function (){
var statearr_32538 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32538[(0)] = cljs$core$async$reduce_$_state_machine__31733__auto__);

(statearr_32538[(1)] = (1));

return statearr_32538;
});
var cljs$core$async$reduce_$_state_machine__31733__auto____1 = (function (state_32519){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_32519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e32539){if((e32539 instanceof Object)){
var ex__31736__auto__ = e32539;
var statearr_32540_32552 = state_32519;
(statearr_32540_32552[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32553 = state_32519;
state_32519 = G__32553;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31733__auto__ = function(state_32519){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31733__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31733__auto____1.call(this,state_32519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31733__auto____0;
cljs$core$async$reduce_$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31733__auto____1;
return cljs$core$async$reduce_$_state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto__))
})();
var state__31755__auto__ = (function (){var statearr_32541 = f__31754__auto__.call(null);
(statearr_32541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto__);

return statearr_32541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto__))
);

return c__31753__auto__;
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
var args32554 = [];
var len__26121__auto___32606 = arguments.length;
var i__26122__auto___32607 = (0);
while(true){
if((i__26122__auto___32607 < len__26121__auto___32606)){
args32554.push((arguments[i__26122__auto___32607]));

var G__32608 = (i__26122__auto___32607 + (1));
i__26122__auto___32607 = G__32608;
continue;
} else {
}
break;
}

var G__32556 = args32554.length;
switch (G__32556) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32554.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31753__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto__){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto__){
return (function (state_32581){
var state_val_32582 = (state_32581[(1)]);
if((state_val_32582 === (7))){
var inst_32563 = (state_32581[(2)]);
var state_32581__$1 = state_32581;
var statearr_32583_32610 = state_32581__$1;
(statearr_32583_32610[(2)] = inst_32563);

(statearr_32583_32610[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32582 === (1))){
var inst_32557 = cljs.core.seq.call(null,coll);
var inst_32558 = inst_32557;
var state_32581__$1 = (function (){var statearr_32584 = state_32581;
(statearr_32584[(7)] = inst_32558);

return statearr_32584;
})();
var statearr_32585_32611 = state_32581__$1;
(statearr_32585_32611[(2)] = null);

(statearr_32585_32611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32582 === (4))){
var inst_32558 = (state_32581[(7)]);
var inst_32561 = cljs.core.first.call(null,inst_32558);
var state_32581__$1 = state_32581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32581__$1,(7),ch,inst_32561);
} else {
if((state_val_32582 === (13))){
var inst_32575 = (state_32581[(2)]);
var state_32581__$1 = state_32581;
var statearr_32586_32612 = state_32581__$1;
(statearr_32586_32612[(2)] = inst_32575);

(statearr_32586_32612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32582 === (6))){
var inst_32566 = (state_32581[(2)]);
var state_32581__$1 = state_32581;
if(cljs.core.truth_(inst_32566)){
var statearr_32587_32613 = state_32581__$1;
(statearr_32587_32613[(1)] = (8));

} else {
var statearr_32588_32614 = state_32581__$1;
(statearr_32588_32614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32582 === (3))){
var inst_32579 = (state_32581[(2)]);
var state_32581__$1 = state_32581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32581__$1,inst_32579);
} else {
if((state_val_32582 === (12))){
var state_32581__$1 = state_32581;
var statearr_32589_32615 = state_32581__$1;
(statearr_32589_32615[(2)] = null);

(statearr_32589_32615[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32582 === (2))){
var inst_32558 = (state_32581[(7)]);
var state_32581__$1 = state_32581;
if(cljs.core.truth_(inst_32558)){
var statearr_32590_32616 = state_32581__$1;
(statearr_32590_32616[(1)] = (4));

} else {
var statearr_32591_32617 = state_32581__$1;
(statearr_32591_32617[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32582 === (11))){
var inst_32572 = cljs.core.async.close_BANG_.call(null,ch);
var state_32581__$1 = state_32581;
var statearr_32592_32618 = state_32581__$1;
(statearr_32592_32618[(2)] = inst_32572);

(statearr_32592_32618[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32582 === (9))){
var state_32581__$1 = state_32581;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32593_32619 = state_32581__$1;
(statearr_32593_32619[(1)] = (11));

} else {
var statearr_32594_32620 = state_32581__$1;
(statearr_32594_32620[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32582 === (5))){
var inst_32558 = (state_32581[(7)]);
var state_32581__$1 = state_32581;
var statearr_32595_32621 = state_32581__$1;
(statearr_32595_32621[(2)] = inst_32558);

(statearr_32595_32621[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32582 === (10))){
var inst_32577 = (state_32581[(2)]);
var state_32581__$1 = state_32581;
var statearr_32596_32622 = state_32581__$1;
(statearr_32596_32622[(2)] = inst_32577);

(statearr_32596_32622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32582 === (8))){
var inst_32558 = (state_32581[(7)]);
var inst_32568 = cljs.core.next.call(null,inst_32558);
var inst_32558__$1 = inst_32568;
var state_32581__$1 = (function (){var statearr_32597 = state_32581;
(statearr_32597[(7)] = inst_32558__$1);

return statearr_32597;
})();
var statearr_32598_32623 = state_32581__$1;
(statearr_32598_32623[(2)] = null);

(statearr_32598_32623[(1)] = (2));


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
});})(c__31753__auto__))
;
return ((function (switch__31732__auto__,c__31753__auto__){
return (function() {
var cljs$core$async$state_machine__31733__auto__ = null;
var cljs$core$async$state_machine__31733__auto____0 = (function (){
var statearr_32602 = [null,null,null,null,null,null,null,null];
(statearr_32602[(0)] = cljs$core$async$state_machine__31733__auto__);

(statearr_32602[(1)] = (1));

return statearr_32602;
});
var cljs$core$async$state_machine__31733__auto____1 = (function (state_32581){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_32581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e32603){if((e32603 instanceof Object)){
var ex__31736__auto__ = e32603;
var statearr_32604_32624 = state_32581;
(statearr_32604_32624[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32625 = state_32581;
state_32581 = G__32625;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
cljs$core$async$state_machine__31733__auto__ = function(state_32581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31733__auto____1.call(this,state_32581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31733__auto____0;
cljs$core$async$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31733__auto____1;
return cljs$core$async$state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto__))
})();
var state__31755__auto__ = (function (){var statearr_32605 = f__31754__auto__.call(null);
(statearr_32605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto__);

return statearr_32605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto__))
);

return c__31753__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async32851 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32851 = (function (mult,ch,cs,meta32852){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta32852 = meta32852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32853,meta32852__$1){
var self__ = this;
var _32853__$1 = this;
return (new cljs.core.async.t_cljs$core$async32851(self__.mult,self__.ch,self__.cs,meta32852__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32851.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32853){
var self__ = this;
var _32853__$1 = this;
return self__.meta32852;
});})(cs))
;

cljs.core.async.t_cljs$core$async32851.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32851.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32851.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async32851.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32851.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32851.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32851.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32852","meta32852",811662831,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32851.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32851.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32851";

cljs.core.async.t_cljs$core$async32851.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async32851");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32851 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32851(mult__$1,ch__$1,cs__$1,meta32852){
return (new cljs.core.async.t_cljs$core$async32851(mult__$1,ch__$1,cs__$1,meta32852));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32851(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31753__auto___33076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto___33076,cs,m,dchan,dctr,done){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto___33076,cs,m,dchan,dctr,done){
return (function (state_32988){
var state_val_32989 = (state_32988[(1)]);
if((state_val_32989 === (7))){
var inst_32984 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_32990_33077 = state_32988__$1;
(statearr_32990_33077[(2)] = inst_32984);

(statearr_32990_33077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (20))){
var inst_32887 = (state_32988[(7)]);
var inst_32899 = cljs.core.first.call(null,inst_32887);
var inst_32900 = cljs.core.nth.call(null,inst_32899,(0),null);
var inst_32901 = cljs.core.nth.call(null,inst_32899,(1),null);
var state_32988__$1 = (function (){var statearr_32991 = state_32988;
(statearr_32991[(8)] = inst_32900);

return statearr_32991;
})();
if(cljs.core.truth_(inst_32901)){
var statearr_32992_33078 = state_32988__$1;
(statearr_32992_33078[(1)] = (22));

} else {
var statearr_32993_33079 = state_32988__$1;
(statearr_32993_33079[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (27))){
var inst_32931 = (state_32988[(9)]);
var inst_32936 = (state_32988[(10)]);
var inst_32856 = (state_32988[(11)]);
var inst_32929 = (state_32988[(12)]);
var inst_32936__$1 = cljs.core._nth.call(null,inst_32929,inst_32931);
var inst_32937 = cljs.core.async.put_BANG_.call(null,inst_32936__$1,inst_32856,done);
var state_32988__$1 = (function (){var statearr_32994 = state_32988;
(statearr_32994[(10)] = inst_32936__$1);

return statearr_32994;
})();
if(cljs.core.truth_(inst_32937)){
var statearr_32995_33080 = state_32988__$1;
(statearr_32995_33080[(1)] = (30));

} else {
var statearr_32996_33081 = state_32988__$1;
(statearr_32996_33081[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (1))){
var state_32988__$1 = state_32988;
var statearr_32997_33082 = state_32988__$1;
(statearr_32997_33082[(2)] = null);

(statearr_32997_33082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (24))){
var inst_32887 = (state_32988[(7)]);
var inst_32906 = (state_32988[(2)]);
var inst_32907 = cljs.core.next.call(null,inst_32887);
var inst_32865 = inst_32907;
var inst_32866 = null;
var inst_32867 = (0);
var inst_32868 = (0);
var state_32988__$1 = (function (){var statearr_32998 = state_32988;
(statearr_32998[(13)] = inst_32866);

(statearr_32998[(14)] = inst_32868);

(statearr_32998[(15)] = inst_32867);

(statearr_32998[(16)] = inst_32906);

(statearr_32998[(17)] = inst_32865);

return statearr_32998;
})();
var statearr_32999_33083 = state_32988__$1;
(statearr_32999_33083[(2)] = null);

(statearr_32999_33083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (39))){
var state_32988__$1 = state_32988;
var statearr_33003_33084 = state_32988__$1;
(statearr_33003_33084[(2)] = null);

(statearr_33003_33084[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (4))){
var inst_32856 = (state_32988[(11)]);
var inst_32856__$1 = (state_32988[(2)]);
var inst_32857 = (inst_32856__$1 == null);
var state_32988__$1 = (function (){var statearr_33004 = state_32988;
(statearr_33004[(11)] = inst_32856__$1);

return statearr_33004;
})();
if(cljs.core.truth_(inst_32857)){
var statearr_33005_33085 = state_32988__$1;
(statearr_33005_33085[(1)] = (5));

} else {
var statearr_33006_33086 = state_32988__$1;
(statearr_33006_33086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (15))){
var inst_32866 = (state_32988[(13)]);
var inst_32868 = (state_32988[(14)]);
var inst_32867 = (state_32988[(15)]);
var inst_32865 = (state_32988[(17)]);
var inst_32883 = (state_32988[(2)]);
var inst_32884 = (inst_32868 + (1));
var tmp33000 = inst_32866;
var tmp33001 = inst_32867;
var tmp33002 = inst_32865;
var inst_32865__$1 = tmp33002;
var inst_32866__$1 = tmp33000;
var inst_32867__$1 = tmp33001;
var inst_32868__$1 = inst_32884;
var state_32988__$1 = (function (){var statearr_33007 = state_32988;
(statearr_33007[(13)] = inst_32866__$1);

(statearr_33007[(14)] = inst_32868__$1);

(statearr_33007[(15)] = inst_32867__$1);

(statearr_33007[(18)] = inst_32883);

(statearr_33007[(17)] = inst_32865__$1);

return statearr_33007;
})();
var statearr_33008_33087 = state_32988__$1;
(statearr_33008_33087[(2)] = null);

(statearr_33008_33087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (21))){
var inst_32910 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33012_33088 = state_32988__$1;
(statearr_33012_33088[(2)] = inst_32910);

(statearr_33012_33088[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (31))){
var inst_32936 = (state_32988[(10)]);
var inst_32940 = done.call(null,null);
var inst_32941 = cljs.core.async.untap_STAR_.call(null,m,inst_32936);
var state_32988__$1 = (function (){var statearr_33013 = state_32988;
(statearr_33013[(19)] = inst_32940);

return statearr_33013;
})();
var statearr_33014_33089 = state_32988__$1;
(statearr_33014_33089[(2)] = inst_32941);

(statearr_33014_33089[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (32))){
var inst_32930 = (state_32988[(20)]);
var inst_32931 = (state_32988[(9)]);
var inst_32929 = (state_32988[(12)]);
var inst_32928 = (state_32988[(21)]);
var inst_32943 = (state_32988[(2)]);
var inst_32944 = (inst_32931 + (1));
var tmp33009 = inst_32930;
var tmp33010 = inst_32929;
var tmp33011 = inst_32928;
var inst_32928__$1 = tmp33011;
var inst_32929__$1 = tmp33010;
var inst_32930__$1 = tmp33009;
var inst_32931__$1 = inst_32944;
var state_32988__$1 = (function (){var statearr_33015 = state_32988;
(statearr_33015[(22)] = inst_32943);

(statearr_33015[(20)] = inst_32930__$1);

(statearr_33015[(9)] = inst_32931__$1);

(statearr_33015[(12)] = inst_32929__$1);

(statearr_33015[(21)] = inst_32928__$1);

return statearr_33015;
})();
var statearr_33016_33090 = state_32988__$1;
(statearr_33016_33090[(2)] = null);

(statearr_33016_33090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (40))){
var inst_32956 = (state_32988[(23)]);
var inst_32960 = done.call(null,null);
var inst_32961 = cljs.core.async.untap_STAR_.call(null,m,inst_32956);
var state_32988__$1 = (function (){var statearr_33017 = state_32988;
(statearr_33017[(24)] = inst_32960);

return statearr_33017;
})();
var statearr_33018_33091 = state_32988__$1;
(statearr_33018_33091[(2)] = inst_32961);

(statearr_33018_33091[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (33))){
var inst_32947 = (state_32988[(25)]);
var inst_32949 = cljs.core.chunked_seq_QMARK_.call(null,inst_32947);
var state_32988__$1 = state_32988;
if(inst_32949){
var statearr_33019_33092 = state_32988__$1;
(statearr_33019_33092[(1)] = (36));

} else {
var statearr_33020_33093 = state_32988__$1;
(statearr_33020_33093[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (13))){
var inst_32877 = (state_32988[(26)]);
var inst_32880 = cljs.core.async.close_BANG_.call(null,inst_32877);
var state_32988__$1 = state_32988;
var statearr_33021_33094 = state_32988__$1;
(statearr_33021_33094[(2)] = inst_32880);

(statearr_33021_33094[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (22))){
var inst_32900 = (state_32988[(8)]);
var inst_32903 = cljs.core.async.close_BANG_.call(null,inst_32900);
var state_32988__$1 = state_32988;
var statearr_33022_33095 = state_32988__$1;
(statearr_33022_33095[(2)] = inst_32903);

(statearr_33022_33095[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (36))){
var inst_32947 = (state_32988[(25)]);
var inst_32951 = cljs.core.chunk_first.call(null,inst_32947);
var inst_32952 = cljs.core.chunk_rest.call(null,inst_32947);
var inst_32953 = cljs.core.count.call(null,inst_32951);
var inst_32928 = inst_32952;
var inst_32929 = inst_32951;
var inst_32930 = inst_32953;
var inst_32931 = (0);
var state_32988__$1 = (function (){var statearr_33023 = state_32988;
(statearr_33023[(20)] = inst_32930);

(statearr_33023[(9)] = inst_32931);

(statearr_33023[(12)] = inst_32929);

(statearr_33023[(21)] = inst_32928);

return statearr_33023;
})();
var statearr_33024_33096 = state_32988__$1;
(statearr_33024_33096[(2)] = null);

(statearr_33024_33096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (41))){
var inst_32947 = (state_32988[(25)]);
var inst_32963 = (state_32988[(2)]);
var inst_32964 = cljs.core.next.call(null,inst_32947);
var inst_32928 = inst_32964;
var inst_32929 = null;
var inst_32930 = (0);
var inst_32931 = (0);
var state_32988__$1 = (function (){var statearr_33025 = state_32988;
(statearr_33025[(20)] = inst_32930);

(statearr_33025[(9)] = inst_32931);

(statearr_33025[(27)] = inst_32963);

(statearr_33025[(12)] = inst_32929);

(statearr_33025[(21)] = inst_32928);

return statearr_33025;
})();
var statearr_33026_33097 = state_32988__$1;
(statearr_33026_33097[(2)] = null);

(statearr_33026_33097[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (43))){
var state_32988__$1 = state_32988;
var statearr_33027_33098 = state_32988__$1;
(statearr_33027_33098[(2)] = null);

(statearr_33027_33098[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (29))){
var inst_32972 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33028_33099 = state_32988__$1;
(statearr_33028_33099[(2)] = inst_32972);

(statearr_33028_33099[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (44))){
var inst_32981 = (state_32988[(2)]);
var state_32988__$1 = (function (){var statearr_33029 = state_32988;
(statearr_33029[(28)] = inst_32981);

return statearr_33029;
})();
var statearr_33030_33100 = state_32988__$1;
(statearr_33030_33100[(2)] = null);

(statearr_33030_33100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (6))){
var inst_32920 = (state_32988[(29)]);
var inst_32919 = cljs.core.deref.call(null,cs);
var inst_32920__$1 = cljs.core.keys.call(null,inst_32919);
var inst_32921 = cljs.core.count.call(null,inst_32920__$1);
var inst_32922 = cljs.core.reset_BANG_.call(null,dctr,inst_32921);
var inst_32927 = cljs.core.seq.call(null,inst_32920__$1);
var inst_32928 = inst_32927;
var inst_32929 = null;
var inst_32930 = (0);
var inst_32931 = (0);
var state_32988__$1 = (function (){var statearr_33031 = state_32988;
(statearr_33031[(30)] = inst_32922);

(statearr_33031[(20)] = inst_32930);

(statearr_33031[(9)] = inst_32931);

(statearr_33031[(29)] = inst_32920__$1);

(statearr_33031[(12)] = inst_32929);

(statearr_33031[(21)] = inst_32928);

return statearr_33031;
})();
var statearr_33032_33101 = state_32988__$1;
(statearr_33032_33101[(2)] = null);

(statearr_33032_33101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (28))){
var inst_32947 = (state_32988[(25)]);
var inst_32928 = (state_32988[(21)]);
var inst_32947__$1 = cljs.core.seq.call(null,inst_32928);
var state_32988__$1 = (function (){var statearr_33033 = state_32988;
(statearr_33033[(25)] = inst_32947__$1);

return statearr_33033;
})();
if(inst_32947__$1){
var statearr_33034_33102 = state_32988__$1;
(statearr_33034_33102[(1)] = (33));

} else {
var statearr_33035_33103 = state_32988__$1;
(statearr_33035_33103[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (25))){
var inst_32930 = (state_32988[(20)]);
var inst_32931 = (state_32988[(9)]);
var inst_32933 = (inst_32931 < inst_32930);
var inst_32934 = inst_32933;
var state_32988__$1 = state_32988;
if(cljs.core.truth_(inst_32934)){
var statearr_33036_33104 = state_32988__$1;
(statearr_33036_33104[(1)] = (27));

} else {
var statearr_33037_33105 = state_32988__$1;
(statearr_33037_33105[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (34))){
var state_32988__$1 = state_32988;
var statearr_33038_33106 = state_32988__$1;
(statearr_33038_33106[(2)] = null);

(statearr_33038_33106[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (17))){
var state_32988__$1 = state_32988;
var statearr_33039_33107 = state_32988__$1;
(statearr_33039_33107[(2)] = null);

(statearr_33039_33107[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (3))){
var inst_32986 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32988__$1,inst_32986);
} else {
if((state_val_32989 === (12))){
var inst_32915 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33040_33108 = state_32988__$1;
(statearr_33040_33108[(2)] = inst_32915);

(statearr_33040_33108[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (2))){
var state_32988__$1 = state_32988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32988__$1,(4),ch);
} else {
if((state_val_32989 === (23))){
var state_32988__$1 = state_32988;
var statearr_33041_33109 = state_32988__$1;
(statearr_33041_33109[(2)] = null);

(statearr_33041_33109[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (35))){
var inst_32970 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33042_33110 = state_32988__$1;
(statearr_33042_33110[(2)] = inst_32970);

(statearr_33042_33110[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (19))){
var inst_32887 = (state_32988[(7)]);
var inst_32891 = cljs.core.chunk_first.call(null,inst_32887);
var inst_32892 = cljs.core.chunk_rest.call(null,inst_32887);
var inst_32893 = cljs.core.count.call(null,inst_32891);
var inst_32865 = inst_32892;
var inst_32866 = inst_32891;
var inst_32867 = inst_32893;
var inst_32868 = (0);
var state_32988__$1 = (function (){var statearr_33043 = state_32988;
(statearr_33043[(13)] = inst_32866);

(statearr_33043[(14)] = inst_32868);

(statearr_33043[(15)] = inst_32867);

(statearr_33043[(17)] = inst_32865);

return statearr_33043;
})();
var statearr_33044_33111 = state_32988__$1;
(statearr_33044_33111[(2)] = null);

(statearr_33044_33111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (11))){
var inst_32887 = (state_32988[(7)]);
var inst_32865 = (state_32988[(17)]);
var inst_32887__$1 = cljs.core.seq.call(null,inst_32865);
var state_32988__$1 = (function (){var statearr_33045 = state_32988;
(statearr_33045[(7)] = inst_32887__$1);

return statearr_33045;
})();
if(inst_32887__$1){
var statearr_33046_33112 = state_32988__$1;
(statearr_33046_33112[(1)] = (16));

} else {
var statearr_33047_33113 = state_32988__$1;
(statearr_33047_33113[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (9))){
var inst_32917 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33048_33114 = state_32988__$1;
(statearr_33048_33114[(2)] = inst_32917);

(statearr_33048_33114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (5))){
var inst_32863 = cljs.core.deref.call(null,cs);
var inst_32864 = cljs.core.seq.call(null,inst_32863);
var inst_32865 = inst_32864;
var inst_32866 = null;
var inst_32867 = (0);
var inst_32868 = (0);
var state_32988__$1 = (function (){var statearr_33049 = state_32988;
(statearr_33049[(13)] = inst_32866);

(statearr_33049[(14)] = inst_32868);

(statearr_33049[(15)] = inst_32867);

(statearr_33049[(17)] = inst_32865);

return statearr_33049;
})();
var statearr_33050_33115 = state_32988__$1;
(statearr_33050_33115[(2)] = null);

(statearr_33050_33115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (14))){
var state_32988__$1 = state_32988;
var statearr_33051_33116 = state_32988__$1;
(statearr_33051_33116[(2)] = null);

(statearr_33051_33116[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (45))){
var inst_32978 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33052_33117 = state_32988__$1;
(statearr_33052_33117[(2)] = inst_32978);

(statearr_33052_33117[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (26))){
var inst_32920 = (state_32988[(29)]);
var inst_32974 = (state_32988[(2)]);
var inst_32975 = cljs.core.seq.call(null,inst_32920);
var state_32988__$1 = (function (){var statearr_33053 = state_32988;
(statearr_33053[(31)] = inst_32974);

return statearr_33053;
})();
if(inst_32975){
var statearr_33054_33118 = state_32988__$1;
(statearr_33054_33118[(1)] = (42));

} else {
var statearr_33055_33119 = state_32988__$1;
(statearr_33055_33119[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (16))){
var inst_32887 = (state_32988[(7)]);
var inst_32889 = cljs.core.chunked_seq_QMARK_.call(null,inst_32887);
var state_32988__$1 = state_32988;
if(inst_32889){
var statearr_33056_33120 = state_32988__$1;
(statearr_33056_33120[(1)] = (19));

} else {
var statearr_33057_33121 = state_32988__$1;
(statearr_33057_33121[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (38))){
var inst_32967 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33058_33122 = state_32988__$1;
(statearr_33058_33122[(2)] = inst_32967);

(statearr_33058_33122[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (30))){
var state_32988__$1 = state_32988;
var statearr_33059_33123 = state_32988__$1;
(statearr_33059_33123[(2)] = null);

(statearr_33059_33123[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (10))){
var inst_32866 = (state_32988[(13)]);
var inst_32868 = (state_32988[(14)]);
var inst_32876 = cljs.core._nth.call(null,inst_32866,inst_32868);
var inst_32877 = cljs.core.nth.call(null,inst_32876,(0),null);
var inst_32878 = cljs.core.nth.call(null,inst_32876,(1),null);
var state_32988__$1 = (function (){var statearr_33060 = state_32988;
(statearr_33060[(26)] = inst_32877);

return statearr_33060;
})();
if(cljs.core.truth_(inst_32878)){
var statearr_33061_33124 = state_32988__$1;
(statearr_33061_33124[(1)] = (13));

} else {
var statearr_33062_33125 = state_32988__$1;
(statearr_33062_33125[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (18))){
var inst_32913 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33063_33126 = state_32988__$1;
(statearr_33063_33126[(2)] = inst_32913);

(statearr_33063_33126[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (42))){
var state_32988__$1 = state_32988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32988__$1,(45),dchan);
} else {
if((state_val_32989 === (37))){
var inst_32947 = (state_32988[(25)]);
var inst_32856 = (state_32988[(11)]);
var inst_32956 = (state_32988[(23)]);
var inst_32956__$1 = cljs.core.first.call(null,inst_32947);
var inst_32957 = cljs.core.async.put_BANG_.call(null,inst_32956__$1,inst_32856,done);
var state_32988__$1 = (function (){var statearr_33064 = state_32988;
(statearr_33064[(23)] = inst_32956__$1);

return statearr_33064;
})();
if(cljs.core.truth_(inst_32957)){
var statearr_33065_33127 = state_32988__$1;
(statearr_33065_33127[(1)] = (39));

} else {
var statearr_33066_33128 = state_32988__$1;
(statearr_33066_33128[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (8))){
var inst_32868 = (state_32988[(14)]);
var inst_32867 = (state_32988[(15)]);
var inst_32870 = (inst_32868 < inst_32867);
var inst_32871 = inst_32870;
var state_32988__$1 = state_32988;
if(cljs.core.truth_(inst_32871)){
var statearr_33067_33129 = state_32988__$1;
(statearr_33067_33129[(1)] = (10));

} else {
var statearr_33068_33130 = state_32988__$1;
(statearr_33068_33130[(1)] = (11));

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
});})(c__31753__auto___33076,cs,m,dchan,dctr,done))
;
return ((function (switch__31732__auto__,c__31753__auto___33076,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31733__auto__ = null;
var cljs$core$async$mult_$_state_machine__31733__auto____0 = (function (){
var statearr_33072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33072[(0)] = cljs$core$async$mult_$_state_machine__31733__auto__);

(statearr_33072[(1)] = (1));

return statearr_33072;
});
var cljs$core$async$mult_$_state_machine__31733__auto____1 = (function (state_32988){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_32988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e33073){if((e33073 instanceof Object)){
var ex__31736__auto__ = e33073;
var statearr_33074_33131 = state_32988;
(statearr_33074_33131[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33132 = state_32988;
state_32988 = G__33132;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31733__auto__ = function(state_32988){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31733__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31733__auto____1.call(this,state_32988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31733__auto____0;
cljs$core$async$mult_$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31733__auto____1;
return cljs$core$async$mult_$_state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto___33076,cs,m,dchan,dctr,done))
})();
var state__31755__auto__ = (function (){var statearr_33075 = f__31754__auto__.call(null);
(statearr_33075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto___33076);

return statearr_33075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto___33076,cs,m,dchan,dctr,done))
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
var args33133 = [];
var len__26121__auto___33136 = arguments.length;
var i__26122__auto___33137 = (0);
while(true){
if((i__26122__auto___33137 < len__26121__auto___33136)){
args33133.push((arguments[i__26122__auto___33137]));

var G__33138 = (i__26122__auto___33137 + (1));
i__26122__auto___33137 = G__33138;
continue;
} else {
}
break;
}

var G__33135 = args33133.length;
switch (G__33135) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33133.length)].join('')));

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
var len__26121__auto___33150 = arguments.length;
var i__26122__auto___33151 = (0);
while(true){
if((i__26122__auto___33151 < len__26121__auto___33150)){
args__26128__auto__.push((arguments[i__26122__auto___33151]));

var G__33152 = (i__26122__auto___33151 + (1));
i__26122__auto___33151 = G__33152;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((3) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26129__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33144){
var map__33145 = p__33144;
var map__33145__$1 = ((((!((map__33145 == null)))?((((map__33145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33145):map__33145);
var opts = map__33145__$1;
var statearr_33147_33153 = state;
(statearr_33147_33153[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__33145,map__33145__$1,opts){
return (function (val){
var statearr_33148_33154 = state;
(statearr_33148_33154[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33145,map__33145__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_33149_33155 = state;
(statearr_33149_33155[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33140){
var G__33141 = cljs.core.first.call(null,seq33140);
var seq33140__$1 = cljs.core.next.call(null,seq33140);
var G__33142 = cljs.core.first.call(null,seq33140__$1);
var seq33140__$2 = cljs.core.next.call(null,seq33140__$1);
var G__33143 = cljs.core.first.call(null,seq33140__$2);
var seq33140__$3 = cljs.core.next.call(null,seq33140__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33141,G__33142,G__33143,seq33140__$3);
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
if(typeof cljs.core.async.t_cljs$core$async33321 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33321 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33322){
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
this.meta33322 = meta33322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33323,meta33322__$1){
var self__ = this;
var _33323__$1 = this;
return (new cljs.core.async.t_cljs$core$async33321(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33322__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33321.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33323){
var self__ = this;
var _33323__$1 = this;
return self__.meta33322;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33321.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33321.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33321.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async33321.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33321.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33321.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33321.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33321.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33321.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33322","meta33322",1058331141,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33321.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33321";

cljs.core.async.t_cljs$core$async33321.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async33321");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33321 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33321(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33322){
return (new cljs.core.async.t_cljs$core$async33321(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33322));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33321(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31753__auto___33486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto___33486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto___33486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33423){
var state_val_33424 = (state_33423[(1)]);
if((state_val_33424 === (7))){
var inst_33339 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
var statearr_33425_33487 = state_33423__$1;
(statearr_33425_33487[(2)] = inst_33339);

(statearr_33425_33487[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (20))){
var inst_33351 = (state_33423[(7)]);
var state_33423__$1 = state_33423;
var statearr_33426_33488 = state_33423__$1;
(statearr_33426_33488[(2)] = inst_33351);

(statearr_33426_33488[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (27))){
var state_33423__$1 = state_33423;
var statearr_33427_33489 = state_33423__$1;
(statearr_33427_33489[(2)] = null);

(statearr_33427_33489[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (1))){
var inst_33327 = (state_33423[(8)]);
var inst_33327__$1 = calc_state.call(null);
var inst_33329 = (inst_33327__$1 == null);
var inst_33330 = cljs.core.not.call(null,inst_33329);
var state_33423__$1 = (function (){var statearr_33428 = state_33423;
(statearr_33428[(8)] = inst_33327__$1);

return statearr_33428;
})();
if(inst_33330){
var statearr_33429_33490 = state_33423__$1;
(statearr_33429_33490[(1)] = (2));

} else {
var statearr_33430_33491 = state_33423__$1;
(statearr_33430_33491[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (24))){
var inst_33383 = (state_33423[(9)]);
var inst_33397 = (state_33423[(10)]);
var inst_33374 = (state_33423[(11)]);
var inst_33397__$1 = inst_33374.call(null,inst_33383);
var state_33423__$1 = (function (){var statearr_33431 = state_33423;
(statearr_33431[(10)] = inst_33397__$1);

return statearr_33431;
})();
if(cljs.core.truth_(inst_33397__$1)){
var statearr_33432_33492 = state_33423__$1;
(statearr_33432_33492[(1)] = (29));

} else {
var statearr_33433_33493 = state_33423__$1;
(statearr_33433_33493[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (4))){
var inst_33342 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
if(cljs.core.truth_(inst_33342)){
var statearr_33434_33494 = state_33423__$1;
(statearr_33434_33494[(1)] = (8));

} else {
var statearr_33435_33495 = state_33423__$1;
(statearr_33435_33495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (15))){
var inst_33368 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
if(cljs.core.truth_(inst_33368)){
var statearr_33436_33496 = state_33423__$1;
(statearr_33436_33496[(1)] = (19));

} else {
var statearr_33437_33497 = state_33423__$1;
(statearr_33437_33497[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (21))){
var inst_33373 = (state_33423[(12)]);
var inst_33373__$1 = (state_33423[(2)]);
var inst_33374 = cljs.core.get.call(null,inst_33373__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33375 = cljs.core.get.call(null,inst_33373__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33376 = cljs.core.get.call(null,inst_33373__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33423__$1 = (function (){var statearr_33438 = state_33423;
(statearr_33438[(13)] = inst_33375);

(statearr_33438[(12)] = inst_33373__$1);

(statearr_33438[(11)] = inst_33374);

return statearr_33438;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33423__$1,(22),inst_33376);
} else {
if((state_val_33424 === (31))){
var inst_33405 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
if(cljs.core.truth_(inst_33405)){
var statearr_33439_33498 = state_33423__$1;
(statearr_33439_33498[(1)] = (32));

} else {
var statearr_33440_33499 = state_33423__$1;
(statearr_33440_33499[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (32))){
var inst_33382 = (state_33423[(14)]);
var state_33423__$1 = state_33423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33423__$1,(35),out,inst_33382);
} else {
if((state_val_33424 === (33))){
var inst_33373 = (state_33423[(12)]);
var inst_33351 = inst_33373;
var state_33423__$1 = (function (){var statearr_33441 = state_33423;
(statearr_33441[(7)] = inst_33351);

return statearr_33441;
})();
var statearr_33442_33500 = state_33423__$1;
(statearr_33442_33500[(2)] = null);

(statearr_33442_33500[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (13))){
var inst_33351 = (state_33423[(7)]);
var inst_33358 = inst_33351.cljs$lang$protocol_mask$partition0$;
var inst_33359 = (inst_33358 & (64));
var inst_33360 = inst_33351.cljs$core$ISeq$;
var inst_33361 = (inst_33359) || (inst_33360);
var state_33423__$1 = state_33423;
if(cljs.core.truth_(inst_33361)){
var statearr_33443_33501 = state_33423__$1;
(statearr_33443_33501[(1)] = (16));

} else {
var statearr_33444_33502 = state_33423__$1;
(statearr_33444_33502[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (22))){
var inst_33383 = (state_33423[(9)]);
var inst_33382 = (state_33423[(14)]);
var inst_33381 = (state_33423[(2)]);
var inst_33382__$1 = cljs.core.nth.call(null,inst_33381,(0),null);
var inst_33383__$1 = cljs.core.nth.call(null,inst_33381,(1),null);
var inst_33384 = (inst_33382__$1 == null);
var inst_33385 = cljs.core._EQ_.call(null,inst_33383__$1,change);
var inst_33386 = (inst_33384) || (inst_33385);
var state_33423__$1 = (function (){var statearr_33445 = state_33423;
(statearr_33445[(9)] = inst_33383__$1);

(statearr_33445[(14)] = inst_33382__$1);

return statearr_33445;
})();
if(cljs.core.truth_(inst_33386)){
var statearr_33446_33503 = state_33423__$1;
(statearr_33446_33503[(1)] = (23));

} else {
var statearr_33447_33504 = state_33423__$1;
(statearr_33447_33504[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (36))){
var inst_33373 = (state_33423[(12)]);
var inst_33351 = inst_33373;
var state_33423__$1 = (function (){var statearr_33448 = state_33423;
(statearr_33448[(7)] = inst_33351);

return statearr_33448;
})();
var statearr_33449_33505 = state_33423__$1;
(statearr_33449_33505[(2)] = null);

(statearr_33449_33505[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (29))){
var inst_33397 = (state_33423[(10)]);
var state_33423__$1 = state_33423;
var statearr_33450_33506 = state_33423__$1;
(statearr_33450_33506[(2)] = inst_33397);

(statearr_33450_33506[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (6))){
var state_33423__$1 = state_33423;
var statearr_33451_33507 = state_33423__$1;
(statearr_33451_33507[(2)] = false);

(statearr_33451_33507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (28))){
var inst_33393 = (state_33423[(2)]);
var inst_33394 = calc_state.call(null);
var inst_33351 = inst_33394;
var state_33423__$1 = (function (){var statearr_33452 = state_33423;
(statearr_33452[(7)] = inst_33351);

(statearr_33452[(15)] = inst_33393);

return statearr_33452;
})();
var statearr_33453_33508 = state_33423__$1;
(statearr_33453_33508[(2)] = null);

(statearr_33453_33508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (25))){
var inst_33419 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
var statearr_33454_33509 = state_33423__$1;
(statearr_33454_33509[(2)] = inst_33419);

(statearr_33454_33509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (34))){
var inst_33417 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
var statearr_33455_33510 = state_33423__$1;
(statearr_33455_33510[(2)] = inst_33417);

(statearr_33455_33510[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (17))){
var state_33423__$1 = state_33423;
var statearr_33456_33511 = state_33423__$1;
(statearr_33456_33511[(2)] = false);

(statearr_33456_33511[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (3))){
var state_33423__$1 = state_33423;
var statearr_33457_33512 = state_33423__$1;
(statearr_33457_33512[(2)] = false);

(statearr_33457_33512[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (12))){
var inst_33421 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33423__$1,inst_33421);
} else {
if((state_val_33424 === (2))){
var inst_33327 = (state_33423[(8)]);
var inst_33332 = inst_33327.cljs$lang$protocol_mask$partition0$;
var inst_33333 = (inst_33332 & (64));
var inst_33334 = inst_33327.cljs$core$ISeq$;
var inst_33335 = (inst_33333) || (inst_33334);
var state_33423__$1 = state_33423;
if(cljs.core.truth_(inst_33335)){
var statearr_33458_33513 = state_33423__$1;
(statearr_33458_33513[(1)] = (5));

} else {
var statearr_33459_33514 = state_33423__$1;
(statearr_33459_33514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (23))){
var inst_33382 = (state_33423[(14)]);
var inst_33388 = (inst_33382 == null);
var state_33423__$1 = state_33423;
if(cljs.core.truth_(inst_33388)){
var statearr_33460_33515 = state_33423__$1;
(statearr_33460_33515[(1)] = (26));

} else {
var statearr_33461_33516 = state_33423__$1;
(statearr_33461_33516[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (35))){
var inst_33408 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
if(cljs.core.truth_(inst_33408)){
var statearr_33462_33517 = state_33423__$1;
(statearr_33462_33517[(1)] = (36));

} else {
var statearr_33463_33518 = state_33423__$1;
(statearr_33463_33518[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (19))){
var inst_33351 = (state_33423[(7)]);
var inst_33370 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33351);
var state_33423__$1 = state_33423;
var statearr_33464_33519 = state_33423__$1;
(statearr_33464_33519[(2)] = inst_33370);

(statearr_33464_33519[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (11))){
var inst_33351 = (state_33423[(7)]);
var inst_33355 = (inst_33351 == null);
var inst_33356 = cljs.core.not.call(null,inst_33355);
var state_33423__$1 = state_33423;
if(inst_33356){
var statearr_33465_33520 = state_33423__$1;
(statearr_33465_33520[(1)] = (13));

} else {
var statearr_33466_33521 = state_33423__$1;
(statearr_33466_33521[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (9))){
var inst_33327 = (state_33423[(8)]);
var state_33423__$1 = state_33423;
var statearr_33467_33522 = state_33423__$1;
(statearr_33467_33522[(2)] = inst_33327);

(statearr_33467_33522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (5))){
var state_33423__$1 = state_33423;
var statearr_33468_33523 = state_33423__$1;
(statearr_33468_33523[(2)] = true);

(statearr_33468_33523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (14))){
var state_33423__$1 = state_33423;
var statearr_33469_33524 = state_33423__$1;
(statearr_33469_33524[(2)] = false);

(statearr_33469_33524[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (26))){
var inst_33383 = (state_33423[(9)]);
var inst_33390 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33383);
var state_33423__$1 = state_33423;
var statearr_33470_33525 = state_33423__$1;
(statearr_33470_33525[(2)] = inst_33390);

(statearr_33470_33525[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (16))){
var state_33423__$1 = state_33423;
var statearr_33471_33526 = state_33423__$1;
(statearr_33471_33526[(2)] = true);

(statearr_33471_33526[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (38))){
var inst_33413 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
var statearr_33472_33527 = state_33423__$1;
(statearr_33472_33527[(2)] = inst_33413);

(statearr_33472_33527[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (30))){
var inst_33375 = (state_33423[(13)]);
var inst_33383 = (state_33423[(9)]);
var inst_33374 = (state_33423[(11)]);
var inst_33400 = cljs.core.empty_QMARK_.call(null,inst_33374);
var inst_33401 = inst_33375.call(null,inst_33383);
var inst_33402 = cljs.core.not.call(null,inst_33401);
var inst_33403 = (inst_33400) && (inst_33402);
var state_33423__$1 = state_33423;
var statearr_33473_33528 = state_33423__$1;
(statearr_33473_33528[(2)] = inst_33403);

(statearr_33473_33528[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (10))){
var inst_33327 = (state_33423[(8)]);
var inst_33347 = (state_33423[(2)]);
var inst_33348 = cljs.core.get.call(null,inst_33347,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33349 = cljs.core.get.call(null,inst_33347,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33350 = cljs.core.get.call(null,inst_33347,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33351 = inst_33327;
var state_33423__$1 = (function (){var statearr_33474 = state_33423;
(statearr_33474[(16)] = inst_33350);

(statearr_33474[(7)] = inst_33351);

(statearr_33474[(17)] = inst_33349);

(statearr_33474[(18)] = inst_33348);

return statearr_33474;
})();
var statearr_33475_33529 = state_33423__$1;
(statearr_33475_33529[(2)] = null);

(statearr_33475_33529[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (18))){
var inst_33365 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
var statearr_33476_33530 = state_33423__$1;
(statearr_33476_33530[(2)] = inst_33365);

(statearr_33476_33530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (37))){
var state_33423__$1 = state_33423;
var statearr_33477_33531 = state_33423__$1;
(statearr_33477_33531[(2)] = null);

(statearr_33477_33531[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (8))){
var inst_33327 = (state_33423[(8)]);
var inst_33344 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33327);
var state_33423__$1 = state_33423;
var statearr_33478_33532 = state_33423__$1;
(statearr_33478_33532[(2)] = inst_33344);

(statearr_33478_33532[(1)] = (10));


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
});})(c__31753__auto___33486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31732__auto__,c__31753__auto___33486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31733__auto__ = null;
var cljs$core$async$mix_$_state_machine__31733__auto____0 = (function (){
var statearr_33482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33482[(0)] = cljs$core$async$mix_$_state_machine__31733__auto__);

(statearr_33482[(1)] = (1));

return statearr_33482;
});
var cljs$core$async$mix_$_state_machine__31733__auto____1 = (function (state_33423){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_33423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e33483){if((e33483 instanceof Object)){
var ex__31736__auto__ = e33483;
var statearr_33484_33533 = state_33423;
(statearr_33484_33533[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33534 = state_33423;
state_33423 = G__33534;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31733__auto__ = function(state_33423){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31733__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31733__auto____1.call(this,state_33423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31733__auto____0;
cljs$core$async$mix_$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31733__auto____1;
return cljs$core$async$mix_$_state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto___33486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31755__auto__ = (function (){var statearr_33485 = f__31754__auto__.call(null);
(statearr_33485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto___33486);

return statearr_33485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto___33486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args33535 = [];
var len__26121__auto___33538 = arguments.length;
var i__26122__auto___33539 = (0);
while(true){
if((i__26122__auto___33539 < len__26121__auto___33538)){
args33535.push((arguments[i__26122__auto___33539]));

var G__33540 = (i__26122__auto___33539 + (1));
i__26122__auto___33539 = G__33540;
continue;
} else {
}
break;
}

var G__33537 = args33535.length;
switch (G__33537) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33535.length)].join('')));

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
var args33543 = [];
var len__26121__auto___33668 = arguments.length;
var i__26122__auto___33669 = (0);
while(true){
if((i__26122__auto___33669 < len__26121__auto___33668)){
args33543.push((arguments[i__26122__auto___33669]));

var G__33670 = (i__26122__auto___33669 + (1));
i__26122__auto___33669 = G__33670;
continue;
} else {
}
break;
}

var G__33545 = args33543.length;
switch (G__33545) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33543.length)].join('')));

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
return (function (p1__33542_SHARP_){
if(cljs.core.truth_(p1__33542_SHARP_.call(null,topic))){
return p1__33542_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33542_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25046__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33546 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33546 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33547){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33547 = meta33547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33548,meta33547__$1){
var self__ = this;
var _33548__$1 = this;
return (new cljs.core.async.t_cljs$core$async33546(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33547__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33548){
var self__ = this;
var _33548__$1 = this;
return self__.meta33547;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33546.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33547","meta33547",-695311653,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33546.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33546";

cljs.core.async.t_cljs$core$async33546.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async33546");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33546 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33546(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33547){
return (new cljs.core.async.t_cljs$core$async33546(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33547));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33546(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31753__auto___33672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto___33672,mults,ensure_mult,p){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto___33672,mults,ensure_mult,p){
return (function (state_33620){
var state_val_33621 = (state_33620[(1)]);
if((state_val_33621 === (7))){
var inst_33616 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
var statearr_33622_33673 = state_33620__$1;
(statearr_33622_33673[(2)] = inst_33616);

(statearr_33622_33673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (20))){
var state_33620__$1 = state_33620;
var statearr_33623_33674 = state_33620__$1;
(statearr_33623_33674[(2)] = null);

(statearr_33623_33674[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (1))){
var state_33620__$1 = state_33620;
var statearr_33624_33675 = state_33620__$1;
(statearr_33624_33675[(2)] = null);

(statearr_33624_33675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (24))){
var inst_33599 = (state_33620[(7)]);
var inst_33608 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33599);
var state_33620__$1 = state_33620;
var statearr_33625_33676 = state_33620__$1;
(statearr_33625_33676[(2)] = inst_33608);

(statearr_33625_33676[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (4))){
var inst_33551 = (state_33620[(8)]);
var inst_33551__$1 = (state_33620[(2)]);
var inst_33552 = (inst_33551__$1 == null);
var state_33620__$1 = (function (){var statearr_33626 = state_33620;
(statearr_33626[(8)] = inst_33551__$1);

return statearr_33626;
})();
if(cljs.core.truth_(inst_33552)){
var statearr_33627_33677 = state_33620__$1;
(statearr_33627_33677[(1)] = (5));

} else {
var statearr_33628_33678 = state_33620__$1;
(statearr_33628_33678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (15))){
var inst_33593 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
var statearr_33629_33679 = state_33620__$1;
(statearr_33629_33679[(2)] = inst_33593);

(statearr_33629_33679[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (21))){
var inst_33613 = (state_33620[(2)]);
var state_33620__$1 = (function (){var statearr_33630 = state_33620;
(statearr_33630[(9)] = inst_33613);

return statearr_33630;
})();
var statearr_33631_33680 = state_33620__$1;
(statearr_33631_33680[(2)] = null);

(statearr_33631_33680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (13))){
var inst_33575 = (state_33620[(10)]);
var inst_33577 = cljs.core.chunked_seq_QMARK_.call(null,inst_33575);
var state_33620__$1 = state_33620;
if(inst_33577){
var statearr_33632_33681 = state_33620__$1;
(statearr_33632_33681[(1)] = (16));

} else {
var statearr_33633_33682 = state_33620__$1;
(statearr_33633_33682[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (22))){
var inst_33605 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
if(cljs.core.truth_(inst_33605)){
var statearr_33634_33683 = state_33620__$1;
(statearr_33634_33683[(1)] = (23));

} else {
var statearr_33635_33684 = state_33620__$1;
(statearr_33635_33684[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (6))){
var inst_33601 = (state_33620[(11)]);
var inst_33551 = (state_33620[(8)]);
var inst_33599 = (state_33620[(7)]);
var inst_33599__$1 = topic_fn.call(null,inst_33551);
var inst_33600 = cljs.core.deref.call(null,mults);
var inst_33601__$1 = cljs.core.get.call(null,inst_33600,inst_33599__$1);
var state_33620__$1 = (function (){var statearr_33636 = state_33620;
(statearr_33636[(11)] = inst_33601__$1);

(statearr_33636[(7)] = inst_33599__$1);

return statearr_33636;
})();
if(cljs.core.truth_(inst_33601__$1)){
var statearr_33637_33685 = state_33620__$1;
(statearr_33637_33685[(1)] = (19));

} else {
var statearr_33638_33686 = state_33620__$1;
(statearr_33638_33686[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (25))){
var inst_33610 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
var statearr_33639_33687 = state_33620__$1;
(statearr_33639_33687[(2)] = inst_33610);

(statearr_33639_33687[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (17))){
var inst_33575 = (state_33620[(10)]);
var inst_33584 = cljs.core.first.call(null,inst_33575);
var inst_33585 = cljs.core.async.muxch_STAR_.call(null,inst_33584);
var inst_33586 = cljs.core.async.close_BANG_.call(null,inst_33585);
var inst_33587 = cljs.core.next.call(null,inst_33575);
var inst_33561 = inst_33587;
var inst_33562 = null;
var inst_33563 = (0);
var inst_33564 = (0);
var state_33620__$1 = (function (){var statearr_33640 = state_33620;
(statearr_33640[(12)] = inst_33561);

(statearr_33640[(13)] = inst_33563);

(statearr_33640[(14)] = inst_33564);

(statearr_33640[(15)] = inst_33562);

(statearr_33640[(16)] = inst_33586);

return statearr_33640;
})();
var statearr_33641_33688 = state_33620__$1;
(statearr_33641_33688[(2)] = null);

(statearr_33641_33688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (3))){
var inst_33618 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33620__$1,inst_33618);
} else {
if((state_val_33621 === (12))){
var inst_33595 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
var statearr_33642_33689 = state_33620__$1;
(statearr_33642_33689[(2)] = inst_33595);

(statearr_33642_33689[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (2))){
var state_33620__$1 = state_33620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33620__$1,(4),ch);
} else {
if((state_val_33621 === (23))){
var state_33620__$1 = state_33620;
var statearr_33643_33690 = state_33620__$1;
(statearr_33643_33690[(2)] = null);

(statearr_33643_33690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (19))){
var inst_33601 = (state_33620[(11)]);
var inst_33551 = (state_33620[(8)]);
var inst_33603 = cljs.core.async.muxch_STAR_.call(null,inst_33601);
var state_33620__$1 = state_33620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33620__$1,(22),inst_33603,inst_33551);
} else {
if((state_val_33621 === (11))){
var inst_33561 = (state_33620[(12)]);
var inst_33575 = (state_33620[(10)]);
var inst_33575__$1 = cljs.core.seq.call(null,inst_33561);
var state_33620__$1 = (function (){var statearr_33644 = state_33620;
(statearr_33644[(10)] = inst_33575__$1);

return statearr_33644;
})();
if(inst_33575__$1){
var statearr_33645_33691 = state_33620__$1;
(statearr_33645_33691[(1)] = (13));

} else {
var statearr_33646_33692 = state_33620__$1;
(statearr_33646_33692[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (9))){
var inst_33597 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
var statearr_33647_33693 = state_33620__$1;
(statearr_33647_33693[(2)] = inst_33597);

(statearr_33647_33693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (5))){
var inst_33558 = cljs.core.deref.call(null,mults);
var inst_33559 = cljs.core.vals.call(null,inst_33558);
var inst_33560 = cljs.core.seq.call(null,inst_33559);
var inst_33561 = inst_33560;
var inst_33562 = null;
var inst_33563 = (0);
var inst_33564 = (0);
var state_33620__$1 = (function (){var statearr_33648 = state_33620;
(statearr_33648[(12)] = inst_33561);

(statearr_33648[(13)] = inst_33563);

(statearr_33648[(14)] = inst_33564);

(statearr_33648[(15)] = inst_33562);

return statearr_33648;
})();
var statearr_33649_33694 = state_33620__$1;
(statearr_33649_33694[(2)] = null);

(statearr_33649_33694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (14))){
var state_33620__$1 = state_33620;
var statearr_33653_33695 = state_33620__$1;
(statearr_33653_33695[(2)] = null);

(statearr_33653_33695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (16))){
var inst_33575 = (state_33620[(10)]);
var inst_33579 = cljs.core.chunk_first.call(null,inst_33575);
var inst_33580 = cljs.core.chunk_rest.call(null,inst_33575);
var inst_33581 = cljs.core.count.call(null,inst_33579);
var inst_33561 = inst_33580;
var inst_33562 = inst_33579;
var inst_33563 = inst_33581;
var inst_33564 = (0);
var state_33620__$1 = (function (){var statearr_33654 = state_33620;
(statearr_33654[(12)] = inst_33561);

(statearr_33654[(13)] = inst_33563);

(statearr_33654[(14)] = inst_33564);

(statearr_33654[(15)] = inst_33562);

return statearr_33654;
})();
var statearr_33655_33696 = state_33620__$1;
(statearr_33655_33696[(2)] = null);

(statearr_33655_33696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (10))){
var inst_33561 = (state_33620[(12)]);
var inst_33563 = (state_33620[(13)]);
var inst_33564 = (state_33620[(14)]);
var inst_33562 = (state_33620[(15)]);
var inst_33569 = cljs.core._nth.call(null,inst_33562,inst_33564);
var inst_33570 = cljs.core.async.muxch_STAR_.call(null,inst_33569);
var inst_33571 = cljs.core.async.close_BANG_.call(null,inst_33570);
var inst_33572 = (inst_33564 + (1));
var tmp33650 = inst_33561;
var tmp33651 = inst_33563;
var tmp33652 = inst_33562;
var inst_33561__$1 = tmp33650;
var inst_33562__$1 = tmp33652;
var inst_33563__$1 = tmp33651;
var inst_33564__$1 = inst_33572;
var state_33620__$1 = (function (){var statearr_33656 = state_33620;
(statearr_33656[(17)] = inst_33571);

(statearr_33656[(12)] = inst_33561__$1);

(statearr_33656[(13)] = inst_33563__$1);

(statearr_33656[(14)] = inst_33564__$1);

(statearr_33656[(15)] = inst_33562__$1);

return statearr_33656;
})();
var statearr_33657_33697 = state_33620__$1;
(statearr_33657_33697[(2)] = null);

(statearr_33657_33697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (18))){
var inst_33590 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
var statearr_33658_33698 = state_33620__$1;
(statearr_33658_33698[(2)] = inst_33590);

(statearr_33658_33698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (8))){
var inst_33563 = (state_33620[(13)]);
var inst_33564 = (state_33620[(14)]);
var inst_33566 = (inst_33564 < inst_33563);
var inst_33567 = inst_33566;
var state_33620__$1 = state_33620;
if(cljs.core.truth_(inst_33567)){
var statearr_33659_33699 = state_33620__$1;
(statearr_33659_33699[(1)] = (10));

} else {
var statearr_33660_33700 = state_33620__$1;
(statearr_33660_33700[(1)] = (11));

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
});})(c__31753__auto___33672,mults,ensure_mult,p))
;
return ((function (switch__31732__auto__,c__31753__auto___33672,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31733__auto__ = null;
var cljs$core$async$state_machine__31733__auto____0 = (function (){
var statearr_33664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33664[(0)] = cljs$core$async$state_machine__31733__auto__);

(statearr_33664[(1)] = (1));

return statearr_33664;
});
var cljs$core$async$state_machine__31733__auto____1 = (function (state_33620){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_33620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e33665){if((e33665 instanceof Object)){
var ex__31736__auto__ = e33665;
var statearr_33666_33701 = state_33620;
(statearr_33666_33701[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33702 = state_33620;
state_33620 = G__33702;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
cljs$core$async$state_machine__31733__auto__ = function(state_33620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31733__auto____1.call(this,state_33620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31733__auto____0;
cljs$core$async$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31733__auto____1;
return cljs$core$async$state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto___33672,mults,ensure_mult,p))
})();
var state__31755__auto__ = (function (){var statearr_33667 = f__31754__auto__.call(null);
(statearr_33667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto___33672);

return statearr_33667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto___33672,mults,ensure_mult,p))
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
var args33703 = [];
var len__26121__auto___33706 = arguments.length;
var i__26122__auto___33707 = (0);
while(true){
if((i__26122__auto___33707 < len__26121__auto___33706)){
args33703.push((arguments[i__26122__auto___33707]));

var G__33708 = (i__26122__auto___33707 + (1));
i__26122__auto___33707 = G__33708;
continue;
} else {
}
break;
}

var G__33705 = args33703.length;
switch (G__33705) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33703.length)].join('')));

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
var args33710 = [];
var len__26121__auto___33713 = arguments.length;
var i__26122__auto___33714 = (0);
while(true){
if((i__26122__auto___33714 < len__26121__auto___33713)){
args33710.push((arguments[i__26122__auto___33714]));

var G__33715 = (i__26122__auto___33714 + (1));
i__26122__auto___33714 = G__33715;
continue;
} else {
}
break;
}

var G__33712 = args33710.length;
switch (G__33712) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33710.length)].join('')));

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
var args33717 = [];
var len__26121__auto___33788 = arguments.length;
var i__26122__auto___33789 = (0);
while(true){
if((i__26122__auto___33789 < len__26121__auto___33788)){
args33717.push((arguments[i__26122__auto___33789]));

var G__33790 = (i__26122__auto___33789 + (1));
i__26122__auto___33789 = G__33790;
continue;
} else {
}
break;
}

var G__33719 = args33717.length;
switch (G__33719) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33717.length)].join('')));

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
var c__31753__auto___33792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto___33792,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto___33792,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33758){
var state_val_33759 = (state_33758[(1)]);
if((state_val_33759 === (7))){
var state_33758__$1 = state_33758;
var statearr_33760_33793 = state_33758__$1;
(statearr_33760_33793[(2)] = null);

(statearr_33760_33793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (1))){
var state_33758__$1 = state_33758;
var statearr_33761_33794 = state_33758__$1;
(statearr_33761_33794[(2)] = null);

(statearr_33761_33794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (4))){
var inst_33722 = (state_33758[(7)]);
var inst_33724 = (inst_33722 < cnt);
var state_33758__$1 = state_33758;
if(cljs.core.truth_(inst_33724)){
var statearr_33762_33795 = state_33758__$1;
(statearr_33762_33795[(1)] = (6));

} else {
var statearr_33763_33796 = state_33758__$1;
(statearr_33763_33796[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (15))){
var inst_33754 = (state_33758[(2)]);
var state_33758__$1 = state_33758;
var statearr_33764_33797 = state_33758__$1;
(statearr_33764_33797[(2)] = inst_33754);

(statearr_33764_33797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (13))){
var inst_33747 = cljs.core.async.close_BANG_.call(null,out);
var state_33758__$1 = state_33758;
var statearr_33765_33798 = state_33758__$1;
(statearr_33765_33798[(2)] = inst_33747);

(statearr_33765_33798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (6))){
var state_33758__$1 = state_33758;
var statearr_33766_33799 = state_33758__$1;
(statearr_33766_33799[(2)] = null);

(statearr_33766_33799[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (3))){
var inst_33756 = (state_33758[(2)]);
var state_33758__$1 = state_33758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33758__$1,inst_33756);
} else {
if((state_val_33759 === (12))){
var inst_33744 = (state_33758[(8)]);
var inst_33744__$1 = (state_33758[(2)]);
var inst_33745 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33744__$1);
var state_33758__$1 = (function (){var statearr_33767 = state_33758;
(statearr_33767[(8)] = inst_33744__$1);

return statearr_33767;
})();
if(cljs.core.truth_(inst_33745)){
var statearr_33768_33800 = state_33758__$1;
(statearr_33768_33800[(1)] = (13));

} else {
var statearr_33769_33801 = state_33758__$1;
(statearr_33769_33801[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (2))){
var inst_33721 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33722 = (0);
var state_33758__$1 = (function (){var statearr_33770 = state_33758;
(statearr_33770[(7)] = inst_33722);

(statearr_33770[(9)] = inst_33721);

return statearr_33770;
})();
var statearr_33771_33802 = state_33758__$1;
(statearr_33771_33802[(2)] = null);

(statearr_33771_33802[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (11))){
var inst_33722 = (state_33758[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33758,(10),Object,null,(9));
var inst_33731 = chs__$1.call(null,inst_33722);
var inst_33732 = done.call(null,inst_33722);
var inst_33733 = cljs.core.async.take_BANG_.call(null,inst_33731,inst_33732);
var state_33758__$1 = state_33758;
var statearr_33772_33803 = state_33758__$1;
(statearr_33772_33803[(2)] = inst_33733);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33758__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (9))){
var inst_33722 = (state_33758[(7)]);
var inst_33735 = (state_33758[(2)]);
var inst_33736 = (inst_33722 + (1));
var inst_33722__$1 = inst_33736;
var state_33758__$1 = (function (){var statearr_33773 = state_33758;
(statearr_33773[(7)] = inst_33722__$1);

(statearr_33773[(10)] = inst_33735);

return statearr_33773;
})();
var statearr_33774_33804 = state_33758__$1;
(statearr_33774_33804[(2)] = null);

(statearr_33774_33804[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (5))){
var inst_33742 = (state_33758[(2)]);
var state_33758__$1 = (function (){var statearr_33775 = state_33758;
(statearr_33775[(11)] = inst_33742);

return statearr_33775;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33758__$1,(12),dchan);
} else {
if((state_val_33759 === (14))){
var inst_33744 = (state_33758[(8)]);
var inst_33749 = cljs.core.apply.call(null,f,inst_33744);
var state_33758__$1 = state_33758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33758__$1,(16),out,inst_33749);
} else {
if((state_val_33759 === (16))){
var inst_33751 = (state_33758[(2)]);
var state_33758__$1 = (function (){var statearr_33776 = state_33758;
(statearr_33776[(12)] = inst_33751);

return statearr_33776;
})();
var statearr_33777_33805 = state_33758__$1;
(statearr_33777_33805[(2)] = null);

(statearr_33777_33805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (10))){
var inst_33726 = (state_33758[(2)]);
var inst_33727 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33758__$1 = (function (){var statearr_33778 = state_33758;
(statearr_33778[(13)] = inst_33726);

return statearr_33778;
})();
var statearr_33779_33806 = state_33758__$1;
(statearr_33779_33806[(2)] = inst_33727);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33758__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (8))){
var inst_33740 = (state_33758[(2)]);
var state_33758__$1 = state_33758;
var statearr_33780_33807 = state_33758__$1;
(statearr_33780_33807[(2)] = inst_33740);

(statearr_33780_33807[(1)] = (5));


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
});})(c__31753__auto___33792,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31732__auto__,c__31753__auto___33792,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31733__auto__ = null;
var cljs$core$async$state_machine__31733__auto____0 = (function (){
var statearr_33784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33784[(0)] = cljs$core$async$state_machine__31733__auto__);

(statearr_33784[(1)] = (1));

return statearr_33784;
});
var cljs$core$async$state_machine__31733__auto____1 = (function (state_33758){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_33758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e33785){if((e33785 instanceof Object)){
var ex__31736__auto__ = e33785;
var statearr_33786_33808 = state_33758;
(statearr_33786_33808[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33809 = state_33758;
state_33758 = G__33809;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
cljs$core$async$state_machine__31733__auto__ = function(state_33758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31733__auto____1.call(this,state_33758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31733__auto____0;
cljs$core$async$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31733__auto____1;
return cljs$core$async$state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto___33792,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31755__auto__ = (function (){var statearr_33787 = f__31754__auto__.call(null);
(statearr_33787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto___33792);

return statearr_33787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto___33792,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args33811 = [];
var len__26121__auto___33869 = arguments.length;
var i__26122__auto___33870 = (0);
while(true){
if((i__26122__auto___33870 < len__26121__auto___33869)){
args33811.push((arguments[i__26122__auto___33870]));

var G__33871 = (i__26122__auto___33870 + (1));
i__26122__auto___33870 = G__33871;
continue;
} else {
}
break;
}

var G__33813 = args33811.length;
switch (G__33813) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33811.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31753__auto___33873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto___33873,out){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto___33873,out){
return (function (state_33845){
var state_val_33846 = (state_33845[(1)]);
if((state_val_33846 === (7))){
var inst_33824 = (state_33845[(7)]);
var inst_33825 = (state_33845[(8)]);
var inst_33824__$1 = (state_33845[(2)]);
var inst_33825__$1 = cljs.core.nth.call(null,inst_33824__$1,(0),null);
var inst_33826 = cljs.core.nth.call(null,inst_33824__$1,(1),null);
var inst_33827 = (inst_33825__$1 == null);
var state_33845__$1 = (function (){var statearr_33847 = state_33845;
(statearr_33847[(7)] = inst_33824__$1);

(statearr_33847[(9)] = inst_33826);

(statearr_33847[(8)] = inst_33825__$1);

return statearr_33847;
})();
if(cljs.core.truth_(inst_33827)){
var statearr_33848_33874 = state_33845__$1;
(statearr_33848_33874[(1)] = (8));

} else {
var statearr_33849_33875 = state_33845__$1;
(statearr_33849_33875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (1))){
var inst_33814 = cljs.core.vec.call(null,chs);
var inst_33815 = inst_33814;
var state_33845__$1 = (function (){var statearr_33850 = state_33845;
(statearr_33850[(10)] = inst_33815);

return statearr_33850;
})();
var statearr_33851_33876 = state_33845__$1;
(statearr_33851_33876[(2)] = null);

(statearr_33851_33876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (4))){
var inst_33815 = (state_33845[(10)]);
var state_33845__$1 = state_33845;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33845__$1,(7),inst_33815);
} else {
if((state_val_33846 === (6))){
var inst_33841 = (state_33845[(2)]);
var state_33845__$1 = state_33845;
var statearr_33852_33877 = state_33845__$1;
(statearr_33852_33877[(2)] = inst_33841);

(statearr_33852_33877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (3))){
var inst_33843 = (state_33845[(2)]);
var state_33845__$1 = state_33845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33845__$1,inst_33843);
} else {
if((state_val_33846 === (2))){
var inst_33815 = (state_33845[(10)]);
var inst_33817 = cljs.core.count.call(null,inst_33815);
var inst_33818 = (inst_33817 > (0));
var state_33845__$1 = state_33845;
if(cljs.core.truth_(inst_33818)){
var statearr_33854_33878 = state_33845__$1;
(statearr_33854_33878[(1)] = (4));

} else {
var statearr_33855_33879 = state_33845__$1;
(statearr_33855_33879[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (11))){
var inst_33815 = (state_33845[(10)]);
var inst_33834 = (state_33845[(2)]);
var tmp33853 = inst_33815;
var inst_33815__$1 = tmp33853;
var state_33845__$1 = (function (){var statearr_33856 = state_33845;
(statearr_33856[(11)] = inst_33834);

(statearr_33856[(10)] = inst_33815__$1);

return statearr_33856;
})();
var statearr_33857_33880 = state_33845__$1;
(statearr_33857_33880[(2)] = null);

(statearr_33857_33880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (9))){
var inst_33825 = (state_33845[(8)]);
var state_33845__$1 = state_33845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33845__$1,(11),out,inst_33825);
} else {
if((state_val_33846 === (5))){
var inst_33839 = cljs.core.async.close_BANG_.call(null,out);
var state_33845__$1 = state_33845;
var statearr_33858_33881 = state_33845__$1;
(statearr_33858_33881[(2)] = inst_33839);

(statearr_33858_33881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (10))){
var inst_33837 = (state_33845[(2)]);
var state_33845__$1 = state_33845;
var statearr_33859_33882 = state_33845__$1;
(statearr_33859_33882[(2)] = inst_33837);

(statearr_33859_33882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (8))){
var inst_33824 = (state_33845[(7)]);
var inst_33826 = (state_33845[(9)]);
var inst_33815 = (state_33845[(10)]);
var inst_33825 = (state_33845[(8)]);
var inst_33829 = (function (){var cs = inst_33815;
var vec__33820 = inst_33824;
var v = inst_33825;
var c = inst_33826;
return ((function (cs,vec__33820,v,c,inst_33824,inst_33826,inst_33815,inst_33825,state_val_33846,c__31753__auto___33873,out){
return (function (p1__33810_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33810_SHARP_);
});
;})(cs,vec__33820,v,c,inst_33824,inst_33826,inst_33815,inst_33825,state_val_33846,c__31753__auto___33873,out))
})();
var inst_33830 = cljs.core.filterv.call(null,inst_33829,inst_33815);
var inst_33815__$1 = inst_33830;
var state_33845__$1 = (function (){var statearr_33860 = state_33845;
(statearr_33860[(10)] = inst_33815__$1);

return statearr_33860;
})();
var statearr_33861_33883 = state_33845__$1;
(statearr_33861_33883[(2)] = null);

(statearr_33861_33883[(1)] = (2));


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
});})(c__31753__auto___33873,out))
;
return ((function (switch__31732__auto__,c__31753__auto___33873,out){
return (function() {
var cljs$core$async$state_machine__31733__auto__ = null;
var cljs$core$async$state_machine__31733__auto____0 = (function (){
var statearr_33865 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33865[(0)] = cljs$core$async$state_machine__31733__auto__);

(statearr_33865[(1)] = (1));

return statearr_33865;
});
var cljs$core$async$state_machine__31733__auto____1 = (function (state_33845){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_33845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e33866){if((e33866 instanceof Object)){
var ex__31736__auto__ = e33866;
var statearr_33867_33884 = state_33845;
(statearr_33867_33884[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33885 = state_33845;
state_33845 = G__33885;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
cljs$core$async$state_machine__31733__auto__ = function(state_33845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31733__auto____1.call(this,state_33845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31733__auto____0;
cljs$core$async$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31733__auto____1;
return cljs$core$async$state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto___33873,out))
})();
var state__31755__auto__ = (function (){var statearr_33868 = f__31754__auto__.call(null);
(statearr_33868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto___33873);

return statearr_33868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto___33873,out))
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
var args33886 = [];
var len__26121__auto___33935 = arguments.length;
var i__26122__auto___33936 = (0);
while(true){
if((i__26122__auto___33936 < len__26121__auto___33935)){
args33886.push((arguments[i__26122__auto___33936]));

var G__33937 = (i__26122__auto___33936 + (1));
i__26122__auto___33936 = G__33937;
continue;
} else {
}
break;
}

var G__33888 = args33886.length;
switch (G__33888) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33886.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31753__auto___33939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto___33939,out){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto___33939,out){
return (function (state_33912){
var state_val_33913 = (state_33912[(1)]);
if((state_val_33913 === (7))){
var inst_33894 = (state_33912[(7)]);
var inst_33894__$1 = (state_33912[(2)]);
var inst_33895 = (inst_33894__$1 == null);
var inst_33896 = cljs.core.not.call(null,inst_33895);
var state_33912__$1 = (function (){var statearr_33914 = state_33912;
(statearr_33914[(7)] = inst_33894__$1);

return statearr_33914;
})();
if(inst_33896){
var statearr_33915_33940 = state_33912__$1;
(statearr_33915_33940[(1)] = (8));

} else {
var statearr_33916_33941 = state_33912__$1;
(statearr_33916_33941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (1))){
var inst_33889 = (0);
var state_33912__$1 = (function (){var statearr_33917 = state_33912;
(statearr_33917[(8)] = inst_33889);

return statearr_33917;
})();
var statearr_33918_33942 = state_33912__$1;
(statearr_33918_33942[(2)] = null);

(statearr_33918_33942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (4))){
var state_33912__$1 = state_33912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33912__$1,(7),ch);
} else {
if((state_val_33913 === (6))){
var inst_33907 = (state_33912[(2)]);
var state_33912__$1 = state_33912;
var statearr_33919_33943 = state_33912__$1;
(statearr_33919_33943[(2)] = inst_33907);

(statearr_33919_33943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (3))){
var inst_33909 = (state_33912[(2)]);
var inst_33910 = cljs.core.async.close_BANG_.call(null,out);
var state_33912__$1 = (function (){var statearr_33920 = state_33912;
(statearr_33920[(9)] = inst_33909);

return statearr_33920;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33912__$1,inst_33910);
} else {
if((state_val_33913 === (2))){
var inst_33889 = (state_33912[(8)]);
var inst_33891 = (inst_33889 < n);
var state_33912__$1 = state_33912;
if(cljs.core.truth_(inst_33891)){
var statearr_33921_33944 = state_33912__$1;
(statearr_33921_33944[(1)] = (4));

} else {
var statearr_33922_33945 = state_33912__$1;
(statearr_33922_33945[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (11))){
var inst_33889 = (state_33912[(8)]);
var inst_33899 = (state_33912[(2)]);
var inst_33900 = (inst_33889 + (1));
var inst_33889__$1 = inst_33900;
var state_33912__$1 = (function (){var statearr_33923 = state_33912;
(statearr_33923[(10)] = inst_33899);

(statearr_33923[(8)] = inst_33889__$1);

return statearr_33923;
})();
var statearr_33924_33946 = state_33912__$1;
(statearr_33924_33946[(2)] = null);

(statearr_33924_33946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (9))){
var state_33912__$1 = state_33912;
var statearr_33925_33947 = state_33912__$1;
(statearr_33925_33947[(2)] = null);

(statearr_33925_33947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (5))){
var state_33912__$1 = state_33912;
var statearr_33926_33948 = state_33912__$1;
(statearr_33926_33948[(2)] = null);

(statearr_33926_33948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (10))){
var inst_33904 = (state_33912[(2)]);
var state_33912__$1 = state_33912;
var statearr_33927_33949 = state_33912__$1;
(statearr_33927_33949[(2)] = inst_33904);

(statearr_33927_33949[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (8))){
var inst_33894 = (state_33912[(7)]);
var state_33912__$1 = state_33912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33912__$1,(11),out,inst_33894);
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
});})(c__31753__auto___33939,out))
;
return ((function (switch__31732__auto__,c__31753__auto___33939,out){
return (function() {
var cljs$core$async$state_machine__31733__auto__ = null;
var cljs$core$async$state_machine__31733__auto____0 = (function (){
var statearr_33931 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33931[(0)] = cljs$core$async$state_machine__31733__auto__);

(statearr_33931[(1)] = (1));

return statearr_33931;
});
var cljs$core$async$state_machine__31733__auto____1 = (function (state_33912){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_33912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e33932){if((e33932 instanceof Object)){
var ex__31736__auto__ = e33932;
var statearr_33933_33950 = state_33912;
(statearr_33933_33950[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33951 = state_33912;
state_33912 = G__33951;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
cljs$core$async$state_machine__31733__auto__ = function(state_33912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31733__auto____1.call(this,state_33912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31733__auto____0;
cljs$core$async$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31733__auto____1;
return cljs$core$async$state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto___33939,out))
})();
var state__31755__auto__ = (function (){var statearr_33934 = f__31754__auto__.call(null);
(statearr_33934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto___33939);

return statearr_33934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto___33939,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33959 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33959 = (function (map_LT_,f,ch,meta33960){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33960 = meta33960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33961,meta33960__$1){
var self__ = this;
var _33961__$1 = this;
return (new cljs.core.async.t_cljs$core$async33959(self__.map_LT_,self__.f,self__.ch,meta33960__$1));
});

cljs.core.async.t_cljs$core$async33959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33961){
var self__ = this;
var _33961__$1 = this;
return self__.meta33960;
});

cljs.core.async.t_cljs$core$async33959.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33959.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33959.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33959.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33959.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33962 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33962 = (function (map_LT_,f,ch,meta33960,_,fn1,meta33963){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33960 = meta33960;
this._ = _;
this.fn1 = fn1;
this.meta33963 = meta33963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33964,meta33963__$1){
var self__ = this;
var _33964__$1 = this;
return (new cljs.core.async.t_cljs$core$async33962(self__.map_LT_,self__.f,self__.ch,self__.meta33960,self__._,self__.fn1,meta33963__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33964){
var self__ = this;
var _33964__$1 = this;
return self__.meta33963;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33952_SHARP_){
return f1.call(null,(((p1__33952_SHARP_ == null))?null:self__.f.call(null,p1__33952_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33962.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33960","meta33960",-990158410,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33959","cljs.core.async/t_cljs$core$async33959",-287615596,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33963","meta33963",-1847386582,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33962.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33962";

cljs.core.async.t_cljs$core$async33962.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async33962");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33962 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33962(map_LT___$1,f__$1,ch__$1,meta33960__$1,___$2,fn1__$1,meta33963){
return (new cljs.core.async.t_cljs$core$async33962(map_LT___$1,f__$1,ch__$1,meta33960__$1,___$2,fn1__$1,meta33963));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33962(self__.map_LT_,self__.f,self__.ch,self__.meta33960,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async33959.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33959.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33960","meta33960",-990158410,null)], null);
});

cljs.core.async.t_cljs$core$async33959.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33959";

cljs.core.async.t_cljs$core$async33959.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async33959");
});

cljs.core.async.__GT_t_cljs$core$async33959 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33959(map_LT___$1,f__$1,ch__$1,meta33960){
return (new cljs.core.async.t_cljs$core$async33959(map_LT___$1,f__$1,ch__$1,meta33960));
});

}

return (new cljs.core.async.t_cljs$core$async33959(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33968 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33968 = (function (map_GT_,f,ch,meta33969){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta33969 = meta33969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33970,meta33969__$1){
var self__ = this;
var _33970__$1 = this;
return (new cljs.core.async.t_cljs$core$async33968(self__.map_GT_,self__.f,self__.ch,meta33969__$1));
});

cljs.core.async.t_cljs$core$async33968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33970){
var self__ = this;
var _33970__$1 = this;
return self__.meta33969;
});

cljs.core.async.t_cljs$core$async33968.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33968.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33968.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33968.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33968.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33968.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33969","meta33969",-1180131842,null)], null);
});

cljs.core.async.t_cljs$core$async33968.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33968";

cljs.core.async.t_cljs$core$async33968.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async33968");
});

cljs.core.async.__GT_t_cljs$core$async33968 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33968(map_GT___$1,f__$1,ch__$1,meta33969){
return (new cljs.core.async.t_cljs$core$async33968(map_GT___$1,f__$1,ch__$1,meta33969));
});

}

return (new cljs.core.async.t_cljs$core$async33968(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33974 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33974 = (function (filter_GT_,p,ch,meta33975){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta33975 = meta33975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33976,meta33975__$1){
var self__ = this;
var _33976__$1 = this;
return (new cljs.core.async.t_cljs$core$async33974(self__.filter_GT_,self__.p,self__.ch,meta33975__$1));
});

cljs.core.async.t_cljs$core$async33974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33976){
var self__ = this;
var _33976__$1 = this;
return self__.meta33975;
});

cljs.core.async.t_cljs$core$async33974.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33974.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33974.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33974.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33974.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33974.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33974.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33975","meta33975",76660696,null)], null);
});

cljs.core.async.t_cljs$core$async33974.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33974";

cljs.core.async.t_cljs$core$async33974.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async33974");
});

cljs.core.async.__GT_t_cljs$core$async33974 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33974(filter_GT___$1,p__$1,ch__$1,meta33975){
return (new cljs.core.async.t_cljs$core$async33974(filter_GT___$1,p__$1,ch__$1,meta33975));
});

}

return (new cljs.core.async.t_cljs$core$async33974(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args33977 = [];
var len__26121__auto___34021 = arguments.length;
var i__26122__auto___34022 = (0);
while(true){
if((i__26122__auto___34022 < len__26121__auto___34021)){
args33977.push((arguments[i__26122__auto___34022]));

var G__34023 = (i__26122__auto___34022 + (1));
i__26122__auto___34022 = G__34023;
continue;
} else {
}
break;
}

var G__33979 = args33977.length;
switch (G__33979) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33977.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31753__auto___34025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto___34025,out){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto___34025,out){
return (function (state_34000){
var state_val_34001 = (state_34000[(1)]);
if((state_val_34001 === (7))){
var inst_33996 = (state_34000[(2)]);
var state_34000__$1 = state_34000;
var statearr_34002_34026 = state_34000__$1;
(statearr_34002_34026[(2)] = inst_33996);

(statearr_34002_34026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (1))){
var state_34000__$1 = state_34000;
var statearr_34003_34027 = state_34000__$1;
(statearr_34003_34027[(2)] = null);

(statearr_34003_34027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (4))){
var inst_33982 = (state_34000[(7)]);
var inst_33982__$1 = (state_34000[(2)]);
var inst_33983 = (inst_33982__$1 == null);
var state_34000__$1 = (function (){var statearr_34004 = state_34000;
(statearr_34004[(7)] = inst_33982__$1);

return statearr_34004;
})();
if(cljs.core.truth_(inst_33983)){
var statearr_34005_34028 = state_34000__$1;
(statearr_34005_34028[(1)] = (5));

} else {
var statearr_34006_34029 = state_34000__$1;
(statearr_34006_34029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (6))){
var inst_33982 = (state_34000[(7)]);
var inst_33987 = p.call(null,inst_33982);
var state_34000__$1 = state_34000;
if(cljs.core.truth_(inst_33987)){
var statearr_34007_34030 = state_34000__$1;
(statearr_34007_34030[(1)] = (8));

} else {
var statearr_34008_34031 = state_34000__$1;
(statearr_34008_34031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (3))){
var inst_33998 = (state_34000[(2)]);
var state_34000__$1 = state_34000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34000__$1,inst_33998);
} else {
if((state_val_34001 === (2))){
var state_34000__$1 = state_34000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34000__$1,(4),ch);
} else {
if((state_val_34001 === (11))){
var inst_33990 = (state_34000[(2)]);
var state_34000__$1 = state_34000;
var statearr_34009_34032 = state_34000__$1;
(statearr_34009_34032[(2)] = inst_33990);

(statearr_34009_34032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (9))){
var state_34000__$1 = state_34000;
var statearr_34010_34033 = state_34000__$1;
(statearr_34010_34033[(2)] = null);

(statearr_34010_34033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (5))){
var inst_33985 = cljs.core.async.close_BANG_.call(null,out);
var state_34000__$1 = state_34000;
var statearr_34011_34034 = state_34000__$1;
(statearr_34011_34034[(2)] = inst_33985);

(statearr_34011_34034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (10))){
var inst_33993 = (state_34000[(2)]);
var state_34000__$1 = (function (){var statearr_34012 = state_34000;
(statearr_34012[(8)] = inst_33993);

return statearr_34012;
})();
var statearr_34013_34035 = state_34000__$1;
(statearr_34013_34035[(2)] = null);

(statearr_34013_34035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (8))){
var inst_33982 = (state_34000[(7)]);
var state_34000__$1 = state_34000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34000__$1,(11),out,inst_33982);
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
});})(c__31753__auto___34025,out))
;
return ((function (switch__31732__auto__,c__31753__auto___34025,out){
return (function() {
var cljs$core$async$state_machine__31733__auto__ = null;
var cljs$core$async$state_machine__31733__auto____0 = (function (){
var statearr_34017 = [null,null,null,null,null,null,null,null,null];
(statearr_34017[(0)] = cljs$core$async$state_machine__31733__auto__);

(statearr_34017[(1)] = (1));

return statearr_34017;
});
var cljs$core$async$state_machine__31733__auto____1 = (function (state_34000){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_34000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e34018){if((e34018 instanceof Object)){
var ex__31736__auto__ = e34018;
var statearr_34019_34036 = state_34000;
(statearr_34019_34036[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34037 = state_34000;
state_34000 = G__34037;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
cljs$core$async$state_machine__31733__auto__ = function(state_34000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31733__auto____1.call(this,state_34000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31733__auto____0;
cljs$core$async$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31733__auto____1;
return cljs$core$async$state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto___34025,out))
})();
var state__31755__auto__ = (function (){var statearr_34020 = f__31754__auto__.call(null);
(statearr_34020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto___34025);

return statearr_34020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto___34025,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34038 = [];
var len__26121__auto___34041 = arguments.length;
var i__26122__auto___34042 = (0);
while(true){
if((i__26122__auto___34042 < len__26121__auto___34041)){
args34038.push((arguments[i__26122__auto___34042]));

var G__34043 = (i__26122__auto___34042 + (1));
i__26122__auto___34042 = G__34043;
continue;
} else {
}
break;
}

var G__34040 = args34038.length;
switch (G__34040) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34038.length)].join('')));

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
var c__31753__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto__){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto__){
return (function (state_34210){
var state_val_34211 = (state_34210[(1)]);
if((state_val_34211 === (7))){
var inst_34206 = (state_34210[(2)]);
var state_34210__$1 = state_34210;
var statearr_34212_34253 = state_34210__$1;
(statearr_34212_34253[(2)] = inst_34206);

(statearr_34212_34253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (20))){
var inst_34176 = (state_34210[(7)]);
var inst_34187 = (state_34210[(2)]);
var inst_34188 = cljs.core.next.call(null,inst_34176);
var inst_34162 = inst_34188;
var inst_34163 = null;
var inst_34164 = (0);
var inst_34165 = (0);
var state_34210__$1 = (function (){var statearr_34213 = state_34210;
(statearr_34213[(8)] = inst_34165);

(statearr_34213[(9)] = inst_34164);

(statearr_34213[(10)] = inst_34162);

(statearr_34213[(11)] = inst_34163);

(statearr_34213[(12)] = inst_34187);

return statearr_34213;
})();
var statearr_34214_34254 = state_34210__$1;
(statearr_34214_34254[(2)] = null);

(statearr_34214_34254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (1))){
var state_34210__$1 = state_34210;
var statearr_34215_34255 = state_34210__$1;
(statearr_34215_34255[(2)] = null);

(statearr_34215_34255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (4))){
var inst_34151 = (state_34210[(13)]);
var inst_34151__$1 = (state_34210[(2)]);
var inst_34152 = (inst_34151__$1 == null);
var state_34210__$1 = (function (){var statearr_34216 = state_34210;
(statearr_34216[(13)] = inst_34151__$1);

return statearr_34216;
})();
if(cljs.core.truth_(inst_34152)){
var statearr_34217_34256 = state_34210__$1;
(statearr_34217_34256[(1)] = (5));

} else {
var statearr_34218_34257 = state_34210__$1;
(statearr_34218_34257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (15))){
var state_34210__$1 = state_34210;
var statearr_34222_34258 = state_34210__$1;
(statearr_34222_34258[(2)] = null);

(statearr_34222_34258[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (21))){
var state_34210__$1 = state_34210;
var statearr_34223_34259 = state_34210__$1;
(statearr_34223_34259[(2)] = null);

(statearr_34223_34259[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (13))){
var inst_34165 = (state_34210[(8)]);
var inst_34164 = (state_34210[(9)]);
var inst_34162 = (state_34210[(10)]);
var inst_34163 = (state_34210[(11)]);
var inst_34172 = (state_34210[(2)]);
var inst_34173 = (inst_34165 + (1));
var tmp34219 = inst_34164;
var tmp34220 = inst_34162;
var tmp34221 = inst_34163;
var inst_34162__$1 = tmp34220;
var inst_34163__$1 = tmp34221;
var inst_34164__$1 = tmp34219;
var inst_34165__$1 = inst_34173;
var state_34210__$1 = (function (){var statearr_34224 = state_34210;
(statearr_34224[(8)] = inst_34165__$1);

(statearr_34224[(9)] = inst_34164__$1);

(statearr_34224[(14)] = inst_34172);

(statearr_34224[(10)] = inst_34162__$1);

(statearr_34224[(11)] = inst_34163__$1);

return statearr_34224;
})();
var statearr_34225_34260 = state_34210__$1;
(statearr_34225_34260[(2)] = null);

(statearr_34225_34260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (22))){
var state_34210__$1 = state_34210;
var statearr_34226_34261 = state_34210__$1;
(statearr_34226_34261[(2)] = null);

(statearr_34226_34261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (6))){
var inst_34151 = (state_34210[(13)]);
var inst_34160 = f.call(null,inst_34151);
var inst_34161 = cljs.core.seq.call(null,inst_34160);
var inst_34162 = inst_34161;
var inst_34163 = null;
var inst_34164 = (0);
var inst_34165 = (0);
var state_34210__$1 = (function (){var statearr_34227 = state_34210;
(statearr_34227[(8)] = inst_34165);

(statearr_34227[(9)] = inst_34164);

(statearr_34227[(10)] = inst_34162);

(statearr_34227[(11)] = inst_34163);

return statearr_34227;
})();
var statearr_34228_34262 = state_34210__$1;
(statearr_34228_34262[(2)] = null);

(statearr_34228_34262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (17))){
var inst_34176 = (state_34210[(7)]);
var inst_34180 = cljs.core.chunk_first.call(null,inst_34176);
var inst_34181 = cljs.core.chunk_rest.call(null,inst_34176);
var inst_34182 = cljs.core.count.call(null,inst_34180);
var inst_34162 = inst_34181;
var inst_34163 = inst_34180;
var inst_34164 = inst_34182;
var inst_34165 = (0);
var state_34210__$1 = (function (){var statearr_34229 = state_34210;
(statearr_34229[(8)] = inst_34165);

(statearr_34229[(9)] = inst_34164);

(statearr_34229[(10)] = inst_34162);

(statearr_34229[(11)] = inst_34163);

return statearr_34229;
})();
var statearr_34230_34263 = state_34210__$1;
(statearr_34230_34263[(2)] = null);

(statearr_34230_34263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (3))){
var inst_34208 = (state_34210[(2)]);
var state_34210__$1 = state_34210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34210__$1,inst_34208);
} else {
if((state_val_34211 === (12))){
var inst_34196 = (state_34210[(2)]);
var state_34210__$1 = state_34210;
var statearr_34231_34264 = state_34210__$1;
(statearr_34231_34264[(2)] = inst_34196);

(statearr_34231_34264[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (2))){
var state_34210__$1 = state_34210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34210__$1,(4),in$);
} else {
if((state_val_34211 === (23))){
var inst_34204 = (state_34210[(2)]);
var state_34210__$1 = state_34210;
var statearr_34232_34265 = state_34210__$1;
(statearr_34232_34265[(2)] = inst_34204);

(statearr_34232_34265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (19))){
var inst_34191 = (state_34210[(2)]);
var state_34210__$1 = state_34210;
var statearr_34233_34266 = state_34210__$1;
(statearr_34233_34266[(2)] = inst_34191);

(statearr_34233_34266[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (11))){
var inst_34176 = (state_34210[(7)]);
var inst_34162 = (state_34210[(10)]);
var inst_34176__$1 = cljs.core.seq.call(null,inst_34162);
var state_34210__$1 = (function (){var statearr_34234 = state_34210;
(statearr_34234[(7)] = inst_34176__$1);

return statearr_34234;
})();
if(inst_34176__$1){
var statearr_34235_34267 = state_34210__$1;
(statearr_34235_34267[(1)] = (14));

} else {
var statearr_34236_34268 = state_34210__$1;
(statearr_34236_34268[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (9))){
var inst_34198 = (state_34210[(2)]);
var inst_34199 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34210__$1 = (function (){var statearr_34237 = state_34210;
(statearr_34237[(15)] = inst_34198);

return statearr_34237;
})();
if(cljs.core.truth_(inst_34199)){
var statearr_34238_34269 = state_34210__$1;
(statearr_34238_34269[(1)] = (21));

} else {
var statearr_34239_34270 = state_34210__$1;
(statearr_34239_34270[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (5))){
var inst_34154 = cljs.core.async.close_BANG_.call(null,out);
var state_34210__$1 = state_34210;
var statearr_34240_34271 = state_34210__$1;
(statearr_34240_34271[(2)] = inst_34154);

(statearr_34240_34271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (14))){
var inst_34176 = (state_34210[(7)]);
var inst_34178 = cljs.core.chunked_seq_QMARK_.call(null,inst_34176);
var state_34210__$1 = state_34210;
if(inst_34178){
var statearr_34241_34272 = state_34210__$1;
(statearr_34241_34272[(1)] = (17));

} else {
var statearr_34242_34273 = state_34210__$1;
(statearr_34242_34273[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (16))){
var inst_34194 = (state_34210[(2)]);
var state_34210__$1 = state_34210;
var statearr_34243_34274 = state_34210__$1;
(statearr_34243_34274[(2)] = inst_34194);

(statearr_34243_34274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (10))){
var inst_34165 = (state_34210[(8)]);
var inst_34163 = (state_34210[(11)]);
var inst_34170 = cljs.core._nth.call(null,inst_34163,inst_34165);
var state_34210__$1 = state_34210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34210__$1,(13),out,inst_34170);
} else {
if((state_val_34211 === (18))){
var inst_34176 = (state_34210[(7)]);
var inst_34185 = cljs.core.first.call(null,inst_34176);
var state_34210__$1 = state_34210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34210__$1,(20),out,inst_34185);
} else {
if((state_val_34211 === (8))){
var inst_34165 = (state_34210[(8)]);
var inst_34164 = (state_34210[(9)]);
var inst_34167 = (inst_34165 < inst_34164);
var inst_34168 = inst_34167;
var state_34210__$1 = state_34210;
if(cljs.core.truth_(inst_34168)){
var statearr_34244_34275 = state_34210__$1;
(statearr_34244_34275[(1)] = (10));

} else {
var statearr_34245_34276 = state_34210__$1;
(statearr_34245_34276[(1)] = (11));

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
});})(c__31753__auto__))
;
return ((function (switch__31732__auto__,c__31753__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31733__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31733__auto____0 = (function (){
var statearr_34249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34249[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31733__auto__);

(statearr_34249[(1)] = (1));

return statearr_34249;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31733__auto____1 = (function (state_34210){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_34210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e34250){if((e34250 instanceof Object)){
var ex__31736__auto__ = e34250;
var statearr_34251_34277 = state_34210;
(statearr_34251_34277[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34278 = state_34210;
state_34210 = G__34278;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31733__auto__ = function(state_34210){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31733__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31733__auto____1.call(this,state_34210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31733__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31733__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto__))
})();
var state__31755__auto__ = (function (){var statearr_34252 = f__31754__auto__.call(null);
(statearr_34252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto__);

return statearr_34252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto__))
);

return c__31753__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args34279 = [];
var len__26121__auto___34282 = arguments.length;
var i__26122__auto___34283 = (0);
while(true){
if((i__26122__auto___34283 < len__26121__auto___34282)){
args34279.push((arguments[i__26122__auto___34283]));

var G__34284 = (i__26122__auto___34283 + (1));
i__26122__auto___34283 = G__34284;
continue;
} else {
}
break;
}

var G__34281 = args34279.length;
switch (G__34281) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34279.length)].join('')));

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
var args34286 = [];
var len__26121__auto___34289 = arguments.length;
var i__26122__auto___34290 = (0);
while(true){
if((i__26122__auto___34290 < len__26121__auto___34289)){
args34286.push((arguments[i__26122__auto___34290]));

var G__34291 = (i__26122__auto___34290 + (1));
i__26122__auto___34290 = G__34291;
continue;
} else {
}
break;
}

var G__34288 = args34286.length;
switch (G__34288) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34286.length)].join('')));

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
var args34293 = [];
var len__26121__auto___34344 = arguments.length;
var i__26122__auto___34345 = (0);
while(true){
if((i__26122__auto___34345 < len__26121__auto___34344)){
args34293.push((arguments[i__26122__auto___34345]));

var G__34346 = (i__26122__auto___34345 + (1));
i__26122__auto___34345 = G__34346;
continue;
} else {
}
break;
}

var G__34295 = args34293.length;
switch (G__34295) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34293.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31753__auto___34348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto___34348,out){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto___34348,out){
return (function (state_34319){
var state_val_34320 = (state_34319[(1)]);
if((state_val_34320 === (7))){
var inst_34314 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
var statearr_34321_34349 = state_34319__$1;
(statearr_34321_34349[(2)] = inst_34314);

(statearr_34321_34349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (1))){
var inst_34296 = null;
var state_34319__$1 = (function (){var statearr_34322 = state_34319;
(statearr_34322[(7)] = inst_34296);

return statearr_34322;
})();
var statearr_34323_34350 = state_34319__$1;
(statearr_34323_34350[(2)] = null);

(statearr_34323_34350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (4))){
var inst_34299 = (state_34319[(8)]);
var inst_34299__$1 = (state_34319[(2)]);
var inst_34300 = (inst_34299__$1 == null);
var inst_34301 = cljs.core.not.call(null,inst_34300);
var state_34319__$1 = (function (){var statearr_34324 = state_34319;
(statearr_34324[(8)] = inst_34299__$1);

return statearr_34324;
})();
if(inst_34301){
var statearr_34325_34351 = state_34319__$1;
(statearr_34325_34351[(1)] = (5));

} else {
var statearr_34326_34352 = state_34319__$1;
(statearr_34326_34352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (6))){
var state_34319__$1 = state_34319;
var statearr_34327_34353 = state_34319__$1;
(statearr_34327_34353[(2)] = null);

(statearr_34327_34353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (3))){
var inst_34316 = (state_34319[(2)]);
var inst_34317 = cljs.core.async.close_BANG_.call(null,out);
var state_34319__$1 = (function (){var statearr_34328 = state_34319;
(statearr_34328[(9)] = inst_34316);

return statearr_34328;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34319__$1,inst_34317);
} else {
if((state_val_34320 === (2))){
var state_34319__$1 = state_34319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34319__$1,(4),ch);
} else {
if((state_val_34320 === (11))){
var inst_34299 = (state_34319[(8)]);
var inst_34308 = (state_34319[(2)]);
var inst_34296 = inst_34299;
var state_34319__$1 = (function (){var statearr_34329 = state_34319;
(statearr_34329[(10)] = inst_34308);

(statearr_34329[(7)] = inst_34296);

return statearr_34329;
})();
var statearr_34330_34354 = state_34319__$1;
(statearr_34330_34354[(2)] = null);

(statearr_34330_34354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (9))){
var inst_34299 = (state_34319[(8)]);
var state_34319__$1 = state_34319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34319__$1,(11),out,inst_34299);
} else {
if((state_val_34320 === (5))){
var inst_34296 = (state_34319[(7)]);
var inst_34299 = (state_34319[(8)]);
var inst_34303 = cljs.core._EQ_.call(null,inst_34299,inst_34296);
var state_34319__$1 = state_34319;
if(inst_34303){
var statearr_34332_34355 = state_34319__$1;
(statearr_34332_34355[(1)] = (8));

} else {
var statearr_34333_34356 = state_34319__$1;
(statearr_34333_34356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (10))){
var inst_34311 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
var statearr_34334_34357 = state_34319__$1;
(statearr_34334_34357[(2)] = inst_34311);

(statearr_34334_34357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (8))){
var inst_34296 = (state_34319[(7)]);
var tmp34331 = inst_34296;
var inst_34296__$1 = tmp34331;
var state_34319__$1 = (function (){var statearr_34335 = state_34319;
(statearr_34335[(7)] = inst_34296__$1);

return statearr_34335;
})();
var statearr_34336_34358 = state_34319__$1;
(statearr_34336_34358[(2)] = null);

(statearr_34336_34358[(1)] = (2));


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
});})(c__31753__auto___34348,out))
;
return ((function (switch__31732__auto__,c__31753__auto___34348,out){
return (function() {
var cljs$core$async$state_machine__31733__auto__ = null;
var cljs$core$async$state_machine__31733__auto____0 = (function (){
var statearr_34340 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34340[(0)] = cljs$core$async$state_machine__31733__auto__);

(statearr_34340[(1)] = (1));

return statearr_34340;
});
var cljs$core$async$state_machine__31733__auto____1 = (function (state_34319){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_34319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e34341){if((e34341 instanceof Object)){
var ex__31736__auto__ = e34341;
var statearr_34342_34359 = state_34319;
(statearr_34342_34359[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34360 = state_34319;
state_34319 = G__34360;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
cljs$core$async$state_machine__31733__auto__ = function(state_34319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31733__auto____1.call(this,state_34319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31733__auto____0;
cljs$core$async$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31733__auto____1;
return cljs$core$async$state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto___34348,out))
})();
var state__31755__auto__ = (function (){var statearr_34343 = f__31754__auto__.call(null);
(statearr_34343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto___34348);

return statearr_34343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto___34348,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args34361 = [];
var len__26121__auto___34431 = arguments.length;
var i__26122__auto___34432 = (0);
while(true){
if((i__26122__auto___34432 < len__26121__auto___34431)){
args34361.push((arguments[i__26122__auto___34432]));

var G__34433 = (i__26122__auto___34432 + (1));
i__26122__auto___34432 = G__34433;
continue;
} else {
}
break;
}

var G__34363 = args34361.length;
switch (G__34363) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34361.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31753__auto___34435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto___34435,out){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto___34435,out){
return (function (state_34401){
var state_val_34402 = (state_34401[(1)]);
if((state_val_34402 === (7))){
var inst_34397 = (state_34401[(2)]);
var state_34401__$1 = state_34401;
var statearr_34403_34436 = state_34401__$1;
(statearr_34403_34436[(2)] = inst_34397);

(statearr_34403_34436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (1))){
var inst_34364 = (new Array(n));
var inst_34365 = inst_34364;
var inst_34366 = (0);
var state_34401__$1 = (function (){var statearr_34404 = state_34401;
(statearr_34404[(7)] = inst_34365);

(statearr_34404[(8)] = inst_34366);

return statearr_34404;
})();
var statearr_34405_34437 = state_34401__$1;
(statearr_34405_34437[(2)] = null);

(statearr_34405_34437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (4))){
var inst_34369 = (state_34401[(9)]);
var inst_34369__$1 = (state_34401[(2)]);
var inst_34370 = (inst_34369__$1 == null);
var inst_34371 = cljs.core.not.call(null,inst_34370);
var state_34401__$1 = (function (){var statearr_34406 = state_34401;
(statearr_34406[(9)] = inst_34369__$1);

return statearr_34406;
})();
if(inst_34371){
var statearr_34407_34438 = state_34401__$1;
(statearr_34407_34438[(1)] = (5));

} else {
var statearr_34408_34439 = state_34401__$1;
(statearr_34408_34439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (15))){
var inst_34391 = (state_34401[(2)]);
var state_34401__$1 = state_34401;
var statearr_34409_34440 = state_34401__$1;
(statearr_34409_34440[(2)] = inst_34391);

(statearr_34409_34440[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (13))){
var state_34401__$1 = state_34401;
var statearr_34410_34441 = state_34401__$1;
(statearr_34410_34441[(2)] = null);

(statearr_34410_34441[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (6))){
var inst_34366 = (state_34401[(8)]);
var inst_34387 = (inst_34366 > (0));
var state_34401__$1 = state_34401;
if(cljs.core.truth_(inst_34387)){
var statearr_34411_34442 = state_34401__$1;
(statearr_34411_34442[(1)] = (12));

} else {
var statearr_34412_34443 = state_34401__$1;
(statearr_34412_34443[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (3))){
var inst_34399 = (state_34401[(2)]);
var state_34401__$1 = state_34401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34401__$1,inst_34399);
} else {
if((state_val_34402 === (12))){
var inst_34365 = (state_34401[(7)]);
var inst_34389 = cljs.core.vec.call(null,inst_34365);
var state_34401__$1 = state_34401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34401__$1,(15),out,inst_34389);
} else {
if((state_val_34402 === (2))){
var state_34401__$1 = state_34401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34401__$1,(4),ch);
} else {
if((state_val_34402 === (11))){
var inst_34381 = (state_34401[(2)]);
var inst_34382 = (new Array(n));
var inst_34365 = inst_34382;
var inst_34366 = (0);
var state_34401__$1 = (function (){var statearr_34413 = state_34401;
(statearr_34413[(10)] = inst_34381);

(statearr_34413[(7)] = inst_34365);

(statearr_34413[(8)] = inst_34366);

return statearr_34413;
})();
var statearr_34414_34444 = state_34401__$1;
(statearr_34414_34444[(2)] = null);

(statearr_34414_34444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (9))){
var inst_34365 = (state_34401[(7)]);
var inst_34379 = cljs.core.vec.call(null,inst_34365);
var state_34401__$1 = state_34401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34401__$1,(11),out,inst_34379);
} else {
if((state_val_34402 === (5))){
var inst_34374 = (state_34401[(11)]);
var inst_34365 = (state_34401[(7)]);
var inst_34369 = (state_34401[(9)]);
var inst_34366 = (state_34401[(8)]);
var inst_34373 = (inst_34365[inst_34366] = inst_34369);
var inst_34374__$1 = (inst_34366 + (1));
var inst_34375 = (inst_34374__$1 < n);
var state_34401__$1 = (function (){var statearr_34415 = state_34401;
(statearr_34415[(11)] = inst_34374__$1);

(statearr_34415[(12)] = inst_34373);

return statearr_34415;
})();
if(cljs.core.truth_(inst_34375)){
var statearr_34416_34445 = state_34401__$1;
(statearr_34416_34445[(1)] = (8));

} else {
var statearr_34417_34446 = state_34401__$1;
(statearr_34417_34446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (14))){
var inst_34394 = (state_34401[(2)]);
var inst_34395 = cljs.core.async.close_BANG_.call(null,out);
var state_34401__$1 = (function (){var statearr_34419 = state_34401;
(statearr_34419[(13)] = inst_34394);

return statearr_34419;
})();
var statearr_34420_34447 = state_34401__$1;
(statearr_34420_34447[(2)] = inst_34395);

(statearr_34420_34447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (10))){
var inst_34385 = (state_34401[(2)]);
var state_34401__$1 = state_34401;
var statearr_34421_34448 = state_34401__$1;
(statearr_34421_34448[(2)] = inst_34385);

(statearr_34421_34448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (8))){
var inst_34374 = (state_34401[(11)]);
var inst_34365 = (state_34401[(7)]);
var tmp34418 = inst_34365;
var inst_34365__$1 = tmp34418;
var inst_34366 = inst_34374;
var state_34401__$1 = (function (){var statearr_34422 = state_34401;
(statearr_34422[(7)] = inst_34365__$1);

(statearr_34422[(8)] = inst_34366);

return statearr_34422;
})();
var statearr_34423_34449 = state_34401__$1;
(statearr_34423_34449[(2)] = null);

(statearr_34423_34449[(1)] = (2));


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
});})(c__31753__auto___34435,out))
;
return ((function (switch__31732__auto__,c__31753__auto___34435,out){
return (function() {
var cljs$core$async$state_machine__31733__auto__ = null;
var cljs$core$async$state_machine__31733__auto____0 = (function (){
var statearr_34427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34427[(0)] = cljs$core$async$state_machine__31733__auto__);

(statearr_34427[(1)] = (1));

return statearr_34427;
});
var cljs$core$async$state_machine__31733__auto____1 = (function (state_34401){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_34401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e34428){if((e34428 instanceof Object)){
var ex__31736__auto__ = e34428;
var statearr_34429_34450 = state_34401;
(statearr_34429_34450[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34451 = state_34401;
state_34401 = G__34451;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
cljs$core$async$state_machine__31733__auto__ = function(state_34401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31733__auto____1.call(this,state_34401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31733__auto____0;
cljs$core$async$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31733__auto____1;
return cljs$core$async$state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto___34435,out))
})();
var state__31755__auto__ = (function (){var statearr_34430 = f__31754__auto__.call(null);
(statearr_34430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto___34435);

return statearr_34430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto___34435,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args34452 = [];
var len__26121__auto___34526 = arguments.length;
var i__26122__auto___34527 = (0);
while(true){
if((i__26122__auto___34527 < len__26121__auto___34526)){
args34452.push((arguments[i__26122__auto___34527]));

var G__34528 = (i__26122__auto___34527 + (1));
i__26122__auto___34527 = G__34528;
continue;
} else {
}
break;
}

var G__34454 = args34452.length;
switch (G__34454) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34452.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31753__auto___34530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto___34530,out){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto___34530,out){
return (function (state_34496){
var state_val_34497 = (state_34496[(1)]);
if((state_val_34497 === (7))){
var inst_34492 = (state_34496[(2)]);
var state_34496__$1 = state_34496;
var statearr_34498_34531 = state_34496__$1;
(statearr_34498_34531[(2)] = inst_34492);

(statearr_34498_34531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (1))){
var inst_34455 = [];
var inst_34456 = inst_34455;
var inst_34457 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34496__$1 = (function (){var statearr_34499 = state_34496;
(statearr_34499[(7)] = inst_34457);

(statearr_34499[(8)] = inst_34456);

return statearr_34499;
})();
var statearr_34500_34532 = state_34496__$1;
(statearr_34500_34532[(2)] = null);

(statearr_34500_34532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (4))){
var inst_34460 = (state_34496[(9)]);
var inst_34460__$1 = (state_34496[(2)]);
var inst_34461 = (inst_34460__$1 == null);
var inst_34462 = cljs.core.not.call(null,inst_34461);
var state_34496__$1 = (function (){var statearr_34501 = state_34496;
(statearr_34501[(9)] = inst_34460__$1);

return statearr_34501;
})();
if(inst_34462){
var statearr_34502_34533 = state_34496__$1;
(statearr_34502_34533[(1)] = (5));

} else {
var statearr_34503_34534 = state_34496__$1;
(statearr_34503_34534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (15))){
var inst_34486 = (state_34496[(2)]);
var state_34496__$1 = state_34496;
var statearr_34504_34535 = state_34496__$1;
(statearr_34504_34535[(2)] = inst_34486);

(statearr_34504_34535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (13))){
var state_34496__$1 = state_34496;
var statearr_34505_34536 = state_34496__$1;
(statearr_34505_34536[(2)] = null);

(statearr_34505_34536[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (6))){
var inst_34456 = (state_34496[(8)]);
var inst_34481 = inst_34456.length;
var inst_34482 = (inst_34481 > (0));
var state_34496__$1 = state_34496;
if(cljs.core.truth_(inst_34482)){
var statearr_34506_34537 = state_34496__$1;
(statearr_34506_34537[(1)] = (12));

} else {
var statearr_34507_34538 = state_34496__$1;
(statearr_34507_34538[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (3))){
var inst_34494 = (state_34496[(2)]);
var state_34496__$1 = state_34496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34496__$1,inst_34494);
} else {
if((state_val_34497 === (12))){
var inst_34456 = (state_34496[(8)]);
var inst_34484 = cljs.core.vec.call(null,inst_34456);
var state_34496__$1 = state_34496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34496__$1,(15),out,inst_34484);
} else {
if((state_val_34497 === (2))){
var state_34496__$1 = state_34496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34496__$1,(4),ch);
} else {
if((state_val_34497 === (11))){
var inst_34464 = (state_34496[(10)]);
var inst_34460 = (state_34496[(9)]);
var inst_34474 = (state_34496[(2)]);
var inst_34475 = [];
var inst_34476 = inst_34475.push(inst_34460);
var inst_34456 = inst_34475;
var inst_34457 = inst_34464;
var state_34496__$1 = (function (){var statearr_34508 = state_34496;
(statearr_34508[(7)] = inst_34457);

(statearr_34508[(8)] = inst_34456);

(statearr_34508[(11)] = inst_34476);

(statearr_34508[(12)] = inst_34474);

return statearr_34508;
})();
var statearr_34509_34539 = state_34496__$1;
(statearr_34509_34539[(2)] = null);

(statearr_34509_34539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (9))){
var inst_34456 = (state_34496[(8)]);
var inst_34472 = cljs.core.vec.call(null,inst_34456);
var state_34496__$1 = state_34496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34496__$1,(11),out,inst_34472);
} else {
if((state_val_34497 === (5))){
var inst_34464 = (state_34496[(10)]);
var inst_34457 = (state_34496[(7)]);
var inst_34460 = (state_34496[(9)]);
var inst_34464__$1 = f.call(null,inst_34460);
var inst_34465 = cljs.core._EQ_.call(null,inst_34464__$1,inst_34457);
var inst_34466 = cljs.core.keyword_identical_QMARK_.call(null,inst_34457,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34467 = (inst_34465) || (inst_34466);
var state_34496__$1 = (function (){var statearr_34510 = state_34496;
(statearr_34510[(10)] = inst_34464__$1);

return statearr_34510;
})();
if(cljs.core.truth_(inst_34467)){
var statearr_34511_34540 = state_34496__$1;
(statearr_34511_34540[(1)] = (8));

} else {
var statearr_34512_34541 = state_34496__$1;
(statearr_34512_34541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (14))){
var inst_34489 = (state_34496[(2)]);
var inst_34490 = cljs.core.async.close_BANG_.call(null,out);
var state_34496__$1 = (function (){var statearr_34514 = state_34496;
(statearr_34514[(13)] = inst_34489);

return statearr_34514;
})();
var statearr_34515_34542 = state_34496__$1;
(statearr_34515_34542[(2)] = inst_34490);

(statearr_34515_34542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (10))){
var inst_34479 = (state_34496[(2)]);
var state_34496__$1 = state_34496;
var statearr_34516_34543 = state_34496__$1;
(statearr_34516_34543[(2)] = inst_34479);

(statearr_34516_34543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (8))){
var inst_34464 = (state_34496[(10)]);
var inst_34460 = (state_34496[(9)]);
var inst_34456 = (state_34496[(8)]);
var inst_34469 = inst_34456.push(inst_34460);
var tmp34513 = inst_34456;
var inst_34456__$1 = tmp34513;
var inst_34457 = inst_34464;
var state_34496__$1 = (function (){var statearr_34517 = state_34496;
(statearr_34517[(7)] = inst_34457);

(statearr_34517[(8)] = inst_34456__$1);

(statearr_34517[(14)] = inst_34469);

return statearr_34517;
})();
var statearr_34518_34544 = state_34496__$1;
(statearr_34518_34544[(2)] = null);

(statearr_34518_34544[(1)] = (2));


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
});})(c__31753__auto___34530,out))
;
return ((function (switch__31732__auto__,c__31753__auto___34530,out){
return (function() {
var cljs$core$async$state_machine__31733__auto__ = null;
var cljs$core$async$state_machine__31733__auto____0 = (function (){
var statearr_34522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34522[(0)] = cljs$core$async$state_machine__31733__auto__);

(statearr_34522[(1)] = (1));

return statearr_34522;
});
var cljs$core$async$state_machine__31733__auto____1 = (function (state_34496){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_34496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e34523){if((e34523 instanceof Object)){
var ex__31736__auto__ = e34523;
var statearr_34524_34545 = state_34496;
(statearr_34524_34545[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34546 = state_34496;
state_34496 = G__34546;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
cljs$core$async$state_machine__31733__auto__ = function(state_34496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31733__auto____1.call(this,state_34496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31733__auto____0;
cljs$core$async$state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31733__auto____1;
return cljs$core$async$state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto___34530,out))
})();
var state__31755__auto__ = (function (){var statearr_34525 = f__31754__auto__.call(null);
(statearr_34525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto___34530);

return statearr_34525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto___34530,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1484162999999
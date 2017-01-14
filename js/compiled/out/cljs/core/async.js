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
var args31228 = [];
var len__26121__auto___31234 = arguments.length;
var i__26122__auto___31235 = (0);
while(true){
if((i__26122__auto___31235 < len__26121__auto___31234)){
args31228.push((arguments[i__26122__auto___31235]));

var G__31236 = (i__26122__auto___31235 + (1));
i__26122__auto___31235 = G__31236;
continue;
} else {
}
break;
}

var G__31230 = args31228.length;
switch (G__31230) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31228.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31231 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31231 = (function (f,blockable,meta31232){
this.f = f;
this.blockable = blockable;
this.meta31232 = meta31232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31233,meta31232__$1){
var self__ = this;
var _31233__$1 = this;
return (new cljs.core.async.t_cljs$core$async31231(self__.f,self__.blockable,meta31232__$1));
});

cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31233){
var self__ = this;
var _31233__$1 = this;
return self__.meta31232;
});

cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31231.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31232","meta31232",234150188,null)], null);
});

cljs.core.async.t_cljs$core$async31231.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31231";

cljs.core.async.t_cljs$core$async31231.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async31231");
});

cljs.core.async.__GT_t_cljs$core$async31231 = (function cljs$core$async$__GT_t_cljs$core$async31231(f__$1,blockable__$1,meta31232){
return (new cljs.core.async.t_cljs$core$async31231(f__$1,blockable__$1,meta31232));
});

}

return (new cljs.core.async.t_cljs$core$async31231(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args31240 = [];
var len__26121__auto___31243 = arguments.length;
var i__26122__auto___31244 = (0);
while(true){
if((i__26122__auto___31244 < len__26121__auto___31243)){
args31240.push((arguments[i__26122__auto___31244]));

var G__31245 = (i__26122__auto___31244 + (1));
i__26122__auto___31244 = G__31245;
continue;
} else {
}
break;
}

var G__31242 = args31240.length;
switch (G__31242) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31240.length)].join('')));

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
var args31247 = [];
var len__26121__auto___31250 = arguments.length;
var i__26122__auto___31251 = (0);
while(true){
if((i__26122__auto___31251 < len__26121__auto___31250)){
args31247.push((arguments[i__26122__auto___31251]));

var G__31252 = (i__26122__auto___31251 + (1));
i__26122__auto___31251 = G__31252;
continue;
} else {
}
break;
}

var G__31249 = args31247.length;
switch (G__31249) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31247.length)].join('')));

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
var args31254 = [];
var len__26121__auto___31257 = arguments.length;
var i__26122__auto___31258 = (0);
while(true){
if((i__26122__auto___31258 < len__26121__auto___31257)){
args31254.push((arguments[i__26122__auto___31258]));

var G__31259 = (i__26122__auto___31258 + (1));
i__26122__auto___31258 = G__31259;
continue;
} else {
}
break;
}

var G__31256 = args31254.length;
switch (G__31256) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31254.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31261 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31261);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31261,ret){
return (function (){
return fn1.call(null,val_31261);
});})(val_31261,ret))
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
var args31262 = [];
var len__26121__auto___31265 = arguments.length;
var i__26122__auto___31266 = (0);
while(true){
if((i__26122__auto___31266 < len__26121__auto___31265)){
args31262.push((arguments[i__26122__auto___31266]));

var G__31267 = (i__26122__auto___31266 + (1));
i__26122__auto___31266 = G__31267;
continue;
} else {
}
break;
}

var G__31264 = args31262.length;
switch (G__31264) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31262.length)].join('')));

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
var n__25961__auto___31269 = n;
var x_31270 = (0);
while(true){
if((x_31270 < n__25961__auto___31269)){
(a[x_31270] = (0));

var G__31271 = (x_31270 + (1));
x_31270 = G__31271;
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

var G__31272 = (i + (1));
i = G__31272;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31276 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31276 = (function (alt_flag,flag,meta31277){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta31277 = meta31277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31278,meta31277__$1){
var self__ = this;
var _31278__$1 = this;
return (new cljs.core.async.t_cljs$core$async31276(self__.alt_flag,self__.flag,meta31277__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31278){
var self__ = this;
var _31278__$1 = this;
return self__.meta31277;
});})(flag))
;

cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31276.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31277","meta31277",236363161,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31276.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31276";

cljs.core.async.t_cljs$core$async31276.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async31276");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31276 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31276(alt_flag__$1,flag__$1,meta31277){
return (new cljs.core.async.t_cljs$core$async31276(alt_flag__$1,flag__$1,meta31277));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31276(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31282 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31282 = (function (alt_handler,flag,cb,meta31283){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta31283 = meta31283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31284,meta31283__$1){
var self__ = this;
var _31284__$1 = this;
return (new cljs.core.async.t_cljs$core$async31282(self__.alt_handler,self__.flag,self__.cb,meta31283__$1));
});

cljs.core.async.t_cljs$core$async31282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31284){
var self__ = this;
var _31284__$1 = this;
return self__.meta31283;
});

cljs.core.async.t_cljs$core$async31282.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31282.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31282.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31282.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31282.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31283","meta31283",-1741899234,null)], null);
});

cljs.core.async.t_cljs$core$async31282.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31282";

cljs.core.async.t_cljs$core$async31282.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async31282");
});

cljs.core.async.__GT_t_cljs$core$async31282 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31282(alt_handler__$1,flag__$1,cb__$1,meta31283){
return (new cljs.core.async.t_cljs$core$async31282(alt_handler__$1,flag__$1,cb__$1,meta31283));
});

}

return (new cljs.core.async.t_cljs$core$async31282(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31285_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31285_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31286_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31286_SHARP_,port], null));
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
var G__31287 = (i + (1));
i = G__31287;
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
var len__26121__auto___31293 = arguments.length;
var i__26122__auto___31294 = (0);
while(true){
if((i__26122__auto___31294 < len__26121__auto___31293)){
args__26128__auto__.push((arguments[i__26122__auto___31294]));

var G__31295 = (i__26122__auto___31294 + (1));
i__26122__auto___31294 = G__31295;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31290){
var map__31291 = p__31290;
var map__31291__$1 = ((((!((map__31291 == null)))?((((map__31291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31291):map__31291);
var opts = map__31291__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31288){
var G__31289 = cljs.core.first.call(null,seq31288);
var seq31288__$1 = cljs.core.next.call(null,seq31288);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31289,seq31288__$1);
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
var args31296 = [];
var len__26121__auto___31346 = arguments.length;
var i__26122__auto___31347 = (0);
while(true){
if((i__26122__auto___31347 < len__26121__auto___31346)){
args31296.push((arguments[i__26122__auto___31347]));

var G__31348 = (i__26122__auto___31347 + (1));
i__26122__auto___31347 = G__31348;
continue;
} else {
}
break;
}

var G__31298 = args31296.length;
switch (G__31298) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31296.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31183__auto___31350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto___31350){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto___31350){
return (function (state_31322){
var state_val_31323 = (state_31322[(1)]);
if((state_val_31323 === (7))){
var inst_31318 = (state_31322[(2)]);
var state_31322__$1 = state_31322;
var statearr_31324_31351 = state_31322__$1;
(statearr_31324_31351[(2)] = inst_31318);

(statearr_31324_31351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (1))){
var state_31322__$1 = state_31322;
var statearr_31325_31352 = state_31322__$1;
(statearr_31325_31352[(2)] = null);

(statearr_31325_31352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (4))){
var inst_31301 = (state_31322[(7)]);
var inst_31301__$1 = (state_31322[(2)]);
var inst_31302 = (inst_31301__$1 == null);
var state_31322__$1 = (function (){var statearr_31326 = state_31322;
(statearr_31326[(7)] = inst_31301__$1);

return statearr_31326;
})();
if(cljs.core.truth_(inst_31302)){
var statearr_31327_31353 = state_31322__$1;
(statearr_31327_31353[(1)] = (5));

} else {
var statearr_31328_31354 = state_31322__$1;
(statearr_31328_31354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (13))){
var state_31322__$1 = state_31322;
var statearr_31329_31355 = state_31322__$1;
(statearr_31329_31355[(2)] = null);

(statearr_31329_31355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (6))){
var inst_31301 = (state_31322[(7)]);
var state_31322__$1 = state_31322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31322__$1,(11),to,inst_31301);
} else {
if((state_val_31323 === (3))){
var inst_31320 = (state_31322[(2)]);
var state_31322__$1 = state_31322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31322__$1,inst_31320);
} else {
if((state_val_31323 === (12))){
var state_31322__$1 = state_31322;
var statearr_31330_31356 = state_31322__$1;
(statearr_31330_31356[(2)] = null);

(statearr_31330_31356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (2))){
var state_31322__$1 = state_31322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31322__$1,(4),from);
} else {
if((state_val_31323 === (11))){
var inst_31311 = (state_31322[(2)]);
var state_31322__$1 = state_31322;
if(cljs.core.truth_(inst_31311)){
var statearr_31331_31357 = state_31322__$1;
(statearr_31331_31357[(1)] = (12));

} else {
var statearr_31332_31358 = state_31322__$1;
(statearr_31332_31358[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (9))){
var state_31322__$1 = state_31322;
var statearr_31333_31359 = state_31322__$1;
(statearr_31333_31359[(2)] = null);

(statearr_31333_31359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (5))){
var state_31322__$1 = state_31322;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31334_31360 = state_31322__$1;
(statearr_31334_31360[(1)] = (8));

} else {
var statearr_31335_31361 = state_31322__$1;
(statearr_31335_31361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (14))){
var inst_31316 = (state_31322[(2)]);
var state_31322__$1 = state_31322;
var statearr_31336_31362 = state_31322__$1;
(statearr_31336_31362[(2)] = inst_31316);

(statearr_31336_31362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (10))){
var inst_31308 = (state_31322[(2)]);
var state_31322__$1 = state_31322;
var statearr_31337_31363 = state_31322__$1;
(statearr_31337_31363[(2)] = inst_31308);

(statearr_31337_31363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (8))){
var inst_31305 = cljs.core.async.close_BANG_.call(null,to);
var state_31322__$1 = state_31322;
var statearr_31338_31364 = state_31322__$1;
(statearr_31338_31364[(2)] = inst_31305);

(statearr_31338_31364[(1)] = (10));


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
});})(c__31183__auto___31350))
;
return ((function (switch__31118__auto__,c__31183__auto___31350){
return (function() {
var cljs$core$async$state_machine__31119__auto__ = null;
var cljs$core$async$state_machine__31119__auto____0 = (function (){
var statearr_31342 = [null,null,null,null,null,null,null,null];
(statearr_31342[(0)] = cljs$core$async$state_machine__31119__auto__);

(statearr_31342[(1)] = (1));

return statearr_31342;
});
var cljs$core$async$state_machine__31119__auto____1 = (function (state_31322){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_31322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e31343){if((e31343 instanceof Object)){
var ex__31122__auto__ = e31343;
var statearr_31344_31365 = state_31322;
(statearr_31344_31365[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31366 = state_31322;
state_31322 = G__31366;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
cljs$core$async$state_machine__31119__auto__ = function(state_31322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31119__auto____1.call(this,state_31322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31119__auto____0;
cljs$core$async$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31119__auto____1;
return cljs$core$async$state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto___31350))
})();
var state__31185__auto__ = (function (){var statearr_31345 = f__31184__auto__.call(null);
(statearr_31345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto___31350);

return statearr_31345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto___31350))
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
return (function (p__31554){
var vec__31555 = p__31554;
var v = cljs.core.nth.call(null,vec__31555,(0),null);
var p = cljs.core.nth.call(null,vec__31555,(1),null);
var job = vec__31555;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31183__auto___31741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto___31741,res,vec__31555,v,p,job,jobs,results){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto___31741,res,vec__31555,v,p,job,jobs,results){
return (function (state_31562){
var state_val_31563 = (state_31562[(1)]);
if((state_val_31563 === (1))){
var state_31562__$1 = state_31562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31562__$1,(2),res,v);
} else {
if((state_val_31563 === (2))){
var inst_31559 = (state_31562[(2)]);
var inst_31560 = cljs.core.async.close_BANG_.call(null,res);
var state_31562__$1 = (function (){var statearr_31564 = state_31562;
(statearr_31564[(7)] = inst_31559);

return statearr_31564;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31562__$1,inst_31560);
} else {
return null;
}
}
});})(c__31183__auto___31741,res,vec__31555,v,p,job,jobs,results))
;
return ((function (switch__31118__auto__,c__31183__auto___31741,res,vec__31555,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____0 = (function (){
var statearr_31568 = [null,null,null,null,null,null,null,null];
(statearr_31568[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__);

(statearr_31568[(1)] = (1));

return statearr_31568;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____1 = (function (state_31562){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_31562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e31569){if((e31569 instanceof Object)){
var ex__31122__auto__ = e31569;
var statearr_31570_31742 = state_31562;
(statearr_31570_31742[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31743 = state_31562;
state_31562 = G__31743;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__ = function(state_31562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____1.call(this,state_31562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto___31741,res,vec__31555,v,p,job,jobs,results))
})();
var state__31185__auto__ = (function (){var statearr_31571 = f__31184__auto__.call(null);
(statearr_31571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto___31741);

return statearr_31571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto___31741,res,vec__31555,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31572){
var vec__31573 = p__31572;
var v = cljs.core.nth.call(null,vec__31573,(0),null);
var p = cljs.core.nth.call(null,vec__31573,(1),null);
var job = vec__31573;
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
var n__25961__auto___31744 = n;
var __31745 = (0);
while(true){
if((__31745 < n__25961__auto___31744)){
var G__31576_31746 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31576_31746) {
case "compute":
var c__31183__auto___31748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31745,c__31183__auto___31748,G__31576_31746,n__25961__auto___31744,jobs,results,process,async){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (__31745,c__31183__auto___31748,G__31576_31746,n__25961__auto___31744,jobs,results,process,async){
return (function (state_31589){
var state_val_31590 = (state_31589[(1)]);
if((state_val_31590 === (1))){
var state_31589__$1 = state_31589;
var statearr_31591_31749 = state_31589__$1;
(statearr_31591_31749[(2)] = null);

(statearr_31591_31749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (2))){
var state_31589__$1 = state_31589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31589__$1,(4),jobs);
} else {
if((state_val_31590 === (3))){
var inst_31587 = (state_31589[(2)]);
var state_31589__$1 = state_31589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31589__$1,inst_31587);
} else {
if((state_val_31590 === (4))){
var inst_31579 = (state_31589[(2)]);
var inst_31580 = process.call(null,inst_31579);
var state_31589__$1 = state_31589;
if(cljs.core.truth_(inst_31580)){
var statearr_31592_31750 = state_31589__$1;
(statearr_31592_31750[(1)] = (5));

} else {
var statearr_31593_31751 = state_31589__$1;
(statearr_31593_31751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (5))){
var state_31589__$1 = state_31589;
var statearr_31594_31752 = state_31589__$1;
(statearr_31594_31752[(2)] = null);

(statearr_31594_31752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (6))){
var state_31589__$1 = state_31589;
var statearr_31595_31753 = state_31589__$1;
(statearr_31595_31753[(2)] = null);

(statearr_31595_31753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (7))){
var inst_31585 = (state_31589[(2)]);
var state_31589__$1 = state_31589;
var statearr_31596_31754 = state_31589__$1;
(statearr_31596_31754[(2)] = inst_31585);

(statearr_31596_31754[(1)] = (3));


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
});})(__31745,c__31183__auto___31748,G__31576_31746,n__25961__auto___31744,jobs,results,process,async))
;
return ((function (__31745,switch__31118__auto__,c__31183__auto___31748,G__31576_31746,n__25961__auto___31744,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____0 = (function (){
var statearr_31600 = [null,null,null,null,null,null,null];
(statearr_31600[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__);

(statearr_31600[(1)] = (1));

return statearr_31600;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____1 = (function (state_31589){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_31589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e31601){if((e31601 instanceof Object)){
var ex__31122__auto__ = e31601;
var statearr_31602_31755 = state_31589;
(statearr_31602_31755[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31756 = state_31589;
state_31589 = G__31756;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__ = function(state_31589){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____1.call(this,state_31589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__;
})()
;})(__31745,switch__31118__auto__,c__31183__auto___31748,G__31576_31746,n__25961__auto___31744,jobs,results,process,async))
})();
var state__31185__auto__ = (function (){var statearr_31603 = f__31184__auto__.call(null);
(statearr_31603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto___31748);

return statearr_31603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(__31745,c__31183__auto___31748,G__31576_31746,n__25961__auto___31744,jobs,results,process,async))
);


break;
case "async":
var c__31183__auto___31757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31745,c__31183__auto___31757,G__31576_31746,n__25961__auto___31744,jobs,results,process,async){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (__31745,c__31183__auto___31757,G__31576_31746,n__25961__auto___31744,jobs,results,process,async){
return (function (state_31616){
var state_val_31617 = (state_31616[(1)]);
if((state_val_31617 === (1))){
var state_31616__$1 = state_31616;
var statearr_31618_31758 = state_31616__$1;
(statearr_31618_31758[(2)] = null);

(statearr_31618_31758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (2))){
var state_31616__$1 = state_31616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31616__$1,(4),jobs);
} else {
if((state_val_31617 === (3))){
var inst_31614 = (state_31616[(2)]);
var state_31616__$1 = state_31616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31616__$1,inst_31614);
} else {
if((state_val_31617 === (4))){
var inst_31606 = (state_31616[(2)]);
var inst_31607 = async.call(null,inst_31606);
var state_31616__$1 = state_31616;
if(cljs.core.truth_(inst_31607)){
var statearr_31619_31759 = state_31616__$1;
(statearr_31619_31759[(1)] = (5));

} else {
var statearr_31620_31760 = state_31616__$1;
(statearr_31620_31760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (5))){
var state_31616__$1 = state_31616;
var statearr_31621_31761 = state_31616__$1;
(statearr_31621_31761[(2)] = null);

(statearr_31621_31761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (6))){
var state_31616__$1 = state_31616;
var statearr_31622_31762 = state_31616__$1;
(statearr_31622_31762[(2)] = null);

(statearr_31622_31762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (7))){
var inst_31612 = (state_31616[(2)]);
var state_31616__$1 = state_31616;
var statearr_31623_31763 = state_31616__$1;
(statearr_31623_31763[(2)] = inst_31612);

(statearr_31623_31763[(1)] = (3));


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
});})(__31745,c__31183__auto___31757,G__31576_31746,n__25961__auto___31744,jobs,results,process,async))
;
return ((function (__31745,switch__31118__auto__,c__31183__auto___31757,G__31576_31746,n__25961__auto___31744,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____0 = (function (){
var statearr_31627 = [null,null,null,null,null,null,null];
(statearr_31627[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__);

(statearr_31627[(1)] = (1));

return statearr_31627;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____1 = (function (state_31616){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_31616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e31628){if((e31628 instanceof Object)){
var ex__31122__auto__ = e31628;
var statearr_31629_31764 = state_31616;
(statearr_31629_31764[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31765 = state_31616;
state_31616 = G__31765;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__ = function(state_31616){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____1.call(this,state_31616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__;
})()
;})(__31745,switch__31118__auto__,c__31183__auto___31757,G__31576_31746,n__25961__auto___31744,jobs,results,process,async))
})();
var state__31185__auto__ = (function (){var statearr_31630 = f__31184__auto__.call(null);
(statearr_31630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto___31757);

return statearr_31630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(__31745,c__31183__auto___31757,G__31576_31746,n__25961__auto___31744,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31766 = (__31745 + (1));
__31745 = G__31766;
continue;
} else {
}
break;
}

var c__31183__auto___31767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto___31767,jobs,results,process,async){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto___31767,jobs,results,process,async){
return (function (state_31652){
var state_val_31653 = (state_31652[(1)]);
if((state_val_31653 === (1))){
var state_31652__$1 = state_31652;
var statearr_31654_31768 = state_31652__$1;
(statearr_31654_31768[(2)] = null);

(statearr_31654_31768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31653 === (2))){
var state_31652__$1 = state_31652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31652__$1,(4),from);
} else {
if((state_val_31653 === (3))){
var inst_31650 = (state_31652[(2)]);
var state_31652__$1 = state_31652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31652__$1,inst_31650);
} else {
if((state_val_31653 === (4))){
var inst_31633 = (state_31652[(7)]);
var inst_31633__$1 = (state_31652[(2)]);
var inst_31634 = (inst_31633__$1 == null);
var state_31652__$1 = (function (){var statearr_31655 = state_31652;
(statearr_31655[(7)] = inst_31633__$1);

return statearr_31655;
})();
if(cljs.core.truth_(inst_31634)){
var statearr_31656_31769 = state_31652__$1;
(statearr_31656_31769[(1)] = (5));

} else {
var statearr_31657_31770 = state_31652__$1;
(statearr_31657_31770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31653 === (5))){
var inst_31636 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31652__$1 = state_31652;
var statearr_31658_31771 = state_31652__$1;
(statearr_31658_31771[(2)] = inst_31636);

(statearr_31658_31771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31653 === (6))){
var inst_31638 = (state_31652[(8)]);
var inst_31633 = (state_31652[(7)]);
var inst_31638__$1 = cljs.core.async.chan.call(null,(1));
var inst_31639 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31640 = [inst_31633,inst_31638__$1];
var inst_31641 = (new cljs.core.PersistentVector(null,2,(5),inst_31639,inst_31640,null));
var state_31652__$1 = (function (){var statearr_31659 = state_31652;
(statearr_31659[(8)] = inst_31638__$1);

return statearr_31659;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31652__$1,(8),jobs,inst_31641);
} else {
if((state_val_31653 === (7))){
var inst_31648 = (state_31652[(2)]);
var state_31652__$1 = state_31652;
var statearr_31660_31772 = state_31652__$1;
(statearr_31660_31772[(2)] = inst_31648);

(statearr_31660_31772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31653 === (8))){
var inst_31638 = (state_31652[(8)]);
var inst_31643 = (state_31652[(2)]);
var state_31652__$1 = (function (){var statearr_31661 = state_31652;
(statearr_31661[(9)] = inst_31643);

return statearr_31661;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31652__$1,(9),results,inst_31638);
} else {
if((state_val_31653 === (9))){
var inst_31645 = (state_31652[(2)]);
var state_31652__$1 = (function (){var statearr_31662 = state_31652;
(statearr_31662[(10)] = inst_31645);

return statearr_31662;
})();
var statearr_31663_31773 = state_31652__$1;
(statearr_31663_31773[(2)] = null);

(statearr_31663_31773[(1)] = (2));


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
});})(c__31183__auto___31767,jobs,results,process,async))
;
return ((function (switch__31118__auto__,c__31183__auto___31767,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____0 = (function (){
var statearr_31667 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31667[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__);

(statearr_31667[(1)] = (1));

return statearr_31667;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____1 = (function (state_31652){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_31652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e31668){if((e31668 instanceof Object)){
var ex__31122__auto__ = e31668;
var statearr_31669_31774 = state_31652;
(statearr_31669_31774[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31775 = state_31652;
state_31652 = G__31775;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__ = function(state_31652){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____1.call(this,state_31652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto___31767,jobs,results,process,async))
})();
var state__31185__auto__ = (function (){var statearr_31670 = f__31184__auto__.call(null);
(statearr_31670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto___31767);

return statearr_31670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto___31767,jobs,results,process,async))
);


var c__31183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto__,jobs,results,process,async){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto__,jobs,results,process,async){
return (function (state_31708){
var state_val_31709 = (state_31708[(1)]);
if((state_val_31709 === (7))){
var inst_31704 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
var statearr_31710_31776 = state_31708__$1;
(statearr_31710_31776[(2)] = inst_31704);

(statearr_31710_31776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (20))){
var state_31708__$1 = state_31708;
var statearr_31711_31777 = state_31708__$1;
(statearr_31711_31777[(2)] = null);

(statearr_31711_31777[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (1))){
var state_31708__$1 = state_31708;
var statearr_31712_31778 = state_31708__$1;
(statearr_31712_31778[(2)] = null);

(statearr_31712_31778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (4))){
var inst_31673 = (state_31708[(7)]);
var inst_31673__$1 = (state_31708[(2)]);
var inst_31674 = (inst_31673__$1 == null);
var state_31708__$1 = (function (){var statearr_31713 = state_31708;
(statearr_31713[(7)] = inst_31673__$1);

return statearr_31713;
})();
if(cljs.core.truth_(inst_31674)){
var statearr_31714_31779 = state_31708__$1;
(statearr_31714_31779[(1)] = (5));

} else {
var statearr_31715_31780 = state_31708__$1;
(statearr_31715_31780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (15))){
var inst_31686 = (state_31708[(8)]);
var state_31708__$1 = state_31708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31708__$1,(18),to,inst_31686);
} else {
if((state_val_31709 === (21))){
var inst_31699 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
var statearr_31716_31781 = state_31708__$1;
(statearr_31716_31781[(2)] = inst_31699);

(statearr_31716_31781[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (13))){
var inst_31701 = (state_31708[(2)]);
var state_31708__$1 = (function (){var statearr_31717 = state_31708;
(statearr_31717[(9)] = inst_31701);

return statearr_31717;
})();
var statearr_31718_31782 = state_31708__$1;
(statearr_31718_31782[(2)] = null);

(statearr_31718_31782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (6))){
var inst_31673 = (state_31708[(7)]);
var state_31708__$1 = state_31708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31708__$1,(11),inst_31673);
} else {
if((state_val_31709 === (17))){
var inst_31694 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
if(cljs.core.truth_(inst_31694)){
var statearr_31719_31783 = state_31708__$1;
(statearr_31719_31783[(1)] = (19));

} else {
var statearr_31720_31784 = state_31708__$1;
(statearr_31720_31784[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (3))){
var inst_31706 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31708__$1,inst_31706);
} else {
if((state_val_31709 === (12))){
var inst_31683 = (state_31708[(10)]);
var state_31708__$1 = state_31708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31708__$1,(14),inst_31683);
} else {
if((state_val_31709 === (2))){
var state_31708__$1 = state_31708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31708__$1,(4),results);
} else {
if((state_val_31709 === (19))){
var state_31708__$1 = state_31708;
var statearr_31721_31785 = state_31708__$1;
(statearr_31721_31785[(2)] = null);

(statearr_31721_31785[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (11))){
var inst_31683 = (state_31708[(2)]);
var state_31708__$1 = (function (){var statearr_31722 = state_31708;
(statearr_31722[(10)] = inst_31683);

return statearr_31722;
})();
var statearr_31723_31786 = state_31708__$1;
(statearr_31723_31786[(2)] = null);

(statearr_31723_31786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (9))){
var state_31708__$1 = state_31708;
var statearr_31724_31787 = state_31708__$1;
(statearr_31724_31787[(2)] = null);

(statearr_31724_31787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (5))){
var state_31708__$1 = state_31708;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31725_31788 = state_31708__$1;
(statearr_31725_31788[(1)] = (8));

} else {
var statearr_31726_31789 = state_31708__$1;
(statearr_31726_31789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (14))){
var inst_31688 = (state_31708[(11)]);
var inst_31686 = (state_31708[(8)]);
var inst_31686__$1 = (state_31708[(2)]);
var inst_31687 = (inst_31686__$1 == null);
var inst_31688__$1 = cljs.core.not.call(null,inst_31687);
var state_31708__$1 = (function (){var statearr_31727 = state_31708;
(statearr_31727[(11)] = inst_31688__$1);

(statearr_31727[(8)] = inst_31686__$1);

return statearr_31727;
})();
if(inst_31688__$1){
var statearr_31728_31790 = state_31708__$1;
(statearr_31728_31790[(1)] = (15));

} else {
var statearr_31729_31791 = state_31708__$1;
(statearr_31729_31791[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (16))){
var inst_31688 = (state_31708[(11)]);
var state_31708__$1 = state_31708;
var statearr_31730_31792 = state_31708__$1;
(statearr_31730_31792[(2)] = inst_31688);

(statearr_31730_31792[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (10))){
var inst_31680 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
var statearr_31731_31793 = state_31708__$1;
(statearr_31731_31793[(2)] = inst_31680);

(statearr_31731_31793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (18))){
var inst_31691 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
var statearr_31732_31794 = state_31708__$1;
(statearr_31732_31794[(2)] = inst_31691);

(statearr_31732_31794[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31709 === (8))){
var inst_31677 = cljs.core.async.close_BANG_.call(null,to);
var state_31708__$1 = state_31708;
var statearr_31733_31795 = state_31708__$1;
(statearr_31733_31795[(2)] = inst_31677);

(statearr_31733_31795[(1)] = (10));


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
});})(c__31183__auto__,jobs,results,process,async))
;
return ((function (switch__31118__auto__,c__31183__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____0 = (function (){
var statearr_31737 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31737[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__);

(statearr_31737[(1)] = (1));

return statearr_31737;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____1 = (function (state_31708){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_31708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e31738){if((e31738 instanceof Object)){
var ex__31122__auto__ = e31738;
var statearr_31739_31796 = state_31708;
(statearr_31739_31796[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31797 = state_31708;
state_31708 = G__31797;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__ = function(state_31708){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____1.call(this,state_31708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto__,jobs,results,process,async))
})();
var state__31185__auto__ = (function (){var statearr_31740 = f__31184__auto__.call(null);
(statearr_31740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto__);

return statearr_31740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto__,jobs,results,process,async))
);

return c__31183__auto__;
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
var args31798 = [];
var len__26121__auto___31801 = arguments.length;
var i__26122__auto___31802 = (0);
while(true){
if((i__26122__auto___31802 < len__26121__auto___31801)){
args31798.push((arguments[i__26122__auto___31802]));

var G__31803 = (i__26122__auto___31802 + (1));
i__26122__auto___31802 = G__31803;
continue;
} else {
}
break;
}

var G__31800 = args31798.length;
switch (G__31800) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31798.length)].join('')));

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
var args31805 = [];
var len__26121__auto___31808 = arguments.length;
var i__26122__auto___31809 = (0);
while(true){
if((i__26122__auto___31809 < len__26121__auto___31808)){
args31805.push((arguments[i__26122__auto___31809]));

var G__31810 = (i__26122__auto___31809 + (1));
i__26122__auto___31809 = G__31810;
continue;
} else {
}
break;
}

var G__31807 = args31805.length;
switch (G__31807) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31805.length)].join('')));

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
var args31812 = [];
var len__26121__auto___31865 = arguments.length;
var i__26122__auto___31866 = (0);
while(true){
if((i__26122__auto___31866 < len__26121__auto___31865)){
args31812.push((arguments[i__26122__auto___31866]));

var G__31867 = (i__26122__auto___31866 + (1));
i__26122__auto___31866 = G__31867;
continue;
} else {
}
break;
}

var G__31814 = args31812.length;
switch (G__31814) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31812.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31183__auto___31869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto___31869,tc,fc){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto___31869,tc,fc){
return (function (state_31840){
var state_val_31841 = (state_31840[(1)]);
if((state_val_31841 === (7))){
var inst_31836 = (state_31840[(2)]);
var state_31840__$1 = state_31840;
var statearr_31842_31870 = state_31840__$1;
(statearr_31842_31870[(2)] = inst_31836);

(statearr_31842_31870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (1))){
var state_31840__$1 = state_31840;
var statearr_31843_31871 = state_31840__$1;
(statearr_31843_31871[(2)] = null);

(statearr_31843_31871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (4))){
var inst_31817 = (state_31840[(7)]);
var inst_31817__$1 = (state_31840[(2)]);
var inst_31818 = (inst_31817__$1 == null);
var state_31840__$1 = (function (){var statearr_31844 = state_31840;
(statearr_31844[(7)] = inst_31817__$1);

return statearr_31844;
})();
if(cljs.core.truth_(inst_31818)){
var statearr_31845_31872 = state_31840__$1;
(statearr_31845_31872[(1)] = (5));

} else {
var statearr_31846_31873 = state_31840__$1;
(statearr_31846_31873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (13))){
var state_31840__$1 = state_31840;
var statearr_31847_31874 = state_31840__$1;
(statearr_31847_31874[(2)] = null);

(statearr_31847_31874[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (6))){
var inst_31817 = (state_31840[(7)]);
var inst_31823 = p.call(null,inst_31817);
var state_31840__$1 = state_31840;
if(cljs.core.truth_(inst_31823)){
var statearr_31848_31875 = state_31840__$1;
(statearr_31848_31875[(1)] = (9));

} else {
var statearr_31849_31876 = state_31840__$1;
(statearr_31849_31876[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (3))){
var inst_31838 = (state_31840[(2)]);
var state_31840__$1 = state_31840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31840__$1,inst_31838);
} else {
if((state_val_31841 === (12))){
var state_31840__$1 = state_31840;
var statearr_31850_31877 = state_31840__$1;
(statearr_31850_31877[(2)] = null);

(statearr_31850_31877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (2))){
var state_31840__$1 = state_31840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31840__$1,(4),ch);
} else {
if((state_val_31841 === (11))){
var inst_31817 = (state_31840[(7)]);
var inst_31827 = (state_31840[(2)]);
var state_31840__$1 = state_31840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31840__$1,(8),inst_31827,inst_31817);
} else {
if((state_val_31841 === (9))){
var state_31840__$1 = state_31840;
var statearr_31851_31878 = state_31840__$1;
(statearr_31851_31878[(2)] = tc);

(statearr_31851_31878[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (5))){
var inst_31820 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31821 = cljs.core.async.close_BANG_.call(null,fc);
var state_31840__$1 = (function (){var statearr_31852 = state_31840;
(statearr_31852[(8)] = inst_31820);

return statearr_31852;
})();
var statearr_31853_31879 = state_31840__$1;
(statearr_31853_31879[(2)] = inst_31821);

(statearr_31853_31879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (14))){
var inst_31834 = (state_31840[(2)]);
var state_31840__$1 = state_31840;
var statearr_31854_31880 = state_31840__$1;
(statearr_31854_31880[(2)] = inst_31834);

(statearr_31854_31880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (10))){
var state_31840__$1 = state_31840;
var statearr_31855_31881 = state_31840__$1;
(statearr_31855_31881[(2)] = fc);

(statearr_31855_31881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (8))){
var inst_31829 = (state_31840[(2)]);
var state_31840__$1 = state_31840;
if(cljs.core.truth_(inst_31829)){
var statearr_31856_31882 = state_31840__$1;
(statearr_31856_31882[(1)] = (12));

} else {
var statearr_31857_31883 = state_31840__$1;
(statearr_31857_31883[(1)] = (13));

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
});})(c__31183__auto___31869,tc,fc))
;
return ((function (switch__31118__auto__,c__31183__auto___31869,tc,fc){
return (function() {
var cljs$core$async$state_machine__31119__auto__ = null;
var cljs$core$async$state_machine__31119__auto____0 = (function (){
var statearr_31861 = [null,null,null,null,null,null,null,null,null];
(statearr_31861[(0)] = cljs$core$async$state_machine__31119__auto__);

(statearr_31861[(1)] = (1));

return statearr_31861;
});
var cljs$core$async$state_machine__31119__auto____1 = (function (state_31840){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_31840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e31862){if((e31862 instanceof Object)){
var ex__31122__auto__ = e31862;
var statearr_31863_31884 = state_31840;
(statearr_31863_31884[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31885 = state_31840;
state_31840 = G__31885;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
cljs$core$async$state_machine__31119__auto__ = function(state_31840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31119__auto____1.call(this,state_31840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31119__auto____0;
cljs$core$async$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31119__auto____1;
return cljs$core$async$state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto___31869,tc,fc))
})();
var state__31185__auto__ = (function (){var statearr_31864 = f__31184__auto__.call(null);
(statearr_31864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto___31869);

return statearr_31864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto___31869,tc,fc))
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
var c__31183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto__){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto__){
return (function (state_31949){
var state_val_31950 = (state_31949[(1)]);
if((state_val_31950 === (7))){
var inst_31945 = (state_31949[(2)]);
var state_31949__$1 = state_31949;
var statearr_31951_31972 = state_31949__$1;
(statearr_31951_31972[(2)] = inst_31945);

(statearr_31951_31972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31950 === (1))){
var inst_31929 = init;
var state_31949__$1 = (function (){var statearr_31952 = state_31949;
(statearr_31952[(7)] = inst_31929);

return statearr_31952;
})();
var statearr_31953_31973 = state_31949__$1;
(statearr_31953_31973[(2)] = null);

(statearr_31953_31973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31950 === (4))){
var inst_31932 = (state_31949[(8)]);
var inst_31932__$1 = (state_31949[(2)]);
var inst_31933 = (inst_31932__$1 == null);
var state_31949__$1 = (function (){var statearr_31954 = state_31949;
(statearr_31954[(8)] = inst_31932__$1);

return statearr_31954;
})();
if(cljs.core.truth_(inst_31933)){
var statearr_31955_31974 = state_31949__$1;
(statearr_31955_31974[(1)] = (5));

} else {
var statearr_31956_31975 = state_31949__$1;
(statearr_31956_31975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31950 === (6))){
var inst_31929 = (state_31949[(7)]);
var inst_31936 = (state_31949[(9)]);
var inst_31932 = (state_31949[(8)]);
var inst_31936__$1 = f.call(null,inst_31929,inst_31932);
var inst_31937 = cljs.core.reduced_QMARK_.call(null,inst_31936__$1);
var state_31949__$1 = (function (){var statearr_31957 = state_31949;
(statearr_31957[(9)] = inst_31936__$1);

return statearr_31957;
})();
if(inst_31937){
var statearr_31958_31976 = state_31949__$1;
(statearr_31958_31976[(1)] = (8));

} else {
var statearr_31959_31977 = state_31949__$1;
(statearr_31959_31977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31950 === (3))){
var inst_31947 = (state_31949[(2)]);
var state_31949__$1 = state_31949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31949__$1,inst_31947);
} else {
if((state_val_31950 === (2))){
var state_31949__$1 = state_31949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31949__$1,(4),ch);
} else {
if((state_val_31950 === (9))){
var inst_31936 = (state_31949[(9)]);
var inst_31929 = inst_31936;
var state_31949__$1 = (function (){var statearr_31960 = state_31949;
(statearr_31960[(7)] = inst_31929);

return statearr_31960;
})();
var statearr_31961_31978 = state_31949__$1;
(statearr_31961_31978[(2)] = null);

(statearr_31961_31978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31950 === (5))){
var inst_31929 = (state_31949[(7)]);
var state_31949__$1 = state_31949;
var statearr_31962_31979 = state_31949__$1;
(statearr_31962_31979[(2)] = inst_31929);

(statearr_31962_31979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31950 === (10))){
var inst_31943 = (state_31949[(2)]);
var state_31949__$1 = state_31949;
var statearr_31963_31980 = state_31949__$1;
(statearr_31963_31980[(2)] = inst_31943);

(statearr_31963_31980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31950 === (8))){
var inst_31936 = (state_31949[(9)]);
var inst_31939 = cljs.core.deref.call(null,inst_31936);
var state_31949__$1 = state_31949;
var statearr_31964_31981 = state_31949__$1;
(statearr_31964_31981[(2)] = inst_31939);

(statearr_31964_31981[(1)] = (10));


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
});})(c__31183__auto__))
;
return ((function (switch__31118__auto__,c__31183__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31119__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31119__auto____0 = (function (){
var statearr_31968 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31968[(0)] = cljs$core$async$reduce_$_state_machine__31119__auto__);

(statearr_31968[(1)] = (1));

return statearr_31968;
});
var cljs$core$async$reduce_$_state_machine__31119__auto____1 = (function (state_31949){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_31949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e31969){if((e31969 instanceof Object)){
var ex__31122__auto__ = e31969;
var statearr_31970_31982 = state_31949;
(statearr_31970_31982[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31983 = state_31949;
state_31949 = G__31983;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31119__auto__ = function(state_31949){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31119__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31119__auto____1.call(this,state_31949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31119__auto____0;
cljs$core$async$reduce_$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31119__auto____1;
return cljs$core$async$reduce_$_state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto__))
})();
var state__31185__auto__ = (function (){var statearr_31971 = f__31184__auto__.call(null);
(statearr_31971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto__);

return statearr_31971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto__))
);

return c__31183__auto__;
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
var args31984 = [];
var len__26121__auto___32036 = arguments.length;
var i__26122__auto___32037 = (0);
while(true){
if((i__26122__auto___32037 < len__26121__auto___32036)){
args31984.push((arguments[i__26122__auto___32037]));

var G__32038 = (i__26122__auto___32037 + (1));
i__26122__auto___32037 = G__32038;
continue;
} else {
}
break;
}

var G__31986 = args31984.length;
switch (G__31986) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31984.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto__){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto__){
return (function (state_32011){
var state_val_32012 = (state_32011[(1)]);
if((state_val_32012 === (7))){
var inst_31993 = (state_32011[(2)]);
var state_32011__$1 = state_32011;
var statearr_32013_32040 = state_32011__$1;
(statearr_32013_32040[(2)] = inst_31993);

(statearr_32013_32040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32012 === (1))){
var inst_31987 = cljs.core.seq.call(null,coll);
var inst_31988 = inst_31987;
var state_32011__$1 = (function (){var statearr_32014 = state_32011;
(statearr_32014[(7)] = inst_31988);

return statearr_32014;
})();
var statearr_32015_32041 = state_32011__$1;
(statearr_32015_32041[(2)] = null);

(statearr_32015_32041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32012 === (4))){
var inst_31988 = (state_32011[(7)]);
var inst_31991 = cljs.core.first.call(null,inst_31988);
var state_32011__$1 = state_32011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32011__$1,(7),ch,inst_31991);
} else {
if((state_val_32012 === (13))){
var inst_32005 = (state_32011[(2)]);
var state_32011__$1 = state_32011;
var statearr_32016_32042 = state_32011__$1;
(statearr_32016_32042[(2)] = inst_32005);

(statearr_32016_32042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32012 === (6))){
var inst_31996 = (state_32011[(2)]);
var state_32011__$1 = state_32011;
if(cljs.core.truth_(inst_31996)){
var statearr_32017_32043 = state_32011__$1;
(statearr_32017_32043[(1)] = (8));

} else {
var statearr_32018_32044 = state_32011__$1;
(statearr_32018_32044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32012 === (3))){
var inst_32009 = (state_32011[(2)]);
var state_32011__$1 = state_32011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32011__$1,inst_32009);
} else {
if((state_val_32012 === (12))){
var state_32011__$1 = state_32011;
var statearr_32019_32045 = state_32011__$1;
(statearr_32019_32045[(2)] = null);

(statearr_32019_32045[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32012 === (2))){
var inst_31988 = (state_32011[(7)]);
var state_32011__$1 = state_32011;
if(cljs.core.truth_(inst_31988)){
var statearr_32020_32046 = state_32011__$1;
(statearr_32020_32046[(1)] = (4));

} else {
var statearr_32021_32047 = state_32011__$1;
(statearr_32021_32047[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32012 === (11))){
var inst_32002 = cljs.core.async.close_BANG_.call(null,ch);
var state_32011__$1 = state_32011;
var statearr_32022_32048 = state_32011__$1;
(statearr_32022_32048[(2)] = inst_32002);

(statearr_32022_32048[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32012 === (9))){
var state_32011__$1 = state_32011;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32023_32049 = state_32011__$1;
(statearr_32023_32049[(1)] = (11));

} else {
var statearr_32024_32050 = state_32011__$1;
(statearr_32024_32050[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32012 === (5))){
var inst_31988 = (state_32011[(7)]);
var state_32011__$1 = state_32011;
var statearr_32025_32051 = state_32011__$1;
(statearr_32025_32051[(2)] = inst_31988);

(statearr_32025_32051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32012 === (10))){
var inst_32007 = (state_32011[(2)]);
var state_32011__$1 = state_32011;
var statearr_32026_32052 = state_32011__$1;
(statearr_32026_32052[(2)] = inst_32007);

(statearr_32026_32052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32012 === (8))){
var inst_31988 = (state_32011[(7)]);
var inst_31998 = cljs.core.next.call(null,inst_31988);
var inst_31988__$1 = inst_31998;
var state_32011__$1 = (function (){var statearr_32027 = state_32011;
(statearr_32027[(7)] = inst_31988__$1);

return statearr_32027;
})();
var statearr_32028_32053 = state_32011__$1;
(statearr_32028_32053[(2)] = null);

(statearr_32028_32053[(1)] = (2));


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
});})(c__31183__auto__))
;
return ((function (switch__31118__auto__,c__31183__auto__){
return (function() {
var cljs$core$async$state_machine__31119__auto__ = null;
var cljs$core$async$state_machine__31119__auto____0 = (function (){
var statearr_32032 = [null,null,null,null,null,null,null,null];
(statearr_32032[(0)] = cljs$core$async$state_machine__31119__auto__);

(statearr_32032[(1)] = (1));

return statearr_32032;
});
var cljs$core$async$state_machine__31119__auto____1 = (function (state_32011){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_32011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e32033){if((e32033 instanceof Object)){
var ex__31122__auto__ = e32033;
var statearr_32034_32054 = state_32011;
(statearr_32034_32054[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32055 = state_32011;
state_32011 = G__32055;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
cljs$core$async$state_machine__31119__auto__ = function(state_32011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31119__auto____1.call(this,state_32011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31119__auto____0;
cljs$core$async$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31119__auto____1;
return cljs$core$async$state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto__))
})();
var state__31185__auto__ = (function (){var statearr_32035 = f__31184__auto__.call(null);
(statearr_32035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto__);

return statearr_32035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto__))
);

return c__31183__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async32281 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32281 = (function (mult,ch,cs,meta32282){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta32282 = meta32282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32283,meta32282__$1){
var self__ = this;
var _32283__$1 = this;
return (new cljs.core.async.t_cljs$core$async32281(self__.mult,self__.ch,self__.cs,meta32282__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32283){
var self__ = this;
var _32283__$1 = this;
return self__.meta32282;
});})(cs))
;

cljs.core.async.t_cljs$core$async32281.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32281.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32281.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async32281.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32281.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32281.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32281.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32282","meta32282",-389364727,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32281";

cljs.core.async.t_cljs$core$async32281.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async32281");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32281 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32281(mult__$1,ch__$1,cs__$1,meta32282){
return (new cljs.core.async.t_cljs$core$async32281(mult__$1,ch__$1,cs__$1,meta32282));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32281(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31183__auto___32506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto___32506,cs,m,dchan,dctr,done){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto___32506,cs,m,dchan,dctr,done){
return (function (state_32418){
var state_val_32419 = (state_32418[(1)]);
if((state_val_32419 === (7))){
var inst_32414 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32420_32507 = state_32418__$1;
(statearr_32420_32507[(2)] = inst_32414);

(statearr_32420_32507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (20))){
var inst_32317 = (state_32418[(7)]);
var inst_32329 = cljs.core.first.call(null,inst_32317);
var inst_32330 = cljs.core.nth.call(null,inst_32329,(0),null);
var inst_32331 = cljs.core.nth.call(null,inst_32329,(1),null);
var state_32418__$1 = (function (){var statearr_32421 = state_32418;
(statearr_32421[(8)] = inst_32330);

return statearr_32421;
})();
if(cljs.core.truth_(inst_32331)){
var statearr_32422_32508 = state_32418__$1;
(statearr_32422_32508[(1)] = (22));

} else {
var statearr_32423_32509 = state_32418__$1;
(statearr_32423_32509[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (27))){
var inst_32286 = (state_32418[(9)]);
var inst_32361 = (state_32418[(10)]);
var inst_32366 = (state_32418[(11)]);
var inst_32359 = (state_32418[(12)]);
var inst_32366__$1 = cljs.core._nth.call(null,inst_32359,inst_32361);
var inst_32367 = cljs.core.async.put_BANG_.call(null,inst_32366__$1,inst_32286,done);
var state_32418__$1 = (function (){var statearr_32424 = state_32418;
(statearr_32424[(11)] = inst_32366__$1);

return statearr_32424;
})();
if(cljs.core.truth_(inst_32367)){
var statearr_32425_32510 = state_32418__$1;
(statearr_32425_32510[(1)] = (30));

} else {
var statearr_32426_32511 = state_32418__$1;
(statearr_32426_32511[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (1))){
var state_32418__$1 = state_32418;
var statearr_32427_32512 = state_32418__$1;
(statearr_32427_32512[(2)] = null);

(statearr_32427_32512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (24))){
var inst_32317 = (state_32418[(7)]);
var inst_32336 = (state_32418[(2)]);
var inst_32337 = cljs.core.next.call(null,inst_32317);
var inst_32295 = inst_32337;
var inst_32296 = null;
var inst_32297 = (0);
var inst_32298 = (0);
var state_32418__$1 = (function (){var statearr_32428 = state_32418;
(statearr_32428[(13)] = inst_32295);

(statearr_32428[(14)] = inst_32297);

(statearr_32428[(15)] = inst_32298);

(statearr_32428[(16)] = inst_32336);

(statearr_32428[(17)] = inst_32296);

return statearr_32428;
})();
var statearr_32429_32513 = state_32418__$1;
(statearr_32429_32513[(2)] = null);

(statearr_32429_32513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (39))){
var state_32418__$1 = state_32418;
var statearr_32433_32514 = state_32418__$1;
(statearr_32433_32514[(2)] = null);

(statearr_32433_32514[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (4))){
var inst_32286 = (state_32418[(9)]);
var inst_32286__$1 = (state_32418[(2)]);
var inst_32287 = (inst_32286__$1 == null);
var state_32418__$1 = (function (){var statearr_32434 = state_32418;
(statearr_32434[(9)] = inst_32286__$1);

return statearr_32434;
})();
if(cljs.core.truth_(inst_32287)){
var statearr_32435_32515 = state_32418__$1;
(statearr_32435_32515[(1)] = (5));

} else {
var statearr_32436_32516 = state_32418__$1;
(statearr_32436_32516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (15))){
var inst_32295 = (state_32418[(13)]);
var inst_32297 = (state_32418[(14)]);
var inst_32298 = (state_32418[(15)]);
var inst_32296 = (state_32418[(17)]);
var inst_32313 = (state_32418[(2)]);
var inst_32314 = (inst_32298 + (1));
var tmp32430 = inst_32295;
var tmp32431 = inst_32297;
var tmp32432 = inst_32296;
var inst_32295__$1 = tmp32430;
var inst_32296__$1 = tmp32432;
var inst_32297__$1 = tmp32431;
var inst_32298__$1 = inst_32314;
var state_32418__$1 = (function (){var statearr_32437 = state_32418;
(statearr_32437[(13)] = inst_32295__$1);

(statearr_32437[(14)] = inst_32297__$1);

(statearr_32437[(15)] = inst_32298__$1);

(statearr_32437[(18)] = inst_32313);

(statearr_32437[(17)] = inst_32296__$1);

return statearr_32437;
})();
var statearr_32438_32517 = state_32418__$1;
(statearr_32438_32517[(2)] = null);

(statearr_32438_32517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (21))){
var inst_32340 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32442_32518 = state_32418__$1;
(statearr_32442_32518[(2)] = inst_32340);

(statearr_32442_32518[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (31))){
var inst_32366 = (state_32418[(11)]);
var inst_32370 = done.call(null,null);
var inst_32371 = cljs.core.async.untap_STAR_.call(null,m,inst_32366);
var state_32418__$1 = (function (){var statearr_32443 = state_32418;
(statearr_32443[(19)] = inst_32370);

return statearr_32443;
})();
var statearr_32444_32519 = state_32418__$1;
(statearr_32444_32519[(2)] = inst_32371);

(statearr_32444_32519[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (32))){
var inst_32358 = (state_32418[(20)]);
var inst_32360 = (state_32418[(21)]);
var inst_32361 = (state_32418[(10)]);
var inst_32359 = (state_32418[(12)]);
var inst_32373 = (state_32418[(2)]);
var inst_32374 = (inst_32361 + (1));
var tmp32439 = inst_32358;
var tmp32440 = inst_32360;
var tmp32441 = inst_32359;
var inst_32358__$1 = tmp32439;
var inst_32359__$1 = tmp32441;
var inst_32360__$1 = tmp32440;
var inst_32361__$1 = inst_32374;
var state_32418__$1 = (function (){var statearr_32445 = state_32418;
(statearr_32445[(22)] = inst_32373);

(statearr_32445[(20)] = inst_32358__$1);

(statearr_32445[(21)] = inst_32360__$1);

(statearr_32445[(10)] = inst_32361__$1);

(statearr_32445[(12)] = inst_32359__$1);

return statearr_32445;
})();
var statearr_32446_32520 = state_32418__$1;
(statearr_32446_32520[(2)] = null);

(statearr_32446_32520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (40))){
var inst_32386 = (state_32418[(23)]);
var inst_32390 = done.call(null,null);
var inst_32391 = cljs.core.async.untap_STAR_.call(null,m,inst_32386);
var state_32418__$1 = (function (){var statearr_32447 = state_32418;
(statearr_32447[(24)] = inst_32390);

return statearr_32447;
})();
var statearr_32448_32521 = state_32418__$1;
(statearr_32448_32521[(2)] = inst_32391);

(statearr_32448_32521[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (33))){
var inst_32377 = (state_32418[(25)]);
var inst_32379 = cljs.core.chunked_seq_QMARK_.call(null,inst_32377);
var state_32418__$1 = state_32418;
if(inst_32379){
var statearr_32449_32522 = state_32418__$1;
(statearr_32449_32522[(1)] = (36));

} else {
var statearr_32450_32523 = state_32418__$1;
(statearr_32450_32523[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (13))){
var inst_32307 = (state_32418[(26)]);
var inst_32310 = cljs.core.async.close_BANG_.call(null,inst_32307);
var state_32418__$1 = state_32418;
var statearr_32451_32524 = state_32418__$1;
(statearr_32451_32524[(2)] = inst_32310);

(statearr_32451_32524[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (22))){
var inst_32330 = (state_32418[(8)]);
var inst_32333 = cljs.core.async.close_BANG_.call(null,inst_32330);
var state_32418__$1 = state_32418;
var statearr_32452_32525 = state_32418__$1;
(statearr_32452_32525[(2)] = inst_32333);

(statearr_32452_32525[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (36))){
var inst_32377 = (state_32418[(25)]);
var inst_32381 = cljs.core.chunk_first.call(null,inst_32377);
var inst_32382 = cljs.core.chunk_rest.call(null,inst_32377);
var inst_32383 = cljs.core.count.call(null,inst_32381);
var inst_32358 = inst_32382;
var inst_32359 = inst_32381;
var inst_32360 = inst_32383;
var inst_32361 = (0);
var state_32418__$1 = (function (){var statearr_32453 = state_32418;
(statearr_32453[(20)] = inst_32358);

(statearr_32453[(21)] = inst_32360);

(statearr_32453[(10)] = inst_32361);

(statearr_32453[(12)] = inst_32359);

return statearr_32453;
})();
var statearr_32454_32526 = state_32418__$1;
(statearr_32454_32526[(2)] = null);

(statearr_32454_32526[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (41))){
var inst_32377 = (state_32418[(25)]);
var inst_32393 = (state_32418[(2)]);
var inst_32394 = cljs.core.next.call(null,inst_32377);
var inst_32358 = inst_32394;
var inst_32359 = null;
var inst_32360 = (0);
var inst_32361 = (0);
var state_32418__$1 = (function (){var statearr_32455 = state_32418;
(statearr_32455[(20)] = inst_32358);

(statearr_32455[(27)] = inst_32393);

(statearr_32455[(21)] = inst_32360);

(statearr_32455[(10)] = inst_32361);

(statearr_32455[(12)] = inst_32359);

return statearr_32455;
})();
var statearr_32456_32527 = state_32418__$1;
(statearr_32456_32527[(2)] = null);

(statearr_32456_32527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (43))){
var state_32418__$1 = state_32418;
var statearr_32457_32528 = state_32418__$1;
(statearr_32457_32528[(2)] = null);

(statearr_32457_32528[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (29))){
var inst_32402 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32458_32529 = state_32418__$1;
(statearr_32458_32529[(2)] = inst_32402);

(statearr_32458_32529[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (44))){
var inst_32411 = (state_32418[(2)]);
var state_32418__$1 = (function (){var statearr_32459 = state_32418;
(statearr_32459[(28)] = inst_32411);

return statearr_32459;
})();
var statearr_32460_32530 = state_32418__$1;
(statearr_32460_32530[(2)] = null);

(statearr_32460_32530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (6))){
var inst_32350 = (state_32418[(29)]);
var inst_32349 = cljs.core.deref.call(null,cs);
var inst_32350__$1 = cljs.core.keys.call(null,inst_32349);
var inst_32351 = cljs.core.count.call(null,inst_32350__$1);
var inst_32352 = cljs.core.reset_BANG_.call(null,dctr,inst_32351);
var inst_32357 = cljs.core.seq.call(null,inst_32350__$1);
var inst_32358 = inst_32357;
var inst_32359 = null;
var inst_32360 = (0);
var inst_32361 = (0);
var state_32418__$1 = (function (){var statearr_32461 = state_32418;
(statearr_32461[(29)] = inst_32350__$1);

(statearr_32461[(20)] = inst_32358);

(statearr_32461[(30)] = inst_32352);

(statearr_32461[(21)] = inst_32360);

(statearr_32461[(10)] = inst_32361);

(statearr_32461[(12)] = inst_32359);

return statearr_32461;
})();
var statearr_32462_32531 = state_32418__$1;
(statearr_32462_32531[(2)] = null);

(statearr_32462_32531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (28))){
var inst_32358 = (state_32418[(20)]);
var inst_32377 = (state_32418[(25)]);
var inst_32377__$1 = cljs.core.seq.call(null,inst_32358);
var state_32418__$1 = (function (){var statearr_32463 = state_32418;
(statearr_32463[(25)] = inst_32377__$1);

return statearr_32463;
})();
if(inst_32377__$1){
var statearr_32464_32532 = state_32418__$1;
(statearr_32464_32532[(1)] = (33));

} else {
var statearr_32465_32533 = state_32418__$1;
(statearr_32465_32533[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (25))){
var inst_32360 = (state_32418[(21)]);
var inst_32361 = (state_32418[(10)]);
var inst_32363 = (inst_32361 < inst_32360);
var inst_32364 = inst_32363;
var state_32418__$1 = state_32418;
if(cljs.core.truth_(inst_32364)){
var statearr_32466_32534 = state_32418__$1;
(statearr_32466_32534[(1)] = (27));

} else {
var statearr_32467_32535 = state_32418__$1;
(statearr_32467_32535[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (34))){
var state_32418__$1 = state_32418;
var statearr_32468_32536 = state_32418__$1;
(statearr_32468_32536[(2)] = null);

(statearr_32468_32536[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (17))){
var state_32418__$1 = state_32418;
var statearr_32469_32537 = state_32418__$1;
(statearr_32469_32537[(2)] = null);

(statearr_32469_32537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (3))){
var inst_32416 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32418__$1,inst_32416);
} else {
if((state_val_32419 === (12))){
var inst_32345 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32470_32538 = state_32418__$1;
(statearr_32470_32538[(2)] = inst_32345);

(statearr_32470_32538[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (2))){
var state_32418__$1 = state_32418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32418__$1,(4),ch);
} else {
if((state_val_32419 === (23))){
var state_32418__$1 = state_32418;
var statearr_32471_32539 = state_32418__$1;
(statearr_32471_32539[(2)] = null);

(statearr_32471_32539[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (35))){
var inst_32400 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32472_32540 = state_32418__$1;
(statearr_32472_32540[(2)] = inst_32400);

(statearr_32472_32540[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (19))){
var inst_32317 = (state_32418[(7)]);
var inst_32321 = cljs.core.chunk_first.call(null,inst_32317);
var inst_32322 = cljs.core.chunk_rest.call(null,inst_32317);
var inst_32323 = cljs.core.count.call(null,inst_32321);
var inst_32295 = inst_32322;
var inst_32296 = inst_32321;
var inst_32297 = inst_32323;
var inst_32298 = (0);
var state_32418__$1 = (function (){var statearr_32473 = state_32418;
(statearr_32473[(13)] = inst_32295);

(statearr_32473[(14)] = inst_32297);

(statearr_32473[(15)] = inst_32298);

(statearr_32473[(17)] = inst_32296);

return statearr_32473;
})();
var statearr_32474_32541 = state_32418__$1;
(statearr_32474_32541[(2)] = null);

(statearr_32474_32541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (11))){
var inst_32295 = (state_32418[(13)]);
var inst_32317 = (state_32418[(7)]);
var inst_32317__$1 = cljs.core.seq.call(null,inst_32295);
var state_32418__$1 = (function (){var statearr_32475 = state_32418;
(statearr_32475[(7)] = inst_32317__$1);

return statearr_32475;
})();
if(inst_32317__$1){
var statearr_32476_32542 = state_32418__$1;
(statearr_32476_32542[(1)] = (16));

} else {
var statearr_32477_32543 = state_32418__$1;
(statearr_32477_32543[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (9))){
var inst_32347 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32478_32544 = state_32418__$1;
(statearr_32478_32544[(2)] = inst_32347);

(statearr_32478_32544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (5))){
var inst_32293 = cljs.core.deref.call(null,cs);
var inst_32294 = cljs.core.seq.call(null,inst_32293);
var inst_32295 = inst_32294;
var inst_32296 = null;
var inst_32297 = (0);
var inst_32298 = (0);
var state_32418__$1 = (function (){var statearr_32479 = state_32418;
(statearr_32479[(13)] = inst_32295);

(statearr_32479[(14)] = inst_32297);

(statearr_32479[(15)] = inst_32298);

(statearr_32479[(17)] = inst_32296);

return statearr_32479;
})();
var statearr_32480_32545 = state_32418__$1;
(statearr_32480_32545[(2)] = null);

(statearr_32480_32545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (14))){
var state_32418__$1 = state_32418;
var statearr_32481_32546 = state_32418__$1;
(statearr_32481_32546[(2)] = null);

(statearr_32481_32546[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (45))){
var inst_32408 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32482_32547 = state_32418__$1;
(statearr_32482_32547[(2)] = inst_32408);

(statearr_32482_32547[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (26))){
var inst_32350 = (state_32418[(29)]);
var inst_32404 = (state_32418[(2)]);
var inst_32405 = cljs.core.seq.call(null,inst_32350);
var state_32418__$1 = (function (){var statearr_32483 = state_32418;
(statearr_32483[(31)] = inst_32404);

return statearr_32483;
})();
if(inst_32405){
var statearr_32484_32548 = state_32418__$1;
(statearr_32484_32548[(1)] = (42));

} else {
var statearr_32485_32549 = state_32418__$1;
(statearr_32485_32549[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (16))){
var inst_32317 = (state_32418[(7)]);
var inst_32319 = cljs.core.chunked_seq_QMARK_.call(null,inst_32317);
var state_32418__$1 = state_32418;
if(inst_32319){
var statearr_32486_32550 = state_32418__$1;
(statearr_32486_32550[(1)] = (19));

} else {
var statearr_32487_32551 = state_32418__$1;
(statearr_32487_32551[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (38))){
var inst_32397 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32488_32552 = state_32418__$1;
(statearr_32488_32552[(2)] = inst_32397);

(statearr_32488_32552[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (30))){
var state_32418__$1 = state_32418;
var statearr_32489_32553 = state_32418__$1;
(statearr_32489_32553[(2)] = null);

(statearr_32489_32553[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (10))){
var inst_32298 = (state_32418[(15)]);
var inst_32296 = (state_32418[(17)]);
var inst_32306 = cljs.core._nth.call(null,inst_32296,inst_32298);
var inst_32307 = cljs.core.nth.call(null,inst_32306,(0),null);
var inst_32308 = cljs.core.nth.call(null,inst_32306,(1),null);
var state_32418__$1 = (function (){var statearr_32490 = state_32418;
(statearr_32490[(26)] = inst_32307);

return statearr_32490;
})();
if(cljs.core.truth_(inst_32308)){
var statearr_32491_32554 = state_32418__$1;
(statearr_32491_32554[(1)] = (13));

} else {
var statearr_32492_32555 = state_32418__$1;
(statearr_32492_32555[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (18))){
var inst_32343 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32493_32556 = state_32418__$1;
(statearr_32493_32556[(2)] = inst_32343);

(statearr_32493_32556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (42))){
var state_32418__$1 = state_32418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32418__$1,(45),dchan);
} else {
if((state_val_32419 === (37))){
var inst_32386 = (state_32418[(23)]);
var inst_32377 = (state_32418[(25)]);
var inst_32286 = (state_32418[(9)]);
var inst_32386__$1 = cljs.core.first.call(null,inst_32377);
var inst_32387 = cljs.core.async.put_BANG_.call(null,inst_32386__$1,inst_32286,done);
var state_32418__$1 = (function (){var statearr_32494 = state_32418;
(statearr_32494[(23)] = inst_32386__$1);

return statearr_32494;
})();
if(cljs.core.truth_(inst_32387)){
var statearr_32495_32557 = state_32418__$1;
(statearr_32495_32557[(1)] = (39));

} else {
var statearr_32496_32558 = state_32418__$1;
(statearr_32496_32558[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (8))){
var inst_32297 = (state_32418[(14)]);
var inst_32298 = (state_32418[(15)]);
var inst_32300 = (inst_32298 < inst_32297);
var inst_32301 = inst_32300;
var state_32418__$1 = state_32418;
if(cljs.core.truth_(inst_32301)){
var statearr_32497_32559 = state_32418__$1;
(statearr_32497_32559[(1)] = (10));

} else {
var statearr_32498_32560 = state_32418__$1;
(statearr_32498_32560[(1)] = (11));

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
});})(c__31183__auto___32506,cs,m,dchan,dctr,done))
;
return ((function (switch__31118__auto__,c__31183__auto___32506,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31119__auto__ = null;
var cljs$core$async$mult_$_state_machine__31119__auto____0 = (function (){
var statearr_32502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32502[(0)] = cljs$core$async$mult_$_state_machine__31119__auto__);

(statearr_32502[(1)] = (1));

return statearr_32502;
});
var cljs$core$async$mult_$_state_machine__31119__auto____1 = (function (state_32418){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_32418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e32503){if((e32503 instanceof Object)){
var ex__31122__auto__ = e32503;
var statearr_32504_32561 = state_32418;
(statearr_32504_32561[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32562 = state_32418;
state_32418 = G__32562;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31119__auto__ = function(state_32418){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31119__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31119__auto____1.call(this,state_32418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31119__auto____0;
cljs$core$async$mult_$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31119__auto____1;
return cljs$core$async$mult_$_state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto___32506,cs,m,dchan,dctr,done))
})();
var state__31185__auto__ = (function (){var statearr_32505 = f__31184__auto__.call(null);
(statearr_32505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto___32506);

return statearr_32505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto___32506,cs,m,dchan,dctr,done))
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
var args32563 = [];
var len__26121__auto___32566 = arguments.length;
var i__26122__auto___32567 = (0);
while(true){
if((i__26122__auto___32567 < len__26121__auto___32566)){
args32563.push((arguments[i__26122__auto___32567]));

var G__32568 = (i__26122__auto___32567 + (1));
i__26122__auto___32567 = G__32568;
continue;
} else {
}
break;
}

var G__32565 = args32563.length;
switch (G__32565) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32563.length)].join('')));

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
var len__26121__auto___32580 = arguments.length;
var i__26122__auto___32581 = (0);
while(true){
if((i__26122__auto___32581 < len__26121__auto___32580)){
args__26128__auto__.push((arguments[i__26122__auto___32581]));

var G__32582 = (i__26122__auto___32581 + (1));
i__26122__auto___32581 = G__32582;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((3) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26129__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32574){
var map__32575 = p__32574;
var map__32575__$1 = ((((!((map__32575 == null)))?((((map__32575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32575):map__32575);
var opts = map__32575__$1;
var statearr_32577_32583 = state;
(statearr_32577_32583[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32575,map__32575__$1,opts){
return (function (val){
var statearr_32578_32584 = state;
(statearr_32578_32584[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32575,map__32575__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32579_32585 = state;
(statearr_32579_32585[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32570){
var G__32571 = cljs.core.first.call(null,seq32570);
var seq32570__$1 = cljs.core.next.call(null,seq32570);
var G__32572 = cljs.core.first.call(null,seq32570__$1);
var seq32570__$2 = cljs.core.next.call(null,seq32570__$1);
var G__32573 = cljs.core.first.call(null,seq32570__$2);
var seq32570__$3 = cljs.core.next.call(null,seq32570__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32571,G__32572,G__32573,seq32570__$3);
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
if(typeof cljs.core.async.t_cljs$core$async32751 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32751 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32752){
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
this.meta32752 = meta32752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32753,meta32752__$1){
var self__ = this;
var _32753__$1 = this;
return (new cljs.core.async.t_cljs$core$async32751(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32752__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32751.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32753){
var self__ = this;
var _32753__$1 = this;
return self__.meta32752;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32751.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32751.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32751.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32751.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32751.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32751.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32751.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32751.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async32751.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32752","meta32752",1018348881,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32751.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32751";

cljs.core.async.t_cljs$core$async32751.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async32751");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32751 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32751(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32752){
return (new cljs.core.async.t_cljs$core$async32751(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32752));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32751(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31183__auto___32916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto___32916,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto___32916,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32853){
var state_val_32854 = (state_32853[(1)]);
if((state_val_32854 === (7))){
var inst_32769 = (state_32853[(2)]);
var state_32853__$1 = state_32853;
var statearr_32855_32917 = state_32853__$1;
(statearr_32855_32917[(2)] = inst_32769);

(statearr_32855_32917[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (20))){
var inst_32781 = (state_32853[(7)]);
var state_32853__$1 = state_32853;
var statearr_32856_32918 = state_32853__$1;
(statearr_32856_32918[(2)] = inst_32781);

(statearr_32856_32918[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (27))){
var state_32853__$1 = state_32853;
var statearr_32857_32919 = state_32853__$1;
(statearr_32857_32919[(2)] = null);

(statearr_32857_32919[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (1))){
var inst_32757 = (state_32853[(8)]);
var inst_32757__$1 = calc_state.call(null);
var inst_32759 = (inst_32757__$1 == null);
var inst_32760 = cljs.core.not.call(null,inst_32759);
var state_32853__$1 = (function (){var statearr_32858 = state_32853;
(statearr_32858[(8)] = inst_32757__$1);

return statearr_32858;
})();
if(inst_32760){
var statearr_32859_32920 = state_32853__$1;
(statearr_32859_32920[(1)] = (2));

} else {
var statearr_32860_32921 = state_32853__$1;
(statearr_32860_32921[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (24))){
var inst_32827 = (state_32853[(9)]);
var inst_32813 = (state_32853[(10)]);
var inst_32804 = (state_32853[(11)]);
var inst_32827__$1 = inst_32804.call(null,inst_32813);
var state_32853__$1 = (function (){var statearr_32861 = state_32853;
(statearr_32861[(9)] = inst_32827__$1);

return statearr_32861;
})();
if(cljs.core.truth_(inst_32827__$1)){
var statearr_32862_32922 = state_32853__$1;
(statearr_32862_32922[(1)] = (29));

} else {
var statearr_32863_32923 = state_32853__$1;
(statearr_32863_32923[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (4))){
var inst_32772 = (state_32853[(2)]);
var state_32853__$1 = state_32853;
if(cljs.core.truth_(inst_32772)){
var statearr_32864_32924 = state_32853__$1;
(statearr_32864_32924[(1)] = (8));

} else {
var statearr_32865_32925 = state_32853__$1;
(statearr_32865_32925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (15))){
var inst_32798 = (state_32853[(2)]);
var state_32853__$1 = state_32853;
if(cljs.core.truth_(inst_32798)){
var statearr_32866_32926 = state_32853__$1;
(statearr_32866_32926[(1)] = (19));

} else {
var statearr_32867_32927 = state_32853__$1;
(statearr_32867_32927[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (21))){
var inst_32803 = (state_32853[(12)]);
var inst_32803__$1 = (state_32853[(2)]);
var inst_32804 = cljs.core.get.call(null,inst_32803__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32805 = cljs.core.get.call(null,inst_32803__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32806 = cljs.core.get.call(null,inst_32803__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32853__$1 = (function (){var statearr_32868 = state_32853;
(statearr_32868[(12)] = inst_32803__$1);

(statearr_32868[(11)] = inst_32804);

(statearr_32868[(13)] = inst_32805);

return statearr_32868;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32853__$1,(22),inst_32806);
} else {
if((state_val_32854 === (31))){
var inst_32835 = (state_32853[(2)]);
var state_32853__$1 = state_32853;
if(cljs.core.truth_(inst_32835)){
var statearr_32869_32928 = state_32853__$1;
(statearr_32869_32928[(1)] = (32));

} else {
var statearr_32870_32929 = state_32853__$1;
(statearr_32870_32929[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (32))){
var inst_32812 = (state_32853[(14)]);
var state_32853__$1 = state_32853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32853__$1,(35),out,inst_32812);
} else {
if((state_val_32854 === (33))){
var inst_32803 = (state_32853[(12)]);
var inst_32781 = inst_32803;
var state_32853__$1 = (function (){var statearr_32871 = state_32853;
(statearr_32871[(7)] = inst_32781);

return statearr_32871;
})();
var statearr_32872_32930 = state_32853__$1;
(statearr_32872_32930[(2)] = null);

(statearr_32872_32930[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (13))){
var inst_32781 = (state_32853[(7)]);
var inst_32788 = inst_32781.cljs$lang$protocol_mask$partition0$;
var inst_32789 = (inst_32788 & (64));
var inst_32790 = inst_32781.cljs$core$ISeq$;
var inst_32791 = (inst_32789) || (inst_32790);
var state_32853__$1 = state_32853;
if(cljs.core.truth_(inst_32791)){
var statearr_32873_32931 = state_32853__$1;
(statearr_32873_32931[(1)] = (16));

} else {
var statearr_32874_32932 = state_32853__$1;
(statearr_32874_32932[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (22))){
var inst_32812 = (state_32853[(14)]);
var inst_32813 = (state_32853[(10)]);
var inst_32811 = (state_32853[(2)]);
var inst_32812__$1 = cljs.core.nth.call(null,inst_32811,(0),null);
var inst_32813__$1 = cljs.core.nth.call(null,inst_32811,(1),null);
var inst_32814 = (inst_32812__$1 == null);
var inst_32815 = cljs.core._EQ_.call(null,inst_32813__$1,change);
var inst_32816 = (inst_32814) || (inst_32815);
var state_32853__$1 = (function (){var statearr_32875 = state_32853;
(statearr_32875[(14)] = inst_32812__$1);

(statearr_32875[(10)] = inst_32813__$1);

return statearr_32875;
})();
if(cljs.core.truth_(inst_32816)){
var statearr_32876_32933 = state_32853__$1;
(statearr_32876_32933[(1)] = (23));

} else {
var statearr_32877_32934 = state_32853__$1;
(statearr_32877_32934[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (36))){
var inst_32803 = (state_32853[(12)]);
var inst_32781 = inst_32803;
var state_32853__$1 = (function (){var statearr_32878 = state_32853;
(statearr_32878[(7)] = inst_32781);

return statearr_32878;
})();
var statearr_32879_32935 = state_32853__$1;
(statearr_32879_32935[(2)] = null);

(statearr_32879_32935[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (29))){
var inst_32827 = (state_32853[(9)]);
var state_32853__$1 = state_32853;
var statearr_32880_32936 = state_32853__$1;
(statearr_32880_32936[(2)] = inst_32827);

(statearr_32880_32936[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (6))){
var state_32853__$1 = state_32853;
var statearr_32881_32937 = state_32853__$1;
(statearr_32881_32937[(2)] = false);

(statearr_32881_32937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (28))){
var inst_32823 = (state_32853[(2)]);
var inst_32824 = calc_state.call(null);
var inst_32781 = inst_32824;
var state_32853__$1 = (function (){var statearr_32882 = state_32853;
(statearr_32882[(7)] = inst_32781);

(statearr_32882[(15)] = inst_32823);

return statearr_32882;
})();
var statearr_32883_32938 = state_32853__$1;
(statearr_32883_32938[(2)] = null);

(statearr_32883_32938[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (25))){
var inst_32849 = (state_32853[(2)]);
var state_32853__$1 = state_32853;
var statearr_32884_32939 = state_32853__$1;
(statearr_32884_32939[(2)] = inst_32849);

(statearr_32884_32939[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (34))){
var inst_32847 = (state_32853[(2)]);
var state_32853__$1 = state_32853;
var statearr_32885_32940 = state_32853__$1;
(statearr_32885_32940[(2)] = inst_32847);

(statearr_32885_32940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (17))){
var state_32853__$1 = state_32853;
var statearr_32886_32941 = state_32853__$1;
(statearr_32886_32941[(2)] = false);

(statearr_32886_32941[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (3))){
var state_32853__$1 = state_32853;
var statearr_32887_32942 = state_32853__$1;
(statearr_32887_32942[(2)] = false);

(statearr_32887_32942[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (12))){
var inst_32851 = (state_32853[(2)]);
var state_32853__$1 = state_32853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32853__$1,inst_32851);
} else {
if((state_val_32854 === (2))){
var inst_32757 = (state_32853[(8)]);
var inst_32762 = inst_32757.cljs$lang$protocol_mask$partition0$;
var inst_32763 = (inst_32762 & (64));
var inst_32764 = inst_32757.cljs$core$ISeq$;
var inst_32765 = (inst_32763) || (inst_32764);
var state_32853__$1 = state_32853;
if(cljs.core.truth_(inst_32765)){
var statearr_32888_32943 = state_32853__$1;
(statearr_32888_32943[(1)] = (5));

} else {
var statearr_32889_32944 = state_32853__$1;
(statearr_32889_32944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (23))){
var inst_32812 = (state_32853[(14)]);
var inst_32818 = (inst_32812 == null);
var state_32853__$1 = state_32853;
if(cljs.core.truth_(inst_32818)){
var statearr_32890_32945 = state_32853__$1;
(statearr_32890_32945[(1)] = (26));

} else {
var statearr_32891_32946 = state_32853__$1;
(statearr_32891_32946[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (35))){
var inst_32838 = (state_32853[(2)]);
var state_32853__$1 = state_32853;
if(cljs.core.truth_(inst_32838)){
var statearr_32892_32947 = state_32853__$1;
(statearr_32892_32947[(1)] = (36));

} else {
var statearr_32893_32948 = state_32853__$1;
(statearr_32893_32948[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (19))){
var inst_32781 = (state_32853[(7)]);
var inst_32800 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32781);
var state_32853__$1 = state_32853;
var statearr_32894_32949 = state_32853__$1;
(statearr_32894_32949[(2)] = inst_32800);

(statearr_32894_32949[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (11))){
var inst_32781 = (state_32853[(7)]);
var inst_32785 = (inst_32781 == null);
var inst_32786 = cljs.core.not.call(null,inst_32785);
var state_32853__$1 = state_32853;
if(inst_32786){
var statearr_32895_32950 = state_32853__$1;
(statearr_32895_32950[(1)] = (13));

} else {
var statearr_32896_32951 = state_32853__$1;
(statearr_32896_32951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (9))){
var inst_32757 = (state_32853[(8)]);
var state_32853__$1 = state_32853;
var statearr_32897_32952 = state_32853__$1;
(statearr_32897_32952[(2)] = inst_32757);

(statearr_32897_32952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (5))){
var state_32853__$1 = state_32853;
var statearr_32898_32953 = state_32853__$1;
(statearr_32898_32953[(2)] = true);

(statearr_32898_32953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (14))){
var state_32853__$1 = state_32853;
var statearr_32899_32954 = state_32853__$1;
(statearr_32899_32954[(2)] = false);

(statearr_32899_32954[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (26))){
var inst_32813 = (state_32853[(10)]);
var inst_32820 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32813);
var state_32853__$1 = state_32853;
var statearr_32900_32955 = state_32853__$1;
(statearr_32900_32955[(2)] = inst_32820);

(statearr_32900_32955[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (16))){
var state_32853__$1 = state_32853;
var statearr_32901_32956 = state_32853__$1;
(statearr_32901_32956[(2)] = true);

(statearr_32901_32956[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (38))){
var inst_32843 = (state_32853[(2)]);
var state_32853__$1 = state_32853;
var statearr_32902_32957 = state_32853__$1;
(statearr_32902_32957[(2)] = inst_32843);

(statearr_32902_32957[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (30))){
var inst_32813 = (state_32853[(10)]);
var inst_32804 = (state_32853[(11)]);
var inst_32805 = (state_32853[(13)]);
var inst_32830 = cljs.core.empty_QMARK_.call(null,inst_32804);
var inst_32831 = inst_32805.call(null,inst_32813);
var inst_32832 = cljs.core.not.call(null,inst_32831);
var inst_32833 = (inst_32830) && (inst_32832);
var state_32853__$1 = state_32853;
var statearr_32903_32958 = state_32853__$1;
(statearr_32903_32958[(2)] = inst_32833);

(statearr_32903_32958[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (10))){
var inst_32757 = (state_32853[(8)]);
var inst_32777 = (state_32853[(2)]);
var inst_32778 = cljs.core.get.call(null,inst_32777,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32779 = cljs.core.get.call(null,inst_32777,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32780 = cljs.core.get.call(null,inst_32777,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32781 = inst_32757;
var state_32853__$1 = (function (){var statearr_32904 = state_32853;
(statearr_32904[(16)] = inst_32780);

(statearr_32904[(17)] = inst_32778);

(statearr_32904[(7)] = inst_32781);

(statearr_32904[(18)] = inst_32779);

return statearr_32904;
})();
var statearr_32905_32959 = state_32853__$1;
(statearr_32905_32959[(2)] = null);

(statearr_32905_32959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (18))){
var inst_32795 = (state_32853[(2)]);
var state_32853__$1 = state_32853;
var statearr_32906_32960 = state_32853__$1;
(statearr_32906_32960[(2)] = inst_32795);

(statearr_32906_32960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (37))){
var state_32853__$1 = state_32853;
var statearr_32907_32961 = state_32853__$1;
(statearr_32907_32961[(2)] = null);

(statearr_32907_32961[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (8))){
var inst_32757 = (state_32853[(8)]);
var inst_32774 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32757);
var state_32853__$1 = state_32853;
var statearr_32908_32962 = state_32853__$1;
(statearr_32908_32962[(2)] = inst_32774);

(statearr_32908_32962[(1)] = (10));


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
});})(c__31183__auto___32916,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31118__auto__,c__31183__auto___32916,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31119__auto__ = null;
var cljs$core$async$mix_$_state_machine__31119__auto____0 = (function (){
var statearr_32912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32912[(0)] = cljs$core$async$mix_$_state_machine__31119__auto__);

(statearr_32912[(1)] = (1));

return statearr_32912;
});
var cljs$core$async$mix_$_state_machine__31119__auto____1 = (function (state_32853){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_32853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e32913){if((e32913 instanceof Object)){
var ex__31122__auto__ = e32913;
var statearr_32914_32963 = state_32853;
(statearr_32914_32963[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32964 = state_32853;
state_32853 = G__32964;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31119__auto__ = function(state_32853){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31119__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31119__auto____1.call(this,state_32853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31119__auto____0;
cljs$core$async$mix_$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31119__auto____1;
return cljs$core$async$mix_$_state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto___32916,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31185__auto__ = (function (){var statearr_32915 = f__31184__auto__.call(null);
(statearr_32915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto___32916);

return statearr_32915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto___32916,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args32965 = [];
var len__26121__auto___32968 = arguments.length;
var i__26122__auto___32969 = (0);
while(true){
if((i__26122__auto___32969 < len__26121__auto___32968)){
args32965.push((arguments[i__26122__auto___32969]));

var G__32970 = (i__26122__auto___32969 + (1));
i__26122__auto___32969 = G__32970;
continue;
} else {
}
break;
}

var G__32967 = args32965.length;
switch (G__32967) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32965.length)].join('')));

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
var args32973 = [];
var len__26121__auto___33098 = arguments.length;
var i__26122__auto___33099 = (0);
while(true){
if((i__26122__auto___33099 < len__26121__auto___33098)){
args32973.push((arguments[i__26122__auto___33099]));

var G__33100 = (i__26122__auto___33099 + (1));
i__26122__auto___33099 = G__33100;
continue;
} else {
}
break;
}

var G__32975 = args32973.length;
switch (G__32975) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32973.length)].join('')));

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
return (function (p1__32972_SHARP_){
if(cljs.core.truth_(p1__32972_SHARP_.call(null,topic))){
return p1__32972_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32972_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25046__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32976 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32976 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32977){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32977 = meta32977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32978,meta32977__$1){
var self__ = this;
var _32978__$1 = this;
return (new cljs.core.async.t_cljs$core$async32976(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32977__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32976.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32978){
var self__ = this;
var _32978__$1 = this;
return self__.meta32977;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32976.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32976.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32976.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async32976.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32976.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async32976.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32976.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32976.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32977","meta32977",1954082639,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32976.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32976";

cljs.core.async.t_cljs$core$async32976.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async32976");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32976 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32976(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32977){
return (new cljs.core.async.t_cljs$core$async32976(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32977));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32976(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31183__auto___33102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto___33102,mults,ensure_mult,p){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto___33102,mults,ensure_mult,p){
return (function (state_33050){
var state_val_33051 = (state_33050[(1)]);
if((state_val_33051 === (7))){
var inst_33046 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33052_33103 = state_33050__$1;
(statearr_33052_33103[(2)] = inst_33046);

(statearr_33052_33103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (20))){
var state_33050__$1 = state_33050;
var statearr_33053_33104 = state_33050__$1;
(statearr_33053_33104[(2)] = null);

(statearr_33053_33104[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (1))){
var state_33050__$1 = state_33050;
var statearr_33054_33105 = state_33050__$1;
(statearr_33054_33105[(2)] = null);

(statearr_33054_33105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (24))){
var inst_33029 = (state_33050[(7)]);
var inst_33038 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33029);
var state_33050__$1 = state_33050;
var statearr_33055_33106 = state_33050__$1;
(statearr_33055_33106[(2)] = inst_33038);

(statearr_33055_33106[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (4))){
var inst_32981 = (state_33050[(8)]);
var inst_32981__$1 = (state_33050[(2)]);
var inst_32982 = (inst_32981__$1 == null);
var state_33050__$1 = (function (){var statearr_33056 = state_33050;
(statearr_33056[(8)] = inst_32981__$1);

return statearr_33056;
})();
if(cljs.core.truth_(inst_32982)){
var statearr_33057_33107 = state_33050__$1;
(statearr_33057_33107[(1)] = (5));

} else {
var statearr_33058_33108 = state_33050__$1;
(statearr_33058_33108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (15))){
var inst_33023 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33059_33109 = state_33050__$1;
(statearr_33059_33109[(2)] = inst_33023);

(statearr_33059_33109[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (21))){
var inst_33043 = (state_33050[(2)]);
var state_33050__$1 = (function (){var statearr_33060 = state_33050;
(statearr_33060[(9)] = inst_33043);

return statearr_33060;
})();
var statearr_33061_33110 = state_33050__$1;
(statearr_33061_33110[(2)] = null);

(statearr_33061_33110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (13))){
var inst_33005 = (state_33050[(10)]);
var inst_33007 = cljs.core.chunked_seq_QMARK_.call(null,inst_33005);
var state_33050__$1 = state_33050;
if(inst_33007){
var statearr_33062_33111 = state_33050__$1;
(statearr_33062_33111[(1)] = (16));

} else {
var statearr_33063_33112 = state_33050__$1;
(statearr_33063_33112[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (22))){
var inst_33035 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
if(cljs.core.truth_(inst_33035)){
var statearr_33064_33113 = state_33050__$1;
(statearr_33064_33113[(1)] = (23));

} else {
var statearr_33065_33114 = state_33050__$1;
(statearr_33065_33114[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (6))){
var inst_33031 = (state_33050[(11)]);
var inst_33029 = (state_33050[(7)]);
var inst_32981 = (state_33050[(8)]);
var inst_33029__$1 = topic_fn.call(null,inst_32981);
var inst_33030 = cljs.core.deref.call(null,mults);
var inst_33031__$1 = cljs.core.get.call(null,inst_33030,inst_33029__$1);
var state_33050__$1 = (function (){var statearr_33066 = state_33050;
(statearr_33066[(11)] = inst_33031__$1);

(statearr_33066[(7)] = inst_33029__$1);

return statearr_33066;
})();
if(cljs.core.truth_(inst_33031__$1)){
var statearr_33067_33115 = state_33050__$1;
(statearr_33067_33115[(1)] = (19));

} else {
var statearr_33068_33116 = state_33050__$1;
(statearr_33068_33116[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (25))){
var inst_33040 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33069_33117 = state_33050__$1;
(statearr_33069_33117[(2)] = inst_33040);

(statearr_33069_33117[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (17))){
var inst_33005 = (state_33050[(10)]);
var inst_33014 = cljs.core.first.call(null,inst_33005);
var inst_33015 = cljs.core.async.muxch_STAR_.call(null,inst_33014);
var inst_33016 = cljs.core.async.close_BANG_.call(null,inst_33015);
var inst_33017 = cljs.core.next.call(null,inst_33005);
var inst_32991 = inst_33017;
var inst_32992 = null;
var inst_32993 = (0);
var inst_32994 = (0);
var state_33050__$1 = (function (){var statearr_33070 = state_33050;
(statearr_33070[(12)] = inst_32993);

(statearr_33070[(13)] = inst_32991);

(statearr_33070[(14)] = inst_33016);

(statearr_33070[(15)] = inst_32992);

(statearr_33070[(16)] = inst_32994);

return statearr_33070;
})();
var statearr_33071_33118 = state_33050__$1;
(statearr_33071_33118[(2)] = null);

(statearr_33071_33118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (3))){
var inst_33048 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33050__$1,inst_33048);
} else {
if((state_val_33051 === (12))){
var inst_33025 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33072_33119 = state_33050__$1;
(statearr_33072_33119[(2)] = inst_33025);

(statearr_33072_33119[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (2))){
var state_33050__$1 = state_33050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33050__$1,(4),ch);
} else {
if((state_val_33051 === (23))){
var state_33050__$1 = state_33050;
var statearr_33073_33120 = state_33050__$1;
(statearr_33073_33120[(2)] = null);

(statearr_33073_33120[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (19))){
var inst_33031 = (state_33050[(11)]);
var inst_32981 = (state_33050[(8)]);
var inst_33033 = cljs.core.async.muxch_STAR_.call(null,inst_33031);
var state_33050__$1 = state_33050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33050__$1,(22),inst_33033,inst_32981);
} else {
if((state_val_33051 === (11))){
var inst_32991 = (state_33050[(13)]);
var inst_33005 = (state_33050[(10)]);
var inst_33005__$1 = cljs.core.seq.call(null,inst_32991);
var state_33050__$1 = (function (){var statearr_33074 = state_33050;
(statearr_33074[(10)] = inst_33005__$1);

return statearr_33074;
})();
if(inst_33005__$1){
var statearr_33075_33121 = state_33050__$1;
(statearr_33075_33121[(1)] = (13));

} else {
var statearr_33076_33122 = state_33050__$1;
(statearr_33076_33122[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (9))){
var inst_33027 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33077_33123 = state_33050__$1;
(statearr_33077_33123[(2)] = inst_33027);

(statearr_33077_33123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (5))){
var inst_32988 = cljs.core.deref.call(null,mults);
var inst_32989 = cljs.core.vals.call(null,inst_32988);
var inst_32990 = cljs.core.seq.call(null,inst_32989);
var inst_32991 = inst_32990;
var inst_32992 = null;
var inst_32993 = (0);
var inst_32994 = (0);
var state_33050__$1 = (function (){var statearr_33078 = state_33050;
(statearr_33078[(12)] = inst_32993);

(statearr_33078[(13)] = inst_32991);

(statearr_33078[(15)] = inst_32992);

(statearr_33078[(16)] = inst_32994);

return statearr_33078;
})();
var statearr_33079_33124 = state_33050__$1;
(statearr_33079_33124[(2)] = null);

(statearr_33079_33124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (14))){
var state_33050__$1 = state_33050;
var statearr_33083_33125 = state_33050__$1;
(statearr_33083_33125[(2)] = null);

(statearr_33083_33125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (16))){
var inst_33005 = (state_33050[(10)]);
var inst_33009 = cljs.core.chunk_first.call(null,inst_33005);
var inst_33010 = cljs.core.chunk_rest.call(null,inst_33005);
var inst_33011 = cljs.core.count.call(null,inst_33009);
var inst_32991 = inst_33010;
var inst_32992 = inst_33009;
var inst_32993 = inst_33011;
var inst_32994 = (0);
var state_33050__$1 = (function (){var statearr_33084 = state_33050;
(statearr_33084[(12)] = inst_32993);

(statearr_33084[(13)] = inst_32991);

(statearr_33084[(15)] = inst_32992);

(statearr_33084[(16)] = inst_32994);

return statearr_33084;
})();
var statearr_33085_33126 = state_33050__$1;
(statearr_33085_33126[(2)] = null);

(statearr_33085_33126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (10))){
var inst_32993 = (state_33050[(12)]);
var inst_32991 = (state_33050[(13)]);
var inst_32992 = (state_33050[(15)]);
var inst_32994 = (state_33050[(16)]);
var inst_32999 = cljs.core._nth.call(null,inst_32992,inst_32994);
var inst_33000 = cljs.core.async.muxch_STAR_.call(null,inst_32999);
var inst_33001 = cljs.core.async.close_BANG_.call(null,inst_33000);
var inst_33002 = (inst_32994 + (1));
var tmp33080 = inst_32993;
var tmp33081 = inst_32991;
var tmp33082 = inst_32992;
var inst_32991__$1 = tmp33081;
var inst_32992__$1 = tmp33082;
var inst_32993__$1 = tmp33080;
var inst_32994__$1 = inst_33002;
var state_33050__$1 = (function (){var statearr_33086 = state_33050;
(statearr_33086[(12)] = inst_32993__$1);

(statearr_33086[(13)] = inst_32991__$1);

(statearr_33086[(15)] = inst_32992__$1);

(statearr_33086[(16)] = inst_32994__$1);

(statearr_33086[(17)] = inst_33001);

return statearr_33086;
})();
var statearr_33087_33127 = state_33050__$1;
(statearr_33087_33127[(2)] = null);

(statearr_33087_33127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (18))){
var inst_33020 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33088_33128 = state_33050__$1;
(statearr_33088_33128[(2)] = inst_33020);

(statearr_33088_33128[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (8))){
var inst_32993 = (state_33050[(12)]);
var inst_32994 = (state_33050[(16)]);
var inst_32996 = (inst_32994 < inst_32993);
var inst_32997 = inst_32996;
var state_33050__$1 = state_33050;
if(cljs.core.truth_(inst_32997)){
var statearr_33089_33129 = state_33050__$1;
(statearr_33089_33129[(1)] = (10));

} else {
var statearr_33090_33130 = state_33050__$1;
(statearr_33090_33130[(1)] = (11));

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
});})(c__31183__auto___33102,mults,ensure_mult,p))
;
return ((function (switch__31118__auto__,c__31183__auto___33102,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31119__auto__ = null;
var cljs$core$async$state_machine__31119__auto____0 = (function (){
var statearr_33094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33094[(0)] = cljs$core$async$state_machine__31119__auto__);

(statearr_33094[(1)] = (1));

return statearr_33094;
});
var cljs$core$async$state_machine__31119__auto____1 = (function (state_33050){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_33050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e33095){if((e33095 instanceof Object)){
var ex__31122__auto__ = e33095;
var statearr_33096_33131 = state_33050;
(statearr_33096_33131[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33132 = state_33050;
state_33050 = G__33132;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
cljs$core$async$state_machine__31119__auto__ = function(state_33050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31119__auto____1.call(this,state_33050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31119__auto____0;
cljs$core$async$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31119__auto____1;
return cljs$core$async$state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto___33102,mults,ensure_mult,p))
})();
var state__31185__auto__ = (function (){var statearr_33097 = f__31184__auto__.call(null);
(statearr_33097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto___33102);

return statearr_33097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto___33102,mults,ensure_mult,p))
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
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33133.length)].join('')));

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
var args33140 = [];
var len__26121__auto___33143 = arguments.length;
var i__26122__auto___33144 = (0);
while(true){
if((i__26122__auto___33144 < len__26121__auto___33143)){
args33140.push((arguments[i__26122__auto___33144]));

var G__33145 = (i__26122__auto___33144 + (1));
i__26122__auto___33144 = G__33145;
continue;
} else {
}
break;
}

var G__33142 = args33140.length;
switch (G__33142) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33140.length)].join('')));

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
var args33147 = [];
var len__26121__auto___33218 = arguments.length;
var i__26122__auto___33219 = (0);
while(true){
if((i__26122__auto___33219 < len__26121__auto___33218)){
args33147.push((arguments[i__26122__auto___33219]));

var G__33220 = (i__26122__auto___33219 + (1));
i__26122__auto___33219 = G__33220;
continue;
} else {
}
break;
}

var G__33149 = args33147.length;
switch (G__33149) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33147.length)].join('')));

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
var c__31183__auto___33222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto___33222,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto___33222,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33188){
var state_val_33189 = (state_33188[(1)]);
if((state_val_33189 === (7))){
var state_33188__$1 = state_33188;
var statearr_33190_33223 = state_33188__$1;
(statearr_33190_33223[(2)] = null);

(statearr_33190_33223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33189 === (1))){
var state_33188__$1 = state_33188;
var statearr_33191_33224 = state_33188__$1;
(statearr_33191_33224[(2)] = null);

(statearr_33191_33224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33189 === (4))){
var inst_33152 = (state_33188[(7)]);
var inst_33154 = (inst_33152 < cnt);
var state_33188__$1 = state_33188;
if(cljs.core.truth_(inst_33154)){
var statearr_33192_33225 = state_33188__$1;
(statearr_33192_33225[(1)] = (6));

} else {
var statearr_33193_33226 = state_33188__$1;
(statearr_33193_33226[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33189 === (15))){
var inst_33184 = (state_33188[(2)]);
var state_33188__$1 = state_33188;
var statearr_33194_33227 = state_33188__$1;
(statearr_33194_33227[(2)] = inst_33184);

(statearr_33194_33227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33189 === (13))){
var inst_33177 = cljs.core.async.close_BANG_.call(null,out);
var state_33188__$1 = state_33188;
var statearr_33195_33228 = state_33188__$1;
(statearr_33195_33228[(2)] = inst_33177);

(statearr_33195_33228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33189 === (6))){
var state_33188__$1 = state_33188;
var statearr_33196_33229 = state_33188__$1;
(statearr_33196_33229[(2)] = null);

(statearr_33196_33229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33189 === (3))){
var inst_33186 = (state_33188[(2)]);
var state_33188__$1 = state_33188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33188__$1,inst_33186);
} else {
if((state_val_33189 === (12))){
var inst_33174 = (state_33188[(8)]);
var inst_33174__$1 = (state_33188[(2)]);
var inst_33175 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33174__$1);
var state_33188__$1 = (function (){var statearr_33197 = state_33188;
(statearr_33197[(8)] = inst_33174__$1);

return statearr_33197;
})();
if(cljs.core.truth_(inst_33175)){
var statearr_33198_33230 = state_33188__$1;
(statearr_33198_33230[(1)] = (13));

} else {
var statearr_33199_33231 = state_33188__$1;
(statearr_33199_33231[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33189 === (2))){
var inst_33151 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33152 = (0);
var state_33188__$1 = (function (){var statearr_33200 = state_33188;
(statearr_33200[(9)] = inst_33151);

(statearr_33200[(7)] = inst_33152);

return statearr_33200;
})();
var statearr_33201_33232 = state_33188__$1;
(statearr_33201_33232[(2)] = null);

(statearr_33201_33232[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33189 === (11))){
var inst_33152 = (state_33188[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33188,(10),Object,null,(9));
var inst_33161 = chs__$1.call(null,inst_33152);
var inst_33162 = done.call(null,inst_33152);
var inst_33163 = cljs.core.async.take_BANG_.call(null,inst_33161,inst_33162);
var state_33188__$1 = state_33188;
var statearr_33202_33233 = state_33188__$1;
(statearr_33202_33233[(2)] = inst_33163);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33188__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33189 === (9))){
var inst_33152 = (state_33188[(7)]);
var inst_33165 = (state_33188[(2)]);
var inst_33166 = (inst_33152 + (1));
var inst_33152__$1 = inst_33166;
var state_33188__$1 = (function (){var statearr_33203 = state_33188;
(statearr_33203[(10)] = inst_33165);

(statearr_33203[(7)] = inst_33152__$1);

return statearr_33203;
})();
var statearr_33204_33234 = state_33188__$1;
(statearr_33204_33234[(2)] = null);

(statearr_33204_33234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33189 === (5))){
var inst_33172 = (state_33188[(2)]);
var state_33188__$1 = (function (){var statearr_33205 = state_33188;
(statearr_33205[(11)] = inst_33172);

return statearr_33205;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33188__$1,(12),dchan);
} else {
if((state_val_33189 === (14))){
var inst_33174 = (state_33188[(8)]);
var inst_33179 = cljs.core.apply.call(null,f,inst_33174);
var state_33188__$1 = state_33188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33188__$1,(16),out,inst_33179);
} else {
if((state_val_33189 === (16))){
var inst_33181 = (state_33188[(2)]);
var state_33188__$1 = (function (){var statearr_33206 = state_33188;
(statearr_33206[(12)] = inst_33181);

return statearr_33206;
})();
var statearr_33207_33235 = state_33188__$1;
(statearr_33207_33235[(2)] = null);

(statearr_33207_33235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33189 === (10))){
var inst_33156 = (state_33188[(2)]);
var inst_33157 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33188__$1 = (function (){var statearr_33208 = state_33188;
(statearr_33208[(13)] = inst_33156);

return statearr_33208;
})();
var statearr_33209_33236 = state_33188__$1;
(statearr_33209_33236[(2)] = inst_33157);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33188__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33189 === (8))){
var inst_33170 = (state_33188[(2)]);
var state_33188__$1 = state_33188;
var statearr_33210_33237 = state_33188__$1;
(statearr_33210_33237[(2)] = inst_33170);

(statearr_33210_33237[(1)] = (5));


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
});})(c__31183__auto___33222,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31118__auto__,c__31183__auto___33222,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31119__auto__ = null;
var cljs$core$async$state_machine__31119__auto____0 = (function (){
var statearr_33214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33214[(0)] = cljs$core$async$state_machine__31119__auto__);

(statearr_33214[(1)] = (1));

return statearr_33214;
});
var cljs$core$async$state_machine__31119__auto____1 = (function (state_33188){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_33188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e33215){if((e33215 instanceof Object)){
var ex__31122__auto__ = e33215;
var statearr_33216_33238 = state_33188;
(statearr_33216_33238[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33239 = state_33188;
state_33188 = G__33239;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
cljs$core$async$state_machine__31119__auto__ = function(state_33188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31119__auto____1.call(this,state_33188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31119__auto____0;
cljs$core$async$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31119__auto____1;
return cljs$core$async$state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto___33222,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31185__auto__ = (function (){var statearr_33217 = f__31184__auto__.call(null);
(statearr_33217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto___33222);

return statearr_33217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto___33222,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args33241 = [];
var len__26121__auto___33299 = arguments.length;
var i__26122__auto___33300 = (0);
while(true){
if((i__26122__auto___33300 < len__26121__auto___33299)){
args33241.push((arguments[i__26122__auto___33300]));

var G__33301 = (i__26122__auto___33300 + (1));
i__26122__auto___33300 = G__33301;
continue;
} else {
}
break;
}

var G__33243 = args33241.length;
switch (G__33243) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33241.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31183__auto___33303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto___33303,out){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto___33303,out){
return (function (state_33275){
var state_val_33276 = (state_33275[(1)]);
if((state_val_33276 === (7))){
var inst_33255 = (state_33275[(7)]);
var inst_33254 = (state_33275[(8)]);
var inst_33254__$1 = (state_33275[(2)]);
var inst_33255__$1 = cljs.core.nth.call(null,inst_33254__$1,(0),null);
var inst_33256 = cljs.core.nth.call(null,inst_33254__$1,(1),null);
var inst_33257 = (inst_33255__$1 == null);
var state_33275__$1 = (function (){var statearr_33277 = state_33275;
(statearr_33277[(7)] = inst_33255__$1);

(statearr_33277[(9)] = inst_33256);

(statearr_33277[(8)] = inst_33254__$1);

return statearr_33277;
})();
if(cljs.core.truth_(inst_33257)){
var statearr_33278_33304 = state_33275__$1;
(statearr_33278_33304[(1)] = (8));

} else {
var statearr_33279_33305 = state_33275__$1;
(statearr_33279_33305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (1))){
var inst_33244 = cljs.core.vec.call(null,chs);
var inst_33245 = inst_33244;
var state_33275__$1 = (function (){var statearr_33280 = state_33275;
(statearr_33280[(10)] = inst_33245);

return statearr_33280;
})();
var statearr_33281_33306 = state_33275__$1;
(statearr_33281_33306[(2)] = null);

(statearr_33281_33306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (4))){
var inst_33245 = (state_33275[(10)]);
var state_33275__$1 = state_33275;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33275__$1,(7),inst_33245);
} else {
if((state_val_33276 === (6))){
var inst_33271 = (state_33275[(2)]);
var state_33275__$1 = state_33275;
var statearr_33282_33307 = state_33275__$1;
(statearr_33282_33307[(2)] = inst_33271);

(statearr_33282_33307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (3))){
var inst_33273 = (state_33275[(2)]);
var state_33275__$1 = state_33275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33275__$1,inst_33273);
} else {
if((state_val_33276 === (2))){
var inst_33245 = (state_33275[(10)]);
var inst_33247 = cljs.core.count.call(null,inst_33245);
var inst_33248 = (inst_33247 > (0));
var state_33275__$1 = state_33275;
if(cljs.core.truth_(inst_33248)){
var statearr_33284_33308 = state_33275__$1;
(statearr_33284_33308[(1)] = (4));

} else {
var statearr_33285_33309 = state_33275__$1;
(statearr_33285_33309[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (11))){
var inst_33245 = (state_33275[(10)]);
var inst_33264 = (state_33275[(2)]);
var tmp33283 = inst_33245;
var inst_33245__$1 = tmp33283;
var state_33275__$1 = (function (){var statearr_33286 = state_33275;
(statearr_33286[(11)] = inst_33264);

(statearr_33286[(10)] = inst_33245__$1);

return statearr_33286;
})();
var statearr_33287_33310 = state_33275__$1;
(statearr_33287_33310[(2)] = null);

(statearr_33287_33310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (9))){
var inst_33255 = (state_33275[(7)]);
var state_33275__$1 = state_33275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33275__$1,(11),out,inst_33255);
} else {
if((state_val_33276 === (5))){
var inst_33269 = cljs.core.async.close_BANG_.call(null,out);
var state_33275__$1 = state_33275;
var statearr_33288_33311 = state_33275__$1;
(statearr_33288_33311[(2)] = inst_33269);

(statearr_33288_33311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (10))){
var inst_33267 = (state_33275[(2)]);
var state_33275__$1 = state_33275;
var statearr_33289_33312 = state_33275__$1;
(statearr_33289_33312[(2)] = inst_33267);

(statearr_33289_33312[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (8))){
var inst_33255 = (state_33275[(7)]);
var inst_33256 = (state_33275[(9)]);
var inst_33254 = (state_33275[(8)]);
var inst_33245 = (state_33275[(10)]);
var inst_33259 = (function (){var cs = inst_33245;
var vec__33250 = inst_33254;
var v = inst_33255;
var c = inst_33256;
return ((function (cs,vec__33250,v,c,inst_33255,inst_33256,inst_33254,inst_33245,state_val_33276,c__31183__auto___33303,out){
return (function (p1__33240_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33240_SHARP_);
});
;})(cs,vec__33250,v,c,inst_33255,inst_33256,inst_33254,inst_33245,state_val_33276,c__31183__auto___33303,out))
})();
var inst_33260 = cljs.core.filterv.call(null,inst_33259,inst_33245);
var inst_33245__$1 = inst_33260;
var state_33275__$1 = (function (){var statearr_33290 = state_33275;
(statearr_33290[(10)] = inst_33245__$1);

return statearr_33290;
})();
var statearr_33291_33313 = state_33275__$1;
(statearr_33291_33313[(2)] = null);

(statearr_33291_33313[(1)] = (2));


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
});})(c__31183__auto___33303,out))
;
return ((function (switch__31118__auto__,c__31183__auto___33303,out){
return (function() {
var cljs$core$async$state_machine__31119__auto__ = null;
var cljs$core$async$state_machine__31119__auto____0 = (function (){
var statearr_33295 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33295[(0)] = cljs$core$async$state_machine__31119__auto__);

(statearr_33295[(1)] = (1));

return statearr_33295;
});
var cljs$core$async$state_machine__31119__auto____1 = (function (state_33275){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_33275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e33296){if((e33296 instanceof Object)){
var ex__31122__auto__ = e33296;
var statearr_33297_33314 = state_33275;
(statearr_33297_33314[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33315 = state_33275;
state_33275 = G__33315;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
cljs$core$async$state_machine__31119__auto__ = function(state_33275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31119__auto____1.call(this,state_33275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31119__auto____0;
cljs$core$async$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31119__auto____1;
return cljs$core$async$state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto___33303,out))
})();
var state__31185__auto__ = (function (){var statearr_33298 = f__31184__auto__.call(null);
(statearr_33298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto___33303);

return statearr_33298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto___33303,out))
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
var args33316 = [];
var len__26121__auto___33365 = arguments.length;
var i__26122__auto___33366 = (0);
while(true){
if((i__26122__auto___33366 < len__26121__auto___33365)){
args33316.push((arguments[i__26122__auto___33366]));

var G__33367 = (i__26122__auto___33366 + (1));
i__26122__auto___33366 = G__33367;
continue;
} else {
}
break;
}

var G__33318 = args33316.length;
switch (G__33318) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33316.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31183__auto___33369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto___33369,out){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto___33369,out){
return (function (state_33342){
var state_val_33343 = (state_33342[(1)]);
if((state_val_33343 === (7))){
var inst_33324 = (state_33342[(7)]);
var inst_33324__$1 = (state_33342[(2)]);
var inst_33325 = (inst_33324__$1 == null);
var inst_33326 = cljs.core.not.call(null,inst_33325);
var state_33342__$1 = (function (){var statearr_33344 = state_33342;
(statearr_33344[(7)] = inst_33324__$1);

return statearr_33344;
})();
if(inst_33326){
var statearr_33345_33370 = state_33342__$1;
(statearr_33345_33370[(1)] = (8));

} else {
var statearr_33346_33371 = state_33342__$1;
(statearr_33346_33371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (1))){
var inst_33319 = (0);
var state_33342__$1 = (function (){var statearr_33347 = state_33342;
(statearr_33347[(8)] = inst_33319);

return statearr_33347;
})();
var statearr_33348_33372 = state_33342__$1;
(statearr_33348_33372[(2)] = null);

(statearr_33348_33372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (4))){
var state_33342__$1 = state_33342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33342__$1,(7),ch);
} else {
if((state_val_33343 === (6))){
var inst_33337 = (state_33342[(2)]);
var state_33342__$1 = state_33342;
var statearr_33349_33373 = state_33342__$1;
(statearr_33349_33373[(2)] = inst_33337);

(statearr_33349_33373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (3))){
var inst_33339 = (state_33342[(2)]);
var inst_33340 = cljs.core.async.close_BANG_.call(null,out);
var state_33342__$1 = (function (){var statearr_33350 = state_33342;
(statearr_33350[(9)] = inst_33339);

return statearr_33350;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33342__$1,inst_33340);
} else {
if((state_val_33343 === (2))){
var inst_33319 = (state_33342[(8)]);
var inst_33321 = (inst_33319 < n);
var state_33342__$1 = state_33342;
if(cljs.core.truth_(inst_33321)){
var statearr_33351_33374 = state_33342__$1;
(statearr_33351_33374[(1)] = (4));

} else {
var statearr_33352_33375 = state_33342__$1;
(statearr_33352_33375[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (11))){
var inst_33319 = (state_33342[(8)]);
var inst_33329 = (state_33342[(2)]);
var inst_33330 = (inst_33319 + (1));
var inst_33319__$1 = inst_33330;
var state_33342__$1 = (function (){var statearr_33353 = state_33342;
(statearr_33353[(8)] = inst_33319__$1);

(statearr_33353[(10)] = inst_33329);

return statearr_33353;
})();
var statearr_33354_33376 = state_33342__$1;
(statearr_33354_33376[(2)] = null);

(statearr_33354_33376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (9))){
var state_33342__$1 = state_33342;
var statearr_33355_33377 = state_33342__$1;
(statearr_33355_33377[(2)] = null);

(statearr_33355_33377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (5))){
var state_33342__$1 = state_33342;
var statearr_33356_33378 = state_33342__$1;
(statearr_33356_33378[(2)] = null);

(statearr_33356_33378[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (10))){
var inst_33334 = (state_33342[(2)]);
var state_33342__$1 = state_33342;
var statearr_33357_33379 = state_33342__$1;
(statearr_33357_33379[(2)] = inst_33334);

(statearr_33357_33379[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (8))){
var inst_33324 = (state_33342[(7)]);
var state_33342__$1 = state_33342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33342__$1,(11),out,inst_33324);
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
});})(c__31183__auto___33369,out))
;
return ((function (switch__31118__auto__,c__31183__auto___33369,out){
return (function() {
var cljs$core$async$state_machine__31119__auto__ = null;
var cljs$core$async$state_machine__31119__auto____0 = (function (){
var statearr_33361 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33361[(0)] = cljs$core$async$state_machine__31119__auto__);

(statearr_33361[(1)] = (1));

return statearr_33361;
});
var cljs$core$async$state_machine__31119__auto____1 = (function (state_33342){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_33342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e33362){if((e33362 instanceof Object)){
var ex__31122__auto__ = e33362;
var statearr_33363_33380 = state_33342;
(statearr_33363_33380[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33381 = state_33342;
state_33342 = G__33381;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
cljs$core$async$state_machine__31119__auto__ = function(state_33342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31119__auto____1.call(this,state_33342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31119__auto____0;
cljs$core$async$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31119__auto____1;
return cljs$core$async$state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto___33369,out))
})();
var state__31185__auto__ = (function (){var statearr_33364 = f__31184__auto__.call(null);
(statearr_33364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto___33369);

return statearr_33364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto___33369,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33389 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33389 = (function (map_LT_,f,ch,meta33390){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33390 = meta33390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33391,meta33390__$1){
var self__ = this;
var _33391__$1 = this;
return (new cljs.core.async.t_cljs$core$async33389(self__.map_LT_,self__.f,self__.ch,meta33390__$1));
});

cljs.core.async.t_cljs$core$async33389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33391){
var self__ = this;
var _33391__$1 = this;
return self__.meta33390;
});

cljs.core.async.t_cljs$core$async33389.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33389.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33389.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33389.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33389.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33392 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33392 = (function (map_LT_,f,ch,meta33390,_,fn1,meta33393){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33390 = meta33390;
this._ = _;
this.fn1 = fn1;
this.meta33393 = meta33393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33394,meta33393__$1){
var self__ = this;
var _33394__$1 = this;
return (new cljs.core.async.t_cljs$core$async33392(self__.map_LT_,self__.f,self__.ch,self__.meta33390,self__._,self__.fn1,meta33393__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33392.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33394){
var self__ = this;
var _33394__$1 = this;
return self__.meta33393;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33392.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33392.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33392.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33392.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33382_SHARP_){
return f1.call(null,(((p1__33382_SHARP_ == null))?null:self__.f.call(null,p1__33382_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33392.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33390","meta33390",1438777455,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33389","cljs.core.async/t_cljs$core$async33389",-1305356718,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33393","meta33393",887224461,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33392.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33392";

cljs.core.async.t_cljs$core$async33392.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async33392");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33392 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33392(map_LT___$1,f__$1,ch__$1,meta33390__$1,___$2,fn1__$1,meta33393){
return (new cljs.core.async.t_cljs$core$async33392(map_LT___$1,f__$1,ch__$1,meta33390__$1,___$2,fn1__$1,meta33393));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33392(self__.map_LT_,self__.f,self__.ch,self__.meta33390,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async33389.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33389.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33390","meta33390",1438777455,null)], null);
});

cljs.core.async.t_cljs$core$async33389.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33389";

cljs.core.async.t_cljs$core$async33389.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async33389");
});

cljs.core.async.__GT_t_cljs$core$async33389 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33389(map_LT___$1,f__$1,ch__$1,meta33390){
return (new cljs.core.async.t_cljs$core$async33389(map_LT___$1,f__$1,ch__$1,meta33390));
});

}

return (new cljs.core.async.t_cljs$core$async33389(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33398 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33398 = (function (map_GT_,f,ch,meta33399){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta33399 = meta33399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33400,meta33399__$1){
var self__ = this;
var _33400__$1 = this;
return (new cljs.core.async.t_cljs$core$async33398(self__.map_GT_,self__.f,self__.ch,meta33399__$1));
});

cljs.core.async.t_cljs$core$async33398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33400){
var self__ = this;
var _33400__$1 = this;
return self__.meta33399;
});

cljs.core.async.t_cljs$core$async33398.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33398.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33398.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33398.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33398.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33398.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33399","meta33399",-1560643281,null)], null);
});

cljs.core.async.t_cljs$core$async33398.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33398";

cljs.core.async.t_cljs$core$async33398.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async33398");
});

cljs.core.async.__GT_t_cljs$core$async33398 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33398(map_GT___$1,f__$1,ch__$1,meta33399){
return (new cljs.core.async.t_cljs$core$async33398(map_GT___$1,f__$1,ch__$1,meta33399));
});

}

return (new cljs.core.async.t_cljs$core$async33398(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33404 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33404 = (function (filter_GT_,p,ch,meta33405){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta33405 = meta33405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33406,meta33405__$1){
var self__ = this;
var _33406__$1 = this;
return (new cljs.core.async.t_cljs$core$async33404(self__.filter_GT_,self__.p,self__.ch,meta33405__$1));
});

cljs.core.async.t_cljs$core$async33404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33406){
var self__ = this;
var _33406__$1 = this;
return self__.meta33405;
});

cljs.core.async.t_cljs$core$async33404.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33404.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33404.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33404.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33404.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33404.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33404.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33405","meta33405",-82153194,null)], null);
});

cljs.core.async.t_cljs$core$async33404.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33404";

cljs.core.async.t_cljs$core$async33404.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async33404");
});

cljs.core.async.__GT_t_cljs$core$async33404 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33404(filter_GT___$1,p__$1,ch__$1,meta33405){
return (new cljs.core.async.t_cljs$core$async33404(filter_GT___$1,p__$1,ch__$1,meta33405));
});

}

return (new cljs.core.async.t_cljs$core$async33404(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args33407 = [];
var len__26121__auto___33451 = arguments.length;
var i__26122__auto___33452 = (0);
while(true){
if((i__26122__auto___33452 < len__26121__auto___33451)){
args33407.push((arguments[i__26122__auto___33452]));

var G__33453 = (i__26122__auto___33452 + (1));
i__26122__auto___33452 = G__33453;
continue;
} else {
}
break;
}

var G__33409 = args33407.length;
switch (G__33409) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33407.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31183__auto___33455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto___33455,out){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto___33455,out){
return (function (state_33430){
var state_val_33431 = (state_33430[(1)]);
if((state_val_33431 === (7))){
var inst_33426 = (state_33430[(2)]);
var state_33430__$1 = state_33430;
var statearr_33432_33456 = state_33430__$1;
(statearr_33432_33456[(2)] = inst_33426);

(statearr_33432_33456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (1))){
var state_33430__$1 = state_33430;
var statearr_33433_33457 = state_33430__$1;
(statearr_33433_33457[(2)] = null);

(statearr_33433_33457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (4))){
var inst_33412 = (state_33430[(7)]);
var inst_33412__$1 = (state_33430[(2)]);
var inst_33413 = (inst_33412__$1 == null);
var state_33430__$1 = (function (){var statearr_33434 = state_33430;
(statearr_33434[(7)] = inst_33412__$1);

return statearr_33434;
})();
if(cljs.core.truth_(inst_33413)){
var statearr_33435_33458 = state_33430__$1;
(statearr_33435_33458[(1)] = (5));

} else {
var statearr_33436_33459 = state_33430__$1;
(statearr_33436_33459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (6))){
var inst_33412 = (state_33430[(7)]);
var inst_33417 = p.call(null,inst_33412);
var state_33430__$1 = state_33430;
if(cljs.core.truth_(inst_33417)){
var statearr_33437_33460 = state_33430__$1;
(statearr_33437_33460[(1)] = (8));

} else {
var statearr_33438_33461 = state_33430__$1;
(statearr_33438_33461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (3))){
var inst_33428 = (state_33430[(2)]);
var state_33430__$1 = state_33430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33430__$1,inst_33428);
} else {
if((state_val_33431 === (2))){
var state_33430__$1 = state_33430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33430__$1,(4),ch);
} else {
if((state_val_33431 === (11))){
var inst_33420 = (state_33430[(2)]);
var state_33430__$1 = state_33430;
var statearr_33439_33462 = state_33430__$1;
(statearr_33439_33462[(2)] = inst_33420);

(statearr_33439_33462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (9))){
var state_33430__$1 = state_33430;
var statearr_33440_33463 = state_33430__$1;
(statearr_33440_33463[(2)] = null);

(statearr_33440_33463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (5))){
var inst_33415 = cljs.core.async.close_BANG_.call(null,out);
var state_33430__$1 = state_33430;
var statearr_33441_33464 = state_33430__$1;
(statearr_33441_33464[(2)] = inst_33415);

(statearr_33441_33464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (10))){
var inst_33423 = (state_33430[(2)]);
var state_33430__$1 = (function (){var statearr_33442 = state_33430;
(statearr_33442[(8)] = inst_33423);

return statearr_33442;
})();
var statearr_33443_33465 = state_33430__$1;
(statearr_33443_33465[(2)] = null);

(statearr_33443_33465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (8))){
var inst_33412 = (state_33430[(7)]);
var state_33430__$1 = state_33430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33430__$1,(11),out,inst_33412);
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
});})(c__31183__auto___33455,out))
;
return ((function (switch__31118__auto__,c__31183__auto___33455,out){
return (function() {
var cljs$core$async$state_machine__31119__auto__ = null;
var cljs$core$async$state_machine__31119__auto____0 = (function (){
var statearr_33447 = [null,null,null,null,null,null,null,null,null];
(statearr_33447[(0)] = cljs$core$async$state_machine__31119__auto__);

(statearr_33447[(1)] = (1));

return statearr_33447;
});
var cljs$core$async$state_machine__31119__auto____1 = (function (state_33430){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_33430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e33448){if((e33448 instanceof Object)){
var ex__31122__auto__ = e33448;
var statearr_33449_33466 = state_33430;
(statearr_33449_33466[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33467 = state_33430;
state_33430 = G__33467;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
cljs$core$async$state_machine__31119__auto__ = function(state_33430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31119__auto____1.call(this,state_33430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31119__auto____0;
cljs$core$async$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31119__auto____1;
return cljs$core$async$state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto___33455,out))
})();
var state__31185__auto__ = (function (){var statearr_33450 = f__31184__auto__.call(null);
(statearr_33450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto___33455);

return statearr_33450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto___33455,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args33468 = [];
var len__26121__auto___33471 = arguments.length;
var i__26122__auto___33472 = (0);
while(true){
if((i__26122__auto___33472 < len__26121__auto___33471)){
args33468.push((arguments[i__26122__auto___33472]));

var G__33473 = (i__26122__auto___33472 + (1));
i__26122__auto___33472 = G__33473;
continue;
} else {
}
break;
}

var G__33470 = args33468.length;
switch (G__33470) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33468.length)].join('')));

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
var c__31183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto__){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto__){
return (function (state_33640){
var state_val_33641 = (state_33640[(1)]);
if((state_val_33641 === (7))){
var inst_33636 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33642_33683 = state_33640__$1;
(statearr_33642_33683[(2)] = inst_33636);

(statearr_33642_33683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (20))){
var inst_33606 = (state_33640[(7)]);
var inst_33617 = (state_33640[(2)]);
var inst_33618 = cljs.core.next.call(null,inst_33606);
var inst_33592 = inst_33618;
var inst_33593 = null;
var inst_33594 = (0);
var inst_33595 = (0);
var state_33640__$1 = (function (){var statearr_33643 = state_33640;
(statearr_33643[(8)] = inst_33593);

(statearr_33643[(9)] = inst_33595);

(statearr_33643[(10)] = inst_33594);

(statearr_33643[(11)] = inst_33592);

(statearr_33643[(12)] = inst_33617);

return statearr_33643;
})();
var statearr_33644_33684 = state_33640__$1;
(statearr_33644_33684[(2)] = null);

(statearr_33644_33684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (1))){
var state_33640__$1 = state_33640;
var statearr_33645_33685 = state_33640__$1;
(statearr_33645_33685[(2)] = null);

(statearr_33645_33685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (4))){
var inst_33581 = (state_33640[(13)]);
var inst_33581__$1 = (state_33640[(2)]);
var inst_33582 = (inst_33581__$1 == null);
var state_33640__$1 = (function (){var statearr_33646 = state_33640;
(statearr_33646[(13)] = inst_33581__$1);

return statearr_33646;
})();
if(cljs.core.truth_(inst_33582)){
var statearr_33647_33686 = state_33640__$1;
(statearr_33647_33686[(1)] = (5));

} else {
var statearr_33648_33687 = state_33640__$1;
(statearr_33648_33687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (15))){
var state_33640__$1 = state_33640;
var statearr_33652_33688 = state_33640__$1;
(statearr_33652_33688[(2)] = null);

(statearr_33652_33688[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (21))){
var state_33640__$1 = state_33640;
var statearr_33653_33689 = state_33640__$1;
(statearr_33653_33689[(2)] = null);

(statearr_33653_33689[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (13))){
var inst_33593 = (state_33640[(8)]);
var inst_33595 = (state_33640[(9)]);
var inst_33594 = (state_33640[(10)]);
var inst_33592 = (state_33640[(11)]);
var inst_33602 = (state_33640[(2)]);
var inst_33603 = (inst_33595 + (1));
var tmp33649 = inst_33593;
var tmp33650 = inst_33594;
var tmp33651 = inst_33592;
var inst_33592__$1 = tmp33651;
var inst_33593__$1 = tmp33649;
var inst_33594__$1 = tmp33650;
var inst_33595__$1 = inst_33603;
var state_33640__$1 = (function (){var statearr_33654 = state_33640;
(statearr_33654[(8)] = inst_33593__$1);

(statearr_33654[(9)] = inst_33595__$1);

(statearr_33654[(10)] = inst_33594__$1);

(statearr_33654[(11)] = inst_33592__$1);

(statearr_33654[(14)] = inst_33602);

return statearr_33654;
})();
var statearr_33655_33690 = state_33640__$1;
(statearr_33655_33690[(2)] = null);

(statearr_33655_33690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (22))){
var state_33640__$1 = state_33640;
var statearr_33656_33691 = state_33640__$1;
(statearr_33656_33691[(2)] = null);

(statearr_33656_33691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (6))){
var inst_33581 = (state_33640[(13)]);
var inst_33590 = f.call(null,inst_33581);
var inst_33591 = cljs.core.seq.call(null,inst_33590);
var inst_33592 = inst_33591;
var inst_33593 = null;
var inst_33594 = (0);
var inst_33595 = (0);
var state_33640__$1 = (function (){var statearr_33657 = state_33640;
(statearr_33657[(8)] = inst_33593);

(statearr_33657[(9)] = inst_33595);

(statearr_33657[(10)] = inst_33594);

(statearr_33657[(11)] = inst_33592);

return statearr_33657;
})();
var statearr_33658_33692 = state_33640__$1;
(statearr_33658_33692[(2)] = null);

(statearr_33658_33692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (17))){
var inst_33606 = (state_33640[(7)]);
var inst_33610 = cljs.core.chunk_first.call(null,inst_33606);
var inst_33611 = cljs.core.chunk_rest.call(null,inst_33606);
var inst_33612 = cljs.core.count.call(null,inst_33610);
var inst_33592 = inst_33611;
var inst_33593 = inst_33610;
var inst_33594 = inst_33612;
var inst_33595 = (0);
var state_33640__$1 = (function (){var statearr_33659 = state_33640;
(statearr_33659[(8)] = inst_33593);

(statearr_33659[(9)] = inst_33595);

(statearr_33659[(10)] = inst_33594);

(statearr_33659[(11)] = inst_33592);

return statearr_33659;
})();
var statearr_33660_33693 = state_33640__$1;
(statearr_33660_33693[(2)] = null);

(statearr_33660_33693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (3))){
var inst_33638 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33640__$1,inst_33638);
} else {
if((state_val_33641 === (12))){
var inst_33626 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33661_33694 = state_33640__$1;
(statearr_33661_33694[(2)] = inst_33626);

(statearr_33661_33694[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (2))){
var state_33640__$1 = state_33640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33640__$1,(4),in$);
} else {
if((state_val_33641 === (23))){
var inst_33634 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33662_33695 = state_33640__$1;
(statearr_33662_33695[(2)] = inst_33634);

(statearr_33662_33695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (19))){
var inst_33621 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33663_33696 = state_33640__$1;
(statearr_33663_33696[(2)] = inst_33621);

(statearr_33663_33696[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (11))){
var inst_33592 = (state_33640[(11)]);
var inst_33606 = (state_33640[(7)]);
var inst_33606__$1 = cljs.core.seq.call(null,inst_33592);
var state_33640__$1 = (function (){var statearr_33664 = state_33640;
(statearr_33664[(7)] = inst_33606__$1);

return statearr_33664;
})();
if(inst_33606__$1){
var statearr_33665_33697 = state_33640__$1;
(statearr_33665_33697[(1)] = (14));

} else {
var statearr_33666_33698 = state_33640__$1;
(statearr_33666_33698[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (9))){
var inst_33628 = (state_33640[(2)]);
var inst_33629 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33640__$1 = (function (){var statearr_33667 = state_33640;
(statearr_33667[(15)] = inst_33628);

return statearr_33667;
})();
if(cljs.core.truth_(inst_33629)){
var statearr_33668_33699 = state_33640__$1;
(statearr_33668_33699[(1)] = (21));

} else {
var statearr_33669_33700 = state_33640__$1;
(statearr_33669_33700[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (5))){
var inst_33584 = cljs.core.async.close_BANG_.call(null,out);
var state_33640__$1 = state_33640;
var statearr_33670_33701 = state_33640__$1;
(statearr_33670_33701[(2)] = inst_33584);

(statearr_33670_33701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (14))){
var inst_33606 = (state_33640[(7)]);
var inst_33608 = cljs.core.chunked_seq_QMARK_.call(null,inst_33606);
var state_33640__$1 = state_33640;
if(inst_33608){
var statearr_33671_33702 = state_33640__$1;
(statearr_33671_33702[(1)] = (17));

} else {
var statearr_33672_33703 = state_33640__$1;
(statearr_33672_33703[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (16))){
var inst_33624 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33673_33704 = state_33640__$1;
(statearr_33673_33704[(2)] = inst_33624);

(statearr_33673_33704[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (10))){
var inst_33593 = (state_33640[(8)]);
var inst_33595 = (state_33640[(9)]);
var inst_33600 = cljs.core._nth.call(null,inst_33593,inst_33595);
var state_33640__$1 = state_33640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33640__$1,(13),out,inst_33600);
} else {
if((state_val_33641 === (18))){
var inst_33606 = (state_33640[(7)]);
var inst_33615 = cljs.core.first.call(null,inst_33606);
var state_33640__$1 = state_33640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33640__$1,(20),out,inst_33615);
} else {
if((state_val_33641 === (8))){
var inst_33595 = (state_33640[(9)]);
var inst_33594 = (state_33640[(10)]);
var inst_33597 = (inst_33595 < inst_33594);
var inst_33598 = inst_33597;
var state_33640__$1 = state_33640;
if(cljs.core.truth_(inst_33598)){
var statearr_33674_33705 = state_33640__$1;
(statearr_33674_33705[(1)] = (10));

} else {
var statearr_33675_33706 = state_33640__$1;
(statearr_33675_33706[(1)] = (11));

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
});})(c__31183__auto__))
;
return ((function (switch__31118__auto__,c__31183__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31119__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31119__auto____0 = (function (){
var statearr_33679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33679[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31119__auto__);

(statearr_33679[(1)] = (1));

return statearr_33679;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31119__auto____1 = (function (state_33640){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_33640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e33680){if((e33680 instanceof Object)){
var ex__31122__auto__ = e33680;
var statearr_33681_33707 = state_33640;
(statearr_33681_33707[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33708 = state_33640;
state_33640 = G__33708;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31119__auto__ = function(state_33640){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31119__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31119__auto____1.call(this,state_33640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31119__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31119__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto__))
})();
var state__31185__auto__ = (function (){var statearr_33682 = f__31184__auto__.call(null);
(statearr_33682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto__);

return statearr_33682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto__))
);

return c__31183__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args33709 = [];
var len__26121__auto___33712 = arguments.length;
var i__26122__auto___33713 = (0);
while(true){
if((i__26122__auto___33713 < len__26121__auto___33712)){
args33709.push((arguments[i__26122__auto___33713]));

var G__33714 = (i__26122__auto___33713 + (1));
i__26122__auto___33713 = G__33714;
continue;
} else {
}
break;
}

var G__33711 = args33709.length;
switch (G__33711) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33709.length)].join('')));

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
var args33716 = [];
var len__26121__auto___33719 = arguments.length;
var i__26122__auto___33720 = (0);
while(true){
if((i__26122__auto___33720 < len__26121__auto___33719)){
args33716.push((arguments[i__26122__auto___33720]));

var G__33721 = (i__26122__auto___33720 + (1));
i__26122__auto___33720 = G__33721;
continue;
} else {
}
break;
}

var G__33718 = args33716.length;
switch (G__33718) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33716.length)].join('')));

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
var args33723 = [];
var len__26121__auto___33774 = arguments.length;
var i__26122__auto___33775 = (0);
while(true){
if((i__26122__auto___33775 < len__26121__auto___33774)){
args33723.push((arguments[i__26122__auto___33775]));

var G__33776 = (i__26122__auto___33775 + (1));
i__26122__auto___33775 = G__33776;
continue;
} else {
}
break;
}

var G__33725 = args33723.length;
switch (G__33725) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33723.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31183__auto___33778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto___33778,out){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto___33778,out){
return (function (state_33749){
var state_val_33750 = (state_33749[(1)]);
if((state_val_33750 === (7))){
var inst_33744 = (state_33749[(2)]);
var state_33749__$1 = state_33749;
var statearr_33751_33779 = state_33749__$1;
(statearr_33751_33779[(2)] = inst_33744);

(statearr_33751_33779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33750 === (1))){
var inst_33726 = null;
var state_33749__$1 = (function (){var statearr_33752 = state_33749;
(statearr_33752[(7)] = inst_33726);

return statearr_33752;
})();
var statearr_33753_33780 = state_33749__$1;
(statearr_33753_33780[(2)] = null);

(statearr_33753_33780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33750 === (4))){
var inst_33729 = (state_33749[(8)]);
var inst_33729__$1 = (state_33749[(2)]);
var inst_33730 = (inst_33729__$1 == null);
var inst_33731 = cljs.core.not.call(null,inst_33730);
var state_33749__$1 = (function (){var statearr_33754 = state_33749;
(statearr_33754[(8)] = inst_33729__$1);

return statearr_33754;
})();
if(inst_33731){
var statearr_33755_33781 = state_33749__$1;
(statearr_33755_33781[(1)] = (5));

} else {
var statearr_33756_33782 = state_33749__$1;
(statearr_33756_33782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33750 === (6))){
var state_33749__$1 = state_33749;
var statearr_33757_33783 = state_33749__$1;
(statearr_33757_33783[(2)] = null);

(statearr_33757_33783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33750 === (3))){
var inst_33746 = (state_33749[(2)]);
var inst_33747 = cljs.core.async.close_BANG_.call(null,out);
var state_33749__$1 = (function (){var statearr_33758 = state_33749;
(statearr_33758[(9)] = inst_33746);

return statearr_33758;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33749__$1,inst_33747);
} else {
if((state_val_33750 === (2))){
var state_33749__$1 = state_33749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33749__$1,(4),ch);
} else {
if((state_val_33750 === (11))){
var inst_33729 = (state_33749[(8)]);
var inst_33738 = (state_33749[(2)]);
var inst_33726 = inst_33729;
var state_33749__$1 = (function (){var statearr_33759 = state_33749;
(statearr_33759[(10)] = inst_33738);

(statearr_33759[(7)] = inst_33726);

return statearr_33759;
})();
var statearr_33760_33784 = state_33749__$1;
(statearr_33760_33784[(2)] = null);

(statearr_33760_33784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33750 === (9))){
var inst_33729 = (state_33749[(8)]);
var state_33749__$1 = state_33749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33749__$1,(11),out,inst_33729);
} else {
if((state_val_33750 === (5))){
var inst_33726 = (state_33749[(7)]);
var inst_33729 = (state_33749[(8)]);
var inst_33733 = cljs.core._EQ_.call(null,inst_33729,inst_33726);
var state_33749__$1 = state_33749;
if(inst_33733){
var statearr_33762_33785 = state_33749__$1;
(statearr_33762_33785[(1)] = (8));

} else {
var statearr_33763_33786 = state_33749__$1;
(statearr_33763_33786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33750 === (10))){
var inst_33741 = (state_33749[(2)]);
var state_33749__$1 = state_33749;
var statearr_33764_33787 = state_33749__$1;
(statearr_33764_33787[(2)] = inst_33741);

(statearr_33764_33787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33750 === (8))){
var inst_33726 = (state_33749[(7)]);
var tmp33761 = inst_33726;
var inst_33726__$1 = tmp33761;
var state_33749__$1 = (function (){var statearr_33765 = state_33749;
(statearr_33765[(7)] = inst_33726__$1);

return statearr_33765;
})();
var statearr_33766_33788 = state_33749__$1;
(statearr_33766_33788[(2)] = null);

(statearr_33766_33788[(1)] = (2));


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
});})(c__31183__auto___33778,out))
;
return ((function (switch__31118__auto__,c__31183__auto___33778,out){
return (function() {
var cljs$core$async$state_machine__31119__auto__ = null;
var cljs$core$async$state_machine__31119__auto____0 = (function (){
var statearr_33770 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33770[(0)] = cljs$core$async$state_machine__31119__auto__);

(statearr_33770[(1)] = (1));

return statearr_33770;
});
var cljs$core$async$state_machine__31119__auto____1 = (function (state_33749){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_33749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e33771){if((e33771 instanceof Object)){
var ex__31122__auto__ = e33771;
var statearr_33772_33789 = state_33749;
(statearr_33772_33789[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33790 = state_33749;
state_33749 = G__33790;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
cljs$core$async$state_machine__31119__auto__ = function(state_33749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31119__auto____1.call(this,state_33749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31119__auto____0;
cljs$core$async$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31119__auto____1;
return cljs$core$async$state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto___33778,out))
})();
var state__31185__auto__ = (function (){var statearr_33773 = f__31184__auto__.call(null);
(statearr_33773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto___33778);

return statearr_33773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto___33778,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33791 = [];
var len__26121__auto___33861 = arguments.length;
var i__26122__auto___33862 = (0);
while(true){
if((i__26122__auto___33862 < len__26121__auto___33861)){
args33791.push((arguments[i__26122__auto___33862]));

var G__33863 = (i__26122__auto___33862 + (1));
i__26122__auto___33862 = G__33863;
continue;
} else {
}
break;
}

var G__33793 = args33791.length;
switch (G__33793) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33791.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31183__auto___33865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto___33865,out){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto___33865,out){
return (function (state_33831){
var state_val_33832 = (state_33831[(1)]);
if((state_val_33832 === (7))){
var inst_33827 = (state_33831[(2)]);
var state_33831__$1 = state_33831;
var statearr_33833_33866 = state_33831__$1;
(statearr_33833_33866[(2)] = inst_33827);

(statearr_33833_33866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (1))){
var inst_33794 = (new Array(n));
var inst_33795 = inst_33794;
var inst_33796 = (0);
var state_33831__$1 = (function (){var statearr_33834 = state_33831;
(statearr_33834[(7)] = inst_33796);

(statearr_33834[(8)] = inst_33795);

return statearr_33834;
})();
var statearr_33835_33867 = state_33831__$1;
(statearr_33835_33867[(2)] = null);

(statearr_33835_33867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (4))){
var inst_33799 = (state_33831[(9)]);
var inst_33799__$1 = (state_33831[(2)]);
var inst_33800 = (inst_33799__$1 == null);
var inst_33801 = cljs.core.not.call(null,inst_33800);
var state_33831__$1 = (function (){var statearr_33836 = state_33831;
(statearr_33836[(9)] = inst_33799__$1);

return statearr_33836;
})();
if(inst_33801){
var statearr_33837_33868 = state_33831__$1;
(statearr_33837_33868[(1)] = (5));

} else {
var statearr_33838_33869 = state_33831__$1;
(statearr_33838_33869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (15))){
var inst_33821 = (state_33831[(2)]);
var state_33831__$1 = state_33831;
var statearr_33839_33870 = state_33831__$1;
(statearr_33839_33870[(2)] = inst_33821);

(statearr_33839_33870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (13))){
var state_33831__$1 = state_33831;
var statearr_33840_33871 = state_33831__$1;
(statearr_33840_33871[(2)] = null);

(statearr_33840_33871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (6))){
var inst_33796 = (state_33831[(7)]);
var inst_33817 = (inst_33796 > (0));
var state_33831__$1 = state_33831;
if(cljs.core.truth_(inst_33817)){
var statearr_33841_33872 = state_33831__$1;
(statearr_33841_33872[(1)] = (12));

} else {
var statearr_33842_33873 = state_33831__$1;
(statearr_33842_33873[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (3))){
var inst_33829 = (state_33831[(2)]);
var state_33831__$1 = state_33831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33831__$1,inst_33829);
} else {
if((state_val_33832 === (12))){
var inst_33795 = (state_33831[(8)]);
var inst_33819 = cljs.core.vec.call(null,inst_33795);
var state_33831__$1 = state_33831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33831__$1,(15),out,inst_33819);
} else {
if((state_val_33832 === (2))){
var state_33831__$1 = state_33831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33831__$1,(4),ch);
} else {
if((state_val_33832 === (11))){
var inst_33811 = (state_33831[(2)]);
var inst_33812 = (new Array(n));
var inst_33795 = inst_33812;
var inst_33796 = (0);
var state_33831__$1 = (function (){var statearr_33843 = state_33831;
(statearr_33843[(10)] = inst_33811);

(statearr_33843[(7)] = inst_33796);

(statearr_33843[(8)] = inst_33795);

return statearr_33843;
})();
var statearr_33844_33874 = state_33831__$1;
(statearr_33844_33874[(2)] = null);

(statearr_33844_33874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (9))){
var inst_33795 = (state_33831[(8)]);
var inst_33809 = cljs.core.vec.call(null,inst_33795);
var state_33831__$1 = state_33831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33831__$1,(11),out,inst_33809);
} else {
if((state_val_33832 === (5))){
var inst_33799 = (state_33831[(9)]);
var inst_33796 = (state_33831[(7)]);
var inst_33804 = (state_33831[(11)]);
var inst_33795 = (state_33831[(8)]);
var inst_33803 = (inst_33795[inst_33796] = inst_33799);
var inst_33804__$1 = (inst_33796 + (1));
var inst_33805 = (inst_33804__$1 < n);
var state_33831__$1 = (function (){var statearr_33845 = state_33831;
(statearr_33845[(12)] = inst_33803);

(statearr_33845[(11)] = inst_33804__$1);

return statearr_33845;
})();
if(cljs.core.truth_(inst_33805)){
var statearr_33846_33875 = state_33831__$1;
(statearr_33846_33875[(1)] = (8));

} else {
var statearr_33847_33876 = state_33831__$1;
(statearr_33847_33876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (14))){
var inst_33824 = (state_33831[(2)]);
var inst_33825 = cljs.core.async.close_BANG_.call(null,out);
var state_33831__$1 = (function (){var statearr_33849 = state_33831;
(statearr_33849[(13)] = inst_33824);

return statearr_33849;
})();
var statearr_33850_33877 = state_33831__$1;
(statearr_33850_33877[(2)] = inst_33825);

(statearr_33850_33877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (10))){
var inst_33815 = (state_33831[(2)]);
var state_33831__$1 = state_33831;
var statearr_33851_33878 = state_33831__$1;
(statearr_33851_33878[(2)] = inst_33815);

(statearr_33851_33878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (8))){
var inst_33804 = (state_33831[(11)]);
var inst_33795 = (state_33831[(8)]);
var tmp33848 = inst_33795;
var inst_33795__$1 = tmp33848;
var inst_33796 = inst_33804;
var state_33831__$1 = (function (){var statearr_33852 = state_33831;
(statearr_33852[(7)] = inst_33796);

(statearr_33852[(8)] = inst_33795__$1);

return statearr_33852;
})();
var statearr_33853_33879 = state_33831__$1;
(statearr_33853_33879[(2)] = null);

(statearr_33853_33879[(1)] = (2));


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
});})(c__31183__auto___33865,out))
;
return ((function (switch__31118__auto__,c__31183__auto___33865,out){
return (function() {
var cljs$core$async$state_machine__31119__auto__ = null;
var cljs$core$async$state_machine__31119__auto____0 = (function (){
var statearr_33857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33857[(0)] = cljs$core$async$state_machine__31119__auto__);

(statearr_33857[(1)] = (1));

return statearr_33857;
});
var cljs$core$async$state_machine__31119__auto____1 = (function (state_33831){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_33831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e33858){if((e33858 instanceof Object)){
var ex__31122__auto__ = e33858;
var statearr_33859_33880 = state_33831;
(statearr_33859_33880[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33881 = state_33831;
state_33831 = G__33881;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
cljs$core$async$state_machine__31119__auto__ = function(state_33831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31119__auto____1.call(this,state_33831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31119__auto____0;
cljs$core$async$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31119__auto____1;
return cljs$core$async$state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto___33865,out))
})();
var state__31185__auto__ = (function (){var statearr_33860 = f__31184__auto__.call(null);
(statearr_33860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto___33865);

return statearr_33860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto___33865,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33882 = [];
var len__26121__auto___33956 = arguments.length;
var i__26122__auto___33957 = (0);
while(true){
if((i__26122__auto___33957 < len__26121__auto___33956)){
args33882.push((arguments[i__26122__auto___33957]));

var G__33958 = (i__26122__auto___33957 + (1));
i__26122__auto___33957 = G__33958;
continue;
} else {
}
break;
}

var G__33884 = args33882.length;
switch (G__33884) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33882.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31183__auto___33960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto___33960,out){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto___33960,out){
return (function (state_33926){
var state_val_33927 = (state_33926[(1)]);
if((state_val_33927 === (7))){
var inst_33922 = (state_33926[(2)]);
var state_33926__$1 = state_33926;
var statearr_33928_33961 = state_33926__$1;
(statearr_33928_33961[(2)] = inst_33922);

(statearr_33928_33961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (1))){
var inst_33885 = [];
var inst_33886 = inst_33885;
var inst_33887 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33926__$1 = (function (){var statearr_33929 = state_33926;
(statearr_33929[(7)] = inst_33887);

(statearr_33929[(8)] = inst_33886);

return statearr_33929;
})();
var statearr_33930_33962 = state_33926__$1;
(statearr_33930_33962[(2)] = null);

(statearr_33930_33962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (4))){
var inst_33890 = (state_33926[(9)]);
var inst_33890__$1 = (state_33926[(2)]);
var inst_33891 = (inst_33890__$1 == null);
var inst_33892 = cljs.core.not.call(null,inst_33891);
var state_33926__$1 = (function (){var statearr_33931 = state_33926;
(statearr_33931[(9)] = inst_33890__$1);

return statearr_33931;
})();
if(inst_33892){
var statearr_33932_33963 = state_33926__$1;
(statearr_33932_33963[(1)] = (5));

} else {
var statearr_33933_33964 = state_33926__$1;
(statearr_33933_33964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (15))){
var inst_33916 = (state_33926[(2)]);
var state_33926__$1 = state_33926;
var statearr_33934_33965 = state_33926__$1;
(statearr_33934_33965[(2)] = inst_33916);

(statearr_33934_33965[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (13))){
var state_33926__$1 = state_33926;
var statearr_33935_33966 = state_33926__$1;
(statearr_33935_33966[(2)] = null);

(statearr_33935_33966[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (6))){
var inst_33886 = (state_33926[(8)]);
var inst_33911 = inst_33886.length;
var inst_33912 = (inst_33911 > (0));
var state_33926__$1 = state_33926;
if(cljs.core.truth_(inst_33912)){
var statearr_33936_33967 = state_33926__$1;
(statearr_33936_33967[(1)] = (12));

} else {
var statearr_33937_33968 = state_33926__$1;
(statearr_33937_33968[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (3))){
var inst_33924 = (state_33926[(2)]);
var state_33926__$1 = state_33926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33926__$1,inst_33924);
} else {
if((state_val_33927 === (12))){
var inst_33886 = (state_33926[(8)]);
var inst_33914 = cljs.core.vec.call(null,inst_33886);
var state_33926__$1 = state_33926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33926__$1,(15),out,inst_33914);
} else {
if((state_val_33927 === (2))){
var state_33926__$1 = state_33926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33926__$1,(4),ch);
} else {
if((state_val_33927 === (11))){
var inst_33890 = (state_33926[(9)]);
var inst_33894 = (state_33926[(10)]);
var inst_33904 = (state_33926[(2)]);
var inst_33905 = [];
var inst_33906 = inst_33905.push(inst_33890);
var inst_33886 = inst_33905;
var inst_33887 = inst_33894;
var state_33926__$1 = (function (){var statearr_33938 = state_33926;
(statearr_33938[(7)] = inst_33887);

(statearr_33938[(8)] = inst_33886);

(statearr_33938[(11)] = inst_33904);

(statearr_33938[(12)] = inst_33906);

return statearr_33938;
})();
var statearr_33939_33969 = state_33926__$1;
(statearr_33939_33969[(2)] = null);

(statearr_33939_33969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (9))){
var inst_33886 = (state_33926[(8)]);
var inst_33902 = cljs.core.vec.call(null,inst_33886);
var state_33926__$1 = state_33926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33926__$1,(11),out,inst_33902);
} else {
if((state_val_33927 === (5))){
var inst_33890 = (state_33926[(9)]);
var inst_33887 = (state_33926[(7)]);
var inst_33894 = (state_33926[(10)]);
var inst_33894__$1 = f.call(null,inst_33890);
var inst_33895 = cljs.core._EQ_.call(null,inst_33894__$1,inst_33887);
var inst_33896 = cljs.core.keyword_identical_QMARK_.call(null,inst_33887,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33897 = (inst_33895) || (inst_33896);
var state_33926__$1 = (function (){var statearr_33940 = state_33926;
(statearr_33940[(10)] = inst_33894__$1);

return statearr_33940;
})();
if(cljs.core.truth_(inst_33897)){
var statearr_33941_33970 = state_33926__$1;
(statearr_33941_33970[(1)] = (8));

} else {
var statearr_33942_33971 = state_33926__$1;
(statearr_33942_33971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (14))){
var inst_33919 = (state_33926[(2)]);
var inst_33920 = cljs.core.async.close_BANG_.call(null,out);
var state_33926__$1 = (function (){var statearr_33944 = state_33926;
(statearr_33944[(13)] = inst_33919);

return statearr_33944;
})();
var statearr_33945_33972 = state_33926__$1;
(statearr_33945_33972[(2)] = inst_33920);

(statearr_33945_33972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (10))){
var inst_33909 = (state_33926[(2)]);
var state_33926__$1 = state_33926;
var statearr_33946_33973 = state_33926__$1;
(statearr_33946_33973[(2)] = inst_33909);

(statearr_33946_33973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (8))){
var inst_33890 = (state_33926[(9)]);
var inst_33886 = (state_33926[(8)]);
var inst_33894 = (state_33926[(10)]);
var inst_33899 = inst_33886.push(inst_33890);
var tmp33943 = inst_33886;
var inst_33886__$1 = tmp33943;
var inst_33887 = inst_33894;
var state_33926__$1 = (function (){var statearr_33947 = state_33926;
(statearr_33947[(7)] = inst_33887);

(statearr_33947[(14)] = inst_33899);

(statearr_33947[(8)] = inst_33886__$1);

return statearr_33947;
})();
var statearr_33948_33974 = state_33926__$1;
(statearr_33948_33974[(2)] = null);

(statearr_33948_33974[(1)] = (2));


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
});})(c__31183__auto___33960,out))
;
return ((function (switch__31118__auto__,c__31183__auto___33960,out){
return (function() {
var cljs$core$async$state_machine__31119__auto__ = null;
var cljs$core$async$state_machine__31119__auto____0 = (function (){
var statearr_33952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33952[(0)] = cljs$core$async$state_machine__31119__auto__);

(statearr_33952[(1)] = (1));

return statearr_33952;
});
var cljs$core$async$state_machine__31119__auto____1 = (function (state_33926){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_33926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e33953){if((e33953 instanceof Object)){
var ex__31122__auto__ = e33953;
var statearr_33954_33975 = state_33926;
(statearr_33954_33975[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33976 = state_33926;
state_33926 = G__33976;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
cljs$core$async$state_machine__31119__auto__ = function(state_33926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31119__auto____1.call(this,state_33926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31119__auto____0;
cljs$core$async$state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31119__auto____1;
return cljs$core$async$state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto___33960,out))
})();
var state__31185__auto__ = (function (){var statearr_33955 = f__31184__auto__.call(null);
(statearr_33955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto___33960);

return statearr_33955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto___33960,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1484366710777
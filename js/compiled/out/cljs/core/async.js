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
var args54258 = [];
var len__26121__auto___54264 = arguments.length;
var i__26122__auto___54265 = (0);
while(true){
if((i__26122__auto___54265 < len__26121__auto___54264)){
args54258.push((arguments[i__26122__auto___54265]));

var G__54266 = (i__26122__auto___54265 + (1));
i__26122__auto___54265 = G__54266;
continue;
} else {
}
break;
}

var G__54260 = args54258.length;
switch (G__54260) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54258.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async54261 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54261 = (function (f,blockable,meta54262){
this.f = f;
this.blockable = blockable;
this.meta54262 = meta54262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54263,meta54262__$1){
var self__ = this;
var _54263__$1 = this;
return (new cljs.core.async.t_cljs$core$async54261(self__.f,self__.blockable,meta54262__$1));
});

cljs.core.async.t_cljs$core$async54261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54263){
var self__ = this;
var _54263__$1 = this;
return self__.meta54262;
});

cljs.core.async.t_cljs$core$async54261.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async54261.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async54261.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async54261.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async54261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta54262","meta54262",27836108,null)], null);
});

cljs.core.async.t_cljs$core$async54261.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54261";

cljs.core.async.t_cljs$core$async54261.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async54261");
});

cljs.core.async.__GT_t_cljs$core$async54261 = (function cljs$core$async$__GT_t_cljs$core$async54261(f__$1,blockable__$1,meta54262){
return (new cljs.core.async.t_cljs$core$async54261(f__$1,blockable__$1,meta54262));
});

}

return (new cljs.core.async.t_cljs$core$async54261(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args54270 = [];
var len__26121__auto___54273 = arguments.length;
var i__26122__auto___54274 = (0);
while(true){
if((i__26122__auto___54274 < len__26121__auto___54273)){
args54270.push((arguments[i__26122__auto___54274]));

var G__54275 = (i__26122__auto___54274 + (1));
i__26122__auto___54274 = G__54275;
continue;
} else {
}
break;
}

var G__54272 = args54270.length;
switch (G__54272) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54270.length)].join('')));

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
var args54277 = [];
var len__26121__auto___54280 = arguments.length;
var i__26122__auto___54281 = (0);
while(true){
if((i__26122__auto___54281 < len__26121__auto___54280)){
args54277.push((arguments[i__26122__auto___54281]));

var G__54282 = (i__26122__auto___54281 + (1));
i__26122__auto___54281 = G__54282;
continue;
} else {
}
break;
}

var G__54279 = args54277.length;
switch (G__54279) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54277.length)].join('')));

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
var args54284 = [];
var len__26121__auto___54287 = arguments.length;
var i__26122__auto___54288 = (0);
while(true){
if((i__26122__auto___54288 < len__26121__auto___54287)){
args54284.push((arguments[i__26122__auto___54288]));

var G__54289 = (i__26122__auto___54288 + (1));
i__26122__auto___54288 = G__54289;
continue;
} else {
}
break;
}

var G__54286 = args54284.length;
switch (G__54286) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54284.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_54291 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_54291);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_54291,ret){
return (function (){
return fn1.call(null,val_54291);
});})(val_54291,ret))
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
var args54292 = [];
var len__26121__auto___54295 = arguments.length;
var i__26122__auto___54296 = (0);
while(true){
if((i__26122__auto___54296 < len__26121__auto___54295)){
args54292.push((arguments[i__26122__auto___54296]));

var G__54297 = (i__26122__auto___54296 + (1));
i__26122__auto___54296 = G__54297;
continue;
} else {
}
break;
}

var G__54294 = args54292.length;
switch (G__54294) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54292.length)].join('')));

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
var n__25961__auto___54299 = n;
var x_54300 = (0);
while(true){
if((x_54300 < n__25961__auto___54299)){
(a[x_54300] = (0));

var G__54301 = (x_54300 + (1));
x_54300 = G__54301;
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

var G__54302 = (i + (1));
i = G__54302;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async54306 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54306 = (function (alt_flag,flag,meta54307){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta54307 = meta54307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_54308,meta54307__$1){
var self__ = this;
var _54308__$1 = this;
return (new cljs.core.async.t_cljs$core$async54306(self__.alt_flag,self__.flag,meta54307__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async54306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_54308){
var self__ = this;
var _54308__$1 = this;
return self__.meta54307;
});})(flag))
;

cljs.core.async.t_cljs$core$async54306.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async54306.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async54306.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async54306.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async54306.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta54307","meta54307",408632554,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async54306.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54306";

cljs.core.async.t_cljs$core$async54306.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async54306");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async54306 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async54306(alt_flag__$1,flag__$1,meta54307){
return (new cljs.core.async.t_cljs$core$async54306(alt_flag__$1,flag__$1,meta54307));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async54306(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async54312 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54312 = (function (alt_handler,flag,cb,meta54313){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta54313 = meta54313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54314,meta54313__$1){
var self__ = this;
var _54314__$1 = this;
return (new cljs.core.async.t_cljs$core$async54312(self__.alt_handler,self__.flag,self__.cb,meta54313__$1));
});

cljs.core.async.t_cljs$core$async54312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54314){
var self__ = this;
var _54314__$1 = this;
return self__.meta54313;
});

cljs.core.async.t_cljs$core$async54312.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async54312.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async54312.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async54312.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async54312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta54313","meta54313",-1269878965,null)], null);
});

cljs.core.async.t_cljs$core$async54312.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54312";

cljs.core.async.t_cljs$core$async54312.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async54312");
});

cljs.core.async.__GT_t_cljs$core$async54312 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async54312(alt_handler__$1,flag__$1,cb__$1,meta54313){
return (new cljs.core.async.t_cljs$core$async54312(alt_handler__$1,flag__$1,cb__$1,meta54313));
});

}

return (new cljs.core.async.t_cljs$core$async54312(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__54315_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54315_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__54316_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54316_SHARP_,port], null));
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
var G__54317 = (i + (1));
i = G__54317;
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
var len__26121__auto___54323 = arguments.length;
var i__26122__auto___54324 = (0);
while(true){
if((i__26122__auto___54324 < len__26121__auto___54323)){
args__26128__auto__.push((arguments[i__26122__auto___54324]));

var G__54325 = (i__26122__auto___54324 + (1));
i__26122__auto___54324 = G__54325;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__54320){
var map__54321 = p__54320;
var map__54321__$1 = ((((!((map__54321 == null)))?((((map__54321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54321):map__54321);
var opts = map__54321__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq54318){
var G__54319 = cljs.core.first.call(null,seq54318);
var seq54318__$1 = cljs.core.next.call(null,seq54318);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__54319,seq54318__$1);
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
var args54326 = [];
var len__26121__auto___54376 = arguments.length;
var i__26122__auto___54377 = (0);
while(true){
if((i__26122__auto___54377 < len__26121__auto___54376)){
args54326.push((arguments[i__26122__auto___54377]));

var G__54378 = (i__26122__auto___54377 + (1));
i__26122__auto___54377 = G__54378;
continue;
} else {
}
break;
}

var G__54328 = args54326.length;
switch (G__54328) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54326.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33352__auto___54380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___54380){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___54380){
return (function (state_54352){
var state_val_54353 = (state_54352[(1)]);
if((state_val_54353 === (7))){
var inst_54348 = (state_54352[(2)]);
var state_54352__$1 = state_54352;
var statearr_54354_54381 = state_54352__$1;
(statearr_54354_54381[(2)] = inst_54348);

(statearr_54354_54381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54353 === (1))){
var state_54352__$1 = state_54352;
var statearr_54355_54382 = state_54352__$1;
(statearr_54355_54382[(2)] = null);

(statearr_54355_54382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54353 === (4))){
var inst_54331 = (state_54352[(7)]);
var inst_54331__$1 = (state_54352[(2)]);
var inst_54332 = (inst_54331__$1 == null);
var state_54352__$1 = (function (){var statearr_54356 = state_54352;
(statearr_54356[(7)] = inst_54331__$1);

return statearr_54356;
})();
if(cljs.core.truth_(inst_54332)){
var statearr_54357_54383 = state_54352__$1;
(statearr_54357_54383[(1)] = (5));

} else {
var statearr_54358_54384 = state_54352__$1;
(statearr_54358_54384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54353 === (13))){
var state_54352__$1 = state_54352;
var statearr_54359_54385 = state_54352__$1;
(statearr_54359_54385[(2)] = null);

(statearr_54359_54385[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54353 === (6))){
var inst_54331 = (state_54352[(7)]);
var state_54352__$1 = state_54352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54352__$1,(11),to,inst_54331);
} else {
if((state_val_54353 === (3))){
var inst_54350 = (state_54352[(2)]);
var state_54352__$1 = state_54352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54352__$1,inst_54350);
} else {
if((state_val_54353 === (12))){
var state_54352__$1 = state_54352;
var statearr_54360_54386 = state_54352__$1;
(statearr_54360_54386[(2)] = null);

(statearr_54360_54386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54353 === (2))){
var state_54352__$1 = state_54352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54352__$1,(4),from);
} else {
if((state_val_54353 === (11))){
var inst_54341 = (state_54352[(2)]);
var state_54352__$1 = state_54352;
if(cljs.core.truth_(inst_54341)){
var statearr_54361_54387 = state_54352__$1;
(statearr_54361_54387[(1)] = (12));

} else {
var statearr_54362_54388 = state_54352__$1;
(statearr_54362_54388[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54353 === (9))){
var state_54352__$1 = state_54352;
var statearr_54363_54389 = state_54352__$1;
(statearr_54363_54389[(2)] = null);

(statearr_54363_54389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54353 === (5))){
var state_54352__$1 = state_54352;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54364_54390 = state_54352__$1;
(statearr_54364_54390[(1)] = (8));

} else {
var statearr_54365_54391 = state_54352__$1;
(statearr_54365_54391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54353 === (14))){
var inst_54346 = (state_54352[(2)]);
var state_54352__$1 = state_54352;
var statearr_54366_54392 = state_54352__$1;
(statearr_54366_54392[(2)] = inst_54346);

(statearr_54366_54392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54353 === (10))){
var inst_54338 = (state_54352[(2)]);
var state_54352__$1 = state_54352;
var statearr_54367_54393 = state_54352__$1;
(statearr_54367_54393[(2)] = inst_54338);

(statearr_54367_54393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54353 === (8))){
var inst_54335 = cljs.core.async.close_BANG_.call(null,to);
var state_54352__$1 = state_54352;
var statearr_54368_54394 = state_54352__$1;
(statearr_54368_54394[(2)] = inst_54335);

(statearr_54368_54394[(1)] = (10));


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
});})(c__33352__auto___54380))
;
return ((function (switch__33287__auto__,c__33352__auto___54380){
return (function() {
var cljs$core$async$state_machine__33288__auto__ = null;
var cljs$core$async$state_machine__33288__auto____0 = (function (){
var statearr_54372 = [null,null,null,null,null,null,null,null];
(statearr_54372[(0)] = cljs$core$async$state_machine__33288__auto__);

(statearr_54372[(1)] = (1));

return statearr_54372;
});
var cljs$core$async$state_machine__33288__auto____1 = (function (state_54352){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_54352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e54373){if((e54373 instanceof Object)){
var ex__33291__auto__ = e54373;
var statearr_54374_54395 = state_54352;
(statearr_54374_54395[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54396 = state_54352;
state_54352 = G__54396;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$state_machine__33288__auto__ = function(state_54352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33288__auto____1.call(this,state_54352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33288__auto____0;
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33288__auto____1;
return cljs$core$async$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___54380))
})();
var state__33354__auto__ = (function (){var statearr_54375 = f__33353__auto__.call(null);
(statearr_54375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___54380);

return statearr_54375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___54380))
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
return (function (p__54584){
var vec__54585 = p__54584;
var v = cljs.core.nth.call(null,vec__54585,(0),null);
var p = cljs.core.nth.call(null,vec__54585,(1),null);
var job = vec__54585;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33352__auto___54771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___54771,res,vec__54585,v,p,job,jobs,results){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___54771,res,vec__54585,v,p,job,jobs,results){
return (function (state_54592){
var state_val_54593 = (state_54592[(1)]);
if((state_val_54593 === (1))){
var state_54592__$1 = state_54592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54592__$1,(2),res,v);
} else {
if((state_val_54593 === (2))){
var inst_54589 = (state_54592[(2)]);
var inst_54590 = cljs.core.async.close_BANG_.call(null,res);
var state_54592__$1 = (function (){var statearr_54594 = state_54592;
(statearr_54594[(7)] = inst_54589);

return statearr_54594;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54592__$1,inst_54590);
} else {
return null;
}
}
});})(c__33352__auto___54771,res,vec__54585,v,p,job,jobs,results))
;
return ((function (switch__33287__auto__,c__33352__auto___54771,res,vec__54585,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0 = (function (){
var statearr_54598 = [null,null,null,null,null,null,null,null];
(statearr_54598[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__);

(statearr_54598[(1)] = (1));

return statearr_54598;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1 = (function (state_54592){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_54592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e54599){if((e54599 instanceof Object)){
var ex__33291__auto__ = e54599;
var statearr_54600_54772 = state_54592;
(statearr_54600_54772[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54773 = state_54592;
state_54592 = G__54773;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__ = function(state_54592){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1.call(this,state_54592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___54771,res,vec__54585,v,p,job,jobs,results))
})();
var state__33354__auto__ = (function (){var statearr_54601 = f__33353__auto__.call(null);
(statearr_54601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___54771);

return statearr_54601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___54771,res,vec__54585,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__54602){
var vec__54603 = p__54602;
var v = cljs.core.nth.call(null,vec__54603,(0),null);
var p = cljs.core.nth.call(null,vec__54603,(1),null);
var job = vec__54603;
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
var n__25961__auto___54774 = n;
var __54775 = (0);
while(true){
if((__54775 < n__25961__auto___54774)){
var G__54606_54776 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__54606_54776) {
case "compute":
var c__33352__auto___54778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__54775,c__33352__auto___54778,G__54606_54776,n__25961__auto___54774,jobs,results,process,async){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (__54775,c__33352__auto___54778,G__54606_54776,n__25961__auto___54774,jobs,results,process,async){
return (function (state_54619){
var state_val_54620 = (state_54619[(1)]);
if((state_val_54620 === (1))){
var state_54619__$1 = state_54619;
var statearr_54621_54779 = state_54619__$1;
(statearr_54621_54779[(2)] = null);

(statearr_54621_54779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54620 === (2))){
var state_54619__$1 = state_54619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54619__$1,(4),jobs);
} else {
if((state_val_54620 === (3))){
var inst_54617 = (state_54619[(2)]);
var state_54619__$1 = state_54619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54619__$1,inst_54617);
} else {
if((state_val_54620 === (4))){
var inst_54609 = (state_54619[(2)]);
var inst_54610 = process.call(null,inst_54609);
var state_54619__$1 = state_54619;
if(cljs.core.truth_(inst_54610)){
var statearr_54622_54780 = state_54619__$1;
(statearr_54622_54780[(1)] = (5));

} else {
var statearr_54623_54781 = state_54619__$1;
(statearr_54623_54781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54620 === (5))){
var state_54619__$1 = state_54619;
var statearr_54624_54782 = state_54619__$1;
(statearr_54624_54782[(2)] = null);

(statearr_54624_54782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54620 === (6))){
var state_54619__$1 = state_54619;
var statearr_54625_54783 = state_54619__$1;
(statearr_54625_54783[(2)] = null);

(statearr_54625_54783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54620 === (7))){
var inst_54615 = (state_54619[(2)]);
var state_54619__$1 = state_54619;
var statearr_54626_54784 = state_54619__$1;
(statearr_54626_54784[(2)] = inst_54615);

(statearr_54626_54784[(1)] = (3));


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
});})(__54775,c__33352__auto___54778,G__54606_54776,n__25961__auto___54774,jobs,results,process,async))
;
return ((function (__54775,switch__33287__auto__,c__33352__auto___54778,G__54606_54776,n__25961__auto___54774,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0 = (function (){
var statearr_54630 = [null,null,null,null,null,null,null];
(statearr_54630[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__);

(statearr_54630[(1)] = (1));

return statearr_54630;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1 = (function (state_54619){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_54619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e54631){if((e54631 instanceof Object)){
var ex__33291__auto__ = e54631;
var statearr_54632_54785 = state_54619;
(statearr_54632_54785[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54786 = state_54619;
state_54619 = G__54786;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__ = function(state_54619){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1.call(this,state_54619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__;
})()
;})(__54775,switch__33287__auto__,c__33352__auto___54778,G__54606_54776,n__25961__auto___54774,jobs,results,process,async))
})();
var state__33354__auto__ = (function (){var statearr_54633 = f__33353__auto__.call(null);
(statearr_54633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___54778);

return statearr_54633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(__54775,c__33352__auto___54778,G__54606_54776,n__25961__auto___54774,jobs,results,process,async))
);


break;
case "async":
var c__33352__auto___54787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__54775,c__33352__auto___54787,G__54606_54776,n__25961__auto___54774,jobs,results,process,async){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (__54775,c__33352__auto___54787,G__54606_54776,n__25961__auto___54774,jobs,results,process,async){
return (function (state_54646){
var state_val_54647 = (state_54646[(1)]);
if((state_val_54647 === (1))){
var state_54646__$1 = state_54646;
var statearr_54648_54788 = state_54646__$1;
(statearr_54648_54788[(2)] = null);

(statearr_54648_54788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54647 === (2))){
var state_54646__$1 = state_54646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54646__$1,(4),jobs);
} else {
if((state_val_54647 === (3))){
var inst_54644 = (state_54646[(2)]);
var state_54646__$1 = state_54646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54646__$1,inst_54644);
} else {
if((state_val_54647 === (4))){
var inst_54636 = (state_54646[(2)]);
var inst_54637 = async.call(null,inst_54636);
var state_54646__$1 = state_54646;
if(cljs.core.truth_(inst_54637)){
var statearr_54649_54789 = state_54646__$1;
(statearr_54649_54789[(1)] = (5));

} else {
var statearr_54650_54790 = state_54646__$1;
(statearr_54650_54790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54647 === (5))){
var state_54646__$1 = state_54646;
var statearr_54651_54791 = state_54646__$1;
(statearr_54651_54791[(2)] = null);

(statearr_54651_54791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54647 === (6))){
var state_54646__$1 = state_54646;
var statearr_54652_54792 = state_54646__$1;
(statearr_54652_54792[(2)] = null);

(statearr_54652_54792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54647 === (7))){
var inst_54642 = (state_54646[(2)]);
var state_54646__$1 = state_54646;
var statearr_54653_54793 = state_54646__$1;
(statearr_54653_54793[(2)] = inst_54642);

(statearr_54653_54793[(1)] = (3));


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
});})(__54775,c__33352__auto___54787,G__54606_54776,n__25961__auto___54774,jobs,results,process,async))
;
return ((function (__54775,switch__33287__auto__,c__33352__auto___54787,G__54606_54776,n__25961__auto___54774,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0 = (function (){
var statearr_54657 = [null,null,null,null,null,null,null];
(statearr_54657[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__);

(statearr_54657[(1)] = (1));

return statearr_54657;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1 = (function (state_54646){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_54646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e54658){if((e54658 instanceof Object)){
var ex__33291__auto__ = e54658;
var statearr_54659_54794 = state_54646;
(statearr_54659_54794[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54795 = state_54646;
state_54646 = G__54795;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__ = function(state_54646){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1.call(this,state_54646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__;
})()
;})(__54775,switch__33287__auto__,c__33352__auto___54787,G__54606_54776,n__25961__auto___54774,jobs,results,process,async))
})();
var state__33354__auto__ = (function (){var statearr_54660 = f__33353__auto__.call(null);
(statearr_54660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___54787);

return statearr_54660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(__54775,c__33352__auto___54787,G__54606_54776,n__25961__auto___54774,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__54796 = (__54775 + (1));
__54775 = G__54796;
continue;
} else {
}
break;
}

var c__33352__auto___54797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___54797,jobs,results,process,async){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___54797,jobs,results,process,async){
return (function (state_54682){
var state_val_54683 = (state_54682[(1)]);
if((state_val_54683 === (1))){
var state_54682__$1 = state_54682;
var statearr_54684_54798 = state_54682__$1;
(statearr_54684_54798[(2)] = null);

(statearr_54684_54798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54683 === (2))){
var state_54682__$1 = state_54682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54682__$1,(4),from);
} else {
if((state_val_54683 === (3))){
var inst_54680 = (state_54682[(2)]);
var state_54682__$1 = state_54682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54682__$1,inst_54680);
} else {
if((state_val_54683 === (4))){
var inst_54663 = (state_54682[(7)]);
var inst_54663__$1 = (state_54682[(2)]);
var inst_54664 = (inst_54663__$1 == null);
var state_54682__$1 = (function (){var statearr_54685 = state_54682;
(statearr_54685[(7)] = inst_54663__$1);

return statearr_54685;
})();
if(cljs.core.truth_(inst_54664)){
var statearr_54686_54799 = state_54682__$1;
(statearr_54686_54799[(1)] = (5));

} else {
var statearr_54687_54800 = state_54682__$1;
(statearr_54687_54800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54683 === (5))){
var inst_54666 = cljs.core.async.close_BANG_.call(null,jobs);
var state_54682__$1 = state_54682;
var statearr_54688_54801 = state_54682__$1;
(statearr_54688_54801[(2)] = inst_54666);

(statearr_54688_54801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54683 === (6))){
var inst_54668 = (state_54682[(8)]);
var inst_54663 = (state_54682[(7)]);
var inst_54668__$1 = cljs.core.async.chan.call(null,(1));
var inst_54669 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54670 = [inst_54663,inst_54668__$1];
var inst_54671 = (new cljs.core.PersistentVector(null,2,(5),inst_54669,inst_54670,null));
var state_54682__$1 = (function (){var statearr_54689 = state_54682;
(statearr_54689[(8)] = inst_54668__$1);

return statearr_54689;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54682__$1,(8),jobs,inst_54671);
} else {
if((state_val_54683 === (7))){
var inst_54678 = (state_54682[(2)]);
var state_54682__$1 = state_54682;
var statearr_54690_54802 = state_54682__$1;
(statearr_54690_54802[(2)] = inst_54678);

(statearr_54690_54802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54683 === (8))){
var inst_54668 = (state_54682[(8)]);
var inst_54673 = (state_54682[(2)]);
var state_54682__$1 = (function (){var statearr_54691 = state_54682;
(statearr_54691[(9)] = inst_54673);

return statearr_54691;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54682__$1,(9),results,inst_54668);
} else {
if((state_val_54683 === (9))){
var inst_54675 = (state_54682[(2)]);
var state_54682__$1 = (function (){var statearr_54692 = state_54682;
(statearr_54692[(10)] = inst_54675);

return statearr_54692;
})();
var statearr_54693_54803 = state_54682__$1;
(statearr_54693_54803[(2)] = null);

(statearr_54693_54803[(1)] = (2));


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
});})(c__33352__auto___54797,jobs,results,process,async))
;
return ((function (switch__33287__auto__,c__33352__auto___54797,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0 = (function (){
var statearr_54697 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54697[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__);

(statearr_54697[(1)] = (1));

return statearr_54697;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1 = (function (state_54682){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_54682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e54698){if((e54698 instanceof Object)){
var ex__33291__auto__ = e54698;
var statearr_54699_54804 = state_54682;
(statearr_54699_54804[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54805 = state_54682;
state_54682 = G__54805;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__ = function(state_54682){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1.call(this,state_54682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___54797,jobs,results,process,async))
})();
var state__33354__auto__ = (function (){var statearr_54700 = f__33353__auto__.call(null);
(statearr_54700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___54797);

return statearr_54700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___54797,jobs,results,process,async))
);


var c__33352__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto__,jobs,results,process,async){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto__,jobs,results,process,async){
return (function (state_54738){
var state_val_54739 = (state_54738[(1)]);
if((state_val_54739 === (7))){
var inst_54734 = (state_54738[(2)]);
var state_54738__$1 = state_54738;
var statearr_54740_54806 = state_54738__$1;
(statearr_54740_54806[(2)] = inst_54734);

(statearr_54740_54806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (20))){
var state_54738__$1 = state_54738;
var statearr_54741_54807 = state_54738__$1;
(statearr_54741_54807[(2)] = null);

(statearr_54741_54807[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (1))){
var state_54738__$1 = state_54738;
var statearr_54742_54808 = state_54738__$1;
(statearr_54742_54808[(2)] = null);

(statearr_54742_54808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (4))){
var inst_54703 = (state_54738[(7)]);
var inst_54703__$1 = (state_54738[(2)]);
var inst_54704 = (inst_54703__$1 == null);
var state_54738__$1 = (function (){var statearr_54743 = state_54738;
(statearr_54743[(7)] = inst_54703__$1);

return statearr_54743;
})();
if(cljs.core.truth_(inst_54704)){
var statearr_54744_54809 = state_54738__$1;
(statearr_54744_54809[(1)] = (5));

} else {
var statearr_54745_54810 = state_54738__$1;
(statearr_54745_54810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (15))){
var inst_54716 = (state_54738[(8)]);
var state_54738__$1 = state_54738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54738__$1,(18),to,inst_54716);
} else {
if((state_val_54739 === (21))){
var inst_54729 = (state_54738[(2)]);
var state_54738__$1 = state_54738;
var statearr_54746_54811 = state_54738__$1;
(statearr_54746_54811[(2)] = inst_54729);

(statearr_54746_54811[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (13))){
var inst_54731 = (state_54738[(2)]);
var state_54738__$1 = (function (){var statearr_54747 = state_54738;
(statearr_54747[(9)] = inst_54731);

return statearr_54747;
})();
var statearr_54748_54812 = state_54738__$1;
(statearr_54748_54812[(2)] = null);

(statearr_54748_54812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (6))){
var inst_54703 = (state_54738[(7)]);
var state_54738__$1 = state_54738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54738__$1,(11),inst_54703);
} else {
if((state_val_54739 === (17))){
var inst_54724 = (state_54738[(2)]);
var state_54738__$1 = state_54738;
if(cljs.core.truth_(inst_54724)){
var statearr_54749_54813 = state_54738__$1;
(statearr_54749_54813[(1)] = (19));

} else {
var statearr_54750_54814 = state_54738__$1;
(statearr_54750_54814[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (3))){
var inst_54736 = (state_54738[(2)]);
var state_54738__$1 = state_54738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54738__$1,inst_54736);
} else {
if((state_val_54739 === (12))){
var inst_54713 = (state_54738[(10)]);
var state_54738__$1 = state_54738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54738__$1,(14),inst_54713);
} else {
if((state_val_54739 === (2))){
var state_54738__$1 = state_54738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54738__$1,(4),results);
} else {
if((state_val_54739 === (19))){
var state_54738__$1 = state_54738;
var statearr_54751_54815 = state_54738__$1;
(statearr_54751_54815[(2)] = null);

(statearr_54751_54815[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (11))){
var inst_54713 = (state_54738[(2)]);
var state_54738__$1 = (function (){var statearr_54752 = state_54738;
(statearr_54752[(10)] = inst_54713);

return statearr_54752;
})();
var statearr_54753_54816 = state_54738__$1;
(statearr_54753_54816[(2)] = null);

(statearr_54753_54816[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (9))){
var state_54738__$1 = state_54738;
var statearr_54754_54817 = state_54738__$1;
(statearr_54754_54817[(2)] = null);

(statearr_54754_54817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (5))){
var state_54738__$1 = state_54738;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54755_54818 = state_54738__$1;
(statearr_54755_54818[(1)] = (8));

} else {
var statearr_54756_54819 = state_54738__$1;
(statearr_54756_54819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (14))){
var inst_54716 = (state_54738[(8)]);
var inst_54718 = (state_54738[(11)]);
var inst_54716__$1 = (state_54738[(2)]);
var inst_54717 = (inst_54716__$1 == null);
var inst_54718__$1 = cljs.core.not.call(null,inst_54717);
var state_54738__$1 = (function (){var statearr_54757 = state_54738;
(statearr_54757[(8)] = inst_54716__$1);

(statearr_54757[(11)] = inst_54718__$1);

return statearr_54757;
})();
if(inst_54718__$1){
var statearr_54758_54820 = state_54738__$1;
(statearr_54758_54820[(1)] = (15));

} else {
var statearr_54759_54821 = state_54738__$1;
(statearr_54759_54821[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (16))){
var inst_54718 = (state_54738[(11)]);
var state_54738__$1 = state_54738;
var statearr_54760_54822 = state_54738__$1;
(statearr_54760_54822[(2)] = inst_54718);

(statearr_54760_54822[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (10))){
var inst_54710 = (state_54738[(2)]);
var state_54738__$1 = state_54738;
var statearr_54761_54823 = state_54738__$1;
(statearr_54761_54823[(2)] = inst_54710);

(statearr_54761_54823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (18))){
var inst_54721 = (state_54738[(2)]);
var state_54738__$1 = state_54738;
var statearr_54762_54824 = state_54738__$1;
(statearr_54762_54824[(2)] = inst_54721);

(statearr_54762_54824[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (8))){
var inst_54707 = cljs.core.async.close_BANG_.call(null,to);
var state_54738__$1 = state_54738;
var statearr_54763_54825 = state_54738__$1;
(statearr_54763_54825[(2)] = inst_54707);

(statearr_54763_54825[(1)] = (10));


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
var statearr_54767 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54767[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__);

(statearr_54767[(1)] = (1));

return statearr_54767;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1 = (function (state_54738){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_54738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e54768){if((e54768 instanceof Object)){
var ex__33291__auto__ = e54768;
var statearr_54769_54826 = state_54738;
(statearr_54769_54826[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54827 = state_54738;
state_54738 = G__54827;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__ = function(state_54738){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1.call(this,state_54738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33288__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__,jobs,results,process,async))
})();
var state__33354__auto__ = (function (){var statearr_54770 = f__33353__auto__.call(null);
(statearr_54770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_54770;
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
var args54828 = [];
var len__26121__auto___54831 = arguments.length;
var i__26122__auto___54832 = (0);
while(true){
if((i__26122__auto___54832 < len__26121__auto___54831)){
args54828.push((arguments[i__26122__auto___54832]));

var G__54833 = (i__26122__auto___54832 + (1));
i__26122__auto___54832 = G__54833;
continue;
} else {
}
break;
}

var G__54830 = args54828.length;
switch (G__54830) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54828.length)].join('')));

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
var args54835 = [];
var len__26121__auto___54838 = arguments.length;
var i__26122__auto___54839 = (0);
while(true){
if((i__26122__auto___54839 < len__26121__auto___54838)){
args54835.push((arguments[i__26122__auto___54839]));

var G__54840 = (i__26122__auto___54839 + (1));
i__26122__auto___54839 = G__54840;
continue;
} else {
}
break;
}

var G__54837 = args54835.length;
switch (G__54837) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54835.length)].join('')));

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
var args54842 = [];
var len__26121__auto___54895 = arguments.length;
var i__26122__auto___54896 = (0);
while(true){
if((i__26122__auto___54896 < len__26121__auto___54895)){
args54842.push((arguments[i__26122__auto___54896]));

var G__54897 = (i__26122__auto___54896 + (1));
i__26122__auto___54896 = G__54897;
continue;
} else {
}
break;
}

var G__54844 = args54842.length;
switch (G__54844) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54842.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33352__auto___54899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___54899,tc,fc){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___54899,tc,fc){
return (function (state_54870){
var state_val_54871 = (state_54870[(1)]);
if((state_val_54871 === (7))){
var inst_54866 = (state_54870[(2)]);
var state_54870__$1 = state_54870;
var statearr_54872_54900 = state_54870__$1;
(statearr_54872_54900[(2)] = inst_54866);

(statearr_54872_54900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54871 === (1))){
var state_54870__$1 = state_54870;
var statearr_54873_54901 = state_54870__$1;
(statearr_54873_54901[(2)] = null);

(statearr_54873_54901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54871 === (4))){
var inst_54847 = (state_54870[(7)]);
var inst_54847__$1 = (state_54870[(2)]);
var inst_54848 = (inst_54847__$1 == null);
var state_54870__$1 = (function (){var statearr_54874 = state_54870;
(statearr_54874[(7)] = inst_54847__$1);

return statearr_54874;
})();
if(cljs.core.truth_(inst_54848)){
var statearr_54875_54902 = state_54870__$1;
(statearr_54875_54902[(1)] = (5));

} else {
var statearr_54876_54903 = state_54870__$1;
(statearr_54876_54903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54871 === (13))){
var state_54870__$1 = state_54870;
var statearr_54877_54904 = state_54870__$1;
(statearr_54877_54904[(2)] = null);

(statearr_54877_54904[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54871 === (6))){
var inst_54847 = (state_54870[(7)]);
var inst_54853 = p.call(null,inst_54847);
var state_54870__$1 = state_54870;
if(cljs.core.truth_(inst_54853)){
var statearr_54878_54905 = state_54870__$1;
(statearr_54878_54905[(1)] = (9));

} else {
var statearr_54879_54906 = state_54870__$1;
(statearr_54879_54906[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54871 === (3))){
var inst_54868 = (state_54870[(2)]);
var state_54870__$1 = state_54870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54870__$1,inst_54868);
} else {
if((state_val_54871 === (12))){
var state_54870__$1 = state_54870;
var statearr_54880_54907 = state_54870__$1;
(statearr_54880_54907[(2)] = null);

(statearr_54880_54907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54871 === (2))){
var state_54870__$1 = state_54870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54870__$1,(4),ch);
} else {
if((state_val_54871 === (11))){
var inst_54847 = (state_54870[(7)]);
var inst_54857 = (state_54870[(2)]);
var state_54870__$1 = state_54870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54870__$1,(8),inst_54857,inst_54847);
} else {
if((state_val_54871 === (9))){
var state_54870__$1 = state_54870;
var statearr_54881_54908 = state_54870__$1;
(statearr_54881_54908[(2)] = tc);

(statearr_54881_54908[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54871 === (5))){
var inst_54850 = cljs.core.async.close_BANG_.call(null,tc);
var inst_54851 = cljs.core.async.close_BANG_.call(null,fc);
var state_54870__$1 = (function (){var statearr_54882 = state_54870;
(statearr_54882[(8)] = inst_54850);

return statearr_54882;
})();
var statearr_54883_54909 = state_54870__$1;
(statearr_54883_54909[(2)] = inst_54851);

(statearr_54883_54909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54871 === (14))){
var inst_54864 = (state_54870[(2)]);
var state_54870__$1 = state_54870;
var statearr_54884_54910 = state_54870__$1;
(statearr_54884_54910[(2)] = inst_54864);

(statearr_54884_54910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54871 === (10))){
var state_54870__$1 = state_54870;
var statearr_54885_54911 = state_54870__$1;
(statearr_54885_54911[(2)] = fc);

(statearr_54885_54911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54871 === (8))){
var inst_54859 = (state_54870[(2)]);
var state_54870__$1 = state_54870;
if(cljs.core.truth_(inst_54859)){
var statearr_54886_54912 = state_54870__$1;
(statearr_54886_54912[(1)] = (12));

} else {
var statearr_54887_54913 = state_54870__$1;
(statearr_54887_54913[(1)] = (13));

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
});})(c__33352__auto___54899,tc,fc))
;
return ((function (switch__33287__auto__,c__33352__auto___54899,tc,fc){
return (function() {
var cljs$core$async$state_machine__33288__auto__ = null;
var cljs$core$async$state_machine__33288__auto____0 = (function (){
var statearr_54891 = [null,null,null,null,null,null,null,null,null];
(statearr_54891[(0)] = cljs$core$async$state_machine__33288__auto__);

(statearr_54891[(1)] = (1));

return statearr_54891;
});
var cljs$core$async$state_machine__33288__auto____1 = (function (state_54870){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_54870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e54892){if((e54892 instanceof Object)){
var ex__33291__auto__ = e54892;
var statearr_54893_54914 = state_54870;
(statearr_54893_54914[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54915 = state_54870;
state_54870 = G__54915;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$state_machine__33288__auto__ = function(state_54870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33288__auto____1.call(this,state_54870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33288__auto____0;
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33288__auto____1;
return cljs$core$async$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___54899,tc,fc))
})();
var state__33354__auto__ = (function (){var statearr_54894 = f__33353__auto__.call(null);
(statearr_54894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___54899);

return statearr_54894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___54899,tc,fc))
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
return (function (state_54979){
var state_val_54980 = (state_54979[(1)]);
if((state_val_54980 === (7))){
var inst_54975 = (state_54979[(2)]);
var state_54979__$1 = state_54979;
var statearr_54981_55002 = state_54979__$1;
(statearr_54981_55002[(2)] = inst_54975);

(statearr_54981_55002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54980 === (1))){
var inst_54959 = init;
var state_54979__$1 = (function (){var statearr_54982 = state_54979;
(statearr_54982[(7)] = inst_54959);

return statearr_54982;
})();
var statearr_54983_55003 = state_54979__$1;
(statearr_54983_55003[(2)] = null);

(statearr_54983_55003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54980 === (4))){
var inst_54962 = (state_54979[(8)]);
var inst_54962__$1 = (state_54979[(2)]);
var inst_54963 = (inst_54962__$1 == null);
var state_54979__$1 = (function (){var statearr_54984 = state_54979;
(statearr_54984[(8)] = inst_54962__$1);

return statearr_54984;
})();
if(cljs.core.truth_(inst_54963)){
var statearr_54985_55004 = state_54979__$1;
(statearr_54985_55004[(1)] = (5));

} else {
var statearr_54986_55005 = state_54979__$1;
(statearr_54986_55005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54980 === (6))){
var inst_54962 = (state_54979[(8)]);
var inst_54959 = (state_54979[(7)]);
var inst_54966 = (state_54979[(9)]);
var inst_54966__$1 = f.call(null,inst_54959,inst_54962);
var inst_54967 = cljs.core.reduced_QMARK_.call(null,inst_54966__$1);
var state_54979__$1 = (function (){var statearr_54987 = state_54979;
(statearr_54987[(9)] = inst_54966__$1);

return statearr_54987;
})();
if(inst_54967){
var statearr_54988_55006 = state_54979__$1;
(statearr_54988_55006[(1)] = (8));

} else {
var statearr_54989_55007 = state_54979__$1;
(statearr_54989_55007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54980 === (3))){
var inst_54977 = (state_54979[(2)]);
var state_54979__$1 = state_54979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54979__$1,inst_54977);
} else {
if((state_val_54980 === (2))){
var state_54979__$1 = state_54979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54979__$1,(4),ch);
} else {
if((state_val_54980 === (9))){
var inst_54966 = (state_54979[(9)]);
var inst_54959 = inst_54966;
var state_54979__$1 = (function (){var statearr_54990 = state_54979;
(statearr_54990[(7)] = inst_54959);

return statearr_54990;
})();
var statearr_54991_55008 = state_54979__$1;
(statearr_54991_55008[(2)] = null);

(statearr_54991_55008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54980 === (5))){
var inst_54959 = (state_54979[(7)]);
var state_54979__$1 = state_54979;
var statearr_54992_55009 = state_54979__$1;
(statearr_54992_55009[(2)] = inst_54959);

(statearr_54992_55009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54980 === (10))){
var inst_54973 = (state_54979[(2)]);
var state_54979__$1 = state_54979;
var statearr_54993_55010 = state_54979__$1;
(statearr_54993_55010[(2)] = inst_54973);

(statearr_54993_55010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54980 === (8))){
var inst_54966 = (state_54979[(9)]);
var inst_54969 = cljs.core.deref.call(null,inst_54966);
var state_54979__$1 = state_54979;
var statearr_54994_55011 = state_54979__$1;
(statearr_54994_55011[(2)] = inst_54969);

(statearr_54994_55011[(1)] = (10));


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
var statearr_54998 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54998[(0)] = cljs$core$async$reduce_$_state_machine__33288__auto__);

(statearr_54998[(1)] = (1));

return statearr_54998;
});
var cljs$core$async$reduce_$_state_machine__33288__auto____1 = (function (state_54979){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_54979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e54999){if((e54999 instanceof Object)){
var ex__33291__auto__ = e54999;
var statearr_55000_55012 = state_54979;
(statearr_55000_55012[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55013 = state_54979;
state_54979 = G__55013;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33288__auto__ = function(state_54979){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33288__auto____1.call(this,state_54979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33288__auto____0;
cljs$core$async$reduce_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33288__auto____1;
return cljs$core$async$reduce_$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__))
})();
var state__33354__auto__ = (function (){var statearr_55001 = f__33353__auto__.call(null);
(statearr_55001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_55001;
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
var args55014 = [];
var len__26121__auto___55066 = arguments.length;
var i__26122__auto___55067 = (0);
while(true){
if((i__26122__auto___55067 < len__26121__auto___55066)){
args55014.push((arguments[i__26122__auto___55067]));

var G__55068 = (i__26122__auto___55067 + (1));
i__26122__auto___55067 = G__55068;
continue;
} else {
}
break;
}

var G__55016 = args55014.length;
switch (G__55016) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55014.length)].join('')));

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
return (function (state_55041){
var state_val_55042 = (state_55041[(1)]);
if((state_val_55042 === (7))){
var inst_55023 = (state_55041[(2)]);
var state_55041__$1 = state_55041;
var statearr_55043_55070 = state_55041__$1;
(statearr_55043_55070[(2)] = inst_55023);

(statearr_55043_55070[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55042 === (1))){
var inst_55017 = cljs.core.seq.call(null,coll);
var inst_55018 = inst_55017;
var state_55041__$1 = (function (){var statearr_55044 = state_55041;
(statearr_55044[(7)] = inst_55018);

return statearr_55044;
})();
var statearr_55045_55071 = state_55041__$1;
(statearr_55045_55071[(2)] = null);

(statearr_55045_55071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55042 === (4))){
var inst_55018 = (state_55041[(7)]);
var inst_55021 = cljs.core.first.call(null,inst_55018);
var state_55041__$1 = state_55041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55041__$1,(7),ch,inst_55021);
} else {
if((state_val_55042 === (13))){
var inst_55035 = (state_55041[(2)]);
var state_55041__$1 = state_55041;
var statearr_55046_55072 = state_55041__$1;
(statearr_55046_55072[(2)] = inst_55035);

(statearr_55046_55072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55042 === (6))){
var inst_55026 = (state_55041[(2)]);
var state_55041__$1 = state_55041;
if(cljs.core.truth_(inst_55026)){
var statearr_55047_55073 = state_55041__$1;
(statearr_55047_55073[(1)] = (8));

} else {
var statearr_55048_55074 = state_55041__$1;
(statearr_55048_55074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55042 === (3))){
var inst_55039 = (state_55041[(2)]);
var state_55041__$1 = state_55041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55041__$1,inst_55039);
} else {
if((state_val_55042 === (12))){
var state_55041__$1 = state_55041;
var statearr_55049_55075 = state_55041__$1;
(statearr_55049_55075[(2)] = null);

(statearr_55049_55075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55042 === (2))){
var inst_55018 = (state_55041[(7)]);
var state_55041__$1 = state_55041;
if(cljs.core.truth_(inst_55018)){
var statearr_55050_55076 = state_55041__$1;
(statearr_55050_55076[(1)] = (4));

} else {
var statearr_55051_55077 = state_55041__$1;
(statearr_55051_55077[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55042 === (11))){
var inst_55032 = cljs.core.async.close_BANG_.call(null,ch);
var state_55041__$1 = state_55041;
var statearr_55052_55078 = state_55041__$1;
(statearr_55052_55078[(2)] = inst_55032);

(statearr_55052_55078[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55042 === (9))){
var state_55041__$1 = state_55041;
if(cljs.core.truth_(close_QMARK_)){
var statearr_55053_55079 = state_55041__$1;
(statearr_55053_55079[(1)] = (11));

} else {
var statearr_55054_55080 = state_55041__$1;
(statearr_55054_55080[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55042 === (5))){
var inst_55018 = (state_55041[(7)]);
var state_55041__$1 = state_55041;
var statearr_55055_55081 = state_55041__$1;
(statearr_55055_55081[(2)] = inst_55018);

(statearr_55055_55081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55042 === (10))){
var inst_55037 = (state_55041[(2)]);
var state_55041__$1 = state_55041;
var statearr_55056_55082 = state_55041__$1;
(statearr_55056_55082[(2)] = inst_55037);

(statearr_55056_55082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55042 === (8))){
var inst_55018 = (state_55041[(7)]);
var inst_55028 = cljs.core.next.call(null,inst_55018);
var inst_55018__$1 = inst_55028;
var state_55041__$1 = (function (){var statearr_55057 = state_55041;
(statearr_55057[(7)] = inst_55018__$1);

return statearr_55057;
})();
var statearr_55058_55083 = state_55041__$1;
(statearr_55058_55083[(2)] = null);

(statearr_55058_55083[(1)] = (2));


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
var statearr_55062 = [null,null,null,null,null,null,null,null];
(statearr_55062[(0)] = cljs$core$async$state_machine__33288__auto__);

(statearr_55062[(1)] = (1));

return statearr_55062;
});
var cljs$core$async$state_machine__33288__auto____1 = (function (state_55041){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_55041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e55063){if((e55063 instanceof Object)){
var ex__33291__auto__ = e55063;
var statearr_55064_55084 = state_55041;
(statearr_55064_55084[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55085 = state_55041;
state_55041 = G__55085;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$state_machine__33288__auto__ = function(state_55041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33288__auto____1.call(this,state_55041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33288__auto____0;
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33288__auto____1;
return cljs$core$async$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__))
})();
var state__33354__auto__ = (function (){var statearr_55065 = f__33353__auto__.call(null);
(statearr_55065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_55065;
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
if(typeof cljs.core.async.t_cljs$core$async55311 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55311 = (function (mult,ch,cs,meta55312){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta55312 = meta55312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_55313,meta55312__$1){
var self__ = this;
var _55313__$1 = this;
return (new cljs.core.async.t_cljs$core$async55311(self__.mult,self__.ch,self__.cs,meta55312__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async55311.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_55313){
var self__ = this;
var _55313__$1 = this;
return self__.meta55312;
});})(cs))
;

cljs.core.async.t_cljs$core$async55311.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async55311.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async55311.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async55311.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async55311.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async55311.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async55311.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta55312","meta55312",-188971549,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async55311.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55311";

cljs.core.async.t_cljs$core$async55311.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async55311");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async55311 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async55311(mult__$1,ch__$1,cs__$1,meta55312){
return (new cljs.core.async.t_cljs$core$async55311(mult__$1,ch__$1,cs__$1,meta55312));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async55311(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33352__auto___55536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___55536,cs,m,dchan,dctr,done){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___55536,cs,m,dchan,dctr,done){
return (function (state_55448){
var state_val_55449 = (state_55448[(1)]);
if((state_val_55449 === (7))){
var inst_55444 = (state_55448[(2)]);
var state_55448__$1 = state_55448;
var statearr_55450_55537 = state_55448__$1;
(statearr_55450_55537[(2)] = inst_55444);

(statearr_55450_55537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (20))){
var inst_55347 = (state_55448[(7)]);
var inst_55359 = cljs.core.first.call(null,inst_55347);
var inst_55360 = cljs.core.nth.call(null,inst_55359,(0),null);
var inst_55361 = cljs.core.nth.call(null,inst_55359,(1),null);
var state_55448__$1 = (function (){var statearr_55451 = state_55448;
(statearr_55451[(8)] = inst_55360);

return statearr_55451;
})();
if(cljs.core.truth_(inst_55361)){
var statearr_55452_55538 = state_55448__$1;
(statearr_55452_55538[(1)] = (22));

} else {
var statearr_55453_55539 = state_55448__$1;
(statearr_55453_55539[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (27))){
var inst_55389 = (state_55448[(9)]);
var inst_55396 = (state_55448[(10)]);
var inst_55391 = (state_55448[(11)]);
var inst_55316 = (state_55448[(12)]);
var inst_55396__$1 = cljs.core._nth.call(null,inst_55389,inst_55391);
var inst_55397 = cljs.core.async.put_BANG_.call(null,inst_55396__$1,inst_55316,done);
var state_55448__$1 = (function (){var statearr_55454 = state_55448;
(statearr_55454[(10)] = inst_55396__$1);

return statearr_55454;
})();
if(cljs.core.truth_(inst_55397)){
var statearr_55455_55540 = state_55448__$1;
(statearr_55455_55540[(1)] = (30));

} else {
var statearr_55456_55541 = state_55448__$1;
(statearr_55456_55541[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (1))){
var state_55448__$1 = state_55448;
var statearr_55457_55542 = state_55448__$1;
(statearr_55457_55542[(2)] = null);

(statearr_55457_55542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (24))){
var inst_55347 = (state_55448[(7)]);
var inst_55366 = (state_55448[(2)]);
var inst_55367 = cljs.core.next.call(null,inst_55347);
var inst_55325 = inst_55367;
var inst_55326 = null;
var inst_55327 = (0);
var inst_55328 = (0);
var state_55448__$1 = (function (){var statearr_55458 = state_55448;
(statearr_55458[(13)] = inst_55326);

(statearr_55458[(14)] = inst_55366);

(statearr_55458[(15)] = inst_55328);

(statearr_55458[(16)] = inst_55327);

(statearr_55458[(17)] = inst_55325);

return statearr_55458;
})();
var statearr_55459_55543 = state_55448__$1;
(statearr_55459_55543[(2)] = null);

(statearr_55459_55543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (39))){
var state_55448__$1 = state_55448;
var statearr_55463_55544 = state_55448__$1;
(statearr_55463_55544[(2)] = null);

(statearr_55463_55544[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (4))){
var inst_55316 = (state_55448[(12)]);
var inst_55316__$1 = (state_55448[(2)]);
var inst_55317 = (inst_55316__$1 == null);
var state_55448__$1 = (function (){var statearr_55464 = state_55448;
(statearr_55464[(12)] = inst_55316__$1);

return statearr_55464;
})();
if(cljs.core.truth_(inst_55317)){
var statearr_55465_55545 = state_55448__$1;
(statearr_55465_55545[(1)] = (5));

} else {
var statearr_55466_55546 = state_55448__$1;
(statearr_55466_55546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (15))){
var inst_55326 = (state_55448[(13)]);
var inst_55328 = (state_55448[(15)]);
var inst_55327 = (state_55448[(16)]);
var inst_55325 = (state_55448[(17)]);
var inst_55343 = (state_55448[(2)]);
var inst_55344 = (inst_55328 + (1));
var tmp55460 = inst_55326;
var tmp55461 = inst_55327;
var tmp55462 = inst_55325;
var inst_55325__$1 = tmp55462;
var inst_55326__$1 = tmp55460;
var inst_55327__$1 = tmp55461;
var inst_55328__$1 = inst_55344;
var state_55448__$1 = (function (){var statearr_55467 = state_55448;
(statearr_55467[(13)] = inst_55326__$1);

(statearr_55467[(18)] = inst_55343);

(statearr_55467[(15)] = inst_55328__$1);

(statearr_55467[(16)] = inst_55327__$1);

(statearr_55467[(17)] = inst_55325__$1);

return statearr_55467;
})();
var statearr_55468_55547 = state_55448__$1;
(statearr_55468_55547[(2)] = null);

(statearr_55468_55547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (21))){
var inst_55370 = (state_55448[(2)]);
var state_55448__$1 = state_55448;
var statearr_55472_55548 = state_55448__$1;
(statearr_55472_55548[(2)] = inst_55370);

(statearr_55472_55548[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (31))){
var inst_55396 = (state_55448[(10)]);
var inst_55400 = done.call(null,null);
var inst_55401 = cljs.core.async.untap_STAR_.call(null,m,inst_55396);
var state_55448__$1 = (function (){var statearr_55473 = state_55448;
(statearr_55473[(19)] = inst_55400);

return statearr_55473;
})();
var statearr_55474_55549 = state_55448__$1;
(statearr_55474_55549[(2)] = inst_55401);

(statearr_55474_55549[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (32))){
var inst_55389 = (state_55448[(9)]);
var inst_55388 = (state_55448[(20)]);
var inst_55391 = (state_55448[(11)]);
var inst_55390 = (state_55448[(21)]);
var inst_55403 = (state_55448[(2)]);
var inst_55404 = (inst_55391 + (1));
var tmp55469 = inst_55389;
var tmp55470 = inst_55388;
var tmp55471 = inst_55390;
var inst_55388__$1 = tmp55470;
var inst_55389__$1 = tmp55469;
var inst_55390__$1 = tmp55471;
var inst_55391__$1 = inst_55404;
var state_55448__$1 = (function (){var statearr_55475 = state_55448;
(statearr_55475[(9)] = inst_55389__$1);

(statearr_55475[(20)] = inst_55388__$1);

(statearr_55475[(11)] = inst_55391__$1);

(statearr_55475[(22)] = inst_55403);

(statearr_55475[(21)] = inst_55390__$1);

return statearr_55475;
})();
var statearr_55476_55550 = state_55448__$1;
(statearr_55476_55550[(2)] = null);

(statearr_55476_55550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (40))){
var inst_55416 = (state_55448[(23)]);
var inst_55420 = done.call(null,null);
var inst_55421 = cljs.core.async.untap_STAR_.call(null,m,inst_55416);
var state_55448__$1 = (function (){var statearr_55477 = state_55448;
(statearr_55477[(24)] = inst_55420);

return statearr_55477;
})();
var statearr_55478_55551 = state_55448__$1;
(statearr_55478_55551[(2)] = inst_55421);

(statearr_55478_55551[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (33))){
var inst_55407 = (state_55448[(25)]);
var inst_55409 = cljs.core.chunked_seq_QMARK_.call(null,inst_55407);
var state_55448__$1 = state_55448;
if(inst_55409){
var statearr_55479_55552 = state_55448__$1;
(statearr_55479_55552[(1)] = (36));

} else {
var statearr_55480_55553 = state_55448__$1;
(statearr_55480_55553[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (13))){
var inst_55337 = (state_55448[(26)]);
var inst_55340 = cljs.core.async.close_BANG_.call(null,inst_55337);
var state_55448__$1 = state_55448;
var statearr_55481_55554 = state_55448__$1;
(statearr_55481_55554[(2)] = inst_55340);

(statearr_55481_55554[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (22))){
var inst_55360 = (state_55448[(8)]);
var inst_55363 = cljs.core.async.close_BANG_.call(null,inst_55360);
var state_55448__$1 = state_55448;
var statearr_55482_55555 = state_55448__$1;
(statearr_55482_55555[(2)] = inst_55363);

(statearr_55482_55555[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (36))){
var inst_55407 = (state_55448[(25)]);
var inst_55411 = cljs.core.chunk_first.call(null,inst_55407);
var inst_55412 = cljs.core.chunk_rest.call(null,inst_55407);
var inst_55413 = cljs.core.count.call(null,inst_55411);
var inst_55388 = inst_55412;
var inst_55389 = inst_55411;
var inst_55390 = inst_55413;
var inst_55391 = (0);
var state_55448__$1 = (function (){var statearr_55483 = state_55448;
(statearr_55483[(9)] = inst_55389);

(statearr_55483[(20)] = inst_55388);

(statearr_55483[(11)] = inst_55391);

(statearr_55483[(21)] = inst_55390);

return statearr_55483;
})();
var statearr_55484_55556 = state_55448__$1;
(statearr_55484_55556[(2)] = null);

(statearr_55484_55556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (41))){
var inst_55407 = (state_55448[(25)]);
var inst_55423 = (state_55448[(2)]);
var inst_55424 = cljs.core.next.call(null,inst_55407);
var inst_55388 = inst_55424;
var inst_55389 = null;
var inst_55390 = (0);
var inst_55391 = (0);
var state_55448__$1 = (function (){var statearr_55485 = state_55448;
(statearr_55485[(9)] = inst_55389);

(statearr_55485[(20)] = inst_55388);

(statearr_55485[(27)] = inst_55423);

(statearr_55485[(11)] = inst_55391);

(statearr_55485[(21)] = inst_55390);

return statearr_55485;
})();
var statearr_55486_55557 = state_55448__$1;
(statearr_55486_55557[(2)] = null);

(statearr_55486_55557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (43))){
var state_55448__$1 = state_55448;
var statearr_55487_55558 = state_55448__$1;
(statearr_55487_55558[(2)] = null);

(statearr_55487_55558[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (29))){
var inst_55432 = (state_55448[(2)]);
var state_55448__$1 = state_55448;
var statearr_55488_55559 = state_55448__$1;
(statearr_55488_55559[(2)] = inst_55432);

(statearr_55488_55559[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (44))){
var inst_55441 = (state_55448[(2)]);
var state_55448__$1 = (function (){var statearr_55489 = state_55448;
(statearr_55489[(28)] = inst_55441);

return statearr_55489;
})();
var statearr_55490_55560 = state_55448__$1;
(statearr_55490_55560[(2)] = null);

(statearr_55490_55560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (6))){
var inst_55380 = (state_55448[(29)]);
var inst_55379 = cljs.core.deref.call(null,cs);
var inst_55380__$1 = cljs.core.keys.call(null,inst_55379);
var inst_55381 = cljs.core.count.call(null,inst_55380__$1);
var inst_55382 = cljs.core.reset_BANG_.call(null,dctr,inst_55381);
var inst_55387 = cljs.core.seq.call(null,inst_55380__$1);
var inst_55388 = inst_55387;
var inst_55389 = null;
var inst_55390 = (0);
var inst_55391 = (0);
var state_55448__$1 = (function (){var statearr_55491 = state_55448;
(statearr_55491[(9)] = inst_55389);

(statearr_55491[(20)] = inst_55388);

(statearr_55491[(29)] = inst_55380__$1);

(statearr_55491[(30)] = inst_55382);

(statearr_55491[(11)] = inst_55391);

(statearr_55491[(21)] = inst_55390);

return statearr_55491;
})();
var statearr_55492_55561 = state_55448__$1;
(statearr_55492_55561[(2)] = null);

(statearr_55492_55561[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (28))){
var inst_55388 = (state_55448[(20)]);
var inst_55407 = (state_55448[(25)]);
var inst_55407__$1 = cljs.core.seq.call(null,inst_55388);
var state_55448__$1 = (function (){var statearr_55493 = state_55448;
(statearr_55493[(25)] = inst_55407__$1);

return statearr_55493;
})();
if(inst_55407__$1){
var statearr_55494_55562 = state_55448__$1;
(statearr_55494_55562[(1)] = (33));

} else {
var statearr_55495_55563 = state_55448__$1;
(statearr_55495_55563[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (25))){
var inst_55391 = (state_55448[(11)]);
var inst_55390 = (state_55448[(21)]);
var inst_55393 = (inst_55391 < inst_55390);
var inst_55394 = inst_55393;
var state_55448__$1 = state_55448;
if(cljs.core.truth_(inst_55394)){
var statearr_55496_55564 = state_55448__$1;
(statearr_55496_55564[(1)] = (27));

} else {
var statearr_55497_55565 = state_55448__$1;
(statearr_55497_55565[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (34))){
var state_55448__$1 = state_55448;
var statearr_55498_55566 = state_55448__$1;
(statearr_55498_55566[(2)] = null);

(statearr_55498_55566[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (17))){
var state_55448__$1 = state_55448;
var statearr_55499_55567 = state_55448__$1;
(statearr_55499_55567[(2)] = null);

(statearr_55499_55567[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (3))){
var inst_55446 = (state_55448[(2)]);
var state_55448__$1 = state_55448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55448__$1,inst_55446);
} else {
if((state_val_55449 === (12))){
var inst_55375 = (state_55448[(2)]);
var state_55448__$1 = state_55448;
var statearr_55500_55568 = state_55448__$1;
(statearr_55500_55568[(2)] = inst_55375);

(statearr_55500_55568[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (2))){
var state_55448__$1 = state_55448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55448__$1,(4),ch);
} else {
if((state_val_55449 === (23))){
var state_55448__$1 = state_55448;
var statearr_55501_55569 = state_55448__$1;
(statearr_55501_55569[(2)] = null);

(statearr_55501_55569[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (35))){
var inst_55430 = (state_55448[(2)]);
var state_55448__$1 = state_55448;
var statearr_55502_55570 = state_55448__$1;
(statearr_55502_55570[(2)] = inst_55430);

(statearr_55502_55570[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (19))){
var inst_55347 = (state_55448[(7)]);
var inst_55351 = cljs.core.chunk_first.call(null,inst_55347);
var inst_55352 = cljs.core.chunk_rest.call(null,inst_55347);
var inst_55353 = cljs.core.count.call(null,inst_55351);
var inst_55325 = inst_55352;
var inst_55326 = inst_55351;
var inst_55327 = inst_55353;
var inst_55328 = (0);
var state_55448__$1 = (function (){var statearr_55503 = state_55448;
(statearr_55503[(13)] = inst_55326);

(statearr_55503[(15)] = inst_55328);

(statearr_55503[(16)] = inst_55327);

(statearr_55503[(17)] = inst_55325);

return statearr_55503;
})();
var statearr_55504_55571 = state_55448__$1;
(statearr_55504_55571[(2)] = null);

(statearr_55504_55571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (11))){
var inst_55347 = (state_55448[(7)]);
var inst_55325 = (state_55448[(17)]);
var inst_55347__$1 = cljs.core.seq.call(null,inst_55325);
var state_55448__$1 = (function (){var statearr_55505 = state_55448;
(statearr_55505[(7)] = inst_55347__$1);

return statearr_55505;
})();
if(inst_55347__$1){
var statearr_55506_55572 = state_55448__$1;
(statearr_55506_55572[(1)] = (16));

} else {
var statearr_55507_55573 = state_55448__$1;
(statearr_55507_55573[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (9))){
var inst_55377 = (state_55448[(2)]);
var state_55448__$1 = state_55448;
var statearr_55508_55574 = state_55448__$1;
(statearr_55508_55574[(2)] = inst_55377);

(statearr_55508_55574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (5))){
var inst_55323 = cljs.core.deref.call(null,cs);
var inst_55324 = cljs.core.seq.call(null,inst_55323);
var inst_55325 = inst_55324;
var inst_55326 = null;
var inst_55327 = (0);
var inst_55328 = (0);
var state_55448__$1 = (function (){var statearr_55509 = state_55448;
(statearr_55509[(13)] = inst_55326);

(statearr_55509[(15)] = inst_55328);

(statearr_55509[(16)] = inst_55327);

(statearr_55509[(17)] = inst_55325);

return statearr_55509;
})();
var statearr_55510_55575 = state_55448__$1;
(statearr_55510_55575[(2)] = null);

(statearr_55510_55575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (14))){
var state_55448__$1 = state_55448;
var statearr_55511_55576 = state_55448__$1;
(statearr_55511_55576[(2)] = null);

(statearr_55511_55576[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (45))){
var inst_55438 = (state_55448[(2)]);
var state_55448__$1 = state_55448;
var statearr_55512_55577 = state_55448__$1;
(statearr_55512_55577[(2)] = inst_55438);

(statearr_55512_55577[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (26))){
var inst_55380 = (state_55448[(29)]);
var inst_55434 = (state_55448[(2)]);
var inst_55435 = cljs.core.seq.call(null,inst_55380);
var state_55448__$1 = (function (){var statearr_55513 = state_55448;
(statearr_55513[(31)] = inst_55434);

return statearr_55513;
})();
if(inst_55435){
var statearr_55514_55578 = state_55448__$1;
(statearr_55514_55578[(1)] = (42));

} else {
var statearr_55515_55579 = state_55448__$1;
(statearr_55515_55579[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (16))){
var inst_55347 = (state_55448[(7)]);
var inst_55349 = cljs.core.chunked_seq_QMARK_.call(null,inst_55347);
var state_55448__$1 = state_55448;
if(inst_55349){
var statearr_55516_55580 = state_55448__$1;
(statearr_55516_55580[(1)] = (19));

} else {
var statearr_55517_55581 = state_55448__$1;
(statearr_55517_55581[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (38))){
var inst_55427 = (state_55448[(2)]);
var state_55448__$1 = state_55448;
var statearr_55518_55582 = state_55448__$1;
(statearr_55518_55582[(2)] = inst_55427);

(statearr_55518_55582[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (30))){
var state_55448__$1 = state_55448;
var statearr_55519_55583 = state_55448__$1;
(statearr_55519_55583[(2)] = null);

(statearr_55519_55583[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (10))){
var inst_55326 = (state_55448[(13)]);
var inst_55328 = (state_55448[(15)]);
var inst_55336 = cljs.core._nth.call(null,inst_55326,inst_55328);
var inst_55337 = cljs.core.nth.call(null,inst_55336,(0),null);
var inst_55338 = cljs.core.nth.call(null,inst_55336,(1),null);
var state_55448__$1 = (function (){var statearr_55520 = state_55448;
(statearr_55520[(26)] = inst_55337);

return statearr_55520;
})();
if(cljs.core.truth_(inst_55338)){
var statearr_55521_55584 = state_55448__$1;
(statearr_55521_55584[(1)] = (13));

} else {
var statearr_55522_55585 = state_55448__$1;
(statearr_55522_55585[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (18))){
var inst_55373 = (state_55448[(2)]);
var state_55448__$1 = state_55448;
var statearr_55523_55586 = state_55448__$1;
(statearr_55523_55586[(2)] = inst_55373);

(statearr_55523_55586[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (42))){
var state_55448__$1 = state_55448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55448__$1,(45),dchan);
} else {
if((state_val_55449 === (37))){
var inst_55416 = (state_55448[(23)]);
var inst_55407 = (state_55448[(25)]);
var inst_55316 = (state_55448[(12)]);
var inst_55416__$1 = cljs.core.first.call(null,inst_55407);
var inst_55417 = cljs.core.async.put_BANG_.call(null,inst_55416__$1,inst_55316,done);
var state_55448__$1 = (function (){var statearr_55524 = state_55448;
(statearr_55524[(23)] = inst_55416__$1);

return statearr_55524;
})();
if(cljs.core.truth_(inst_55417)){
var statearr_55525_55587 = state_55448__$1;
(statearr_55525_55587[(1)] = (39));

} else {
var statearr_55526_55588 = state_55448__$1;
(statearr_55526_55588[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55449 === (8))){
var inst_55328 = (state_55448[(15)]);
var inst_55327 = (state_55448[(16)]);
var inst_55330 = (inst_55328 < inst_55327);
var inst_55331 = inst_55330;
var state_55448__$1 = state_55448;
if(cljs.core.truth_(inst_55331)){
var statearr_55527_55589 = state_55448__$1;
(statearr_55527_55589[(1)] = (10));

} else {
var statearr_55528_55590 = state_55448__$1;
(statearr_55528_55590[(1)] = (11));

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
});})(c__33352__auto___55536,cs,m,dchan,dctr,done))
;
return ((function (switch__33287__auto__,c__33352__auto___55536,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33288__auto__ = null;
var cljs$core$async$mult_$_state_machine__33288__auto____0 = (function (){
var statearr_55532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55532[(0)] = cljs$core$async$mult_$_state_machine__33288__auto__);

(statearr_55532[(1)] = (1));

return statearr_55532;
});
var cljs$core$async$mult_$_state_machine__33288__auto____1 = (function (state_55448){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_55448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e55533){if((e55533 instanceof Object)){
var ex__33291__auto__ = e55533;
var statearr_55534_55591 = state_55448;
(statearr_55534_55591[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55592 = state_55448;
state_55448 = G__55592;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33288__auto__ = function(state_55448){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33288__auto____1.call(this,state_55448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33288__auto____0;
cljs$core$async$mult_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33288__auto____1;
return cljs$core$async$mult_$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___55536,cs,m,dchan,dctr,done))
})();
var state__33354__auto__ = (function (){var statearr_55535 = f__33353__auto__.call(null);
(statearr_55535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___55536);

return statearr_55535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___55536,cs,m,dchan,dctr,done))
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
var args55593 = [];
var len__26121__auto___55596 = arguments.length;
var i__26122__auto___55597 = (0);
while(true){
if((i__26122__auto___55597 < len__26121__auto___55596)){
args55593.push((arguments[i__26122__auto___55597]));

var G__55598 = (i__26122__auto___55597 + (1));
i__26122__auto___55597 = G__55598;
continue;
} else {
}
break;
}

var G__55595 = args55593.length;
switch (G__55595) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55593.length)].join('')));

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
var len__26121__auto___55610 = arguments.length;
var i__26122__auto___55611 = (0);
while(true){
if((i__26122__auto___55611 < len__26121__auto___55610)){
args__26128__auto__.push((arguments[i__26122__auto___55611]));

var G__55612 = (i__26122__auto___55611 + (1));
i__26122__auto___55611 = G__55612;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((3) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26129__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__55604){
var map__55605 = p__55604;
var map__55605__$1 = ((((!((map__55605 == null)))?((((map__55605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55605):map__55605);
var opts = map__55605__$1;
var statearr_55607_55613 = state;
(statearr_55607_55613[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__55605,map__55605__$1,opts){
return (function (val){
var statearr_55608_55614 = state;
(statearr_55608_55614[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__55605,map__55605__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_55609_55615 = state;
(statearr_55609_55615[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq55600){
var G__55601 = cljs.core.first.call(null,seq55600);
var seq55600__$1 = cljs.core.next.call(null,seq55600);
var G__55602 = cljs.core.first.call(null,seq55600__$1);
var seq55600__$2 = cljs.core.next.call(null,seq55600__$1);
var G__55603 = cljs.core.first.call(null,seq55600__$2);
var seq55600__$3 = cljs.core.next.call(null,seq55600__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__55601,G__55602,G__55603,seq55600__$3);
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
if(typeof cljs.core.async.t_cljs$core$async55781 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55781 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55782){
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
this.meta55782 = meta55782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_55783,meta55782__$1){
var self__ = this;
var _55783__$1 = this;
return (new cljs.core.async.t_cljs$core$async55781(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta55782__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55781.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_55783){
var self__ = this;
var _55783__$1 = this;
return self__.meta55782;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55781.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async55781.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55781.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async55781.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55781.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55781.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55781.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55781.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async55781.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta55782","meta55782",790075357,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55781.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55781";

cljs.core.async.t_cljs$core$async55781.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async55781");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async55781 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async55781(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta55782){
return (new cljs.core.async.t_cljs$core$async55781(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta55782));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async55781(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33352__auto___55946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___55946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___55946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_55883){
var state_val_55884 = (state_55883[(1)]);
if((state_val_55884 === (7))){
var inst_55799 = (state_55883[(2)]);
var state_55883__$1 = state_55883;
var statearr_55885_55947 = state_55883__$1;
(statearr_55885_55947[(2)] = inst_55799);

(statearr_55885_55947[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (20))){
var inst_55811 = (state_55883[(7)]);
var state_55883__$1 = state_55883;
var statearr_55886_55948 = state_55883__$1;
(statearr_55886_55948[(2)] = inst_55811);

(statearr_55886_55948[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (27))){
var state_55883__$1 = state_55883;
var statearr_55887_55949 = state_55883__$1;
(statearr_55887_55949[(2)] = null);

(statearr_55887_55949[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (1))){
var inst_55787 = (state_55883[(8)]);
var inst_55787__$1 = calc_state.call(null);
var inst_55789 = (inst_55787__$1 == null);
var inst_55790 = cljs.core.not.call(null,inst_55789);
var state_55883__$1 = (function (){var statearr_55888 = state_55883;
(statearr_55888[(8)] = inst_55787__$1);

return statearr_55888;
})();
if(inst_55790){
var statearr_55889_55950 = state_55883__$1;
(statearr_55889_55950[(1)] = (2));

} else {
var statearr_55890_55951 = state_55883__$1;
(statearr_55890_55951[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (24))){
var inst_55843 = (state_55883[(9)]);
var inst_55857 = (state_55883[(10)]);
var inst_55834 = (state_55883[(11)]);
var inst_55857__$1 = inst_55834.call(null,inst_55843);
var state_55883__$1 = (function (){var statearr_55891 = state_55883;
(statearr_55891[(10)] = inst_55857__$1);

return statearr_55891;
})();
if(cljs.core.truth_(inst_55857__$1)){
var statearr_55892_55952 = state_55883__$1;
(statearr_55892_55952[(1)] = (29));

} else {
var statearr_55893_55953 = state_55883__$1;
(statearr_55893_55953[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (4))){
var inst_55802 = (state_55883[(2)]);
var state_55883__$1 = state_55883;
if(cljs.core.truth_(inst_55802)){
var statearr_55894_55954 = state_55883__$1;
(statearr_55894_55954[(1)] = (8));

} else {
var statearr_55895_55955 = state_55883__$1;
(statearr_55895_55955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (15))){
var inst_55828 = (state_55883[(2)]);
var state_55883__$1 = state_55883;
if(cljs.core.truth_(inst_55828)){
var statearr_55896_55956 = state_55883__$1;
(statearr_55896_55956[(1)] = (19));

} else {
var statearr_55897_55957 = state_55883__$1;
(statearr_55897_55957[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (21))){
var inst_55833 = (state_55883[(12)]);
var inst_55833__$1 = (state_55883[(2)]);
var inst_55834 = cljs.core.get.call(null,inst_55833__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55835 = cljs.core.get.call(null,inst_55833__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55836 = cljs.core.get.call(null,inst_55833__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_55883__$1 = (function (){var statearr_55898 = state_55883;
(statearr_55898[(12)] = inst_55833__$1);

(statearr_55898[(13)] = inst_55835);

(statearr_55898[(11)] = inst_55834);

return statearr_55898;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_55883__$1,(22),inst_55836);
} else {
if((state_val_55884 === (31))){
var inst_55865 = (state_55883[(2)]);
var state_55883__$1 = state_55883;
if(cljs.core.truth_(inst_55865)){
var statearr_55899_55958 = state_55883__$1;
(statearr_55899_55958[(1)] = (32));

} else {
var statearr_55900_55959 = state_55883__$1;
(statearr_55900_55959[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (32))){
var inst_55842 = (state_55883[(14)]);
var state_55883__$1 = state_55883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55883__$1,(35),out,inst_55842);
} else {
if((state_val_55884 === (33))){
var inst_55833 = (state_55883[(12)]);
var inst_55811 = inst_55833;
var state_55883__$1 = (function (){var statearr_55901 = state_55883;
(statearr_55901[(7)] = inst_55811);

return statearr_55901;
})();
var statearr_55902_55960 = state_55883__$1;
(statearr_55902_55960[(2)] = null);

(statearr_55902_55960[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (13))){
var inst_55811 = (state_55883[(7)]);
var inst_55818 = inst_55811.cljs$lang$protocol_mask$partition0$;
var inst_55819 = (inst_55818 & (64));
var inst_55820 = inst_55811.cljs$core$ISeq$;
var inst_55821 = (inst_55819) || (inst_55820);
var state_55883__$1 = state_55883;
if(cljs.core.truth_(inst_55821)){
var statearr_55903_55961 = state_55883__$1;
(statearr_55903_55961[(1)] = (16));

} else {
var statearr_55904_55962 = state_55883__$1;
(statearr_55904_55962[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (22))){
var inst_55843 = (state_55883[(9)]);
var inst_55842 = (state_55883[(14)]);
var inst_55841 = (state_55883[(2)]);
var inst_55842__$1 = cljs.core.nth.call(null,inst_55841,(0),null);
var inst_55843__$1 = cljs.core.nth.call(null,inst_55841,(1),null);
var inst_55844 = (inst_55842__$1 == null);
var inst_55845 = cljs.core._EQ_.call(null,inst_55843__$1,change);
var inst_55846 = (inst_55844) || (inst_55845);
var state_55883__$1 = (function (){var statearr_55905 = state_55883;
(statearr_55905[(9)] = inst_55843__$1);

(statearr_55905[(14)] = inst_55842__$1);

return statearr_55905;
})();
if(cljs.core.truth_(inst_55846)){
var statearr_55906_55963 = state_55883__$1;
(statearr_55906_55963[(1)] = (23));

} else {
var statearr_55907_55964 = state_55883__$1;
(statearr_55907_55964[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (36))){
var inst_55833 = (state_55883[(12)]);
var inst_55811 = inst_55833;
var state_55883__$1 = (function (){var statearr_55908 = state_55883;
(statearr_55908[(7)] = inst_55811);

return statearr_55908;
})();
var statearr_55909_55965 = state_55883__$1;
(statearr_55909_55965[(2)] = null);

(statearr_55909_55965[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (29))){
var inst_55857 = (state_55883[(10)]);
var state_55883__$1 = state_55883;
var statearr_55910_55966 = state_55883__$1;
(statearr_55910_55966[(2)] = inst_55857);

(statearr_55910_55966[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (6))){
var state_55883__$1 = state_55883;
var statearr_55911_55967 = state_55883__$1;
(statearr_55911_55967[(2)] = false);

(statearr_55911_55967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (28))){
var inst_55853 = (state_55883[(2)]);
var inst_55854 = calc_state.call(null);
var inst_55811 = inst_55854;
var state_55883__$1 = (function (){var statearr_55912 = state_55883;
(statearr_55912[(7)] = inst_55811);

(statearr_55912[(15)] = inst_55853);

return statearr_55912;
})();
var statearr_55913_55968 = state_55883__$1;
(statearr_55913_55968[(2)] = null);

(statearr_55913_55968[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (25))){
var inst_55879 = (state_55883[(2)]);
var state_55883__$1 = state_55883;
var statearr_55914_55969 = state_55883__$1;
(statearr_55914_55969[(2)] = inst_55879);

(statearr_55914_55969[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (34))){
var inst_55877 = (state_55883[(2)]);
var state_55883__$1 = state_55883;
var statearr_55915_55970 = state_55883__$1;
(statearr_55915_55970[(2)] = inst_55877);

(statearr_55915_55970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (17))){
var state_55883__$1 = state_55883;
var statearr_55916_55971 = state_55883__$1;
(statearr_55916_55971[(2)] = false);

(statearr_55916_55971[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (3))){
var state_55883__$1 = state_55883;
var statearr_55917_55972 = state_55883__$1;
(statearr_55917_55972[(2)] = false);

(statearr_55917_55972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (12))){
var inst_55881 = (state_55883[(2)]);
var state_55883__$1 = state_55883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55883__$1,inst_55881);
} else {
if((state_val_55884 === (2))){
var inst_55787 = (state_55883[(8)]);
var inst_55792 = inst_55787.cljs$lang$protocol_mask$partition0$;
var inst_55793 = (inst_55792 & (64));
var inst_55794 = inst_55787.cljs$core$ISeq$;
var inst_55795 = (inst_55793) || (inst_55794);
var state_55883__$1 = state_55883;
if(cljs.core.truth_(inst_55795)){
var statearr_55918_55973 = state_55883__$1;
(statearr_55918_55973[(1)] = (5));

} else {
var statearr_55919_55974 = state_55883__$1;
(statearr_55919_55974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (23))){
var inst_55842 = (state_55883[(14)]);
var inst_55848 = (inst_55842 == null);
var state_55883__$1 = state_55883;
if(cljs.core.truth_(inst_55848)){
var statearr_55920_55975 = state_55883__$1;
(statearr_55920_55975[(1)] = (26));

} else {
var statearr_55921_55976 = state_55883__$1;
(statearr_55921_55976[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (35))){
var inst_55868 = (state_55883[(2)]);
var state_55883__$1 = state_55883;
if(cljs.core.truth_(inst_55868)){
var statearr_55922_55977 = state_55883__$1;
(statearr_55922_55977[(1)] = (36));

} else {
var statearr_55923_55978 = state_55883__$1;
(statearr_55923_55978[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (19))){
var inst_55811 = (state_55883[(7)]);
var inst_55830 = cljs.core.apply.call(null,cljs.core.hash_map,inst_55811);
var state_55883__$1 = state_55883;
var statearr_55924_55979 = state_55883__$1;
(statearr_55924_55979[(2)] = inst_55830);

(statearr_55924_55979[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (11))){
var inst_55811 = (state_55883[(7)]);
var inst_55815 = (inst_55811 == null);
var inst_55816 = cljs.core.not.call(null,inst_55815);
var state_55883__$1 = state_55883;
if(inst_55816){
var statearr_55925_55980 = state_55883__$1;
(statearr_55925_55980[(1)] = (13));

} else {
var statearr_55926_55981 = state_55883__$1;
(statearr_55926_55981[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (9))){
var inst_55787 = (state_55883[(8)]);
var state_55883__$1 = state_55883;
var statearr_55927_55982 = state_55883__$1;
(statearr_55927_55982[(2)] = inst_55787);

(statearr_55927_55982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (5))){
var state_55883__$1 = state_55883;
var statearr_55928_55983 = state_55883__$1;
(statearr_55928_55983[(2)] = true);

(statearr_55928_55983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (14))){
var state_55883__$1 = state_55883;
var statearr_55929_55984 = state_55883__$1;
(statearr_55929_55984[(2)] = false);

(statearr_55929_55984[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (26))){
var inst_55843 = (state_55883[(9)]);
var inst_55850 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_55843);
var state_55883__$1 = state_55883;
var statearr_55930_55985 = state_55883__$1;
(statearr_55930_55985[(2)] = inst_55850);

(statearr_55930_55985[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (16))){
var state_55883__$1 = state_55883;
var statearr_55931_55986 = state_55883__$1;
(statearr_55931_55986[(2)] = true);

(statearr_55931_55986[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (38))){
var inst_55873 = (state_55883[(2)]);
var state_55883__$1 = state_55883;
var statearr_55932_55987 = state_55883__$1;
(statearr_55932_55987[(2)] = inst_55873);

(statearr_55932_55987[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (30))){
var inst_55843 = (state_55883[(9)]);
var inst_55835 = (state_55883[(13)]);
var inst_55834 = (state_55883[(11)]);
var inst_55860 = cljs.core.empty_QMARK_.call(null,inst_55834);
var inst_55861 = inst_55835.call(null,inst_55843);
var inst_55862 = cljs.core.not.call(null,inst_55861);
var inst_55863 = (inst_55860) && (inst_55862);
var state_55883__$1 = state_55883;
var statearr_55933_55988 = state_55883__$1;
(statearr_55933_55988[(2)] = inst_55863);

(statearr_55933_55988[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (10))){
var inst_55787 = (state_55883[(8)]);
var inst_55807 = (state_55883[(2)]);
var inst_55808 = cljs.core.get.call(null,inst_55807,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55809 = cljs.core.get.call(null,inst_55807,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55810 = cljs.core.get.call(null,inst_55807,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_55811 = inst_55787;
var state_55883__$1 = (function (){var statearr_55934 = state_55883;
(statearr_55934[(16)] = inst_55808);

(statearr_55934[(7)] = inst_55811);

(statearr_55934[(17)] = inst_55809);

(statearr_55934[(18)] = inst_55810);

return statearr_55934;
})();
var statearr_55935_55989 = state_55883__$1;
(statearr_55935_55989[(2)] = null);

(statearr_55935_55989[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (18))){
var inst_55825 = (state_55883[(2)]);
var state_55883__$1 = state_55883;
var statearr_55936_55990 = state_55883__$1;
(statearr_55936_55990[(2)] = inst_55825);

(statearr_55936_55990[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (37))){
var state_55883__$1 = state_55883;
var statearr_55937_55991 = state_55883__$1;
(statearr_55937_55991[(2)] = null);

(statearr_55937_55991[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (8))){
var inst_55787 = (state_55883[(8)]);
var inst_55804 = cljs.core.apply.call(null,cljs.core.hash_map,inst_55787);
var state_55883__$1 = state_55883;
var statearr_55938_55992 = state_55883__$1;
(statearr_55938_55992[(2)] = inst_55804);

(statearr_55938_55992[(1)] = (10));


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
});})(c__33352__auto___55946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33287__auto__,c__33352__auto___55946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33288__auto__ = null;
var cljs$core$async$mix_$_state_machine__33288__auto____0 = (function (){
var statearr_55942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55942[(0)] = cljs$core$async$mix_$_state_machine__33288__auto__);

(statearr_55942[(1)] = (1));

return statearr_55942;
});
var cljs$core$async$mix_$_state_machine__33288__auto____1 = (function (state_55883){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_55883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e55943){if((e55943 instanceof Object)){
var ex__33291__auto__ = e55943;
var statearr_55944_55993 = state_55883;
(statearr_55944_55993[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55994 = state_55883;
state_55883 = G__55994;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33288__auto__ = function(state_55883){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33288__auto____1.call(this,state_55883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33288__auto____0;
cljs$core$async$mix_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33288__auto____1;
return cljs$core$async$mix_$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___55946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33354__auto__ = (function (){var statearr_55945 = f__33353__auto__.call(null);
(statearr_55945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___55946);

return statearr_55945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___55946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args55995 = [];
var len__26121__auto___55998 = arguments.length;
var i__26122__auto___55999 = (0);
while(true){
if((i__26122__auto___55999 < len__26121__auto___55998)){
args55995.push((arguments[i__26122__auto___55999]));

var G__56000 = (i__26122__auto___55999 + (1));
i__26122__auto___55999 = G__56000;
continue;
} else {
}
break;
}

var G__55997 = args55995.length;
switch (G__55997) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55995.length)].join('')));

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
var args56003 = [];
var len__26121__auto___56128 = arguments.length;
var i__26122__auto___56129 = (0);
while(true){
if((i__26122__auto___56129 < len__26121__auto___56128)){
args56003.push((arguments[i__26122__auto___56129]));

var G__56130 = (i__26122__auto___56129 + (1));
i__26122__auto___56129 = G__56130;
continue;
} else {
}
break;
}

var G__56005 = args56003.length;
switch (G__56005) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56003.length)].join('')));

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
return (function (p1__56002_SHARP_){
if(cljs.core.truth_(p1__56002_SHARP_.call(null,topic))){
return p1__56002_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__56002_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25046__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async56006 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56006 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta56007){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta56007 = meta56007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async56006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_56008,meta56007__$1){
var self__ = this;
var _56008__$1 = this;
return (new cljs.core.async.t_cljs$core$async56006(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta56007__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async56006.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_56008){
var self__ = this;
var _56008__$1 = this;
return self__.meta56007;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async56006.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async56006.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async56006.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async56006.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async56006.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async56006.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async56006.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async56006.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta56007","meta56007",-1690668519,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async56006.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56006";

cljs.core.async.t_cljs$core$async56006.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async56006");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async56006 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async56006(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta56007){
return (new cljs.core.async.t_cljs$core$async56006(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta56007));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async56006(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33352__auto___56132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___56132,mults,ensure_mult,p){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___56132,mults,ensure_mult,p){
return (function (state_56080){
var state_val_56081 = (state_56080[(1)]);
if((state_val_56081 === (7))){
var inst_56076 = (state_56080[(2)]);
var state_56080__$1 = state_56080;
var statearr_56082_56133 = state_56080__$1;
(statearr_56082_56133[(2)] = inst_56076);

(statearr_56082_56133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56081 === (20))){
var state_56080__$1 = state_56080;
var statearr_56083_56134 = state_56080__$1;
(statearr_56083_56134[(2)] = null);

(statearr_56083_56134[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56081 === (1))){
var state_56080__$1 = state_56080;
var statearr_56084_56135 = state_56080__$1;
(statearr_56084_56135[(2)] = null);

(statearr_56084_56135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56081 === (24))){
var inst_56059 = (state_56080[(7)]);
var inst_56068 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_56059);
var state_56080__$1 = state_56080;
var statearr_56085_56136 = state_56080__$1;
(statearr_56085_56136[(2)] = inst_56068);

(statearr_56085_56136[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56081 === (4))){
var inst_56011 = (state_56080[(8)]);
var inst_56011__$1 = (state_56080[(2)]);
var inst_56012 = (inst_56011__$1 == null);
var state_56080__$1 = (function (){var statearr_56086 = state_56080;
(statearr_56086[(8)] = inst_56011__$1);

return statearr_56086;
})();
if(cljs.core.truth_(inst_56012)){
var statearr_56087_56137 = state_56080__$1;
(statearr_56087_56137[(1)] = (5));

} else {
var statearr_56088_56138 = state_56080__$1;
(statearr_56088_56138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56081 === (15))){
var inst_56053 = (state_56080[(2)]);
var state_56080__$1 = state_56080;
var statearr_56089_56139 = state_56080__$1;
(statearr_56089_56139[(2)] = inst_56053);

(statearr_56089_56139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56081 === (21))){
var inst_56073 = (state_56080[(2)]);
var state_56080__$1 = (function (){var statearr_56090 = state_56080;
(statearr_56090[(9)] = inst_56073);

return statearr_56090;
})();
var statearr_56091_56140 = state_56080__$1;
(statearr_56091_56140[(2)] = null);

(statearr_56091_56140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56081 === (13))){
var inst_56035 = (state_56080[(10)]);
var inst_56037 = cljs.core.chunked_seq_QMARK_.call(null,inst_56035);
var state_56080__$1 = state_56080;
if(inst_56037){
var statearr_56092_56141 = state_56080__$1;
(statearr_56092_56141[(1)] = (16));

} else {
var statearr_56093_56142 = state_56080__$1;
(statearr_56093_56142[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56081 === (22))){
var inst_56065 = (state_56080[(2)]);
var state_56080__$1 = state_56080;
if(cljs.core.truth_(inst_56065)){
var statearr_56094_56143 = state_56080__$1;
(statearr_56094_56143[(1)] = (23));

} else {
var statearr_56095_56144 = state_56080__$1;
(statearr_56095_56144[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56081 === (6))){
var inst_56061 = (state_56080[(11)]);
var inst_56059 = (state_56080[(7)]);
var inst_56011 = (state_56080[(8)]);
var inst_56059__$1 = topic_fn.call(null,inst_56011);
var inst_56060 = cljs.core.deref.call(null,mults);
var inst_56061__$1 = cljs.core.get.call(null,inst_56060,inst_56059__$1);
var state_56080__$1 = (function (){var statearr_56096 = state_56080;
(statearr_56096[(11)] = inst_56061__$1);

(statearr_56096[(7)] = inst_56059__$1);

return statearr_56096;
})();
if(cljs.core.truth_(inst_56061__$1)){
var statearr_56097_56145 = state_56080__$1;
(statearr_56097_56145[(1)] = (19));

} else {
var statearr_56098_56146 = state_56080__$1;
(statearr_56098_56146[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56081 === (25))){
var inst_56070 = (state_56080[(2)]);
var state_56080__$1 = state_56080;
var statearr_56099_56147 = state_56080__$1;
(statearr_56099_56147[(2)] = inst_56070);

(statearr_56099_56147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56081 === (17))){
var inst_56035 = (state_56080[(10)]);
var inst_56044 = cljs.core.first.call(null,inst_56035);
var inst_56045 = cljs.core.async.muxch_STAR_.call(null,inst_56044);
var inst_56046 = cljs.core.async.close_BANG_.call(null,inst_56045);
var inst_56047 = cljs.core.next.call(null,inst_56035);
var inst_56021 = inst_56047;
var inst_56022 = null;
var inst_56023 = (0);
var inst_56024 = (0);
var state_56080__$1 = (function (){var statearr_56100 = state_56080;
(statearr_56100[(12)] = inst_56021);

(statearr_56100[(13)] = inst_56022);

(statearr_56100[(14)] = inst_56046);

(statearr_56100[(15)] = inst_56023);

(statearr_56100[(16)] = inst_56024);

return statearr_56100;
})();
var statearr_56101_56148 = state_56080__$1;
(statearr_56101_56148[(2)] = null);

(statearr_56101_56148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56081 === (3))){
var inst_56078 = (state_56080[(2)]);
var state_56080__$1 = state_56080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56080__$1,inst_56078);
} else {
if((state_val_56081 === (12))){
var inst_56055 = (state_56080[(2)]);
var state_56080__$1 = state_56080;
var statearr_56102_56149 = state_56080__$1;
(statearr_56102_56149[(2)] = inst_56055);

(statearr_56102_56149[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56081 === (2))){
var state_56080__$1 = state_56080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56080__$1,(4),ch);
} else {
if((state_val_56081 === (23))){
var state_56080__$1 = state_56080;
var statearr_56103_56150 = state_56080__$1;
(statearr_56103_56150[(2)] = null);

(statearr_56103_56150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56081 === (19))){
var inst_56061 = (state_56080[(11)]);
var inst_56011 = (state_56080[(8)]);
var inst_56063 = cljs.core.async.muxch_STAR_.call(null,inst_56061);
var state_56080__$1 = state_56080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56080__$1,(22),inst_56063,inst_56011);
} else {
if((state_val_56081 === (11))){
var inst_56021 = (state_56080[(12)]);
var inst_56035 = (state_56080[(10)]);
var inst_56035__$1 = cljs.core.seq.call(null,inst_56021);
var state_56080__$1 = (function (){var statearr_56104 = state_56080;
(statearr_56104[(10)] = inst_56035__$1);

return statearr_56104;
})();
if(inst_56035__$1){
var statearr_56105_56151 = state_56080__$1;
(statearr_56105_56151[(1)] = (13));

} else {
var statearr_56106_56152 = state_56080__$1;
(statearr_56106_56152[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56081 === (9))){
var inst_56057 = (state_56080[(2)]);
var state_56080__$1 = state_56080;
var statearr_56107_56153 = state_56080__$1;
(statearr_56107_56153[(2)] = inst_56057);

(statearr_56107_56153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56081 === (5))){
var inst_56018 = cljs.core.deref.call(null,mults);
var inst_56019 = cljs.core.vals.call(null,inst_56018);
var inst_56020 = cljs.core.seq.call(null,inst_56019);
var inst_56021 = inst_56020;
var inst_56022 = null;
var inst_56023 = (0);
var inst_56024 = (0);
var state_56080__$1 = (function (){var statearr_56108 = state_56080;
(statearr_56108[(12)] = inst_56021);

(statearr_56108[(13)] = inst_56022);

(statearr_56108[(15)] = inst_56023);

(statearr_56108[(16)] = inst_56024);

return statearr_56108;
})();
var statearr_56109_56154 = state_56080__$1;
(statearr_56109_56154[(2)] = null);

(statearr_56109_56154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56081 === (14))){
var state_56080__$1 = state_56080;
var statearr_56113_56155 = state_56080__$1;
(statearr_56113_56155[(2)] = null);

(statearr_56113_56155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56081 === (16))){
var inst_56035 = (state_56080[(10)]);
var inst_56039 = cljs.core.chunk_first.call(null,inst_56035);
var inst_56040 = cljs.core.chunk_rest.call(null,inst_56035);
var inst_56041 = cljs.core.count.call(null,inst_56039);
var inst_56021 = inst_56040;
var inst_56022 = inst_56039;
var inst_56023 = inst_56041;
var inst_56024 = (0);
var state_56080__$1 = (function (){var statearr_56114 = state_56080;
(statearr_56114[(12)] = inst_56021);

(statearr_56114[(13)] = inst_56022);

(statearr_56114[(15)] = inst_56023);

(statearr_56114[(16)] = inst_56024);

return statearr_56114;
})();
var statearr_56115_56156 = state_56080__$1;
(statearr_56115_56156[(2)] = null);

(statearr_56115_56156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56081 === (10))){
var inst_56021 = (state_56080[(12)]);
var inst_56022 = (state_56080[(13)]);
var inst_56023 = (state_56080[(15)]);
var inst_56024 = (state_56080[(16)]);
var inst_56029 = cljs.core._nth.call(null,inst_56022,inst_56024);
var inst_56030 = cljs.core.async.muxch_STAR_.call(null,inst_56029);
var inst_56031 = cljs.core.async.close_BANG_.call(null,inst_56030);
var inst_56032 = (inst_56024 + (1));
var tmp56110 = inst_56021;
var tmp56111 = inst_56022;
var tmp56112 = inst_56023;
var inst_56021__$1 = tmp56110;
var inst_56022__$1 = tmp56111;
var inst_56023__$1 = tmp56112;
var inst_56024__$1 = inst_56032;
var state_56080__$1 = (function (){var statearr_56116 = state_56080;
(statearr_56116[(12)] = inst_56021__$1);

(statearr_56116[(13)] = inst_56022__$1);

(statearr_56116[(15)] = inst_56023__$1);

(statearr_56116[(16)] = inst_56024__$1);

(statearr_56116[(17)] = inst_56031);

return statearr_56116;
})();
var statearr_56117_56157 = state_56080__$1;
(statearr_56117_56157[(2)] = null);

(statearr_56117_56157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56081 === (18))){
var inst_56050 = (state_56080[(2)]);
var state_56080__$1 = state_56080;
var statearr_56118_56158 = state_56080__$1;
(statearr_56118_56158[(2)] = inst_56050);

(statearr_56118_56158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56081 === (8))){
var inst_56023 = (state_56080[(15)]);
var inst_56024 = (state_56080[(16)]);
var inst_56026 = (inst_56024 < inst_56023);
var inst_56027 = inst_56026;
var state_56080__$1 = state_56080;
if(cljs.core.truth_(inst_56027)){
var statearr_56119_56159 = state_56080__$1;
(statearr_56119_56159[(1)] = (10));

} else {
var statearr_56120_56160 = state_56080__$1;
(statearr_56120_56160[(1)] = (11));

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
});})(c__33352__auto___56132,mults,ensure_mult,p))
;
return ((function (switch__33287__auto__,c__33352__auto___56132,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33288__auto__ = null;
var cljs$core$async$state_machine__33288__auto____0 = (function (){
var statearr_56124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56124[(0)] = cljs$core$async$state_machine__33288__auto__);

(statearr_56124[(1)] = (1));

return statearr_56124;
});
var cljs$core$async$state_machine__33288__auto____1 = (function (state_56080){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_56080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e56125){if((e56125 instanceof Object)){
var ex__33291__auto__ = e56125;
var statearr_56126_56161 = state_56080;
(statearr_56126_56161[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56162 = state_56080;
state_56080 = G__56162;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$state_machine__33288__auto__ = function(state_56080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33288__auto____1.call(this,state_56080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33288__auto____0;
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33288__auto____1;
return cljs$core$async$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___56132,mults,ensure_mult,p))
})();
var state__33354__auto__ = (function (){var statearr_56127 = f__33353__auto__.call(null);
(statearr_56127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___56132);

return statearr_56127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___56132,mults,ensure_mult,p))
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
var args56163 = [];
var len__26121__auto___56166 = arguments.length;
var i__26122__auto___56167 = (0);
while(true){
if((i__26122__auto___56167 < len__26121__auto___56166)){
args56163.push((arguments[i__26122__auto___56167]));

var G__56168 = (i__26122__auto___56167 + (1));
i__26122__auto___56167 = G__56168;
continue;
} else {
}
break;
}

var G__56165 = args56163.length;
switch (G__56165) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56163.length)].join('')));

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
var args56170 = [];
var len__26121__auto___56173 = arguments.length;
var i__26122__auto___56174 = (0);
while(true){
if((i__26122__auto___56174 < len__26121__auto___56173)){
args56170.push((arguments[i__26122__auto___56174]));

var G__56175 = (i__26122__auto___56174 + (1));
i__26122__auto___56174 = G__56175;
continue;
} else {
}
break;
}

var G__56172 = args56170.length;
switch (G__56172) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56170.length)].join('')));

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
var args56177 = [];
var len__26121__auto___56248 = arguments.length;
var i__26122__auto___56249 = (0);
while(true){
if((i__26122__auto___56249 < len__26121__auto___56248)){
args56177.push((arguments[i__26122__auto___56249]));

var G__56250 = (i__26122__auto___56249 + (1));
i__26122__auto___56249 = G__56250;
continue;
} else {
}
break;
}

var G__56179 = args56177.length;
switch (G__56179) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56177.length)].join('')));

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
var c__33352__auto___56252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___56252,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___56252,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_56218){
var state_val_56219 = (state_56218[(1)]);
if((state_val_56219 === (7))){
var state_56218__$1 = state_56218;
var statearr_56220_56253 = state_56218__$1;
(statearr_56220_56253[(2)] = null);

(statearr_56220_56253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56219 === (1))){
var state_56218__$1 = state_56218;
var statearr_56221_56254 = state_56218__$1;
(statearr_56221_56254[(2)] = null);

(statearr_56221_56254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56219 === (4))){
var inst_56182 = (state_56218[(7)]);
var inst_56184 = (inst_56182 < cnt);
var state_56218__$1 = state_56218;
if(cljs.core.truth_(inst_56184)){
var statearr_56222_56255 = state_56218__$1;
(statearr_56222_56255[(1)] = (6));

} else {
var statearr_56223_56256 = state_56218__$1;
(statearr_56223_56256[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56219 === (15))){
var inst_56214 = (state_56218[(2)]);
var state_56218__$1 = state_56218;
var statearr_56224_56257 = state_56218__$1;
(statearr_56224_56257[(2)] = inst_56214);

(statearr_56224_56257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56219 === (13))){
var inst_56207 = cljs.core.async.close_BANG_.call(null,out);
var state_56218__$1 = state_56218;
var statearr_56225_56258 = state_56218__$1;
(statearr_56225_56258[(2)] = inst_56207);

(statearr_56225_56258[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56219 === (6))){
var state_56218__$1 = state_56218;
var statearr_56226_56259 = state_56218__$1;
(statearr_56226_56259[(2)] = null);

(statearr_56226_56259[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56219 === (3))){
var inst_56216 = (state_56218[(2)]);
var state_56218__$1 = state_56218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56218__$1,inst_56216);
} else {
if((state_val_56219 === (12))){
var inst_56204 = (state_56218[(8)]);
var inst_56204__$1 = (state_56218[(2)]);
var inst_56205 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_56204__$1);
var state_56218__$1 = (function (){var statearr_56227 = state_56218;
(statearr_56227[(8)] = inst_56204__$1);

return statearr_56227;
})();
if(cljs.core.truth_(inst_56205)){
var statearr_56228_56260 = state_56218__$1;
(statearr_56228_56260[(1)] = (13));

} else {
var statearr_56229_56261 = state_56218__$1;
(statearr_56229_56261[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56219 === (2))){
var inst_56181 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_56182 = (0);
var state_56218__$1 = (function (){var statearr_56230 = state_56218;
(statearr_56230[(9)] = inst_56181);

(statearr_56230[(7)] = inst_56182);

return statearr_56230;
})();
var statearr_56231_56262 = state_56218__$1;
(statearr_56231_56262[(2)] = null);

(statearr_56231_56262[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56219 === (11))){
var inst_56182 = (state_56218[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_56218,(10),Object,null,(9));
var inst_56191 = chs__$1.call(null,inst_56182);
var inst_56192 = done.call(null,inst_56182);
var inst_56193 = cljs.core.async.take_BANG_.call(null,inst_56191,inst_56192);
var state_56218__$1 = state_56218;
var statearr_56232_56263 = state_56218__$1;
(statearr_56232_56263[(2)] = inst_56193);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56218__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56219 === (9))){
var inst_56182 = (state_56218[(7)]);
var inst_56195 = (state_56218[(2)]);
var inst_56196 = (inst_56182 + (1));
var inst_56182__$1 = inst_56196;
var state_56218__$1 = (function (){var statearr_56233 = state_56218;
(statearr_56233[(10)] = inst_56195);

(statearr_56233[(7)] = inst_56182__$1);

return statearr_56233;
})();
var statearr_56234_56264 = state_56218__$1;
(statearr_56234_56264[(2)] = null);

(statearr_56234_56264[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56219 === (5))){
var inst_56202 = (state_56218[(2)]);
var state_56218__$1 = (function (){var statearr_56235 = state_56218;
(statearr_56235[(11)] = inst_56202);

return statearr_56235;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56218__$1,(12),dchan);
} else {
if((state_val_56219 === (14))){
var inst_56204 = (state_56218[(8)]);
var inst_56209 = cljs.core.apply.call(null,f,inst_56204);
var state_56218__$1 = state_56218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56218__$1,(16),out,inst_56209);
} else {
if((state_val_56219 === (16))){
var inst_56211 = (state_56218[(2)]);
var state_56218__$1 = (function (){var statearr_56236 = state_56218;
(statearr_56236[(12)] = inst_56211);

return statearr_56236;
})();
var statearr_56237_56265 = state_56218__$1;
(statearr_56237_56265[(2)] = null);

(statearr_56237_56265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56219 === (10))){
var inst_56186 = (state_56218[(2)]);
var inst_56187 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_56218__$1 = (function (){var statearr_56238 = state_56218;
(statearr_56238[(13)] = inst_56186);

return statearr_56238;
})();
var statearr_56239_56266 = state_56218__$1;
(statearr_56239_56266[(2)] = inst_56187);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56218__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56219 === (8))){
var inst_56200 = (state_56218[(2)]);
var state_56218__$1 = state_56218;
var statearr_56240_56267 = state_56218__$1;
(statearr_56240_56267[(2)] = inst_56200);

(statearr_56240_56267[(1)] = (5));


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
});})(c__33352__auto___56252,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33287__auto__,c__33352__auto___56252,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33288__auto__ = null;
var cljs$core$async$state_machine__33288__auto____0 = (function (){
var statearr_56244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56244[(0)] = cljs$core$async$state_machine__33288__auto__);

(statearr_56244[(1)] = (1));

return statearr_56244;
});
var cljs$core$async$state_machine__33288__auto____1 = (function (state_56218){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_56218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e56245){if((e56245 instanceof Object)){
var ex__33291__auto__ = e56245;
var statearr_56246_56268 = state_56218;
(statearr_56246_56268[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56269 = state_56218;
state_56218 = G__56269;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$state_machine__33288__auto__ = function(state_56218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33288__auto____1.call(this,state_56218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33288__auto____0;
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33288__auto____1;
return cljs$core$async$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___56252,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33354__auto__ = (function (){var statearr_56247 = f__33353__auto__.call(null);
(statearr_56247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___56252);

return statearr_56247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___56252,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args56271 = [];
var len__26121__auto___56329 = arguments.length;
var i__26122__auto___56330 = (0);
while(true){
if((i__26122__auto___56330 < len__26121__auto___56329)){
args56271.push((arguments[i__26122__auto___56330]));

var G__56331 = (i__26122__auto___56330 + (1));
i__26122__auto___56330 = G__56331;
continue;
} else {
}
break;
}

var G__56273 = args56271.length;
switch (G__56273) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56271.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33352__auto___56333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___56333,out){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___56333,out){
return (function (state_56305){
var state_val_56306 = (state_56305[(1)]);
if((state_val_56306 === (7))){
var inst_56284 = (state_56305[(7)]);
var inst_56285 = (state_56305[(8)]);
var inst_56284__$1 = (state_56305[(2)]);
var inst_56285__$1 = cljs.core.nth.call(null,inst_56284__$1,(0),null);
var inst_56286 = cljs.core.nth.call(null,inst_56284__$1,(1),null);
var inst_56287 = (inst_56285__$1 == null);
var state_56305__$1 = (function (){var statearr_56307 = state_56305;
(statearr_56307[(9)] = inst_56286);

(statearr_56307[(7)] = inst_56284__$1);

(statearr_56307[(8)] = inst_56285__$1);

return statearr_56307;
})();
if(cljs.core.truth_(inst_56287)){
var statearr_56308_56334 = state_56305__$1;
(statearr_56308_56334[(1)] = (8));

} else {
var statearr_56309_56335 = state_56305__$1;
(statearr_56309_56335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56306 === (1))){
var inst_56274 = cljs.core.vec.call(null,chs);
var inst_56275 = inst_56274;
var state_56305__$1 = (function (){var statearr_56310 = state_56305;
(statearr_56310[(10)] = inst_56275);

return statearr_56310;
})();
var statearr_56311_56336 = state_56305__$1;
(statearr_56311_56336[(2)] = null);

(statearr_56311_56336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56306 === (4))){
var inst_56275 = (state_56305[(10)]);
var state_56305__$1 = state_56305;
return cljs.core.async.ioc_alts_BANG_.call(null,state_56305__$1,(7),inst_56275);
} else {
if((state_val_56306 === (6))){
var inst_56301 = (state_56305[(2)]);
var state_56305__$1 = state_56305;
var statearr_56312_56337 = state_56305__$1;
(statearr_56312_56337[(2)] = inst_56301);

(statearr_56312_56337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56306 === (3))){
var inst_56303 = (state_56305[(2)]);
var state_56305__$1 = state_56305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56305__$1,inst_56303);
} else {
if((state_val_56306 === (2))){
var inst_56275 = (state_56305[(10)]);
var inst_56277 = cljs.core.count.call(null,inst_56275);
var inst_56278 = (inst_56277 > (0));
var state_56305__$1 = state_56305;
if(cljs.core.truth_(inst_56278)){
var statearr_56314_56338 = state_56305__$1;
(statearr_56314_56338[(1)] = (4));

} else {
var statearr_56315_56339 = state_56305__$1;
(statearr_56315_56339[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56306 === (11))){
var inst_56275 = (state_56305[(10)]);
var inst_56294 = (state_56305[(2)]);
var tmp56313 = inst_56275;
var inst_56275__$1 = tmp56313;
var state_56305__$1 = (function (){var statearr_56316 = state_56305;
(statearr_56316[(11)] = inst_56294);

(statearr_56316[(10)] = inst_56275__$1);

return statearr_56316;
})();
var statearr_56317_56340 = state_56305__$1;
(statearr_56317_56340[(2)] = null);

(statearr_56317_56340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56306 === (9))){
var inst_56285 = (state_56305[(8)]);
var state_56305__$1 = state_56305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56305__$1,(11),out,inst_56285);
} else {
if((state_val_56306 === (5))){
var inst_56299 = cljs.core.async.close_BANG_.call(null,out);
var state_56305__$1 = state_56305;
var statearr_56318_56341 = state_56305__$1;
(statearr_56318_56341[(2)] = inst_56299);

(statearr_56318_56341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56306 === (10))){
var inst_56297 = (state_56305[(2)]);
var state_56305__$1 = state_56305;
var statearr_56319_56342 = state_56305__$1;
(statearr_56319_56342[(2)] = inst_56297);

(statearr_56319_56342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56306 === (8))){
var inst_56286 = (state_56305[(9)]);
var inst_56284 = (state_56305[(7)]);
var inst_56275 = (state_56305[(10)]);
var inst_56285 = (state_56305[(8)]);
var inst_56289 = (function (){var cs = inst_56275;
var vec__56280 = inst_56284;
var v = inst_56285;
var c = inst_56286;
return ((function (cs,vec__56280,v,c,inst_56286,inst_56284,inst_56275,inst_56285,state_val_56306,c__33352__auto___56333,out){
return (function (p1__56270_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__56270_SHARP_);
});
;})(cs,vec__56280,v,c,inst_56286,inst_56284,inst_56275,inst_56285,state_val_56306,c__33352__auto___56333,out))
})();
var inst_56290 = cljs.core.filterv.call(null,inst_56289,inst_56275);
var inst_56275__$1 = inst_56290;
var state_56305__$1 = (function (){var statearr_56320 = state_56305;
(statearr_56320[(10)] = inst_56275__$1);

return statearr_56320;
})();
var statearr_56321_56343 = state_56305__$1;
(statearr_56321_56343[(2)] = null);

(statearr_56321_56343[(1)] = (2));


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
});})(c__33352__auto___56333,out))
;
return ((function (switch__33287__auto__,c__33352__auto___56333,out){
return (function() {
var cljs$core$async$state_machine__33288__auto__ = null;
var cljs$core$async$state_machine__33288__auto____0 = (function (){
var statearr_56325 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56325[(0)] = cljs$core$async$state_machine__33288__auto__);

(statearr_56325[(1)] = (1));

return statearr_56325;
});
var cljs$core$async$state_machine__33288__auto____1 = (function (state_56305){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_56305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e56326){if((e56326 instanceof Object)){
var ex__33291__auto__ = e56326;
var statearr_56327_56344 = state_56305;
(statearr_56327_56344[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56345 = state_56305;
state_56305 = G__56345;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$state_machine__33288__auto__ = function(state_56305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33288__auto____1.call(this,state_56305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33288__auto____0;
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33288__auto____1;
return cljs$core$async$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___56333,out))
})();
var state__33354__auto__ = (function (){var statearr_56328 = f__33353__auto__.call(null);
(statearr_56328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___56333);

return statearr_56328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___56333,out))
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
var args56346 = [];
var len__26121__auto___56395 = arguments.length;
var i__26122__auto___56396 = (0);
while(true){
if((i__26122__auto___56396 < len__26121__auto___56395)){
args56346.push((arguments[i__26122__auto___56396]));

var G__56397 = (i__26122__auto___56396 + (1));
i__26122__auto___56396 = G__56397;
continue;
} else {
}
break;
}

var G__56348 = args56346.length;
switch (G__56348) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56346.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33352__auto___56399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___56399,out){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___56399,out){
return (function (state_56372){
var state_val_56373 = (state_56372[(1)]);
if((state_val_56373 === (7))){
var inst_56354 = (state_56372[(7)]);
var inst_56354__$1 = (state_56372[(2)]);
var inst_56355 = (inst_56354__$1 == null);
var inst_56356 = cljs.core.not.call(null,inst_56355);
var state_56372__$1 = (function (){var statearr_56374 = state_56372;
(statearr_56374[(7)] = inst_56354__$1);

return statearr_56374;
})();
if(inst_56356){
var statearr_56375_56400 = state_56372__$1;
(statearr_56375_56400[(1)] = (8));

} else {
var statearr_56376_56401 = state_56372__$1;
(statearr_56376_56401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (1))){
var inst_56349 = (0);
var state_56372__$1 = (function (){var statearr_56377 = state_56372;
(statearr_56377[(8)] = inst_56349);

return statearr_56377;
})();
var statearr_56378_56402 = state_56372__$1;
(statearr_56378_56402[(2)] = null);

(statearr_56378_56402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (4))){
var state_56372__$1 = state_56372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56372__$1,(7),ch);
} else {
if((state_val_56373 === (6))){
var inst_56367 = (state_56372[(2)]);
var state_56372__$1 = state_56372;
var statearr_56379_56403 = state_56372__$1;
(statearr_56379_56403[(2)] = inst_56367);

(statearr_56379_56403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (3))){
var inst_56369 = (state_56372[(2)]);
var inst_56370 = cljs.core.async.close_BANG_.call(null,out);
var state_56372__$1 = (function (){var statearr_56380 = state_56372;
(statearr_56380[(9)] = inst_56369);

return statearr_56380;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56372__$1,inst_56370);
} else {
if((state_val_56373 === (2))){
var inst_56349 = (state_56372[(8)]);
var inst_56351 = (inst_56349 < n);
var state_56372__$1 = state_56372;
if(cljs.core.truth_(inst_56351)){
var statearr_56381_56404 = state_56372__$1;
(statearr_56381_56404[(1)] = (4));

} else {
var statearr_56382_56405 = state_56372__$1;
(statearr_56382_56405[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (11))){
var inst_56349 = (state_56372[(8)]);
var inst_56359 = (state_56372[(2)]);
var inst_56360 = (inst_56349 + (1));
var inst_56349__$1 = inst_56360;
var state_56372__$1 = (function (){var statearr_56383 = state_56372;
(statearr_56383[(10)] = inst_56359);

(statearr_56383[(8)] = inst_56349__$1);

return statearr_56383;
})();
var statearr_56384_56406 = state_56372__$1;
(statearr_56384_56406[(2)] = null);

(statearr_56384_56406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (9))){
var state_56372__$1 = state_56372;
var statearr_56385_56407 = state_56372__$1;
(statearr_56385_56407[(2)] = null);

(statearr_56385_56407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (5))){
var state_56372__$1 = state_56372;
var statearr_56386_56408 = state_56372__$1;
(statearr_56386_56408[(2)] = null);

(statearr_56386_56408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (10))){
var inst_56364 = (state_56372[(2)]);
var state_56372__$1 = state_56372;
var statearr_56387_56409 = state_56372__$1;
(statearr_56387_56409[(2)] = inst_56364);

(statearr_56387_56409[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (8))){
var inst_56354 = (state_56372[(7)]);
var state_56372__$1 = state_56372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56372__$1,(11),out,inst_56354);
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
});})(c__33352__auto___56399,out))
;
return ((function (switch__33287__auto__,c__33352__auto___56399,out){
return (function() {
var cljs$core$async$state_machine__33288__auto__ = null;
var cljs$core$async$state_machine__33288__auto____0 = (function (){
var statearr_56391 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56391[(0)] = cljs$core$async$state_machine__33288__auto__);

(statearr_56391[(1)] = (1));

return statearr_56391;
});
var cljs$core$async$state_machine__33288__auto____1 = (function (state_56372){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_56372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e56392){if((e56392 instanceof Object)){
var ex__33291__auto__ = e56392;
var statearr_56393_56410 = state_56372;
(statearr_56393_56410[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56411 = state_56372;
state_56372 = G__56411;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$state_machine__33288__auto__ = function(state_56372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33288__auto____1.call(this,state_56372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33288__auto____0;
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33288__auto____1;
return cljs$core$async$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___56399,out))
})();
var state__33354__auto__ = (function (){var statearr_56394 = f__33353__auto__.call(null);
(statearr_56394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___56399);

return statearr_56394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___56399,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async56419 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56419 = (function (map_LT_,f,ch,meta56420){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta56420 = meta56420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async56419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56421,meta56420__$1){
var self__ = this;
var _56421__$1 = this;
return (new cljs.core.async.t_cljs$core$async56419(self__.map_LT_,self__.f,self__.ch,meta56420__$1));
});

cljs.core.async.t_cljs$core$async56419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56421){
var self__ = this;
var _56421__$1 = this;
return self__.meta56420;
});

cljs.core.async.t_cljs$core$async56419.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async56419.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async56419.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async56419.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async56419.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async56422 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56422 = (function (map_LT_,f,ch,meta56420,_,fn1,meta56423){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta56420 = meta56420;
this._ = _;
this.fn1 = fn1;
this.meta56423 = meta56423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async56422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_56424,meta56423__$1){
var self__ = this;
var _56424__$1 = this;
return (new cljs.core.async.t_cljs$core$async56422(self__.map_LT_,self__.f,self__.ch,self__.meta56420,self__._,self__.fn1,meta56423__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async56422.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_56424){
var self__ = this;
var _56424__$1 = this;
return self__.meta56423;
});})(___$1))
;

cljs.core.async.t_cljs$core$async56422.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async56422.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async56422.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async56422.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__56412_SHARP_){
return f1.call(null,(((p1__56412_SHARP_ == null))?null:self__.f.call(null,p1__56412_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async56422.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56420","meta56420",-1657773124,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async56419","cljs.core.async/t_cljs$core$async56419",-1271206532,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta56423","meta56423",-647906007,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async56422.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56422";

cljs.core.async.t_cljs$core$async56422.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async56422");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async56422 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async56422(map_LT___$1,f__$1,ch__$1,meta56420__$1,___$2,fn1__$1,meta56423){
return (new cljs.core.async.t_cljs$core$async56422(map_LT___$1,f__$1,ch__$1,meta56420__$1,___$2,fn1__$1,meta56423));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async56422(self__.map_LT_,self__.f,self__.ch,self__.meta56420,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async56419.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async56419.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async56419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56420","meta56420",-1657773124,null)], null);
});

cljs.core.async.t_cljs$core$async56419.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56419";

cljs.core.async.t_cljs$core$async56419.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async56419");
});

cljs.core.async.__GT_t_cljs$core$async56419 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async56419(map_LT___$1,f__$1,ch__$1,meta56420){
return (new cljs.core.async.t_cljs$core$async56419(map_LT___$1,f__$1,ch__$1,meta56420));
});

}

return (new cljs.core.async.t_cljs$core$async56419(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async56428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56428 = (function (map_GT_,f,ch,meta56429){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta56429 = meta56429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async56428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56430,meta56429__$1){
var self__ = this;
var _56430__$1 = this;
return (new cljs.core.async.t_cljs$core$async56428(self__.map_GT_,self__.f,self__.ch,meta56429__$1));
});

cljs.core.async.t_cljs$core$async56428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56430){
var self__ = this;
var _56430__$1 = this;
return self__.meta56429;
});

cljs.core.async.t_cljs$core$async56428.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async56428.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async56428.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async56428.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async56428.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async56428.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async56428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56429","meta56429",2100647478,null)], null);
});

cljs.core.async.t_cljs$core$async56428.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56428";

cljs.core.async.t_cljs$core$async56428.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async56428");
});

cljs.core.async.__GT_t_cljs$core$async56428 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async56428(map_GT___$1,f__$1,ch__$1,meta56429){
return (new cljs.core.async.t_cljs$core$async56428(map_GT___$1,f__$1,ch__$1,meta56429));
});

}

return (new cljs.core.async.t_cljs$core$async56428(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async56434 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56434 = (function (filter_GT_,p,ch,meta56435){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta56435 = meta56435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async56434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56436,meta56435__$1){
var self__ = this;
var _56436__$1 = this;
return (new cljs.core.async.t_cljs$core$async56434(self__.filter_GT_,self__.p,self__.ch,meta56435__$1));
});

cljs.core.async.t_cljs$core$async56434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56436){
var self__ = this;
var _56436__$1 = this;
return self__.meta56435;
});

cljs.core.async.t_cljs$core$async56434.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async56434.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async56434.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async56434.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async56434.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async56434.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async56434.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async56434.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56435","meta56435",35481128,null)], null);
});

cljs.core.async.t_cljs$core$async56434.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56434";

cljs.core.async.t_cljs$core$async56434.cljs$lang$ctorPrWriter = (function (this__25652__auto__,writer__25653__auto__,opt__25654__auto__){
return cljs.core._write.call(null,writer__25653__auto__,"cljs.core.async/t_cljs$core$async56434");
});

cljs.core.async.__GT_t_cljs$core$async56434 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async56434(filter_GT___$1,p__$1,ch__$1,meta56435){
return (new cljs.core.async.t_cljs$core$async56434(filter_GT___$1,p__$1,ch__$1,meta56435));
});

}

return (new cljs.core.async.t_cljs$core$async56434(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args56437 = [];
var len__26121__auto___56481 = arguments.length;
var i__26122__auto___56482 = (0);
while(true){
if((i__26122__auto___56482 < len__26121__auto___56481)){
args56437.push((arguments[i__26122__auto___56482]));

var G__56483 = (i__26122__auto___56482 + (1));
i__26122__auto___56482 = G__56483;
continue;
} else {
}
break;
}

var G__56439 = args56437.length;
switch (G__56439) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56437.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33352__auto___56485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___56485,out){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___56485,out){
return (function (state_56460){
var state_val_56461 = (state_56460[(1)]);
if((state_val_56461 === (7))){
var inst_56456 = (state_56460[(2)]);
var state_56460__$1 = state_56460;
var statearr_56462_56486 = state_56460__$1;
(statearr_56462_56486[(2)] = inst_56456);

(statearr_56462_56486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56461 === (1))){
var state_56460__$1 = state_56460;
var statearr_56463_56487 = state_56460__$1;
(statearr_56463_56487[(2)] = null);

(statearr_56463_56487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56461 === (4))){
var inst_56442 = (state_56460[(7)]);
var inst_56442__$1 = (state_56460[(2)]);
var inst_56443 = (inst_56442__$1 == null);
var state_56460__$1 = (function (){var statearr_56464 = state_56460;
(statearr_56464[(7)] = inst_56442__$1);

return statearr_56464;
})();
if(cljs.core.truth_(inst_56443)){
var statearr_56465_56488 = state_56460__$1;
(statearr_56465_56488[(1)] = (5));

} else {
var statearr_56466_56489 = state_56460__$1;
(statearr_56466_56489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56461 === (6))){
var inst_56442 = (state_56460[(7)]);
var inst_56447 = p.call(null,inst_56442);
var state_56460__$1 = state_56460;
if(cljs.core.truth_(inst_56447)){
var statearr_56467_56490 = state_56460__$1;
(statearr_56467_56490[(1)] = (8));

} else {
var statearr_56468_56491 = state_56460__$1;
(statearr_56468_56491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56461 === (3))){
var inst_56458 = (state_56460[(2)]);
var state_56460__$1 = state_56460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56460__$1,inst_56458);
} else {
if((state_val_56461 === (2))){
var state_56460__$1 = state_56460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56460__$1,(4),ch);
} else {
if((state_val_56461 === (11))){
var inst_56450 = (state_56460[(2)]);
var state_56460__$1 = state_56460;
var statearr_56469_56492 = state_56460__$1;
(statearr_56469_56492[(2)] = inst_56450);

(statearr_56469_56492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56461 === (9))){
var state_56460__$1 = state_56460;
var statearr_56470_56493 = state_56460__$1;
(statearr_56470_56493[(2)] = null);

(statearr_56470_56493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56461 === (5))){
var inst_56445 = cljs.core.async.close_BANG_.call(null,out);
var state_56460__$1 = state_56460;
var statearr_56471_56494 = state_56460__$1;
(statearr_56471_56494[(2)] = inst_56445);

(statearr_56471_56494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56461 === (10))){
var inst_56453 = (state_56460[(2)]);
var state_56460__$1 = (function (){var statearr_56472 = state_56460;
(statearr_56472[(8)] = inst_56453);

return statearr_56472;
})();
var statearr_56473_56495 = state_56460__$1;
(statearr_56473_56495[(2)] = null);

(statearr_56473_56495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56461 === (8))){
var inst_56442 = (state_56460[(7)]);
var state_56460__$1 = state_56460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56460__$1,(11),out,inst_56442);
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
});})(c__33352__auto___56485,out))
;
return ((function (switch__33287__auto__,c__33352__auto___56485,out){
return (function() {
var cljs$core$async$state_machine__33288__auto__ = null;
var cljs$core$async$state_machine__33288__auto____0 = (function (){
var statearr_56477 = [null,null,null,null,null,null,null,null,null];
(statearr_56477[(0)] = cljs$core$async$state_machine__33288__auto__);

(statearr_56477[(1)] = (1));

return statearr_56477;
});
var cljs$core$async$state_machine__33288__auto____1 = (function (state_56460){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_56460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e56478){if((e56478 instanceof Object)){
var ex__33291__auto__ = e56478;
var statearr_56479_56496 = state_56460;
(statearr_56479_56496[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56497 = state_56460;
state_56460 = G__56497;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$state_machine__33288__auto__ = function(state_56460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33288__auto____1.call(this,state_56460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33288__auto____0;
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33288__auto____1;
return cljs$core$async$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___56485,out))
})();
var state__33354__auto__ = (function (){var statearr_56480 = f__33353__auto__.call(null);
(statearr_56480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___56485);

return statearr_56480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___56485,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args56498 = [];
var len__26121__auto___56501 = arguments.length;
var i__26122__auto___56502 = (0);
while(true){
if((i__26122__auto___56502 < len__26121__auto___56501)){
args56498.push((arguments[i__26122__auto___56502]));

var G__56503 = (i__26122__auto___56502 + (1));
i__26122__auto___56502 = G__56503;
continue;
} else {
}
break;
}

var G__56500 = args56498.length;
switch (G__56500) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56498.length)].join('')));

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
return (function (state_56670){
var state_val_56671 = (state_56670[(1)]);
if((state_val_56671 === (7))){
var inst_56666 = (state_56670[(2)]);
var state_56670__$1 = state_56670;
var statearr_56672_56713 = state_56670__$1;
(statearr_56672_56713[(2)] = inst_56666);

(statearr_56672_56713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (20))){
var inst_56636 = (state_56670[(7)]);
var inst_56647 = (state_56670[(2)]);
var inst_56648 = cljs.core.next.call(null,inst_56636);
var inst_56622 = inst_56648;
var inst_56623 = null;
var inst_56624 = (0);
var inst_56625 = (0);
var state_56670__$1 = (function (){var statearr_56673 = state_56670;
(statearr_56673[(8)] = inst_56624);

(statearr_56673[(9)] = inst_56623);

(statearr_56673[(10)] = inst_56625);

(statearr_56673[(11)] = inst_56647);

(statearr_56673[(12)] = inst_56622);

return statearr_56673;
})();
var statearr_56674_56714 = state_56670__$1;
(statearr_56674_56714[(2)] = null);

(statearr_56674_56714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (1))){
var state_56670__$1 = state_56670;
var statearr_56675_56715 = state_56670__$1;
(statearr_56675_56715[(2)] = null);

(statearr_56675_56715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (4))){
var inst_56611 = (state_56670[(13)]);
var inst_56611__$1 = (state_56670[(2)]);
var inst_56612 = (inst_56611__$1 == null);
var state_56670__$1 = (function (){var statearr_56676 = state_56670;
(statearr_56676[(13)] = inst_56611__$1);

return statearr_56676;
})();
if(cljs.core.truth_(inst_56612)){
var statearr_56677_56716 = state_56670__$1;
(statearr_56677_56716[(1)] = (5));

} else {
var statearr_56678_56717 = state_56670__$1;
(statearr_56678_56717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (15))){
var state_56670__$1 = state_56670;
var statearr_56682_56718 = state_56670__$1;
(statearr_56682_56718[(2)] = null);

(statearr_56682_56718[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (21))){
var state_56670__$1 = state_56670;
var statearr_56683_56719 = state_56670__$1;
(statearr_56683_56719[(2)] = null);

(statearr_56683_56719[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (13))){
var inst_56624 = (state_56670[(8)]);
var inst_56623 = (state_56670[(9)]);
var inst_56625 = (state_56670[(10)]);
var inst_56622 = (state_56670[(12)]);
var inst_56632 = (state_56670[(2)]);
var inst_56633 = (inst_56625 + (1));
var tmp56679 = inst_56624;
var tmp56680 = inst_56623;
var tmp56681 = inst_56622;
var inst_56622__$1 = tmp56681;
var inst_56623__$1 = tmp56680;
var inst_56624__$1 = tmp56679;
var inst_56625__$1 = inst_56633;
var state_56670__$1 = (function (){var statearr_56684 = state_56670;
(statearr_56684[(8)] = inst_56624__$1);

(statearr_56684[(9)] = inst_56623__$1);

(statearr_56684[(14)] = inst_56632);

(statearr_56684[(10)] = inst_56625__$1);

(statearr_56684[(12)] = inst_56622__$1);

return statearr_56684;
})();
var statearr_56685_56720 = state_56670__$1;
(statearr_56685_56720[(2)] = null);

(statearr_56685_56720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (22))){
var state_56670__$1 = state_56670;
var statearr_56686_56721 = state_56670__$1;
(statearr_56686_56721[(2)] = null);

(statearr_56686_56721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (6))){
var inst_56611 = (state_56670[(13)]);
var inst_56620 = f.call(null,inst_56611);
var inst_56621 = cljs.core.seq.call(null,inst_56620);
var inst_56622 = inst_56621;
var inst_56623 = null;
var inst_56624 = (0);
var inst_56625 = (0);
var state_56670__$1 = (function (){var statearr_56687 = state_56670;
(statearr_56687[(8)] = inst_56624);

(statearr_56687[(9)] = inst_56623);

(statearr_56687[(10)] = inst_56625);

(statearr_56687[(12)] = inst_56622);

return statearr_56687;
})();
var statearr_56688_56722 = state_56670__$1;
(statearr_56688_56722[(2)] = null);

(statearr_56688_56722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (17))){
var inst_56636 = (state_56670[(7)]);
var inst_56640 = cljs.core.chunk_first.call(null,inst_56636);
var inst_56641 = cljs.core.chunk_rest.call(null,inst_56636);
var inst_56642 = cljs.core.count.call(null,inst_56640);
var inst_56622 = inst_56641;
var inst_56623 = inst_56640;
var inst_56624 = inst_56642;
var inst_56625 = (0);
var state_56670__$1 = (function (){var statearr_56689 = state_56670;
(statearr_56689[(8)] = inst_56624);

(statearr_56689[(9)] = inst_56623);

(statearr_56689[(10)] = inst_56625);

(statearr_56689[(12)] = inst_56622);

return statearr_56689;
})();
var statearr_56690_56723 = state_56670__$1;
(statearr_56690_56723[(2)] = null);

(statearr_56690_56723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (3))){
var inst_56668 = (state_56670[(2)]);
var state_56670__$1 = state_56670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56670__$1,inst_56668);
} else {
if((state_val_56671 === (12))){
var inst_56656 = (state_56670[(2)]);
var state_56670__$1 = state_56670;
var statearr_56691_56724 = state_56670__$1;
(statearr_56691_56724[(2)] = inst_56656);

(statearr_56691_56724[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (2))){
var state_56670__$1 = state_56670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56670__$1,(4),in$);
} else {
if((state_val_56671 === (23))){
var inst_56664 = (state_56670[(2)]);
var state_56670__$1 = state_56670;
var statearr_56692_56725 = state_56670__$1;
(statearr_56692_56725[(2)] = inst_56664);

(statearr_56692_56725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (19))){
var inst_56651 = (state_56670[(2)]);
var state_56670__$1 = state_56670;
var statearr_56693_56726 = state_56670__$1;
(statearr_56693_56726[(2)] = inst_56651);

(statearr_56693_56726[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (11))){
var inst_56622 = (state_56670[(12)]);
var inst_56636 = (state_56670[(7)]);
var inst_56636__$1 = cljs.core.seq.call(null,inst_56622);
var state_56670__$1 = (function (){var statearr_56694 = state_56670;
(statearr_56694[(7)] = inst_56636__$1);

return statearr_56694;
})();
if(inst_56636__$1){
var statearr_56695_56727 = state_56670__$1;
(statearr_56695_56727[(1)] = (14));

} else {
var statearr_56696_56728 = state_56670__$1;
(statearr_56696_56728[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (9))){
var inst_56658 = (state_56670[(2)]);
var inst_56659 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_56670__$1 = (function (){var statearr_56697 = state_56670;
(statearr_56697[(15)] = inst_56658);

return statearr_56697;
})();
if(cljs.core.truth_(inst_56659)){
var statearr_56698_56729 = state_56670__$1;
(statearr_56698_56729[(1)] = (21));

} else {
var statearr_56699_56730 = state_56670__$1;
(statearr_56699_56730[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (5))){
var inst_56614 = cljs.core.async.close_BANG_.call(null,out);
var state_56670__$1 = state_56670;
var statearr_56700_56731 = state_56670__$1;
(statearr_56700_56731[(2)] = inst_56614);

(statearr_56700_56731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (14))){
var inst_56636 = (state_56670[(7)]);
var inst_56638 = cljs.core.chunked_seq_QMARK_.call(null,inst_56636);
var state_56670__$1 = state_56670;
if(inst_56638){
var statearr_56701_56732 = state_56670__$1;
(statearr_56701_56732[(1)] = (17));

} else {
var statearr_56702_56733 = state_56670__$1;
(statearr_56702_56733[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (16))){
var inst_56654 = (state_56670[(2)]);
var state_56670__$1 = state_56670;
var statearr_56703_56734 = state_56670__$1;
(statearr_56703_56734[(2)] = inst_56654);

(statearr_56703_56734[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56671 === (10))){
var inst_56623 = (state_56670[(9)]);
var inst_56625 = (state_56670[(10)]);
var inst_56630 = cljs.core._nth.call(null,inst_56623,inst_56625);
var state_56670__$1 = state_56670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56670__$1,(13),out,inst_56630);
} else {
if((state_val_56671 === (18))){
var inst_56636 = (state_56670[(7)]);
var inst_56645 = cljs.core.first.call(null,inst_56636);
var state_56670__$1 = state_56670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56670__$1,(20),out,inst_56645);
} else {
if((state_val_56671 === (8))){
var inst_56624 = (state_56670[(8)]);
var inst_56625 = (state_56670[(10)]);
var inst_56627 = (inst_56625 < inst_56624);
var inst_56628 = inst_56627;
var state_56670__$1 = state_56670;
if(cljs.core.truth_(inst_56628)){
var statearr_56704_56735 = state_56670__$1;
(statearr_56704_56735[(1)] = (10));

} else {
var statearr_56705_56736 = state_56670__$1;
(statearr_56705_56736[(1)] = (11));

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
var statearr_56709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56709[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33288__auto__);

(statearr_56709[(1)] = (1));

return statearr_56709;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33288__auto____1 = (function (state_56670){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_56670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e56710){if((e56710 instanceof Object)){
var ex__33291__auto__ = e56710;
var statearr_56711_56737 = state_56670;
(statearr_56711_56737[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56738 = state_56670;
state_56670 = G__56738;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33288__auto__ = function(state_56670){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33288__auto____1.call(this,state_56670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33288__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33288__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__))
})();
var state__33354__auto__ = (function (){var statearr_56712 = f__33353__auto__.call(null);
(statearr_56712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_56712;
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
var args56739 = [];
var len__26121__auto___56742 = arguments.length;
var i__26122__auto___56743 = (0);
while(true){
if((i__26122__auto___56743 < len__26121__auto___56742)){
args56739.push((arguments[i__26122__auto___56743]));

var G__56744 = (i__26122__auto___56743 + (1));
i__26122__auto___56743 = G__56744;
continue;
} else {
}
break;
}

var G__56741 = args56739.length;
switch (G__56741) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56739.length)].join('')));

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
var args56746 = [];
var len__26121__auto___56749 = arguments.length;
var i__26122__auto___56750 = (0);
while(true){
if((i__26122__auto___56750 < len__26121__auto___56749)){
args56746.push((arguments[i__26122__auto___56750]));

var G__56751 = (i__26122__auto___56750 + (1));
i__26122__auto___56750 = G__56751;
continue;
} else {
}
break;
}

var G__56748 = args56746.length;
switch (G__56748) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56746.length)].join('')));

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
var args56753 = [];
var len__26121__auto___56804 = arguments.length;
var i__26122__auto___56805 = (0);
while(true){
if((i__26122__auto___56805 < len__26121__auto___56804)){
args56753.push((arguments[i__26122__auto___56805]));

var G__56806 = (i__26122__auto___56805 + (1));
i__26122__auto___56805 = G__56806;
continue;
} else {
}
break;
}

var G__56755 = args56753.length;
switch (G__56755) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56753.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33352__auto___56808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___56808,out){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___56808,out){
return (function (state_56779){
var state_val_56780 = (state_56779[(1)]);
if((state_val_56780 === (7))){
var inst_56774 = (state_56779[(2)]);
var state_56779__$1 = state_56779;
var statearr_56781_56809 = state_56779__$1;
(statearr_56781_56809[(2)] = inst_56774);

(statearr_56781_56809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56780 === (1))){
var inst_56756 = null;
var state_56779__$1 = (function (){var statearr_56782 = state_56779;
(statearr_56782[(7)] = inst_56756);

return statearr_56782;
})();
var statearr_56783_56810 = state_56779__$1;
(statearr_56783_56810[(2)] = null);

(statearr_56783_56810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56780 === (4))){
var inst_56759 = (state_56779[(8)]);
var inst_56759__$1 = (state_56779[(2)]);
var inst_56760 = (inst_56759__$1 == null);
var inst_56761 = cljs.core.not.call(null,inst_56760);
var state_56779__$1 = (function (){var statearr_56784 = state_56779;
(statearr_56784[(8)] = inst_56759__$1);

return statearr_56784;
})();
if(inst_56761){
var statearr_56785_56811 = state_56779__$1;
(statearr_56785_56811[(1)] = (5));

} else {
var statearr_56786_56812 = state_56779__$1;
(statearr_56786_56812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56780 === (6))){
var state_56779__$1 = state_56779;
var statearr_56787_56813 = state_56779__$1;
(statearr_56787_56813[(2)] = null);

(statearr_56787_56813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56780 === (3))){
var inst_56776 = (state_56779[(2)]);
var inst_56777 = cljs.core.async.close_BANG_.call(null,out);
var state_56779__$1 = (function (){var statearr_56788 = state_56779;
(statearr_56788[(9)] = inst_56776);

return statearr_56788;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56779__$1,inst_56777);
} else {
if((state_val_56780 === (2))){
var state_56779__$1 = state_56779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56779__$1,(4),ch);
} else {
if((state_val_56780 === (11))){
var inst_56759 = (state_56779[(8)]);
var inst_56768 = (state_56779[(2)]);
var inst_56756 = inst_56759;
var state_56779__$1 = (function (){var statearr_56789 = state_56779;
(statearr_56789[(7)] = inst_56756);

(statearr_56789[(10)] = inst_56768);

return statearr_56789;
})();
var statearr_56790_56814 = state_56779__$1;
(statearr_56790_56814[(2)] = null);

(statearr_56790_56814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56780 === (9))){
var inst_56759 = (state_56779[(8)]);
var state_56779__$1 = state_56779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56779__$1,(11),out,inst_56759);
} else {
if((state_val_56780 === (5))){
var inst_56756 = (state_56779[(7)]);
var inst_56759 = (state_56779[(8)]);
var inst_56763 = cljs.core._EQ_.call(null,inst_56759,inst_56756);
var state_56779__$1 = state_56779;
if(inst_56763){
var statearr_56792_56815 = state_56779__$1;
(statearr_56792_56815[(1)] = (8));

} else {
var statearr_56793_56816 = state_56779__$1;
(statearr_56793_56816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56780 === (10))){
var inst_56771 = (state_56779[(2)]);
var state_56779__$1 = state_56779;
var statearr_56794_56817 = state_56779__$1;
(statearr_56794_56817[(2)] = inst_56771);

(statearr_56794_56817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56780 === (8))){
var inst_56756 = (state_56779[(7)]);
var tmp56791 = inst_56756;
var inst_56756__$1 = tmp56791;
var state_56779__$1 = (function (){var statearr_56795 = state_56779;
(statearr_56795[(7)] = inst_56756__$1);

return statearr_56795;
})();
var statearr_56796_56818 = state_56779__$1;
(statearr_56796_56818[(2)] = null);

(statearr_56796_56818[(1)] = (2));


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
});})(c__33352__auto___56808,out))
;
return ((function (switch__33287__auto__,c__33352__auto___56808,out){
return (function() {
var cljs$core$async$state_machine__33288__auto__ = null;
var cljs$core$async$state_machine__33288__auto____0 = (function (){
var statearr_56800 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56800[(0)] = cljs$core$async$state_machine__33288__auto__);

(statearr_56800[(1)] = (1));

return statearr_56800;
});
var cljs$core$async$state_machine__33288__auto____1 = (function (state_56779){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_56779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e56801){if((e56801 instanceof Object)){
var ex__33291__auto__ = e56801;
var statearr_56802_56819 = state_56779;
(statearr_56802_56819[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56820 = state_56779;
state_56779 = G__56820;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$state_machine__33288__auto__ = function(state_56779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33288__auto____1.call(this,state_56779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33288__auto____0;
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33288__auto____1;
return cljs$core$async$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___56808,out))
})();
var state__33354__auto__ = (function (){var statearr_56803 = f__33353__auto__.call(null);
(statearr_56803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___56808);

return statearr_56803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___56808,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args56821 = [];
var len__26121__auto___56891 = arguments.length;
var i__26122__auto___56892 = (0);
while(true){
if((i__26122__auto___56892 < len__26121__auto___56891)){
args56821.push((arguments[i__26122__auto___56892]));

var G__56893 = (i__26122__auto___56892 + (1));
i__26122__auto___56892 = G__56893;
continue;
} else {
}
break;
}

var G__56823 = args56821.length;
switch (G__56823) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56821.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33352__auto___56895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___56895,out){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___56895,out){
return (function (state_56861){
var state_val_56862 = (state_56861[(1)]);
if((state_val_56862 === (7))){
var inst_56857 = (state_56861[(2)]);
var state_56861__$1 = state_56861;
var statearr_56863_56896 = state_56861__$1;
(statearr_56863_56896[(2)] = inst_56857);

(statearr_56863_56896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56862 === (1))){
var inst_56824 = (new Array(n));
var inst_56825 = inst_56824;
var inst_56826 = (0);
var state_56861__$1 = (function (){var statearr_56864 = state_56861;
(statearr_56864[(7)] = inst_56825);

(statearr_56864[(8)] = inst_56826);

return statearr_56864;
})();
var statearr_56865_56897 = state_56861__$1;
(statearr_56865_56897[(2)] = null);

(statearr_56865_56897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56862 === (4))){
var inst_56829 = (state_56861[(9)]);
var inst_56829__$1 = (state_56861[(2)]);
var inst_56830 = (inst_56829__$1 == null);
var inst_56831 = cljs.core.not.call(null,inst_56830);
var state_56861__$1 = (function (){var statearr_56866 = state_56861;
(statearr_56866[(9)] = inst_56829__$1);

return statearr_56866;
})();
if(inst_56831){
var statearr_56867_56898 = state_56861__$1;
(statearr_56867_56898[(1)] = (5));

} else {
var statearr_56868_56899 = state_56861__$1;
(statearr_56868_56899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56862 === (15))){
var inst_56851 = (state_56861[(2)]);
var state_56861__$1 = state_56861;
var statearr_56869_56900 = state_56861__$1;
(statearr_56869_56900[(2)] = inst_56851);

(statearr_56869_56900[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56862 === (13))){
var state_56861__$1 = state_56861;
var statearr_56870_56901 = state_56861__$1;
(statearr_56870_56901[(2)] = null);

(statearr_56870_56901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56862 === (6))){
var inst_56826 = (state_56861[(8)]);
var inst_56847 = (inst_56826 > (0));
var state_56861__$1 = state_56861;
if(cljs.core.truth_(inst_56847)){
var statearr_56871_56902 = state_56861__$1;
(statearr_56871_56902[(1)] = (12));

} else {
var statearr_56872_56903 = state_56861__$1;
(statearr_56872_56903[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56862 === (3))){
var inst_56859 = (state_56861[(2)]);
var state_56861__$1 = state_56861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56861__$1,inst_56859);
} else {
if((state_val_56862 === (12))){
var inst_56825 = (state_56861[(7)]);
var inst_56849 = cljs.core.vec.call(null,inst_56825);
var state_56861__$1 = state_56861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56861__$1,(15),out,inst_56849);
} else {
if((state_val_56862 === (2))){
var state_56861__$1 = state_56861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56861__$1,(4),ch);
} else {
if((state_val_56862 === (11))){
var inst_56841 = (state_56861[(2)]);
var inst_56842 = (new Array(n));
var inst_56825 = inst_56842;
var inst_56826 = (0);
var state_56861__$1 = (function (){var statearr_56873 = state_56861;
(statearr_56873[(7)] = inst_56825);

(statearr_56873[(8)] = inst_56826);

(statearr_56873[(10)] = inst_56841);

return statearr_56873;
})();
var statearr_56874_56904 = state_56861__$1;
(statearr_56874_56904[(2)] = null);

(statearr_56874_56904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56862 === (9))){
var inst_56825 = (state_56861[(7)]);
var inst_56839 = cljs.core.vec.call(null,inst_56825);
var state_56861__$1 = state_56861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56861__$1,(11),out,inst_56839);
} else {
if((state_val_56862 === (5))){
var inst_56825 = (state_56861[(7)]);
var inst_56829 = (state_56861[(9)]);
var inst_56826 = (state_56861[(8)]);
var inst_56834 = (state_56861[(11)]);
var inst_56833 = (inst_56825[inst_56826] = inst_56829);
var inst_56834__$1 = (inst_56826 + (1));
var inst_56835 = (inst_56834__$1 < n);
var state_56861__$1 = (function (){var statearr_56875 = state_56861;
(statearr_56875[(12)] = inst_56833);

(statearr_56875[(11)] = inst_56834__$1);

return statearr_56875;
})();
if(cljs.core.truth_(inst_56835)){
var statearr_56876_56905 = state_56861__$1;
(statearr_56876_56905[(1)] = (8));

} else {
var statearr_56877_56906 = state_56861__$1;
(statearr_56877_56906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56862 === (14))){
var inst_56854 = (state_56861[(2)]);
var inst_56855 = cljs.core.async.close_BANG_.call(null,out);
var state_56861__$1 = (function (){var statearr_56879 = state_56861;
(statearr_56879[(13)] = inst_56854);

return statearr_56879;
})();
var statearr_56880_56907 = state_56861__$1;
(statearr_56880_56907[(2)] = inst_56855);

(statearr_56880_56907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56862 === (10))){
var inst_56845 = (state_56861[(2)]);
var state_56861__$1 = state_56861;
var statearr_56881_56908 = state_56861__$1;
(statearr_56881_56908[(2)] = inst_56845);

(statearr_56881_56908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56862 === (8))){
var inst_56825 = (state_56861[(7)]);
var inst_56834 = (state_56861[(11)]);
var tmp56878 = inst_56825;
var inst_56825__$1 = tmp56878;
var inst_56826 = inst_56834;
var state_56861__$1 = (function (){var statearr_56882 = state_56861;
(statearr_56882[(7)] = inst_56825__$1);

(statearr_56882[(8)] = inst_56826);

return statearr_56882;
})();
var statearr_56883_56909 = state_56861__$1;
(statearr_56883_56909[(2)] = null);

(statearr_56883_56909[(1)] = (2));


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
});})(c__33352__auto___56895,out))
;
return ((function (switch__33287__auto__,c__33352__auto___56895,out){
return (function() {
var cljs$core$async$state_machine__33288__auto__ = null;
var cljs$core$async$state_machine__33288__auto____0 = (function (){
var statearr_56887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56887[(0)] = cljs$core$async$state_machine__33288__auto__);

(statearr_56887[(1)] = (1));

return statearr_56887;
});
var cljs$core$async$state_machine__33288__auto____1 = (function (state_56861){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_56861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e56888){if((e56888 instanceof Object)){
var ex__33291__auto__ = e56888;
var statearr_56889_56910 = state_56861;
(statearr_56889_56910[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56911 = state_56861;
state_56861 = G__56911;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$state_machine__33288__auto__ = function(state_56861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33288__auto____1.call(this,state_56861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33288__auto____0;
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33288__auto____1;
return cljs$core$async$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___56895,out))
})();
var state__33354__auto__ = (function (){var statearr_56890 = f__33353__auto__.call(null);
(statearr_56890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___56895);

return statearr_56890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___56895,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args56912 = [];
var len__26121__auto___56986 = arguments.length;
var i__26122__auto___56987 = (0);
while(true){
if((i__26122__auto___56987 < len__26121__auto___56986)){
args56912.push((arguments[i__26122__auto___56987]));

var G__56988 = (i__26122__auto___56987 + (1));
i__26122__auto___56987 = G__56988;
continue;
} else {
}
break;
}

var G__56914 = args56912.length;
switch (G__56914) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56912.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33352__auto___56990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___56990,out){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___56990,out){
return (function (state_56956){
var state_val_56957 = (state_56956[(1)]);
if((state_val_56957 === (7))){
var inst_56952 = (state_56956[(2)]);
var state_56956__$1 = state_56956;
var statearr_56958_56991 = state_56956__$1;
(statearr_56958_56991[(2)] = inst_56952);

(statearr_56958_56991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56957 === (1))){
var inst_56915 = [];
var inst_56916 = inst_56915;
var inst_56917 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_56956__$1 = (function (){var statearr_56959 = state_56956;
(statearr_56959[(7)] = inst_56916);

(statearr_56959[(8)] = inst_56917);

return statearr_56959;
})();
var statearr_56960_56992 = state_56956__$1;
(statearr_56960_56992[(2)] = null);

(statearr_56960_56992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56957 === (4))){
var inst_56920 = (state_56956[(9)]);
var inst_56920__$1 = (state_56956[(2)]);
var inst_56921 = (inst_56920__$1 == null);
var inst_56922 = cljs.core.not.call(null,inst_56921);
var state_56956__$1 = (function (){var statearr_56961 = state_56956;
(statearr_56961[(9)] = inst_56920__$1);

return statearr_56961;
})();
if(inst_56922){
var statearr_56962_56993 = state_56956__$1;
(statearr_56962_56993[(1)] = (5));

} else {
var statearr_56963_56994 = state_56956__$1;
(statearr_56963_56994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56957 === (15))){
var inst_56946 = (state_56956[(2)]);
var state_56956__$1 = state_56956;
var statearr_56964_56995 = state_56956__$1;
(statearr_56964_56995[(2)] = inst_56946);

(statearr_56964_56995[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56957 === (13))){
var state_56956__$1 = state_56956;
var statearr_56965_56996 = state_56956__$1;
(statearr_56965_56996[(2)] = null);

(statearr_56965_56996[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56957 === (6))){
var inst_56916 = (state_56956[(7)]);
var inst_56941 = inst_56916.length;
var inst_56942 = (inst_56941 > (0));
var state_56956__$1 = state_56956;
if(cljs.core.truth_(inst_56942)){
var statearr_56966_56997 = state_56956__$1;
(statearr_56966_56997[(1)] = (12));

} else {
var statearr_56967_56998 = state_56956__$1;
(statearr_56967_56998[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56957 === (3))){
var inst_56954 = (state_56956[(2)]);
var state_56956__$1 = state_56956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56956__$1,inst_56954);
} else {
if((state_val_56957 === (12))){
var inst_56916 = (state_56956[(7)]);
var inst_56944 = cljs.core.vec.call(null,inst_56916);
var state_56956__$1 = state_56956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56956__$1,(15),out,inst_56944);
} else {
if((state_val_56957 === (2))){
var state_56956__$1 = state_56956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56956__$1,(4),ch);
} else {
if((state_val_56957 === (11))){
var inst_56920 = (state_56956[(9)]);
var inst_56924 = (state_56956[(10)]);
var inst_56934 = (state_56956[(2)]);
var inst_56935 = [];
var inst_56936 = inst_56935.push(inst_56920);
var inst_56916 = inst_56935;
var inst_56917 = inst_56924;
var state_56956__$1 = (function (){var statearr_56968 = state_56956;
(statearr_56968[(11)] = inst_56936);

(statearr_56968[(7)] = inst_56916);

(statearr_56968[(12)] = inst_56934);

(statearr_56968[(8)] = inst_56917);

return statearr_56968;
})();
var statearr_56969_56999 = state_56956__$1;
(statearr_56969_56999[(2)] = null);

(statearr_56969_56999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56957 === (9))){
var inst_56916 = (state_56956[(7)]);
var inst_56932 = cljs.core.vec.call(null,inst_56916);
var state_56956__$1 = state_56956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56956__$1,(11),out,inst_56932);
} else {
if((state_val_56957 === (5))){
var inst_56920 = (state_56956[(9)]);
var inst_56924 = (state_56956[(10)]);
var inst_56917 = (state_56956[(8)]);
var inst_56924__$1 = f.call(null,inst_56920);
var inst_56925 = cljs.core._EQ_.call(null,inst_56924__$1,inst_56917);
var inst_56926 = cljs.core.keyword_identical_QMARK_.call(null,inst_56917,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_56927 = (inst_56925) || (inst_56926);
var state_56956__$1 = (function (){var statearr_56970 = state_56956;
(statearr_56970[(10)] = inst_56924__$1);

return statearr_56970;
})();
if(cljs.core.truth_(inst_56927)){
var statearr_56971_57000 = state_56956__$1;
(statearr_56971_57000[(1)] = (8));

} else {
var statearr_56972_57001 = state_56956__$1;
(statearr_56972_57001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56957 === (14))){
var inst_56949 = (state_56956[(2)]);
var inst_56950 = cljs.core.async.close_BANG_.call(null,out);
var state_56956__$1 = (function (){var statearr_56974 = state_56956;
(statearr_56974[(13)] = inst_56949);

return statearr_56974;
})();
var statearr_56975_57002 = state_56956__$1;
(statearr_56975_57002[(2)] = inst_56950);

(statearr_56975_57002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56957 === (10))){
var inst_56939 = (state_56956[(2)]);
var state_56956__$1 = state_56956;
var statearr_56976_57003 = state_56956__$1;
(statearr_56976_57003[(2)] = inst_56939);

(statearr_56976_57003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56957 === (8))){
var inst_56920 = (state_56956[(9)]);
var inst_56924 = (state_56956[(10)]);
var inst_56916 = (state_56956[(7)]);
var inst_56929 = inst_56916.push(inst_56920);
var tmp56973 = inst_56916;
var inst_56916__$1 = tmp56973;
var inst_56917 = inst_56924;
var state_56956__$1 = (function (){var statearr_56977 = state_56956;
(statearr_56977[(14)] = inst_56929);

(statearr_56977[(7)] = inst_56916__$1);

(statearr_56977[(8)] = inst_56917);

return statearr_56977;
})();
var statearr_56978_57004 = state_56956__$1;
(statearr_56978_57004[(2)] = null);

(statearr_56978_57004[(1)] = (2));


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
});})(c__33352__auto___56990,out))
;
return ((function (switch__33287__auto__,c__33352__auto___56990,out){
return (function() {
var cljs$core$async$state_machine__33288__auto__ = null;
var cljs$core$async$state_machine__33288__auto____0 = (function (){
var statearr_56982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56982[(0)] = cljs$core$async$state_machine__33288__auto__);

(statearr_56982[(1)] = (1));

return statearr_56982;
});
var cljs$core$async$state_machine__33288__auto____1 = (function (state_56956){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_56956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e56983){if((e56983 instanceof Object)){
var ex__33291__auto__ = e56983;
var statearr_56984_57005 = state_56956;
(statearr_56984_57005[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57006 = state_56956;
state_56956 = G__57006;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
cljs$core$async$state_machine__33288__auto__ = function(state_56956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33288__auto____1.call(this,state_56956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33288__auto____0;
cljs$core$async$state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33288__auto____1;
return cljs$core$async$state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___56990,out))
})();
var state__33354__auto__ = (function (){var statearr_56985 = f__33353__auto__.call(null);
(statearr_56985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___56990);

return statearr_56985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___56990,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1484333388977
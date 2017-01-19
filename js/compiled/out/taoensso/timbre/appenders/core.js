// Compiled by ClojureScript 1.9.229 {}
goog.provide('taoensso.timbre.appenders.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
/**
 * Returns a simple `println` appender for Clojure/Script.
 *   Use with ClojureScript requires that `cljs.core/*print-fn*` be set.
 * 
 *   :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}.
 */
taoensso.timbre.appenders.core.println_appender = (function taoensso$timbre$appenders$core$println_appender(var_args){
var args__7491__auto__ = [];
var len__7484__auto___30310 = arguments.length;
var i__7485__auto___30311 = (0);
while(true){
if((i__7485__auto___30311 < len__7484__auto___30310)){
args__7491__auto__.push((arguments[i__7485__auto___30311]));

var G__30312 = (i__7485__auto___30311 + (1));
i__7485__auto___30311 = G__30312;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__30304){
var vec__30305 = p__30304;
var _opts = cljs.core.nth.call(null,vec__30305,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__30305,_opts){
return (function (data){
var map__30308 = data;
var map__30308__$1 = ((((!((map__30308 == null)))?((((map__30308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30308):map__30308);
var output_ = cljs.core.get.call(null,map__30308__$1,new cljs.core.Keyword(null,"output_","output_",-36797880));
return cljs.core.println.call(null,cljs.core.force.call(null,output_));
});})(vec__30305,_opts))
], null);
});

taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq30303){
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30303));
});

/**
 * Returns a simple js/console appender for ClojureScript.
 * 
 *   For accurate line numbers in Chrome, add these Blackbox[1] patterns:
 *  `/taoensso/timbre/appenders/core\.js$`
 *  `/taoensso/timbre\.js$`
 *  `/cljs/core\.js$`
 * 
 *   [1] Ref. https://goo.gl/ZejSvR
 */
taoensso.timbre.appenders.core.console_appender = (function taoensso$timbre$appenders$core$console_appender(var_args){
var args__7491__auto__ = [];
var len__7484__auto___30320 = arguments.length;
var i__7485__auto___30321 = (0);
while(true){
if((i__7485__auto___30321 < len__7484__auto___30320)){
args__7491__auto__.push((arguments[i__7485__auto___30321]));

var G__30322 = (i__7485__auto___30321 + (1));
i__7485__auto___30321 = G__30322;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__30314){
var vec__30315 = p__30314;
var opts = cljs.core.nth.call(null,vec__30315,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),((typeof console !== 'undefined')?(function (){var level__GT_logger = ((function (vec__30315,opts){
return (function (level){
var or__6409__auto__ = (function (){var G__30319 = (((level instanceof cljs.core.Keyword))?level.fqn:null);
switch (G__30319) {
case "trace":
return console.trace;

break;
case "debug":
return console.debug;

break;
case "info":
return console.info;

break;
case "warn":
return console.warn;

break;
case "error":
return console.error;

break;
case "fatal":
return console.error;

break;
case "report":
return console.info;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(level)].join('')));

}
})();
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return console.log;
}
});})(vec__30315,opts))
;
return ((function (level__GT_logger,vec__30315,opts){
return (function (data){
var temp__4657__auto__ = level__GT_logger.call(null,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__4657__auto__)){
var logger = temp__4657__auto__;
if(cljs.core.truth_((function (){var or__6409__auto__ = new cljs.core.Keyword(null,"raw-console?","raw-console?",-2061489061).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"?meta","?meta",-793560773),new cljs.core.Keyword(null,"raw-console?","raw-console?",-2061489061)], null));
}
})())){
var output = new cljs.core.Keyword(null,"output-fn","output-fn",1600951539).cljs$core$IFn$_invoke$arity$1(data).call(null,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),"",new cljs.core.Keyword(null,"?err","?err",549653299),null));
var args = cljs.core.cons.call(null,output,cljs.core.cons.call(null,new cljs.core.Keyword(null,"?err","?err",549653299).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"vargs","vargs",-966597273).cljs$core$IFn$_invoke$arity$1(data)));
return logger.apply(console,cljs.core.into_array.call(null,args));
} else {
return logger.call(console,cljs.core.force.call(null,new cljs.core.Keyword(null,"output_","output_",-36797880).cljs$core$IFn$_invoke$arity$1(data)));
}
} else {
return null;
}
});
;})(level__GT_logger,vec__30315,opts))
})():((function (vec__30315,opts){
return (function (data){
return null;
});})(vec__30315,opts))
)], null);
});

taoensso.timbre.appenders.core.console_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.console_appender.cljs$lang$applyTo = (function (seq30313){
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30313));
});

/**
 * DEPRECATED
 */
taoensso.timbre.appenders.core.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

//# sourceMappingURL=core.js.map?rel=1484780652880
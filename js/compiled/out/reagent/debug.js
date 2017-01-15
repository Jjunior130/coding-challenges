// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__7729__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7729 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7730__i = 0, G__7730__a = new Array(arguments.length -  0);
while (G__7730__i < G__7730__a.length) {G__7730__a[G__7730__i] = arguments[G__7730__i + 0]; ++G__7730__i;}
  args = new cljs.core.IndexedSeq(G__7730__a,0);
} 
return G__7729__delegate.call(this,args);};
G__7729.cljs$lang$maxFixedArity = 0;
G__7729.cljs$lang$applyTo = (function (arglist__7731){
var args = cljs.core.seq(arglist__7731);
return G__7729__delegate(args);
});
G__7729.cljs$core$IFn$_invoke$arity$variadic = G__7729__delegate;
return G__7729;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__7732__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7733__i = 0, G__7733__a = new Array(arguments.length -  0);
while (G__7733__i < G__7733__a.length) {G__7733__a[G__7733__i] = arguments[G__7733__i + 0]; ++G__7733__i;}
  args = new cljs.core.IndexedSeq(G__7733__a,0);
} 
return G__7732__delegate.call(this,args);};
G__7732.cljs$lang$maxFixedArity = 0;
G__7732.cljs$lang$applyTo = (function (arglist__7734){
var args = cljs.core.seq(arglist__7734);
return G__7732__delegate(args);
});
G__7732.cljs$core$IFn$_invoke$arity$variadic = G__7732__delegate;
return G__7732;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1484456776481
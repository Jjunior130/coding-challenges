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
var G__7719__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7719 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7720__i = 0, G__7720__a = new Array(arguments.length -  0);
while (G__7720__i < G__7720__a.length) {G__7720__a[G__7720__i] = arguments[G__7720__i + 0]; ++G__7720__i;}
  args = new cljs.core.IndexedSeq(G__7720__a,0);
} 
return G__7719__delegate.call(this,args);};
G__7719.cljs$lang$maxFixedArity = 0;
G__7719.cljs$lang$applyTo = (function (arglist__7721){
var args = cljs.core.seq(arglist__7721);
return G__7719__delegate(args);
});
G__7719.cljs$core$IFn$_invoke$arity$variadic = G__7719__delegate;
return G__7719;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__7722__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7722 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7723__i = 0, G__7723__a = new Array(arguments.length -  0);
while (G__7723__i < G__7723__a.length) {G__7723__a[G__7723__i] = arguments[G__7723__i + 0]; ++G__7723__i;}
  args = new cljs.core.IndexedSeq(G__7723__a,0);
} 
return G__7722__delegate.call(this,args);};
G__7722.cljs$lang$maxFixedArity = 0;
G__7722.cljs$lang$applyTo = (function (arglist__7724){
var args = cljs.core.seq(arglist__7724);
return G__7722__delegate(args);
});
G__7722.cljs$core$IFn$_invoke$arity$variadic = G__7722__delegate;
return G__7722;
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

//# sourceMappingURL=debug.js.map?rel=1484366685049
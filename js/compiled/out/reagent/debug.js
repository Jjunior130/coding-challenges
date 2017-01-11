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
var G__128649__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__128649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__128650__i = 0, G__128650__a = new Array(arguments.length -  0);
while (G__128650__i < G__128650__a.length) {G__128650__a[G__128650__i] = arguments[G__128650__i + 0]; ++G__128650__i;}
  args = new cljs.core.IndexedSeq(G__128650__a,0);
} 
return G__128649__delegate.call(this,args);};
G__128649.cljs$lang$maxFixedArity = 0;
G__128649.cljs$lang$applyTo = (function (arglist__128651){
var args = cljs.core.seq(arglist__128651);
return G__128649__delegate(args);
});
G__128649.cljs$core$IFn$_invoke$arity$variadic = G__128649__delegate;
return G__128649;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__128652__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__128652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__128653__i = 0, G__128653__a = new Array(arguments.length -  0);
while (G__128653__i < G__128653__a.length) {G__128653__a[G__128653__i] = arguments[G__128653__i + 0]; ++G__128653__i;}
  args = new cljs.core.IndexedSeq(G__128653__a,0);
} 
return G__128652__delegate.call(this,args);};
G__128652.cljs$lang$maxFixedArity = 0;
G__128652.cljs$lang$applyTo = (function (arglist__128654){
var args = cljs.core.seq(arglist__128654);
return G__128652__delegate(args);
});
G__128652.cljs$core$IFn$_invoke$arity$variadic = G__128652__delegate;
return G__128652;
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

//# sourceMappingURL=debug.js.map?rel=1484099797726
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
var G__49173__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__49173 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49174__i = 0, G__49174__a = new Array(arguments.length -  0);
while (G__49174__i < G__49174__a.length) {G__49174__a[G__49174__i] = arguments[G__49174__i + 0]; ++G__49174__i;}
  args = new cljs.core.IndexedSeq(G__49174__a,0);
} 
return G__49173__delegate.call(this,args);};
G__49173.cljs$lang$maxFixedArity = 0;
G__49173.cljs$lang$applyTo = (function (arglist__49175){
var args = cljs.core.seq(arglist__49175);
return G__49173__delegate(args);
});
G__49173.cljs$core$IFn$_invoke$arity$variadic = G__49173__delegate;
return G__49173;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__49176__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__49176 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49177__i = 0, G__49177__a = new Array(arguments.length -  0);
while (G__49177__i < G__49177__a.length) {G__49177__a[G__49177__i] = arguments[G__49177__i + 0]; ++G__49177__i;}
  args = new cljs.core.IndexedSeq(G__49177__a,0);
} 
return G__49176__delegate.call(this,args);};
G__49176.cljs$lang$maxFixedArity = 0;
G__49176.cljs$lang$applyTo = (function (arglist__49178){
var args = cljs.core.seq(arglist__49178);
return G__49176__delegate(args);
});
G__49176.cljs$core$IFn$_invoke$arity$variadic = G__49176__delegate;
return G__49176;
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

//# sourceMappingURL=debug.js.map?rel=1484333374606
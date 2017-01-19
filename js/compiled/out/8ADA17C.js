goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('coding_challenges.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__54473__delegate = function (x){
if(cljs.core.truth_(coding_challenges.core.mount_root)){
return cljs.core.apply.call(null,coding_challenges.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'coding-challenges.core/mount-root' is missing");
}
};
var G__54473 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__54474__i = 0, G__54474__a = new Array(arguments.length -  0);
while (G__54474__i < G__54474__a.length) {G__54474__a[G__54474__i] = arguments[G__54474__i + 0]; ++G__54474__i;}
  x = new cljs.core.IndexedSeq(G__54474__a,0);
} 
return G__54473__delegate.call(this,x);};
G__54473.cljs$lang$maxFixedArity = 0;
G__54473.cljs$lang$applyTo = (function (arglist__54475){
var x = cljs.core.seq(arglist__54475);
return G__54473__delegate(x);
});
G__54473.cljs$core$IFn$_invoke$arity$variadic = G__54473__delegate;
return G__54473;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

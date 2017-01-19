goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('coding_challenges.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__54369__delegate = function (x){
if(cljs.core.truth_(coding_challenges.core.mount_root)){
return cljs.core.apply.call(null,coding_challenges.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'coding-challenges.core/mount-root' is missing");
}
};
var G__54369 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__54370__i = 0, G__54370__a = new Array(arguments.length -  0);
while (G__54370__i < G__54370__a.length) {G__54370__a[G__54370__i] = arguments[G__54370__i + 0]; ++G__54370__i;}
  x = new cljs.core.IndexedSeq(G__54370__a,0);
} 
return G__54369__delegate.call(this,x);};
G__54369.cljs$lang$maxFixedArity = 0;
G__54369.cljs$lang$applyTo = (function (arglist__54371){
var x = cljs.core.seq(arglist__54371);
return G__54369__delegate(x);
});
G__54369.cljs$core$IFn$_invoke$arity$variadic = G__54369__delegate;
return G__54369;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

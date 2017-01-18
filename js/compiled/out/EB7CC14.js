goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('coding_challenges.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__68026__delegate = function (x){
if(cljs.core.truth_(coding_challenges.core.mount_root)){
return cljs.core.apply.call(null,coding_challenges.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'coding-challenges.core/mount-root' is missing");
}
};
var G__68026 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__68027__i = 0, G__68027__a = new Array(arguments.length -  0);
while (G__68027__i < G__68027__a.length) {G__68027__a[G__68027__i] = arguments[G__68027__i + 0]; ++G__68027__i;}
  x = new cljs.core.IndexedSeq(G__68027__a,0);
} 
return G__68026__delegate.call(this,x);};
G__68026.cljs$lang$maxFixedArity = 0;
G__68026.cljs$lang$applyTo = (function (arglist__68028){
var x = cljs.core.seq(arglist__68028);
return G__68026__delegate(x);
});
G__68026.cljs$core$IFn$_invoke$arity$variadic = G__68026__delegate;
return G__68026;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

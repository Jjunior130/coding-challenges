goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('coding_challenges.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__55302__delegate = function (x){
if(cljs.core.truth_(coding_challenges.core.mount_root)){
return cljs.core.apply.call(null,coding_challenges.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'coding-challenges.core/mount-root' is missing");
}
};
var G__55302 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__55303__i = 0, G__55303__a = new Array(arguments.length -  0);
while (G__55303__i < G__55303__a.length) {G__55303__a[G__55303__i] = arguments[G__55303__i + 0]; ++G__55303__i;}
  x = new cljs.core.IndexedSeq(G__55303__a,0);
} 
return G__55302__delegate.call(this,x);};
G__55302.cljs$lang$maxFixedArity = 0;
G__55302.cljs$lang$applyTo = (function (arglist__55304){
var x = cljs.core.seq(arglist__55304);
return G__55302__delegate(x);
});
G__55302.cljs$core$IFn$_invoke$arity$variadic = G__55302__delegate;
return G__55302;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

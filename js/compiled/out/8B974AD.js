goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('coding_challenges.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__50396__delegate = function (x){
if(cljs.core.truth_(coding_challenges.core.mount_root)){
return cljs.core.apply.call(null,coding_challenges.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'coding-challenges.core/mount-root' is missing");
}
};
var G__50396 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__50397__i = 0, G__50397__a = new Array(arguments.length -  0);
while (G__50397__i < G__50397__a.length) {G__50397__a[G__50397__i] = arguments[G__50397__i + 0]; ++G__50397__i;}
  x = new cljs.core.IndexedSeq(G__50397__a,0);
} 
return G__50396__delegate.call(this,x);};
G__50396.cljs$lang$maxFixedArity = 0;
G__50396.cljs$lang$applyTo = (function (arglist__50398){
var x = cljs.core.seq(arglist__50398);
return G__50396__delegate(x);
});
G__50396.cljs$core$IFn$_invoke$arity$variadic = G__50396__delegate;
return G__50396;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

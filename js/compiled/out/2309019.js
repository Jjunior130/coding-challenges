goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('coding_challenges.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__38994__delegate = function (x){
if(cljs.core.truth_(coding_challenges.core.mount_root)){
return cljs.core.apply.call(null,coding_challenges.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'coding-challenges.core/mount-root' is missing");
}
};
var G__38994 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__38995__i = 0, G__38995__a = new Array(arguments.length -  0);
while (G__38995__i < G__38995__a.length) {G__38995__a[G__38995__i] = arguments[G__38995__i + 0]; ++G__38995__i;}
  x = new cljs.core.IndexedSeq(G__38995__a,0);
} 
return G__38994__delegate.call(this,x);};
G__38994.cljs$lang$maxFixedArity = 0;
G__38994.cljs$lang$applyTo = (function (arglist__38996){
var x = cljs.core.seq(arglist__38996);
return G__38994__delegate(x);
});
G__38994.cljs$core$IFn$_invoke$arity$variadic = G__38994__delegate;
return G__38994;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

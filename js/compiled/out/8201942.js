goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('coding_challenges.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__39282__delegate = function (x){
if(cljs.core.truth_(coding_challenges.core.mount_root)){
return cljs.core.apply.call(null,coding_challenges.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'coding-challenges.core/mount-root' is missing");
}
};
var G__39282 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__39283__i = 0, G__39283__a = new Array(arguments.length -  0);
while (G__39283__i < G__39283__a.length) {G__39283__a[G__39283__i] = arguments[G__39283__i + 0]; ++G__39283__i;}
  x = new cljs.core.IndexedSeq(G__39283__a,0);
} 
return G__39282__delegate.call(this,x);};
G__39282.cljs$lang$maxFixedArity = 0;
G__39282.cljs$lang$applyTo = (function (arglist__39284){
var x = cljs.core.seq(arglist__39284);
return G__39282__delegate(x);
});
G__39282.cljs$core$IFn$_invoke$arity$variadic = G__39282__delegate;
return G__39282;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

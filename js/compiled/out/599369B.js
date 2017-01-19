goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('coding_challenges.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__52207__delegate = function (x){
if(cljs.core.truth_(coding_challenges.core.mount_root)){
return cljs.core.apply.call(null,coding_challenges.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'coding-challenges.core/mount-root' is missing");
}
};
var G__52207 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__52208__i = 0, G__52208__a = new Array(arguments.length -  0);
while (G__52208__i < G__52208__a.length) {G__52208__a[G__52208__i] = arguments[G__52208__i + 0]; ++G__52208__i;}
  x = new cljs.core.IndexedSeq(G__52208__a,0);
} 
return G__52207__delegate.call(this,x);};
G__52207.cljs$lang$maxFixedArity = 0;
G__52207.cljs$lang$applyTo = (function (arglist__52209){
var x = cljs.core.seq(arglist__52209);
return G__52207__delegate(x);
});
G__52207.cljs$core$IFn$_invoke$arity$variadic = G__52207__delegate;
return G__52207;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

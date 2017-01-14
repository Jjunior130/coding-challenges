// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.space_invaders.views');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('reagent.core');
goog.require('re_com.core');
goog.require('quil.core');
goog.require('coding_challenges.space_invaders.flower');
goog.require('quil.middleware');
goog.require('coding_challenges.space_invaders.drop');
goog.require('coding_challenges.space_invaders.ship');
coding_challenges.space_invaders.views.w = (600);
coding_challenges.space_invaders.views.h = (400);
coding_challenges.space_invaders.views.setup = (function coding_challenges$space_invaders$views$setup(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ship","ship",197863473),coding_challenges.space_invaders.ship.make.call(null),new cljs.core.Keyword(null,"flowers","flowers",-1521787890),(function (){var iter__25826__auto__ = (function coding_challenges$space_invaders$views$setup_$_iter__61920(s__61921){
return (new cljs.core.LazySeq(null,(function (){
var s__61921__$1 = s__61921;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__61921__$1);
if(temp__4657__auto__){
var s__61921__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__61921__$2)){
var c__25824__auto__ = cljs.core.chunk_first.call(null,s__61921__$2);
var size__25825__auto__ = cljs.core.count.call(null,c__25824__auto__);
var b__61923 = cljs.core.chunk_buffer.call(null,size__25825__auto__);
if((function (){var i__61922 = (0);
while(true){
if((i__61922 < size__25825__auto__)){
var i = cljs.core._nth.call(null,c__25824__auto__,i__61922);
cljs.core.chunk_append.call(null,b__61923,coding_challenges.space_invaders.flower.make.call(null,((i * (80)) + (80)),(60)));

var G__61924 = (i__61922 + (1));
i__61922 = G__61924;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61923),coding_challenges$space_invaders$views$setup_$_iter__61920.call(null,cljs.core.chunk_rest.call(null,s__61921__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61923),null);
}
} else {
var i = cljs.core.first.call(null,s__61921__$2);
return cljs.core.cons.call(null,coding_challenges.space_invaders.flower.make.call(null,((i * (80)) + (80)),(60)),coding_challenges$space_invaders$views$setup_$_iter__61920.call(null,cljs.core.rest.call(null,s__61921__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25826__auto__.call(null,cljs.core.range.call(null,(6)));
})()], null);
});
coding_challenges.space_invaders.views.update_drops = (function coding_challenges$space_invaders$views$update_drops(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.views.pathcache61932;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info61933 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flowers","flowers",-1521787890)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"flowers","flowers",-1521787890))),new cljs.core.Keyword(null,"drops","drops",-1558072608)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.space_invaders.views.pathcache61932 = info61933;

return info61933;
})():info__30860__auto__);
var precompiled61934 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled61934.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled61934;
}
})(),(function (flowers,drops){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.views.pathcache61935;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info61936 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.space_invaders.views.pathcache61935 = info61936;

return info61936;
})():info__30860__auto__);
var precompiled61937 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled61937.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled61937;
}
})(),coding_challenges.space_invaders.drop.update_STAR_,cljs.core.remove.call(null,(function (p1__61925_SHARP_){
return cljs.core.some.call(null,cljs.core.partial.call(null,coding_challenges.space_invaders.drop.hits_QMARK_,p1__61925_SHARP_),flowers);
}),drops));
}),sketch);
});
coding_challenges.space_invaders.views.update_flowers = (function coding_challenges$space_invaders$views$update_flowers(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.views.pathcache61947;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info61948 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drops","drops",-1558072608)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"drops","drops",-1558072608))),new cljs.core.Keyword(null,"flowers","flowers",-1521787890)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.space_invaders.views.pathcache61947 = info61948;

return info61948;
})():info__30860__auto__);
var precompiled61949 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled61949.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled61949;
}
})(),(function (drops,flowers){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.comp.call(null,cljs.core.some_fn.call(null,cljs.core.partial.call(null,cljs.core._GT_,(0)),cljs.core.partial.call(null,cljs.core._LT_,quil.core.width.call(null))),new cljs.core.Keyword(null,"x","x",2099068185)),flowers))){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.views.pathcache61950;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info61951 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.space_invaders.views.pathcache61950 = info61951;

return info61951;
})():info__30860__auto__);
var precompiled61952 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled61952.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled61952;
}
})(),cljs.core.partial.call(null,coding_challenges.space_invaders.flower.update_STAR_,true,drops),flowers);
} else {
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.views.pathcache61953;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info61954 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.space_invaders.views.pathcache61953 = info61954;

return info61954;
})():info__30860__auto__);
var precompiled61955 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled61955.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled61955;
}
})(),cljs.core.partial.call(null,coding_challenges.space_invaders.flower.update_STAR_,false,drops),flowers);
}
}),sketch);
});
coding_challenges.space_invaders.views.update_ship = (function coding_challenges$space_invaders$views$update_ship(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.views.pathcache61959;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info61960 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache61959 = info61960;

return info61960;
})():info__30860__auto__);
var precompiled61961 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled61961.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled61961;
}
})(),coding_challenges.space_invaders.ship.update_STAR_,sketch);
});
coding_challenges.space_invaders.views.update_STAR_ = (function coding_challenges$space_invaders$views$update_STAR_(sketch){
return coding_challenges.space_invaders.views.update_ship.call(null,coding_challenges.space_invaders.views.update_flowers.call(null,coding_challenges.space_invaders.views.update_drops.call(null,sketch)));
});
coding_challenges.space_invaders.views.draw = (function coding_challenges$space_invaders$views$draw(p__61962){
var map__61973 = p__61962;
var map__61973__$1 = ((((!((map__61973 == null)))?((((map__61973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61973):map__61973);
var sketch = map__61973__$1;
var ship = cljs.core.get.call(null,map__61973__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var drops = cljs.core.get.call(null,map__61973__$1,new cljs.core.Keyword(null,"drops","drops",-1558072608));
var flowers = cljs.core.get.call(null,map__61973__$1,new cljs.core.Keyword(null,"flowers","flowers",-1521787890));
quil.core.background.call(null,(51));

coding_challenges.space_invaders.ship.draw.call(null,ship);

var seq__61975_61983 = cljs.core.seq.call(null,drops);
var chunk__61976_61984 = null;
var count__61977_61985 = (0);
var i__61978_61986 = (0);
while(true){
if((i__61978_61986 < count__61977_61985)){
var d_61987 = cljs.core._nth.call(null,chunk__61976_61984,i__61978_61986);
coding_challenges.space_invaders.drop.draw.call(null,d_61987);

var G__61988 = seq__61975_61983;
var G__61989 = chunk__61976_61984;
var G__61990 = count__61977_61985;
var G__61991 = (i__61978_61986 + (1));
seq__61975_61983 = G__61988;
chunk__61976_61984 = G__61989;
count__61977_61985 = G__61990;
i__61978_61986 = G__61991;
continue;
} else {
var temp__4657__auto___61992 = cljs.core.seq.call(null,seq__61975_61983);
if(temp__4657__auto___61992){
var seq__61975_61993__$1 = temp__4657__auto___61992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61975_61993__$1)){
var c__25857__auto___61994 = cljs.core.chunk_first.call(null,seq__61975_61993__$1);
var G__61995 = cljs.core.chunk_rest.call(null,seq__61975_61993__$1);
var G__61996 = c__25857__auto___61994;
var G__61997 = cljs.core.count.call(null,c__25857__auto___61994);
var G__61998 = (0);
seq__61975_61983 = G__61995;
chunk__61976_61984 = G__61996;
count__61977_61985 = G__61997;
i__61978_61986 = G__61998;
continue;
} else {
var d_61999 = cljs.core.first.call(null,seq__61975_61993__$1);
coding_challenges.space_invaders.drop.draw.call(null,d_61999);

var G__62000 = cljs.core.next.call(null,seq__61975_61993__$1);
var G__62001 = null;
var G__62002 = (0);
var G__62003 = (0);
seq__61975_61983 = G__62000;
chunk__61976_61984 = G__62001;
count__61977_61985 = G__62002;
i__61978_61986 = G__62003;
continue;
}
} else {
}
}
break;
}

var seq__61979 = cljs.core.seq.call(null,flowers);
var chunk__61980 = null;
var count__61981 = (0);
var i__61982 = (0);
while(true){
if((i__61982 < count__61981)){
var flower = cljs.core._nth.call(null,chunk__61980,i__61982);
coding_challenges.space_invaders.flower.draw.call(null,flower);

var G__62004 = seq__61979;
var G__62005 = chunk__61980;
var G__62006 = count__61981;
var G__62007 = (i__61982 + (1));
seq__61979 = G__62004;
chunk__61980 = G__62005;
count__61981 = G__62006;
i__61982 = G__62007;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__61979);
if(temp__4657__auto__){
var seq__61979__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61979__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__61979__$1);
var G__62008 = cljs.core.chunk_rest.call(null,seq__61979__$1);
var G__62009 = c__25857__auto__;
var G__62010 = cljs.core.count.call(null,c__25857__auto__);
var G__62011 = (0);
seq__61979 = G__62008;
chunk__61980 = G__62009;
count__61981 = G__62010;
i__61982 = G__62011;
continue;
} else {
var flower = cljs.core.first.call(null,seq__61979__$1);
coding_challenges.space_invaders.flower.draw.call(null,flower);

var G__62012 = cljs.core.next.call(null,seq__61979__$1);
var G__62013 = null;
var G__62014 = (0);
var G__62015 = (0);
seq__61979 = G__62012;
chunk__61980 = G__62013;
count__61981 = G__62014;
i__61982 = G__62015;
continue;
}
} else {
return null;
}
}
break;
}
});
coding_challenges.space_invaders.views.key_pressed = (function coding_challenges$space_invaders$views$key_pressed(sketch,event){
var any_of = (function() { 
var coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate = function (ks){
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event)),ks);
};
var coding_challenges$space_invaders$views$key_pressed_$_any_of = function (var_args){
var ks = null;
if (arguments.length > 0) {
var G__62040__i = 0, G__62040__a = new Array(arguments.length -  0);
while (G__62040__i < G__62040__a.length) {G__62040__a[G__62040__i] = arguments[G__62040__i + 0]; ++G__62040__i;}
  ks = new cljs.core.IndexedSeq(G__62040__a,0);
} 
return coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate.call(this,ks);};
coding_challenges$space_invaders$views$key_pressed_$_any_of.cljs$lang$maxFixedArity = 0;
coding_challenges$space_invaders$views$key_pressed_$_any_of.cljs$lang$applyTo = (function (arglist__62041){
var ks = cljs.core.seq(arglist__62041);
return coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate(ks);
});
coding_challenges$space_invaders$views$key_pressed_$_any_of.cljs$core$IFn$_invoke$arity$variadic = coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate;
return coding_challenges$space_invaders$views$key_pressed_$_any_of;
})()
;
if(cljs.core.truth_(any_of.call(null,cljs.core.keyword.call(null," ")))){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.views.pathcache62028;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info62029 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"ship","ship",197863473))),new cljs.core.Keyword(null,"drops","drops",-1558072608)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.space_invaders.views.pathcache62028 = info62029;

return info62029;
})():info__30860__auto__);
var precompiled62030 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled62030.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled62030;
}
})(),(function (p__62031,drops){
var map__62032 = p__62031;
var map__62032__$1 = ((((!((map__62032 == null)))?((((map__62032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62032):map__62032);
var ship = map__62032__$1;
var x = cljs.core.get.call(null,map__62032__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return cljs.core.conj.call(null,drops,coding_challenges.space_invaders.drop.make.call(null,x,quil.core.height.call(null)));
}),sketch);
} else {
if(cljs.core.truth_(any_of.call(null,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"a","a",-2123407586)))){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.views.pathcache62034;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info62035 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"xdir","xdir",1180076178)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache62034 = info62035;

return info62035;
})():info__30860__auto__);
var precompiled62036 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled62036.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled62036;
}
})(),(-1),sketch);
} else {
if(cljs.core.truth_(any_of.call(null,new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"d","d",1972142424)))){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.views.pathcache62037;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info62038 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"xdir","xdir",1180076178)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache62037 = info62038;

return info62038;
})():info__30860__auto__);
var precompiled62039 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled62039.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled62039;
}
})(),(1),sketch);
} else {
return sketch;

}
}
}
});
coding_challenges.space_invaders.views.key_released = (function coding_challenges$space_invaders$views$key_released(sketch){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.views.pathcache62045;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info62046 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"xdir","xdir",1180076178)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache62045 = info62046;

return info62046;
})():info__30860__auto__);
var precompiled62047 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled62047.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled62047;
}
})(),(0),sketch);
});
coding_challenges.space_invaders.views.space_invaders_sketch = (function coding_challenges$space_invaders$views$space_invaders_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.key_pressed))?(function() { 
var G__62048__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.key_pressed,args);
};
var G__62048 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62049__i = 0, G__62049__a = new Array(arguments.length -  0);
while (G__62049__i < G__62049__a.length) {G__62049__a[G__62049__i] = arguments[G__62049__i + 0]; ++G__62049__i;}
  args = new cljs.core.IndexedSeq(G__62049__a,0);
} 
return G__62048__delegate.call(this,args);};
G__62048.cljs$lang$maxFixedArity = 0;
G__62048.cljs$lang$applyTo = (function (arglist__62050){
var args = cljs.core.seq(arglist__62050);
return G__62048__delegate(args);
});
G__62048.cljs$core$IFn$_invoke$arity$variadic = G__62048__delegate;
return G__62048;
})()
:coding_challenges.space_invaders.views.key_pressed),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.update_STAR_))?(function() { 
var G__62051__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.update_STAR_,args);
};
var G__62051 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62052__i = 0, G__62052__a = new Array(arguments.length -  0);
while (G__62052__i < G__62052__a.length) {G__62052__a[G__62052__i] = arguments[G__62052__i + 0]; ++G__62052__i;}
  args = new cljs.core.IndexedSeq(G__62052__a,0);
} 
return G__62051__delegate.call(this,args);};
G__62051.cljs$lang$maxFixedArity = 0;
G__62051.cljs$lang$applyTo = (function (arglist__62053){
var args = cljs.core.seq(arglist__62053);
return G__62051__delegate(args);
});
G__62051.cljs$core$IFn$_invoke$arity$variadic = G__62051__delegate;
return G__62051;
})()
:coding_challenges.space_invaders.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.space_invaders.views.w,coding_challenges.space_invaders.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.setup))?(function() { 
var G__62054__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.setup,args);
};
var G__62054 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62055__i = 0, G__62055__a = new Array(arguments.length -  0);
while (G__62055__i < G__62055__a.length) {G__62055__a[G__62055__i] = arguments[G__62055__i + 0]; ++G__62055__i;}
  args = new cljs.core.IndexedSeq(G__62055__a,0);
} 
return G__62054__delegate.call(this,args);};
G__62054.cljs$lang$maxFixedArity = 0;
G__62054.cljs$lang$applyTo = (function (arglist__62056){
var args = cljs.core.seq(arglist__62056);
return G__62054__delegate(args);
});
G__62054.cljs$core$IFn$_invoke$arity$variadic = G__62054__delegate;
return G__62054;
})()
:coding_challenges.space_invaders.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"space-invaders",new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.key_released))?(function() { 
var G__62057__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.key_released,args);
};
var G__62057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62058__i = 0, G__62058__a = new Array(arguments.length -  0);
while (G__62058__i < G__62058__a.length) {G__62058__a[G__62058__i] = arguments[G__62058__i + 0]; ++G__62058__i;}
  args = new cljs.core.IndexedSeq(G__62058__a,0);
} 
return G__62057__delegate.call(this,args);};
G__62057.cljs$lang$maxFixedArity = 0;
G__62057.cljs$lang$applyTo = (function (arglist__62059){
var args = cljs.core.seq(arglist__62059);
return G__62057__delegate(args);
});
G__62057.cljs$core$IFn$_invoke$arity$variadic = G__62057__delegate;
return G__62057;
})()
:coding_challenges.space_invaders.views.key_released),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.draw))?(function() { 
var G__62060__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.draw,args);
};
var G__62060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62061__i = 0, G__62061__a = new Array(arguments.length -  0);
while (G__62061__i < G__62061__a.length) {G__62061__a[G__62061__i] = arguments[G__62061__i + 0]; ++G__62061__i;}
  args = new cljs.core.IndexedSeq(G__62061__a,0);
} 
return G__62060__delegate.call(this,args);};
G__62060.cljs$lang$maxFixedArity = 0;
G__62060.cljs$lang$applyTo = (function (arglist__62062){
var args = cljs.core.seq(arglist__62062);
return G__62060__delegate(args);
});
G__62060.cljs$core$IFn$_invoke$arity$variadic = G__62060__delegate;
return G__62060;
})()
:coding_challenges.space_invaders.views.draw));
});
goog.exportSymbol('coding_challenges.space_invaders.views.space_invaders_sketch', coding_challenges.space_invaders.views.space_invaders_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__42451__42452__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__42451__42452__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.space_invaders.views.space_invaders_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"space-invaders"], null));
}
coding_challenges.space_invaders.views.view = (function coding_challenges$space_invaders$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Space invaders demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#space-invaders","canvas#space-invaders",-1686061181),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.space_invaders.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.space_invaders.views.h], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.space_invaders.views.space_invaders_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484333402926
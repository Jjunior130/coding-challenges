// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.space_invaders.views');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('reagent.core');
goog.require('re_com.core');
goog.require('quil.core');
goog.require('re_frame.core');
goog.require('coding_challenges.space_invaders.flower');
goog.require('quil.middleware');
goog.require('coding_challenges.space_invaders.drop');
goog.require('coding_challenges.space_invaders.ship');
coding_challenges.space_invaders.views.w = (600);
coding_challenges.space_invaders.views.h = (400);
coding_challenges.space_invaders.views.setup = (function coding_challenges$space_invaders$views$setup(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ship","ship",197863473),coding_challenges.space_invaders.ship.make.call(null),new cljs.core.Keyword(null,"flowers","flowers",-1521787890),(function (){var iter__7189__auto__ = (function coding_challenges$space_invaders$views$setup_$_iter__32925(s__32926){
return (new cljs.core.LazySeq(null,(function (){
var s__32926__$1 = s__32926;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32926__$1);
if(temp__4657__auto__){
var s__32926__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32926__$2)){
var c__7187__auto__ = cljs.core.chunk_first.call(null,s__32926__$2);
var size__7188__auto__ = cljs.core.count.call(null,c__7187__auto__);
var b__32928 = cljs.core.chunk_buffer.call(null,size__7188__auto__);
if((function (){var i__32927 = (0);
while(true){
if((i__32927 < size__7188__auto__)){
var i = cljs.core._nth.call(null,c__7187__auto__,i__32927);
cljs.core.chunk_append.call(null,b__32928,coding_challenges.space_invaders.flower.make.call(null,((i * (80)) + (80)),(60)));

var G__32929 = (i__32927 + (1));
i__32927 = G__32929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32928),coding_challenges$space_invaders$views$setup_$_iter__32925.call(null,cljs.core.chunk_rest.call(null,s__32926__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32928),null);
}
} else {
var i = cljs.core.first.call(null,s__32926__$2);
return cljs.core.cons.call(null,coding_challenges.space_invaders.flower.make.call(null,((i * (80)) + (80)),(60)),coding_challenges$space_invaders$views$setup_$_iter__32925.call(null,cljs.core.rest.call(null,s__32926__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__.call(null,cljs.core.range.call(null,(6)));
})()], null);
});
coding_challenges.space_invaders.views.update_drops = (function coding_challenges$space_invaders$views$update_drops(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__11521__auto__ = coding_challenges.space_invaders.views.pathcache32937;
var info__11521__auto____$1 = (((info__11521__auto__ == null))?(function (){var info32938 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flowers","flowers",-1521787890)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"flowers","flowers",-1521787890))),new cljs.core.Keyword(null,"drops","drops",-1558072608)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.space_invaders.views.pathcache32937 = info32938;

return info32938;
})():info__11521__auto__);
var precompiled32939 = info__11521__auto____$1.precompiled;
var dynamic_QMARK___11522__auto__ = info__11521__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___11522__auto__)){
return precompiled32939.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled32939;
}
})(),(function (flowers,drops){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__11521__auto__ = coding_challenges.space_invaders.views.pathcache32940;
var info__11521__auto____$1 = (((info__11521__auto__ == null))?(function (){var info32941 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.space_invaders.views.pathcache32940 = info32941;

return info32941;
})():info__11521__auto__);
var precompiled32942 = info__11521__auto____$1.precompiled;
var dynamic_QMARK___11522__auto__ = info__11521__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___11522__auto__)){
return precompiled32942.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled32942;
}
})(),coding_challenges.space_invaders.drop.update_STAR_,cljs.core.remove.call(null,(function (p1__32930_SHARP_){
return cljs.core.some.call(null,cljs.core.partial.call(null,coding_challenges.space_invaders.drop.hits_QMARK_,p1__32930_SHARP_),flowers);
}),drops));
}),sketch);
});
coding_challenges.space_invaders.views.horizontal_edge_QMARK_ = (function coding_challenges$space_invaders$views$horizontal_edge_QMARK_(p__32943){
var map__32946 = p__32943;
var map__32946__$1 = ((((!((map__32946 == null)))?((((map__32946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32946):map__32946);
var x = cljs.core.get.call(null,map__32946__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return cljs.core.some_fn.call(null,cljs.core.partial.call(null,cljs.core._GT_,(0)),cljs.core.partial.call(null,cljs.core._LT_,quil.core.width.call(null))).call(null,x);
});
coding_challenges.space_invaders.views.update_flowers = (function coding_challenges$space_invaders$views$update_flowers(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__11521__auto__ = coding_challenges.space_invaders.views.pathcache32957;
var info__11521__auto____$1 = (((info__11521__auto__ == null))?(function (){var info32958 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drops","drops",-1558072608)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"drops","drops",-1558072608))),new cljs.core.Keyword(null,"flowers","flowers",-1521787890)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.space_invaders.views.pathcache32957 = info32958;

return info32958;
})():info__11521__auto__);
var precompiled32959 = info__11521__auto____$1.precompiled;
var dynamic_QMARK___11522__auto__ = info__11521__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___11522__auto__)){
return precompiled32959.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled32959;
}
})(),(function (drops,flowers){
if(cljs.core.truth_(cljs.core.some.call(null,coding_challenges.space_invaders.views.horizontal_edge_QMARK_,flowers))){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__11521__auto__ = coding_challenges.space_invaders.views.pathcache32960;
var info__11521__auto____$1 = (((info__11521__auto__ == null))?(function (){var info32961 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.space_invaders.views.pathcache32960 = info32961;

return info32961;
})():info__11521__auto__);
var precompiled32962 = info__11521__auto____$1.precompiled;
var dynamic_QMARK___11522__auto__ = info__11521__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___11522__auto__)){
return precompiled32962.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled32962;
}
})(),cljs.core.partial.call(null,coding_challenges.space_invaders.flower.update_STAR_,true,drops),flowers);
} else {
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__11521__auto__ = coding_challenges.space_invaders.views.pathcache32963;
var info__11521__auto____$1 = (((info__11521__auto__ == null))?(function (){var info32964 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.space_invaders.views.pathcache32963 = info32964;

return info32964;
})():info__11521__auto__);
var precompiled32965 = info__11521__auto____$1.precompiled;
var dynamic_QMARK___11522__auto__ = info__11521__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___11522__auto__)){
return precompiled32965.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled32965;
}
})(),cljs.core.partial.call(null,coding_challenges.space_invaders.flower.update_STAR_,false,drops),flowers);
}
}),sketch);
});
coding_challenges.space_invaders.views.update_ship = (function coding_challenges$space_invaders$views$update_ship(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__11521__auto__ = coding_challenges.space_invaders.views.pathcache32969;
var info__11521__auto____$1 = (((info__11521__auto__ == null))?(function (){var info32970 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache32969 = info32970;

return info32970;
})():info__11521__auto__);
var precompiled32971 = info__11521__auto____$1.precompiled;
var dynamic_QMARK___11522__auto__ = info__11521__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___11522__auto__)){
return precompiled32971.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled32971;
}
})(),coding_challenges.space_invaders.ship.update_STAR_,sketch);
});
coding_challenges.space_invaders.views.update_STAR_ = (function coding_challenges$space_invaders$views$update_STAR_(sketch){
return coding_challenges.space_invaders.views.update_ship.call(null,coding_challenges.space_invaders.views.update_flowers.call(null,coding_challenges.space_invaders.views.update_drops.call(null,sketch)));
});
coding_challenges.space_invaders.views.draw = (function coding_challenges$space_invaders$views$draw(p__32972){
var map__32983 = p__32972;
var map__32983__$1 = ((((!((map__32983 == null)))?((((map__32983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32983):map__32983);
var sketch = map__32983__$1;
var ship = cljs.core.get.call(null,map__32983__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var drops = cljs.core.get.call(null,map__32983__$1,new cljs.core.Keyword(null,"drops","drops",-1558072608));
var flowers = cljs.core.get.call(null,map__32983__$1,new cljs.core.Keyword(null,"flowers","flowers",-1521787890));
quil.core.background.call(null,(51));

coding_challenges.space_invaders.ship.draw.call(null,ship);

var seq__32985_32993 = cljs.core.seq.call(null,drops);
var chunk__32986_32994 = null;
var count__32987_32995 = (0);
var i__32988_32996 = (0);
while(true){
if((i__32988_32996 < count__32987_32995)){
var d_32997 = cljs.core._nth.call(null,chunk__32986_32994,i__32988_32996);
coding_challenges.space_invaders.drop.draw.call(null,d_32997);

var G__32998 = seq__32985_32993;
var G__32999 = chunk__32986_32994;
var G__33000 = count__32987_32995;
var G__33001 = (i__32988_32996 + (1));
seq__32985_32993 = G__32998;
chunk__32986_32994 = G__32999;
count__32987_32995 = G__33000;
i__32988_32996 = G__33001;
continue;
} else {
var temp__4657__auto___33002 = cljs.core.seq.call(null,seq__32985_32993);
if(temp__4657__auto___33002){
var seq__32985_33003__$1 = temp__4657__auto___33002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32985_33003__$1)){
var c__7220__auto___33004 = cljs.core.chunk_first.call(null,seq__32985_33003__$1);
var G__33005 = cljs.core.chunk_rest.call(null,seq__32985_33003__$1);
var G__33006 = c__7220__auto___33004;
var G__33007 = cljs.core.count.call(null,c__7220__auto___33004);
var G__33008 = (0);
seq__32985_32993 = G__33005;
chunk__32986_32994 = G__33006;
count__32987_32995 = G__33007;
i__32988_32996 = G__33008;
continue;
} else {
var d_33009 = cljs.core.first.call(null,seq__32985_33003__$1);
coding_challenges.space_invaders.drop.draw.call(null,d_33009);

var G__33010 = cljs.core.next.call(null,seq__32985_33003__$1);
var G__33011 = null;
var G__33012 = (0);
var G__33013 = (0);
seq__32985_32993 = G__33010;
chunk__32986_32994 = G__33011;
count__32987_32995 = G__33012;
i__32988_32996 = G__33013;
continue;
}
} else {
}
}
break;
}

var seq__32989 = cljs.core.seq.call(null,flowers);
var chunk__32990 = null;
var count__32991 = (0);
var i__32992 = (0);
while(true){
if((i__32992 < count__32991)){
var flower = cljs.core._nth.call(null,chunk__32990,i__32992);
coding_challenges.space_invaders.flower.draw.call(null,flower);

var G__33014 = seq__32989;
var G__33015 = chunk__32990;
var G__33016 = count__32991;
var G__33017 = (i__32992 + (1));
seq__32989 = G__33014;
chunk__32990 = G__33015;
count__32991 = G__33016;
i__32992 = G__33017;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32989);
if(temp__4657__auto__){
var seq__32989__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32989__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__32989__$1);
var G__33018 = cljs.core.chunk_rest.call(null,seq__32989__$1);
var G__33019 = c__7220__auto__;
var G__33020 = cljs.core.count.call(null,c__7220__auto__);
var G__33021 = (0);
seq__32989 = G__33018;
chunk__32990 = G__33019;
count__32991 = G__33020;
i__32992 = G__33021;
continue;
} else {
var flower = cljs.core.first.call(null,seq__32989__$1);
coding_challenges.space_invaders.flower.draw.call(null,flower);

var G__33022 = cljs.core.next.call(null,seq__32989__$1);
var G__33023 = null;
var G__33024 = (0);
var G__33025 = (0);
seq__32989 = G__33022;
chunk__32990 = G__33023;
count__32991 = G__33024;
i__32992 = G__33025;
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
var G__33052__i = 0, G__33052__a = new Array(arguments.length -  0);
while (G__33052__i < G__33052__a.length) {G__33052__a[G__33052__i] = arguments[G__33052__i + 0]; ++G__33052__i;}
  ks = new cljs.core.IndexedSeq(G__33052__a,0);
} 
return coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate.call(this,ks);};
coding_challenges$space_invaders$views$key_pressed_$_any_of.cljs$lang$maxFixedArity = 0;
coding_challenges$space_invaders$views$key_pressed_$_any_of.cljs$lang$applyTo = (function (arglist__33053){
var ks = cljs.core.seq(arglist__33053);
return coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate(ks);
});
coding_challenges$space_invaders$views$key_pressed_$_any_of.cljs$core$IFn$_invoke$arity$variadic = coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate;
return coding_challenges$space_invaders$views$key_pressed_$_any_of;
})()
;
var G__33039 = sketch;
var G__33039__$1 = (cljs.core.truth_(any_of.call(null,cljs.core.keyword.call(null," ")))?com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__11521__auto__ = coding_challenges.space_invaders.views.pathcache33040;
var info__11521__auto____$1 = (((info__11521__auto__ == null))?(function (){var info33041 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"ship","ship",197863473))),new cljs.core.Keyword(null,"drops","drops",-1558072608)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.space_invaders.views.pathcache33040 = info33041;

return info33041;
})():info__11521__auto__);
var precompiled33042 = info__11521__auto____$1.precompiled;
var dynamic_QMARK___11522__auto__ = info__11521__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___11522__auto__)){
return precompiled33042.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled33042;
}
})(),((function (G__33039){
return (function (p__33043,drops){
var map__33044 = p__33043;
var map__33044__$1 = ((((!((map__33044 == null)))?((((map__33044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33044):map__33044);
var ship = map__33044__$1;
var x = cljs.core.get.call(null,map__33044__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return cljs.core.conj.call(null,drops,coding_challenges.space_invaders.drop.make.call(null,x,quil.core.height.call(null)));
});})(G__33039))
,G__33039):G__33039);
var G__33039__$2 = (cljs.core.truth_(any_of.call(null,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"a","a",-2123407586)))?com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__11521__auto__ = coding_challenges.space_invaders.views.pathcache33046;
var info__11521__auto____$1 = (((info__11521__auto__ == null))?(function (){var info33047 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"xdir","xdir",1180076178)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache33046 = info33047;

return info33047;
})():info__11521__auto__);
var precompiled33048 = info__11521__auto____$1.precompiled;
var dynamic_QMARK___11522__auto__ = info__11521__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___11522__auto__)){
return precompiled33048.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled33048;
}
})(),(-1),G__33039__$1):G__33039__$1);
if(cljs.core.truth_(any_of.call(null,new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"d","d",1972142424)))){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__11521__auto__ = coding_challenges.space_invaders.views.pathcache33049;
var info__11521__auto____$1 = (((info__11521__auto__ == null))?(function (){var info33050 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"xdir","xdir",1180076178)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache33049 = info33050;

return info33050;
})():info__11521__auto__);
var precompiled33051 = info__11521__auto____$1.precompiled;
var dynamic_QMARK___11522__auto__ = info__11521__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___11522__auto__)){
return precompiled33051.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled33051;
}
})(),(1),G__33039__$2);
} else {
return G__33039__$2;
}
});
coding_challenges.space_invaders.views.key_released = (function coding_challenges$space_invaders$views$key_released(sketch){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__11521__auto__ = coding_challenges.space_invaders.views.pathcache33057;
var info__11521__auto____$1 = (((info__11521__auto__ == null))?(function (){var info33058 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"xdir","xdir",1180076178)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache33057 = info33058;

return info33058;
})():info__11521__auto__);
var precompiled33059 = info__11521__auto____$1.precompiled;
var dynamic_QMARK___11522__auto__ = info__11521__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___11522__auto__)){
return precompiled33059.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled33059;
}
})(),(0),sketch);
});
coding_challenges.space_invaders.views.space_invaders_sketch = (function coding_challenges$space_invaders$views$space_invaders_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.key_pressed))?(function() { 
var G__33060__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.key_pressed,args);
};
var G__33060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33061__i = 0, G__33061__a = new Array(arguments.length -  0);
while (G__33061__i < G__33061__a.length) {G__33061__a[G__33061__i] = arguments[G__33061__i + 0]; ++G__33061__i;}
  args = new cljs.core.IndexedSeq(G__33061__a,0);
} 
return G__33060__delegate.call(this,args);};
G__33060.cljs$lang$maxFixedArity = 0;
G__33060.cljs$lang$applyTo = (function (arglist__33062){
var args = cljs.core.seq(arglist__33062);
return G__33060__delegate(args);
});
G__33060.cljs$core$IFn$_invoke$arity$variadic = G__33060__delegate;
return G__33060;
})()
:coding_challenges.space_invaders.views.key_pressed),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.update_STAR_))?(function() { 
var G__33063__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.update_STAR_,args);
};
var G__33063 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33064__i = 0, G__33064__a = new Array(arguments.length -  0);
while (G__33064__i < G__33064__a.length) {G__33064__a[G__33064__i] = arguments[G__33064__i + 0]; ++G__33064__i;}
  args = new cljs.core.IndexedSeq(G__33064__a,0);
} 
return G__33063__delegate.call(this,args);};
G__33063.cljs$lang$maxFixedArity = 0;
G__33063.cljs$lang$applyTo = (function (arglist__33065){
var args = cljs.core.seq(arglist__33065);
return G__33063__delegate(args);
});
G__33063.cljs$core$IFn$_invoke$arity$variadic = G__33063__delegate;
return G__33063;
})()
:coding_challenges.space_invaders.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.space_invaders.views.w,coding_challenges.space_invaders.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.setup))?(function() { 
var G__33066__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.setup,args);
};
var G__33066 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33067__i = 0, G__33067__a = new Array(arguments.length -  0);
while (G__33067__i < G__33067__a.length) {G__33067__a[G__33067__i] = arguments[G__33067__i + 0]; ++G__33067__i;}
  args = new cljs.core.IndexedSeq(G__33067__a,0);
} 
return G__33066__delegate.call(this,args);};
G__33066.cljs$lang$maxFixedArity = 0;
G__33066.cljs$lang$applyTo = (function (arglist__33068){
var args = cljs.core.seq(arglist__33068);
return G__33066__delegate(args);
});
G__33066.cljs$core$IFn$_invoke$arity$variadic = G__33066__delegate;
return G__33066;
})()
:coding_challenges.space_invaders.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"space-invaders",new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.key_released))?(function() { 
var G__33069__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.key_released,args);
};
var G__33069 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33070__i = 0, G__33070__a = new Array(arguments.length -  0);
while (G__33070__i < G__33070__a.length) {G__33070__a[G__33070__i] = arguments[G__33070__i + 0]; ++G__33070__i;}
  args = new cljs.core.IndexedSeq(G__33070__a,0);
} 
return G__33069__delegate.call(this,args);};
G__33069.cljs$lang$maxFixedArity = 0;
G__33069.cljs$lang$applyTo = (function (arglist__33071){
var args = cljs.core.seq(arglist__33071);
return G__33069__delegate(args);
});
G__33069.cljs$core$IFn$_invoke$arity$variadic = G__33069__delegate;
return G__33069;
})()
:coding_challenges.space_invaders.views.key_released),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.draw))?(function() { 
var G__33072__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.draw,args);
};
var G__33072 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33073__i = 0, G__33073__a = new Array(arguments.length -  0);
while (G__33073__i < G__33073__a.length) {G__33073__a[G__33073__i] = arguments[G__33073__i + 0]; ++G__33073__i;}
  args = new cljs.core.IndexedSeq(G__33073__a,0);
} 
return G__33072__delegate.call(this,args);};
G__33072.cljs$lang$maxFixedArity = 0;
G__33072.cljs$lang$applyTo = (function (arglist__33074){
var args = cljs.core.seq(arglist__33074);
return G__33072__delegate(args);
});
G__33072.cljs$core$IFn$_invoke$arity$variadic = G__33072__delegate;
return G__33072;
})()
:coding_challenges.space_invaders.views.draw));
});
goog.exportSymbol('coding_challenges.space_invaders.views.space_invaders_sketch', coding_challenges.space_invaders.views.space_invaders_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12874__12875__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__12874__12875__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.space_invaders.views.space_invaders_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"space-invaders"], null));
}
coding_challenges.space_invaders.views.view = (function coding_challenges$space_invaders$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){var code = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-one","select-one",1322686564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space-invaders","space-invaders",-1238341852),new cljs.core.Keyword(null,"code","code",1586293142)], null)], null));
return ((function (code){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var code__$1 = (function (){var or__6409__auto__ = cljs.core.deref.call(null,code);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return new cljs.core.Keyword(null,"sketch","sketch",465948709);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Space invaders demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#space-invaders","canvas#space-invaders",-1686061181),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.space_invaders.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.space_invaders.views.h], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sketch","sketch",465948709),new cljs.core.Keyword(null,"label","label",1718410804),"Sketch"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"label","label",1718410804),"Drop"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"flower","flower",583610250),new cljs.core.Keyword(null,"label","label",1718410804),"Flower"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"label","label",1718410804),"Ship"], null)], null),new cljs.core.Keyword(null,"model","model",331153215),code__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (code__$1,code){
return (function (p1__33075_SHARP_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space-invaders","space-invaders",-1238341852),new cljs.core.Keyword(null,"code","code",1586293142)], null),p1__33075_SHARP_], null)], null));

var seq__33081 = cljs.core.seq.call(null,document.querySelectorAll("code"));
var chunk__33082 = null;
var count__33083 = (0);
var i__33084 = (0);
while(true){
if((i__33084 < count__33083)){
var x = cljs.core._nth.call(null,chunk__33082,i__33084);
hljs.highlightBlock(x);

var G__33086 = seq__33081;
var G__33087 = chunk__33082;
var G__33088 = count__33083;
var G__33089 = (i__33084 + (1));
seq__33081 = G__33086;
chunk__33082 = G__33087;
count__33083 = G__33088;
i__33084 = G__33089;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33081);
if(temp__4657__auto__){
var seq__33081__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33081__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__33081__$1);
var G__33090 = cljs.core.chunk_rest.call(null,seq__33081__$1);
var G__33091 = c__7220__auto__;
var G__33092 = cljs.core.count.call(null,c__7220__auto__);
var G__33093 = (0);
seq__33081 = G__33090;
chunk__33082 = G__33091;
count__33083 = G__33092;
i__33084 = G__33093;
continue;
} else {
var x = cljs.core.first.call(null,seq__33081__$1);
hljs.highlightBlock(x);

var G__33094 = cljs.core.next.call(null,seq__33081__$1);
var G__33095 = null;
var G__33096 = (0);
var G__33097 = (0);
seq__33081 = G__33094;
chunk__33082 = G__33095;
count__33083 = G__33096;
i__33084 = G__33097;
continue;
}
} else {
return null;
}
}
break;
}
});})(code__$1,code))
], null),(function (){var G__33085 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__33085) {
case "sketch":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(def w 600)\n(def h 400)\n\n(defn setup []\n {:ship (ship/make)\n  :flowers (for [i (range 6)]\n            (flower/make (+ (* i 80) 80)\n                         60))})\n\n(defn update-drops [sketch]\n (->> sketch\n      (transform [(collect-one :flowers)\n                  :drops]\n                 (fn [flowers drops]\n                  (->> (remove #(some (partial hits? %) flowers)\n                               drops)\n                       (transform ALL d/update*))))))\n\n(defn horizontal-edge? [{x :x}]\n ((some-fn (partial > 0)\n          (partial < (q/width)))\n  x))\n\n(defn update-flowers [sketch]\n (->> sketch\n      (transform [(collect-one :drops)\n                  :flowers]\n                 (fn [drops flowers]\n                  (if (some horizontal-edge?\n                            flowers)\n                   (transform ALL (partial flower/update* true drops)\n                              flowers)\n                   (transform ALL (partial flower/update* false drops)\n                              flowers))))))\n\n(defn update-ship [sketch]\n (->> sketch\n      (transform :ship ship/update*)))\n\n(defn update* [sketch]\n (->> sketch\n      update-drops\n      update-flowers\n      update-ship))\n\n(defn draw [{ship :ship\n             drops :drops\n             flowers :flowers\n             :as sketch}]\n (q/background 51)\n (ship/draw ship)\n (doseq [d drops]\n  (d/draw d))\n (doseq [flower flowers]\n  (flower/draw flower)))\n\n(defn key-pressed [sketch event]\n (letfn [(any-of\n          [& ks]\n          (some (partial = (:key event))\n                ks))]\n  (cond\n   (any-of (keyword \" \"))\n   (->> sketch\n        (transform [(collect-one :ship)\n                    :drops]\n                   (fn [{x :x\n                         :as ship} drops]\n                    (conj drops\n                          (d/make x (q/height))))))\n   (any-of :left :a)\n   (->> sketch\n        (setval [:ship :xdir] -1))\n   (any-of :right :d)\n   (->> sketch\n        (setval [:ship :xdir] 1))\n   :else sketch)))\n\n(defn key-released [sketch]\n (->> sketch\n      (setval [:ship :xdir] 0)))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/biN3v3ef-Y0\n\nvar ship;\nvar flowers = [];\nvar drops = [];\n\nfunction setup() {\n  createCanvas(600, 400);\n  ship = new Ship();\n  // drop = new Drop(width/2, height/2);\n  for (var i = 0; i < 6; i++) {\n    flowers[i] = new Flower(i*80+80, 60);\n  }\n}\n\nfunction draw() {\n  background(51);\n  ship.show();\n  ship.move();\n\n  for (var i = 0; i < drops.length; i++) {\n    drops[i].show();\n    drops[i].move();\n    for (var j = 0; j < flowers.length; j++) {\n      if (drops[i].hits(flowers[j])) {\n        flowers[j].grow();\n        drops[i].evaporate();\n      }\n    }\n  }\n\n  var edge = false;\n\n  for (var i = 0; i < flowers.length; i++) {\n    flowers[i].show();\n    flowers[i].move();\n    if (flowers[i].x > width || flowers[i].x < 0) {\n      edge = true;\n    }\n  }\n\n  if (edge) {\n    for (var i = 0; i < flowers.length; i++) {\n      flowers[i].shiftDown();\n    }\n  }\n\n  for (var i = drops.length-1; i >= 0; i--) {\n    if (drops[i].toDelete) {\n      drops.splice(i, 1);\n    }\n  }\n\n\n}\n\nfunction keyReleased() {\n  if (key != ' ') {\n    ship.setDir(0);\n  }\n}\n\n\nfunction keyPressed() {\n  if (key === ' ') {\n    var drop = new Drop(ship.x, height);\n    drops.push(drop);\n  }\n\n  if (keyCode === RIGHT_ARROW) {\n    ship.setDir(1);\n  } else if (keyCode === LEFT_ARROW) {\n    ship.setDir(-1);\n  }\n}\n"], null)], null)], null)], null);

break;
case "drop":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(defn make [x y]\n {:type 'Drop\n  :x x\n  :y y\n  :r 16})\n\n(defn move-up [d]\n (->> d\n      (transform :y #(- % 5))))\n\n(defn hits? [{dx :x\n              dy :y\n              dr :r\n              :as d}\n             {fx :x\n              fy :y\n              fr :r\n              :as flower}]\n (< (q/dist dx dy\n            fx fy)\n    (+ dr fr)))\n\n(defn update* [d]\n (move-up d))\n\n(defn draw [{dx :x\n             dy :y\n             dr :r\n             :as d}]\n (q/fill 150 0 255)\n (q/ellipse dx dy\n            dr dr))\n"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/biN3v3ef-Y0\n\nfunction Drop(x, y) {\n  this.x = x;\n  this.y = y;\n  this.r = 8;\n  this.toDelete = false;\n\n  this.show = function() {\n    noStroke();\n    fill(150, 0, 255);\n    ellipse(this.x, this.y, this.r*2, this.r*2);\n  }\n\n  this.evaporate = function() {\n    this.toDelete = true;\n  }\n\n  this.hits = function(flower) {\n    var d = dist(this.x, this.y, flower.x, flower.y);\n    if (d < this.r + flower.r) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  this.move = function() {\n    this.y = this.y - 5;\n  }\n\n}\n"], null)], null)], null)], null);

break;
case "flower":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(defn make [x y]\n {:type 'Flower\n  :x x\n  :y y\n  :r 30\n  :xdir 1})\n\n(defn grow [flower]\n (->> flower\n      (transform :r (partial + 2))))\n\n(defn move [flower]\n (->> flower\n      (transform [(collect-one :xdir)\n                  :x]\n                 +)))\n\n(defn shift-down [flower]\n (->> flower\n      (transform [(collect-one :r)\n                  :y] +)\n      (transform :xdir (partial * -1))))\n\n(defn update* [edge? drops flower]\n (cond->> flower\n          (some #(hits? % flower) drops) grow\n          edge? shift-down\n          :always move))\n\n(defn draw [{x :x\n             y :y\n             r :r\n             :as flower}]\n (q/fill 255 0 200)\n (q/ellipse x y\n            (* 2 r) (* 2 r)))\n"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/biN3v3ef-Y0\n\nfunction Flower(x, y) {\n  this.x = x;\n  this.y = y;\n  this.r = 30;\n\n  this.xdir = 1;\n\n  this.grow = function() {\n    this.r = this.r + 2;\n  }\n\n  this.shiftDown = function() {\n    this.xdir *= -1;\n    this.y += this.r;\n  }\n\n  this.move = function() {\n    this.x = this.x + this.xdir;\n  }\n\n  this.show = function() {\n    noStroke();\n    fill(255, 0, 200, 150);\n    ellipse(this.x, this.y, this.r*2, this.r*2);\n  }\n\n}\n"], null)], null)], null)], null);

break;
case "ship":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(defn make []\n {:type 'Ship\n  :x (/ (q/width) 2)\n  :xdir 0})\n\n(defn move [ship]\n (->> ship\n      (transform [(collect-one :xdir)\n                  :x]\n                 (fn [xdir x]\n                  (+ x (* 5 xdir))))))\n\n(defn update* [ship]\n (move ship))\n\n(defn draw [{x :x\n             :as ship}]\n (q/fill 255)\n (q/rect-mode :center)\n (q/rect x (- (q/height) 20) 20 60))\n"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/biN3v3ef-Y0\n\nfunction Ship() {\n  this.x = width/2;\n  this.xdir = 0;\n\n  this.show = function() {\n    fill(255);\n    rectMode(CENTER);\n    rect(this.x, height-20, 20, 60);\n  }\n\n  this.setDir = function(dir) {\n    this.xdir = dir;\n  }\n\n  this.move = function(dir) {\n    this.x += this.xdir*5;\n  }\n\n}\n"], null)], null)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(code__$1)].join('')));

}
})()], null);
})()], null);
});
;})(code))
})(),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.space_invaders.views.space_invaders_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484702590395
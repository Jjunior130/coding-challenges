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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ship","ship",197863473),coding_challenges.space_invaders.ship.make.call(null),new cljs.core.Keyword(null,"flowers","flowers",-1521787890),(function (){var iter__25826__auto__ = (function coding_challenges$space_invaders$views$setup_$_iter__45468(s__45469){
return (new cljs.core.LazySeq(null,(function (){
var s__45469__$1 = s__45469;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45469__$1);
if(temp__4657__auto__){
var s__45469__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45469__$2)){
var c__25824__auto__ = cljs.core.chunk_first.call(null,s__45469__$2);
var size__25825__auto__ = cljs.core.count.call(null,c__25824__auto__);
var b__45471 = cljs.core.chunk_buffer.call(null,size__25825__auto__);
if((function (){var i__45470 = (0);
while(true){
if((i__45470 < size__25825__auto__)){
var i = cljs.core._nth.call(null,c__25824__auto__,i__45470);
cljs.core.chunk_append.call(null,b__45471,coding_challenges.space_invaders.flower.make.call(null,((i * (80)) + (80)),(60)));

var G__45472 = (i__45470 + (1));
i__45470 = G__45472;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45471),coding_challenges$space_invaders$views$setup_$_iter__45468.call(null,cljs.core.chunk_rest.call(null,s__45469__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45471),null);
}
} else {
var i = cljs.core.first.call(null,s__45469__$2);
return cljs.core.cons.call(null,coding_challenges.space_invaders.flower.make.call(null,((i * (80)) + (80)),(60)),coding_challenges$space_invaders$views$setup_$_iter__45468.call(null,cljs.core.rest.call(null,s__45469__$2)));
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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.space_invaders.views.pathcache45480;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info45481 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flowers","flowers",-1521787890)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"flowers","flowers",-1521787890))),new cljs.core.Keyword(null,"drops","drops",-1558072608)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.space_invaders.views.pathcache45480 = info45481;

return info45481;
})():info__28666__auto__);
var precompiled45482 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled45482.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled45482;
}
})(),(function (flowers,drops){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.space_invaders.views.pathcache45483;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info45484 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.space_invaders.views.pathcache45483 = info45484;

return info45484;
})():info__28666__auto__);
var precompiled45485 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled45485.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled45485;
}
})(),coding_challenges.space_invaders.drop.update_STAR_,cljs.core.remove.call(null,(function (p1__45473_SHARP_){
return cljs.core.some.call(null,cljs.core.partial.call(null,coding_challenges.space_invaders.drop.hits_QMARK_,p1__45473_SHARP_),flowers);
}),drops));
}),sketch);
});
coding_challenges.space_invaders.views.horizontal_edge_QMARK_ = (function coding_challenges$space_invaders$views$horizontal_edge_QMARK_(p__45486){
var map__45489 = p__45486;
var map__45489__$1 = ((((!((map__45489 == null)))?((((map__45489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45489):map__45489);
var x = cljs.core.get.call(null,map__45489__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return cljs.core.some_fn.call(null,cljs.core.partial.call(null,cljs.core._GT_,(0)),cljs.core.partial.call(null,cljs.core._LT_,quil.core.width.call(null))).call(null,x);
});
coding_challenges.space_invaders.views.update_flowers = (function coding_challenges$space_invaders$views$update_flowers(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.space_invaders.views.pathcache45500;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info45501 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drops","drops",-1558072608)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"drops","drops",-1558072608))),new cljs.core.Keyword(null,"flowers","flowers",-1521787890)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.space_invaders.views.pathcache45500 = info45501;

return info45501;
})():info__28666__auto__);
var precompiled45502 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled45502.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled45502;
}
})(),(function (drops,flowers){
if(cljs.core.truth_(cljs.core.some.call(null,coding_challenges.space_invaders.views.horizontal_edge_QMARK_,flowers))){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.space_invaders.views.pathcache45503;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info45504 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.space_invaders.views.pathcache45503 = info45504;

return info45504;
})():info__28666__auto__);
var precompiled45505 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled45505.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled45505;
}
})(),cljs.core.partial.call(null,coding_challenges.space_invaders.flower.update_STAR_,true,drops),flowers);
} else {
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.space_invaders.views.pathcache45506;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info45507 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.space_invaders.views.pathcache45506 = info45507;

return info45507;
})():info__28666__auto__);
var precompiled45508 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled45508.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled45508;
}
})(),cljs.core.partial.call(null,coding_challenges.space_invaders.flower.update_STAR_,false,drops),flowers);
}
}),sketch);
});
coding_challenges.space_invaders.views.update_ship = (function coding_challenges$space_invaders$views$update_ship(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.space_invaders.views.pathcache45512;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info45513 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache45512 = info45513;

return info45513;
})():info__28666__auto__);
var precompiled45514 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled45514.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled45514;
}
})(),coding_challenges.space_invaders.ship.update_STAR_,sketch);
});
coding_challenges.space_invaders.views.update_STAR_ = (function coding_challenges$space_invaders$views$update_STAR_(sketch){
return coding_challenges.space_invaders.views.update_ship.call(null,coding_challenges.space_invaders.views.update_flowers.call(null,coding_challenges.space_invaders.views.update_drops.call(null,sketch)));
});
coding_challenges.space_invaders.views.draw = (function coding_challenges$space_invaders$views$draw(p__45515){
var map__45526 = p__45515;
var map__45526__$1 = ((((!((map__45526 == null)))?((((map__45526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45526):map__45526);
var sketch = map__45526__$1;
var ship = cljs.core.get.call(null,map__45526__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var drops = cljs.core.get.call(null,map__45526__$1,new cljs.core.Keyword(null,"drops","drops",-1558072608));
var flowers = cljs.core.get.call(null,map__45526__$1,new cljs.core.Keyword(null,"flowers","flowers",-1521787890));
quil.core.background.call(null,(51));

coding_challenges.space_invaders.ship.draw.call(null,ship);

var seq__45528_45536 = cljs.core.seq.call(null,drops);
var chunk__45529_45537 = null;
var count__45530_45538 = (0);
var i__45531_45539 = (0);
while(true){
if((i__45531_45539 < count__45530_45538)){
var d_45540 = cljs.core._nth.call(null,chunk__45529_45537,i__45531_45539);
coding_challenges.space_invaders.drop.draw.call(null,d_45540);

var G__45541 = seq__45528_45536;
var G__45542 = chunk__45529_45537;
var G__45543 = count__45530_45538;
var G__45544 = (i__45531_45539 + (1));
seq__45528_45536 = G__45541;
chunk__45529_45537 = G__45542;
count__45530_45538 = G__45543;
i__45531_45539 = G__45544;
continue;
} else {
var temp__4657__auto___45545 = cljs.core.seq.call(null,seq__45528_45536);
if(temp__4657__auto___45545){
var seq__45528_45546__$1 = temp__4657__auto___45545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45528_45546__$1)){
var c__25857__auto___45547 = cljs.core.chunk_first.call(null,seq__45528_45546__$1);
var G__45548 = cljs.core.chunk_rest.call(null,seq__45528_45546__$1);
var G__45549 = c__25857__auto___45547;
var G__45550 = cljs.core.count.call(null,c__25857__auto___45547);
var G__45551 = (0);
seq__45528_45536 = G__45548;
chunk__45529_45537 = G__45549;
count__45530_45538 = G__45550;
i__45531_45539 = G__45551;
continue;
} else {
var d_45552 = cljs.core.first.call(null,seq__45528_45546__$1);
coding_challenges.space_invaders.drop.draw.call(null,d_45552);

var G__45553 = cljs.core.next.call(null,seq__45528_45546__$1);
var G__45554 = null;
var G__45555 = (0);
var G__45556 = (0);
seq__45528_45536 = G__45553;
chunk__45529_45537 = G__45554;
count__45530_45538 = G__45555;
i__45531_45539 = G__45556;
continue;
}
} else {
}
}
break;
}

var seq__45532 = cljs.core.seq.call(null,flowers);
var chunk__45533 = null;
var count__45534 = (0);
var i__45535 = (0);
while(true){
if((i__45535 < count__45534)){
var flower = cljs.core._nth.call(null,chunk__45533,i__45535);
coding_challenges.space_invaders.flower.draw.call(null,flower);

var G__45557 = seq__45532;
var G__45558 = chunk__45533;
var G__45559 = count__45534;
var G__45560 = (i__45535 + (1));
seq__45532 = G__45557;
chunk__45533 = G__45558;
count__45534 = G__45559;
i__45535 = G__45560;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45532);
if(temp__4657__auto__){
var seq__45532__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45532__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__45532__$1);
var G__45561 = cljs.core.chunk_rest.call(null,seq__45532__$1);
var G__45562 = c__25857__auto__;
var G__45563 = cljs.core.count.call(null,c__25857__auto__);
var G__45564 = (0);
seq__45532 = G__45561;
chunk__45533 = G__45562;
count__45534 = G__45563;
i__45535 = G__45564;
continue;
} else {
var flower = cljs.core.first.call(null,seq__45532__$1);
coding_challenges.space_invaders.flower.draw.call(null,flower);

var G__45565 = cljs.core.next.call(null,seq__45532__$1);
var G__45566 = null;
var G__45567 = (0);
var G__45568 = (0);
seq__45532 = G__45565;
chunk__45533 = G__45566;
count__45534 = G__45567;
i__45535 = G__45568;
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
var G__45595__i = 0, G__45595__a = new Array(arguments.length -  0);
while (G__45595__i < G__45595__a.length) {G__45595__a[G__45595__i] = arguments[G__45595__i + 0]; ++G__45595__i;}
  ks = new cljs.core.IndexedSeq(G__45595__a,0);
} 
return coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate.call(this,ks);};
coding_challenges$space_invaders$views$key_pressed_$_any_of.cljs$lang$maxFixedArity = 0;
coding_challenges$space_invaders$views$key_pressed_$_any_of.cljs$lang$applyTo = (function (arglist__45596){
var ks = cljs.core.seq(arglist__45596);
return coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate(ks);
});
coding_challenges$space_invaders$views$key_pressed_$_any_of.cljs$core$IFn$_invoke$arity$variadic = coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate;
return coding_challenges$space_invaders$views$key_pressed_$_any_of;
})()
;
var G__45582 = sketch;
var G__45582__$1 = (cljs.core.truth_(any_of.call(null,cljs.core.keyword.call(null," ")))?com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.space_invaders.views.pathcache45583;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info45584 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"ship","ship",197863473))),new cljs.core.Keyword(null,"drops","drops",-1558072608)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.space_invaders.views.pathcache45583 = info45584;

return info45584;
})():info__28666__auto__);
var precompiled45585 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled45585.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled45585;
}
})(),((function (G__45582){
return (function (p__45586,drops){
var map__45587 = p__45586;
var map__45587__$1 = ((((!((map__45587 == null)))?((((map__45587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45587):map__45587);
var ship = map__45587__$1;
var x = cljs.core.get.call(null,map__45587__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return cljs.core.conj.call(null,drops,coding_challenges.space_invaders.drop.make.call(null,x,quil.core.height.call(null)));
});})(G__45582))
,G__45582):G__45582);
var G__45582__$2 = (cljs.core.truth_(any_of.call(null,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"a","a",-2123407586)))?com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.space_invaders.views.pathcache45589;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info45590 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"xdir","xdir",1180076178)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache45589 = info45590;

return info45590;
})():info__28666__auto__);
var precompiled45591 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled45591.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled45591;
}
})(),(-1),G__45582__$1):G__45582__$1);
if(cljs.core.truth_(any_of.call(null,new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"d","d",1972142424)))){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.space_invaders.views.pathcache45592;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info45593 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"xdir","xdir",1180076178)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache45592 = info45593;

return info45593;
})():info__28666__auto__);
var precompiled45594 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled45594.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled45594;
}
})(),(1),G__45582__$2);
} else {
return G__45582__$2;
}
});
coding_challenges.space_invaders.views.key_released = (function coding_challenges$space_invaders$views$key_released(sketch){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.space_invaders.views.pathcache45600;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info45601 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"xdir","xdir",1180076178)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache45600 = info45601;

return info45601;
})():info__28666__auto__);
var precompiled45602 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled45602.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled45602;
}
})(),(0),sketch);
});
coding_challenges.space_invaders.views.space_invaders_sketch = (function coding_challenges$space_invaders$views$space_invaders_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.key_pressed))?(function() { 
var G__45603__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.key_pressed,args);
};
var G__45603 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45604__i = 0, G__45604__a = new Array(arguments.length -  0);
while (G__45604__i < G__45604__a.length) {G__45604__a[G__45604__i] = arguments[G__45604__i + 0]; ++G__45604__i;}
  args = new cljs.core.IndexedSeq(G__45604__a,0);
} 
return G__45603__delegate.call(this,args);};
G__45603.cljs$lang$maxFixedArity = 0;
G__45603.cljs$lang$applyTo = (function (arglist__45605){
var args = cljs.core.seq(arglist__45605);
return G__45603__delegate(args);
});
G__45603.cljs$core$IFn$_invoke$arity$variadic = G__45603__delegate;
return G__45603;
})()
:coding_challenges.space_invaders.views.key_pressed),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.update_STAR_))?(function() { 
var G__45606__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.update_STAR_,args);
};
var G__45606 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45607__i = 0, G__45607__a = new Array(arguments.length -  0);
while (G__45607__i < G__45607__a.length) {G__45607__a[G__45607__i] = arguments[G__45607__i + 0]; ++G__45607__i;}
  args = new cljs.core.IndexedSeq(G__45607__a,0);
} 
return G__45606__delegate.call(this,args);};
G__45606.cljs$lang$maxFixedArity = 0;
G__45606.cljs$lang$applyTo = (function (arglist__45608){
var args = cljs.core.seq(arglist__45608);
return G__45606__delegate(args);
});
G__45606.cljs$core$IFn$_invoke$arity$variadic = G__45606__delegate;
return G__45606;
})()
:coding_challenges.space_invaders.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.space_invaders.views.w,coding_challenges.space_invaders.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.setup))?(function() { 
var G__45609__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.setup,args);
};
var G__45609 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45610__i = 0, G__45610__a = new Array(arguments.length -  0);
while (G__45610__i < G__45610__a.length) {G__45610__a[G__45610__i] = arguments[G__45610__i + 0]; ++G__45610__i;}
  args = new cljs.core.IndexedSeq(G__45610__a,0);
} 
return G__45609__delegate.call(this,args);};
G__45609.cljs$lang$maxFixedArity = 0;
G__45609.cljs$lang$applyTo = (function (arglist__45611){
var args = cljs.core.seq(arglist__45611);
return G__45609__delegate(args);
});
G__45609.cljs$core$IFn$_invoke$arity$variadic = G__45609__delegate;
return G__45609;
})()
:coding_challenges.space_invaders.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"space-invaders",new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.key_released))?(function() { 
var G__45612__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.key_released,args);
};
var G__45612 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45613__i = 0, G__45613__a = new Array(arguments.length -  0);
while (G__45613__i < G__45613__a.length) {G__45613__a[G__45613__i] = arguments[G__45613__i + 0]; ++G__45613__i;}
  args = new cljs.core.IndexedSeq(G__45613__a,0);
} 
return G__45612__delegate.call(this,args);};
G__45612.cljs$lang$maxFixedArity = 0;
G__45612.cljs$lang$applyTo = (function (arglist__45614){
var args = cljs.core.seq(arglist__45614);
return G__45612__delegate(args);
});
G__45612.cljs$core$IFn$_invoke$arity$variadic = G__45612__delegate;
return G__45612;
})()
:coding_challenges.space_invaders.views.key_released),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.draw))?(function() { 
var G__45615__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.draw,args);
};
var G__45615 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45616__i = 0, G__45616__a = new Array(arguments.length -  0);
while (G__45616__i < G__45616__a.length) {G__45616__a[G__45616__i] = arguments[G__45616__i + 0]; ++G__45616__i;}
  args = new cljs.core.IndexedSeq(G__45616__a,0);
} 
return G__45615__delegate.call(this,args);};
G__45615.cljs$lang$maxFixedArity = 0;
G__45615.cljs$lang$applyTo = (function (arglist__45617){
var args = cljs.core.seq(arglist__45617);
return G__45615__delegate(args);
});
G__45615.cljs$core$IFn$_invoke$arity$variadic = G__45615__delegate;
return G__45615;
})()
:coding_challenges.space_invaders.views.draw));
});
goog.exportSymbol('coding_challenges.space_invaders.views.space_invaders_sketch', coding_challenges.space_invaders.views.space_invaders_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__29727__29728__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__29727__29728__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.space_invaders.views.space_invaders_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"space-invaders"], null));
}
coding_challenges.space_invaders.views.view = (function coding_challenges$space_invaders$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){var code = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-one","select-one",1322686564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space-invaders","space-invaders",-1238341852),new cljs.core.Keyword(null,"code","code",1586293142)], null)], null));
return ((function (code){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var code__$1 = (function (){var or__25046__auto__ = cljs.core.deref.call(null,code);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return new cljs.core.Keyword(null,"sketch","sketch",465948709);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Space invaders demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#space-invaders","canvas#space-invaders",-1686061181),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.space_invaders.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.space_invaders.views.h], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sketch","sketch",465948709),new cljs.core.Keyword(null,"label","label",1718410804),"Sketch"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"label","label",1718410804),"Drop"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"flower","flower",583610250),new cljs.core.Keyword(null,"label","label",1718410804),"Flower"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"label","label",1718410804),"Ship"], null)], null),new cljs.core.Keyword(null,"model","model",331153215),code__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (code__$1,code){
return (function (p1__45618_SHARP_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space-invaders","space-invaders",-1238341852),new cljs.core.Keyword(null,"code","code",1586293142)], null),p1__45618_SHARP_], null)], null));

var seq__45624 = cljs.core.seq.call(null,document.querySelectorAll("code"));
var chunk__45625 = null;
var count__45626 = (0);
var i__45627 = (0);
while(true){
if((i__45627 < count__45626)){
var x = cljs.core._nth.call(null,chunk__45625,i__45627);
hljs.highlightBlock(x);

var G__45629 = seq__45624;
var G__45630 = chunk__45625;
var G__45631 = count__45626;
var G__45632 = (i__45627 + (1));
seq__45624 = G__45629;
chunk__45625 = G__45630;
count__45626 = G__45631;
i__45627 = G__45632;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45624);
if(temp__4657__auto__){
var seq__45624__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45624__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__45624__$1);
var G__45633 = cljs.core.chunk_rest.call(null,seq__45624__$1);
var G__45634 = c__25857__auto__;
var G__45635 = cljs.core.count.call(null,c__25857__auto__);
var G__45636 = (0);
seq__45624 = G__45633;
chunk__45625 = G__45634;
count__45626 = G__45635;
i__45627 = G__45636;
continue;
} else {
var x = cljs.core.first.call(null,seq__45624__$1);
hljs.highlightBlock(x);

var G__45637 = cljs.core.next.call(null,seq__45624__$1);
var G__45638 = null;
var G__45639 = (0);
var G__45640 = (0);
seq__45624 = G__45637;
chunk__45625 = G__45638;
count__45626 = G__45639;
i__45627 = G__45640;
continue;
}
} else {
return null;
}
}
break;
}
});})(code__$1,code))
], null),(function (){var G__45628 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__45628) {
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

//# sourceMappingURL=views.js.map?rel=1484782598668
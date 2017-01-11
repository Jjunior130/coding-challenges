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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ship","ship",197863473),coding_challenges.space_invaders.ship.make.call(null),new cljs.core.Keyword(null,"flowers","flowers",-1521787890),(function (){var iter__25826__auto__ = (function coding_challenges$space_invaders$views$setup_$_iter__141354(s__141355){
return (new cljs.core.LazySeq(null,(function (){
var s__141355__$1 = s__141355;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__141355__$1);
if(temp__4657__auto__){
var s__141355__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__141355__$2)){
var c__25824__auto__ = cljs.core.chunk_first.call(null,s__141355__$2);
var size__25825__auto__ = cljs.core.count.call(null,c__25824__auto__);
var b__141357 = cljs.core.chunk_buffer.call(null,size__25825__auto__);
if((function (){var i__141356 = (0);
while(true){
if((i__141356 < size__25825__auto__)){
var i = cljs.core._nth.call(null,c__25824__auto__,i__141356);
cljs.core.chunk_append.call(null,b__141357,coding_challenges.space_invaders.flower.make.call(null,((i * (80)) + (80)),(60)));

var G__141358 = (i__141356 + (1));
i__141356 = G__141358;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__141357),coding_challenges$space_invaders$views$setup_$_iter__141354.call(null,cljs.core.chunk_rest.call(null,s__141355__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__141357),null);
}
} else {
var i = cljs.core.first.call(null,s__141355__$2);
return cljs.core.cons.call(null,coding_challenges.space_invaders.flower.make.call(null,((i * (80)) + (80)),(60)),coding_challenges$space_invaders$views$setup_$_iter__141354.call(null,cljs.core.rest.call(null,s__141355__$2)));
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
coding_challenges.space_invaders.views.update_STAR_ = (function coding_challenges$space_invaders$views$update_STAR_(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.views.pathcache141378;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141379 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache141378 = info141379;

return info141379;
})():info__30860__auto__);
var precompiled141380 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141380.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled141380;
}
})(),coding_challenges.space_invaders.ship.update_STAR_,com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.views.pathcache141381;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141382 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drops","drops",-1558072608)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"drops","drops",-1558072608))),new cljs.core.Keyword(null,"flowers","flowers",-1521787890)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.space_invaders.views.pathcache141381 = info141382;

return info141382;
})():info__30860__auto__);
var precompiled141383 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141383.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled141383;
}
})(),(function (drops,flowers){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.comp.call(null,cljs.core.some_fn.call(null,cljs.core.partial.call(null,cljs.core._GT_,(0)),cljs.core.partial.call(null,cljs.core._LT_,quil.core.width.call(null))),new cljs.core.Keyword(null,"x","x",2099068185)),flowers))){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.views.pathcache141384;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141385 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.space_invaders.views.pathcache141384 = info141385;

return info141385;
})():info__30860__auto__);
var precompiled141386 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141386.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled141386;
}
})(),cljs.core.partial.call(null,coding_challenges.space_invaders.flower.update_STAR_,true,drops),flowers);
} else {
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.views.pathcache141387;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141388 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.space_invaders.views.pathcache141387 = info141388;

return info141388;
})():info__30860__auto__);
var precompiled141389 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141389.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled141389;
}
})(),cljs.core.partial.call(null,coding_challenges.space_invaders.flower.update_STAR_,false,drops),flowers);
}
}),com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.views.pathcache141390;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141391 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flowers","flowers",-1521787890)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"flowers","flowers",-1521787890))),new cljs.core.Keyword(null,"drops","drops",-1558072608)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.space_invaders.views.pathcache141390 = info141391;

return info141391;
})():info__30860__auto__);
var precompiled141392 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141392.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled141392;
}
})(),(function (flowers,drops){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.views.pathcache141393;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141394 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.space_invaders.views.pathcache141393 = info141394;

return info141394;
})():info__30860__auto__);
var precompiled141395 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141395.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled141395;
}
})(),coding_challenges.space_invaders.drop.update_STAR_,cljs.core.remove.call(null,(function (p1__141359_SHARP_){
return cljs.core.some.call(null,cljs.core.partial.call(null,coding_challenges.space_invaders.drop.hits_QMARK_,p1__141359_SHARP_),flowers);
}),drops));
}),sketch)));
});
coding_challenges.space_invaders.views.draw = (function coding_challenges$space_invaders$views$draw(sketch){
quil.core.background.call(null,(51));

coding_challenges.space_invaders.ship.draw.call(null,new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(sketch));

var seq__141404_141412 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"drops","drops",-1558072608).cljs$core$IFn$_invoke$arity$1(sketch));
var chunk__141405_141413 = null;
var count__141406_141414 = (0);
var i__141407_141415 = (0);
while(true){
if((i__141407_141415 < count__141406_141414)){
var d_141416 = cljs.core._nth.call(null,chunk__141405_141413,i__141407_141415);
coding_challenges.space_invaders.drop.draw.call(null,d_141416);

var G__141417 = seq__141404_141412;
var G__141418 = chunk__141405_141413;
var G__141419 = count__141406_141414;
var G__141420 = (i__141407_141415 + (1));
seq__141404_141412 = G__141417;
chunk__141405_141413 = G__141418;
count__141406_141414 = G__141419;
i__141407_141415 = G__141420;
continue;
} else {
var temp__4657__auto___141421 = cljs.core.seq.call(null,seq__141404_141412);
if(temp__4657__auto___141421){
var seq__141404_141422__$1 = temp__4657__auto___141421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__141404_141422__$1)){
var c__25857__auto___141423 = cljs.core.chunk_first.call(null,seq__141404_141422__$1);
var G__141424 = cljs.core.chunk_rest.call(null,seq__141404_141422__$1);
var G__141425 = c__25857__auto___141423;
var G__141426 = cljs.core.count.call(null,c__25857__auto___141423);
var G__141427 = (0);
seq__141404_141412 = G__141424;
chunk__141405_141413 = G__141425;
count__141406_141414 = G__141426;
i__141407_141415 = G__141427;
continue;
} else {
var d_141428 = cljs.core.first.call(null,seq__141404_141422__$1);
coding_challenges.space_invaders.drop.draw.call(null,d_141428);

var G__141429 = cljs.core.next.call(null,seq__141404_141422__$1);
var G__141430 = null;
var G__141431 = (0);
var G__141432 = (0);
seq__141404_141412 = G__141429;
chunk__141405_141413 = G__141430;
count__141406_141414 = G__141431;
i__141407_141415 = G__141432;
continue;
}
} else {
}
}
break;
}

var seq__141408 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"flowers","flowers",-1521787890).cljs$core$IFn$_invoke$arity$1(sketch));
var chunk__141409 = null;
var count__141410 = (0);
var i__141411 = (0);
while(true){
if((i__141411 < count__141410)){
var flower = cljs.core._nth.call(null,chunk__141409,i__141411);
coding_challenges.space_invaders.flower.draw.call(null,flower);

var G__141433 = seq__141408;
var G__141434 = chunk__141409;
var G__141435 = count__141410;
var G__141436 = (i__141411 + (1));
seq__141408 = G__141433;
chunk__141409 = G__141434;
count__141410 = G__141435;
i__141411 = G__141436;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__141408);
if(temp__4657__auto__){
var seq__141408__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__141408__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__141408__$1);
var G__141437 = cljs.core.chunk_rest.call(null,seq__141408__$1);
var G__141438 = c__25857__auto__;
var G__141439 = cljs.core.count.call(null,c__25857__auto__);
var G__141440 = (0);
seq__141408 = G__141437;
chunk__141409 = G__141438;
count__141410 = G__141439;
i__141411 = G__141440;
continue;
} else {
var flower = cljs.core.first.call(null,seq__141408__$1);
coding_challenges.space_invaders.flower.draw.call(null,flower);

var G__141441 = cljs.core.next.call(null,seq__141408__$1);
var G__141442 = null;
var G__141443 = (0);
var G__141444 = (0);
seq__141408 = G__141441;
chunk__141409 = G__141442;
count__141410 = G__141443;
i__141411 = G__141444;
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
var G__141463__i = 0, G__141463__a = new Array(arguments.length -  0);
while (G__141463__i < G__141463__a.length) {G__141463__a[G__141463__i] = arguments[G__141463__i + 0]; ++G__141463__i;}
  ks = new cljs.core.IndexedSeq(G__141463__a,0);
} 
return coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate.call(this,ks);};
coding_challenges$space_invaders$views$key_pressed_$_any_of.cljs$lang$maxFixedArity = 0;
coding_challenges$space_invaders$views$key_pressed_$_any_of.cljs$lang$applyTo = (function (arglist__141464){
var ks = cljs.core.seq(arglist__141464);
return coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate(ks);
});
coding_challenges$space_invaders$views$key_pressed_$_any_of.cljs$core$IFn$_invoke$arity$variadic = coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate;
return coding_challenges$space_invaders$views$key_pressed_$_any_of;
})()
;
if(cljs.core.truth_(any_of.call(null,cljs.core.keyword.call(null," ")))){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.views.pathcache141454;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141455 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"ship","ship",197863473))),new cljs.core.Keyword(null,"drops","drops",-1558072608)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.space_invaders.views.pathcache141454 = info141455;

return info141455;
})():info__30860__auto__);
var precompiled141456 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141456.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled141456;
}
})(),(function (ship,drops){
return cljs.core.conj.call(null,drops,coding_challenges.space_invaders.drop.make.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship),quil.core.height.call(null)));
}),sketch);
} else {
if(cljs.core.truth_(any_of.call(null,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"a","a",-2123407586)))){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.views.pathcache141457;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141458 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"xdir","xdir",1180076178)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache141457 = info141458;

return info141458;
})():info__30860__auto__);
var precompiled141459 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141459.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled141459;
}
})(),(-1),sketch);
} else {
if(cljs.core.truth_(any_of.call(null,new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"d","d",1972142424)))){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.views.pathcache141460;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141461 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"xdir","xdir",1180076178)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache141460 = info141461;

return info141461;
})():info__30860__auto__);
var precompiled141462 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141462.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled141462;
}
})(),(1),sketch);
} else {
return sketch;

}
}
}
});
coding_challenges.space_invaders.views.key_released = (function coding_challenges$space_invaders$views$key_released(sketch){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.space_invaders.views.pathcache141468;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info141469 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"xdir","xdir",1180076178)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache141468 = info141469;

return info141469;
})():info__30860__auto__);
var precompiled141470 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled141470.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled141470;
}
})(),(0),sketch);
});
coding_challenges.space_invaders.views.space_invaders_sketch = (function coding_challenges$space_invaders$views$space_invaders_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.key_pressed))?(function() { 
var G__141471__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.key_pressed,args);
};
var G__141471 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__141472__i = 0, G__141472__a = new Array(arguments.length -  0);
while (G__141472__i < G__141472__a.length) {G__141472__a[G__141472__i] = arguments[G__141472__i + 0]; ++G__141472__i;}
  args = new cljs.core.IndexedSeq(G__141472__a,0);
} 
return G__141471__delegate.call(this,args);};
G__141471.cljs$lang$maxFixedArity = 0;
G__141471.cljs$lang$applyTo = (function (arglist__141473){
var args = cljs.core.seq(arglist__141473);
return G__141471__delegate(args);
});
G__141471.cljs$core$IFn$_invoke$arity$variadic = G__141471__delegate;
return G__141471;
})()
:coding_challenges.space_invaders.views.key_pressed),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.update_STAR_))?(function() { 
var G__141474__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.update_STAR_,args);
};
var G__141474 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__141475__i = 0, G__141475__a = new Array(arguments.length -  0);
while (G__141475__i < G__141475__a.length) {G__141475__a[G__141475__i] = arguments[G__141475__i + 0]; ++G__141475__i;}
  args = new cljs.core.IndexedSeq(G__141475__a,0);
} 
return G__141474__delegate.call(this,args);};
G__141474.cljs$lang$maxFixedArity = 0;
G__141474.cljs$lang$applyTo = (function (arglist__141476){
var args = cljs.core.seq(arglist__141476);
return G__141474__delegate(args);
});
G__141474.cljs$core$IFn$_invoke$arity$variadic = G__141474__delegate;
return G__141474;
})()
:coding_challenges.space_invaders.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.space_invaders.views.w,coding_challenges.space_invaders.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.setup))?(function() { 
var G__141477__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.setup,args);
};
var G__141477 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__141478__i = 0, G__141478__a = new Array(arguments.length -  0);
while (G__141478__i < G__141478__a.length) {G__141478__a[G__141478__i] = arguments[G__141478__i + 0]; ++G__141478__i;}
  args = new cljs.core.IndexedSeq(G__141478__a,0);
} 
return G__141477__delegate.call(this,args);};
G__141477.cljs$lang$maxFixedArity = 0;
G__141477.cljs$lang$applyTo = (function (arglist__141479){
var args = cljs.core.seq(arglist__141479);
return G__141477__delegate(args);
});
G__141477.cljs$core$IFn$_invoke$arity$variadic = G__141477__delegate;
return G__141477;
})()
:coding_challenges.space_invaders.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"space-invaders",new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.key_released))?(function() { 
var G__141480__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.key_released,args);
};
var G__141480 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__141481__i = 0, G__141481__a = new Array(arguments.length -  0);
while (G__141481__i < G__141481__a.length) {G__141481__a[G__141481__i] = arguments[G__141481__i + 0]; ++G__141481__i;}
  args = new cljs.core.IndexedSeq(G__141481__a,0);
} 
return G__141480__delegate.call(this,args);};
G__141480.cljs$lang$maxFixedArity = 0;
G__141480.cljs$lang$applyTo = (function (arglist__141482){
var args = cljs.core.seq(arglist__141482);
return G__141480__delegate(args);
});
G__141480.cljs$core$IFn$_invoke$arity$variadic = G__141480__delegate;
return G__141480;
})()
:coding_challenges.space_invaders.views.key_released),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.draw))?(function() { 
var G__141483__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.draw,args);
};
var G__141483 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__141484__i = 0, G__141484__a = new Array(arguments.length -  0);
while (G__141484__i < G__141484__a.length) {G__141484__a[G__141484__i] = arguments[G__141484__i + 0]; ++G__141484__i;}
  args = new cljs.core.IndexedSeq(G__141484__a,0);
} 
return G__141483__delegate.call(this,args);};
G__141483.cljs$lang$maxFixedArity = 0;
G__141483.cljs$lang$applyTo = (function (arglist__141485){
var args = cljs.core.seq(arglist__141485);
return G__141483__delegate(args);
});
G__141483.cljs$core$IFn$_invoke$arity$variadic = G__141483__delegate;
return G__141483;
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

//# sourceMappingURL=views.js.map?rel=1484099823748
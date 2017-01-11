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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ship","ship",197863473),coding_challenges.space_invaders.ship.make.call(null),new cljs.core.Keyword(null,"flowers","flowers",-1521787890),(function (){var iter__7189__auto__ = (function coding_challenges$space_invaders$views$setup_$_iter__35063(s__35064){
return (new cljs.core.LazySeq(null,(function (){
var s__35064__$1 = s__35064;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35064__$1);
if(temp__4657__auto__){
var s__35064__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35064__$2)){
var c__7187__auto__ = cljs.core.chunk_first.call(null,s__35064__$2);
var size__7188__auto__ = cljs.core.count.call(null,c__7187__auto__);
var b__35066 = cljs.core.chunk_buffer.call(null,size__7188__auto__);
if((function (){var i__35065 = (0);
while(true){
if((i__35065 < size__7188__auto__)){
var i = cljs.core._nth.call(null,c__7187__auto__,i__35065);
cljs.core.chunk_append.call(null,b__35066,coding_challenges.space_invaders.flower.make.call(null,((i * (80)) + (80)),(60)));

var G__35067 = (i__35065 + (1));
i__35065 = G__35067;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35066),coding_challenges$space_invaders$views$setup_$_iter__35063.call(null,cljs.core.chunk_rest.call(null,s__35064__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35066),null);
}
} else {
var i = cljs.core.first.call(null,s__35064__$2);
return cljs.core.cons.call(null,coding_challenges.space_invaders.flower.make.call(null,((i * (80)) + (80)),(60)),coding_challenges$space_invaders$views$setup_$_iter__35063.call(null,cljs.core.rest.call(null,s__35064__$2)));
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
coding_challenges.space_invaders.views.update_STAR_ = (function coding_challenges$space_invaders$views$update_STAR_(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.space_invaders.views.pathcache35087;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35088 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache35087 = info35088;

return info35088;
})():info__12233__auto__);
var precompiled35089 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35089.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled35089;
}
})(),coding_challenges.space_invaders.ship.update_STAR_,com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.space_invaders.views.pathcache35090;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35091 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drops","drops",-1558072608)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"drops","drops",-1558072608))),new cljs.core.Keyword(null,"flowers","flowers",-1521787890)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.space_invaders.views.pathcache35090 = info35091;

return info35091;
})():info__12233__auto__);
var precompiled35092 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35092.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled35092;
}
})(),(function (drops,flowers){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.comp.call(null,cljs.core.some_fn.call(null,cljs.core.partial.call(null,cljs.core._GT_,(0)),cljs.core.partial.call(null,cljs.core._LT_,quil.core.width.call(null))),new cljs.core.Keyword(null,"x","x",2099068185)),flowers))){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.space_invaders.views.pathcache35093;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35094 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.space_invaders.views.pathcache35093 = info35094;

return info35094;
})():info__12233__auto__);
var precompiled35095 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35095.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled35095;
}
})(),cljs.core.partial.call(null,coding_challenges.space_invaders.flower.update_STAR_,true,drops),flowers);
} else {
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.space_invaders.views.pathcache35096;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35097 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.space_invaders.views.pathcache35096 = info35097;

return info35097;
})():info__12233__auto__);
var precompiled35098 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35098.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled35098;
}
})(),cljs.core.partial.call(null,coding_challenges.space_invaders.flower.update_STAR_,false,drops),flowers);
}
}),com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.space_invaders.views.pathcache35099;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35100 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flowers","flowers",-1521787890)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"flowers","flowers",-1521787890))),new cljs.core.Keyword(null,"drops","drops",-1558072608)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.space_invaders.views.pathcache35099 = info35100;

return info35100;
})():info__12233__auto__);
var precompiled35101 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35101.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled35101;
}
})(),(function (flowers,drops){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.space_invaders.views.pathcache35102;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35103 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,607,610,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.space_invaders.views.pathcache35102 = info35103;

return info35103;
})():info__12233__auto__);
var precompiled35104 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35104.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled35104;
}
})(),coding_challenges.space_invaders.drop.update_STAR_,cljs.core.remove.call(null,(function (p1__35068_SHARP_){
return cljs.core.some.call(null,cljs.core.partial.call(null,coding_challenges.space_invaders.drop.hits_QMARK_,p1__35068_SHARP_),flowers);
}),drops));
}),sketch)));
});
coding_challenges.space_invaders.views.draw = (function coding_challenges$space_invaders$views$draw(sketch){
quil.core.background.call(null,(51));

coding_challenges.space_invaders.ship.draw.call(null,new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(sketch));

var seq__35113_35121 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"drops","drops",-1558072608).cljs$core$IFn$_invoke$arity$1(sketch));
var chunk__35114_35122 = null;
var count__35115_35123 = (0);
var i__35116_35124 = (0);
while(true){
if((i__35116_35124 < count__35115_35123)){
var d_35125 = cljs.core._nth.call(null,chunk__35114_35122,i__35116_35124);
coding_challenges.space_invaders.drop.draw.call(null,d_35125);

var G__35126 = seq__35113_35121;
var G__35127 = chunk__35114_35122;
var G__35128 = count__35115_35123;
var G__35129 = (i__35116_35124 + (1));
seq__35113_35121 = G__35126;
chunk__35114_35122 = G__35127;
count__35115_35123 = G__35128;
i__35116_35124 = G__35129;
continue;
} else {
var temp__4657__auto___35130 = cljs.core.seq.call(null,seq__35113_35121);
if(temp__4657__auto___35130){
var seq__35113_35131__$1 = temp__4657__auto___35130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35113_35131__$1)){
var c__7220__auto___35132 = cljs.core.chunk_first.call(null,seq__35113_35131__$1);
var G__35133 = cljs.core.chunk_rest.call(null,seq__35113_35131__$1);
var G__35134 = c__7220__auto___35132;
var G__35135 = cljs.core.count.call(null,c__7220__auto___35132);
var G__35136 = (0);
seq__35113_35121 = G__35133;
chunk__35114_35122 = G__35134;
count__35115_35123 = G__35135;
i__35116_35124 = G__35136;
continue;
} else {
var d_35137 = cljs.core.first.call(null,seq__35113_35131__$1);
coding_challenges.space_invaders.drop.draw.call(null,d_35137);

var G__35138 = cljs.core.next.call(null,seq__35113_35131__$1);
var G__35139 = null;
var G__35140 = (0);
var G__35141 = (0);
seq__35113_35121 = G__35138;
chunk__35114_35122 = G__35139;
count__35115_35123 = G__35140;
i__35116_35124 = G__35141;
continue;
}
} else {
}
}
break;
}

var seq__35117 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"flowers","flowers",-1521787890).cljs$core$IFn$_invoke$arity$1(sketch));
var chunk__35118 = null;
var count__35119 = (0);
var i__35120 = (0);
while(true){
if((i__35120 < count__35119)){
var flower = cljs.core._nth.call(null,chunk__35118,i__35120);
coding_challenges.space_invaders.flower.draw.call(null,flower);

var G__35142 = seq__35117;
var G__35143 = chunk__35118;
var G__35144 = count__35119;
var G__35145 = (i__35120 + (1));
seq__35117 = G__35142;
chunk__35118 = G__35143;
count__35119 = G__35144;
i__35120 = G__35145;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35117);
if(temp__4657__auto__){
var seq__35117__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35117__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__35117__$1);
var G__35146 = cljs.core.chunk_rest.call(null,seq__35117__$1);
var G__35147 = c__7220__auto__;
var G__35148 = cljs.core.count.call(null,c__7220__auto__);
var G__35149 = (0);
seq__35117 = G__35146;
chunk__35118 = G__35147;
count__35119 = G__35148;
i__35120 = G__35149;
continue;
} else {
var flower = cljs.core.first.call(null,seq__35117__$1);
coding_challenges.space_invaders.flower.draw.call(null,flower);

var G__35150 = cljs.core.next.call(null,seq__35117__$1);
var G__35151 = null;
var G__35152 = (0);
var G__35153 = (0);
seq__35117 = G__35150;
chunk__35118 = G__35151;
count__35119 = G__35152;
i__35120 = G__35153;
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
var G__35172__i = 0, G__35172__a = new Array(arguments.length -  0);
while (G__35172__i < G__35172__a.length) {G__35172__a[G__35172__i] = arguments[G__35172__i + 0]; ++G__35172__i;}
  ks = new cljs.core.IndexedSeq(G__35172__a,0);
} 
return coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate.call(this,ks);};
coding_challenges$space_invaders$views$key_pressed_$_any_of.cljs$lang$maxFixedArity = 0;
coding_challenges$space_invaders$views$key_pressed_$_any_of.cljs$lang$applyTo = (function (arglist__35173){
var ks = cljs.core.seq(arglist__35173);
return coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate(ks);
});
coding_challenges$space_invaders$views$key_pressed_$_any_of.cljs$core$IFn$_invoke$arity$variadic = coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate;
return coding_challenges$space_invaders$views$key_pressed_$_any_of;
})()
;
if(cljs.core.truth_(any_of.call(null,cljs.core.keyword.call(null," ")))){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.space_invaders.views.pathcache35163;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35164 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"ship","ship",197863473))),new cljs.core.Keyword(null,"drops","drops",-1558072608)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.space_invaders.views.pathcache35163 = info35164;

return info35164;
})():info__12233__auto__);
var precompiled35165 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35165.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled35165;
}
})(),(function (ship,drops){
return cljs.core.conj.call(null,drops,coding_challenges.space_invaders.drop.make.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship),quil.core.height.call(null)));
}),sketch);
} else {
if(cljs.core.truth_(any_of.call(null,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"a","a",-2123407586)))){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.space_invaders.views.pathcache35166;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35167 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"xdir","xdir",1180076178)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache35166 = info35167;

return info35167;
})():info__12233__auto__);
var precompiled35168 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35168.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled35168;
}
})(),(-1),sketch);
} else {
if(cljs.core.truth_(any_of.call(null,new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"d","d",1972142424)))){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.space_invaders.views.pathcache35169;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35170 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"xdir","xdir",1180076178)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache35169 = info35170;

return info35170;
})():info__12233__auto__);
var precompiled35171 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35171.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled35171;
}
})(),(1),sketch);
} else {
return sketch;

}
}
}
});
coding_challenges.space_invaders.views.key_released = (function coding_challenges$space_invaders$views$key_released(sketch){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.space_invaders.views.pathcache35177;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35178 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"xdir","xdir",1180076178)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache35177 = info35178;

return info35178;
})():info__12233__auto__);
var precompiled35179 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35179.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled35179;
}
})(),(0),sketch);
});
coding_challenges.space_invaders.views.space_invaders_sketch = (function coding_challenges$space_invaders$views$space_invaders_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.key_pressed))?(function() { 
var G__35180__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.key_pressed,args);
};
var G__35180 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35181__i = 0, G__35181__a = new Array(arguments.length -  0);
while (G__35181__i < G__35181__a.length) {G__35181__a[G__35181__i] = arguments[G__35181__i + 0]; ++G__35181__i;}
  args = new cljs.core.IndexedSeq(G__35181__a,0);
} 
return G__35180__delegate.call(this,args);};
G__35180.cljs$lang$maxFixedArity = 0;
G__35180.cljs$lang$applyTo = (function (arglist__35182){
var args = cljs.core.seq(arglist__35182);
return G__35180__delegate(args);
});
G__35180.cljs$core$IFn$_invoke$arity$variadic = G__35180__delegate;
return G__35180;
})()
:coding_challenges.space_invaders.views.key_pressed),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.update_STAR_))?(function() { 
var G__35183__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.update_STAR_,args);
};
var G__35183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35184__i = 0, G__35184__a = new Array(arguments.length -  0);
while (G__35184__i < G__35184__a.length) {G__35184__a[G__35184__i] = arguments[G__35184__i + 0]; ++G__35184__i;}
  args = new cljs.core.IndexedSeq(G__35184__a,0);
} 
return G__35183__delegate.call(this,args);};
G__35183.cljs$lang$maxFixedArity = 0;
G__35183.cljs$lang$applyTo = (function (arglist__35185){
var args = cljs.core.seq(arglist__35185);
return G__35183__delegate(args);
});
G__35183.cljs$core$IFn$_invoke$arity$variadic = G__35183__delegate;
return G__35183;
})()
:coding_challenges.space_invaders.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.space_invaders.views.w,coding_challenges.space_invaders.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.setup))?(function() { 
var G__35186__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.setup,args);
};
var G__35186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35187__i = 0, G__35187__a = new Array(arguments.length -  0);
while (G__35187__i < G__35187__a.length) {G__35187__a[G__35187__i] = arguments[G__35187__i + 0]; ++G__35187__i;}
  args = new cljs.core.IndexedSeq(G__35187__a,0);
} 
return G__35186__delegate.call(this,args);};
G__35186.cljs$lang$maxFixedArity = 0;
G__35186.cljs$lang$applyTo = (function (arglist__35188){
var args = cljs.core.seq(arglist__35188);
return G__35186__delegate(args);
});
G__35186.cljs$core$IFn$_invoke$arity$variadic = G__35186__delegate;
return G__35186;
})()
:coding_challenges.space_invaders.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"space-invaders",new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.key_released))?(function() { 
var G__35189__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.key_released,args);
};
var G__35189 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35190__i = 0, G__35190__a = new Array(arguments.length -  0);
while (G__35190__i < G__35190__a.length) {G__35190__a[G__35190__i] = arguments[G__35190__i + 0]; ++G__35190__i;}
  args = new cljs.core.IndexedSeq(G__35190__a,0);
} 
return G__35189__delegate.call(this,args);};
G__35189.cljs$lang$maxFixedArity = 0;
G__35189.cljs$lang$applyTo = (function (arglist__35191){
var args = cljs.core.seq(arglist__35191);
return G__35189__delegate(args);
});
G__35189.cljs$core$IFn$_invoke$arity$variadic = G__35189__delegate;
return G__35189;
})()
:coding_challenges.space_invaders.views.key_released),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.draw))?(function() { 
var G__35192__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.draw,args);
};
var G__35192 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35193__i = 0, G__35193__a = new Array(arguments.length -  0);
while (G__35193__i < G__35193__a.length) {G__35193__a[G__35193__i] = arguments[G__35193__i + 0]; ++G__35193__i;}
  args = new cljs.core.IndexedSeq(G__35193__a,0);
} 
return G__35192__delegate.call(this,args);};
G__35192.cljs$lang$maxFixedArity = 0;
G__35192.cljs$lang$applyTo = (function (arglist__35194){
var args = cljs.core.seq(arglist__35194);
return G__35192__delegate(args);
});
G__35192.cljs$core$IFn$_invoke$arity$variadic = G__35192__delegate;
return G__35192;
})()
:coding_challenges.space_invaders.views.draw));
});
goog.exportSymbol('coding_challenges.space_invaders.views.space_invaders_sketch', coding_challenges.space_invaders.views.space_invaders_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14841__14842__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__14841__14842__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.space_invaders.views.space_invaders_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"space-invaders"], null));
}
coding_challenges.space_invaders.views.view = (function coding_challenges$space_invaders$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Space invaders demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#space-invaders","canvas#space-invaders",-1686061181),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.space_invaders.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.space_invaders.views.h], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.space_invaders.views.space_invaders_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484163017372
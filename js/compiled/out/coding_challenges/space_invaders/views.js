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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ship","ship",197863473),coding_challenges.space_invaders.ship.make.call(null),new cljs.core.Keyword(null,"flowers","flowers",-1521787890),(function (){var iter__25826__auto__ = (function coding_challenges$space_invaders$views$setup_$_iter__40823(s__40824){
return (new cljs.core.LazySeq(null,(function (){
var s__40824__$1 = s__40824;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40824__$1);
if(temp__4657__auto__){
var s__40824__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40824__$2)){
var c__25824__auto__ = cljs.core.chunk_first.call(null,s__40824__$2);
var size__25825__auto__ = cljs.core.count.call(null,c__25824__auto__);
var b__40826 = cljs.core.chunk_buffer.call(null,size__25825__auto__);
if((function (){var i__40825 = (0);
while(true){
if((i__40825 < size__25825__auto__)){
var i = cljs.core._nth.call(null,c__25824__auto__,i__40825);
cljs.core.chunk_append.call(null,b__40826,coding_challenges.space_invaders.flower.make.call(null,((i * (80)) + (80)),(60)));

var G__40827 = (i__40825 + (1));
i__40825 = G__40827;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40826),coding_challenges$space_invaders$views$setup_$_iter__40823.call(null,cljs.core.chunk_rest.call(null,s__40824__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40826),null);
}
} else {
var i = cljs.core.first.call(null,s__40824__$2);
return cljs.core.cons.call(null,coding_challenges.space_invaders.flower.make.call(null,((i * (80)) + (80)),(60)),coding_challenges$space_invaders$views$setup_$_iter__40823.call(null,cljs.core.rest.call(null,s__40824__$2)));
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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__34163__auto__ = coding_challenges.space_invaders.views.pathcache40835;
var info__34163__auto____$1 = (((info__34163__auto__ == null))?(function (){var info40836 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",(14),(1),(942),(945),cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flowers","flowers",-1521787890)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"flowers","flowers",-1521787890))),new cljs.core.Keyword(null,"drops","drops",-1558072608)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.space_invaders.views.pathcache40835 = info40836;

return info40836;
})():info__34163__auto__);
var precompiled40837 = info__34163__auto____$1.precompiled;
var dynamic_QMARK___34164__auto__ = info__34163__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___34164__auto__)){
return precompiled40837.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled40837;
}
})(),(function (flowers,drops){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__34163__auto__ = coding_challenges.space_invaders.views.pathcache40838;
var info__34163__auto____$1 = (((info__34163__auto__ == null))?(function (){var info40839 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",(6),(1),(607),(610),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.space_invaders.views.pathcache40838 = info40839;

return info40839;
})():info__34163__auto__);
var precompiled40840 = info__34163__auto____$1.precompiled;
var dynamic_QMARK___34164__auto__ = info__34163__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___34164__auto__)){
return precompiled40840.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled40840;
}
})(),coding_challenges.space_invaders.drop.update_STAR_,cljs.core.remove.call(null,(function (p1__40828_SHARP_){
return cljs.core.some.call(null,cljs.core.partial.call(null,coding_challenges.space_invaders.drop.hits_QMARK_,p1__40828_SHARP_),flowers);
}),drops));
}),sketch);
});
coding_challenges.space_invaders.views.horizontal_edge_QMARK_ = (function coding_challenges$space_invaders$views$horizontal_edge_QMARK_(p__40841){
var map__40844 = p__40841;
var map__40844__$1 = ((((!((map__40844 == null)))?((((map__40844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40844):map__40844);
var x = cljs.core.get.call(null,map__40844__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return cljs.core.some_fn.call(null,cljs.core.partial.call(null,cljs.core._GT_,(0)),cljs.core.partial.call(null,cljs.core._LT_,quil.core.width.call(null))).call(null,x);
});
coding_challenges.space_invaders.views.update_flowers = (function coding_challenges$space_invaders$views$update_flowers(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__34163__auto__ = coding_challenges.space_invaders.views.pathcache40855;
var info__34163__auto____$1 = (((info__34163__auto__ == null))?(function (){var info40856 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",(14),(1),(942),(945),cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drops","drops",-1558072608)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"drops","drops",-1558072608))),new cljs.core.Keyword(null,"flowers","flowers",-1521787890)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.space_invaders.views.pathcache40855 = info40856;

return info40856;
})():info__34163__auto__);
var precompiled40857 = info__34163__auto____$1.precompiled;
var dynamic_QMARK___34164__auto__ = info__34163__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___34164__auto__)){
return precompiled40857.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled40857;
}
})(),(function (drops,flowers){
if(cljs.core.truth_(cljs.core.some.call(null,coding_challenges.space_invaders.views.horizontal_edge_QMARK_,flowers))){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__34163__auto__ = coding_challenges.space_invaders.views.pathcache40858;
var info__34163__auto____$1 = (((info__34163__auto__ == null))?(function (){var info40859 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",(6),(1),(607),(610),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.space_invaders.views.pathcache40858 = info40859;

return info40859;
})():info__34163__auto__);
var precompiled40860 = info__34163__auto____$1.precompiled;
var dynamic_QMARK___34164__auto__ = info__34163__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___34164__auto__)){
return precompiled40860.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled40860;
}
})(),cljs.core.partial.call(null,coding_challenges.space_invaders.flower.update_STAR_,true,drops),flowers);
} else {
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__34163__auto__ = coding_challenges.space_invaders.views.pathcache40861;
var info__34163__auto____$1 = (((info__34163__auto__ == null))?(function (){var info40862 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",(6),(1),(607),(610),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
coding_challenges.space_invaders.views.pathcache40861 = info40862;

return info40862;
})():info__34163__auto__);
var precompiled40863 = info__34163__auto____$1.precompiled;
var dynamic_QMARK___34164__auto__ = info__34163__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___34164__auto__)){
return precompiled40863.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL], null));
} else {
return precompiled40863;
}
})(),cljs.core.partial.call(null,coding_challenges.space_invaders.flower.update_STAR_,false,drops),flowers);
}
}),sketch);
});
coding_challenges.space_invaders.views.update_ship = (function coding_challenges$space_invaders$views$update_ship(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__34163__auto__ = coding_challenges.space_invaders.views.pathcache40867;
var info__34163__auto____$1 = (((info__34163__auto__ == null))?(function (){var info40868 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache40867 = info40868;

return info40868;
})():info__34163__auto__);
var precompiled40869 = info__34163__auto____$1.precompiled;
var dynamic_QMARK___34164__auto__ = info__34163__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___34164__auto__)){
return precompiled40869.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled40869;
}
})(),coding_challenges.space_invaders.ship.update_STAR_,sketch);
});
coding_challenges.space_invaders.views.update_STAR_ = (function coding_challenges$space_invaders$views$update_STAR_(sketch){
return coding_challenges.space_invaders.views.update_ship.call(null,coding_challenges.space_invaders.views.update_flowers.call(null,coding_challenges.space_invaders.views.update_drops.call(null,sketch)));
});
coding_challenges.space_invaders.views.draw = (function coding_challenges$space_invaders$views$draw(p__40870){
var map__40881 = p__40870;
var map__40881__$1 = ((((!((map__40881 == null)))?((((map__40881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40881):map__40881);
var sketch = map__40881__$1;
var ship = cljs.core.get.call(null,map__40881__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var drops = cljs.core.get.call(null,map__40881__$1,new cljs.core.Keyword(null,"drops","drops",-1558072608));
var flowers = cljs.core.get.call(null,map__40881__$1,new cljs.core.Keyword(null,"flowers","flowers",-1521787890));
quil.core.background.call(null,(51));

coding_challenges.space_invaders.ship.draw.call(null,ship);

var seq__40883_40891 = cljs.core.seq.call(null,drops);
var chunk__40884_40892 = null;
var count__40885_40893 = (0);
var i__40886_40894 = (0);
while(true){
if((i__40886_40894 < count__40885_40893)){
var d_40895 = cljs.core._nth.call(null,chunk__40884_40892,i__40886_40894);
coding_challenges.space_invaders.drop.draw.call(null,d_40895);

var G__40896 = seq__40883_40891;
var G__40897 = chunk__40884_40892;
var G__40898 = count__40885_40893;
var G__40899 = (i__40886_40894 + (1));
seq__40883_40891 = G__40896;
chunk__40884_40892 = G__40897;
count__40885_40893 = G__40898;
i__40886_40894 = G__40899;
continue;
} else {
var temp__4657__auto___40900 = cljs.core.seq.call(null,seq__40883_40891);
if(temp__4657__auto___40900){
var seq__40883_40901__$1 = temp__4657__auto___40900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40883_40901__$1)){
var c__25857__auto___40902 = cljs.core.chunk_first.call(null,seq__40883_40901__$1);
var G__40903 = cljs.core.chunk_rest.call(null,seq__40883_40901__$1);
var G__40904 = c__25857__auto___40902;
var G__40905 = cljs.core.count.call(null,c__25857__auto___40902);
var G__40906 = (0);
seq__40883_40891 = G__40903;
chunk__40884_40892 = G__40904;
count__40885_40893 = G__40905;
i__40886_40894 = G__40906;
continue;
} else {
var d_40907 = cljs.core.first.call(null,seq__40883_40901__$1);
coding_challenges.space_invaders.drop.draw.call(null,d_40907);

var G__40908 = cljs.core.next.call(null,seq__40883_40901__$1);
var G__40909 = null;
var G__40910 = (0);
var G__40911 = (0);
seq__40883_40891 = G__40908;
chunk__40884_40892 = G__40909;
count__40885_40893 = G__40910;
i__40886_40894 = G__40911;
continue;
}
} else {
}
}
break;
}

var seq__40887 = cljs.core.seq.call(null,flowers);
var chunk__40888 = null;
var count__40889 = (0);
var i__40890 = (0);
while(true){
if((i__40890 < count__40889)){
var flower = cljs.core._nth.call(null,chunk__40888,i__40890);
coding_challenges.space_invaders.flower.draw.call(null,flower);

var G__40912 = seq__40887;
var G__40913 = chunk__40888;
var G__40914 = count__40889;
var G__40915 = (i__40890 + (1));
seq__40887 = G__40912;
chunk__40888 = G__40913;
count__40889 = G__40914;
i__40890 = G__40915;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40887);
if(temp__4657__auto__){
var seq__40887__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40887__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__40887__$1);
var G__40916 = cljs.core.chunk_rest.call(null,seq__40887__$1);
var G__40917 = c__25857__auto__;
var G__40918 = cljs.core.count.call(null,c__25857__auto__);
var G__40919 = (0);
seq__40887 = G__40916;
chunk__40888 = G__40917;
count__40889 = G__40918;
i__40890 = G__40919;
continue;
} else {
var flower = cljs.core.first.call(null,seq__40887__$1);
coding_challenges.space_invaders.flower.draw.call(null,flower);

var G__40920 = cljs.core.next.call(null,seq__40887__$1);
var G__40921 = null;
var G__40922 = (0);
var G__40923 = (0);
seq__40887 = G__40920;
chunk__40888 = G__40921;
count__40889 = G__40922;
i__40890 = G__40923;
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
var G__40950__i = 0, G__40950__a = new Array(arguments.length -  0);
while (G__40950__i < G__40950__a.length) {G__40950__a[G__40950__i] = arguments[G__40950__i + 0]; ++G__40950__i;}
  ks = new cljs.core.IndexedSeq(G__40950__a,0);
} 
return coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate.call(this,ks);};
coding_challenges$space_invaders$views$key_pressed_$_any_of.cljs$lang$maxFixedArity = 0;
coding_challenges$space_invaders$views$key_pressed_$_any_of.cljs$lang$applyTo = (function (arglist__40951){
var ks = cljs.core.seq(arglist__40951);
return coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate(ks);
});
coding_challenges$space_invaders$views$key_pressed_$_any_of.cljs$core$IFn$_invoke$arity$variadic = coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate;
return coding_challenges$space_invaders$views$key_pressed_$_any_of;
})()
;
var G__40937 = sketch;
var G__40937__$1 = (cljs.core.truth_(any_of.call(null,cljs.core.keyword.call(null," ")))?com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__34163__auto__ = coding_challenges.space_invaders.views.pathcache40938;
var info__34163__auto____$1 = (((info__34163__auto__ == null))?(function (){var info40939 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",(14),(1),(942),(945),cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"ship","ship",197863473))),new cljs.core.Keyword(null,"drops","drops",-1558072608)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.space_invaders.views.pathcache40938 = info40939;

return info40939;
})():info__34163__auto__);
var precompiled40940 = info__34163__auto____$1.precompiled;
var dynamic_QMARK___34164__auto__ = info__34163__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___34164__auto__)){
return precompiled40940.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled40940;
}
})(),((function (G__40937){
return (function (p__40941,drops){
var map__40942 = p__40941;
var map__40942__$1 = ((((!((map__40942 == null)))?((((map__40942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40942):map__40942);
var ship = map__40942__$1;
var x = cljs.core.get.call(null,map__40942__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return cljs.core.conj.call(null,drops,coding_challenges.space_invaders.drop.make.call(null,x,quil.core.height.call(null)));
});})(G__40937))
,G__40937):G__40937);
var G__40937__$2 = (cljs.core.truth_(any_of.call(null,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"a","a",-2123407586)))?com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__34163__auto__ = coding_challenges.space_invaders.views.pathcache40944;
var info__34163__auto____$1 = (((info__34163__auto__ == null))?(function (){var info40945 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"xdir","xdir",1180076178)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache40944 = info40945;

return info40945;
})():info__34163__auto__);
var precompiled40946 = info__34163__auto____$1.precompiled;
var dynamic_QMARK___34164__auto__ = info__34163__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___34164__auto__)){
return precompiled40946.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled40946;
}
})(),(-1),G__40937__$1):G__40937__$1);
if(cljs.core.truth_(any_of.call(null,new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"d","d",1972142424)))){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__34163__auto__ = coding_challenges.space_invaders.views.pathcache40947;
var info__34163__auto____$1 = (((info__34163__auto__ == null))?(function (){var info40948 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"xdir","xdir",1180076178)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache40947 = info40948;

return info40948;
})():info__34163__auto__);
var precompiled40949 = info__34163__auto____$1.precompiled;
var dynamic_QMARK___34164__auto__ = info__34163__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___34164__auto__)){
return precompiled40949.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled40949;
}
})(),(1),G__40937__$2);
} else {
return G__40937__$2;
}
});
coding_challenges.space_invaders.views.key_released = (function coding_challenges$space_invaders$views$key_released(sketch){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__34163__auto__ = coding_challenges.space_invaders.views.pathcache40955;
var info__34163__auto____$1 = (((info__34163__auto__ == null))?(function (){var info40956 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"xdir","xdir",1180076178)], null)], null),"coding-challenges.space-invaders.views",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.space_invaders.views.pathcache40955 = info40956;

return info40956;
})():info__34163__auto__);
var precompiled40957 = info__34163__auto____$1.precompiled;
var dynamic_QMARK___34164__auto__ = info__34163__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___34164__auto__)){
return precompiled40957.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled40957;
}
})(),(0),sketch);
});
coding_challenges.space_invaders.views.space_invaders_sketch = (function coding_challenges$space_invaders$views$space_invaders_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.key_pressed))?(function() { 
var G__40958__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.key_pressed,args);
};
var G__40958 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40959__i = 0, G__40959__a = new Array(arguments.length -  0);
while (G__40959__i < G__40959__a.length) {G__40959__a[G__40959__i] = arguments[G__40959__i + 0]; ++G__40959__i;}
  args = new cljs.core.IndexedSeq(G__40959__a,0);
} 
return G__40958__delegate.call(this,args);};
G__40958.cljs$lang$maxFixedArity = 0;
G__40958.cljs$lang$applyTo = (function (arglist__40960){
var args = cljs.core.seq(arglist__40960);
return G__40958__delegate(args);
});
G__40958.cljs$core$IFn$_invoke$arity$variadic = G__40958__delegate;
return G__40958;
})()
:coding_challenges.space_invaders.views.key_pressed),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.update_STAR_))?(function() { 
var G__40961__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.update_STAR_,args);
};
var G__40961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40962__i = 0, G__40962__a = new Array(arguments.length -  0);
while (G__40962__i < G__40962__a.length) {G__40962__a[G__40962__i] = arguments[G__40962__i + 0]; ++G__40962__i;}
  args = new cljs.core.IndexedSeq(G__40962__a,0);
} 
return G__40961__delegate.call(this,args);};
G__40961.cljs$lang$maxFixedArity = 0;
G__40961.cljs$lang$applyTo = (function (arglist__40963){
var args = cljs.core.seq(arglist__40963);
return G__40961__delegate(args);
});
G__40961.cljs$core$IFn$_invoke$arity$variadic = G__40961__delegate;
return G__40961;
})()
:coding_challenges.space_invaders.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.space_invaders.views.w,coding_challenges.space_invaders.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.setup))?(function() { 
var G__40964__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.setup,args);
};
var G__40964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40965__i = 0, G__40965__a = new Array(arguments.length -  0);
while (G__40965__i < G__40965__a.length) {G__40965__a[G__40965__i] = arguments[G__40965__i + 0]; ++G__40965__i;}
  args = new cljs.core.IndexedSeq(G__40965__a,0);
} 
return G__40964__delegate.call(this,args);};
G__40964.cljs$lang$maxFixedArity = 0;
G__40964.cljs$lang$applyTo = (function (arglist__40966){
var args = cljs.core.seq(arglist__40966);
return G__40964__delegate(args);
});
G__40964.cljs$core$IFn$_invoke$arity$variadic = G__40964__delegate;
return G__40964;
})()
:coding_challenges.space_invaders.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"space-invaders",new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.key_released))?(function() { 
var G__40967__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.key_released,args);
};
var G__40967 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40968__i = 0, G__40968__a = new Array(arguments.length -  0);
while (G__40968__i < G__40968__a.length) {G__40968__a[G__40968__i] = arguments[G__40968__i + 0]; ++G__40968__i;}
  args = new cljs.core.IndexedSeq(G__40968__a,0);
} 
return G__40967__delegate.call(this,args);};
G__40967.cljs$lang$maxFixedArity = 0;
G__40967.cljs$lang$applyTo = (function (arglist__40969){
var args = cljs.core.seq(arglist__40969);
return G__40967__delegate(args);
});
G__40967.cljs$core$IFn$_invoke$arity$variadic = G__40967__delegate;
return G__40967;
})()
:coding_challenges.space_invaders.views.key_released),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.draw))?(function() { 
var G__40970__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.draw,args);
};
var G__40970 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40971__i = 0, G__40971__a = new Array(arguments.length -  0);
while (G__40971__i < G__40971__a.length) {G__40971__a[G__40971__i] = arguments[G__40971__i + 0]; ++G__40971__i;}
  args = new cljs.core.IndexedSeq(G__40971__a,0);
} 
return G__40970__delegate.call(this,args);};
G__40970.cljs$lang$maxFixedArity = 0;
G__40970.cljs$lang$applyTo = (function (arglist__40972){
var args = cljs.core.seq(arglist__40972);
return G__40970__delegate(args);
});
G__40970.cljs$core$IFn$_invoke$arity$variadic = G__40970__delegate;
return G__40970;
})()
:coding_challenges.space_invaders.views.draw));
});
goog.exportSymbol('coding_challenges.space_invaders.views.space_invaders_sketch', coding_challenges.space_invaders.views.space_invaders_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__34782__34783__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__34782__34783__auto__);
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
return (function (p1__40973_SHARP_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space-invaders","space-invaders",-1238341852),new cljs.core.Keyword(null,"code","code",1586293142)], null),p1__40973_SHARP_], null)], null));

var seq__40979 = cljs.core.seq.call(null,document.querySelectorAll("code"));
var chunk__40980 = null;
var count__40981 = (0);
var i__40982 = (0);
while(true){
if((i__40982 < count__40981)){
var x = cljs.core._nth.call(null,chunk__40980,i__40982);
hljs.highlightBlock(x);

var G__40984 = seq__40979;
var G__40985 = chunk__40980;
var G__40986 = count__40981;
var G__40987 = (i__40982 + (1));
seq__40979 = G__40984;
chunk__40980 = G__40985;
count__40981 = G__40986;
i__40982 = G__40987;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40979);
if(temp__4657__auto__){
var seq__40979__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40979__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__40979__$1);
var G__40988 = cljs.core.chunk_rest.call(null,seq__40979__$1);
var G__40989 = c__25857__auto__;
var G__40990 = cljs.core.count.call(null,c__25857__auto__);
var G__40991 = (0);
seq__40979 = G__40988;
chunk__40980 = G__40989;
count__40981 = G__40990;
i__40982 = G__40991;
continue;
} else {
var x = cljs.core.first.call(null,seq__40979__$1);
hljs.highlightBlock(x);

var G__40992 = cljs.core.next.call(null,seq__40979__$1);
var G__40993 = null;
var G__40994 = (0);
var G__40995 = (0);
seq__40979 = G__40992;
chunk__40980 = G__40993;
count__40981 = G__40994;
i__40982 = G__40995;
continue;
}
} else {
return null;
}
}
break;
}
});})(code__$1,code))
], null),(function (){var G__40983 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__40983) {
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

//# sourceMappingURL=views.js.map?rel=1484466378008
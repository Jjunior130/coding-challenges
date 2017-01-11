// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.snake_game.snake');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('com.rpl.specter');
coding_challenges.snake_game.snake.make = (function coding_challenges$snake_game$snake$make(var_args){
var args35328 = [];
var len__7484__auto___35331 = arguments.length;
var i__7485__auto___35332 = (0);
while(true){
if((i__7485__auto___35332 < len__7484__auto___35331)){
args35328.push((arguments[i__7485__auto___35332]));

var G__35333 = (i__7485__auto___35332 + (1));
i__7485__auto___35332 = G__35333;
continue;
} else {
}
break;
}

var G__35330 = args35328.length;
switch (G__35330) {
case 0:
return coding_challenges.snake_game.snake.make.cljs$core$IFn$_invoke$arity$0();

break;
case 4:
return coding_challenges.snake_game.snake.make.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35328.length)].join('')));

}
});

coding_challenges.snake_game.snake.make.cljs$core$IFn$_invoke$arity$0 = (function (){
return coding_challenges.snake_game.snake.make.call(null,(0),(0),(1),(0));
});

coding_challenges.snake_game.snake.make.cljs$core$IFn$_invoke$arity$4 = (function (x,y,xv,yv){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Snake","Snake",1307032796,null),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"xspeed","xspeed",1490661174),xv,new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521),yv,new cljs.core.Keyword(null,"tail","tail",-1146023564),cljs.core.PersistentVector.EMPTY], null);
});

coding_challenges.snake_game.snake.make.cljs$lang$maxFixedArity = 4;

coding_challenges.snake_game.snake.eat_QMARK_ = (function coding_challenges$snake_game$snake$eat_QMARK_(food,snake){
return (quil.core.dist.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(snake),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(snake),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(food),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(food)) < (1));
});
coding_challenges.snake_game.snake.death_QMARK_ = (function coding_challenges$snake_game$snake$death_QMARK_(tail,x,y){
return cljs.core.set.call(null,tail).call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
});
coding_challenges.snake_game.snake.update_tail = (function coding_challenges$snake_game$snake$update_tail(scl,food,snake){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.snake_game.snake.pathcache35338;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35339 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"x","x",2099068185))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"y","y",-1757859776))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xspeed","xspeed",1490661174)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"xspeed","xspeed",1490661174))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521))),new cljs.core.Keyword(null,"tail","tail",-1146023564)], null)], null),"coding-challenges.snake-game.snake",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.snake_game.snake.pathcache35338 = info35339;

return info35339;
})():info__12233__auto__);
var precompiled35340 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35340.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one,com.rpl.specter.collect_one,com.rpl.specter.collect_one,com.rpl.specter.collect_one], null));
} else {
return precompiled35340;
}
})(),(function (sx,sy,sxv,syv,tail){
if(cljs.core.truth_(coding_challenges.snake_game.snake.death_QMARK_.call(null,tail,sx,sy))){
return cljs.core.empty.call(null,tail);
} else {
if(cljs.core.truth_(coding_challenges.snake_game.snake.eat_QMARK_.call(null,food,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((sxv * scl) + sx),new cljs.core.Keyword(null,"y","y",-1757859776),((syv * scl) + sy)], null)))){
return cljs.core.conj.call(null,tail,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),sx,new cljs.core.Keyword(null,"y","y",-1757859776),sy], null));
} else {
if(cljs.core.seq.call(null,tail)){
return cljs.core.subvec.call(null,cljs.core.conj.call(null,tail,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),sx,new cljs.core.Keyword(null,"y","y",-1757859776),sy], null)),(1));
} else {
return tail;

}
}
}
}),snake);
});
coding_challenges.snake_game.snake.move_forward = (function coding_challenges$snake_game$snake$move_forward(scl,snake){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.snake_game.snake.pathcache35353;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35354 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521))),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null),"coding-challenges.snake-game.snake",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.snake_game.snake.pathcache35353 = info35354;

return info35354;
})():info__12233__auto__);
var precompiled35355 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35355.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled35355;
}
})(),cljs.core.comp.call(null,(function (p1__35344_SHARP_){
return quil.core.constrain.call(null,p1__35344_SHARP_,(0),(quil.core.height.call(null) - scl));
}),(function (p1__35345_SHARP_,p2__35346_SHARP_){
return ((p1__35345_SHARP_ * scl) + p2__35346_SHARP_);
})),com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.snake_game.snake.pathcache35356;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35357 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xspeed","xspeed",1490661174)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"xspeed","xspeed",1490661174))),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),"coding-challenges.snake-game.snake",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.snake_game.snake.pathcache35356 = info35357;

return info35357;
})():info__12233__auto__);
var precompiled35358 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35358.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled35358;
}
})(),cljs.core.comp.call(null,(function (p1__35341_SHARP_){
return quil.core.constrain.call(null,p1__35341_SHARP_,(0),(quil.core.width.call(null) - scl));
}),(function (p1__35342_SHARP_,p2__35343_SHARP_){
return ((p1__35342_SHARP_ * scl) + p2__35343_SHARP_);
})),snake));
});
coding_challenges.snake_game.snake.update_STAR_ = (function coding_challenges$snake_game$snake$update_STAR_(scl,food,snake){
return coding_challenges.snake_game.snake.move_forward.call(null,scl,coding_challenges.snake_game.snake.update_tail.call(null,scl,food,snake));
});
coding_challenges.snake_game.snake.draw = (function coding_challenges$snake_game$snake$draw(scl,snake){
quil.core.fill.call(null,(255));

quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(snake),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(snake),scl,scl);

var seq__35367 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"tail","tail",-1146023564).cljs$core$IFn$_invoke$arity$1(snake));
var chunk__35368 = null;
var count__35369 = (0);
var i__35370 = (0);
while(true){
if((i__35370 < count__35369)){
var map__35371 = cljs.core._nth.call(null,chunk__35368,i__35370);
var map__35371__$1 = ((((!((map__35371 == null)))?((((map__35371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35371):map__35371);
var y = cljs.core.get.call(null,map__35371__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__35371__$1,new cljs.core.Keyword(null,"x","x",2099068185));
quil.core.fill.call(null,(155));

quil.core.rect.call(null,x,y,scl,scl);

var G__35375 = seq__35367;
var G__35376 = chunk__35368;
var G__35377 = count__35369;
var G__35378 = (i__35370 + (1));
seq__35367 = G__35375;
chunk__35368 = G__35376;
count__35369 = G__35377;
i__35370 = G__35378;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35367);
if(temp__4657__auto__){
var seq__35367__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35367__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__35367__$1);
var G__35379 = cljs.core.chunk_rest.call(null,seq__35367__$1);
var G__35380 = c__7220__auto__;
var G__35381 = cljs.core.count.call(null,c__7220__auto__);
var G__35382 = (0);
seq__35367 = G__35379;
chunk__35368 = G__35380;
count__35369 = G__35381;
i__35370 = G__35382;
continue;
} else {
var map__35373 = cljs.core.first.call(null,seq__35367__$1);
var map__35373__$1 = ((((!((map__35373 == null)))?((((map__35373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35373):map__35373);
var y = cljs.core.get.call(null,map__35373__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__35373__$1,new cljs.core.Keyword(null,"x","x",2099068185));
quil.core.fill.call(null,(155));

quil.core.rect.call(null,x,y,scl,scl);

var G__35383 = cljs.core.next.call(null,seq__35367__$1);
var G__35384 = null;
var G__35385 = (0);
var G__35386 = (0);
seq__35367 = G__35383;
chunk__35368 = G__35384;
count__35369 = G__35385;
i__35370 = G__35386;
continue;
}
} else {
return null;
}
}
break;
}
});
coding_challenges.snake_game.snake.dir = (function coding_challenges$snake_game$snake$dir(x,y,snake){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.snake_game.snake.pathcache35393;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35394 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521)], null),"coding-challenges.snake-game.snake",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.snake_game.snake.pathcache35393 = info35394;

return info35394;
})():info__12233__auto__);
var precompiled35395 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35395.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled35395;
}
})(),y,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.snake_game.snake.pathcache35396;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35397 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xspeed","xspeed",1490661174)], null),"coding-challenges.snake-game.snake",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.snake_game.snake.pathcache35396 = info35397;

return info35397;
})():info__12233__auto__);
var precompiled35398 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35398.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled35398;
}
})(),x,snake));
});

//# sourceMappingURL=snake.js.map?rel=1484163017789
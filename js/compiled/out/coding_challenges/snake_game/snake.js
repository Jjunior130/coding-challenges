// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.snake_game.snake');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('com.rpl.specter');
coding_challenges.snake_game.snake.make = (function coding_challenges$snake_game$snake$make(var_args){
var args35386 = [];
var len__7484__auto___35389 = arguments.length;
var i__7485__auto___35390 = (0);
while(true){
if((i__7485__auto___35390 < len__7484__auto___35389)){
args35386.push((arguments[i__7485__auto___35390]));

var G__35391 = (i__7485__auto___35390 + (1));
i__7485__auto___35390 = G__35391;
continue;
} else {
}
break;
}

var G__35388 = args35386.length;
switch (G__35388) {
case 0:
return coding_challenges.snake_game.snake.make.cljs$core$IFn$_invoke$arity$0();

break;
case 4:
return coding_challenges.snake_game.snake.make.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35386.length)].join('')));

}
});

coding_challenges.snake_game.snake.make.cljs$core$IFn$_invoke$arity$0 = (function (){
return coding_challenges.snake_game.snake.make.call(null,(0),(0),(1),(0));
});

coding_challenges.snake_game.snake.make.cljs$core$IFn$_invoke$arity$4 = (function (x,y,xv,yv){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Snake","Snake",1307032796,null),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"xspeed","xspeed",1490661174),xv,new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521),yv,new cljs.core.Keyword(null,"tail","tail",-1146023564),cljs.core.PersistentVector.EMPTY], null);
});

coding_challenges.snake_game.snake.make.cljs$lang$maxFixedArity = 4;

coding_challenges.snake_game.snake.eat_QMARK_ = (function coding_challenges$snake_game$snake$eat_QMARK_(p__35393,p__35394){
var map__35399 = p__35393;
var map__35399__$1 = ((((!((map__35399 == null)))?((((map__35399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35399):map__35399);
var food = map__35399__$1;
var fx = cljs.core.get.call(null,map__35399__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var fy = cljs.core.get.call(null,map__35399__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__35400 = p__35394;
var map__35400__$1 = ((((!((map__35400 == null)))?((((map__35400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35400):map__35400);
var snake = map__35400__$1;
var sx = cljs.core.get.call(null,map__35400__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var sy = cljs.core.get.call(null,map__35400__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return (quil.core.dist.call(null,sx,sy,fx,fy) < (1));
});
coding_challenges.snake_game.snake.death_QMARK_ = (function coding_challenges$snake_game$snake$death_QMARK_(tail,x,y){
return cljs.core.set.call(null,tail).call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
});
coding_challenges.snake_game.snake.update_tail = (function coding_challenges$snake_game$snake$update_tail(scl,food,snake){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.snake_game.snake.pathcache35406;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35407 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"x","x",2099068185))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"y","y",-1757859776))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xspeed","xspeed",1490661174)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"xspeed","xspeed",1490661174))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521))),new cljs.core.Keyword(null,"tail","tail",-1146023564)], null)], null),"coding-challenges.snake-game.snake",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.snake_game.snake.pathcache35406 = info35407;

return info35407;
})():info__12233__auto__);
var precompiled35408 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35408.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one,com.rpl.specter.collect_one,com.rpl.specter.collect_one,com.rpl.specter.collect_one], null));
} else {
return precompiled35408;
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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.snake_game.snake.pathcache35421;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35422 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521))),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null),"coding-challenges.snake-game.snake",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.snake_game.snake.pathcache35421 = info35422;

return info35422;
})():info__12233__auto__);
var precompiled35423 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35423.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled35423;
}
})(),cljs.core.comp.call(null,(function (p1__35412_SHARP_){
return quil.core.constrain.call(null,p1__35412_SHARP_,(0),(quil.core.height.call(null) - scl));
}),(function (p1__35413_SHARP_,p2__35414_SHARP_){
return ((p1__35413_SHARP_ * scl) + p2__35414_SHARP_);
})),com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.snake_game.snake.pathcache35424;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35425 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xspeed","xspeed",1490661174)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"xspeed","xspeed",1490661174))),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),"coding-challenges.snake-game.snake",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.snake_game.snake.pathcache35424 = info35425;

return info35425;
})():info__12233__auto__);
var precompiled35426 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35426.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled35426;
}
})(),cljs.core.comp.call(null,(function (p1__35409_SHARP_){
return quil.core.constrain.call(null,p1__35409_SHARP_,(0),(quil.core.width.call(null) - scl));
}),(function (p1__35410_SHARP_,p2__35411_SHARP_){
return ((p1__35410_SHARP_ * scl) + p2__35411_SHARP_);
})),snake));
});
coding_challenges.snake_game.snake.update_STAR_ = (function coding_challenges$snake_game$snake$update_STAR_(scl,food,snake){
return coding_challenges.snake_game.snake.move_forward.call(null,scl,coding_challenges.snake_game.snake.update_tail.call(null,scl,food,snake));
});
coding_challenges.snake_game.snake.draw = (function coding_challenges$snake_game$snake$draw(scl,p__35427){
var map__35438 = p__35427;
var map__35438__$1 = ((((!((map__35438 == null)))?((((map__35438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35438):map__35438);
var snake = map__35438__$1;
var sx = cljs.core.get.call(null,map__35438__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var sy = cljs.core.get.call(null,map__35438__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
quil.core.fill.call(null,(255));

quil.core.rect.call(null,sx,sy,scl,scl);

var seq__35440 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"tail","tail",-1146023564).cljs$core$IFn$_invoke$arity$1(snake));
var chunk__35441 = null;
var count__35442 = (0);
var i__35443 = (0);
while(true){
if((i__35443 < count__35442)){
var map__35444 = cljs.core._nth.call(null,chunk__35441,i__35443);
var map__35444__$1 = ((((!((map__35444 == null)))?((((map__35444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35444):map__35444);
var y = cljs.core.get.call(null,map__35444__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__35444__$1,new cljs.core.Keyword(null,"x","x",2099068185));
quil.core.fill.call(null,(155));

quil.core.rect.call(null,x,y,scl,scl);

var G__35448 = seq__35440;
var G__35449 = chunk__35441;
var G__35450 = count__35442;
var G__35451 = (i__35443 + (1));
seq__35440 = G__35448;
chunk__35441 = G__35449;
count__35442 = G__35450;
i__35443 = G__35451;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35440);
if(temp__4657__auto__){
var seq__35440__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35440__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__35440__$1);
var G__35452 = cljs.core.chunk_rest.call(null,seq__35440__$1);
var G__35453 = c__7220__auto__;
var G__35454 = cljs.core.count.call(null,c__7220__auto__);
var G__35455 = (0);
seq__35440 = G__35452;
chunk__35441 = G__35453;
count__35442 = G__35454;
i__35443 = G__35455;
continue;
} else {
var map__35446 = cljs.core.first.call(null,seq__35440__$1);
var map__35446__$1 = ((((!((map__35446 == null)))?((((map__35446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35446):map__35446);
var y = cljs.core.get.call(null,map__35446__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__35446__$1,new cljs.core.Keyword(null,"x","x",2099068185));
quil.core.fill.call(null,(155));

quil.core.rect.call(null,x,y,scl,scl);

var G__35456 = cljs.core.next.call(null,seq__35440__$1);
var G__35457 = null;
var G__35458 = (0);
var G__35459 = (0);
seq__35440 = G__35456;
chunk__35441 = G__35457;
count__35442 = G__35458;
i__35443 = G__35459;
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
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.snake_game.snake.pathcache35466;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35467 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521)], null),"coding-challenges.snake-game.snake",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.snake_game.snake.pathcache35466 = info35467;

return info35467;
})():info__12233__auto__);
var precompiled35468 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35468.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled35468;
}
})(),y,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.snake_game.snake.pathcache35469;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info35470 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xspeed","xspeed",1490661174)], null),"coding-challenges.snake-game.snake",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.snake_game.snake.pathcache35469 = info35470;

return info35470;
})():info__12233__auto__);
var precompiled35471 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled35471.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled35471;
}
})(),x,snake));
});

//# sourceMappingURL=snake.js.map?rel=1484366732055
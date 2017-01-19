// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.snake_game.snake');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('com.rpl.specter');
coding_challenges.snake_game.snake.make = (function coding_challenges$snake_game$snake$make(var_args){
var args45828 = [];
var len__26121__auto___45831 = arguments.length;
var i__26122__auto___45832 = (0);
while(true){
if((i__26122__auto___45832 < len__26121__auto___45831)){
args45828.push((arguments[i__26122__auto___45832]));

var G__45833 = (i__26122__auto___45832 + (1));
i__26122__auto___45832 = G__45833;
continue;
} else {
}
break;
}

var G__45830 = args45828.length;
switch (G__45830) {
case 0:
return coding_challenges.snake_game.snake.make.cljs$core$IFn$_invoke$arity$0();

break;
case 4:
return coding_challenges.snake_game.snake.make.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45828.length)].join('')));

}
});

coding_challenges.snake_game.snake.make.cljs$core$IFn$_invoke$arity$0 = (function (){
return coding_challenges.snake_game.snake.make.call(null,(0),(0),(1),(0));
});

coding_challenges.snake_game.snake.make.cljs$core$IFn$_invoke$arity$4 = (function (x,y,xv,yv){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Snake","Snake",1307032796,null),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"xspeed","xspeed",1490661174),xv,new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521),yv,new cljs.core.Keyword(null,"tail","tail",-1146023564),cljs.core.PersistentVector.EMPTY], null);
});

coding_challenges.snake_game.snake.make.cljs$lang$maxFixedArity = 4;

coding_challenges.snake_game.snake.eat_QMARK_ = (function coding_challenges$snake_game$snake$eat_QMARK_(p__45835,p__45836){
var map__45841 = p__45835;
var map__45841__$1 = ((((!((map__45841 == null)))?((((map__45841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45841):map__45841);
var food = map__45841__$1;
var fx = cljs.core.get.call(null,map__45841__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var fy = cljs.core.get.call(null,map__45841__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__45842 = p__45836;
var map__45842__$1 = ((((!((map__45842 == null)))?((((map__45842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45842):map__45842);
var snake = map__45842__$1;
var sx = cljs.core.get.call(null,map__45842__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var sy = cljs.core.get.call(null,map__45842__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return (quil.core.dist.call(null,sx,sy,fx,fy) < (1));
});
coding_challenges.snake_game.snake.death_QMARK_ = (function coding_challenges$snake_game$snake$death_QMARK_(tail,x,y){
return cljs.core.set.call(null,tail).call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
});
coding_challenges.snake_game.snake.update_tail = (function coding_challenges$snake_game$snake$update_tail(scl,food,snake){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.snake_game.snake.pathcache45848;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info45849 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"x","x",2099068185))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"y","y",-1757859776))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xspeed","xspeed",1490661174)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"xspeed","xspeed",1490661174))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521))),new cljs.core.Keyword(null,"tail","tail",-1146023564)], null)], null),"coding-challenges.snake-game.snake",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.snake_game.snake.pathcache45848 = info45849;

return info45849;
})():info__28666__auto__);
var precompiled45850 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled45850.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one,com.rpl.specter.collect_one,com.rpl.specter.collect_one,com.rpl.specter.collect_one], null));
} else {
return precompiled45850;
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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.snake_game.snake.pathcache45863;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info45864 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521))),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null),"coding-challenges.snake-game.snake",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.snake_game.snake.pathcache45863 = info45864;

return info45864;
})():info__28666__auto__);
var precompiled45865 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled45865.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled45865;
}
})(),cljs.core.comp.call(null,(function (p1__45854_SHARP_){
return quil.core.constrain.call(null,p1__45854_SHARP_,(0),(quil.core.height.call(null) - scl));
}),(function (p1__45855_SHARP_,p2__45856_SHARP_){
return ((p1__45855_SHARP_ * scl) + p2__45856_SHARP_);
})),com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.snake_game.snake.pathcache45866;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info45867 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xspeed","xspeed",1490661174)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"xspeed","xspeed",1490661174))),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),"coding-challenges.snake-game.snake",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.snake_game.snake.pathcache45866 = info45867;

return info45867;
})():info__28666__auto__);
var precompiled45868 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled45868.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled45868;
}
})(),cljs.core.comp.call(null,(function (p1__45851_SHARP_){
return quil.core.constrain.call(null,p1__45851_SHARP_,(0),(quil.core.width.call(null) - scl));
}),(function (p1__45852_SHARP_,p2__45853_SHARP_){
return ((p1__45852_SHARP_ * scl) + p2__45853_SHARP_);
})),snake));
});
coding_challenges.snake_game.snake.update_STAR_ = (function coding_challenges$snake_game$snake$update_STAR_(scl,food,snake){
return coding_challenges.snake_game.snake.move_forward.call(null,scl,coding_challenges.snake_game.snake.update_tail.call(null,scl,food,snake));
});
coding_challenges.snake_game.snake.draw = (function coding_challenges$snake_game$snake$draw(scl,p__45869){
var map__45880 = p__45869;
var map__45880__$1 = ((((!((map__45880 == null)))?((((map__45880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45880):map__45880);
var snake = map__45880__$1;
var sx = cljs.core.get.call(null,map__45880__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var sy = cljs.core.get.call(null,map__45880__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
quil.core.fill.call(null,(255));

quil.core.rect.call(null,sx,sy,scl,scl);

var seq__45882 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"tail","tail",-1146023564).cljs$core$IFn$_invoke$arity$1(snake));
var chunk__45883 = null;
var count__45884 = (0);
var i__45885 = (0);
while(true){
if((i__45885 < count__45884)){
var map__45886 = cljs.core._nth.call(null,chunk__45883,i__45885);
var map__45886__$1 = ((((!((map__45886 == null)))?((((map__45886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45886):map__45886);
var y = cljs.core.get.call(null,map__45886__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__45886__$1,new cljs.core.Keyword(null,"x","x",2099068185));
quil.core.fill.call(null,(155));

quil.core.rect.call(null,x,y,scl,scl);

var G__45890 = seq__45882;
var G__45891 = chunk__45883;
var G__45892 = count__45884;
var G__45893 = (i__45885 + (1));
seq__45882 = G__45890;
chunk__45883 = G__45891;
count__45884 = G__45892;
i__45885 = G__45893;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45882);
if(temp__4657__auto__){
var seq__45882__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45882__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__45882__$1);
var G__45894 = cljs.core.chunk_rest.call(null,seq__45882__$1);
var G__45895 = c__25857__auto__;
var G__45896 = cljs.core.count.call(null,c__25857__auto__);
var G__45897 = (0);
seq__45882 = G__45894;
chunk__45883 = G__45895;
count__45884 = G__45896;
i__45885 = G__45897;
continue;
} else {
var map__45888 = cljs.core.first.call(null,seq__45882__$1);
var map__45888__$1 = ((((!((map__45888 == null)))?((((map__45888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45888):map__45888);
var y = cljs.core.get.call(null,map__45888__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__45888__$1,new cljs.core.Keyword(null,"x","x",2099068185));
quil.core.fill.call(null,(155));

quil.core.rect.call(null,x,y,scl,scl);

var G__45898 = cljs.core.next.call(null,seq__45882__$1);
var G__45899 = null;
var G__45900 = (0);
var G__45901 = (0);
seq__45882 = G__45898;
chunk__45883 = G__45899;
count__45884 = G__45900;
i__45885 = G__45901;
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
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.snake_game.snake.pathcache45908;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info45909 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521)], null),"coding-challenges.snake-game.snake",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.snake_game.snake.pathcache45908 = info45909;

return info45909;
})():info__28666__auto__);
var precompiled45910 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled45910.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled45910;
}
})(),y,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.snake_game.snake.pathcache45911;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info45912 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xspeed","xspeed",1490661174)], null),"coding-challenges.snake-game.snake",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.snake_game.snake.pathcache45911 = info45912;

return info45912;
})():info__28666__auto__);
var precompiled45913 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled45913.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled45913;
}
})(),x,snake));
});

//# sourceMappingURL=snake.js.map?rel=1484782599238
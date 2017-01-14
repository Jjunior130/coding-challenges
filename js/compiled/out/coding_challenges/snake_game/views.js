// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.snake_game.views');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('reagent.core');
goog.require('re_com.core');
goog.require('quil.core');
goog.require('coding_challenges.snake_game.snake');
goog.require('quil.middleware');
coding_challenges.snake_game.views.w = (600);
coding_challenges.snake_game.views.h = (600);
coding_challenges.snake_game.views.pick_location = (function coding_challenges$snake_game$views$pick_location(scl){
var cols = quil.core.floor.call(null,(quil.core.width.call(null) / scl));
var rows = quil.core.floor.call(null,(quil.core.height.call(null) / scl));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Food","Food",-427513230,null),new cljs.core.Keyword(null,"x","x",2099068185),(scl * cljs.core.rand_int.call(null,cols)),new cljs.core.Keyword(null,"y","y",-1757859776),(scl * cljs.core.rand_int.call(null,rows))], null);
});
coding_challenges.snake_game.views.setup = (function coding_challenges$snake_game$views$setup(){
quil.core.frame_rate.call(null,(8));

return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.snake_game.views.pathcache62292;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info62293 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"scale","scale",-230427353))),new cljs.core.Keyword(null,"food","food",1842183121)], null)], null),"coding-challenges.snake-game.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.snake_game.views.pathcache62292 = info62293;

return info62293;
})():info__30860__auto__);
var precompiled62294 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled62294.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled62294;
}
})(),coding_challenges.snake_game.views.pick_location,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"snake","snake",-244377242),coding_challenges.snake_game.snake.make.call(null),new cljs.core.Keyword(null,"scale","scale",-230427353),(20)], null));
});
coding_challenges.snake_game.views.update_snake = (function coding_challenges$snake_game$views$update_snake(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.snake_game.views.pathcache62298;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info62299 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"scale","scale",-230427353))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"food","food",1842183121)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"food","food",1842183121))),new cljs.core.Keyword(null,"snake","snake",-244377242)], null)], null),"coding-challenges.snake-game.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.snake_game.views.pathcache62298 = info62299;

return info62299;
})():info__30860__auto__);
var precompiled62300 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled62300.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one,com.rpl.specter.collect_one], null));
} else {
return precompiled62300;
}
})(),coding_challenges.snake_game.snake.update_STAR_,sketch);
});
coding_challenges.snake_game.views.update_food = (function coding_challenges$snake_game$views$update_food(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.snake_game.views.pathcache62304;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info62305 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"scale","scale",-230427353))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake","snake",-244377242)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"snake","snake",-244377242))),new cljs.core.Keyword(null,"food","food",1842183121)], null)], null),"coding-challenges.snake-game.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.snake_game.views.pathcache62304 = info62305;

return info62305;
})():info__30860__auto__);
var precompiled62306 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled62306.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one,com.rpl.specter.collect_one], null));
} else {
return precompiled62306;
}
})(),(function (scl,snake,food){
if(cljs.core.truth_(coding_challenges.snake_game.snake.eat_QMARK_.call(null,food,snake))){
return coding_challenges.snake_game.views.pick_location.call(null,scl);
} else {
return food;
}
}),sketch);
});
coding_challenges.snake_game.views.update_STAR_ = (function coding_challenges$snake_game$views$update_STAR_(sketch){
return coding_challenges.snake_game.views.update_food.call(null,coding_challenges.snake_game.views.update_snake.call(null,sketch));
});
coding_challenges.snake_game.views.draw = (function coding_challenges$snake_game$views$draw(p__62307){
var map__62310 = p__62307;
var map__62310__$1 = ((((!((map__62310 == null)))?((((map__62310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62310):map__62310);
var sketch = map__62310__$1;
var food = cljs.core.get.call(null,map__62310__$1,new cljs.core.Keyword(null,"food","food",1842183121));
var snake = cljs.core.get.call(null,map__62310__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var scl = cljs.core.get.call(null,map__62310__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
quil.core.background.call(null,(51));

coding_challenges.snake_game.snake.draw.call(null,scl,snake);

quil.core.fill.call(null,(255),(0),(100));

return quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(food),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(food),scl,scl);
});
/**
 * Change direction only if next position doesn't result in death.
 */
coding_challenges.snake_game.views.turn_snake_QMARK_ = (function coding_challenges$snake_game$views$turn_snake_QMARK_(nxd,nyd,sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.snake_game.views.pathcache62317;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info62318 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"scale","scale",-230427353))),new cljs.core.Keyword(null,"snake","snake",-244377242)], null)], null),"coding-challenges.snake-game.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.snake_game.views.pathcache62317 = info62318;

return info62318;
})():info__30860__auto__);
var precompiled62319 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled62319.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled62319;
}
})(),(function (scl,snake){
var map__62320 = coding_challenges.snake_game.snake.dir.call(null,nxd,nyd,snake);
var map__62320__$1 = ((((!((map__62320 == null)))?((((map__62320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62320):map__62320);
var nsd = map__62320__$1;
var x = cljs.core.get.call(null,map__62320__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__62320__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var xv = cljs.core.get.call(null,map__62320__$1,new cljs.core.Keyword(null,"xspeed","xspeed",1490661174));
var yv = cljs.core.get.call(null,map__62320__$1,new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521));
var nsxp = (x + (scl * xv));
var nsyp = (y + (scl * yv));
var death_QMARK_ = (function (){var or__25046__auto__ = coding_challenges.snake_game.snake.death_QMARK_.call(null,new cljs.core.Keyword(null,"tail","tail",-1146023564).cljs$core$IFn$_invoke$arity$1(nsd),nsxp,nsyp);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return (!((((0) <= nsxp)) && ((nsxp <= (quil.core.width.call(null) - scl))))) || (!((((0) <= nsyp)) && ((nsyp <= (quil.core.height.call(null) - scl)))));
}
})();
if(cljs.core.not.call(null,death_QMARK_)){
return nsd;
} else {
return snake;
}
}),sketch);
});
coding_challenges.snake_game.views.key_pressed = (function coding_challenges$snake_game$views$key_pressed(sketch,event){
var any_of = (function() { 
var coding_challenges$snake_game$views$key_pressed_$_any_of__delegate = function (ks){
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event)),ks);
};
var coding_challenges$snake_game$views$key_pressed_$_any_of = function (var_args){
var ks = null;
if (arguments.length > 0) {
var G__62322__i = 0, G__62322__a = new Array(arguments.length -  0);
while (G__62322__i < G__62322__a.length) {G__62322__a[G__62322__i] = arguments[G__62322__i + 0]; ++G__62322__i;}
  ks = new cljs.core.IndexedSeq(G__62322__a,0);
} 
return coding_challenges$snake_game$views$key_pressed_$_any_of__delegate.call(this,ks);};
coding_challenges$snake_game$views$key_pressed_$_any_of.cljs$lang$maxFixedArity = 0;
coding_challenges$snake_game$views$key_pressed_$_any_of.cljs$lang$applyTo = (function (arglist__62323){
var ks = cljs.core.seq(arglist__62323);
return coding_challenges$snake_game$views$key_pressed_$_any_of__delegate(ks);
});
coding_challenges$snake_game$views$key_pressed_$_any_of.cljs$core$IFn$_invoke$arity$variadic = coding_challenges$snake_game$views$key_pressed_$_any_of__delegate;
return coding_challenges$snake_game$views$key_pressed_$_any_of;
})()
;
if(cljs.core.truth_(any_of.call(null,new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"w","w",354169001)))){
return coding_challenges.snake_game.views.turn_snake_QMARK_.call(null,(0),(-1),sketch);
} else {
if(cljs.core.truth_(any_of.call(null,new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"s","s",1705939918)))){
return coding_challenges.snake_game.views.turn_snake_QMARK_.call(null,(0),(1),sketch);
} else {
if(cljs.core.truth_(any_of.call(null,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"a","a",-2123407586)))){
return coding_challenges.snake_game.views.turn_snake_QMARK_.call(null,(-1),(0),sketch);
} else {
if(cljs.core.truth_(any_of.call(null,new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"d","d",1972142424)))){
return coding_challenges.snake_game.views.turn_snake_QMARK_.call(null,(1),(0),sketch);
} else {
return sketch;

}
}
}
}
});
coding_challenges.snake_game.views.increase_snake_tail = (function coding_challenges$snake_game$views$increase_snake_tail(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.snake_game.views.pathcache62327;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info62328 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"scale","scale",-230427353))),new cljs.core.Keyword(null,"snake","snake",-244377242),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"x","x",2099068185))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"y","y",-1757859776))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xspeed","xspeed",1490661174)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"xspeed","xspeed",1490661174))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521))),new cljs.core.Keyword(null,"tail","tail",-1146023564)], null)], null),"coding-challenges.snake-game.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.snake_game.views.pathcache62327 = info62328;

return info62328;
})():info__30860__auto__);
var precompiled62329 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled62329.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one,com.rpl.specter.collect_one,com.rpl.specter.collect_one,com.rpl.specter.collect_one,com.rpl.specter.collect_one], null));
} else {
return precompiled62329;
}
})(),(function (scl,sx,sy,sxv,syv,tail){
return cljs.core.conj.call(null,tail,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(sx - (scl * sxv)),new cljs.core.Keyword(null,"y","y",-1757859776),(sy - (scl * syv))], null));
}),sketch);
});
coding_challenges.snake_game.views.mouse_clicked = (function coding_challenges$snake_game$views$mouse_clicked(sketch,event){
return coding_challenges.snake_game.views.increase_snake_tail.call(null,sketch);
});
coding_challenges.snake_game.views.snake_game_sketch = (function coding_challenges$snake_game$views$snake_game_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,coding_challenges.snake_game.views.mouse_clicked))?(function() { 
var G__62330__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.snake_game.views.mouse_clicked,args);
};
var G__62330 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62331__i = 0, G__62331__a = new Array(arguments.length -  0);
while (G__62331__i < G__62331__a.length) {G__62331__a[G__62331__i] = arguments[G__62331__i + 0]; ++G__62331__i;}
  args = new cljs.core.IndexedSeq(G__62331__a,0);
} 
return G__62330__delegate.call(this,args);};
G__62330.cljs$lang$maxFixedArity = 0;
G__62330.cljs$lang$applyTo = (function (arglist__62332){
var args = cljs.core.seq(arglist__62332);
return G__62330__delegate(args);
});
G__62330.cljs$core$IFn$_invoke$arity$variadic = G__62330__delegate;
return G__62330;
})()
:coding_challenges.snake_game.views.mouse_clicked),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.snake_game.views.update_STAR_))?(function() { 
var G__62333__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.snake_game.views.update_STAR_,args);
};
var G__62333 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62334__i = 0, G__62334__a = new Array(arguments.length -  0);
while (G__62334__i < G__62334__a.length) {G__62334__a[G__62334__i] = arguments[G__62334__i + 0]; ++G__62334__i;}
  args = new cljs.core.IndexedSeq(G__62334__a,0);
} 
return G__62333__delegate.call(this,args);};
G__62333.cljs$lang$maxFixedArity = 0;
G__62333.cljs$lang$applyTo = (function (arglist__62335){
var args = cljs.core.seq(arglist__62335);
return G__62333__delegate(args);
});
G__62333.cljs$core$IFn$_invoke$arity$variadic = G__62333__delegate;
return G__62333;
})()
:coding_challenges.snake_game.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.snake_game.views.w,coding_challenges.snake_game.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.snake_game.views.setup))?(function() { 
var G__62336__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.snake_game.views.setup,args);
};
var G__62336 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62337__i = 0, G__62337__a = new Array(arguments.length -  0);
while (G__62337__i < G__62337__a.length) {G__62337__a[G__62337__i] = arguments[G__62337__i + 0]; ++G__62337__i;}
  args = new cljs.core.IndexedSeq(G__62337__a,0);
} 
return G__62336__delegate.call(this,args);};
G__62336.cljs$lang$maxFixedArity = 0;
G__62336.cljs$lang$applyTo = (function (arglist__62338){
var args = cljs.core.seq(arglist__62338);
return G__62336__delegate(args);
});
G__62336.cljs$core$IFn$_invoke$arity$variadic = G__62336__delegate;
return G__62336;
})()
:coding_challenges.snake_game.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"snake-game",new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,coding_challenges.snake_game.views.key_pressed))?(function() { 
var G__62339__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.snake_game.views.key_pressed,args);
};
var G__62339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62340__i = 0, G__62340__a = new Array(arguments.length -  0);
while (G__62340__i < G__62340__a.length) {G__62340__a[G__62340__i] = arguments[G__62340__i + 0]; ++G__62340__i;}
  args = new cljs.core.IndexedSeq(G__62340__a,0);
} 
return G__62339__delegate.call(this,args);};
G__62339.cljs$lang$maxFixedArity = 0;
G__62339.cljs$lang$applyTo = (function (arglist__62341){
var args = cljs.core.seq(arglist__62341);
return G__62339__delegate(args);
});
G__62339.cljs$core$IFn$_invoke$arity$variadic = G__62339__delegate;
return G__62339;
})()
:coding_challenges.snake_game.views.key_pressed),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.snake_game.views.draw))?(function() { 
var G__62342__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.snake_game.views.draw,args);
};
var G__62342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62343__i = 0, G__62343__a = new Array(arguments.length -  0);
while (G__62343__i < G__62343__a.length) {G__62343__a[G__62343__i] = arguments[G__62343__i + 0]; ++G__62343__i;}
  args = new cljs.core.IndexedSeq(G__62343__a,0);
} 
return G__62342__delegate.call(this,args);};
G__62342.cljs$lang$maxFixedArity = 0;
G__62342.cljs$lang$applyTo = (function (arglist__62344){
var args = cljs.core.seq(arglist__62344);
return G__62342__delegate(args);
});
G__62342.cljs$core$IFn$_invoke$arity$variadic = G__62342__delegate;
return G__62342;
})()
:coding_challenges.snake_game.views.draw));
});
goog.exportSymbol('coding_challenges.snake_game.views.snake_game_sketch', coding_challenges.snake_game.views.snake_game_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__42451__42452__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__42451__42452__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.snake_game.views.snake_game_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"snake-game"], null));
}
coding_challenges.snake_game.views.view = (function coding_challenges$snake_game$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Snake game demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#snake-game","canvas#snake-game",-1229013166),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.snake_game.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.snake_game.views.h], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.snake_game.views.snake_game_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484333403579
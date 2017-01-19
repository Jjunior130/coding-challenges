// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.snake_game.views');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('reagent.core');
goog.require('re_com.core');
goog.require('quil.core');
goog.require('re_frame.core');
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

return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.snake_game.views.pathcache45919;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info45920 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"scale","scale",-230427353))),new cljs.core.Keyword(null,"food","food",1842183121)], null)], null),"coding-challenges.snake-game.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.snake_game.views.pathcache45919 = info45920;

return info45920;
})():info__28666__auto__);
var precompiled45921 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled45921.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled45921;
}
})(),coding_challenges.snake_game.views.pick_location,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"snake","snake",-244377242),coding_challenges.snake_game.snake.make.call(null),new cljs.core.Keyword(null,"scale","scale",-230427353),(20)], null));
});
coding_challenges.snake_game.views.update_snake = (function coding_challenges$snake_game$views$update_snake(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.snake_game.views.pathcache45925;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info45926 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"scale","scale",-230427353))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"food","food",1842183121)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"food","food",1842183121))),new cljs.core.Keyword(null,"snake","snake",-244377242)], null)], null),"coding-challenges.snake-game.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.snake_game.views.pathcache45925 = info45926;

return info45926;
})():info__28666__auto__);
var precompiled45927 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled45927.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one,com.rpl.specter.collect_one], null));
} else {
return precompiled45927;
}
})(),coding_challenges.snake_game.snake.update_STAR_,sketch);
});
coding_challenges.snake_game.views.update_food = (function coding_challenges$snake_game$views$update_food(sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.snake_game.views.pathcache45931;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info45932 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"scale","scale",-230427353))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake","snake",-244377242)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"snake","snake",-244377242))),new cljs.core.Keyword(null,"food","food",1842183121)], null)], null),"coding-challenges.snake-game.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.snake_game.views.pathcache45931 = info45932;

return info45932;
})():info__28666__auto__);
var precompiled45933 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled45933.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one,com.rpl.specter.collect_one], null));
} else {
return precompiled45933;
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
coding_challenges.snake_game.views.draw = (function coding_challenges$snake_game$views$draw(p__45934){
var map__45937 = p__45934;
var map__45937__$1 = ((((!((map__45937 == null)))?((((map__45937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45937):map__45937);
var sketch = map__45937__$1;
var food = cljs.core.get.call(null,map__45937__$1,new cljs.core.Keyword(null,"food","food",1842183121));
var snake = cljs.core.get.call(null,map__45937__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var scl = cljs.core.get.call(null,map__45937__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
quil.core.background.call(null,(51));

coding_challenges.snake_game.snake.draw.call(null,scl,snake);

quil.core.fill.call(null,(255),(0),(100));

return quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(food),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(food),scl,scl);
});
/**
 * Change direction only if next position doesn't result in death.
 */
coding_challenges.snake_game.views.turn_snake_QMARK_ = (function coding_challenges$snake_game$views$turn_snake_QMARK_(nxd,nyd,sketch){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.snake_game.views.pathcache45944;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info45945 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"scale","scale",-230427353))),new cljs.core.Keyword(null,"snake","snake",-244377242)], null)], null),"coding-challenges.snake-game.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.snake_game.views.pathcache45944 = info45945;

return info45945;
})():info__28666__auto__);
var precompiled45946 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled45946.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one], null));
} else {
return precompiled45946;
}
})(),(function (scl,snake){
var map__45947 = coding_challenges.snake_game.snake.dir.call(null,nxd,nyd,snake);
var map__45947__$1 = ((((!((map__45947 == null)))?((((map__45947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45947):map__45947);
var nsd = map__45947__$1;
var x = cljs.core.get.call(null,map__45947__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__45947__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var xv = cljs.core.get.call(null,map__45947__$1,new cljs.core.Keyword(null,"xspeed","xspeed",1490661174));
var yv = cljs.core.get.call(null,map__45947__$1,new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521));
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
var G__45949__i = 0, G__45949__a = new Array(arguments.length -  0);
while (G__45949__i < G__45949__a.length) {G__45949__a[G__45949__i] = arguments[G__45949__i + 0]; ++G__45949__i;}
  ks = new cljs.core.IndexedSeq(G__45949__a,0);
} 
return coding_challenges$snake_game$views$key_pressed_$_any_of__delegate.call(this,ks);};
coding_challenges$snake_game$views$key_pressed_$_any_of.cljs$lang$maxFixedArity = 0;
coding_challenges$snake_game$views$key_pressed_$_any_of.cljs$lang$applyTo = (function (arglist__45950){
var ks = cljs.core.seq(arglist__45950);
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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__28666__auto__ = coding_challenges.snake_game.views.pathcache45954;
var info__28666__auto____$1 = (((info__28666__auto__ == null))?(function (){var info45955 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"scale","scale",-230427353))),new cljs.core.Keyword(null,"snake","snake",-244377242),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"x","x",2099068185))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"y","y",-1757859776))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xspeed","xspeed",1490661174)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"xspeed","xspeed",1490661174))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",14,1,942,945,cljs.core.List.EMPTY,"Adds the result of running select-one with the given path on the\n          current value to the collected vals.",(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)])),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521)], null),cljs.core.list(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521))),new cljs.core.Keyword(null,"tail","tail",-1146023564)], null)], null),"coding-challenges.snake-game.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null)], null));
coding_challenges.snake_game.views.pathcache45954 = info45955;

return info45955;
})():info__28666__auto__);
var precompiled45956 = info__28666__auto____$1.precompiled;
var dynamic_QMARK___28667__auto__ = info__28666__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28667__auto__)){
return precompiled45956.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one,com.rpl.specter.collect_one,com.rpl.specter.collect_one,com.rpl.specter.collect_one,com.rpl.specter.collect_one], null));
} else {
return precompiled45956;
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
var G__45957__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.snake_game.views.mouse_clicked,args);
};
var G__45957 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45958__i = 0, G__45958__a = new Array(arguments.length -  0);
while (G__45958__i < G__45958__a.length) {G__45958__a[G__45958__i] = arguments[G__45958__i + 0]; ++G__45958__i;}
  args = new cljs.core.IndexedSeq(G__45958__a,0);
} 
return G__45957__delegate.call(this,args);};
G__45957.cljs$lang$maxFixedArity = 0;
G__45957.cljs$lang$applyTo = (function (arglist__45959){
var args = cljs.core.seq(arglist__45959);
return G__45957__delegate(args);
});
G__45957.cljs$core$IFn$_invoke$arity$variadic = G__45957__delegate;
return G__45957;
})()
:coding_challenges.snake_game.views.mouse_clicked),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.snake_game.views.update_STAR_))?(function() { 
var G__45960__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.snake_game.views.update_STAR_,args);
};
var G__45960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45961__i = 0, G__45961__a = new Array(arguments.length -  0);
while (G__45961__i < G__45961__a.length) {G__45961__a[G__45961__i] = arguments[G__45961__i + 0]; ++G__45961__i;}
  args = new cljs.core.IndexedSeq(G__45961__a,0);
} 
return G__45960__delegate.call(this,args);};
G__45960.cljs$lang$maxFixedArity = 0;
G__45960.cljs$lang$applyTo = (function (arglist__45962){
var args = cljs.core.seq(arglist__45962);
return G__45960__delegate(args);
});
G__45960.cljs$core$IFn$_invoke$arity$variadic = G__45960__delegate;
return G__45960;
})()
:coding_challenges.snake_game.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.snake_game.views.w,coding_challenges.snake_game.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.snake_game.views.setup))?(function() { 
var G__45963__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.snake_game.views.setup,args);
};
var G__45963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45964__i = 0, G__45964__a = new Array(arguments.length -  0);
while (G__45964__i < G__45964__a.length) {G__45964__a[G__45964__i] = arguments[G__45964__i + 0]; ++G__45964__i;}
  args = new cljs.core.IndexedSeq(G__45964__a,0);
} 
return G__45963__delegate.call(this,args);};
G__45963.cljs$lang$maxFixedArity = 0;
G__45963.cljs$lang$applyTo = (function (arglist__45965){
var args = cljs.core.seq(arglist__45965);
return G__45963__delegate(args);
});
G__45963.cljs$core$IFn$_invoke$arity$variadic = G__45963__delegate;
return G__45963;
})()
:coding_challenges.snake_game.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"snake-game",new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,coding_challenges.snake_game.views.key_pressed))?(function() { 
var G__45966__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.snake_game.views.key_pressed,args);
};
var G__45966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45967__i = 0, G__45967__a = new Array(arguments.length -  0);
while (G__45967__i < G__45967__a.length) {G__45967__a[G__45967__i] = arguments[G__45967__i + 0]; ++G__45967__i;}
  args = new cljs.core.IndexedSeq(G__45967__a,0);
} 
return G__45966__delegate.call(this,args);};
G__45966.cljs$lang$maxFixedArity = 0;
G__45966.cljs$lang$applyTo = (function (arglist__45968){
var args = cljs.core.seq(arglist__45968);
return G__45966__delegate(args);
});
G__45966.cljs$core$IFn$_invoke$arity$variadic = G__45966__delegate;
return G__45966;
})()
:coding_challenges.snake_game.views.key_pressed),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.snake_game.views.draw))?(function() { 
var G__45969__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.snake_game.views.draw,args);
};
var G__45969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45970__i = 0, G__45970__a = new Array(arguments.length -  0);
while (G__45970__i < G__45970__a.length) {G__45970__a[G__45970__i] = arguments[G__45970__i + 0]; ++G__45970__i;}
  args = new cljs.core.IndexedSeq(G__45970__a,0);
} 
return G__45969__delegate.call(this,args);};
G__45969.cljs$lang$maxFixedArity = 0;
G__45969.cljs$lang$applyTo = (function (arglist__45971){
var args = cljs.core.seq(arglist__45971);
return G__45969__delegate(args);
});
G__45969.cljs$core$IFn$_invoke$arity$variadic = G__45969__delegate;
return G__45969;
})()
:coding_challenges.snake_game.views.draw));
});
goog.exportSymbol('coding_challenges.snake_game.views.snake_game_sketch', coding_challenges.snake_game.views.snake_game_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__29727__29728__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__29727__29728__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.snake_game.views.snake_game_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"snake-game"], null));
}
coding_challenges.snake_game.views.view = (function coding_challenges$snake_game$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){var code = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-one","select-one",1322686564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake-game","snake-game",-1781360032),new cljs.core.Keyword(null,"code","code",1586293142)], null)], null));
return ((function (code){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var code__$1 = (function (){var or__25046__auto__ = cljs.core.deref.call(null,code);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return new cljs.core.Keyword(null,"sketch","sketch",465948709);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Snake game demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#snake-game","canvas#snake-game",-1229013166),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.snake_game.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.snake_game.views.h], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sketch","sketch",465948709),new cljs.core.Keyword(null,"label","label",1718410804),"Sketch"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"snake","snake",-244377242),new cljs.core.Keyword(null,"label","label",1718410804),"Snake"], null)], null),new cljs.core.Keyword(null,"model","model",331153215),code__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (code__$1,code){
return (function (p1__45972_SHARP_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake-game","snake-game",-1781360032),new cljs.core.Keyword(null,"code","code",1586293142)], null),p1__45972_SHARP_], null)], null));

var seq__45978 = cljs.core.seq.call(null,document.querySelectorAll("code"));
var chunk__45979 = null;
var count__45980 = (0);
var i__45981 = (0);
while(true){
if((i__45981 < count__45980)){
var x = cljs.core._nth.call(null,chunk__45979,i__45981);
hljs.highlightBlock(x);

var G__45983 = seq__45978;
var G__45984 = chunk__45979;
var G__45985 = count__45980;
var G__45986 = (i__45981 + (1));
seq__45978 = G__45983;
chunk__45979 = G__45984;
count__45980 = G__45985;
i__45981 = G__45986;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45978);
if(temp__4657__auto__){
var seq__45978__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45978__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__45978__$1);
var G__45987 = cljs.core.chunk_rest.call(null,seq__45978__$1);
var G__45988 = c__25857__auto__;
var G__45989 = cljs.core.count.call(null,c__25857__auto__);
var G__45990 = (0);
seq__45978 = G__45987;
chunk__45979 = G__45988;
count__45980 = G__45989;
i__45981 = G__45990;
continue;
} else {
var x = cljs.core.first.call(null,seq__45978__$1);
hljs.highlightBlock(x);

var G__45991 = cljs.core.next.call(null,seq__45978__$1);
var G__45992 = null;
var G__45993 = (0);
var G__45994 = (0);
seq__45978 = G__45991;
chunk__45979 = G__45992;
count__45980 = G__45993;
i__45981 = G__45994;
continue;
}
} else {
return null;
}
}
break;
}
});})(code__$1,code))
], null),(function (){var G__45982 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__45982) {
case "sketch":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(def w 600)\n(def h 600)\n\n(defn pick-location [scl]\n (let [cols (q/floor (/ (q/width) scl))\n       rows (q/floor (/ (q/height) scl))]\n  {:type 'Food\n   :x (* scl (rand-int cols))\n   :y (* scl (rand-int rows))}))\n\n(defn setup []\n (q/frame-rate 8)\n (->> {:snake (snake/make)\n       :scale 20}\n      (transform [(collect-one :scale)\n                  :food]\n                 pick-location)))\n\n(defn update-snake [sketch]\n (->> sketch\n      (transform [(collect-one :scale)\n                  (collect-one :food)\n                  :snake]\n                 snake/update*)))\n\n(defn update-food [sketch]\n (->> sketch\n      (transform [(collect-one :scale)\n                  (collect-one :snake)\n                  :food]\n                 (fn [scl snake food]\n                  (if (eat? food snake)\n                   (pick-location scl)\n                   food)))))\n\n(defn update* [sketch]\n (->> sketch\n      update-snake\n      update-food))\n\n(defn draw [{food :food\n             snake :snake\n             scl :scale\n             :as sketch}]\n (q/background 51)\n (snake/draw scl snake)\n\n (q/fill 255 0 100)\n (q/rect (-> food :x)\n         (-> food :y)\n         scl\n         scl))\n\n(defn turn-snake?\n \"Change direction only if next position doesn't result in death.\"\n [nxd nyd sketch]\n (->> sketch\n      (transform [(collect-one :scale)\n                  :snake]\n                 (fn [scl snake]\n                  (let [{x :x\n                         y :y\n                         xv :xspeed\n                         yv :yspeed\n                         :as nsd} (snake/dir nxd nyd snake)\n                        nsxp (+ x (* scl xv))\n                        nsyp (+ y (* scl yv))\n                        death?\n                        (or (snake/death?\n                             (:tail nsd)\n                             nsxp\n                             nsyp)\n                            (not (<= 0 nsxp (- (q/width) scl)))\n                            (not (<= 0 nsyp (- (q/height) scl))))]\n                   (if-not death?\n                    nsd\n                    snake))))))\n\n(defn key-pressed [sketch event]\n (letfn [(any-of\n          [& ks]\n          (some (partial = (:key event))\n                ks))]\n  (cond\n   (any-of :up :w)\n   (->> sketch\n        (turn-snake? 0 -1))\n   (any-of :down :s)\n   (->> sketch\n        (turn-snake? 0 1))\n   (any-of :left :a)\n   (->> sketch\n        (turn-snake? -1 0))\n   (any-of :right :d)\n   (->> sketch\n        (turn-snake? 1 0))\n   :else sketch)))\n\n(defn increase-snake-tail [sketch]\n (->> sketch\n      (transform [(collect-one :scale)\n                  :snake\n                  (collect-one :x)\n                  (collect-one :y)\n                  (collect-one :xspeed)\n                  (collect-one :yspeed)\n                  :tail]\n                 (fn [scl sx sy sxv syv tail]\n                  (conj tail {:x (- sx (* scl sxv))\n                              :y (- sy (* scl syv))})))))\n\n(defn mouse-clicked [sketch event]\n (->> sketch\n      increase-snake-tail))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/AaGK-fj-BAM\n\nvar s;\nvar scl = 20;\n\nvar food;\n\nfunction setup() {\n  createCanvas(600, 600);\n  s = new Snake();\n  frameRate(10);\n  pickLocation();\n\n}\n\nfunction pickLocation() {\n  var cols = floor(width/scl);\n  var rows = floor(height/scl);\n  food = createVector(floor(random(cols)), floor(random(rows)));\n  food.mult(scl);\n}\n\nfunction mousePressed() {\n  s.total++;\n}\n\nfunction draw() {\n  background(51);\n\n  if (s.eat(food)) {\n    pickLocation();\n  }\n  s.death();\n  s.update();\n  s.show();\n\n\n  fill(255, 0, 100);\n  rect(food.x, food.y, scl, scl);\n}\n\n\n\n\n\nfunction keyPressed() {\n  if (keyCode === UP_ARROW) {\n    s.dir(0, -1);\n  } else if (keyCode === DOWN_ARROW) {\n    s.dir(0, 1);\n  } else if (keyCode === RIGHT_ARROW) {\n    s.dir(1, 0);\n  } else if (keyCode === LEFT_ARROW) {\n    s.dir(-1, 0);\n  }\n}"], null)], null)], null)], null);

break;
case "snake":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(defn make\n ([]\n  (make 0 0 1 0))\n ([x y xv yv]\n  {:type 'Snake\n   :x x\n   :y y\n   :xspeed xv\n   :yspeed yv\n   :tail []}))\n\n(defn eat? [{fx :x\n             fy :y\n             :as food}\n            {sx :x\n             sy :y\n             :as snake}]\n (< (q/dist sx sy\n            fx fy)\n    1))\n\n(defn death? [tail x y]\n ((set tail) {:x x :y y}))\n\n(defn update-tail [scl food snake]\n (->> snake\n      (transform [(collect-one :x)\n                  (collect-one :y)\n                  (collect-one :xspeed)\n                  (collect-one :yspeed)\n                  :tail]\n                 (fn [sx sy sxv syv tail]\n                  (cond\n                   (death? tail sx sy)\n                   (empty tail)\n                   (eat? food {:x (+ (* sxv scl) sx)\n                               :y (+ (* syv scl) sy)})\n                   (conj tail {:x sx\n                               :y sy})\n                   (seq tail)\n                   (subvec (conj tail {:x sx\n                                       :y sy})\n                           1)\n                   :else tail)))))\n\n(defn move-forward [scl snake]\n (->> snake\n      (transform [(collect-one :xspeed) :x]\n                 (comp #(q/constrain % 0 (- (q/width) scl))\n                       #(+ (* %1 scl) %2)))\n      (transform [(collect-one :yspeed) :y]\n                 (comp #(q/constrain % 0 (- (q/height) scl))\n                       #(+ (* %1 scl) %2)))))\n\n(defn update* [scl food snake]\n (->> snake\n      (update-tail scl food)\n      (move-forward scl)))\n\n(defn draw [scl {sx :x\n                 sy :y\n                 :as snake}]\n (q/fill 255)\n (q/rect sx sy scl scl)\n (doseq [{y :y x :x} (:tail snake)]\n  (q/fill 155) ; distinguish head from tail\n  (q/rect x y scl scl)))\n\n(defn dir [x y snake]\n (->> snake\n      (setval :xspeed x)\n      (setval :yspeed y)))\n"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/AaGK-fj-BAM\n\nfunction Snake() {\n  this.x = 0;\n  this.y = 0;\n  this.xspeed = 1;\n  this.yspeed = 0;\n  this.total = 0;\n  this.tail = [];\n\n  this.eat = function(pos) {\n    var d = dist(this.x, this.y, pos.x, pos.y);\n    if (d < 1) {\n      this.total++;\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  this.dir = function(x, y) {\n    this.xspeed = x;\n    this.yspeed = y;\n  }\n\n  this.death = function() {\n    for (var i = 0; i < this.tail.length; i++) {\n      var pos = this.tail[i];\n      var d = dist(this.x, this.y, pos.x, pos.y);\n      if (d < 1) {\n        console.log('starting over');\n        this.total = 0;\n        this.tail = [];\n      }\n    }\n  }\n\n  this.update = function() {\n    if (this.total === this.tail.length) {\n      for (var i = 0; i < this.tail.length - 1; i++) {\n        this.tail[i] = this.tail[i + 1];\n      }\n    }\n    this.tail[this.total - 1] = createVector(this.x, this.y);\n\n    this.x = this.x + this.xspeed * scl;\n    this.y = this.y + this.yspeed * scl;\n\n    this.x = constrain(this.x, 0, width - scl);\n    this.y = constrain(this.y, 0, height - scl);\n  }\n\n  this.show = function() {\n    fill(255);\n    for (var i = 0; i < this.tail.length; i++) {\n      rect(this.tail[i].x, this.tail[i].y, scl, scl);\n    }\n    rect(this.x, this.y, scl, scl);\n\n  }\n}"], null)], null)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(code__$1)].join('')));

}
})()], null);
})()], null);
});
;})(code))
})(),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.snake_game.views.snake_game_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484782599458
// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.snake_game.views');
goog.require('cljs.core');
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

var scl = (20);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"snake","snake",-244377242),coding_challenges.snake_game.snake.make.call(null),new cljs.core.Keyword(null,"scale","scale",-230427353),scl,new cljs.core.Keyword(null,"food","food",1842183121),coding_challenges.snake_game.views.pick_location.call(null,scl)], null);
});
coding_challenges.snake_game.views.update_snake = (function coding_challenges$snake_game$views$update_snake(p__35652){
var map__35655 = p__35652;
var map__35655__$1 = ((((!((map__35655 == null)))?((((map__35655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35655):map__35655);
var sketch = map__35655__$1;
var scl = cljs.core.get.call(null,map__35655__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var food = cljs.core.get.call(null,map__35655__$1,new cljs.core.Keyword(null,"food","food",1842183121));
return cljs.core.update.call(null,sketch,new cljs.core.Keyword(null,"snake","snake",-244377242),((function (map__35655,map__35655__$1,sketch,scl,food){
return (function (p1__35651_SHARP_){
return coding_challenges.snake_game.snake.update_STAR_.call(null,scl,food,p1__35651_SHARP_);
});})(map__35655,map__35655__$1,sketch,scl,food))
);
});
coding_challenges.snake_game.views.update_food = (function coding_challenges$snake_game$views$update_food(p__35657){
var map__35660 = p__35657;
var map__35660__$1 = ((((!((map__35660 == null)))?((((map__35660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35660):map__35660);
var sketch = map__35660__$1;
var scl = cljs.core.get.call(null,map__35660__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var snake = cljs.core.get.call(null,map__35660__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
return cljs.core.update.call(null,sketch,new cljs.core.Keyword(null,"food","food",1842183121),((function (map__35660,map__35660__$1,sketch,scl,snake){
return (function (food){
if(cljs.core.truth_(coding_challenges.snake_game.snake.eat_QMARK_.call(null,food,snake))){
return coding_challenges.snake_game.views.pick_location.call(null,scl);
} else {
return food;
}
});})(map__35660,map__35660__$1,sketch,scl,snake))
);
});
coding_challenges.snake_game.views.update_STAR_ = (function coding_challenges$snake_game$views$update_STAR_(sketch){
return coding_challenges.snake_game.views.update_food.call(null,coding_challenges.snake_game.views.update_snake.call(null,sketch));
});
coding_challenges.snake_game.views.draw = (function coding_challenges$snake_game$views$draw(p__35662){
var map__35667 = p__35662;
var map__35667__$1 = ((((!((map__35667 == null)))?((((map__35667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35667):map__35667);
var sketch = map__35667__$1;
var map__35668 = cljs.core.get.call(null,map__35667__$1,new cljs.core.Keyword(null,"food","food",1842183121));
var map__35668__$1 = ((((!((map__35668 == null)))?((((map__35668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35668):map__35668);
var x = cljs.core.get.call(null,map__35668__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__35668__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var snake = cljs.core.get.call(null,map__35667__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var scl = cljs.core.get.call(null,map__35667__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
quil.core.background.call(null,(51));

coding_challenges.snake_game.snake.draw.call(null,scl,snake);

quil.core.fill.call(null,(255),(0),(100));

return quil.core.rect.call(null,x,y,scl,scl);
});
/**
 * Change direction only if next position doesn't result in death.
 */
coding_challenges.snake_game.views.turn_snake_QMARK_ = (function coding_challenges$snake_game$views$turn_snake_QMARK_(nxd,nyd,p__35671){
var map__35676 = p__35671;
var map__35676__$1 = ((((!((map__35676 == null)))?((((map__35676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35676):map__35676);
var sketch = map__35676__$1;
var scl = cljs.core.get.call(null,map__35676__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
return cljs.core.update.call(null,sketch,new cljs.core.Keyword(null,"snake","snake",-244377242),((function (map__35676,map__35676__$1,sketch,scl){
return (function (snake){
var map__35678 = coding_challenges.snake_game.snake.dir.call(null,nxd,nyd,snake);
var map__35678__$1 = ((((!((map__35678 == null)))?((((map__35678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35678):map__35678);
var nsd = map__35678__$1;
var x = cljs.core.get.call(null,map__35678__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__35678__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var xv = cljs.core.get.call(null,map__35678__$1,new cljs.core.Keyword(null,"xspeed","xspeed",1490661174));
var yv = cljs.core.get.call(null,map__35678__$1,new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521));
var nsxp = (x + (scl * xv));
var nsyp = (y + (scl * yv));
var death_QMARK_ = (function (){var or__6409__auto__ = coding_challenges.snake_game.snake.death_QMARK_.call(null,new cljs.core.Keyword(null,"tail","tail",-1146023564).cljs$core$IFn$_invoke$arity$1(nsd),nsxp,nsyp);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (!((((0) <= nsxp)) && ((nsxp <= (quil.core.width.call(null) - scl))))) || (!((((0) <= nsyp)) && ((nsyp <= (quil.core.height.call(null) - scl)))));
}
})();
if(cljs.core.not.call(null,death_QMARK_)){
return nsd;
} else {
return snake;
}
});})(map__35676,map__35676__$1,sketch,scl))
);
});
coding_challenges.snake_game.views.key_pressed = (function coding_challenges$snake_game$views$key_pressed(sketch,event){
var any_of = (function() { 
var coding_challenges$snake_game$views$key_pressed_$_any_of__delegate = function (ks){
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event)),ks);
};
var coding_challenges$snake_game$views$key_pressed_$_any_of = function (var_args){
var ks = null;
if (arguments.length > 0) {
var G__35680__i = 0, G__35680__a = new Array(arguments.length -  0);
while (G__35680__i < G__35680__a.length) {G__35680__a[G__35680__i] = arguments[G__35680__i + 0]; ++G__35680__i;}
  ks = new cljs.core.IndexedSeq(G__35680__a,0);
} 
return coding_challenges$snake_game$views$key_pressed_$_any_of__delegate.call(this,ks);};
coding_challenges$snake_game$views$key_pressed_$_any_of.cljs$lang$maxFixedArity = 0;
coding_challenges$snake_game$views$key_pressed_$_any_of.cljs$lang$applyTo = (function (arglist__35681){
var ks = cljs.core.seq(arglist__35681);
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
coding_challenges.snake_game.views.increase_snake_tail = (function coding_challenges$snake_game$views$increase_snake_tail(p__35682){
var map__35687 = p__35682;
var map__35687__$1 = ((((!((map__35687 == null)))?((((map__35687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35687):map__35687);
var sketch = map__35687__$1;
var scl = cljs.core.get.call(null,map__35687__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var map__35688 = cljs.core.get.call(null,map__35687__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var map__35688__$1 = ((((!((map__35688 == null)))?((((map__35688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35688):map__35688);
var sx = cljs.core.get.call(null,map__35688__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var sy = cljs.core.get.call(null,map__35688__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sxv = cljs.core.get.call(null,map__35688__$1,new cljs.core.Keyword(null,"xspeed","xspeed",1490661174));
var syv = cljs.core.get.call(null,map__35688__$1,new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521));
return cljs.core.update.call(null,sketch,new cljs.core.Keyword(null,"snake","snake",-244377242),((function (map__35687,map__35687__$1,sketch,scl,map__35688,map__35688__$1,sx,sy,sxv,syv){
return (function (snake){
return cljs.core.update.call(null,snake,new cljs.core.Keyword(null,"tail","tail",-1146023564),((function (map__35687,map__35687__$1,sketch,scl,map__35688,map__35688__$1,sx,sy,sxv,syv){
return (function (tail){
return cljs.core.conj.call(null,tail,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(sx - (scl * sxv)),new cljs.core.Keyword(null,"y","y",-1757859776),(sy - (scl * syv))], null));
});})(map__35687,map__35687__$1,sketch,scl,map__35688,map__35688__$1,sx,sy,sxv,syv))
);
});})(map__35687,map__35687__$1,sketch,scl,map__35688,map__35688__$1,sx,sy,sxv,syv))
);
});
coding_challenges.snake_game.views.mouse_clicked = (function coding_challenges$snake_game$views$mouse_clicked(sketch,event){
return coding_challenges.snake_game.views.increase_snake_tail.call(null,sketch);
});
coding_challenges.snake_game.views.snake_game_sketch = (function coding_challenges$snake_game$views$snake_game_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,coding_challenges.snake_game.views.mouse_clicked))?(function() { 
var G__35691__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.snake_game.views.mouse_clicked,args);
};
var G__35691 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35692__i = 0, G__35692__a = new Array(arguments.length -  0);
while (G__35692__i < G__35692__a.length) {G__35692__a[G__35692__i] = arguments[G__35692__i + 0]; ++G__35692__i;}
  args = new cljs.core.IndexedSeq(G__35692__a,0);
} 
return G__35691__delegate.call(this,args);};
G__35691.cljs$lang$maxFixedArity = 0;
G__35691.cljs$lang$applyTo = (function (arglist__35693){
var args = cljs.core.seq(arglist__35693);
return G__35691__delegate(args);
});
G__35691.cljs$core$IFn$_invoke$arity$variadic = G__35691__delegate;
return G__35691;
})()
:coding_challenges.snake_game.views.mouse_clicked),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.snake_game.views.update_STAR_))?(function() { 
var G__35694__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.snake_game.views.update_STAR_,args);
};
var G__35694 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35695__i = 0, G__35695__a = new Array(arguments.length -  0);
while (G__35695__i < G__35695__a.length) {G__35695__a[G__35695__i] = arguments[G__35695__i + 0]; ++G__35695__i;}
  args = new cljs.core.IndexedSeq(G__35695__a,0);
} 
return G__35694__delegate.call(this,args);};
G__35694.cljs$lang$maxFixedArity = 0;
G__35694.cljs$lang$applyTo = (function (arglist__35696){
var args = cljs.core.seq(arglist__35696);
return G__35694__delegate(args);
});
G__35694.cljs$core$IFn$_invoke$arity$variadic = G__35694__delegate;
return G__35694;
})()
:coding_challenges.snake_game.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.snake_game.views.w,coding_challenges.snake_game.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.snake_game.views.setup))?(function() { 
var G__35697__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.snake_game.views.setup,args);
};
var G__35697 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35698__i = 0, G__35698__a = new Array(arguments.length -  0);
while (G__35698__i < G__35698__a.length) {G__35698__a[G__35698__i] = arguments[G__35698__i + 0]; ++G__35698__i;}
  args = new cljs.core.IndexedSeq(G__35698__a,0);
} 
return G__35697__delegate.call(this,args);};
G__35697.cljs$lang$maxFixedArity = 0;
G__35697.cljs$lang$applyTo = (function (arglist__35699){
var args = cljs.core.seq(arglist__35699);
return G__35697__delegate(args);
});
G__35697.cljs$core$IFn$_invoke$arity$variadic = G__35697__delegate;
return G__35697;
})()
:coding_challenges.snake_game.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"snake-game",new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,coding_challenges.snake_game.views.key_pressed))?(function() { 
var G__35700__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.snake_game.views.key_pressed,args);
};
var G__35700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35701__i = 0, G__35701__a = new Array(arguments.length -  0);
while (G__35701__i < G__35701__a.length) {G__35701__a[G__35701__i] = arguments[G__35701__i + 0]; ++G__35701__i;}
  args = new cljs.core.IndexedSeq(G__35701__a,0);
} 
return G__35700__delegate.call(this,args);};
G__35700.cljs$lang$maxFixedArity = 0;
G__35700.cljs$lang$applyTo = (function (arglist__35702){
var args = cljs.core.seq(arglist__35702);
return G__35700__delegate(args);
});
G__35700.cljs$core$IFn$_invoke$arity$variadic = G__35700__delegate;
return G__35700;
})()
:coding_challenges.snake_game.views.key_pressed),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.snake_game.views.draw))?(function() { 
var G__35703__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.snake_game.views.draw,args);
};
var G__35703 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35704__i = 0, G__35704__a = new Array(arguments.length -  0);
while (G__35704__i < G__35704__a.length) {G__35704__a[G__35704__i] = arguments[G__35704__i + 0]; ++G__35704__i;}
  args = new cljs.core.IndexedSeq(G__35704__a,0);
} 
return G__35703__delegate.call(this,args);};
G__35703.cljs$lang$maxFixedArity = 0;
G__35703.cljs$lang$applyTo = (function (arglist__35705){
var args = cljs.core.seq(arglist__35705);
return G__35703__delegate(args);
});
G__35703.cljs$core$IFn$_invoke$arity$variadic = G__35703__delegate;
return G__35703;
})()
:coding_challenges.snake_game.views.draw));
});
goog.exportSymbol('coding_challenges.snake_game.views.snake_game_sketch', coding_challenges.snake_game.views.snake_game_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14841__14842__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__14841__14842__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.snake_game.views.snake_game_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"snake-game"], null));
}
coding_challenges.snake_game.views.view = (function coding_challenges$snake_game$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){var code = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-one","select-one",1322686564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake-game","snake-game",-1781360032),new cljs.core.Keyword(null,"code","code",1586293142)], null)], null));
return ((function (code){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var code__$1 = (function (){var or__6409__auto__ = cljs.core.deref.call(null,code);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return new cljs.core.Keyword(null,"sketch","sketch",465948709);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Snake game demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#snake-game","canvas#snake-game",-1229013166),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.snake_game.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.snake_game.views.h], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sketch","sketch",465948709),new cljs.core.Keyword(null,"label","label",1718410804),"Sketch"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"snake","snake",-244377242),new cljs.core.Keyword(null,"label","label",1718410804),"Snake"], null)], null),new cljs.core.Keyword(null,"model","model",331153215),code__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (code__$1,code){
return (function (p1__35706_SHARP_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake-game","snake-game",-1781360032),new cljs.core.Keyword(null,"code","code",1586293142)], null),p1__35706_SHARP_], null)], null));

var seq__35712 = cljs.core.seq.call(null,document.querySelectorAll("code"));
var chunk__35713 = null;
var count__35714 = (0);
var i__35715 = (0);
while(true){
if((i__35715 < count__35714)){
var x = cljs.core._nth.call(null,chunk__35713,i__35715);
hljs.highlightBlock(x);

var G__35717 = seq__35712;
var G__35718 = chunk__35713;
var G__35719 = count__35714;
var G__35720 = (i__35715 + (1));
seq__35712 = G__35717;
chunk__35713 = G__35718;
count__35714 = G__35719;
i__35715 = G__35720;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35712);
if(temp__4657__auto__){
var seq__35712__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35712__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__35712__$1);
var G__35721 = cljs.core.chunk_rest.call(null,seq__35712__$1);
var G__35722 = c__7220__auto__;
var G__35723 = cljs.core.count.call(null,c__7220__auto__);
var G__35724 = (0);
seq__35712 = G__35721;
chunk__35713 = G__35722;
count__35714 = G__35723;
i__35715 = G__35724;
continue;
} else {
var x = cljs.core.first.call(null,seq__35712__$1);
hljs.highlightBlock(x);

var G__35725 = cljs.core.next.call(null,seq__35712__$1);
var G__35726 = null;
var G__35727 = (0);
var G__35728 = (0);
seq__35712 = G__35725;
chunk__35713 = G__35726;
count__35714 = G__35727;
i__35715 = G__35728;
continue;
}
} else {
return null;
}
}
break;
}
});})(code__$1,code))
], null),(function (){var G__35716 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__35716) {
case "sketch":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(def w 600)\n(def h 600)\n\n(defn pick-location [scl]\n (let [cols (q/floor (/ (q/width) scl))\n       rows (q/floor (/ (q/height) scl))]\n  {:type 'Food\n   :x (* scl (rand-int cols))\n   :y (* scl (rand-int rows))}))\n\n(defn setup []\n (q/frame-rate 8)\n (let [scl 20]\n  {:snake (snake/make)\n   :scale scl\n   :food (pick-location scl)}))\n\n(defn update-snake [{scl :scale\n                     food :food\n                     :as sketch}]\n (update sketch\n         :snake #(snake/update* scl food %)))\n\n(defn update-food [{scl :scale\n                    snake :snake\n                    :as sketch}]\n (update sketch\n         :food (fn [food]\n                (if (eat? food snake)\n                 (pick-location scl)\n                 food))))\n\n(defn update* [sketch]\n (->> sketch\n      update-snake\n      update-food))\n\n(defn draw [{{x :x\n              y :y} :food\n             snake :snake\n             scl :scale\n             :as sketch}]\n (q/background 51)\n (snake/draw scl snake)\n\n (q/fill 255 0 100)\n (q/rect x y\n         scl scl))\n\n(defn turn-snake?\n \"Change direction only if next position doesn't result in death.\"\n [nxd nyd {scl :scale\n           :as sketch}]\n (update sketch\n         :snake (fn [snake]\n                 (let [{x :x\n                        y :y\n                        xv :xspeed\n                        yv :yspeed\n                        :as nsd} (snake/dir nxd nyd snake)\n                       nsxp (+ x (* scl xv))\n                       nsyp (+ y (* scl yv))\n                       death?\n                       (or (snake/death?\n                            (:tail nsd)\n                            nsxp\n                            nsyp)\n                           (not (<= 0 nsxp (- (q/width) scl)))\n                           (not (<= 0 nsyp (- (q/height) scl))))]\n                  (if-not death?\n                   nsd\n                   snake)))))\n\n(defn key-pressed [sketch event]\n (letfn [(any-of\n          [& ks]\n          (some (partial = (:key event))\n                ks))]\n  (cond\n   (any-of :up :w)\n   (->> sketch\n        (turn-snake? 0 -1))\n   (any-of :down :s)\n   (->> sketch\n        (turn-snake? 0 1))\n   (any-of :left :a)\n   (->> sketch\n        (turn-snake? -1 0))\n   (any-of :right :d)\n   (->> sketch\n        (turn-snake? 1 0))\n   :else sketch)))\n\n(defn increase-snake-tail [{scl :scale\n                            {sx :x\n                             sy :y\n                             sxv :xspeed\n                             syv :yspeed} :snake\n                            :as sketch}]\n (update sketch\n         :snake\n         (fn [snake]\n          (update snake\n                  :tail\n                  (fn [tail]\n                   (conj tail {:x (- sx (* scl sxv))\n                               :y (- sy (* scl syv))}))))))\n\n(defn mouse-clicked [sketch event]\n (->> sketch\n      increase-snake-tail))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/AaGK-fj-BAM\n\nvar s;\nvar scl = 20;\n\nvar food;\n\nfunction setup() {\n  createCanvas(600, 600);\n  s = new Snake();\n  frameRate(10);\n  pickLocation();\n\n}\n\nfunction pickLocation() {\n  var cols = floor(width/scl);\n  var rows = floor(height/scl);\n  food = createVector(floor(random(cols)), floor(random(rows)));\n  food.mult(scl);\n}\n\nfunction mousePressed() {\n  s.total++;\n}\n\nfunction draw() {\n  background(51);\n\n  if (s.eat(food)) {\n    pickLocation();\n  }\n  s.death();\n  s.update();\n  s.show();\n\n\n  fill(255, 0, 100);\n  rect(food.x, food.y, scl, scl);\n}\n\n\n\n\n\nfunction keyPressed() {\n  if (keyCode === UP_ARROW) {\n    s.dir(0, -1);\n  } else if (keyCode === DOWN_ARROW) {\n    s.dir(0, 1);\n  } else if (keyCode === RIGHT_ARROW) {\n    s.dir(1, 0);\n  } else if (keyCode === LEFT_ARROW) {\n    s.dir(-1, 0);\n  }\n}"], null)], null)], null)], null);

break;
case "snake":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(defn make\n ([]\n  (make 0 0 1 0))\n ([x y xv yv]\n  {:type 'Snake\n   :x x\n   :y y\n   :xspeed xv\n   :yspeed yv\n   :tail []}))\n\n(defn eat? [{fx :x\n             fy :y\n             :as food}\n            {sx :x\n             sy :y\n             :as snake}]\n (< (q/dist sx sy\n            fx fy)\n    1))\n\n(defn death? [tail x y]\n ((set tail) {:x x :y y}))\n\n(defn update-tail [scl food {sx :x\n                             sy :y\n                             sxv :xspeed\n                             syv :yspeed\n                             :as snake}]\n (-> snake\n     (update :tail (fn [tail]\n                    (cond\n                     (death? tail sx sy)\n                     (empty tail)\n                     (eat? food {:x (+ (* sxv scl) sx)\n                                 :y (+ (* syv scl) sy)})\n                     (conj tail {:x sx\n                                 :y sy})\n                     (seq tail)\n                     (subvec (conj tail {:x sx\n                                         :y sy})\n                             1)\n                     :else tail)))))\n\n(defn move-forward [scl {xspeed :xspeed\n                         yspeed :yspeed\n                         :as snake}]\n (-> snake\n     (update :x (comp #(q/constrain % 0 (- (q/width) scl))\n                      (partial + (* xspeed scl))))\n     (update :y (comp #(q/constrain % 0 (- (q/height) scl))\n                      (partial + (* yspeed scl))))))\n\n(defn update* [scl food snake]\n (->> snake\n      (update-tail scl food)\n      (move-forward scl)))\n\n(defn draw [scl {sx :x\n                 sy :y\n                 tail :tail\n                 :as snake}]\n (q/fill 255)\n (q/rect sx sy scl scl)\n (doseq [{y :y x :x} tail]\n  (q/fill 155) ; distinguish head from tail\n  (q/rect x y scl scl)))\n\n(defn dir [x y snake]\n (-> snake\n     (assoc :xspeed x)\n     (assoc :yspeed y)))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/AaGK-fj-BAM\n\nfunction Snake() {\n  this.x = 0;\n  this.y = 0;\n  this.xspeed = 1;\n  this.yspeed = 0;\n  this.total = 0;\n  this.tail = [];\n\n  this.eat = function(pos) {\n    var d = dist(this.x, this.y, pos.x, pos.y);\n    if (d < 1) {\n      this.total++;\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  this.dir = function(x, y) {\n    this.xspeed = x;\n    this.yspeed = y;\n  }\n\n  this.death = function() {\n    for (var i = 0; i < this.tail.length; i++) {\n      var pos = this.tail[i];\n      var d = dist(this.x, this.y, pos.x, pos.y);\n      if (d < 1) {\n        console.log('starting over');\n        this.total = 0;\n        this.tail = [];\n      }\n    }\n  }\n\n  this.update = function() {\n    if (this.total === this.tail.length) {\n      for (var i = 0; i < this.tail.length - 1; i++) {\n        this.tail[i] = this.tail[i + 1];\n      }\n    }\n    this.tail[this.total - 1] = createVector(this.x, this.y);\n\n    this.x = this.x + this.xspeed * scl;\n    this.y = this.y + this.yspeed * scl;\n\n    this.x = constrain(this.x, 0, width - scl);\n    this.y = constrain(this.y, 0, height - scl);\n  }\n\n  this.show = function() {\n    fill(255);\n    for (var i = 0; i < this.tail.length; i++) {\n      rect(this.tail[i].x, this.tail[i].y, scl, scl);\n    }\n    rect(this.x, this.y, scl, scl);\n\n  }\n}"], null)], null)], null)], null);

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

//# sourceMappingURL=views.js.map?rel=1485243283362
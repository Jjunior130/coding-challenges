// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.space_invaders.views');
goog.require('cljs.core');
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ship","ship",197863473),coding_challenges.space_invaders.ship.make.call(null),new cljs.core.Keyword(null,"flowers","flowers",-1521787890),(function (){var i = (6);
var flowers = cljs.core.PersistentVector.EMPTY;
while(true){
if((i === (0))){
return flowers;
} else {
var G__35265 = (i - (1));
var G__35266 = cljs.core.conj.call(null,flowers,coding_challenges.space_invaders.flower.make.call(null,(((i - (1)) * (80)) + (80)),(60)));
i = G__35265;
flowers = G__35266;
continue;
}
break;
}
})()], null);
});
coding_challenges.space_invaders.views.update_drops = (function coding_challenges$space_invaders$views$update_drops(p__35268){
var map__35271 = p__35268;
var map__35271__$1 = ((((!((map__35271 == null)))?((((map__35271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35271):map__35271);
var sketch = map__35271__$1;
var flowers = cljs.core.get.call(null,map__35271__$1,new cljs.core.Keyword(null,"flowers","flowers",-1521787890));
return cljs.core.update.call(null,sketch,new cljs.core.Keyword(null,"drops","drops",-1558072608),((function (map__35271,map__35271__$1,sketch,flowers){
return (function (drops){
return cljs.core.mapv.call(null,coding_challenges.space_invaders.drop.update_STAR_,cljs.core.remove.call(null,((function (map__35271,map__35271__$1,sketch,flowers){
return (function (p1__35267_SHARP_){
return cljs.core.some.call(null,cljs.core.partial.call(null,coding_challenges.space_invaders.drop.hits_QMARK_,p1__35267_SHARP_),flowers);
});})(map__35271,map__35271__$1,sketch,flowers))
,drops));
});})(map__35271,map__35271__$1,sketch,flowers))
);
});
coding_challenges.space_invaders.views.horizontal_edge_QMARK_ = (function coding_challenges$space_invaders$views$horizontal_edge_QMARK_(p__35273){
var map__35276 = p__35273;
var map__35276__$1 = ((((!((map__35276 == null)))?((((map__35276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35276):map__35276);
var x = cljs.core.get.call(null,map__35276__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return cljs.core.some_fn.call(null,cljs.core.partial.call(null,cljs.core._GT_,(0)),cljs.core.partial.call(null,cljs.core._LT_,quil.core.width.call(null))).call(null,x);
});
coding_challenges.space_invaders.views.update_flowers = (function coding_challenges$space_invaders$views$update_flowers(p__35278){
var map__35281 = p__35278;
var map__35281__$1 = ((((!((map__35281 == null)))?((((map__35281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35281):map__35281);
var sketch = map__35281__$1;
var drops = cljs.core.get.call(null,map__35281__$1,new cljs.core.Keyword(null,"drops","drops",-1558072608));
return cljs.core.update.call(null,sketch,new cljs.core.Keyword(null,"flowers","flowers",-1521787890),((function (map__35281,map__35281__$1,sketch,drops){
return (function (flowers){
if(cljs.core.truth_(cljs.core.some.call(null,coding_challenges.space_invaders.views.horizontal_edge_QMARK_,flowers))){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,coding_challenges.space_invaders.flower.update_STAR_,true,drops),flowers);
} else {
return cljs.core.mapv.call(null,cljs.core.partial.call(null,coding_challenges.space_invaders.flower.update_STAR_,false,drops),flowers);
}
});})(map__35281,map__35281__$1,sketch,drops))
);
});
coding_challenges.space_invaders.views.update_ship = (function coding_challenges$space_invaders$views$update_ship(sketch){
return cljs.core.update.call(null,sketch,new cljs.core.Keyword(null,"ship","ship",197863473),coding_challenges.space_invaders.ship.update_STAR_);
});
coding_challenges.space_invaders.views.update_STAR_ = (function coding_challenges$space_invaders$views$update_STAR_(sketch){
return coding_challenges.space_invaders.views.update_ship.call(null,coding_challenges.space_invaders.views.update_flowers.call(null,coding_challenges.space_invaders.views.update_drops.call(null,sketch)));
});
coding_challenges.space_invaders.views.draw = (function coding_challenges$space_invaders$views$draw(p__35283){
var map__35294 = p__35283;
var map__35294__$1 = ((((!((map__35294 == null)))?((((map__35294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35294):map__35294);
var sketch = map__35294__$1;
var ship = cljs.core.get.call(null,map__35294__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var drops = cljs.core.get.call(null,map__35294__$1,new cljs.core.Keyword(null,"drops","drops",-1558072608));
var flowers = cljs.core.get.call(null,map__35294__$1,new cljs.core.Keyword(null,"flowers","flowers",-1521787890));
quil.core.background.call(null,(51));

coding_challenges.space_invaders.ship.draw.call(null,ship);

var seq__35296_35304 = cljs.core.seq.call(null,drops);
var chunk__35297_35305 = null;
var count__35298_35306 = (0);
var i__35299_35307 = (0);
while(true){
if((i__35299_35307 < count__35298_35306)){
var d_35308 = cljs.core._nth.call(null,chunk__35297_35305,i__35299_35307);
coding_challenges.space_invaders.drop.draw.call(null,d_35308);

var G__35309 = seq__35296_35304;
var G__35310 = chunk__35297_35305;
var G__35311 = count__35298_35306;
var G__35312 = (i__35299_35307 + (1));
seq__35296_35304 = G__35309;
chunk__35297_35305 = G__35310;
count__35298_35306 = G__35311;
i__35299_35307 = G__35312;
continue;
} else {
var temp__4657__auto___35313 = cljs.core.seq.call(null,seq__35296_35304);
if(temp__4657__auto___35313){
var seq__35296_35314__$1 = temp__4657__auto___35313;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35296_35314__$1)){
var c__7220__auto___35315 = cljs.core.chunk_first.call(null,seq__35296_35314__$1);
var G__35316 = cljs.core.chunk_rest.call(null,seq__35296_35314__$1);
var G__35317 = c__7220__auto___35315;
var G__35318 = cljs.core.count.call(null,c__7220__auto___35315);
var G__35319 = (0);
seq__35296_35304 = G__35316;
chunk__35297_35305 = G__35317;
count__35298_35306 = G__35318;
i__35299_35307 = G__35319;
continue;
} else {
var d_35320 = cljs.core.first.call(null,seq__35296_35314__$1);
coding_challenges.space_invaders.drop.draw.call(null,d_35320);

var G__35321 = cljs.core.next.call(null,seq__35296_35314__$1);
var G__35322 = null;
var G__35323 = (0);
var G__35324 = (0);
seq__35296_35304 = G__35321;
chunk__35297_35305 = G__35322;
count__35298_35306 = G__35323;
i__35299_35307 = G__35324;
continue;
}
} else {
}
}
break;
}

var seq__35300 = cljs.core.seq.call(null,flowers);
var chunk__35301 = null;
var count__35302 = (0);
var i__35303 = (0);
while(true){
if((i__35303 < count__35302)){
var flower = cljs.core._nth.call(null,chunk__35301,i__35303);
coding_challenges.space_invaders.flower.draw.call(null,flower);

var G__35325 = seq__35300;
var G__35326 = chunk__35301;
var G__35327 = count__35302;
var G__35328 = (i__35303 + (1));
seq__35300 = G__35325;
chunk__35301 = G__35326;
count__35302 = G__35327;
i__35303 = G__35328;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35300);
if(temp__4657__auto__){
var seq__35300__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35300__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__35300__$1);
var G__35329 = cljs.core.chunk_rest.call(null,seq__35300__$1);
var G__35330 = c__7220__auto__;
var G__35331 = cljs.core.count.call(null,c__7220__auto__);
var G__35332 = (0);
seq__35300 = G__35329;
chunk__35301 = G__35330;
count__35302 = G__35331;
i__35303 = G__35332;
continue;
} else {
var flower = cljs.core.first.call(null,seq__35300__$1);
coding_challenges.space_invaders.flower.draw.call(null,flower);

var G__35333 = cljs.core.next.call(null,seq__35300__$1);
var G__35334 = null;
var G__35335 = (0);
var G__35336 = (0);
seq__35300 = G__35333;
chunk__35301 = G__35334;
count__35302 = G__35335;
i__35303 = G__35336;
continue;
}
} else {
return null;
}
}
break;
}
});
coding_challenges.space_invaders.views.key_pressed = (function coding_challenges$space_invaders$views$key_pressed(p__35340,event){
var map__35346 = p__35340;
var map__35346__$1 = ((((!((map__35346 == null)))?((((map__35346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35346):map__35346);
var sketch = map__35346__$1;
var map__35347 = cljs.core.get.call(null,map__35346__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var map__35347__$1 = ((((!((map__35347 == null)))?((((map__35347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35347):map__35347);
var x = cljs.core.get.call(null,map__35347__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var any_of = ((function (map__35346,map__35346__$1,sketch,map__35347,map__35347__$1,x){
return (function() { 
var coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate = function (ks){
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event)),ks);
};
var coding_challenges$space_invaders$views$key_pressed_$_any_of = function (var_args){
var ks = null;
if (arguments.length > 0) {
var G__35351__i = 0, G__35351__a = new Array(arguments.length -  0);
while (G__35351__i < G__35351__a.length) {G__35351__a[G__35351__i] = arguments[G__35351__i + 0]; ++G__35351__i;}
  ks = new cljs.core.IndexedSeq(G__35351__a,0);
} 
return coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate.call(this,ks);};
coding_challenges$space_invaders$views$key_pressed_$_any_of.cljs$lang$maxFixedArity = 0;
coding_challenges$space_invaders$views$key_pressed_$_any_of.cljs$lang$applyTo = (function (arglist__35352){
var ks = cljs.core.seq(arglist__35352);
return coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate(ks);
});
coding_challenges$space_invaders$views$key_pressed_$_any_of.cljs$core$IFn$_invoke$arity$variadic = coding_challenges$space_invaders$views$key_pressed_$_any_of__delegate;
return coding_challenges$space_invaders$views$key_pressed_$_any_of;
})()
;})(map__35346,map__35346__$1,sketch,map__35347,map__35347__$1,x))
;
var G__35350 = sketch;
var G__35350__$1 = (cljs.core.truth_(any_of.call(null,cljs.core.keyword.call(null," ")))?cljs.core.update.call(null,G__35350,new cljs.core.Keyword(null,"drops","drops",-1558072608),((function (G__35350,map__35346,map__35346__$1,sketch,map__35347,map__35347__$1,x){
return (function (p1__35337_SHARP_){
return cljs.core.conj.call(null,p1__35337_SHARP_,coding_challenges.space_invaders.drop.make.call(null,x,quil.core.height.call(null)));
});})(G__35350,map__35346,map__35346__$1,sketch,map__35347,map__35347__$1,x))
):G__35350);
var G__35350__$2 = (cljs.core.truth_(any_of.call(null,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"a","a",-2123407586)))?cljs.core.update.call(null,G__35350__$1,new cljs.core.Keyword(null,"ship","ship",197863473),((function (G__35350,G__35350__$1,map__35346,map__35346__$1,sketch,map__35347,map__35347__$1,x){
return (function (p1__35338_SHARP_){
return cljs.core.assoc.call(null,p1__35338_SHARP_,new cljs.core.Keyword(null,"xdir","xdir",1180076178),(-1));
});})(G__35350,G__35350__$1,map__35346,map__35346__$1,sketch,map__35347,map__35347__$1,x))
):G__35350__$1);
if(cljs.core.truth_(any_of.call(null,new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"d","d",1972142424)))){
return cljs.core.update.call(null,G__35350__$2,new cljs.core.Keyword(null,"ship","ship",197863473),((function (G__35350,G__35350__$1,G__35350__$2,map__35346,map__35346__$1,sketch,map__35347,map__35347__$1,x){
return (function (p1__35339_SHARP_){
return cljs.core.assoc.call(null,p1__35339_SHARP_,new cljs.core.Keyword(null,"xdir","xdir",1180076178),(1));
});})(G__35350,G__35350__$1,G__35350__$2,map__35346,map__35346__$1,sketch,map__35347,map__35347__$1,x))
);
} else {
return G__35350__$2;
}
});
coding_challenges.space_invaders.views.key_released = (function coding_challenges$space_invaders$views$key_released(sketch){
return cljs.core.update.call(null,sketch,new cljs.core.Keyword(null,"ship","ship",197863473),(function (p1__35353_SHARP_){
return cljs.core.assoc.call(null,p1__35353_SHARP_,new cljs.core.Keyword(null,"xdir","xdir",1180076178),(0));
}));
});
coding_challenges.space_invaders.views.space_invaders_sketch = (function coding_challenges$space_invaders$views$space_invaders_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.key_pressed))?(function() { 
var G__35354__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.key_pressed,args);
};
var G__35354 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35355__i = 0, G__35355__a = new Array(arguments.length -  0);
while (G__35355__i < G__35355__a.length) {G__35355__a[G__35355__i] = arguments[G__35355__i + 0]; ++G__35355__i;}
  args = new cljs.core.IndexedSeq(G__35355__a,0);
} 
return G__35354__delegate.call(this,args);};
G__35354.cljs$lang$maxFixedArity = 0;
G__35354.cljs$lang$applyTo = (function (arglist__35356){
var args = cljs.core.seq(arglist__35356);
return G__35354__delegate(args);
});
G__35354.cljs$core$IFn$_invoke$arity$variadic = G__35354__delegate;
return G__35354;
})()
:coding_challenges.space_invaders.views.key_pressed),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.update_STAR_))?(function() { 
var G__35357__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.update_STAR_,args);
};
var G__35357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35358__i = 0, G__35358__a = new Array(arguments.length -  0);
while (G__35358__i < G__35358__a.length) {G__35358__a[G__35358__i] = arguments[G__35358__i + 0]; ++G__35358__i;}
  args = new cljs.core.IndexedSeq(G__35358__a,0);
} 
return G__35357__delegate.call(this,args);};
G__35357.cljs$lang$maxFixedArity = 0;
G__35357.cljs$lang$applyTo = (function (arglist__35359){
var args = cljs.core.seq(arglist__35359);
return G__35357__delegate(args);
});
G__35357.cljs$core$IFn$_invoke$arity$variadic = G__35357__delegate;
return G__35357;
})()
:coding_challenges.space_invaders.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.space_invaders.views.w,coding_challenges.space_invaders.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.setup))?(function() { 
var G__35360__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.setup,args);
};
var G__35360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35361__i = 0, G__35361__a = new Array(arguments.length -  0);
while (G__35361__i < G__35361__a.length) {G__35361__a[G__35361__i] = arguments[G__35361__i + 0]; ++G__35361__i;}
  args = new cljs.core.IndexedSeq(G__35361__a,0);
} 
return G__35360__delegate.call(this,args);};
G__35360.cljs$lang$maxFixedArity = 0;
G__35360.cljs$lang$applyTo = (function (arglist__35362){
var args = cljs.core.seq(arglist__35362);
return G__35360__delegate(args);
});
G__35360.cljs$core$IFn$_invoke$arity$variadic = G__35360__delegate;
return G__35360;
})()
:coding_challenges.space_invaders.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"space-invaders",new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.key_released))?(function() { 
var G__35363__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.key_released,args);
};
var G__35363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35364__i = 0, G__35364__a = new Array(arguments.length -  0);
while (G__35364__i < G__35364__a.length) {G__35364__a[G__35364__i] = arguments[G__35364__i + 0]; ++G__35364__i;}
  args = new cljs.core.IndexedSeq(G__35364__a,0);
} 
return G__35363__delegate.call(this,args);};
G__35363.cljs$lang$maxFixedArity = 0;
G__35363.cljs$lang$applyTo = (function (arglist__35365){
var args = cljs.core.seq(arglist__35365);
return G__35363__delegate(args);
});
G__35363.cljs$core$IFn$_invoke$arity$variadic = G__35363__delegate;
return G__35363;
})()
:coding_challenges.space_invaders.views.key_released),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.space_invaders.views.draw))?(function() { 
var G__35366__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.space_invaders.views.draw,args);
};
var G__35366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35367__i = 0, G__35367__a = new Array(arguments.length -  0);
while (G__35367__i < G__35367__a.length) {G__35367__a[G__35367__i] = arguments[G__35367__i + 0]; ++G__35367__i;}
  args = new cljs.core.IndexedSeq(G__35367__a,0);
} 
return G__35366__delegate.call(this,args);};
G__35366.cljs$lang$maxFixedArity = 0;
G__35366.cljs$lang$applyTo = (function (arglist__35368){
var args = cljs.core.seq(arglist__35368);
return G__35366__delegate(args);
});
G__35366.cljs$core$IFn$_invoke$arity$variadic = G__35366__delegate;
return G__35366;
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
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){var code = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-one","select-one",1322686564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space-invaders","space-invaders",-1238341852),new cljs.core.Keyword(null,"code","code",1586293142)], null)], null));
return ((function (code){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var code__$1 = (function (){var or__6409__auto__ = cljs.core.deref.call(null,code);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return new cljs.core.Keyword(null,"sketch","sketch",465948709);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Space invaders demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#space-invaders","canvas#space-invaders",-1686061181),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.space_invaders.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.space_invaders.views.h], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sketch","sketch",465948709),new cljs.core.Keyword(null,"label","label",1718410804),"Sketch"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"label","label",1718410804),"Drop"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"flower","flower",583610250),new cljs.core.Keyword(null,"label","label",1718410804),"Flower"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"label","label",1718410804),"Ship"], null)], null),new cljs.core.Keyword(null,"model","model",331153215),code__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (code__$1,code){
return (function (p1__35369_SHARP_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space-invaders","space-invaders",-1238341852),new cljs.core.Keyword(null,"code","code",1586293142)], null),p1__35369_SHARP_], null)], null));

var seq__35375 = cljs.core.seq.call(null,document.querySelectorAll("code"));
var chunk__35376 = null;
var count__35377 = (0);
var i__35378 = (0);
while(true){
if((i__35378 < count__35377)){
var x = cljs.core._nth.call(null,chunk__35376,i__35378);
hljs.highlightBlock(x);

var G__35380 = seq__35375;
var G__35381 = chunk__35376;
var G__35382 = count__35377;
var G__35383 = (i__35378 + (1));
seq__35375 = G__35380;
chunk__35376 = G__35381;
count__35377 = G__35382;
i__35378 = G__35383;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35375);
if(temp__4657__auto__){
var seq__35375__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35375__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__35375__$1);
var G__35384 = cljs.core.chunk_rest.call(null,seq__35375__$1);
var G__35385 = c__7220__auto__;
var G__35386 = cljs.core.count.call(null,c__7220__auto__);
var G__35387 = (0);
seq__35375 = G__35384;
chunk__35376 = G__35385;
count__35377 = G__35386;
i__35378 = G__35387;
continue;
} else {
var x = cljs.core.first.call(null,seq__35375__$1);
hljs.highlightBlock(x);

var G__35388 = cljs.core.next.call(null,seq__35375__$1);
var G__35389 = null;
var G__35390 = (0);
var G__35391 = (0);
seq__35375 = G__35388;
chunk__35376 = G__35389;
count__35377 = G__35390;
i__35378 = G__35391;
continue;
}
} else {
return null;
}
}
break;
}
});})(code__$1,code))
], null),(function (){var G__35379 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__35379) {
case "sketch":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(def w 600)\n(def h 400)\n\n(defn setup []\n {:ship (ship/make)\n  :flowers (loop [i 6\n                  flowers []]\n            (if (zero? i)\n             flowers\n             (recur (dec i)\n                    (conj flowers\n                          (flower/make (+ (* (dec i) 80) 80)\n                                       60)))))})\n\n(defn update-drops [{flowers :flowers\n                     :as sketch}]\n (update sketch\n         :drops (fn [drops]\n                 (->> (remove #(some (partial hits? %) flowers)\n                              drops)\n                      (mapv d/update*)))))\n\n(defn horizontal-edge? [{x :x}]\n ((some-fn (partial > 0)\n          (partial < (q/width)))\n  x))\n\n(defn update-flowers [{drops :drops\n                       :as sketch}]\n (update sketch\n         :flowers\n         (fn [flowers]\n          (if (some horizontal-edge?\n                    flowers)\n           (mapv (partial flower/update* true drops) flowers)\n           (mapv (partial flower/update* false drops) flowers)))))\n\n(defn update-ship [sketch]\n (update sketch\n         :ship ship/update*))\n\n(defn update* [sketch]\n (->> sketch\n      update-drops\n      update-flowers\n      update-ship))\n\n(defn draw [{ship :ship\n             drops :drops\n             flowers :flowers\n             :as sketch}]\n (q/background 51)\n (ship/draw ship)\n (doseq [d drops]\n  (d/draw d))\n (doseq [flower flowers]\n  (flower/draw flower)))\n\n(defn key-pressed [{{x :x} :ship\n                    :as sketch} event]\n (letfn [(any-of\n          [& ks]\n          (some (partial = (:key event))\n                ks))]\n  (cond-> sketch\n   (any-of (keyword ","))\n   (update :drops #(conj % (d/make x (q/height))))\n   (any-of :left :a)\n   (update :ship #(assoc % :xdir -1))\n   (any-of :right :d)\n   (update :ship #(assoc % :xdir 1)))))\n\n(defn key-released [sketch]\n (-> sketch\n     (update :ship #(assoc % :xdir 0))))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/biN3v3ef-Y0\n\nvar ship;\nvar flowers = [];\nvar drops = [];\n\nfunction setup() {\n  createCanvas(600, 400);\n  ship = new Ship();\n  // drop = new Drop(width/2, height/2);\n  for (var i = 0; i < 6; i++) {\n    flowers[i] = new Flower(i*80+80, 60);\n  }\n}\n\nfunction draw() {\n  background(51);\n  ship.show();\n  ship.move();\n\n  for (var i = 0; i < drops.length; i++) {\n    drops[i].show();\n    drops[i].move();\n    for (var j = 0; j < flowers.length; j++) {\n      if (drops[i].hits(flowers[j])) {\n        flowers[j].grow();\n        drops[i].evaporate();\n      }\n    }\n  }\n\n  var edge = false;\n\n  for (var i = 0; i < flowers.length; i++) {\n    flowers[i].show();\n    flowers[i].move();\n    if (flowers[i].x > width || flowers[i].x < 0) {\n      edge = true;\n    }\n  }\n\n  if (edge) {\n    for (var i = 0; i < flowers.length; i++) {\n      flowers[i].shiftDown();\n    }\n  }\n\n  for (var i = drops.length-1; i >= 0; i--) {\n    if (drops[i].toDelete) {\n      drops.splice(i, 1);\n    }\n  }\n\n\n}\n\nfunction keyReleased() {\n  if (key != ' ') {\n    ship.setDir(0);\n  }\n}\n\n\nfunction keyPressed() {\n  if (key === ' ') {\n    var drop = new Drop(ship.x, height);\n    drops.push(drop);\n  }\n\n  if (keyCode === RIGHT_ARROW) {\n    ship.setDir(1);\n  } else if (keyCode === LEFT_ARROW) {\n    ship.setDir(-1);\n  }\n}\n"], null)], null)], null)], null);

break;
case "drop":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(defn make [x y]\n {:type 'Drop\n  :x x\n  :y y\n  :r 16})\n\n(defn move-up [d]\n (update d\n         :y #(- % 5)))\n\n(defn hits? [{dx :x\n              dy :y\n              dr :r\n              :as d}\n             {fx :x\n              fy :y\n              fr :r\n              :as flower}]\n (< (q/dist dx dy\n            fx fy)\n    (+ dr fr)))\n\n(defn update* [d]\n (move-up d))\n\n(defn draw [{dx :x\n             dy :y\n             dr :r\n             :as d}]\n (q/fill 150 0 255)\n (q/ellipse dx dy\n            dr dr))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/biN3v3ef-Y0\n\nfunction Drop(x, y) {\n  this.x = x;\n  this.y = y;\n  this.r = 8;\n  this.toDelete = false;\n\n  this.show = function() {\n    noStroke();\n    fill(150, 0, 255);\n    ellipse(this.x, this.y, this.r*2, this.r*2);\n  }\n\n  this.evaporate = function() {\n    this.toDelete = true;\n  }\n\n  this.hits = function(flower) {\n    var d = dist(this.x, this.y, flower.x, flower.y);\n    if (d < this.r + flower.r) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  this.move = function() {\n    this.y = this.y - 5;\n  }\n\n}\n"], null)], null)], null)], null);

break;
case "flower":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(defn make [x y]\n {:type 'Flower\n  :x x\n  :y y\n  :r 30\n  :xdir 1})\n\n(defn grow [flower]\n (update flower\n         :r (partial + 2)))\n\n(defn move [{xdir :xdir\n             :as flower}]\n (update flower\n         :x (partial + xdir)))\n\n(defn shift-down [{r :r\n                   :as flower}]\n (-> flower\n     (update :y (partial + r))\n     (update :xdir (partial * -1))))\n\n(defn update* [edge? drops flower]\n (cond->> flower\n          (some #(hits? % flower) drops) grow\n          edge? shift-down\n          :always move))\n\n(defn draw [{x :x\n             y :y\n             r :r\n             :as flower}]\n (q/fill 255 0 200)\n (q/ellipse x y\n            (* 2 r) (* 2 r)))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/biN3v3ef-Y0\n\nfunction Flower(x, y) {\n  this.x = x;\n  this.y = y;\n  this.r = 30;\n\n  this.xdir = 1;\n\n  this.grow = function() {\n    this.r = this.r + 2;\n  }\n\n  this.shiftDown = function() {\n    this.xdir *= -1;\n    this.y += this.r;\n  }\n\n  this.move = function() {\n    this.x = this.x + this.xdir;\n  }\n\n  this.show = function() {\n    noStroke();\n    fill(255, 0, 200, 150);\n    ellipse(this.x, this.y, this.r*2, this.r*2);\n  }\n\n}\n"], null)], null)], null)], null);

break;
case "ship":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(defn make []\n {:type 'Ship\n  :x (/ (q/width) 2)\n  :xdir 0})\n\n(defn move [{xdir :xdir\n             :as ship}]\n (update ship\n         :x (partial + (* 5 xdir))))\n\n(defn update* [ship]\n (move ship))\n\n(defn draw [{x :x\n             :as ship}]\n (q/fill 255)\n (q/rect-mode :center)\n (q/rect x (- (q/height) 20) 20 60))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/biN3v3ef-Y0\n\nfunction Ship() {\n  this.x = width/2;\n  this.xdir = 0;\n\n  this.show = function() {\n    fill(255);\n    rectMode(CENTER);\n    rect(this.x, height-20, 20, 60);\n  }\n\n  this.setDir = function(dir) {\n    this.xdir = dir;\n  }\n\n  this.move = function(dir) {\n    this.x += this.xdir*5;\n  }\n\n}\n"], null)], null)], null)], null);

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

//# sourceMappingURL=views.js.map?rel=1485243282648
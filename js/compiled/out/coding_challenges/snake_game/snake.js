// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.snake_game.snake');
goog.require('cljs.core');
goog.require('quil.core');
coding_challenges.snake_game.snake.make = (function coding_challenges$snake_game$snake$make(var_args){
var args35587 = [];
var len__7484__auto___35590 = arguments.length;
var i__7485__auto___35591 = (0);
while(true){
if((i__7485__auto___35591 < len__7484__auto___35590)){
args35587.push((arguments[i__7485__auto___35591]));

var G__35592 = (i__7485__auto___35591 + (1));
i__7485__auto___35591 = G__35592;
continue;
} else {
}
break;
}

var G__35589 = args35587.length;
switch (G__35589) {
case 0:
return coding_challenges.snake_game.snake.make.cljs$core$IFn$_invoke$arity$0();

break;
case 4:
return coding_challenges.snake_game.snake.make.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35587.length)].join('')));

}
});

coding_challenges.snake_game.snake.make.cljs$core$IFn$_invoke$arity$0 = (function (){
return coding_challenges.snake_game.snake.make.call(null,(0),(0),(1),(0));
});

coding_challenges.snake_game.snake.make.cljs$core$IFn$_invoke$arity$4 = (function (x,y,xv,yv){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Snake","Snake",1307032796,null),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"xspeed","xspeed",1490661174),xv,new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521),yv,new cljs.core.Keyword(null,"tail","tail",-1146023564),cljs.core.PersistentVector.EMPTY], null);
});

coding_challenges.snake_game.snake.make.cljs$lang$maxFixedArity = 4;

coding_challenges.snake_game.snake.eat_QMARK_ = (function coding_challenges$snake_game$snake$eat_QMARK_(p__35594,p__35595){
var map__35600 = p__35594;
var map__35600__$1 = ((((!((map__35600 == null)))?((((map__35600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35600):map__35600);
var food = map__35600__$1;
var fx = cljs.core.get.call(null,map__35600__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var fy = cljs.core.get.call(null,map__35600__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__35601 = p__35595;
var map__35601__$1 = ((((!((map__35601 == null)))?((((map__35601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35601):map__35601);
var snake = map__35601__$1;
var sx = cljs.core.get.call(null,map__35601__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var sy = cljs.core.get.call(null,map__35601__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return (quil.core.dist.call(null,sx,sy,fx,fy) < (1));
});
coding_challenges.snake_game.snake.death_QMARK_ = (function coding_challenges$snake_game$snake$death_QMARK_(tail,x,y){
return cljs.core.set.call(null,tail).call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
});
coding_challenges.snake_game.snake.update_tail = (function coding_challenges$snake_game$snake$update_tail(scl,food,p__35604){
var map__35607 = p__35604;
var map__35607__$1 = ((((!((map__35607 == null)))?((((map__35607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35607):map__35607);
var snake = map__35607__$1;
var sx = cljs.core.get.call(null,map__35607__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var sy = cljs.core.get.call(null,map__35607__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sxv = cljs.core.get.call(null,map__35607__$1,new cljs.core.Keyword(null,"xspeed","xspeed",1490661174));
var syv = cljs.core.get.call(null,map__35607__$1,new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521));
return cljs.core.update.call(null,snake,new cljs.core.Keyword(null,"tail","tail",-1146023564),((function (map__35607,map__35607__$1,snake,sx,sy,sxv,syv){
return (function (tail){
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
});})(map__35607,map__35607__$1,snake,sx,sy,sxv,syv))
);
});
coding_challenges.snake_game.snake.move_forward = (function coding_challenges$snake_game$snake$move_forward(scl,p__35611){
var map__35614 = p__35611;
var map__35614__$1 = ((((!((map__35614 == null)))?((((map__35614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35614):map__35614);
var snake = map__35614__$1;
var xspeed = cljs.core.get.call(null,map__35614__$1,new cljs.core.Keyword(null,"xspeed","xspeed",1490661174));
var yspeed = cljs.core.get.call(null,map__35614__$1,new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521));
return cljs.core.update.call(null,cljs.core.update.call(null,snake,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.comp.call(null,((function (map__35614,map__35614__$1,snake,xspeed,yspeed){
return (function (p1__35609_SHARP_){
return quil.core.constrain.call(null,p1__35609_SHARP_,(0),(quil.core.width.call(null) - scl));
});})(map__35614,map__35614__$1,snake,xspeed,yspeed))
,cljs.core.partial.call(null,cljs.core._PLUS_,(xspeed * scl)))),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.comp.call(null,((function (map__35614,map__35614__$1,snake,xspeed,yspeed){
return (function (p1__35610_SHARP_){
return quil.core.constrain.call(null,p1__35610_SHARP_,(0),(quil.core.height.call(null) - scl));
});})(map__35614,map__35614__$1,snake,xspeed,yspeed))
,cljs.core.partial.call(null,cljs.core._PLUS_,(yspeed * scl))));
});
coding_challenges.snake_game.snake.update_STAR_ = (function coding_challenges$snake_game$snake$update_STAR_(scl,food,snake){
return coding_challenges.snake_game.snake.move_forward.call(null,scl,coding_challenges.snake_game.snake.update_tail.call(null,scl,food,snake));
});
coding_challenges.snake_game.snake.draw = (function coding_challenges$snake_game$snake$draw(scl,p__35616){
var map__35627 = p__35616;
var map__35627__$1 = ((((!((map__35627 == null)))?((((map__35627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35627):map__35627);
var snake = map__35627__$1;
var sx = cljs.core.get.call(null,map__35627__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var sy = cljs.core.get.call(null,map__35627__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tail = cljs.core.get.call(null,map__35627__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
quil.core.fill.call(null,(255));

quil.core.rect.call(null,sx,sy,scl,scl);

var seq__35629 = cljs.core.seq.call(null,tail);
var chunk__35630 = null;
var count__35631 = (0);
var i__35632 = (0);
while(true){
if((i__35632 < count__35631)){
var map__35633 = cljs.core._nth.call(null,chunk__35630,i__35632);
var map__35633__$1 = ((((!((map__35633 == null)))?((((map__35633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35633):map__35633);
var y = cljs.core.get.call(null,map__35633__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__35633__$1,new cljs.core.Keyword(null,"x","x",2099068185));
quil.core.fill.call(null,(155));

quil.core.rect.call(null,x,y,scl,scl);

var G__35637 = seq__35629;
var G__35638 = chunk__35630;
var G__35639 = count__35631;
var G__35640 = (i__35632 + (1));
seq__35629 = G__35637;
chunk__35630 = G__35638;
count__35631 = G__35639;
i__35632 = G__35640;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35629);
if(temp__4657__auto__){
var seq__35629__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35629__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__35629__$1);
var G__35641 = cljs.core.chunk_rest.call(null,seq__35629__$1);
var G__35642 = c__7220__auto__;
var G__35643 = cljs.core.count.call(null,c__7220__auto__);
var G__35644 = (0);
seq__35629 = G__35641;
chunk__35630 = G__35642;
count__35631 = G__35643;
i__35632 = G__35644;
continue;
} else {
var map__35635 = cljs.core.first.call(null,seq__35629__$1);
var map__35635__$1 = ((((!((map__35635 == null)))?((((map__35635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35635):map__35635);
var y = cljs.core.get.call(null,map__35635__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__35635__$1,new cljs.core.Keyword(null,"x","x",2099068185));
quil.core.fill.call(null,(155));

quil.core.rect.call(null,x,y,scl,scl);

var G__35645 = cljs.core.next.call(null,seq__35629__$1);
var G__35646 = null;
var G__35647 = (0);
var G__35648 = (0);
seq__35629 = G__35645;
chunk__35630 = G__35646;
count__35631 = G__35647;
i__35632 = G__35648;
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
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,snake,new cljs.core.Keyword(null,"xspeed","xspeed",1490661174),x),new cljs.core.Keyword(null,"yspeed","yspeed",-1471063521),y);
});

//# sourceMappingURL=snake.js.map?rel=1485243283183
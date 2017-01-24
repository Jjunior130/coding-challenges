// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.mitosis.cell');
goog.require('cljs.core');
goog.require('quil.core');
coding_challenges.mitosis.cell.make = (function coding_challenges$mitosis$cell$make(var_args){
var args34603 = [];
var len__7484__auto___34606 = arguments.length;
var i__7485__auto___34607 = (0);
while(true){
if((i__7485__auto___34607 < len__7484__auto___34606)){
args34603.push((arguments[i__7485__auto___34607]));

var G__34608 = (i__7485__auto___34607 + (1));
i__7485__auto___34607 = G__34608;
continue;
} else {
}
break;
}

var G__34605 = args34603.length;
switch (G__34605) {
case 0:
return coding_challenges.mitosis.cell.make.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return coding_challenges.mitosis.cell.make.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34603.length)].join('')));

}
});

coding_challenges.mitosis.cell.make.cljs$core$IFn$_invoke$arity$0 = (function (){
return coding_challenges.mitosis.cell.make.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.call(null,quil.core.width.call(null)),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.random.call(null,quil.core.height.call(null))], null),(60),quil.core.color.call(null,quil.core.random.call(null,(100),(255)),(0),quil.core.random.call(null,(100),(255)),(100)));
});

coding_challenges.mitosis.cell.make.cljs$core$IFn$_invoke$arity$3 = (function (pos,r,c){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null),new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"c","c",-1763192079),c], null);
});

coding_challenges.mitosis.cell.make.cljs$lang$maxFixedArity = 3;

coding_challenges.mitosis.cell.clicked_QMARK_ = (function coding_challenges$mitosis$cell$clicked_QMARK_(p__34610,p__34611){
var map__34618 = p__34610;
var map__34618__$1 = ((((!((map__34618 == null)))?((((map__34618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34618):map__34618);
var click_pos = map__34618__$1;
var mx = cljs.core.get.call(null,map__34618__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var my = cljs.core.get.call(null,map__34618__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__34619 = p__34611;
var map__34619__$1 = ((((!((map__34619 == null)))?((((map__34619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34619):map__34619);
var cell = map__34619__$1;
var map__34620 = cljs.core.get.call(null,map__34619__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var map__34620__$1 = ((((!((map__34620 == null)))?((((map__34620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34620):map__34620);
var cx = cljs.core.get.call(null,map__34620__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var cy = cljs.core.get.call(null,map__34620__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cr = cljs.core.get.call(null,map__34619__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return (quil.core.dist.call(null,cx,cy,mx,my) < cr);
});
coding_challenges.mitosis.cell.mitosis = (function coding_challenges$mitosis$cell$mitosis(p__34624){
var map__34627 = p__34624;
var map__34627__$1 = ((((!((map__34627 == null)))?((((map__34627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34627):map__34627);
var cell = map__34627__$1;
var pos = cljs.core.get.call(null,map__34627__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var r = cljs.core.get.call(null,map__34627__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var c = cljs.core.get.call(null,map__34627__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.mitosis.cell.make.call(null,pos,(0.8 * r),c),coding_challenges.mitosis.cell.make.call(null,pos,(0.8 * r),c)], null);
});
coding_challenges.mitosis.cell.move = (function coding_challenges$mitosis$cell$move(n,cell){
var vel = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.call(null,(- n),n),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.random.call(null,(- n),n)], null);
return cljs.core.update.call(null,cell,new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_,vel));
});
coding_challenges.mitosis.cell.update_STAR_ = (function coding_challenges$mitosis$cell$update_STAR_(cell){
return coding_challenges.mitosis.cell.move.call(null,(5),cell);
});
coding_challenges.mitosis.cell.draw = (function coding_challenges$mitosis$cell$draw(p__34629){
var map__34634 = p__34629;
var map__34634__$1 = ((((!((map__34634 == null)))?((((map__34634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34634):map__34634);
var cell = map__34634__$1;
var map__34635 = cljs.core.get.call(null,map__34634__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var map__34635__$1 = ((((!((map__34635 == null)))?((((map__34635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34635):map__34635);
var x = cljs.core.get.call(null,map__34635__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__34635__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var color = cljs.core.get.call(null,map__34634__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var r = cljs.core.get.call(null,map__34634__$1,new cljs.core.Keyword(null,"r","r",-471384190));
quil.core.no_stroke.call(null);

quil.core.fill.call(null,color);

return quil.core.ellipse.call(null,x,y,r,r);
});

//# sourceMappingURL=cell.js.map?rel=1485242678300
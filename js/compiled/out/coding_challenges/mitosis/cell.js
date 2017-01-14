// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.mitosis.cell');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('com.rpl.specter');
coding_challenges.mitosis.cell.make = (function coding_challenges$mitosis$cell$make(var_args){
var args61425 = [];
var len__26121__auto___61428 = arguments.length;
var i__26122__auto___61429 = (0);
while(true){
if((i__26122__auto___61429 < len__26121__auto___61428)){
args61425.push((arguments[i__26122__auto___61429]));

var G__61430 = (i__26122__auto___61429 + (1));
i__26122__auto___61429 = G__61430;
continue;
} else {
}
break;
}

var G__61427 = args61425.length;
switch (G__61427) {
case 0:
return coding_challenges.mitosis.cell.make.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return coding_challenges.mitosis.cell.make.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61425.length)].join('')));

}
});

coding_challenges.mitosis.cell.make.cljs$core$IFn$_invoke$arity$0 = (function (){
return coding_challenges.mitosis.cell.make.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.call(null,quil.core.width.call(null)),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.random.call(null,quil.core.height.call(null))], null),(60),quil.core.color.call(null,quil.core.random.call(null,(100),(255)),(0),quil.core.random.call(null,(100),(255)),(100)));
});

coding_challenges.mitosis.cell.make.cljs$core$IFn$_invoke$arity$3 = (function (pos,r,c){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null),new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"c","c",-1763192079),c], null);
});

coding_challenges.mitosis.cell.make.cljs$lang$maxFixedArity = 3;

coding_challenges.mitosis.cell.clicked_QMARK_ = (function coding_challenges$mitosis$cell$clicked_QMARK_(p__61432,p__61433){
var map__61440 = p__61432;
var map__61440__$1 = ((((!((map__61440 == null)))?((((map__61440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61440):map__61440);
var click_pos = map__61440__$1;
var mx = cljs.core.get.call(null,map__61440__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var my = cljs.core.get.call(null,map__61440__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__61441 = p__61433;
var map__61441__$1 = ((((!((map__61441 == null)))?((((map__61441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61441):map__61441);
var cell = map__61441__$1;
var map__61442 = cljs.core.get.call(null,map__61441__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var map__61442__$1 = ((((!((map__61442 == null)))?((((map__61442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61442):map__61442);
var cx = cljs.core.get.call(null,map__61442__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var cy = cljs.core.get.call(null,map__61442__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cr = cljs.core.get.call(null,map__61441__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return (quil.core.dist.call(null,cx,cy,mx,my) < cr);
});
coding_challenges.mitosis.cell.mitosis = (function coding_challenges$mitosis$cell$mitosis(p__61446){
var map__61449 = p__61446;
var map__61449__$1 = ((((!((map__61449 == null)))?((((map__61449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61449):map__61449);
var cell = map__61449__$1;
var pos = cljs.core.get.call(null,map__61449__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var r = cljs.core.get.call(null,map__61449__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var c = cljs.core.get.call(null,map__61449__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.mitosis.cell.make.call(null,pos,(0.8 * r),c),coding_challenges.mitosis.cell.make.call(null,pos,(0.8 * r),c)], null);
});
coding_challenges.mitosis.cell.move = (function coding_challenges$mitosis$cell$move(n,cell){
var vel = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.call(null,(- n),n),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.random.call(null,(- n),n)], null);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__30860__auto__ = coding_challenges.mitosis.cell.pathcache61454;
var info__30860__auto____$1 = (((info__30860__auto__ == null))?(function (){var info61455 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),"coding-challenges.mitosis.cell",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.mitosis.cell.pathcache61454 = info61455;

return info61455;
})():info__30860__auto__);
var precompiled61456 = info__30860__auto____$1.precompiled;
var dynamic_QMARK___30861__auto__ = info__30860__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___30861__auto__)){
return precompiled61456.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled61456;
}
})(),cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_,vel),cell);
});
coding_challenges.mitosis.cell.update_STAR_ = (function coding_challenges$mitosis$cell$update_STAR_(cell){
return coding_challenges.mitosis.cell.move.call(null,(5),cell);
});
coding_challenges.mitosis.cell.draw = (function coding_challenges$mitosis$cell$draw(p__61457){
var map__61462 = p__61457;
var map__61462__$1 = ((((!((map__61462 == null)))?((((map__61462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61462):map__61462);
var cell = map__61462__$1;
var map__61463 = cljs.core.get.call(null,map__61462__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var map__61463__$1 = ((((!((map__61463 == null)))?((((map__61463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61463):map__61463);
var x = cljs.core.get.call(null,map__61463__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__61463__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var color = cljs.core.get.call(null,map__61462__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var r = cljs.core.get.call(null,map__61462__$1,new cljs.core.Keyword(null,"r","r",-471384190));
quil.core.no_stroke.call(null);

quil.core.fill.call(null,color);

return quil.core.ellipse.call(null,x,y,r,r);
});

//# sourceMappingURL=cell.js.map?rel=1484333401771
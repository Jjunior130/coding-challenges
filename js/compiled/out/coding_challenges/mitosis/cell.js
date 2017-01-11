// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.mitosis.cell');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('com.rpl.specter');
coding_challenges.mitosis.cell.make = (function coding_challenges$mitosis$cell$make(var_args){
var args34745 = [];
var len__7484__auto___34748 = arguments.length;
var i__7485__auto___34749 = (0);
while(true){
if((i__7485__auto___34749 < len__7484__auto___34748)){
args34745.push((arguments[i__7485__auto___34749]));

var G__34750 = (i__7485__auto___34749 + (1));
i__7485__auto___34749 = G__34750;
continue;
} else {
}
break;
}

var G__34747 = args34745.length;
switch (G__34747) {
case 0:
return coding_challenges.mitosis.cell.make.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return coding_challenges.mitosis.cell.make.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34745.length)].join('')));

}
});

coding_challenges.mitosis.cell.make.cljs$core$IFn$_invoke$arity$0 = (function (){
return coding_challenges.mitosis.cell.make.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.call(null,quil.core.width.call(null)),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.random.call(null,quil.core.height.call(null))], null),(60),quil.core.color.call(null,quil.core.random.call(null,(100),(255)),(0),quil.core.random.call(null,(100),(255)),(100)));
});

coding_challenges.mitosis.cell.make.cljs$core$IFn$_invoke$arity$3 = (function (pos,r,c){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null),new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"c","c",-1763192079),c], null);
});

coding_challenges.mitosis.cell.make.cljs$lang$maxFixedArity = 3;

coding_challenges.mitosis.cell.clicked_QMARK_ = (function coding_challenges$mitosis$cell$clicked_QMARK_(p__34752,p__34753){
var map__34760 = p__34752;
var map__34760__$1 = ((((!((map__34760 == null)))?((((map__34760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34760):map__34760);
var click_pos = map__34760__$1;
var mx = cljs.core.get.call(null,map__34760__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var my = cljs.core.get.call(null,map__34760__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__34761 = p__34753;
var map__34761__$1 = ((((!((map__34761 == null)))?((((map__34761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34761):map__34761);
var cell = map__34761__$1;
var map__34762 = cljs.core.get.call(null,map__34761__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var map__34762__$1 = ((((!((map__34762 == null)))?((((map__34762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34762):map__34762);
var cx = cljs.core.get.call(null,map__34762__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var cy = cljs.core.get.call(null,map__34762__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return (quil.core.dist.call(null,cx,cy,mx,my) < new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(cell));
});
coding_challenges.mitosis.cell.mitosis = (function coding_challenges$mitosis$cell$mitosis(p__34766){
var map__34769 = p__34766;
var map__34769__$1 = ((((!((map__34769 == null)))?((((map__34769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34769):map__34769);
var cell = map__34769__$1;
var pos = cljs.core.get.call(null,map__34769__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var r = cljs.core.get.call(null,map__34769__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var c = cljs.core.get.call(null,map__34769__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.mitosis.cell.make.call(null,pos,(0.8 * r),c),coding_challenges.mitosis.cell.make.call(null,pos,(0.8 * r),c)], null);
});
coding_challenges.mitosis.cell.move = (function coding_challenges$mitosis$cell$move(n,cell){
var vel = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.call(null,(- n),n),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.random.call(null,(- n),n)], null);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__12233__auto__ = coding_challenges.mitosis.cell.pathcache34774;
var info__12233__auto____$1 = (((info__12233__auto__ == null))?(function (){var info34775 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),"coding-challenges.mitosis.cell",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
coding_challenges.mitosis.cell.pathcache34774 = info34775;

return info34775;
})():info__12233__auto__);
var precompiled34776 = info__12233__auto____$1.precompiled;
var dynamic_QMARK___12234__auto__ = info__12233__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___12234__auto__)){
return precompiled34776.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled34776;
}
})(),cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_,vel),cell);
});
coding_challenges.mitosis.cell.update_STAR_ = (function coding_challenges$mitosis$cell$update_STAR_(cell){
return coding_challenges.mitosis.cell.move.call(null,(5),cell);
});
coding_challenges.mitosis.cell.draw = (function coding_challenges$mitosis$cell$draw(cell){
quil.core.no_stroke.call(null);

quil.core.fill.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(cell));

return quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cell)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cell)),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(cell));
});

//# sourceMappingURL=cell.js.map?rel=1484163016647
// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.maze_generator.cell');
goog.require('cljs.core');
goog.require('quil.core');
coding_challenges.maze_generator.cell.make = (function coding_challenges$maze_generator$cell$make(i,j){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null),new cljs.core.Keyword(null,"i","i",-1386841315),i,new cljs.core.Keyword(null,"j","j",-1397974765),j,new cljs.core.Keyword(null,"walls","walls",-268788818),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),null,new cljs.core.Keyword(null,"top","top",-1856271961),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null)], null);
});
coding_challenges.maze_generator.cell.index = (function coding_challenges$maze_generator$cell$index(grid,i,j){
return grid.call(null,i,cljs.core.constantly.call(null,null)).call(null,j,null);
});
coding_challenges.maze_generator.cell.check_neighbors = (function coding_challenges$maze_generator$cell$check_neighbors(grid,p__35050){
var map__35062 = p__35050;
var map__35062__$1 = ((((!((map__35062 == null)))?((((map__35062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35062):map__35062);
var ci = cljs.core.get.call(null,map__35062__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var cj = cljs.core.get.call(null,map__35062__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
var map__35064 = coding_challenges.maze_generator.cell.index.call(null,grid,ci,(cj - (1)));
var map__35064__$1 = ((((!((map__35064 == null)))?((((map__35064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35064):map__35064);
var top = map__35064__$1;
var top_visited_QMARK_ = cljs.core.get.call(null,map__35064__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875));
var map__35065 = coding_challenges.maze_generator.cell.index.call(null,grid,(ci + (1)),cj);
var map__35065__$1 = ((((!((map__35065 == null)))?((((map__35065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35065):map__35065);
var right = map__35065__$1;
var right_visited_QMARK_ = cljs.core.get.call(null,map__35065__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875));
var map__35066 = coding_challenges.maze_generator.cell.index.call(null,grid,ci,(cj + (1)));
var map__35066__$1 = ((((!((map__35066 == null)))?((((map__35066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35066):map__35066);
var bottom = map__35066__$1;
var bottom_visited_QMARK_ = cljs.core.get.call(null,map__35066__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875));
var map__35067 = coding_challenges.maze_generator.cell.index.call(null,grid,(ci - (1)),cj);
var map__35067__$1 = ((((!((map__35067 == null)))?((((map__35067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35067):map__35067);
var left = map__35067__$1;
var left_visited_QMARK_ = cljs.core.get.call(null,map__35067__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875));
var neighbors = (function (){var G__35072 = cljs.core.PersistentVector.EMPTY;
var G__35072__$1 = (cljs.core.truth_((function (){var and__6397__auto__ = top;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.not.call(null,top_visited_QMARK_);
} else {
return and__6397__auto__;
}
})())?cljs.core.conj.call(null,G__35072,top):G__35072);
var G__35072__$2 = (cljs.core.truth_((function (){var and__6397__auto__ = right;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.not.call(null,right_visited_QMARK_);
} else {
return and__6397__auto__;
}
})())?cljs.core.conj.call(null,G__35072__$1,right):G__35072__$1);
var G__35072__$3 = (cljs.core.truth_((function (){var and__6397__auto__ = bottom;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.not.call(null,bottom_visited_QMARK_);
} else {
return and__6397__auto__;
}
})())?cljs.core.conj.call(null,G__35072__$2,bottom):G__35072__$2);
if(cljs.core.truth_((function (){var and__6397__auto__ = left;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.not.call(null,left_visited_QMARK_);
} else {
return and__6397__auto__;
}
})())){
return cljs.core.conj.call(null,G__35072__$3,left);
} else {
return G__35072__$3;
}
})();
if(cljs.core.seq.call(null,neighbors)){
return cljs.core.rand_nth.call(null,neighbors);
} else {
return null;
}
});
coding_challenges.maze_generator.cell.update_STAR_ = (function coding_challenges$maze_generator$cell$update_STAR_(cell){
return null;
});
coding_challenges.maze_generator.cell.highlight = (function coding_challenges$maze_generator$cell$highlight(w,p__35073){
var map__35076 = p__35073;
var map__35076__$1 = ((((!((map__35076 == null)))?((((map__35076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35076):map__35076);
var cell = map__35076__$1;
var i = cljs.core.get.call(null,map__35076__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var j = cljs.core.get.call(null,map__35076__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
quil.core.no_stroke.call(null);

quil.core.fill.call(null,(0),(0),(255),(100));

var x = (i * w);
var y = (j * w);
return quil.core.rect.call(null,x,y,w,w);
});
coding_challenges.maze_generator.cell.draw = (function coding_challenges$maze_generator$cell$draw(w,p__35078){
var map__35081 = p__35078;
var map__35081__$1 = ((((!((map__35081 == null)))?((((map__35081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35081):map__35081);
var cell = map__35081__$1;
var i = cljs.core.get.call(null,map__35081__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var j = cljs.core.get.call(null,map__35081__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
var walls = cljs.core.get.call(null,map__35081__$1,new cljs.core.Keyword(null,"walls","walls",-268788818));
var visited_QMARK_ = cljs.core.get.call(null,map__35081__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875));
quil.core.stroke.call(null,(255));

var x = (i * w);
var y = (j * w);
if(cljs.core.truth_(walls.call(null,new cljs.core.Keyword(null,"top","top",-1856271961)))){
quil.core.line.call(null,x,y,(x + w),y);
} else {
}

if(cljs.core.truth_(walls.call(null,new cljs.core.Keyword(null,"right","right",-452581833)))){
quil.core.line.call(null,(x + w),y,(x + w),(y + w));
} else {
}

if(cljs.core.truth_(walls.call(null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018)))){
quil.core.line.call(null,(x + w),(y + w),x,(y + w));
} else {
}

if(cljs.core.truth_(walls.call(null,new cljs.core.Keyword(null,"left","left",-399115937)))){
quil.core.line.call(null,x,(y + w),x,y);
} else {
}

if(cljs.core.truth_(visited_QMARK_)){
quil.core.no_stroke.call(null);

quil.core.fill.call(null,(255),(0),(255),(100));

return quil.core.rect.call(null,x,y,w,w);
} else {
return null;
}
});

//# sourceMappingURL=cell.js.map?rel=1485242679017
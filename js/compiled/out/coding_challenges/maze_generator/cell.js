// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.maze_generator.cell');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('coding_challenges.util');
goog.require('com.rpl.specter');
coding_challenges.maze_generator.cell.make = (function coding_challenges$maze_generator$cell$make(i,j){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null),new cljs.core.Keyword(null,"i","i",-1386841315),i,new cljs.core.Keyword(null,"j","j",-1397974765),j,new cljs.core.Keyword(null,"walls","walls",-268788818),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),null,new cljs.core.Keyword(null,"top","top",-1856271961),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null)], null);
});
coding_challenges.maze_generator.cell.path = (function coding_challenges$maze_generator$cell$path(i,j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.keypath.call(null,i),com.rpl.specter.keypath.call(null,j)], null);
});
coding_challenges.maze_generator.cell.check_neighbors = (function coding_challenges$maze_generator$cell$check_neighbors(grid,p__63421){
var map__63436 = p__63421;
var map__63436__$1 = ((((!((map__63436 == null)))?((((map__63436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63436):map__63436);
var cell = map__63436__$1;
var i = cljs.core.get.call(null,map__63436__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var j = cljs.core.get.call(null,map__63436__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
return coding_challenges.util.u.call(null,grid,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one.call(null,coding_challenges.maze_generator.cell.path.call(null,i,(j - (1)))),com.rpl.specter.collect_one.call(null,coding_challenges.maze_generator.cell.path.call(null,(i + (1)),j)),com.rpl.specter.collect_one.call(null,coding_challenges.maze_generator.cell.path.call(null,i,(j + (1)))),com.rpl.specter.collect_one.call(null,coding_challenges.maze_generator.cell.path.call(null,(i - (1)),j))], null),((function (map__63436,map__63436__$1,cell,i,j){
return (function (p__63438,p__63439,p__63440,p__63441){
var map__63442 = p__63438;
var map__63442__$1 = ((((!((map__63442 == null)))?((((map__63442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63442):map__63442);
var top = map__63442__$1;
var top_visited_QMARK_ = cljs.core.get.call(null,map__63442__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875));
var map__63443 = p__63439;
var map__63443__$1 = ((((!((map__63443 == null)))?((((map__63443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63443):map__63443);
var right = map__63443__$1;
var right_visited_QMARK_ = cljs.core.get.call(null,map__63443__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875));
var map__63444 = p__63440;
var map__63444__$1 = ((((!((map__63444 == null)))?((((map__63444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63444):map__63444);
var bottom = map__63444__$1;
var bottom_visited_QMARK_ = cljs.core.get.call(null,map__63444__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875));
var map__63445 = p__63441;
var map__63445__$1 = ((((!((map__63445 == null)))?((((map__63445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63445):map__63445);
var left = map__63445__$1;
var left_visited_QMARK_ = cljs.core.get.call(null,map__63445__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875));
var neighbors = coding_challenges.util.cond__GT_mt.call(null,cljs.core.PersistentVector.EMPTY,(function (){var and__25034__auto__ = top;
if(cljs.core.truth_(and__25034__auto__)){
return cljs.core.not.call(null,top_visited_QMARK_);
} else {
return and__25034__auto__;
}
})(),coding_challenges.util.u.call(null,com.rpl.specter.STAY,((function (map__63442,map__63442__$1,top,top_visited_QMARK_,map__63443,map__63443__$1,right,right_visited_QMARK_,map__63444,map__63444__$1,bottom,bottom_visited_QMARK_,map__63445,map__63445__$1,left,left_visited_QMARK_,map__63436,map__63436__$1,cell,i,j){
return (function (p1__63417_SHARP_){
return cljs.core.conj.call(null,p1__63417_SHARP_,top);
});})(map__63442,map__63442__$1,top,top_visited_QMARK_,map__63443,map__63443__$1,right,right_visited_QMARK_,map__63444,map__63444__$1,bottom,bottom_visited_QMARK_,map__63445,map__63445__$1,left,left_visited_QMARK_,map__63436,map__63436__$1,cell,i,j))
),(function (){var and__25034__auto__ = right;
if(cljs.core.truth_(and__25034__auto__)){
return cljs.core.not.call(null,right_visited_QMARK_);
} else {
return and__25034__auto__;
}
})(),coding_challenges.util.u.call(null,com.rpl.specter.STAY,((function (map__63442,map__63442__$1,top,top_visited_QMARK_,map__63443,map__63443__$1,right,right_visited_QMARK_,map__63444,map__63444__$1,bottom,bottom_visited_QMARK_,map__63445,map__63445__$1,left,left_visited_QMARK_,map__63436,map__63436__$1,cell,i,j){
return (function (p1__63418_SHARP_){
return cljs.core.conj.call(null,p1__63418_SHARP_,right);
});})(map__63442,map__63442__$1,top,top_visited_QMARK_,map__63443,map__63443__$1,right,right_visited_QMARK_,map__63444,map__63444__$1,bottom,bottom_visited_QMARK_,map__63445,map__63445__$1,left,left_visited_QMARK_,map__63436,map__63436__$1,cell,i,j))
),(function (){var and__25034__auto__ = bottom;
if(cljs.core.truth_(and__25034__auto__)){
return cljs.core.not.call(null,bottom_visited_QMARK_);
} else {
return and__25034__auto__;
}
})(),coding_challenges.util.u.call(null,com.rpl.specter.STAY,((function (map__63442,map__63442__$1,top,top_visited_QMARK_,map__63443,map__63443__$1,right,right_visited_QMARK_,map__63444,map__63444__$1,bottom,bottom_visited_QMARK_,map__63445,map__63445__$1,left,left_visited_QMARK_,map__63436,map__63436__$1,cell,i,j){
return (function (p1__63419_SHARP_){
return cljs.core.conj.call(null,p1__63419_SHARP_,bottom);
});})(map__63442,map__63442__$1,top,top_visited_QMARK_,map__63443,map__63443__$1,right,right_visited_QMARK_,map__63444,map__63444__$1,bottom,bottom_visited_QMARK_,map__63445,map__63445__$1,left,left_visited_QMARK_,map__63436,map__63436__$1,cell,i,j))
),(function (){var and__25034__auto__ = left;
if(cljs.core.truth_(and__25034__auto__)){
return cljs.core.not.call(null,left_visited_QMARK_);
} else {
return and__25034__auto__;
}
})(),coding_challenges.util.u.call(null,com.rpl.specter.STAY,((function (map__63442,map__63442__$1,top,top_visited_QMARK_,map__63443,map__63443__$1,right,right_visited_QMARK_,map__63444,map__63444__$1,bottom,bottom_visited_QMARK_,map__63445,map__63445__$1,left,left_visited_QMARK_,map__63436,map__63436__$1,cell,i,j){
return (function (p1__63420_SHARP_){
return cljs.core.conj.call(null,p1__63420_SHARP_,left);
});})(map__63442,map__63442__$1,top,top_visited_QMARK_,map__63443,map__63443__$1,right,right_visited_QMARK_,map__63444,map__63444__$1,bottom,bottom_visited_QMARK_,map__63445,map__63445__$1,left,left_visited_QMARK_,map__63436,map__63436__$1,cell,i,j))
));
if(cljs.core.seq.call(null,neighbors)){
return cljs.core.rand_nth.call(null,neighbors);
} else {
return null;
}
});})(map__63436,map__63436__$1,cell,i,j))
);
});
coding_challenges.maze_generator.cell.update_STAR_ = (function coding_challenges$maze_generator$cell$update_STAR_(cell){
return null;
});
coding_challenges.maze_generator.cell.highlight = (function coding_challenges$maze_generator$cell$highlight(w,p__63450){
var map__63453 = p__63450;
var map__63453__$1 = ((((!((map__63453 == null)))?((((map__63453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63453):map__63453);
var cell = map__63453__$1;
var i = cljs.core.get.call(null,map__63453__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var j = cljs.core.get.call(null,map__63453__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
quil.core.no_stroke.call(null);

quil.core.fill.call(null,(0),(0),(255),(100));

var x = (i * w);
var y = (j * w);
return quil.core.rect.call(null,x,y,w,w);
});
coding_challenges.maze_generator.cell.draw = (function coding_challenges$maze_generator$cell$draw(w,p__63455){
var map__63458 = p__63455;
var map__63458__$1 = ((((!((map__63458 == null)))?((((map__63458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63458):map__63458);
var cell = map__63458__$1;
var i = cljs.core.get.call(null,map__63458__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var j = cljs.core.get.call(null,map__63458__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
var walls = cljs.core.get.call(null,map__63458__$1,new cljs.core.Keyword(null,"walls","walls",-268788818));
var visited_QMARK_ = cljs.core.get.call(null,map__63458__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875));
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

//# sourceMappingURL=cell.js.map?rel=1484810490679
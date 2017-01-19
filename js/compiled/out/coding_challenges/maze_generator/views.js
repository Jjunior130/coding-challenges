// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.maze_generator.views');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('reagent.core');
goog.require('coding_challenges.maze_generator.cell');
goog.require('re_com.core');
goog.require('quil.core');
goog.require('re_frame.core');
goog.require('quil.middleware');
goog.require('coding_challenges.util');
coding_challenges.maze_generator.views.w = (600);
coding_challenges.maze_generator.views.h = (600);
coding_challenges.maze_generator.views.setup = (function coding_challenges$maze_generator$views$setup(){
return coding_challenges.util.u.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"w","w",354169001),(40)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"w","w",354169001)),new cljs.core.Keyword(null,"cols","cols",-1914801295)], null),(function (p1__63589_SHARP_){
return quil.core.floor.call(null,(quil.core.width.call(null) / p1__63589_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"w","w",354169001)),new cljs.core.Keyword(null,"rows","rows",850049680)], null),(function (p1__63590_SHARP_){
return quil.core.floor.call(null,(quil.core.height.call(null) / p1__63590_SHARP_));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"cols","cols",-1914801295)),com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"rows","rows",850049680)),new cljs.core.Keyword(null,"grid","grid",402978600)], null),cljs.core.comp.call(null,(function (grid_of_cells){
return coding_challenges.util.mt.call(null,grid_of_cells,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.FIRST,com.rpl.specter.FIRST,coding_challenges.util.a.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),true,new cljs.core.Keyword(null,"visited","visited",-1610853875),true)], null));
}),(function (cols,rows){
var empty_grid = cljs.core.vec.call(null,cljs.core.repeatedly.call(null,cols,cljs.core.partial.call(null,cljs.core.vec,cljs.core.repeat.call(null,rows,null))));
return cljs.core.reduce.call(null,((function (empty_grid){
return (function (p1__63592_SHARP_,p2__63591_SHARP_){
return p2__63591_SHARP_.call(null,p1__63592_SHARP_);
});})(empty_grid))
,empty_grid,(function (){var iter__25826__auto__ = ((function (empty_grid){
return (function coding_challenges$maze_generator$views$setup_$_iter__63600(s__63601){
return (new cljs.core.LazySeq(null,((function (empty_grid){
return (function (){
var s__63601__$1 = s__63601;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__63601__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__25822__auto__ = ((function (s__63601__$1,i,xs__5205__auto__,temp__4657__auto__,empty_grid){
return (function coding_challenges$maze_generator$views$setup_$_iter__63600_$_iter__63602(s__63603){
return (new cljs.core.LazySeq(null,((function (s__63601__$1,i,xs__5205__auto__,temp__4657__auto__,empty_grid){
return (function (){
var s__63603__$1 = s__63603;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__63603__$1);
if(temp__4657__auto____$1){
var s__63603__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__63603__$2)){
var c__25824__auto__ = cljs.core.chunk_first.call(null,s__63603__$2);
var size__25825__auto__ = cljs.core.count.call(null,c__25824__auto__);
var b__63605 = cljs.core.chunk_buffer.call(null,size__25825__auto__);
if((function (){var i__63604 = (0);
while(true){
if((i__63604 < size__25825__auto__)){
var j = cljs.core._nth.call(null,c__25824__auto__,i__63604);
cljs.core.chunk_append.call(null,b__63605,((function (i__63604,s__63601__$1,j,c__25824__auto__,size__25825__auto__,b__63605,s__63603__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,empty_grid){
return (function (p1__63593_SHARP_){
return coding_challenges.util.a.call(null,p1__63593_SHARP_,coding_challenges.maze_generator.cell.path.call(null,i,j),coding_challenges.maze_generator.cell.make.call(null,i,j));
});})(i__63604,s__63601__$1,j,c__25824__auto__,size__25825__auto__,b__63605,s__63603__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,empty_grid))
);

var G__63606 = (i__63604 + (1));
i__63604 = G__63606;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63605),coding_challenges$maze_generator$views$setup_$_iter__63600_$_iter__63602.call(null,cljs.core.chunk_rest.call(null,s__63603__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63605),null);
}
} else {
var j = cljs.core.first.call(null,s__63603__$2);
return cljs.core.cons.call(null,((function (s__63601__$1,j,s__63603__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,empty_grid){
return (function (p1__63593_SHARP_){
return coding_challenges.util.a.call(null,p1__63593_SHARP_,coding_challenges.maze_generator.cell.path.call(null,i,j),coding_challenges.maze_generator.cell.make.call(null,i,j));
});})(s__63601__$1,j,s__63603__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,empty_grid))
,coding_challenges$maze_generator$views$setup_$_iter__63600_$_iter__63602.call(null,cljs.core.rest.call(null,s__63603__$2)));
}
} else {
return null;
}
break;
}
});})(s__63601__$1,i,xs__5205__auto__,temp__4657__auto__,empty_grid))
,null,null));
});})(s__63601__$1,i,xs__5205__auto__,temp__4657__auto__,empty_grid))
;
var fs__25823__auto__ = cljs.core.seq.call(null,iterys__25822__auto__.call(null,cljs.core.range.call(null,rows)));
if(fs__25823__auto__){
return cljs.core.concat.call(null,fs__25823__auto__,coding_challenges$maze_generator$views$setup_$_iter__63600.call(null,cljs.core.rest.call(null,s__63601__$1)));
} else {
var G__63607 = cljs.core.rest.call(null,s__63601__$1);
s__63601__$1 = G__63607;
continue;
}
} else {
return null;
}
break;
}
});})(empty_grid))
,null,null));
});})(empty_grid))
;
return iter__25826__auto__.call(null,cljs.core.range.call(null,cols));
})());
})));
});
coding_challenges.maze_generator.views.remove_wall = (function coding_challenges$maze_generator$views$remove_wall(previous_current_path,previous_wall,next_current_path,next_wall){
return coding_challenges.util.u.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [previous_current_path,new cljs.core.Keyword(null,"walls","walls",-268788818)], null),(function (p1__63608_SHARP_){
return cljs.core.disj.call(null,p1__63608_SHARP_,previous_wall);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_current_path,new cljs.core.Keyword(null,"walls","walls",-268788818)], null),(function (p1__63609_SHARP_){
return cljs.core.disj.call(null,p1__63609_SHARP_,next_wall);
}));
});
coding_challenges.maze_generator.views.remove_walls = (function coding_challenges$maze_generator$views$remove_walls(p__63610,p__63611,grid){
var map__63616 = p__63610;
var map__63616__$1 = ((((!((map__63616 == null)))?((((map__63616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63616):map__63616);
var ci = cljs.core.get.call(null,map__63616__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var cj = cljs.core.get.call(null,map__63616__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
var map__63617 = p__63611;
var map__63617__$1 = ((((!((map__63617 == null)))?((((map__63617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63617):map__63617);
var ni = cljs.core.get.call(null,map__63617__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var nj = cljs.core.get.call(null,map__63617__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
var x = (ci - ni);
var y = (cj - nj);
var previous_current_path = coding_challenges.maze_generator.cell.path.call(null,ci,cj);
var next_current_path = coding_challenges.maze_generator.cell.path.call(null,ni,nj);
return coding_challenges.util.cond__GT_mt.call(null,grid,cljs.core._EQ_.call(null,x,(1)),coding_challenges.maze_generator.views.remove_wall.call(null,previous_current_path,new cljs.core.Keyword(null,"left","left",-399115937),next_current_path,new cljs.core.Keyword(null,"right","right",-452581833)),cljs.core._EQ_.call(null,x,(-1)),coding_challenges.maze_generator.views.remove_wall.call(null,previous_current_path,new cljs.core.Keyword(null,"right","right",-452581833),next_current_path,new cljs.core.Keyword(null,"left","left",-399115937)),cljs.core._EQ_.call(null,y,(1)),coding_challenges.maze_generator.views.remove_wall.call(null,previous_current_path,new cljs.core.Keyword(null,"top","top",-1856271961),next_current_path,new cljs.core.Keyword(null,"bottom","bottom",-1550509018)),cljs.core._EQ_.call(null,y,(-1)),coding_challenges.maze_generator.views.remove_wall.call(null,previous_current_path,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),next_current_path,new cljs.core.Keyword(null,"top","top",-1856271961)));
});
coding_challenges.maze_generator.views.current_path = com.rpl.specter.comp_paths.call(null,com.rpl.specter.ALL,com.rpl.specter.ALL,com.rpl.specter.pred.call(null,new cljs.core.Keyword(null,"current","current",-1088038603)));
coding_challenges.maze_generator.views.update_STAR_ = (function coding_challenges$maze_generator$views$update_STAR_(p__63621){
var map__63628 = p__63621;
var map__63628__$1 = ((((!((map__63628 == null)))?((((map__63628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63628):map__63628);
var sketch = map__63628__$1;
var grid = cljs.core.get.call(null,map__63628__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var stack = cljs.core.get.call(null,map__63628__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var map__63630 = com.rpl.specter.compiled_select_one.call(null,coding_challenges.maze_generator.views.current_path,grid);
var map__63630__$1 = ((((!((map__63630 == null)))?((((map__63630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63630):map__63630);
var current = map__63630__$1;
var ci = cljs.core.get.call(null,map__63630__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var cj = cljs.core.get.call(null,map__63630__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
var previous_current_path = coding_challenges.maze_generator.cell.path.call(null,ci,cj);
var map__63631 = coding_challenges.maze_generator.cell.check_neighbors.call(null,grid,current);
var map__63631__$1 = ((((!((map__63631 == null)))?((((map__63631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63631):map__63631);
var nxt = map__63631__$1;
var ni = cljs.core.get.call(null,map__63631__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var nj = cljs.core.get.call(null,map__63631__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
var next_current_path = coding_challenges.maze_generator.cell.path.call(null,ni,nj);
return coding_challenges.util.cond_mt.call(null,sketch,nxt,com.rpl.specter.multi_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),com.rpl.specter.multi_path.call(null,coding_challenges.util.a.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.maze_generator.views.current_path,new cljs.core.Keyword(null,"current","current",-1088038603)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_current_path,coding_challenges.util.a.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),true,new cljs.core.Keyword(null,"visited","visited",-1610853875),true)], null),coding_challenges.util.u.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one.call(null,previous_current_path),com.rpl.specter.collect_one.call(null,next_current_path)], null),coding_challenges.maze_generator.views.remove_walls))], null),coding_challenges.util.u.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930),((function (map__63630,map__63630__$1,current,ci,cj,previous_current_path,map__63631,map__63631__$1,nxt,ni,nj,next_current_path,map__63628,map__63628__$1,sketch,grid,stack){
return (function (p1__63620_SHARP_){
return cljs.core.conj.call(null,p1__63620_SHARP_,previous_current_path);
});})(map__63630,map__63630__$1,current,ci,cj,previous_current_path,map__63631,map__63631__$1,nxt,ni,nj,next_current_path,map__63628,map__63628__$1,sketch,grid,stack))
)),cljs.core.seq.call(null,stack),com.rpl.specter.multi_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),coding_challenges.util.a.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.maze_generator.views.current_path,new cljs.core.Keyword(null,"current","current",-1088038603)], null),false,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,stack),new cljs.core.Keyword(null,"current","current",-1088038603)], null),true)], null),coding_challenges.util.u.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop)),new cljs.core.Keyword(null,"else","else",-1508377146),coding_challenges.util.PASS);
});
coding_challenges.maze_generator.views.draw = (function coding_challenges$maze_generator$views$draw(p__63634){
var map__63641 = p__63634;
var map__63641__$1 = ((((!((map__63641 == null)))?((((map__63641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63641):map__63641);
var sketch = map__63641__$1;
var grid = cljs.core.get.call(null,map__63641__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var w = cljs.core.get.call(null,map__63641__$1,new cljs.core.Keyword(null,"w","w",354169001));
quil.core.background.call(null,(51));

var seq__63643_63647 = cljs.core.seq.call(null,cljs.core.flatten.call(null,grid));
var chunk__63644_63648 = null;
var count__63645_63649 = (0);
var i__63646_63650 = (0);
while(true){
if((i__63646_63650 < count__63645_63649)){
var cell_63651 = cljs.core._nth.call(null,chunk__63644_63648,i__63646_63650);
coding_challenges.maze_generator.cell.draw.call(null,w,cell_63651);

var G__63652 = seq__63643_63647;
var G__63653 = chunk__63644_63648;
var G__63654 = count__63645_63649;
var G__63655 = (i__63646_63650 + (1));
seq__63643_63647 = G__63652;
chunk__63644_63648 = G__63653;
count__63645_63649 = G__63654;
i__63646_63650 = G__63655;
continue;
} else {
var temp__4657__auto___63656 = cljs.core.seq.call(null,seq__63643_63647);
if(temp__4657__auto___63656){
var seq__63643_63657__$1 = temp__4657__auto___63656;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63643_63657__$1)){
var c__25857__auto___63658 = cljs.core.chunk_first.call(null,seq__63643_63657__$1);
var G__63659 = cljs.core.chunk_rest.call(null,seq__63643_63657__$1);
var G__63660 = c__25857__auto___63658;
var G__63661 = cljs.core.count.call(null,c__25857__auto___63658);
var G__63662 = (0);
seq__63643_63647 = G__63659;
chunk__63644_63648 = G__63660;
count__63645_63649 = G__63661;
i__63646_63650 = G__63662;
continue;
} else {
var cell_63663 = cljs.core.first.call(null,seq__63643_63657__$1);
coding_challenges.maze_generator.cell.draw.call(null,w,cell_63663);

var G__63664 = cljs.core.next.call(null,seq__63643_63657__$1);
var G__63665 = null;
var G__63666 = (0);
var G__63667 = (0);
seq__63643_63647 = G__63664;
chunk__63644_63648 = G__63665;
count__63645_63649 = G__63666;
i__63646_63650 = G__63667;
continue;
}
} else {
}
}
break;
}

return coding_challenges.maze_generator.cell.highlight.call(null,w,com.rpl.specter.compiled_select_one.call(null,coding_challenges.maze_generator.views.current_path,grid));
});
coding_challenges.maze_generator.views.maze_generator_sketch = (function coding_challenges$maze_generator$views$maze_generator_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"maze-generator",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.maze_generator.views.update_STAR_))?(function() { 
var G__63668__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.maze_generator.views.update_STAR_,args);
};
var G__63668 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63669__i = 0, G__63669__a = new Array(arguments.length -  0);
while (G__63669__i < G__63669__a.length) {G__63669__a[G__63669__i] = arguments[G__63669__i + 0]; ++G__63669__i;}
  args = new cljs.core.IndexedSeq(G__63669__a,0);
} 
return G__63668__delegate.call(this,args);};
G__63668.cljs$lang$maxFixedArity = 0;
G__63668.cljs$lang$applyTo = (function (arglist__63670){
var args = cljs.core.seq(arglist__63670);
return G__63668__delegate(args);
});
G__63668.cljs$core$IFn$_invoke$arity$variadic = G__63668__delegate;
return G__63668;
})()
:coding_challenges.maze_generator.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.maze_generator.views.w,coding_challenges.maze_generator.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.maze_generator.views.setup))?(function() { 
var G__63671__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.maze_generator.views.setup,args);
};
var G__63671 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63672__i = 0, G__63672__a = new Array(arguments.length -  0);
while (G__63672__i < G__63672__a.length) {G__63672__a[G__63672__i] = arguments[G__63672__i + 0]; ++G__63672__i;}
  args = new cljs.core.IndexedSeq(G__63672__a,0);
} 
return G__63671__delegate.call(this,args);};
G__63671.cljs$lang$maxFixedArity = 0;
G__63671.cljs$lang$applyTo = (function (arglist__63673){
var args = cljs.core.seq(arglist__63673);
return G__63671__delegate(args);
});
G__63671.cljs$core$IFn$_invoke$arity$variadic = G__63671__delegate;
return G__63671;
})()
:coding_challenges.maze_generator.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.maze_generator.views.draw))?(function() { 
var G__63674__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.maze_generator.views.draw,args);
};
var G__63674 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63675__i = 0, G__63675__a = new Array(arguments.length -  0);
while (G__63675__i < G__63675__a.length) {G__63675__a[G__63675__i] = arguments[G__63675__i + 0]; ++G__63675__i;}
  args = new cljs.core.IndexedSeq(G__63675__a,0);
} 
return G__63674__delegate.call(this,args);};
G__63674.cljs$lang$maxFixedArity = 0;
G__63674.cljs$lang$applyTo = (function (arglist__63676){
var args = cljs.core.seq(arglist__63676);
return G__63674__delegate(args);
});
G__63674.cljs$core$IFn$_invoke$arity$variadic = G__63674__delegate;
return G__63674;
})()
:coding_challenges.maze_generator.views.draw));
});
goog.exportSymbol('coding_challenges.maze_generator.views.maze_generator_sketch', coding_challenges.maze_generator.views.maze_generator_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__29727__29728__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__29727__29728__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.maze_generator.views.maze_generator_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"maze-generator"], null));
}
coding_challenges.maze_generator.views.view = (function coding_challenges$maze_generator$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){var code = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-one","select-one",1322686564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze-generator","maze-generator",1376770988),new cljs.core.Keyword(null,"code","code",1586293142)], null)], null));
return ((function (code){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var code__$1 = (function (){var or__25046__auto__ = cljs.core.deref.call(null,code);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return new cljs.core.Keyword(null,"sketch","sketch",465948709);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Maze generator demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#maze-generator","canvas#maze-generator",437156800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.maze_generator.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.maze_generator.views.h], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sketch","sketch",465948709),new cljs.core.Keyword(null,"label","label",1718410804),"Sketch"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"label","label",1718410804),"Cell"], null)], null),new cljs.core.Keyword(null,"model","model",331153215),code__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (code__$1,code){
return (function (p1__63677_SHARP_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze-generator","maze-generator",1376770988),new cljs.core.Keyword(null,"code","code",1586293142)], null),p1__63677_SHARP_], null)], null));

var seq__63683 = cljs.core.seq.call(null,document.querySelectorAll("code"));
var chunk__63684 = null;
var count__63685 = (0);
var i__63686 = (0);
while(true){
if((i__63686 < count__63685)){
var x = cljs.core._nth.call(null,chunk__63684,i__63686);
hljs.highlightBlock(x);

var G__63688 = seq__63683;
var G__63689 = chunk__63684;
var G__63690 = count__63685;
var G__63691 = (i__63686 + (1));
seq__63683 = G__63688;
chunk__63684 = G__63689;
count__63685 = G__63690;
i__63686 = G__63691;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__63683);
if(temp__4657__auto__){
var seq__63683__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63683__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__63683__$1);
var G__63692 = cljs.core.chunk_rest.call(null,seq__63683__$1);
var G__63693 = c__25857__auto__;
var G__63694 = cljs.core.count.call(null,c__25857__auto__);
var G__63695 = (0);
seq__63683 = G__63692;
chunk__63684 = G__63693;
count__63685 = G__63694;
i__63686 = G__63695;
continue;
} else {
var x = cljs.core.first.call(null,seq__63683__$1);
hljs.highlightBlock(x);

var G__63696 = cljs.core.next.call(null,seq__63683__$1);
var G__63697 = null;
var G__63698 = (0);
var G__63699 = (0);
seq__63683 = G__63696;
chunk__63684 = G__63697;
count__63685 = G__63698;
i__63686 = G__63699;
continue;
}
} else {
return null;
}
}
break;
}
});})(code__$1,code))
], null),(function (){var G__63687 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__63687) {
case "sketch":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(def w 600)\n(def h 600)\n\n(defn setup []\n (u {:w 40}\n    [(collect-one :w) :cols] #(->> % (/ (q/width)) q/floor)\n    [(collect-one :w) :rows] #(->> % (/ (q/height)) q/floor)\n    [(collect-one :cols)\n     (collect-one :rows) :grid]\n    (comp\n     (fn [grid-of-cells]\n      (mt grid-of-cells\n          [FIRST FIRST\n           (a\n            :current true\n            :visited true)]))\n     (fn [cols rows]\n      (let [empty-grid\n            (vec\n             (repeatedly\n              cols\n              (partial\n               vec\n               (repeat\n                rows nil))))]\n       (reduce\n        #(%2 %1)\n        empty-grid\n        (for [i (range cols)\n              j (range rows)]\n         #(a %\n             (cell/path i j) (cell/make i j)))))))))\n\n(defn remove-wall [previous-current-path previous-wall\n                   next-current-path next-wall]\n (u\n  [previous-current-path :walls] #(disj % previous-wall)\n  [next-current-path :walls] #(disj % next-wall)))\n\n(defn remove-walls [{ci :i\n                     cj :j}\n                    {ni :i\n                     nj :j}\n                    grid]\n (let [x (- ci ni)\n       y (- cj nj)\n       previous-current-path (cell/path ci cj)\n       next-current-path (cell/path ni nj)]\n  (cond->mt\n   grid\n   (= x 1)\n   (remove-wall previous-current-path :left\n                next-current-path :right)\n   (= x -1)\n   (remove-wall previous-current-path :right\n                next-current-path :left)\n   (= y 1)\n   (remove-wall previous-current-path :top\n                next-current-path :bottom)\n   (= y -1)\n   (remove-wall previous-current-path :bottom\n                next-current-path :top))))\n\n(def current-path\n (sp/comp-paths ALL ALL (pred :current)))\n\n(defn update* [{grid :grid\n                stack :stack\n                :as sketch}]\n (let [{ci :i\n        cj :j\n        :as current}\n       (sp/compiled-select-one current-path grid)\n       previous-current-path (cell/path ci cj)\n       {ni :i\n        nj :j\n        :as nxt}\n       (cell/check-neighbors grid current)\n       next-current-path (cell/path ni nj)]\n  (cond-mt\n   sketch\n   nxt\n   (multi-path\n    [:grid\n     (multi-path\n      (a\n       [current-path :current] false)\n      [next-current-path\n       (a\n        :current true\n        :visited true)]\n      (u\n       [(collect-one\n         previous-current-path)\n        (collect-one\n         next-current-path)] remove-walls))]\n    (u\n     :stack #(conj % previous-current-path)))\n   (seq stack)\n   (multi-path\n    [:grid\n     (a\n      [current-path :current] false\n      [(peek stack) :current] true)]\n    (u\n     :stack pop))\n   :else PASS)))\n\n(defn draw [{grid :grid\n             w :w\n             :as sketch}]\n (q/background 51)\n (doseq [cell (flatten grid)]\n  (cell/draw w cell))\n (cell/highlight w (sp/compiled-select-one\n                    current-path grid)))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingtra.in\n// http://patreon.com/codingtrain\n\n// Videos\n// https://youtu.be/HyK_Q5rrcr4\n// https://youtu.be/D8UgRyRnvXU\n// https://youtu.be/8Ju_uxJ9v44\n// https://youtu.be/_p5IH0L63wo\n\n// Depth-first search\n// Recursive backtracker\n// https://en.wikipedia.org/wiki/Maze_generation_algorithm\n\nvar cols, rows;\nvar w = 20;\nvar grid = [];\n\nvar current;\n\nvar stack = [];\n\nfunction setup() {\n  createCanvas(600, 600);\n  cols = floor(width/w);\n  rows = floor(height/w);\n  //frameRate(5);\n\n  for (var   j = 0; j < rows; j++) {\n    for (var i = 0; i < cols; i++) {\n      var cell = new Cell(i, j);\n      grid.push(cell);\n    }\n  }\n\n  current = grid[0];\n\n\n}\n\nfunction draw() {\n  background(51);\n  for (var i = 0; i < grid.length; i++) {\n    grid[i].show();\n  }\n\n  current.visited = true;\n  current.highlight();\n  // STEP 1\n  var next = current.checkNeighbors();\n  if (next) {\n    next.visited = true;\n\n    // STEP 2\n    stack.push(current);\n\n    // STEP 3\n    removeWalls(current, next);\n\n    // STEP 4\n    current = next;\n  } else if (stack.length > 0) {\n    current = stack.pop();\n  }\n\n}\n\nfunction index(i, j) {\n  if (i < 0 || j < 0 || i > cols-1 || j > rows-1) {\n    return -1;\n  }\n  return i + j * cols;\n}\n\n\nfunction removeWalls(a, b) {\n  var x = a.i - b.i;\n  if (x === 1) {\n    a.walls[3] = false;\n    b.walls[1] = false;\n  } else if (x === -1) {\n    a.walls[1] = false;\n    b.walls[3] = false;\n  }\n  var y = a.j - b.j;\n  if (y === 1) {\n    a.walls[0] = false;\n    b.walls[2] = false;\n  } else if (y === -1) {\n    a.walls[2] = false;\n    b.walls[0] = false;\n  }\n}"], null)], null)], null)], null);

break;
case "cell":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(defn make [i j]\n {:type 'Cell\n  :i i\n  :j j\n  :walls #{:top :right :bottom :left}})\n\n(defn path [i j]\n [(keypath i)\n  (keypath j)])\n\n(defn check-neighbors [grid\n                       {i :i\n                        j :j\n                        :as cell}]\n (u grid\n    [(collect-one (path      i (dec j)))\n     (collect-one (path (inc i)     j))\n     (collect-one (path      i (inc j)))\n     (collect-one (path (dec i)     j))]\n    (fn [{top-visited? :visited\n          :as top}\n         {right-visited? :visited\n          :as right}\n         {bottom-visited? :visited\n          :as bottom}\n         {left-visited? :visited\n          :as left}]\n     (let [neighbors\n           (cond->mt\n            []\n            (and top (not top-visited?))\n            (u STAY #(conj % top))\n            (and right (not right-visited?))\n            (u STAY #(conj % right))\n            (and bottom (not bottom-visited?))\n            (u STAY #(conj % bottom))\n            (and left (not left-visited?))\n            (u STAY #(conj % left)))]\n      (when (seq neighbors)\n       (rand-nth neighbors))))))\n\n(defn update* [cell])\n\n(defn highlight [w {i :i\n                    j :j\n                    :as cell}]\n (q/no-stroke)\n (q/fill 0 0 255 100)\n (let [x (* i w)\n       y (* j w)]\n  (q/rect x y w w)))\n\n(defn draw [w\n            {i :i\n             j :j\n             walls :walls\n             visited? :visited\n             :as cell}]\n (q/stroke 255)\n (let [x (* i w)\n       y (* j w)]\n  (when (walls :top)\n   (q/line x y\n           (+ x w) y))\n  (when (walls :right)\n   (q/line (+ x w) y\n           (+ x w) (+ y w)))\n  (when (walls :bottom)\n   (q/line (+ x w) (+ y w)\n           x (+ y w)))\n  (when (walls :left)\n   (q/line x (+ y w)\n           x y))\n  (when visited?\n   (q/no-stroke)\n   (q/fill 255 0 255 100)\n   (q/rect x y w w))))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingtra.in\n// http://patreon.com/codingtrain\n\n// Videos\n// https://youtu.be/HyK_Q5rrcr4\n// https://youtu.be/D8UgRyRnvXU\n// https://youtu.be/8Ju_uxJ9v44\n// https://youtu.be/_p5IH0L63wo\n\n// Depth-first search\n// Recursive backtracker\n// https://en.wikipedia.org/wiki/Maze_generation_algorithm\n\nfunction Cell(i, j) {\n  this.i = i;\n  this.j = j;\n  this.walls = [true, true, true, true];\n  this.visited = false;\n\n  this.checkNeighbors = function() {\n    var neighbors = [];\n\n    var top    = grid[index(i, j -1)];\n    var right  = grid[index(i+1, j)];\n    var bottom = grid[index(i, j+1)];\n    var left   = grid[index(i-1, j)];\n\n    if (top && !top.visited) {\n      neighbors.push(top);\n    }\n    if (right && !right.visited) {\n      neighbors.push(right);\n    }\n    if (bottom && !bottom.visited) {\n      neighbors.push(bottom);\n    }\n    if (left && !left.visited) {\n      neighbors.push(left);\n    }\n\n    if (neighbors.length > 0) {\n      var r = floor(random(0, neighbors.length));\n      return neighbors[r];\n    } else {\n      return undefined;\n    }\n\n\n  }\n  this.highlight = function() {\n    var x = this.i*w;\n    var y = this.j*w;\n    noStroke();\n    fill(0, 0, 255, 100);\n    rect(x, y, w, w);\n\n  }\n\n  this.show = function() {\n    var x = this.i*w;\n    var y = this.j*w;\n    stroke(255);\n    if (this.walls[0]) {\n      line(x    , y    , x + w, y);\n    }\n    if (this.walls[1]) {\n      line(x + w, y    , x + w, y + w);\n    }\n    if (this.walls[2]) {\n      line(x + w, y + w, x    , y + w);\n    }\n    if (this.walls[3]) {\n      line(x    , y + w, x    , y);\n    }\n\n    if (this.visited) {\n      noStroke();\n      fill(255, 0, 255, 100);\n      rect(x, y, w, w);\n    }\n  }\n}"], null)], null)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(code__$1)].join('')));

}
})()], null);
})()], null);
});
;})(code))
})(),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.maze_generator.views.maze_generator_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484810683450
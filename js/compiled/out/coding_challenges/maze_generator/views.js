// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.maze_generator.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('coding_challenges.maze_generator.cell');
goog.require('re_com.core');
goog.require('quil.core');
goog.require('re_frame.core');
goog.require('quil.middleware');
coding_challenges.maze_generator.views.w = (600);
coding_challenges.maze_generator.views.h = (600);
coding_challenges.maze_generator.views.setup = (function coding_challenges$maze_generator$views$setup(){
var w = (40);
var cols = quil.core.floor.call(null,(quil.core.width.call(null) / w));
var rows = quil.core.floor.call(null,(quil.core.height.call(null) / w));
var empty_grid = cljs.core.vec.call(null,cljs.core.repeatedly.call(null,cols,cljs.core.partial.call(null,cljs.core.vec,cljs.core.repeat.call(null,rows,null))));
var grid_of_cells = cljs.core.reduce.call(null,((function (w,cols,rows,empty_grid){
return (function (p1__35086_SHARP_,p2__35085_SHARP_){
return p2__35085_SHARP_.call(null,p1__35086_SHARP_);
});})(w,cols,rows,empty_grid))
,empty_grid,(function (){var iter__7189__auto__ = ((function (w,cols,rows,empty_grid){
return (function coding_challenges$maze_generator$views$setup_$_iter__35095(s__35096){
return (new cljs.core.LazySeq(null,((function (w,cols,rows,empty_grid){
return (function (){
var s__35096__$1 = s__35096;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35096__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__7185__auto__ = ((function (s__35096__$1,i,xs__5205__auto__,temp__4657__auto__,w,cols,rows,empty_grid){
return (function coding_challenges$maze_generator$views$setup_$_iter__35095_$_iter__35097(s__35098){
return (new cljs.core.LazySeq(null,((function (s__35096__$1,i,xs__5205__auto__,temp__4657__auto__,w,cols,rows,empty_grid){
return (function (){
var s__35098__$1 = s__35098;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__35098__$1);
if(temp__4657__auto____$1){
var s__35098__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35098__$2)){
var c__7187__auto__ = cljs.core.chunk_first.call(null,s__35098__$2);
var size__7188__auto__ = cljs.core.count.call(null,c__7187__auto__);
var b__35100 = cljs.core.chunk_buffer.call(null,size__7188__auto__);
if((function (){var i__35099 = (0);
while(true){
if((i__35099 < size__7188__auto__)){
var j = cljs.core._nth.call(null,c__7187__auto__,i__35099);
cljs.core.chunk_append.call(null,b__35100,((function (i__35099,s__35096__$1,j,c__7187__auto__,size__7188__auto__,b__35100,s__35098__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,w,cols,rows,empty_grid){
return (function (grid){
return cljs.core.update.call(null,grid,i,((function (i__35099,s__35096__$1,j,c__7187__auto__,size__7188__auto__,b__35100,s__35098__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,w,cols,rows,empty_grid){
return (function (p1__35087_SHARP_){
return cljs.core.assoc.call(null,p1__35087_SHARP_,j,coding_challenges.maze_generator.cell.make.call(null,i,j));
});})(i__35099,s__35096__$1,j,c__7187__auto__,size__7188__auto__,b__35100,s__35098__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,w,cols,rows,empty_grid))
);
});})(i__35099,s__35096__$1,j,c__7187__auto__,size__7188__auto__,b__35100,s__35098__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,w,cols,rows,empty_grid))
);

var G__35101 = (i__35099 + (1));
i__35099 = G__35101;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35100),coding_challenges$maze_generator$views$setup_$_iter__35095_$_iter__35097.call(null,cljs.core.chunk_rest.call(null,s__35098__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35100),null);
}
} else {
var j = cljs.core.first.call(null,s__35098__$2);
return cljs.core.cons.call(null,((function (s__35096__$1,j,s__35098__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,w,cols,rows,empty_grid){
return (function (grid){
return cljs.core.update.call(null,grid,i,((function (s__35096__$1,j,s__35098__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,w,cols,rows,empty_grid){
return (function (p1__35087_SHARP_){
return cljs.core.assoc.call(null,p1__35087_SHARP_,j,coding_challenges.maze_generator.cell.make.call(null,i,j));
});})(s__35096__$1,j,s__35098__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,w,cols,rows,empty_grid))
);
});})(s__35096__$1,j,s__35098__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,w,cols,rows,empty_grid))
,coding_challenges$maze_generator$views$setup_$_iter__35095_$_iter__35097.call(null,cljs.core.rest.call(null,s__35098__$2)));
}
} else {
return null;
}
break;
}
});})(s__35096__$1,i,xs__5205__auto__,temp__4657__auto__,w,cols,rows,empty_grid))
,null,null));
});})(s__35096__$1,i,xs__5205__auto__,temp__4657__auto__,w,cols,rows,empty_grid))
;
var fs__7186__auto__ = cljs.core.seq.call(null,iterys__7185__auto__.call(null,cljs.core.range.call(null,rows)));
if(fs__7186__auto__){
return cljs.core.concat.call(null,fs__7186__auto__,coding_challenges$maze_generator$views$setup_$_iter__35095.call(null,cljs.core.rest.call(null,s__35096__$1)));
} else {
var G__35102 = cljs.core.rest.call(null,s__35096__$1);
s__35096__$1 = G__35102;
continue;
}
} else {
return null;
}
break;
}
});})(w,cols,rows,empty_grid))
,null,null));
});})(w,cols,rows,empty_grid))
;
return iter__7189__auto__.call(null,cljs.core.range.call(null,cols));
})());
var grid = cljs.core.update.call(null,grid_of_cells,(0),((function (w,cols,rows,empty_grid,grid_of_cells){
return (function (row){
return cljs.core.update.call(null,row,(0),((function (w,cols,rows,empty_grid,grid_of_cells){
return (function (p1__35088_SHARP_){
return cljs.core.assoc.call(null,p1__35088_SHARP_,new cljs.core.Keyword(null,"visited","visited",-1610853875),true);
});})(w,cols,rows,empty_grid,grid_of_cells))
);
});})(w,cols,rows,empty_grid,grid_of_cells))
);
var current = grid.call(null,(0)).call(null,(0));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"cols","cols",-1914801295),cols,new cljs.core.Keyword(null,"rows","rows",850049680),rows,new cljs.core.Keyword(null,"grid","grid",402978600),grid,new cljs.core.Keyword(null,"current","current",-1088038603),current], null);
});
coding_challenges.maze_generator.views.remove_walls = (function coding_challenges$maze_generator$views$remove_walls(grid,p__35105,previous_wall,p__35106,next_wall){
var map__35111 = p__35105;
var map__35111__$1 = ((((!((map__35111 == null)))?((((map__35111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35111):map__35111);
var ci = cljs.core.get.call(null,map__35111__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var cj = cljs.core.get.call(null,map__35111__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
var map__35112 = p__35106;
var map__35112__$1 = ((((!((map__35112 == null)))?((((map__35112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35112):map__35112);
var ni = cljs.core.get.call(null,map__35112__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var nj = cljs.core.get.call(null,map__35112__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
return cljs.core.update.call(null,cljs.core.update.call(null,grid,ci,((function (map__35111,map__35111__$1,ci,cj,map__35112,map__35112__$1,ni,nj){
return (function (row){
return cljs.core.update.call(null,row,cj,((function (map__35111,map__35111__$1,ci,cj,map__35112,map__35112__$1,ni,nj){
return (function (cell){
return cljs.core.update.call(null,cell,new cljs.core.Keyword(null,"walls","walls",-268788818),((function (map__35111,map__35111__$1,ci,cj,map__35112,map__35112__$1,ni,nj){
return (function (p1__35103_SHARP_){
return cljs.core.disj.call(null,p1__35103_SHARP_,previous_wall);
});})(map__35111,map__35111__$1,ci,cj,map__35112,map__35112__$1,ni,nj))
);
});})(map__35111,map__35111__$1,ci,cj,map__35112,map__35112__$1,ni,nj))
);
});})(map__35111,map__35111__$1,ci,cj,map__35112,map__35112__$1,ni,nj))
),ni,((function (map__35111,map__35111__$1,ci,cj,map__35112,map__35112__$1,ni,nj){
return (function (row){
return cljs.core.update.call(null,row,nj,((function (map__35111,map__35111__$1,ci,cj,map__35112,map__35112__$1,ni,nj){
return (function (cell){
return cljs.core.update.call(null,cell,new cljs.core.Keyword(null,"walls","walls",-268788818),((function (map__35111,map__35111__$1,ci,cj,map__35112,map__35112__$1,ni,nj){
return (function (p1__35104_SHARP_){
return cljs.core.disj.call(null,p1__35104_SHARP_,next_wall);
});})(map__35111,map__35111__$1,ci,cj,map__35112,map__35112__$1,ni,nj))
);
});})(map__35111,map__35111__$1,ci,cj,map__35112,map__35112__$1,ni,nj))
);
});})(map__35111,map__35111__$1,ci,cj,map__35112,map__35112__$1,ni,nj))
);
});
coding_challenges.maze_generator.views.remove_wall = (function coding_challenges$maze_generator$views$remove_wall(grid,p__35115,p__35116){
var map__35122 = p__35115;
var map__35122__$1 = ((((!((map__35122 == null)))?((((map__35122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35122):map__35122);
var previous_current = map__35122__$1;
var ci = cljs.core.get.call(null,map__35122__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var cj = cljs.core.get.call(null,map__35122__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
var map__35123 = p__35116;
var map__35123__$1 = ((((!((map__35123 == null)))?((((map__35123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35123):map__35123);
var next_current = map__35123__$1;
var ni = cljs.core.get.call(null,map__35123__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var nj = cljs.core.get.call(null,map__35123__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
var x = (ci - ni);
var y = (cj - nj);
var G__35126 = grid;
var G__35126__$1 = ((cljs.core._EQ_.call(null,x,(1)))?coding_challenges.maze_generator.views.remove_walls.call(null,G__35126,previous_current,new cljs.core.Keyword(null,"left","left",-399115937),next_current,new cljs.core.Keyword(null,"right","right",-452581833)):G__35126);
var G__35126__$2 = ((cljs.core._EQ_.call(null,x,(-1)))?coding_challenges.maze_generator.views.remove_walls.call(null,G__35126__$1,previous_current,new cljs.core.Keyword(null,"right","right",-452581833),next_current,new cljs.core.Keyword(null,"left","left",-399115937)):G__35126__$1);
var G__35126__$3 = ((cljs.core._EQ_.call(null,y,(1)))?coding_challenges.maze_generator.views.remove_walls.call(null,G__35126__$2,previous_current,new cljs.core.Keyword(null,"top","top",-1856271961),next_current,new cljs.core.Keyword(null,"bottom","bottom",-1550509018)):G__35126__$2);
if(cljs.core._EQ_.call(null,y,(-1))){
return coding_challenges.maze_generator.views.remove_walls.call(null,G__35126__$3,previous_current,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),next_current,new cljs.core.Keyword(null,"top","top",-1856271961));
} else {
return G__35126__$3;
}
});
coding_challenges.maze_generator.views.update_STAR_ = (function coding_challenges$maze_generator$views$update_STAR_(p__35129){
var map__35136 = p__35129;
var map__35136__$1 = ((((!((map__35136 == null)))?((((map__35136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35136):map__35136);
var sketch = map__35136__$1;
var grid = cljs.core.get.call(null,map__35136__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var stack = cljs.core.get.call(null,map__35136__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var map__35137 = cljs.core.get.call(null,map__35136__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var map__35137__$1 = ((((!((map__35137 == null)))?((((map__35137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35137):map__35137);
var previous_current = map__35137__$1;
var ci = cljs.core.get.call(null,map__35137__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var cj = cljs.core.get.call(null,map__35137__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
var map__35140 = coding_challenges.maze_generator.cell.check_neighbors.call(null,grid,previous_current);
var map__35140__$1 = ((((!((map__35140 == null)))?((((map__35140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35140):map__35140);
var next_current = map__35140__$1;
var ni = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var nj = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
if(cljs.core.truth_(next_current)){
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.update.call(null,sketch,new cljs.core.Keyword(null,"grid","grid",402978600),((function (map__35140,map__35140__$1,next_current,ni,nj,map__35136,map__35136__$1,sketch,grid,stack,map__35137,map__35137__$1,previous_current,ci,cj){
return (function (grid__$1){
return coding_challenges.maze_generator.views.remove_wall.call(null,cljs.core.update.call(null,grid__$1,ni,((function (map__35140,map__35140__$1,next_current,ni,nj,map__35136,map__35136__$1,sketch,grid,stack,map__35137,map__35137__$1,previous_current,ci,cj){
return (function (row){
return cljs.core.update.call(null,row,nj,((function (map__35140,map__35140__$1,next_current,ni,nj,map__35136,map__35136__$1,sketch,grid,stack,map__35137,map__35137__$1,previous_current,ci,cj){
return (function (p1__35127_SHARP_){
return cljs.core.assoc.call(null,p1__35127_SHARP_,new cljs.core.Keyword(null,"visited","visited",-1610853875),true);
});})(map__35140,map__35140__$1,next_current,ni,nj,map__35136,map__35136__$1,sketch,grid,stack,map__35137,map__35137__$1,previous_current,ci,cj))
);
});})(map__35140,map__35140__$1,next_current,ni,nj,map__35136,map__35136__$1,sketch,grid,stack,map__35137,map__35137__$1,previous_current,ci,cj))
),previous_current,next_current);
});})(map__35140,map__35140__$1,next_current,ni,nj,map__35136,map__35136__$1,sketch,grid,stack,map__35137,map__35137__$1,previous_current,ci,cj))
),new cljs.core.Keyword(null,"stack","stack",-793405930),((function (map__35140,map__35140__$1,next_current,ni,nj,map__35136,map__35136__$1,sketch,grid,stack,map__35137,map__35137__$1,previous_current,ci,cj){
return (function (p1__35128_SHARP_){
return cljs.core.conj.call(null,p1__35128_SHARP_,previous_current);
});})(map__35140,map__35140__$1,next_current,ni,nj,map__35136,map__35136__$1,sketch,grid,stack,map__35137,map__35137__$1,previous_current,ci,cj))
),new cljs.core.Keyword(null,"current","current",-1088038603),next_current);
} else {
if(cljs.core.seq.call(null,stack)){
return cljs.core.assoc.call(null,cljs.core.update.call(null,sketch,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop),new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.peek.call(null,stack));
} else {
return sketch;
}
}
});
coding_challenges.maze_generator.views.draw = (function coding_challenges$maze_generator$views$draw(p__35142){
var map__35151 = p__35142;
var map__35151__$1 = ((((!((map__35151 == null)))?((((map__35151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35151):map__35151);
var sketch = map__35151__$1;
var grid = cljs.core.get.call(null,map__35151__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var w = cljs.core.get.call(null,map__35151__$1,new cljs.core.Keyword(null,"w","w",354169001));
var map__35152 = cljs.core.get.call(null,map__35151__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var map__35152__$1 = ((((!((map__35152 == null)))?((((map__35152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35152):map__35152);
var ci = cljs.core.get.call(null,map__35152__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var cj = cljs.core.get.call(null,map__35152__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
quil.core.background.call(null,(51));

var seq__35155_35159 = cljs.core.seq.call(null,cljs.core.flatten.call(null,grid));
var chunk__35156_35160 = null;
var count__35157_35161 = (0);
var i__35158_35162 = (0);
while(true){
if((i__35158_35162 < count__35157_35161)){
var cell_35163 = cljs.core._nth.call(null,chunk__35156_35160,i__35158_35162);
coding_challenges.maze_generator.cell.draw.call(null,w,cell_35163);

var G__35164 = seq__35155_35159;
var G__35165 = chunk__35156_35160;
var G__35166 = count__35157_35161;
var G__35167 = (i__35158_35162 + (1));
seq__35155_35159 = G__35164;
chunk__35156_35160 = G__35165;
count__35157_35161 = G__35166;
i__35158_35162 = G__35167;
continue;
} else {
var temp__4657__auto___35168 = cljs.core.seq.call(null,seq__35155_35159);
if(temp__4657__auto___35168){
var seq__35155_35169__$1 = temp__4657__auto___35168;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35155_35169__$1)){
var c__7220__auto___35170 = cljs.core.chunk_first.call(null,seq__35155_35169__$1);
var G__35171 = cljs.core.chunk_rest.call(null,seq__35155_35169__$1);
var G__35172 = c__7220__auto___35170;
var G__35173 = cljs.core.count.call(null,c__7220__auto___35170);
var G__35174 = (0);
seq__35155_35159 = G__35171;
chunk__35156_35160 = G__35172;
count__35157_35161 = G__35173;
i__35158_35162 = G__35174;
continue;
} else {
var cell_35175 = cljs.core.first.call(null,seq__35155_35169__$1);
coding_challenges.maze_generator.cell.draw.call(null,w,cell_35175);

var G__35176 = cljs.core.next.call(null,seq__35155_35169__$1);
var G__35177 = null;
var G__35178 = (0);
var G__35179 = (0);
seq__35155_35159 = G__35176;
chunk__35156_35160 = G__35177;
count__35157_35161 = G__35178;
i__35158_35162 = G__35179;
continue;
}
} else {
}
}
break;
}

return coding_challenges.maze_generator.cell.highlight.call(null,w,grid.call(null,ci).call(null,cj));
});
coding_challenges.maze_generator.views.maze_generator_sketch = (function coding_challenges$maze_generator$views$maze_generator_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"maze-generator",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.maze_generator.views.update_STAR_))?(function() { 
var G__35180__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.maze_generator.views.update_STAR_,args);
};
var G__35180 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35181__i = 0, G__35181__a = new Array(arguments.length -  0);
while (G__35181__i < G__35181__a.length) {G__35181__a[G__35181__i] = arguments[G__35181__i + 0]; ++G__35181__i;}
  args = new cljs.core.IndexedSeq(G__35181__a,0);
} 
return G__35180__delegate.call(this,args);};
G__35180.cljs$lang$maxFixedArity = 0;
G__35180.cljs$lang$applyTo = (function (arglist__35182){
var args = cljs.core.seq(arglist__35182);
return G__35180__delegate(args);
});
G__35180.cljs$core$IFn$_invoke$arity$variadic = G__35180__delegate;
return G__35180;
})()
:coding_challenges.maze_generator.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.maze_generator.views.w,coding_challenges.maze_generator.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.maze_generator.views.setup))?(function() { 
var G__35183__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.maze_generator.views.setup,args);
};
var G__35183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35184__i = 0, G__35184__a = new Array(arguments.length -  0);
while (G__35184__i < G__35184__a.length) {G__35184__a[G__35184__i] = arguments[G__35184__i + 0]; ++G__35184__i;}
  args = new cljs.core.IndexedSeq(G__35184__a,0);
} 
return G__35183__delegate.call(this,args);};
G__35183.cljs$lang$maxFixedArity = 0;
G__35183.cljs$lang$applyTo = (function (arglist__35185){
var args = cljs.core.seq(arglist__35185);
return G__35183__delegate(args);
});
G__35183.cljs$core$IFn$_invoke$arity$variadic = G__35183__delegate;
return G__35183;
})()
:coding_challenges.maze_generator.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.maze_generator.views.draw))?(function() { 
var G__35186__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.maze_generator.views.draw,args);
};
var G__35186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35187__i = 0, G__35187__a = new Array(arguments.length -  0);
while (G__35187__i < G__35187__a.length) {G__35187__a[G__35187__i] = arguments[G__35187__i + 0]; ++G__35187__i;}
  args = new cljs.core.IndexedSeq(G__35187__a,0);
} 
return G__35186__delegate.call(this,args);};
G__35186.cljs$lang$maxFixedArity = 0;
G__35186.cljs$lang$applyTo = (function (arglist__35188){
var args = cljs.core.seq(arglist__35188);
return G__35186__delegate(args);
});
G__35186.cljs$core$IFn$_invoke$arity$variadic = G__35186__delegate;
return G__35186;
})()
:coding_challenges.maze_generator.views.draw));
});
goog.exportSymbol('coding_challenges.maze_generator.views.maze_generator_sketch', coding_challenges.maze_generator.views.maze_generator_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14841__14842__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__14841__14842__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.maze_generator.views.maze_generator_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"maze-generator"], null));
}
coding_challenges.maze_generator.views.view = (function coding_challenges$maze_generator$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){var code = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-one","select-one",1322686564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze-generator","maze-generator",1376770988),new cljs.core.Keyword(null,"code","code",1586293142)], null)], null));
return ((function (code){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var code__$1 = (function (){var or__6409__auto__ = cljs.core.deref.call(null,code);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return new cljs.core.Keyword(null,"sketch","sketch",465948709);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Maze generator demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#maze-generator","canvas#maze-generator",437156800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.maze_generator.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.maze_generator.views.h], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sketch","sketch",465948709),new cljs.core.Keyword(null,"label","label",1718410804),"Sketch"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"label","label",1718410804),"Cell"], null)], null),new cljs.core.Keyword(null,"model","model",331153215),code__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (code__$1,code){
return (function (p1__35189_SHARP_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze-generator","maze-generator",1376770988),new cljs.core.Keyword(null,"code","code",1586293142)], null),p1__35189_SHARP_], null)], null));

var seq__35195 = cljs.core.seq.call(null,document.querySelectorAll("code"));
var chunk__35196 = null;
var count__35197 = (0);
var i__35198 = (0);
while(true){
if((i__35198 < count__35197)){
var x = cljs.core._nth.call(null,chunk__35196,i__35198);
hljs.highlightBlock(x);

var G__35200 = seq__35195;
var G__35201 = chunk__35196;
var G__35202 = count__35197;
var G__35203 = (i__35198 + (1));
seq__35195 = G__35200;
chunk__35196 = G__35201;
count__35197 = G__35202;
i__35198 = G__35203;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35195);
if(temp__4657__auto__){
var seq__35195__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35195__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__35195__$1);
var G__35204 = cljs.core.chunk_rest.call(null,seq__35195__$1);
var G__35205 = c__7220__auto__;
var G__35206 = cljs.core.count.call(null,c__7220__auto__);
var G__35207 = (0);
seq__35195 = G__35204;
chunk__35196 = G__35205;
count__35197 = G__35206;
i__35198 = G__35207;
continue;
} else {
var x = cljs.core.first.call(null,seq__35195__$1);
hljs.highlightBlock(x);

var G__35208 = cljs.core.next.call(null,seq__35195__$1);
var G__35209 = null;
var G__35210 = (0);
var G__35211 = (0);
seq__35195 = G__35208;
chunk__35196 = G__35209;
count__35197 = G__35210;
i__35198 = G__35211;
continue;
}
} else {
return null;
}
}
break;
}
});})(code__$1,code))
], null),(function (){var G__35199 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__35199) {
case "sketch":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(def w 600)\n(def h 600)\n\n(defn setup []\n (let [w 40\n       cols (q/floor (/ (q/width) w))\n       rows (q/floor (/ (q/height) w))\n       empty-grid (vec\n                   (repeatedly\n                    cols\n                    (partial\n                     vec\n                     (repeat\n                      rows nil))))\n       grid-of-cells (reduce\n                      #(%2 %1)\n                      empty-grid\n                      (for [i (range cols)\n                            j (range rows)]\n                       (fn [grid]\n                        (update grid\n                                i #(assoc %\n                                    j (cell/make i j))))))\n       grid (update grid-of-cells\n                    0 (fn [row]\n                       (update row\n                               0 #(assoc %\n                                   :visited true))))\n       current ((grid 0) 0)]\n  {:w w\n   :cols cols\n   :rows rows\n   :grid grid\n   :current current}))\n\n(defn remove-wall [grid\n                   {ci :i\n                    cj :j} previous-wall\n                   {ni :i\n                    nj :j} next-wall]\n (-> grid\n     (update\n      ci (fn [row]\n          (update row\n                  cj (fn [cell]\n                      (update cell\n                              :walls #(disj % previous-wall))))))\n     (update\n      ni (fn [row]\n          (update row\n                  nj (fn [cell]\n                      (update cell\n                              :walls #(disj % next-wall))))))))\n\n(defn remove-walls [grid\n                    {ci :i\n                     cj :j\n                     :as previous-current}\n                    {ni :i\n                     nj :j\n                     :as next-current}]\n (let [x (- ci ni)\n       y (- cj nj)]\n  (cond-> grid\n   (= x 1)\n   (remove-wall previous-current :left\n                next-current :right)\n   (= x -1)\n   (remove-wall previous-current :right\n                next-current :left)\n   (= y 1)\n   (remove-wall previous-current :top\n                next-current :bottom)\n   (= y -1)\n   (remove-wall previous-current :bottom\n                next-current :top))))\n\n(defn update* [{grid :grid\n                stack :stack\n                {ci :i\n                 cj :j\n                 :as previous-current} :current\n                :as sketch}]\n (let [{ni :i\n        nj :j\n        :as next-current}\n       (cell/check-neighbors grid previous-current)]\n  (if next-current\n   (-> sketch\n       (update\n(def w 600)\n(def h 600)\n\n(defn setup []\n (let [w 40\n       cols (q/floor (/ (q/width) w))\n       rows (q/floor (/ (q/height) w))\n       empty-grid (vec\n                   (repeatedly\n                    cols\n                    (partial\n                     vec\n                     (repeat\n                      rows nil))))\n       grid-of-cells (reduce\n                      #(%2 %1)\n                      empty-grid\n                      (for [i (range cols)\n                            j (range rows)]\n                       (fn [grid]\n                        (update grid\n                                i #(assoc %\n                                    j (cell/make i j))))))\n       grid (update grid-of-cells\n                    0 (fn [row]\n                       (update row\n                               0 #(assoc %\n                                   :visited true))))\n       current ((grid 0) 0)]\n  {:w w\n   :cols cols\n   :rows rows\n   :grid grid\n   :current current}))\n\n(defn remove-walls [grid\n                   {ci :i\n                    cj :j} previous-wall\n                   {ni :i\n                    nj :j} next-wall]\n (-> grid\n     (update\n      ci (fn [row]\n          (update row\n                  cj (fn [cell]\n                      (update cell\n                              :walls #(disj % previous-wall))))))\n     (update\n      ni (fn [row]\n          (update row\n                  nj (fn [cell]\n                      (update cell\n                              :walls #(disj % next-wall))))))))\n\n(defn remove-wall [grid\n                    {ci :i\n                     cj :j\n                     :as previous-current}\n                    {ni :i\n                     nj :j\n                     :as next-current}]\n (let [x (- ci ni)\n       y (- cj nj)]\n  (cond-> grid\n   (= x 1)\n   (remove-walls previous-current :left\n                 next-current :right)\n   (= x -1)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingtra.in\n// http://patreon.com/codingtrain\n\n// Videos\n// https://youtu.be/HyK_Q5rrcr4\n// https://youtu.be/D8UgRyRnvXU\n// https://youtu.be/8Ju_uxJ9v44\n// https://youtu.be/_p5IH0L63wo\n\n// Depth-first search\n// Recursive backtracker\n// https://en.wikipedia.org/wiki/Maze_generation_algorithm\n\nvar cols, rows;\nvar w = 20;\nvar grid = [];\n\nvar current;\n\nvar stack = [];\n\nfunction setup() {\n  createCanvas(600, 600);\n  cols = floor(width/w);\n  rows = floor(height/w);\n  //frameRate(5);\n\n  for (var   j = 0; j < rows; j++) {\n    for (var i = 0; i < cols; i++) {\n      var cell = new Cell(i, j);\n      grid.push(cell);\n    }\n  }\n\n  current = grid[0];\n\n\n}\n\nfunction draw() {\n  background(51);\n  for (var i = 0; i < grid.length; i++) {\n    grid[i].show();\n  }\n\n  current.visited = true;\n  current.highlight();\n  // STEP 1\n  var next = current.checkNeighbors();\n  if (next) {\n    next.visited = true;\n\n    // STEP 2\n    stack.push(current);\n\n    // STEP 3\n    removeWalls(current, next);\n\n    // STEP 4\n    current = next;\n  } else if (stack.length > 0) {\n    current = stack.pop();\n  }\n\n}\n\nfunction index(i, j) {\n  if (i < 0 || j < 0 || i > cols-1 || j > rows-1) {\n    return -1;\n  }\n  return i + j * cols;\n}\n\n\nfunction removeWalls(a, b) {\n  var x = a.i - b.i;\n  if (x === 1) {\n    a.walls[3] = false;\n    b.walls[1] = false;\n  } else if (x === -1) {\n    a.walls[1] = false;\n    b.walls[3] = false;\n  }\n  var y = a.j - b.j;\n  if (y === 1) {\n    a.walls[0] = false;\n    b.walls[2] = false;\n  } else if (y === -1) {\n    a.walls[2] = false;\n    b.walls[0] = false;\n  }\n}"], null)], null)], null)], null);

break;
case "cell":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(defn make [i j]\n {:type 'Cell\n  :i i\n  :j j\n  :walls #{:top :right :bottom :left}})\n\n(defn check-neighbors [grid\n                       {ci :i\n                        cj :j}]\n (let [{top-visited? :visited\n        :as top} ((grid ci) (dec cj))\n       {right-visited? :visited\n        :as right} ((grid (inc ci)) cj)\n       {bottom-visited? :visited\n        :as bottom} ((grid ci) (inc cj))\n       {left-visited? :visited\n        :as left} ((grid (dec ci)) cj)\n       neighbors (cond->\n                  []\n                  (and top (not top-visited?))\n                  (conj top)\n                  (and right (not right-visited?))\n                  (conj right)\n                  (and bottom (not bottom-visited?))\n                  (conj bottom)\n                  (and left (not left-visited?))\n                  (conj left))]\n  (when (seq neighbors)\n   (rand-nth neighbors))))\n\n(defn update* [cell])\n\n(defn highlight [w {i :i\n                    j :j\n                    :as cell}]\n (q/no-stroke)\n (q/fill 0 0 255 100)\n (let [x (* i w)\n       y (* j w)]\n  (q/rect x y w w)))\n\n(defn draw [w\n            {i :i\n             j :j\n             walls :walls\n             visited? :visited\n             :as cell}]\n (q/stroke 255)\n (let [x (* i w)\n       y (* j w)]\n  (when (walls :top)\n   (q/line x y\n           (+ x w) y))\n  (when (walls :right)\n   (q/line (+ x w) y\n           (+ x w) (+ y w)))\n  (when (walls :bottom)\n   (q/line (+ x w) (+ y w)\n           x (+ y w)))\n  (when (walls :left)\n   (q/line x (+ y w)\n           x y))\n  (when visited?\n   (q/no-stroke)\n   (q/fill 255 0 255 100)\n   (q/rect x y w w))))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingtra.in\n// http://patreon.com/codingtrain\n\n// Videos\n// https://youtu.be/HyK_Q5rrcr4\n// https://youtu.be/D8UgRyRnvXU\n// https://youtu.be/8Ju_uxJ9v44\n// https://youtu.be/_p5IH0L63wo\n\n// Depth-first search\n// Recursive backtracker\n// https://en.wikipedia.org/wiki/Maze_generation_algorithm\n\nfunction Cell(i, j) {\n  this.i = i;\n  this.j = j;\n  this.walls = [true, true, true, true];\n  this.visited = false;\n\n  this.checkNeighbors = function() {\n    var neighbors = [];\n\n    var top    = grid[index(i, j -1)];\n    var right  = grid[index(i+1, j)];\n    var bottom = grid[index(i, j+1)];\n    var left   = grid[index(i-1, j)];\n\n    if (top && !top.visited) {\n      neighbors.push(top);\n    }\n    if (right && !right.visited) {\n      neighbors.push(right);\n    }\n    if (bottom && !bottom.visited) {\n      neighbors.push(bottom);\n    }\n    if (left && !left.visited) {\n      neighbors.push(left);\n    }\n\n    if (neighbors.length > 0) {\n      var r = floor(random(0, neighbors.length));\n      return neighbors[r];\n    } else {\n      return undefined;\n    }\n\n\n  }\n  this.highlight = function() {\n    var x = this.i*w;\n    var y = this.j*w;\n    noStroke();\n    fill(0, 0, 255, 100);\n    rect(x, y, w, w);\n\n  }\n\n  this.show = function() {\n    var x = this.i*w;\n    var y = this.j*w;\n    stroke(255);\n    if (this.walls[0]) {\n      line(x    , y    , x + w, y);\n    }\n    if (this.walls[1]) {\n      line(x + w, y    , x + w, y + w);\n    }\n    if (this.walls[2]) {\n      line(x + w, y + w, x    , y + w);\n    }\n    if (this.walls[3]) {\n      line(x    , y + w, x    , y);\n    }\n\n    if (this.visited) {\n      noStroke();\n      fill(255, 0, 255, 100);\n      rect(x, y, w, w);\n    }\n  }\n}"], null)], null)], null)], null);

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

//# sourceMappingURL=views.js.map?rel=1485242679214
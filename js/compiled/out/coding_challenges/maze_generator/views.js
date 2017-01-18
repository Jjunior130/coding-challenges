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
coding_challenges.maze_generator.views.w = (600);
coding_challenges.maze_generator.views.h = (600);
coding_challenges.maze_generator.views.update_val = (function coding_challenges$maze_generator$views$update_val(p,f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,com.rpl.specter.terminal.call(null,f)], null);
});
coding_challenges.maze_generator.views.multi_update_val = (function coding_challenges$maze_generator$views$multi_update_val(var_args){
var args__26128__auto__ = [];
var len__26121__auto___69624 = arguments.length;
var i__26122__auto___69625 = (0);
while(true){
if((i__26122__auto___69625 < len__26121__auto___69624)){
args__26128__auto__.push((arguments[i__26122__auto___69625]));

var G__69626 = (i__26122__auto___69625 + (1));
i__26122__auto___69625 = G__69626;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return coding_challenges.maze_generator.views.multi_update_val.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

coding_challenges.maze_generator.views.multi_update_val.cljs$core$IFn$_invoke$arity$variadic = (function (pairs){
return cljs.core.apply.call(null,com.rpl.specter.multi_path,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,coding_challenges.maze_generator.views.update_val),cljs.core.partition.call(null,(2),pairs)));
});

coding_challenges.maze_generator.views.multi_update_val.cljs$lang$maxFixedArity = (0);

coding_challenges.maze_generator.views.multi_update_val.cljs$lang$applyTo = (function (seq69623){
return coding_challenges.maze_generator.views.multi_update_val.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69623));
});

coding_challenges.maze_generator.views.assoc_val = (function coding_challenges$maze_generator$views$assoc_val(p,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,com.rpl.specter.terminal_val.call(null,v)], null);
});
coding_challenges.maze_generator.views.multi_assoc_val = (function coding_challenges$maze_generator$views$multi_assoc_val(var_args){
var args__26128__auto__ = [];
var len__26121__auto___69628 = arguments.length;
var i__26122__auto___69629 = (0);
while(true){
if((i__26122__auto___69629 < len__26121__auto___69628)){
args__26128__auto__.push((arguments[i__26122__auto___69629]));

var G__69630 = (i__26122__auto___69629 + (1));
i__26122__auto___69629 = G__69630;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return coding_challenges.maze_generator.views.multi_assoc_val.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

coding_challenges.maze_generator.views.multi_assoc_val.cljs$core$IFn$_invoke$arity$variadic = (function (pairs){
return cljs.core.apply.call(null,com.rpl.specter.multi_path,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,coding_challenges.maze_generator.views.assoc_val),cljs.core.partition.call(null,(2),pairs)));
});

coding_challenges.maze_generator.views.multi_assoc_val.cljs$lang$maxFixedArity = (0);

coding_challenges.maze_generator.views.multi_assoc_val.cljs$lang$applyTo = (function (seq69627){
return coding_challenges.maze_generator.views.multi_assoc_val.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69627));
});

coding_challenges.maze_generator.views.setup = (function coding_challenges$maze_generator$views$setup(){
return com.rpl.specter.multi_transform_STAR_.call(null,coding_challenges.maze_generator.views.multi_update_val.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"w","w",354169001)),new cljs.core.Keyword(null,"cols","cols",-1914801295)], null),cljs.core.comp.call(null,quil.core.floor,cljs.core.partial.call(null,cljs.core._SLASH_,quil.core.width.call(null)),cljs.core.identity),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"w","w",354169001)),new cljs.core.Keyword(null,"rows","rows",850049680)], null),cljs.core.comp.call(null,quil.core.floor,cljs.core.partial.call(null,cljs.core._SLASH_,quil.core.height.call(null)),cljs.core.identity),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"cols","cols",-1914801295)),com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"rows","rows",850049680)),new cljs.core.Keyword(null,"grid","grid",402978600)], null),cljs.core.comp.call(null,(function (grid_of_cells){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__28040__auto__ = coding_challenges.maze_generator.views.pathcache69667;
var info__28040__auto____$1 = (((info__28040__auto__ == null))?(function (){var info69668 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",8,1,640,643,cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"resources\\public\\js\\compiled\\out\\com\\rpl\\specter.cljc",8,1,640,643,cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null))], null)], null),"coding-challenges.maze-generator.views",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null)], null));
coding_challenges.maze_generator.views.pathcache69667 = info69668;

return info69668;
})():info__28040__auto__);
var precompiled69669 = info__28040__auto____$1.precompiled;
var dynamic_QMARK___28041__auto__ = info__28040__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28041__auto__)){
return precompiled69669.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.FIRST,com.rpl.specter.FIRST], null));
} else {
return precompiled69669;
}
})(),(function (first_cell){
return cljs.core.assoc.call(null,first_cell,new cljs.core.Keyword(null,"current","current",-1088038603),true,new cljs.core.Keyword(null,"visited","visited",-1610853875),true);
}),grid_of_cells);
}),(function (cols,rows){
var empty_grid = cljs.core.vec.call(null,cljs.core.repeatedly.call(null,cols,cljs.core.partial.call(null,cljs.core.vec,cljs.core.repeat.call(null,rows,null))));
return cljs.core.reduce.call(null,((function (empty_grid){
return (function (p1__69632_SHARP_,p2__69631_SHARP_){
return p2__69631_SHARP_.call(null,p1__69632_SHARP_);
});})(empty_grid))
,empty_grid,(function (){var iter__25826__auto__ = ((function (empty_grid){
return (function coding_challenges$maze_generator$views$setup_$_iter__69670(s__69671){
return (new cljs.core.LazySeq(null,((function (empty_grid){
return (function (){
var s__69671__$1 = s__69671;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__69671__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__25822__auto__ = ((function (s__69671__$1,i,xs__5205__auto__,temp__4657__auto__,empty_grid){
return (function coding_challenges$maze_generator$views$setup_$_iter__69670_$_iter__69672(s__69673){
return (new cljs.core.LazySeq(null,((function (s__69671__$1,i,xs__5205__auto__,temp__4657__auto__,empty_grid){
return (function (){
var s__69673__$1 = s__69673;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__69673__$1);
if(temp__4657__auto____$1){
var s__69673__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__69673__$2)){
var c__25824__auto__ = cljs.core.chunk_first.call(null,s__69673__$2);
var size__25825__auto__ = cljs.core.count.call(null,c__25824__auto__);
var b__69675 = cljs.core.chunk_buffer.call(null,size__25825__auto__);
if((function (){var i__69674 = (0);
while(true){
if((i__69674 < size__25825__auto__)){
var j = cljs.core._nth.call(null,c__25824__auto__,i__69674);
cljs.core.chunk_append.call(null,b__69675,((function (i__69674,s__69671__$1,j,c__25824__auto__,size__25825__auto__,b__69675,s__69673__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,empty_grid){
return (function (p1__69633_SHARP_){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__28040__auto__ = coding_challenges.maze_generator.views.pathcache69694;
var info__28040__auto____$1 = (((info__28040__auto__ == null))?(function (){var info69695 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,coding_challenges.maze_generator.cell.path,new cljs.core.Var(function(){return coding_challenges.maze_generator.cell.path;},new cljs.core.Symbol("coding-challenges.maze-generator.cell","path","coding-challenges.maze-generator.cell/path",316565719,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"coding-challenges.maze-generator.cell","coding-challenges.maze-generator.cell",-1569724366,null),new cljs.core.Symbol(null,"path","path",1452340359,null),"src\\cljs\\coding_challenges\\maze-generator\\cell.cljs",11,1,13,13,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"j","j",242556762,null)], null)),null,(cljs.core.truth_(coding_challenges.maze_generator.cell.path)?coding_challenges.maze_generator.cell.path.cljs$lang$test:null)])),new cljs.core.Symbol("cell","path","cell/path",1449553189,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,i,new cljs.core.Symbol(null,"i","i",253690212,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,j,new cljs.core.Symbol(null,"j","j",242556762,null))], null),cljs.core.list(new cljs.core.Symbol("cell","path","cell/path",1449553189,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"j","j",242556762,null)))], null),"coding-challenges.maze-generator.views",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"j","j",242556762,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cell","path","cell/path",1449553189,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"j","j",242556762,null)], null));
coding_challenges.maze_generator.views.pathcache69694 = info69695;

return info69695;
})():info__28040__auto__);
var precompiled69696 = info__28040__auto____$1.precompiled;
var dynamic_QMARK___28041__auto__ = info__28040__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28041__auto__)){
return precompiled69696.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.maze_generator.cell.path,i,j], null));
} else {
return precompiled69696;
}
})(),coding_challenges.maze_generator.cell.make.call(null,i,j),p1__69633_SHARP_);
});})(i__69674,s__69671__$1,j,c__25824__auto__,size__25825__auto__,b__69675,s__69673__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,empty_grid))
);

var G__69700 = (i__69674 + (1));
i__69674 = G__69700;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69675),coding_challenges$maze_generator$views$setup_$_iter__69670_$_iter__69672.call(null,cljs.core.chunk_rest.call(null,s__69673__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69675),null);
}
} else {
var j = cljs.core.first.call(null,s__69673__$2);
return cljs.core.cons.call(null,((function (s__69671__$1,j,s__69673__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,empty_grid){
return (function (p1__69633_SHARP_){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__28040__auto__ = coding_challenges.maze_generator.views.pathcache69697;
var info__28040__auto____$1 = (((info__28040__auto__ == null))?(function (){var info69698 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,coding_challenges.maze_generator.cell.path,new cljs.core.Var(function(){return coding_challenges.maze_generator.cell.path;},new cljs.core.Symbol("coding-challenges.maze-generator.cell","path","coding-challenges.maze-generator.cell/path",316565719,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"coding-challenges.maze-generator.cell","coding-challenges.maze-generator.cell",-1569724366,null),new cljs.core.Symbol(null,"path","path",1452340359,null),"src\\cljs\\coding_challenges\\maze-generator\\cell.cljs",11,1,13,13,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"j","j",242556762,null)], null)),null,(cljs.core.truth_(coding_challenges.maze_generator.cell.path)?coding_challenges.maze_generator.cell.path.cljs$lang$test:null)])),new cljs.core.Symbol("cell","path","cell/path",1449553189,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,i,new cljs.core.Symbol(null,"i","i",253690212,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,j,new cljs.core.Symbol(null,"j","j",242556762,null))], null),cljs.core.list(new cljs.core.Symbol("cell","path","cell/path",1449553189,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"j","j",242556762,null)))], null),"coding-challenges.maze-generator.views",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"j","j",242556762,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cell","path","cell/path",1449553189,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"j","j",242556762,null)], null));
coding_challenges.maze_generator.views.pathcache69697 = info69698;

return info69698;
})():info__28040__auto__);
var precompiled69699 = info__28040__auto____$1.precompiled;
var dynamic_QMARK___28041__auto__ = info__28040__auto____$1.dynamic_QMARK_;
if(cljs.core.truth_(dynamic_QMARK___28041__auto__)){
return precompiled69699.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.maze_generator.cell.path,i,j], null));
} else {
return precompiled69699;
}
})(),coding_challenges.maze_generator.cell.make.call(null,i,j),p1__69633_SHARP_);
});})(s__69671__$1,j,s__69673__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,empty_grid))
,coding_challenges$maze_generator$views$setup_$_iter__69670_$_iter__69672.call(null,cljs.core.rest.call(null,s__69673__$2)));
}
} else {
return null;
}
break;
}
});})(s__69671__$1,i,xs__5205__auto__,temp__4657__auto__,empty_grid))
,null,null));
});})(s__69671__$1,i,xs__5205__auto__,temp__4657__auto__,empty_grid))
;
var fs__25823__auto__ = cljs.core.seq.call(null,iterys__25822__auto__.call(null,cljs.core.range.call(null,rows)));
if(fs__25823__auto__){
return cljs.core.concat.call(null,fs__25823__auto__,coding_challenges$maze_generator$views$setup_$_iter__69670.call(null,cljs.core.rest.call(null,s__69671__$1)));
} else {
var G__69701 = cljs.core.rest.call(null,s__69671__$1);
s__69671__$1 = G__69701;
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
}))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"w","w",354169001),(40)], null));
});
coding_challenges.maze_generator.views.remove_wall = (function coding_challenges$maze_generator$views$remove_wall(current_path,current_wall,next_path,next_wall,grid){
return com.rpl.specter.multi_transform_STAR_.call(null,coding_challenges.maze_generator.views.multi_update_val.call(null,current_path,cljs.core.partial.call(null,coding_challenges.maze_generator.cell.remove_wall,current_wall),next_path,cljs.core.partial.call(null,coding_challenges.maze_generator.cell.remove_wall,next_wall)),grid);
});
coding_challenges.maze_generator.views.remove_walls = (function coding_challenges$maze_generator$views$remove_walls(p__69702,p__69703,grid){
var map__69709 = p__69702;
var map__69709__$1 = ((((!((map__69709 == null)))?((((map__69709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69709):map__69709);
var ci = cljs.core.get.call(null,map__69709__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var cj = cljs.core.get.call(null,map__69709__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
var map__69710 = p__69703;
var map__69710__$1 = ((((!((map__69710 == null)))?((((map__69710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69710):map__69710);
var ni = cljs.core.get.call(null,map__69710__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var nj = cljs.core.get.call(null,map__69710__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
var x = (ci - ni);
var y = (cj - nj);
var current_path = coding_challenges.maze_generator.cell.path.call(null,ci,cj);
var next_path = coding_challenges.maze_generator.cell.path.call(null,ni,nj);
var G__69713 = grid;
var G__69713__$1 = ((cljs.core._EQ_.call(null,x,(1)))?coding_challenges.maze_generator.views.remove_wall.call(null,current_path,new cljs.core.Keyword(null,"left","left",-399115937),next_path,new cljs.core.Keyword(null,"right","right",-452581833),G__69713):G__69713);
var G__69713__$2 = ((cljs.core._EQ_.call(null,x,(-1)))?coding_challenges.maze_generator.views.remove_wall.call(null,current_path,new cljs.core.Keyword(null,"right","right",-452581833),next_path,new cljs.core.Keyword(null,"left","left",-399115937),G__69713__$1):G__69713__$1);
var G__69713__$3 = ((cljs.core._EQ_.call(null,y,(1)))?coding_challenges.maze_generator.views.remove_wall.call(null,current_path,new cljs.core.Keyword(null,"top","top",-1856271961),next_path,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),G__69713__$2):G__69713__$2);
if(cljs.core._EQ_.call(null,y,(-1))){
return coding_challenges.maze_generator.views.remove_wall.call(null,current_path,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),next_path,new cljs.core.Keyword(null,"top","top",-1856271961),G__69713__$3);
} else {
return G__69713__$3;
}
});
coding_challenges.maze_generator.views.current_cell_path = com.rpl.specter.comp_paths.call(null,com.rpl.specter.ALL,com.rpl.specter.ALL,com.rpl.specter.pred.call(null,new cljs.core.Keyword(null,"current","current",-1088038603)));
coding_challenges.maze_generator.views.update_STAR_ = (function coding_challenges$maze_generator$views$update_STAR_(p__69715){
var map__69722 = p__69715;
var map__69722__$1 = ((((!((map__69722 == null)))?((((map__69722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69722):map__69722);
var sketch = map__69722__$1;
var grid = cljs.core.get.call(null,map__69722__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var stack = cljs.core.get.call(null,map__69722__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var map__69724 = com.rpl.specter.compiled_select_one.call(null,coding_challenges.maze_generator.views.current_cell_path,grid);
var map__69724__$1 = ((((!((map__69724 == null)))?((((map__69724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69724):map__69724);
var current = map__69724__$1;
var ci = cljs.core.get.call(null,map__69724__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var cj = cljs.core.get.call(null,map__69724__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
var previous_current_path = coding_challenges.maze_generator.cell.path.call(null,ci,cj);
var map__69725 = coding_challenges.maze_generator.cell.check_neighbors.call(null,grid,current);
var map__69725__$1 = ((((!((map__69725 == null)))?((((map__69725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69725):map__69725);
var nxt = map__69725__$1;
var ni = cljs.core.get.call(null,map__69725__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var nj = cljs.core.get.call(null,map__69725__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
var next_current_path = coding_challenges.maze_generator.cell.path.call(null,ni,nj);
if(cljs.core.truth_(nxt)){
return com.rpl.specter.multi_transform_STAR_.call(null,com.rpl.specter.multi_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),com.rpl.specter.multi_path.call(null,coding_challenges.maze_generator.views.assoc_val.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.maze_generator.views.current_cell_path,new cljs.core.Keyword(null,"current","current",-1088038603)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_current_path,coding_challenges.maze_generator.views.multi_assoc_val.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),true,new cljs.core.Keyword(null,"visited","visited",-1610853875),true)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one.call(null,previous_current_path),com.rpl.specter.collect_one.call(null,next_current_path),com.rpl.specter.terminal.call(null,coding_challenges.maze_generator.views.remove_walls)], null))], null),coding_challenges.maze_generator.views.update_val.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930),((function (map__69724,map__69724__$1,current,ci,cj,previous_current_path,map__69725,map__69725__$1,nxt,ni,nj,next_current_path,map__69722,map__69722__$1,sketch,grid,stack){
return (function (p1__69714_SHARP_){
return cljs.core.conj.call(null,p1__69714_SHARP_,previous_current_path);
});})(map__69724,map__69724__$1,current,ci,cj,previous_current_path,map__69725,map__69725__$1,nxt,ni,nj,next_current_path,map__69722,map__69722__$1,sketch,grid,stack))
)),sketch);
} else {
if(cljs.core.seq.call(null,stack)){
return com.rpl.specter.multi_transform_STAR_.call(null,com.rpl.specter.multi_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),coding_challenges.maze_generator.views.multi_assoc_val.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.maze_generator.views.current_cell_path,new cljs.core.Keyword(null,"current","current",-1088038603)], null),false,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,stack),new cljs.core.Keyword(null,"current","current",-1088038603)], null),true)], null),coding_challenges.maze_generator.views.update_val.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop)),sketch);
} else {
return sketch;

}
}
});
coding_challenges.maze_generator.views.draw = (function coding_challenges$maze_generator$views$draw(p__69728){
var map__69735 = p__69728;
var map__69735__$1 = ((((!((map__69735 == null)))?((((map__69735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69735):map__69735);
var sketch = map__69735__$1;
var grid = cljs.core.get.call(null,map__69735__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var w = cljs.core.get.call(null,map__69735__$1,new cljs.core.Keyword(null,"w","w",354169001));
quil.core.background.call(null,(51));

var seq__69737_69741 = cljs.core.seq.call(null,cljs.core.flatten.call(null,grid));
var chunk__69738_69742 = null;
var count__69739_69743 = (0);
var i__69740_69744 = (0);
while(true){
if((i__69740_69744 < count__69739_69743)){
var cell_69745 = cljs.core._nth.call(null,chunk__69738_69742,i__69740_69744);
coding_challenges.maze_generator.cell.draw.call(null,w,cell_69745);

var G__69746 = seq__69737_69741;
var G__69747 = chunk__69738_69742;
var G__69748 = count__69739_69743;
var G__69749 = (i__69740_69744 + (1));
seq__69737_69741 = G__69746;
chunk__69738_69742 = G__69747;
count__69739_69743 = G__69748;
i__69740_69744 = G__69749;
continue;
} else {
var temp__4657__auto___69750 = cljs.core.seq.call(null,seq__69737_69741);
if(temp__4657__auto___69750){
var seq__69737_69751__$1 = temp__4657__auto___69750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69737_69751__$1)){
var c__25857__auto___69752 = cljs.core.chunk_first.call(null,seq__69737_69751__$1);
var G__69753 = cljs.core.chunk_rest.call(null,seq__69737_69751__$1);
var G__69754 = c__25857__auto___69752;
var G__69755 = cljs.core.count.call(null,c__25857__auto___69752);
var G__69756 = (0);
seq__69737_69741 = G__69753;
chunk__69738_69742 = G__69754;
count__69739_69743 = G__69755;
i__69740_69744 = G__69756;
continue;
} else {
var cell_69757 = cljs.core.first.call(null,seq__69737_69751__$1);
coding_challenges.maze_generator.cell.draw.call(null,w,cell_69757);

var G__69758 = cljs.core.next.call(null,seq__69737_69751__$1);
var G__69759 = null;
var G__69760 = (0);
var G__69761 = (0);
seq__69737_69741 = G__69758;
chunk__69738_69742 = G__69759;
count__69739_69743 = G__69760;
i__69740_69744 = G__69761;
continue;
}
} else {
}
}
break;
}

return coding_challenges.maze_generator.cell.highlight.call(null,w,com.rpl.specter.compiled_select_one.call(null,coding_challenges.maze_generator.views.current_cell_path,grid));
});
coding_challenges.maze_generator.views.maze_generator_sketch = (function coding_challenges$maze_generator$views$maze_generator_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"maze-generator",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.maze_generator.views.update_STAR_))?(function() { 
var G__69762__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.maze_generator.views.update_STAR_,args);
};
var G__69762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69763__i = 0, G__69763__a = new Array(arguments.length -  0);
while (G__69763__i < G__69763__a.length) {G__69763__a[G__69763__i] = arguments[G__69763__i + 0]; ++G__69763__i;}
  args = new cljs.core.IndexedSeq(G__69763__a,0);
} 
return G__69762__delegate.call(this,args);};
G__69762.cljs$lang$maxFixedArity = 0;
G__69762.cljs$lang$applyTo = (function (arglist__69764){
var args = cljs.core.seq(arglist__69764);
return G__69762__delegate(args);
});
G__69762.cljs$core$IFn$_invoke$arity$variadic = G__69762__delegate;
return G__69762;
})()
:coding_challenges.maze_generator.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.maze_generator.views.w,coding_challenges.maze_generator.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.maze_generator.views.setup))?(function() { 
var G__69765__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.maze_generator.views.setup,args);
};
var G__69765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69766__i = 0, G__69766__a = new Array(arguments.length -  0);
while (G__69766__i < G__69766__a.length) {G__69766__a[G__69766__i] = arguments[G__69766__i + 0]; ++G__69766__i;}
  args = new cljs.core.IndexedSeq(G__69766__a,0);
} 
return G__69765__delegate.call(this,args);};
G__69765.cljs$lang$maxFixedArity = 0;
G__69765.cljs$lang$applyTo = (function (arglist__69767){
var args = cljs.core.seq(arglist__69767);
return G__69765__delegate(args);
});
G__69765.cljs$core$IFn$_invoke$arity$variadic = G__69765__delegate;
return G__69765;
})()
:coding_challenges.maze_generator.views.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.maze_generator.views.draw))?(function() { 
var G__69768__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.maze_generator.views.draw,args);
};
var G__69768 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69769__i = 0, G__69769__a = new Array(arguments.length -  0);
while (G__69769__i < G__69769__a.length) {G__69769__a[G__69769__i] = arguments[G__69769__i + 0]; ++G__69769__i;}
  args = new cljs.core.IndexedSeq(G__69769__a,0);
} 
return G__69768__delegate.call(this,args);};
G__69768.cljs$lang$maxFixedArity = 0;
G__69768.cljs$lang$applyTo = (function (arglist__69770){
var args = cljs.core.seq(arglist__69770);
return G__69768__delegate(args);
});
G__69768.cljs$core$IFn$_invoke$arity$variadic = G__69768__delegate;
return G__69768;
})()
:coding_challenges.maze_generator.views.draw));
});
goog.exportSymbol('coding_challenges.maze_generator.views.maze_generator_sketch', coding_challenges.maze_generator.views.maze_generator_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__29067__29068__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__29067__29068__auto__);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Maze generator demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#maze-generator","canvas#maze-generator",437156800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.maze_generator.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.maze_generator.views.h], null)], null)], null);
})()], null);
});
;})(code))
})(),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.maze_generator.views.maze_generator_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1484736598468
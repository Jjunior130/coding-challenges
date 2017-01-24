// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.menger_sponge_fractal.box');
goog.require('cljs.core');
goog.require('quil.core');
coding_challenges.menger_sponge_fractal.box.make = (function coding_challenges$menger_sponge_fractal$box$make(x,y,z,r){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Box","Box",2112194642,null),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"z","z",-789527183),z], null),new cljs.core.Keyword(null,"r","r",-471384190),r], null);
});
coding_challenges.menger_sponge_fractal.box.generate = (function coding_challenges$menger_sponge_fractal$box$generate(p__35483){
var map__35496 = p__35483;
var map__35496__$1 = ((((!((map__35496 == null)))?((((map__35496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35496):map__35496);
var box = map__35496__$1;
var r = cljs.core.get.call(null,map__35496__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__35497 = cljs.core.get.call(null,map__35496__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var map__35497__$1 = ((((!((map__35497 == null)))?((((map__35497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35497):map__35497);
var x = cljs.core.get.call(null,map__35497__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__35497__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.call(null,map__35497__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var iter__7189__auto__ = ((function (map__35496,map__35496__$1,box,r,map__35497,map__35497__$1,x,y,z){
return (function coding_challenges$menger_sponge_fractal$box$generate_$_iter__35500(s__35501){
return (new cljs.core.LazySeq(null,((function (map__35496,map__35496__$1,box,r,map__35497,map__35497__$1,x,y,z){
return (function (){
var s__35501__$1 = s__35501;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35501__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var nx = cljs.core.first.call(null,xs__5205__auto__);
var iterys__7185__auto__ = ((function (s__35501__$1,nx,xs__5205__auto__,temp__4657__auto__,map__35496,map__35496__$1,box,r,map__35497,map__35497__$1,x,y,z){
return (function coding_challenges$menger_sponge_fractal$box$generate_$_iter__35500_$_iter__35502(s__35503){
return (new cljs.core.LazySeq(null,((function (s__35501__$1,nx,xs__5205__auto__,temp__4657__auto__,map__35496,map__35496__$1,box,r,map__35497,map__35497__$1,x,y,z){
return (function (){
var s__35503__$1 = s__35503;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__35503__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var ny = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__7185__auto__ = ((function (s__35503__$1,s__35501__$1,ny,xs__5205__auto____$1,temp__4657__auto____$1,nx,xs__5205__auto__,temp__4657__auto__,map__35496,map__35496__$1,box,r,map__35497,map__35497__$1,x,y,z){
return (function coding_challenges$menger_sponge_fractal$box$generate_$_iter__35500_$_iter__35502_$_iter__35504(s__35505){
return (new cljs.core.LazySeq(null,((function (s__35503__$1,s__35501__$1,ny,xs__5205__auto____$1,temp__4657__auto____$1,nx,xs__5205__auto__,temp__4657__auto__,map__35496,map__35496__$1,box,r,map__35497,map__35497__$1,x,y,z){
return (function (){
var s__35505__$1 = s__35505;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__35505__$1);
if(temp__4657__auto____$2){
var s__35505__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35505__$2)){
var c__7187__auto__ = cljs.core.chunk_first.call(null,s__35505__$2);
var size__7188__auto__ = cljs.core.count.call(null,c__7187__auto__);
var b__35507 = cljs.core.chunk_buffer.call(null,size__7188__auto__);
if((function (){var i__35506 = (0);
while(true){
if((i__35506 < size__7188__auto__)){
var nz = cljs.core._nth.call(null,c__7187__auto__,i__35506);
var sum = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,Math.abs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx,ny,nz], null)));
var new_r = (r / (3));
if((sum > (1))){
cljs.core.chunk_append.call(null,b__35507,coding_challenges.menger_sponge_fractal.box.make.call(null,((nx * new_r) + x),((ny * new_r) + y),((nz * new_r) + z),new_r));

var G__35508 = (i__35506 + (1));
i__35506 = G__35508;
continue;
} else {
var G__35509 = (i__35506 + (1));
i__35506 = G__35509;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35507),coding_challenges$menger_sponge_fractal$box$generate_$_iter__35500_$_iter__35502_$_iter__35504.call(null,cljs.core.chunk_rest.call(null,s__35505__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35507),null);
}
} else {
var nz = cljs.core.first.call(null,s__35505__$2);
var sum = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,Math.abs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx,ny,nz], null)));
var new_r = (r / (3));
if((sum > (1))){
return cljs.core.cons.call(null,coding_challenges.menger_sponge_fractal.box.make.call(null,((nx * new_r) + x),((ny * new_r) + y),((nz * new_r) + z),new_r),coding_challenges$menger_sponge_fractal$box$generate_$_iter__35500_$_iter__35502_$_iter__35504.call(null,cljs.core.rest.call(null,s__35505__$2)));
} else {
var G__35510 = cljs.core.rest.call(null,s__35505__$2);
s__35505__$1 = G__35510;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__35503__$1,s__35501__$1,ny,xs__5205__auto____$1,temp__4657__auto____$1,nx,xs__5205__auto__,temp__4657__auto__,map__35496,map__35496__$1,box,r,map__35497,map__35497__$1,x,y,z))
,null,null));
});})(s__35503__$1,s__35501__$1,ny,xs__5205__auto____$1,temp__4657__auto____$1,nx,xs__5205__auto__,temp__4657__auto__,map__35496,map__35496__$1,box,r,map__35497,map__35497__$1,x,y,z))
;
var fs__7186__auto__ = cljs.core.seq.call(null,iterys__7185__auto__.call(null,cljs.core.range.call(null,(-1),(2))));
if(fs__7186__auto__){
return cljs.core.concat.call(null,fs__7186__auto__,coding_challenges$menger_sponge_fractal$box$generate_$_iter__35500_$_iter__35502.call(null,cljs.core.rest.call(null,s__35503__$1)));
} else {
var G__35511 = cljs.core.rest.call(null,s__35503__$1);
s__35503__$1 = G__35511;
continue;
}
} else {
return null;
}
break;
}
});})(s__35501__$1,nx,xs__5205__auto__,temp__4657__auto__,map__35496,map__35496__$1,box,r,map__35497,map__35497__$1,x,y,z))
,null,null));
});})(s__35501__$1,nx,xs__5205__auto__,temp__4657__auto__,map__35496,map__35496__$1,box,r,map__35497,map__35497__$1,x,y,z))
;
var fs__7186__auto__ = cljs.core.seq.call(null,iterys__7185__auto__.call(null,cljs.core.range.call(null,(-1),(2))));
if(fs__7186__auto__){
return cljs.core.concat.call(null,fs__7186__auto__,coding_challenges$menger_sponge_fractal$box$generate_$_iter__35500.call(null,cljs.core.rest.call(null,s__35501__$1)));
} else {
var G__35512 = cljs.core.rest.call(null,s__35501__$1);
s__35501__$1 = G__35512;
continue;
}
} else {
return null;
}
break;
}
});})(map__35496,map__35496__$1,box,r,map__35497,map__35497__$1,x,y,z))
,null,null));
});})(map__35496,map__35496__$1,box,r,map__35497,map__35497__$1,x,y,z))
;
return iter__7189__auto__.call(null,cljs.core.range.call(null,(-1),(2)));
});
coding_challenges.menger_sponge_fractal.box.draw = (function coding_challenges$menger_sponge_fractal$box$draw(p__35513){
var map__35518 = p__35513;
var map__35518__$1 = ((((!((map__35518 == null)))?((((map__35518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35518):map__35518);
var box = map__35518__$1;
var r = cljs.core.get.call(null,map__35518__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__35519 = cljs.core.get.call(null,map__35518__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var map__35519__$1 = ((((!((map__35519 == null)))?((((map__35519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35519):map__35519);
var x = cljs.core.get.call(null,map__35519__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__35519__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.call(null,map__35519__$1,new cljs.core.Keyword(null,"z","z",-789527183));
quil.core.push_matrix.call(null);

quil.core.translate.call(null,x,y,z);

quil.core.no_stroke.call(null);

quil.core.box.call(null,r);

return quil.core.pop_matrix.call(null);
});

//# sourceMappingURL=box.js.map?rel=1485242679708
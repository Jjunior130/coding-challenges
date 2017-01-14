// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.menger_sponge_fractal.box');
goog.require('cljs.core');
goog.require('quil.core');
coding_challenges.menger_sponge_fractal.box.make = (function coding_challenges$menger_sponge_fractal$box$make(x,y,z,r){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Box","Box",2112194642,null),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"z","z",-789527183),z], null),new cljs.core.Keyword(null,"r","r",-471384190),r], null);
});
coding_challenges.menger_sponge_fractal.box.generate = (function coding_challenges$menger_sponge_fractal$box$generate(box){
var iter__25826__auto__ = (function coding_challenges$menger_sponge_fractal$box$generate_$_iter__62140(s__62141){
return (new cljs.core.LazySeq(null,(function (){
var s__62141__$1 = s__62141;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__62141__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__25822__auto__ = ((function (s__62141__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function coding_challenges$menger_sponge_fractal$box$generate_$_iter__62140_$_iter__62142(s__62143){
return (new cljs.core.LazySeq(null,((function (s__62141__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__62143__$1 = s__62143;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__62143__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var y = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__25822__auto__ = ((function (s__62143__$1,s__62141__$1,y,xs__5205__auto____$1,temp__4657__auto____$1,x,xs__5205__auto__,temp__4657__auto__){
return (function coding_challenges$menger_sponge_fractal$box$generate_$_iter__62140_$_iter__62142_$_iter__62144(s__62145){
return (new cljs.core.LazySeq(null,((function (s__62143__$1,s__62141__$1,y,xs__5205__auto____$1,temp__4657__auto____$1,x,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__62145__$1 = s__62145;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__62145__$1);
if(temp__4657__auto____$2){
var s__62145__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__62145__$2)){
var c__25824__auto__ = cljs.core.chunk_first.call(null,s__62145__$2);
var size__25825__auto__ = cljs.core.count.call(null,c__25824__auto__);
var b__62147 = cljs.core.chunk_buffer.call(null,size__25825__auto__);
if((function (){var i__62146 = (0);
while(true){
if((i__62146 < size__25825__auto__)){
var z = cljs.core._nth.call(null,c__25824__auto__,i__62146);
var sum = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,Math.abs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null)));
var new_r = (new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(box) / (3));
if((sum > (1))){
cljs.core.chunk_append.call(null,b__62147,coding_challenges.menger_sponge_fractal.box.make.call(null,((x * new_r) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(box))),((y * new_r) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(box))),((z * new_r) + new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(box))),new_r));

var G__62148 = (i__62146 + (1));
i__62146 = G__62148;
continue;
} else {
var G__62149 = (i__62146 + (1));
i__62146 = G__62149;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62147),coding_challenges$menger_sponge_fractal$box$generate_$_iter__62140_$_iter__62142_$_iter__62144.call(null,cljs.core.chunk_rest.call(null,s__62145__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62147),null);
}
} else {
var z = cljs.core.first.call(null,s__62145__$2);
var sum = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,Math.abs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null)));
var new_r = (new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(box) / (3));
if((sum > (1))){
return cljs.core.cons.call(null,coding_challenges.menger_sponge_fractal.box.make.call(null,((x * new_r) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(box))),((y * new_r) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(box))),((z * new_r) + new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(box))),new_r),coding_challenges$menger_sponge_fractal$box$generate_$_iter__62140_$_iter__62142_$_iter__62144.call(null,cljs.core.rest.call(null,s__62145__$2)));
} else {
var G__62150 = cljs.core.rest.call(null,s__62145__$2);
s__62145__$1 = G__62150;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__62143__$1,s__62141__$1,y,xs__5205__auto____$1,temp__4657__auto____$1,x,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__62143__$1,s__62141__$1,y,xs__5205__auto____$1,temp__4657__auto____$1,x,xs__5205__auto__,temp__4657__auto__))
;
var fs__25823__auto__ = cljs.core.seq.call(null,iterys__25822__auto__.call(null,cljs.core.range.call(null,(-1),(2))));
if(fs__25823__auto__){
return cljs.core.concat.call(null,fs__25823__auto__,coding_challenges$menger_sponge_fractal$box$generate_$_iter__62140_$_iter__62142.call(null,cljs.core.rest.call(null,s__62143__$1)));
} else {
var G__62151 = cljs.core.rest.call(null,s__62143__$1);
s__62143__$1 = G__62151;
continue;
}
} else {
return null;
}
break;
}
});})(s__62141__$1,x,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__62141__$1,x,xs__5205__auto__,temp__4657__auto__))
;
var fs__25823__auto__ = cljs.core.seq.call(null,iterys__25822__auto__.call(null,cljs.core.range.call(null,(-1),(2))));
if(fs__25823__auto__){
return cljs.core.concat.call(null,fs__25823__auto__,coding_challenges$menger_sponge_fractal$box$generate_$_iter__62140.call(null,cljs.core.rest.call(null,s__62141__$1)));
} else {
var G__62152 = cljs.core.rest.call(null,s__62141__$1);
s__62141__$1 = G__62152;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25826__auto__.call(null,cljs.core.range.call(null,(-1),(2)));
});
coding_challenges.menger_sponge_fractal.box.draw = (function coding_challenges$menger_sponge_fractal$box$draw(box){
quil.core.push_matrix.call(null);

quil.core.translate.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(box)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(box)),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(box)));

quil.core.no_stroke.call(null);

quil.core.box.call(null,new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(box));

return quil.core.pop_matrix.call(null);
});

//# sourceMappingURL=box.js.map?rel=1484333403163
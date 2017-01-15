// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.menger_sponge_fractal.box');
goog.require('cljs.core');
goog.require('quil.core');
coding_challenges.menger_sponge_fractal.box.make = (function coding_challenges$menger_sponge_fractal$box$make(x,y,z,r){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Box","Box",2112194642,null),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"z","z",-789527183),z], null),new cljs.core.Keyword(null,"r","r",-471384190),r], null);
});
coding_challenges.menger_sponge_fractal.box.generate = (function coding_challenges$menger_sponge_fractal$box$generate(box){
var iter__7189__auto__ = (function coding_challenges$menger_sponge_fractal$box$generate_$_iter__35350(s__35351){
return (new cljs.core.LazySeq(null,(function (){
var s__35351__$1 = s__35351;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35351__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__7185__auto__ = ((function (s__35351__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function coding_challenges$menger_sponge_fractal$box$generate_$_iter__35350_$_iter__35352(s__35353){
return (new cljs.core.LazySeq(null,((function (s__35351__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__35353__$1 = s__35353;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__35353__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var y = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__7185__auto__ = ((function (s__35353__$1,s__35351__$1,y,xs__5205__auto____$1,temp__4657__auto____$1,x,xs__5205__auto__,temp__4657__auto__){
return (function coding_challenges$menger_sponge_fractal$box$generate_$_iter__35350_$_iter__35352_$_iter__35354(s__35355){
return (new cljs.core.LazySeq(null,((function (s__35353__$1,s__35351__$1,y,xs__5205__auto____$1,temp__4657__auto____$1,x,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__35355__$1 = s__35355;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__35355__$1);
if(temp__4657__auto____$2){
var s__35355__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35355__$2)){
var c__7187__auto__ = cljs.core.chunk_first.call(null,s__35355__$2);
var size__7188__auto__ = cljs.core.count.call(null,c__7187__auto__);
var b__35357 = cljs.core.chunk_buffer.call(null,size__7188__auto__);
if((function (){var i__35356 = (0);
while(true){
if((i__35356 < size__7188__auto__)){
var z = cljs.core._nth.call(null,c__7187__auto__,i__35356);
var sum = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,Math.abs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null)));
var new_r = (new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(box) / (3));
if((sum > (1))){
cljs.core.chunk_append.call(null,b__35357,coding_challenges.menger_sponge_fractal.box.make.call(null,((x * new_r) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(box))),((y * new_r) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(box))),((z * new_r) + new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(box))),new_r));

var G__35358 = (i__35356 + (1));
i__35356 = G__35358;
continue;
} else {
var G__35359 = (i__35356 + (1));
i__35356 = G__35359;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35357),coding_challenges$menger_sponge_fractal$box$generate_$_iter__35350_$_iter__35352_$_iter__35354.call(null,cljs.core.chunk_rest.call(null,s__35355__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35357),null);
}
} else {
var z = cljs.core.first.call(null,s__35355__$2);
var sum = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,Math.abs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null)));
var new_r = (new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(box) / (3));
if((sum > (1))){
return cljs.core.cons.call(null,coding_challenges.menger_sponge_fractal.box.make.call(null,((x * new_r) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(box))),((y * new_r) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(box))),((z * new_r) + new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(box))),new_r),coding_challenges$menger_sponge_fractal$box$generate_$_iter__35350_$_iter__35352_$_iter__35354.call(null,cljs.core.rest.call(null,s__35355__$2)));
} else {
var G__35360 = cljs.core.rest.call(null,s__35355__$2);
s__35355__$1 = G__35360;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__35353__$1,s__35351__$1,y,xs__5205__auto____$1,temp__4657__auto____$1,x,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__35353__$1,s__35351__$1,y,xs__5205__auto____$1,temp__4657__auto____$1,x,xs__5205__auto__,temp__4657__auto__))
;
var fs__7186__auto__ = cljs.core.seq.call(null,iterys__7185__auto__.call(null,cljs.core.range.call(null,(-1),(2))));
if(fs__7186__auto__){
return cljs.core.concat.call(null,fs__7186__auto__,coding_challenges$menger_sponge_fractal$box$generate_$_iter__35350_$_iter__35352.call(null,cljs.core.rest.call(null,s__35353__$1)));
} else {
var G__35361 = cljs.core.rest.call(null,s__35353__$1);
s__35353__$1 = G__35361;
continue;
}
} else {
return null;
}
break;
}
});})(s__35351__$1,x,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__35351__$1,x,xs__5205__auto__,temp__4657__auto__))
;
var fs__7186__auto__ = cljs.core.seq.call(null,iterys__7185__auto__.call(null,cljs.core.range.call(null,(-1),(2))));
if(fs__7186__auto__){
return cljs.core.concat.call(null,fs__7186__auto__,coding_challenges$menger_sponge_fractal$box$generate_$_iter__35350.call(null,cljs.core.rest.call(null,s__35351__$1)));
} else {
var G__35362 = cljs.core.rest.call(null,s__35351__$1);
s__35351__$1 = G__35362;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__.call(null,cljs.core.range.call(null,(-1),(2)));
});
coding_challenges.menger_sponge_fractal.box.draw = (function coding_challenges$menger_sponge_fractal$box$draw(box){
quil.core.push_matrix.call(null);

quil.core.translate.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(box)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(box)),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(box)));

quil.core.no_stroke.call(null);

quil.core.box.call(null,new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(box));

return quil.core.pop_matrix.call(null);
});

//# sourceMappingURL=box.js.map?rel=1484441674890
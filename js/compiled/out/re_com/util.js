// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25826__auto__ = (function re_com$util$fmap_$_iter__132638(s__132639){
return (new cljs.core.LazySeq(null,(function (){
var s__132639__$1 = s__132639;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__132639__$1);
if(temp__4657__auto__){
var s__132639__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__132639__$2)){
var c__25824__auto__ = cljs.core.chunk_first.call(null,s__132639__$2);
var size__25825__auto__ = cljs.core.count.call(null,c__25824__auto__);
var b__132641 = cljs.core.chunk_buffer.call(null,size__25825__auto__);
if((function (){var i__132640 = (0);
while(true){
if((i__132640 < size__25825__auto__)){
var vec__132648 = cljs.core._nth.call(null,c__25824__auto__,i__132640);
var k = cljs.core.nth.call(null,vec__132648,(0),null);
var val = cljs.core.nth.call(null,vec__132648,(1),null);
cljs.core.chunk_append.call(null,b__132641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__132654 = (i__132640 + (1));
i__132640 = G__132654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__132641),re_com$util$fmap_$_iter__132638.call(null,cljs.core.chunk_rest.call(null,s__132639__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__132641),null);
}
} else {
var vec__132651 = cljs.core.first.call(null,s__132639__$2);
var k = cljs.core.nth.call(null,vec__132651,(0),null);
var val = cljs.core.nth.call(null,vec__132651,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__132638.call(null,cljs.core.rest.call(null,s__132639__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25826__auto__.call(null,m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__26128__auto__ = [];
var len__26121__auto___132656 = arguments.length;
var i__26122__auto___132657 = (0);
while(true){
if((i__26122__auto___132657 < len__26121__auto___132656)){
args__26128__auto__.push((arguments[i__26122__auto___132657]));

var G__132658 = (i__26122__auto___132657 + (1));
i__26122__auto___132657 = G__132658;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals)){
return cljs.core.apply.call(null,cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last.call(null,vals);
}
});

re_com.util.deep_merge.cljs$lang$maxFixedArity = (0);

re_com.util.deep_merge.cljs$lang$applyTo = (function (seq132655){
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq132655));
});

re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (val_or_atom.cljs$core$IDeref$))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count.call(null,s) < len)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,len,cljs.core.concat.call(null,cljs.core.repeat.call(null,len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero.call(null,[cljs.core.str(num)].join(''),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__26128__auto__ = [];
var len__26121__auto___132663 = arguments.length;
var i__26122__auto___132664 = (0);
while(true){
if((i__26122__auto___132664 < len__26121__auto___132663)){
args__26128__auto__.push((arguments[i__26122__auto___132664]));

var G__132665 = (i__26122__auto___132664 + (1));
i__26122__auto___132664 = G__132665;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str((cljs.core.truth_(negative)?(- val):val)),cljs.core.str("px")].join('');
});

re_com.util.px.cljs$lang$maxFixedArity = (1);

re_com.util.px.cljs$lang$applyTo = (function (seq132661){
var G__132662 = cljs.core.first.call(null,seq132661);
var seq132661__$1 = cljs.core.next.call(null,seq132661);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(G__132662,seq132661__$1);
});

/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,v,(0),n),cljs.core.subvec.call(null,v,(n + (1)),cljs.core.count.call(null,v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.subvec.call(null,vect,(0),index),item,cljs.core.subvec.call(null,vect,index));
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__26128__auto__ = [];
var len__26121__auto___132672 = arguments.length;
var i__26122__auto___132673 = (0);
while(true){
if((i__26122__auto___132673 < len__26121__auto___132672)){
args__26128__auto__.push((arguments[i__26122__auto___132673]));

var G__132674 = (i__26122__auto___132673 + (1));
i__26122__auto___132673 = G__132674;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((2) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26129__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__132669){
var map__132670 = p__132669;
var map__132670__$1 = ((((!((map__132670 == null)))?((((map__132670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132670):map__132670);
var id_fn = cljs.core.get.call(null,map__132670__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__132670,map__132670__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__132670,map__132670__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.position_for_id.cljs$lang$applyTo = (function (seq132666){
var G__132667 = cljs.core.first.call(null,seq132666);
var seq132666__$1 = cljs.core.next.call(null,seq132666);
var G__132668 = cljs.core.first.call(null,seq132666__$1);
var seq132666__$2 = cljs.core.next.call(null,seq132666__$1);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(G__132667,G__132668,seq132666__$2);
});

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__26128__auto__ = [];
var len__26121__auto___132682 = arguments.length;
var i__26122__auto___132683 = (0);
while(true){
if((i__26122__auto___132683 < len__26121__auto___132682)){
args__26128__auto__.push((arguments[i__26122__auto___132683]));

var G__132684 = (i__26122__auto___132683 + (1));
i__26122__auto___132683 = G__132684;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((2) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26129__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__132679){
var map__132680 = p__132679;
var map__132680__$1 = ((((!((map__132680 == null)))?((((map__132680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132680):map__132680);
var id_fn = cljs.core.get.call(null,map__132680__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__132680,map__132680__$1,id_fn){
return (function (p1__132675_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__132675_SHARP_),id);
});})(map__132680,map__132680__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.item_for_id.cljs$lang$applyTo = (function (seq132676){
var G__132677 = cljs.core.first.call(null,seq132676);
var seq132676__$1 = cljs.core.next.call(null,seq132676);
var G__132678 = cljs.core.first.call(null,seq132676__$1);
var seq132676__$2 = cljs.core.next.call(null,seq132676__$1);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(G__132677,G__132678,seq132676__$2);
});

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__26128__auto__ = [];
var len__26121__auto___132692 = arguments.length;
var i__26122__auto___132693 = (0);
while(true){
if((i__26122__auto___132693 < len__26121__auto___132692)){
args__26128__auto__.push((arguments[i__26122__auto___132693]));

var G__132694 = (i__26122__auto___132693 + (1));
i__26122__auto___132693 = G__132694;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((2) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26129__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__132689){
var map__132690 = p__132689;
var map__132690__$1 = ((((!((map__132690 == null)))?((((map__132690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132690):map__132690);
var id_fn = cljs.core.get.call(null,map__132690__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__132690,map__132690__$1,id_fn){
return (function (p1__132685_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__132685_SHARP_),id);
});})(map__132690,map__132690__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq132686){
var G__132687 = cljs.core.first.call(null,seq132686);
var seq132686__$1 = cljs.core.next.call(null,seq132686);
var G__132688 = cljs.core.first.call(null,seq132686__$1);
var seq132686__$2 = cljs.core.next.call(null,seq132686__$1);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic(G__132687,G__132688,seq132686__$2);
});

/**
 * (for [[index item first? last?] (enumerate coll)] ...)  
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count.call(null,coll) - (1));
var f = ((function (c){
return (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.call(null,(0),index),cljs.core._EQ_.call(null,c,index)], null);
});})(c))
;
return cljs.core.map_indexed.call(null,f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.call(null,current_node.tagName,"BODY")){
var G__132695 = current_node.parentNode;
var G__132696 = (sum_scroll_left + current_node.scrollLeft);
var G__132697 = (sum_scroll_top + current_node.scrollTop);
current_node = G__132695;
sum_scroll_left = G__132696;
sum_scroll_top = G__132697;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});
/**
 * Answer a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date.getYear(),local_date.getMonth(),local_date.getDate(),(0),(0),(0),(0)));
});

//# sourceMappingURL=util.js.map?rel=1484099806438
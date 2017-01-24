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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7189__auto__ = (function re_com$util$fmap_$_iter__14561(s__14562){
return (new cljs.core.LazySeq(null,(function (){
var s__14562__$1 = s__14562;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__14562__$1);
if(temp__4657__auto__){
var s__14562__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14562__$2)){
var c__7187__auto__ = cljs.core.chunk_first.call(null,s__14562__$2);
var size__7188__auto__ = cljs.core.count.call(null,c__7187__auto__);
var b__14564 = cljs.core.chunk_buffer.call(null,size__7188__auto__);
if((function (){var i__14563 = (0);
while(true){
if((i__14563 < size__7188__auto__)){
var vec__14571 = cljs.core._nth.call(null,c__7187__auto__,i__14563);
var k = cljs.core.nth.call(null,vec__14571,(0),null);
var val = cljs.core.nth.call(null,vec__14571,(1),null);
cljs.core.chunk_append.call(null,b__14564,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__14577 = (i__14563 + (1));
i__14563 = G__14577;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14564),re_com$util$fmap_$_iter__14561.call(null,cljs.core.chunk_rest.call(null,s__14562__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14564),null);
}
} else {
var vec__14574 = cljs.core.first.call(null,s__14562__$2);
var k = cljs.core.nth.call(null,vec__14574,(0),null);
var val = cljs.core.nth.call(null,vec__14574,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__14561.call(null,cljs.core.rest.call(null,s__14562__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__.call(null,m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__7491__auto__ = [];
var len__7484__auto___14579 = arguments.length;
var i__7485__auto___14580 = (0);
while(true){
if((i__7485__auto___14580 < len__7484__auto___14579)){
args__7491__auto__.push((arguments[i__7485__auto___14580]));

var G__14581 = (i__7485__auto___14580 + (1));
i__7485__auto___14580 = G__14581;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals)){
return cljs.core.apply.call(null,cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last.call(null,vals);
}
});

re_com.util.deep_merge.cljs$lang$maxFixedArity = (0);

re_com.util.deep_merge.cljs$lang$applyTo = (function (seq14578){
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14578));
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
var args__7491__auto__ = [];
var len__7484__auto___14586 = arguments.length;
var i__7485__auto___14587 = (0);
while(true){
if((i__7485__auto___14587 < len__7484__auto___14586)){
args__7491__auto__.push((arguments[i__7485__auto___14587]));

var G__14588 = (i__7485__auto___14587 + (1));
i__7485__auto___14587 = G__14588;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str((cljs.core.truth_(negative)?(- val):val)),cljs.core.str("px")].join('');
});

re_com.util.px.cljs$lang$maxFixedArity = (1);

re_com.util.px.cljs$lang$applyTo = (function (seq14584){
var G__14585 = cljs.core.first.call(null,seq14584);
var seq14584__$1 = cljs.core.next.call(null,seq14584);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(G__14585,seq14584__$1);
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
var args__7491__auto__ = [];
var len__7484__auto___14595 = arguments.length;
var i__7485__auto___14596 = (0);
while(true){
if((i__7485__auto___14596 < len__7484__auto___14595)){
args__7491__auto__.push((arguments[i__7485__auto___14596]));

var G__14597 = (i__7485__auto___14596 + (1));
i__7485__auto___14596 = G__14597;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__14592){
var map__14593 = p__14592;
var map__14593__$1 = ((((!((map__14593 == null)))?((((map__14593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14593):map__14593);
var id_fn = cljs.core.get.call(null,map__14593__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__14593,map__14593__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__14593,map__14593__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.position_for_id.cljs$lang$applyTo = (function (seq14589){
var G__14590 = cljs.core.first.call(null,seq14589);
var seq14589__$1 = cljs.core.next.call(null,seq14589);
var G__14591 = cljs.core.first.call(null,seq14589__$1);
var seq14589__$2 = cljs.core.next.call(null,seq14589__$1);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(G__14590,G__14591,seq14589__$2);
});

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__7491__auto__ = [];
var len__7484__auto___14605 = arguments.length;
var i__7485__auto___14606 = (0);
while(true){
if((i__7485__auto___14606 < len__7484__auto___14605)){
args__7491__auto__.push((arguments[i__7485__auto___14606]));

var G__14607 = (i__7485__auto___14606 + (1));
i__7485__auto___14606 = G__14607;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__14602){
var map__14603 = p__14602;
var map__14603__$1 = ((((!((map__14603 == null)))?((((map__14603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14603):map__14603);
var id_fn = cljs.core.get.call(null,map__14603__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__14603,map__14603__$1,id_fn){
return (function (p1__14598_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__14598_SHARP_),id);
});})(map__14603,map__14603__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.item_for_id.cljs$lang$applyTo = (function (seq14599){
var G__14600 = cljs.core.first.call(null,seq14599);
var seq14599__$1 = cljs.core.next.call(null,seq14599);
var G__14601 = cljs.core.first.call(null,seq14599__$1);
var seq14599__$2 = cljs.core.next.call(null,seq14599__$1);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(G__14600,G__14601,seq14599__$2);
});

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__7491__auto__ = [];
var len__7484__auto___14615 = arguments.length;
var i__7485__auto___14616 = (0);
while(true){
if((i__7485__auto___14616 < len__7484__auto___14615)){
args__7491__auto__.push((arguments[i__7485__auto___14616]));

var G__14617 = (i__7485__auto___14616 + (1));
i__7485__auto___14616 = G__14617;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__14612){
var map__14613 = p__14612;
var map__14613__$1 = ((((!((map__14613 == null)))?((((map__14613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14613):map__14613);
var id_fn = cljs.core.get.call(null,map__14613__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__14613,map__14613__$1,id_fn){
return (function (p1__14608_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__14608_SHARP_),id);
});})(map__14613,map__14613__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq14609){
var G__14610 = cljs.core.first.call(null,seq14609);
var seq14609__$1 = cljs.core.next.call(null,seq14609);
var G__14611 = cljs.core.first.call(null,seq14609__$1);
var seq14609__$2 = cljs.core.next.call(null,seq14609__$1);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic(G__14610,G__14611,seq14609__$2);
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
var G__14618 = current_node.parentNode;
var G__14619 = (sum_scroll_left + current_node.scrollLeft);
var G__14620 = (sum_scroll_top + current_node.scrollTop);
current_node = G__14618;
sum_scroll_left = G__14619;
sum_scroll_top = G__14620;
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

//# sourceMappingURL=util.js.map?rel=1485242657171
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25826__auto__ = (function re_com$util$fmap_$_iter__53162(s__53163){
return (new cljs.core.LazySeq(null,(function (){
var s__53163__$1 = s__53163;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__53163__$1);
if(temp__4657__auto__){
var s__53163__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53163__$2)){
var c__25824__auto__ = cljs.core.chunk_first.call(null,s__53163__$2);
var size__25825__auto__ = cljs.core.count.call(null,c__25824__auto__);
var b__53165 = cljs.core.chunk_buffer.call(null,size__25825__auto__);
if((function (){var i__53164 = (0);
while(true){
if((i__53164 < size__25825__auto__)){
var vec__53172 = cljs.core._nth.call(null,c__25824__auto__,i__53164);
var k = cljs.core.nth.call(null,vec__53172,(0),null);
var val = cljs.core.nth.call(null,vec__53172,(1),null);
cljs.core.chunk_append.call(null,b__53165,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__53178 = (i__53164 + (1));
i__53164 = G__53178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53165),re_com$util$fmap_$_iter__53162.call(null,cljs.core.chunk_rest.call(null,s__53163__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53165),null);
}
} else {
var vec__53175 = cljs.core.first.call(null,s__53163__$2);
var k = cljs.core.nth.call(null,vec__53175,(0),null);
var val = cljs.core.nth.call(null,vec__53175,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__53162.call(null,cljs.core.rest.call(null,s__53163__$2)));
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
var len__26121__auto___53180 = arguments.length;
var i__26122__auto___53181 = (0);
while(true){
if((i__26122__auto___53181 < len__26121__auto___53180)){
args__26128__auto__.push((arguments[i__26122__auto___53181]));

var G__53182 = (i__26122__auto___53181 + (1));
i__26122__auto___53181 = G__53182;
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

re_com.util.deep_merge.cljs$lang$applyTo = (function (seq53179){
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53179));
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
var len__26121__auto___53187 = arguments.length;
var i__26122__auto___53188 = (0);
while(true){
if((i__26122__auto___53188 < len__26121__auto___53187)){
args__26128__auto__.push((arguments[i__26122__auto___53188]));

var G__53189 = (i__26122__auto___53188 + (1));
i__26122__auto___53188 = G__53189;
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

re_com.util.px.cljs$lang$applyTo = (function (seq53185){
var G__53186 = cljs.core.first.call(null,seq53185);
var seq53185__$1 = cljs.core.next.call(null,seq53185);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(G__53186,seq53185__$1);
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
var len__26121__auto___53196 = arguments.length;
var i__26122__auto___53197 = (0);
while(true){
if((i__26122__auto___53197 < len__26121__auto___53196)){
args__26128__auto__.push((arguments[i__26122__auto___53197]));

var G__53198 = (i__26122__auto___53197 + (1));
i__26122__auto___53197 = G__53198;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((2) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26129__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__53193){
var map__53194 = p__53193;
var map__53194__$1 = ((((!((map__53194 == null)))?((((map__53194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53194):map__53194);
var id_fn = cljs.core.get.call(null,map__53194__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__53194,map__53194__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__53194,map__53194__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.position_for_id.cljs$lang$applyTo = (function (seq53190){
var G__53191 = cljs.core.first.call(null,seq53190);
var seq53190__$1 = cljs.core.next.call(null,seq53190);
var G__53192 = cljs.core.first.call(null,seq53190__$1);
var seq53190__$2 = cljs.core.next.call(null,seq53190__$1);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(G__53191,G__53192,seq53190__$2);
});

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__26128__auto__ = [];
var len__26121__auto___53206 = arguments.length;
var i__26122__auto___53207 = (0);
while(true){
if((i__26122__auto___53207 < len__26121__auto___53206)){
args__26128__auto__.push((arguments[i__26122__auto___53207]));

var G__53208 = (i__26122__auto___53207 + (1));
i__26122__auto___53207 = G__53208;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((2) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26129__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__53203){
var map__53204 = p__53203;
var map__53204__$1 = ((((!((map__53204 == null)))?((((map__53204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53204):map__53204);
var id_fn = cljs.core.get.call(null,map__53204__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__53204,map__53204__$1,id_fn){
return (function (p1__53199_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__53199_SHARP_),id);
});})(map__53204,map__53204__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.item_for_id.cljs$lang$applyTo = (function (seq53200){
var G__53201 = cljs.core.first.call(null,seq53200);
var seq53200__$1 = cljs.core.next.call(null,seq53200);
var G__53202 = cljs.core.first.call(null,seq53200__$1);
var seq53200__$2 = cljs.core.next.call(null,seq53200__$1);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(G__53201,G__53202,seq53200__$2);
});

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__26128__auto__ = [];
var len__26121__auto___53216 = arguments.length;
var i__26122__auto___53217 = (0);
while(true){
if((i__26122__auto___53217 < len__26121__auto___53216)){
args__26128__auto__.push((arguments[i__26122__auto___53217]));

var G__53218 = (i__26122__auto___53217 + (1));
i__26122__auto___53217 = G__53218;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((2) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26129__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__53213){
var map__53214 = p__53213;
var map__53214__$1 = ((((!((map__53214 == null)))?((((map__53214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53214):map__53214);
var id_fn = cljs.core.get.call(null,map__53214__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__53214,map__53214__$1,id_fn){
return (function (p1__53209_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__53209_SHARP_),id);
});})(map__53214,map__53214__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq53210){
var G__53211 = cljs.core.first.call(null,seq53210);
var seq53210__$1 = cljs.core.next.call(null,seq53210);
var G__53212 = cljs.core.first.call(null,seq53210__$1);
var seq53210__$2 = cljs.core.next.call(null,seq53210__$1);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic(G__53211,G__53212,seq53210__$2);
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
var G__53219 = current_node.parentNode;
var G__53220 = (sum_scroll_left + current_node.scrollLeft);
var G__53221 = (sum_scroll_top + current_node.scrollTop);
current_node = G__53219;
sum_scroll_left = G__53220;
sum_scroll_top = G__53221;
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

//# sourceMappingURL=util.js.map?rel=1484333384361
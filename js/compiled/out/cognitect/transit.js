// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__14388_14392 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__14389_14393 = null;
var count__14390_14394 = (0);
var i__14391_14395 = (0);
while(true){
if((i__14391_14395 < count__14390_14394)){
var k_14396 = cljs.core._nth.call(null,chunk__14389_14393,i__14391_14395);
var v_14397 = (b[k_14396]);
(a[k_14396] = v_14397);

var G__14398 = seq__14388_14392;
var G__14399 = chunk__14389_14393;
var G__14400 = count__14390_14394;
var G__14401 = (i__14391_14395 + (1));
seq__14388_14392 = G__14398;
chunk__14389_14393 = G__14399;
count__14390_14394 = G__14400;
i__14391_14395 = G__14401;
continue;
} else {
var temp__4657__auto___14402 = cljs.core.seq.call(null,seq__14388_14392);
if(temp__4657__auto___14402){
var seq__14388_14403__$1 = temp__4657__auto___14402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14388_14403__$1)){
var c__7230__auto___14404 = cljs.core.chunk_first.call(null,seq__14388_14403__$1);
var G__14405 = cljs.core.chunk_rest.call(null,seq__14388_14403__$1);
var G__14406 = c__7230__auto___14404;
var G__14407 = cljs.core.count.call(null,c__7230__auto___14404);
var G__14408 = (0);
seq__14388_14392 = G__14405;
chunk__14389_14393 = G__14406;
count__14390_14394 = G__14407;
i__14391_14395 = G__14408;
continue;
} else {
var k_14409 = cljs.core.first.call(null,seq__14388_14403__$1);
var v_14410 = (b[k_14409]);
(a[k_14409] = v_14410);

var G__14411 = cljs.core.next.call(null,seq__14388_14403__$1);
var G__14412 = null;
var G__14413 = (0);
var G__14414 = (0);
seq__14388_14392 = G__14411;
chunk__14389_14393 = G__14412;
count__14390_14394 = G__14413;
i__14391_14395 = G__14414;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args14415 = [];
var len__7494__auto___14418 = arguments.length;
var i__7495__auto___14419 = (0);
while(true){
if((i__7495__auto___14419 < len__7494__auto___14418)){
args14415.push((arguments[i__7495__auto___14419]));

var G__14420 = (i__7495__auto___14419 + (1));
i__7495__auto___14419 = G__14420;
continue;
} else {
}
break;
}

var G__14417 = args14415.length;
switch (G__14417) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14415.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__14422 = (i + (2));
var G__14423 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__14422;
ret = G__14423;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__14424_14428 = cljs.core.seq.call(null,v);
var chunk__14425_14429 = null;
var count__14426_14430 = (0);
var i__14427_14431 = (0);
while(true){
if((i__14427_14431 < count__14426_14430)){
var x_14432 = cljs.core._nth.call(null,chunk__14425_14429,i__14427_14431);
ret.push(x_14432);

var G__14433 = seq__14424_14428;
var G__14434 = chunk__14425_14429;
var G__14435 = count__14426_14430;
var G__14436 = (i__14427_14431 + (1));
seq__14424_14428 = G__14433;
chunk__14425_14429 = G__14434;
count__14426_14430 = G__14435;
i__14427_14431 = G__14436;
continue;
} else {
var temp__4657__auto___14437 = cljs.core.seq.call(null,seq__14424_14428);
if(temp__4657__auto___14437){
var seq__14424_14438__$1 = temp__4657__auto___14437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14424_14438__$1)){
var c__7230__auto___14439 = cljs.core.chunk_first.call(null,seq__14424_14438__$1);
var G__14440 = cljs.core.chunk_rest.call(null,seq__14424_14438__$1);
var G__14441 = c__7230__auto___14439;
var G__14442 = cljs.core.count.call(null,c__7230__auto___14439);
var G__14443 = (0);
seq__14424_14428 = G__14440;
chunk__14425_14429 = G__14441;
count__14426_14430 = G__14442;
i__14427_14431 = G__14443;
continue;
} else {
var x_14444 = cljs.core.first.call(null,seq__14424_14438__$1);
ret.push(x_14444);

var G__14445 = cljs.core.next.call(null,seq__14424_14438__$1);
var G__14446 = null;
var G__14447 = (0);
var G__14448 = (0);
seq__14424_14428 = G__14445;
chunk__14425_14429 = G__14446;
count__14426_14430 = G__14447;
i__14427_14431 = G__14448;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__14449_14453 = cljs.core.seq.call(null,v);
var chunk__14450_14454 = null;
var count__14451_14455 = (0);
var i__14452_14456 = (0);
while(true){
if((i__14452_14456 < count__14451_14455)){
var x_14457 = cljs.core._nth.call(null,chunk__14450_14454,i__14452_14456);
ret.push(x_14457);

var G__14458 = seq__14449_14453;
var G__14459 = chunk__14450_14454;
var G__14460 = count__14451_14455;
var G__14461 = (i__14452_14456 + (1));
seq__14449_14453 = G__14458;
chunk__14450_14454 = G__14459;
count__14451_14455 = G__14460;
i__14452_14456 = G__14461;
continue;
} else {
var temp__4657__auto___14462 = cljs.core.seq.call(null,seq__14449_14453);
if(temp__4657__auto___14462){
var seq__14449_14463__$1 = temp__4657__auto___14462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14449_14463__$1)){
var c__7230__auto___14464 = cljs.core.chunk_first.call(null,seq__14449_14463__$1);
var G__14465 = cljs.core.chunk_rest.call(null,seq__14449_14463__$1);
var G__14466 = c__7230__auto___14464;
var G__14467 = cljs.core.count.call(null,c__7230__auto___14464);
var G__14468 = (0);
seq__14449_14453 = G__14465;
chunk__14450_14454 = G__14466;
count__14451_14455 = G__14467;
i__14452_14456 = G__14468;
continue;
} else {
var x_14469 = cljs.core.first.call(null,seq__14449_14463__$1);
ret.push(x_14469);

var G__14470 = cljs.core.next.call(null,seq__14449_14463__$1);
var G__14471 = null;
var G__14472 = (0);
var G__14473 = (0);
seq__14449_14453 = G__14470;
chunk__14450_14454 = G__14471;
count__14451_14455 = G__14472;
i__14452_14456 = G__14473;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__14474_14478 = cljs.core.seq.call(null,v);
var chunk__14475_14479 = null;
var count__14476_14480 = (0);
var i__14477_14481 = (0);
while(true){
if((i__14477_14481 < count__14476_14480)){
var x_14482 = cljs.core._nth.call(null,chunk__14475_14479,i__14477_14481);
ret.push(x_14482);

var G__14483 = seq__14474_14478;
var G__14484 = chunk__14475_14479;
var G__14485 = count__14476_14480;
var G__14486 = (i__14477_14481 + (1));
seq__14474_14478 = G__14483;
chunk__14475_14479 = G__14484;
count__14476_14480 = G__14485;
i__14477_14481 = G__14486;
continue;
} else {
var temp__4657__auto___14487 = cljs.core.seq.call(null,seq__14474_14478);
if(temp__4657__auto___14487){
var seq__14474_14488__$1 = temp__4657__auto___14487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14474_14488__$1)){
var c__7230__auto___14489 = cljs.core.chunk_first.call(null,seq__14474_14488__$1);
var G__14490 = cljs.core.chunk_rest.call(null,seq__14474_14488__$1);
var G__14491 = c__7230__auto___14489;
var G__14492 = cljs.core.count.call(null,c__7230__auto___14489);
var G__14493 = (0);
seq__14474_14478 = G__14490;
chunk__14475_14479 = G__14491;
count__14476_14480 = G__14492;
i__14477_14481 = G__14493;
continue;
} else {
var x_14494 = cljs.core.first.call(null,seq__14474_14488__$1);
ret.push(x_14494);

var G__14495 = cljs.core.next.call(null,seq__14474_14488__$1);
var G__14496 = null;
var G__14497 = (0);
var G__14498 = (0);
seq__14474_14478 = G__14495;
chunk__14475_14479 = G__14496;
count__14476_14480 = G__14497;
i__14477_14481 = G__14498;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args14499 = [];
var len__7494__auto___14514 = arguments.length;
var i__7495__auto___14515 = (0);
while(true){
if((i__7495__auto___14515 < len__7494__auto___14514)){
args14499.push((arguments[i__7495__auto___14515]));

var G__14516 = (i__7495__auto___14515 + (1));
i__7495__auto___14515 = G__14516;
continue;
} else {
}
break;
}

var G__14501 = args14499.length;
switch (G__14501) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14499.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__14502 = obj;
G__14502.push(kfn.call(null,k),vfn.call(null,v));

return G__14502;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x14503 = cljs.core.clone.call(null,handlers);
x14503.forEach = ((function (x14503,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__14504 = cljs.core.seq.call(null,coll);
var chunk__14505 = null;
var count__14506 = (0);
var i__14507 = (0);
while(true){
if((i__14507 < count__14506)){
var vec__14508 = cljs.core._nth.call(null,chunk__14505,i__14507);
var k = cljs.core.nth.call(null,vec__14508,(0),null);
var v = cljs.core.nth.call(null,vec__14508,(1),null);
f.call(null,v,k);

var G__14518 = seq__14504;
var G__14519 = chunk__14505;
var G__14520 = count__14506;
var G__14521 = (i__14507 + (1));
seq__14504 = G__14518;
chunk__14505 = G__14519;
count__14506 = G__14520;
i__14507 = G__14521;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14504);
if(temp__4657__auto__){
var seq__14504__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14504__$1)){
var c__7230__auto__ = cljs.core.chunk_first.call(null,seq__14504__$1);
var G__14522 = cljs.core.chunk_rest.call(null,seq__14504__$1);
var G__14523 = c__7230__auto__;
var G__14524 = cljs.core.count.call(null,c__7230__auto__);
var G__14525 = (0);
seq__14504 = G__14522;
chunk__14505 = G__14523;
count__14506 = G__14524;
i__14507 = G__14525;
continue;
} else {
var vec__14511 = cljs.core.first.call(null,seq__14504__$1);
var k = cljs.core.nth.call(null,vec__14511,(0),null);
var v = cljs.core.nth.call(null,vec__14511,(1),null);
f.call(null,v,k);

var G__14526 = cljs.core.next.call(null,seq__14504__$1);
var G__14527 = null;
var G__14528 = (0);
var G__14529 = (0);
seq__14504 = G__14526;
chunk__14505 = G__14527;
count__14506 = G__14528;
i__14507 = G__14529;
continue;
}
} else {
return null;
}
}
break;
}
});})(x14503,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x14503;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args14530 = [];
var len__7494__auto___14536 = arguments.length;
var i__7495__auto___14537 = (0);
while(true){
if((i__7495__auto___14537 < len__7494__auto___14536)){
args14530.push((arguments[i__7495__auto___14537]));

var G__14538 = (i__7495__auto___14537 + (1));
i__7495__auto___14537 = G__14538;
continue;
} else {
}
break;
}

var G__14532 = args14530.length;
switch (G__14532) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14530.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit14533 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit14533 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta14534){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta14534 = meta14534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit14533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14535,meta14534__$1){
var self__ = this;
var _14535__$1 = this;
return (new cognitect.transit.t_cognitect$transit14533(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta14534__$1));
});

cognitect.transit.t_cognitect$transit14533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14535){
var self__ = this;
var _14535__$1 = this;
return self__.meta14534;
});

cognitect.transit.t_cognitect$transit14533.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit14533.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit14533.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit14533.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit14533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta14534","meta14534",-340587295,null)], null);
});

cognitect.transit.t_cognitect$transit14533.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit14533.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit14533";

cognitect.transit.t_cognitect$transit14533.cljs$lang$ctorPrWriter = (function (this__7025__auto__,writer__7026__auto__,opt__7027__auto__){
return cljs.core._write.call(null,writer__7026__auto__,"cognitect.transit/t_cognitect$transit14533");
});

cognitect.transit.__GT_t_cognitect$transit14533 = (function cognitect$transit$__GT_t_cognitect$transit14533(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta14534){
return (new cognitect.transit.t_cognitect$transit14533(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta14534));
});

}

return (new cognitect.transit.t_cognitect$transit14533(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__6419__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__6419__auto__)){
return or__6419__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1484702548867
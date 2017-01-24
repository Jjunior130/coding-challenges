// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_com.tabs');
goog.require('cljs.core');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
re_com.tabs.tabs_args_desc = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of tabs | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (for each individual tab rather than the container)"], null)], null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(var_args){
var args__7491__auto__ = [];
var len__7484__auto___33614 = arguments.length;
var i__7485__auto___33615 = (0);
while(true){
if((i__7485__auto___33615 < len__7484__auto___33614)){
args__7491__auto__.push((arguments[i__7485__auto___33615]));

var G__33616 = (i__7485__auto___33615 + (1));
i__7485__auto___33615 = G__33616;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__33607){
var map__33608 = p__33607;
var map__33608__$1 = ((((!((map__33608 == null)))?((((map__33608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33608):map__33608);
var args = map__33608__$1;
var model = cljs.core.get.call(null,map__33608__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__33608__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__33608__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__33608__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__33608__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__33608__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__33608,map__33608__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (p1__33605_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__33605_SHARP_));
});})(current,tabs__$1,map__33608,map__33608__$1,args,model,tabs,on_change,id_fn,label_fn,style))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str("(not-empty (filter (fn* [p1__33605#] (= current (id-fn p1__33605#))) tabs))")].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs nav nav-tabs noselect",new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__7189__auto__ = ((function (current,tabs__$1,_,map__33608,map__33608__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function re_com$tabs$iter__33610(s__33611){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__33608,map__33608__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (){
var s__33611__$1 = s__33611;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33611__$1);
if(temp__4657__auto__){
var s__33611__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33611__$2)){
var c__7187__auto__ = cljs.core.chunk_first.call(null,s__33611__$2);
var size__7188__auto__ = cljs.core.count.call(null,c__7187__auto__);
var b__33613 = cljs.core.chunk_buffer.call(null,size__7188__auto__);
if((function (){var i__33612 = (0);
while(true){
if((i__33612 < size__7188__auto__)){
var t = cljs.core._nth.call(null,c__7187__auto__,i__33612);
cljs.core.chunk_append.call(null,b__33613,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__33612,id,label,selected_QMARK_,t,c__7187__auto__,size__7188__auto__,b__33613,s__33611__$2,temp__4657__auto__,current,tabs__$1,_,map__33608,map__33608__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (event){
on_change.call(null,id);

return null;
});})(i__33612,id,label,selected_QMARK_,t,c__7187__auto__,size__7188__auto__,b__33613,s__33611__$2,temp__4657__auto__,current,tabs__$1,_,map__33608,map__33608__$1,args,model,tabs,on_change,id_fn,label_fn,style))
:null)], null),label], null)], null);
})());

var G__33617 = (i__33612 + (1));
i__33612 = G__33617;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33613),re_com$tabs$iter__33610.call(null,cljs.core.chunk_rest.call(null,s__33611__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33613),null);
}
} else {
var t = cljs.core.first.call(null,s__33611__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__33611__$2,temp__4657__auto__,current,tabs__$1,_,map__33608,map__33608__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__33611__$2,temp__4657__auto__,current,tabs__$1,_,map__33608,map__33608__$1,args,model,tabs,on_change,id_fn,label_fn,style))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__33610.call(null,cljs.core.rest.call(null,s__33611__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__33608,map__33608__$1,args,model,tabs,on_change,id_fn,label_fn,style))
,null,null));
});})(current,tabs__$1,_,map__33608,map__33608__$1,args,model,tabs,on_change,id_fn,label_fn,style))
;
return iter__7189__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq33606){
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33606));
});

re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(var_args){
var args__7491__auto__ = [];
var len__7484__auto___33627 = arguments.length;
var i__7485__auto___33628 = (0);
while(true){
if((i__7485__auto___33628 < len__7484__auto___33627)){
args__7491__auto__.push((arguments[i__7485__auto___33628]));

var G__33629 = (i__7485__auto___33628 + (1));
i__7485__auto___33628 = G__33629;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__33620){
var map__33621 = p__33620;
var map__33621__$1 = ((((!((map__33621 == null)))?((((map__33621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33621):map__33621);
var model = cljs.core.get.call(null,map__33621__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__33621__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__33621__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__33621__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var label_fn = cljs.core.get.call(null,map__33621__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var style = cljs.core.get.call(null,map__33621__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var vertical_QMARK_ = cljs.core.get.call(null,map__33621__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__33621,map__33621__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (p1__33618_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__33618_SHARP_));
});})(current,tabs__$1,map__33621,map__33621__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str("(not-empty (filter (fn* [p1__33618#] (= current (id-fn p1__33618#))) tabs))")].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-tabs noselect btn-group"),cljs.core.str((cljs.core.truth_(vertical_QMARK_)?"-vertical":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__7189__auto__ = ((function (current,tabs__$1,_,map__33621,map__33621__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function re_com$tabs$iter__33623(s__33624){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__33621,map__33621__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (){
var s__33624__$1 = s__33624;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33624__$1);
if(temp__4657__auto__){
var s__33624__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33624__$2)){
var c__7187__auto__ = cljs.core.chunk_first.call(null,s__33624__$2);
var size__7188__auto__ = cljs.core.count.call(null,c__7187__auto__);
var b__33626 = cljs.core.chunk_buffer.call(null,size__7188__auto__);
if((function (){var i__33625 = (0);
while(true){
if((i__33625 < size__7188__auto__)){
var t = cljs.core._nth.call(null,c__7187__auto__,i__33625);
cljs.core.chunk_append.call(null,b__33626,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-default "),cljs.core.str(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__33625,id,label,selected_QMARK_,t,c__7187__auto__,size__7188__auto__,b__33626,s__33624__$2,temp__4657__auto__,current,tabs__$1,_,map__33621,map__33621__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(i__33625,id,label,selected_QMARK_,t,c__7187__auto__,size__7188__auto__,b__33626,s__33624__$2,temp__4657__auto__,current,tabs__$1,_,map__33621,map__33621__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null);
})());

var G__33630 = (i__33625 + (1));
i__33625 = G__33630;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33626),re_com$tabs$iter__33623.call(null,cljs.core.chunk_rest.call(null,s__33624__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33626),null);
}
} else {
var t = cljs.core.first.call(null,s__33624__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-default "),cljs.core.str(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__33624__$2,temp__4657__auto__,current,tabs__$1,_,map__33621,map__33621__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__33624__$2,temp__4657__auto__,current,tabs__$1,_,map__33621,map__33621__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null);
})(),re_com$tabs$iter__33623.call(null,cljs.core.rest.call(null,s__33624__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__33621,map__33621__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__33621,map__33621__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
;
return iter__7189__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq33619){
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33619));
});

re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(var_args){
var args__7491__auto__ = [];
var len__7484__auto___33635 = arguments.length;
var i__7485__auto___33636 = (0);
while(true){
if((i__7485__auto___33636 < len__7484__auto___33635)){
args__7491__auto__.push((arguments[i__7485__auto___33636]));

var G__33637 = (i__7485__auto___33636 + (1));
i__7485__auto___33636 = G__33637;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__33632){
var map__33633 = p__33632;
var map__33633__$1 = ((((!((map__33633 == null)))?((((map__33633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33633):map__33633);
var args = map__33633__$1;
var model = cljs.core.get.call(null,map__33633__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__33633__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__33633__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__33633__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__33633__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__33633__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
});

re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq33631){
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33631));
});

re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(var_args){
var args__7491__auto__ = [];
var len__7484__auto___33642 = arguments.length;
var i__7485__auto___33643 = (0);
while(true){
if((i__7485__auto___33643 < len__7484__auto___33642)){
args__7491__auto__.push((arguments[i__7485__auto___33643]));

var G__33644 = (i__7485__auto___33643 + (1));
i__7485__auto___33643 = G__33644;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__33639){
var map__33640 = p__33639;
var map__33640__$1 = ((((!((map__33640 == null)))?((((map__33640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33640):map__33640);
var args = map__33640__$1;
var model = cljs.core.get.call(null,map__33640__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__33640__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__33640__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__33640__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__33640__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__33640__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
});

re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq33638){
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33638));
});

re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(var_args){
var args__7491__auto__ = [];
var len__7484__auto___33654 = arguments.length;
var i__7485__auto___33655 = (0);
while(true){
if((i__7485__auto___33655 < len__7484__auto___33654)){
args__7491__auto__.push((arguments[i__7485__auto___33655]));

var G__33656 = (i__7485__auto___33655 + (1));
i__7485__auto___33655 = G__33656;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__33647){
var map__33648 = p__33647;
var map__33648__$1 = ((((!((map__33648 == null)))?((((map__33648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33648):map__33648);
var model = cljs.core.get.call(null,map__33648__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__33648__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__33648__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__33648__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var label_fn = cljs.core.get.call(null,map__33648__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var style = cljs.core.get.call(null,map__33648__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var vertical_QMARK_ = cljs.core.get.call(null,map__33648__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__33648,map__33648__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (p1__33645_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__33645_SHARP_));
});})(current,tabs__$1,map__33648,map__33648__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str("(not-empty (filter (fn* [p1__33645#] (= current (id-fn p1__33645#))) tabs))")].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-tabs noselect nav nav-pills"),cljs.core.str((cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none"),new cljs.core.Keyword(null,"role","role",-736691072),"tabslist"], null),(function (){var iter__7189__auto__ = ((function (current,tabs__$1,_,map__33648,map__33648__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function re_com$tabs$iter__33650(s__33651){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__33648,map__33648__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (){
var s__33651__$1 = s__33651;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33651__$1);
if(temp__4657__auto__){
var s__33651__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33651__$2)){
var c__7187__auto__ = cljs.core.chunk_first.call(null,s__33651__$2);
var size__7188__auto__ = cljs.core.count.call(null,c__7187__auto__);
var b__33653 = cljs.core.chunk_buffer.call(null,size__7188__auto__);
if((function (){var i__33652 = (0);
while(true){
if((i__33652 < size__7188__auto__)){
var t = cljs.core._nth.call(null,c__7187__auto__,i__33652);
cljs.core.chunk_append.call(null,b__33653,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__33652,id,label,selected_QMARK_,t,c__7187__auto__,size__7188__auto__,b__33653,s__33651__$2,temp__4657__auto__,current,tabs__$1,_,map__33648,map__33648__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(i__33652,id,label,selected_QMARK_,t,c__7187__auto__,size__7188__auto__,b__33653,s__33651__$2,temp__4657__auto__,current,tabs__$1,_,map__33648,map__33648__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null)], null);
})());

var G__33657 = (i__33652 + (1));
i__33652 = G__33657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33653),re_com$tabs$iter__33650.call(null,cljs.core.chunk_rest.call(null,s__33651__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33653),null);
}
} else {
var t = cljs.core.first.call(null,s__33651__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__33651__$2,temp__4657__auto__,current,tabs__$1,_,map__33648,map__33648__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__33651__$2,temp__4657__auto__,current,tabs__$1,_,map__33648,map__33648__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__33650.call(null,cljs.core.rest.call(null,s__33651__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__33648,map__33648__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__33648,map__33648__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
;
return iter__7189__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq33646){
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33646));
});

re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(var_args){
var args__7491__auto__ = [];
var len__7484__auto___33662 = arguments.length;
var i__7485__auto___33663 = (0);
while(true){
if((i__7485__auto___33663 < len__7484__auto___33662)){
args__7491__auto__.push((arguments[i__7485__auto___33663]));

var G__33664 = (i__7485__auto___33663 + (1));
i__7485__auto___33663 = G__33664;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__33659){
var map__33660 = p__33659;
var map__33660__$1 = ((((!((map__33660 == null)))?((((map__33660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33660):map__33660);
var args = map__33660__$1;
var model = cljs.core.get.call(null,map__33660__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__33660__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__33660__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__33660__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.call(null,map__33660__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__33660__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
});

re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq33658){
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33658));
});

re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(var_args){
var args__7491__auto__ = [];
var len__7484__auto___33669 = arguments.length;
var i__7485__auto___33670 = (0);
while(true){
if((i__7485__auto___33670 < len__7484__auto___33669)){
args__7491__auto__.push((arguments[i__7485__auto___33670]));

var G__33671 = (i__7485__auto___33670 + (1));
i__7485__auto___33670 = G__33671;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__33666){
var map__33667 = p__33666;
var map__33667__$1 = ((((!((map__33667 == null)))?((((map__33667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33667):map__33667);
var args = map__33667__$1;
var model = cljs.core.get.call(null,map__33667__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__33667__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__33667__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__33667__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.call(null,map__33667__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__33667__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
});

re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq33665){
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33665));
});


//# sourceMappingURL=tabs.js.map?rel=1485243277667
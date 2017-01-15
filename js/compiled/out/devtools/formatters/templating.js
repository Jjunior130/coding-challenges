// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x38476_38477 = value;
x38476_38477.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x38481_38482 = value;
x38481_38482.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x38486_38487 = value;
x38486_38487.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__6397__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__6397__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__7491__auto__ = [];
var len__7484__auto___38495 = arguments.length;
var i__7485__auto___38496 = (0);
while(true){
if((i__7485__auto___38496 < len__7484__auto___38495)){
args__7491__auto__.push((arguments[i__7485__auto___38496]));

var G__38497 = (i__7485__auto___38496 + (1));
i__7485__auto___38496 = G__38497;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__38491_38498 = cljs.core.seq.call(null,items);
var chunk__38492_38499 = null;
var count__38493_38500 = (0);
var i__38494_38501 = (0);
while(true){
if((i__38494_38501 < count__38493_38500)){
var item_38502 = cljs.core._nth.call(null,chunk__38492_38499,i__38494_38501);
if(cljs.core.some_QMARK_.call(null,item_38502)){
if(cljs.core.coll_QMARK_.call(null,item_38502)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_38502)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_38502));
}
} else {
}

var G__38503 = seq__38491_38498;
var G__38504 = chunk__38492_38499;
var G__38505 = count__38493_38500;
var G__38506 = (i__38494_38501 + (1));
seq__38491_38498 = G__38503;
chunk__38492_38499 = G__38504;
count__38493_38500 = G__38505;
i__38494_38501 = G__38506;
continue;
} else {
var temp__4657__auto___38507 = cljs.core.seq.call(null,seq__38491_38498);
if(temp__4657__auto___38507){
var seq__38491_38508__$1 = temp__4657__auto___38507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38491_38508__$1)){
var c__7220__auto___38509 = cljs.core.chunk_first.call(null,seq__38491_38508__$1);
var G__38510 = cljs.core.chunk_rest.call(null,seq__38491_38508__$1);
var G__38511 = c__7220__auto___38509;
var G__38512 = cljs.core.count.call(null,c__7220__auto___38509);
var G__38513 = (0);
seq__38491_38498 = G__38510;
chunk__38492_38499 = G__38511;
count__38493_38500 = G__38512;
i__38494_38501 = G__38513;
continue;
} else {
var item_38514 = cljs.core.first.call(null,seq__38491_38508__$1);
if(cljs.core.some_QMARK_.call(null,item_38514)){
if(cljs.core.coll_QMARK_.call(null,item_38514)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_38514)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_38514));
}
} else {
}

var G__38515 = cljs.core.next.call(null,seq__38491_38508__$1);
var G__38516 = null;
var G__38517 = (0);
var G__38518 = (0);
seq__38491_38498 = G__38515;
chunk__38492_38499 = G__38516;
count__38493_38500 = G__38517;
i__38494_38501 = G__38518;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq38490){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38490));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__7491__auto__ = [];
var len__7484__auto___38526 = arguments.length;
var i__7485__auto___38527 = (0);
while(true){
if((i__7485__auto___38527 < len__7484__auto___38526)){
args__7491__auto__.push((arguments[i__7485__auto___38527]));

var G__38528 = (i__7485__auto___38527 + (1));
i__7485__auto___38527 = G__38528;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__38522_38529 = cljs.core.seq.call(null,children);
var chunk__38523_38530 = null;
var count__38524_38531 = (0);
var i__38525_38532 = (0);
while(true){
if((i__38525_38532 < count__38524_38531)){
var child_38533 = cljs.core._nth.call(null,chunk__38523_38530,i__38525_38532);
if(cljs.core.some_QMARK_.call(null,child_38533)){
if(cljs.core.coll_QMARK_.call(null,child_38533)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_38533))));
} else {
var temp__4655__auto___38534 = devtools.formatters.helpers.pref.call(null,child_38533);
if(cljs.core.truth_(temp__4655__auto___38534)){
var child_value_38535 = temp__4655__auto___38534;
template.push(child_value_38535);
} else {
}
}
} else {
}

var G__38536 = seq__38522_38529;
var G__38537 = chunk__38523_38530;
var G__38538 = count__38524_38531;
var G__38539 = (i__38525_38532 + (1));
seq__38522_38529 = G__38536;
chunk__38523_38530 = G__38537;
count__38524_38531 = G__38538;
i__38525_38532 = G__38539;
continue;
} else {
var temp__4657__auto___38540 = cljs.core.seq.call(null,seq__38522_38529);
if(temp__4657__auto___38540){
var seq__38522_38541__$1 = temp__4657__auto___38540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38522_38541__$1)){
var c__7220__auto___38542 = cljs.core.chunk_first.call(null,seq__38522_38541__$1);
var G__38543 = cljs.core.chunk_rest.call(null,seq__38522_38541__$1);
var G__38544 = c__7220__auto___38542;
var G__38545 = cljs.core.count.call(null,c__7220__auto___38542);
var G__38546 = (0);
seq__38522_38529 = G__38543;
chunk__38523_38530 = G__38544;
count__38524_38531 = G__38545;
i__38525_38532 = G__38546;
continue;
} else {
var child_38547 = cljs.core.first.call(null,seq__38522_38541__$1);
if(cljs.core.some_QMARK_.call(null,child_38547)){
if(cljs.core.coll_QMARK_.call(null,child_38547)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_38547))));
} else {
var temp__4655__auto___38548 = devtools.formatters.helpers.pref.call(null,child_38547);
if(cljs.core.truth_(temp__4655__auto___38548)){
var child_value_38549 = temp__4655__auto___38548;
template.push(child_value_38549);
} else {
}
}
} else {
}

var G__38550 = cljs.core.next.call(null,seq__38522_38541__$1);
var G__38551 = null;
var G__38552 = (0);
var G__38553 = (0);
seq__38522_38529 = G__38550;
chunk__38523_38530 = G__38551;
count__38524_38531 = G__38552;
i__38525_38532 = G__38553;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq38519){
var G__38520 = cljs.core.first.call(null,seq38519);
var seq38519__$1 = cljs.core.next.call(null,seq38519);
var G__38521 = cljs.core.first.call(null,seq38519__$1);
var seq38519__$2 = cljs.core.next.call(null,seq38519__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__38520,G__38521,seq38519__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___38556 = arguments.length;
var i__7485__auto___38557 = (0);
while(true){
if((i__7485__auto___38557 < len__7484__auto___38556)){
args__7491__auto__.push((arguments[i__7485__auto___38557]));

var G__38558 = (i__7485__auto___38557 + (1));
i__7485__auto___38557 = G__38558;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq38554){
var G__38555 = cljs.core.first.call(null,seq38554);
var seq38554__$1 = cljs.core.next.call(null,seq38554);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38555,seq38554__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___38561 = arguments.length;
var i__7485__auto___38562 = (0);
while(true){
if((i__7485__auto___38562 < len__7484__auto___38561)){
args__7491__auto__.push((arguments[i__7485__auto___38562]));

var G__38563 = (i__7485__auto___38562 + (1));
i__7485__auto___38562 = G__38563;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq38559){
var G__38560 = cljs.core.first.call(null,seq38559);
var seq38559__$1 = cljs.core.next.call(null,seq38559);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38560,seq38559__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args38564 = [];
var len__7484__auto___38569 = arguments.length;
var i__7485__auto___38570 = (0);
while(true){
if((i__7485__auto___38570 < len__7484__auto___38569)){
args38564.push((arguments[i__7485__auto___38570]));

var G__38571 = (i__7485__auto___38570 + (1));
i__7485__auto___38570 = G__38571;
continue;
} else {
}
break;
}

var G__38566 = args38564.length;
switch (G__38566) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38564.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj38568 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__6409__auto__ = start_index;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
})()};
return obj38568;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__7491__auto__ = [];
var len__7484__auto___38579 = arguments.length;
var i__7485__auto___38580 = (0);
while(true){
if((i__7485__auto___38580 < len__7484__auto___38579)){
args__7491__auto__.push((arguments[i__7485__auto___38580]));

var G__38581 = (i__7485__auto___38580 + (1));
i__7485__auto___38580 = G__38581;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38575){
var vec__38576 = p__38575;
var state_override_fn = cljs.core.nth.call(null,vec__38576,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq38573){
var G__38574 = cljs.core.first.call(null,seq38573);
var seq38573__$1 = cljs.core.next.call(null,seq38573);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__38574,seq38573__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__7395__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_38585_38588 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_38586_38589 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_38585_38588,_STAR_print_fn_STAR_38586_38589,sb__7395__auto__){
return (function (x__7396__auto__){
return sb__7395__auto__.append(x__7396__auto__);
});})(_STAR_print_newline_STAR_38585_38588,_STAR_print_fn_STAR_38586_38589,sb__7395__auto__))
;

try{var _STAR_print_level_STAR_38587_38590 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_38587_38590;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38586_38589;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38585_38588;
}
return [cljs.core.str(sb__7395__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_38592 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_38592;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__38594 = name;
switch (G__38594) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__38599 = tag;
var html_tag = cljs.core.nth.call(null,vec__38599,(0),null);
var style = cljs.core.nth.call(null,vec__38599,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_38603 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_38603;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_38606 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_38607 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_38607;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_38606;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__38608 = initial_value;
var G__38609 = value.call(null);
initial_value = G__38608;
value = G__38609;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__38610 = initial_value;
var G__38611 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__38610;
value = G__38611;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__38612 = initial_value;
var G__38613 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__38612;
value = G__38613;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1484441681622
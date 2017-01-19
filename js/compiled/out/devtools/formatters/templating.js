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
var x49544_49545 = value;
x49544_49545.devtools$protocols$IGroup$ = true;


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
var x49549_49550 = value;
x49549_49550.devtools$protocols$ITemplate$ = true;


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
var x49554_49555 = value;
x49554_49555.devtools$protocols$ISurrogate$ = true;


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
var and__25034__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__25034__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__25034__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__26128__auto__ = [];
var len__26121__auto___49563 = arguments.length;
var i__26122__auto___49564 = (0);
while(true){
if((i__26122__auto___49564 < len__26121__auto___49563)){
args__26128__auto__.push((arguments[i__26122__auto___49564]));

var G__49565 = (i__26122__auto___49564 + (1));
i__26122__auto___49564 = G__49565;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__49559_49566 = cljs.core.seq.call(null,items);
var chunk__49560_49567 = null;
var count__49561_49568 = (0);
var i__49562_49569 = (0);
while(true){
if((i__49562_49569 < count__49561_49568)){
var item_49570 = cljs.core._nth.call(null,chunk__49560_49567,i__49562_49569);
if(cljs.core.some_QMARK_.call(null,item_49570)){
if(cljs.core.coll_QMARK_.call(null,item_49570)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_49570)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_49570));
}
} else {
}

var G__49571 = seq__49559_49566;
var G__49572 = chunk__49560_49567;
var G__49573 = count__49561_49568;
var G__49574 = (i__49562_49569 + (1));
seq__49559_49566 = G__49571;
chunk__49560_49567 = G__49572;
count__49561_49568 = G__49573;
i__49562_49569 = G__49574;
continue;
} else {
var temp__4657__auto___49575 = cljs.core.seq.call(null,seq__49559_49566);
if(temp__4657__auto___49575){
var seq__49559_49576__$1 = temp__4657__auto___49575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49559_49576__$1)){
var c__25857__auto___49577 = cljs.core.chunk_first.call(null,seq__49559_49576__$1);
var G__49578 = cljs.core.chunk_rest.call(null,seq__49559_49576__$1);
var G__49579 = c__25857__auto___49577;
var G__49580 = cljs.core.count.call(null,c__25857__auto___49577);
var G__49581 = (0);
seq__49559_49566 = G__49578;
chunk__49560_49567 = G__49579;
count__49561_49568 = G__49580;
i__49562_49569 = G__49581;
continue;
} else {
var item_49582 = cljs.core.first.call(null,seq__49559_49576__$1);
if(cljs.core.some_QMARK_.call(null,item_49582)){
if(cljs.core.coll_QMARK_.call(null,item_49582)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_49582)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_49582));
}
} else {
}

var G__49583 = cljs.core.next.call(null,seq__49559_49576__$1);
var G__49584 = null;
var G__49585 = (0);
var G__49586 = (0);
seq__49559_49566 = G__49583;
chunk__49560_49567 = G__49584;
count__49561_49568 = G__49585;
i__49562_49569 = G__49586;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq49558){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49558));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__26128__auto__ = [];
var len__26121__auto___49594 = arguments.length;
var i__26122__auto___49595 = (0);
while(true){
if((i__26122__auto___49595 < len__26121__auto___49594)){
args__26128__auto__.push((arguments[i__26122__auto___49595]));

var G__49596 = (i__26122__auto___49595 + (1));
i__26122__auto___49595 = G__49596;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((2) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26129__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__49590_49597 = cljs.core.seq.call(null,children);
var chunk__49591_49598 = null;
var count__49592_49599 = (0);
var i__49593_49600 = (0);
while(true){
if((i__49593_49600 < count__49592_49599)){
var child_49601 = cljs.core._nth.call(null,chunk__49591_49598,i__49593_49600);
if(cljs.core.some_QMARK_.call(null,child_49601)){
if(cljs.core.coll_QMARK_.call(null,child_49601)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_49601))));
} else {
var temp__4655__auto___49602 = devtools.formatters.helpers.pref.call(null,child_49601);
if(cljs.core.truth_(temp__4655__auto___49602)){
var child_value_49603 = temp__4655__auto___49602;
template.push(child_value_49603);
} else {
}
}
} else {
}

var G__49604 = seq__49590_49597;
var G__49605 = chunk__49591_49598;
var G__49606 = count__49592_49599;
var G__49607 = (i__49593_49600 + (1));
seq__49590_49597 = G__49604;
chunk__49591_49598 = G__49605;
count__49592_49599 = G__49606;
i__49593_49600 = G__49607;
continue;
} else {
var temp__4657__auto___49608 = cljs.core.seq.call(null,seq__49590_49597);
if(temp__4657__auto___49608){
var seq__49590_49609__$1 = temp__4657__auto___49608;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49590_49609__$1)){
var c__25857__auto___49610 = cljs.core.chunk_first.call(null,seq__49590_49609__$1);
var G__49611 = cljs.core.chunk_rest.call(null,seq__49590_49609__$1);
var G__49612 = c__25857__auto___49610;
var G__49613 = cljs.core.count.call(null,c__25857__auto___49610);
var G__49614 = (0);
seq__49590_49597 = G__49611;
chunk__49591_49598 = G__49612;
count__49592_49599 = G__49613;
i__49593_49600 = G__49614;
continue;
} else {
var child_49615 = cljs.core.first.call(null,seq__49590_49609__$1);
if(cljs.core.some_QMARK_.call(null,child_49615)){
if(cljs.core.coll_QMARK_.call(null,child_49615)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_49615))));
} else {
var temp__4655__auto___49616 = devtools.formatters.helpers.pref.call(null,child_49615);
if(cljs.core.truth_(temp__4655__auto___49616)){
var child_value_49617 = temp__4655__auto___49616;
template.push(child_value_49617);
} else {
}
}
} else {
}

var G__49618 = cljs.core.next.call(null,seq__49590_49609__$1);
var G__49619 = null;
var G__49620 = (0);
var G__49621 = (0);
seq__49590_49597 = G__49618;
chunk__49591_49598 = G__49619;
count__49592_49599 = G__49620;
i__49593_49600 = G__49621;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq49587){
var G__49588 = cljs.core.first.call(null,seq49587);
var seq49587__$1 = cljs.core.next.call(null,seq49587);
var G__49589 = cljs.core.first.call(null,seq49587__$1);
var seq49587__$2 = cljs.core.next.call(null,seq49587__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__49588,G__49589,seq49587__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__26128__auto__ = [];
var len__26121__auto___49624 = arguments.length;
var i__26122__auto___49625 = (0);
while(true){
if((i__26122__auto___49625 < len__26121__auto___49624)){
args__26128__auto__.push((arguments[i__26122__auto___49625]));

var G__49626 = (i__26122__auto___49625 + (1));
i__26122__auto___49625 = G__49626;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq49622){
var G__49623 = cljs.core.first.call(null,seq49622);
var seq49622__$1 = cljs.core.next.call(null,seq49622);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49623,seq49622__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__26128__auto__ = [];
var len__26121__auto___49629 = arguments.length;
var i__26122__auto___49630 = (0);
while(true){
if((i__26122__auto___49630 < len__26121__auto___49629)){
args__26128__auto__.push((arguments[i__26122__auto___49630]));

var G__49631 = (i__26122__auto___49630 + (1));
i__26122__auto___49630 = G__49631;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq49627){
var G__49628 = cljs.core.first.call(null,seq49627);
var seq49627__$1 = cljs.core.next.call(null,seq49627);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49628,seq49627__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args49632 = [];
var len__26121__auto___49637 = arguments.length;
var i__26122__auto___49638 = (0);
while(true){
if((i__26122__auto___49638 < len__26121__auto___49637)){
args49632.push((arguments[i__26122__auto___49638]));

var G__49639 = (i__26122__auto___49638 + (1));
i__26122__auto___49638 = G__49639;
continue;
} else {
}
break;
}

var G__49634 = args49632.length;
switch (G__49634) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49632.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj49636 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__25046__auto__ = start_index;
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return (0);
}
})()};
return obj49636;
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
var args__26128__auto__ = [];
var len__26121__auto___49647 = arguments.length;
var i__26122__auto___49648 = (0);
while(true){
if((i__26122__auto___49648 < len__26121__auto___49647)){
args__26128__auto__.push((arguments[i__26122__auto___49648]));

var G__49649 = (i__26122__auto___49648 + (1));
i__26122__auto___49648 = G__49649;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__49643){
var vec__49644 = p__49643;
var state_override_fn = cljs.core.nth.call(null,vec__49644,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq49641){
var G__49642 = cljs.core.first.call(null,seq49641);
var seq49641__$1 = cljs.core.next.call(null,seq49641);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__49642,seq49641__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__26032__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_49653_49656 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_49654_49657 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_49653_49656,_STAR_print_fn_STAR_49654_49657,sb__26032__auto__){
return (function (x__26033__auto__){
return sb__26032__auto__.append(x__26033__auto__);
});})(_STAR_print_newline_STAR_49653_49656,_STAR_print_fn_STAR_49654_49657,sb__26032__auto__))
;

try{var _STAR_print_level_STAR_49655_49658 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_49655_49658;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_49654_49657;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_49653_49656;
}
return [cljs.core.str(sb__26032__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_49660 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_49660;
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
var G__49662 = name;
switch (G__49662) {
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
var vec__49667 = tag;
var html_tag = cljs.core.nth.call(null,vec__49667,(0),null);
var style = cljs.core.nth.call(null,vec__49667,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_49671 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_49671;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_49674 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_49675 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_49675;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_49674;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__49676 = initial_value;
var G__49677 = value.call(null);
initial_value = G__49676;
value = G__49677;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__49678 = initial_value;
var G__49679 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__49678;
value = G__49679;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__49680 = initial_value;
var G__49681 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__49680;
value = G__49681;
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

//# sourceMappingURL=templating.js.map?rel=1484782605375
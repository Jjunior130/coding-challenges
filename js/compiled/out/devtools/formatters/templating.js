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
var x28261_28262 = value;
x28261_28262.devtools$protocols$IGroup$ = true;


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
var x28266_28267 = value;
x28266_28267.devtools$protocols$ITemplate$ = true;


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
var x28271_28272 = value;
x28271_28272.devtools$protocols$ISurrogate$ = true;


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
var len__7484__auto___28280 = arguments.length;
var i__7485__auto___28281 = (0);
while(true){
if((i__7485__auto___28281 < len__7484__auto___28280)){
args__7491__auto__.push((arguments[i__7485__auto___28281]));

var G__28282 = (i__7485__auto___28281 + (1));
i__7485__auto___28281 = G__28282;
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
var seq__28276_28283 = cljs.core.seq.call(null,items);
var chunk__28277_28284 = null;
var count__28278_28285 = (0);
var i__28279_28286 = (0);
while(true){
if((i__28279_28286 < count__28278_28285)){
var item_28287 = cljs.core._nth.call(null,chunk__28277_28284,i__28279_28286);
if(cljs.core.some_QMARK_.call(null,item_28287)){
if(cljs.core.coll_QMARK_.call(null,item_28287)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_28287)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_28287));
}
} else {
}

var G__28288 = seq__28276_28283;
var G__28289 = chunk__28277_28284;
var G__28290 = count__28278_28285;
var G__28291 = (i__28279_28286 + (1));
seq__28276_28283 = G__28288;
chunk__28277_28284 = G__28289;
count__28278_28285 = G__28290;
i__28279_28286 = G__28291;
continue;
} else {
var temp__4657__auto___28292 = cljs.core.seq.call(null,seq__28276_28283);
if(temp__4657__auto___28292){
var seq__28276_28293__$1 = temp__4657__auto___28292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28276_28293__$1)){
var c__7220__auto___28294 = cljs.core.chunk_first.call(null,seq__28276_28293__$1);
var G__28295 = cljs.core.chunk_rest.call(null,seq__28276_28293__$1);
var G__28296 = c__7220__auto___28294;
var G__28297 = cljs.core.count.call(null,c__7220__auto___28294);
var G__28298 = (0);
seq__28276_28283 = G__28295;
chunk__28277_28284 = G__28296;
count__28278_28285 = G__28297;
i__28279_28286 = G__28298;
continue;
} else {
var item_28299 = cljs.core.first.call(null,seq__28276_28293__$1);
if(cljs.core.some_QMARK_.call(null,item_28299)){
if(cljs.core.coll_QMARK_.call(null,item_28299)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_28299)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_28299));
}
} else {
}

var G__28300 = cljs.core.next.call(null,seq__28276_28293__$1);
var G__28301 = null;
var G__28302 = (0);
var G__28303 = (0);
seq__28276_28283 = G__28300;
chunk__28277_28284 = G__28301;
count__28278_28285 = G__28302;
i__28279_28286 = G__28303;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq28275){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28275));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__7491__auto__ = [];
var len__7484__auto___28311 = arguments.length;
var i__7485__auto___28312 = (0);
while(true){
if((i__7485__auto___28312 < len__7484__auto___28311)){
args__7491__auto__.push((arguments[i__7485__auto___28312]));

var G__28313 = (i__7485__auto___28312 + (1));
i__7485__auto___28312 = G__28313;
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
var seq__28307_28314 = cljs.core.seq.call(null,children);
var chunk__28308_28315 = null;
var count__28309_28316 = (0);
var i__28310_28317 = (0);
while(true){
if((i__28310_28317 < count__28309_28316)){
var child_28318 = cljs.core._nth.call(null,chunk__28308_28315,i__28310_28317);
if(cljs.core.some_QMARK_.call(null,child_28318)){
if(cljs.core.coll_QMARK_.call(null,child_28318)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_28318))));
} else {
var temp__4655__auto___28319 = devtools.formatters.helpers.pref.call(null,child_28318);
if(cljs.core.truth_(temp__4655__auto___28319)){
var child_value_28320 = temp__4655__auto___28319;
template.push(child_value_28320);
} else {
}
}
} else {
}

var G__28321 = seq__28307_28314;
var G__28322 = chunk__28308_28315;
var G__28323 = count__28309_28316;
var G__28324 = (i__28310_28317 + (1));
seq__28307_28314 = G__28321;
chunk__28308_28315 = G__28322;
count__28309_28316 = G__28323;
i__28310_28317 = G__28324;
continue;
} else {
var temp__4657__auto___28325 = cljs.core.seq.call(null,seq__28307_28314);
if(temp__4657__auto___28325){
var seq__28307_28326__$1 = temp__4657__auto___28325;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28307_28326__$1)){
var c__7220__auto___28327 = cljs.core.chunk_first.call(null,seq__28307_28326__$1);
var G__28328 = cljs.core.chunk_rest.call(null,seq__28307_28326__$1);
var G__28329 = c__7220__auto___28327;
var G__28330 = cljs.core.count.call(null,c__7220__auto___28327);
var G__28331 = (0);
seq__28307_28314 = G__28328;
chunk__28308_28315 = G__28329;
count__28309_28316 = G__28330;
i__28310_28317 = G__28331;
continue;
} else {
var child_28332 = cljs.core.first.call(null,seq__28307_28326__$1);
if(cljs.core.some_QMARK_.call(null,child_28332)){
if(cljs.core.coll_QMARK_.call(null,child_28332)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_28332))));
} else {
var temp__4655__auto___28333 = devtools.formatters.helpers.pref.call(null,child_28332);
if(cljs.core.truth_(temp__4655__auto___28333)){
var child_value_28334 = temp__4655__auto___28333;
template.push(child_value_28334);
} else {
}
}
} else {
}

var G__28335 = cljs.core.next.call(null,seq__28307_28326__$1);
var G__28336 = null;
var G__28337 = (0);
var G__28338 = (0);
seq__28307_28314 = G__28335;
chunk__28308_28315 = G__28336;
count__28309_28316 = G__28337;
i__28310_28317 = G__28338;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq28304){
var G__28305 = cljs.core.first.call(null,seq28304);
var seq28304__$1 = cljs.core.next.call(null,seq28304);
var G__28306 = cljs.core.first.call(null,seq28304__$1);
var seq28304__$2 = cljs.core.next.call(null,seq28304__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__28305,G__28306,seq28304__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___28341 = arguments.length;
var i__7485__auto___28342 = (0);
while(true){
if((i__7485__auto___28342 < len__7484__auto___28341)){
args__7491__auto__.push((arguments[i__7485__auto___28342]));

var G__28343 = (i__7485__auto___28342 + (1));
i__7485__auto___28342 = G__28343;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq28339){
var G__28340 = cljs.core.first.call(null,seq28339);
var seq28339__$1 = cljs.core.next.call(null,seq28339);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28340,seq28339__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___28346 = arguments.length;
var i__7485__auto___28347 = (0);
while(true){
if((i__7485__auto___28347 < len__7484__auto___28346)){
args__7491__auto__.push((arguments[i__7485__auto___28347]));

var G__28348 = (i__7485__auto___28347 + (1));
i__7485__auto___28347 = G__28348;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq28344){
var G__28345 = cljs.core.first.call(null,seq28344);
var seq28344__$1 = cljs.core.next.call(null,seq28344);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28345,seq28344__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args28349 = [];
var len__7484__auto___28354 = arguments.length;
var i__7485__auto___28355 = (0);
while(true){
if((i__7485__auto___28355 < len__7484__auto___28354)){
args28349.push((arguments[i__7485__auto___28355]));

var G__28356 = (i__7485__auto___28355 + (1));
i__7485__auto___28355 = G__28356;
continue;
} else {
}
break;
}

var G__28351 = args28349.length;
switch (G__28351) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28349.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj28353 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__6409__auto__ = start_index;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
})()};
return obj28353;
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
var len__7484__auto___28364 = arguments.length;
var i__7485__auto___28365 = (0);
while(true){
if((i__7485__auto___28365 < len__7484__auto___28364)){
args__7491__auto__.push((arguments[i__7485__auto___28365]));

var G__28366 = (i__7485__auto___28365 + (1));
i__7485__auto___28365 = G__28366;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__28360){
var vec__28361 = p__28360;
var state_override_fn = cljs.core.nth.call(null,vec__28361,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq28358){
var G__28359 = cljs.core.first.call(null,seq28358);
var seq28358__$1 = cljs.core.next.call(null,seq28358);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__28359,seq28358__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__7395__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_28370_28373 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_28371_28374 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_28370_28373,_STAR_print_fn_STAR_28371_28374,sb__7395__auto__){
return (function (x__7396__auto__){
return sb__7395__auto__.append(x__7396__auto__);
});})(_STAR_print_newline_STAR_28370_28373,_STAR_print_fn_STAR_28371_28374,sb__7395__auto__))
;

try{var _STAR_print_level_STAR_28372_28375 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_28372_28375;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28371_28374;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28370_28373;
}
return [cljs.core.str(sb__7395__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_28377 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_28377;
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
var G__28379 = name;
switch (G__28379) {
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
var vec__28384 = tag;
var html_tag = cljs.core.nth.call(null,vec__28384,(0),null);
var style = cljs.core.nth.call(null,vec__28384,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_28388 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_28388;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_28391 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_28392 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_28392;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_28391;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__28393 = initial_value;
var G__28394 = value.call(null);
initial_value = G__28393;
value = G__28394;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__28395 = initial_value;
var G__28396 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__28395;
value = G__28396;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__28397 = initial_value;
var G__28398 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__28397;
value = G__28398;
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

//# sourceMappingURL=templating.js.map?rel=1484456864199
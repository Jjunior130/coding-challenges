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
var x48182_48183 = value;
x48182_48183.devtools$protocols$IGroup$ = true;


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
var x48187_48188 = value;
x48187_48188.devtools$protocols$ITemplate$ = true;


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
var x48192_48193 = value;
x48192_48193.devtools$protocols$ISurrogate$ = true;


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
var len__26121__auto___48201 = arguments.length;
var i__26122__auto___48202 = (0);
while(true){
if((i__26122__auto___48202 < len__26121__auto___48201)){
args__26128__auto__.push((arguments[i__26122__auto___48202]));

var G__48203 = (i__26122__auto___48202 + (1));
i__26122__auto___48202 = G__48203;
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
var seq__48197_48204 = cljs.core.seq.call(null,items);
var chunk__48198_48205 = null;
var count__48199_48206 = (0);
var i__48200_48207 = (0);
while(true){
if((i__48200_48207 < count__48199_48206)){
var item_48208 = cljs.core._nth.call(null,chunk__48198_48205,i__48200_48207);
if(cljs.core.some_QMARK_.call(null,item_48208)){
if(cljs.core.coll_QMARK_.call(null,item_48208)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_48208)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_48208));
}
} else {
}

var G__48209 = seq__48197_48204;
var G__48210 = chunk__48198_48205;
var G__48211 = count__48199_48206;
var G__48212 = (i__48200_48207 + (1));
seq__48197_48204 = G__48209;
chunk__48198_48205 = G__48210;
count__48199_48206 = G__48211;
i__48200_48207 = G__48212;
continue;
} else {
var temp__4657__auto___48213 = cljs.core.seq.call(null,seq__48197_48204);
if(temp__4657__auto___48213){
var seq__48197_48214__$1 = temp__4657__auto___48213;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48197_48214__$1)){
var c__25857__auto___48215 = cljs.core.chunk_first.call(null,seq__48197_48214__$1);
var G__48216 = cljs.core.chunk_rest.call(null,seq__48197_48214__$1);
var G__48217 = c__25857__auto___48215;
var G__48218 = cljs.core.count.call(null,c__25857__auto___48215);
var G__48219 = (0);
seq__48197_48204 = G__48216;
chunk__48198_48205 = G__48217;
count__48199_48206 = G__48218;
i__48200_48207 = G__48219;
continue;
} else {
var item_48220 = cljs.core.first.call(null,seq__48197_48214__$1);
if(cljs.core.some_QMARK_.call(null,item_48220)){
if(cljs.core.coll_QMARK_.call(null,item_48220)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_48220)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_48220));
}
} else {
}

var G__48221 = cljs.core.next.call(null,seq__48197_48214__$1);
var G__48222 = null;
var G__48223 = (0);
var G__48224 = (0);
seq__48197_48204 = G__48221;
chunk__48198_48205 = G__48222;
count__48199_48206 = G__48223;
i__48200_48207 = G__48224;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq48196){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48196));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__26128__auto__ = [];
var len__26121__auto___48232 = arguments.length;
var i__26122__auto___48233 = (0);
while(true){
if((i__26122__auto___48233 < len__26121__auto___48232)){
args__26128__auto__.push((arguments[i__26122__auto___48233]));

var G__48234 = (i__26122__auto___48233 + (1));
i__26122__auto___48233 = G__48234;
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
var seq__48228_48235 = cljs.core.seq.call(null,children);
var chunk__48229_48236 = null;
var count__48230_48237 = (0);
var i__48231_48238 = (0);
while(true){
if((i__48231_48238 < count__48230_48237)){
var child_48239 = cljs.core._nth.call(null,chunk__48229_48236,i__48231_48238);
if(cljs.core.some_QMARK_.call(null,child_48239)){
if(cljs.core.coll_QMARK_.call(null,child_48239)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_48239))));
} else {
var temp__4655__auto___48240 = devtools.formatters.helpers.pref.call(null,child_48239);
if(cljs.core.truth_(temp__4655__auto___48240)){
var child_value_48241 = temp__4655__auto___48240;
template.push(child_value_48241);
} else {
}
}
} else {
}

var G__48242 = seq__48228_48235;
var G__48243 = chunk__48229_48236;
var G__48244 = count__48230_48237;
var G__48245 = (i__48231_48238 + (1));
seq__48228_48235 = G__48242;
chunk__48229_48236 = G__48243;
count__48230_48237 = G__48244;
i__48231_48238 = G__48245;
continue;
} else {
var temp__4657__auto___48246 = cljs.core.seq.call(null,seq__48228_48235);
if(temp__4657__auto___48246){
var seq__48228_48247__$1 = temp__4657__auto___48246;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48228_48247__$1)){
var c__25857__auto___48248 = cljs.core.chunk_first.call(null,seq__48228_48247__$1);
var G__48249 = cljs.core.chunk_rest.call(null,seq__48228_48247__$1);
var G__48250 = c__25857__auto___48248;
var G__48251 = cljs.core.count.call(null,c__25857__auto___48248);
var G__48252 = (0);
seq__48228_48235 = G__48249;
chunk__48229_48236 = G__48250;
count__48230_48237 = G__48251;
i__48231_48238 = G__48252;
continue;
} else {
var child_48253 = cljs.core.first.call(null,seq__48228_48247__$1);
if(cljs.core.some_QMARK_.call(null,child_48253)){
if(cljs.core.coll_QMARK_.call(null,child_48253)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_48253))));
} else {
var temp__4655__auto___48254 = devtools.formatters.helpers.pref.call(null,child_48253);
if(cljs.core.truth_(temp__4655__auto___48254)){
var child_value_48255 = temp__4655__auto___48254;
template.push(child_value_48255);
} else {
}
}
} else {
}

var G__48256 = cljs.core.next.call(null,seq__48228_48247__$1);
var G__48257 = null;
var G__48258 = (0);
var G__48259 = (0);
seq__48228_48235 = G__48256;
chunk__48229_48236 = G__48257;
count__48230_48237 = G__48258;
i__48231_48238 = G__48259;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq48225){
var G__48226 = cljs.core.first.call(null,seq48225);
var seq48225__$1 = cljs.core.next.call(null,seq48225);
var G__48227 = cljs.core.first.call(null,seq48225__$1);
var seq48225__$2 = cljs.core.next.call(null,seq48225__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__48226,G__48227,seq48225__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__26128__auto__ = [];
var len__26121__auto___48262 = arguments.length;
var i__26122__auto___48263 = (0);
while(true){
if((i__26122__auto___48263 < len__26121__auto___48262)){
args__26128__auto__.push((arguments[i__26122__auto___48263]));

var G__48264 = (i__26122__auto___48263 + (1));
i__26122__auto___48263 = G__48264;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq48260){
var G__48261 = cljs.core.first.call(null,seq48260);
var seq48260__$1 = cljs.core.next.call(null,seq48260);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48261,seq48260__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__26128__auto__ = [];
var len__26121__auto___48267 = arguments.length;
var i__26122__auto___48268 = (0);
while(true){
if((i__26122__auto___48268 < len__26121__auto___48267)){
args__26128__auto__.push((arguments[i__26122__auto___48268]));

var G__48269 = (i__26122__auto___48268 + (1));
i__26122__auto___48268 = G__48269;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq48265){
var G__48266 = cljs.core.first.call(null,seq48265);
var seq48265__$1 = cljs.core.next.call(null,seq48265);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48266,seq48265__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args48270 = [];
var len__26121__auto___48275 = arguments.length;
var i__26122__auto___48276 = (0);
while(true){
if((i__26122__auto___48276 < len__26121__auto___48275)){
args48270.push((arguments[i__26122__auto___48276]));

var G__48277 = (i__26122__auto___48276 + (1));
i__26122__auto___48276 = G__48277;
continue;
} else {
}
break;
}

var G__48272 = args48270.length;
switch (G__48272) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48270.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj48274 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__25046__auto__ = start_index;
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return (0);
}
})()};
return obj48274;
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
var len__26121__auto___48285 = arguments.length;
var i__26122__auto___48286 = (0);
while(true){
if((i__26122__auto___48286 < len__26121__auto___48285)){
args__26128__auto__.push((arguments[i__26122__auto___48286]));

var G__48287 = (i__26122__auto___48286 + (1));
i__26122__auto___48286 = G__48287;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__48281){
var vec__48282 = p__48281;
var state_override_fn = cljs.core.nth.call(null,vec__48282,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq48279){
var G__48280 = cljs.core.first.call(null,seq48279);
var seq48279__$1 = cljs.core.next.call(null,seq48279);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__48280,seq48279__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__26032__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_48291_48294 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_48292_48295 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_48291_48294,_STAR_print_fn_STAR_48292_48295,sb__26032__auto__){
return (function (x__26033__auto__){
return sb__26032__auto__.append(x__26033__auto__);
});})(_STAR_print_newline_STAR_48291_48294,_STAR_print_fn_STAR_48292_48295,sb__26032__auto__))
;

try{var _STAR_print_level_STAR_48293_48296 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_48293_48296;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_48292_48295;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_48291_48294;
}
return [cljs.core.str(sb__26032__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_48298 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_48298;
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
var G__48300 = name;
switch (G__48300) {
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
var vec__48305 = tag;
var html_tag = cljs.core.nth.call(null,vec__48305,(0),null);
var style = cljs.core.nth.call(null,vec__48305,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_48309 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_48309;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_48312 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_48313 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_48313;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_48312;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__48314 = initial_value;
var G__48315 = value.call(null);
initial_value = G__48314;
value = G__48315;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__48316 = initial_value;
var G__48317 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__48316;
value = G__48317;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__48318 = initial_value;
var G__48319 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__48318;
value = G__48319;
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

//# sourceMappingURL=templating.js.map?rel=1484702602475
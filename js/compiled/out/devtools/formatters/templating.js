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
var x49129_49130 = value;
x49129_49130.devtools$protocols$IGroup$ = true;


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
var x49134_49135 = value;
x49134_49135.devtools$protocols$ITemplate$ = true;


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
var x49139_49140 = value;
x49139_49140.devtools$protocols$ISurrogate$ = true;


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
var len__26121__auto___49148 = arguments.length;
var i__26122__auto___49149 = (0);
while(true){
if((i__26122__auto___49149 < len__26121__auto___49148)){
args__26128__auto__.push((arguments[i__26122__auto___49149]));

var G__49150 = (i__26122__auto___49149 + (1));
i__26122__auto___49149 = G__49150;
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
var seq__49144_49151 = cljs.core.seq.call(null,items);
var chunk__49145_49152 = null;
var count__49146_49153 = (0);
var i__49147_49154 = (0);
while(true){
if((i__49147_49154 < count__49146_49153)){
var item_49155 = cljs.core._nth.call(null,chunk__49145_49152,i__49147_49154);
if(cljs.core.some_QMARK_.call(null,item_49155)){
if(cljs.core.coll_QMARK_.call(null,item_49155)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_49155)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_49155));
}
} else {
}

var G__49156 = seq__49144_49151;
var G__49157 = chunk__49145_49152;
var G__49158 = count__49146_49153;
var G__49159 = (i__49147_49154 + (1));
seq__49144_49151 = G__49156;
chunk__49145_49152 = G__49157;
count__49146_49153 = G__49158;
i__49147_49154 = G__49159;
continue;
} else {
var temp__4657__auto___49160 = cljs.core.seq.call(null,seq__49144_49151);
if(temp__4657__auto___49160){
var seq__49144_49161__$1 = temp__4657__auto___49160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49144_49161__$1)){
var c__25857__auto___49162 = cljs.core.chunk_first.call(null,seq__49144_49161__$1);
var G__49163 = cljs.core.chunk_rest.call(null,seq__49144_49161__$1);
var G__49164 = c__25857__auto___49162;
var G__49165 = cljs.core.count.call(null,c__25857__auto___49162);
var G__49166 = (0);
seq__49144_49151 = G__49163;
chunk__49145_49152 = G__49164;
count__49146_49153 = G__49165;
i__49147_49154 = G__49166;
continue;
} else {
var item_49167 = cljs.core.first.call(null,seq__49144_49161__$1);
if(cljs.core.some_QMARK_.call(null,item_49167)){
if(cljs.core.coll_QMARK_.call(null,item_49167)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_49167)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_49167));
}
} else {
}

var G__49168 = cljs.core.next.call(null,seq__49144_49161__$1);
var G__49169 = null;
var G__49170 = (0);
var G__49171 = (0);
seq__49144_49151 = G__49168;
chunk__49145_49152 = G__49169;
count__49146_49153 = G__49170;
i__49147_49154 = G__49171;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq49143){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49143));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__26128__auto__ = [];
var len__26121__auto___49179 = arguments.length;
var i__26122__auto___49180 = (0);
while(true){
if((i__26122__auto___49180 < len__26121__auto___49179)){
args__26128__auto__.push((arguments[i__26122__auto___49180]));

var G__49181 = (i__26122__auto___49180 + (1));
i__26122__auto___49180 = G__49181;
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
var seq__49175_49182 = cljs.core.seq.call(null,children);
var chunk__49176_49183 = null;
var count__49177_49184 = (0);
var i__49178_49185 = (0);
while(true){
if((i__49178_49185 < count__49177_49184)){
var child_49186 = cljs.core._nth.call(null,chunk__49176_49183,i__49178_49185);
if(cljs.core.some_QMARK_.call(null,child_49186)){
if(cljs.core.coll_QMARK_.call(null,child_49186)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_49186))));
} else {
var temp__4655__auto___49187 = devtools.formatters.helpers.pref.call(null,child_49186);
if(cljs.core.truth_(temp__4655__auto___49187)){
var child_value_49188 = temp__4655__auto___49187;
template.push(child_value_49188);
} else {
}
}
} else {
}

var G__49189 = seq__49175_49182;
var G__49190 = chunk__49176_49183;
var G__49191 = count__49177_49184;
var G__49192 = (i__49178_49185 + (1));
seq__49175_49182 = G__49189;
chunk__49176_49183 = G__49190;
count__49177_49184 = G__49191;
i__49178_49185 = G__49192;
continue;
} else {
var temp__4657__auto___49193 = cljs.core.seq.call(null,seq__49175_49182);
if(temp__4657__auto___49193){
var seq__49175_49194__$1 = temp__4657__auto___49193;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49175_49194__$1)){
var c__25857__auto___49195 = cljs.core.chunk_first.call(null,seq__49175_49194__$1);
var G__49196 = cljs.core.chunk_rest.call(null,seq__49175_49194__$1);
var G__49197 = c__25857__auto___49195;
var G__49198 = cljs.core.count.call(null,c__25857__auto___49195);
var G__49199 = (0);
seq__49175_49182 = G__49196;
chunk__49176_49183 = G__49197;
count__49177_49184 = G__49198;
i__49178_49185 = G__49199;
continue;
} else {
var child_49200 = cljs.core.first.call(null,seq__49175_49194__$1);
if(cljs.core.some_QMARK_.call(null,child_49200)){
if(cljs.core.coll_QMARK_.call(null,child_49200)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_49200))));
} else {
var temp__4655__auto___49201 = devtools.formatters.helpers.pref.call(null,child_49200);
if(cljs.core.truth_(temp__4655__auto___49201)){
var child_value_49202 = temp__4655__auto___49201;
template.push(child_value_49202);
} else {
}
}
} else {
}

var G__49203 = cljs.core.next.call(null,seq__49175_49194__$1);
var G__49204 = null;
var G__49205 = (0);
var G__49206 = (0);
seq__49175_49182 = G__49203;
chunk__49176_49183 = G__49204;
count__49177_49184 = G__49205;
i__49178_49185 = G__49206;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq49172){
var G__49173 = cljs.core.first.call(null,seq49172);
var seq49172__$1 = cljs.core.next.call(null,seq49172);
var G__49174 = cljs.core.first.call(null,seq49172__$1);
var seq49172__$2 = cljs.core.next.call(null,seq49172__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__49173,G__49174,seq49172__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__26128__auto__ = [];
var len__26121__auto___49209 = arguments.length;
var i__26122__auto___49210 = (0);
while(true){
if((i__26122__auto___49210 < len__26121__auto___49209)){
args__26128__auto__.push((arguments[i__26122__auto___49210]));

var G__49211 = (i__26122__auto___49210 + (1));
i__26122__auto___49210 = G__49211;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq49207){
var G__49208 = cljs.core.first.call(null,seq49207);
var seq49207__$1 = cljs.core.next.call(null,seq49207);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49208,seq49207__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__26128__auto__ = [];
var len__26121__auto___49214 = arguments.length;
var i__26122__auto___49215 = (0);
while(true){
if((i__26122__auto___49215 < len__26121__auto___49214)){
args__26128__auto__.push((arguments[i__26122__auto___49215]));

var G__49216 = (i__26122__auto___49215 + (1));
i__26122__auto___49215 = G__49216;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq49212){
var G__49213 = cljs.core.first.call(null,seq49212);
var seq49212__$1 = cljs.core.next.call(null,seq49212);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49213,seq49212__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args49217 = [];
var len__26121__auto___49222 = arguments.length;
var i__26122__auto___49223 = (0);
while(true){
if((i__26122__auto___49223 < len__26121__auto___49222)){
args49217.push((arguments[i__26122__auto___49223]));

var G__49224 = (i__26122__auto___49223 + (1));
i__26122__auto___49223 = G__49224;
continue;
} else {
}
break;
}

var G__49219 = args49217.length;
switch (G__49219) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49217.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj49221 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__25046__auto__ = start_index;
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return (0);
}
})()};
return obj49221;
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
var len__26121__auto___49232 = arguments.length;
var i__26122__auto___49233 = (0);
while(true){
if((i__26122__auto___49233 < len__26121__auto___49232)){
args__26128__auto__.push((arguments[i__26122__auto___49233]));

var G__49234 = (i__26122__auto___49233 + (1));
i__26122__auto___49233 = G__49234;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__49228){
var vec__49229 = p__49228;
var state_override_fn = cljs.core.nth.call(null,vec__49229,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq49226){
var G__49227 = cljs.core.first.call(null,seq49226);
var seq49226__$1 = cljs.core.next.call(null,seq49226);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__49227,seq49226__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__26032__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_49238_49241 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_49239_49242 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_49238_49241,_STAR_print_fn_STAR_49239_49242,sb__26032__auto__){
return (function (x__26033__auto__){
return sb__26032__auto__.append(x__26033__auto__);
});})(_STAR_print_newline_STAR_49238_49241,_STAR_print_fn_STAR_49239_49242,sb__26032__auto__))
;

try{var _STAR_print_level_STAR_49240_49243 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_49240_49243;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_49239_49242;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_49238_49241;
}
return [cljs.core.str(sb__26032__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_49245 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_49245;
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
var G__49247 = name;
switch (G__49247) {
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
var vec__49252 = tag;
var html_tag = cljs.core.nth.call(null,vec__49252,(0),null);
var style = cljs.core.nth.call(null,vec__49252,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_49256 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_49256;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_49259 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_49260 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_49260;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_49259;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__49261 = initial_value;
var G__49262 = value.call(null);
initial_value = G__49261;
value = G__49262;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__49263 = initial_value;
var G__49264 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__49263;
value = G__49264;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__49265 = initial_value;
var G__49266 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__49265;
value = G__49266;
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

//# sourceMappingURL=templating.js.map?rel=1484163027146
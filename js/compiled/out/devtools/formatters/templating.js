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
var x48847_48848 = value;
x48847_48848.devtools$protocols$IGroup$ = true;


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
var x48852_48853 = value;
x48852_48853.devtools$protocols$ITemplate$ = true;


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
var x48857_48858 = value;
x48857_48858.devtools$protocols$ISurrogate$ = true;


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
var len__26121__auto___48866 = arguments.length;
var i__26122__auto___48867 = (0);
while(true){
if((i__26122__auto___48867 < len__26121__auto___48866)){
args__26128__auto__.push((arguments[i__26122__auto___48867]));

var G__48868 = (i__26122__auto___48867 + (1));
i__26122__auto___48867 = G__48868;
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
var seq__48862_48869 = cljs.core.seq.call(null,items);
var chunk__48863_48870 = null;
var count__48864_48871 = (0);
var i__48865_48872 = (0);
while(true){
if((i__48865_48872 < count__48864_48871)){
var item_48873 = cljs.core._nth.call(null,chunk__48863_48870,i__48865_48872);
if(cljs.core.some_QMARK_.call(null,item_48873)){
if(cljs.core.coll_QMARK_.call(null,item_48873)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_48873)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_48873));
}
} else {
}

var G__48874 = seq__48862_48869;
var G__48875 = chunk__48863_48870;
var G__48876 = count__48864_48871;
var G__48877 = (i__48865_48872 + (1));
seq__48862_48869 = G__48874;
chunk__48863_48870 = G__48875;
count__48864_48871 = G__48876;
i__48865_48872 = G__48877;
continue;
} else {
var temp__4657__auto___48878 = cljs.core.seq.call(null,seq__48862_48869);
if(temp__4657__auto___48878){
var seq__48862_48879__$1 = temp__4657__auto___48878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48862_48879__$1)){
var c__25857__auto___48880 = cljs.core.chunk_first.call(null,seq__48862_48879__$1);
var G__48881 = cljs.core.chunk_rest.call(null,seq__48862_48879__$1);
var G__48882 = c__25857__auto___48880;
var G__48883 = cljs.core.count.call(null,c__25857__auto___48880);
var G__48884 = (0);
seq__48862_48869 = G__48881;
chunk__48863_48870 = G__48882;
count__48864_48871 = G__48883;
i__48865_48872 = G__48884;
continue;
} else {
var item_48885 = cljs.core.first.call(null,seq__48862_48879__$1);
if(cljs.core.some_QMARK_.call(null,item_48885)){
if(cljs.core.coll_QMARK_.call(null,item_48885)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_48885)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_48885));
}
} else {
}

var G__48886 = cljs.core.next.call(null,seq__48862_48879__$1);
var G__48887 = null;
var G__48888 = (0);
var G__48889 = (0);
seq__48862_48869 = G__48886;
chunk__48863_48870 = G__48887;
count__48864_48871 = G__48888;
i__48865_48872 = G__48889;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq48861){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48861));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__26128__auto__ = [];
var len__26121__auto___48897 = arguments.length;
var i__26122__auto___48898 = (0);
while(true){
if((i__26122__auto___48898 < len__26121__auto___48897)){
args__26128__auto__.push((arguments[i__26122__auto___48898]));

var G__48899 = (i__26122__auto___48898 + (1));
i__26122__auto___48898 = G__48899;
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
var seq__48893_48900 = cljs.core.seq.call(null,children);
var chunk__48894_48901 = null;
var count__48895_48902 = (0);
var i__48896_48903 = (0);
while(true){
if((i__48896_48903 < count__48895_48902)){
var child_48904 = cljs.core._nth.call(null,chunk__48894_48901,i__48896_48903);
if(cljs.core.some_QMARK_.call(null,child_48904)){
if(cljs.core.coll_QMARK_.call(null,child_48904)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_48904))));
} else {
var temp__4655__auto___48905 = devtools.formatters.helpers.pref.call(null,child_48904);
if(cljs.core.truth_(temp__4655__auto___48905)){
var child_value_48906 = temp__4655__auto___48905;
template.push(child_value_48906);
} else {
}
}
} else {
}

var G__48907 = seq__48893_48900;
var G__48908 = chunk__48894_48901;
var G__48909 = count__48895_48902;
var G__48910 = (i__48896_48903 + (1));
seq__48893_48900 = G__48907;
chunk__48894_48901 = G__48908;
count__48895_48902 = G__48909;
i__48896_48903 = G__48910;
continue;
} else {
var temp__4657__auto___48911 = cljs.core.seq.call(null,seq__48893_48900);
if(temp__4657__auto___48911){
var seq__48893_48912__$1 = temp__4657__auto___48911;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48893_48912__$1)){
var c__25857__auto___48913 = cljs.core.chunk_first.call(null,seq__48893_48912__$1);
var G__48914 = cljs.core.chunk_rest.call(null,seq__48893_48912__$1);
var G__48915 = c__25857__auto___48913;
var G__48916 = cljs.core.count.call(null,c__25857__auto___48913);
var G__48917 = (0);
seq__48893_48900 = G__48914;
chunk__48894_48901 = G__48915;
count__48895_48902 = G__48916;
i__48896_48903 = G__48917;
continue;
} else {
var child_48918 = cljs.core.first.call(null,seq__48893_48912__$1);
if(cljs.core.some_QMARK_.call(null,child_48918)){
if(cljs.core.coll_QMARK_.call(null,child_48918)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_48918))));
} else {
var temp__4655__auto___48919 = devtools.formatters.helpers.pref.call(null,child_48918);
if(cljs.core.truth_(temp__4655__auto___48919)){
var child_value_48920 = temp__4655__auto___48919;
template.push(child_value_48920);
} else {
}
}
} else {
}

var G__48921 = cljs.core.next.call(null,seq__48893_48912__$1);
var G__48922 = null;
var G__48923 = (0);
var G__48924 = (0);
seq__48893_48900 = G__48921;
chunk__48894_48901 = G__48922;
count__48895_48902 = G__48923;
i__48896_48903 = G__48924;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq48890){
var G__48891 = cljs.core.first.call(null,seq48890);
var seq48890__$1 = cljs.core.next.call(null,seq48890);
var G__48892 = cljs.core.first.call(null,seq48890__$1);
var seq48890__$2 = cljs.core.next.call(null,seq48890__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__48891,G__48892,seq48890__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__26128__auto__ = [];
var len__26121__auto___48927 = arguments.length;
var i__26122__auto___48928 = (0);
while(true){
if((i__26122__auto___48928 < len__26121__auto___48927)){
args__26128__auto__.push((arguments[i__26122__auto___48928]));

var G__48929 = (i__26122__auto___48928 + (1));
i__26122__auto___48928 = G__48929;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq48925){
var G__48926 = cljs.core.first.call(null,seq48925);
var seq48925__$1 = cljs.core.next.call(null,seq48925);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48926,seq48925__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__26128__auto__ = [];
var len__26121__auto___48932 = arguments.length;
var i__26122__auto___48933 = (0);
while(true){
if((i__26122__auto___48933 < len__26121__auto___48932)){
args__26128__auto__.push((arguments[i__26122__auto___48933]));

var G__48934 = (i__26122__auto___48933 + (1));
i__26122__auto___48933 = G__48934;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq48930){
var G__48931 = cljs.core.first.call(null,seq48930);
var seq48930__$1 = cljs.core.next.call(null,seq48930);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48931,seq48930__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args48935 = [];
var len__26121__auto___48940 = arguments.length;
var i__26122__auto___48941 = (0);
while(true){
if((i__26122__auto___48941 < len__26121__auto___48940)){
args48935.push((arguments[i__26122__auto___48941]));

var G__48942 = (i__26122__auto___48941 + (1));
i__26122__auto___48941 = G__48942;
continue;
} else {
}
break;
}

var G__48937 = args48935.length;
switch (G__48937) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48935.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj48939 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__25046__auto__ = start_index;
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return (0);
}
})()};
return obj48939;
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
var len__26121__auto___48950 = arguments.length;
var i__26122__auto___48951 = (0);
while(true){
if((i__26122__auto___48951 < len__26121__auto___48950)){
args__26128__auto__.push((arguments[i__26122__auto___48951]));

var G__48952 = (i__26122__auto___48951 + (1));
i__26122__auto___48951 = G__48952;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__48946){
var vec__48947 = p__48946;
var state_override_fn = cljs.core.nth.call(null,vec__48947,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq48944){
var G__48945 = cljs.core.first.call(null,seq48944);
var seq48944__$1 = cljs.core.next.call(null,seq48944);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__48945,seq48944__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__26032__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_48956_48959 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_48957_48960 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_48956_48959,_STAR_print_fn_STAR_48957_48960,sb__26032__auto__){
return (function (x__26033__auto__){
return sb__26032__auto__.append(x__26033__auto__);
});})(_STAR_print_newline_STAR_48956_48959,_STAR_print_fn_STAR_48957_48960,sb__26032__auto__))
;

try{var _STAR_print_level_STAR_48958_48961 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_48958_48961;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_48957_48960;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_48956_48959;
}
return [cljs.core.str(sb__26032__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_48963 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_48963;
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
var G__48965 = name;
switch (G__48965) {
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
var vec__48970 = tag;
var html_tag = cljs.core.nth.call(null,vec__48970,(0),null);
var style = cljs.core.nth.call(null,vec__48970,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_48974 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_48974;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_48977 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_48978 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_48978;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_48977;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__48979 = initial_value;
var G__48980 = value.call(null);
initial_value = G__48979;
value = G__48980;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__48981 = initial_value;
var G__48982 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__48981;
value = G__48982;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__48983 = initial_value;
var G__48984 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__48983;
value = G__48984;
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

//# sourceMappingURL=templating.js.map?rel=1484366743330
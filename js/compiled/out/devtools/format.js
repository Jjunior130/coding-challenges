// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__25709__auto__ = (((value == null))?null:value);
var m__25710__auto__ = (devtools.format._header[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,value);
} else {
var m__25710__auto____$1 = (devtools.format._header["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__25709__auto__ = (((value == null))?null:value);
var m__25710__auto__ = (devtools.format._has_body[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,value);
} else {
var m__25710__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__25709__auto__ = (((value == null))?null:value);
var m__25710__auto__ = (devtools.format._body[goog.typeOf(x__25709__auto__)]);
if(!((m__25710__auto__ == null))){
return m__25710__auto__.call(null,value);
} else {
var m__25710__auto____$1 = (devtools.format._body["_"]);
if(!((m__25710__auto____$1 == null))){
return m__25710__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__65117__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__65117__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__65117__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__65117__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__65116__auto__ = temp__4657__auto____$2;
return goog.object.get(o__65116__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__65117__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__65117__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__65117__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__65117__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__65116__auto__ = temp__4657__auto____$2;
return goog.object.get(o__65116__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__65117__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__65117__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__65117__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__65117__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__65116__auto__ = temp__4657__auto____$2;
return goog.object.get(o__65116__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__65117__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__65117__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__65117__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__65117__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__65116__auto__ = temp__4657__auto____$2;
return goog.object.get(o__65116__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__65117__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__65117__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__65117__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__65117__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__65116__auto__ = temp__4657__auto____$2;
return goog.object.get(o__65116__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__65117__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__65117__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__65117__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__65117__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__65116__auto__ = temp__4657__auto____$2;
return goog.object.get(o__65116__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__65117__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__65117__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__65117__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__65117__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__65116__auto__ = temp__4657__auto____$2;
return goog.object.get(o__65116__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__26128__auto__ = [];
var len__26121__auto___145925 = arguments.length;
var i__26122__auto___145926 = (0);
while(true){
if((i__26122__auto___145926 < len__26121__auto___145925)){
args__26128__auto__.push((arguments[i__26122__auto___145926]));

var G__145927 = (i__26122__auto___145926 + (1));
i__26122__auto___145926 = G__145927;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq145924){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq145924));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__26128__auto__ = [];
var len__26121__auto___145929 = arguments.length;
var i__26122__auto___145930 = (0);
while(true){
if((i__26122__auto___145930 < len__26121__auto___145929)){
args__26128__auto__.push((arguments[i__26122__auto___145930]));

var G__145931 = (i__26122__auto___145930 + (1));
i__26122__auto___145930 = G__145931;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq145928){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq145928));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__26128__auto__ = [];
var len__26121__auto___145933 = arguments.length;
var i__26122__auto___145934 = (0);
while(true){
if((i__26122__auto___145934 < len__26121__auto___145933)){
args__26128__auto__.push((arguments[i__26122__auto___145934]));

var G__145935 = (i__26122__auto___145934 + (1));
i__26122__auto___145934 = G__145935;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq145932){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq145932));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__26128__auto__ = [];
var len__26121__auto___145937 = arguments.length;
var i__26122__auto___145938 = (0);
while(true){
if((i__26122__auto___145938 < len__26121__auto___145937)){
args__26128__auto__.push((arguments[i__26122__auto___145938]));

var G__145939 = (i__26122__auto___145938 + (1));
i__26122__auto___145938 = G__145939;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq145936){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq145936));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__26128__auto__ = [];
var len__26121__auto___145941 = arguments.length;
var i__26122__auto___145942 = (0);
while(true){
if((i__26122__auto___145942 < len__26121__auto___145941)){
args__26128__auto__.push((arguments[i__26122__auto___145942]));

var G__145943 = (i__26122__auto___145942 + (1));
i__26122__auto___145942 = G__145943;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq145940){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq145940));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__26128__auto__ = [];
var len__26121__auto___145945 = arguments.length;
var i__26122__auto___145946 = (0);
while(true){
if((i__26122__auto___145946 < len__26121__auto___145945)){
args__26128__auto__.push((arguments[i__26122__auto___145946]));

var G__145947 = (i__26122__auto___145946 + (1));
i__26122__auto___145946 = G__145947;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq145944){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq145944));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__26128__auto__ = [];
var len__26121__auto___145949 = arguments.length;
var i__26122__auto___145950 = (0);
while(true){
if((i__26122__auto___145950 < len__26121__auto___145949)){
args__26128__auto__.push((arguments[i__26122__auto___145950]));

var G__145951 = (i__26122__auto___145950 + (1));
i__26122__auto___145950 = G__145951;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq145948){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq145948));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__26128__auto__ = [];
var len__26121__auto___145959 = arguments.length;
var i__26122__auto___145960 = (0);
while(true){
if((i__26122__auto___145960 < len__26121__auto___145959)){
args__26128__auto__.push((arguments[i__26122__auto___145960]));

var G__145961 = (i__26122__auto___145960 + (1));
i__26122__auto___145960 = G__145961;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__145955){
var vec__145956 = p__145955;
var state_override = cljs.core.nth.call(null,vec__145956,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__145956,state_override){
return (function (p1__145952_SHARP_){
return cljs.core.merge.call(null,p1__145952_SHARP_,state_override);
});})(vec__145956,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq145953){
var G__145954 = cljs.core.first.call(null,seq145953);
var seq145953__$1 = cljs.core.next.call(null,seq145953);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__145954,seq145953__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__26128__auto__ = [];
var len__26121__auto___145963 = arguments.length;
var i__26122__auto___145964 = (0);
while(true){
if((i__26122__auto___145964 < len__26121__auto___145963)){
args__26128__auto__.push((arguments[i__26122__auto___145964]));

var G__145965 = (i__26122__auto___145964 + (1));
i__26122__auto___145964 = G__145965;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq145962){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq145962));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__26128__auto__ = [];
var len__26121__auto___145968 = arguments.length;
var i__26122__auto___145969 = (0);
while(true){
if((i__26122__auto___145969 < len__26121__auto___145968)){
args__26128__auto__.push((arguments[i__26122__auto___145969]));

var G__145970 = (i__26122__auto___145969 + (1));
i__26122__auto___145969 = G__145970;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq145966){
var G__145967 = cljs.core.first.call(null,seq145966);
var seq145966__$1 = cljs.core.next.call(null,seq145966);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__145967,seq145966__$1);
});


//# sourceMappingURL=format.js.map?rel=1484099831181
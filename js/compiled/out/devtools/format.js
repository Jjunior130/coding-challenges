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
var x__7072__auto__ = (((value == null))?null:value);
var m__7073__auto__ = (devtools.format._header[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,value);
} else {
var m__7073__auto____$1 = (devtools.format._header["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,value);
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
var x__7072__auto__ = (((value == null))?null:value);
var m__7073__auto__ = (devtools.format._has_body[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,value);
} else {
var m__7073__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,value);
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
var x__7072__auto__ = (((value == null))?null:value);
var m__7073__auto__ = (devtools.format._body[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,value);
} else {
var m__7073__auto____$1 = (devtools.format._body["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,value);
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
var o__36628__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36628__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36628__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36628__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36627__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36627__auto__,"make_template");
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
var o__36628__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36628__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36628__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36628__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36627__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36627__auto__,"make_group");
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
var o__36628__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36628__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36628__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36628__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36627__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36627__auto__,"make_reference");
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
var o__36628__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36628__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36628__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36628__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36627__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36627__auto__,"make_surrogate");
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
var o__36628__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36628__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36628__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36628__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36627__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36627__auto__,"render_markup");
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
var o__36628__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36628__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36628__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36628__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36627__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36627__auto__,"_LT_header_GT_");
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
var o__36628__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36628__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36628__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36628__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36627__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36627__auto__,"_LT_standard_body_GT_");
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
var args__7491__auto__ = [];
var len__7484__auto___36649 = arguments.length;
var i__7485__auto___36650 = (0);
while(true){
if((i__7485__auto___36650 < len__7484__auto___36649)){
args__7491__auto__.push((arguments[i__7485__auto___36650]));

var G__36651 = (i__7485__auto___36650 + (1));
i__7485__auto___36650 = G__36651;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq36648){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36648));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36653 = arguments.length;
var i__7485__auto___36654 = (0);
while(true){
if((i__7485__auto___36654 < len__7484__auto___36653)){
args__7491__auto__.push((arguments[i__7485__auto___36654]));

var G__36655 = (i__7485__auto___36654 + (1));
i__7485__auto___36654 = G__36655;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq36652){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36652));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36657 = arguments.length;
var i__7485__auto___36658 = (0);
while(true){
if((i__7485__auto___36658 < len__7484__auto___36657)){
args__7491__auto__.push((arguments[i__7485__auto___36658]));

var G__36659 = (i__7485__auto___36658 + (1));
i__7485__auto___36658 = G__36659;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq36656){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36656));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36661 = arguments.length;
var i__7485__auto___36662 = (0);
while(true){
if((i__7485__auto___36662 < len__7484__auto___36661)){
args__7491__auto__.push((arguments[i__7485__auto___36662]));

var G__36663 = (i__7485__auto___36662 + (1));
i__7485__auto___36662 = G__36663;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq36660){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36660));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36665 = arguments.length;
var i__7485__auto___36666 = (0);
while(true){
if((i__7485__auto___36666 < len__7484__auto___36665)){
args__7491__auto__.push((arguments[i__7485__auto___36666]));

var G__36667 = (i__7485__auto___36666 + (1));
i__7485__auto___36666 = G__36667;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq36664){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36664));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36669 = arguments.length;
var i__7485__auto___36670 = (0);
while(true){
if((i__7485__auto___36670 < len__7484__auto___36669)){
args__7491__auto__.push((arguments[i__7485__auto___36670]));

var G__36671 = (i__7485__auto___36670 + (1));
i__7485__auto___36670 = G__36671;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq36668){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36668));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36673 = arguments.length;
var i__7485__auto___36674 = (0);
while(true){
if((i__7485__auto___36674 < len__7484__auto___36673)){
args__7491__auto__.push((arguments[i__7485__auto___36674]));

var G__36675 = (i__7485__auto___36674 + (1));
i__7485__auto___36674 = G__36675;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq36672){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36672));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36683 = arguments.length;
var i__7485__auto___36684 = (0);
while(true){
if((i__7485__auto___36684 < len__7484__auto___36683)){
args__7491__auto__.push((arguments[i__7485__auto___36684]));

var G__36685 = (i__7485__auto___36684 + (1));
i__7485__auto___36684 = G__36685;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__36679){
var vec__36680 = p__36679;
var state_override = cljs.core.nth.call(null,vec__36680,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__36680,state_override){
return (function (p1__36676_SHARP_){
return cljs.core.merge.call(null,p1__36676_SHARP_,state_override);
});})(vec__36680,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq36677){
var G__36678 = cljs.core.first.call(null,seq36677);
var seq36677__$1 = cljs.core.next.call(null,seq36677);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__36678,seq36677__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36687 = arguments.length;
var i__7485__auto___36688 = (0);
while(true){
if((i__7485__auto___36688 < len__7484__auto___36687)){
args__7491__auto__.push((arguments[i__7485__auto___36688]));

var G__36689 = (i__7485__auto___36688 + (1));
i__7485__auto___36688 = G__36689;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq36686){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36686));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36692 = arguments.length;
var i__7485__auto___36693 = (0);
while(true){
if((i__7485__auto___36693 < len__7484__auto___36692)){
args__7491__auto__.push((arguments[i__7485__auto___36693]));

var G__36694 = (i__7485__auto___36693 + (1));
i__7485__auto___36693 = G__36694;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq36690){
var G__36691 = cljs.core.first.call(null,seq36690);
var seq36690__$1 = cljs.core.next.call(null,seq36690);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__36691,seq36690__$1);
});


//# sourceMappingURL=format.js.map?rel=1485242681504
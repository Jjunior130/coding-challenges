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
var o__36332__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36332__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36332__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36332__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36331__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36331__auto__,"make_template");
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
var o__36332__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36332__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36332__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36332__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36331__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36331__auto__,"make_group");
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
var o__36332__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36332__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36332__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36332__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36331__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36331__auto__,"make_reference");
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
var o__36332__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36332__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36332__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36332__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36331__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36331__auto__,"make_surrogate");
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
var o__36332__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36332__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36332__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36332__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36331__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36331__auto__,"render_markup");
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
var o__36332__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36332__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36332__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36332__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36331__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36331__auto__,"_LT_header_GT_");
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
var o__36332__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36332__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36332__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36332__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36331__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36331__auto__,"_LT_standard_body_GT_");
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
var len__7484__auto___36353 = arguments.length;
var i__7485__auto___36354 = (0);
while(true){
if((i__7485__auto___36354 < len__7484__auto___36353)){
args__7491__auto__.push((arguments[i__7485__auto___36354]));

var G__36355 = (i__7485__auto___36354 + (1));
i__7485__auto___36354 = G__36355;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq36352){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36352));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36357 = arguments.length;
var i__7485__auto___36358 = (0);
while(true){
if((i__7485__auto___36358 < len__7484__auto___36357)){
args__7491__auto__.push((arguments[i__7485__auto___36358]));

var G__36359 = (i__7485__auto___36358 + (1));
i__7485__auto___36358 = G__36359;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq36356){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36356));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36361 = arguments.length;
var i__7485__auto___36362 = (0);
while(true){
if((i__7485__auto___36362 < len__7484__auto___36361)){
args__7491__auto__.push((arguments[i__7485__auto___36362]));

var G__36363 = (i__7485__auto___36362 + (1));
i__7485__auto___36362 = G__36363;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq36360){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36360));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36365 = arguments.length;
var i__7485__auto___36366 = (0);
while(true){
if((i__7485__auto___36366 < len__7484__auto___36365)){
args__7491__auto__.push((arguments[i__7485__auto___36366]));

var G__36367 = (i__7485__auto___36366 + (1));
i__7485__auto___36366 = G__36367;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq36364){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36364));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36369 = arguments.length;
var i__7485__auto___36370 = (0);
while(true){
if((i__7485__auto___36370 < len__7484__auto___36369)){
args__7491__auto__.push((arguments[i__7485__auto___36370]));

var G__36371 = (i__7485__auto___36370 + (1));
i__7485__auto___36370 = G__36371;
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

devtools.format.template.cljs$lang$applyTo = (function (seq36368){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36368));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36373 = arguments.length;
var i__7485__auto___36374 = (0);
while(true){
if((i__7485__auto___36374 < len__7484__auto___36373)){
args__7491__auto__.push((arguments[i__7485__auto___36374]));

var G__36375 = (i__7485__auto___36374 + (1));
i__7485__auto___36374 = G__36375;
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

devtools.format.group.cljs$lang$applyTo = (function (seq36372){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36372));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36377 = arguments.length;
var i__7485__auto___36378 = (0);
while(true){
if((i__7485__auto___36378 < len__7484__auto___36377)){
args__7491__auto__.push((arguments[i__7485__auto___36378]));

var G__36379 = (i__7485__auto___36378 + (1));
i__7485__auto___36378 = G__36379;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq36376){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36376));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36387 = arguments.length;
var i__7485__auto___36388 = (0);
while(true){
if((i__7485__auto___36388 < len__7484__auto___36387)){
args__7491__auto__.push((arguments[i__7485__auto___36388]));

var G__36389 = (i__7485__auto___36388 + (1));
i__7485__auto___36388 = G__36389;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__36383){
var vec__36384 = p__36383;
var state_override = cljs.core.nth.call(null,vec__36384,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__36384,state_override){
return (function (p1__36380_SHARP_){
return cljs.core.merge.call(null,p1__36380_SHARP_,state_override);
});})(vec__36384,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq36381){
var G__36382 = cljs.core.first.call(null,seq36381);
var seq36381__$1 = cljs.core.next.call(null,seq36381);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__36382,seq36381__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36391 = arguments.length;
var i__7485__auto___36392 = (0);
while(true){
if((i__7485__auto___36392 < len__7484__auto___36391)){
args__7491__auto__.push((arguments[i__7485__auto___36392]));

var G__36393 = (i__7485__auto___36392 + (1));
i__7485__auto___36392 = G__36393;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq36390){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36390));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36396 = arguments.length;
var i__7485__auto___36397 = (0);
while(true){
if((i__7485__auto___36397 < len__7484__auto___36396)){
args__7491__auto__.push((arguments[i__7485__auto___36397]));

var G__36398 = (i__7485__auto___36397 + (1));
i__7485__auto___36397 = G__36398;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq36394){
var G__36395 = cljs.core.first.call(null,seq36394);
var seq36394__$1 = cljs.core.next.call(null,seq36394);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__36395,seq36394__$1);
});


//# sourceMappingURL=format.js.map?rel=1484115258370
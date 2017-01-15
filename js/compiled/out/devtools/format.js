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
var o__36424__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36424__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36424__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36424__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36423__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36423__auto__,"make_template");
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
var o__36424__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36424__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36424__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36424__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36423__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36423__auto__,"make_group");
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
var o__36424__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36424__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36424__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36424__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36423__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36423__auto__,"make_reference");
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
var o__36424__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36424__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36424__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36424__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36423__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36423__auto__,"make_surrogate");
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
var o__36424__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36424__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36424__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36424__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36423__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36423__auto__,"render_markup");
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
var o__36424__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36424__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36424__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36424__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36423__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36423__auto__,"_LT_header_GT_");
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
var o__36424__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36424__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36424__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36424__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36423__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36423__auto__,"_LT_standard_body_GT_");
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
var len__7484__auto___36445 = arguments.length;
var i__7485__auto___36446 = (0);
while(true){
if((i__7485__auto___36446 < len__7484__auto___36445)){
args__7491__auto__.push((arguments[i__7485__auto___36446]));

var G__36447 = (i__7485__auto___36446 + (1));
i__7485__auto___36446 = G__36447;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq36444){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36444));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36449 = arguments.length;
var i__7485__auto___36450 = (0);
while(true){
if((i__7485__auto___36450 < len__7484__auto___36449)){
args__7491__auto__.push((arguments[i__7485__auto___36450]));

var G__36451 = (i__7485__auto___36450 + (1));
i__7485__auto___36450 = G__36451;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq36448){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36448));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36453 = arguments.length;
var i__7485__auto___36454 = (0);
while(true){
if((i__7485__auto___36454 < len__7484__auto___36453)){
args__7491__auto__.push((arguments[i__7485__auto___36454]));

var G__36455 = (i__7485__auto___36454 + (1));
i__7485__auto___36454 = G__36455;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq36452){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36452));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36457 = arguments.length;
var i__7485__auto___36458 = (0);
while(true){
if((i__7485__auto___36458 < len__7484__auto___36457)){
args__7491__auto__.push((arguments[i__7485__auto___36458]));

var G__36459 = (i__7485__auto___36458 + (1));
i__7485__auto___36458 = G__36459;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq36456){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36456));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36461 = arguments.length;
var i__7485__auto___36462 = (0);
while(true){
if((i__7485__auto___36462 < len__7484__auto___36461)){
args__7491__auto__.push((arguments[i__7485__auto___36462]));

var G__36463 = (i__7485__auto___36462 + (1));
i__7485__auto___36462 = G__36463;
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

devtools.format.template.cljs$lang$applyTo = (function (seq36460){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36460));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36465 = arguments.length;
var i__7485__auto___36466 = (0);
while(true){
if((i__7485__auto___36466 < len__7484__auto___36465)){
args__7491__auto__.push((arguments[i__7485__auto___36466]));

var G__36467 = (i__7485__auto___36466 + (1));
i__7485__auto___36466 = G__36467;
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

devtools.format.group.cljs$lang$applyTo = (function (seq36464){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36464));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36469 = arguments.length;
var i__7485__auto___36470 = (0);
while(true){
if((i__7485__auto___36470 < len__7484__auto___36469)){
args__7491__auto__.push((arguments[i__7485__auto___36470]));

var G__36471 = (i__7485__auto___36470 + (1));
i__7485__auto___36470 = G__36471;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq36468){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36468));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36479 = arguments.length;
var i__7485__auto___36480 = (0);
while(true){
if((i__7485__auto___36480 < len__7484__auto___36479)){
args__7491__auto__.push((arguments[i__7485__auto___36480]));

var G__36481 = (i__7485__auto___36480 + (1));
i__7485__auto___36480 = G__36481;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__36475){
var vec__36476 = p__36475;
var state_override = cljs.core.nth.call(null,vec__36476,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__36476,state_override){
return (function (p1__36472_SHARP_){
return cljs.core.merge.call(null,p1__36472_SHARP_,state_override);
});})(vec__36476,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq36473){
var G__36474 = cljs.core.first.call(null,seq36473);
var seq36473__$1 = cljs.core.next.call(null,seq36473);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__36474,seq36473__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36483 = arguments.length;
var i__7485__auto___36484 = (0);
while(true){
if((i__7485__auto___36484 < len__7484__auto___36483)){
args__7491__auto__.push((arguments[i__7485__auto___36484]));

var G__36485 = (i__7485__auto___36484 + (1));
i__7485__auto___36484 = G__36485;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq36482){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36482));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36488 = arguments.length;
var i__7485__auto___36489 = (0);
while(true){
if((i__7485__auto___36489 < len__7484__auto___36488)){
args__7491__auto__.push((arguments[i__7485__auto___36489]));

var G__36490 = (i__7485__auto___36489 + (1));
i__7485__auto___36489 = G__36490;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq36486){
var G__36487 = cljs.core.first.call(null,seq36486);
var seq36486__$1 = cljs.core.next.call(null,seq36486);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__36487,seq36486__$1);
});


//# sourceMappingURL=format.js.map?rel=1484441677017
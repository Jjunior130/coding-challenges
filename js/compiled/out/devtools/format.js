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
var o__36391__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36391__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36391__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36391__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36390__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36390__auto__,"make_template");
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
var o__36391__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36391__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36391__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36391__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36390__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36390__auto__,"make_group");
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
var o__36391__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36391__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36391__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36391__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36390__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36390__auto__,"make_reference");
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
var o__36391__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36391__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36391__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36391__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36390__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36390__auto__,"make_surrogate");
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
var o__36391__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36391__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36391__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36391__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36390__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36390__auto__,"render_markup");
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
var o__36391__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36391__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36391__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36391__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36390__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36390__auto__,"_LT_header_GT_");
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
var o__36391__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36391__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36391__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36391__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36390__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36390__auto__,"_LT_standard_body_GT_");
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
var len__7484__auto___36412 = arguments.length;
var i__7485__auto___36413 = (0);
while(true){
if((i__7485__auto___36413 < len__7484__auto___36412)){
args__7491__auto__.push((arguments[i__7485__auto___36413]));

var G__36414 = (i__7485__auto___36413 + (1));
i__7485__auto___36413 = G__36414;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq36411){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36411));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36416 = arguments.length;
var i__7485__auto___36417 = (0);
while(true){
if((i__7485__auto___36417 < len__7484__auto___36416)){
args__7491__auto__.push((arguments[i__7485__auto___36417]));

var G__36418 = (i__7485__auto___36417 + (1));
i__7485__auto___36417 = G__36418;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq36415){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36415));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36420 = arguments.length;
var i__7485__auto___36421 = (0);
while(true){
if((i__7485__auto___36421 < len__7484__auto___36420)){
args__7491__auto__.push((arguments[i__7485__auto___36421]));

var G__36422 = (i__7485__auto___36421 + (1));
i__7485__auto___36421 = G__36422;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq36419){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36419));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36424 = arguments.length;
var i__7485__auto___36425 = (0);
while(true){
if((i__7485__auto___36425 < len__7484__auto___36424)){
args__7491__auto__.push((arguments[i__7485__auto___36425]));

var G__36426 = (i__7485__auto___36425 + (1));
i__7485__auto___36425 = G__36426;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq36423){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36423));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36428 = arguments.length;
var i__7485__auto___36429 = (0);
while(true){
if((i__7485__auto___36429 < len__7484__auto___36428)){
args__7491__auto__.push((arguments[i__7485__auto___36429]));

var G__36430 = (i__7485__auto___36429 + (1));
i__7485__auto___36429 = G__36430;
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

devtools.format.template.cljs$lang$applyTo = (function (seq36427){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36427));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36432 = arguments.length;
var i__7485__auto___36433 = (0);
while(true){
if((i__7485__auto___36433 < len__7484__auto___36432)){
args__7491__auto__.push((arguments[i__7485__auto___36433]));

var G__36434 = (i__7485__auto___36433 + (1));
i__7485__auto___36433 = G__36434;
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

devtools.format.group.cljs$lang$applyTo = (function (seq36431){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36431));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36436 = arguments.length;
var i__7485__auto___36437 = (0);
while(true){
if((i__7485__auto___36437 < len__7484__auto___36436)){
args__7491__auto__.push((arguments[i__7485__auto___36437]));

var G__36438 = (i__7485__auto___36437 + (1));
i__7485__auto___36437 = G__36438;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq36435){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36435));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36446 = arguments.length;
var i__7485__auto___36447 = (0);
while(true){
if((i__7485__auto___36447 < len__7484__auto___36446)){
args__7491__auto__.push((arguments[i__7485__auto___36447]));

var G__36448 = (i__7485__auto___36447 + (1));
i__7485__auto___36447 = G__36448;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__36442){
var vec__36443 = p__36442;
var state_override = cljs.core.nth.call(null,vec__36443,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__36443,state_override){
return (function (p1__36439_SHARP_){
return cljs.core.merge.call(null,p1__36439_SHARP_,state_override);
});})(vec__36443,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq36440){
var G__36441 = cljs.core.first.call(null,seq36440);
var seq36440__$1 = cljs.core.next.call(null,seq36440);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__36441,seq36440__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36450 = arguments.length;
var i__7485__auto___36451 = (0);
while(true){
if((i__7485__auto___36451 < len__7484__auto___36450)){
args__7491__auto__.push((arguments[i__7485__auto___36451]));

var G__36452 = (i__7485__auto___36451 + (1));
i__7485__auto___36451 = G__36452;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq36449){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36449));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__7491__auto__ = [];
var len__7484__auto___36455 = arguments.length;
var i__7485__auto___36456 = (0);
while(true){
if((i__7485__auto___36456 < len__7484__auto___36455)){
args__7491__auto__.push((arguments[i__7485__auto___36456]));

var G__36457 = (i__7485__auto___36456 + (1));
i__7485__auto___36456 = G__36457;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq36453){
var G__36454 = cljs.core.first.call(null,seq36453);
var seq36453__$1 = cljs.core.next.call(null,seq36453);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__36454,seq36453__$1);
});


//# sourceMappingURL=format.js.map?rel=1484366733959
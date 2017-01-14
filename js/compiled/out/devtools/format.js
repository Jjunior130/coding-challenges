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
var o__66573__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__66573__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__66573__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__66573__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__66572__auto__ = temp__4657__auto____$2;
return goog.object.get(o__66572__auto__,"make_template");
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
var o__66573__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__66573__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__66573__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__66573__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__66572__auto__ = temp__4657__auto____$2;
return goog.object.get(o__66572__auto__,"make_group");
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
var o__66573__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__66573__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__66573__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__66573__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__66572__auto__ = temp__4657__auto____$2;
return goog.object.get(o__66572__auto__,"make_reference");
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
var o__66573__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__66573__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__66573__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__66573__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__66572__auto__ = temp__4657__auto____$2;
return goog.object.get(o__66572__auto__,"make_surrogate");
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
var o__66573__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__66573__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__66573__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__66573__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__66572__auto__ = temp__4657__auto____$2;
return goog.object.get(o__66572__auto__,"render_markup");
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
var o__66573__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__66573__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__66573__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__66573__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__66572__auto__ = temp__4657__auto____$2;
return goog.object.get(o__66572__auto__,"_LT_header_GT_");
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
var o__66573__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__66573__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__66573__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__66573__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__66572__auto__ = temp__4657__auto____$2;
return goog.object.get(o__66572__auto__,"_LT_standard_body_GT_");
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
var len__26121__auto___66594 = arguments.length;
var i__26122__auto___66595 = (0);
while(true){
if((i__26122__auto___66595 < len__26121__auto___66594)){
args__26128__auto__.push((arguments[i__26122__auto___66595]));

var G__66596 = (i__26122__auto___66595 + (1));
i__26122__auto___66595 = G__66596;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq66593){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66593));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__26128__auto__ = [];
var len__26121__auto___66598 = arguments.length;
var i__26122__auto___66599 = (0);
while(true){
if((i__26122__auto___66599 < len__26121__auto___66598)){
args__26128__auto__.push((arguments[i__26122__auto___66599]));

var G__66600 = (i__26122__auto___66599 + (1));
i__26122__auto___66599 = G__66600;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq66597){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66597));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__26128__auto__ = [];
var len__26121__auto___66602 = arguments.length;
var i__26122__auto___66603 = (0);
while(true){
if((i__26122__auto___66603 < len__26121__auto___66602)){
args__26128__auto__.push((arguments[i__26122__auto___66603]));

var G__66604 = (i__26122__auto___66603 + (1));
i__26122__auto___66603 = G__66604;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq66601){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66601));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__26128__auto__ = [];
var len__26121__auto___66606 = arguments.length;
var i__26122__auto___66607 = (0);
while(true){
if((i__26122__auto___66607 < len__26121__auto___66606)){
args__26128__auto__.push((arguments[i__26122__auto___66607]));

var G__66608 = (i__26122__auto___66607 + (1));
i__26122__auto___66607 = G__66608;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq66605){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66605));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__26128__auto__ = [];
var len__26121__auto___66610 = arguments.length;
var i__26122__auto___66611 = (0);
while(true){
if((i__26122__auto___66611 < len__26121__auto___66610)){
args__26128__auto__.push((arguments[i__26122__auto___66611]));

var G__66612 = (i__26122__auto___66611 + (1));
i__26122__auto___66611 = G__66612;
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

devtools.format.template.cljs$lang$applyTo = (function (seq66609){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66609));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__26128__auto__ = [];
var len__26121__auto___66614 = arguments.length;
var i__26122__auto___66615 = (0);
while(true){
if((i__26122__auto___66615 < len__26121__auto___66614)){
args__26128__auto__.push((arguments[i__26122__auto___66615]));

var G__66616 = (i__26122__auto___66615 + (1));
i__26122__auto___66615 = G__66616;
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

devtools.format.group.cljs$lang$applyTo = (function (seq66613){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66613));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__26128__auto__ = [];
var len__26121__auto___66618 = arguments.length;
var i__26122__auto___66619 = (0);
while(true){
if((i__26122__auto___66619 < len__26121__auto___66618)){
args__26128__auto__.push((arguments[i__26122__auto___66619]));

var G__66620 = (i__26122__auto___66619 + (1));
i__26122__auto___66619 = G__66620;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq66617){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66617));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__26128__auto__ = [];
var len__26121__auto___66628 = arguments.length;
var i__26122__auto___66629 = (0);
while(true){
if((i__26122__auto___66629 < len__26121__auto___66628)){
args__26128__auto__.push((arguments[i__26122__auto___66629]));

var G__66630 = (i__26122__auto___66629 + (1));
i__26122__auto___66629 = G__66630;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__66624){
var vec__66625 = p__66624;
var state_override = cljs.core.nth.call(null,vec__66625,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__66625,state_override){
return (function (p1__66621_SHARP_){
return cljs.core.merge.call(null,p1__66621_SHARP_,state_override);
});})(vec__66625,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq66622){
var G__66623 = cljs.core.first.call(null,seq66622);
var seq66622__$1 = cljs.core.next.call(null,seq66622);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__66623,seq66622__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__26128__auto__ = [];
var len__26121__auto___66632 = arguments.length;
var i__26122__auto___66633 = (0);
while(true){
if((i__26122__auto___66633 < len__26121__auto___66632)){
args__26128__auto__.push((arguments[i__26122__auto___66633]));

var G__66634 = (i__26122__auto___66633 + (1));
i__26122__auto___66633 = G__66634;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq66631){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66631));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__26128__auto__ = [];
var len__26121__auto___66637 = arguments.length;
var i__26122__auto___66638 = (0);
while(true){
if((i__26122__auto___66638 < len__26121__auto___66637)){
args__26128__auto__.push((arguments[i__26122__auto___66638]));

var G__66639 = (i__26122__auto___66638 + (1));
i__26122__auto___66638 = G__66639;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq66635){
var G__66636 = cljs.core.first.call(null,seq66635);
var seq66635__$1 = cljs.core.next.call(null,seq66635);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__66636,seq66635__$1);
});


//# sourceMappingURL=format.js.map?rel=1484333410629
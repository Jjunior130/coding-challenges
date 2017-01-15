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
var o__26177__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__26177__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__26177__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__26177__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__26176__auto__ = temp__4657__auto____$2;
return goog.object.get(o__26176__auto__,"make_template");
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
var o__26177__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__26177__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__26177__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__26177__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__26176__auto__ = temp__4657__auto____$2;
return goog.object.get(o__26176__auto__,"make_group");
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
var o__26177__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__26177__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__26177__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__26177__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__26176__auto__ = temp__4657__auto____$2;
return goog.object.get(o__26176__auto__,"make_reference");
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
var o__26177__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__26177__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__26177__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__26177__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__26176__auto__ = temp__4657__auto____$2;
return goog.object.get(o__26176__auto__,"make_surrogate");
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
var o__26177__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__26177__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__26177__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__26177__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__26176__auto__ = temp__4657__auto____$2;
return goog.object.get(o__26176__auto__,"render_markup");
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
var o__26177__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__26177__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__26177__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__26177__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__26176__auto__ = temp__4657__auto____$2;
return goog.object.get(o__26176__auto__,"_LT_header_GT_");
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
var o__26177__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__26177__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__26177__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__26177__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__26176__auto__ = temp__4657__auto____$2;
return goog.object.get(o__26176__auto__,"_LT_standard_body_GT_");
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
var len__7484__auto___26198 = arguments.length;
var i__7485__auto___26199 = (0);
while(true){
if((i__7485__auto___26199 < len__7484__auto___26198)){
args__7491__auto__.push((arguments[i__7485__auto___26199]));

var G__26200 = (i__7485__auto___26199 + (1));
i__7485__auto___26199 = G__26200;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq26197){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26197));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__7491__auto__ = [];
var len__7484__auto___26202 = arguments.length;
var i__7485__auto___26203 = (0);
while(true){
if((i__7485__auto___26203 < len__7484__auto___26202)){
args__7491__auto__.push((arguments[i__7485__auto___26203]));

var G__26204 = (i__7485__auto___26203 + (1));
i__7485__auto___26203 = G__26204;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq26201){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26201));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__7491__auto__ = [];
var len__7484__auto___26206 = arguments.length;
var i__7485__auto___26207 = (0);
while(true){
if((i__7485__auto___26207 < len__7484__auto___26206)){
args__7491__auto__.push((arguments[i__7485__auto___26207]));

var G__26208 = (i__7485__auto___26207 + (1));
i__7485__auto___26207 = G__26208;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq26205){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26205));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__7491__auto__ = [];
var len__7484__auto___26210 = arguments.length;
var i__7485__auto___26211 = (0);
while(true){
if((i__7485__auto___26211 < len__7484__auto___26210)){
args__7491__auto__.push((arguments[i__7485__auto___26211]));

var G__26212 = (i__7485__auto___26211 + (1));
i__7485__auto___26211 = G__26212;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq26209){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26209));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__7491__auto__ = [];
var len__7484__auto___26214 = arguments.length;
var i__7485__auto___26215 = (0);
while(true){
if((i__7485__auto___26215 < len__7484__auto___26214)){
args__7491__auto__.push((arguments[i__7485__auto___26215]));

var G__26216 = (i__7485__auto___26215 + (1));
i__7485__auto___26215 = G__26216;
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

devtools.format.template.cljs$lang$applyTo = (function (seq26213){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26213));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__7491__auto__ = [];
var len__7484__auto___26218 = arguments.length;
var i__7485__auto___26219 = (0);
while(true){
if((i__7485__auto___26219 < len__7484__auto___26218)){
args__7491__auto__.push((arguments[i__7485__auto___26219]));

var G__26220 = (i__7485__auto___26219 + (1));
i__7485__auto___26219 = G__26220;
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

devtools.format.group.cljs$lang$applyTo = (function (seq26217){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26217));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__7491__auto__ = [];
var len__7484__auto___26222 = arguments.length;
var i__7485__auto___26223 = (0);
while(true){
if((i__7485__auto___26223 < len__7484__auto___26222)){
args__7491__auto__.push((arguments[i__7485__auto___26223]));

var G__26224 = (i__7485__auto___26223 + (1));
i__7485__auto___26223 = G__26224;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq26221){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26221));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__7491__auto__ = [];
var len__7484__auto___26232 = arguments.length;
var i__7485__auto___26233 = (0);
while(true){
if((i__7485__auto___26233 < len__7484__auto___26232)){
args__7491__auto__.push((arguments[i__7485__auto___26233]));

var G__26234 = (i__7485__auto___26233 + (1));
i__7485__auto___26233 = G__26234;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__26228){
var vec__26229 = p__26228;
var state_override = cljs.core.nth.call(null,vec__26229,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__26229,state_override){
return (function (p1__26225_SHARP_){
return cljs.core.merge.call(null,p1__26225_SHARP_,state_override);
});})(vec__26229,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq26226){
var G__26227 = cljs.core.first.call(null,seq26226);
var seq26226__$1 = cljs.core.next.call(null,seq26226);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__26227,seq26226__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__7491__auto__ = [];
var len__7484__auto___26236 = arguments.length;
var i__7485__auto___26237 = (0);
while(true){
if((i__7485__auto___26237 < len__7484__auto___26236)){
args__7491__auto__.push((arguments[i__7485__auto___26237]));

var G__26238 = (i__7485__auto___26237 + (1));
i__7485__auto___26237 = G__26238;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq26235){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26235));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__7491__auto__ = [];
var len__7484__auto___26241 = arguments.length;
var i__7485__auto___26242 = (0);
while(true){
if((i__7485__auto___26242 < len__7484__auto___26241)){
args__7491__auto__.push((arguments[i__7485__auto___26242]));

var G__26243 = (i__7485__auto___26242 + (1));
i__7485__auto___26242 = G__26243;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq26239){
var G__26240 = cljs.core.first.call(null,seq26239);
var seq26239__$1 = cljs.core.next.call(null,seq26239);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__26240,seq26239__$1);
});


//# sourceMappingURL=format.js.map?rel=1484456856236
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
var o__48702__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48702__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48702__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48702__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48701__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48701__auto__,"make_template");
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
var o__48702__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48702__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48702__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48702__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48701__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48701__auto__,"make_group");
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
var o__48702__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48702__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48702__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48702__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48701__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48701__auto__,"make_reference");
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
var o__48702__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48702__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48702__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48702__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48701__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48701__auto__,"make_surrogate");
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
var o__48702__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48702__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48702__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48702__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48701__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48701__auto__,"render_markup");
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
var o__48702__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48702__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48702__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48702__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48701__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48701__auto__,"_LT_header_GT_");
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
var o__48702__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48702__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48702__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48702__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48701__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48701__auto__,"_LT_standard_body_GT_");
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
var len__26121__auto___48723 = arguments.length;
var i__26122__auto___48724 = (0);
while(true){
if((i__26122__auto___48724 < len__26121__auto___48723)){
args__26128__auto__.push((arguments[i__26122__auto___48724]));

var G__48725 = (i__26122__auto___48724 + (1));
i__26122__auto___48724 = G__48725;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq48722){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48722));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__26128__auto__ = [];
var len__26121__auto___48727 = arguments.length;
var i__26122__auto___48728 = (0);
while(true){
if((i__26122__auto___48728 < len__26121__auto___48727)){
args__26128__auto__.push((arguments[i__26122__auto___48728]));

var G__48729 = (i__26122__auto___48728 + (1));
i__26122__auto___48728 = G__48729;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq48726){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48726));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__26128__auto__ = [];
var len__26121__auto___48731 = arguments.length;
var i__26122__auto___48732 = (0);
while(true){
if((i__26122__auto___48732 < len__26121__auto___48731)){
args__26128__auto__.push((arguments[i__26122__auto___48732]));

var G__48733 = (i__26122__auto___48732 + (1));
i__26122__auto___48732 = G__48733;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq48730){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48730));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__26128__auto__ = [];
var len__26121__auto___48735 = arguments.length;
var i__26122__auto___48736 = (0);
while(true){
if((i__26122__auto___48736 < len__26121__auto___48735)){
args__26128__auto__.push((arguments[i__26122__auto___48736]));

var G__48737 = (i__26122__auto___48736 + (1));
i__26122__auto___48736 = G__48737;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq48734){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48734));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__26128__auto__ = [];
var len__26121__auto___48739 = arguments.length;
var i__26122__auto___48740 = (0);
while(true){
if((i__26122__auto___48740 < len__26121__auto___48739)){
args__26128__auto__.push((arguments[i__26122__auto___48740]));

var G__48741 = (i__26122__auto___48740 + (1));
i__26122__auto___48740 = G__48741;
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

devtools.format.template.cljs$lang$applyTo = (function (seq48738){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48738));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__26128__auto__ = [];
var len__26121__auto___48743 = arguments.length;
var i__26122__auto___48744 = (0);
while(true){
if((i__26122__auto___48744 < len__26121__auto___48743)){
args__26128__auto__.push((arguments[i__26122__auto___48744]));

var G__48745 = (i__26122__auto___48744 + (1));
i__26122__auto___48744 = G__48745;
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

devtools.format.group.cljs$lang$applyTo = (function (seq48742){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48742));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__26128__auto__ = [];
var len__26121__auto___48747 = arguments.length;
var i__26122__auto___48748 = (0);
while(true){
if((i__26122__auto___48748 < len__26121__auto___48747)){
args__26128__auto__.push((arguments[i__26122__auto___48748]));

var G__48749 = (i__26122__auto___48748 + (1));
i__26122__auto___48748 = G__48749;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq48746){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48746));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__26128__auto__ = [];
var len__26121__auto___48757 = arguments.length;
var i__26122__auto___48758 = (0);
while(true){
if((i__26122__auto___48758 < len__26121__auto___48757)){
args__26128__auto__.push((arguments[i__26122__auto___48758]));

var G__48759 = (i__26122__auto___48758 + (1));
i__26122__auto___48758 = G__48759;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((1) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26129__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__48753){
var vec__48754 = p__48753;
var state_override = cljs.core.nth.call(null,vec__48754,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__48754,state_override){
return (function (p1__48750_SHARP_){
return cljs.core.merge.call(null,p1__48750_SHARP_,state_override);
});})(vec__48754,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq48751){
var G__48752 = cljs.core.first.call(null,seq48751);
var seq48751__$1 = cljs.core.next.call(null,seq48751);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__48752,seq48751__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__26128__auto__ = [];
var len__26121__auto___48761 = arguments.length;
var i__26122__auto___48762 = (0);
while(true){
if((i__26122__auto___48762 < len__26121__auto___48761)){
args__26128__auto__.push((arguments[i__26122__auto___48762]));

var G__48763 = (i__26122__auto___48762 + (1));
i__26122__auto___48762 = G__48763;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq48760){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48760));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__26128__auto__ = [];
var len__26121__auto___48766 = arguments.length;
var i__26122__auto___48767 = (0);
while(true){
if((i__26122__auto___48767 < len__26121__auto___48766)){
args__26128__auto__.push((arguments[i__26122__auto___48767]));

var G__48768 = (i__26122__auto___48767 + (1));
i__26122__auto___48767 = G__48768;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq48764){
var G__48765 = cljs.core.first.call(null,seq48764);
var seq48764__$1 = cljs.core.next.call(null,seq48764);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__48765,seq48764__$1);
});


//# sourceMappingURL=format.js.map?rel=1484782603506
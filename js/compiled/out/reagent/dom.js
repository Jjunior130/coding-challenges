// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__6409__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_8112 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_8112){
return (function (){
var _STAR_always_update_STAR_8113 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_8113;
}});})(_STAR_always_update_STAR_8112))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_8112;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args8114 = [];
var len__7484__auto___8117 = arguments.length;
var i__7485__auto___8118 = (0);
while(true){
if((i__7485__auto___8118 < len__7484__auto___8117)){
args8114.push((arguments[i__7485__auto___8118]));

var G__8119 = (i__7485__auto___8118 + (1));
i__7485__auto___8118 = G__8119;
continue;
} else {
}
break;
}

var G__8116 = args8114.length;
switch (G__8116) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8114.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__8125_8129 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__8126_8130 = null;
var count__8127_8131 = (0);
var i__8128_8132 = (0);
while(true){
if((i__8128_8132 < count__8127_8131)){
var v_8133 = cljs.core._nth.call(null,chunk__8126_8130,i__8128_8132);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8133);

var G__8134 = seq__8125_8129;
var G__8135 = chunk__8126_8130;
var G__8136 = count__8127_8131;
var G__8137 = (i__8128_8132 + (1));
seq__8125_8129 = G__8134;
chunk__8126_8130 = G__8135;
count__8127_8131 = G__8136;
i__8128_8132 = G__8137;
continue;
} else {
var temp__4657__auto___8138 = cljs.core.seq.call(null,seq__8125_8129);
if(temp__4657__auto___8138){
var seq__8125_8139__$1 = temp__4657__auto___8138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8125_8139__$1)){
var c__7220__auto___8140 = cljs.core.chunk_first.call(null,seq__8125_8139__$1);
var G__8141 = cljs.core.chunk_rest.call(null,seq__8125_8139__$1);
var G__8142 = c__7220__auto___8140;
var G__8143 = cljs.core.count.call(null,c__7220__auto___8140);
var G__8144 = (0);
seq__8125_8129 = G__8141;
chunk__8126_8130 = G__8142;
count__8127_8131 = G__8143;
i__8128_8132 = G__8144;
continue;
} else {
var v_8145 = cljs.core.first.call(null,seq__8125_8139__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8145);

var G__8146 = cljs.core.next.call(null,seq__8125_8139__$1);
var G__8147 = null;
var G__8148 = (0);
var G__8149 = (0);
seq__8125_8129 = G__8146;
chunk__8126_8130 = G__8147;
count__8127_8131 = G__8148;
i__8128_8132 = G__8149;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1485242647070
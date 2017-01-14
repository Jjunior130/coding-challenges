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
var or__25046__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
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
var _STAR_always_update_STAR_49533 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_49533){
return (function (){
var _STAR_always_update_STAR_49534 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_49534;
}});})(_STAR_always_update_STAR_49533))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_49533;
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
var args49535 = [];
var len__26121__auto___49538 = arguments.length;
var i__26122__auto___49539 = (0);
while(true){
if((i__26122__auto___49539 < len__26121__auto___49538)){
args49535.push((arguments[i__26122__auto___49539]));

var G__49540 = (i__26122__auto___49539 + (1));
i__26122__auto___49539 = G__49540;
continue;
} else {
}
break;
}

var G__49537 = args49535.length;
switch (G__49537) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49535.length)].join('')));

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

var seq__49546_49550 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__49547_49551 = null;
var count__49548_49552 = (0);
var i__49549_49553 = (0);
while(true){
if((i__49549_49553 < count__49548_49552)){
var v_49554 = cljs.core._nth.call(null,chunk__49547_49551,i__49549_49553);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_49554);

var G__49555 = seq__49546_49550;
var G__49556 = chunk__49547_49551;
var G__49557 = count__49548_49552;
var G__49558 = (i__49549_49553 + (1));
seq__49546_49550 = G__49555;
chunk__49547_49551 = G__49556;
count__49548_49552 = G__49557;
i__49549_49553 = G__49558;
continue;
} else {
var temp__4657__auto___49559 = cljs.core.seq.call(null,seq__49546_49550);
if(temp__4657__auto___49559){
var seq__49546_49560__$1 = temp__4657__auto___49559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49546_49560__$1)){
var c__25857__auto___49561 = cljs.core.chunk_first.call(null,seq__49546_49560__$1);
var G__49562 = cljs.core.chunk_rest.call(null,seq__49546_49560__$1);
var G__49563 = c__25857__auto___49561;
var G__49564 = cljs.core.count.call(null,c__25857__auto___49561);
var G__49565 = (0);
seq__49546_49550 = G__49562;
chunk__49547_49551 = G__49563;
count__49548_49552 = G__49564;
i__49549_49553 = G__49565;
continue;
} else {
var v_49566 = cljs.core.first.call(null,seq__49546_49560__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_49566);

var G__49567 = cljs.core.next.call(null,seq__49546_49560__$1);
var G__49568 = null;
var G__49569 = (0);
var G__49570 = (0);
seq__49546_49550 = G__49567;
chunk__49547_49551 = G__49568;
count__49548_49552 = G__49569;
i__49549_49553 = G__49570;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1484333375993
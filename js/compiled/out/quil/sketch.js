// Compiled by ClojureScript 1.9.229 {}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('quil.util');
goog.require('goog.events.EventType');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.events');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"java2d","java2d",166099237),(Processing.prototype.PConstants["JAVA2D"]),new cljs.core.Keyword(null,"p2d","p2d",-2106175755),(Processing.prototype.PConstants["P2D"]),new cljs.core.Keyword(null,"p3d","p3d",-850380194),(Processing.prototype.PConstants["P3D"]),new cljs.core.Keyword(null,"opengl","opengl",-614998103),(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes);
});
quil.sketch.size = (function quil$sketch$size(var_args){
var args14850 = [];
var len__7484__auto___14853 = arguments.length;
var i__7485__auto___14854 = (0);
while(true){
if((i__7485__auto___14854 < len__7484__auto___14853)){
args14850.push((arguments[i__7485__auto___14854]));

var G__14855 = (i__7485__auto___14854 + (1));
i__7485__auto___14854 = G__14855;
continue;
} else {
}
break;
}

var G__14852 = args14850.length;
switch (G__14852) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14850.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)),quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__14869 = cljs.core.seq.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"mouseOut","mouseOut",-386669045),new cljs.core.Keyword(null,"mouseScrolled","mouseScrolled",31878252),new cljs.core.Keyword(null,"mouseDragged","mouseDragged",129975181),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"mouseClicked","mouseClicked",1764302965),new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),new cljs.core.Keyword(null,"mouseOver","mouseOver",-1334461930),new cljs.core.Keyword(null,"keyTyped","keyTyped",1437329399),new cljs.core.Keyword(null,"draw","draw",1358331674)],[new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"key-released","key-released",215919828),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"draw","draw",1358331674)]));
var chunk__14870 = null;
var count__14871 = (0);
var i__14872 = (0);
while(true){
if((i__14872 < count__14871)){
var vec__14873 = cljs.core._nth.call(null,chunk__14870,i__14872);
var processing_name = cljs.core.nth.call(null,vec__14873,(0),null);
var quil_name = cljs.core.nth.call(null,vec__14873,(1),null);
var temp__4657__auto___14881 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__4657__auto___14881)){
var handler_14882 = temp__4657__auto___14881;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__14869,chunk__14870,count__14871,i__14872,handler_14882,temp__4657__auto___14881,vec__14873,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_14876 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_14882.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_14876;
}});})(seq__14869,chunk__14870,count__14871,i__14872,handler_14882,temp__4657__auto___14881,vec__14873,processing_name,quil_name))
);
} else {
}

var G__14883 = seq__14869;
var G__14884 = chunk__14870;
var G__14885 = count__14871;
var G__14886 = (i__14872 + (1));
seq__14869 = G__14883;
chunk__14870 = G__14884;
count__14871 = G__14885;
i__14872 = G__14886;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14869);
if(temp__4657__auto__){
var seq__14869__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14869__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__14869__$1);
var G__14887 = cljs.core.chunk_rest.call(null,seq__14869__$1);
var G__14888 = c__7220__auto__;
var G__14889 = cljs.core.count.call(null,c__7220__auto__);
var G__14890 = (0);
seq__14869 = G__14887;
chunk__14870 = G__14888;
count__14871 = G__14889;
i__14872 = G__14890;
continue;
} else {
var vec__14877 = cljs.core.first.call(null,seq__14869__$1);
var processing_name = cljs.core.nth.call(null,vec__14877,(0),null);
var quil_name = cljs.core.nth.call(null,vec__14877,(1),null);
var temp__4657__auto___14891__$1 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__4657__auto___14891__$1)){
var handler_14892 = temp__4657__auto___14891__$1;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__14869,chunk__14870,count__14871,i__14872,handler_14892,temp__4657__auto___14891__$1,vec__14877,processing_name,quil_name,seq__14869__$1,temp__4657__auto__){
return (function (){
var _STAR_applet_STAR_14880 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_14892.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_14880;
}});})(seq__14869,chunk__14870,count__14871,i__14872,handler_14892,temp__4657__auto___14891__$1,vec__14877,processing_name,quil_name,seq__14869__$1,temp__4657__auto__))
);
} else {
}

var G__14893 = cljs.core.next.call(null,seq__14869__$1);
var G__14894 = null;
var G__14895 = (0);
var G__14896 = (0);
seq__14869 = G__14893;
chunk__14870 = G__14894;
count__14871 = G__14895;
i__14872 = G__14896;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__14897_SHARP_){
return p1__14897_SHARP_.call(null,options);
}).call(null,cljs.core.apply.call(null,cljs.core.comp,cljs.core.cons.call(null,quil.middlewares.deprecated_options.deprecated_options,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)))));
var sketch_size = (function (){var or__6409__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set.call(null,new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.call(null,quil.sketch.size,cljs.core.concat.call(null,sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts))){
new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts))){
return new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
return new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts).call(null,((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll));
});})(opts,sketch_size,renderer,features,setup))
:null);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"setup","setup",1987730512),setup,new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),mouse_wheel);
var attach_function = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers.call(null,prc,opts__$1);

prc.quil = cljs.core.atom.call(null,null);

return prc.target_frame_rate = cljs.core.atom.call(null,(60));
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_.call(null,features,new cljs.core.Keyword(null,"global-key-events","global-key-events",335064944))){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__4657__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__4657__auto__)){
var proc_obj = temp__4657__auto__;
return proc_obj.exit();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__7491__auto__ = [];
var len__7484__auto___14899 = arguments.length;
var i__7485__auto___14900 = (0);
while(true){
if((i__7485__auto___14900 < len__7484__auto___14899)){
args__7491__auto__.push((arguments[i__7485__auto___14900]));

var G__14901 = (i__7485__auto___14900 + (1));
i__7485__auto___14900 = G__14901;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var host_elem = goog.dom.getElement(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map));
var renderer = (function (){var or__6409__auto__ = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return new cljs.core.Keyword(null,"p2d","p2d",-2106175755);
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.call(null,renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch.call(null,host_elem);

return host_elem.processing_obj = (new Processing(host_elem,quil.sketch.make_sketch.call(null,opts_map)));
} else {
return console.error("ERROR: Cannot create sketch. :host is not specified.");
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

quil.sketch.sketch.cljs$lang$applyTo = (function (seq14898){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14898));
});

quil.sketch.sketch_init_list = cljs.core.atom.call(null,cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__14910 = quil.sketch.empty_body_QMARK_.call(null);
var seq__14906_14911 = cljs.core.seq.call(null,cljs.core.deref.call(null,quil.sketch.sketch_init_list));
var chunk__14907_14912 = null;
var count__14908_14913 = (0);
var i__14909_14914 = (0);
while(true){
if((i__14909_14914 < count__14908_14913)){
var sk_14915 = cljs.core._nth.call(null,chunk__14907_14912,i__14909_14914);
if(cljs.core.truth_(add_elem_QMARK__14910)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_14915));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_14915).call(null);

var G__14916 = seq__14906_14911;
var G__14917 = chunk__14907_14912;
var G__14918 = count__14908_14913;
var G__14919 = (i__14909_14914 + (1));
seq__14906_14911 = G__14916;
chunk__14907_14912 = G__14917;
count__14908_14913 = G__14918;
i__14909_14914 = G__14919;
continue;
} else {
var temp__4657__auto___14920 = cljs.core.seq.call(null,seq__14906_14911);
if(temp__4657__auto___14920){
var seq__14906_14921__$1 = temp__4657__auto___14920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14906_14921__$1)){
var c__7220__auto___14922 = cljs.core.chunk_first.call(null,seq__14906_14921__$1);
var G__14923 = cljs.core.chunk_rest.call(null,seq__14906_14921__$1);
var G__14924 = c__7220__auto___14922;
var G__14925 = cljs.core.count.call(null,c__7220__auto___14922);
var G__14926 = (0);
seq__14906_14911 = G__14923;
chunk__14907_14912 = G__14924;
count__14908_14913 = G__14925;
i__14909_14914 = G__14926;
continue;
} else {
var sk_14927 = cljs.core.first.call(null,seq__14906_14921__$1);
if(cljs.core.truth_(add_elem_QMARK__14910)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_14927));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_14927).call(null);

var G__14928 = cljs.core.next.call(null,seq__14906_14921__$1);
var G__14929 = null;
var G__14930 = (0);
var G__14931 = (0);
seq__14906_14911 = G__14928;
chunk__14907_14912 = G__14929;
count__14908_14913 = G__14930;
i__14909_14914 = G__14931;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.call(null,document.readyState,"complete")){
return quil.sketch.init_sketches.call(null);
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);

//# sourceMappingURL=sketch.js.map?rel=1485242657927
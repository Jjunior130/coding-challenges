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
var args132888 = [];
var len__26121__auto___132891 = arguments.length;
var i__26122__auto___132892 = (0);
while(true){
if((i__26122__auto___132892 < len__26121__auto___132891)){
args132888.push((arguments[i__26122__auto___132892]));

var G__132893 = (i__26122__auto___132892 + (1));
i__26122__auto___132892 = G__132893;
continue;
} else {
}
break;
}

var G__132890 = args132888.length;
switch (G__132890) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args132888.length)].join('')));

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
var seq__132907 = cljs.core.seq.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"mouseOut","mouseOut",-386669045),new cljs.core.Keyword(null,"mouseScrolled","mouseScrolled",31878252),new cljs.core.Keyword(null,"mouseDragged","mouseDragged",129975181),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"mouseClicked","mouseClicked",1764302965),new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),new cljs.core.Keyword(null,"mouseOver","mouseOver",-1334461930),new cljs.core.Keyword(null,"keyTyped","keyTyped",1437329399),new cljs.core.Keyword(null,"draw","draw",1358331674)],[new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"key-released","key-released",215919828),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"draw","draw",1358331674)]));
var chunk__132908 = null;
var count__132909 = (0);
var i__132910 = (0);
while(true){
if((i__132910 < count__132909)){
var vec__132911 = cljs.core._nth.call(null,chunk__132908,i__132910);
var processing_name = cljs.core.nth.call(null,vec__132911,(0),null);
var quil_name = cljs.core.nth.call(null,vec__132911,(1),null);
var temp__4657__auto___132919 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__4657__auto___132919)){
var handler_132920 = temp__4657__auto___132919;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__132907,chunk__132908,count__132909,i__132910,handler_132920,temp__4657__auto___132919,vec__132911,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_132914 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_132920.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_132914;
}});})(seq__132907,chunk__132908,count__132909,i__132910,handler_132920,temp__4657__auto___132919,vec__132911,processing_name,quil_name))
);
} else {
}

var G__132921 = seq__132907;
var G__132922 = chunk__132908;
var G__132923 = count__132909;
var G__132924 = (i__132910 + (1));
seq__132907 = G__132921;
chunk__132908 = G__132922;
count__132909 = G__132923;
i__132910 = G__132924;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__132907);
if(temp__4657__auto__){
var seq__132907__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132907__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__132907__$1);
var G__132925 = cljs.core.chunk_rest.call(null,seq__132907__$1);
var G__132926 = c__25857__auto__;
var G__132927 = cljs.core.count.call(null,c__25857__auto__);
var G__132928 = (0);
seq__132907 = G__132925;
chunk__132908 = G__132926;
count__132909 = G__132927;
i__132910 = G__132928;
continue;
} else {
var vec__132915 = cljs.core.first.call(null,seq__132907__$1);
var processing_name = cljs.core.nth.call(null,vec__132915,(0),null);
var quil_name = cljs.core.nth.call(null,vec__132915,(1),null);
var temp__4657__auto___132929__$1 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__4657__auto___132929__$1)){
var handler_132930 = temp__4657__auto___132929__$1;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__132907,chunk__132908,count__132909,i__132910,handler_132930,temp__4657__auto___132929__$1,vec__132915,processing_name,quil_name,seq__132907__$1,temp__4657__auto__){
return (function (){
var _STAR_applet_STAR_132918 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_132930.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_132918;
}});})(seq__132907,chunk__132908,count__132909,i__132910,handler_132930,temp__4657__auto___132929__$1,vec__132915,processing_name,quil_name,seq__132907__$1,temp__4657__auto__))
);
} else {
}

var G__132931 = cljs.core.next.call(null,seq__132907__$1);
var G__132932 = null;
var G__132933 = (0);
var G__132934 = (0);
seq__132907 = G__132931;
chunk__132908 = G__132932;
count__132909 = G__132933;
i__132910 = G__132934;
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
var opts = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__132935_SHARP_){
return p1__132935_SHARP_.call(null,options);
}).call(null,cljs.core.apply.call(null,cljs.core.comp,cljs.core.cons.call(null,quil.middlewares.deprecated_options.deprecated_options,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)))));
var sketch_size = (function (){var or__25046__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
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
var args__26128__auto__ = [];
var len__26121__auto___132937 = arguments.length;
var i__26122__auto___132938 = (0);
while(true){
if((i__26122__auto___132938 < len__26121__auto___132937)){
args__26128__auto__.push((arguments[i__26122__auto___132938]));

var G__132939 = (i__26122__auto___132938 + (1));
i__26122__auto___132938 = G__132939;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var host_elem = goog.dom.getElement(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map));
var renderer = (function (){var or__25046__auto__ = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
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

quil.sketch.sketch.cljs$lang$applyTo = (function (seq132936){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq132936));
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
var add_elem_QMARK__132948 = quil.sketch.empty_body_QMARK_.call(null);
var seq__132944_132949 = cljs.core.seq.call(null,cljs.core.deref.call(null,quil.sketch.sketch_init_list));
var chunk__132945_132950 = null;
var count__132946_132951 = (0);
var i__132947_132952 = (0);
while(true){
if((i__132947_132952 < count__132946_132951)){
var sk_132953 = cljs.core._nth.call(null,chunk__132945_132950,i__132947_132952);
if(cljs.core.truth_(add_elem_QMARK__132948)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_132953));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_132953).call(null);

var G__132954 = seq__132944_132949;
var G__132955 = chunk__132945_132950;
var G__132956 = count__132946_132951;
var G__132957 = (i__132947_132952 + (1));
seq__132944_132949 = G__132954;
chunk__132945_132950 = G__132955;
count__132946_132951 = G__132956;
i__132947_132952 = G__132957;
continue;
} else {
var temp__4657__auto___132958 = cljs.core.seq.call(null,seq__132944_132949);
if(temp__4657__auto___132958){
var seq__132944_132959__$1 = temp__4657__auto___132958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132944_132959__$1)){
var c__25857__auto___132960 = cljs.core.chunk_first.call(null,seq__132944_132959__$1);
var G__132961 = cljs.core.chunk_rest.call(null,seq__132944_132959__$1);
var G__132962 = c__25857__auto___132960;
var G__132963 = cljs.core.count.call(null,c__25857__auto___132960);
var G__132964 = (0);
seq__132944_132949 = G__132961;
chunk__132945_132950 = G__132962;
count__132946_132951 = G__132963;
i__132947_132952 = G__132964;
continue;
} else {
var sk_132965 = cljs.core.first.call(null,seq__132944_132959__$1);
if(cljs.core.truth_(add_elem_QMARK__132948)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_132965));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_132965).call(null);

var G__132966 = cljs.core.next.call(null,seq__132944_132959__$1);
var G__132967 = null;
var G__132968 = (0);
var G__132969 = (0);
seq__132944_132949 = G__132966;
chunk__132945_132950 = G__132967;
count__132946_132951 = G__132968;
i__132947_132952 = G__132969;
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

//# sourceMappingURL=sketch.js.map?rel=1484099807067
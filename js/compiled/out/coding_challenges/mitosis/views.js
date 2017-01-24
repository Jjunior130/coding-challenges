// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.mitosis.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('coding_challenges.mitosis.cell');
goog.require('re_com.core');
goog.require('quil.core');
goog.require('re_frame.core');
goog.require('quil.middleware');
coding_challenges.mitosis.views.w = (700);
coding_challenges.mitosis.views.h = (700);
coding_challenges.mitosis.views.setup = (function coding_challenges$mitosis$views$setup(){
return cljs.core.vec.call(null,(function (){var i = ((2) | (0));
var cells = cljs.core.PersistentVector.EMPTY;
while(true){
if((i === (0))){
return cells;
} else {
var G__34742 = (i - (1));
var G__34743 = cljs.core.conj.call(null,cells,coding_challenges.mitosis.cell.make.call(null));
i = G__34742;
cells = G__34743;
continue;
}
break;
}
})());
});
coding_challenges.mitosis.views.update_STAR_ = (function coding_challenges$mitosis$views$update_STAR_(cells){
return cljs.core.vec.call(null,(function (){var i = cljs.core.count.call(null,cells);
var updated_cells = cljs.core.PersistentVector.EMPTY;
var cells__$1 = cljs.core.vec.call(null,cells);
while(true){
if((i === (0))){
return updated_cells;
} else {
var G__34744 = (i - (1));
var G__34745 = cljs.core.conj.call(null,updated_cells,coding_challenges.mitosis.cell.update_STAR_.call(null,cljs.core.peek.call(null,cells__$1)));
var G__34746 = cljs.core.pop.call(null,cells__$1);
i = G__34744;
updated_cells = G__34745;
cells__$1 = G__34746;
continue;
}
break;
}
})());
});
coding_challenges.mitosis.views.draw = (function coding_challenges$mitosis$views$draw(cells){
quil.core.background.call(null,(200));

var seq__34751 = cljs.core.seq.call(null,cells);
var chunk__34752 = null;
var count__34753 = (0);
var i__34754 = (0);
while(true){
if((i__34754 < count__34753)){
var cell = cljs.core._nth.call(null,chunk__34752,i__34754);
coding_challenges.mitosis.cell.draw.call(null,cell);

var G__34755 = seq__34751;
var G__34756 = chunk__34752;
var G__34757 = count__34753;
var G__34758 = (i__34754 + (1));
seq__34751 = G__34755;
chunk__34752 = G__34756;
count__34753 = G__34757;
i__34754 = G__34758;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34751);
if(temp__4657__auto__){
var seq__34751__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34751__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__34751__$1);
var G__34759 = cljs.core.chunk_rest.call(null,seq__34751__$1);
var G__34760 = c__7220__auto__;
var G__34761 = cljs.core.count.call(null,c__7220__auto__);
var G__34762 = (0);
seq__34751 = G__34759;
chunk__34752 = G__34760;
count__34753 = G__34761;
i__34754 = G__34762;
continue;
} else {
var cell = cljs.core.first.call(null,seq__34751__$1);
coding_challenges.mitosis.cell.draw.call(null,cell);

var G__34763 = cljs.core.next.call(null,seq__34751__$1);
var G__34764 = null;
var G__34765 = (0);
var G__34766 = (0);
seq__34751 = G__34763;
chunk__34752 = G__34764;
count__34753 = G__34765;
i__34754 = G__34766;
continue;
}
} else {
return null;
}
}
break;
}
});
coding_challenges.mitosis.views.mouse_pressed = (function coding_challenges$mitosis$views$mouse_pressed(cells,event){
var i = cljs.core.count.call(null,cells);
var non_clicked_cells = cljs.core.PersistentVector.EMPTY;
var cells__$1 = cljs.core.vec.call(null,cells);
while(true){
if((i === (0))){
return cljs.core.concat.call(null,non_clicked_cells,cells__$1);
} else {
var cc = cljs.core.peek.call(null,cells__$1);
if(cljs.core.truth_(coding_challenges.mitosis.cell.clicked_QMARK_.call(null,event,cc))){
return cljs.core.concat.call(null,non_clicked_cells,coding_challenges.mitosis.cell.mitosis.call(null,cc),cljs.core.pop.call(null,cells__$1));
} else {
var G__34767 = (i - (1));
var G__34768 = cljs.core.conj.call(null,non_clicked_cells,cc);
var G__34769 = cljs.core.pop.call(null,cells__$1);
i = G__34767;
non_clicked_cells = G__34768;
cells__$1 = G__34769;
continue;
}
}
break;
}
});
coding_challenges.mitosis.views.mitosis_sketch = (function coding_challenges$mitosis$views$mitosis_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"mitosis",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,coding_challenges.mitosis.views.update_STAR_))?(function() { 
var G__34770__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.mitosis.views.update_STAR_,args);
};
var G__34770 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34771__i = 0, G__34771__a = new Array(arguments.length -  0);
while (G__34771__i < G__34771__a.length) {G__34771__a[G__34771__i] = arguments[G__34771__i + 0]; ++G__34771__i;}
  args = new cljs.core.IndexedSeq(G__34771__a,0);
} 
return G__34770__delegate.call(this,args);};
G__34770.cljs$lang$maxFixedArity = 0;
G__34770.cljs$lang$applyTo = (function (arglist__34772){
var args = cljs.core.seq(arglist__34772);
return G__34770__delegate(args);
});
G__34770.cljs$core$IFn$_invoke$arity$variadic = G__34770__delegate;
return G__34770;
})()
:coding_challenges.mitosis.views.update_STAR_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.mitosis.views.w,coding_challenges.mitosis.views.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,coding_challenges.mitosis.views.setup))?(function() { 
var G__34773__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.mitosis.views.setup,args);
};
var G__34773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34774__i = 0, G__34774__a = new Array(arguments.length -  0);
while (G__34774__i < G__34774__a.length) {G__34774__a[G__34774__i] = arguments[G__34774__i + 0]; ++G__34774__i;}
  args = new cljs.core.IndexedSeq(G__34774__a,0);
} 
return G__34773__delegate.call(this,args);};
G__34773.cljs$lang$maxFixedArity = 0;
G__34773.cljs$lang$applyTo = (function (arglist__34775){
var args = cljs.core.seq(arglist__34775);
return G__34773__delegate(args);
});
G__34773.cljs$core$IFn$_invoke$arity$variadic = G__34773__delegate;
return G__34773;
})()
:coding_challenges.mitosis.views.setup),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),((cljs.core.fn_QMARK_.call(null,coding_challenges.mitosis.views.mouse_pressed))?(function() { 
var G__34776__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.mitosis.views.mouse_pressed,args);
};
var G__34776 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34777__i = 0, G__34777__a = new Array(arguments.length -  0);
while (G__34777__i < G__34777__a.length) {G__34777__a[G__34777__i] = arguments[G__34777__i + 0]; ++G__34777__i;}
  args = new cljs.core.IndexedSeq(G__34777__a,0);
} 
return G__34776__delegate.call(this,args);};
G__34776.cljs$lang$maxFixedArity = 0;
G__34776.cljs$lang$applyTo = (function (arglist__34778){
var args = cljs.core.seq(arglist__34778);
return G__34776__delegate(args);
});
G__34776.cljs$core$IFn$_invoke$arity$variadic = G__34776__delegate;
return G__34776;
})()
:coding_challenges.mitosis.views.mouse_pressed),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,coding_challenges.mitosis.views.draw))?(function() { 
var G__34779__delegate = function (args){
return cljs.core.apply.call(null,coding_challenges.mitosis.views.draw,args);
};
var G__34779 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34780__i = 0, G__34780__a = new Array(arguments.length -  0);
while (G__34780__i < G__34780__a.length) {G__34780__a[G__34780__i] = arguments[G__34780__i + 0]; ++G__34780__i;}
  args = new cljs.core.IndexedSeq(G__34780__a,0);
} 
return G__34779__delegate.call(this,args);};
G__34779.cljs$lang$maxFixedArity = 0;
G__34779.cljs$lang$applyTo = (function (arglist__34781){
var args = cljs.core.seq(arglist__34781);
return G__34779__delegate(args);
});
G__34779.cljs$core$IFn$_invoke$arity$variadic = G__34779__delegate;
return G__34779;
})()
:coding_challenges.mitosis.views.draw));
});
goog.exportSymbol('coding_challenges.mitosis.views.mitosis_sketch', coding_challenges.mitosis.views.mitosis_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14841__14842__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__14841__14842__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),coding_challenges.mitosis.views.mitosis_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"mitosis"], null));
}
coding_challenges.mitosis.views.view = (function coding_challenges$mitosis$views$view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){var code = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-one","select-one",1322686564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mitosis","mitosis",2097302391),new cljs.core.Keyword(null,"code","code",1586293142)], null)], null));
return ((function (code){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var code__$1 = (function (){var or__6409__auto__ = cljs.core.deref.call(null,code);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return new cljs.core.Keyword(null,"sketch","sketch",465948709);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Mitosis demo",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#mitosis","canvas#mitosis",695045055),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),coding_challenges.mitosis.views.w,new cljs.core.Keyword(null,"height","height",1025178622),coding_challenges.mitosis.views.h], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sketch","sketch",465948709),new cljs.core.Keyword(null,"label","label",1718410804),"Sketch"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"label","label",1718410804),"Cell"], null)], null),new cljs.core.Keyword(null,"model","model",331153215),code__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (code__$1,code){
return (function (p1__34782_SHARP_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setval","setval",-2073686367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mitosis","mitosis",2097302391),new cljs.core.Keyword(null,"code","code",1586293142)], null),p1__34782_SHARP_], null)], null));

var seq__34788 = cljs.core.seq.call(null,document.querySelectorAll("code"));
var chunk__34789 = null;
var count__34790 = (0);
var i__34791 = (0);
while(true){
if((i__34791 < count__34790)){
var x = cljs.core._nth.call(null,chunk__34789,i__34791);
hljs.highlightBlock(x);

var G__34793 = seq__34788;
var G__34794 = chunk__34789;
var G__34795 = count__34790;
var G__34796 = (i__34791 + (1));
seq__34788 = G__34793;
chunk__34789 = G__34794;
count__34790 = G__34795;
i__34791 = G__34796;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34788);
if(temp__4657__auto__){
var seq__34788__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34788__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__34788__$1);
var G__34797 = cljs.core.chunk_rest.call(null,seq__34788__$1);
var G__34798 = c__7220__auto__;
var G__34799 = cljs.core.count.call(null,c__7220__auto__);
var G__34800 = (0);
seq__34788 = G__34797;
chunk__34789 = G__34798;
count__34790 = G__34799;
i__34791 = G__34800;
continue;
} else {
var x = cljs.core.first.call(null,seq__34788__$1);
hljs.highlightBlock(x);

var G__34801 = cljs.core.next.call(null,seq__34788__$1);
var G__34802 = null;
var G__34803 = (0);
var G__34804 = (0);
seq__34788 = G__34801;
chunk__34789 = G__34802;
count__34790 = G__34803;
i__34791 = G__34804;
continue;
}
} else {
return null;
}
}
break;
}
});})(code__$1,code))
], null),(function (){var G__34792 = (((code__$1 instanceof cljs.core.Keyword))?code__$1.fqn:null);
switch (G__34792) {
case "sketch":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(def w 700)\n(def h 700)\n\n(defn setup []\n (repeatedly 2 cell/make))\n\n(defn update* [cells]\n (->> cells\n      (transform ALL\n                 cell/update*)))\n\n(defn draw [cells]\n (q/background 200)\n (doseq [cell cells]\n  (cell/draw cell)))\n\n(defn mouse-pressed [cells event]\n (->> cells\n      (transform [ALL (partial cell/clicked? event)]\n                 cell/mitosis)\n      flatten))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/jxGS3fKPKJAvar cells = [];\n\nvar cells = [];\n\nfunction setup() {\n  createCanvas(700, 700);\n  cells.push(new Cell());\n  cells.push(new Cell());\n}\n\nfunction draw() {\n background(200);\n for (var i = 0; i < cells.length; i++) {\n   cells[i].move();\n   cells[i].show();\n }\n}\n\nfunction mousePressed() {\n  for (var i = cells.length-1; i >= 0; i--) {\n    if (cells[i].clicked(mouseX, mouseY)) {\n      cells.push(cells[i].mitosis());\n      cells.push(cells[i].mitosis());\n      cells.splice(i, 1);\n    }\n  }\n}\n"], null)], null)], null)], null);

break;
case "cell":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clojure","code.clojure",-450576994),"(defn make\n ([]\n  (make {:x (q/random (q/width))\n         :y (q/random (q/height))}\n        60\n        (q/color (q/random 100 255)\n                 0\n                 (q/random 100 255)\n                 100)))\n ([pos r c]\n  {:type 'Cell\n   :pos pos\n   :r r\n   :c c}))\n\n(defn clicked? [{mx :x\n                 my :y\n                 :as click-pos}\n                {{cx :x\n                  cy :y} :pos\n                 cr :r\n                 :as cell}]\n (< (q/dist cx cy mx my)\n    cr))\n\n(defn mitosis [{pos :pos\n                r :r\n                c :c\n                :as cell}]\n [(make pos (* 0.8 r) c)\n  (make pos (* 0.8 r) c)])\n\n(defn move [n cell]\n (let [vel {:x (q/random (- n) n)\n            :y (q/random (- n) n)}]\n  (->> cell\n       (transform :pos\n                  (partial merge-with + vel)))))\n\n(defn update* [cell]\n (move 5 cell))\n\n(defn draw [{{x :x\n              y :y} :pos\n             color :c\n             r :r\n             :as cell}]\n (q/no-stroke)\n (q/fill color)\n (q/ellipse x y\n            r r))\n"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.javascript","code.javascript",-765648846),"// Daniel Shiffman\n// http://codingrainbow.com\n// http://patreon.com/codingrainbow\n// Code for: https://youtu.be/jxGS3fKPKJA\n\nfunction Cell(pos, r, c) {\n\n  if (pos) {\n    this.pos = pos.copy();\n  } else {\n    this.pos = createVector(random(width), random(height));\n  }\n\n  this.r = r || 60;\n  this.c = c || color(random(100, 255), 0, random(100, 255), 100);\n\n  this.clicked = function(x, y) {\n    var d = dist(this.pos.x, this.pos.y, x, y);\n    if (d < this.r) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  this.mitosis = function() {\n    //this.pos.x += random(-this.r, this.r);\n    var cell = new Cell(this.pos, this.r*0.8, this.c);\n    return cell;\n  }\n\n  this.move = function() {\n    var vel = p5.Vector.random2D();\n    this.pos.add(vel);\n  }\n\n  this.show = function() {\n    noStroke();\n    fill(this.c);\n    ellipse(this.pos.x, this.pos.y, this.r, this.r)\n  }\n\n}\n"], null)], null)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(code__$1)].join('')));

}
})()], null);
})()], null);
});
;})(code))
})(),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),coding_challenges.mitosis.views.mitosis_sketch], null));
});

//# sourceMappingURL=views.js.map?rel=1485242678642
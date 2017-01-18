// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
coding_challenges.routes.hook_browser_navigation_BANG_ = (function coding_challenges$routes$hook_browser_navigation_BANG_(){
var G__33678 = (new goog.History());
goog.events.listen(G__33678,goog.history.EventType.NAVIGATE,((function (G__33678){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__33678))
);

G__33678.setEnabled(true);

return G__33678;
});
coding_challenges.routes.app_routes = (function coding_challenges$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__33495__auto___33789 = (function (params__33496__auto__){
if(cljs.core.map_QMARK_.call(null,params__33496__auto__)){
var map__33734 = params__33496__auto__;
var map__33734__$1 = ((((!((map__33734 == null)))?((((map__33734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33734):map__33734);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33496__auto__)){
var vec__33736 = params__33496__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__33495__auto___33789);


var action__33495__auto___33790 = (function (params__33496__auto__){
if(cljs.core.map_QMARK_.call(null,params__33496__auto__)){
var map__33739 = params__33496__auto__;
var map__33739__$1 = ((((!((map__33739 == null)))?((((map__33739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33739):map__33739);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"starfield-panel","starfield-panel",-1613759502)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33496__auto__)){
var vec__33741 = params__33496__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"starfield-panel","starfield-panel",-1613759502)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/starfield",action__33495__auto___33790);


var action__33495__auto___33791 = (function (params__33496__auto__){
if(cljs.core.map_QMARK_.call(null,params__33496__auto__)){
var map__33744 = params__33496__auto__;
var map__33744__$1 = ((((!((map__33744 == null)))?((((map__33744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33744):map__33744);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"menger-sponge-fractal-panel","menger-sponge-fractal-panel",-369847347)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33496__auto__)){
var vec__33746 = params__33496__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"menger-sponge-fractal-panel","menger-sponge-fractal-panel",-369847347)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/menger-sponge-fractal",action__33495__auto___33791);


var action__33495__auto___33792 = (function (params__33496__auto__){
if(cljs.core.map_QMARK_.call(null,params__33496__auto__)){
var map__33749 = params__33496__auto__;
var map__33749__$1 = ((((!((map__33749 == null)))?((((map__33749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33749):map__33749);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"snake-game-panel","snake-game-panel",1594778845)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33496__auto__)){
var vec__33751 = params__33496__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"snake-game-panel","snake-game-panel",1594778845)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/snake-game",action__33495__auto___33792);


var action__33495__auto___33793 = (function (params__33496__auto__){
if(cljs.core.map_QMARK_.call(null,params__33496__auto__)){
var map__33754 = params__33496__auto__;
var map__33754__$1 = ((((!((map__33754 == null)))?((((map__33754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33754):map__33754);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"purple-rain-panel","purple-rain-panel",-1162834211)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33496__auto__)){
var vec__33756 = params__33496__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"purple-rain-panel","purple-rain-panel",-1162834211)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/purple-rain",action__33495__auto___33793);


var action__33495__auto___33794 = (function (params__33496__auto__){
if(cljs.core.map_QMARK_.call(null,params__33496__auto__)){
var map__33759 = params__33496__auto__;
var map__33759__$1 = ((((!((map__33759 == null)))?((((map__33759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33759):map__33759);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"space-invaders-panel","space-invaders-panel",372116962)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33496__auto__)){
var vec__33761 = params__33496__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"space-invaders-panel","space-invaders-panel",372116962)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/space-invaders",action__33495__auto___33794);


var action__33495__auto___33795 = (function (params__33496__auto__){
if(cljs.core.map_QMARK_.call(null,params__33496__auto__)){
var map__33764 = params__33496__auto__;
var map__33764__$1 = ((((!((map__33764 == null)))?((((map__33764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33764):map__33764);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"mitosis-panel","mitosis-panel",-632186177)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33496__auto__)){
var vec__33766 = params__33496__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"mitosis-panel","mitosis-panel",-632186177)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/mitosis",action__33495__auto___33795);


var action__33495__auto___33796 = (function (params__33496__auto__){
if(cljs.core.map_QMARK_.call(null,params__33496__auto__)){
var map__33769 = params__33496__auto__;
var map__33769__$1 = ((((!((map__33769 == null)))?((((map__33769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33769):map__33769);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-panel","solar-system-panel",174989555)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33496__auto__)){
var vec__33771 = params__33496__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-panel","solar-system-panel",174989555)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/solar-system",action__33495__auto___33796);


var action__33495__auto___33797 = (function (params__33496__auto__){
if(cljs.core.map_QMARK_.call(null,params__33496__auto__)){
var map__33774 = params__33496__auto__;
var map__33774__$1 = ((((!((map__33774 == null)))?((((map__33774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33774):map__33774);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-3d-panel","solar-system-3d-panel",-465025348)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33496__auto__)){
var vec__33776 = params__33496__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-3d-panel","solar-system-3d-panel",-465025348)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/solar-system-3d",action__33495__auto___33797);


var action__33495__auto___33798 = (function (params__33496__auto__){
if(cljs.core.map_QMARK_.call(null,params__33496__auto__)){
var map__33779 = params__33496__auto__;
var map__33779__$1 = ((((!((map__33779 == null)))?((((map__33779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33779):map__33779);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"maze-generator-panel","maze-generator-panel",230398463)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33496__auto__)){
var vec__33781 = params__33496__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"maze-generator-panel","maze-generator-panel",230398463)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/maze-generator",action__33495__auto___33798);


var action__33495__auto___33799 = (function (params__33496__auto__){
if(cljs.core.map_QMARK_.call(null,params__33496__auto__)){
var map__33784 = params__33496__auto__;
var map__33784__$1 = ((((!((map__33784 == null)))?((((map__33784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33784):map__33784);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33496__auto__)){
var vec__33786 = params__33496__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__33495__auto___33799);


return coding_challenges.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1484702592151
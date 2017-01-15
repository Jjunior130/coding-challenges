// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
coding_challenges.routes.hook_browser_navigation_BANG_ = (function coding_challenges$routes$hook_browser_navigation_BANG_(){
var G__35846 = (new goog.History());
goog.events.listen(G__35846,goog.history.EventType.NAVIGATE,((function (G__35846){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__35846))
);

G__35846.setEnabled(true);

return G__35846;
});
coding_challenges.routes.app_routes = (function coding_challenges$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__35663__auto___35947 = (function (params__35664__auto__){
if(cljs.core.map_QMARK_.call(null,params__35664__auto__)){
var map__35897 = params__35664__auto__;
var map__35897__$1 = ((((!((map__35897 == null)))?((((map__35897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35897):map__35897);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35664__auto__)){
var vec__35899 = params__35664__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__35663__auto___35947);


var action__35663__auto___35948 = (function (params__35664__auto__){
if(cljs.core.map_QMARK_.call(null,params__35664__auto__)){
var map__35902 = params__35664__auto__;
var map__35902__$1 = ((((!((map__35902 == null)))?((((map__35902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35902):map__35902);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"starfield-panel","starfield-panel",-1613759502)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35664__auto__)){
var vec__35904 = params__35664__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"starfield-panel","starfield-panel",-1613759502)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/starfield",action__35663__auto___35948);


var action__35663__auto___35949 = (function (params__35664__auto__){
if(cljs.core.map_QMARK_.call(null,params__35664__auto__)){
var map__35907 = params__35664__auto__;
var map__35907__$1 = ((((!((map__35907 == null)))?((((map__35907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35907):map__35907);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"menger-sponge-fractal-panel","menger-sponge-fractal-panel",-369847347)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35664__auto__)){
var vec__35909 = params__35664__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"menger-sponge-fractal-panel","menger-sponge-fractal-panel",-369847347)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/menger-sponge-fractal",action__35663__auto___35949);


var action__35663__auto___35950 = (function (params__35664__auto__){
if(cljs.core.map_QMARK_.call(null,params__35664__auto__)){
var map__35912 = params__35664__auto__;
var map__35912__$1 = ((((!((map__35912 == null)))?((((map__35912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35912):map__35912);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"snake-game-panel","snake-game-panel",1594778845)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35664__auto__)){
var vec__35914 = params__35664__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"snake-game-panel","snake-game-panel",1594778845)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/snake-game",action__35663__auto___35950);


var action__35663__auto___35951 = (function (params__35664__auto__){
if(cljs.core.map_QMARK_.call(null,params__35664__auto__)){
var map__35917 = params__35664__auto__;
var map__35917__$1 = ((((!((map__35917 == null)))?((((map__35917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35917):map__35917);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"purple-rain-panel","purple-rain-panel",-1162834211)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35664__auto__)){
var vec__35919 = params__35664__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"purple-rain-panel","purple-rain-panel",-1162834211)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/purple-rain",action__35663__auto___35951);


var action__35663__auto___35952 = (function (params__35664__auto__){
if(cljs.core.map_QMARK_.call(null,params__35664__auto__)){
var map__35922 = params__35664__auto__;
var map__35922__$1 = ((((!((map__35922 == null)))?((((map__35922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35922):map__35922);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"space-invaders-panel","space-invaders-panel",372116962)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35664__auto__)){
var vec__35924 = params__35664__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"space-invaders-panel","space-invaders-panel",372116962)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/space-invaders",action__35663__auto___35952);


var action__35663__auto___35953 = (function (params__35664__auto__){
if(cljs.core.map_QMARK_.call(null,params__35664__auto__)){
var map__35927 = params__35664__auto__;
var map__35927__$1 = ((((!((map__35927 == null)))?((((map__35927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35927):map__35927);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"mitosis-panel","mitosis-panel",-632186177)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35664__auto__)){
var vec__35929 = params__35664__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"mitosis-panel","mitosis-panel",-632186177)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/mitosis",action__35663__auto___35953);


var action__35663__auto___35954 = (function (params__35664__auto__){
if(cljs.core.map_QMARK_.call(null,params__35664__auto__)){
var map__35932 = params__35664__auto__;
var map__35932__$1 = ((((!((map__35932 == null)))?((((map__35932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35932):map__35932);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-panel","solar-system-panel",174989555)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35664__auto__)){
var vec__35934 = params__35664__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-panel","solar-system-panel",174989555)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/solar-system",action__35663__auto___35954);


var action__35663__auto___35955 = (function (params__35664__auto__){
if(cljs.core.map_QMARK_.call(null,params__35664__auto__)){
var map__35937 = params__35664__auto__;
var map__35937__$1 = ((((!((map__35937 == null)))?((((map__35937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35937):map__35937);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-3d-panel","solar-system-3d-panel",-465025348)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35664__auto__)){
var vec__35939 = params__35664__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-3d-panel","solar-system-3d-panel",-465025348)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/solar-system-3d",action__35663__auto___35955);


var action__35663__auto___35956 = (function (params__35664__auto__){
if(cljs.core.map_QMARK_.call(null,params__35664__auto__)){
var map__35942 = params__35664__auto__;
var map__35942__$1 = ((((!((map__35942 == null)))?((((map__35942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35942):map__35942);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35664__auto__)){
var vec__35944 = params__35664__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__35663__auto___35956);


return coding_challenges.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1484456854387
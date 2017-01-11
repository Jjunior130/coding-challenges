// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
coding_challenges.routes.hook_browser_navigation_BANG_ = (function coding_challenges$routes$hook_browser_navigation_BANG_(){
var G__142121 = (new goog.History());
goog.events.listen(G__142121,goog.history.EventType.NAVIGATE,((function (G__142121){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__142121))
);

G__142121.setEnabled(true);

return G__142121;
});
coding_challenges.routes.app_routes = (function coding_challenges$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__44104__auto___142232 = (function (params__44105__auto__){
if(cljs.core.map_QMARK_.call(null,params__44105__auto__)){
var map__142177 = params__44105__auto__;
var map__142177__$1 = ((((!((map__142177 == null)))?((((map__142177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__142177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__142177):map__142177);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44105__auto__)){
var vec__142179 = params__44105__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__44104__auto___142232);


var action__44104__auto___142233 = (function (params__44105__auto__){
if(cljs.core.map_QMARK_.call(null,params__44105__auto__)){
var map__142182 = params__44105__auto__;
var map__142182__$1 = ((((!((map__142182 == null)))?((((map__142182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__142182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__142182):map__142182);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"starfield-panel","starfield-panel",-1613759502)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44105__auto__)){
var vec__142184 = params__44105__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"starfield-panel","starfield-panel",-1613759502)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/starfield",action__44104__auto___142233);


var action__44104__auto___142234 = (function (params__44105__auto__){
if(cljs.core.map_QMARK_.call(null,params__44105__auto__)){
var map__142187 = params__44105__auto__;
var map__142187__$1 = ((((!((map__142187 == null)))?((((map__142187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__142187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__142187):map__142187);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"menger-sponge-fractal-panel","menger-sponge-fractal-panel",-369847347)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44105__auto__)){
var vec__142189 = params__44105__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"menger-sponge-fractal-panel","menger-sponge-fractal-panel",-369847347)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/menger-sponge-fractal",action__44104__auto___142234);


var action__44104__auto___142235 = (function (params__44105__auto__){
if(cljs.core.map_QMARK_.call(null,params__44105__auto__)){
var map__142192 = params__44105__auto__;
var map__142192__$1 = ((((!((map__142192 == null)))?((((map__142192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__142192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__142192):map__142192);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"snake-game-panel","snake-game-panel",1594778845)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44105__auto__)){
var vec__142194 = params__44105__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"snake-game-panel","snake-game-panel",1594778845)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/snake-game",action__44104__auto___142235);


var action__44104__auto___142236 = (function (params__44105__auto__){
if(cljs.core.map_QMARK_.call(null,params__44105__auto__)){
var map__142197 = params__44105__auto__;
var map__142197__$1 = ((((!((map__142197 == null)))?((((map__142197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__142197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__142197):map__142197);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"purple-rain-panel","purple-rain-panel",-1162834211)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44105__auto__)){
var vec__142199 = params__44105__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"purple-rain-panel","purple-rain-panel",-1162834211)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/purple-rain",action__44104__auto___142236);


var action__44104__auto___142237 = (function (params__44105__auto__){
if(cljs.core.map_QMARK_.call(null,params__44105__auto__)){
var map__142202 = params__44105__auto__;
var map__142202__$1 = ((((!((map__142202 == null)))?((((map__142202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__142202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__142202):map__142202);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"space-invaders-panel","space-invaders-panel",372116962)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44105__auto__)){
var vec__142204 = params__44105__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"space-invaders-panel","space-invaders-panel",372116962)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/space-invaders",action__44104__auto___142237);


var action__44104__auto___142238 = (function (params__44105__auto__){
if(cljs.core.map_QMARK_.call(null,params__44105__auto__)){
var map__142207 = params__44105__auto__;
var map__142207__$1 = ((((!((map__142207 == null)))?((((map__142207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__142207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__142207):map__142207);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"mitosis-panel","mitosis-panel",-632186177)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44105__auto__)){
var vec__142209 = params__44105__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"mitosis-panel","mitosis-panel",-632186177)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/mitosis",action__44104__auto___142238);


var action__44104__auto___142239 = (function (params__44105__auto__){
if(cljs.core.map_QMARK_.call(null,params__44105__auto__)){
var map__142212 = params__44105__auto__;
var map__142212__$1 = ((((!((map__142212 == null)))?((((map__142212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__142212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__142212):map__142212);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-panel","solar-system-panel",174989555)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44105__auto__)){
var vec__142214 = params__44105__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-panel","solar-system-panel",174989555)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/solar-system",action__44104__auto___142239);


var action__44104__auto___142240 = (function (params__44105__auto__){
if(cljs.core.map_QMARK_.call(null,params__44105__auto__)){
var map__142217 = params__44105__auto__;
var map__142217__$1 = ((((!((map__142217 == null)))?((((map__142217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__142217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__142217):map__142217);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-3d-panel","solar-system-3d-panel",-465025348)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44105__auto__)){
var vec__142219 = params__44105__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-3d-panel","solar-system-3d-panel",-465025348)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/solar-system-3d",action__44104__auto___142240);


var action__44104__auto___142241 = (function (params__44105__auto__){
if(cljs.core.map_QMARK_.call(null,params__44105__auto__)){
var map__142222 = params__44105__auto__;
var map__142222__$1 = ((((!((map__142222 == null)))?((((map__142222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__142222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__142222):map__142222);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-3d-texture-panel","solar-system-3d-texture-panel",-730129567)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44105__auto__)){
var vec__142224 = params__44105__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-3d-texture-panel","solar-system-3d-texture-panel",-730129567)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/solar-system-3d-texture",action__44104__auto___142241);


var action__44104__auto___142242 = (function (params__44105__auto__){
if(cljs.core.map_QMARK_.call(null,params__44105__auto__)){
var map__142227 = params__44105__auto__;
var map__142227__$1 = ((((!((map__142227 == null)))?((((map__142227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__142227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__142227):map__142227);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44105__auto__)){
var vec__142229 = params__44105__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__44104__auto___142242);


return coding_challenges.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1484099825318
// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
coding_challenges.routes.hook_browser_navigation_BANG_ = (function coding_challenges$routes$hook_browser_navigation_BANG_(){
var G__46269 = (new goog.History());
goog.events.listen(G__46269,goog.history.EventType.NAVIGATE,((function (G__46269){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__46269))
);

G__46269.setEnabled(true);

return G__46269;
});
coding_challenges.routes.app_routes = (function coding_challenges$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__46086__auto___46380 = (function (params__46087__auto__){
if(cljs.core.map_QMARK_.call(null,params__46087__auto__)){
var map__46325 = params__46087__auto__;
var map__46325__$1 = ((((!((map__46325 == null)))?((((map__46325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46325):map__46325);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__46087__auto__)){
var vec__46327 = params__46087__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__46086__auto___46380);


var action__46086__auto___46381 = (function (params__46087__auto__){
if(cljs.core.map_QMARK_.call(null,params__46087__auto__)){
var map__46330 = params__46087__auto__;
var map__46330__$1 = ((((!((map__46330 == null)))?((((map__46330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46330):map__46330);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"starfield-panel","starfield-panel",-1613759502)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__46087__auto__)){
var vec__46332 = params__46087__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"starfield-panel","starfield-panel",-1613759502)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/starfield",action__46086__auto___46381);


var action__46086__auto___46382 = (function (params__46087__auto__){
if(cljs.core.map_QMARK_.call(null,params__46087__auto__)){
var map__46335 = params__46087__auto__;
var map__46335__$1 = ((((!((map__46335 == null)))?((((map__46335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46335):map__46335);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"menger-sponge-fractal-panel","menger-sponge-fractal-panel",-369847347)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__46087__auto__)){
var vec__46337 = params__46087__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"menger-sponge-fractal-panel","menger-sponge-fractal-panel",-369847347)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/menger-sponge-fractal",action__46086__auto___46382);


var action__46086__auto___46383 = (function (params__46087__auto__){
if(cljs.core.map_QMARK_.call(null,params__46087__auto__)){
var map__46340 = params__46087__auto__;
var map__46340__$1 = ((((!((map__46340 == null)))?((((map__46340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46340):map__46340);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"snake-game-panel","snake-game-panel",1594778845)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__46087__auto__)){
var vec__46342 = params__46087__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"snake-game-panel","snake-game-panel",1594778845)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/snake-game",action__46086__auto___46383);


var action__46086__auto___46384 = (function (params__46087__auto__){
if(cljs.core.map_QMARK_.call(null,params__46087__auto__)){
var map__46345 = params__46087__auto__;
var map__46345__$1 = ((((!((map__46345 == null)))?((((map__46345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46345):map__46345);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"purple-rain-panel","purple-rain-panel",-1162834211)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__46087__auto__)){
var vec__46347 = params__46087__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"purple-rain-panel","purple-rain-panel",-1162834211)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/purple-rain",action__46086__auto___46384);


var action__46086__auto___46385 = (function (params__46087__auto__){
if(cljs.core.map_QMARK_.call(null,params__46087__auto__)){
var map__46350 = params__46087__auto__;
var map__46350__$1 = ((((!((map__46350 == null)))?((((map__46350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46350):map__46350);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"space-invaders-panel","space-invaders-panel",372116962)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__46087__auto__)){
var vec__46352 = params__46087__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"space-invaders-panel","space-invaders-panel",372116962)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/space-invaders",action__46086__auto___46385);


var action__46086__auto___46386 = (function (params__46087__auto__){
if(cljs.core.map_QMARK_.call(null,params__46087__auto__)){
var map__46355 = params__46087__auto__;
var map__46355__$1 = ((((!((map__46355 == null)))?((((map__46355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46355):map__46355);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"mitosis-panel","mitosis-panel",-632186177)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__46087__auto__)){
var vec__46357 = params__46087__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"mitosis-panel","mitosis-panel",-632186177)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/mitosis",action__46086__auto___46386);


var action__46086__auto___46387 = (function (params__46087__auto__){
if(cljs.core.map_QMARK_.call(null,params__46087__auto__)){
var map__46360 = params__46087__auto__;
var map__46360__$1 = ((((!((map__46360 == null)))?((((map__46360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46360):map__46360);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-panel","solar-system-panel",174989555)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__46087__auto__)){
var vec__46362 = params__46087__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-panel","solar-system-panel",174989555)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/solar-system",action__46086__auto___46387);


var action__46086__auto___46388 = (function (params__46087__auto__){
if(cljs.core.map_QMARK_.call(null,params__46087__auto__)){
var map__46365 = params__46087__auto__;
var map__46365__$1 = ((((!((map__46365 == null)))?((((map__46365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46365):map__46365);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-3d-panel","solar-system-3d-panel",-465025348)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__46087__auto__)){
var vec__46367 = params__46087__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-3d-panel","solar-system-3d-panel",-465025348)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/solar-system-3d",action__46086__auto___46388);


var action__46086__auto___46389 = (function (params__46087__auto__){
if(cljs.core.map_QMARK_.call(null,params__46087__auto__)){
var map__46370 = params__46087__auto__;
var map__46370__$1 = ((((!((map__46370 == null)))?((((map__46370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46370):map__46370);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"maze-generator-panel","maze-generator-panel",230398463)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__46087__auto__)){
var vec__46372 = params__46087__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"maze-generator-panel","maze-generator-panel",230398463)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/maze-generator",action__46086__auto___46389);


var action__46086__auto___46390 = (function (params__46087__auto__){
if(cljs.core.map_QMARK_.call(null,params__46087__auto__)){
var map__46375 = params__46087__auto__;
var map__46375__$1 = ((((!((map__46375 == null)))?((((map__46375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46375):map__46375);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__46087__auto__)){
var vec__46377 = params__46087__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__46086__auto___46390);


return coding_challenges.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1484782600571
// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
coding_challenges.routes.hook_browser_navigation_BANG_ = (function coding_challenges$routes$hook_browser_navigation_BANG_(){
var G__35744 = (new goog.History());
goog.events.listen(G__35744,goog.history.EventType.NAVIGATE,((function (G__35744){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__35744))
);

G__35744.setEnabled(true);

return G__35744;
});
coding_challenges.routes.app_routes = (function coding_challenges$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__35561__auto___35845 = (function (params__35562__auto__){
if(cljs.core.map_QMARK_.call(null,params__35562__auto__)){
var map__35795 = params__35562__auto__;
var map__35795__$1 = ((((!((map__35795 == null)))?((((map__35795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35795):map__35795);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35562__auto__)){
var vec__35797 = params__35562__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__35561__auto___35845);


var action__35561__auto___35846 = (function (params__35562__auto__){
if(cljs.core.map_QMARK_.call(null,params__35562__auto__)){
var map__35800 = params__35562__auto__;
var map__35800__$1 = ((((!((map__35800 == null)))?((((map__35800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35800):map__35800);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"starfield-panel","starfield-panel",-1613759502)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35562__auto__)){
var vec__35802 = params__35562__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"starfield-panel","starfield-panel",-1613759502)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/starfield",action__35561__auto___35846);


var action__35561__auto___35847 = (function (params__35562__auto__){
if(cljs.core.map_QMARK_.call(null,params__35562__auto__)){
var map__35805 = params__35562__auto__;
var map__35805__$1 = ((((!((map__35805 == null)))?((((map__35805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35805):map__35805);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"menger-sponge-fractal-panel","menger-sponge-fractal-panel",-369847347)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35562__auto__)){
var vec__35807 = params__35562__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"menger-sponge-fractal-panel","menger-sponge-fractal-panel",-369847347)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/menger-sponge-fractal",action__35561__auto___35847);


var action__35561__auto___35848 = (function (params__35562__auto__){
if(cljs.core.map_QMARK_.call(null,params__35562__auto__)){
var map__35810 = params__35562__auto__;
var map__35810__$1 = ((((!((map__35810 == null)))?((((map__35810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35810):map__35810);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"snake-game-panel","snake-game-panel",1594778845)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35562__auto__)){
var vec__35812 = params__35562__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"snake-game-panel","snake-game-panel",1594778845)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/snake-game",action__35561__auto___35848);


var action__35561__auto___35849 = (function (params__35562__auto__){
if(cljs.core.map_QMARK_.call(null,params__35562__auto__)){
var map__35815 = params__35562__auto__;
var map__35815__$1 = ((((!((map__35815 == null)))?((((map__35815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35815):map__35815);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"purple-rain-panel","purple-rain-panel",-1162834211)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35562__auto__)){
var vec__35817 = params__35562__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"purple-rain-panel","purple-rain-panel",-1162834211)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/purple-rain",action__35561__auto___35849);


var action__35561__auto___35850 = (function (params__35562__auto__){
if(cljs.core.map_QMARK_.call(null,params__35562__auto__)){
var map__35820 = params__35562__auto__;
var map__35820__$1 = ((((!((map__35820 == null)))?((((map__35820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35820):map__35820);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"space-invaders-panel","space-invaders-panel",372116962)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35562__auto__)){
var vec__35822 = params__35562__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"space-invaders-panel","space-invaders-panel",372116962)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/space-invaders",action__35561__auto___35850);


var action__35561__auto___35851 = (function (params__35562__auto__){
if(cljs.core.map_QMARK_.call(null,params__35562__auto__)){
var map__35825 = params__35562__auto__;
var map__35825__$1 = ((((!((map__35825 == null)))?((((map__35825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35825):map__35825);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"mitosis-panel","mitosis-panel",-632186177)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35562__auto__)){
var vec__35827 = params__35562__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"mitosis-panel","mitosis-panel",-632186177)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/mitosis",action__35561__auto___35851);


var action__35561__auto___35852 = (function (params__35562__auto__){
if(cljs.core.map_QMARK_.call(null,params__35562__auto__)){
var map__35830 = params__35562__auto__;
var map__35830__$1 = ((((!((map__35830 == null)))?((((map__35830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35830):map__35830);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-panel","solar-system-panel",174989555)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35562__auto__)){
var vec__35832 = params__35562__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-panel","solar-system-panel",174989555)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/solar-system",action__35561__auto___35852);


var action__35561__auto___35853 = (function (params__35562__auto__){
if(cljs.core.map_QMARK_.call(null,params__35562__auto__)){
var map__35835 = params__35562__auto__;
var map__35835__$1 = ((((!((map__35835 == null)))?((((map__35835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35835):map__35835);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-3d-panel","solar-system-3d-panel",-465025348)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35562__auto__)){
var vec__35837 = params__35562__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-3d-panel","solar-system-3d-panel",-465025348)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/solar-system-3d",action__35561__auto___35853);


var action__35561__auto___35854 = (function (params__35562__auto__){
if(cljs.core.map_QMARK_.call(null,params__35562__auto__)){
var map__35840 = params__35562__auto__;
var map__35840__$1 = ((((!((map__35840 == null)))?((((map__35840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35840):map__35840);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35562__auto__)){
var vec__35842 = params__35562__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__35561__auto___35854);


return coding_challenges.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1484115257606
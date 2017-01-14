// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
coding_challenges.routes.hook_browser_navigation_BANG_ = (function coding_challenges$routes$hook_browser_navigation_BANG_(){
var G__62599 = (new goog.History());
goog.events.listen(G__62599,goog.history.EventType.NAVIGATE,((function (G__62599){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__62599))
);

G__62599.setEnabled(true);

return G__62599;
});
coding_challenges.routes.app_routes = (function coding_challenges$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__44096__auto___62700 = (function (params__44097__auto__){
if(cljs.core.map_QMARK_.call(null,params__44097__auto__)){
var map__62650 = params__44097__auto__;
var map__62650__$1 = ((((!((map__62650 == null)))?((((map__62650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62650):map__62650);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44097__auto__)){
var vec__62652 = params__44097__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__44096__auto___62700);


var action__44096__auto___62701 = (function (params__44097__auto__){
if(cljs.core.map_QMARK_.call(null,params__44097__auto__)){
var map__62655 = params__44097__auto__;
var map__62655__$1 = ((((!((map__62655 == null)))?((((map__62655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62655):map__62655);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"starfield-panel","starfield-panel",-1613759502)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44097__auto__)){
var vec__62657 = params__44097__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"starfield-panel","starfield-panel",-1613759502)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/starfield",action__44096__auto___62701);


var action__44096__auto___62702 = (function (params__44097__auto__){
if(cljs.core.map_QMARK_.call(null,params__44097__auto__)){
var map__62660 = params__44097__auto__;
var map__62660__$1 = ((((!((map__62660 == null)))?((((map__62660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62660):map__62660);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"menger-sponge-fractal-panel","menger-sponge-fractal-panel",-369847347)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44097__auto__)){
var vec__62662 = params__44097__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"menger-sponge-fractal-panel","menger-sponge-fractal-panel",-369847347)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/menger-sponge-fractal",action__44096__auto___62702);


var action__44096__auto___62703 = (function (params__44097__auto__){
if(cljs.core.map_QMARK_.call(null,params__44097__auto__)){
var map__62665 = params__44097__auto__;
var map__62665__$1 = ((((!((map__62665 == null)))?((((map__62665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62665):map__62665);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"snake-game-panel","snake-game-panel",1594778845)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44097__auto__)){
var vec__62667 = params__44097__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"snake-game-panel","snake-game-panel",1594778845)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/snake-game",action__44096__auto___62703);


var action__44096__auto___62704 = (function (params__44097__auto__){
if(cljs.core.map_QMARK_.call(null,params__44097__auto__)){
var map__62670 = params__44097__auto__;
var map__62670__$1 = ((((!((map__62670 == null)))?((((map__62670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62670):map__62670);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"purple-rain-panel","purple-rain-panel",-1162834211)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44097__auto__)){
var vec__62672 = params__44097__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"purple-rain-panel","purple-rain-panel",-1162834211)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/purple-rain",action__44096__auto___62704);


var action__44096__auto___62705 = (function (params__44097__auto__){
if(cljs.core.map_QMARK_.call(null,params__44097__auto__)){
var map__62675 = params__44097__auto__;
var map__62675__$1 = ((((!((map__62675 == null)))?((((map__62675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62675):map__62675);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"space-invaders-panel","space-invaders-panel",372116962)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44097__auto__)){
var vec__62677 = params__44097__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"space-invaders-panel","space-invaders-panel",372116962)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/space-invaders",action__44096__auto___62705);


var action__44096__auto___62706 = (function (params__44097__auto__){
if(cljs.core.map_QMARK_.call(null,params__44097__auto__)){
var map__62680 = params__44097__auto__;
var map__62680__$1 = ((((!((map__62680 == null)))?((((map__62680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62680):map__62680);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"mitosis-panel","mitosis-panel",-632186177)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44097__auto__)){
var vec__62682 = params__44097__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"mitosis-panel","mitosis-panel",-632186177)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/mitosis",action__44096__auto___62706);


var action__44096__auto___62707 = (function (params__44097__auto__){
if(cljs.core.map_QMARK_.call(null,params__44097__auto__)){
var map__62685 = params__44097__auto__;
var map__62685__$1 = ((((!((map__62685 == null)))?((((map__62685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62685):map__62685);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-panel","solar-system-panel",174989555)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44097__auto__)){
var vec__62687 = params__44097__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-panel","solar-system-panel",174989555)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/solar-system",action__44096__auto___62707);


var action__44096__auto___62708 = (function (params__44097__auto__){
if(cljs.core.map_QMARK_.call(null,params__44097__auto__)){
var map__62690 = params__44097__auto__;
var map__62690__$1 = ((((!((map__62690 == null)))?((((map__62690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62690):map__62690);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-3d-panel","solar-system-3d-panel",-465025348)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44097__auto__)){
var vec__62692 = params__44097__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-3d-panel","solar-system-3d-panel",-465025348)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/solar-system-3d",action__44096__auto___62708);


var action__44096__auto___62709 = (function (params__44097__auto__){
if(cljs.core.map_QMARK_.call(null,params__44097__auto__)){
var map__62695 = params__44097__auto__;
var map__62695__$1 = ((((!((map__62695 == null)))?((((map__62695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62695):map__62695);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44097__auto__)){
var vec__62697 = params__44097__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__44096__auto___62709);


return coding_challenges.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1484333404363
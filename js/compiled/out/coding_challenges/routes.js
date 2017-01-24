// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
coding_challenges.routes.hook_browser_navigation_BANG_ = (function coding_challenges$routes$hook_browser_navigation_BANG_(){
var G__36003 = (new goog.History());
goog.events.listen(G__36003,goog.history.EventType.NAVIGATE,((function (G__36003){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__36003))
);

G__36003.setEnabled(true);

return G__36003;
});
coding_challenges.routes.app_routes = (function coding_challenges$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__35820__auto___36114 = (function (params__35821__auto__){
if(cljs.core.map_QMARK_.call(null,params__35821__auto__)){
var map__36059 = params__35821__auto__;
var map__36059__$1 = ((((!((map__36059 == null)))?((((map__36059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36059):map__36059);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35821__auto__)){
var vec__36061 = params__35821__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__35820__auto___36114);


var action__35820__auto___36115 = (function (params__35821__auto__){
if(cljs.core.map_QMARK_.call(null,params__35821__auto__)){
var map__36064 = params__35821__auto__;
var map__36064__$1 = ((((!((map__36064 == null)))?((((map__36064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36064):map__36064);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"starfield-panel","starfield-panel",-1613759502)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35821__auto__)){
var vec__36066 = params__35821__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"starfield-panel","starfield-panel",-1613759502)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/starfield",action__35820__auto___36115);


var action__35820__auto___36116 = (function (params__35821__auto__){
if(cljs.core.map_QMARK_.call(null,params__35821__auto__)){
var map__36069 = params__35821__auto__;
var map__36069__$1 = ((((!((map__36069 == null)))?((((map__36069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36069):map__36069);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"menger-sponge-fractal-panel","menger-sponge-fractal-panel",-369847347)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35821__auto__)){
var vec__36071 = params__35821__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"menger-sponge-fractal-panel","menger-sponge-fractal-panel",-369847347)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/menger-sponge-fractal",action__35820__auto___36116);


var action__35820__auto___36117 = (function (params__35821__auto__){
if(cljs.core.map_QMARK_.call(null,params__35821__auto__)){
var map__36074 = params__35821__auto__;
var map__36074__$1 = ((((!((map__36074 == null)))?((((map__36074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36074):map__36074);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"snake-game-panel","snake-game-panel",1594778845)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35821__auto__)){
var vec__36076 = params__35821__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"snake-game-panel","snake-game-panel",1594778845)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/snake-game",action__35820__auto___36117);


var action__35820__auto___36118 = (function (params__35821__auto__){
if(cljs.core.map_QMARK_.call(null,params__35821__auto__)){
var map__36079 = params__35821__auto__;
var map__36079__$1 = ((((!((map__36079 == null)))?((((map__36079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36079):map__36079);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"purple-rain-panel","purple-rain-panel",-1162834211)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35821__auto__)){
var vec__36081 = params__35821__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"purple-rain-panel","purple-rain-panel",-1162834211)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/purple-rain",action__35820__auto___36118);


var action__35820__auto___36119 = (function (params__35821__auto__){
if(cljs.core.map_QMARK_.call(null,params__35821__auto__)){
var map__36084 = params__35821__auto__;
var map__36084__$1 = ((((!((map__36084 == null)))?((((map__36084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36084):map__36084);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"space-invaders-panel","space-invaders-panel",372116962)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35821__auto__)){
var vec__36086 = params__35821__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"space-invaders-panel","space-invaders-panel",372116962)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/space-invaders",action__35820__auto___36119);


var action__35820__auto___36120 = (function (params__35821__auto__){
if(cljs.core.map_QMARK_.call(null,params__35821__auto__)){
var map__36089 = params__35821__auto__;
var map__36089__$1 = ((((!((map__36089 == null)))?((((map__36089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36089):map__36089);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"mitosis-panel","mitosis-panel",-632186177)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35821__auto__)){
var vec__36091 = params__35821__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"mitosis-panel","mitosis-panel",-632186177)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/mitosis",action__35820__auto___36120);


var action__35820__auto___36121 = (function (params__35821__auto__){
if(cljs.core.map_QMARK_.call(null,params__35821__auto__)){
var map__36094 = params__35821__auto__;
var map__36094__$1 = ((((!((map__36094 == null)))?((((map__36094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36094):map__36094);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-panel","solar-system-panel",174989555)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35821__auto__)){
var vec__36096 = params__35821__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-panel","solar-system-panel",174989555)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/solar-system",action__35820__auto___36121);


var action__35820__auto___36122 = (function (params__35821__auto__){
if(cljs.core.map_QMARK_.call(null,params__35821__auto__)){
var map__36099 = params__35821__auto__;
var map__36099__$1 = ((((!((map__36099 == null)))?((((map__36099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36099):map__36099);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-3d-panel","solar-system-3d-panel",-465025348)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35821__auto__)){
var vec__36101 = params__35821__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"solar-system-3d-panel","solar-system-3d-panel",-465025348)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/solar-system-3d",action__35820__auto___36122);


var action__35820__auto___36123 = (function (params__35821__auto__){
if(cljs.core.map_QMARK_.call(null,params__35821__auto__)){
var map__36104 = params__35821__auto__;
var map__36104__$1 = ((((!((map__36104 == null)))?((((map__36104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36104):map__36104);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"maze-generator-panel","maze-generator-panel",230398463)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35821__auto__)){
var vec__36106 = params__35821__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"maze-generator-panel","maze-generator-panel",230398463)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/maze-generator",action__35820__auto___36123);


var action__35820__auto___36124 = (function (params__35821__auto__){
if(cljs.core.map_QMARK_.call(null,params__35821__auto__)){
var map__36109 = params__35821__auto__;
var map__36109__$1 = ((((!((map__36109 == null)))?((((map__36109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36109):map__36109);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35821__auto__)){
var vec__36111 = params__35821__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__35820__auto___36124);


return coding_challenges.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1485243284215
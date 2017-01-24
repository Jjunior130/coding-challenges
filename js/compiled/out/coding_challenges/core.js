// Compiled by ClojureScript 1.9.229 {}
goog.provide('coding_challenges.core');
goog.require('cljs.core');
goog.require('coding_challenges.subs');
goog.require('reagent.core');
goog.require('coding_challenges.views');
goog.require('coding_challenges.routes');
goog.require('coding_challenges.events');
goog.require('coding_challenges.config');
goog.require('re_frisk.core');
goog.require('re_frame.core');
NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){
var array__$1 = this;
return cljs.core.array_seq.call(null,array__$1,(0));
});
coding_challenges.core.dev_setup = (function coding_challenges$core$dev_setup(){
if(cljs.core.truth_(coding_challenges.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

re_frisk.core.enable_re_frisk_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
coding_challenges.core.mount_root = (function coding_challenges$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coding_challenges.views.main_panel], null),document.getElementById("app"));
});
coding_challenges.core.init = (function coding_challenges$core$init(){
coding_challenges.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

coding_challenges.core.dev_setup.call(null);

return coding_challenges.core.mount_root.call(null);
});
goog.exportSymbol('coding_challenges.core.init', coding_challenges.core.init);

//# sourceMappingURL=core.js.map?rel=1485243284247
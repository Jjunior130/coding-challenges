// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args46270 = [];
var len__26121__auto___46273 = arguments.length;
var i__26122__auto___46274 = (0);
while(true){
if((i__26122__auto___46274 < len__26121__auto___46273)){
args46270.push((arguments[i__26122__auto___46274]));

var G__46275 = (i__26122__auto___46274 + (1));
i__26122__auto___46274 = G__46275;
continue;
} else {
}
break;
}

var G__46272 = args46270.length;
switch (G__46272) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46270.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__26128__auto__ = [];
var len__26121__auto___46278 = arguments.length;
var i__26122__auto___46279 = (0);
while(true){
if((i__26122__auto___46279 < len__26121__auto___46278)){
args__26128__auto__.push((arguments[i__26122__auto___46279]));

var G__46280 = (i__26122__auto___46279 + (1));
i__26122__auto___46279 = G__46280;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq46277){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46277));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26128__auto__ = [];
var len__26121__auto___46282 = arguments.length;
var i__26122__auto___46283 = (0);
while(true){
if((i__26122__auto___46283 < len__26121__auto___46282)){
args__26128__auto__.push((arguments[i__26122__auto___46283]));

var G__46284 = (i__26122__auto___46283 + (1));
i__26122__auto___46283 = G__46284;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq46281){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46281));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__46285 = cljs.core._EQ_;
var expr__46286 = (function (){var or__25046__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e46289){if((e46289 instanceof Error)){
var e = e46289;
return false;
} else {
throw e46289;

}
}})();
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__46285.call(null,"true",expr__46286))){
return true;
} else {
if(cljs.core.truth_(pred__46285.call(null,"false",expr__46286))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__46286)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e46291){if((e46291 instanceof Error)){
var e = e46291;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e46291;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__46292){
var map__46295 = p__46292;
var map__46295__$1 = ((((!((map__46295 == null)))?((((map__46295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46295):map__46295);
var message = cljs.core.get.call(null,map__46295__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__46295__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25046__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25034__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25034__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25034__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31753__auto___46457 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto___46457,ch){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto___46457,ch){
return (function (state_46426){
var state_val_46427 = (state_46426[(1)]);
if((state_val_46427 === (7))){
var inst_46422 = (state_46426[(2)]);
var state_46426__$1 = state_46426;
var statearr_46428_46458 = state_46426__$1;
(statearr_46428_46458[(2)] = inst_46422);

(statearr_46428_46458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46427 === (1))){
var state_46426__$1 = state_46426;
var statearr_46429_46459 = state_46426__$1;
(statearr_46429_46459[(2)] = null);

(statearr_46429_46459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46427 === (4))){
var inst_46379 = (state_46426[(7)]);
var inst_46379__$1 = (state_46426[(2)]);
var state_46426__$1 = (function (){var statearr_46430 = state_46426;
(statearr_46430[(7)] = inst_46379__$1);

return statearr_46430;
})();
if(cljs.core.truth_(inst_46379__$1)){
var statearr_46431_46460 = state_46426__$1;
(statearr_46431_46460[(1)] = (5));

} else {
var statearr_46432_46461 = state_46426__$1;
(statearr_46432_46461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46427 === (15))){
var inst_46386 = (state_46426[(8)]);
var inst_46401 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46386);
var inst_46402 = cljs.core.first.call(null,inst_46401);
var inst_46403 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_46402);
var inst_46404 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_46403)].join('');
var inst_46405 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_46404);
var state_46426__$1 = state_46426;
var statearr_46433_46462 = state_46426__$1;
(statearr_46433_46462[(2)] = inst_46405);

(statearr_46433_46462[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46427 === (13))){
var inst_46410 = (state_46426[(2)]);
var state_46426__$1 = state_46426;
var statearr_46434_46463 = state_46426__$1;
(statearr_46434_46463[(2)] = inst_46410);

(statearr_46434_46463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46427 === (6))){
var state_46426__$1 = state_46426;
var statearr_46435_46464 = state_46426__$1;
(statearr_46435_46464[(2)] = null);

(statearr_46435_46464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46427 === (17))){
var inst_46408 = (state_46426[(2)]);
var state_46426__$1 = state_46426;
var statearr_46436_46465 = state_46426__$1;
(statearr_46436_46465[(2)] = inst_46408);

(statearr_46436_46465[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46427 === (3))){
var inst_46424 = (state_46426[(2)]);
var state_46426__$1 = state_46426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46426__$1,inst_46424);
} else {
if((state_val_46427 === (12))){
var inst_46385 = (state_46426[(9)]);
var inst_46399 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_46385,opts);
var state_46426__$1 = state_46426;
if(cljs.core.truth_(inst_46399)){
var statearr_46437_46466 = state_46426__$1;
(statearr_46437_46466[(1)] = (15));

} else {
var statearr_46438_46467 = state_46426__$1;
(statearr_46438_46467[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46427 === (2))){
var state_46426__$1 = state_46426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46426__$1,(4),ch);
} else {
if((state_val_46427 === (11))){
var inst_46386 = (state_46426[(8)]);
var inst_46391 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46392 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_46386);
var inst_46393 = cljs.core.async.timeout.call(null,(1000));
var inst_46394 = [inst_46392,inst_46393];
var inst_46395 = (new cljs.core.PersistentVector(null,2,(5),inst_46391,inst_46394,null));
var state_46426__$1 = state_46426;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46426__$1,(14),inst_46395);
} else {
if((state_val_46427 === (9))){
var inst_46386 = (state_46426[(8)]);
var inst_46412 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_46413 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46386);
var inst_46414 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46413);
var inst_46415 = [cljs.core.str("Not loading: "),cljs.core.str(inst_46414)].join('');
var inst_46416 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_46415);
var state_46426__$1 = (function (){var statearr_46439 = state_46426;
(statearr_46439[(10)] = inst_46412);

return statearr_46439;
})();
var statearr_46440_46468 = state_46426__$1;
(statearr_46440_46468[(2)] = inst_46416);

(statearr_46440_46468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46427 === (5))){
var inst_46379 = (state_46426[(7)]);
var inst_46381 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_46382 = (new cljs.core.PersistentArrayMap(null,2,inst_46381,null));
var inst_46383 = (new cljs.core.PersistentHashSet(null,inst_46382,null));
var inst_46384 = figwheel.client.focus_msgs.call(null,inst_46383,inst_46379);
var inst_46385 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_46384);
var inst_46386 = cljs.core.first.call(null,inst_46384);
var inst_46387 = figwheel.client.autoload_QMARK_.call(null);
var state_46426__$1 = (function (){var statearr_46441 = state_46426;
(statearr_46441[(9)] = inst_46385);

(statearr_46441[(8)] = inst_46386);

return statearr_46441;
})();
if(cljs.core.truth_(inst_46387)){
var statearr_46442_46469 = state_46426__$1;
(statearr_46442_46469[(1)] = (8));

} else {
var statearr_46443_46470 = state_46426__$1;
(statearr_46443_46470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46427 === (14))){
var inst_46397 = (state_46426[(2)]);
var state_46426__$1 = state_46426;
var statearr_46444_46471 = state_46426__$1;
(statearr_46444_46471[(2)] = inst_46397);

(statearr_46444_46471[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46427 === (16))){
var state_46426__$1 = state_46426;
var statearr_46445_46472 = state_46426__$1;
(statearr_46445_46472[(2)] = null);

(statearr_46445_46472[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46427 === (10))){
var inst_46418 = (state_46426[(2)]);
var state_46426__$1 = (function (){var statearr_46446 = state_46426;
(statearr_46446[(11)] = inst_46418);

return statearr_46446;
})();
var statearr_46447_46473 = state_46426__$1;
(statearr_46447_46473[(2)] = null);

(statearr_46447_46473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46427 === (8))){
var inst_46385 = (state_46426[(9)]);
var inst_46389 = figwheel.client.reload_file_state_QMARK_.call(null,inst_46385,opts);
var state_46426__$1 = state_46426;
if(cljs.core.truth_(inst_46389)){
var statearr_46448_46474 = state_46426__$1;
(statearr_46448_46474[(1)] = (11));

} else {
var statearr_46449_46475 = state_46426__$1;
(statearr_46449_46475[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31753__auto___46457,ch))
;
return ((function (switch__31732__auto__,c__31753__auto___46457,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31733__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31733__auto____0 = (function (){
var statearr_46453 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46453[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31733__auto__);

(statearr_46453[(1)] = (1));

return statearr_46453;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31733__auto____1 = (function (state_46426){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_46426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e46454){if((e46454 instanceof Object)){
var ex__31736__auto__ = e46454;
var statearr_46455_46476 = state_46426;
(statearr_46455_46476[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46477 = state_46426;
state_46426 = G__46477;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31733__auto__ = function(state_46426){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31733__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31733__auto____1.call(this,state_46426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31733__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31733__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto___46457,ch))
})();
var state__31755__auto__ = (function (){var statearr_46456 = f__31754__auto__.call(null);
(statearr_46456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto___46457);

return statearr_46456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto___46457,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__46478_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__46478_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_46481 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_46481){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e46480){if((e46480 instanceof Error)){
var e = e46480;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_46481], null));
} else {
var e = e46480;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_46481))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__46482){
var map__46491 = p__46482;
var map__46491__$1 = ((((!((map__46491 == null)))?((((map__46491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46491):map__46491);
var opts = map__46491__$1;
var build_id = cljs.core.get.call(null,map__46491__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__46491,map__46491__$1,opts,build_id){
return (function (p__46493){
var vec__46494 = p__46493;
var seq__46495 = cljs.core.seq.call(null,vec__46494);
var first__46496 = cljs.core.first.call(null,seq__46495);
var seq__46495__$1 = cljs.core.next.call(null,seq__46495);
var map__46497 = first__46496;
var map__46497__$1 = ((((!((map__46497 == null)))?((((map__46497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46497):map__46497);
var msg = map__46497__$1;
var msg_name = cljs.core.get.call(null,map__46497__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46495__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__46494,seq__46495,first__46496,seq__46495__$1,map__46497,map__46497__$1,msg,msg_name,_,map__46491,map__46491__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__46494,seq__46495,first__46496,seq__46495__$1,map__46497,map__46497__$1,msg,msg_name,_,map__46491,map__46491__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__46491,map__46491__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__46505){
var vec__46506 = p__46505;
var seq__46507 = cljs.core.seq.call(null,vec__46506);
var first__46508 = cljs.core.first.call(null,seq__46507);
var seq__46507__$1 = cljs.core.next.call(null,seq__46507);
var map__46509 = first__46508;
var map__46509__$1 = ((((!((map__46509 == null)))?((((map__46509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46509):map__46509);
var msg = map__46509__$1;
var msg_name = cljs.core.get.call(null,map__46509__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46507__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__46511){
var map__46523 = p__46511;
var map__46523__$1 = ((((!((map__46523 == null)))?((((map__46523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46523):map__46523);
var on_compile_warning = cljs.core.get.call(null,map__46523__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__46523__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__46523,map__46523__$1,on_compile_warning,on_compile_fail){
return (function (p__46525){
var vec__46526 = p__46525;
var seq__46527 = cljs.core.seq.call(null,vec__46526);
var first__46528 = cljs.core.first.call(null,seq__46527);
var seq__46527__$1 = cljs.core.next.call(null,seq__46527);
var map__46529 = first__46528;
var map__46529__$1 = ((((!((map__46529 == null)))?((((map__46529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46529):map__46529);
var msg = map__46529__$1;
var msg_name = cljs.core.get.call(null,map__46529__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46527__$1;
var pred__46531 = cljs.core._EQ_;
var expr__46532 = msg_name;
if(cljs.core.truth_(pred__46531.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__46532))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__46531.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__46532))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__46523,map__46523__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31753__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto__,msg_hist,msg_names,msg){
return (function (state_46760){
var state_val_46761 = (state_46760[(1)]);
if((state_val_46761 === (7))){
var inst_46680 = (state_46760[(2)]);
var state_46760__$1 = state_46760;
if(cljs.core.truth_(inst_46680)){
var statearr_46762_46812 = state_46760__$1;
(statearr_46762_46812[(1)] = (8));

} else {
var statearr_46763_46813 = state_46760__$1;
(statearr_46763_46813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (20))){
var inst_46754 = (state_46760[(2)]);
var state_46760__$1 = state_46760;
var statearr_46764_46814 = state_46760__$1;
(statearr_46764_46814[(2)] = inst_46754);

(statearr_46764_46814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (27))){
var inst_46750 = (state_46760[(2)]);
var state_46760__$1 = state_46760;
var statearr_46765_46815 = state_46760__$1;
(statearr_46765_46815[(2)] = inst_46750);

(statearr_46765_46815[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (1))){
var inst_46673 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_46760__$1 = state_46760;
if(cljs.core.truth_(inst_46673)){
var statearr_46766_46816 = state_46760__$1;
(statearr_46766_46816[(1)] = (2));

} else {
var statearr_46767_46817 = state_46760__$1;
(statearr_46767_46817[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (24))){
var inst_46752 = (state_46760[(2)]);
var state_46760__$1 = state_46760;
var statearr_46768_46818 = state_46760__$1;
(statearr_46768_46818[(2)] = inst_46752);

(statearr_46768_46818[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (4))){
var inst_46758 = (state_46760[(2)]);
var state_46760__$1 = state_46760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46760__$1,inst_46758);
} else {
if((state_val_46761 === (15))){
var inst_46756 = (state_46760[(2)]);
var state_46760__$1 = state_46760;
var statearr_46769_46819 = state_46760__$1;
(statearr_46769_46819[(2)] = inst_46756);

(statearr_46769_46819[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (21))){
var inst_46709 = (state_46760[(2)]);
var inst_46710 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46711 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46710);
var state_46760__$1 = (function (){var statearr_46770 = state_46760;
(statearr_46770[(7)] = inst_46709);

return statearr_46770;
})();
var statearr_46771_46820 = state_46760__$1;
(statearr_46771_46820[(2)] = inst_46711);

(statearr_46771_46820[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (31))){
var inst_46739 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_46760__$1 = state_46760;
if(cljs.core.truth_(inst_46739)){
var statearr_46772_46821 = state_46760__$1;
(statearr_46772_46821[(1)] = (34));

} else {
var statearr_46773_46822 = state_46760__$1;
(statearr_46773_46822[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (32))){
var inst_46748 = (state_46760[(2)]);
var state_46760__$1 = state_46760;
var statearr_46774_46823 = state_46760__$1;
(statearr_46774_46823[(2)] = inst_46748);

(statearr_46774_46823[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (33))){
var inst_46735 = (state_46760[(2)]);
var inst_46736 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46737 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46736);
var state_46760__$1 = (function (){var statearr_46775 = state_46760;
(statearr_46775[(8)] = inst_46735);

return statearr_46775;
})();
var statearr_46776_46824 = state_46760__$1;
(statearr_46776_46824[(2)] = inst_46737);

(statearr_46776_46824[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (13))){
var inst_46694 = figwheel.client.heads_up.clear.call(null);
var state_46760__$1 = state_46760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46760__$1,(16),inst_46694);
} else {
if((state_val_46761 === (22))){
var inst_46715 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46716 = figwheel.client.heads_up.append_warning_message.call(null,inst_46715);
var state_46760__$1 = state_46760;
var statearr_46777_46825 = state_46760__$1;
(statearr_46777_46825[(2)] = inst_46716);

(statearr_46777_46825[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (36))){
var inst_46746 = (state_46760[(2)]);
var state_46760__$1 = state_46760;
var statearr_46778_46826 = state_46760__$1;
(statearr_46778_46826[(2)] = inst_46746);

(statearr_46778_46826[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (29))){
var inst_46726 = (state_46760[(2)]);
var inst_46727 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46728 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46727);
var state_46760__$1 = (function (){var statearr_46779 = state_46760;
(statearr_46779[(9)] = inst_46726);

return statearr_46779;
})();
var statearr_46780_46827 = state_46760__$1;
(statearr_46780_46827[(2)] = inst_46728);

(statearr_46780_46827[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (6))){
var inst_46675 = (state_46760[(10)]);
var state_46760__$1 = state_46760;
var statearr_46781_46828 = state_46760__$1;
(statearr_46781_46828[(2)] = inst_46675);

(statearr_46781_46828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (28))){
var inst_46722 = (state_46760[(2)]);
var inst_46723 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46724 = figwheel.client.heads_up.display_warning.call(null,inst_46723);
var state_46760__$1 = (function (){var statearr_46782 = state_46760;
(statearr_46782[(11)] = inst_46722);

return statearr_46782;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46760__$1,(29),inst_46724);
} else {
if((state_val_46761 === (25))){
var inst_46720 = figwheel.client.heads_up.clear.call(null);
var state_46760__$1 = state_46760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46760__$1,(28),inst_46720);
} else {
if((state_val_46761 === (34))){
var inst_46741 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46760__$1 = state_46760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46760__$1,(37),inst_46741);
} else {
if((state_val_46761 === (17))){
var inst_46700 = (state_46760[(2)]);
var inst_46701 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46702 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46701);
var state_46760__$1 = (function (){var statearr_46783 = state_46760;
(statearr_46783[(12)] = inst_46700);

return statearr_46783;
})();
var statearr_46784_46829 = state_46760__$1;
(statearr_46784_46829[(2)] = inst_46702);

(statearr_46784_46829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (3))){
var inst_46692 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_46760__$1 = state_46760;
if(cljs.core.truth_(inst_46692)){
var statearr_46785_46830 = state_46760__$1;
(statearr_46785_46830[(1)] = (13));

} else {
var statearr_46786_46831 = state_46760__$1;
(statearr_46786_46831[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (12))){
var inst_46688 = (state_46760[(2)]);
var state_46760__$1 = state_46760;
var statearr_46787_46832 = state_46760__$1;
(statearr_46787_46832[(2)] = inst_46688);

(statearr_46787_46832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (2))){
var inst_46675 = (state_46760[(10)]);
var inst_46675__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_46760__$1 = (function (){var statearr_46788 = state_46760;
(statearr_46788[(10)] = inst_46675__$1);

return statearr_46788;
})();
if(cljs.core.truth_(inst_46675__$1)){
var statearr_46789_46833 = state_46760__$1;
(statearr_46789_46833[(1)] = (5));

} else {
var statearr_46790_46834 = state_46760__$1;
(statearr_46790_46834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (23))){
var inst_46718 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_46760__$1 = state_46760;
if(cljs.core.truth_(inst_46718)){
var statearr_46791_46835 = state_46760__$1;
(statearr_46791_46835[(1)] = (25));

} else {
var statearr_46792_46836 = state_46760__$1;
(statearr_46792_46836[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (35))){
var state_46760__$1 = state_46760;
var statearr_46793_46837 = state_46760__$1;
(statearr_46793_46837[(2)] = null);

(statearr_46793_46837[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (19))){
var inst_46713 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_46760__$1 = state_46760;
if(cljs.core.truth_(inst_46713)){
var statearr_46794_46838 = state_46760__$1;
(statearr_46794_46838[(1)] = (22));

} else {
var statearr_46795_46839 = state_46760__$1;
(statearr_46795_46839[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (11))){
var inst_46684 = (state_46760[(2)]);
var state_46760__$1 = state_46760;
var statearr_46796_46840 = state_46760__$1;
(statearr_46796_46840[(2)] = inst_46684);

(statearr_46796_46840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (9))){
var inst_46686 = figwheel.client.heads_up.clear.call(null);
var state_46760__$1 = state_46760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46760__$1,(12),inst_46686);
} else {
if((state_val_46761 === (5))){
var inst_46677 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_46760__$1 = state_46760;
var statearr_46797_46841 = state_46760__$1;
(statearr_46797_46841[(2)] = inst_46677);

(statearr_46797_46841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (14))){
var inst_46704 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_46760__$1 = state_46760;
if(cljs.core.truth_(inst_46704)){
var statearr_46798_46842 = state_46760__$1;
(statearr_46798_46842[(1)] = (18));

} else {
var statearr_46799_46843 = state_46760__$1;
(statearr_46799_46843[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (26))){
var inst_46730 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_46760__$1 = state_46760;
if(cljs.core.truth_(inst_46730)){
var statearr_46800_46844 = state_46760__$1;
(statearr_46800_46844[(1)] = (30));

} else {
var statearr_46801_46845 = state_46760__$1;
(statearr_46801_46845[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (16))){
var inst_46696 = (state_46760[(2)]);
var inst_46697 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46698 = figwheel.client.heads_up.display_exception.call(null,inst_46697);
var state_46760__$1 = (function (){var statearr_46802 = state_46760;
(statearr_46802[(13)] = inst_46696);

return statearr_46802;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46760__$1,(17),inst_46698);
} else {
if((state_val_46761 === (30))){
var inst_46732 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46733 = figwheel.client.heads_up.display_warning.call(null,inst_46732);
var state_46760__$1 = state_46760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46760__$1,(33),inst_46733);
} else {
if((state_val_46761 === (10))){
var inst_46690 = (state_46760[(2)]);
var state_46760__$1 = state_46760;
var statearr_46803_46846 = state_46760__$1;
(statearr_46803_46846[(2)] = inst_46690);

(statearr_46803_46846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (18))){
var inst_46706 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46707 = figwheel.client.heads_up.display_exception.call(null,inst_46706);
var state_46760__$1 = state_46760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46760__$1,(21),inst_46707);
} else {
if((state_val_46761 === (37))){
var inst_46743 = (state_46760[(2)]);
var state_46760__$1 = state_46760;
var statearr_46804_46847 = state_46760__$1;
(statearr_46804_46847[(2)] = inst_46743);

(statearr_46804_46847[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46761 === (8))){
var inst_46682 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46760__$1 = state_46760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46760__$1,(11),inst_46682);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31753__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31732__auto__,c__31753__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31733__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31733__auto____0 = (function (){
var statearr_46808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46808[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31733__auto__);

(statearr_46808[(1)] = (1));

return statearr_46808;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31733__auto____1 = (function (state_46760){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_46760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e46809){if((e46809 instanceof Object)){
var ex__31736__auto__ = e46809;
var statearr_46810_46848 = state_46760;
(statearr_46810_46848[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46849 = state_46760;
state_46760 = G__46849;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31733__auto__ = function(state_46760){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31733__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31733__auto____1.call(this,state_46760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31733__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31733__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto__,msg_hist,msg_names,msg))
})();
var state__31755__auto__ = (function (){var statearr_46811 = f__31754__auto__.call(null);
(statearr_46811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto__);

return statearr_46811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto__,msg_hist,msg_names,msg))
);

return c__31753__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31753__auto___46912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto___46912,ch){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto___46912,ch){
return (function (state_46895){
var state_val_46896 = (state_46895[(1)]);
if((state_val_46896 === (1))){
var state_46895__$1 = state_46895;
var statearr_46897_46913 = state_46895__$1;
(statearr_46897_46913[(2)] = null);

(statearr_46897_46913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (2))){
var state_46895__$1 = state_46895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46895__$1,(4),ch);
} else {
if((state_val_46896 === (3))){
var inst_46893 = (state_46895[(2)]);
var state_46895__$1 = state_46895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46895__$1,inst_46893);
} else {
if((state_val_46896 === (4))){
var inst_46883 = (state_46895[(7)]);
var inst_46883__$1 = (state_46895[(2)]);
var state_46895__$1 = (function (){var statearr_46898 = state_46895;
(statearr_46898[(7)] = inst_46883__$1);

return statearr_46898;
})();
if(cljs.core.truth_(inst_46883__$1)){
var statearr_46899_46914 = state_46895__$1;
(statearr_46899_46914[(1)] = (5));

} else {
var statearr_46900_46915 = state_46895__$1;
(statearr_46900_46915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (5))){
var inst_46883 = (state_46895[(7)]);
var inst_46885 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_46883);
var state_46895__$1 = state_46895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46895__$1,(8),inst_46885);
} else {
if((state_val_46896 === (6))){
var state_46895__$1 = state_46895;
var statearr_46901_46916 = state_46895__$1;
(statearr_46901_46916[(2)] = null);

(statearr_46901_46916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (7))){
var inst_46891 = (state_46895[(2)]);
var state_46895__$1 = state_46895;
var statearr_46902_46917 = state_46895__$1;
(statearr_46902_46917[(2)] = inst_46891);

(statearr_46902_46917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46896 === (8))){
var inst_46887 = (state_46895[(2)]);
var state_46895__$1 = (function (){var statearr_46903 = state_46895;
(statearr_46903[(8)] = inst_46887);

return statearr_46903;
})();
var statearr_46904_46918 = state_46895__$1;
(statearr_46904_46918[(2)] = null);

(statearr_46904_46918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__31753__auto___46912,ch))
;
return ((function (switch__31732__auto__,c__31753__auto___46912,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31733__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31733__auto____0 = (function (){
var statearr_46908 = [null,null,null,null,null,null,null,null,null];
(statearr_46908[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31733__auto__);

(statearr_46908[(1)] = (1));

return statearr_46908;
});
var figwheel$client$heads_up_plugin_$_state_machine__31733__auto____1 = (function (state_46895){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_46895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e46909){if((e46909 instanceof Object)){
var ex__31736__auto__ = e46909;
var statearr_46910_46919 = state_46895;
(statearr_46910_46919[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46920 = state_46895;
state_46895 = G__46920;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31733__auto__ = function(state_46895){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31733__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31733__auto____1.call(this,state_46895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31733__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31733__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto___46912,ch))
})();
var state__31755__auto__ = (function (){var statearr_46911 = f__31754__auto__.call(null);
(statearr_46911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto___46912);

return statearr_46911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto___46912,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31753__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto__){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto__){
return (function (state_46941){
var state_val_46942 = (state_46941[(1)]);
if((state_val_46942 === (1))){
var inst_46936 = cljs.core.async.timeout.call(null,(3000));
var state_46941__$1 = state_46941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46941__$1,(2),inst_46936);
} else {
if((state_val_46942 === (2))){
var inst_46938 = (state_46941[(2)]);
var inst_46939 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_46941__$1 = (function (){var statearr_46943 = state_46941;
(statearr_46943[(7)] = inst_46938);

return statearr_46943;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46941__$1,inst_46939);
} else {
return null;
}
}
});})(c__31753__auto__))
;
return ((function (switch__31732__auto__,c__31753__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31733__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31733__auto____0 = (function (){
var statearr_46947 = [null,null,null,null,null,null,null,null];
(statearr_46947[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31733__auto__);

(statearr_46947[(1)] = (1));

return statearr_46947;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31733__auto____1 = (function (state_46941){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_46941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e46948){if((e46948 instanceof Object)){
var ex__31736__auto__ = e46948;
var statearr_46949_46951 = state_46941;
(statearr_46949_46951[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46952 = state_46941;
state_46941 = G__46952;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31733__auto__ = function(state_46941){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31733__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31733__auto____1.call(this,state_46941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31733__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31733__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto__))
})();
var state__31755__auto__ = (function (){var statearr_46950 = f__31754__auto__.call(null);
(statearr_46950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto__);

return statearr_46950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto__))
);

return c__31753__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31753__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31753__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__31754__auto__ = (function (){var switch__31732__auto__ = ((function (c__31753__auto__,figwheel_version,temp__4657__auto__){
return (function (state_46975){
var state_val_46976 = (state_46975[(1)]);
if((state_val_46976 === (1))){
var inst_46969 = cljs.core.async.timeout.call(null,(2000));
var state_46975__$1 = state_46975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46975__$1,(2),inst_46969);
} else {
if((state_val_46976 === (2))){
var inst_46971 = (state_46975[(2)]);
var inst_46972 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_46973 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_46972);
var state_46975__$1 = (function (){var statearr_46977 = state_46975;
(statearr_46977[(7)] = inst_46971);

return statearr_46977;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46975__$1,inst_46973);
} else {
return null;
}
}
});})(c__31753__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__31732__auto__,c__31753__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31733__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31733__auto____0 = (function (){
var statearr_46981 = [null,null,null,null,null,null,null,null];
(statearr_46981[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31733__auto__);

(statearr_46981[(1)] = (1));

return statearr_46981;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31733__auto____1 = (function (state_46975){
while(true){
var ret_value__31734__auto__ = (function (){try{while(true){
var result__31735__auto__ = switch__31732__auto__.call(null,state_46975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31735__auto__;
}
break;
}
}catch (e46982){if((e46982 instanceof Object)){
var ex__31736__auto__ = e46982;
var statearr_46983_46985 = state_46975;
(statearr_46983_46985[(5)] = ex__31736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46986 = state_46975;
state_46975 = G__46986;
continue;
} else {
return ret_value__31734__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31733__auto__ = function(state_46975){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31733__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31733__auto____1.call(this,state_46975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31733__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31733__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31733__auto__;
})()
;})(switch__31732__auto__,c__31753__auto__,figwheel_version,temp__4657__auto__))
})();
var state__31755__auto__ = (function (){var statearr_46984 = f__31754__auto__.call(null);
(statearr_46984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31753__auto__);

return statearr_46984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31755__auto__);
});})(c__31753__auto__,figwheel_version,temp__4657__auto__))
);

return c__31753__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__46987){
var map__46991 = p__46987;
var map__46991__$1 = ((((!((map__46991 == null)))?((((map__46991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46991):map__46991);
var file = cljs.core.get.call(null,map__46991__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__46991__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__46991__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__46993 = "";
var G__46993__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__46993),cljs.core.str("file "),cljs.core.str(file)].join(''):G__46993);
var G__46993__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__46993__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__46993__$1);
if(cljs.core.truth_((function (){var and__25034__auto__ = line;
if(cljs.core.truth_(and__25034__auto__)){
return column;
} else {
return and__25034__auto__;
}
})())){
return [cljs.core.str(G__46993__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__46993__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__46994){
var map__47001 = p__46994;
var map__47001__$1 = ((((!((map__47001 == null)))?((((map__47001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47001):map__47001);
var ed = map__47001__$1;
var formatted_exception = cljs.core.get.call(null,map__47001__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__47001__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__47001__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__47003_47007 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__47004_47008 = null;
var count__47005_47009 = (0);
var i__47006_47010 = (0);
while(true){
if((i__47006_47010 < count__47005_47009)){
var msg_47011 = cljs.core._nth.call(null,chunk__47004_47008,i__47006_47010);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_47011);

var G__47012 = seq__47003_47007;
var G__47013 = chunk__47004_47008;
var G__47014 = count__47005_47009;
var G__47015 = (i__47006_47010 + (1));
seq__47003_47007 = G__47012;
chunk__47004_47008 = G__47013;
count__47005_47009 = G__47014;
i__47006_47010 = G__47015;
continue;
} else {
var temp__4657__auto___47016 = cljs.core.seq.call(null,seq__47003_47007);
if(temp__4657__auto___47016){
var seq__47003_47017__$1 = temp__4657__auto___47016;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47003_47017__$1)){
var c__25857__auto___47018 = cljs.core.chunk_first.call(null,seq__47003_47017__$1);
var G__47019 = cljs.core.chunk_rest.call(null,seq__47003_47017__$1);
var G__47020 = c__25857__auto___47018;
var G__47021 = cljs.core.count.call(null,c__25857__auto___47018);
var G__47022 = (0);
seq__47003_47007 = G__47019;
chunk__47004_47008 = G__47020;
count__47005_47009 = G__47021;
i__47006_47010 = G__47022;
continue;
} else {
var msg_47023 = cljs.core.first.call(null,seq__47003_47017__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_47023);

var G__47024 = cljs.core.next.call(null,seq__47003_47017__$1);
var G__47025 = null;
var G__47026 = (0);
var G__47027 = (0);
seq__47003_47007 = G__47024;
chunk__47004_47008 = G__47025;
count__47005_47009 = G__47026;
i__47006_47010 = G__47027;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__47028){
var map__47031 = p__47028;
var map__47031__$1 = ((((!((map__47031 == null)))?((((map__47031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47031):map__47031);
var w = map__47031__$1;
var message = cljs.core.get.call(null,map__47031__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25034__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25034__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25034__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__47043 = cljs.core.seq.call(null,plugins);
var chunk__47044 = null;
var count__47045 = (0);
var i__47046 = (0);
while(true){
if((i__47046 < count__47045)){
var vec__47047 = cljs.core._nth.call(null,chunk__47044,i__47046);
var k = cljs.core.nth.call(null,vec__47047,(0),null);
var plugin = cljs.core.nth.call(null,vec__47047,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47053 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__47043,chunk__47044,count__47045,i__47046,pl_47053,vec__47047,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_47053.call(null,msg_hist);
});})(seq__47043,chunk__47044,count__47045,i__47046,pl_47053,vec__47047,k,plugin))
);
} else {
}

var G__47054 = seq__47043;
var G__47055 = chunk__47044;
var G__47056 = count__47045;
var G__47057 = (i__47046 + (1));
seq__47043 = G__47054;
chunk__47044 = G__47055;
count__47045 = G__47056;
i__47046 = G__47057;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47043);
if(temp__4657__auto__){
var seq__47043__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47043__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__47043__$1);
var G__47058 = cljs.core.chunk_rest.call(null,seq__47043__$1);
var G__47059 = c__25857__auto__;
var G__47060 = cljs.core.count.call(null,c__25857__auto__);
var G__47061 = (0);
seq__47043 = G__47058;
chunk__47044 = G__47059;
count__47045 = G__47060;
i__47046 = G__47061;
continue;
} else {
var vec__47050 = cljs.core.first.call(null,seq__47043__$1);
var k = cljs.core.nth.call(null,vec__47050,(0),null);
var plugin = cljs.core.nth.call(null,vec__47050,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47062 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__47043,chunk__47044,count__47045,i__47046,pl_47062,vec__47050,k,plugin,seq__47043__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_47062.call(null,msg_hist);
});})(seq__47043,chunk__47044,count__47045,i__47046,pl_47062,vec__47050,k,plugin,seq__47043__$1,temp__4657__auto__))
);
} else {
}

var G__47063 = cljs.core.next.call(null,seq__47043__$1);
var G__47064 = null;
var G__47065 = (0);
var G__47066 = (0);
seq__47043 = G__47063;
chunk__47044 = G__47064;
count__47045 = G__47065;
i__47046 = G__47066;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args47067 = [];
var len__26121__auto___47074 = arguments.length;
var i__26122__auto___47075 = (0);
while(true){
if((i__26122__auto___47075 < len__26121__auto___47074)){
args47067.push((arguments[i__26122__auto___47075]));

var G__47076 = (i__26122__auto___47075 + (1));
i__26122__auto___47075 = G__47076;
continue;
} else {
}
break;
}

var G__47069 = args47067.length;
switch (G__47069) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47067.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__47070_47078 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__47071_47079 = null;
var count__47072_47080 = (0);
var i__47073_47081 = (0);
while(true){
if((i__47073_47081 < count__47072_47080)){
var msg_47082 = cljs.core._nth.call(null,chunk__47071_47079,i__47073_47081);
figwheel.client.socket.handle_incoming_message.call(null,msg_47082);

var G__47083 = seq__47070_47078;
var G__47084 = chunk__47071_47079;
var G__47085 = count__47072_47080;
var G__47086 = (i__47073_47081 + (1));
seq__47070_47078 = G__47083;
chunk__47071_47079 = G__47084;
count__47072_47080 = G__47085;
i__47073_47081 = G__47086;
continue;
} else {
var temp__4657__auto___47087 = cljs.core.seq.call(null,seq__47070_47078);
if(temp__4657__auto___47087){
var seq__47070_47088__$1 = temp__4657__auto___47087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47070_47088__$1)){
var c__25857__auto___47089 = cljs.core.chunk_first.call(null,seq__47070_47088__$1);
var G__47090 = cljs.core.chunk_rest.call(null,seq__47070_47088__$1);
var G__47091 = c__25857__auto___47089;
var G__47092 = cljs.core.count.call(null,c__25857__auto___47089);
var G__47093 = (0);
seq__47070_47078 = G__47090;
chunk__47071_47079 = G__47091;
count__47072_47080 = G__47092;
i__47073_47081 = G__47093;
continue;
} else {
var msg_47094 = cljs.core.first.call(null,seq__47070_47088__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_47094);

var G__47095 = cljs.core.next.call(null,seq__47070_47088__$1);
var G__47096 = null;
var G__47097 = (0);
var G__47098 = (0);
seq__47070_47078 = G__47095;
chunk__47071_47079 = G__47096;
count__47072_47080 = G__47097;
i__47073_47081 = G__47098;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26128__auto__ = [];
var len__26121__auto___47103 = arguments.length;
var i__26122__auto___47104 = (0);
while(true){
if((i__26122__auto___47104 < len__26121__auto___47103)){
args__26128__auto__.push((arguments[i__26122__auto___47104]));

var G__47105 = (i__26122__auto___47104 + (1));
i__26122__auto___47104 = G__47105;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__47100){
var map__47101 = p__47100;
var map__47101__$1 = ((((!((map__47101 == null)))?((((map__47101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47101):map__47101);
var opts = map__47101__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq47099){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47099));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e47107){if((e47107 instanceof Error)){
var e = e47107;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e47107;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__47111){
var map__47112 = p__47111;
var map__47112__$1 = ((((!((map__47112 == null)))?((((map__47112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47112):map__47112);
var msg_name = cljs.core.get.call(null,map__47112__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1484163021936
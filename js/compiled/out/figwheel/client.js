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
var args65248 = [];
var len__26121__auto___65251 = arguments.length;
var i__26122__auto___65252 = (0);
while(true){
if((i__26122__auto___65252 < len__26121__auto___65251)){
args65248.push((arguments[i__26122__auto___65252]));

var G__65253 = (i__26122__auto___65252 + (1));
i__26122__auto___65252 = G__65253;
continue;
} else {
}
break;
}

var G__65250 = args65248.length;
switch (G__65250) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65248.length)].join('')));

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
var len__26121__auto___65256 = arguments.length;
var i__26122__auto___65257 = (0);
while(true){
if((i__26122__auto___65257 < len__26121__auto___65256)){
args__26128__auto__.push((arguments[i__26122__auto___65257]));

var G__65258 = (i__26122__auto___65257 + (1));
i__26122__auto___65257 = G__65258;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq65255){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65255));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26128__auto__ = [];
var len__26121__auto___65260 = arguments.length;
var i__26122__auto___65261 = (0);
while(true){
if((i__26122__auto___65261 < len__26121__auto___65260)){
args__26128__auto__.push((arguments[i__26122__auto___65261]));

var G__65262 = (i__26122__auto___65261 + (1));
i__26122__auto___65261 = G__65262;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq65259){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65259));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__65263 = cljs.core._EQ_;
var expr__65264 = (function (){var or__25046__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e65267){if((e65267 instanceof Error)){
var e = e65267;
return false;
} else {
throw e65267;

}
}})();
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__65263.call(null,"true",expr__65264))){
return true;
} else {
if(cljs.core.truth_(pred__65263.call(null,"false",expr__65264))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__65264)].join('')));
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
}catch (e65269){if((e65269 instanceof Error)){
var e = e65269;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e65269;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__65270){
var map__65273 = p__65270;
var map__65273__$1 = ((((!((map__65273 == null)))?((((map__65273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65273):map__65273);
var message = cljs.core.get.call(null,map__65273__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__65273__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__33352__auto___65435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___65435,ch){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___65435,ch){
return (function (state_65404){
var state_val_65405 = (state_65404[(1)]);
if((state_val_65405 === (7))){
var inst_65400 = (state_65404[(2)]);
var state_65404__$1 = state_65404;
var statearr_65406_65436 = state_65404__$1;
(statearr_65406_65436[(2)] = inst_65400);

(statearr_65406_65436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65405 === (1))){
var state_65404__$1 = state_65404;
var statearr_65407_65437 = state_65404__$1;
(statearr_65407_65437[(2)] = null);

(statearr_65407_65437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65405 === (4))){
var inst_65357 = (state_65404[(7)]);
var inst_65357__$1 = (state_65404[(2)]);
var state_65404__$1 = (function (){var statearr_65408 = state_65404;
(statearr_65408[(7)] = inst_65357__$1);

return statearr_65408;
})();
if(cljs.core.truth_(inst_65357__$1)){
var statearr_65409_65438 = state_65404__$1;
(statearr_65409_65438[(1)] = (5));

} else {
var statearr_65410_65439 = state_65404__$1;
(statearr_65410_65439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65405 === (15))){
var inst_65364 = (state_65404[(8)]);
var inst_65379 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_65364);
var inst_65380 = cljs.core.first.call(null,inst_65379);
var inst_65381 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_65380);
var inst_65382 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_65381)].join('');
var inst_65383 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_65382);
var state_65404__$1 = state_65404;
var statearr_65411_65440 = state_65404__$1;
(statearr_65411_65440[(2)] = inst_65383);

(statearr_65411_65440[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65405 === (13))){
var inst_65388 = (state_65404[(2)]);
var state_65404__$1 = state_65404;
var statearr_65412_65441 = state_65404__$1;
(statearr_65412_65441[(2)] = inst_65388);

(statearr_65412_65441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65405 === (6))){
var state_65404__$1 = state_65404;
var statearr_65413_65442 = state_65404__$1;
(statearr_65413_65442[(2)] = null);

(statearr_65413_65442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65405 === (17))){
var inst_65386 = (state_65404[(2)]);
var state_65404__$1 = state_65404;
var statearr_65414_65443 = state_65404__$1;
(statearr_65414_65443[(2)] = inst_65386);

(statearr_65414_65443[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65405 === (3))){
var inst_65402 = (state_65404[(2)]);
var state_65404__$1 = state_65404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65404__$1,inst_65402);
} else {
if((state_val_65405 === (12))){
var inst_65363 = (state_65404[(9)]);
var inst_65377 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_65363,opts);
var state_65404__$1 = state_65404;
if(cljs.core.truth_(inst_65377)){
var statearr_65415_65444 = state_65404__$1;
(statearr_65415_65444[(1)] = (15));

} else {
var statearr_65416_65445 = state_65404__$1;
(statearr_65416_65445[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65405 === (2))){
var state_65404__$1 = state_65404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65404__$1,(4),ch);
} else {
if((state_val_65405 === (11))){
var inst_65364 = (state_65404[(8)]);
var inst_65369 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65370 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_65364);
var inst_65371 = cljs.core.async.timeout.call(null,(1000));
var inst_65372 = [inst_65370,inst_65371];
var inst_65373 = (new cljs.core.PersistentVector(null,2,(5),inst_65369,inst_65372,null));
var state_65404__$1 = state_65404;
return cljs.core.async.ioc_alts_BANG_.call(null,state_65404__$1,(14),inst_65373);
} else {
if((state_val_65405 === (9))){
var inst_65364 = (state_65404[(8)]);
var inst_65390 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_65391 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_65364);
var inst_65392 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_65391);
var inst_65393 = [cljs.core.str("Not loading: "),cljs.core.str(inst_65392)].join('');
var inst_65394 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_65393);
var state_65404__$1 = (function (){var statearr_65417 = state_65404;
(statearr_65417[(10)] = inst_65390);

return statearr_65417;
})();
var statearr_65418_65446 = state_65404__$1;
(statearr_65418_65446[(2)] = inst_65394);

(statearr_65418_65446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65405 === (5))){
var inst_65357 = (state_65404[(7)]);
var inst_65359 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_65360 = (new cljs.core.PersistentArrayMap(null,2,inst_65359,null));
var inst_65361 = (new cljs.core.PersistentHashSet(null,inst_65360,null));
var inst_65362 = figwheel.client.focus_msgs.call(null,inst_65361,inst_65357);
var inst_65363 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_65362);
var inst_65364 = cljs.core.first.call(null,inst_65362);
var inst_65365 = figwheel.client.autoload_QMARK_.call(null);
var state_65404__$1 = (function (){var statearr_65419 = state_65404;
(statearr_65419[(9)] = inst_65363);

(statearr_65419[(8)] = inst_65364);

return statearr_65419;
})();
if(cljs.core.truth_(inst_65365)){
var statearr_65420_65447 = state_65404__$1;
(statearr_65420_65447[(1)] = (8));

} else {
var statearr_65421_65448 = state_65404__$1;
(statearr_65421_65448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65405 === (14))){
var inst_65375 = (state_65404[(2)]);
var state_65404__$1 = state_65404;
var statearr_65422_65449 = state_65404__$1;
(statearr_65422_65449[(2)] = inst_65375);

(statearr_65422_65449[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65405 === (16))){
var state_65404__$1 = state_65404;
var statearr_65423_65450 = state_65404__$1;
(statearr_65423_65450[(2)] = null);

(statearr_65423_65450[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65405 === (10))){
var inst_65396 = (state_65404[(2)]);
var state_65404__$1 = (function (){var statearr_65424 = state_65404;
(statearr_65424[(11)] = inst_65396);

return statearr_65424;
})();
var statearr_65425_65451 = state_65404__$1;
(statearr_65425_65451[(2)] = null);

(statearr_65425_65451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65405 === (8))){
var inst_65363 = (state_65404[(9)]);
var inst_65367 = figwheel.client.reload_file_state_QMARK_.call(null,inst_65363,opts);
var state_65404__$1 = state_65404;
if(cljs.core.truth_(inst_65367)){
var statearr_65426_65452 = state_65404__$1;
(statearr_65426_65452[(1)] = (11));

} else {
var statearr_65427_65453 = state_65404__$1;
(statearr_65427_65453[(1)] = (12));

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
});})(c__33352__auto___65435,ch))
;
return ((function (switch__33287__auto__,c__33352__auto___65435,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33288__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33288__auto____0 = (function (){
var statearr_65431 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65431[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33288__auto__);

(statearr_65431[(1)] = (1));

return statearr_65431;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33288__auto____1 = (function (state_65404){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_65404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e65432){if((e65432 instanceof Object)){
var ex__33291__auto__ = e65432;
var statearr_65433_65454 = state_65404;
(statearr_65433_65454[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65455 = state_65404;
state_65404 = G__65455;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33288__auto__ = function(state_65404){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33288__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33288__auto____1.call(this,state_65404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33288__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33288__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___65435,ch))
})();
var state__33354__auto__ = (function (){var statearr_65434 = f__33353__auto__.call(null);
(statearr_65434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___65435);

return statearr_65434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___65435,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__65456_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__65456_SHARP_));
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
var base_path_65459 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_65459){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e65458){if((e65458 instanceof Error)){
var e = e65458;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_65459], null));
} else {
var e = e65458;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_65459))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__65460){
var map__65469 = p__65460;
var map__65469__$1 = ((((!((map__65469 == null)))?((((map__65469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65469):map__65469);
var opts = map__65469__$1;
var build_id = cljs.core.get.call(null,map__65469__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__65469,map__65469__$1,opts,build_id){
return (function (p__65471){
var vec__65472 = p__65471;
var seq__65473 = cljs.core.seq.call(null,vec__65472);
var first__65474 = cljs.core.first.call(null,seq__65473);
var seq__65473__$1 = cljs.core.next.call(null,seq__65473);
var map__65475 = first__65474;
var map__65475__$1 = ((((!((map__65475 == null)))?((((map__65475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65475):map__65475);
var msg = map__65475__$1;
var msg_name = cljs.core.get.call(null,map__65475__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__65473__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__65472,seq__65473,first__65474,seq__65473__$1,map__65475,map__65475__$1,msg,msg_name,_,map__65469,map__65469__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__65472,seq__65473,first__65474,seq__65473__$1,map__65475,map__65475__$1,msg,msg_name,_,map__65469,map__65469__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__65469,map__65469__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__65483){
var vec__65484 = p__65483;
var seq__65485 = cljs.core.seq.call(null,vec__65484);
var first__65486 = cljs.core.first.call(null,seq__65485);
var seq__65485__$1 = cljs.core.next.call(null,seq__65485);
var map__65487 = first__65486;
var map__65487__$1 = ((((!((map__65487 == null)))?((((map__65487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65487):map__65487);
var msg = map__65487__$1;
var msg_name = cljs.core.get.call(null,map__65487__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__65485__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__65489){
var map__65501 = p__65489;
var map__65501__$1 = ((((!((map__65501 == null)))?((((map__65501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65501):map__65501);
var on_compile_warning = cljs.core.get.call(null,map__65501__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__65501__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__65501,map__65501__$1,on_compile_warning,on_compile_fail){
return (function (p__65503){
var vec__65504 = p__65503;
var seq__65505 = cljs.core.seq.call(null,vec__65504);
var first__65506 = cljs.core.first.call(null,seq__65505);
var seq__65505__$1 = cljs.core.next.call(null,seq__65505);
var map__65507 = first__65506;
var map__65507__$1 = ((((!((map__65507 == null)))?((((map__65507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65507):map__65507);
var msg = map__65507__$1;
var msg_name = cljs.core.get.call(null,map__65507__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__65505__$1;
var pred__65509 = cljs.core._EQ_;
var expr__65510 = msg_name;
if(cljs.core.truth_(pred__65509.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__65510))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__65509.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__65510))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__65501,map__65501__$1,on_compile_warning,on_compile_fail))
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
var c__33352__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto__,msg_hist,msg_names,msg){
return (function (state_65738){
var state_val_65739 = (state_65738[(1)]);
if((state_val_65739 === (7))){
var inst_65658 = (state_65738[(2)]);
var state_65738__$1 = state_65738;
if(cljs.core.truth_(inst_65658)){
var statearr_65740_65790 = state_65738__$1;
(statearr_65740_65790[(1)] = (8));

} else {
var statearr_65741_65791 = state_65738__$1;
(statearr_65741_65791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (20))){
var inst_65732 = (state_65738[(2)]);
var state_65738__$1 = state_65738;
var statearr_65742_65792 = state_65738__$1;
(statearr_65742_65792[(2)] = inst_65732);

(statearr_65742_65792[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (27))){
var inst_65728 = (state_65738[(2)]);
var state_65738__$1 = state_65738;
var statearr_65743_65793 = state_65738__$1;
(statearr_65743_65793[(2)] = inst_65728);

(statearr_65743_65793[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (1))){
var inst_65651 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_65738__$1 = state_65738;
if(cljs.core.truth_(inst_65651)){
var statearr_65744_65794 = state_65738__$1;
(statearr_65744_65794[(1)] = (2));

} else {
var statearr_65745_65795 = state_65738__$1;
(statearr_65745_65795[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (24))){
var inst_65730 = (state_65738[(2)]);
var state_65738__$1 = state_65738;
var statearr_65746_65796 = state_65738__$1;
(statearr_65746_65796[(2)] = inst_65730);

(statearr_65746_65796[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (4))){
var inst_65736 = (state_65738[(2)]);
var state_65738__$1 = state_65738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65738__$1,inst_65736);
} else {
if((state_val_65739 === (15))){
var inst_65734 = (state_65738[(2)]);
var state_65738__$1 = state_65738;
var statearr_65747_65797 = state_65738__$1;
(statearr_65747_65797[(2)] = inst_65734);

(statearr_65747_65797[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (21))){
var inst_65687 = (state_65738[(2)]);
var inst_65688 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65689 = figwheel.client.auto_jump_to_error.call(null,opts,inst_65688);
var state_65738__$1 = (function (){var statearr_65748 = state_65738;
(statearr_65748[(7)] = inst_65687);

return statearr_65748;
})();
var statearr_65749_65798 = state_65738__$1;
(statearr_65749_65798[(2)] = inst_65689);

(statearr_65749_65798[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (31))){
var inst_65717 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_65738__$1 = state_65738;
if(cljs.core.truth_(inst_65717)){
var statearr_65750_65799 = state_65738__$1;
(statearr_65750_65799[(1)] = (34));

} else {
var statearr_65751_65800 = state_65738__$1;
(statearr_65751_65800[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (32))){
var inst_65726 = (state_65738[(2)]);
var state_65738__$1 = state_65738;
var statearr_65752_65801 = state_65738__$1;
(statearr_65752_65801[(2)] = inst_65726);

(statearr_65752_65801[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (33))){
var inst_65713 = (state_65738[(2)]);
var inst_65714 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65715 = figwheel.client.auto_jump_to_error.call(null,opts,inst_65714);
var state_65738__$1 = (function (){var statearr_65753 = state_65738;
(statearr_65753[(8)] = inst_65713);

return statearr_65753;
})();
var statearr_65754_65802 = state_65738__$1;
(statearr_65754_65802[(2)] = inst_65715);

(statearr_65754_65802[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (13))){
var inst_65672 = figwheel.client.heads_up.clear.call(null);
var state_65738__$1 = state_65738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65738__$1,(16),inst_65672);
} else {
if((state_val_65739 === (22))){
var inst_65693 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65694 = figwheel.client.heads_up.append_warning_message.call(null,inst_65693);
var state_65738__$1 = state_65738;
var statearr_65755_65803 = state_65738__$1;
(statearr_65755_65803[(2)] = inst_65694);

(statearr_65755_65803[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (36))){
var inst_65724 = (state_65738[(2)]);
var state_65738__$1 = state_65738;
var statearr_65756_65804 = state_65738__$1;
(statearr_65756_65804[(2)] = inst_65724);

(statearr_65756_65804[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (29))){
var inst_65704 = (state_65738[(2)]);
var inst_65705 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65706 = figwheel.client.auto_jump_to_error.call(null,opts,inst_65705);
var state_65738__$1 = (function (){var statearr_65757 = state_65738;
(statearr_65757[(9)] = inst_65704);

return statearr_65757;
})();
var statearr_65758_65805 = state_65738__$1;
(statearr_65758_65805[(2)] = inst_65706);

(statearr_65758_65805[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (6))){
var inst_65653 = (state_65738[(10)]);
var state_65738__$1 = state_65738;
var statearr_65759_65806 = state_65738__$1;
(statearr_65759_65806[(2)] = inst_65653);

(statearr_65759_65806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (28))){
var inst_65700 = (state_65738[(2)]);
var inst_65701 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65702 = figwheel.client.heads_up.display_warning.call(null,inst_65701);
var state_65738__$1 = (function (){var statearr_65760 = state_65738;
(statearr_65760[(11)] = inst_65700);

return statearr_65760;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65738__$1,(29),inst_65702);
} else {
if((state_val_65739 === (25))){
var inst_65698 = figwheel.client.heads_up.clear.call(null);
var state_65738__$1 = state_65738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65738__$1,(28),inst_65698);
} else {
if((state_val_65739 === (34))){
var inst_65719 = figwheel.client.heads_up.flash_loaded.call(null);
var state_65738__$1 = state_65738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65738__$1,(37),inst_65719);
} else {
if((state_val_65739 === (17))){
var inst_65678 = (state_65738[(2)]);
var inst_65679 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65680 = figwheel.client.auto_jump_to_error.call(null,opts,inst_65679);
var state_65738__$1 = (function (){var statearr_65761 = state_65738;
(statearr_65761[(12)] = inst_65678);

return statearr_65761;
})();
var statearr_65762_65807 = state_65738__$1;
(statearr_65762_65807[(2)] = inst_65680);

(statearr_65762_65807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (3))){
var inst_65670 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_65738__$1 = state_65738;
if(cljs.core.truth_(inst_65670)){
var statearr_65763_65808 = state_65738__$1;
(statearr_65763_65808[(1)] = (13));

} else {
var statearr_65764_65809 = state_65738__$1;
(statearr_65764_65809[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (12))){
var inst_65666 = (state_65738[(2)]);
var state_65738__$1 = state_65738;
var statearr_65765_65810 = state_65738__$1;
(statearr_65765_65810[(2)] = inst_65666);

(statearr_65765_65810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (2))){
var inst_65653 = (state_65738[(10)]);
var inst_65653__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_65738__$1 = (function (){var statearr_65766 = state_65738;
(statearr_65766[(10)] = inst_65653__$1);

return statearr_65766;
})();
if(cljs.core.truth_(inst_65653__$1)){
var statearr_65767_65811 = state_65738__$1;
(statearr_65767_65811[(1)] = (5));

} else {
var statearr_65768_65812 = state_65738__$1;
(statearr_65768_65812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (23))){
var inst_65696 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_65738__$1 = state_65738;
if(cljs.core.truth_(inst_65696)){
var statearr_65769_65813 = state_65738__$1;
(statearr_65769_65813[(1)] = (25));

} else {
var statearr_65770_65814 = state_65738__$1;
(statearr_65770_65814[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (35))){
var state_65738__$1 = state_65738;
var statearr_65771_65815 = state_65738__$1;
(statearr_65771_65815[(2)] = null);

(statearr_65771_65815[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (19))){
var inst_65691 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_65738__$1 = state_65738;
if(cljs.core.truth_(inst_65691)){
var statearr_65772_65816 = state_65738__$1;
(statearr_65772_65816[(1)] = (22));

} else {
var statearr_65773_65817 = state_65738__$1;
(statearr_65773_65817[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (11))){
var inst_65662 = (state_65738[(2)]);
var state_65738__$1 = state_65738;
var statearr_65774_65818 = state_65738__$1;
(statearr_65774_65818[(2)] = inst_65662);

(statearr_65774_65818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (9))){
var inst_65664 = figwheel.client.heads_up.clear.call(null);
var state_65738__$1 = state_65738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65738__$1,(12),inst_65664);
} else {
if((state_val_65739 === (5))){
var inst_65655 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_65738__$1 = state_65738;
var statearr_65775_65819 = state_65738__$1;
(statearr_65775_65819[(2)] = inst_65655);

(statearr_65775_65819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (14))){
var inst_65682 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_65738__$1 = state_65738;
if(cljs.core.truth_(inst_65682)){
var statearr_65776_65820 = state_65738__$1;
(statearr_65776_65820[(1)] = (18));

} else {
var statearr_65777_65821 = state_65738__$1;
(statearr_65777_65821[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (26))){
var inst_65708 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_65738__$1 = state_65738;
if(cljs.core.truth_(inst_65708)){
var statearr_65778_65822 = state_65738__$1;
(statearr_65778_65822[(1)] = (30));

} else {
var statearr_65779_65823 = state_65738__$1;
(statearr_65779_65823[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (16))){
var inst_65674 = (state_65738[(2)]);
var inst_65675 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65676 = figwheel.client.heads_up.display_exception.call(null,inst_65675);
var state_65738__$1 = (function (){var statearr_65780 = state_65738;
(statearr_65780[(13)] = inst_65674);

return statearr_65780;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65738__$1,(17),inst_65676);
} else {
if((state_val_65739 === (30))){
var inst_65710 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65711 = figwheel.client.heads_up.display_warning.call(null,inst_65710);
var state_65738__$1 = state_65738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65738__$1,(33),inst_65711);
} else {
if((state_val_65739 === (10))){
var inst_65668 = (state_65738[(2)]);
var state_65738__$1 = state_65738;
var statearr_65781_65824 = state_65738__$1;
(statearr_65781_65824[(2)] = inst_65668);

(statearr_65781_65824[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (18))){
var inst_65684 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65685 = figwheel.client.heads_up.display_exception.call(null,inst_65684);
var state_65738__$1 = state_65738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65738__$1,(21),inst_65685);
} else {
if((state_val_65739 === (37))){
var inst_65721 = (state_65738[(2)]);
var state_65738__$1 = state_65738;
var statearr_65782_65825 = state_65738__$1;
(statearr_65782_65825[(2)] = inst_65721);

(statearr_65782_65825[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65739 === (8))){
var inst_65660 = figwheel.client.heads_up.flash_loaded.call(null);
var state_65738__$1 = state_65738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65738__$1,(11),inst_65660);
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
});})(c__33352__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33287__auto__,c__33352__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33288__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33288__auto____0 = (function (){
var statearr_65786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65786[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33288__auto__);

(statearr_65786[(1)] = (1));

return statearr_65786;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33288__auto____1 = (function (state_65738){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_65738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e65787){if((e65787 instanceof Object)){
var ex__33291__auto__ = e65787;
var statearr_65788_65826 = state_65738;
(statearr_65788_65826[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65827 = state_65738;
state_65738 = G__65827;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33288__auto__ = function(state_65738){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33288__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33288__auto____1.call(this,state_65738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33288__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33288__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__,msg_hist,msg_names,msg))
})();
var state__33354__auto__ = (function (){var statearr_65789 = f__33353__auto__.call(null);
(statearr_65789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_65789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto__,msg_hist,msg_names,msg))
);

return c__33352__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33352__auto___65890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___65890,ch){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___65890,ch){
return (function (state_65873){
var state_val_65874 = (state_65873[(1)]);
if((state_val_65874 === (1))){
var state_65873__$1 = state_65873;
var statearr_65875_65891 = state_65873__$1;
(statearr_65875_65891[(2)] = null);

(statearr_65875_65891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65874 === (2))){
var state_65873__$1 = state_65873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65873__$1,(4),ch);
} else {
if((state_val_65874 === (3))){
var inst_65871 = (state_65873[(2)]);
var state_65873__$1 = state_65873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65873__$1,inst_65871);
} else {
if((state_val_65874 === (4))){
var inst_65861 = (state_65873[(7)]);
var inst_65861__$1 = (state_65873[(2)]);
var state_65873__$1 = (function (){var statearr_65876 = state_65873;
(statearr_65876[(7)] = inst_65861__$1);

return statearr_65876;
})();
if(cljs.core.truth_(inst_65861__$1)){
var statearr_65877_65892 = state_65873__$1;
(statearr_65877_65892[(1)] = (5));

} else {
var statearr_65878_65893 = state_65873__$1;
(statearr_65878_65893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65874 === (5))){
var inst_65861 = (state_65873[(7)]);
var inst_65863 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_65861);
var state_65873__$1 = state_65873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65873__$1,(8),inst_65863);
} else {
if((state_val_65874 === (6))){
var state_65873__$1 = state_65873;
var statearr_65879_65894 = state_65873__$1;
(statearr_65879_65894[(2)] = null);

(statearr_65879_65894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65874 === (7))){
var inst_65869 = (state_65873[(2)]);
var state_65873__$1 = state_65873;
var statearr_65880_65895 = state_65873__$1;
(statearr_65880_65895[(2)] = inst_65869);

(statearr_65880_65895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65874 === (8))){
var inst_65865 = (state_65873[(2)]);
var state_65873__$1 = (function (){var statearr_65881 = state_65873;
(statearr_65881[(8)] = inst_65865);

return statearr_65881;
})();
var statearr_65882_65896 = state_65873__$1;
(statearr_65882_65896[(2)] = null);

(statearr_65882_65896[(1)] = (2));


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
});})(c__33352__auto___65890,ch))
;
return ((function (switch__33287__auto__,c__33352__auto___65890,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33288__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33288__auto____0 = (function (){
var statearr_65886 = [null,null,null,null,null,null,null,null,null];
(statearr_65886[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33288__auto__);

(statearr_65886[(1)] = (1));

return statearr_65886;
});
var figwheel$client$heads_up_plugin_$_state_machine__33288__auto____1 = (function (state_65873){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_65873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e65887){if((e65887 instanceof Object)){
var ex__33291__auto__ = e65887;
var statearr_65888_65897 = state_65873;
(statearr_65888_65897[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65898 = state_65873;
state_65873 = G__65898;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33288__auto__ = function(state_65873){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33288__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33288__auto____1.call(this,state_65873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33288__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33288__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___65890,ch))
})();
var state__33354__auto__ = (function (){var statearr_65889 = f__33353__auto__.call(null);
(statearr_65889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___65890);

return statearr_65889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___65890,ch))
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
var c__33352__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto__){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto__){
return (function (state_65919){
var state_val_65920 = (state_65919[(1)]);
if((state_val_65920 === (1))){
var inst_65914 = cljs.core.async.timeout.call(null,(3000));
var state_65919__$1 = state_65919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65919__$1,(2),inst_65914);
} else {
if((state_val_65920 === (2))){
var inst_65916 = (state_65919[(2)]);
var inst_65917 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_65919__$1 = (function (){var statearr_65921 = state_65919;
(statearr_65921[(7)] = inst_65916);

return statearr_65921;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65919__$1,inst_65917);
} else {
return null;
}
}
});})(c__33352__auto__))
;
return ((function (switch__33287__auto__,c__33352__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33288__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33288__auto____0 = (function (){
var statearr_65925 = [null,null,null,null,null,null,null,null];
(statearr_65925[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33288__auto__);

(statearr_65925[(1)] = (1));

return statearr_65925;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33288__auto____1 = (function (state_65919){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_65919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e65926){if((e65926 instanceof Object)){
var ex__33291__auto__ = e65926;
var statearr_65927_65929 = state_65919;
(statearr_65927_65929[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65930 = state_65919;
state_65919 = G__65930;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33288__auto__ = function(state_65919){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33288__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33288__auto____1.call(this,state_65919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33288__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33288__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__))
})();
var state__33354__auto__ = (function (){var statearr_65928 = f__33353__auto__.call(null);
(statearr_65928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_65928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto__))
);

return c__33352__auto__;
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
var c__33352__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto__,figwheel_version,temp__4657__auto__){
return (function (state_65953){
var state_val_65954 = (state_65953[(1)]);
if((state_val_65954 === (1))){
var inst_65947 = cljs.core.async.timeout.call(null,(2000));
var state_65953__$1 = state_65953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65953__$1,(2),inst_65947);
} else {
if((state_val_65954 === (2))){
var inst_65949 = (state_65953[(2)]);
var inst_65950 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_65951 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_65950);
var state_65953__$1 = (function (){var statearr_65955 = state_65953;
(statearr_65955[(7)] = inst_65949);

return statearr_65955;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65953__$1,inst_65951);
} else {
return null;
}
}
});})(c__33352__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__33287__auto__,c__33352__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33288__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33288__auto____0 = (function (){
var statearr_65959 = [null,null,null,null,null,null,null,null];
(statearr_65959[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33288__auto__);

(statearr_65959[(1)] = (1));

return statearr_65959;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33288__auto____1 = (function (state_65953){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_65953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e65960){if((e65960 instanceof Object)){
var ex__33291__auto__ = e65960;
var statearr_65961_65963 = state_65953;
(statearr_65961_65963[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65964 = state_65953;
state_65953 = G__65964;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33288__auto__ = function(state_65953){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33288__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33288__auto____1.call(this,state_65953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33288__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33288__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__,figwheel_version,temp__4657__auto__))
})();
var state__33354__auto__ = (function (){var statearr_65962 = f__33353__auto__.call(null);
(statearr_65962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_65962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto__,figwheel_version,temp__4657__auto__))
);

return c__33352__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__65965){
var map__65969 = p__65965;
var map__65969__$1 = ((((!((map__65969 == null)))?((((map__65969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65969):map__65969);
var file = cljs.core.get.call(null,map__65969__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__65969__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__65969__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__65971 = "";
var G__65971__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__65971),cljs.core.str("file "),cljs.core.str(file)].join(''):G__65971);
var G__65971__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__65971__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__65971__$1);
if(cljs.core.truth_((function (){var and__25034__auto__ = line;
if(cljs.core.truth_(and__25034__auto__)){
return column;
} else {
return and__25034__auto__;
}
})())){
return [cljs.core.str(G__65971__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__65971__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__65972){
var map__65979 = p__65972;
var map__65979__$1 = ((((!((map__65979 == null)))?((((map__65979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65979):map__65979);
var ed = map__65979__$1;
var formatted_exception = cljs.core.get.call(null,map__65979__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__65979__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__65979__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__65981_65985 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__65982_65986 = null;
var count__65983_65987 = (0);
var i__65984_65988 = (0);
while(true){
if((i__65984_65988 < count__65983_65987)){
var msg_65989 = cljs.core._nth.call(null,chunk__65982_65986,i__65984_65988);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_65989);

var G__65990 = seq__65981_65985;
var G__65991 = chunk__65982_65986;
var G__65992 = count__65983_65987;
var G__65993 = (i__65984_65988 + (1));
seq__65981_65985 = G__65990;
chunk__65982_65986 = G__65991;
count__65983_65987 = G__65992;
i__65984_65988 = G__65993;
continue;
} else {
var temp__4657__auto___65994 = cljs.core.seq.call(null,seq__65981_65985);
if(temp__4657__auto___65994){
var seq__65981_65995__$1 = temp__4657__auto___65994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65981_65995__$1)){
var c__25857__auto___65996 = cljs.core.chunk_first.call(null,seq__65981_65995__$1);
var G__65997 = cljs.core.chunk_rest.call(null,seq__65981_65995__$1);
var G__65998 = c__25857__auto___65996;
var G__65999 = cljs.core.count.call(null,c__25857__auto___65996);
var G__66000 = (0);
seq__65981_65985 = G__65997;
chunk__65982_65986 = G__65998;
count__65983_65987 = G__65999;
i__65984_65988 = G__66000;
continue;
} else {
var msg_66001 = cljs.core.first.call(null,seq__65981_65995__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_66001);

var G__66002 = cljs.core.next.call(null,seq__65981_65995__$1);
var G__66003 = null;
var G__66004 = (0);
var G__66005 = (0);
seq__65981_65985 = G__66002;
chunk__65982_65986 = G__66003;
count__65983_65987 = G__66004;
i__65984_65988 = G__66005;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__66006){
var map__66009 = p__66006;
var map__66009__$1 = ((((!((map__66009 == null)))?((((map__66009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66009):map__66009);
var w = map__66009__$1;
var message = cljs.core.get.call(null,map__66009__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__66021 = cljs.core.seq.call(null,plugins);
var chunk__66022 = null;
var count__66023 = (0);
var i__66024 = (0);
while(true){
if((i__66024 < count__66023)){
var vec__66025 = cljs.core._nth.call(null,chunk__66022,i__66024);
var k = cljs.core.nth.call(null,vec__66025,(0),null);
var plugin = cljs.core.nth.call(null,vec__66025,(1),null);
if(cljs.core.truth_(plugin)){
var pl_66031 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__66021,chunk__66022,count__66023,i__66024,pl_66031,vec__66025,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_66031.call(null,msg_hist);
});})(seq__66021,chunk__66022,count__66023,i__66024,pl_66031,vec__66025,k,plugin))
);
} else {
}

var G__66032 = seq__66021;
var G__66033 = chunk__66022;
var G__66034 = count__66023;
var G__66035 = (i__66024 + (1));
seq__66021 = G__66032;
chunk__66022 = G__66033;
count__66023 = G__66034;
i__66024 = G__66035;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__66021);
if(temp__4657__auto__){
var seq__66021__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66021__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__66021__$1);
var G__66036 = cljs.core.chunk_rest.call(null,seq__66021__$1);
var G__66037 = c__25857__auto__;
var G__66038 = cljs.core.count.call(null,c__25857__auto__);
var G__66039 = (0);
seq__66021 = G__66036;
chunk__66022 = G__66037;
count__66023 = G__66038;
i__66024 = G__66039;
continue;
} else {
var vec__66028 = cljs.core.first.call(null,seq__66021__$1);
var k = cljs.core.nth.call(null,vec__66028,(0),null);
var plugin = cljs.core.nth.call(null,vec__66028,(1),null);
if(cljs.core.truth_(plugin)){
var pl_66040 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__66021,chunk__66022,count__66023,i__66024,pl_66040,vec__66028,k,plugin,seq__66021__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_66040.call(null,msg_hist);
});})(seq__66021,chunk__66022,count__66023,i__66024,pl_66040,vec__66028,k,plugin,seq__66021__$1,temp__4657__auto__))
);
} else {
}

var G__66041 = cljs.core.next.call(null,seq__66021__$1);
var G__66042 = null;
var G__66043 = (0);
var G__66044 = (0);
seq__66021 = G__66041;
chunk__66022 = G__66042;
count__66023 = G__66043;
i__66024 = G__66044;
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
var args66045 = [];
var len__26121__auto___66052 = arguments.length;
var i__26122__auto___66053 = (0);
while(true){
if((i__26122__auto___66053 < len__26121__auto___66052)){
args66045.push((arguments[i__26122__auto___66053]));

var G__66054 = (i__26122__auto___66053 + (1));
i__26122__auto___66053 = G__66054;
continue;
} else {
}
break;
}

var G__66047 = args66045.length;
switch (G__66047) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66045.length)].join('')));

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

var seq__66048_66056 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__66049_66057 = null;
var count__66050_66058 = (0);
var i__66051_66059 = (0);
while(true){
if((i__66051_66059 < count__66050_66058)){
var msg_66060 = cljs.core._nth.call(null,chunk__66049_66057,i__66051_66059);
figwheel.client.socket.handle_incoming_message.call(null,msg_66060);

var G__66061 = seq__66048_66056;
var G__66062 = chunk__66049_66057;
var G__66063 = count__66050_66058;
var G__66064 = (i__66051_66059 + (1));
seq__66048_66056 = G__66061;
chunk__66049_66057 = G__66062;
count__66050_66058 = G__66063;
i__66051_66059 = G__66064;
continue;
} else {
var temp__4657__auto___66065 = cljs.core.seq.call(null,seq__66048_66056);
if(temp__4657__auto___66065){
var seq__66048_66066__$1 = temp__4657__auto___66065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66048_66066__$1)){
var c__25857__auto___66067 = cljs.core.chunk_first.call(null,seq__66048_66066__$1);
var G__66068 = cljs.core.chunk_rest.call(null,seq__66048_66066__$1);
var G__66069 = c__25857__auto___66067;
var G__66070 = cljs.core.count.call(null,c__25857__auto___66067);
var G__66071 = (0);
seq__66048_66056 = G__66068;
chunk__66049_66057 = G__66069;
count__66050_66058 = G__66070;
i__66051_66059 = G__66071;
continue;
} else {
var msg_66072 = cljs.core.first.call(null,seq__66048_66066__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_66072);

var G__66073 = cljs.core.next.call(null,seq__66048_66066__$1);
var G__66074 = null;
var G__66075 = (0);
var G__66076 = (0);
seq__66048_66056 = G__66073;
chunk__66049_66057 = G__66074;
count__66050_66058 = G__66075;
i__66051_66059 = G__66076;
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
var len__26121__auto___66081 = arguments.length;
var i__26122__auto___66082 = (0);
while(true){
if((i__26122__auto___66082 < len__26121__auto___66081)){
args__26128__auto__.push((arguments[i__26122__auto___66082]));

var G__66083 = (i__26122__auto___66082 + (1));
i__26122__auto___66082 = G__66083;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__66078){
var map__66079 = p__66078;
var map__66079__$1 = ((((!((map__66079 == null)))?((((map__66079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66079):map__66079);
var opts = map__66079__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq66077){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66077));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e66085){if((e66085 instanceof Error)){
var e = e66085;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e66085;

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
return (function (p__66089){
var map__66090 = p__66089;
var map__66090__$1 = ((((!((map__66090 == null)))?((((map__66090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66090):map__66090);
var msg_name = cljs.core.get.call(null,map__66090__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1484333409822
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
var args45323 = [];
var len__26121__auto___45326 = arguments.length;
var i__26122__auto___45327 = (0);
while(true){
if((i__26122__auto___45327 < len__26121__auto___45326)){
args45323.push((arguments[i__26122__auto___45327]));

var G__45328 = (i__26122__auto___45327 + (1));
i__26122__auto___45327 = G__45328;
continue;
} else {
}
break;
}

var G__45325 = args45323.length;
switch (G__45325) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45323.length)].join('')));

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
var len__26121__auto___45331 = arguments.length;
var i__26122__auto___45332 = (0);
while(true){
if((i__26122__auto___45332 < len__26121__auto___45331)){
args__26128__auto__.push((arguments[i__26122__auto___45332]));

var G__45333 = (i__26122__auto___45332 + (1));
i__26122__auto___45332 = G__45333;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq45330){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45330));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26128__auto__ = [];
var len__26121__auto___45335 = arguments.length;
var i__26122__auto___45336 = (0);
while(true){
if((i__26122__auto___45336 < len__26121__auto___45335)){
args__26128__auto__.push((arguments[i__26122__auto___45336]));

var G__45337 = (i__26122__auto___45336 + (1));
i__26122__auto___45336 = G__45337;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq45334){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45334));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__45338 = cljs.core._EQ_;
var expr__45339 = (function (){var or__25046__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e45342){if((e45342 instanceof Error)){
var e = e45342;
return false;
} else {
throw e45342;

}
}})();
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__45338.call(null,"true",expr__45339))){
return true;
} else {
if(cljs.core.truth_(pred__45338.call(null,"false",expr__45339))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__45339)].join('')));
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
}catch (e45344){if((e45344 instanceof Error)){
var e = e45344;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e45344;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__45345){
var map__45348 = p__45345;
var map__45348__$1 = ((((!((map__45348 == null)))?((((map__45348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45348):map__45348);
var message = cljs.core.get.call(null,map__45348__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__45348__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__30480__auto___45510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto___45510,ch){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto___45510,ch){
return (function (state_45479){
var state_val_45480 = (state_45479[(1)]);
if((state_val_45480 === (7))){
var inst_45475 = (state_45479[(2)]);
var state_45479__$1 = state_45479;
var statearr_45481_45511 = state_45479__$1;
(statearr_45481_45511[(2)] = inst_45475);

(statearr_45481_45511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45480 === (1))){
var state_45479__$1 = state_45479;
var statearr_45482_45512 = state_45479__$1;
(statearr_45482_45512[(2)] = null);

(statearr_45482_45512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45480 === (4))){
var inst_45432 = (state_45479[(7)]);
var inst_45432__$1 = (state_45479[(2)]);
var state_45479__$1 = (function (){var statearr_45483 = state_45479;
(statearr_45483[(7)] = inst_45432__$1);

return statearr_45483;
})();
if(cljs.core.truth_(inst_45432__$1)){
var statearr_45484_45513 = state_45479__$1;
(statearr_45484_45513[(1)] = (5));

} else {
var statearr_45485_45514 = state_45479__$1;
(statearr_45485_45514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45480 === (15))){
var inst_45439 = (state_45479[(8)]);
var inst_45454 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45439);
var inst_45455 = cljs.core.first.call(null,inst_45454);
var inst_45456 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_45455);
var inst_45457 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_45456)].join('');
var inst_45458 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_45457);
var state_45479__$1 = state_45479;
var statearr_45486_45515 = state_45479__$1;
(statearr_45486_45515[(2)] = inst_45458);

(statearr_45486_45515[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45480 === (13))){
var inst_45463 = (state_45479[(2)]);
var state_45479__$1 = state_45479;
var statearr_45487_45516 = state_45479__$1;
(statearr_45487_45516[(2)] = inst_45463);

(statearr_45487_45516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45480 === (6))){
var state_45479__$1 = state_45479;
var statearr_45488_45517 = state_45479__$1;
(statearr_45488_45517[(2)] = null);

(statearr_45488_45517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45480 === (17))){
var inst_45461 = (state_45479[(2)]);
var state_45479__$1 = state_45479;
var statearr_45489_45518 = state_45479__$1;
(statearr_45489_45518[(2)] = inst_45461);

(statearr_45489_45518[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45480 === (3))){
var inst_45477 = (state_45479[(2)]);
var state_45479__$1 = state_45479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45479__$1,inst_45477);
} else {
if((state_val_45480 === (12))){
var inst_45438 = (state_45479[(9)]);
var inst_45452 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_45438,opts);
var state_45479__$1 = state_45479;
if(cljs.core.truth_(inst_45452)){
var statearr_45490_45519 = state_45479__$1;
(statearr_45490_45519[(1)] = (15));

} else {
var statearr_45491_45520 = state_45479__$1;
(statearr_45491_45520[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45480 === (2))){
var state_45479__$1 = state_45479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45479__$1,(4),ch);
} else {
if((state_val_45480 === (11))){
var inst_45439 = (state_45479[(8)]);
var inst_45444 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45445 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_45439);
var inst_45446 = cljs.core.async.timeout.call(null,(1000));
var inst_45447 = [inst_45445,inst_45446];
var inst_45448 = (new cljs.core.PersistentVector(null,2,(5),inst_45444,inst_45447,null));
var state_45479__$1 = state_45479;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45479__$1,(14),inst_45448);
} else {
if((state_val_45480 === (9))){
var inst_45439 = (state_45479[(8)]);
var inst_45465 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_45466 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45439);
var inst_45467 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45466);
var inst_45468 = [cljs.core.str("Not loading: "),cljs.core.str(inst_45467)].join('');
var inst_45469 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_45468);
var state_45479__$1 = (function (){var statearr_45492 = state_45479;
(statearr_45492[(10)] = inst_45465);

return statearr_45492;
})();
var statearr_45493_45521 = state_45479__$1;
(statearr_45493_45521[(2)] = inst_45469);

(statearr_45493_45521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45480 === (5))){
var inst_45432 = (state_45479[(7)]);
var inst_45434 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_45435 = (new cljs.core.PersistentArrayMap(null,2,inst_45434,null));
var inst_45436 = (new cljs.core.PersistentHashSet(null,inst_45435,null));
var inst_45437 = figwheel.client.focus_msgs.call(null,inst_45436,inst_45432);
var inst_45438 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_45437);
var inst_45439 = cljs.core.first.call(null,inst_45437);
var inst_45440 = figwheel.client.autoload_QMARK_.call(null);
var state_45479__$1 = (function (){var statearr_45494 = state_45479;
(statearr_45494[(9)] = inst_45438);

(statearr_45494[(8)] = inst_45439);

return statearr_45494;
})();
if(cljs.core.truth_(inst_45440)){
var statearr_45495_45522 = state_45479__$1;
(statearr_45495_45522[(1)] = (8));

} else {
var statearr_45496_45523 = state_45479__$1;
(statearr_45496_45523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45480 === (14))){
var inst_45450 = (state_45479[(2)]);
var state_45479__$1 = state_45479;
var statearr_45497_45524 = state_45479__$1;
(statearr_45497_45524[(2)] = inst_45450);

(statearr_45497_45524[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45480 === (16))){
var state_45479__$1 = state_45479;
var statearr_45498_45525 = state_45479__$1;
(statearr_45498_45525[(2)] = null);

(statearr_45498_45525[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45480 === (10))){
var inst_45471 = (state_45479[(2)]);
var state_45479__$1 = (function (){var statearr_45499 = state_45479;
(statearr_45499[(11)] = inst_45471);

return statearr_45499;
})();
var statearr_45500_45526 = state_45479__$1;
(statearr_45500_45526[(2)] = null);

(statearr_45500_45526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45480 === (8))){
var inst_45438 = (state_45479[(9)]);
var inst_45442 = figwheel.client.reload_file_state_QMARK_.call(null,inst_45438,opts);
var state_45479__$1 = state_45479;
if(cljs.core.truth_(inst_45442)){
var statearr_45501_45527 = state_45479__$1;
(statearr_45501_45527[(1)] = (11));

} else {
var statearr_45502_45528 = state_45479__$1;
(statearr_45502_45528[(1)] = (12));

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
});})(c__30480__auto___45510,ch))
;
return ((function (switch__30459__auto__,c__30480__auto___45510,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30460__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30460__auto____0 = (function (){
var statearr_45506 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45506[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30460__auto__);

(statearr_45506[(1)] = (1));

return statearr_45506;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30460__auto____1 = (function (state_45479){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_45479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e45507){if((e45507 instanceof Object)){
var ex__30463__auto__ = e45507;
var statearr_45508_45529 = state_45479;
(statearr_45508_45529[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45530 = state_45479;
state_45479 = G__45530;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30460__auto__ = function(state_45479){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30460__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30460__auto____1.call(this,state_45479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30460__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30460__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto___45510,ch))
})();
var state__30482__auto__ = (function (){var statearr_45509 = f__30481__auto__.call(null);
(statearr_45509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto___45510);

return statearr_45509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto___45510,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__45531_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__45531_SHARP_));
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
var base_path_45534 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_45534){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e45533){if((e45533 instanceof Error)){
var e = e45533;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_45534], null));
} else {
var e = e45533;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_45534))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__45535){
var map__45544 = p__45535;
var map__45544__$1 = ((((!((map__45544 == null)))?((((map__45544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45544):map__45544);
var opts = map__45544__$1;
var build_id = cljs.core.get.call(null,map__45544__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__45544,map__45544__$1,opts,build_id){
return (function (p__45546){
var vec__45547 = p__45546;
var seq__45548 = cljs.core.seq.call(null,vec__45547);
var first__45549 = cljs.core.first.call(null,seq__45548);
var seq__45548__$1 = cljs.core.next.call(null,seq__45548);
var map__45550 = first__45549;
var map__45550__$1 = ((((!((map__45550 == null)))?((((map__45550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45550):map__45550);
var msg = map__45550__$1;
var msg_name = cljs.core.get.call(null,map__45550__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45548__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__45547,seq__45548,first__45549,seq__45548__$1,map__45550,map__45550__$1,msg,msg_name,_,map__45544,map__45544__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__45547,seq__45548,first__45549,seq__45548__$1,map__45550,map__45550__$1,msg,msg_name,_,map__45544,map__45544__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__45544,map__45544__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__45558){
var vec__45559 = p__45558;
var seq__45560 = cljs.core.seq.call(null,vec__45559);
var first__45561 = cljs.core.first.call(null,seq__45560);
var seq__45560__$1 = cljs.core.next.call(null,seq__45560);
var map__45562 = first__45561;
var map__45562__$1 = ((((!((map__45562 == null)))?((((map__45562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45562):map__45562);
var msg = map__45562__$1;
var msg_name = cljs.core.get.call(null,map__45562__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45560__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__45564){
var map__45576 = p__45564;
var map__45576__$1 = ((((!((map__45576 == null)))?((((map__45576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45576):map__45576);
var on_compile_warning = cljs.core.get.call(null,map__45576__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__45576__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__45576,map__45576__$1,on_compile_warning,on_compile_fail){
return (function (p__45578){
var vec__45579 = p__45578;
var seq__45580 = cljs.core.seq.call(null,vec__45579);
var first__45581 = cljs.core.first.call(null,seq__45580);
var seq__45580__$1 = cljs.core.next.call(null,seq__45580);
var map__45582 = first__45581;
var map__45582__$1 = ((((!((map__45582 == null)))?((((map__45582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45582):map__45582);
var msg = map__45582__$1;
var msg_name = cljs.core.get.call(null,map__45582__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45580__$1;
var pred__45584 = cljs.core._EQ_;
var expr__45585 = msg_name;
if(cljs.core.truth_(pred__45584.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__45585))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__45584.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__45585))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__45576,map__45576__$1,on_compile_warning,on_compile_fail))
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
var c__30480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto__,msg_hist,msg_names,msg){
return (function (state_45813){
var state_val_45814 = (state_45813[(1)]);
if((state_val_45814 === (7))){
var inst_45733 = (state_45813[(2)]);
var state_45813__$1 = state_45813;
if(cljs.core.truth_(inst_45733)){
var statearr_45815_45865 = state_45813__$1;
(statearr_45815_45865[(1)] = (8));

} else {
var statearr_45816_45866 = state_45813__$1;
(statearr_45816_45866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (20))){
var inst_45807 = (state_45813[(2)]);
var state_45813__$1 = state_45813;
var statearr_45817_45867 = state_45813__$1;
(statearr_45817_45867[(2)] = inst_45807);

(statearr_45817_45867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (27))){
var inst_45803 = (state_45813[(2)]);
var state_45813__$1 = state_45813;
var statearr_45818_45868 = state_45813__$1;
(statearr_45818_45868[(2)] = inst_45803);

(statearr_45818_45868[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (1))){
var inst_45726 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_45813__$1 = state_45813;
if(cljs.core.truth_(inst_45726)){
var statearr_45819_45869 = state_45813__$1;
(statearr_45819_45869[(1)] = (2));

} else {
var statearr_45820_45870 = state_45813__$1;
(statearr_45820_45870[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (24))){
var inst_45805 = (state_45813[(2)]);
var state_45813__$1 = state_45813;
var statearr_45821_45871 = state_45813__$1;
(statearr_45821_45871[(2)] = inst_45805);

(statearr_45821_45871[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (4))){
var inst_45811 = (state_45813[(2)]);
var state_45813__$1 = state_45813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45813__$1,inst_45811);
} else {
if((state_val_45814 === (15))){
var inst_45809 = (state_45813[(2)]);
var state_45813__$1 = state_45813;
var statearr_45822_45872 = state_45813__$1;
(statearr_45822_45872[(2)] = inst_45809);

(statearr_45822_45872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (21))){
var inst_45762 = (state_45813[(2)]);
var inst_45763 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45764 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45763);
var state_45813__$1 = (function (){var statearr_45823 = state_45813;
(statearr_45823[(7)] = inst_45762);

return statearr_45823;
})();
var statearr_45824_45873 = state_45813__$1;
(statearr_45824_45873[(2)] = inst_45764);

(statearr_45824_45873[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (31))){
var inst_45792 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_45813__$1 = state_45813;
if(cljs.core.truth_(inst_45792)){
var statearr_45825_45874 = state_45813__$1;
(statearr_45825_45874[(1)] = (34));

} else {
var statearr_45826_45875 = state_45813__$1;
(statearr_45826_45875[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (32))){
var inst_45801 = (state_45813[(2)]);
var state_45813__$1 = state_45813;
var statearr_45827_45876 = state_45813__$1;
(statearr_45827_45876[(2)] = inst_45801);

(statearr_45827_45876[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (33))){
var inst_45788 = (state_45813[(2)]);
var inst_45789 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45790 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45789);
var state_45813__$1 = (function (){var statearr_45828 = state_45813;
(statearr_45828[(8)] = inst_45788);

return statearr_45828;
})();
var statearr_45829_45877 = state_45813__$1;
(statearr_45829_45877[(2)] = inst_45790);

(statearr_45829_45877[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (13))){
var inst_45747 = figwheel.client.heads_up.clear.call(null);
var state_45813__$1 = state_45813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45813__$1,(16),inst_45747);
} else {
if((state_val_45814 === (22))){
var inst_45768 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45769 = figwheel.client.heads_up.append_warning_message.call(null,inst_45768);
var state_45813__$1 = state_45813;
var statearr_45830_45878 = state_45813__$1;
(statearr_45830_45878[(2)] = inst_45769);

(statearr_45830_45878[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (36))){
var inst_45799 = (state_45813[(2)]);
var state_45813__$1 = state_45813;
var statearr_45831_45879 = state_45813__$1;
(statearr_45831_45879[(2)] = inst_45799);

(statearr_45831_45879[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (29))){
var inst_45779 = (state_45813[(2)]);
var inst_45780 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45781 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45780);
var state_45813__$1 = (function (){var statearr_45832 = state_45813;
(statearr_45832[(9)] = inst_45779);

return statearr_45832;
})();
var statearr_45833_45880 = state_45813__$1;
(statearr_45833_45880[(2)] = inst_45781);

(statearr_45833_45880[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (6))){
var inst_45728 = (state_45813[(10)]);
var state_45813__$1 = state_45813;
var statearr_45834_45881 = state_45813__$1;
(statearr_45834_45881[(2)] = inst_45728);

(statearr_45834_45881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (28))){
var inst_45775 = (state_45813[(2)]);
var inst_45776 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45777 = figwheel.client.heads_up.display_warning.call(null,inst_45776);
var state_45813__$1 = (function (){var statearr_45835 = state_45813;
(statearr_45835[(11)] = inst_45775);

return statearr_45835;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45813__$1,(29),inst_45777);
} else {
if((state_val_45814 === (25))){
var inst_45773 = figwheel.client.heads_up.clear.call(null);
var state_45813__$1 = state_45813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45813__$1,(28),inst_45773);
} else {
if((state_val_45814 === (34))){
var inst_45794 = figwheel.client.heads_up.flash_loaded.call(null);
var state_45813__$1 = state_45813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45813__$1,(37),inst_45794);
} else {
if((state_val_45814 === (17))){
var inst_45753 = (state_45813[(2)]);
var inst_45754 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45755 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45754);
var state_45813__$1 = (function (){var statearr_45836 = state_45813;
(statearr_45836[(12)] = inst_45753);

return statearr_45836;
})();
var statearr_45837_45882 = state_45813__$1;
(statearr_45837_45882[(2)] = inst_45755);

(statearr_45837_45882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (3))){
var inst_45745 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_45813__$1 = state_45813;
if(cljs.core.truth_(inst_45745)){
var statearr_45838_45883 = state_45813__$1;
(statearr_45838_45883[(1)] = (13));

} else {
var statearr_45839_45884 = state_45813__$1;
(statearr_45839_45884[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (12))){
var inst_45741 = (state_45813[(2)]);
var state_45813__$1 = state_45813;
var statearr_45840_45885 = state_45813__$1;
(statearr_45840_45885[(2)] = inst_45741);

(statearr_45840_45885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (2))){
var inst_45728 = (state_45813[(10)]);
var inst_45728__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_45813__$1 = (function (){var statearr_45841 = state_45813;
(statearr_45841[(10)] = inst_45728__$1);

return statearr_45841;
})();
if(cljs.core.truth_(inst_45728__$1)){
var statearr_45842_45886 = state_45813__$1;
(statearr_45842_45886[(1)] = (5));

} else {
var statearr_45843_45887 = state_45813__$1;
(statearr_45843_45887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (23))){
var inst_45771 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_45813__$1 = state_45813;
if(cljs.core.truth_(inst_45771)){
var statearr_45844_45888 = state_45813__$1;
(statearr_45844_45888[(1)] = (25));

} else {
var statearr_45845_45889 = state_45813__$1;
(statearr_45845_45889[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (35))){
var state_45813__$1 = state_45813;
var statearr_45846_45890 = state_45813__$1;
(statearr_45846_45890[(2)] = null);

(statearr_45846_45890[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (19))){
var inst_45766 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_45813__$1 = state_45813;
if(cljs.core.truth_(inst_45766)){
var statearr_45847_45891 = state_45813__$1;
(statearr_45847_45891[(1)] = (22));

} else {
var statearr_45848_45892 = state_45813__$1;
(statearr_45848_45892[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (11))){
var inst_45737 = (state_45813[(2)]);
var state_45813__$1 = state_45813;
var statearr_45849_45893 = state_45813__$1;
(statearr_45849_45893[(2)] = inst_45737);

(statearr_45849_45893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (9))){
var inst_45739 = figwheel.client.heads_up.clear.call(null);
var state_45813__$1 = state_45813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45813__$1,(12),inst_45739);
} else {
if((state_val_45814 === (5))){
var inst_45730 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_45813__$1 = state_45813;
var statearr_45850_45894 = state_45813__$1;
(statearr_45850_45894[(2)] = inst_45730);

(statearr_45850_45894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (14))){
var inst_45757 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_45813__$1 = state_45813;
if(cljs.core.truth_(inst_45757)){
var statearr_45851_45895 = state_45813__$1;
(statearr_45851_45895[(1)] = (18));

} else {
var statearr_45852_45896 = state_45813__$1;
(statearr_45852_45896[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (26))){
var inst_45783 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_45813__$1 = state_45813;
if(cljs.core.truth_(inst_45783)){
var statearr_45853_45897 = state_45813__$1;
(statearr_45853_45897[(1)] = (30));

} else {
var statearr_45854_45898 = state_45813__$1;
(statearr_45854_45898[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (16))){
var inst_45749 = (state_45813[(2)]);
var inst_45750 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45751 = figwheel.client.heads_up.display_exception.call(null,inst_45750);
var state_45813__$1 = (function (){var statearr_45855 = state_45813;
(statearr_45855[(13)] = inst_45749);

return statearr_45855;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45813__$1,(17),inst_45751);
} else {
if((state_val_45814 === (30))){
var inst_45785 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45786 = figwheel.client.heads_up.display_warning.call(null,inst_45785);
var state_45813__$1 = state_45813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45813__$1,(33),inst_45786);
} else {
if((state_val_45814 === (10))){
var inst_45743 = (state_45813[(2)]);
var state_45813__$1 = state_45813;
var statearr_45856_45899 = state_45813__$1;
(statearr_45856_45899[(2)] = inst_45743);

(statearr_45856_45899[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (18))){
var inst_45759 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45760 = figwheel.client.heads_up.display_exception.call(null,inst_45759);
var state_45813__$1 = state_45813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45813__$1,(21),inst_45760);
} else {
if((state_val_45814 === (37))){
var inst_45796 = (state_45813[(2)]);
var state_45813__$1 = state_45813;
var statearr_45857_45900 = state_45813__$1;
(statearr_45857_45900[(2)] = inst_45796);

(statearr_45857_45900[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (8))){
var inst_45735 = figwheel.client.heads_up.flash_loaded.call(null);
var state_45813__$1 = state_45813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45813__$1,(11),inst_45735);
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
});})(c__30480__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30459__auto__,c__30480__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30460__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30460__auto____0 = (function (){
var statearr_45861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45861[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30460__auto__);

(statearr_45861[(1)] = (1));

return statearr_45861;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30460__auto____1 = (function (state_45813){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_45813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e45862){if((e45862 instanceof Object)){
var ex__30463__auto__ = e45862;
var statearr_45863_45901 = state_45813;
(statearr_45863_45901[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45902 = state_45813;
state_45813 = G__45902;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30460__auto__ = function(state_45813){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30460__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30460__auto____1.call(this,state_45813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30460__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30460__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto__,msg_hist,msg_names,msg))
})();
var state__30482__auto__ = (function (){var statearr_45864 = f__30481__auto__.call(null);
(statearr_45864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto__);

return statearr_45864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto__,msg_hist,msg_names,msg))
);

return c__30480__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30480__auto___45965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto___45965,ch){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto___45965,ch){
return (function (state_45948){
var state_val_45949 = (state_45948[(1)]);
if((state_val_45949 === (1))){
var state_45948__$1 = state_45948;
var statearr_45950_45966 = state_45948__$1;
(statearr_45950_45966[(2)] = null);

(statearr_45950_45966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45949 === (2))){
var state_45948__$1 = state_45948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45948__$1,(4),ch);
} else {
if((state_val_45949 === (3))){
var inst_45946 = (state_45948[(2)]);
var state_45948__$1 = state_45948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45948__$1,inst_45946);
} else {
if((state_val_45949 === (4))){
var inst_45936 = (state_45948[(7)]);
var inst_45936__$1 = (state_45948[(2)]);
var state_45948__$1 = (function (){var statearr_45951 = state_45948;
(statearr_45951[(7)] = inst_45936__$1);

return statearr_45951;
})();
if(cljs.core.truth_(inst_45936__$1)){
var statearr_45952_45967 = state_45948__$1;
(statearr_45952_45967[(1)] = (5));

} else {
var statearr_45953_45968 = state_45948__$1;
(statearr_45953_45968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45949 === (5))){
var inst_45936 = (state_45948[(7)]);
var inst_45938 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_45936);
var state_45948__$1 = state_45948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45948__$1,(8),inst_45938);
} else {
if((state_val_45949 === (6))){
var state_45948__$1 = state_45948;
var statearr_45954_45969 = state_45948__$1;
(statearr_45954_45969[(2)] = null);

(statearr_45954_45969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45949 === (7))){
var inst_45944 = (state_45948[(2)]);
var state_45948__$1 = state_45948;
var statearr_45955_45970 = state_45948__$1;
(statearr_45955_45970[(2)] = inst_45944);

(statearr_45955_45970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45949 === (8))){
var inst_45940 = (state_45948[(2)]);
var state_45948__$1 = (function (){var statearr_45956 = state_45948;
(statearr_45956[(8)] = inst_45940);

return statearr_45956;
})();
var statearr_45957_45971 = state_45948__$1;
(statearr_45957_45971[(2)] = null);

(statearr_45957_45971[(1)] = (2));


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
});})(c__30480__auto___45965,ch))
;
return ((function (switch__30459__auto__,c__30480__auto___45965,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30460__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30460__auto____0 = (function (){
var statearr_45961 = [null,null,null,null,null,null,null,null,null];
(statearr_45961[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30460__auto__);

(statearr_45961[(1)] = (1));

return statearr_45961;
});
var figwheel$client$heads_up_plugin_$_state_machine__30460__auto____1 = (function (state_45948){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_45948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e45962){if((e45962 instanceof Object)){
var ex__30463__auto__ = e45962;
var statearr_45963_45972 = state_45948;
(statearr_45963_45972[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45973 = state_45948;
state_45948 = G__45973;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30460__auto__ = function(state_45948){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30460__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30460__auto____1.call(this,state_45948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30460__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30460__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto___45965,ch))
})();
var state__30482__auto__ = (function (){var statearr_45964 = f__30481__auto__.call(null);
(statearr_45964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto___45965);

return statearr_45964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto___45965,ch))
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
var c__30480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto__){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto__){
return (function (state_45994){
var state_val_45995 = (state_45994[(1)]);
if((state_val_45995 === (1))){
var inst_45989 = cljs.core.async.timeout.call(null,(3000));
var state_45994__$1 = state_45994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45994__$1,(2),inst_45989);
} else {
if((state_val_45995 === (2))){
var inst_45991 = (state_45994[(2)]);
var inst_45992 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_45994__$1 = (function (){var statearr_45996 = state_45994;
(statearr_45996[(7)] = inst_45991);

return statearr_45996;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45994__$1,inst_45992);
} else {
return null;
}
}
});})(c__30480__auto__))
;
return ((function (switch__30459__auto__,c__30480__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30460__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30460__auto____0 = (function (){
var statearr_46000 = [null,null,null,null,null,null,null,null];
(statearr_46000[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30460__auto__);

(statearr_46000[(1)] = (1));

return statearr_46000;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30460__auto____1 = (function (state_45994){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_45994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e46001){if((e46001 instanceof Object)){
var ex__30463__auto__ = e46001;
var statearr_46002_46004 = state_45994;
(statearr_46002_46004[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46005 = state_45994;
state_45994 = G__46005;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30460__auto__ = function(state_45994){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30460__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30460__auto____1.call(this,state_45994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30460__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30460__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto__))
})();
var state__30482__auto__ = (function (){var statearr_46003 = f__30481__auto__.call(null);
(statearr_46003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto__);

return statearr_46003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto__))
);

return c__30480__auto__;
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
var c__30480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30480__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30481__auto__ = (function (){var switch__30459__auto__ = ((function (c__30480__auto__,figwheel_version,temp__4657__auto__){
return (function (state_46028){
var state_val_46029 = (state_46028[(1)]);
if((state_val_46029 === (1))){
var inst_46022 = cljs.core.async.timeout.call(null,(2000));
var state_46028__$1 = state_46028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46028__$1,(2),inst_46022);
} else {
if((state_val_46029 === (2))){
var inst_46024 = (state_46028[(2)]);
var inst_46025 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_46026 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_46025);
var state_46028__$1 = (function (){var statearr_46030 = state_46028;
(statearr_46030[(7)] = inst_46024);

return statearr_46030;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46028__$1,inst_46026);
} else {
return null;
}
}
});})(c__30480__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30459__auto__,c__30480__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30460__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30460__auto____0 = (function (){
var statearr_46034 = [null,null,null,null,null,null,null,null];
(statearr_46034[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30460__auto__);

(statearr_46034[(1)] = (1));

return statearr_46034;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30460__auto____1 = (function (state_46028){
while(true){
var ret_value__30461__auto__ = (function (){try{while(true){
var result__30462__auto__ = switch__30459__auto__.call(null,state_46028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30462__auto__;
}
break;
}
}catch (e46035){if((e46035 instanceof Object)){
var ex__30463__auto__ = e46035;
var statearr_46036_46038 = state_46028;
(statearr_46036_46038[(5)] = ex__30463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46039 = state_46028;
state_46028 = G__46039;
continue;
} else {
return ret_value__30461__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30460__auto__ = function(state_46028){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30460__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30460__auto____1.call(this,state_46028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30460__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30460__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30460__auto__;
})()
;})(switch__30459__auto__,c__30480__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30482__auto__ = (function (){var statearr_46037 = f__30481__auto__.call(null);
(statearr_46037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30480__auto__);

return statearr_46037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30482__auto__);
});})(c__30480__auto__,figwheel_version,temp__4657__auto__))
);

return c__30480__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__46040){
var map__46044 = p__46040;
var map__46044__$1 = ((((!((map__46044 == null)))?((((map__46044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46044):map__46044);
var file = cljs.core.get.call(null,map__46044__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__46044__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__46044__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__46046 = "";
var G__46046__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__46046),cljs.core.str("file "),cljs.core.str(file)].join(''):G__46046);
var G__46046__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__46046__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__46046__$1);
if(cljs.core.truth_((function (){var and__25034__auto__ = line;
if(cljs.core.truth_(and__25034__auto__)){
return column;
} else {
return and__25034__auto__;
}
})())){
return [cljs.core.str(G__46046__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__46046__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__46047){
var map__46054 = p__46047;
var map__46054__$1 = ((((!((map__46054 == null)))?((((map__46054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46054):map__46054);
var ed = map__46054__$1;
var formatted_exception = cljs.core.get.call(null,map__46054__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__46054__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__46054__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__46056_46060 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__46057_46061 = null;
var count__46058_46062 = (0);
var i__46059_46063 = (0);
while(true){
if((i__46059_46063 < count__46058_46062)){
var msg_46064 = cljs.core._nth.call(null,chunk__46057_46061,i__46059_46063);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46064);

var G__46065 = seq__46056_46060;
var G__46066 = chunk__46057_46061;
var G__46067 = count__46058_46062;
var G__46068 = (i__46059_46063 + (1));
seq__46056_46060 = G__46065;
chunk__46057_46061 = G__46066;
count__46058_46062 = G__46067;
i__46059_46063 = G__46068;
continue;
} else {
var temp__4657__auto___46069 = cljs.core.seq.call(null,seq__46056_46060);
if(temp__4657__auto___46069){
var seq__46056_46070__$1 = temp__4657__auto___46069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46056_46070__$1)){
var c__25857__auto___46071 = cljs.core.chunk_first.call(null,seq__46056_46070__$1);
var G__46072 = cljs.core.chunk_rest.call(null,seq__46056_46070__$1);
var G__46073 = c__25857__auto___46071;
var G__46074 = cljs.core.count.call(null,c__25857__auto___46071);
var G__46075 = (0);
seq__46056_46060 = G__46072;
chunk__46057_46061 = G__46073;
count__46058_46062 = G__46074;
i__46059_46063 = G__46075;
continue;
} else {
var msg_46076 = cljs.core.first.call(null,seq__46056_46070__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46076);

var G__46077 = cljs.core.next.call(null,seq__46056_46070__$1);
var G__46078 = null;
var G__46079 = (0);
var G__46080 = (0);
seq__46056_46060 = G__46077;
chunk__46057_46061 = G__46078;
count__46058_46062 = G__46079;
i__46059_46063 = G__46080;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__46081){
var map__46084 = p__46081;
var map__46084__$1 = ((((!((map__46084 == null)))?((((map__46084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46084):map__46084);
var w = map__46084__$1;
var message = cljs.core.get.call(null,map__46084__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__46096 = cljs.core.seq.call(null,plugins);
var chunk__46097 = null;
var count__46098 = (0);
var i__46099 = (0);
while(true){
if((i__46099 < count__46098)){
var vec__46100 = cljs.core._nth.call(null,chunk__46097,i__46099);
var k = cljs.core.nth.call(null,vec__46100,(0),null);
var plugin = cljs.core.nth.call(null,vec__46100,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46106 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46096,chunk__46097,count__46098,i__46099,pl_46106,vec__46100,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_46106.call(null,msg_hist);
});})(seq__46096,chunk__46097,count__46098,i__46099,pl_46106,vec__46100,k,plugin))
);
} else {
}

var G__46107 = seq__46096;
var G__46108 = chunk__46097;
var G__46109 = count__46098;
var G__46110 = (i__46099 + (1));
seq__46096 = G__46107;
chunk__46097 = G__46108;
count__46098 = G__46109;
i__46099 = G__46110;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46096);
if(temp__4657__auto__){
var seq__46096__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46096__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__46096__$1);
var G__46111 = cljs.core.chunk_rest.call(null,seq__46096__$1);
var G__46112 = c__25857__auto__;
var G__46113 = cljs.core.count.call(null,c__25857__auto__);
var G__46114 = (0);
seq__46096 = G__46111;
chunk__46097 = G__46112;
count__46098 = G__46113;
i__46099 = G__46114;
continue;
} else {
var vec__46103 = cljs.core.first.call(null,seq__46096__$1);
var k = cljs.core.nth.call(null,vec__46103,(0),null);
var plugin = cljs.core.nth.call(null,vec__46103,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46115 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46096,chunk__46097,count__46098,i__46099,pl_46115,vec__46103,k,plugin,seq__46096__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_46115.call(null,msg_hist);
});})(seq__46096,chunk__46097,count__46098,i__46099,pl_46115,vec__46103,k,plugin,seq__46096__$1,temp__4657__auto__))
);
} else {
}

var G__46116 = cljs.core.next.call(null,seq__46096__$1);
var G__46117 = null;
var G__46118 = (0);
var G__46119 = (0);
seq__46096 = G__46116;
chunk__46097 = G__46117;
count__46098 = G__46118;
i__46099 = G__46119;
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
var args46120 = [];
var len__26121__auto___46127 = arguments.length;
var i__26122__auto___46128 = (0);
while(true){
if((i__26122__auto___46128 < len__26121__auto___46127)){
args46120.push((arguments[i__26122__auto___46128]));

var G__46129 = (i__26122__auto___46128 + (1));
i__26122__auto___46128 = G__46129;
continue;
} else {
}
break;
}

var G__46122 = args46120.length;
switch (G__46122) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46120.length)].join('')));

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

var seq__46123_46131 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__46124_46132 = null;
var count__46125_46133 = (0);
var i__46126_46134 = (0);
while(true){
if((i__46126_46134 < count__46125_46133)){
var msg_46135 = cljs.core._nth.call(null,chunk__46124_46132,i__46126_46134);
figwheel.client.socket.handle_incoming_message.call(null,msg_46135);

var G__46136 = seq__46123_46131;
var G__46137 = chunk__46124_46132;
var G__46138 = count__46125_46133;
var G__46139 = (i__46126_46134 + (1));
seq__46123_46131 = G__46136;
chunk__46124_46132 = G__46137;
count__46125_46133 = G__46138;
i__46126_46134 = G__46139;
continue;
} else {
var temp__4657__auto___46140 = cljs.core.seq.call(null,seq__46123_46131);
if(temp__4657__auto___46140){
var seq__46123_46141__$1 = temp__4657__auto___46140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46123_46141__$1)){
var c__25857__auto___46142 = cljs.core.chunk_first.call(null,seq__46123_46141__$1);
var G__46143 = cljs.core.chunk_rest.call(null,seq__46123_46141__$1);
var G__46144 = c__25857__auto___46142;
var G__46145 = cljs.core.count.call(null,c__25857__auto___46142);
var G__46146 = (0);
seq__46123_46131 = G__46143;
chunk__46124_46132 = G__46144;
count__46125_46133 = G__46145;
i__46126_46134 = G__46146;
continue;
} else {
var msg_46147 = cljs.core.first.call(null,seq__46123_46141__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_46147);

var G__46148 = cljs.core.next.call(null,seq__46123_46141__$1);
var G__46149 = null;
var G__46150 = (0);
var G__46151 = (0);
seq__46123_46131 = G__46148;
chunk__46124_46132 = G__46149;
count__46125_46133 = G__46150;
i__46126_46134 = G__46151;
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
var len__26121__auto___46156 = arguments.length;
var i__26122__auto___46157 = (0);
while(true){
if((i__26122__auto___46157 < len__26121__auto___46156)){
args__26128__auto__.push((arguments[i__26122__auto___46157]));

var G__46158 = (i__26122__auto___46157 + (1));
i__26122__auto___46157 = G__46158;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__46153){
var map__46154 = p__46153;
var map__46154__$1 = ((((!((map__46154 == null)))?((((map__46154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46154):map__46154);
var opts = map__46154__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq46152){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46152));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e46160){if((e46160 instanceof Error)){
var e = e46160;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e46160;

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
return (function (p__46164){
var map__46165 = p__46164;
var map__46165__$1 = ((((!((map__46165 == null)))?((((map__46165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46165):map__46165);
var msg_name = cljs.core.get.call(null,map__46165__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1484702595551
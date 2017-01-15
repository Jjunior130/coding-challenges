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
var args38192 = [];
var len__26121__auto___38195 = arguments.length;
var i__26122__auto___38196 = (0);
while(true){
if((i__26122__auto___38196 < len__26121__auto___38195)){
args38192.push((arguments[i__26122__auto___38196]));

var G__38197 = (i__26122__auto___38196 + (1));
i__26122__auto___38196 = G__38197;
continue;
} else {
}
break;
}

var G__38194 = args38192.length;
switch (G__38194) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38192.length)].join('')));

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
var len__26121__auto___38200 = arguments.length;
var i__26122__auto___38201 = (0);
while(true){
if((i__26122__auto___38201 < len__26121__auto___38200)){
args__26128__auto__.push((arguments[i__26122__auto___38201]));

var G__38202 = (i__26122__auto___38201 + (1));
i__26122__auto___38201 = G__38202;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38199){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38199));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26128__auto__ = [];
var len__26121__auto___38204 = arguments.length;
var i__26122__auto___38205 = (0);
while(true){
if((i__26122__auto___38205 < len__26121__auto___38204)){
args__26128__auto__.push((arguments[i__26122__auto___38205]));

var G__38206 = (i__26122__auto___38205 + (1));
i__26122__auto___38205 = G__38206;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38203){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38203));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__38207 = cljs.core._EQ_;
var expr__38208 = (function (){var or__25046__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e38211){if((e38211 instanceof Error)){
var e = e38211;
return false;
} else {
throw e38211;

}
}})();
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__38207.call(null,"true",expr__38208))){
return true;
} else {
if(cljs.core.truth_(pred__38207.call(null,"false",expr__38208))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__38208)].join('')));
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
}catch (e38213){if((e38213 instanceof Error)){
var e = e38213;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e38213;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38214){
var map__38217 = p__38214;
var map__38217__$1 = ((((!((map__38217 == null)))?((((map__38217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38217):map__38217);
var message = cljs.core.get.call(null,map__38217__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38217__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__29132__auto___38379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29132__auto___38379,ch){
return (function (){
var f__29133__auto__ = (function (){var switch__29111__auto__ = ((function (c__29132__auto___38379,ch){
return (function (state_38348){
var state_val_38349 = (state_38348[(1)]);
if((state_val_38349 === (7))){
var inst_38344 = (state_38348[(2)]);
var state_38348__$1 = state_38348;
var statearr_38350_38380 = state_38348__$1;
(statearr_38350_38380[(2)] = inst_38344);

(statearr_38350_38380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (1))){
var state_38348__$1 = state_38348;
var statearr_38351_38381 = state_38348__$1;
(statearr_38351_38381[(2)] = null);

(statearr_38351_38381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (4))){
var inst_38301 = (state_38348[(7)]);
var inst_38301__$1 = (state_38348[(2)]);
var state_38348__$1 = (function (){var statearr_38352 = state_38348;
(statearr_38352[(7)] = inst_38301__$1);

return statearr_38352;
})();
if(cljs.core.truth_(inst_38301__$1)){
var statearr_38353_38382 = state_38348__$1;
(statearr_38353_38382[(1)] = (5));

} else {
var statearr_38354_38383 = state_38348__$1;
(statearr_38354_38383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (15))){
var inst_38308 = (state_38348[(8)]);
var inst_38323 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38308);
var inst_38324 = cljs.core.first.call(null,inst_38323);
var inst_38325 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38324);
var inst_38326 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_38325)].join('');
var inst_38327 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38326);
var state_38348__$1 = state_38348;
var statearr_38355_38384 = state_38348__$1;
(statearr_38355_38384[(2)] = inst_38327);

(statearr_38355_38384[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (13))){
var inst_38332 = (state_38348[(2)]);
var state_38348__$1 = state_38348;
var statearr_38356_38385 = state_38348__$1;
(statearr_38356_38385[(2)] = inst_38332);

(statearr_38356_38385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (6))){
var state_38348__$1 = state_38348;
var statearr_38357_38386 = state_38348__$1;
(statearr_38357_38386[(2)] = null);

(statearr_38357_38386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (17))){
var inst_38330 = (state_38348[(2)]);
var state_38348__$1 = state_38348;
var statearr_38358_38387 = state_38348__$1;
(statearr_38358_38387[(2)] = inst_38330);

(statearr_38358_38387[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (3))){
var inst_38346 = (state_38348[(2)]);
var state_38348__$1 = state_38348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38348__$1,inst_38346);
} else {
if((state_val_38349 === (12))){
var inst_38307 = (state_38348[(9)]);
var inst_38321 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38307,opts);
var state_38348__$1 = state_38348;
if(cljs.core.truth_(inst_38321)){
var statearr_38359_38388 = state_38348__$1;
(statearr_38359_38388[(1)] = (15));

} else {
var statearr_38360_38389 = state_38348__$1;
(statearr_38360_38389[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (2))){
var state_38348__$1 = state_38348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38348__$1,(4),ch);
} else {
if((state_val_38349 === (11))){
var inst_38308 = (state_38348[(8)]);
var inst_38313 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38314 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38308);
var inst_38315 = cljs.core.async.timeout.call(null,(1000));
var inst_38316 = [inst_38314,inst_38315];
var inst_38317 = (new cljs.core.PersistentVector(null,2,(5),inst_38313,inst_38316,null));
var state_38348__$1 = state_38348;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38348__$1,(14),inst_38317);
} else {
if((state_val_38349 === (9))){
var inst_38308 = (state_38348[(8)]);
var inst_38334 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38335 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38308);
var inst_38336 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38335);
var inst_38337 = [cljs.core.str("Not loading: "),cljs.core.str(inst_38336)].join('');
var inst_38338 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38337);
var state_38348__$1 = (function (){var statearr_38361 = state_38348;
(statearr_38361[(10)] = inst_38334);

return statearr_38361;
})();
var statearr_38362_38390 = state_38348__$1;
(statearr_38362_38390[(2)] = inst_38338);

(statearr_38362_38390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (5))){
var inst_38301 = (state_38348[(7)]);
var inst_38303 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38304 = (new cljs.core.PersistentArrayMap(null,2,inst_38303,null));
var inst_38305 = (new cljs.core.PersistentHashSet(null,inst_38304,null));
var inst_38306 = figwheel.client.focus_msgs.call(null,inst_38305,inst_38301);
var inst_38307 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38306);
var inst_38308 = cljs.core.first.call(null,inst_38306);
var inst_38309 = figwheel.client.autoload_QMARK_.call(null);
var state_38348__$1 = (function (){var statearr_38363 = state_38348;
(statearr_38363[(9)] = inst_38307);

(statearr_38363[(8)] = inst_38308);

return statearr_38363;
})();
if(cljs.core.truth_(inst_38309)){
var statearr_38364_38391 = state_38348__$1;
(statearr_38364_38391[(1)] = (8));

} else {
var statearr_38365_38392 = state_38348__$1;
(statearr_38365_38392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (14))){
var inst_38319 = (state_38348[(2)]);
var state_38348__$1 = state_38348;
var statearr_38366_38393 = state_38348__$1;
(statearr_38366_38393[(2)] = inst_38319);

(statearr_38366_38393[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (16))){
var state_38348__$1 = state_38348;
var statearr_38367_38394 = state_38348__$1;
(statearr_38367_38394[(2)] = null);

(statearr_38367_38394[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (10))){
var inst_38340 = (state_38348[(2)]);
var state_38348__$1 = (function (){var statearr_38368 = state_38348;
(statearr_38368[(11)] = inst_38340);

return statearr_38368;
})();
var statearr_38369_38395 = state_38348__$1;
(statearr_38369_38395[(2)] = null);

(statearr_38369_38395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (8))){
var inst_38307 = (state_38348[(9)]);
var inst_38311 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38307,opts);
var state_38348__$1 = state_38348;
if(cljs.core.truth_(inst_38311)){
var statearr_38370_38396 = state_38348__$1;
(statearr_38370_38396[(1)] = (11));

} else {
var statearr_38371_38397 = state_38348__$1;
(statearr_38371_38397[(1)] = (12));

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
});})(c__29132__auto___38379,ch))
;
return ((function (switch__29111__auto__,c__29132__auto___38379,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29112__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29112__auto____0 = (function (){
var statearr_38375 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38375[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29112__auto__);

(statearr_38375[(1)] = (1));

return statearr_38375;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29112__auto____1 = (function (state_38348){
while(true){
var ret_value__29113__auto__ = (function (){try{while(true){
var result__29114__auto__ = switch__29111__auto__.call(null,state_38348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29114__auto__;
}
break;
}
}catch (e38376){if((e38376 instanceof Object)){
var ex__29115__auto__ = e38376;
var statearr_38377_38398 = state_38348;
(statearr_38377_38398[(5)] = ex__29115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38399 = state_38348;
state_38348 = G__38399;
continue;
} else {
return ret_value__29113__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29112__auto__ = function(state_38348){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29112__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29112__auto____1.call(this,state_38348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29112__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29112__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29112__auto__;
})()
;})(switch__29111__auto__,c__29132__auto___38379,ch))
})();
var state__29134__auto__ = (function (){var statearr_38378 = f__29133__auto__.call(null);
(statearr_38378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29132__auto___38379);

return statearr_38378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29134__auto__);
});})(c__29132__auto___38379,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38400_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38400_SHARP_));
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
var base_path_38403 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38403){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38402){if((e38402 instanceof Error)){
var e = e38402;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38403], null));
} else {
var e = e38402;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38403))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38404){
var map__38413 = p__38404;
var map__38413__$1 = ((((!((map__38413 == null)))?((((map__38413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38413):map__38413);
var opts = map__38413__$1;
var build_id = cljs.core.get.call(null,map__38413__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38413,map__38413__$1,opts,build_id){
return (function (p__38415){
var vec__38416 = p__38415;
var seq__38417 = cljs.core.seq.call(null,vec__38416);
var first__38418 = cljs.core.first.call(null,seq__38417);
var seq__38417__$1 = cljs.core.next.call(null,seq__38417);
var map__38419 = first__38418;
var map__38419__$1 = ((((!((map__38419 == null)))?((((map__38419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38419):map__38419);
var msg = map__38419__$1;
var msg_name = cljs.core.get.call(null,map__38419__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38417__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38416,seq__38417,first__38418,seq__38417__$1,map__38419,map__38419__$1,msg,msg_name,_,map__38413,map__38413__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38416,seq__38417,first__38418,seq__38417__$1,map__38419,map__38419__$1,msg,msg_name,_,map__38413,map__38413__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38413,map__38413__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38427){
var vec__38428 = p__38427;
var seq__38429 = cljs.core.seq.call(null,vec__38428);
var first__38430 = cljs.core.first.call(null,seq__38429);
var seq__38429__$1 = cljs.core.next.call(null,seq__38429);
var map__38431 = first__38430;
var map__38431__$1 = ((((!((map__38431 == null)))?((((map__38431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38431):map__38431);
var msg = map__38431__$1;
var msg_name = cljs.core.get.call(null,map__38431__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38429__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38433){
var map__38445 = p__38433;
var map__38445__$1 = ((((!((map__38445 == null)))?((((map__38445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38445):map__38445);
var on_compile_warning = cljs.core.get.call(null,map__38445__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38445__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38445,map__38445__$1,on_compile_warning,on_compile_fail){
return (function (p__38447){
var vec__38448 = p__38447;
var seq__38449 = cljs.core.seq.call(null,vec__38448);
var first__38450 = cljs.core.first.call(null,seq__38449);
var seq__38449__$1 = cljs.core.next.call(null,seq__38449);
var map__38451 = first__38450;
var map__38451__$1 = ((((!((map__38451 == null)))?((((map__38451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38451):map__38451);
var msg = map__38451__$1;
var msg_name = cljs.core.get.call(null,map__38451__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38449__$1;
var pred__38453 = cljs.core._EQ_;
var expr__38454 = msg_name;
if(cljs.core.truth_(pred__38453.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38454))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38453.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38454))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38445,map__38445__$1,on_compile_warning,on_compile_fail))
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
var c__29132__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29132__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29133__auto__ = (function (){var switch__29111__auto__ = ((function (c__29132__auto__,msg_hist,msg_names,msg){
return (function (state_38682){
var state_val_38683 = (state_38682[(1)]);
if((state_val_38683 === (7))){
var inst_38602 = (state_38682[(2)]);
var state_38682__$1 = state_38682;
if(cljs.core.truth_(inst_38602)){
var statearr_38684_38734 = state_38682__$1;
(statearr_38684_38734[(1)] = (8));

} else {
var statearr_38685_38735 = state_38682__$1;
(statearr_38685_38735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (20))){
var inst_38676 = (state_38682[(2)]);
var state_38682__$1 = state_38682;
var statearr_38686_38736 = state_38682__$1;
(statearr_38686_38736[(2)] = inst_38676);

(statearr_38686_38736[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (27))){
var inst_38672 = (state_38682[(2)]);
var state_38682__$1 = state_38682;
var statearr_38687_38737 = state_38682__$1;
(statearr_38687_38737[(2)] = inst_38672);

(statearr_38687_38737[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (1))){
var inst_38595 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38682__$1 = state_38682;
if(cljs.core.truth_(inst_38595)){
var statearr_38688_38738 = state_38682__$1;
(statearr_38688_38738[(1)] = (2));

} else {
var statearr_38689_38739 = state_38682__$1;
(statearr_38689_38739[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (24))){
var inst_38674 = (state_38682[(2)]);
var state_38682__$1 = state_38682;
var statearr_38690_38740 = state_38682__$1;
(statearr_38690_38740[(2)] = inst_38674);

(statearr_38690_38740[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (4))){
var inst_38680 = (state_38682[(2)]);
var state_38682__$1 = state_38682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38682__$1,inst_38680);
} else {
if((state_val_38683 === (15))){
var inst_38678 = (state_38682[(2)]);
var state_38682__$1 = state_38682;
var statearr_38691_38741 = state_38682__$1;
(statearr_38691_38741[(2)] = inst_38678);

(statearr_38691_38741[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (21))){
var inst_38631 = (state_38682[(2)]);
var inst_38632 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38633 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38632);
var state_38682__$1 = (function (){var statearr_38692 = state_38682;
(statearr_38692[(7)] = inst_38631);

return statearr_38692;
})();
var statearr_38693_38742 = state_38682__$1;
(statearr_38693_38742[(2)] = inst_38633);

(statearr_38693_38742[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (31))){
var inst_38661 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38682__$1 = state_38682;
if(cljs.core.truth_(inst_38661)){
var statearr_38694_38743 = state_38682__$1;
(statearr_38694_38743[(1)] = (34));

} else {
var statearr_38695_38744 = state_38682__$1;
(statearr_38695_38744[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (32))){
var inst_38670 = (state_38682[(2)]);
var state_38682__$1 = state_38682;
var statearr_38696_38745 = state_38682__$1;
(statearr_38696_38745[(2)] = inst_38670);

(statearr_38696_38745[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (33))){
var inst_38657 = (state_38682[(2)]);
var inst_38658 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38659 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38658);
var state_38682__$1 = (function (){var statearr_38697 = state_38682;
(statearr_38697[(8)] = inst_38657);

return statearr_38697;
})();
var statearr_38698_38746 = state_38682__$1;
(statearr_38698_38746[(2)] = inst_38659);

(statearr_38698_38746[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (13))){
var inst_38616 = figwheel.client.heads_up.clear.call(null);
var state_38682__$1 = state_38682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38682__$1,(16),inst_38616);
} else {
if((state_val_38683 === (22))){
var inst_38637 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38638 = figwheel.client.heads_up.append_warning_message.call(null,inst_38637);
var state_38682__$1 = state_38682;
var statearr_38699_38747 = state_38682__$1;
(statearr_38699_38747[(2)] = inst_38638);

(statearr_38699_38747[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (36))){
var inst_38668 = (state_38682[(2)]);
var state_38682__$1 = state_38682;
var statearr_38700_38748 = state_38682__$1;
(statearr_38700_38748[(2)] = inst_38668);

(statearr_38700_38748[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (29))){
var inst_38648 = (state_38682[(2)]);
var inst_38649 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38650 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38649);
var state_38682__$1 = (function (){var statearr_38701 = state_38682;
(statearr_38701[(9)] = inst_38648);

return statearr_38701;
})();
var statearr_38702_38749 = state_38682__$1;
(statearr_38702_38749[(2)] = inst_38650);

(statearr_38702_38749[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (6))){
var inst_38597 = (state_38682[(10)]);
var state_38682__$1 = state_38682;
var statearr_38703_38750 = state_38682__$1;
(statearr_38703_38750[(2)] = inst_38597);

(statearr_38703_38750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (28))){
var inst_38644 = (state_38682[(2)]);
var inst_38645 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38646 = figwheel.client.heads_up.display_warning.call(null,inst_38645);
var state_38682__$1 = (function (){var statearr_38704 = state_38682;
(statearr_38704[(11)] = inst_38644);

return statearr_38704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38682__$1,(29),inst_38646);
} else {
if((state_val_38683 === (25))){
var inst_38642 = figwheel.client.heads_up.clear.call(null);
var state_38682__$1 = state_38682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38682__$1,(28),inst_38642);
} else {
if((state_val_38683 === (34))){
var inst_38663 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38682__$1 = state_38682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38682__$1,(37),inst_38663);
} else {
if((state_val_38683 === (17))){
var inst_38622 = (state_38682[(2)]);
var inst_38623 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38624 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38623);
var state_38682__$1 = (function (){var statearr_38705 = state_38682;
(statearr_38705[(12)] = inst_38622);

return statearr_38705;
})();
var statearr_38706_38751 = state_38682__$1;
(statearr_38706_38751[(2)] = inst_38624);

(statearr_38706_38751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (3))){
var inst_38614 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38682__$1 = state_38682;
if(cljs.core.truth_(inst_38614)){
var statearr_38707_38752 = state_38682__$1;
(statearr_38707_38752[(1)] = (13));

} else {
var statearr_38708_38753 = state_38682__$1;
(statearr_38708_38753[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (12))){
var inst_38610 = (state_38682[(2)]);
var state_38682__$1 = state_38682;
var statearr_38709_38754 = state_38682__$1;
(statearr_38709_38754[(2)] = inst_38610);

(statearr_38709_38754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (2))){
var inst_38597 = (state_38682[(10)]);
var inst_38597__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38682__$1 = (function (){var statearr_38710 = state_38682;
(statearr_38710[(10)] = inst_38597__$1);

return statearr_38710;
})();
if(cljs.core.truth_(inst_38597__$1)){
var statearr_38711_38755 = state_38682__$1;
(statearr_38711_38755[(1)] = (5));

} else {
var statearr_38712_38756 = state_38682__$1;
(statearr_38712_38756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (23))){
var inst_38640 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38682__$1 = state_38682;
if(cljs.core.truth_(inst_38640)){
var statearr_38713_38757 = state_38682__$1;
(statearr_38713_38757[(1)] = (25));

} else {
var statearr_38714_38758 = state_38682__$1;
(statearr_38714_38758[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (35))){
var state_38682__$1 = state_38682;
var statearr_38715_38759 = state_38682__$1;
(statearr_38715_38759[(2)] = null);

(statearr_38715_38759[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (19))){
var inst_38635 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38682__$1 = state_38682;
if(cljs.core.truth_(inst_38635)){
var statearr_38716_38760 = state_38682__$1;
(statearr_38716_38760[(1)] = (22));

} else {
var statearr_38717_38761 = state_38682__$1;
(statearr_38717_38761[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (11))){
var inst_38606 = (state_38682[(2)]);
var state_38682__$1 = state_38682;
var statearr_38718_38762 = state_38682__$1;
(statearr_38718_38762[(2)] = inst_38606);

(statearr_38718_38762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (9))){
var inst_38608 = figwheel.client.heads_up.clear.call(null);
var state_38682__$1 = state_38682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38682__$1,(12),inst_38608);
} else {
if((state_val_38683 === (5))){
var inst_38599 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38682__$1 = state_38682;
var statearr_38719_38763 = state_38682__$1;
(statearr_38719_38763[(2)] = inst_38599);

(statearr_38719_38763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (14))){
var inst_38626 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38682__$1 = state_38682;
if(cljs.core.truth_(inst_38626)){
var statearr_38720_38764 = state_38682__$1;
(statearr_38720_38764[(1)] = (18));

} else {
var statearr_38721_38765 = state_38682__$1;
(statearr_38721_38765[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (26))){
var inst_38652 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38682__$1 = state_38682;
if(cljs.core.truth_(inst_38652)){
var statearr_38722_38766 = state_38682__$1;
(statearr_38722_38766[(1)] = (30));

} else {
var statearr_38723_38767 = state_38682__$1;
(statearr_38723_38767[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (16))){
var inst_38618 = (state_38682[(2)]);
var inst_38619 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38620 = figwheel.client.heads_up.display_exception.call(null,inst_38619);
var state_38682__$1 = (function (){var statearr_38724 = state_38682;
(statearr_38724[(13)] = inst_38618);

return statearr_38724;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38682__$1,(17),inst_38620);
} else {
if((state_val_38683 === (30))){
var inst_38654 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38655 = figwheel.client.heads_up.display_warning.call(null,inst_38654);
var state_38682__$1 = state_38682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38682__$1,(33),inst_38655);
} else {
if((state_val_38683 === (10))){
var inst_38612 = (state_38682[(2)]);
var state_38682__$1 = state_38682;
var statearr_38725_38768 = state_38682__$1;
(statearr_38725_38768[(2)] = inst_38612);

(statearr_38725_38768[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (18))){
var inst_38628 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38629 = figwheel.client.heads_up.display_exception.call(null,inst_38628);
var state_38682__$1 = state_38682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38682__$1,(21),inst_38629);
} else {
if((state_val_38683 === (37))){
var inst_38665 = (state_38682[(2)]);
var state_38682__$1 = state_38682;
var statearr_38726_38769 = state_38682__$1;
(statearr_38726_38769[(2)] = inst_38665);

(statearr_38726_38769[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (8))){
var inst_38604 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38682__$1 = state_38682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38682__$1,(11),inst_38604);
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
});})(c__29132__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29111__auto__,c__29132__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29112__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29112__auto____0 = (function (){
var statearr_38730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38730[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29112__auto__);

(statearr_38730[(1)] = (1));

return statearr_38730;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29112__auto____1 = (function (state_38682){
while(true){
var ret_value__29113__auto__ = (function (){try{while(true){
var result__29114__auto__ = switch__29111__auto__.call(null,state_38682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29114__auto__;
}
break;
}
}catch (e38731){if((e38731 instanceof Object)){
var ex__29115__auto__ = e38731;
var statearr_38732_38770 = state_38682;
(statearr_38732_38770[(5)] = ex__29115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38771 = state_38682;
state_38682 = G__38771;
continue;
} else {
return ret_value__29113__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29112__auto__ = function(state_38682){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29112__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29112__auto____1.call(this,state_38682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29112__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29112__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29112__auto__;
})()
;})(switch__29111__auto__,c__29132__auto__,msg_hist,msg_names,msg))
})();
var state__29134__auto__ = (function (){var statearr_38733 = f__29133__auto__.call(null);
(statearr_38733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29132__auto__);

return statearr_38733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29134__auto__);
});})(c__29132__auto__,msg_hist,msg_names,msg))
);

return c__29132__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29132__auto___38834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29132__auto___38834,ch){
return (function (){
var f__29133__auto__ = (function (){var switch__29111__auto__ = ((function (c__29132__auto___38834,ch){
return (function (state_38817){
var state_val_38818 = (state_38817[(1)]);
if((state_val_38818 === (1))){
var state_38817__$1 = state_38817;
var statearr_38819_38835 = state_38817__$1;
(statearr_38819_38835[(2)] = null);

(statearr_38819_38835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38818 === (2))){
var state_38817__$1 = state_38817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38817__$1,(4),ch);
} else {
if((state_val_38818 === (3))){
var inst_38815 = (state_38817[(2)]);
var state_38817__$1 = state_38817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38817__$1,inst_38815);
} else {
if((state_val_38818 === (4))){
var inst_38805 = (state_38817[(7)]);
var inst_38805__$1 = (state_38817[(2)]);
var state_38817__$1 = (function (){var statearr_38820 = state_38817;
(statearr_38820[(7)] = inst_38805__$1);

return statearr_38820;
})();
if(cljs.core.truth_(inst_38805__$1)){
var statearr_38821_38836 = state_38817__$1;
(statearr_38821_38836[(1)] = (5));

} else {
var statearr_38822_38837 = state_38817__$1;
(statearr_38822_38837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38818 === (5))){
var inst_38805 = (state_38817[(7)]);
var inst_38807 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38805);
var state_38817__$1 = state_38817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38817__$1,(8),inst_38807);
} else {
if((state_val_38818 === (6))){
var state_38817__$1 = state_38817;
var statearr_38823_38838 = state_38817__$1;
(statearr_38823_38838[(2)] = null);

(statearr_38823_38838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38818 === (7))){
var inst_38813 = (state_38817[(2)]);
var state_38817__$1 = state_38817;
var statearr_38824_38839 = state_38817__$1;
(statearr_38824_38839[(2)] = inst_38813);

(statearr_38824_38839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38818 === (8))){
var inst_38809 = (state_38817[(2)]);
var state_38817__$1 = (function (){var statearr_38825 = state_38817;
(statearr_38825[(8)] = inst_38809);

return statearr_38825;
})();
var statearr_38826_38840 = state_38817__$1;
(statearr_38826_38840[(2)] = null);

(statearr_38826_38840[(1)] = (2));


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
});})(c__29132__auto___38834,ch))
;
return ((function (switch__29111__auto__,c__29132__auto___38834,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29112__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29112__auto____0 = (function (){
var statearr_38830 = [null,null,null,null,null,null,null,null,null];
(statearr_38830[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29112__auto__);

(statearr_38830[(1)] = (1));

return statearr_38830;
});
var figwheel$client$heads_up_plugin_$_state_machine__29112__auto____1 = (function (state_38817){
while(true){
var ret_value__29113__auto__ = (function (){try{while(true){
var result__29114__auto__ = switch__29111__auto__.call(null,state_38817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29114__auto__;
}
break;
}
}catch (e38831){if((e38831 instanceof Object)){
var ex__29115__auto__ = e38831;
var statearr_38832_38841 = state_38817;
(statearr_38832_38841[(5)] = ex__29115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38842 = state_38817;
state_38817 = G__38842;
continue;
} else {
return ret_value__29113__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29112__auto__ = function(state_38817){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29112__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29112__auto____1.call(this,state_38817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29112__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29112__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29112__auto__;
})()
;})(switch__29111__auto__,c__29132__auto___38834,ch))
})();
var state__29134__auto__ = (function (){var statearr_38833 = f__29133__auto__.call(null);
(statearr_38833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29132__auto___38834);

return statearr_38833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29134__auto__);
});})(c__29132__auto___38834,ch))
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
var c__29132__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29132__auto__){
return (function (){
var f__29133__auto__ = (function (){var switch__29111__auto__ = ((function (c__29132__auto__){
return (function (state_38863){
var state_val_38864 = (state_38863[(1)]);
if((state_val_38864 === (1))){
var inst_38858 = cljs.core.async.timeout.call(null,(3000));
var state_38863__$1 = state_38863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38863__$1,(2),inst_38858);
} else {
if((state_val_38864 === (2))){
var inst_38860 = (state_38863[(2)]);
var inst_38861 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38863__$1 = (function (){var statearr_38865 = state_38863;
(statearr_38865[(7)] = inst_38860);

return statearr_38865;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38863__$1,inst_38861);
} else {
return null;
}
}
});})(c__29132__auto__))
;
return ((function (switch__29111__auto__,c__29132__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29112__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29112__auto____0 = (function (){
var statearr_38869 = [null,null,null,null,null,null,null,null];
(statearr_38869[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29112__auto__);

(statearr_38869[(1)] = (1));

return statearr_38869;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29112__auto____1 = (function (state_38863){
while(true){
var ret_value__29113__auto__ = (function (){try{while(true){
var result__29114__auto__ = switch__29111__auto__.call(null,state_38863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29114__auto__;
}
break;
}
}catch (e38870){if((e38870 instanceof Object)){
var ex__29115__auto__ = e38870;
var statearr_38871_38873 = state_38863;
(statearr_38871_38873[(5)] = ex__29115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38874 = state_38863;
state_38863 = G__38874;
continue;
} else {
return ret_value__29113__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29112__auto__ = function(state_38863){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29112__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29112__auto____1.call(this,state_38863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29112__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29112__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29112__auto__;
})()
;})(switch__29111__auto__,c__29132__auto__))
})();
var state__29134__auto__ = (function (){var statearr_38872 = f__29133__auto__.call(null);
(statearr_38872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29132__auto__);

return statearr_38872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29134__auto__);
});})(c__29132__auto__))
);

return c__29132__auto__;
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
var c__29132__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29132__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__29133__auto__ = (function (){var switch__29111__auto__ = ((function (c__29132__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38897){
var state_val_38898 = (state_38897[(1)]);
if((state_val_38898 === (1))){
var inst_38891 = cljs.core.async.timeout.call(null,(2000));
var state_38897__$1 = state_38897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38897__$1,(2),inst_38891);
} else {
if((state_val_38898 === (2))){
var inst_38893 = (state_38897[(2)]);
var inst_38894 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_38895 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38894);
var state_38897__$1 = (function (){var statearr_38899 = state_38897;
(statearr_38899[(7)] = inst_38893);

return statearr_38899;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38897__$1,inst_38895);
} else {
return null;
}
}
});})(c__29132__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__29111__auto__,c__29132__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29112__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29112__auto____0 = (function (){
var statearr_38903 = [null,null,null,null,null,null,null,null];
(statearr_38903[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29112__auto__);

(statearr_38903[(1)] = (1));

return statearr_38903;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29112__auto____1 = (function (state_38897){
while(true){
var ret_value__29113__auto__ = (function (){try{while(true){
var result__29114__auto__ = switch__29111__auto__.call(null,state_38897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29114__auto__;
}
break;
}
}catch (e38904){if((e38904 instanceof Object)){
var ex__29115__auto__ = e38904;
var statearr_38905_38907 = state_38897;
(statearr_38905_38907[(5)] = ex__29115__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38908 = state_38897;
state_38897 = G__38908;
continue;
} else {
return ret_value__29113__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29112__auto__ = function(state_38897){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29112__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29112__auto____1.call(this,state_38897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29112__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29112__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29112__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29112__auto__;
})()
;})(switch__29111__auto__,c__29132__auto__,figwheel_version,temp__4657__auto__))
})();
var state__29134__auto__ = (function (){var statearr_38906 = f__29133__auto__.call(null);
(statearr_38906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29132__auto__);

return statearr_38906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29134__auto__);
});})(c__29132__auto__,figwheel_version,temp__4657__auto__))
);

return c__29132__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38909){
var map__38913 = p__38909;
var map__38913__$1 = ((((!((map__38913 == null)))?((((map__38913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38913):map__38913);
var file = cljs.core.get.call(null,map__38913__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38913__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38913__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38915 = "";
var G__38915__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__38915),cljs.core.str("file "),cljs.core.str(file)].join(''):G__38915);
var G__38915__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__38915__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__38915__$1);
if(cljs.core.truth_((function (){var and__25034__auto__ = line;
if(cljs.core.truth_(and__25034__auto__)){
return column;
} else {
return and__25034__auto__;
}
})())){
return [cljs.core.str(G__38915__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__38915__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38916){
var map__38923 = p__38916;
var map__38923__$1 = ((((!((map__38923 == null)))?((((map__38923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38923):map__38923);
var ed = map__38923__$1;
var formatted_exception = cljs.core.get.call(null,map__38923__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38923__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38923__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38925_38929 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38926_38930 = null;
var count__38927_38931 = (0);
var i__38928_38932 = (0);
while(true){
if((i__38928_38932 < count__38927_38931)){
var msg_38933 = cljs.core._nth.call(null,chunk__38926_38930,i__38928_38932);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38933);

var G__38934 = seq__38925_38929;
var G__38935 = chunk__38926_38930;
var G__38936 = count__38927_38931;
var G__38937 = (i__38928_38932 + (1));
seq__38925_38929 = G__38934;
chunk__38926_38930 = G__38935;
count__38927_38931 = G__38936;
i__38928_38932 = G__38937;
continue;
} else {
var temp__4657__auto___38938 = cljs.core.seq.call(null,seq__38925_38929);
if(temp__4657__auto___38938){
var seq__38925_38939__$1 = temp__4657__auto___38938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38925_38939__$1)){
var c__25857__auto___38940 = cljs.core.chunk_first.call(null,seq__38925_38939__$1);
var G__38941 = cljs.core.chunk_rest.call(null,seq__38925_38939__$1);
var G__38942 = c__25857__auto___38940;
var G__38943 = cljs.core.count.call(null,c__25857__auto___38940);
var G__38944 = (0);
seq__38925_38929 = G__38941;
chunk__38926_38930 = G__38942;
count__38927_38931 = G__38943;
i__38928_38932 = G__38944;
continue;
} else {
var msg_38945 = cljs.core.first.call(null,seq__38925_38939__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38945);

var G__38946 = cljs.core.next.call(null,seq__38925_38939__$1);
var G__38947 = null;
var G__38948 = (0);
var G__38949 = (0);
seq__38925_38929 = G__38946;
chunk__38926_38930 = G__38947;
count__38927_38931 = G__38948;
i__38928_38932 = G__38949;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38950){
var map__38953 = p__38950;
var map__38953__$1 = ((((!((map__38953 == null)))?((((map__38953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38953):map__38953);
var w = map__38953__$1;
var message = cljs.core.get.call(null,map__38953__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38965 = cljs.core.seq.call(null,plugins);
var chunk__38966 = null;
var count__38967 = (0);
var i__38968 = (0);
while(true){
if((i__38968 < count__38967)){
var vec__38969 = cljs.core._nth.call(null,chunk__38966,i__38968);
var k = cljs.core.nth.call(null,vec__38969,(0),null);
var plugin = cljs.core.nth.call(null,vec__38969,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38975 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38965,chunk__38966,count__38967,i__38968,pl_38975,vec__38969,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38975.call(null,msg_hist);
});})(seq__38965,chunk__38966,count__38967,i__38968,pl_38975,vec__38969,k,plugin))
);
} else {
}

var G__38976 = seq__38965;
var G__38977 = chunk__38966;
var G__38978 = count__38967;
var G__38979 = (i__38968 + (1));
seq__38965 = G__38976;
chunk__38966 = G__38977;
count__38967 = G__38978;
i__38968 = G__38979;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38965);
if(temp__4657__auto__){
var seq__38965__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38965__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__38965__$1);
var G__38980 = cljs.core.chunk_rest.call(null,seq__38965__$1);
var G__38981 = c__25857__auto__;
var G__38982 = cljs.core.count.call(null,c__25857__auto__);
var G__38983 = (0);
seq__38965 = G__38980;
chunk__38966 = G__38981;
count__38967 = G__38982;
i__38968 = G__38983;
continue;
} else {
var vec__38972 = cljs.core.first.call(null,seq__38965__$1);
var k = cljs.core.nth.call(null,vec__38972,(0),null);
var plugin = cljs.core.nth.call(null,vec__38972,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38984 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38965,chunk__38966,count__38967,i__38968,pl_38984,vec__38972,k,plugin,seq__38965__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38984.call(null,msg_hist);
});})(seq__38965,chunk__38966,count__38967,i__38968,pl_38984,vec__38972,k,plugin,seq__38965__$1,temp__4657__auto__))
);
} else {
}

var G__38985 = cljs.core.next.call(null,seq__38965__$1);
var G__38986 = null;
var G__38987 = (0);
var G__38988 = (0);
seq__38965 = G__38985;
chunk__38966 = G__38986;
count__38967 = G__38987;
i__38968 = G__38988;
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
var args38989 = [];
var len__26121__auto___38996 = arguments.length;
var i__26122__auto___38997 = (0);
while(true){
if((i__26122__auto___38997 < len__26121__auto___38996)){
args38989.push((arguments[i__26122__auto___38997]));

var G__38998 = (i__26122__auto___38997 + (1));
i__26122__auto___38997 = G__38998;
continue;
} else {
}
break;
}

var G__38991 = args38989.length;
switch (G__38991) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38989.length)].join('')));

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

var seq__38992_39000 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38993_39001 = null;
var count__38994_39002 = (0);
var i__38995_39003 = (0);
while(true){
if((i__38995_39003 < count__38994_39002)){
var msg_39004 = cljs.core._nth.call(null,chunk__38993_39001,i__38995_39003);
figwheel.client.socket.handle_incoming_message.call(null,msg_39004);

var G__39005 = seq__38992_39000;
var G__39006 = chunk__38993_39001;
var G__39007 = count__38994_39002;
var G__39008 = (i__38995_39003 + (1));
seq__38992_39000 = G__39005;
chunk__38993_39001 = G__39006;
count__38994_39002 = G__39007;
i__38995_39003 = G__39008;
continue;
} else {
var temp__4657__auto___39009 = cljs.core.seq.call(null,seq__38992_39000);
if(temp__4657__auto___39009){
var seq__38992_39010__$1 = temp__4657__auto___39009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38992_39010__$1)){
var c__25857__auto___39011 = cljs.core.chunk_first.call(null,seq__38992_39010__$1);
var G__39012 = cljs.core.chunk_rest.call(null,seq__38992_39010__$1);
var G__39013 = c__25857__auto___39011;
var G__39014 = cljs.core.count.call(null,c__25857__auto___39011);
var G__39015 = (0);
seq__38992_39000 = G__39012;
chunk__38993_39001 = G__39013;
count__38994_39002 = G__39014;
i__38995_39003 = G__39015;
continue;
} else {
var msg_39016 = cljs.core.first.call(null,seq__38992_39010__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39016);

var G__39017 = cljs.core.next.call(null,seq__38992_39010__$1);
var G__39018 = null;
var G__39019 = (0);
var G__39020 = (0);
seq__38992_39000 = G__39017;
chunk__38993_39001 = G__39018;
count__38994_39002 = G__39019;
i__38995_39003 = G__39020;
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
var len__26121__auto___39025 = arguments.length;
var i__26122__auto___39026 = (0);
while(true){
if((i__26122__auto___39026 < len__26121__auto___39025)){
args__26128__auto__.push((arguments[i__26122__auto___39026]));

var G__39027 = (i__26122__auto___39026 + (1));
i__26122__auto___39026 = G__39027;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39022){
var map__39023 = p__39022;
var map__39023__$1 = ((((!((map__39023 == null)))?((((map__39023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39023):map__39023);
var opts = map__39023__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39021){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39021));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39029){if((e39029 instanceof Error)){
var e = e39029;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39029;

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
return (function (p__39033){
var map__39034 = p__39033;
var map__39034__$1 = ((((!((map__39034 == null)))?((((map__39034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39034):map__39034);
var msg_name = cljs.core.get.call(null,map__39034__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1484456865319
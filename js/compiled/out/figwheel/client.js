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
var args45988 = [];
var len__26121__auto___45991 = arguments.length;
var i__26122__auto___45992 = (0);
while(true){
if((i__26122__auto___45992 < len__26121__auto___45991)){
args45988.push((arguments[i__26122__auto___45992]));

var G__45993 = (i__26122__auto___45992 + (1));
i__26122__auto___45992 = G__45993;
continue;
} else {
}
break;
}

var G__45990 = args45988.length;
switch (G__45990) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45988.length)].join('')));

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
var len__26121__auto___45996 = arguments.length;
var i__26122__auto___45997 = (0);
while(true){
if((i__26122__auto___45997 < len__26121__auto___45996)){
args__26128__auto__.push((arguments[i__26122__auto___45997]));

var G__45998 = (i__26122__auto___45997 + (1));
i__26122__auto___45997 = G__45998;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq45995){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45995));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26128__auto__ = [];
var len__26121__auto___46000 = arguments.length;
var i__26122__auto___46001 = (0);
while(true){
if((i__26122__auto___46001 < len__26121__auto___46000)){
args__26128__auto__.push((arguments[i__26122__auto___46001]));

var G__46002 = (i__26122__auto___46001 + (1));
i__26122__auto___46001 = G__46002;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq45999){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45999));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__46003 = cljs.core._EQ_;
var expr__46004 = (function (){var or__25046__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e46007){if((e46007 instanceof Error)){
var e = e46007;
return false;
} else {
throw e46007;

}
}})();
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__46003.call(null,"true",expr__46004))){
return true;
} else {
if(cljs.core.truth_(pred__46003.call(null,"false",expr__46004))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__46004)].join('')));
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
}catch (e46009){if((e46009 instanceof Error)){
var e = e46009;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e46009;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__46010){
var map__46013 = p__46010;
var map__46013__$1 = ((((!((map__46013 == null)))?((((map__46013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46013):map__46013);
var message = cljs.core.get.call(null,map__46013__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__46013__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__31183__auto___46175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto___46175,ch){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto___46175,ch){
return (function (state_46144){
var state_val_46145 = (state_46144[(1)]);
if((state_val_46145 === (7))){
var inst_46140 = (state_46144[(2)]);
var state_46144__$1 = state_46144;
var statearr_46146_46176 = state_46144__$1;
(statearr_46146_46176[(2)] = inst_46140);

(statearr_46146_46176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (1))){
var state_46144__$1 = state_46144;
var statearr_46147_46177 = state_46144__$1;
(statearr_46147_46177[(2)] = null);

(statearr_46147_46177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (4))){
var inst_46097 = (state_46144[(7)]);
var inst_46097__$1 = (state_46144[(2)]);
var state_46144__$1 = (function (){var statearr_46148 = state_46144;
(statearr_46148[(7)] = inst_46097__$1);

return statearr_46148;
})();
if(cljs.core.truth_(inst_46097__$1)){
var statearr_46149_46178 = state_46144__$1;
(statearr_46149_46178[(1)] = (5));

} else {
var statearr_46150_46179 = state_46144__$1;
(statearr_46150_46179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (15))){
var inst_46104 = (state_46144[(8)]);
var inst_46119 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46104);
var inst_46120 = cljs.core.first.call(null,inst_46119);
var inst_46121 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_46120);
var inst_46122 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_46121)].join('');
var inst_46123 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_46122);
var state_46144__$1 = state_46144;
var statearr_46151_46180 = state_46144__$1;
(statearr_46151_46180[(2)] = inst_46123);

(statearr_46151_46180[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (13))){
var inst_46128 = (state_46144[(2)]);
var state_46144__$1 = state_46144;
var statearr_46152_46181 = state_46144__$1;
(statearr_46152_46181[(2)] = inst_46128);

(statearr_46152_46181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (6))){
var state_46144__$1 = state_46144;
var statearr_46153_46182 = state_46144__$1;
(statearr_46153_46182[(2)] = null);

(statearr_46153_46182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (17))){
var inst_46126 = (state_46144[(2)]);
var state_46144__$1 = state_46144;
var statearr_46154_46183 = state_46144__$1;
(statearr_46154_46183[(2)] = inst_46126);

(statearr_46154_46183[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (3))){
var inst_46142 = (state_46144[(2)]);
var state_46144__$1 = state_46144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46144__$1,inst_46142);
} else {
if((state_val_46145 === (12))){
var inst_46103 = (state_46144[(9)]);
var inst_46117 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_46103,opts);
var state_46144__$1 = state_46144;
if(cljs.core.truth_(inst_46117)){
var statearr_46155_46184 = state_46144__$1;
(statearr_46155_46184[(1)] = (15));

} else {
var statearr_46156_46185 = state_46144__$1;
(statearr_46156_46185[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (2))){
var state_46144__$1 = state_46144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46144__$1,(4),ch);
} else {
if((state_val_46145 === (11))){
var inst_46104 = (state_46144[(8)]);
var inst_46109 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46110 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_46104);
var inst_46111 = cljs.core.async.timeout.call(null,(1000));
var inst_46112 = [inst_46110,inst_46111];
var inst_46113 = (new cljs.core.PersistentVector(null,2,(5),inst_46109,inst_46112,null));
var state_46144__$1 = state_46144;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46144__$1,(14),inst_46113);
} else {
if((state_val_46145 === (9))){
var inst_46104 = (state_46144[(8)]);
var inst_46130 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_46131 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46104);
var inst_46132 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46131);
var inst_46133 = [cljs.core.str("Not loading: "),cljs.core.str(inst_46132)].join('');
var inst_46134 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_46133);
var state_46144__$1 = (function (){var statearr_46157 = state_46144;
(statearr_46157[(10)] = inst_46130);

return statearr_46157;
})();
var statearr_46158_46186 = state_46144__$1;
(statearr_46158_46186[(2)] = inst_46134);

(statearr_46158_46186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (5))){
var inst_46097 = (state_46144[(7)]);
var inst_46099 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_46100 = (new cljs.core.PersistentArrayMap(null,2,inst_46099,null));
var inst_46101 = (new cljs.core.PersistentHashSet(null,inst_46100,null));
var inst_46102 = figwheel.client.focus_msgs.call(null,inst_46101,inst_46097);
var inst_46103 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_46102);
var inst_46104 = cljs.core.first.call(null,inst_46102);
var inst_46105 = figwheel.client.autoload_QMARK_.call(null);
var state_46144__$1 = (function (){var statearr_46159 = state_46144;
(statearr_46159[(8)] = inst_46104);

(statearr_46159[(9)] = inst_46103);

return statearr_46159;
})();
if(cljs.core.truth_(inst_46105)){
var statearr_46160_46187 = state_46144__$1;
(statearr_46160_46187[(1)] = (8));

} else {
var statearr_46161_46188 = state_46144__$1;
(statearr_46161_46188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (14))){
var inst_46115 = (state_46144[(2)]);
var state_46144__$1 = state_46144;
var statearr_46162_46189 = state_46144__$1;
(statearr_46162_46189[(2)] = inst_46115);

(statearr_46162_46189[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (16))){
var state_46144__$1 = state_46144;
var statearr_46163_46190 = state_46144__$1;
(statearr_46163_46190[(2)] = null);

(statearr_46163_46190[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (10))){
var inst_46136 = (state_46144[(2)]);
var state_46144__$1 = (function (){var statearr_46164 = state_46144;
(statearr_46164[(11)] = inst_46136);

return statearr_46164;
})();
var statearr_46165_46191 = state_46144__$1;
(statearr_46165_46191[(2)] = null);

(statearr_46165_46191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (8))){
var inst_46103 = (state_46144[(9)]);
var inst_46107 = figwheel.client.reload_file_state_QMARK_.call(null,inst_46103,opts);
var state_46144__$1 = state_46144;
if(cljs.core.truth_(inst_46107)){
var statearr_46166_46192 = state_46144__$1;
(statearr_46166_46192[(1)] = (11));

} else {
var statearr_46167_46193 = state_46144__$1;
(statearr_46167_46193[(1)] = (12));

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
});})(c__31183__auto___46175,ch))
;
return ((function (switch__31118__auto__,c__31183__auto___46175,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31119__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31119__auto____0 = (function (){
var statearr_46171 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46171[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31119__auto__);

(statearr_46171[(1)] = (1));

return statearr_46171;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31119__auto____1 = (function (state_46144){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_46144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e46172){if((e46172 instanceof Object)){
var ex__31122__auto__ = e46172;
var statearr_46173_46194 = state_46144;
(statearr_46173_46194[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46195 = state_46144;
state_46144 = G__46195;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31119__auto__ = function(state_46144){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31119__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31119__auto____1.call(this,state_46144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31119__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31119__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto___46175,ch))
})();
var state__31185__auto__ = (function (){var statearr_46174 = f__31184__auto__.call(null);
(statearr_46174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto___46175);

return statearr_46174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto___46175,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__46196_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__46196_SHARP_));
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
var base_path_46199 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_46199){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e46198){if((e46198 instanceof Error)){
var e = e46198;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_46199], null));
} else {
var e = e46198;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_46199))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__46200){
var map__46209 = p__46200;
var map__46209__$1 = ((((!((map__46209 == null)))?((((map__46209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46209):map__46209);
var opts = map__46209__$1;
var build_id = cljs.core.get.call(null,map__46209__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__46209,map__46209__$1,opts,build_id){
return (function (p__46211){
var vec__46212 = p__46211;
var seq__46213 = cljs.core.seq.call(null,vec__46212);
var first__46214 = cljs.core.first.call(null,seq__46213);
var seq__46213__$1 = cljs.core.next.call(null,seq__46213);
var map__46215 = first__46214;
var map__46215__$1 = ((((!((map__46215 == null)))?((((map__46215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46215):map__46215);
var msg = map__46215__$1;
var msg_name = cljs.core.get.call(null,map__46215__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46213__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__46212,seq__46213,first__46214,seq__46213__$1,map__46215,map__46215__$1,msg,msg_name,_,map__46209,map__46209__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__46212,seq__46213,first__46214,seq__46213__$1,map__46215,map__46215__$1,msg,msg_name,_,map__46209,map__46209__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__46209,map__46209__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__46223){
var vec__46224 = p__46223;
var seq__46225 = cljs.core.seq.call(null,vec__46224);
var first__46226 = cljs.core.first.call(null,seq__46225);
var seq__46225__$1 = cljs.core.next.call(null,seq__46225);
var map__46227 = first__46226;
var map__46227__$1 = ((((!((map__46227 == null)))?((((map__46227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46227):map__46227);
var msg = map__46227__$1;
var msg_name = cljs.core.get.call(null,map__46227__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46225__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__46229){
var map__46241 = p__46229;
var map__46241__$1 = ((((!((map__46241 == null)))?((((map__46241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46241):map__46241);
var on_compile_warning = cljs.core.get.call(null,map__46241__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__46241__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__46241,map__46241__$1,on_compile_warning,on_compile_fail){
return (function (p__46243){
var vec__46244 = p__46243;
var seq__46245 = cljs.core.seq.call(null,vec__46244);
var first__46246 = cljs.core.first.call(null,seq__46245);
var seq__46245__$1 = cljs.core.next.call(null,seq__46245);
var map__46247 = first__46246;
var map__46247__$1 = ((((!((map__46247 == null)))?((((map__46247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46247):map__46247);
var msg = map__46247__$1;
var msg_name = cljs.core.get.call(null,map__46247__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46245__$1;
var pred__46249 = cljs.core._EQ_;
var expr__46250 = msg_name;
if(cljs.core.truth_(pred__46249.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__46250))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__46249.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__46250))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__46241,map__46241__$1,on_compile_warning,on_compile_fail))
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
var c__31183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto__,msg_hist,msg_names,msg){
return (function (state_46478){
var state_val_46479 = (state_46478[(1)]);
if((state_val_46479 === (7))){
var inst_46398 = (state_46478[(2)]);
var state_46478__$1 = state_46478;
if(cljs.core.truth_(inst_46398)){
var statearr_46480_46530 = state_46478__$1;
(statearr_46480_46530[(1)] = (8));

} else {
var statearr_46481_46531 = state_46478__$1;
(statearr_46481_46531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (20))){
var inst_46472 = (state_46478[(2)]);
var state_46478__$1 = state_46478;
var statearr_46482_46532 = state_46478__$1;
(statearr_46482_46532[(2)] = inst_46472);

(statearr_46482_46532[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (27))){
var inst_46468 = (state_46478[(2)]);
var state_46478__$1 = state_46478;
var statearr_46483_46533 = state_46478__$1;
(statearr_46483_46533[(2)] = inst_46468);

(statearr_46483_46533[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (1))){
var inst_46391 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_46478__$1 = state_46478;
if(cljs.core.truth_(inst_46391)){
var statearr_46484_46534 = state_46478__$1;
(statearr_46484_46534[(1)] = (2));

} else {
var statearr_46485_46535 = state_46478__$1;
(statearr_46485_46535[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (24))){
var inst_46470 = (state_46478[(2)]);
var state_46478__$1 = state_46478;
var statearr_46486_46536 = state_46478__$1;
(statearr_46486_46536[(2)] = inst_46470);

(statearr_46486_46536[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (4))){
var inst_46476 = (state_46478[(2)]);
var state_46478__$1 = state_46478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46478__$1,inst_46476);
} else {
if((state_val_46479 === (15))){
var inst_46474 = (state_46478[(2)]);
var state_46478__$1 = state_46478;
var statearr_46487_46537 = state_46478__$1;
(statearr_46487_46537[(2)] = inst_46474);

(statearr_46487_46537[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (21))){
var inst_46427 = (state_46478[(2)]);
var inst_46428 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46429 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46428);
var state_46478__$1 = (function (){var statearr_46488 = state_46478;
(statearr_46488[(7)] = inst_46427);

return statearr_46488;
})();
var statearr_46489_46538 = state_46478__$1;
(statearr_46489_46538[(2)] = inst_46429);

(statearr_46489_46538[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (31))){
var inst_46457 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_46478__$1 = state_46478;
if(cljs.core.truth_(inst_46457)){
var statearr_46490_46539 = state_46478__$1;
(statearr_46490_46539[(1)] = (34));

} else {
var statearr_46491_46540 = state_46478__$1;
(statearr_46491_46540[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (32))){
var inst_46466 = (state_46478[(2)]);
var state_46478__$1 = state_46478;
var statearr_46492_46541 = state_46478__$1;
(statearr_46492_46541[(2)] = inst_46466);

(statearr_46492_46541[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (33))){
var inst_46453 = (state_46478[(2)]);
var inst_46454 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46455 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46454);
var state_46478__$1 = (function (){var statearr_46493 = state_46478;
(statearr_46493[(8)] = inst_46453);

return statearr_46493;
})();
var statearr_46494_46542 = state_46478__$1;
(statearr_46494_46542[(2)] = inst_46455);

(statearr_46494_46542[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (13))){
var inst_46412 = figwheel.client.heads_up.clear.call(null);
var state_46478__$1 = state_46478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46478__$1,(16),inst_46412);
} else {
if((state_val_46479 === (22))){
var inst_46433 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46434 = figwheel.client.heads_up.append_warning_message.call(null,inst_46433);
var state_46478__$1 = state_46478;
var statearr_46495_46543 = state_46478__$1;
(statearr_46495_46543[(2)] = inst_46434);

(statearr_46495_46543[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (36))){
var inst_46464 = (state_46478[(2)]);
var state_46478__$1 = state_46478;
var statearr_46496_46544 = state_46478__$1;
(statearr_46496_46544[(2)] = inst_46464);

(statearr_46496_46544[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (29))){
var inst_46444 = (state_46478[(2)]);
var inst_46445 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46446 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46445);
var state_46478__$1 = (function (){var statearr_46497 = state_46478;
(statearr_46497[(9)] = inst_46444);

return statearr_46497;
})();
var statearr_46498_46545 = state_46478__$1;
(statearr_46498_46545[(2)] = inst_46446);

(statearr_46498_46545[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (6))){
var inst_46393 = (state_46478[(10)]);
var state_46478__$1 = state_46478;
var statearr_46499_46546 = state_46478__$1;
(statearr_46499_46546[(2)] = inst_46393);

(statearr_46499_46546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (28))){
var inst_46440 = (state_46478[(2)]);
var inst_46441 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46442 = figwheel.client.heads_up.display_warning.call(null,inst_46441);
var state_46478__$1 = (function (){var statearr_46500 = state_46478;
(statearr_46500[(11)] = inst_46440);

return statearr_46500;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46478__$1,(29),inst_46442);
} else {
if((state_val_46479 === (25))){
var inst_46438 = figwheel.client.heads_up.clear.call(null);
var state_46478__$1 = state_46478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46478__$1,(28),inst_46438);
} else {
if((state_val_46479 === (34))){
var inst_46459 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46478__$1 = state_46478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46478__$1,(37),inst_46459);
} else {
if((state_val_46479 === (17))){
var inst_46418 = (state_46478[(2)]);
var inst_46419 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46420 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46419);
var state_46478__$1 = (function (){var statearr_46501 = state_46478;
(statearr_46501[(12)] = inst_46418);

return statearr_46501;
})();
var statearr_46502_46547 = state_46478__$1;
(statearr_46502_46547[(2)] = inst_46420);

(statearr_46502_46547[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (3))){
var inst_46410 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_46478__$1 = state_46478;
if(cljs.core.truth_(inst_46410)){
var statearr_46503_46548 = state_46478__$1;
(statearr_46503_46548[(1)] = (13));

} else {
var statearr_46504_46549 = state_46478__$1;
(statearr_46504_46549[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (12))){
var inst_46406 = (state_46478[(2)]);
var state_46478__$1 = state_46478;
var statearr_46505_46550 = state_46478__$1;
(statearr_46505_46550[(2)] = inst_46406);

(statearr_46505_46550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (2))){
var inst_46393 = (state_46478[(10)]);
var inst_46393__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_46478__$1 = (function (){var statearr_46506 = state_46478;
(statearr_46506[(10)] = inst_46393__$1);

return statearr_46506;
})();
if(cljs.core.truth_(inst_46393__$1)){
var statearr_46507_46551 = state_46478__$1;
(statearr_46507_46551[(1)] = (5));

} else {
var statearr_46508_46552 = state_46478__$1;
(statearr_46508_46552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (23))){
var inst_46436 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_46478__$1 = state_46478;
if(cljs.core.truth_(inst_46436)){
var statearr_46509_46553 = state_46478__$1;
(statearr_46509_46553[(1)] = (25));

} else {
var statearr_46510_46554 = state_46478__$1;
(statearr_46510_46554[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (35))){
var state_46478__$1 = state_46478;
var statearr_46511_46555 = state_46478__$1;
(statearr_46511_46555[(2)] = null);

(statearr_46511_46555[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (19))){
var inst_46431 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_46478__$1 = state_46478;
if(cljs.core.truth_(inst_46431)){
var statearr_46512_46556 = state_46478__$1;
(statearr_46512_46556[(1)] = (22));

} else {
var statearr_46513_46557 = state_46478__$1;
(statearr_46513_46557[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (11))){
var inst_46402 = (state_46478[(2)]);
var state_46478__$1 = state_46478;
var statearr_46514_46558 = state_46478__$1;
(statearr_46514_46558[(2)] = inst_46402);

(statearr_46514_46558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (9))){
var inst_46404 = figwheel.client.heads_up.clear.call(null);
var state_46478__$1 = state_46478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46478__$1,(12),inst_46404);
} else {
if((state_val_46479 === (5))){
var inst_46395 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_46478__$1 = state_46478;
var statearr_46515_46559 = state_46478__$1;
(statearr_46515_46559[(2)] = inst_46395);

(statearr_46515_46559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (14))){
var inst_46422 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_46478__$1 = state_46478;
if(cljs.core.truth_(inst_46422)){
var statearr_46516_46560 = state_46478__$1;
(statearr_46516_46560[(1)] = (18));

} else {
var statearr_46517_46561 = state_46478__$1;
(statearr_46517_46561[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (26))){
var inst_46448 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_46478__$1 = state_46478;
if(cljs.core.truth_(inst_46448)){
var statearr_46518_46562 = state_46478__$1;
(statearr_46518_46562[(1)] = (30));

} else {
var statearr_46519_46563 = state_46478__$1;
(statearr_46519_46563[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (16))){
var inst_46414 = (state_46478[(2)]);
var inst_46415 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46416 = figwheel.client.heads_up.display_exception.call(null,inst_46415);
var state_46478__$1 = (function (){var statearr_46520 = state_46478;
(statearr_46520[(13)] = inst_46414);

return statearr_46520;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46478__$1,(17),inst_46416);
} else {
if((state_val_46479 === (30))){
var inst_46450 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46451 = figwheel.client.heads_up.display_warning.call(null,inst_46450);
var state_46478__$1 = state_46478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46478__$1,(33),inst_46451);
} else {
if((state_val_46479 === (10))){
var inst_46408 = (state_46478[(2)]);
var state_46478__$1 = state_46478;
var statearr_46521_46564 = state_46478__$1;
(statearr_46521_46564[(2)] = inst_46408);

(statearr_46521_46564[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (18))){
var inst_46424 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46425 = figwheel.client.heads_up.display_exception.call(null,inst_46424);
var state_46478__$1 = state_46478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46478__$1,(21),inst_46425);
} else {
if((state_val_46479 === (37))){
var inst_46461 = (state_46478[(2)]);
var state_46478__$1 = state_46478;
var statearr_46522_46565 = state_46478__$1;
(statearr_46522_46565[(2)] = inst_46461);

(statearr_46522_46565[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46479 === (8))){
var inst_46400 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46478__$1 = state_46478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46478__$1,(11),inst_46400);
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
});})(c__31183__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31118__auto__,c__31183__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31119__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31119__auto____0 = (function (){
var statearr_46526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46526[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31119__auto__);

(statearr_46526[(1)] = (1));

return statearr_46526;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31119__auto____1 = (function (state_46478){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_46478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e46527){if((e46527 instanceof Object)){
var ex__31122__auto__ = e46527;
var statearr_46528_46566 = state_46478;
(statearr_46528_46566[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46567 = state_46478;
state_46478 = G__46567;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31119__auto__ = function(state_46478){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31119__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31119__auto____1.call(this,state_46478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31119__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31119__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto__,msg_hist,msg_names,msg))
})();
var state__31185__auto__ = (function (){var statearr_46529 = f__31184__auto__.call(null);
(statearr_46529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto__);

return statearr_46529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto__,msg_hist,msg_names,msg))
);

return c__31183__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31183__auto___46630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto___46630,ch){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto___46630,ch){
return (function (state_46613){
var state_val_46614 = (state_46613[(1)]);
if((state_val_46614 === (1))){
var state_46613__$1 = state_46613;
var statearr_46615_46631 = state_46613__$1;
(statearr_46615_46631[(2)] = null);

(statearr_46615_46631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46614 === (2))){
var state_46613__$1 = state_46613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46613__$1,(4),ch);
} else {
if((state_val_46614 === (3))){
var inst_46611 = (state_46613[(2)]);
var state_46613__$1 = state_46613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46613__$1,inst_46611);
} else {
if((state_val_46614 === (4))){
var inst_46601 = (state_46613[(7)]);
var inst_46601__$1 = (state_46613[(2)]);
var state_46613__$1 = (function (){var statearr_46616 = state_46613;
(statearr_46616[(7)] = inst_46601__$1);

return statearr_46616;
})();
if(cljs.core.truth_(inst_46601__$1)){
var statearr_46617_46632 = state_46613__$1;
(statearr_46617_46632[(1)] = (5));

} else {
var statearr_46618_46633 = state_46613__$1;
(statearr_46618_46633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46614 === (5))){
var inst_46601 = (state_46613[(7)]);
var inst_46603 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_46601);
var state_46613__$1 = state_46613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46613__$1,(8),inst_46603);
} else {
if((state_val_46614 === (6))){
var state_46613__$1 = state_46613;
var statearr_46619_46634 = state_46613__$1;
(statearr_46619_46634[(2)] = null);

(statearr_46619_46634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46614 === (7))){
var inst_46609 = (state_46613[(2)]);
var state_46613__$1 = state_46613;
var statearr_46620_46635 = state_46613__$1;
(statearr_46620_46635[(2)] = inst_46609);

(statearr_46620_46635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46614 === (8))){
var inst_46605 = (state_46613[(2)]);
var state_46613__$1 = (function (){var statearr_46621 = state_46613;
(statearr_46621[(8)] = inst_46605);

return statearr_46621;
})();
var statearr_46622_46636 = state_46613__$1;
(statearr_46622_46636[(2)] = null);

(statearr_46622_46636[(1)] = (2));


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
});})(c__31183__auto___46630,ch))
;
return ((function (switch__31118__auto__,c__31183__auto___46630,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31119__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31119__auto____0 = (function (){
var statearr_46626 = [null,null,null,null,null,null,null,null,null];
(statearr_46626[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31119__auto__);

(statearr_46626[(1)] = (1));

return statearr_46626;
});
var figwheel$client$heads_up_plugin_$_state_machine__31119__auto____1 = (function (state_46613){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_46613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e46627){if((e46627 instanceof Object)){
var ex__31122__auto__ = e46627;
var statearr_46628_46637 = state_46613;
(statearr_46628_46637[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46638 = state_46613;
state_46613 = G__46638;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31119__auto__ = function(state_46613){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31119__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31119__auto____1.call(this,state_46613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31119__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31119__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto___46630,ch))
})();
var state__31185__auto__ = (function (){var statearr_46629 = f__31184__auto__.call(null);
(statearr_46629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto___46630);

return statearr_46629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto___46630,ch))
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
var c__31183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto__){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto__){
return (function (state_46659){
var state_val_46660 = (state_46659[(1)]);
if((state_val_46660 === (1))){
var inst_46654 = cljs.core.async.timeout.call(null,(3000));
var state_46659__$1 = state_46659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46659__$1,(2),inst_46654);
} else {
if((state_val_46660 === (2))){
var inst_46656 = (state_46659[(2)]);
var inst_46657 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_46659__$1 = (function (){var statearr_46661 = state_46659;
(statearr_46661[(7)] = inst_46656);

return statearr_46661;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46659__$1,inst_46657);
} else {
return null;
}
}
});})(c__31183__auto__))
;
return ((function (switch__31118__auto__,c__31183__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31119__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31119__auto____0 = (function (){
var statearr_46665 = [null,null,null,null,null,null,null,null];
(statearr_46665[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31119__auto__);

(statearr_46665[(1)] = (1));

return statearr_46665;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31119__auto____1 = (function (state_46659){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_46659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e46666){if((e46666 instanceof Object)){
var ex__31122__auto__ = e46666;
var statearr_46667_46669 = state_46659;
(statearr_46667_46669[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46670 = state_46659;
state_46659 = G__46670;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31119__auto__ = function(state_46659){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31119__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31119__auto____1.call(this,state_46659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31119__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31119__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto__))
})();
var state__31185__auto__ = (function (){var statearr_46668 = f__31184__auto__.call(null);
(statearr_46668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto__);

return statearr_46668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto__))
);

return c__31183__auto__;
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
var c__31183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31183__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__31184__auto__ = (function (){var switch__31118__auto__ = ((function (c__31183__auto__,figwheel_version,temp__4657__auto__){
return (function (state_46693){
var state_val_46694 = (state_46693[(1)]);
if((state_val_46694 === (1))){
var inst_46687 = cljs.core.async.timeout.call(null,(2000));
var state_46693__$1 = state_46693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46693__$1,(2),inst_46687);
} else {
if((state_val_46694 === (2))){
var inst_46689 = (state_46693[(2)]);
var inst_46690 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_46691 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_46690);
var state_46693__$1 = (function (){var statearr_46695 = state_46693;
(statearr_46695[(7)] = inst_46689);

return statearr_46695;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46693__$1,inst_46691);
} else {
return null;
}
}
});})(c__31183__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__31118__auto__,c__31183__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31119__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31119__auto____0 = (function (){
var statearr_46699 = [null,null,null,null,null,null,null,null];
(statearr_46699[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31119__auto__);

(statearr_46699[(1)] = (1));

return statearr_46699;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31119__auto____1 = (function (state_46693){
while(true){
var ret_value__31120__auto__ = (function (){try{while(true){
var result__31121__auto__ = switch__31118__auto__.call(null,state_46693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31121__auto__;
}
break;
}
}catch (e46700){if((e46700 instanceof Object)){
var ex__31122__auto__ = e46700;
var statearr_46701_46703 = state_46693;
(statearr_46701_46703[(5)] = ex__31122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46704 = state_46693;
state_46693 = G__46704;
continue;
} else {
return ret_value__31120__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31119__auto__ = function(state_46693){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31119__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31119__auto____1.call(this,state_46693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31119__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31119__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31119__auto__;
})()
;})(switch__31118__auto__,c__31183__auto__,figwheel_version,temp__4657__auto__))
})();
var state__31185__auto__ = (function (){var statearr_46702 = f__31184__auto__.call(null);
(statearr_46702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31183__auto__);

return statearr_46702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31185__auto__);
});})(c__31183__auto__,figwheel_version,temp__4657__auto__))
);

return c__31183__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__46705){
var map__46709 = p__46705;
var map__46709__$1 = ((((!((map__46709 == null)))?((((map__46709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46709):map__46709);
var file = cljs.core.get.call(null,map__46709__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__46709__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__46709__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__46711 = "";
var G__46711__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__46711),cljs.core.str("file "),cljs.core.str(file)].join(''):G__46711);
var G__46711__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__46711__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__46711__$1);
if(cljs.core.truth_((function (){var and__25034__auto__ = line;
if(cljs.core.truth_(and__25034__auto__)){
return column;
} else {
return and__25034__auto__;
}
})())){
return [cljs.core.str(G__46711__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__46711__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__46712){
var map__46719 = p__46712;
var map__46719__$1 = ((((!((map__46719 == null)))?((((map__46719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46719):map__46719);
var ed = map__46719__$1;
var formatted_exception = cljs.core.get.call(null,map__46719__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__46719__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__46719__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__46721_46725 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__46722_46726 = null;
var count__46723_46727 = (0);
var i__46724_46728 = (0);
while(true){
if((i__46724_46728 < count__46723_46727)){
var msg_46729 = cljs.core._nth.call(null,chunk__46722_46726,i__46724_46728);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46729);

var G__46730 = seq__46721_46725;
var G__46731 = chunk__46722_46726;
var G__46732 = count__46723_46727;
var G__46733 = (i__46724_46728 + (1));
seq__46721_46725 = G__46730;
chunk__46722_46726 = G__46731;
count__46723_46727 = G__46732;
i__46724_46728 = G__46733;
continue;
} else {
var temp__4657__auto___46734 = cljs.core.seq.call(null,seq__46721_46725);
if(temp__4657__auto___46734){
var seq__46721_46735__$1 = temp__4657__auto___46734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46721_46735__$1)){
var c__25857__auto___46736 = cljs.core.chunk_first.call(null,seq__46721_46735__$1);
var G__46737 = cljs.core.chunk_rest.call(null,seq__46721_46735__$1);
var G__46738 = c__25857__auto___46736;
var G__46739 = cljs.core.count.call(null,c__25857__auto___46736);
var G__46740 = (0);
seq__46721_46725 = G__46737;
chunk__46722_46726 = G__46738;
count__46723_46727 = G__46739;
i__46724_46728 = G__46740;
continue;
} else {
var msg_46741 = cljs.core.first.call(null,seq__46721_46735__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46741);

var G__46742 = cljs.core.next.call(null,seq__46721_46735__$1);
var G__46743 = null;
var G__46744 = (0);
var G__46745 = (0);
seq__46721_46725 = G__46742;
chunk__46722_46726 = G__46743;
count__46723_46727 = G__46744;
i__46724_46728 = G__46745;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__46746){
var map__46749 = p__46746;
var map__46749__$1 = ((((!((map__46749 == null)))?((((map__46749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46749):map__46749);
var w = map__46749__$1;
var message = cljs.core.get.call(null,map__46749__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__46761 = cljs.core.seq.call(null,plugins);
var chunk__46762 = null;
var count__46763 = (0);
var i__46764 = (0);
while(true){
if((i__46764 < count__46763)){
var vec__46765 = cljs.core._nth.call(null,chunk__46762,i__46764);
var k = cljs.core.nth.call(null,vec__46765,(0),null);
var plugin = cljs.core.nth.call(null,vec__46765,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46771 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46761,chunk__46762,count__46763,i__46764,pl_46771,vec__46765,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_46771.call(null,msg_hist);
});})(seq__46761,chunk__46762,count__46763,i__46764,pl_46771,vec__46765,k,plugin))
);
} else {
}

var G__46772 = seq__46761;
var G__46773 = chunk__46762;
var G__46774 = count__46763;
var G__46775 = (i__46764 + (1));
seq__46761 = G__46772;
chunk__46762 = G__46773;
count__46763 = G__46774;
i__46764 = G__46775;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46761);
if(temp__4657__auto__){
var seq__46761__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46761__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__46761__$1);
var G__46776 = cljs.core.chunk_rest.call(null,seq__46761__$1);
var G__46777 = c__25857__auto__;
var G__46778 = cljs.core.count.call(null,c__25857__auto__);
var G__46779 = (0);
seq__46761 = G__46776;
chunk__46762 = G__46777;
count__46763 = G__46778;
i__46764 = G__46779;
continue;
} else {
var vec__46768 = cljs.core.first.call(null,seq__46761__$1);
var k = cljs.core.nth.call(null,vec__46768,(0),null);
var plugin = cljs.core.nth.call(null,vec__46768,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46780 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46761,chunk__46762,count__46763,i__46764,pl_46780,vec__46768,k,plugin,seq__46761__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_46780.call(null,msg_hist);
});})(seq__46761,chunk__46762,count__46763,i__46764,pl_46780,vec__46768,k,plugin,seq__46761__$1,temp__4657__auto__))
);
} else {
}

var G__46781 = cljs.core.next.call(null,seq__46761__$1);
var G__46782 = null;
var G__46783 = (0);
var G__46784 = (0);
seq__46761 = G__46781;
chunk__46762 = G__46782;
count__46763 = G__46783;
i__46764 = G__46784;
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
var args46785 = [];
var len__26121__auto___46792 = arguments.length;
var i__26122__auto___46793 = (0);
while(true){
if((i__26122__auto___46793 < len__26121__auto___46792)){
args46785.push((arguments[i__26122__auto___46793]));

var G__46794 = (i__26122__auto___46793 + (1));
i__26122__auto___46793 = G__46794;
continue;
} else {
}
break;
}

var G__46787 = args46785.length;
switch (G__46787) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46785.length)].join('')));

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

var seq__46788_46796 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__46789_46797 = null;
var count__46790_46798 = (0);
var i__46791_46799 = (0);
while(true){
if((i__46791_46799 < count__46790_46798)){
var msg_46800 = cljs.core._nth.call(null,chunk__46789_46797,i__46791_46799);
figwheel.client.socket.handle_incoming_message.call(null,msg_46800);

var G__46801 = seq__46788_46796;
var G__46802 = chunk__46789_46797;
var G__46803 = count__46790_46798;
var G__46804 = (i__46791_46799 + (1));
seq__46788_46796 = G__46801;
chunk__46789_46797 = G__46802;
count__46790_46798 = G__46803;
i__46791_46799 = G__46804;
continue;
} else {
var temp__4657__auto___46805 = cljs.core.seq.call(null,seq__46788_46796);
if(temp__4657__auto___46805){
var seq__46788_46806__$1 = temp__4657__auto___46805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46788_46806__$1)){
var c__25857__auto___46807 = cljs.core.chunk_first.call(null,seq__46788_46806__$1);
var G__46808 = cljs.core.chunk_rest.call(null,seq__46788_46806__$1);
var G__46809 = c__25857__auto___46807;
var G__46810 = cljs.core.count.call(null,c__25857__auto___46807);
var G__46811 = (0);
seq__46788_46796 = G__46808;
chunk__46789_46797 = G__46809;
count__46790_46798 = G__46810;
i__46791_46799 = G__46811;
continue;
} else {
var msg_46812 = cljs.core.first.call(null,seq__46788_46806__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_46812);

var G__46813 = cljs.core.next.call(null,seq__46788_46806__$1);
var G__46814 = null;
var G__46815 = (0);
var G__46816 = (0);
seq__46788_46796 = G__46813;
chunk__46789_46797 = G__46814;
count__46790_46798 = G__46815;
i__46791_46799 = G__46816;
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
var len__26121__auto___46821 = arguments.length;
var i__26122__auto___46822 = (0);
while(true){
if((i__26122__auto___46822 < len__26121__auto___46821)){
args__26128__auto__.push((arguments[i__26122__auto___46822]));

var G__46823 = (i__26122__auto___46822 + (1));
i__26122__auto___46822 = G__46823;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__46818){
var map__46819 = p__46818;
var map__46819__$1 = ((((!((map__46819 == null)))?((((map__46819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46819):map__46819);
var opts = map__46819__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq46817){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46817));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e46825){if((e46825 instanceof Error)){
var e = e46825;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e46825;

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
return (function (p__46829){
var map__46830 = p__46829;
var map__46830__$1 = ((((!((map__46830 == null)))?((((map__46830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46830):map__46830);
var msg_name = cljs.core.get.call(null,map__46830__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1484366737220
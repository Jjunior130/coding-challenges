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
var args47827 = [];
var len__26121__auto___47830 = arguments.length;
var i__26122__auto___47831 = (0);
while(true){
if((i__26122__auto___47831 < len__26121__auto___47830)){
args47827.push((arguments[i__26122__auto___47831]));

var G__47832 = (i__26122__auto___47831 + (1));
i__26122__auto___47831 = G__47832;
continue;
} else {
}
break;
}

var G__47829 = args47827.length;
switch (G__47829) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47827.length)].join('')));

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
var len__26121__auto___47835 = arguments.length;
var i__26122__auto___47836 = (0);
while(true){
if((i__26122__auto___47836 < len__26121__auto___47835)){
args__26128__auto__.push((arguments[i__26122__auto___47836]));

var G__47837 = (i__26122__auto___47836 + (1));
i__26122__auto___47836 = G__47837;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq47834){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47834));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26128__auto__ = [];
var len__26121__auto___47839 = arguments.length;
var i__26122__auto___47840 = (0);
while(true){
if((i__26122__auto___47840 < len__26121__auto___47839)){
args__26128__auto__.push((arguments[i__26122__auto___47840]));

var G__47841 = (i__26122__auto___47840 + (1));
i__26122__auto___47840 = G__47841;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq47838){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47838));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__47842 = cljs.core._EQ_;
var expr__47843 = (function (){var or__25046__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e47846){if((e47846 instanceof Error)){
var e = e47846;
return false;
} else {
throw e47846;

}
}})();
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__47842.call(null,"true",expr__47843))){
return true;
} else {
if(cljs.core.truth_(pred__47842.call(null,"false",expr__47843))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__47843)].join('')));
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
}catch (e47848){if((e47848 instanceof Error)){
var e = e47848;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e47848;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__47849){
var map__47852 = p__47849;
var map__47852__$1 = ((((!((map__47852 == null)))?((((map__47852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47852):map__47852);
var message = cljs.core.get.call(null,map__47852__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__47852__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__31761__auto___48014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto___48014,ch){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto___48014,ch){
return (function (state_47983){
var state_val_47984 = (state_47983[(1)]);
if((state_val_47984 === (7))){
var inst_47979 = (state_47983[(2)]);
var state_47983__$1 = state_47983;
var statearr_47985_48015 = state_47983__$1;
(statearr_47985_48015[(2)] = inst_47979);

(statearr_47985_48015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47984 === (1))){
var state_47983__$1 = state_47983;
var statearr_47986_48016 = state_47983__$1;
(statearr_47986_48016[(2)] = null);

(statearr_47986_48016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47984 === (4))){
var inst_47936 = (state_47983[(7)]);
var inst_47936__$1 = (state_47983[(2)]);
var state_47983__$1 = (function (){var statearr_47987 = state_47983;
(statearr_47987[(7)] = inst_47936__$1);

return statearr_47987;
})();
if(cljs.core.truth_(inst_47936__$1)){
var statearr_47988_48017 = state_47983__$1;
(statearr_47988_48017[(1)] = (5));

} else {
var statearr_47989_48018 = state_47983__$1;
(statearr_47989_48018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47984 === (15))){
var inst_47943 = (state_47983[(8)]);
var inst_47958 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47943);
var inst_47959 = cljs.core.first.call(null,inst_47958);
var inst_47960 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_47959);
var inst_47961 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_47960)].join('');
var inst_47962 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_47961);
var state_47983__$1 = state_47983;
var statearr_47990_48019 = state_47983__$1;
(statearr_47990_48019[(2)] = inst_47962);

(statearr_47990_48019[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47984 === (13))){
var inst_47967 = (state_47983[(2)]);
var state_47983__$1 = state_47983;
var statearr_47991_48020 = state_47983__$1;
(statearr_47991_48020[(2)] = inst_47967);

(statearr_47991_48020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47984 === (6))){
var state_47983__$1 = state_47983;
var statearr_47992_48021 = state_47983__$1;
(statearr_47992_48021[(2)] = null);

(statearr_47992_48021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47984 === (17))){
var inst_47965 = (state_47983[(2)]);
var state_47983__$1 = state_47983;
var statearr_47993_48022 = state_47983__$1;
(statearr_47993_48022[(2)] = inst_47965);

(statearr_47993_48022[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47984 === (3))){
var inst_47981 = (state_47983[(2)]);
var state_47983__$1 = state_47983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47983__$1,inst_47981);
} else {
if((state_val_47984 === (12))){
var inst_47942 = (state_47983[(9)]);
var inst_47956 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_47942,opts);
var state_47983__$1 = state_47983;
if(cljs.core.truth_(inst_47956)){
var statearr_47994_48023 = state_47983__$1;
(statearr_47994_48023[(1)] = (15));

} else {
var statearr_47995_48024 = state_47983__$1;
(statearr_47995_48024[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47984 === (2))){
var state_47983__$1 = state_47983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47983__$1,(4),ch);
} else {
if((state_val_47984 === (11))){
var inst_47943 = (state_47983[(8)]);
var inst_47948 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47949 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_47943);
var inst_47950 = cljs.core.async.timeout.call(null,(1000));
var inst_47951 = [inst_47949,inst_47950];
var inst_47952 = (new cljs.core.PersistentVector(null,2,(5),inst_47948,inst_47951,null));
var state_47983__$1 = state_47983;
return cljs.core.async.ioc_alts_BANG_.call(null,state_47983__$1,(14),inst_47952);
} else {
if((state_val_47984 === (9))){
var inst_47943 = (state_47983[(8)]);
var inst_47969 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_47970 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47943);
var inst_47971 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47970);
var inst_47972 = [cljs.core.str("Not loading: "),cljs.core.str(inst_47971)].join('');
var inst_47973 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_47972);
var state_47983__$1 = (function (){var statearr_47996 = state_47983;
(statearr_47996[(10)] = inst_47969);

return statearr_47996;
})();
var statearr_47997_48025 = state_47983__$1;
(statearr_47997_48025[(2)] = inst_47973);

(statearr_47997_48025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47984 === (5))){
var inst_47936 = (state_47983[(7)]);
var inst_47938 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_47939 = (new cljs.core.PersistentArrayMap(null,2,inst_47938,null));
var inst_47940 = (new cljs.core.PersistentHashSet(null,inst_47939,null));
var inst_47941 = figwheel.client.focus_msgs.call(null,inst_47940,inst_47936);
var inst_47942 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_47941);
var inst_47943 = cljs.core.first.call(null,inst_47941);
var inst_47944 = figwheel.client.autoload_QMARK_.call(null);
var state_47983__$1 = (function (){var statearr_47998 = state_47983;
(statearr_47998[(8)] = inst_47943);

(statearr_47998[(9)] = inst_47942);

return statearr_47998;
})();
if(cljs.core.truth_(inst_47944)){
var statearr_47999_48026 = state_47983__$1;
(statearr_47999_48026[(1)] = (8));

} else {
var statearr_48000_48027 = state_47983__$1;
(statearr_48000_48027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47984 === (14))){
var inst_47954 = (state_47983[(2)]);
var state_47983__$1 = state_47983;
var statearr_48001_48028 = state_47983__$1;
(statearr_48001_48028[(2)] = inst_47954);

(statearr_48001_48028[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47984 === (16))){
var state_47983__$1 = state_47983;
var statearr_48002_48029 = state_47983__$1;
(statearr_48002_48029[(2)] = null);

(statearr_48002_48029[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47984 === (10))){
var inst_47975 = (state_47983[(2)]);
var state_47983__$1 = (function (){var statearr_48003 = state_47983;
(statearr_48003[(11)] = inst_47975);

return statearr_48003;
})();
var statearr_48004_48030 = state_47983__$1;
(statearr_48004_48030[(2)] = null);

(statearr_48004_48030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47984 === (8))){
var inst_47942 = (state_47983[(9)]);
var inst_47946 = figwheel.client.reload_file_state_QMARK_.call(null,inst_47942,opts);
var state_47983__$1 = state_47983;
if(cljs.core.truth_(inst_47946)){
var statearr_48005_48031 = state_47983__$1;
(statearr_48005_48031[(1)] = (11));

} else {
var statearr_48006_48032 = state_47983__$1;
(statearr_48006_48032[(1)] = (12));

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
});})(c__31761__auto___48014,ch))
;
return ((function (switch__31740__auto__,c__31761__auto___48014,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31741__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31741__auto____0 = (function (){
var statearr_48010 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48010[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31741__auto__);

(statearr_48010[(1)] = (1));

return statearr_48010;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31741__auto____1 = (function (state_47983){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_47983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e48011){if((e48011 instanceof Object)){
var ex__31744__auto__ = e48011;
var statearr_48012_48033 = state_47983;
(statearr_48012_48033[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48034 = state_47983;
state_47983 = G__48034;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31741__auto__ = function(state_47983){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31741__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31741__auto____1.call(this,state_47983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31741__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31741__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto___48014,ch))
})();
var state__31763__auto__ = (function (){var statearr_48013 = f__31762__auto__.call(null);
(statearr_48013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto___48014);

return statearr_48013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto___48014,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__48035_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__48035_SHARP_));
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
var base_path_48038 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_48038){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e48037){if((e48037 instanceof Error)){
var e = e48037;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_48038], null));
} else {
var e = e48037;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_48038))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__48039){
var map__48048 = p__48039;
var map__48048__$1 = ((((!((map__48048 == null)))?((((map__48048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48048):map__48048);
var opts = map__48048__$1;
var build_id = cljs.core.get.call(null,map__48048__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__48048,map__48048__$1,opts,build_id){
return (function (p__48050){
var vec__48051 = p__48050;
var seq__48052 = cljs.core.seq.call(null,vec__48051);
var first__48053 = cljs.core.first.call(null,seq__48052);
var seq__48052__$1 = cljs.core.next.call(null,seq__48052);
var map__48054 = first__48053;
var map__48054__$1 = ((((!((map__48054 == null)))?((((map__48054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48054):map__48054);
var msg = map__48054__$1;
var msg_name = cljs.core.get.call(null,map__48054__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48052__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__48051,seq__48052,first__48053,seq__48052__$1,map__48054,map__48054__$1,msg,msg_name,_,map__48048,map__48048__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__48051,seq__48052,first__48053,seq__48052__$1,map__48054,map__48054__$1,msg,msg_name,_,map__48048,map__48048__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__48048,map__48048__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__48062){
var vec__48063 = p__48062;
var seq__48064 = cljs.core.seq.call(null,vec__48063);
var first__48065 = cljs.core.first.call(null,seq__48064);
var seq__48064__$1 = cljs.core.next.call(null,seq__48064);
var map__48066 = first__48065;
var map__48066__$1 = ((((!((map__48066 == null)))?((((map__48066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48066):map__48066);
var msg = map__48066__$1;
var msg_name = cljs.core.get.call(null,map__48066__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48064__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__48068){
var map__48080 = p__48068;
var map__48080__$1 = ((((!((map__48080 == null)))?((((map__48080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48080):map__48080);
var on_compile_warning = cljs.core.get.call(null,map__48080__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__48080__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__48080,map__48080__$1,on_compile_warning,on_compile_fail){
return (function (p__48082){
var vec__48083 = p__48082;
var seq__48084 = cljs.core.seq.call(null,vec__48083);
var first__48085 = cljs.core.first.call(null,seq__48084);
var seq__48084__$1 = cljs.core.next.call(null,seq__48084);
var map__48086 = first__48085;
var map__48086__$1 = ((((!((map__48086 == null)))?((((map__48086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48086):map__48086);
var msg = map__48086__$1;
var msg_name = cljs.core.get.call(null,map__48086__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48084__$1;
var pred__48088 = cljs.core._EQ_;
var expr__48089 = msg_name;
if(cljs.core.truth_(pred__48088.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__48089))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__48088.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__48089))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__48080,map__48080__$1,on_compile_warning,on_compile_fail))
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
var c__31761__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto__,msg_hist,msg_names,msg){
return (function (state_48317){
var state_val_48318 = (state_48317[(1)]);
if((state_val_48318 === (7))){
var inst_48237 = (state_48317[(2)]);
var state_48317__$1 = state_48317;
if(cljs.core.truth_(inst_48237)){
var statearr_48319_48369 = state_48317__$1;
(statearr_48319_48369[(1)] = (8));

} else {
var statearr_48320_48370 = state_48317__$1;
(statearr_48320_48370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (20))){
var inst_48311 = (state_48317[(2)]);
var state_48317__$1 = state_48317;
var statearr_48321_48371 = state_48317__$1;
(statearr_48321_48371[(2)] = inst_48311);

(statearr_48321_48371[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (27))){
var inst_48307 = (state_48317[(2)]);
var state_48317__$1 = state_48317;
var statearr_48322_48372 = state_48317__$1;
(statearr_48322_48372[(2)] = inst_48307);

(statearr_48322_48372[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (1))){
var inst_48230 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_48317__$1 = state_48317;
if(cljs.core.truth_(inst_48230)){
var statearr_48323_48373 = state_48317__$1;
(statearr_48323_48373[(1)] = (2));

} else {
var statearr_48324_48374 = state_48317__$1;
(statearr_48324_48374[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (24))){
var inst_48309 = (state_48317[(2)]);
var state_48317__$1 = state_48317;
var statearr_48325_48375 = state_48317__$1;
(statearr_48325_48375[(2)] = inst_48309);

(statearr_48325_48375[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (4))){
var inst_48315 = (state_48317[(2)]);
var state_48317__$1 = state_48317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48317__$1,inst_48315);
} else {
if((state_val_48318 === (15))){
var inst_48313 = (state_48317[(2)]);
var state_48317__$1 = state_48317;
var statearr_48326_48376 = state_48317__$1;
(statearr_48326_48376[(2)] = inst_48313);

(statearr_48326_48376[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (21))){
var inst_48266 = (state_48317[(2)]);
var inst_48267 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48268 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48267);
var state_48317__$1 = (function (){var statearr_48327 = state_48317;
(statearr_48327[(7)] = inst_48266);

return statearr_48327;
})();
var statearr_48328_48377 = state_48317__$1;
(statearr_48328_48377[(2)] = inst_48268);

(statearr_48328_48377[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (31))){
var inst_48296 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_48317__$1 = state_48317;
if(cljs.core.truth_(inst_48296)){
var statearr_48329_48378 = state_48317__$1;
(statearr_48329_48378[(1)] = (34));

} else {
var statearr_48330_48379 = state_48317__$1;
(statearr_48330_48379[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (32))){
var inst_48305 = (state_48317[(2)]);
var state_48317__$1 = state_48317;
var statearr_48331_48380 = state_48317__$1;
(statearr_48331_48380[(2)] = inst_48305);

(statearr_48331_48380[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (33))){
var inst_48292 = (state_48317[(2)]);
var inst_48293 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48294 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48293);
var state_48317__$1 = (function (){var statearr_48332 = state_48317;
(statearr_48332[(8)] = inst_48292);

return statearr_48332;
})();
var statearr_48333_48381 = state_48317__$1;
(statearr_48333_48381[(2)] = inst_48294);

(statearr_48333_48381[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (13))){
var inst_48251 = figwheel.client.heads_up.clear.call(null);
var state_48317__$1 = state_48317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48317__$1,(16),inst_48251);
} else {
if((state_val_48318 === (22))){
var inst_48272 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48273 = figwheel.client.heads_up.append_warning_message.call(null,inst_48272);
var state_48317__$1 = state_48317;
var statearr_48334_48382 = state_48317__$1;
(statearr_48334_48382[(2)] = inst_48273);

(statearr_48334_48382[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (36))){
var inst_48303 = (state_48317[(2)]);
var state_48317__$1 = state_48317;
var statearr_48335_48383 = state_48317__$1;
(statearr_48335_48383[(2)] = inst_48303);

(statearr_48335_48383[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (29))){
var inst_48283 = (state_48317[(2)]);
var inst_48284 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48285 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48284);
var state_48317__$1 = (function (){var statearr_48336 = state_48317;
(statearr_48336[(9)] = inst_48283);

return statearr_48336;
})();
var statearr_48337_48384 = state_48317__$1;
(statearr_48337_48384[(2)] = inst_48285);

(statearr_48337_48384[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (6))){
var inst_48232 = (state_48317[(10)]);
var state_48317__$1 = state_48317;
var statearr_48338_48385 = state_48317__$1;
(statearr_48338_48385[(2)] = inst_48232);

(statearr_48338_48385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (28))){
var inst_48279 = (state_48317[(2)]);
var inst_48280 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48281 = figwheel.client.heads_up.display_warning.call(null,inst_48280);
var state_48317__$1 = (function (){var statearr_48339 = state_48317;
(statearr_48339[(11)] = inst_48279);

return statearr_48339;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48317__$1,(29),inst_48281);
} else {
if((state_val_48318 === (25))){
var inst_48277 = figwheel.client.heads_up.clear.call(null);
var state_48317__$1 = state_48317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48317__$1,(28),inst_48277);
} else {
if((state_val_48318 === (34))){
var inst_48298 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48317__$1 = state_48317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48317__$1,(37),inst_48298);
} else {
if((state_val_48318 === (17))){
var inst_48257 = (state_48317[(2)]);
var inst_48258 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48259 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48258);
var state_48317__$1 = (function (){var statearr_48340 = state_48317;
(statearr_48340[(12)] = inst_48257);

return statearr_48340;
})();
var statearr_48341_48386 = state_48317__$1;
(statearr_48341_48386[(2)] = inst_48259);

(statearr_48341_48386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (3))){
var inst_48249 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_48317__$1 = state_48317;
if(cljs.core.truth_(inst_48249)){
var statearr_48342_48387 = state_48317__$1;
(statearr_48342_48387[(1)] = (13));

} else {
var statearr_48343_48388 = state_48317__$1;
(statearr_48343_48388[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (12))){
var inst_48245 = (state_48317[(2)]);
var state_48317__$1 = state_48317;
var statearr_48344_48389 = state_48317__$1;
(statearr_48344_48389[(2)] = inst_48245);

(statearr_48344_48389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (2))){
var inst_48232 = (state_48317[(10)]);
var inst_48232__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_48317__$1 = (function (){var statearr_48345 = state_48317;
(statearr_48345[(10)] = inst_48232__$1);

return statearr_48345;
})();
if(cljs.core.truth_(inst_48232__$1)){
var statearr_48346_48390 = state_48317__$1;
(statearr_48346_48390[(1)] = (5));

} else {
var statearr_48347_48391 = state_48317__$1;
(statearr_48347_48391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (23))){
var inst_48275 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_48317__$1 = state_48317;
if(cljs.core.truth_(inst_48275)){
var statearr_48348_48392 = state_48317__$1;
(statearr_48348_48392[(1)] = (25));

} else {
var statearr_48349_48393 = state_48317__$1;
(statearr_48349_48393[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (35))){
var state_48317__$1 = state_48317;
var statearr_48350_48394 = state_48317__$1;
(statearr_48350_48394[(2)] = null);

(statearr_48350_48394[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (19))){
var inst_48270 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_48317__$1 = state_48317;
if(cljs.core.truth_(inst_48270)){
var statearr_48351_48395 = state_48317__$1;
(statearr_48351_48395[(1)] = (22));

} else {
var statearr_48352_48396 = state_48317__$1;
(statearr_48352_48396[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (11))){
var inst_48241 = (state_48317[(2)]);
var state_48317__$1 = state_48317;
var statearr_48353_48397 = state_48317__$1;
(statearr_48353_48397[(2)] = inst_48241);

(statearr_48353_48397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (9))){
var inst_48243 = figwheel.client.heads_up.clear.call(null);
var state_48317__$1 = state_48317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48317__$1,(12),inst_48243);
} else {
if((state_val_48318 === (5))){
var inst_48234 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_48317__$1 = state_48317;
var statearr_48354_48398 = state_48317__$1;
(statearr_48354_48398[(2)] = inst_48234);

(statearr_48354_48398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (14))){
var inst_48261 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_48317__$1 = state_48317;
if(cljs.core.truth_(inst_48261)){
var statearr_48355_48399 = state_48317__$1;
(statearr_48355_48399[(1)] = (18));

} else {
var statearr_48356_48400 = state_48317__$1;
(statearr_48356_48400[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (26))){
var inst_48287 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_48317__$1 = state_48317;
if(cljs.core.truth_(inst_48287)){
var statearr_48357_48401 = state_48317__$1;
(statearr_48357_48401[(1)] = (30));

} else {
var statearr_48358_48402 = state_48317__$1;
(statearr_48358_48402[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (16))){
var inst_48253 = (state_48317[(2)]);
var inst_48254 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48255 = figwheel.client.heads_up.display_exception.call(null,inst_48254);
var state_48317__$1 = (function (){var statearr_48359 = state_48317;
(statearr_48359[(13)] = inst_48253);

return statearr_48359;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48317__$1,(17),inst_48255);
} else {
if((state_val_48318 === (30))){
var inst_48289 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48290 = figwheel.client.heads_up.display_warning.call(null,inst_48289);
var state_48317__$1 = state_48317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48317__$1,(33),inst_48290);
} else {
if((state_val_48318 === (10))){
var inst_48247 = (state_48317[(2)]);
var state_48317__$1 = state_48317;
var statearr_48360_48403 = state_48317__$1;
(statearr_48360_48403[(2)] = inst_48247);

(statearr_48360_48403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (18))){
var inst_48263 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48264 = figwheel.client.heads_up.display_exception.call(null,inst_48263);
var state_48317__$1 = state_48317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48317__$1,(21),inst_48264);
} else {
if((state_val_48318 === (37))){
var inst_48300 = (state_48317[(2)]);
var state_48317__$1 = state_48317;
var statearr_48361_48404 = state_48317__$1;
(statearr_48361_48404[(2)] = inst_48300);

(statearr_48361_48404[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (8))){
var inst_48239 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48317__$1 = state_48317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48317__$1,(11),inst_48239);
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
});})(c__31761__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31740__auto__,c__31761__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31741__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31741__auto____0 = (function (){
var statearr_48365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48365[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31741__auto__);

(statearr_48365[(1)] = (1));

return statearr_48365;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31741__auto____1 = (function (state_48317){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_48317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e48366){if((e48366 instanceof Object)){
var ex__31744__auto__ = e48366;
var statearr_48367_48405 = state_48317;
(statearr_48367_48405[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48406 = state_48317;
state_48317 = G__48406;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31741__auto__ = function(state_48317){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31741__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31741__auto____1.call(this,state_48317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31741__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31741__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto__,msg_hist,msg_names,msg))
})();
var state__31763__auto__ = (function (){var statearr_48368 = f__31762__auto__.call(null);
(statearr_48368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto__);

return statearr_48368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto__,msg_hist,msg_names,msg))
);

return c__31761__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31761__auto___48469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto___48469,ch){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto___48469,ch){
return (function (state_48452){
var state_val_48453 = (state_48452[(1)]);
if((state_val_48453 === (1))){
var state_48452__$1 = state_48452;
var statearr_48454_48470 = state_48452__$1;
(statearr_48454_48470[(2)] = null);

(statearr_48454_48470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48453 === (2))){
var state_48452__$1 = state_48452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48452__$1,(4),ch);
} else {
if((state_val_48453 === (3))){
var inst_48450 = (state_48452[(2)]);
var state_48452__$1 = state_48452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48452__$1,inst_48450);
} else {
if((state_val_48453 === (4))){
var inst_48440 = (state_48452[(7)]);
var inst_48440__$1 = (state_48452[(2)]);
var state_48452__$1 = (function (){var statearr_48455 = state_48452;
(statearr_48455[(7)] = inst_48440__$1);

return statearr_48455;
})();
if(cljs.core.truth_(inst_48440__$1)){
var statearr_48456_48471 = state_48452__$1;
(statearr_48456_48471[(1)] = (5));

} else {
var statearr_48457_48472 = state_48452__$1;
(statearr_48457_48472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48453 === (5))){
var inst_48440 = (state_48452[(7)]);
var inst_48442 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_48440);
var state_48452__$1 = state_48452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48452__$1,(8),inst_48442);
} else {
if((state_val_48453 === (6))){
var state_48452__$1 = state_48452;
var statearr_48458_48473 = state_48452__$1;
(statearr_48458_48473[(2)] = null);

(statearr_48458_48473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48453 === (7))){
var inst_48448 = (state_48452[(2)]);
var state_48452__$1 = state_48452;
var statearr_48459_48474 = state_48452__$1;
(statearr_48459_48474[(2)] = inst_48448);

(statearr_48459_48474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48453 === (8))){
var inst_48444 = (state_48452[(2)]);
var state_48452__$1 = (function (){var statearr_48460 = state_48452;
(statearr_48460[(8)] = inst_48444);

return statearr_48460;
})();
var statearr_48461_48475 = state_48452__$1;
(statearr_48461_48475[(2)] = null);

(statearr_48461_48475[(1)] = (2));


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
});})(c__31761__auto___48469,ch))
;
return ((function (switch__31740__auto__,c__31761__auto___48469,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31741__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31741__auto____0 = (function (){
var statearr_48465 = [null,null,null,null,null,null,null,null,null];
(statearr_48465[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31741__auto__);

(statearr_48465[(1)] = (1));

return statearr_48465;
});
var figwheel$client$heads_up_plugin_$_state_machine__31741__auto____1 = (function (state_48452){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_48452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e48466){if((e48466 instanceof Object)){
var ex__31744__auto__ = e48466;
var statearr_48467_48476 = state_48452;
(statearr_48467_48476[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48477 = state_48452;
state_48452 = G__48477;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31741__auto__ = function(state_48452){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31741__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31741__auto____1.call(this,state_48452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31741__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31741__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto___48469,ch))
})();
var state__31763__auto__ = (function (){var statearr_48468 = f__31762__auto__.call(null);
(statearr_48468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto___48469);

return statearr_48468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto___48469,ch))
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
var c__31761__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto__){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto__){
return (function (state_48498){
var state_val_48499 = (state_48498[(1)]);
if((state_val_48499 === (1))){
var inst_48493 = cljs.core.async.timeout.call(null,(3000));
var state_48498__$1 = state_48498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48498__$1,(2),inst_48493);
} else {
if((state_val_48499 === (2))){
var inst_48495 = (state_48498[(2)]);
var inst_48496 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_48498__$1 = (function (){var statearr_48500 = state_48498;
(statearr_48500[(7)] = inst_48495);

return statearr_48500;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48498__$1,inst_48496);
} else {
return null;
}
}
});})(c__31761__auto__))
;
return ((function (switch__31740__auto__,c__31761__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31741__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31741__auto____0 = (function (){
var statearr_48504 = [null,null,null,null,null,null,null,null];
(statearr_48504[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31741__auto__);

(statearr_48504[(1)] = (1));

return statearr_48504;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31741__auto____1 = (function (state_48498){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_48498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e48505){if((e48505 instanceof Object)){
var ex__31744__auto__ = e48505;
var statearr_48506_48508 = state_48498;
(statearr_48506_48508[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48509 = state_48498;
state_48498 = G__48509;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31741__auto__ = function(state_48498){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31741__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31741__auto____1.call(this,state_48498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31741__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31741__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto__))
})();
var state__31763__auto__ = (function (){var statearr_48507 = f__31762__auto__.call(null);
(statearr_48507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto__);

return statearr_48507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto__))
);

return c__31761__auto__;
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
var c__31761__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31761__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__31762__auto__ = (function (){var switch__31740__auto__ = ((function (c__31761__auto__,figwheel_version,temp__4657__auto__){
return (function (state_48532){
var state_val_48533 = (state_48532[(1)]);
if((state_val_48533 === (1))){
var inst_48526 = cljs.core.async.timeout.call(null,(2000));
var state_48532__$1 = state_48532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48532__$1,(2),inst_48526);
} else {
if((state_val_48533 === (2))){
var inst_48528 = (state_48532[(2)]);
var inst_48529 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_48530 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_48529);
var state_48532__$1 = (function (){var statearr_48534 = state_48532;
(statearr_48534[(7)] = inst_48528);

return statearr_48534;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48532__$1,inst_48530);
} else {
return null;
}
}
});})(c__31761__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__31740__auto__,c__31761__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31741__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31741__auto____0 = (function (){
var statearr_48538 = [null,null,null,null,null,null,null,null];
(statearr_48538[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31741__auto__);

(statearr_48538[(1)] = (1));

return statearr_48538;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31741__auto____1 = (function (state_48532){
while(true){
var ret_value__31742__auto__ = (function (){try{while(true){
var result__31743__auto__ = switch__31740__auto__.call(null,state_48532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31743__auto__;
}
break;
}
}catch (e48539){if((e48539 instanceof Object)){
var ex__31744__auto__ = e48539;
var statearr_48540_48542 = state_48532;
(statearr_48540_48542[(5)] = ex__31744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48543 = state_48532;
state_48532 = G__48543;
continue;
} else {
return ret_value__31742__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31741__auto__ = function(state_48532){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31741__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31741__auto____1.call(this,state_48532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31741__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31741__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31741__auto__;
})()
;})(switch__31740__auto__,c__31761__auto__,figwheel_version,temp__4657__auto__))
})();
var state__31763__auto__ = (function (){var statearr_48541 = f__31762__auto__.call(null);
(statearr_48541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31761__auto__);

return statearr_48541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31763__auto__);
});})(c__31761__auto__,figwheel_version,temp__4657__auto__))
);

return c__31761__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__48544){
var map__48548 = p__48544;
var map__48548__$1 = ((((!((map__48548 == null)))?((((map__48548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48548):map__48548);
var file = cljs.core.get.call(null,map__48548__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48548__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48548__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__48550 = "";
var G__48550__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__48550),cljs.core.str("file "),cljs.core.str(file)].join(''):G__48550);
var G__48550__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__48550__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__48550__$1);
if(cljs.core.truth_((function (){var and__25034__auto__ = line;
if(cljs.core.truth_(and__25034__auto__)){
return column;
} else {
return and__25034__auto__;
}
})())){
return [cljs.core.str(G__48550__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__48550__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__48551){
var map__48558 = p__48551;
var map__48558__$1 = ((((!((map__48558 == null)))?((((map__48558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48558):map__48558);
var ed = map__48558__$1;
var formatted_exception = cljs.core.get.call(null,map__48558__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__48558__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__48558__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__48560_48564 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__48561_48565 = null;
var count__48562_48566 = (0);
var i__48563_48567 = (0);
while(true){
if((i__48563_48567 < count__48562_48566)){
var msg_48568 = cljs.core._nth.call(null,chunk__48561_48565,i__48563_48567);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_48568);

var G__48569 = seq__48560_48564;
var G__48570 = chunk__48561_48565;
var G__48571 = count__48562_48566;
var G__48572 = (i__48563_48567 + (1));
seq__48560_48564 = G__48569;
chunk__48561_48565 = G__48570;
count__48562_48566 = G__48571;
i__48563_48567 = G__48572;
continue;
} else {
var temp__4657__auto___48573 = cljs.core.seq.call(null,seq__48560_48564);
if(temp__4657__auto___48573){
var seq__48560_48574__$1 = temp__4657__auto___48573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48560_48574__$1)){
var c__25857__auto___48575 = cljs.core.chunk_first.call(null,seq__48560_48574__$1);
var G__48576 = cljs.core.chunk_rest.call(null,seq__48560_48574__$1);
var G__48577 = c__25857__auto___48575;
var G__48578 = cljs.core.count.call(null,c__25857__auto___48575);
var G__48579 = (0);
seq__48560_48564 = G__48576;
chunk__48561_48565 = G__48577;
count__48562_48566 = G__48578;
i__48563_48567 = G__48579;
continue;
} else {
var msg_48580 = cljs.core.first.call(null,seq__48560_48574__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_48580);

var G__48581 = cljs.core.next.call(null,seq__48560_48574__$1);
var G__48582 = null;
var G__48583 = (0);
var G__48584 = (0);
seq__48560_48564 = G__48581;
chunk__48561_48565 = G__48582;
count__48562_48566 = G__48583;
i__48563_48567 = G__48584;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__48585){
var map__48588 = p__48585;
var map__48588__$1 = ((((!((map__48588 == null)))?((((map__48588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48588):map__48588);
var w = map__48588__$1;
var message = cljs.core.get.call(null,map__48588__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__48600 = cljs.core.seq.call(null,plugins);
var chunk__48601 = null;
var count__48602 = (0);
var i__48603 = (0);
while(true){
if((i__48603 < count__48602)){
var vec__48604 = cljs.core._nth.call(null,chunk__48601,i__48603);
var k = cljs.core.nth.call(null,vec__48604,(0),null);
var plugin = cljs.core.nth.call(null,vec__48604,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48610 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48600,chunk__48601,count__48602,i__48603,pl_48610,vec__48604,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_48610.call(null,msg_hist);
});})(seq__48600,chunk__48601,count__48602,i__48603,pl_48610,vec__48604,k,plugin))
);
} else {
}

var G__48611 = seq__48600;
var G__48612 = chunk__48601;
var G__48613 = count__48602;
var G__48614 = (i__48603 + (1));
seq__48600 = G__48611;
chunk__48601 = G__48612;
count__48602 = G__48613;
i__48603 = G__48614;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48600);
if(temp__4657__auto__){
var seq__48600__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48600__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__48600__$1);
var G__48615 = cljs.core.chunk_rest.call(null,seq__48600__$1);
var G__48616 = c__25857__auto__;
var G__48617 = cljs.core.count.call(null,c__25857__auto__);
var G__48618 = (0);
seq__48600 = G__48615;
chunk__48601 = G__48616;
count__48602 = G__48617;
i__48603 = G__48618;
continue;
} else {
var vec__48607 = cljs.core.first.call(null,seq__48600__$1);
var k = cljs.core.nth.call(null,vec__48607,(0),null);
var plugin = cljs.core.nth.call(null,vec__48607,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48619 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48600,chunk__48601,count__48602,i__48603,pl_48619,vec__48607,k,plugin,seq__48600__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_48619.call(null,msg_hist);
});})(seq__48600,chunk__48601,count__48602,i__48603,pl_48619,vec__48607,k,plugin,seq__48600__$1,temp__4657__auto__))
);
} else {
}

var G__48620 = cljs.core.next.call(null,seq__48600__$1);
var G__48621 = null;
var G__48622 = (0);
var G__48623 = (0);
seq__48600 = G__48620;
chunk__48601 = G__48621;
count__48602 = G__48622;
i__48603 = G__48623;
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
var args48624 = [];
var len__26121__auto___48631 = arguments.length;
var i__26122__auto___48632 = (0);
while(true){
if((i__26122__auto___48632 < len__26121__auto___48631)){
args48624.push((arguments[i__26122__auto___48632]));

var G__48633 = (i__26122__auto___48632 + (1));
i__26122__auto___48632 = G__48633;
continue;
} else {
}
break;
}

var G__48626 = args48624.length;
switch (G__48626) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48624.length)].join('')));

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

var seq__48627_48635 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__48628_48636 = null;
var count__48629_48637 = (0);
var i__48630_48638 = (0);
while(true){
if((i__48630_48638 < count__48629_48637)){
var msg_48639 = cljs.core._nth.call(null,chunk__48628_48636,i__48630_48638);
figwheel.client.socket.handle_incoming_message.call(null,msg_48639);

var G__48640 = seq__48627_48635;
var G__48641 = chunk__48628_48636;
var G__48642 = count__48629_48637;
var G__48643 = (i__48630_48638 + (1));
seq__48627_48635 = G__48640;
chunk__48628_48636 = G__48641;
count__48629_48637 = G__48642;
i__48630_48638 = G__48643;
continue;
} else {
var temp__4657__auto___48644 = cljs.core.seq.call(null,seq__48627_48635);
if(temp__4657__auto___48644){
var seq__48627_48645__$1 = temp__4657__auto___48644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48627_48645__$1)){
var c__25857__auto___48646 = cljs.core.chunk_first.call(null,seq__48627_48645__$1);
var G__48647 = cljs.core.chunk_rest.call(null,seq__48627_48645__$1);
var G__48648 = c__25857__auto___48646;
var G__48649 = cljs.core.count.call(null,c__25857__auto___48646);
var G__48650 = (0);
seq__48627_48635 = G__48647;
chunk__48628_48636 = G__48648;
count__48629_48637 = G__48649;
i__48630_48638 = G__48650;
continue;
} else {
var msg_48651 = cljs.core.first.call(null,seq__48627_48645__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_48651);

var G__48652 = cljs.core.next.call(null,seq__48627_48645__$1);
var G__48653 = null;
var G__48654 = (0);
var G__48655 = (0);
seq__48627_48635 = G__48652;
chunk__48628_48636 = G__48653;
count__48629_48637 = G__48654;
i__48630_48638 = G__48655;
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
var len__26121__auto___48660 = arguments.length;
var i__26122__auto___48661 = (0);
while(true){
if((i__26122__auto___48661 < len__26121__auto___48660)){
args__26128__auto__.push((arguments[i__26122__auto___48661]));

var G__48662 = (i__26122__auto___48661 + (1));
i__26122__auto___48661 = G__48662;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__48657){
var map__48658 = p__48657;
var map__48658__$1 = ((((!((map__48658 == null)))?((((map__48658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48658):map__48658);
var opts = map__48658__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq48656){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48656));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e48664){if((e48664 instanceof Error)){
var e = e48664;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e48664;

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
return (function (p__48668){
var map__48669 = p__48668;
var map__48669__$1 = ((((!((map__48669 == null)))?((((map__48669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48669):map__48669);
var msg_name = cljs.core.get.call(null,map__48669__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1484782602978
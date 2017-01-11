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
var args144781 = [];
var len__26121__auto___144784 = arguments.length;
var i__26122__auto___144785 = (0);
while(true){
if((i__26122__auto___144785 < len__26121__auto___144784)){
args144781.push((arguments[i__26122__auto___144785]));

var G__144786 = (i__26122__auto___144785 + (1));
i__26122__auto___144785 = G__144786;
continue;
} else {
}
break;
}

var G__144783 = args144781.length;
switch (G__144783) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args144781.length)].join('')));

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
var len__26121__auto___144789 = arguments.length;
var i__26122__auto___144790 = (0);
while(true){
if((i__26122__auto___144790 < len__26121__auto___144789)){
args__26128__auto__.push((arguments[i__26122__auto___144790]));

var G__144791 = (i__26122__auto___144790 + (1));
i__26122__auto___144790 = G__144791;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq144788){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq144788));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26128__auto__ = [];
var len__26121__auto___144793 = arguments.length;
var i__26122__auto___144794 = (0);
while(true){
if((i__26122__auto___144794 < len__26121__auto___144793)){
args__26128__auto__.push((arguments[i__26122__auto___144794]));

var G__144795 = (i__26122__auto___144794 + (1));
i__26122__auto___144794 = G__144795;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq144792){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq144792));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__144796 = cljs.core._EQ_;
var expr__144797 = (function (){var or__25046__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e144800){if((e144800 instanceof Error)){
var e = e144800;
return false;
} else {
throw e144800;

}
}})();
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__144796.call(null,"true",expr__144797))){
return true;
} else {
if(cljs.core.truth_(pred__144796.call(null,"false",expr__144797))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__144797)].join('')));
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
}catch (e144802){if((e144802 instanceof Error)){
var e = e144802;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e144802;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__144803){
var map__144806 = p__144803;
var map__144806__$1 = ((((!((map__144806 == null)))?((((map__144806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__144806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__144806):map__144806);
var message = cljs.core.get.call(null,map__144806__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__144806__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__33352__auto___144968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___144968,ch){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___144968,ch){
return (function (state_144937){
var state_val_144938 = (state_144937[(1)]);
if((state_val_144938 === (7))){
var inst_144933 = (state_144937[(2)]);
var state_144937__$1 = state_144937;
var statearr_144939_144969 = state_144937__$1;
(statearr_144939_144969[(2)] = inst_144933);

(statearr_144939_144969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144938 === (1))){
var state_144937__$1 = state_144937;
var statearr_144940_144970 = state_144937__$1;
(statearr_144940_144970[(2)] = null);

(statearr_144940_144970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144938 === (4))){
var inst_144890 = (state_144937[(7)]);
var inst_144890__$1 = (state_144937[(2)]);
var state_144937__$1 = (function (){var statearr_144941 = state_144937;
(statearr_144941[(7)] = inst_144890__$1);

return statearr_144941;
})();
if(cljs.core.truth_(inst_144890__$1)){
var statearr_144942_144971 = state_144937__$1;
(statearr_144942_144971[(1)] = (5));

} else {
var statearr_144943_144972 = state_144937__$1;
(statearr_144943_144972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144938 === (15))){
var inst_144897 = (state_144937[(8)]);
var inst_144912 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_144897);
var inst_144913 = cljs.core.first.call(null,inst_144912);
var inst_144914 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_144913);
var inst_144915 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_144914)].join('');
var inst_144916 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_144915);
var state_144937__$1 = state_144937;
var statearr_144944_144973 = state_144937__$1;
(statearr_144944_144973[(2)] = inst_144916);

(statearr_144944_144973[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144938 === (13))){
var inst_144921 = (state_144937[(2)]);
var state_144937__$1 = state_144937;
var statearr_144945_144974 = state_144937__$1;
(statearr_144945_144974[(2)] = inst_144921);

(statearr_144945_144974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144938 === (6))){
var state_144937__$1 = state_144937;
var statearr_144946_144975 = state_144937__$1;
(statearr_144946_144975[(2)] = null);

(statearr_144946_144975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144938 === (17))){
var inst_144919 = (state_144937[(2)]);
var state_144937__$1 = state_144937;
var statearr_144947_144976 = state_144937__$1;
(statearr_144947_144976[(2)] = inst_144919);

(statearr_144947_144976[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144938 === (3))){
var inst_144935 = (state_144937[(2)]);
var state_144937__$1 = state_144937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144937__$1,inst_144935);
} else {
if((state_val_144938 === (12))){
var inst_144896 = (state_144937[(9)]);
var inst_144910 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_144896,opts);
var state_144937__$1 = state_144937;
if(cljs.core.truth_(inst_144910)){
var statearr_144948_144977 = state_144937__$1;
(statearr_144948_144977[(1)] = (15));

} else {
var statearr_144949_144978 = state_144937__$1;
(statearr_144949_144978[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144938 === (2))){
var state_144937__$1 = state_144937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144937__$1,(4),ch);
} else {
if((state_val_144938 === (11))){
var inst_144897 = (state_144937[(8)]);
var inst_144902 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_144903 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_144897);
var inst_144904 = cljs.core.async.timeout.call(null,(1000));
var inst_144905 = [inst_144903,inst_144904];
var inst_144906 = (new cljs.core.PersistentVector(null,2,(5),inst_144902,inst_144905,null));
var state_144937__$1 = state_144937;
return cljs.core.async.ioc_alts_BANG_.call(null,state_144937__$1,(14),inst_144906);
} else {
if((state_val_144938 === (9))){
var inst_144897 = (state_144937[(8)]);
var inst_144923 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_144924 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_144897);
var inst_144925 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_144924);
var inst_144926 = [cljs.core.str("Not loading: "),cljs.core.str(inst_144925)].join('');
var inst_144927 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_144926);
var state_144937__$1 = (function (){var statearr_144950 = state_144937;
(statearr_144950[(10)] = inst_144923);

return statearr_144950;
})();
var statearr_144951_144979 = state_144937__$1;
(statearr_144951_144979[(2)] = inst_144927);

(statearr_144951_144979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144938 === (5))){
var inst_144890 = (state_144937[(7)]);
var inst_144892 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_144893 = (new cljs.core.PersistentArrayMap(null,2,inst_144892,null));
var inst_144894 = (new cljs.core.PersistentHashSet(null,inst_144893,null));
var inst_144895 = figwheel.client.focus_msgs.call(null,inst_144894,inst_144890);
var inst_144896 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_144895);
var inst_144897 = cljs.core.first.call(null,inst_144895);
var inst_144898 = figwheel.client.autoload_QMARK_.call(null);
var state_144937__$1 = (function (){var statearr_144952 = state_144937;
(statearr_144952[(9)] = inst_144896);

(statearr_144952[(8)] = inst_144897);

return statearr_144952;
})();
if(cljs.core.truth_(inst_144898)){
var statearr_144953_144980 = state_144937__$1;
(statearr_144953_144980[(1)] = (8));

} else {
var statearr_144954_144981 = state_144937__$1;
(statearr_144954_144981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144938 === (14))){
var inst_144908 = (state_144937[(2)]);
var state_144937__$1 = state_144937;
var statearr_144955_144982 = state_144937__$1;
(statearr_144955_144982[(2)] = inst_144908);

(statearr_144955_144982[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144938 === (16))){
var state_144937__$1 = state_144937;
var statearr_144956_144983 = state_144937__$1;
(statearr_144956_144983[(2)] = null);

(statearr_144956_144983[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144938 === (10))){
var inst_144929 = (state_144937[(2)]);
var state_144937__$1 = (function (){var statearr_144957 = state_144937;
(statearr_144957[(11)] = inst_144929);

return statearr_144957;
})();
var statearr_144958_144984 = state_144937__$1;
(statearr_144958_144984[(2)] = null);

(statearr_144958_144984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_144938 === (8))){
var inst_144896 = (state_144937[(9)]);
var inst_144900 = figwheel.client.reload_file_state_QMARK_.call(null,inst_144896,opts);
var state_144937__$1 = state_144937;
if(cljs.core.truth_(inst_144900)){
var statearr_144959_144985 = state_144937__$1;
(statearr_144959_144985[(1)] = (11));

} else {
var statearr_144960_144986 = state_144937__$1;
(statearr_144960_144986[(1)] = (12));

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
});})(c__33352__auto___144968,ch))
;
return ((function (switch__33287__auto__,c__33352__auto___144968,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33288__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33288__auto____0 = (function (){
var statearr_144964 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_144964[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33288__auto__);

(statearr_144964[(1)] = (1));

return statearr_144964;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33288__auto____1 = (function (state_144937){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_144937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e144965){if((e144965 instanceof Object)){
var ex__33291__auto__ = e144965;
var statearr_144966_144987 = state_144937;
(statearr_144966_144987[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e144965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__144988 = state_144937;
state_144937 = G__144988;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33288__auto__ = function(state_144937){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33288__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33288__auto____1.call(this,state_144937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33288__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33288__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___144968,ch))
})();
var state__33354__auto__ = (function (){var statearr_144967 = f__33353__auto__.call(null);
(statearr_144967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___144968);

return statearr_144967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___144968,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__144989_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__144989_SHARP_));
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
var base_path_144992 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_144992){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e144991){if((e144991 instanceof Error)){
var e = e144991;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_144992], null));
} else {
var e = e144991;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_144992))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__144993){
var map__145002 = p__144993;
var map__145002__$1 = ((((!((map__145002 == null)))?((((map__145002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__145002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__145002):map__145002);
var opts = map__145002__$1;
var build_id = cljs.core.get.call(null,map__145002__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__145002,map__145002__$1,opts,build_id){
return (function (p__145004){
var vec__145005 = p__145004;
var seq__145006 = cljs.core.seq.call(null,vec__145005);
var first__145007 = cljs.core.first.call(null,seq__145006);
var seq__145006__$1 = cljs.core.next.call(null,seq__145006);
var map__145008 = first__145007;
var map__145008__$1 = ((((!((map__145008 == null)))?((((map__145008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__145008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__145008):map__145008);
var msg = map__145008__$1;
var msg_name = cljs.core.get.call(null,map__145008__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__145006__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__145005,seq__145006,first__145007,seq__145006__$1,map__145008,map__145008__$1,msg,msg_name,_,map__145002,map__145002__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__145005,seq__145006,first__145007,seq__145006__$1,map__145008,map__145008__$1,msg,msg_name,_,map__145002,map__145002__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__145002,map__145002__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__145016){
var vec__145017 = p__145016;
var seq__145018 = cljs.core.seq.call(null,vec__145017);
var first__145019 = cljs.core.first.call(null,seq__145018);
var seq__145018__$1 = cljs.core.next.call(null,seq__145018);
var map__145020 = first__145019;
var map__145020__$1 = ((((!((map__145020 == null)))?((((map__145020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__145020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__145020):map__145020);
var msg = map__145020__$1;
var msg_name = cljs.core.get.call(null,map__145020__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__145018__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__145022){
var map__145034 = p__145022;
var map__145034__$1 = ((((!((map__145034 == null)))?((((map__145034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__145034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__145034):map__145034);
var on_compile_warning = cljs.core.get.call(null,map__145034__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__145034__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__145034,map__145034__$1,on_compile_warning,on_compile_fail){
return (function (p__145036){
var vec__145037 = p__145036;
var seq__145038 = cljs.core.seq.call(null,vec__145037);
var first__145039 = cljs.core.first.call(null,seq__145038);
var seq__145038__$1 = cljs.core.next.call(null,seq__145038);
var map__145040 = first__145039;
var map__145040__$1 = ((((!((map__145040 == null)))?((((map__145040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__145040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__145040):map__145040);
var msg = map__145040__$1;
var msg_name = cljs.core.get.call(null,map__145040__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__145038__$1;
var pred__145042 = cljs.core._EQ_;
var expr__145043 = msg_name;
if(cljs.core.truth_(pred__145042.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__145043))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__145042.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__145043))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__145034,map__145034__$1,on_compile_warning,on_compile_fail))
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
return (function (state_145271){
var state_val_145272 = (state_145271[(1)]);
if((state_val_145272 === (7))){
var inst_145191 = (state_145271[(2)]);
var state_145271__$1 = state_145271;
if(cljs.core.truth_(inst_145191)){
var statearr_145273_145323 = state_145271__$1;
(statearr_145273_145323[(1)] = (8));

} else {
var statearr_145274_145324 = state_145271__$1;
(statearr_145274_145324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (20))){
var inst_145265 = (state_145271[(2)]);
var state_145271__$1 = state_145271;
var statearr_145275_145325 = state_145271__$1;
(statearr_145275_145325[(2)] = inst_145265);

(statearr_145275_145325[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (27))){
var inst_145261 = (state_145271[(2)]);
var state_145271__$1 = state_145271;
var statearr_145276_145326 = state_145271__$1;
(statearr_145276_145326[(2)] = inst_145261);

(statearr_145276_145326[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (1))){
var inst_145184 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_145271__$1 = state_145271;
if(cljs.core.truth_(inst_145184)){
var statearr_145277_145327 = state_145271__$1;
(statearr_145277_145327[(1)] = (2));

} else {
var statearr_145278_145328 = state_145271__$1;
(statearr_145278_145328[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (24))){
var inst_145263 = (state_145271[(2)]);
var state_145271__$1 = state_145271;
var statearr_145279_145329 = state_145271__$1;
(statearr_145279_145329[(2)] = inst_145263);

(statearr_145279_145329[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (4))){
var inst_145269 = (state_145271[(2)]);
var state_145271__$1 = state_145271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_145271__$1,inst_145269);
} else {
if((state_val_145272 === (15))){
var inst_145267 = (state_145271[(2)]);
var state_145271__$1 = state_145271;
var statearr_145280_145330 = state_145271__$1;
(statearr_145280_145330[(2)] = inst_145267);

(statearr_145280_145330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (21))){
var inst_145220 = (state_145271[(2)]);
var inst_145221 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_145222 = figwheel.client.auto_jump_to_error.call(null,opts,inst_145221);
var state_145271__$1 = (function (){var statearr_145281 = state_145271;
(statearr_145281[(7)] = inst_145220);

return statearr_145281;
})();
var statearr_145282_145331 = state_145271__$1;
(statearr_145282_145331[(2)] = inst_145222);

(statearr_145282_145331[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (31))){
var inst_145250 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_145271__$1 = state_145271;
if(cljs.core.truth_(inst_145250)){
var statearr_145283_145332 = state_145271__$1;
(statearr_145283_145332[(1)] = (34));

} else {
var statearr_145284_145333 = state_145271__$1;
(statearr_145284_145333[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (32))){
var inst_145259 = (state_145271[(2)]);
var state_145271__$1 = state_145271;
var statearr_145285_145334 = state_145271__$1;
(statearr_145285_145334[(2)] = inst_145259);

(statearr_145285_145334[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (33))){
var inst_145246 = (state_145271[(2)]);
var inst_145247 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_145248 = figwheel.client.auto_jump_to_error.call(null,opts,inst_145247);
var state_145271__$1 = (function (){var statearr_145286 = state_145271;
(statearr_145286[(8)] = inst_145246);

return statearr_145286;
})();
var statearr_145287_145335 = state_145271__$1;
(statearr_145287_145335[(2)] = inst_145248);

(statearr_145287_145335[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (13))){
var inst_145205 = figwheel.client.heads_up.clear.call(null);
var state_145271__$1 = state_145271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145271__$1,(16),inst_145205);
} else {
if((state_val_145272 === (22))){
var inst_145226 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_145227 = figwheel.client.heads_up.append_warning_message.call(null,inst_145226);
var state_145271__$1 = state_145271;
var statearr_145288_145336 = state_145271__$1;
(statearr_145288_145336[(2)] = inst_145227);

(statearr_145288_145336[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (36))){
var inst_145257 = (state_145271[(2)]);
var state_145271__$1 = state_145271;
var statearr_145289_145337 = state_145271__$1;
(statearr_145289_145337[(2)] = inst_145257);

(statearr_145289_145337[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (29))){
var inst_145237 = (state_145271[(2)]);
var inst_145238 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_145239 = figwheel.client.auto_jump_to_error.call(null,opts,inst_145238);
var state_145271__$1 = (function (){var statearr_145290 = state_145271;
(statearr_145290[(9)] = inst_145237);

return statearr_145290;
})();
var statearr_145291_145338 = state_145271__$1;
(statearr_145291_145338[(2)] = inst_145239);

(statearr_145291_145338[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (6))){
var inst_145186 = (state_145271[(10)]);
var state_145271__$1 = state_145271;
var statearr_145292_145339 = state_145271__$1;
(statearr_145292_145339[(2)] = inst_145186);

(statearr_145292_145339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (28))){
var inst_145233 = (state_145271[(2)]);
var inst_145234 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_145235 = figwheel.client.heads_up.display_warning.call(null,inst_145234);
var state_145271__$1 = (function (){var statearr_145293 = state_145271;
(statearr_145293[(11)] = inst_145233);

return statearr_145293;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145271__$1,(29),inst_145235);
} else {
if((state_val_145272 === (25))){
var inst_145231 = figwheel.client.heads_up.clear.call(null);
var state_145271__$1 = state_145271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145271__$1,(28),inst_145231);
} else {
if((state_val_145272 === (34))){
var inst_145252 = figwheel.client.heads_up.flash_loaded.call(null);
var state_145271__$1 = state_145271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145271__$1,(37),inst_145252);
} else {
if((state_val_145272 === (17))){
var inst_145211 = (state_145271[(2)]);
var inst_145212 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_145213 = figwheel.client.auto_jump_to_error.call(null,opts,inst_145212);
var state_145271__$1 = (function (){var statearr_145294 = state_145271;
(statearr_145294[(12)] = inst_145211);

return statearr_145294;
})();
var statearr_145295_145340 = state_145271__$1;
(statearr_145295_145340[(2)] = inst_145213);

(statearr_145295_145340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (3))){
var inst_145203 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_145271__$1 = state_145271;
if(cljs.core.truth_(inst_145203)){
var statearr_145296_145341 = state_145271__$1;
(statearr_145296_145341[(1)] = (13));

} else {
var statearr_145297_145342 = state_145271__$1;
(statearr_145297_145342[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (12))){
var inst_145199 = (state_145271[(2)]);
var state_145271__$1 = state_145271;
var statearr_145298_145343 = state_145271__$1;
(statearr_145298_145343[(2)] = inst_145199);

(statearr_145298_145343[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (2))){
var inst_145186 = (state_145271[(10)]);
var inst_145186__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_145271__$1 = (function (){var statearr_145299 = state_145271;
(statearr_145299[(10)] = inst_145186__$1);

return statearr_145299;
})();
if(cljs.core.truth_(inst_145186__$1)){
var statearr_145300_145344 = state_145271__$1;
(statearr_145300_145344[(1)] = (5));

} else {
var statearr_145301_145345 = state_145271__$1;
(statearr_145301_145345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (23))){
var inst_145229 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_145271__$1 = state_145271;
if(cljs.core.truth_(inst_145229)){
var statearr_145302_145346 = state_145271__$1;
(statearr_145302_145346[(1)] = (25));

} else {
var statearr_145303_145347 = state_145271__$1;
(statearr_145303_145347[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (35))){
var state_145271__$1 = state_145271;
var statearr_145304_145348 = state_145271__$1;
(statearr_145304_145348[(2)] = null);

(statearr_145304_145348[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (19))){
var inst_145224 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_145271__$1 = state_145271;
if(cljs.core.truth_(inst_145224)){
var statearr_145305_145349 = state_145271__$1;
(statearr_145305_145349[(1)] = (22));

} else {
var statearr_145306_145350 = state_145271__$1;
(statearr_145306_145350[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (11))){
var inst_145195 = (state_145271[(2)]);
var state_145271__$1 = state_145271;
var statearr_145307_145351 = state_145271__$1;
(statearr_145307_145351[(2)] = inst_145195);

(statearr_145307_145351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (9))){
var inst_145197 = figwheel.client.heads_up.clear.call(null);
var state_145271__$1 = state_145271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145271__$1,(12),inst_145197);
} else {
if((state_val_145272 === (5))){
var inst_145188 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_145271__$1 = state_145271;
var statearr_145308_145352 = state_145271__$1;
(statearr_145308_145352[(2)] = inst_145188);

(statearr_145308_145352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (14))){
var inst_145215 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_145271__$1 = state_145271;
if(cljs.core.truth_(inst_145215)){
var statearr_145309_145353 = state_145271__$1;
(statearr_145309_145353[(1)] = (18));

} else {
var statearr_145310_145354 = state_145271__$1;
(statearr_145310_145354[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (26))){
var inst_145241 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_145271__$1 = state_145271;
if(cljs.core.truth_(inst_145241)){
var statearr_145311_145355 = state_145271__$1;
(statearr_145311_145355[(1)] = (30));

} else {
var statearr_145312_145356 = state_145271__$1;
(statearr_145312_145356[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (16))){
var inst_145207 = (state_145271[(2)]);
var inst_145208 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_145209 = figwheel.client.heads_up.display_exception.call(null,inst_145208);
var state_145271__$1 = (function (){var statearr_145313 = state_145271;
(statearr_145313[(13)] = inst_145207);

return statearr_145313;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145271__$1,(17),inst_145209);
} else {
if((state_val_145272 === (30))){
var inst_145243 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_145244 = figwheel.client.heads_up.display_warning.call(null,inst_145243);
var state_145271__$1 = state_145271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145271__$1,(33),inst_145244);
} else {
if((state_val_145272 === (10))){
var inst_145201 = (state_145271[(2)]);
var state_145271__$1 = state_145271;
var statearr_145314_145357 = state_145271__$1;
(statearr_145314_145357[(2)] = inst_145201);

(statearr_145314_145357[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (18))){
var inst_145217 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_145218 = figwheel.client.heads_up.display_exception.call(null,inst_145217);
var state_145271__$1 = state_145271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145271__$1,(21),inst_145218);
} else {
if((state_val_145272 === (37))){
var inst_145254 = (state_145271[(2)]);
var state_145271__$1 = state_145271;
var statearr_145315_145358 = state_145271__$1;
(statearr_145315_145358[(2)] = inst_145254);

(statearr_145315_145358[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145272 === (8))){
var inst_145193 = figwheel.client.heads_up.flash_loaded.call(null);
var state_145271__$1 = state_145271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145271__$1,(11),inst_145193);
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
var statearr_145319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_145319[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33288__auto__);

(statearr_145319[(1)] = (1));

return statearr_145319;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33288__auto____1 = (function (state_145271){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_145271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e145320){if((e145320 instanceof Object)){
var ex__33291__auto__ = e145320;
var statearr_145321_145359 = state_145271;
(statearr_145321_145359[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e145320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__145360 = state_145271;
state_145271 = G__145360;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33288__auto__ = function(state_145271){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33288__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33288__auto____1.call(this,state_145271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33288__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33288__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__,msg_hist,msg_names,msg))
})();
var state__33354__auto__ = (function (){var statearr_145322 = f__33353__auto__.call(null);
(statearr_145322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_145322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto__,msg_hist,msg_names,msg))
);

return c__33352__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33352__auto___145423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33352__auto___145423,ch){
return (function (){
var f__33353__auto__ = (function (){var switch__33287__auto__ = ((function (c__33352__auto___145423,ch){
return (function (state_145406){
var state_val_145407 = (state_145406[(1)]);
if((state_val_145407 === (1))){
var state_145406__$1 = state_145406;
var statearr_145408_145424 = state_145406__$1;
(statearr_145408_145424[(2)] = null);

(statearr_145408_145424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145407 === (2))){
var state_145406__$1 = state_145406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145406__$1,(4),ch);
} else {
if((state_val_145407 === (3))){
var inst_145404 = (state_145406[(2)]);
var state_145406__$1 = state_145406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_145406__$1,inst_145404);
} else {
if((state_val_145407 === (4))){
var inst_145394 = (state_145406[(7)]);
var inst_145394__$1 = (state_145406[(2)]);
var state_145406__$1 = (function (){var statearr_145409 = state_145406;
(statearr_145409[(7)] = inst_145394__$1);

return statearr_145409;
})();
if(cljs.core.truth_(inst_145394__$1)){
var statearr_145410_145425 = state_145406__$1;
(statearr_145410_145425[(1)] = (5));

} else {
var statearr_145411_145426 = state_145406__$1;
(statearr_145411_145426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145407 === (5))){
var inst_145394 = (state_145406[(7)]);
var inst_145396 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_145394);
var state_145406__$1 = state_145406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145406__$1,(8),inst_145396);
} else {
if((state_val_145407 === (6))){
var state_145406__$1 = state_145406;
var statearr_145412_145427 = state_145406__$1;
(statearr_145412_145427[(2)] = null);

(statearr_145412_145427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145407 === (7))){
var inst_145402 = (state_145406[(2)]);
var state_145406__$1 = state_145406;
var statearr_145413_145428 = state_145406__$1;
(statearr_145413_145428[(2)] = inst_145402);

(statearr_145413_145428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_145407 === (8))){
var inst_145398 = (state_145406[(2)]);
var state_145406__$1 = (function (){var statearr_145414 = state_145406;
(statearr_145414[(8)] = inst_145398);

return statearr_145414;
})();
var statearr_145415_145429 = state_145406__$1;
(statearr_145415_145429[(2)] = null);

(statearr_145415_145429[(1)] = (2));


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
});})(c__33352__auto___145423,ch))
;
return ((function (switch__33287__auto__,c__33352__auto___145423,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33288__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33288__auto____0 = (function (){
var statearr_145419 = [null,null,null,null,null,null,null,null,null];
(statearr_145419[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33288__auto__);

(statearr_145419[(1)] = (1));

return statearr_145419;
});
var figwheel$client$heads_up_plugin_$_state_machine__33288__auto____1 = (function (state_145406){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_145406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e145420){if((e145420 instanceof Object)){
var ex__33291__auto__ = e145420;
var statearr_145421_145430 = state_145406;
(statearr_145421_145430[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e145420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__145431 = state_145406;
state_145406 = G__145431;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33288__auto__ = function(state_145406){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33288__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33288__auto____1.call(this,state_145406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33288__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33288__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto___145423,ch))
})();
var state__33354__auto__ = (function (){var statearr_145422 = f__33353__auto__.call(null);
(statearr_145422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto___145423);

return statearr_145422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33354__auto__);
});})(c__33352__auto___145423,ch))
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
return (function (state_145452){
var state_val_145453 = (state_145452[(1)]);
if((state_val_145453 === (1))){
var inst_145447 = cljs.core.async.timeout.call(null,(3000));
var state_145452__$1 = state_145452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145452__$1,(2),inst_145447);
} else {
if((state_val_145453 === (2))){
var inst_145449 = (state_145452[(2)]);
var inst_145450 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_145452__$1 = (function (){var statearr_145454 = state_145452;
(statearr_145454[(7)] = inst_145449);

return statearr_145454;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_145452__$1,inst_145450);
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
var statearr_145458 = [null,null,null,null,null,null,null,null];
(statearr_145458[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33288__auto__);

(statearr_145458[(1)] = (1));

return statearr_145458;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33288__auto____1 = (function (state_145452){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_145452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e145459){if((e145459 instanceof Object)){
var ex__33291__auto__ = e145459;
var statearr_145460_145462 = state_145452;
(statearr_145460_145462[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e145459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__145463 = state_145452;
state_145452 = G__145463;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33288__auto__ = function(state_145452){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33288__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33288__auto____1.call(this,state_145452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33288__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33288__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__))
})();
var state__33354__auto__ = (function (){var statearr_145461 = f__33353__auto__.call(null);
(statearr_145461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_145461;
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
return (function (state_145486){
var state_val_145487 = (state_145486[(1)]);
if((state_val_145487 === (1))){
var inst_145480 = cljs.core.async.timeout.call(null,(2000));
var state_145486__$1 = state_145486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145486__$1,(2),inst_145480);
} else {
if((state_val_145487 === (2))){
var inst_145482 = (state_145486[(2)]);
var inst_145483 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_145484 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_145483);
var state_145486__$1 = (function (){var statearr_145488 = state_145486;
(statearr_145488[(7)] = inst_145482);

return statearr_145488;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_145486__$1,inst_145484);
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
var statearr_145492 = [null,null,null,null,null,null,null,null];
(statearr_145492[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33288__auto__);

(statearr_145492[(1)] = (1));

return statearr_145492;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33288__auto____1 = (function (state_145486){
while(true){
var ret_value__33289__auto__ = (function (){try{while(true){
var result__33290__auto__ = switch__33287__auto__.call(null,state_145486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33290__auto__;
}
break;
}
}catch (e145493){if((e145493 instanceof Object)){
var ex__33291__auto__ = e145493;
var statearr_145494_145496 = state_145486;
(statearr_145494_145496[(5)] = ex__33291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e145493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__145497 = state_145486;
state_145486 = G__145497;
continue;
} else {
return ret_value__33289__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33288__auto__ = function(state_145486){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33288__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33288__auto____1.call(this,state_145486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33288__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33288__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33288__auto__;
})()
;})(switch__33287__auto__,c__33352__auto__,figwheel_version,temp__4657__auto__))
})();
var state__33354__auto__ = (function (){var statearr_145495 = f__33353__auto__.call(null);
(statearr_145495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33352__auto__);

return statearr_145495;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__145498){
var map__145502 = p__145498;
var map__145502__$1 = ((((!((map__145502 == null)))?((((map__145502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__145502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__145502):map__145502);
var file = cljs.core.get.call(null,map__145502__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__145502__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__145502__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__145504 = "";
var G__145504__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__145504),cljs.core.str("file "),cljs.core.str(file)].join(''):G__145504);
var G__145504__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__145504__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__145504__$1);
if(cljs.core.truth_((function (){var and__25034__auto__ = line;
if(cljs.core.truth_(and__25034__auto__)){
return column;
} else {
return and__25034__auto__;
}
})())){
return [cljs.core.str(G__145504__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__145504__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__145505){
var map__145512 = p__145505;
var map__145512__$1 = ((((!((map__145512 == null)))?((((map__145512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__145512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__145512):map__145512);
var ed = map__145512__$1;
var formatted_exception = cljs.core.get.call(null,map__145512__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__145512__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__145512__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__145514_145518 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__145515_145519 = null;
var count__145516_145520 = (0);
var i__145517_145521 = (0);
while(true){
if((i__145517_145521 < count__145516_145520)){
var msg_145522 = cljs.core._nth.call(null,chunk__145515_145519,i__145517_145521);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_145522);

var G__145523 = seq__145514_145518;
var G__145524 = chunk__145515_145519;
var G__145525 = count__145516_145520;
var G__145526 = (i__145517_145521 + (1));
seq__145514_145518 = G__145523;
chunk__145515_145519 = G__145524;
count__145516_145520 = G__145525;
i__145517_145521 = G__145526;
continue;
} else {
var temp__4657__auto___145527 = cljs.core.seq.call(null,seq__145514_145518);
if(temp__4657__auto___145527){
var seq__145514_145528__$1 = temp__4657__auto___145527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__145514_145528__$1)){
var c__25857__auto___145529 = cljs.core.chunk_first.call(null,seq__145514_145528__$1);
var G__145530 = cljs.core.chunk_rest.call(null,seq__145514_145528__$1);
var G__145531 = c__25857__auto___145529;
var G__145532 = cljs.core.count.call(null,c__25857__auto___145529);
var G__145533 = (0);
seq__145514_145518 = G__145530;
chunk__145515_145519 = G__145531;
count__145516_145520 = G__145532;
i__145517_145521 = G__145533;
continue;
} else {
var msg_145534 = cljs.core.first.call(null,seq__145514_145528__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_145534);

var G__145535 = cljs.core.next.call(null,seq__145514_145528__$1);
var G__145536 = null;
var G__145537 = (0);
var G__145538 = (0);
seq__145514_145518 = G__145535;
chunk__145515_145519 = G__145536;
count__145516_145520 = G__145537;
i__145517_145521 = G__145538;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__145539){
var map__145542 = p__145539;
var map__145542__$1 = ((((!((map__145542 == null)))?((((map__145542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__145542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__145542):map__145542);
var w = map__145542__$1;
var message = cljs.core.get.call(null,map__145542__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__145554 = cljs.core.seq.call(null,plugins);
var chunk__145555 = null;
var count__145556 = (0);
var i__145557 = (0);
while(true){
if((i__145557 < count__145556)){
var vec__145558 = cljs.core._nth.call(null,chunk__145555,i__145557);
var k = cljs.core.nth.call(null,vec__145558,(0),null);
var plugin = cljs.core.nth.call(null,vec__145558,(1),null);
if(cljs.core.truth_(plugin)){
var pl_145564 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__145554,chunk__145555,count__145556,i__145557,pl_145564,vec__145558,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_145564.call(null,msg_hist);
});})(seq__145554,chunk__145555,count__145556,i__145557,pl_145564,vec__145558,k,plugin))
);
} else {
}

var G__145565 = seq__145554;
var G__145566 = chunk__145555;
var G__145567 = count__145556;
var G__145568 = (i__145557 + (1));
seq__145554 = G__145565;
chunk__145555 = G__145566;
count__145556 = G__145567;
i__145557 = G__145568;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__145554);
if(temp__4657__auto__){
var seq__145554__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__145554__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__145554__$1);
var G__145569 = cljs.core.chunk_rest.call(null,seq__145554__$1);
var G__145570 = c__25857__auto__;
var G__145571 = cljs.core.count.call(null,c__25857__auto__);
var G__145572 = (0);
seq__145554 = G__145569;
chunk__145555 = G__145570;
count__145556 = G__145571;
i__145557 = G__145572;
continue;
} else {
var vec__145561 = cljs.core.first.call(null,seq__145554__$1);
var k = cljs.core.nth.call(null,vec__145561,(0),null);
var plugin = cljs.core.nth.call(null,vec__145561,(1),null);
if(cljs.core.truth_(plugin)){
var pl_145573 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__145554,chunk__145555,count__145556,i__145557,pl_145573,vec__145561,k,plugin,seq__145554__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_145573.call(null,msg_hist);
});})(seq__145554,chunk__145555,count__145556,i__145557,pl_145573,vec__145561,k,plugin,seq__145554__$1,temp__4657__auto__))
);
} else {
}

var G__145574 = cljs.core.next.call(null,seq__145554__$1);
var G__145575 = null;
var G__145576 = (0);
var G__145577 = (0);
seq__145554 = G__145574;
chunk__145555 = G__145575;
count__145556 = G__145576;
i__145557 = G__145577;
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
var args145578 = [];
var len__26121__auto___145585 = arguments.length;
var i__26122__auto___145586 = (0);
while(true){
if((i__26122__auto___145586 < len__26121__auto___145585)){
args145578.push((arguments[i__26122__auto___145586]));

var G__145587 = (i__26122__auto___145586 + (1));
i__26122__auto___145586 = G__145587;
continue;
} else {
}
break;
}

var G__145580 = args145578.length;
switch (G__145580) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args145578.length)].join('')));

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

var seq__145581_145589 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__145582_145590 = null;
var count__145583_145591 = (0);
var i__145584_145592 = (0);
while(true){
if((i__145584_145592 < count__145583_145591)){
var msg_145593 = cljs.core._nth.call(null,chunk__145582_145590,i__145584_145592);
figwheel.client.socket.handle_incoming_message.call(null,msg_145593);

var G__145594 = seq__145581_145589;
var G__145595 = chunk__145582_145590;
var G__145596 = count__145583_145591;
var G__145597 = (i__145584_145592 + (1));
seq__145581_145589 = G__145594;
chunk__145582_145590 = G__145595;
count__145583_145591 = G__145596;
i__145584_145592 = G__145597;
continue;
} else {
var temp__4657__auto___145598 = cljs.core.seq.call(null,seq__145581_145589);
if(temp__4657__auto___145598){
var seq__145581_145599__$1 = temp__4657__auto___145598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__145581_145599__$1)){
var c__25857__auto___145600 = cljs.core.chunk_first.call(null,seq__145581_145599__$1);
var G__145601 = cljs.core.chunk_rest.call(null,seq__145581_145599__$1);
var G__145602 = c__25857__auto___145600;
var G__145603 = cljs.core.count.call(null,c__25857__auto___145600);
var G__145604 = (0);
seq__145581_145589 = G__145601;
chunk__145582_145590 = G__145602;
count__145583_145591 = G__145603;
i__145584_145592 = G__145604;
continue;
} else {
var msg_145605 = cljs.core.first.call(null,seq__145581_145599__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_145605);

var G__145606 = cljs.core.next.call(null,seq__145581_145599__$1);
var G__145607 = null;
var G__145608 = (0);
var G__145609 = (0);
seq__145581_145589 = G__145606;
chunk__145582_145590 = G__145607;
count__145583_145591 = G__145608;
i__145584_145592 = G__145609;
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
var len__26121__auto___145614 = arguments.length;
var i__26122__auto___145615 = (0);
while(true){
if((i__26122__auto___145615 < len__26121__auto___145614)){
args__26128__auto__.push((arguments[i__26122__auto___145615]));

var G__145616 = (i__26122__auto___145615 + (1));
i__26122__auto___145615 = G__145616;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__145611){
var map__145612 = p__145611;
var map__145612__$1 = ((((!((map__145612 == null)))?((((map__145612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__145612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__145612):map__145612);
var opts = map__145612__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq145610){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq145610));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e145618){if((e145618 instanceof Error)){
var e = e145618;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e145618;

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
return (function (p__145622){
var map__145623 = p__145622;
var map__145623__$1 = ((((!((map__145623 == null)))?((((map__145623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__145623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__145623):map__145623);
var msg_name = cljs.core.get.call(null,map__145623__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1484099830514
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
var args36680 = [];
var len__26121__auto___36683 = arguments.length;
var i__26122__auto___36684 = (0);
while(true){
if((i__26122__auto___36684 < len__26121__auto___36683)){
args36680.push((arguments[i__26122__auto___36684]));

var G__36685 = (i__26122__auto___36684 + (1));
i__26122__auto___36684 = G__36685;
continue;
} else {
}
break;
}

var G__36682 = args36680.length;
switch (G__36682) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36680.length)].join('')));

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
var len__26121__auto___36688 = arguments.length;
var i__26122__auto___36689 = (0);
while(true){
if((i__26122__auto___36689 < len__26121__auto___36688)){
args__26128__auto__.push((arguments[i__26122__auto___36689]));

var G__36690 = (i__26122__auto___36689 + (1));
i__26122__auto___36689 = G__36690;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36687){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36687));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26128__auto__ = [];
var len__26121__auto___36692 = arguments.length;
var i__26122__auto___36693 = (0);
while(true){
if((i__26122__auto___36693 < len__26121__auto___36692)){
args__26128__auto__.push((arguments[i__26122__auto___36693]));

var G__36694 = (i__26122__auto___36693 + (1));
i__26122__auto___36693 = G__36694;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36691){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36691));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__36695 = cljs.core._EQ_;
var expr__36696 = (function (){var or__25046__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e36699){if((e36699 instanceof Error)){
var e = e36699;
return false;
} else {
throw e36699;

}
}})();
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__36695.call(null,"true",expr__36696))){
return true;
} else {
if(cljs.core.truth_(pred__36695.call(null,"false",expr__36696))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__36696)].join('')));
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
}catch (e36701){if((e36701 instanceof Error)){
var e = e36701;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e36701;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36702){
var map__36705 = p__36702;
var map__36705__$1 = ((((!((map__36705 == null)))?((((map__36705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36705):map__36705);
var message = cljs.core.get.call(null,map__36705__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36705__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27076__auto___36867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27076__auto___36867,ch){
return (function (){
var f__27077__auto__ = (function (){var switch__27055__auto__ = ((function (c__27076__auto___36867,ch){
return (function (state_36836){
var state_val_36837 = (state_36836[(1)]);
if((state_val_36837 === (7))){
var inst_36832 = (state_36836[(2)]);
var state_36836__$1 = state_36836;
var statearr_36838_36868 = state_36836__$1;
(statearr_36838_36868[(2)] = inst_36832);

(statearr_36838_36868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (1))){
var state_36836__$1 = state_36836;
var statearr_36839_36869 = state_36836__$1;
(statearr_36839_36869[(2)] = null);

(statearr_36839_36869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (4))){
var inst_36789 = (state_36836[(7)]);
var inst_36789__$1 = (state_36836[(2)]);
var state_36836__$1 = (function (){var statearr_36840 = state_36836;
(statearr_36840[(7)] = inst_36789__$1);

return statearr_36840;
})();
if(cljs.core.truth_(inst_36789__$1)){
var statearr_36841_36870 = state_36836__$1;
(statearr_36841_36870[(1)] = (5));

} else {
var statearr_36842_36871 = state_36836__$1;
(statearr_36842_36871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (15))){
var inst_36796 = (state_36836[(8)]);
var inst_36811 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36796);
var inst_36812 = cljs.core.first.call(null,inst_36811);
var inst_36813 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36812);
var inst_36814 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36813)].join('');
var inst_36815 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36814);
var state_36836__$1 = state_36836;
var statearr_36843_36872 = state_36836__$1;
(statearr_36843_36872[(2)] = inst_36815);

(statearr_36843_36872[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (13))){
var inst_36820 = (state_36836[(2)]);
var state_36836__$1 = state_36836;
var statearr_36844_36873 = state_36836__$1;
(statearr_36844_36873[(2)] = inst_36820);

(statearr_36844_36873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (6))){
var state_36836__$1 = state_36836;
var statearr_36845_36874 = state_36836__$1;
(statearr_36845_36874[(2)] = null);

(statearr_36845_36874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (17))){
var inst_36818 = (state_36836[(2)]);
var state_36836__$1 = state_36836;
var statearr_36846_36875 = state_36836__$1;
(statearr_36846_36875[(2)] = inst_36818);

(statearr_36846_36875[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (3))){
var inst_36834 = (state_36836[(2)]);
var state_36836__$1 = state_36836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36836__$1,inst_36834);
} else {
if((state_val_36837 === (12))){
var inst_36795 = (state_36836[(9)]);
var inst_36809 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36795,opts);
var state_36836__$1 = state_36836;
if(cljs.core.truth_(inst_36809)){
var statearr_36847_36876 = state_36836__$1;
(statearr_36847_36876[(1)] = (15));

} else {
var statearr_36848_36877 = state_36836__$1;
(statearr_36848_36877[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (2))){
var state_36836__$1 = state_36836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36836__$1,(4),ch);
} else {
if((state_val_36837 === (11))){
var inst_36796 = (state_36836[(8)]);
var inst_36801 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36802 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36796);
var inst_36803 = cljs.core.async.timeout.call(null,(1000));
var inst_36804 = [inst_36802,inst_36803];
var inst_36805 = (new cljs.core.PersistentVector(null,2,(5),inst_36801,inst_36804,null));
var state_36836__$1 = state_36836;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36836__$1,(14),inst_36805);
} else {
if((state_val_36837 === (9))){
var inst_36796 = (state_36836[(8)]);
var inst_36822 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36823 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36796);
var inst_36824 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36823);
var inst_36825 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36824)].join('');
var inst_36826 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36825);
var state_36836__$1 = (function (){var statearr_36849 = state_36836;
(statearr_36849[(10)] = inst_36822);

return statearr_36849;
})();
var statearr_36850_36878 = state_36836__$1;
(statearr_36850_36878[(2)] = inst_36826);

(statearr_36850_36878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (5))){
var inst_36789 = (state_36836[(7)]);
var inst_36791 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36792 = (new cljs.core.PersistentArrayMap(null,2,inst_36791,null));
var inst_36793 = (new cljs.core.PersistentHashSet(null,inst_36792,null));
var inst_36794 = figwheel.client.focus_msgs.call(null,inst_36793,inst_36789);
var inst_36795 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36794);
var inst_36796 = cljs.core.first.call(null,inst_36794);
var inst_36797 = figwheel.client.autoload_QMARK_.call(null);
var state_36836__$1 = (function (){var statearr_36851 = state_36836;
(statearr_36851[(8)] = inst_36796);

(statearr_36851[(9)] = inst_36795);

return statearr_36851;
})();
if(cljs.core.truth_(inst_36797)){
var statearr_36852_36879 = state_36836__$1;
(statearr_36852_36879[(1)] = (8));

} else {
var statearr_36853_36880 = state_36836__$1;
(statearr_36853_36880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (14))){
var inst_36807 = (state_36836[(2)]);
var state_36836__$1 = state_36836;
var statearr_36854_36881 = state_36836__$1;
(statearr_36854_36881[(2)] = inst_36807);

(statearr_36854_36881[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (16))){
var state_36836__$1 = state_36836;
var statearr_36855_36882 = state_36836__$1;
(statearr_36855_36882[(2)] = null);

(statearr_36855_36882[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (10))){
var inst_36828 = (state_36836[(2)]);
var state_36836__$1 = (function (){var statearr_36856 = state_36836;
(statearr_36856[(11)] = inst_36828);

return statearr_36856;
})();
var statearr_36857_36883 = state_36836__$1;
(statearr_36857_36883[(2)] = null);

(statearr_36857_36883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (8))){
var inst_36795 = (state_36836[(9)]);
var inst_36799 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36795,opts);
var state_36836__$1 = state_36836;
if(cljs.core.truth_(inst_36799)){
var statearr_36858_36884 = state_36836__$1;
(statearr_36858_36884[(1)] = (11));

} else {
var statearr_36859_36885 = state_36836__$1;
(statearr_36859_36885[(1)] = (12));

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
});})(c__27076__auto___36867,ch))
;
return ((function (switch__27055__auto__,c__27076__auto___36867,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27056__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27056__auto____0 = (function (){
var statearr_36863 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36863[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27056__auto__);

(statearr_36863[(1)] = (1));

return statearr_36863;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27056__auto____1 = (function (state_36836){
while(true){
var ret_value__27057__auto__ = (function (){try{while(true){
var result__27058__auto__ = switch__27055__auto__.call(null,state_36836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27058__auto__;
}
break;
}
}catch (e36864){if((e36864 instanceof Object)){
var ex__27059__auto__ = e36864;
var statearr_36865_36886 = state_36836;
(statearr_36865_36886[(5)] = ex__27059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36887 = state_36836;
state_36836 = G__36887;
continue;
} else {
return ret_value__27057__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27056__auto__ = function(state_36836){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27056__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27056__auto____1.call(this,state_36836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27056__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27056__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27056__auto__;
})()
;})(switch__27055__auto__,c__27076__auto___36867,ch))
})();
var state__27078__auto__ = (function (){var statearr_36866 = f__27077__auto__.call(null);
(statearr_36866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27076__auto___36867);

return statearr_36866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27078__auto__);
});})(c__27076__auto___36867,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36888_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36888_SHARP_));
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
var base_path_36891 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36891){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36890){if((e36890 instanceof Error)){
var e = e36890;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36891], null));
} else {
var e = e36890;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36891))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36892){
var map__36901 = p__36892;
var map__36901__$1 = ((((!((map__36901 == null)))?((((map__36901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36901):map__36901);
var opts = map__36901__$1;
var build_id = cljs.core.get.call(null,map__36901__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36901,map__36901__$1,opts,build_id){
return (function (p__36903){
var vec__36904 = p__36903;
var seq__36905 = cljs.core.seq.call(null,vec__36904);
var first__36906 = cljs.core.first.call(null,seq__36905);
var seq__36905__$1 = cljs.core.next.call(null,seq__36905);
var map__36907 = first__36906;
var map__36907__$1 = ((((!((map__36907 == null)))?((((map__36907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36907):map__36907);
var msg = map__36907__$1;
var msg_name = cljs.core.get.call(null,map__36907__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36905__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36904,seq__36905,first__36906,seq__36905__$1,map__36907,map__36907__$1,msg,msg_name,_,map__36901,map__36901__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36904,seq__36905,first__36906,seq__36905__$1,map__36907,map__36907__$1,msg,msg_name,_,map__36901,map__36901__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36901,map__36901__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36915){
var vec__36916 = p__36915;
var seq__36917 = cljs.core.seq.call(null,vec__36916);
var first__36918 = cljs.core.first.call(null,seq__36917);
var seq__36917__$1 = cljs.core.next.call(null,seq__36917);
var map__36919 = first__36918;
var map__36919__$1 = ((((!((map__36919 == null)))?((((map__36919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36919):map__36919);
var msg = map__36919__$1;
var msg_name = cljs.core.get.call(null,map__36919__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36917__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36921){
var map__36933 = p__36921;
var map__36933__$1 = ((((!((map__36933 == null)))?((((map__36933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36933):map__36933);
var on_compile_warning = cljs.core.get.call(null,map__36933__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36933__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36933,map__36933__$1,on_compile_warning,on_compile_fail){
return (function (p__36935){
var vec__36936 = p__36935;
var seq__36937 = cljs.core.seq.call(null,vec__36936);
var first__36938 = cljs.core.first.call(null,seq__36937);
var seq__36937__$1 = cljs.core.next.call(null,seq__36937);
var map__36939 = first__36938;
var map__36939__$1 = ((((!((map__36939 == null)))?((((map__36939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36939):map__36939);
var msg = map__36939__$1;
var msg_name = cljs.core.get.call(null,map__36939__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36937__$1;
var pred__36941 = cljs.core._EQ_;
var expr__36942 = msg_name;
if(cljs.core.truth_(pred__36941.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36942))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36941.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36942))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36933,map__36933__$1,on_compile_warning,on_compile_fail))
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
var c__27076__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27076__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27077__auto__ = (function (){var switch__27055__auto__ = ((function (c__27076__auto__,msg_hist,msg_names,msg){
return (function (state_37170){
var state_val_37171 = (state_37170[(1)]);
if((state_val_37171 === (7))){
var inst_37090 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
if(cljs.core.truth_(inst_37090)){
var statearr_37172_37222 = state_37170__$1;
(statearr_37172_37222[(1)] = (8));

} else {
var statearr_37173_37223 = state_37170__$1;
(statearr_37173_37223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (20))){
var inst_37164 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
var statearr_37174_37224 = state_37170__$1;
(statearr_37174_37224[(2)] = inst_37164);

(statearr_37174_37224[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (27))){
var inst_37160 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
var statearr_37175_37225 = state_37170__$1;
(statearr_37175_37225[(2)] = inst_37160);

(statearr_37175_37225[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (1))){
var inst_37083 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37170__$1 = state_37170;
if(cljs.core.truth_(inst_37083)){
var statearr_37176_37226 = state_37170__$1;
(statearr_37176_37226[(1)] = (2));

} else {
var statearr_37177_37227 = state_37170__$1;
(statearr_37177_37227[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (24))){
var inst_37162 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
var statearr_37178_37228 = state_37170__$1;
(statearr_37178_37228[(2)] = inst_37162);

(statearr_37178_37228[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (4))){
var inst_37168 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37170__$1,inst_37168);
} else {
if((state_val_37171 === (15))){
var inst_37166 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
var statearr_37179_37229 = state_37170__$1;
(statearr_37179_37229[(2)] = inst_37166);

(statearr_37179_37229[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (21))){
var inst_37119 = (state_37170[(2)]);
var inst_37120 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37121 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37120);
var state_37170__$1 = (function (){var statearr_37180 = state_37170;
(statearr_37180[(7)] = inst_37119);

return statearr_37180;
})();
var statearr_37181_37230 = state_37170__$1;
(statearr_37181_37230[(2)] = inst_37121);

(statearr_37181_37230[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (31))){
var inst_37149 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37170__$1 = state_37170;
if(cljs.core.truth_(inst_37149)){
var statearr_37182_37231 = state_37170__$1;
(statearr_37182_37231[(1)] = (34));

} else {
var statearr_37183_37232 = state_37170__$1;
(statearr_37183_37232[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (32))){
var inst_37158 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
var statearr_37184_37233 = state_37170__$1;
(statearr_37184_37233[(2)] = inst_37158);

(statearr_37184_37233[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (33))){
var inst_37145 = (state_37170[(2)]);
var inst_37146 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37147 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37146);
var state_37170__$1 = (function (){var statearr_37185 = state_37170;
(statearr_37185[(8)] = inst_37145);

return statearr_37185;
})();
var statearr_37186_37234 = state_37170__$1;
(statearr_37186_37234[(2)] = inst_37147);

(statearr_37186_37234[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (13))){
var inst_37104 = figwheel.client.heads_up.clear.call(null);
var state_37170__$1 = state_37170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37170__$1,(16),inst_37104);
} else {
if((state_val_37171 === (22))){
var inst_37125 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37126 = figwheel.client.heads_up.append_warning_message.call(null,inst_37125);
var state_37170__$1 = state_37170;
var statearr_37187_37235 = state_37170__$1;
(statearr_37187_37235[(2)] = inst_37126);

(statearr_37187_37235[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (36))){
var inst_37156 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
var statearr_37188_37236 = state_37170__$1;
(statearr_37188_37236[(2)] = inst_37156);

(statearr_37188_37236[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (29))){
var inst_37136 = (state_37170[(2)]);
var inst_37137 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37138 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37137);
var state_37170__$1 = (function (){var statearr_37189 = state_37170;
(statearr_37189[(9)] = inst_37136);

return statearr_37189;
})();
var statearr_37190_37237 = state_37170__$1;
(statearr_37190_37237[(2)] = inst_37138);

(statearr_37190_37237[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (6))){
var inst_37085 = (state_37170[(10)]);
var state_37170__$1 = state_37170;
var statearr_37191_37238 = state_37170__$1;
(statearr_37191_37238[(2)] = inst_37085);

(statearr_37191_37238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (28))){
var inst_37132 = (state_37170[(2)]);
var inst_37133 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37134 = figwheel.client.heads_up.display_warning.call(null,inst_37133);
var state_37170__$1 = (function (){var statearr_37192 = state_37170;
(statearr_37192[(11)] = inst_37132);

return statearr_37192;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37170__$1,(29),inst_37134);
} else {
if((state_val_37171 === (25))){
var inst_37130 = figwheel.client.heads_up.clear.call(null);
var state_37170__$1 = state_37170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37170__$1,(28),inst_37130);
} else {
if((state_val_37171 === (34))){
var inst_37151 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37170__$1 = state_37170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37170__$1,(37),inst_37151);
} else {
if((state_val_37171 === (17))){
var inst_37110 = (state_37170[(2)]);
var inst_37111 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37112 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37111);
var state_37170__$1 = (function (){var statearr_37193 = state_37170;
(statearr_37193[(12)] = inst_37110);

return statearr_37193;
})();
var statearr_37194_37239 = state_37170__$1;
(statearr_37194_37239[(2)] = inst_37112);

(statearr_37194_37239[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (3))){
var inst_37102 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37170__$1 = state_37170;
if(cljs.core.truth_(inst_37102)){
var statearr_37195_37240 = state_37170__$1;
(statearr_37195_37240[(1)] = (13));

} else {
var statearr_37196_37241 = state_37170__$1;
(statearr_37196_37241[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (12))){
var inst_37098 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
var statearr_37197_37242 = state_37170__$1;
(statearr_37197_37242[(2)] = inst_37098);

(statearr_37197_37242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (2))){
var inst_37085 = (state_37170[(10)]);
var inst_37085__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37170__$1 = (function (){var statearr_37198 = state_37170;
(statearr_37198[(10)] = inst_37085__$1);

return statearr_37198;
})();
if(cljs.core.truth_(inst_37085__$1)){
var statearr_37199_37243 = state_37170__$1;
(statearr_37199_37243[(1)] = (5));

} else {
var statearr_37200_37244 = state_37170__$1;
(statearr_37200_37244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (23))){
var inst_37128 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37170__$1 = state_37170;
if(cljs.core.truth_(inst_37128)){
var statearr_37201_37245 = state_37170__$1;
(statearr_37201_37245[(1)] = (25));

} else {
var statearr_37202_37246 = state_37170__$1;
(statearr_37202_37246[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (35))){
var state_37170__$1 = state_37170;
var statearr_37203_37247 = state_37170__$1;
(statearr_37203_37247[(2)] = null);

(statearr_37203_37247[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (19))){
var inst_37123 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37170__$1 = state_37170;
if(cljs.core.truth_(inst_37123)){
var statearr_37204_37248 = state_37170__$1;
(statearr_37204_37248[(1)] = (22));

} else {
var statearr_37205_37249 = state_37170__$1;
(statearr_37205_37249[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (11))){
var inst_37094 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
var statearr_37206_37250 = state_37170__$1;
(statearr_37206_37250[(2)] = inst_37094);

(statearr_37206_37250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (9))){
var inst_37096 = figwheel.client.heads_up.clear.call(null);
var state_37170__$1 = state_37170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37170__$1,(12),inst_37096);
} else {
if((state_val_37171 === (5))){
var inst_37087 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37170__$1 = state_37170;
var statearr_37207_37251 = state_37170__$1;
(statearr_37207_37251[(2)] = inst_37087);

(statearr_37207_37251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (14))){
var inst_37114 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37170__$1 = state_37170;
if(cljs.core.truth_(inst_37114)){
var statearr_37208_37252 = state_37170__$1;
(statearr_37208_37252[(1)] = (18));

} else {
var statearr_37209_37253 = state_37170__$1;
(statearr_37209_37253[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (26))){
var inst_37140 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37170__$1 = state_37170;
if(cljs.core.truth_(inst_37140)){
var statearr_37210_37254 = state_37170__$1;
(statearr_37210_37254[(1)] = (30));

} else {
var statearr_37211_37255 = state_37170__$1;
(statearr_37211_37255[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (16))){
var inst_37106 = (state_37170[(2)]);
var inst_37107 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37108 = figwheel.client.heads_up.display_exception.call(null,inst_37107);
var state_37170__$1 = (function (){var statearr_37212 = state_37170;
(statearr_37212[(13)] = inst_37106);

return statearr_37212;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37170__$1,(17),inst_37108);
} else {
if((state_val_37171 === (30))){
var inst_37142 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37143 = figwheel.client.heads_up.display_warning.call(null,inst_37142);
var state_37170__$1 = state_37170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37170__$1,(33),inst_37143);
} else {
if((state_val_37171 === (10))){
var inst_37100 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
var statearr_37213_37256 = state_37170__$1;
(statearr_37213_37256[(2)] = inst_37100);

(statearr_37213_37256[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (18))){
var inst_37116 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37117 = figwheel.client.heads_up.display_exception.call(null,inst_37116);
var state_37170__$1 = state_37170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37170__$1,(21),inst_37117);
} else {
if((state_val_37171 === (37))){
var inst_37153 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
var statearr_37214_37257 = state_37170__$1;
(statearr_37214_37257[(2)] = inst_37153);

(statearr_37214_37257[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (8))){
var inst_37092 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37170__$1 = state_37170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37170__$1,(11),inst_37092);
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
});})(c__27076__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27055__auto__,c__27076__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27056__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27056__auto____0 = (function (){
var statearr_37218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37218[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27056__auto__);

(statearr_37218[(1)] = (1));

return statearr_37218;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27056__auto____1 = (function (state_37170){
while(true){
var ret_value__27057__auto__ = (function (){try{while(true){
var result__27058__auto__ = switch__27055__auto__.call(null,state_37170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27058__auto__;
}
break;
}
}catch (e37219){if((e37219 instanceof Object)){
var ex__27059__auto__ = e37219;
var statearr_37220_37258 = state_37170;
(statearr_37220_37258[(5)] = ex__27059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37259 = state_37170;
state_37170 = G__37259;
continue;
} else {
return ret_value__27057__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27056__auto__ = function(state_37170){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27056__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27056__auto____1.call(this,state_37170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27056__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27056__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27056__auto__;
})()
;})(switch__27055__auto__,c__27076__auto__,msg_hist,msg_names,msg))
})();
var state__27078__auto__ = (function (){var statearr_37221 = f__27077__auto__.call(null);
(statearr_37221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27076__auto__);

return statearr_37221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27078__auto__);
});})(c__27076__auto__,msg_hist,msg_names,msg))
);

return c__27076__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27076__auto___37322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27076__auto___37322,ch){
return (function (){
var f__27077__auto__ = (function (){var switch__27055__auto__ = ((function (c__27076__auto___37322,ch){
return (function (state_37305){
var state_val_37306 = (state_37305[(1)]);
if((state_val_37306 === (1))){
var state_37305__$1 = state_37305;
var statearr_37307_37323 = state_37305__$1;
(statearr_37307_37323[(2)] = null);

(statearr_37307_37323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37306 === (2))){
var state_37305__$1 = state_37305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37305__$1,(4),ch);
} else {
if((state_val_37306 === (3))){
var inst_37303 = (state_37305[(2)]);
var state_37305__$1 = state_37305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37305__$1,inst_37303);
} else {
if((state_val_37306 === (4))){
var inst_37293 = (state_37305[(7)]);
var inst_37293__$1 = (state_37305[(2)]);
var state_37305__$1 = (function (){var statearr_37308 = state_37305;
(statearr_37308[(7)] = inst_37293__$1);

return statearr_37308;
})();
if(cljs.core.truth_(inst_37293__$1)){
var statearr_37309_37324 = state_37305__$1;
(statearr_37309_37324[(1)] = (5));

} else {
var statearr_37310_37325 = state_37305__$1;
(statearr_37310_37325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37306 === (5))){
var inst_37293 = (state_37305[(7)]);
var inst_37295 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37293);
var state_37305__$1 = state_37305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37305__$1,(8),inst_37295);
} else {
if((state_val_37306 === (6))){
var state_37305__$1 = state_37305;
var statearr_37311_37326 = state_37305__$1;
(statearr_37311_37326[(2)] = null);

(statearr_37311_37326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37306 === (7))){
var inst_37301 = (state_37305[(2)]);
var state_37305__$1 = state_37305;
var statearr_37312_37327 = state_37305__$1;
(statearr_37312_37327[(2)] = inst_37301);

(statearr_37312_37327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37306 === (8))){
var inst_37297 = (state_37305[(2)]);
var state_37305__$1 = (function (){var statearr_37313 = state_37305;
(statearr_37313[(8)] = inst_37297);

return statearr_37313;
})();
var statearr_37314_37328 = state_37305__$1;
(statearr_37314_37328[(2)] = null);

(statearr_37314_37328[(1)] = (2));


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
});})(c__27076__auto___37322,ch))
;
return ((function (switch__27055__auto__,c__27076__auto___37322,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27056__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27056__auto____0 = (function (){
var statearr_37318 = [null,null,null,null,null,null,null,null,null];
(statearr_37318[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27056__auto__);

(statearr_37318[(1)] = (1));

return statearr_37318;
});
var figwheel$client$heads_up_plugin_$_state_machine__27056__auto____1 = (function (state_37305){
while(true){
var ret_value__27057__auto__ = (function (){try{while(true){
var result__27058__auto__ = switch__27055__auto__.call(null,state_37305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27058__auto__;
}
break;
}
}catch (e37319){if((e37319 instanceof Object)){
var ex__27059__auto__ = e37319;
var statearr_37320_37329 = state_37305;
(statearr_37320_37329[(5)] = ex__27059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37330 = state_37305;
state_37305 = G__37330;
continue;
} else {
return ret_value__27057__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27056__auto__ = function(state_37305){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27056__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27056__auto____1.call(this,state_37305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27056__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27056__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27056__auto__;
})()
;})(switch__27055__auto__,c__27076__auto___37322,ch))
})();
var state__27078__auto__ = (function (){var statearr_37321 = f__27077__auto__.call(null);
(statearr_37321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27076__auto___37322);

return statearr_37321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27078__auto__);
});})(c__27076__auto___37322,ch))
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
var c__27076__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27076__auto__){
return (function (){
var f__27077__auto__ = (function (){var switch__27055__auto__ = ((function (c__27076__auto__){
return (function (state_37351){
var state_val_37352 = (state_37351[(1)]);
if((state_val_37352 === (1))){
var inst_37346 = cljs.core.async.timeout.call(null,(3000));
var state_37351__$1 = state_37351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37351__$1,(2),inst_37346);
} else {
if((state_val_37352 === (2))){
var inst_37348 = (state_37351[(2)]);
var inst_37349 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37351__$1 = (function (){var statearr_37353 = state_37351;
(statearr_37353[(7)] = inst_37348);

return statearr_37353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37351__$1,inst_37349);
} else {
return null;
}
}
});})(c__27076__auto__))
;
return ((function (switch__27055__auto__,c__27076__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27056__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27056__auto____0 = (function (){
var statearr_37357 = [null,null,null,null,null,null,null,null];
(statearr_37357[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27056__auto__);

(statearr_37357[(1)] = (1));

return statearr_37357;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27056__auto____1 = (function (state_37351){
while(true){
var ret_value__27057__auto__ = (function (){try{while(true){
var result__27058__auto__ = switch__27055__auto__.call(null,state_37351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27058__auto__;
}
break;
}
}catch (e37358){if((e37358 instanceof Object)){
var ex__27059__auto__ = e37358;
var statearr_37359_37361 = state_37351;
(statearr_37359_37361[(5)] = ex__27059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37362 = state_37351;
state_37351 = G__37362;
continue;
} else {
return ret_value__27057__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27056__auto__ = function(state_37351){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27056__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27056__auto____1.call(this,state_37351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27056__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27056__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27056__auto__;
})()
;})(switch__27055__auto__,c__27076__auto__))
})();
var state__27078__auto__ = (function (){var statearr_37360 = f__27077__auto__.call(null);
(statearr_37360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27076__auto__);

return statearr_37360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27078__auto__);
});})(c__27076__auto__))
);

return c__27076__auto__;
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
var c__27076__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27076__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27077__auto__ = (function (){var switch__27055__auto__ = ((function (c__27076__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37385){
var state_val_37386 = (state_37385[(1)]);
if((state_val_37386 === (1))){
var inst_37379 = cljs.core.async.timeout.call(null,(2000));
var state_37385__$1 = state_37385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37385__$1,(2),inst_37379);
} else {
if((state_val_37386 === (2))){
var inst_37381 = (state_37385[(2)]);
var inst_37382 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37383 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37382);
var state_37385__$1 = (function (){var statearr_37387 = state_37385;
(statearr_37387[(7)] = inst_37381);

return statearr_37387;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37385__$1,inst_37383);
} else {
return null;
}
}
});})(c__27076__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27055__auto__,c__27076__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27056__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27056__auto____0 = (function (){
var statearr_37391 = [null,null,null,null,null,null,null,null];
(statearr_37391[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27056__auto__);

(statearr_37391[(1)] = (1));

return statearr_37391;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27056__auto____1 = (function (state_37385){
while(true){
var ret_value__27057__auto__ = (function (){try{while(true){
var result__27058__auto__ = switch__27055__auto__.call(null,state_37385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27058__auto__;
}
break;
}
}catch (e37392){if((e37392 instanceof Object)){
var ex__27059__auto__ = e37392;
var statearr_37393_37395 = state_37385;
(statearr_37393_37395[(5)] = ex__27059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37396 = state_37385;
state_37385 = G__37396;
continue;
} else {
return ret_value__27057__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27056__auto__ = function(state_37385){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27056__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27056__auto____1.call(this,state_37385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27056__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27056__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27056__auto__;
})()
;})(switch__27055__auto__,c__27076__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27078__auto__ = (function (){var statearr_37394 = f__27077__auto__.call(null);
(statearr_37394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27076__auto__);

return statearr_37394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27078__auto__);
});})(c__27076__auto__,figwheel_version,temp__4657__auto__))
);

return c__27076__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37397){
var map__37401 = p__37397;
var map__37401__$1 = ((((!((map__37401 == null)))?((((map__37401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37401):map__37401);
var file = cljs.core.get.call(null,map__37401__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37401__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37401__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37403 = "";
var G__37403__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37403),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37403);
var G__37403__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37403__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37403__$1);
if(cljs.core.truth_((function (){var and__25034__auto__ = line;
if(cljs.core.truth_(and__25034__auto__)){
return column;
} else {
return and__25034__auto__;
}
})())){
return [cljs.core.str(G__37403__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37403__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37404){
var map__37411 = p__37404;
var map__37411__$1 = ((((!((map__37411 == null)))?((((map__37411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37411):map__37411);
var ed = map__37411__$1;
var formatted_exception = cljs.core.get.call(null,map__37411__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37411__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37411__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37413_37417 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37414_37418 = null;
var count__37415_37419 = (0);
var i__37416_37420 = (0);
while(true){
if((i__37416_37420 < count__37415_37419)){
var msg_37421 = cljs.core._nth.call(null,chunk__37414_37418,i__37416_37420);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37421);

var G__37422 = seq__37413_37417;
var G__37423 = chunk__37414_37418;
var G__37424 = count__37415_37419;
var G__37425 = (i__37416_37420 + (1));
seq__37413_37417 = G__37422;
chunk__37414_37418 = G__37423;
count__37415_37419 = G__37424;
i__37416_37420 = G__37425;
continue;
} else {
var temp__4657__auto___37426 = cljs.core.seq.call(null,seq__37413_37417);
if(temp__4657__auto___37426){
var seq__37413_37427__$1 = temp__4657__auto___37426;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37413_37427__$1)){
var c__25857__auto___37428 = cljs.core.chunk_first.call(null,seq__37413_37427__$1);
var G__37429 = cljs.core.chunk_rest.call(null,seq__37413_37427__$1);
var G__37430 = c__25857__auto___37428;
var G__37431 = cljs.core.count.call(null,c__25857__auto___37428);
var G__37432 = (0);
seq__37413_37417 = G__37429;
chunk__37414_37418 = G__37430;
count__37415_37419 = G__37431;
i__37416_37420 = G__37432;
continue;
} else {
var msg_37433 = cljs.core.first.call(null,seq__37413_37427__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37433);

var G__37434 = cljs.core.next.call(null,seq__37413_37427__$1);
var G__37435 = null;
var G__37436 = (0);
var G__37437 = (0);
seq__37413_37417 = G__37434;
chunk__37414_37418 = G__37435;
count__37415_37419 = G__37436;
i__37416_37420 = G__37437;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37438){
var map__37441 = p__37438;
var map__37441__$1 = ((((!((map__37441 == null)))?((((map__37441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37441):map__37441);
var w = map__37441__$1;
var message = cljs.core.get.call(null,map__37441__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__37453 = cljs.core.seq.call(null,plugins);
var chunk__37454 = null;
var count__37455 = (0);
var i__37456 = (0);
while(true){
if((i__37456 < count__37455)){
var vec__37457 = cljs.core._nth.call(null,chunk__37454,i__37456);
var k = cljs.core.nth.call(null,vec__37457,(0),null);
var plugin = cljs.core.nth.call(null,vec__37457,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37463 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37453,chunk__37454,count__37455,i__37456,pl_37463,vec__37457,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37463.call(null,msg_hist);
});})(seq__37453,chunk__37454,count__37455,i__37456,pl_37463,vec__37457,k,plugin))
);
} else {
}

var G__37464 = seq__37453;
var G__37465 = chunk__37454;
var G__37466 = count__37455;
var G__37467 = (i__37456 + (1));
seq__37453 = G__37464;
chunk__37454 = G__37465;
count__37455 = G__37466;
i__37456 = G__37467;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37453);
if(temp__4657__auto__){
var seq__37453__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37453__$1)){
var c__25857__auto__ = cljs.core.chunk_first.call(null,seq__37453__$1);
var G__37468 = cljs.core.chunk_rest.call(null,seq__37453__$1);
var G__37469 = c__25857__auto__;
var G__37470 = cljs.core.count.call(null,c__25857__auto__);
var G__37471 = (0);
seq__37453 = G__37468;
chunk__37454 = G__37469;
count__37455 = G__37470;
i__37456 = G__37471;
continue;
} else {
var vec__37460 = cljs.core.first.call(null,seq__37453__$1);
var k = cljs.core.nth.call(null,vec__37460,(0),null);
var plugin = cljs.core.nth.call(null,vec__37460,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37472 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37453,chunk__37454,count__37455,i__37456,pl_37472,vec__37460,k,plugin,seq__37453__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37472.call(null,msg_hist);
});})(seq__37453,chunk__37454,count__37455,i__37456,pl_37472,vec__37460,k,plugin,seq__37453__$1,temp__4657__auto__))
);
} else {
}

var G__37473 = cljs.core.next.call(null,seq__37453__$1);
var G__37474 = null;
var G__37475 = (0);
var G__37476 = (0);
seq__37453 = G__37473;
chunk__37454 = G__37474;
count__37455 = G__37475;
i__37456 = G__37476;
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
var args37477 = [];
var len__26121__auto___37484 = arguments.length;
var i__26122__auto___37485 = (0);
while(true){
if((i__26122__auto___37485 < len__26121__auto___37484)){
args37477.push((arguments[i__26122__auto___37485]));

var G__37486 = (i__26122__auto___37485 + (1));
i__26122__auto___37485 = G__37486;
continue;
} else {
}
break;
}

var G__37479 = args37477.length;
switch (G__37479) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37477.length)].join('')));

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

var seq__37480_37488 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37481_37489 = null;
var count__37482_37490 = (0);
var i__37483_37491 = (0);
while(true){
if((i__37483_37491 < count__37482_37490)){
var msg_37492 = cljs.core._nth.call(null,chunk__37481_37489,i__37483_37491);
figwheel.client.socket.handle_incoming_message.call(null,msg_37492);

var G__37493 = seq__37480_37488;
var G__37494 = chunk__37481_37489;
var G__37495 = count__37482_37490;
var G__37496 = (i__37483_37491 + (1));
seq__37480_37488 = G__37493;
chunk__37481_37489 = G__37494;
count__37482_37490 = G__37495;
i__37483_37491 = G__37496;
continue;
} else {
var temp__4657__auto___37497 = cljs.core.seq.call(null,seq__37480_37488);
if(temp__4657__auto___37497){
var seq__37480_37498__$1 = temp__4657__auto___37497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37480_37498__$1)){
var c__25857__auto___37499 = cljs.core.chunk_first.call(null,seq__37480_37498__$1);
var G__37500 = cljs.core.chunk_rest.call(null,seq__37480_37498__$1);
var G__37501 = c__25857__auto___37499;
var G__37502 = cljs.core.count.call(null,c__25857__auto___37499);
var G__37503 = (0);
seq__37480_37488 = G__37500;
chunk__37481_37489 = G__37501;
count__37482_37490 = G__37502;
i__37483_37491 = G__37503;
continue;
} else {
var msg_37504 = cljs.core.first.call(null,seq__37480_37498__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37504);

var G__37505 = cljs.core.next.call(null,seq__37480_37498__$1);
var G__37506 = null;
var G__37507 = (0);
var G__37508 = (0);
seq__37480_37488 = G__37505;
chunk__37481_37489 = G__37506;
count__37482_37490 = G__37507;
i__37483_37491 = G__37508;
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
var len__26121__auto___37513 = arguments.length;
var i__26122__auto___37514 = (0);
while(true){
if((i__26122__auto___37514 < len__26121__auto___37513)){
args__26128__auto__.push((arguments[i__26122__auto___37514]));

var G__37515 = (i__26122__auto___37514 + (1));
i__26122__auto___37514 = G__37515;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37510){
var map__37511 = p__37510;
var map__37511__$1 = ((((!((map__37511 == null)))?((((map__37511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37511):map__37511);
var opts = map__37511__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37509){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37509));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37517){if((e37517 instanceof Error)){
var e = e37517;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37517;

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
return (function (p__37521){
var map__37522 = p__37521;
var map__37522__$1 = ((((!((map__37522 == null)))?((((map__37522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37522):map__37522);
var msg_name = cljs.core.get.call(null,map__37522__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1484443199632
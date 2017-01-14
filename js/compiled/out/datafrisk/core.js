// Compiled by ClojureScript 1.9.229 {}
goog.provide('datafrisk.core');
goog.require('cljs.core');
goog.require('reagent.core');
datafrisk.core.ExpandButton = (function datafrisk$core$ExpandButton(p__52856){
var map__52859 = p__52856;
var map__52859__$1 = ((((!((map__52859 == null)))?((((map__52859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52859):map__52859);
var expanded_QMARK_ = cljs.core.get.call(null,map__52859__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296));
var path = cljs.core.get.call(null,map__52859__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var emit_fn = cljs.core.get.call(null,map__52859__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),(0),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"transparent",new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"height","height",1025178622),"20px"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__52859,map__52859__$1,expanded_QMARK_,path,emit_fn){
return (function (){
return emit_fn.call(null,(cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"contract","contract",798152745):new cljs.core.Keyword(null,"expand","expand",595248157)),path);
});})(map__52859,map__52859__$1,expanded_QMARK_,path,emit_fn))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 100 100",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.2s ease",new cljs.core.Keyword(null,"transform","transform",1381301764),(cljs.core.truth_(expanded_QMARK_)?"rotate(90deg)":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"0,0 0,100 100,50",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null)], null)], null);
});
datafrisk.core.styles = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"shell","shell",1402941019),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#FAFAFA",new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"Consolas,Monaco,Courier New,monospace",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"12px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(9999)], null),new cljs.core.Keyword(null,"strings","strings",-2055406807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#4Ebb4E"], null),new cljs.core.Keyword(null,"keywords","keywords",1526959054),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"purple"], null),new cljs.core.Keyword(null,"numbers","numbers",1036309864),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.Keyword(null,"shell-visible-button","shell-visible-button",-1362287320),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#4EE24E"], null)], null);
datafrisk.core.ExpandAllButton = (function datafrisk$core$ExpandAllButton(emit_fn,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return emit_fn.call(null,new cljs.core.Keyword(null,"expand-all","expand-all",-1489416197),data);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"3px",new cljs.core.Keyword(null,"borderTopLeftRadius","borderTopLeftRadius",-1503490700),"2px",new cljs.core.Keyword(null,"borderBottomLeftRadius","borderBottomLeftRadius",-1845172472),"2px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid darkgray",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"white"], null)], null),"Expand all"], null);
});
datafrisk.core.CollapseAllButton = (function datafrisk$core$CollapseAllButton(emit_fn,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return emit_fn.call(null,new cljs.core.Keyword(null,"collapse-all","collapse-all",957676825));
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"borderBottomRightRadius","borderBottomRightRadius",1814053058),new cljs.core.Keyword(null,"borderTop","borderTop",2080227753),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"borderBottom","borderBottom",1676563277),new cljs.core.Keyword(null,"borderTopRightRadius","borderTopRightRadius",1530376433),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRight","borderRight",-873333451),new cljs.core.Keyword(null,"borderLeft","borderLeft",-1938358443),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)],["2px","1px solid darkgray","pointer","1px solid darkgray","2px","3px","1px solid darkgray","0","white"])], null),"Collapse all"], null);
});
datafrisk.core.NilText = (function datafrisk$core$NilText(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"nil","nil",99600501).cljs$core$IFn$_invoke$arity$1(datafrisk.core.styles)], null),cljs.core.pr_str.call(null,null)], null);
});
datafrisk.core.StringText = (function datafrisk$core$StringText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"strings","strings",-2055406807).cljs$core$IFn$_invoke$arity$1(datafrisk.core.styles)], null),cljs.core.pr_str.call(null,data)], null);
});
datafrisk.core.KeywordText = (function datafrisk$core$KeywordText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keywords","keywords",1526959054).cljs$core$IFn$_invoke$arity$1(datafrisk.core.styles)], null),[cljs.core.str(data)].join('')], null);
});
datafrisk.core.NumberText = (function datafrisk$core$NumberText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"numbers","numbers",1036309864).cljs$core$IFn$_invoke$arity$1(datafrisk.core.styles)], null),data], null);
});
datafrisk.core.Node = (function datafrisk$core$Node(p__52861){
var map__52864 = p__52861;
var map__52864__$1 = ((((!((map__52864 == null)))?((((map__52864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52864):map__52864);
var data = cljs.core.get.call(null,map__52864__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path = cljs.core.get.call(null,map__52864__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var emit_fn = cljs.core.get.call(null,map__52864__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var swappable = cljs.core.get.call(null,map__52864__$1,new cljs.core.Keyword(null,"swappable","swappable",-2024641906));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(((data == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.NilText], null):((typeof data === 'string')?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"default-value","default-value",232220170),[cljs.core.str(data)].join(''),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__52864,map__52864__$1,data,path,emit_fn,swappable){
return (function datafrisk$core$Node_$_string_changed(e){
return emit_fn.call(null,new cljs.core.Keyword(null,"changed","changed",570724917),path,e.target.value);
});})(map__52864,map__52864__$1,data,path,emit_fn,swappable))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.StringText,data], null)):(((data instanceof cljs.core.Keyword))?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.name.call(null,data),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__52864,map__52864__$1,data,path,emit_fn,swappable){
return (function datafrisk$core$Node_$_keyword_changed(e){
return emit_fn.call(null,new cljs.core.Keyword(null,"changed","changed",570724917),path,cljs.core.keyword.call(null,e.target.value));
});})(map__52864,map__52864__$1,data,path,emit_fn,swappable))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.KeywordText,data], null)):((cljs.core.object_QMARK_.call(null,data))?[cljs.core.str(data),cljs.core.str(" "),cljs.core.str(JSON.stringify(data))].join(''):((typeof data === 'number')?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"default-value","default-value",232220170),data,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__52864,map__52864__$1,data,path,emit_fn,swappable){
return (function datafrisk$core$Node_$_number_changed(e){
return emit_fn.call(null,new cljs.core.Keyword(null,"changed","changed",570724917),path,Number(e.target.value));
});})(map__52864,map__52864__$1,data,path,emit_fn,swappable))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.NumberText,data], null)):[cljs.core.str(data)].join('')
)))))], null);
});
datafrisk.core.KeyValNode = (function datafrisk$core$KeyValNode(p__52866){
var map__52872 = p__52866;
var map__52872__$1 = ((((!((map__52872 == null)))?((((map__52872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52872):map__52872);
var vec__52873 = cljs.core.get.call(null,map__52872__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var k = cljs.core.nth.call(null,vec__52873,(0),null);
var v = cljs.core.nth.call(null,vec__52873,(1),null);
var path = cljs.core.get.call(null,map__52872__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expanded_paths = cljs.core.get.call(null,map__52872__$1,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540));
var emit_fn = cljs.core.get.call(null,map__52872__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var swappable = cljs.core.get.call(null,map__52872__$1,new cljs.core.Keyword(null,"swappable","swappable",-2024641906));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.Node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),k], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.DataFrisk,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),v,new cljs.core.Keyword(null,"swappable","swappable",-2024641906),swappable,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.call(null,path,k),new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540),expanded_paths,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null)], null)], null);
});
datafrisk.core.ListVecNode = (function datafrisk$core$ListVecNode(p__52877){
var map__52880 = p__52877;
var map__52880__$1 = ((((!((map__52880 == null)))?((((map__52880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52880):map__52880);
var data = cljs.core.get.call(null,map__52880__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path = cljs.core.get.call(null,map__52880__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expanded_paths = cljs.core.get.call(null,map__52880__$1,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540));
var emit_fn = cljs.core.get.call(null,map__52880__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var swappable = cljs.core.get.call(null,map__52880__$1,new cljs.core.Keyword(null,"swappable","swappable",-2024641906));
var expanded_QMARK_ = cljs.core.get.call(null,expanded_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),((cljs.core.empty_QMARK_.call(null,data))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((cljs.core.vector_QMARK_.call(null,data))?"[":"(")], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.call(null,((function (expanded_QMARK_,map__52880,map__52880__$1,data,path,expanded_paths,emit_fn,swappable){
return (function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.DataFrisk,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),x,new cljs.core.Keyword(null,"swappable","swappable",-2024641906),swappable,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.call(null,path,i),new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540),expanded_paths,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
});})(expanded_QMARK_,map__52880,map__52880__$1,data,path,expanded_paths,emit_fn,swappable))
,data):[cljs.core.str(cljs.core.count.call(null,data)),cljs.core.str(" items")].join('')),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((cljs.core.vector_QMARK_.call(null,data))?"]":")")], null)], null)], null);
});
datafrisk.core.SetNode = (function datafrisk$core$SetNode(p__52882){
var map__52885 = p__52882;
var map__52885__$1 = ((((!((map__52885 == null)))?((((map__52885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52885):map__52885);
var data = cljs.core.get.call(null,map__52885__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path = cljs.core.get.call(null,map__52885__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expanded_paths = cljs.core.get.call(null,map__52885__$1,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540));
var emit_fn = cljs.core.get.call(null,map__52885__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var swappable = cljs.core.get.call(null,map__52885__$1,new cljs.core.Keyword(null,"swappable","swappable",-2024641906));
var expanded_QMARK_ = cljs.core.get.call(null,expanded_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),((cljs.core.empty_QMARK_.call(null,data))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"#{"], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.call(null,((function (expanded_QMARK_,map__52885,map__52885__$1,data,path,expanded_paths,emit_fn,swappable){
return (function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.DataFrisk,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),x,new cljs.core.Keyword(null,"swappable","swappable",-2024641906),swappable,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.call(null,path,x),new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540),expanded_paths,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
});})(expanded_QMARK_,map__52885,map__52885__$1,data,path,expanded_paths,emit_fn,swappable))
,data):[cljs.core.str(cljs.core.count.call(null,data)),cljs.core.str(" items")].join('')),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"}"], null)], null)], null);
});
datafrisk.core.KeySet = (function datafrisk$core$KeySet(keyset){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.interpose.call(null," ",cljs.core.map_indexed.call(null,(function (i,data){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(((data == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.NilText], null):((typeof data === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.StringText,data], null):(((data instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.KeywordText,data], null):((typeof data === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.NumberText,data], null):[cljs.core.str(data)].join('')
))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),keyset))], null);
});
datafrisk.core.MapNode = (function datafrisk$core$MapNode(p__52887){
var map__52890 = p__52887;
var map__52890__$1 = ((((!((map__52890 == null)))?((((map__52890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52890):map__52890);
var all = map__52890__$1;
var data = cljs.core.get.call(null,map__52890__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path = cljs.core.get.call(null,map__52890__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expanded_paths = cljs.core.get.call(null,map__52890__$1,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540));
var emit_fn = cljs.core.get.call(null,map__52890__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var expanded_QMARK_ = cljs.core.get.call(null,expanded_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"{"], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.call(null,((function (expanded_QMARK_,map__52890,map__52890__$1,all,data,path,expanded_paths,emit_fn){
return (function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.KeyValNode,cljs.core.assoc.call(null,all,new cljs.core.Keyword(null,"data","data",-232669377),x)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
});})(expanded_QMARK_,map__52890,map__52890__$1,all,data,path,expanded_paths,emit_fn))
,data):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.KeySet,cljs.core.keys.call(null,data)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"}"], null)], null)], null);
});
datafrisk.core.DataFrisk = (function datafrisk$core$DataFrisk(p__52892){
var map__52896 = p__52892;
var map__52896__$1 = ((((!((map__52896 == null)))?((((map__52896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52896):map__52896);
var all = map__52896__$1;
var data = cljs.core.get.call(null,map__52896__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.map_QMARK_.call(null,data)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.MapNode,all], null);
} else {
if(cljs.core.set_QMARK_.call(null,data)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.SetNode,all], null);
} else {
if((cljs.core.seq_QMARK_.call(null,data)) || (cljs.core.vector_QMARK_.call(null,data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.ListVecNode,all], null);
} else {
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition0$ & (32768))) || (data.cljs$core$IDeref$))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk$core$DataFrisk,cljs.core.assoc.call(null,all,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref.call(null,data))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.Node,all], null);

}
}
}
}
});
datafrisk.core.conj_to_set = (function datafrisk$core$conj_to_set(coll,x){
return cljs.core.conj.call(null,(function (){var or__25046__auto__ = coll;
if(cljs.core.truth_(or__25046__auto__)){
return or__25046__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),x);
});
datafrisk.core.expand_all_paths = (function datafrisk$core$expand_all_paths(root_value){
var remaining = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"node","node",581201198),root_value], null)], null);
var expanded_paths = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,remaining)){
var vec__52907 = remaining;
var seq__52908 = cljs.core.seq.call(null,vec__52907);
var first__52909 = cljs.core.first.call(null,seq__52908);
var seq__52908__$1 = cljs.core.next.call(null,seq__52908);
var current = first__52909;
var rest = seq__52908__$1;
var current_node = (((function (){var G__52910 = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(current);
if(!((G__52910 == null))){
if(((G__52910.cljs$lang$protocol_mask$partition0$ & (32768))) || (G__52910.cljs$core$IDeref$)){
return true;
} else {
if((!G__52910.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__52910);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__52910);
}
})())?cljs.core.deref.call(null,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(current)):new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(current));
if(cljs.core.map_QMARK_.call(null,current_node)){
var G__52915 = cljs.core.concat.call(null,rest,cljs.core.map.call(null,((function (remaining,expanded_paths,vec__52907,seq__52908,first__52909,seq__52908__$1,current,rest,current_node){
return (function (p__52911){
var vec__52912 = p__52911;
var k = cljs.core.nth.call(null,vec__52912,(0),null);
var v = cljs.core.nth.call(null,vec__52912,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current),k),new cljs.core.Keyword(null,"node","node",581201198),v], null);
});})(remaining,expanded_paths,vec__52907,seq__52908,first__52909,seq__52908__$1,current,rest,current_node))
,current_node));
var G__52916 = cljs.core.conj.call(null,expanded_paths,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current));
remaining = G__52915;
expanded_paths = G__52916;
continue;
} else {
if((cljs.core.seq_QMARK_.call(null,current_node)) || (cljs.core.vector_QMARK_.call(null,current_node))){
var G__52917 = cljs.core.concat.call(null,rest,cljs.core.map_indexed.call(null,((function (remaining,expanded_paths,vec__52907,seq__52908,first__52909,seq__52908__$1,current,rest,current_node){
return (function (i,node){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current),i),new cljs.core.Keyword(null,"node","node",581201198),node], null);
});})(remaining,expanded_paths,vec__52907,seq__52908,first__52909,seq__52908__$1,current,rest,current_node))
,current_node));
var G__52918 = cljs.core.conj.call(null,expanded_paths,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current));
remaining = G__52917;
expanded_paths = G__52918;
continue;
} else {
var G__52919 = rest;
var G__52920 = ((cljs.core.coll_QMARK_.call(null,current_node))?cljs.core.conj.call(null,expanded_paths,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current)):expanded_paths);
remaining = G__52919;
expanded_paths = G__52920;
continue;

}
}
} else {
return expanded_paths;
}
break;
}
});
datafrisk.core.emit_fn_factory = (function datafrisk$core$emit_fn_factory(state_atom,id,swappable){
return (function() { 
var G__52929__delegate = function (event,args){
var G__52925 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__52925) {
case "expand":
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),datafrisk.core.conj_to_set,cljs.core.first.call(null,args));

break;
case "expand-all":
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),datafrisk.core.expand_all_paths.call(null,cljs.core.first.call(null,args)));

break;
case "contract":
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),cljs.core.disj,cljs.core.first.call(null,args));

break;
case "collapse-all":
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),cljs.core.PersistentHashSet.EMPTY);

break;
case "changed":
var vec__52926 = args;
var path = cljs.core.nth.call(null,vec__52926,(0),null);
var value = cljs.core.nth.call(null,vec__52926,(1),null);
if(cljs.core.seq.call(null,path)){
return cljs.core.swap_BANG_.call(null,swappable,cljs.core.assoc_in,path,value);
} else {
return cljs.core.reset_BANG_.call(null,swappable,value);
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(event)].join('')));

}
};
var G__52929 = function (event,var_args){
var args = null;
if (arguments.length > 1) {
var G__52931__i = 0, G__52931__a = new Array(arguments.length -  1);
while (G__52931__i < G__52931__a.length) {G__52931__a[G__52931__i] = arguments[G__52931__i + 1]; ++G__52931__i;}
  args = new cljs.core.IndexedSeq(G__52931__a,0);
} 
return G__52929__delegate.call(this,event,args);};
G__52929.cljs$lang$maxFixedArity = 1;
G__52929.cljs$lang$applyTo = (function (arglist__52932){
var event = cljs.core.first(arglist__52932);
var args = cljs.core.rest(arglist__52932);
return G__52929__delegate(event,args);
});
G__52929.cljs$core$IFn$_invoke$arity$variadic = G__52929__delegate;
return G__52929;
})()
;
});
datafrisk.core.Root = (function datafrisk$core$Root(data,id,state_atom){
var data_frisk = new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom));
var swappable = ((((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data)))?data:null);
var emit_fn = datafrisk.core.emit_fn_factory.call(null,state_atom,id,swappable);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 2px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.ExpandAllButton,emit_fn,data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.CollapseAllButton,emit_fn], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.DataFrisk,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"swappable","swappable",-2024641906),swappable,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540),cljs.core.get_in.call(null,data_frisk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null)),new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null)], null);
});
datafrisk.core.DataFriskShellVisibleButton = (function datafrisk$core$DataFriskShellVisibleButton(visible_QMARK_,toggle_visible_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),toggle_visible_fn,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"border","border",1444987323),(0),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font","font",-1506159249),"inherit",new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"width","width",-384071477),"80px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null),new cljs.core.Keyword(null,"shell-visible-button","shell-visible-button",-1362287320).cljs$core$IFn$_invoke$arity$1(datafrisk.core.styles),(cljs.core.truth_(visible_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)))], null),(cljs.core.truth_(visible_QMARK_)?"Hide":"Data frisk")], null);
});
datafrisk.core.DataFriskShell = (function datafrisk$core$DataFriskShell(var_args){
var args__26128__auto__ = [];
var len__26121__auto___52938 = arguments.length;
var i__26122__auto___52939 = (0);
while(true){
if((i__26122__auto___52939 < len__26121__auto___52938)){
args__26128__auto__.push((arguments[i__26122__auto___52939]));

var G__52940 = (i__26122__auto___52939 + (1));
i__26122__auto___52939 = G__52940;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return datafrisk.core.DataFriskShell.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

datafrisk.core.DataFriskShell.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var expand_by_default = cljs.core.reduce.call(null,(function (p1__52935_SHARP_,p2__52936_SHARP_){
return cljs.core.assoc_in.call(null,p1__52935_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),p2__52936_SHARP_,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.EMPTY], true));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,cljs.core.count.call(null,data)));
var state_atom = reagent.core.atom.call(null,expand_by_default);
return ((function (expand_by_default,state_atom){
return (function() { 
var G__52941__delegate = function (data__$1){
var data_frisk = new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom));
var visible_QMARK_ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(data_frisk);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"50%",new cljs.core.Keyword(null,"max-height","max-height",-612563804),(cljs.core.truth_(visible_QMARK_)?"50%":(0)),new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.3s ease-out",new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null),new cljs.core.Keyword(null,"shell","shell",1402941019).cljs$core$IFn$_invoke$arity$1(datafrisk.core.styles))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.DataFriskShellVisibleButton,visible_QMARK_,((function (data_frisk,visible_QMARK_,expand_by_default,state_atom){
return (function (_){
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),cljs.core.not.call(null,visible_QMARK_));
});})(data_frisk,visible_QMARK_,expand_by_default,state_atom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll"], null)], null),cljs.core.map_indexed.call(null,((function (data_frisk,visible_QMARK_,expand_by_default,state_atom){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
});})(data_frisk,visible_QMARK_,expand_by_default,state_atom))
,data__$1)], null)], null);
};
var G__52941 = function (var_args){
var data__$1 = null;
if (arguments.length > 0) {
var G__52942__i = 0, G__52942__a = new Array(arguments.length -  0);
while (G__52942__i < G__52942__a.length) {G__52942__a[G__52942__i] = arguments[G__52942__i + 0]; ++G__52942__i;}
  data__$1 = new cljs.core.IndexedSeq(G__52942__a,0);
} 
return G__52941__delegate.call(this,data__$1);};
G__52941.cljs$lang$maxFixedArity = 0;
G__52941.cljs$lang$applyTo = (function (arglist__52943){
var data__$1 = cljs.core.seq(arglist__52943);
return G__52941__delegate(data__$1);
});
G__52941.cljs$core$IFn$_invoke$arity$variadic = G__52941__delegate;
return G__52941;
})()
;
;})(expand_by_default,state_atom))
});

datafrisk.core.DataFriskShell.cljs$lang$maxFixedArity = (0);

datafrisk.core.DataFriskShell.cljs$lang$applyTo = (function (seq52937){
return datafrisk.core.DataFriskShell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52937));
});

datafrisk.core.FriskInlineVisibilityButton = (function datafrisk$core$FriskInlineVisibilityButton(visible_QMARK_,update_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),(0),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"transparent",new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"height","height",1025178622),"20px"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),update_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 100 100",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.2s ease",new cljs.core.Keyword(null,"transform","transform",1381301764),(cljs.core.truth_(visible_QMARK_)?"rotate(90deg)":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"0,0 0,100 100,50",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null)], null)], null);
});
datafrisk.core.FriskInline = (function datafrisk$core$FriskInline(var_args){
var args__26128__auto__ = [];
var len__26121__auto___52947 = arguments.length;
var i__26122__auto___52948 = (0);
while(true){
if((i__26122__auto___52948 < len__26121__auto___52947)){
args__26128__auto__.push((arguments[i__26122__auto___52948]));

var G__52949 = (i__26122__auto___52948 + (1));
i__26122__auto___52948 = G__52949;
continue;
} else {
}
break;
}

var argseq__26129__auto__ = ((((0) < args__26128__auto__.length))?(new cljs.core.IndexedSeq(args__26128__auto__.slice((0)),(0),null)):null);
return datafrisk.core.FriskInline.cljs$core$IFn$_invoke$arity$variadic(argseq__26129__auto__);
});

datafrisk.core.FriskInline.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var expand_by_default = cljs.core.reduce.call(null,(function (p1__52944_SHARP_,p2__52945_SHARP_){
return cljs.core.assoc_in.call(null,p1__52944_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),p2__52945_SHARP_,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.EMPTY], true));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,cljs.core.count.call(null,data)));
var state_atom = reagent.core.atom.call(null,expand_by_default);
return ((function (expand_by_default,state_atom){
return (function() { 
var G__52950__delegate = function (data__$1){
var data_frisk = new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom));
var visible_QMARK_ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(data_frisk);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"row nowrap",new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.3s ease-out",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"5"], null),(cljs.core.truth_(visible_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"hide",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"hide",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"30px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100px"], null)),new cljs.core.Keyword(null,"shell","shell",1402941019).cljs$core$IFn$_invoke$arity$1(datafrisk.core.styles))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.FriskInlineVisibilityButton,visible_QMARK_,((function (data_frisk,visible_QMARK_,expand_by_default,state_atom){
return (function (_){
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),cljs.core.not.call(null,visible_QMARK_));
});})(data_frisk,visible_QMARK_,expand_by_default,state_atom))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Data frisk"], null),(cljs.core.truth_(visible_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"resize","resize",297367086),"both",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null)], null),cljs.core.map_indexed.call(null,((function (data_frisk,visible_QMARK_,expand_by_default,state_atom){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
});})(data_frisk,visible_QMARK_,expand_by_default,state_atom))
,data__$1)], null):null)], null);
};
var G__52950 = function (var_args){
var data__$1 = null;
if (arguments.length > 0) {
var G__52951__i = 0, G__52951__a = new Array(arguments.length -  0);
while (G__52951__i < G__52951__a.length) {G__52951__a[G__52951__i] = arguments[G__52951__i + 0]; ++G__52951__i;}
  data__$1 = new cljs.core.IndexedSeq(G__52951__a,0);
} 
return G__52950__delegate.call(this,data__$1);};
G__52950.cljs$lang$maxFixedArity = 0;
G__52950.cljs$lang$applyTo = (function (arglist__52952){
var data__$1 = cljs.core.seq(arglist__52952);
return G__52950__delegate(data__$1);
});
G__52950.cljs$core$IFn$_invoke$arity$variadic = G__52950__delegate;
return G__52950;
})()
;
;})(expand_by_default,state_atom))
});

datafrisk.core.FriskInline.cljs$lang$maxFixedArity = (0);

datafrisk.core.FriskInline.cljs$lang$applyTo = (function (seq52946){
return datafrisk.core.FriskInline.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52946));
});


//# sourceMappingURL=core.js.map?rel=1484333383762
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2a0f"],{"2m8j":function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return o});var i=a("je13"),n=a.n(i),s=function(t){return n.a.get(""+t)},o=function(t,e){n.a.set(""+t,e)}},Bpof:function(t,e,a){"use strict";var i=a("nIhZ");a.n(i).a},BznZ:function(t,e,a){"use strict";a.d(e,"d",function(){return n}),a.d(e,"c",function(){return s}),a.d(e,"e",function(){return o}),a.d(e,"f",function(){return r}),a.d(e,"a",function(){return l}),a.d(e,"b",function(){return c});var i=a("t3Un");function n(t){return Object(i.a)({url:"/app/analysis-data/enterType",method:"post",data:t})}function s(t){return Object(i.a)({url:"/app/analysis-data/enterfield",method:"post",data:t})}function o(t){return Object(i.a)({url:"/app/analysis-data/enter",method:"post",params:t})}function r(t){return Object(i.a)({url:"/app/analysis-data/enter-create",method:"post",params:t})}function l(t){return Object(i.a)({url:"/app/analysis-data/enterdel",method:"post",params:t})}function c(t){return Object(i.a)({url:"/app/analysis-data/enterinfo",method:"post",params:t})}},CHEL:function(t,e,a){"use strict";var i=a("k5sZ");a.n(i).a},D4Ym:function(t,e,a){},EZg4:function(t,e,a){"use strict";var i=a("V5s6");a.n(i).a},V5s6:function(t,e,a){},W2Fo:function(t,e,a){!function(t){"use strict";!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),a=" .timeline { padding: 0; position: relative; list-style: none; font-family: PingFangSC-light, Avenir, Helvetica, Arial, Hiragino Sans GB, Microsoft YaHei, sans-serif; -webkit-font-smoothing: antialiased; margin: 10px 20px; } .timeline:after { position: absolute; content: ''; left: 0; top: 0; width: 1px; height: 100%; background-color: var(--timelineTheme); } .timeline-item { position: relative; margin: 1.5em 0 0 28px; padding-bottom: 1.5em; border-bottom: 1px dotted var(--timelineTheme); } .timeline-item:last-child { border-bottom: none; } .timeline-circle { position: absolute; top: .28em; left: -34px; width: 10px; height: 10px; border-radius: 50%; border: 1px solid var(--timelineTheme); background-color: var(--timelineTheme); z-index: 1; box-sizing: content-box; } .timeline-circle.hollow { background-color: var(--timelineBg); } .timeline-title { position: relative; display: inline-block; /** * BFC inline-block 元素与其兄弟元素、子元素和父元素的外边距都不会折叠（包括其父元素和子元素） */ cursor: crosshair; margin: -.15em 0 15px 28px } .timeline-title:not(:first-child) { margin-top: 28px; } .timeline-title-circle { left: -36px; top: .15em; width: 16px; height: 16px; } .timeline-others { width: 40px; height: auto; top: .2em; left: -48px; line-height: 1; padding: 2px 0; text-align: center; border: none; background-color: var(--timelineBg); } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a)),t.appendChild(e)}}();var e={render:function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{ref:"timeline",staticClass:"timeline"},[this._t("default")],2)},staticRenderFns:[],name:"Timeline",props:{timelineTheme:{type:String,default:"#dbdde0"},timelineBg:{type:String,default:"#fff"}},mounted:function(){var t=this.$refs.timeline;t.style.setProperty("--timelineTheme",this.timelineTheme),t.style.setProperty("--timelineBg",this.timelineBg)}};!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",e.styleSheet?e.styleSheet.cssText="":e.appendChild(document.createTextNode("")),t.appendChild(e)}}();var a={name:"TimelineItemBase",props:{bgColor:{type:String,default:""},lineColor:{type:String,default:""},hollow:{type:Boolean,default:!1},fontColor:{type:String,default:"#37414a"}},data:function(){return{slotOthers:!1}},computed:{circleStyle:function(){if(this.bgColor||this.lineColor||this.hollow){var t={};return this.bgColor&&(t={"border-color":this.bgColor,"background-color":this.bgColor}),this.lineColor&&(t=Object.assign({},t,{"border-color":this.lineColor})),t}},itemStyle:function(){return{color:this.fontColor}},slotClass:function(){var t="";return this.slotOthers?t="timeline-others":this.hollow&&(t="hollow"),t}},mounted:function(){this.slotOthers=!!this.$refs.others.innerHTML}};!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",e.styleSheet?e.styleSheet.cssText="":e.appendChild(document.createTextNode("")),t.appendChild(e)}}();var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"timeline-item",style:this.itemStyle},[e("div",{ref:"others",staticClass:"timeline-circle",class:this.slotClass,style:this.circleStyle},[this._t("others")],2),this._v(" "),this._t("default")],2)},staticRenderFns:[],extends:a};!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",e.styleSheet?e.styleSheet.cssText="":e.appendChild(document.createTextNode("")),t.appendChild(e)}}();var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"timeline-title",style:this.itemStyle},[e("div",{ref:"others",staticClass:"timeline-circle timeline-title-circle",class:this.slotClass,style:this.circleStyle},[this._t("others")],2),this._v(" "),this._t("default")],2)},staticRenderFns:[],extends:a};"undefined"!=typeof window&&window.Vue&&(window.Vue.component(e.name,e),window.Vue.component(i.name,i),window.Vue.component(n.name,n)),t.Timeline=e,t.TimelineItem=i,t.TimelineTitle=n,Object.defineProperty(t,"__esModule",{value:!0})}(e)},X9Rj:function(t,e,a){"use strict";a.d(e,"b",function(){return n}),a.d(e,"a",function(){return s});var i=a("t3Un");function n(t){return Object(i.a)({url:"/app/analysis-data/dashboard",method:"post",params:t})}function s(t){return Object(i.a)({url:"/app/analysis-data/sellocal",method:"post",params:t})}},ehf2:function(t,e,a){"use strict";a.r(e);var i=a("k7+O"),n=a.n(i),s=a("s6Sh"),o=a("MT78"),r=a.n(o),l=a("7Qib");a("gX0l");var c={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},chartData:{type:Array,required:!0}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(t){this.initChart(t)}}},mounted:function(){var t=this;this.initChart(this.chartData),this.__resizeHanlder=Object(l.a)(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHanlder)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHanlder),this.chart.dispose(),this.chart=null)},methods:{initChart:function(t){var e=this;console.log(t,"=============================222222222222222");var a=[];e.chartData.forEach(function(t){a.push(t[0])}),console.log(a,"]]]]]]]]]]]"),this.chart=r.a.init(this.$el),this.chart.on("click",function(t){e.$emit("scatterDetail"),console.log(t.name)}),this.chart.setOption({color:["#efb365","#EB8705","#d48265","#91c7ae"],title:{text:"活动分析统计",textStyle:{fontSize:16,color:"#404040",lineHeight:50,fontWeight:400},left:"left",top:"1%"},xAxis:{data:a,splitLine:{lineStyle:{type:"dashed"}}},yAxis:{axisTick:{show:!1},axisLine:{show:!1}},grid:{left:10,right:10,bottom:20,top:60,containLabel:!0},series:[{type:"scatter",name:"1990",symbol:"circle",symbolSize:function(t){return 2*Math.sqrt(t[1])},label:{emphasis:{show:!0,formatter:function(t){return t.data[2]},position:"top"}},data:t}]})}}},h=a("KHd+"),d=Object(h.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width}})},[],!1,null,null,null);d.options.__file="scatter.vue";var u=d.exports,m={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(t){this.initChart(t)}}},mounted:function(){var t=this;this.initChart(),this.autoResize&&(this.__resizeHanlder=Object(l.a)(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHanlder)),document.getElementsByClassName("sidebar-container")[0].addEventListener("transitionend",this.__resizeHanlder)},beforeDestroy:function(){this.chart&&(this.autoResize&&window.removeEventListener("resize",this.__resizeHanlder),document.getElementsByClassName("sidebar-container")[0].removeEventListener("transitionend",this.__resizeHanlder),this.chart.dispose(),this.chart=null)},methods:{setOptions:function(t){this.chart.setOption({color:["#efb365","#EB8705","#d48265","#91c7ae"],title:{text:"各入口活跃明细",textStyle:{fontSize:16,color:"#404040",lineHeight:50,fontWeight:400}},xAxis:{data:this.chartData.date,boundaryGap:!1,axisTick:{show:!1}},grid:{left:25,right:25,bottom:20,top:60,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1},axisLine:{show:!1}},legend:{},series:t})},initChart:function(){var t=[],e={name:this.chartData.name,itemStyle:{normal:{lineStyle:{width:2}}},smooth:!1,type:"line",data:this.chartData.value,animationDuration:2800,animationEasing:"cubicInOut"};t.push(e),this.chart=this.$echarts.init(this.$el),this.setOptions(t)}}},f=Object(h.a)(m,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width}})},[],!1,null,null,null);f.options.__file="LineChart.vue";var p=f.exports;a("gX0l");var v={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},chartData:{type:Array,required:!0}},data:function(){return{chart:null}},mounted:function(){var t=this;this.initChart(this.chartData),this.__resizeHanlder=Object(l.a)(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHanlder)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHanlder),this.chart.dispose(),this.chart=null)},methods:{initChart:function(t){var e=[],a=[];t.forEach(function(t){e.push(t.value),a.push(t.name)}),this.chart=r.a.init(this.$el),this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},title:{text:"各门店活跃明细",textStyle:{fontSize:16,color:"#404040",lineHeight:50,fontWeight:400}},grid:{top:60,left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:a,axisTick:{alignWithLabel:!0}}],yAxis:{type:"value",axisTick:{show:!1},axisLine:{show:!1}},series:{name:"访问量",type:"bar",stack:"vistors",barWidth:"20%",data:e,itemStyle:{color:"#eb8705"},animationDuration:6e3}})}}},g=Object(h.a)(v,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width}})},[],!1,null,null,null);g.options.__file="BarChart.vue";var y=g.exports,b=a("2m8j"),_=a("eE85"),w=a.n(_),C=a("BznZ"),x=a("X9Rj"),S=a("t3Un");function D(t){return Object(S.a)({url:"/app/analysis-data/selact",method:"post",params:t})}function L(t){return Object(S.a)({url:"/app/analysis-data/activefield",method:"post",params:t})}var k={VDistpicker:w.a,components:{},props:{dialogFormVisible:{type:Boolean,required:!0,default:!0}},data:function(){return{props:{value:"value",label:"label"},props2:{value:"value",label:"name"},props3:{value:"value",label:"name"},formLabelWidth:"120px",activityList:[],storeList:[],value5:"",pickerOptions2:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},local:[],form:{active:"",dateRange:[],enter:{class_1:"",comm:""},name:"",lat:"",local:this.newLocal}}},computed:{newLocal:function(){var t=[{province:"",city:"",storeId:""}];return t[0].province=this.local[0],t[0].city=this.local[1],t[0].storeId=3===this.local.length?this.local[2]:"",t}},created:function(){this.getEnterType(),this.getActivityList(),this.getActivityDemons(),this.getEventList(),b.a("storeList")?this.storeList=b.a("storeList"):this.getStoreList()},methods:{enterChange:function(t){console.log(t,"--------------"),t.length>0&&(this.form.enter.class_1=t[0]),t.length>1&&(this.form.enter.comm=t[1])},activeChange:function(t){console.log(t,"--------------");var e={class_1:"",comm:""};t.length>0&&(e.class_1=t[0]),t.length>1&&(e.comm=t[1]),this.form.active=e},getStoreList:function(t){var e=this;Object(x.a)(t).then(function(t){console.log(t.data.data,"========================="),e.storeList=t.data.data})},getEnterType:function(){var t=this;Object(C.d)().then(function(e){console.log(e.data.data),t.options2=e.data.data})},getActivityList:function(){var t=this;D().then(function(e){console.log(e.data.data,"--------------"),t.activityList=e.data.data})},getActivityDemons:function(){var t=this;L().then(function(e){console.log(e.data,"---------------------"),t.activityDemons=e.data})},createActivity:function(){var t=this;this.form.local=this.newLocal,console.log(this.form),function(t){return Object(S.a)({url:"/app/analysis-data/active-create",method:"post",params:t})}(this.form).then(function(e){200===e.status&&t.$emit("addSuccess")})},getEventList:function(){Object(S.a)({url:"/app/analysis-data/selevent",method:"post",params:{}}).then(function(t){})},getGoodsList:function(){(function(t){return Object(S.a)({url:"/app/analysis-data/goods",method:"post",data:t})})().then(function(t){})},cancelNew:function(){this.$emit("cancel")}}},T=(a("EZg4"),Object(h.a)(k,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{visible:t.dialogFormVisible,"before-close":t.cancelNew,width:"60%",title:"新建活动分析"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{"label-width":t.formLabelWidth,rules:{required:!0,message:"名称不能为空",trigger:"blur"},label:"活动分析名称"}},[a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"活动选择"}},[a("el-cascader",{attrs:{options:t.activityList,props:t.props3,placeholder:"试试搜索：指南","change-on-select":""},on:{change:t.activeChange}})],1),t._v(" "),a("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"分析维度选择"}},[a("el-select",{attrs:{placeholder:"PV"},model:{value:t.form.lat,callback:function(e){t.$set(t.form,"lat",e)},expression:"form.lat"}},t._l(t.activityDemons,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"用户入口选择"}},[a("el-cascader",{attrs:{options:t.options2,props:t.props,placeholder:"试试搜索：指南","change-on-select":""},on:{change:t.enterChange}})],1),t._v(" "),a("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"上/下线时间选择"}},[a("el-date-picker",{attrs:{"picker-options":t.pickerOptions2,"value-format":"yyyyMMdd",type:"daterange","range-separator":"至","start-placeholder":"上线日期","end-placeholder":"下线日期",align:"right"},model:{value:t.form.dateRange,callback:function(e){t.$set(t.form,"dateRange",e)},expression:"form.dateRange"}})],1),t._v(" "),a("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"地区"}},[a("el-cascader",{attrs:{options:t.storeList,props:t.props2,filterable:"",placeholder:"试试搜索：上海","change-on-select":""},model:{value:t.local,callback:function(e){t.local=e},expression:"local"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.cancelNew}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"warning"},on:{click:t.createActivity}},[t._v("保存至分析")])],1)],1)],1)},[],!1,null,"4afca542",null));T.options.__file="newActivity.vue";var z=T.exports,E=a("W2Fo");a("gX0l");var O=["6933万公顷"],A={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"25px"},chartData:{type:Array,required:!0},barColor:{type:String,required:!0}},data:function(){return{chart:null}},mounted:function(){var t=this;this.initChart(this.chartData,this.barColor),this.__resizeHanlder=Object(l.a)(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHanlder)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHanlder),this.chart.dispose(),this.chart=null)},methods:{initChart:function(t,e){this.chart=r.a.init(this.$el),this.chart.setOption({tooltip:{show:!0,formatter:"{b} :{c}%"},grid:{left:"0",top:"0",bottom:"0",right:"0"},xAxis:[{max:100,type:"value",axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}}],yAxis:[{type:"category",axisTick:{show:!1},axisLine:{show:!1}}],series:[{name:" ",type:"bar",barWidth:10,silent:!0,itemStyle:{normal:{color:"#f7f7f7"}},barGap:"-100%",barCategoryGap:"50%",data:O.map(function(t){return 100})},{name:" ",type:"bar",barWidth:12,itemStyle:{normal:{color:e}},label:{normal:{show:!1}},data:t}]})}}},j=Object(h.a)(A,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width}})},[],!1,null,null,null);j.options.__file="stepBar.vue";var B=j.exports,F={components:{Timeline:E.Timeline,TimelineItem:E.TimelineItem,TimelineTitle:E.TimelineTitle,stepBar:B},props:{scatterDetailShow:{type:Boolean,required:!0,default:!0}},data:function(){return{mainColor:"#eb8705",barWidth:"100%"}},methods:{cancel:function(){this.$emit("cancel")}}},I=(a("Bpof"),Object(h.a)(F,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{visible:t.scatterDetailShow,"before-close":t.cancel,width:"50%",title:"所有活动"},on:{"update:visible":function(e){t.scatterDetailShow=e}}},[a("div",{staticClass:"head"},[a("div",{staticClass:"title"},[t._v("总转换率")]),t._v(" "),a("div",{staticClass:"info"},[t._v("2.69%")])]),t._v(" "),a("div",{staticClass:"content111"},[a("timeline",[a("timeline-item",{attrs:{hollow:!0}},[a("div",{staticClass:"numItem"},[a("div",[a("div",{staticClass:"title"},[t._v("点击活动-爆款推荐")]),t._v(" "),a("div",{staticClass:"bottomInfo"},[a("div",{staticClass:"left"},[t._v("122人")]),t._v(" "),a("div",{staticClass:"right"},[t._v("3%")])])])])]),t._v(" "),a("timeline-item",{attrs:{hollow:!0}},[a("div",{staticClass:"numItem"},[a("div",[a("div",{staticClass:"title"},[t._v("进入详情页")]),t._v(" "),a("stepBar",{attrs:{"chart-data":[11],"bar-color":t.mainColor,width:t.barWidth}}),t._v(" "),a("div",{staticClass:"bottomInfo"},[a("div",{staticClass:"left"},[t._v("122人")]),t._v(" "),a("div",{staticClass:"right"},[t._v("3%")])])],1)])]),t._v(" "),a("timeline-item",{attrs:{hollow:!0}},[a("div",{staticClass:"numItem"},[a("div",[a("div",{staticClass:"title"},[t._v("加入购物车")]),t._v(" "),a("stepBar",{attrs:{"chart-data":[11],"bar-color":t.mainColor}}),t._v(" "),a("div",{staticClass:"bottomInfo"},[a("div",{staticClass:"left"},[t._v("122人")]),t._v(" "),a("div",{staticClass:"right"},[t._v("3%")])])],1)])]),t._v(" "),a("timeline-item",{attrs:{hollow:!0}},[a("div",{staticClass:"numItem"},[a("div",[a("div",{staticClass:"title"},[t._v("提交订单")]),t._v(" "),a("stepBar",{attrs:{"chart-data":[11],"bar-color":t.mainColor}}),t._v(" "),a("div",{staticClass:"bottomInfo"},[a("div",{staticClass:"left"},[t._v("122人")]),t._v(" "),a("div",{staticClass:"right"},[t._v("3%")])])],1)])]),t._v(" "),a("timeline-item",{attrs:{hollow:!0}},[a("div",{staticClass:"numItem"},[a("div",[a("div",{staticClass:"title"},[t._v("完成订单")]),t._v(" "),a("stepBar",{attrs:{"chart-data":[11],"bar-color":t.mainColor}}),t._v(" "),a("div",{staticClass:"bottomInfo"},[a("div",{staticClass:"left"},[t._v("122人")]),t._v(" "),a("div",{staticClass:"right"},[t._v("3%")])])],1)])])],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"warning"},on:{click:t.cancel}},[t._v("确定")])],1)])},[],!1,null,"7dee39b2",null));I.options.__file="scatterDetail.vue";var $=I.exports;a("gX0l");var H={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},chartData:{type:Array,required:!0}},data:function(){return{chart:null}},mounted:function(){var t=this,e=this.chartData;console.log(this.chartData,"test----------------"),this.initChart(e),this.__resizeHanlder=Object(l.a)(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHanlder)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHanlder),this.chart.dispose(),this.chart=null)},methods:{initChart:function(t){var e=this;this.chart=r.a.init(this.$el,"macarons");var a={},i=t;this.chart.showLoading();var n=r.a.getMap("china").geoJson.features;this.chart.hideLoading(),n.forEach(function(t){var e=t.properties.name;a[e]=t.properties.cp}),console.log("================data======================"),console.log(t),console.log(i);var s=function(t){for(var e=[],i=0;i<t.length;i++){var n=a[t[i].name];n&&e.push({name:t[i].name,value:n.concat(t[i].value)})}return console.log(e,"--------------------"),e};this.chart.setOption({title:{text:"入口来源分布",subtext:"",x:"left",textStyle:{color:" rgb(55, 75, 113)",fontFamily:"等线",fontSize:18},subtextStyle:{fontSize:15,fontFamily:"等线"}},toolbox:{feature:{myTool2:{show:!0,title:"全屏",icon:"path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891",onclick:function(){e.$emit("full")}}}},tooltip:{trigger:"item",formatter:function(t){if(void 0===t.value[2]){for(var e="",a=0;a<i.length;a++)t.name===i[a].name&&(e+=i[a].name+":<br>",e+="访问量：",e+=i[a].value);return console.log(e),e}e="";for(var n=0;n<i.length;n++)if(t.name===i[n].name){e+=i[a].name+":<br>";for(var s=0;s<i[n].value.length;s++)e+=i[n].value[s].name+":"+i[n].value[s].value+"<br>"}return console.log(e),e}},legend:{y:"bottom",x:"right",data:["credit_pm2.5"],textStyle:{color:"#fff"}},visualMap:{show:!0,min:0,max:25e3,left:"right",top:"bottom",text:["高","低"],calculable:!0,seriesIndex:[1],inRange:{color:["#fcecd5","#f7aa8f"]}},geo:{show:!0,map:"china",label:{normal:{show:!1},emphasis:{show:!1}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#2B91B7"}}},series:[{name:"散点",type:"scatter",coordinateSystem:"geo",data:s(t),symbolSize:function(t){return t[2]/1e4},label:{normal:{formatter:"{b}",position:"right",show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:"#05C3F9"}}},{type:"map",map:"china",geoIndex:0,aspectScale:.75,showLegendSymbol:!1,label:{normal:{show:!0},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#2B91B7"}},animation:!1,data:t},{name:"点",type:"scatter",coordinateSystem:"geo",symbol:"pin",symbolSize:function(t){var e,a=60/299e3;return e=80-3e5*a,a*t[2]+e},label:{normal:{show:!1,textStyle:{color:"#fff",fontSize:9}}},itemStyle:{normal:{color:"#F62157"}},zlevel:6,data:s(t)},{name:"Top 5",type:"effectScatter",coordinateSystem:"geo",data:s(t.sort(function(t,e){return e.value-t.value}).slice(0,5)),symbolSize:function(t){return t[2]/1e4},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:"yellow",shadowBlur:10,shadowColor:"yellow"}},zlevel:1}]})}}},M=Object(h.a)(H,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width}})},[],!1,null,null,null);M.options.__file="mapChart.vue";var N=M.exports,W={components:{DropdownMenu:s.a,scatter:u,LineChart:p,BarChart:y,mapChart:N,newActivity:z,scatterDetail:$},data:function(){return{activeInfoForm:{acid:"",fild:""},lat:"",chinaMapShow:!1,dialogFormVisible:!1,scatterDetailShow:!1,lineChartData:[],activityDemons:[],activityList:[],tags:[],chinaMapData:[],scatterData:[],mapShow:!1,isFullscreen:!1}},computed:{mapheight:function(){return this.isFullscreen?"100%":"300px"}},created:function(){this.getActivityList(),this.getActivityDemons(),this.initActivity()},methods:{addSuccess:function(){console.log("success----------------------"),this.dialogFormVisible=!1,this.initActivity()},deleteActivity:function(t){var e=this;(function(t){return Object(S.a)({url:"/app/analysis-data/activedel",method:"post",params:t})})({acid:t}).then(function(t){200===t.status&&e.initActivity()})},activityDetail:function(t){var e=this;this.activeInfoForm.acid&&this.activeInfoForm.fild&&(this.chinaMapShow=!1,function(t){return Object(S.a)({url:"/app/analysis-data/activeinfo",method:"post",params:t})}(this.activeInfoForm).then(function(t){e.chinaMapData=t.data.tutu,e.storeList=t.data.store,e.lineChartData=t.data.charts,e.chinaMapShow=!0}))},initActivity:function(){var t=this;(function(t){return Object(S.a)({url:"/app/analysis-data/active",method:"post",params:t})})({lat:this.lat}).then(function(e){t.mapShow=!1,t.tags=e.data.data.label,t.activeInfoForm.acid=e.data.data.label[0].value,t.scatterData=e.data.data.zt,t.mapShow=!0,t.activityDetail()})},getActivityDemons:function(){var t=this;L().then(function(e){t.activityDemons=e.data,t.activeInfoForm.fild=e.data[0].id,t.activityDetail()})},fullScreen:function(){var t=this;console.log(this.$refs.map),n.a.enabled&&(n.a.toggle(this.$refs.map),this.isFullscreen=!0,n.a.on("change",function(){n.a.isFullscreen?t.isFullscreen=!0:t.isFullscreen=!1}))},getActivityList:function(){var t=this;D().then(function(e){t.activityList=e.data.data})},handleClose:function(t){this.tags.splice(this.tags.indexOf(t),1)},newActivity:function(){this.dialogFormVisible=!0},cancelNew:function(){this.dialogFormVisible=!1},newBuild:function(){this.dialogFormVisible=!1},showScatterDetail:function(){this.scatterDetailShow=!0},cancelCatterDetail:function(){this.scatterDetailShow=!1}}},V=(a("vp0a"),Object(h.a)(W,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container documentation-container"},[a("el-form",{ref:"form",attrs:{inline:!0}},[a("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"分析维度选择"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.initActivity},model:{value:t.lat,callback:function(e){t.lat=e},expression:"lat"}},t._l(t.activityDemons,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{staticStyle:{float:"right"}},[a("el-button",{attrs:{type:"warning",icon:"el-icon-plus"},on:{click:t.newActivity}},[t._v("新建活动分析")])],1)],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"32px",background:"white"},attrs:{gutter:20}},[a("el-col",{attrs:{span:15}},[a("div",{staticClass:"chart-wrapper"},[t.mapShow?a("scatter",{attrs:{"chart-data":t.scatterData},on:{scatterDetail:t.showScatterDetail}}):t._e()],1)]),t._v(" "),a("el-col",{attrs:{span:9}},[a("div",{staticClass:"tags"},[a("div",{ref:"map",staticClass:"title"},[t._v("统计字段管理")]),t._v(" "),a("div",{staticClass:"labels"},t._l(t.tags,function(e){return a("el-tag",{key:e.name,staticClass:"tag",attrs:{"disable-transitions":!1,closable:"",type:"warning"},on:{close:function(a){t.deleteActivity(e.value)}}},[t._v(t._s(e.name))])}))])])],1),t._v(" "),a("el-form",{ref:"form",attrs:{inline:!0}},[a("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"需要分析的活动"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:function(e){t.activityDetail(t.activeInfoForm)}},model:{value:t.activeInfoForm.acid,callback:function(e){t.$set(t.activeInfoForm,"acid",e)},expression:"activeInfoForm.acid"}},t._l(t.tags,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.value}})}))],1),t._v(" "),a("el-form-item",{attrs:{"label-width":t.formLabelWidth,label:"需分析的活动类型\n"}},[a("el-select",{attrs:{placeholder:"PV"},on:{change:function(e){t.activityDetail(t.activeInfoForm)}},model:{value:t.activeInfoForm.fild,callback:function(e){t.$set(t.activeInfoForm,"fild",e)},expression:"activeInfoForm.fild"}},t._l(t.activityDemons,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})}))],1)],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"32px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:16}},[a("div",{staticClass:"chart-wrapper"},[t.chinaMapShow?a("line-chart",{attrs:{"chart-data":t.lineChartData}}):t._e()],1)]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{ref:"map",staticClass:"chart-wrapper"},[t.chinaMapShow?a("map-chart",{attrs:{height:t.mapheight,"chart-data":t.chinaMapData},on:{full:t.fullScreen}}):t._e()],1)])],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"32px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:18}},[a("div",{staticClass:"chart-wrapper"},[t.chinaMapShow?a("bar-chart",{attrs:{"chart-data":t.storeList}}):t._e()],1)]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"chart-wrapper"},[a("div",{staticClass:"rankWrapper"},[a("div",{staticClass:"title"},[t._v("入口各区域占比排行")]),t._v(" "),a("div",{staticClass:"contentWrapper"},t._l(t.chinaMapData,function(e,i){return a("div",{key:i,staticClass:"contentItem"},[i<5?[a("div",{staticClass:"index"},[0==i?a("svg-icon",{staticStyle:{fill:"#e12c5e"},attrs:{"icon-class":"first"}}):t._e(),t._v(" "),1==i?a("svg-icon",{staticStyle:{fill:"#fbce07"},attrs:{"icon-class":"second"}}):t._e(),t._v(" "),2==i?a("svg-icon",{staticStyle:{fill:"#a6a6a6"},attrs:{"icon-class":"third"}}):t._e(),t._v(" "),i>2?a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(i+1))]):t._e()],1),t._v(" "),a("div",{staticClass:"dist"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"percent"},[t._v(t._s(e.value))])]:t._e()],2)}))])])])],1),t._v(" "),a("new-activity",{attrs:{"dialog-form-visible":t.dialogFormVisible},on:{cancel:t.cancelNew,addSuccess:t.addSuccess}}),t._v(" "),a("scatter-detail",{attrs:{"scatter-detail-show":t.scatterDetailShow},on:{cancel:t.cancelCatterDetail}})],1)},[],!1,null,"6cb35654",null));V.options.__file="index.vue";e.default=V.exports},k5sZ:function(t,e,a){},nIhZ:function(t,e,a){},s6Sh:function(t,e,a){"use strict";var i={props:{items:{type:Array,default:function(){return[]}},title:{type:String,default:"vue"}},data:function(){return{isActive:!1}},methods:{clickTitle:function(){this.isActive=!this.isActive}}},n=(a("CHEL"),a("KHd+")),s=Object(n.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"share-dropdown-menu",class:{active:t.isActive}},[a("div",{staticClass:"share-dropdown-menu-wrapper"},[a("span",{staticClass:"share-dropdown-menu-title",on:{click:function(e){return e.target!==e.currentTarget?null:t.clickTitle(e)}}},[t._v(t._s(t.title))]),t._v(" "),t._l(t.items,function(e,i){return a("div",{key:i,staticClass:"share-dropdown-menu-item"},[e.href?a("a",{attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.title))]):a("span",[t._v(t._s(e.title))])])})],2)])},[],!1,null,null,null);s.options.__file="dropdownMenu.vue";e.a=s.exports},vp0a:function(t,e,a){"use strict";var i=a("D4Ym");a.n(i).a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70ef11be"],{"7a6e":function(t,e,a){"use strict";var i=a("970e"),n=a.n(i);n.a},"970e":function(t,e,a){},e2a6:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"operation clearfix"},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},on:{change:t.changeDate},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1)]),t._v(" "),a("div",{staticClass:"tab"},[a("ul",{staticClass:"choose-table clearfix"},t._l(t.list,function(e){return a("li",{key:e.tit,staticClass:"choose-one",on:{click:function(a){return t.choose(e.id,e.name)}}},[a("p",{staticClass:"h1"},[t._v(t._s(e.tit))]),t._v(" "),a("p",{staticClass:"h2"},[t._v(t._s(e.num))]),t._v(" "),a("p",{staticClass:"h3"},[t._v("\n          较上周同期    \n          "),a("span",[t._v(t._s(e.pre))]),t._v(" "),a("i",{staticClass:"icon up"})]),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.currentId==e.id,expression:"currentId == item.id ? true:false"}],staticClass:"current"})])}),0)]),t._v(" "),a("div",{staticClass:"echarts"},[a("line-chart",{attrs:{"chart-data":t.lineChartData}})],1)])},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},r=[],o=a("34de"),c=a.n(o),l=a("ed08"),u={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null,sidebarElm:null}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.initChart(),this.autoResize&&(this.__resizeHandler=Object(l["a"])(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHandler)),this.sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.sidebarElm&&this.sidebarElm.addEventListener("transitionend",this.sidebarResizeHandler)},beforeDestroy:function(){this.chart&&(this.autoResize&&window.removeEventListener("resize",this.__resizeHandler),this.sidebarElm&&this.sidebarElm.removeEventListener("transitionend",this.sidebarResizeHandler),this.chart.dispose(),this.chart=null)},methods:{sidebarResizeHandler:function(t){"width"===t.propertyName&&this.__resizeHandler()},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.expectedData,a=t.actualData;this.chart.setOption({title:{text:"支付金额",textStyle:{fontSize:16,color:"#404040",fontWeight:400}},grid:{left:20,right:20,bottom:20,top:60,containLabel:!0},xAxis:{data:["0:00","2:00","4:00","6:00","8:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00","24:00"],boundaryGap:!1,axisTick:{show:!1}},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1},axisLine:{show:!1}},legend:{data:["今日","对比日"],right:10},series:[{name:"今日",itemStyle:{normal:{color:"#FF005A",lineStyle:{color:"#FF005A",width:2}}},smooth:!0,type:"line",data:e,animationDuration:2800,animationEasing:"cubicInOut"},{name:"对比日",smooth:!0,type:"line",itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}}},data:a,animationDuration:2800,animationEasing:"quadraticOut"}]})},initChart:function(){this.chart=c.a.init(this.$el),this.setOptions(this.chartData)}}},d=u,h=a("f44b"),p=Object(h["a"])(d,s,r,!1,null,null,null),m=p.exports,f={count:{expectedData:[100,120,161,134,105,160,165,100,120,161,134,105,134],actualData:[120,82,91,154,162,140,145,120,82,91,154,162,146]},PVCount:{expectedData:[200,192,120,144,160,130,140],actualData:[180,160,151,106,145,150,130]},impowerCount:{expectedData:[80,100,121,104,105,90,100],actualData:[120,90,100,138,142,130,130]},collectionCount:{expectedData:[130,140,141,142,145,150,160],actualData:[120,82,91,154,162,140,130]},shareAppletCount:{expectedData:[130,140,141,142,145,150,160],actualData:[120,82,91,154,162,140,130]},shareTimeCount:{expectedData:[130,140,141,142,145,150,160],actualData:[120,82,91,154,162,140,130]},shareCommodity:{expectedData:[200,192,120,144,160,130,140],actualData:[180,160,151,106,145,150,130]},shareCdyTime:{expectedData:[200,192,120,144,160,130,140],actualData:[180,160,151,106,145,150,130]},shareHierarchy:{expectedData:[200,192,120,144,160,130,140],actualData:[180,160,151,106,145,150,130]}},v={components:{LineChart:m},data:function(){return{list:[{tit:"访客数",name:"count",num:15703,pre:"6.44%",id:1},{tit:"浏览量",name:"PVCount",num:15703,pre:"6.44%",id:2},{tit:"授权人数",name:"impowerCount",num:15703,pre:"6.44%",id:3},{tit:"收藏小程序人数",name:"collectionCount",num:15703,pre:"6.44%",id:4},{tit:"分享小程序人数",name:"shareAppletCount",num:15703,pre:"6.44%",id:5},{tit:"分享小程序次数",name:"shareTimeCount",num:15703,pre:"6.44%",id:6},{tit:"分享商品人数",name:"shareCommodity",num:15703,pre:"6.44%",id:7},{tit:"分享商品次数",name:"shareCdyTime",num:15703,pre:"6.44%",id:8},{tit:"社交分享层级",name:"shareHierarchy",num:15703,pre:"6.44%",id:9}],currentId:1,lineChartData:f.count,pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},value1:"",value2:""}},methods:{choose:function(t,e){this.currentId=t,this.lineChartData=f[e],console.log(f[e])},changeDate:function(t){var e=t[0].getFullYear(),a=t[0].getMonth()+1,i=t[0].getDate();console.log(e,a,i)}}},D=v,C=(a("7a6e"),Object(h["a"])(D,i,n,!1,null,"d96dd182",null));e["default"]=C.exports}}]);
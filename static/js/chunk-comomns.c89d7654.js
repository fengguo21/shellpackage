(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-comomns"],{CHEL:function(e,t,a){"use strict";var o=a("rJhD");a.n(o).a},fo8u:function(e,t,a){"use strict";var o=a("88Rz"),r=a.n(o),n=a("7Qib");a("+9CQ");var i={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},chartData:{type:Array,required:!0}},data:function(){return{chart:null}},mounted:function(){var e=this,t=this.chartData;console.log(this.chartData,"test----------------"),this.initChart(t),this.__resizeHanlder=Object(n.a)(function(){e.chart&&e.chart.resize()},100),window.addEventListener("resize",this.__resizeHanlder)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHanlder),this.chart.dispose(),this.chart=null)},methods:{initChart:function(e){var t=this;this.chart=r.a.init(this.$el,"macarons");var a={},o=e;this.chart.showLoading();var n=r.a.getMap("china").geoJson.features;this.chart.hideLoading(),n.forEach(function(e){var t=e.properties.name;a[t]=e.properties.cp}),console.log("================data======================"),console.log(e),console.log(o);var i=function(e){for(var t=[],o=0;o<e.length;o++){var r=a[e[o].name];r&&t.push({name:e[o].name,value:r.concat(e[o].value)})}return console.log(t,"--------------------"),t};this.chart.setOption({title:{text:"入口来源分布",subtext:"",x:"left",textStyle:{color:" rgb(55, 75, 113)",fontFamily:"等线",fontSize:18},subtextStyle:{fontSize:15,fontFamily:"等线"}},toolbox:{feature:{myTool2:{show:!0,title:"全屏",icon:"path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891",onclick:function(){t.$emit("full")}}}},tooltip:{trigger:"item",formatter:function(e){if(void 0===e.value[2]){for(var t="",a=0;a<o.length;a++)e.name===o[a].name&&(t+=o[a].name+":<br>",t+="访问量：",t+=o[a].value);return console.log(t),t}t="";for(var r=0;r<o.length;r++)if(e.name===o[r].name){t+=o[a].name+":<br>";for(var n=0;n<o[r].value.length;n++)t+=o[r].value[n].name+":"+o[r].value[n].value+"<br>"}return console.log(t),t}},legend:{y:"bottom",x:"right",data:["credit_pm2.5"],textStyle:{color:"#fff"}},visualMap:{show:!0,min:0,max:25e3,left:"right",top:"bottom",text:["高","低"],calculable:!0,seriesIndex:[1],inRange:{color:["#fcecd5","#f7aa8f"]}},geo:{show:!0,map:"china",label:{normal:{show:!1},emphasis:{show:!1}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#2B91B7"}}},series:[{name:"散点",type:"scatter",coordinateSystem:"geo",data:i(e),symbolSize:function(e){return e[2]/1e4},label:{normal:{formatter:"{b}",position:"right",show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:"#05C3F9"}}},{type:"map",map:"china",geoIndex:0,aspectScale:.75,showLegendSymbol:!1,label:{normal:{show:!0},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#2B91B7"}},animation:!1,data:e},{name:"点",type:"scatter",coordinateSystem:"geo",symbol:"pin",symbolSize:function(e){var t,a=60/299e3;return t=80-3e5*a,a*e[2]+t},label:{normal:{show:!1,textStyle:{color:"#fff",fontSize:9}}},itemStyle:{normal:{color:"#F62157"}},zlevel:6,data:i(e)},{name:"Top 5",type:"effectScatter",coordinateSystem:"geo",data:i(e.sort(function(e,t){return t.value-e.value}).slice(0,5)),symbolSize:function(e){return e[2]/1e4},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:"yellow",shadowBlur:10,shadowColor:"yellow"}},zlevel:1}]})}}},l=a("ZrdR"),s=Object(l.a)(i,function(){var e=this.$createElement;return(this._self._c||e)("div",{class:this.className,style:{height:this.height,width:this.width}})},[],!1,null,null,null);s.options.__file="mapChart.vue";t.a=s.exports},rJhD:function(e,t,a){},s6Sh:function(e,t,a){"use strict";var o={props:{items:{type:Array,default:function(){return[]}},title:{type:String,default:"vue"}},data:function(){return{isActive:!1}},methods:{clickTitle:function(){this.isActive=!this.isActive}}},r=(a("CHEL"),a("ZrdR")),n=Object(r.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"share-dropdown-menu",class:{active:e.isActive}},[a("div",{staticClass:"share-dropdown-menu-wrapper"},[a("span",{staticClass:"share-dropdown-menu-title",on:{click:function(t){return t.target!==t.currentTarget?null:e.clickTitle(t)}}},[e._v(e._s(e.title))]),e._v(" "),e._l(e.items,function(t,o){return a("div",{key:o,staticClass:"share-dropdown-menu-item"},[t.href?a("a",{attrs:{href:t.href,target:"_blank"}},[e._v(e._s(t.title))]):a("span",[e._v(e._s(t.title))])])})],2)])},[],!1,null,null,null);n.options.__file="dropdownMenu.vue";t.a=n.exports}}]);
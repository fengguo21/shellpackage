(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6a93"],{X0QT:function(t,e,a){"use strict";a.r(e);var n=a("t3Un");var l={name:"Documentation",data:function(){return{currentPage:1,total:200,pageSize:20,formInline:{user:"",region:""},tableData:[]}},created:function(){this.getMemberList()},methods:{handleSizeChange:function(t){this.pageSize=t,this.getMemberList},getMemberList:function(t){var e=this;this.currentPage=t,function(t){return Object(n.a)({url:"/app/analysis-data/customer",method:"post",params:t})}({page:t,page_rows:this.pageSize}).then(function(t){console.log(t.data.data),e.tableData=t.data.data})},onSubmit:function(){console.log("submit!")}}},i=(a("q2NL"),a("KHd+")),o=Object(i.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"documentation-container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"输入关键字搜索","suffix-icon":"el-icon-search"},model:{value:t.input2,callback:function(e){t.input2=e},expression:"input2"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("重置")])],1),t._v(" "),a("el-form-item",{staticStyle:{float:"right"}},[a("el-button",{attrs:{type:"warning",icon:"el-icon-upload2"},on:{click:t.onSubmit}},[t._v("导入会员")])],1)],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"customer_id",label:"用户ID",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"note",label:"备注",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"source_type",label:"用户来源",width:"280"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别"}}),t._v(" "),a("el-table-column",{attrs:{prop:"age",label:"年龄段"}}),t._v(" "),a("el-table-column",{attrs:{prop:"birthday",label:"生日"}}),t._v(" "),a("el-table-column",{attrs:{prop:"mobile",label:"手机号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间"}})],1),t._v(" "),a("div",{staticClass:"pageWrapper"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[20,50,100],"page-size":t.pageSize,total:t.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.getMemberList}})],1)],1)},[],!1,null,"6ec623fd",null);o.options.__file="index.vue";e.default=o.exports},ppEh:function(t,e,a){},q2NL:function(t,e,a){"use strict";var n=a("ppEh");a.n(n).a}}]);
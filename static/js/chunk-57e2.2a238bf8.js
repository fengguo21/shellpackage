(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-57e2"],{"6H4E":function(n,e,t){"use strict";var o=t("EqWV");t.n(o).a},EqWV:function(n,e,t){},XC0C:function(n,e,t){},"c+JS":function(n,e,t){"use strict";var o=t("XC0C");t.n(o).a},c11S:function(n,e,t){"use strict";var o=t("gTgX");t.n(o).a},gTgX:function(n,e,t){},ntYl:function(n,e,t){"use strict";t.r(e);var o=t("Yfch"),i=t("ETGp");function s(n,e,t,o){var i=void 0!==window.screenLeft?window.screenLeft:screen.left,s=void 0!==window.screenTop?window.screenTop:screen.top,a=(window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width)/2-t/2+i,r=(window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height)/2-o/2+s,c=window.open(n,e,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width="+t+", height="+o+", top="+r+", left="+a);window.focus&&c.focus()}var a={name:"SocialSignin",methods:{wechatHandleClick:function(n){this.$store.commit("SET_AUTH_TYPE",n);s("https://open.weixin.qq.com/connect/qrconnect?appid=xxxxx&redirect_uri="+encodeURIComponent("xxx/redirect?redirect="+window.location.origin+"/authredirect")+"&response_type=code&scope=snsapi_login#wechat_redirect",n,540,540)},tencentHandleClick:function(n){this.$store.commit("SET_AUTH_TYPE",n);s("https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=xxxxx&redirect_uri="+encodeURIComponent("xxx/redirect?redirect="+window.location.origin+"/authredirect"),n,540,540)}}},r=(t("6H4E"),t("KHd+")),c=Object(r.a)(a,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"social-signup-container"},[t("div",{staticClass:"sign-btn",on:{click:function(e){n.wechatHandleClick("wechat")}}},[t("span",{staticClass:"wx-svg-container"},[t("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),n._v(" 微信\n  ")]),n._v(" "),t("div",{staticClass:"sign-btn",on:{click:function(e){n.tencentHandleClick("tencent")}}},[t("span",{staticClass:"qq-svg-container"},[t("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),n._v(" QQ\n  ")])])},[],!1,null,"2de45e6f",null);c.options.__file="socialsignin.vue";var l=c.exports,d={name:"Login",components:{LangSelect:i.a,SocialSign:l},data:function(){return{loginForm:{username:"admin",password:"1111111"},loginRules:{username:[{required:!0,trigger:"blur",validator:function(n,e,t){Object(o.a)(e)?t():t(new Error("Please enter the correct user name"))}}],password:[{required:!0,trigger:"blur",validator:function(n,e,t){e.length<6?t(new Error("The password can not be less than 6 digits")):t()}}]},passwordType:"password",loading:!1,showDialog:!1}},created:function(){},destroyed:function(){},methods:{showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},handleLogin:function(){var n=this;this.$refs.loginForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;n.loading=!0,n.$store.dispatch("LoginByUsername",n.loginForm).then(function(){n.loading=!1,n.$router.push({path:"/preview"})}).catch(function(){n.loading=!1})})},afterQRScan:function(){}}},u=(t("c11S"),t("c+JS"),Object(r.a)(d,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:n.loginForm,rules:n.loginRules,"auto-complete":"on","label-position":"left"}},[t("div",{staticClass:"title-container"},[t("h3",{staticClass:"title"},[n._v(n._s(n.$t("login.title")))]),n._v(" "),t("lang-select",{staticClass:"set-language"})],1),n._v(" "),t("el-form-item",{attrs:{prop:"username"}},[t("span",{staticClass:"svg-container svg-container_login"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),n._v(" "),t("el-input",{attrs:{placeholder:n.$t("login.username"),name:"username",type:"text","auto-complete":"on"},model:{value:n.loginForm.username,callback:function(e){n.$set(n.loginForm,"username",e)},expression:"loginForm.username"}})],1),n._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),n._v(" "),t("el-input",{attrs:{type:n.passwordType,placeholder:n.$t("login.password"),name:"password","auto-complete":"on"},nativeOn:{keyup:function(e){return"button"in e||!n._k(e.keyCode,"enter",13,e.key,"Enter")?n.handleLogin(e):null}},model:{value:n.loginForm.password,callback:function(e){n.$set(n.loginForm,"password",e)},expression:"loginForm.password"}}),n._v(" "),t("span",{staticClass:"show-pwd",on:{click:n.showPwd}},[t("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),n._v(" "),t("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:n.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),n.handleLogin(e)}}},[n._v(n._s(n.$t("login.logIn")))])],1),n._v(" "),t("el-dialog",{attrs:{title:n.$t("login.thirdparty"),visible:n.showDialog,"append-to-body":""},on:{"update:visible":function(e){n.showDialog=e}}},[n._v("\n    "+n._s(n.$t("login.thirdpartyTips"))+"\n    "),t("br"),n._v(" "),t("br"),n._v(" "),t("br"),n._v(" "),t("social-sign")],1)],1)},[],!1,null,"8b3e79d0",null));u.options.__file="index.vue";e.default=u.exports}}]);
webpackJsonp([24],{"/DCJ":function(n,e,t){e=n.exports=t("FZ+f")(!1),e.push([n.i,".social-signup-container[data-v-2de1732c]{margin:20px 0}.social-signup-container .sign-btn[data-v-2de1732c]{display:inline-block;cursor:pointer}.social-signup-container .icon[data-v-2de1732c]{color:#fff;font-size:30px;margin-top:6px}.social-signup-container .qq-svg-container[data-v-2de1732c],.social-signup-container .wx-svg-container[data-v-2de1732c]{display:inline-block;width:40px;height:40px;line-height:40px;text-align:center;padding-top:1px;border-radius:4px;margin-bottom:20px;margin-right:5px}.social-signup-container .wx-svg-container[data-v-2de1732c]{background-color:#8dc349}.social-signup-container .qq-svg-container[data-v-2de1732c]{background-color:#6ba2d6;margin-left:50px}",""])},L0xe:function(n,e,t){var i=t("/DCJ");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("f7969fda",i,!0)},dZXH:function(n,e,t){"use strict";function i(n,e,t,i){var o=void 0!==window.screenLeft?window.screenLeft:screen.left,c=void 0!==window.screenTop?window.screenTop:screen.top,s=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,a=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,r=s/2-t/2+o,d=a/2-i/2+c,l=window.open(n,e,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width="+t+", height="+i+", top="+d+", left="+r);window.focus&&l.focus()}function o(n){t("L0xe")}Object.defineProperty(e,"__esModule",{value:!0});var c={name:"social-signin",methods:{wechatHandleClick:function(n){this.$store.commit("SET_AUTH_TYPE",n);i("https://open.weixin.qq.com/connect/qrconnect?appid=xxxxx&redirect_uri="+encodeURIComponent("xxx/redirect?redirect="+window.location.origin+"/authredirect")+"&response_type=code&scope=snsapi_login#wechat_redirect",n,540,540)},tencentHandleClick:function(n){this.$store.commit("SET_AUTH_TYPE",n);i("https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=xxxxx&redirect_uri="+encodeURIComponent("xxx/redirect?redirect="+window.location.origin+"/authredirect"),n,540,540)}}},s=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"social-signup-container"},[t("div",{staticClass:"sign-btn",on:{click:function(e){n.wechatHandleClick("wechat")}}},[t("span",{staticClass:"wx-svg-container"},[t("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),n._v(" 微信\n  ")]),n._v(" "),t("div",{staticClass:"sign-btn",on:{click:function(e){n.tencentHandleClick("tencent")}}},[t("span",{staticClass:"qq-svg-container"},[t("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),n._v(" QQ\n  ")])])},a=[],r={render:s,staticRenderFns:a},d=r,l=t("VU/8"),p=o,u=l(c,d,!1,p,"data-v-2de1732c",null);e.default=u.exports}});
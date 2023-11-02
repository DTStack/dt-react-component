"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[3246],{5926:function(O,g,o){o.r(g);var a=o(58383),n=o.n(a),e=o(43249),t=o(51317),r=o.n(t),i=o(96169),c=o(50959),l=o(8633),d=o(30349),_=o(11527);g.default=function(){return(0,c.useEffect)(function(){return d.Z.deleteCookie("dt_token"),function(){return d.Z.deleteAllCookies()}},[]),(0,l.Z)(function(u){var s=u.changedFields;console.log("cookie fields hasChanged",s),s!=null&&s.length&&i.default.info("\u4EE5\u4E0BCookie\u5B57\u6BB5\u53D1\u751F\u53D8\u66F4\uFF1A"+s.map(function(f){return"".concat(f.key," : ").concat(f.value)}).join(","))},["dt_token"],{immediately:!0,timeout:1e3}),(0,_.jsxs)("div",{style:{textAlign:"center",paddingTop:60},children:[(0,_.jsx)("p",{children:(0,_.jsx)(e.default,{onClick:function(){d.Z.setCookie("dt_token","im_new_token_".concat(Date.now()))},children:"\u4FEE\u6539Cookie\u503C"})}),(0,_.jsx)("p",{children:"\u76D1\u542C\u9875\u9762 Cookie \u4FE1\u606F\u53D8\u66F4"})]})}},5483:function(O,g,o){o.r(g);var a=o(58383),n=o.n(a),e=o(43249),t=o(51317),r=o.n(t),i=o(96169),c=o(50959),l=o(8633),d=o(30349),_=o(11527);g.default=function(){return(0,c.useEffect)(function(){return d.Z.deleteCookie("dt_token"),d.Z.deleteCookie("dt_userid"),function(){return d.Z.deleteAllCookies()}},[]),(0,l.Z)(function(u){var s=u.changedFields;console.log("cookie fields hasChanged",s),s!=null&&s.length&&i.default.info("\u4EE5\u4E0BCookie\u5B57\u6BB5\u53D1\u751F\u53D8\u66F4\uFF1A"+s.map(function(f){return"".concat(f.key," : ").concat(f.value)}).join(","))},["dt_token"]),(0,l.Z)(function(u){var s=u.prevCookies,f=u.nextCookies;i.default.info("\u76D1\u542C\u5230Cookie\u4ECE ".concat(s," \u53D8\u66F4\u4E3A\u4E86 ").concat(f," "))},[]),(0,_.jsxs)("div",{style:{textAlign:"center",paddingTop:60},children:[(0,_.jsx)("p",{children:(0,_.jsx)(e.default,{onClick:function(){d.Z.setCookie("dt_token","im_new_token_".concat(Date.now())),d.Z.setCookie("dt_userid","im_new_userid_".concat(Date.now()))},children:"\u4FEE\u6539Cookie\u503C"})}),(0,_.jsx)("p",{children:"\u76D1\u542C\u9875\u9762 Cookie \u4FE1\u606F\u53D8\u66F4"})]})}},8633:function(O,g,o){var a=o(50959),n=o(30349),e={timeout:200,immediately:!1},t=function(i,c){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:e,d=l.timeout,_=l.immediately,u=(0,a.useRef)(),s=(0,a.useRef)(document.cookie),f=!c.length;(0,a.useEffect)(function(){return u.current=window.setInterval(function(){D()},d),function(){window.clearInterval(u.current)}},[]);var E=function(m,v){for(var A=[],h=0;h<c.length;h++){var M=c[h],p=n.Z.getCookie(M,m),P=n.Z.getCookie(M,v);(p!==null||p===null&&_)&&p!==P&&A.push({key:M,value:P})}A.length&&i({changedFields:A,prevCookies:m,nextCookies:v})},D=function(){var m=s.current,v=document.cookie;m!==v&&(f?i({prevCookies:m,nextCookies:v}):E(m,v),s.current=v)}};g.Z=t},30349:function(O,g){var o={pageWidth:function(){return Math.max(document.documentElement.clientWidth,window.innerWidth||0)},pageHeight:function(){return Math.max(document.documentElement.clientHeight,window.innerHeight||0)},checkExist:function(n){return n!=null&&n!==""},isMacOs:function(){return navigator.userAgent.indexOf("Macintosh")>-1},isWindows:function(){return navigator.userAgent.indexOf("Windows")>-1},isMobileDevice:function(){return typeof window.orientation!="undefined"||navigator.userAgent.indexOf("IEMobile")!==-1},browserCheck:function(){var n={};if(this.isMobileDevice())return!0;var e=navigator.userAgent.toLowerCase(),t;return(t=e.match(/rv:([\d.]+)\) like gecko/))||(t=e.match(/msie ([\d\.]+)/))?n.ie=t[1]:(t=e.match(/edge\/([\d\.]+)/))?n.edge=t[1]:(t=e.match(/firefox\/([\d\.]+)/))?n.firefox=t[1]:(t=e.match(/(?:opera|opr).([\d\.]+)/))?n.opera=t[1]:(t=e.match(/chrome\/([\d\.]+)/))?n.chrome=t[1]:(t=e.match(/version\/([\d\.]+).*safari/))&&(n.safari=t[1]),!!(n.chrome&&parseInt(n.chrome.split(".")[0],10)>=66||n.firefox)},getParameterByName:function(n,e){var t=e,r=n;t||(t=window.location.href),r=r.replace(/[\[\]]/g,"\\$&");var i=new RegExp("[?&]"+r+"(=([^&#]*)|&|#|$)"),c=i.exec(e);return c?c[2]?decodeURIComponent(c[2].replace(/\+/g," ")):"":null},getBase64:function(n,e){var t=new FileReader;t.addEventListener("load",function(){return e(t.result)}),t.readAsDataURL(n)},percent:function(n,e){var t=n,r=e;return!t||t===1/0?"0%":(t>1&&(t=1),r=r||2,r=Math.pow(10,r),Math.round(t*r*100)/r+"%")},getCssText:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e="";for(var t in n)n.hasOwnProperty(t)&&(e+=t+":"+n[t]+";");return e},trim:function(n){return typeof n=="string"?n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""):n},trimlr:function(n){var e=n.replace(/^\s*/,"");return e.replace(/\s*$/,"")},removeAllSpaces:function(n){return typeof n=="string"?n.replace(/\s*/g,""):n},getCookie:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document.cookie;if(!e)return null;var t=e.match(new RegExp("(^| )"+n+"=([^;]*)(;|$)"));return t!=null?unescape(decodeURI(t[2])):null},deleteCookie:function(n,e,t){var r=e,i=t,c=new Date(0);r=r?"; domain=".concat(r):"",i=i||"/",document.cookie=n+"=; expires="+c.toUTCString()+r+"; path="+i},deleteAllCookies:function(n,e){for(var t=document.cookie.split(";"),r=0;r<t.length;r++)t[r]&&this.deleteCookie(t[r].split("=")[0],n,e)},setCookie:function(n,e,t){var r="";if(t){var i=new Date;i.setTime(i.getTime()+t*24*60*60*1e3),r="; expires="+i.toUTCString()}document.cookie=n+"="+e+r+"; path=/"},convertBytes:function(n){for(var e=n,t=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],r=0;e>=1024;)e=Number((e/1024).toFixed(2)),r++;return"".concat(e," ").concat(t[r])},toQfw:function(n){var e=n;if(!e)return 0;e=e.toString?e.toString():e;var t=/(?=(?!(\b))(\d{3})+$)/g;return e=e.replace(t,","),e},textOverflowExchange:function(n,e){return n&&n.length>e?n.substring(0,e)+"...":n},jsonFormat:function(n,e){if(!n)return n;try{var t=JSON.parse(n),r=JSON.stringify(t,null,e||2);return r}catch(i){return null}},sortByCompareFunctions:function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];n.sort(function(i,c){for(var l=0,d=0,_=t;d<_.length;d++){var u=_[d];if(l=u(i,c),l!==0)return l}return l})},exchangeOrder:function(n){switch(n){case"ascend":return"asc";case"descend":return"desc";default:return}},generateAKey:function(){return""+new Date().getTime()+~~(Math.random()*1e6)},isJSONStr:function(n){var e=n;return e=this.trimlr(e),e.charAt(0)==="{"&&e.charAt(e.length-1)==="}"||e.charAt(0)==="["&&e.charAt(e.length-1)==="]"},getRandomStr:function(n){var e="0123456789",t="abcdefghijklmnopqrstuvwxyz",r="ABCDEFGHIJKLMNOPQRSTUVXYZ";function i(_){var u=Math.random()*(_.length-1);return _.charAt(u)}for(var c="num",l="",d=0;d<n;d++)c==="num"?(l+=i(e),c="lower"):c==="lower"?(l+=i(t),c="upper"):c==="upper"&&(l+=i(r),c="num");return l},isEqualArr:function(n,e){var t=JSON.stringify;return t(n.sort())===t(e.sort())},filterAttrByArrays:function(n){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=new Array(e.length+1),r=0;r<t.length;r++)t[r]={};return Object.keys(n).forEach(function(i){var c=e.find(function(l,d){return l.includes(i)?(t[d][i]=n[i],!0):!1});c||(t[e.length][i]=n[i])}),t}};g.Z=o},82489:function(O,g,o){o.r(g)},51317:function(O,g,o){o(20072),o(82489)},89471:function(O,g,o){o.d(g,{Z:function(){return a}});function a(n,e){for(var t=n,r=0;r<e.length;r+=1){if(t==null)return;t=t[e[r]]}return t}},31024:function(O,g,o){o.d(g,{Z:function(){return i}});var a=o(12309),n=o(36014),e=o(11631),t=o(89471);function r(u,s,f,E){if(!s.length)return f;var D=(0,e.Z)(s),C=D[0],m=D.slice(1),v;return!u&&typeof C=="number"?v=[]:Array.isArray(u)?v=(0,n.Z)(u):v=(0,a.Z)({},u),E&&f===void 0&&m.length===1?delete v[C][m[0]]:v[C]=r(v[C],m,f,E),v}function i(u,s,f){var E=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return s.length&&E&&f===void 0&&!(0,t.Z)(u,s.slice(0,-1))?u:r(u,s,f,E)}function c(u){return _typeof(u)==="object"&&u!==null&&Object.getPrototypeOf(u)===Object.prototype}function l(u){return Array.isArray(u)?[]:{}}var d=typeof Reflect=="undefined"?Object.keys:Reflect.ownKeys;function _(){for(var u=arguments.length,s=new Array(u),f=0;f<u;f++)s[f]=arguments[f];var E=l(s[0]);return s.forEach(function(D){function C(m,v){var A=new Set(v),h=get(D,m),M=Array.isArray(h);if(M||c(h)){if(!A.has(h)){A.add(h);var p=get(E,m);M?E=i(E,m,[]):(!p||_typeof(p)!=="object")&&(E=i(E,m,l(h))),d(h).forEach(function(P){C([].concat(_toConsumableArray(m),[P]),A)})}}else E=i(E,m,h)}C([])}),E}}}]);

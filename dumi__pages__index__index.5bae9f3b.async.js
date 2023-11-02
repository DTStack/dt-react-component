"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[8863],{30527:function(D,f,n){var _=n(12309),s=n(89043),l=n(25201),c=n(10582),a=n(50959),t=n(84875),O=n.n(t),g=n(65911),P=n(41483),d=n(61257),o=n(29360),C=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];(0,d.U)("#1890ff");var u=a.forwardRef(function(r,T){var E,v=r.className,m=r.icon,e=r.spin,i=r.rotate,h=r.tabIndex,y=r.onClick,M=r.twoToneColor,R=(0,c.Z)(r,C),A=a.useContext(g.Z),I=A.prefixCls,b=I===void 0?"anticon":I,B=A.rootClassName,Z=O()(B,b,(E={},(0,l.Z)(E,"".concat(b,"-").concat(m.name),!!m.name),(0,l.Z)(E,"".concat(b,"-spin"),!!e||m.name==="loading"),E),v),p=h;p===void 0&&y&&(p=-1);var U=i?{msTransform:"rotate(".concat(i,"deg)"),transform:"rotate(".concat(i,"deg)")}:void 0,K=(0,o.H9)(M),x=(0,s.Z)(K,2),W=x[0],j=x[1];return a.createElement("span",(0,_.Z)((0,_.Z)({role:"img","aria-label":m.name},R),{},{ref:T,tabIndex:p,onClick:y,className:Z}),a.createElement(P.Z,{icon:m,primaryColor:W,secondaryColor:j,style:U}))});u.displayName="AntdIcon",u.getTwoToneColor=d.m,u.setTwoToneColor=d.U,f.Z=u},65911:function(D,f,n){var _=n(50959),s=(0,_.createContext)({});f.Z=s},41483:function(D,f,n){var _=n(10582),s=n(12309),l=n(29360),c=["icon","className","onClick","style","primaryColor","secondaryColor"],a={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function t(P){var d=P.primaryColor,o=P.secondaryColor;a.primaryColor=d,a.secondaryColor=o||(0,l.pw)(d),a.calculated=!!o}function O(){return(0,s.Z)({},a)}var g=function(d){var o=d.icon,C=d.className,u=d.onClick,r=d.style,T=d.primaryColor,E=d.secondaryColor,v=(0,_.Z)(d,c),m=a;if(T&&(m={primaryColor:T,secondaryColor:E||(0,l.pw)(T)}),(0,l.C3)(),(0,l.Kp)((0,l.r)(o),"icon should be icon definiton, but got ".concat(o)),!(0,l.r)(o))return null;var e=o;return e&&typeof e.icon=="function"&&(e=(0,s.Z)((0,s.Z)({},e),{},{icon:e.icon(m.primaryColor,m.secondaryColor)})),(0,l.R_)(e.icon,"svg-".concat(e.name),(0,s.Z)({className:C,onClick:u,style:r,"data-icon":e.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},v))};g.displayName="IconReact",g.getTwoToneColors=O,g.setTwoToneColors=t,f.Z=g},61257:function(D,f,n){n.d(f,{U:function(){return c},m:function(){return a}});var _=n(89043),s=n(41483),l=n(29360);function c(t){var O=(0,l.H9)(t),g=(0,_.Z)(O,2),P=g[0],d=g[1];return s.Z.setTwoToneColors({primaryColor:P,secondaryColor:d})}function a(){var t=s.Z.getTwoToneColors();return t.calculated?[t.primaryColor,t.secondaryColor]:t.primaryColor}},60236:function(D,f,n){n.d(f,{Z:function(){return O}});var _=n(12309),s=n(50959),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"},c=l,a=n(30527),t=function(P,d){return s.createElement(a.Z,(0,_.Z)((0,_.Z)({},P),{},{ref:d,icon:c}))};t.displayName="GithubOutlined";var O=s.forwardRef(t)},29360:function(D,f,n){n.d(f,{C3:function(){return m},H9:function(){return T},Kp:function(){return d},R_:function(){return u},pw:function(){return r},r:function(){return o},vD:function(){return E}});var _=n(12309),s=n(26407),l=n(56088),c=n(50959),a=n(61045),t=n(90613),O=n(65911),g=n(47638),P=n.n(g);function d(e,i){(0,a.ZP)(e,"[@ant-design/icons] ".concat(i))}function o(e){return(0,s.Z)(e)==="object"&&typeof e.name=="string"&&typeof e.theme=="string"&&((0,s.Z)(e.icon)==="object"||typeof e.icon=="function")}function C(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(e).reduce(function(i,h){var y=e[h];switch(h){case"class":i.className=y,delete i.class;break;default:delete i[h],i[P()(h)]=y}return i},{})}function u(e,i,h){return h?c.createElement(e.tag,(0,_.Z)((0,_.Z)({key:i},C(e.attrs)),h),(e.children||[]).map(function(y,M){return u(y,"".concat(i,"-").concat(e.tag,"-").concat(M))})):c.createElement(e.tag,(0,_.Z)({key:i},C(e.attrs)),(e.children||[]).map(function(y,M){return u(y,"".concat(i,"-").concat(e.tag,"-").concat(M))}))}function r(e){return(0,l.generate)(e)[0]}function T(e){return e?Array.isArray(e)?e:[e]:[]}var E={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},v=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,m=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:v,h=(0,c.useContext)(O.Z),y=h.csp;(0,c.useEffect)(function(){(0,t.hq)(i,"@ant-design-icons",{prepend:!0,csp:y})},[])}},68390:function(D,f,n){n.r(f),n.d(f,{default:function(){return O}});var _=n(58383),s=n(43249),l=n(50959),c=n(60236),a=n(40146),t=n(11527);function O(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.ql,{children:[(0,t.jsx)("title",{children:"dt-react-component"}),(0,t.jsx)("meta",{property:"og:title",content:"dt-react-component","data-rh":"true"}),(0,t.jsx)("meta",{name:"description",content:"react-component"}),(0,t.jsx)("meta",{name:"author",content:"dtinsight UED"}),(0,t.jsx)("meta",{name:"keywords",content:"react,react-component,ui-library,typescript,ant-design"})]}),(0,t.jsxs)("div",{className:"dtc-homepage",children:[(0,t.jsx)("h1",{className:"dtc-homepage-title",children:"dt-react-component"}),(0,t.jsxs)("div",{className:"dtc-homepage-badges",children:[(0,t.jsx)("img",{src:"https://img.shields.io/npm/v/dt-react-component.svg?style=flat"}),(0,t.jsx)("img",{src:"http://img.shields.io/npm/dm/dt-react-component.svg?style=flat"})]}),(0,t.jsx)("div",{className:"dtc-homepage-description",children:"\u4E00\u4E2A\u57FA\u4E8E ant design \u7684\u7EC4\u4EF6\u5E93"}),(0,t.jsxs)("div",{className:"dtc-homepage-btnGroups",children:[(0,t.jsx)(a.rU,{className:"ant-btn",to:"/guide",children:"\u5FEB\u901F\u5F00\u59CB"}),(0,t.jsx)(s.default,{icon:(0,t.jsx)(c.Z,{}),href:"https://github.com/DTStack/dt-react-component",children:"Github"})]})]})]})}},89471:function(D,f,n){n.d(f,{Z:function(){return _}});function _(s,l){for(var c=s,a=0;a<l.length;a+=1){if(c==null)return;c=c[l[a]]}return c}},31024:function(D,f,n){n.d(f,{Z:function(){return t}});var _=n(12309),s=n(36014),l=n(11631),c=n(89471);function a(o,C,u,r){if(!C.length)return u;var T=(0,l.Z)(C),E=T[0],v=T.slice(1),m;return!o&&typeof E=="number"?m=[]:Array.isArray(o)?m=(0,s.Z)(o):m=(0,_.Z)({},o),r&&u===void 0&&v.length===1?delete m[E][v[0]]:m[E]=a(m[E],v,u,r),m}function t(o,C,u){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return C.length&&r&&u===void 0&&!(0,c.Z)(o,C.slice(0,-1))?o:a(o,C,u,r)}function O(o){return _typeof(o)==="object"&&o!==null&&Object.getPrototypeOf(o)===Object.prototype}function g(o){return Array.isArray(o)?[]:{}}var P=typeof Reflect=="undefined"?Object.keys:Reflect.ownKeys;function d(){for(var o=arguments.length,C=new Array(o),u=0;u<o;u++)C[u]=arguments[u];var r=g(C[0]);return C.forEach(function(T){function E(v,m){var e=new Set(m),i=get(T,v),h=Array.isArray(i);if(h||O(i)){if(!e.has(i)){e.add(i);var y=get(r,v);h?r=t(r,v,[]):(!y||_typeof(y)!=="object")&&(r=t(r,v,g(i))),P(i).forEach(function(M){E([].concat(_toConsumableArray(v),[M]),e)})}}else r=t(r,v,i)}E([])}),r}}}]);

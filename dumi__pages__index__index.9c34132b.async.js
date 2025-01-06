"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[8863],{30527:function(O,c,n){var l=n(2595),a=n(41171),s=n(22481),d=n(51282),r=n(50959),e=n(84875),_=n.n(e),m=n(65911),C=n(41483),o=n(61257),f=n(29360),P=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];(0,o.U)("#1890ff");var g=r.forwardRef(function(u,T){var y,D=u.className,E=u.icon,t=u.spin,i=u.rotate,v=u.tabIndex,h=u.onClick,M=u.twoToneColor,B=(0,d.Z)(u,P),b=r.useContext(m.Z),x=b.prefixCls,p=x===void 0?"anticon":x,R=b.rootClassName,U=_()(R,p,(y={},(0,s.Z)(y,"".concat(p,"-").concat(E.name),!!E.name),(0,s.Z)(y,"".concat(p,"-spin"),!!t||E.name==="loading"),y),D),I=v;I===void 0&&h&&(I=-1);var Z=i?{msTransform:"rotate(".concat(i,"deg)"),transform:"rotate(".concat(i,"deg)")}:void 0,K=(0,f.H9)(M),A=(0,a.Z)(K,2),W=A[0],L=A[1];return r.createElement("span",(0,l.Z)((0,l.Z)({role:"img","aria-label":E.name},B),{},{ref:T,tabIndex:I,onClick:h,className:U}),r.createElement(C.Z,{icon:E,primaryColor:W,secondaryColor:L,style:Z}))});g.displayName="AntdIcon",g.getTwoToneColor=o.m,g.setTwoToneColor=o.U,c.Z=g},65911:function(O,c,n){var l=n(50959),a=(0,l.createContext)({});c.Z=a},41483:function(O,c,n){var l=n(51282),a=n(2595),s=n(29360),d=["icon","className","onClick","style","primaryColor","secondaryColor"],r={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function e(C){var o=C.primaryColor,f=C.secondaryColor;r.primaryColor=o,r.secondaryColor=f||(0,s.pw)(o),r.calculated=!!f}function _(){return(0,a.Z)({},r)}var m=function(o){var f=o.icon,P=o.className,g=o.onClick,u=o.style,T=o.primaryColor,y=o.secondaryColor,D=(0,l.Z)(o,d),E=r;if(T&&(E={primaryColor:T,secondaryColor:y||(0,s.pw)(T)}),(0,s.C3)(),(0,s.Kp)((0,s.r)(f),"icon should be icon definiton, but got ".concat(f)),!(0,s.r)(f))return null;var t=f;return t&&typeof t.icon=="function"&&(t=(0,a.Z)((0,a.Z)({},t),{},{icon:t.icon(E.primaryColor,E.secondaryColor)})),(0,s.R_)(t.icon,"svg-".concat(t.name),(0,a.Z)({className:P,onClick:g,style:u,"data-icon":t.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},D))};m.displayName="IconReact",m.getTwoToneColors=_,m.setTwoToneColors=e,c.Z=m},61257:function(O,c,n){n.d(c,{U:function(){return d},m:function(){return r}});var l=n(41171),a=n(41483),s=n(29360);function d(e){var _=(0,s.H9)(e),m=(0,l.Z)(_,2),C=m[0],o=m[1];return a.Z.setTwoToneColors({primaryColor:C,secondaryColor:o})}function r(){var e=a.Z.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}},32749:function(O,c,n){n.d(c,{Z:function(){return _}});var l=n(2595),a=n(50959),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"},d=s,r=n(30527),e=function(C,o){return a.createElement(r.Z,(0,l.Z)((0,l.Z)({},C),{},{ref:o,icon:d}))};e.displayName="GithubOutlined";var _=a.forwardRef(e)},29360:function(O,c,n){n.d(c,{C3:function(){return E},H9:function(){return T},Kp:function(){return o},R_:function(){return g},pw:function(){return u},r:function(){return f},vD:function(){return y}});var l=n(2595),a=n(69947),s=n(56088),d=n(50959),r=n(61838),e=n(92151),_=n(65911),m=n(47638),C=n.n(m);function o(t,i){(0,r.ZP)(t,"[@ant-design/icons] ".concat(i))}function f(t){return(0,a.Z)(t)==="object"&&typeof t.name=="string"&&typeof t.theme=="string"&&((0,a.Z)(t.icon)==="object"||typeof t.icon=="function")}function P(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(t).reduce(function(i,v){var h=t[v];switch(v){case"class":i.className=h,delete i.class;break;default:delete i[v],i[C()(v)]=h}return i},{})}function g(t,i,v){return v?d.createElement(t.tag,(0,l.Z)((0,l.Z)({key:i},P(t.attrs)),v),(t.children||[]).map(function(h,M){return g(h,"".concat(i,"-").concat(t.tag,"-").concat(M))})):d.createElement(t.tag,(0,l.Z)({key:i},P(t.attrs)),(t.children||[]).map(function(h,M){return g(h,"".concat(i,"-").concat(t.tag,"-").concat(M))}))}function u(t){return(0,s.generate)(t)[0]}function T(t){return t?Array.isArray(t)?t:[t]:[]}var y={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},D=`
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
`,E=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:D,v=(0,d.useContext)(_.Z),h=v.csp;(0,d.useEffect)(function(){(0,e.hq)(i,"@ant-design-icons",{prepend:!0,csp:h})},[])}},65288:function(O,c,n){n.r(c),n.d(c,{default:function(){return _}});var l=n(58383),a=n(43249),s=n(50959),d=n(32749),r=n(30729),e=n(11527);function _(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(r.ql,{children:[(0,e.jsx)("title",{children:"dt-react-component"}),(0,e.jsx)("meta",{property:"og:title",content:"dt-react-component","data-rh":"true"}),(0,e.jsx)("meta",{name:"description",content:"react-component"}),(0,e.jsx)("meta",{name:"author",content:"dtinsight UED"}),(0,e.jsx)("meta",{name:"keywords",content:"react,react-component,ui-library,typescript,ant-design"})]}),(0,e.jsxs)("div",{className:"dtc-homepage",children:[(0,e.jsx)("h1",{className:"dtc-homepage-title",children:"dt-react-component"}),(0,e.jsxs)("div",{className:"dtc-homepage-badges",children:[(0,e.jsx)("img",{src:"https://img.shields.io/npm/v/dt-react-component.svg?style=flat"}),(0,e.jsx)("img",{src:"http://img.shields.io/npm/dm/dt-react-component.svg?style=flat"})]}),(0,e.jsx)("div",{className:"dtc-homepage-description",children:"\u4E00\u4E2A\u57FA\u4E8E ant design \u7684\u7EC4\u4EF6\u5E93"}),(0,e.jsxs)("div",{className:"dtc-homepage-btnGroups",children:[(0,e.jsx)(r.rU,{className:"ant-btn",to:"/guide",children:"\u5FEB\u901F\u5F00\u59CB"}),(0,e.jsx)(a.default,{icon:(0,e.jsx)(d.Z,{}),href:"https://github.com/DTStack/dt-react-component",children:"Github"})]})]})]})}}}]);

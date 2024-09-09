"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6409],{44115:function(O,a,e){var y=e(86848),u=e(13619),c=e(15810),v=e(56428),i=e(79685),d=e(68591),s=e.n(d),l=e(59750),h=e(23207),E=e(37507),M=e(52328),R=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];(0,E.U)("#1890ff");var _=i.forwardRef(function(b,x){var P,r=b.className,f=b.icon,t=b.spin,m=b.rotate,o=b.tabIndex,n=b.onClick,C=b.twoToneColor,g=(0,v.Z)(b,R),D=i.useContext(l.Z),p=D.prefixCls,T=p===void 0?"anticon":p,B=D.rootClassName,L=s()(B,T,(P={},(0,c.Z)(P,"".concat(T,"-").concat(f.name),!!f.name),(0,c.Z)(P,"".concat(T,"-spin"),!!t||f.name==="loading"),P),r),S=o;S===void 0&&n&&(S=-1);var I=m?{msTransform:"rotate(".concat(m,"deg)"),transform:"rotate(".concat(m,"deg)")}:void 0,K=(0,M.H9)(C),U=(0,u.Z)(K,2),N=U[0],Z=U[1];return i.createElement("span",(0,y.Z)((0,y.Z)({role:"img","aria-label":f.name},g),{},{ref:x,tabIndex:S,onClick:n,className:L}),i.createElement(h.Z,{icon:f,primaryColor:N,secondaryColor:Z,style:I}))});_.displayName="AntdIcon",_.getTwoToneColor=E.m,_.setTwoToneColor=E.U,a.Z=_},59750:function(O,a,e){var y=e(79685),u=(0,y.createContext)({});a.Z=u},23207:function(O,a,e){var y=e(56428),u=e(86848),c=e(52328),v=["icon","className","onClick","style","primaryColor","secondaryColor"],i={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function d(h){var E=h.primaryColor,M=h.secondaryColor;i.primaryColor=E,i.secondaryColor=M||(0,c.pw)(E),i.calculated=!!M}function s(){return(0,u.Z)({},i)}var l=function(E){var M=E.icon,R=E.className,_=E.onClick,b=E.style,x=E.primaryColor,P=E.secondaryColor,r=(0,y.Z)(E,v),f=i;if(x&&(f={primaryColor:x,secondaryColor:P||(0,c.pw)(x)}),(0,c.C3)(),(0,c.Kp)((0,c.r)(M),"icon should be icon definiton, but got ".concat(M)),!(0,c.r)(M))return null;var t=M;return t&&typeof t.icon=="function"&&(t=(0,u.Z)((0,u.Z)({},t),{},{icon:t.icon(f.primaryColor,f.secondaryColor)})),(0,c.R_)(t.icon,"svg-".concat(t.name),(0,u.Z)({className:R,onClick:_,style:b,"data-icon":t.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},r))};l.displayName="IconReact",l.getTwoToneColors=s,l.setTwoToneColors=d,a.Z=l},37507:function(O,a,e){e.d(a,{U:function(){return v},m:function(){return i}});var y=e(13619),u=e(23207),c=e(52328);function v(d){var s=(0,c.H9)(d),l=(0,y.Z)(s,2),h=l[0],E=l[1];return u.Z.setTwoToneColors({primaryColor:h,secondaryColor:E})}function i(){var d=u.Z.getTwoToneColors();return d.calculated?[d.primaryColor,d.secondaryColor]:d.primaryColor}},56415:function(O,a,e){e.d(a,{Z:function(){return s}});var y=e(86848),u=e(79685),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},v=c,i=e(44115),d=function(h,E){return u.createElement(i.Z,(0,y.Z)((0,y.Z)({},h),{},{ref:E,icon:v}))};d.displayName="CopyOutlined";var s=u.forwardRef(d)},25418:function(O,a,e){e.d(a,{Z:function(){return s}});var y=e(86848),u=e(79685),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},v=c,i=e(44115),d=function(h,E){return u.createElement(i.Z,(0,y.Z)((0,y.Z)({},h),{},{ref:E,icon:v}))};d.displayName="QuestionCircleOutlined";var s=u.forwardRef(d)},6513:function(O,a,e){e.d(a,{Z:function(){return s}});var y=e(86848),u=e(79685),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"},v=c,i=e(44115),d=function(h,E){return u.createElement(i.Z,(0,y.Z)((0,y.Z)({},h),{},{ref:E,icon:v}))};d.displayName="UpOutlined";var s=u.forwardRef(d)},52328:function(O,a,e){e.d(a,{C3:function(){return f},H9:function(){return x},Kp:function(){return E},R_:function(){return _},pw:function(){return b},r:function(){return M},vD:function(){return P}});var y=e(86848),u=e(57329),c=e(4046),v=e(79685),i=e(70585),d=e(1796),s=e(59750),l=e(1433),h=e.n(l);function E(t,m){(0,i.ZP)(t,"[@ant-design/icons] ".concat(m))}function M(t){return(0,u.Z)(t)==="object"&&typeof t.name=="string"&&typeof t.theme=="string"&&((0,u.Z)(t.icon)==="object"||typeof t.icon=="function")}function R(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(t).reduce(function(m,o){var n=t[o];switch(o){case"class":m.className=n,delete m.class;break;default:delete m[o],m[h()(o)]=n}return m},{})}function _(t,m,o){return o?v.createElement(t.tag,(0,y.Z)((0,y.Z)({key:m},R(t.attrs)),o),(t.children||[]).map(function(n,C){return _(n,"".concat(m,"-").concat(t.tag,"-").concat(C))})):v.createElement(t.tag,(0,y.Z)({key:m},R(t.attrs)),(t.children||[]).map(function(n,C){return _(n,"".concat(m,"-").concat(t.tag,"-").concat(C))}))}function b(t){return(0,c.generate)(t)[0]}function x(t){return t?Array.isArray(t)?t:[t]:[]}var P={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},r=`
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
`,f=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r,o=(0,v.useContext)(s.Z),n=o.csp;(0,v.useEffect)(function(){(0,d.hq)(m,"@ant-design-icons",{prepend:!0,csp:n})},[])}},80466:function(O,a,e){e.r(a);var y=e(88289),u=e.n(y),c=e(4125),v=e(79685),i=e(84298),d=e(9392),s=e(63342),l="\u57FA\u4E8E ant-design \u7684 React UI \u7EC4\u4EF6\u5E93\u3002 \u4E3B\u8981\u7528\u4E8E\u4E2D\uFF0C\u540E\u53F0\u4EA7\u54C1\u3002\u6211\u4EEC\u7684\u76EE\u6807\u662F\u6EE1\u8DB3\u66F4\u5177\u4F53\u7684\u4E1A\u52A1\u573A\u666F\u7EC4\u4EF6\u3002 \u5F53\u7136\uFF0C\u6211\u4EEC\u4E5F\u6709\u57FA\u4E8E\u539F\u751F javascript \u5B9E\u73B0\u7684\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u4F8B\u5982ContextMenu\uFF0CKeyEventListener\u7B49.";a.default=function(){return(0,s.jsxs)(c.default,{direction:"vertical",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(i.Z,{title:"\u4F7F\u7528 tooltip \u5BF9\u8C61",background:!1,size:"small"}),(0,s.jsx)(d.Z,{text:l,tooltip:{title:"\u4F7F\u7528 tooltip \u5BF9\u8C61\uFF0C\u590D\u5236\u8BE5\u6587\u672C"}}),(0,s.jsx)("p",{children:l})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(i.Z,{title:"\u4F7F\u7528 React.ReactNode",background:!1,size:"small"}),(0,s.jsx)(d.Z,{text:l,tooltip:"\u4F7F\u7528 React.ReactNode\uFF0C\u590D\u5236\u8BE5\u6587\u672C"}),(0,s.jsx)("p",{children:l})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(i.Z,{title:"\u4F7F\u7528 () => React.ReactNode",background:!1,size:"small"}),(0,s.jsx)(d.Z,{text:l,tooltip:function(){return"\u4F7F\u7528 () => React.ReactNode\uFF0C\u590D\u5236\u8BE5\u6587\u672C"}}),(0,s.jsx)("p",{children:l})]})]})}},53164:function(O,a,e){e.r(a);var y=e(79685),u=e(9392),c=e(63342),v="\u57FA\u4E8E ant-design \u7684 React UI \u7EC4\u4EF6\u5E93\u3002 \u4E3B\u8981\u7528\u4E8E\u4E2D\uFF0C\u540E\u53F0\u4EA7\u54C1\u3002\u6211\u4EEC\u7684\u76EE\u6807\u662F\u6EE1\u8DB3\u66F4\u5177\u4F53\u7684\u4E1A\u52A1\u573A\u666F\u7EC4\u4EF6\u3002 \u5F53\u7136\uFF0C\u6211\u4EEC\u4E5F\u6709\u57FA\u4E8E\u539F\u751F javascript \u5B9E\u73B0\u7684\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u4F8B\u5982ContextMenu\uFF0CKeyEventListener\u7B49.";a.default=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)(u.Z,{text:v,button:(0,c.jsx)("a",{children:"\u590D\u5236\u6587\u672C"})}),(0,c.jsx)("p",{children:v})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(u.Z,{text:v,button:(0,c.jsx)("a",{children:"\u590D\u5236\u6587\u672C"}),tooltip:!1}),(0,c.jsx)("p",{children:v})]})]})}},84298:function(O,a,e){e.d(a,{Z:function(){return m}});var y=e(80244),u=e(59058),c=e(5677),v=e.n(c),i=e(48651),d=e.n(i),s=e(86516),l=e.n(s),h=e(79685),E=e(25418),M=e(6513),R=e(68591),_=e.n(R),b=e(50475),x=e(63342);function P(o){return o.expand!==void 0}var r="dtc-block-header",f="".concat(r,"__title"),t=function(n){var C,g=n.title,D=n.description,p=D===void 0?"":D,T=n.tooltip,B=n.size,L=B===void 0?"middle":B,S=n.hasBottom,I=S===void 0?!1:S,K=n.spaceBottom,U=K===void 0?0:K,N=n.className,Z=N===void 0?"":N,F=n.style,G=F===void 0?{}:F,z=n.background,ne=z===void 0?!0:z,H=n.defaultExpand,V=H===void 0?!0:H,$=n.addonAfter,q=n.expand,Q=n.children,A=Q===void 0?"":Q,ee=n.addonBefore,J=ee===void 0?(0,x.jsx)("div",{className:"title__addon-before--".concat(L)}):ee,X=n.onExpand,Y=(0,h.useState)(V),te=l()(Y,2),ae=te[0],w=te[1],j=P(n)?q:ae,W=(0,b.Z)(T),k;I&&(k={marginBottom:16}),U&&(k={marginBottom:U});var oe=function(re){A&&(!P(n)&&w(re),X==null||X(re))};return(0,x.jsxs)("div",{className:_()("".concat(r),Z),style:d()(d()({},k),G),children:[(0,x.jsxs)("div",{className:_()(f,"".concat(f,"--").concat(L),(C={},v()(C,"".concat(f,"--background"),ne),v()(C,"".concat(f,"--pointer"),A),C)),onClick:function(){return oe(!j)},children:[(0,x.jsxs)("div",{className:"title__box",children:[J?(0,x.jsx)("div",{className:"title__addon-before",children:J}):null,(0,x.jsx)("div",{className:"title__text",children:g}),W!=null&&W.title?(0,x.jsx)("div",{className:"title__tooltip",children:(0,x.jsx)(u.default,d()(d()({},W),{},{children:(0,x.jsx)(E.Z,{})}))}):null,p?(0,x.jsx)("div",{className:"title__description",children:p}):null]}),$&&(0,x.jsx)("div",{className:"title__addon-after",children:$}),A&&(0,x.jsxs)("div",{className:"title__collapse",children:[(0,x.jsx)("div",{className:"collapse__text",children:j?"\u6536\u8D77":"\u5C55\u5F00"}),(0,x.jsx)(M.Z,{className:_()("collapse__icon",{"collapse__icon--up":j,"collapse__icon--down":!j})})]})]}),A&&(0,x.jsx)("div",{className:_()("".concat(r,"__content"),v()({},"".concat(r,"__content--active"),j)),children:A})]})},m=t},9392:function(O,a,e){e.d(a,{Z:function(){return f}});var y=e(48651),u=e.n(y),c=e(80244),v=e(59058),i=e(86516),d=e.n(i),s=e(71089),l=e(75020),h=e(79685),E=e(56415),M=e(68591),R=e.n(M),_=e(16777),b=e.n(_),x=e(50475),P=e(63342),r=function(m){var o=m.button,n=o===void 0?(0,P.jsx)(E.Z,{className:"dtc-copy__default-icon"}):o,C=m.text,g=m.tooltip,D=g===void 0?"\u590D\u5236":g,p=m.style,T=m.className,B=m.onCopy,L=B===void 0?function(){return l.default.success("\u590D\u5236\u6210\u529F")}:B,S=b()(),I=d()(S,2),K=I[0],U=I[1],N=function(){U(C),L(C)},Z=function(){return(0,P.jsx)("span",{className:R()(["dtc-copy",T]),style:p,onClick:function(){return N()},children:n})},F=(0,x.Z)(D);return(0,P.jsx)(v.default,u()(u()({},F),{},{children:Z()}))},f=r},50475:function(O,a,e){e.d(a,{Z:function(){return v}});var y=e(40765),u=e.n(y),c=e(79685);function v(i){return i!==null&&u()(i)==="object"&&!c.isValidElement(i)?i:{title:i}}},1246:function(O,a,e){e.r(a)},25208:function(O,a,e){e.r(a)},94784:function(O,a,e){var y=e(87476).default,u=e(80007).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=u(e(67002)),v=y(e(79685)),i=e(40784),d=function(){var l=v.useState(!1),h=(0,c.default)(l,2),E=h[0],M=h[1];return v.useEffect(function(){M((0,i.detectFlexGapSupported)())},[]),E};a.default=d},69107:function(O,a,e){var y=e(87476).default;Object.defineProperty(a,"__esModule",{value:!0}),a.cloneElement=i,a.isValidElement=void 0,a.replaceElement=v;var u=y(e(79685)),c=u.isValidElement;a.isValidElement=c;function v(d,s,l){return c(d)?u.cloneElement(d,typeof l=="function"?l(d.props||{}):l):s}function i(d,s){return v(d,d,s)}},40784:function(O,a,e){var y=e(80007).default;Object.defineProperty(a,"__esModule",{value:!0}),a.detectFlexGapSupported=a.canUseDocElement=void 0,Object.defineProperty(a,"isStyleSupport",{enumerable:!0,get:function(){return c.isStyleSupport}});var u=y(e(24061)),c=e(92307),v=function(){return(0,u.default)()&&window.document.documentElement};a.canUseDocElement=v;var i,d=function(){if(!v())return!1;if(i!==void 0)return i;var l=document.createElement("div");return l.style.display="flex",l.style.flexDirection="column",l.style.rowGap="1px",l.appendChild(document.createElement("div")),l.appendChild(document.createElement("div")),document.body.appendChild(l),i=l.scrollHeight===1,document.body.removeChild(l),i};a.detectFlexGapSupported=d},82562:function(O,a){Object.defineProperty(a,"__esModule",{value:!0}),a.tupleNum=a.tuple=void 0;var e=function(){for(var c=arguments.length,v=new Array(c),i=0;i<c;i++)v[i]=arguments[i];return v};a.tuple=e;var y=function(){for(var c=arguments.length,v=new Array(c),i=0;i<c;i++)v[i]=arguments[i];return v};a.tupleNum=y},71089:function(O,a,e){e(36226),e(1246)},68023:function(O,a,e){var y=e(87476).default,u=e(80007).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=s;var c=u(e(16327)),v=u(e(92107)),i=y(e(79685)),d=e(4125);function s(l){var h=l.className,E=l.direction,M=l.index,R=l.marginDirection,_=l.children,b=l.split,x=l.wrap,P=i.useContext(d.SpaceContext),r=P.horizontalSize,f=P.verticalSize,t=P.latestIndex,m=P.supportFlexGap,o={};return m||(E==="vertical"?M<t&&(o={marginBottom:r/(b?2:1)}):o=(0,v.default)((0,v.default)({},M<t&&(0,c.default)({},R,r/(b?2:1))),x&&{paddingBottom:f})),_==null?null:i.createElement(i.Fragment,null,i.createElement("div",{className:h,style:o},_),M<t&&b&&i.createElement("span",{className:"".concat(h,"-split"),style:o},b))}},4125:function(O,a,e){var y=e(87476).default,u=e(80007).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.SpaceContext=void 0;var c=u(e(92107)),v=u(e(16327)),i=u(e(67002)),d=u(e(68591)),s=u(e(1777)),l=y(e(79685)),h=e(98e3),E=u(e(94784)),M=u(e(68023)),R=function(f,t){var m={};for(var o in f)Object.prototype.hasOwnProperty.call(f,o)&&t.indexOf(o)<0&&(m[o]=f[o]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(f);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(f,o[n])&&(m[o[n]]=f[o[n]]);return m},_=l.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1});a.SpaceContext=_;var b={small:8,middle:16,large:24};function x(f){return typeof f=="string"?b[f]:f||0}var P=function(t){var m,o=l.useContext(h.ConfigContext),n=o.getPrefixCls,C=o.space,g=o.direction,D=t.size,p=D===void 0?(C==null?void 0:C.size)||"small":D,T=t.align,B=t.className,L=t.children,S=t.direction,I=S===void 0?"horizontal":S,K=t.prefixCls,U=t.split,N=t.style,Z=t.wrap,F=Z===void 0?!1:Z,G=R(t,["size","align","className","children","direction","prefixCls","split","style","wrap"]),z=(0,E.default)(),ne=l.useMemo(function(){return(Array.isArray(p)?p:[p,p]).map(function(j){return x(j)})},[p]),H=(0,i.default)(ne,2),V=H[0],$=H[1],q=(0,s.default)(L,{keepEmpty:!0}),Q=T===void 0&&I==="horizontal"?"center":T,A=n("space",K),ee=(0,d.default)(A,"".concat(A,"-").concat(I),(m={},(0,v.default)(m,"".concat(A,"-rtl"),g==="rtl"),(0,v.default)(m,"".concat(A,"-align-").concat(Q),Q),m),B),J="".concat(A,"-item"),X=g==="rtl"?"marginLeft":"marginRight",Y=0,te=q.map(function(j,W){j!=null&&(Y=W);var k=j&&j.key||"".concat(J,"-").concat(W);return l.createElement(M.default,{className:J,key:k,direction:I,index:W,marginDirection:X,split:U,wrap:F},j)}),ae=l.useMemo(function(){return{horizontalSize:V,verticalSize:$,latestIndex:Y,supportFlexGap:z}},[V,$,Y,z]);if(q.length===0)return null;var w={};return F&&(w.flexWrap="wrap",z||(w.marginBottom=-$)),z&&(w.columnGap=V,w.rowGap=$),l.createElement("div",(0,c.default)({className:ee,style:(0,c.default)((0,c.default)({},w),N)},G),l.createElement(_.Provider,{value:ae},te))},r=P;a.default=r},88289:function(O,a,e){e(36226),e(25208)},1777:function(O,a,e){var y=e(80007).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=v;var u=y(e(79685)),c=e(99403);function v(i){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=[];return u.default.Children.forEach(i,function(l){l==null&&!d.keepEmpty||(Array.isArray(l)?s=s.concat(v(l)):(0,c.isFragment)(l)&&l.props?s=s.concat(v(l.props.children,d)):s.push(l))}),s}},92307:function(O,a,e){var y=e(80007).default;Object.defineProperty(a,"__esModule",{value:!0}),a.isStyleSupport=i;var u=y(e(24061)),c=function(s){if((0,u.default)()&&window.document.documentElement){var l=Array.isArray(s)?s:[s],h=window.document.documentElement;return l.some(function(E){return E in h.style})}return!1},v=function(s,l){if(!c(s))return!1;var h=document.createElement("div"),E=h.style[s];return h.style[s]=l,h.style[s]!==E};function i(d,s){return!Array.isArray(d)&&s!==void 0?v(d,s):c(d)}},16777:function(O,a,e){var y=this&&this.__awaiter||function(r,f,t,m){return new(t||(t=Promise))(function(o,n){function C(p){try{D(m.next(p))}catch(T){n(T)}}function g(p){try{D(m.throw(p))}catch(T){n(T)}}function D(p){p.done?o(p.value):new t(function(T){T(p.value)}).then(C,g)}D((m=m.apply(r,f||[])).next())})},u=this&&this.__generator||function(r,f){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},m,o,n,C;return C={next:g(0),throw:g(1),return:g(2)},typeof Symbol=="function"&&(C[Symbol.iterator]=function(){return this}),C;function g(p){return function(T){return D([p,T])}}function D(p){if(m)throw new TypeError("Generator is already executing.");for(;t;)try{if(m=1,o&&(n=p[0]&2?o.return:p[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,p[1])).done)return n;switch(o=0,n&&(p=[p[0]&2,n.value]),p[0]){case 0:case 1:n=p;break;case 4:return t.label++,{value:p[1],done:!1};case 5:t.label++,o=p[1],p=[0];continue;case 7:p=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(p[0]===6||p[0]===2)){t=0;continue}if(p[0]===3&&(!n||p[1]>n[0]&&p[1]<n[3])){t.label=p[1];break}if(p[0]===6&&t.label<n[1]){t.label=n[1],n=p;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(p);break}n[2]&&t.ops.pop(),t.trys.pop();continue}p=f.call(r,t)}catch(T){p=[6,T],o=0}finally{m=n=0}if(p[0]&5)throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}},c=this&&this.__values||function(r){var f=typeof Symbol=="function"&&r[Symbol.iterator],t=0;return f?f.call(r):{next:function(){return r&&t>=r.length&&(r=void 0),{value:r&&r[t++],done:!r}}}},v=this&&this.__read||function(r,f){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var m=t.call(r),o,n=[],C;try{for(;(f===void 0||f-- >0)&&!(o=m.next()).done;)n.push(o.value)}catch(g){C={error:g}}finally{try{o&&!o.done&&(t=m.return)&&t.call(m)}finally{if(C)throw C.error}}return n},i=this;Object.defineProperty(a,"__esModule",{value:!0});var d=e(79685),s=function(r){return Object.prototype.hasOwnProperty.call(r,"clipboardData")},l=function(r){return s(r)?r.clipboardData:null},h=function(r){return typeof r=="object"&&typeof r.clipboard=="object"},E=new Error("NotAllowed"),M=function(r){for(var f,t,m=[],o=1;o<arguments.length;o++)m[o-1]=arguments[o];try{for(var n=c(m),C=n.next();!C.done;C=n.next()){var g=C.value;r.style.setProperty(g,"0")}}catch(D){f={error:D}}finally{try{C&&!C.done&&(t=n.return)&&t.call(n)}finally{if(f)throw f.error}}},R=function(){var r=document.createElement("textarea");return r.setAttribute("cols","0"),r.setAttribute("rows","0"),M(r,"border-width","bottom","margin-left","margin-top","outline-width","padding-bottom","padding-left","padding-right","padding-top","right"),r.style.setProperty("box-sizing","border-box"),r.style.setProperty("height","1px"),r.style.setProperty("margin-bottom","-1px"),r.style.setProperty("margin-right","-1px"),r.style.setProperty("max-height","1px"),r.style.setProperty("max-width","1px"),r.style.setProperty("min-height","1px"),r.style.setProperty("min-width","1px"),r.style.setProperty("outline-color","transparent"),r.style.setProperty("position","absolute"),r.style.setProperty("width","1px"),document.body.appendChild(r),r},_=function(r){r.parentNode.removeChild(r)},b=function(){var r=R();r.focus();var f=document.execCommand("paste");if(!f)throw _(r),E;var t=r.value;return _(r),t},x=function(r){var f=R();f.value=r,f.select();var t=document.execCommand("copy");if(_(f),!t)throw E},P=function(){var r=v(d.useState(""),2),f=r[0],t=r[1];d.useEffect(function(){if(h(navigator)){var o=function(C){var g=C.clipboardData,D=g||l(window)||null;if(D){var p=D.getData("text/plain");f!==p&&t(p)}};return navigator.clipboard.addEventListener("copy",o),navigator.clipboard.addEventListener("cut",o),function(){h(navigator)&&(navigator.clipboard.removeEventListener("copy",o),navigator.clipboard.removeEventListener("cut",o))}}var n=function(){try{var C=document.getSelection();C&&t(C.toString())}catch(g){}};return document.addEventListener("copy",n),document.addEventListener("cut",n),function(){document.removeEventListener("copy",n),document.removeEventListener("cut",n)}},[f]);var m=d.useCallback(function(o){return y(i,void 0,void 0,function(){var n,C;return u(this,function(g){switch(g.label){case 0:return g.trys.push([0,1,,6]),x(o),t(o),[3,6];case 1:if(n=g.sent(),!h(navigator))return[3,5];g.label=2;case 2:return g.trys.push([2,4,,5]),[4,navigator.clipboard.writeText(o)];case 3:return g.sent(),t(o),[3,5];case 4:return C=g.sent(),[3,5];case 5:return[3,6];case 6:return[2]}})})},[]);return d.useLayoutEffect(function(){try{var o=b();f!==o&&t(o)}catch(n){h(navigator)&&function(){return y(i,void 0,void 0,function(){var C,g;return u(this,function(D){switch(D.label){case 0:return D.trys.push([0,2,,3]),[4,navigator.clipboard.readText()];case 1:return C=D.sent(),f!==C&&t(C),[3,3];case 2:return g=D.sent(),[3,3];case 3:return[2]}})})}()}},[f]),[f,m]};a.default=P,O.exports=P,O.exports.default=P}}]);

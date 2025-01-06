(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[1031],{30527:function(m,u,n){"use strict";var s=n(2595),e=n(41171),r=n(22481),i=n(51282),a=n(50959),l=n(84875),_=n.n(l),C=n(65911),y=n(41483),o=n(61257),E=n(29360),I=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];(0,o.U)("#1890ff");var g=a.forwardRef(function(f,v){var D,h=f.className,O=f.icon,t=f.spin,c=f.rotate,T=f.tabIndex,P=f.onClick,L=f.twoToneColor,b=(0,i.Z)(f,I),U=a.useContext(C.Z),W=U.prefixCls,R=W===void 0?"anticon":W,M=U.rootClassName,B=_()(M,R,(D={},(0,r.Z)(D,"".concat(R,"-").concat(O.name),!!O.name),(0,r.Z)(D,"".concat(R,"-spin"),!!t||O.name==="loading"),D),h),d=T;d===void 0&&P&&(d=-1);var N=c?{msTransform:"rotate(".concat(c,"deg)"),transform:"rotate(".concat(c,"deg)")}:void 0,A=(0,E.H9)(L),p=(0,e.Z)(A,2),x=p[0],Z=p[1];return a.createElement("span",(0,s.Z)((0,s.Z)({role:"img","aria-label":O.name},b),{},{ref:v,tabIndex:d,onClick:P,className:B}),a.createElement(y.Z,{icon:O,primaryColor:x,secondaryColor:Z,style:N}))});g.displayName="AntdIcon",g.getTwoToneColor=o.m,g.setTwoToneColor=o.U,u.Z=g},65911:function(m,u,n){"use strict";var s=n(50959),e=(0,s.createContext)({});u.Z=e},41483:function(m,u,n){"use strict";var s=n(51282),e=n(2595),r=n(29360),i=["icon","className","onClick","style","primaryColor","secondaryColor"],a={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function l(y){var o=y.primaryColor,E=y.secondaryColor;a.primaryColor=o,a.secondaryColor=E||(0,r.pw)(o),a.calculated=!!E}function _(){return(0,e.Z)({},a)}var C=function(o){var E=o.icon,I=o.className,g=o.onClick,f=o.style,v=o.primaryColor,D=o.secondaryColor,h=(0,s.Z)(o,i),O=a;if(v&&(O={primaryColor:v,secondaryColor:D||(0,r.pw)(v)}),(0,r.C3)(),(0,r.Kp)((0,r.r)(E),"icon should be icon definiton, but got ".concat(E)),!(0,r.r)(E))return null;var t=E;return t&&typeof t.icon=="function"&&(t=(0,e.Z)((0,e.Z)({},t),{},{icon:t.icon(O.primaryColor,O.secondaryColor)})),(0,r.R_)(t.icon,"svg-".concat(t.name),(0,e.Z)({className:I,onClick:g,style:f,"data-icon":t.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},h))};C.displayName="IconReact",C.getTwoToneColors=_,C.setTwoToneColors=l,u.Z=C},61257:function(m,u,n){"use strict";n.d(u,{U:function(){return i},m:function(){return a}});var s=n(41171),e=n(41483),r=n(29360);function i(l){var _=(0,r.H9)(l),C=(0,s.Z)(_,2),y=C[0],o=C[1];return e.Z.setTwoToneColors({primaryColor:y,secondaryColor:o})}function a(){var l=e.Z.getTwoToneColors();return l.calculated?[l.primaryColor,l.secondaryColor]:l.primaryColor}},71189:function(m,u,n){"use strict";n.d(u,{Z:function(){return _}});var s=n(2595),e=n(50959),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},i=r,a=n(30527),l=function(y,o){return e.createElement(a.Z,(0,s.Z)((0,s.Z)({},y),{},{ref:o,icon:i}))};l.displayName="QuestionCircleOutlined";var _=e.forwardRef(l)},29360:function(m,u,n){"use strict";n.d(u,{C3:function(){return O},H9:function(){return v},Kp:function(){return o},R_:function(){return g},pw:function(){return f},r:function(){return E},vD:function(){return D}});var s=n(2595),e=n(69947),r=n(56088),i=n(50959),a=n(61838),l=n(92151),_=n(65911),C=n(47638),y=n.n(C);function o(t,c){(0,a.ZP)(t,"[@ant-design/icons] ".concat(c))}function E(t){return(0,e.Z)(t)==="object"&&typeof t.name=="string"&&typeof t.theme=="string"&&((0,e.Z)(t.icon)==="object"||typeof t.icon=="function")}function I(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(t).reduce(function(c,T){var P=t[T];switch(T){case"class":c.className=P,delete c.class;break;default:delete c[T],c[y()(T)]=P}return c},{})}function g(t,c,T){return T?i.createElement(t.tag,(0,s.Z)((0,s.Z)({key:c},I(t.attrs)),T),(t.children||[]).map(function(P,L){return g(P,"".concat(c,"-").concat(t.tag,"-").concat(L))})):i.createElement(t.tag,(0,s.Z)({key:c},I(t.attrs)),(t.children||[]).map(function(P,L){return g(P,"".concat(c,"-").concat(t.tag,"-").concat(L))}))}function f(t){return(0,r.generate)(t)[0]}function v(t){return t?Array.isArray(t)?t:[t]:[]}var D={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},h=`
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
`,O=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:h,T=(0,i.useContext)(_.Z),P=T.csp;(0,i.useEffect)(function(){(0,l.hq)(c,"@ant-design-icons",{prepend:!0,csp:P})},[])}},62444:function(m,u,n){"use strict";n.r(u);var s=n(50959),e=n(23217),r=n(11527),i=[{dataIndex:"name",title:"Name",tooltip:"This is Name!"},{dataIndex:"age",title:"Age",tooltip:{icon:(0,r.jsx)("span",{children:"\u2753"}),title:"This is Age!",color:"pink"}},{dataIndex:"address",title:"Address"}],a=[{id:1,name:"ZhangSan",age:17,address:"New York No. 1 Lake Park"},{id:2,name:"LiSi",age:17,address:"Bei Jing No. 1 Lake Park"},{id:3,name:"WangWu",age:17,address:"Zhe Jiang No. 1 Lake Park"}];u.default=function(){return(0,r.jsx)(e.Z,{rowKey:"id",columns:i,dataSource:a})}},23217:function(m,u,n){"use strict";n.d(u,{Z:function(){return B}});var s=n(57213),e=n.n(s),r=n(82548),i=n(58570),a=n(12342),l=n.n(a),_=n(37635),C=n.n(_),y=n(40591),o=n(19888),E=n(50959),I=n(71189),g=n(84875),f=n.n(g),v=n(11527),D=["icon"],h=["columns","className"],O=o.Z.SELECTION_COLUMN,t=o.Z.EXPAND_COLUMN,c=o.Z.SELECTION_ALL,T=o.Z.SELECTION_INVERT,P=o.Z.SELECTION_NONE,L=o.Z.Column,b=o.Z.ColumnGroup;function U(d){return d?C()(d)==="object"&&!E.isValidElement(d)?d:{title:d}:null}function W(d){return d!=null&&d.length?d.map(function(N){var A=N.tooltip,p=N.title,x=U(A),Z=null;if(x){var S,K=x.icon,j=K===void 0?(0,v.jsx)(I.Z,{}):K,z=l()(x,D);Z=(0,v.jsx)(i.default,e()(e()({},z),{},{children:E.cloneElement(j,{className:"dtc-table__tooltip ".concat(((S=j.props)===null||S===void 0?void 0:S.className)||"")})}))}var Q=(0,v.jsxs)(v.Fragment,{children:[p,Z]});return e()(e()({},N),{},{title:Q})}):[]}function R(d,N){var A=d.columns,p=d.className,x=l()(d,h),Z=(0,E.useMemo)(function(){return W(A)},[A]);return(0,v.jsx)(o.Z,e()(e()({},x),{},{className:f()(["dtc-table",p]),columns:Z,ref:N}))}var M=(0,E.forwardRef)(R);M.SELECTION_COLUMN=O,M.EXPAND_COLUMN=t,M.SELECTION_ALL=c,M.SELECTION_INVERT=T,M.SELECTION_NONE=P,M.Column=L,M.ColumnGroup=b,M.Summary=o.Z.Summary;var B=M},12342:function(m,u,n){var s=n(20006);function e(r,i){if(r==null)return{};var a=s(r,i),l,_;if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(r);for(_=0;_<C.length;_++)l=C[_],!(i.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(r,l)&&(a[l]=r[l])}return a}m.exports=e,m.exports.__esModule=!0,m.exports.default=m.exports},20006:function(m){function u(n,s){if(n==null)return{};var e={},r=Object.keys(n),i,a;for(a=0;a<r.length;a++)i=r[a],!(s.indexOf(i)>=0)&&(e[i]=n[i]);return e}m.exports=u,m.exports.__esModule=!0,m.exports.default=m.exports}}]);

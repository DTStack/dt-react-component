(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[5322],{2845:function(o,d,t){"use strict";t.r(d);var m=t(79685),c=t(15622),n=t(63342);d.default=function(){return(0,n.jsx)(c.Z,{columns:["name","gender","age","address"],data:[["zhangsan","male","20","xihu"],["lisi","male","18","yuhang"],["   \u524D\u9762\u6709\u7A7A\u683C","\u540E\u9762\u6709\u7A7A\u683C   ","\u4E2D\u95F4\u6709  \u7A7A \u683C","yuhang"]],options:{trimWhitespace:!1}})}},15622:function(o,d,t){"use strict";t.d(d,{Z:function(){return w}});var m=t(48651),c=t.n(m),n=t(70300),u=t.n(n),s=t(38046),f=t.n(s),l=t(79685),C=t(29520),I=t(15567),N=t(68591),L=t.n(N),tt=t(12056),et=t(64064),U=t(63342),B=["showCopyWithHeader"],K=(0,l.forwardRef)(function(g,Z){var h=g.data,E=g.columns,e=E===void 0?[]:E,X=g.className,k=g.options,H=g.columnTypes,j=H===void 0?[]:H,x=(0,l.useRef)(null),F=new C.X0,S=(0,l.useRef)(),T=k||{},G=T.showCopyWithHeader,J=f()(T,B);(0,l.useImperativeHandle)(Z,function(){return{tableRef:x}}),(0,l.useEffect)(function(){return x.current&&(A(),S.current=setTimeout(function(){x.current.hotInstance.render()},100)),function(){A()}},[h,e]);var A=function(){clearTimeout(S.current)},Q=function(){var a,r=h;if(!((a=r)!==null&&a!==void 0&&a.length)){var i=new Array(e.length).fill("",0,e.length);i[0]="\u6682\u65E0\u6570\u636E",r=[i]}return r},V=function(){if(!(h!=null&&h.length))return[{row:0,col:0,rowspan:1,colspan:e.length}]},Y=function(){if(!h||!h.length)return[{row:0,col:0,className:"htCenter htMiddle"}]},O=function(a){var r=a.map(function(i){return i.join("	")}).join(`
`);return F.copy(r),!1},q=function(){var a={copy:{name:"\u590D\u5236",callback:function(b){var v=this.getSelected(),y=this.getData.apply(this,v[0]);O(y)}}};if(G){var r={name:"\u590D\u5236\u503C\u4EE5\u53CA\u5217\u540D",callback:function(b,v){var y,D,M,P,_=this.getSelected(),R=this.getData.apply(this,_[0]),$=v==null||(y=v[0])===null||y===void 0||(D=y.start)===null||D===void 0?void 0:D.col,z=v==null||(M=v[0])===null||M===void 0||(P=M.end)===null||P===void 0?void 0:P.col,W;$!==void 0&&z!==void 0&&(W=e.slice($,z+1)),W&&(R=[W].concat(u()(R))),O(R)}};a.cut=r}return{items:a}};return(0,U.jsx)(I.HotTable,c()({ref:x,className:L()("dtc-handsontable-no-border",X),language:"zh-CN",colHeaders:function(a){var r;if(!(e!=null&&e.length))return!1;var i=j==null||(r=j[a])===null||r===void 0?void 0:r.type,b=i?"".concat(e==null?void 0:e[a],": ").concat(i):e==null?void 0:e[a];return'<span title="'.concat(b,'">').concat(b,"</span>")},data:Q(),mergeCells:V(),cell:Y(),readOnly:!0,rowHeaders:!0,fillHandle:!1,manualRowResize:!0,manualColumnResize:!0,autoColumnSize:!0,colWidths:200,beforeCopy:O,beforeCut:function(){return!1},columnHeaderHeight:25,contextMenu:q(),stretchH:"all"},J))}),w=K},38046:function(o,d,t){var m=t(87140);function c(n,u){if(n==null)return{};var s=m(n,u),f,l;if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(n);for(l=0;l<C.length;l++)f=C[l],!(u.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(n,f)&&(s[f]=n[f])}return s}o.exports=c,o.exports.__esModule=!0,o.exports.default=o.exports},87140:function(o){function d(t,m){if(t==null)return{};var c={},n=Object.keys(t),u,s;for(s=0;s<n.length;s++)u=n[s],!(m.indexOf(u)>=0)&&(c[u]=t[u]);return c}o.exports=d,o.exports.__esModule=!0,o.exports.default=o.exports}}]);
(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[5322],{66045:function(t,r,e){"use strict";e.r(r);var d=e(50959),o=e(5852),a=e(11527);r.default=function(){return(0,a.jsx)(o.Z,{columns:["name","gender","age","address"],data:[["zhangsan","male","20","xihu"],["lisi","male","18","yuhang"],["   \u524D\u9762\u6709\u7A7A\u683C","\u540E\u9762\u6709\u7A7A\u683C   ","\u4E2D\u95F4\u6709  \u7A7A \u683C","yuhang"]],options:{trimWhitespace:!1}})}},5852:function(t,r,e){"use strict";e.d(r,{Z:function(){return J}});var d=e(77117),o=e.n(d),a=e(67855),i=e.n(a),u=e(95530),c=e.n(u),v=e(50959),b=e(47326),z=e(84875),N=e.n(z),re=e(26037),U=e(15033),F=e.n(U),$=e(96345),B=e.n($),K=e(21320),T=e.n(K),Z=function(){function h(){F()(this,h),T()(this,"fakeHandlerCallback",void 0),T()(this,"fakeHandler",null),T()(this,"fakeElem",void 0)}return B()(h,[{key:"copy",value:function(l,y){var n=this;this.removeFake(),this.fakeHandlerCallback=function(){return n.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback),this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style.left="-9999px";var A=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top="".concat(A,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=l,document.body.appendChild(this.fakeElem),this.fakeElem.select(),this.copyText(y)}},{key:"removeFake",value:function(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"copyText",value:function(l){var y;try{y=document.execCommand("copy")}catch(n){y=!1}l&&l(y)}}]),h}(),oe=e(26889),Y=e(11527),w=["showCopyWithHeader"],G=(0,v.forwardRef)(function(h,k){var l=h.data,y=h.columns,n=y===void 0?[]:y,A=h.className,Q=h.options,O=h.columnTypes,j=O===void 0?[]:O,E=(0,v.useRef)(null),V=new Z,W=(0,v.useRef)(),D=Q||{},X=D.showCopyWithHeader,q=c()(D,w);(0,v.useImperativeHandle)(k,function(){return{tableRef:E}}),(0,v.useEffect)(function(){return E.current&&(R(),W.current=setTimeout(function(){E.current.hotInstance.render()},100)),function(){R()}},[l,n]);var R=function(){clearTimeout(W.current)},_=function(){var s,f=l;if(!((s=f)!==null&&s!==void 0&&s.length)){var p=new Array(n.length).fill("",0,n.length);p[0]="\u6682\u65E0\u6570\u636E",f=[p]}return f},ee=function(){if(!(l!=null&&l.length))return[{row:0,col:0,rowspan:1,colspan:n.length}]},te=function(){if(!l||!l.length)return[{row:0,col:0,className:"htCenter htMiddle"}]},M=function(s){var f=s.map(function(p){return p.join("	")}).join(`
`);return V.copy(f),!1},ae=function(){var s={copy:{name:"\u590D\u5236",callback:function(H){var m=this.getSelected(),C=this.getData.apply(this,m[0]);M(C)}}};if(X){var f={name:"\u590D\u5236\u503C\u4EE5\u53CA\u5217\u540D",callback:function(H,m){var C,g,ne=this.getSelected(),P=this.getData.apply(this,ne[0]),I=m==null||(C=m[0])===null||C===void 0||(C=C.start)===null||C===void 0?void 0:C.col,L=m==null||(g=m[0])===null||g===void 0||(g=g.end)===null||g===void 0?void 0:g.col,S;I!==void 0&&L!==void 0&&(S=n.slice(I,L+1)),S&&(P=[S].concat(i()(P))),M(P)}};s.cut=f}return{items:s}};return(0,Y.jsx)(b.HotTable,o()({ref:E,className:N()("dtc-handsontable-no-border",A),language:"zh-CN",colHeaders:function(s){var f;if(!(n!=null&&n.length))return!1;var p=j==null||(f=j[s])===null||f===void 0?void 0:f.type,H=p?"".concat(n==null?void 0:n[s],": ").concat(p):n==null?void 0:n[s];return'<span title="'.concat(H,'">').concat(H,"</span>")},data:_(),mergeCells:ee(),cell:te(),readOnly:!0,rowHeaders:!0,fillHandle:!1,manualRowResize:!0,manualColumnResize:!0,autoColumnSize:!0,colWidths:200,beforeCopy:M,beforeCut:function(){return!1},columnHeaderHeight:25,contextMenu:ae(),stretchH:"all"},q))}),J=G},25171:function(t,r,e){var d=e(91182);function o(a){if(Array.isArray(a))return d(a)}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},29673:function(t){function r(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},5576:function(t){function r(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},95530:function(t,r,e){var d=e(70285);function o(a,i){if(a==null)return{};var u=d(a,i),c,v;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(a);for(v=0;v<b.length;v++)c=b[v],!(i.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(u[c]=a[c])}return u}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},70285:function(t){function r(e,d){if(e==null)return{};var o={},a=Object.keys(e),i,u;for(u=0;u<a.length;u++)i=a[u],!(d.indexOf(i)>=0)&&(o[i]=e[i]);return o}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},67855:function(t,r,e){var d=e(25171),o=e(29673),a=e(61533),i=e(5576);function u(c){return d(c)||o(c)||a(c)||i()}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports}}]);

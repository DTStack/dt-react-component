"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[2019],{98151:function(Pe,R,e){e.r(R);var Ce=e(80244),ee=e.n(Ce),K=e(59058),z=e(79685),s=e(94046),C=e(39087),l=e(70730),a=e(13301),O=e(24425),I=e(63342);R.default=function(){return(0,I.jsx)(a.Z,{style:{height:400},config:{tooltips:!0,highlight:!0},graphData:[{taskId:"test-1",taskName:"\u4F60\u597D-1",childNode:[{taskId:"test-11",taskName:"\u4F60\u597D-11",childNode:[]},{taskId:"test-12",taskName:"\u4F60\u597D-12",childNode:[{taskId:"test-21",taskName:"\u4F60\u597D-21",childNode:[{taskId:"test-31",taskName:"\u4F60\u597D-31",childNode:[]}]}]}]}],onDrawVertex:function(){return"whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;"},onRenderActions:function(j){return(0,I.jsxs)("div",{style:{display:"grid",gridGap:5,gridTemplateColumns:"15px 15px"},children:[(0,I.jsx)(K.default,{title:"\u653E\u5927",children:(0,I.jsx)(C.Z,{onClick:function(){return j.zoomIn()}})}),(0,I.jsx)(K.default,{title:"\u7F29\u5C0F",children:(0,I.jsx)(l.Z,{onClick:function(){return j.zoomOut()}})})]})},onRenderCell:function(j){if(j.vertex&&j.value){var W=j.value;if(W)return s.renderToString((0,I.jsxs)("div",{children:[(0,I.jsx)("span",{children:W.taskName}),(0,I.jsx)("br",{}),(0,I.jsx)("span",{children:W.taskId})]}))}return""},onRenderTooltips:function(j){return j.vertex&&j.value?j.value.taskName:""}})}},70154:function(Pe,R,e){e.r(R);var Ce=e(79685),ee=e(94046),K=e(13301),z=e(24425),s=e(63342);R.default=function(){return(0,s.jsx)(K.Z,{style:{height:400},config:{tooltips:!1,highlight:!0},graphData:[{taskId:"test-1",taskName:"\u4F60\u597D-1",taskType:1,childNode:[{taskId:"test-11",taskName:"\u4F60\u597D-11",taskType:2,childNode:[]},{taskId:"test-12",taskName:"\u4F60\u597D-12",taskType:3,childNode:[{taskId:"test-21",taskName:"\u4F60\u597D-21",taskType:4,childNode:[{taskId:"test-31",taskName:"\u4F60\u597D-31",taskType:5,childNode:[]}]}]}]}],onDrawVertex:function(l){var a=["#fffbe6","#e6f6ff","#f5ffe6","#fff1f0","#e6e9f2"],O=["#fdb313","#3f87ff","#12bc6a","#fe615c","#5b6da6"];return"whiteSpace=wrap;fillColor="+a[l.taskType-1]+";strokeColor="+O[l.taskType-1]+";"},onContextMenu:function(l,a){var O=["\u6267\u884C\u4E2D","\u90E8\u7F72\u4E2D","\u53D6\u6D88\u4E2D","\u8FD0\u884C\u6210\u529F","\u8FD0\u884C\u5931\u8D25"];return a.vertex?[{id:"operation",title:O[l.taskType-1],callback:function(){alert("\u5F53\u524D vertex \u5904\u4E8E"+O[l.taskType-1])}},{id:"remove",title:"\u5220\u9664\u5F53\u524D\u8282\u70B9",callback:function(){console.log("\u5220\u9664")}}]:[{id:"remove",title:"\u5220\u9664\u8FDE\u7EBF",callback:function(){console.log("\u5220\u9664")}}]},onRenderCell:function(l){if(l.vertex&&l.value){var a=l.value;if(a)return ee.renderToString((0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:a.taskName}),(0,s.jsx)("br",{}),(0,s.jsx)("span",{children:a.taskId})]}))}return""}})}},12463:function(Pe,R,e){e.r(R);var Ce=e(79685),ee=e(94046),K=e(13301),z=e(24425),s=e(63342);R.default=function(){return(0,s.jsx)(K.Z,{enableDrag:!0,style:{height:400},config:{tooltips:!1,connectable:!0,highlight:!0},graphData:[{taskId:"test-1",taskName:"\u4F60\u597D-1",taskType:1,childNode:[{taskId:"test-11",taskName:"\u4F60\u597D-11",taskType:2,childNode:[]},{taskId:"test-12",taskName:"\u4F60\u597D-12",taskType:3,childNode:[{taskId:"test-21",taskName:"\u4F60\u597D-21",taskType:4,childNode:[{taskId:"test-31",taskName:"\u4F60\u597D-31",taskType:5,childNode:[]}]}]}]}],onDropWidgets:function(l,a,O,I,b){console.group("onDropWidgets"),console.log("node:",l),console.log("graph:",a),console.log("target:",O),console.log("x and y:",I,b),console.groupEnd();var j="randomId__"+new Date().valueOf();a.insertVertex(a.getDefaultParent(),j,{taskName:l.innerText,taskId:j},I,b,210,50,"whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;")},onCellsChanged:function(l){console.group("onCellsChanged"),console.log("cell:",l),console.groupEnd()},onDrawVertex:function(){return"whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;"},onRenderCell:function(l){if(l.vertex&&l.value){var a=l.value;if(a)return ee.renderToString((0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:a.taskName}),(0,s.jsx)("br",{}),(0,s.jsx)("span",{children:a.taskId})]}))}return""},onGetPreview:function(l){var a=document.createElement("div");return a.style.width="210px",a.style.height="50px",a.style.border="1px solid #ddd",a.style.textAlign="center",a.dataset.name=l.innerText,a.innerHTML=ee.renderToString((0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{children:"\u65B0\u8282\u70B9"}),(0,s.jsx)("br",{}),(0,s.jsx)("span",{children:l.innerText})]})),a},onRenderWidgets:function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{height:20,background:"#ddd"},children:"\u62D6\u62FD\u7EC4\u4EF6"}),(0,s.jsxs)("ul",{style:{listStyle:"none",margin:0,padding:0},children:[(0,s.jsx)("li",{className:K.Y+"__",style:{cursor:"move",margin:"5px 0"},children:"\u4F60\u597D1"}),(0,s.jsx)("li",{className:K.Y+"__",style:{cursor:"move",margin:"5px 0"},children:"\u4F60\u597D2"}),(0,s.jsx)("li",{className:K.Y+"__",style:{cursor:"move",margin:"5px 0"},children:"\u4F60\u597D3"}),(0,s.jsx)("li",{className:K.Y+"__",style:{cursor:"move",margin:"5px 0"},children:"\u4F60\u597D4"})]})]})}})}},80490:function(Pe,R,e){e.r(R);var Ce=e(79685),ee=e(94046),K=e(13301),z=e(24425),s=e(63342);R.default=function(){return(0,s.jsx)(K.Z,{style:{height:400},config:{tooltips:!1,highlight:!0},graphData:[{taskId:"test-1",taskName:"\u4F60\u597D-1",taskType:1,childNode:[{taskId:"test-11",taskName:"\u4F60\u597D-11",taskType:2,childNode:[]},{taskId:"test-12",taskName:"\u4F60\u597D-12",taskType:3,childNode:[{taskId:"test-21",taskName:"\u4F60\u597D-21",taskType:4,childNode:[{taskId:"test-31",taskName:"\u4F60\u597D-31",taskType:5,childNode:[]}]}]}]}],onClick:function(l,a,O){console.group("onClick"),console.log("\u5F53\u524D\u70B9\u51FB\u7684 cell \u662F:",l),console.log("\u5F53\u524D\u70B9\u51FB\u7684 graph \u662F:",a),console.log("\u5F53\u524D\u70B9\u51FB\u7684 dom \u662F:",O.target),console.groupEnd()},onDoubleClick:function(l,a,O){console.group("onDoubleClick"),console.log("\u5F53\u524D\u70B9\u51FB\u7684 cell \u662F:",l),console.log("\u5F53\u524D\u70B9\u51FB\u7684 graph \u662F:",a),console.log("\u5F53\u524D\u70B9\u51FB\u7684 dom \u662F:",O.target),console.groupEnd()},onContainerChanged:function(l){console.group("onContainerChanged"),console.log(l),console.groupEnd()},onKeyDown:function(){return[{id:"remove",method:"bindControlKey",keyCode:8,func:function(){alert("\u5220\u9664")}}]},onContextMenu:function(){return[{id:"remove",title:"\u5220\u9664"}]},onDrawVertex:function(){return"whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;"},onRenderCell:function(l){if(l.vertex&&l.value){var a=l.value;if(a)return ee.renderToString((0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:a.taskName}),(0,s.jsx)("br",{}),(0,s.jsx)("span",{children:a.taskId})]}))}return""}})}},67123:function(Pe,R,e){e.r(R);var Ce=e(70300),ee=e.n(Ce),K=e(48651),z=e.n(K),s=e(5677),C=e.n(s),l=e(86516),a=e.n(l),O=e(79685),I=e(94046),b=e(13301),j=e(24425),W=e(63342);R.default=function(){var be=(0,O.useState)(!1),Le=a()(be,2),_=Le[0],te=Le[1],Re=(0,O.useState)("b"),De=a()(Re,2),Ee=De[0],oe=De[1],ue=(0,O.useState)([{metaId:"1",metaInfo:{name:"tableName",type:1,list:["a","b","c","d"]},childNode:[{metaId:"2",metaInfo:{name:"tableName",type:2,list:["1-c"]}},{metaId:"3",metaInfo:{name:"tableName",type:2,list:["1-c"]}}]}]),V=a()(ue,2),A=V[0],Oe=V[1],ne=function(f){return f.metaId==="1"?{width:194,height:120}:{width:196,height:54}};return(0,W.jsx)(b.Z,{direction:"west",loading:_,style:{height:400},vertexSize:{width:196,height:54},config:{tooltips:!1,connectable:!1,highlight:!1,vertexMovable:!1,defaultEdgeStyle:function(f){var y,T=f.mxConstants,M=f.mxEdgeStyle;return y={},C()(y,T.STYLE_ROUNDED,1),C()(y,T.STYLE_CURVED,0),C()(y,T.STYLE_EDGE,M.EntityRelation),y},getPortOffset:function(f,y){var T=f[y?"visibleSourceState":"visibleTargetState"].text.node.querySelectorAll("div")[1],M=T.querySelector("li[data-id="+Ee+"]")||T.querySelector("li");return M}},vertexKey:"metaId",onClick:function(f,y,T){f.value.metaId==="1"&&(te(!0),setTimeout(function(){var M,ie=[z()(z()({},A[0]),{},{childNode:[],parentNode:[]})],le=Math.random()>.5?"childNode":"parentNode",we=Math.floor(Math.random()*5+1);(M=ie[0][le]).push.apply(M,ee()(new Array(we).fill({}).map(function(Ne,Be){return{metaId:"1-"+Be,metaInfo:{name:"tableName",type:2,list:["1-c"]}}})));var ce=T.target;oe(ce.dataset.id),Oe(ie),te(!1)},300))},onGetSize:ne,graphData:A,onDrawVertex:function(){return"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;"},onDrawEdge:function(){return"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;"},onRenderCell:function(f){if(f.vertex&&f.value){var y=f.value;if(y){var T=ne(y);return I.renderToString((0,W.jsxs)("div",{style:{overflow:"hidden",width:T.width,height:T.height},children:[y.metaInfo.name,(0,W.jsx)("hr",{style:{borderTop:"1px solid #ddd",margin:0}}),(0,W.jsx)("div",{style:{width:"100%",overflow:"auto"},children:(0,W.jsx)("ul",{style:{listStyle:"none",margin:0,padding:0},children:y.metaInfo.list.map(function(M){return(0,W.jsx)("li",{"data-id":M,style:{height:20,borderBottom:"1px solid #ddd",background:Ee===M?"red":"transparent"},children:M},M)})})})]}))}}return""}})}},33392:function(Pe,R,e){e.r(R),e.d(R,{default:function(){return te}});var Ce=e(71089),ee=e(75020),K=e(80244),z=e(59058),s=e(5677),C=e.n(s),l=e(70300),a=e.n(l),O=e(86516),I=e.n(O),b=e(79685),j=e(94046),W=e(13301),be=[{metaId:"test-1",metaInfo:{name:"tableName",type:1},childNode:[{metaId:"test-2",metaInfo:{name:"tableName2",type:2}},{metaId:"test-3",metaInfo:{name:"tableName3",type:2}},{metaId:"test-4",metaInfo:{name:"tableName4",type:2}},{metaId:"test-5",metaInfo:{name:"tableName5",type:2}}],parentNode:[{metaId:"test-6",metaInfo:{name:"tableName6",type:3}},{metaId:"test-7",metaInfo:{name:"tableName7",type:3}},{metaId:"test-8",metaInfo:{name:"tableName8",type:3}},{metaId:"test-9",metaInfo:{name:"tableName9",type:3}}]}],Le=e(24425),_=e(63342),te=function(){var Re=(0,b.useState)(!1),De=I()(Re,2),Ee=De[0],oe=De[1],ue=(0,b.useState)(a()(be)),V=I()(ue,2),A=V[0],Oe=V[1];return(0,_.jsx)(W.Z,{direction:"west",loading:Ee,style:{height:300},vertexSize:{width:196,height:54},config:{tooltips:!1,connectable:!1,highlight:!1,toolbarStyle:{bottom:100,right:0,top:"initial"},defaultEdgeStyle:function(u){var f,y=u.mxConstants,T=u.mxEdgeStyle;return f={},C()(f,y.STYLE_ROUNDED,1),C()(f,y.STYLE_CURVED,0),C()(f,y.STYLE_EDGE,T.EntityRelation),f}},vertexKey:"metaId",onContextMenu:function(u,f){return f.vertex?[{id:"insert",title:"\u63D2\u5165"},{id:"remove",title:"\u5220\u9664"}]:[]},onClick:function(u,f,y){var T=y.target;T.closest(".loadData")&&(oe(!0),setTimeout(function(){Oe(function(M){for(var ie=a()(M);ie.length;){var le=ie.pop();if(le.metaId===u.value.metaId){var we="randomId__"+new Date().valueOf(),ce=u.value.metaInfo.type===2?"childNode":"parentNode";le[ce]=le[ce]||[],le[ce].push({metaId:we,metaInfo:{name:we+"tableName",type:le.metaInfo.type}});break}ie.push.apply(ie,a()(le.childNode||[])),ie.push.apply(ie,a()(le.parentNode||[]))}return a()(M)}),oe(!1)},300))},graphData:A,onDrawVertex:function(u){return["","whiteSpace=wrap;fillColor=#ffffff;strokeColor=#3F87FF;","whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;","whiteSpace=wrap;fillColor=#ffffff;strokeColor=#26D6AE;"][u.metaInfo.type]},onDrawEdge:function(u,f){return u.value.metaInfo.type===3?"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#26D6AE;":f.value.metaInfo.type===2?"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;":"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#3F87FF;"},onRenderActions:function(u,f){var y=f.mxOutline;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,_.jsx)("button",{onClick:function(){return u.center(!0,!0)},children:(0,_.jsx)(z.default,{title:"\u5C45\u4E2D",children:"center"})}),(0,_.jsx)("button",{onClick:function(){return ee.default.success("download successfully")},children:(0,_.jsx)(z.default,{title:"\u4E0B\u8F7D",children:"download"})})]}),(0,_.jsxs)("div",{style:{marginTop:10},children:[(0,_.jsx)("button",{onClick:function(){var M=document.getElementById("outline");M.innerHTML?M.innerHTML="":new y(u,M)},children:(0,_.jsx)(z.default,{title:"\u5BFC\u822A\u5668",children:"navigator"})}),(0,_.jsx)("div",{id:"outline"})]})]})},onRenderCell:function(u){if(u.vertex&&u.value){var f=u.value;if(f){var y,T=f.metaInfo.type===3,M=T?"left":"right";return j.renderToString((0,_.jsxs)("div",{style:{position:"relative",width:196,height:54,paddingTop:10},children:[(0,_.jsx)("span",{children:f.metaInfo.name}),f.metaInfo.type!==1&&(0,_.jsx)("img",{className:"loadData",width:14,height:14,style:(y={cursor:"pointer",position:"absolute"},C()(y,M,0),C()(y,"top","50%"),C()(y,"transform","translate("+(T?"-50%":"50%")+",-50%)"),y),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IArs4c6QAAADNQTFRFAAAAscTOtr/Isb7HsLzGsL7Frr3Fr73Gr7zFr73Frr3FrrzFrrzGrrzF5+vt5+vu////mHsMmQAAAA10Uk5TABocTmtum7bZ8vP8/XH+TQkAAACASURBVCjPdVLZAoAgCMMjb8r//9oOjazcnpApzAFRg7Y+pBS81TRCucwd2aknbyIPiObOL4VfKEu//8kfzPVGRf4hnn2cHLdNQnfoFD1cq4RZk+UZwZb8nPAU5kSg1PpWQVOQ/sTaCVgKNody4QdHS9bREmwitB0PCo8WL8NsfXarIha/m4rePQAAAABJRU5ErkJggg=="})]}))}}return""},children:function(){return(0,_.jsx)("div",{children:(0,_.jsxs)("ul",{style:{listStyle:"none",display:"flex",justifyContent:"center",gap:"15px"},children:[(0,_.jsxs)("li",{children:[(0,_.jsx)("div",{style:{display:"inline-block",width:12,height:12,marginRight:5,background:"rgb(38, 214, 174)"}}),"1"]}),(0,_.jsxs)("li",{children:[(0,_.jsx)("div",{style:{display:"inline-block",width:12,height:12,marginRight:5,background:"rgb(63, 135, 255)"}}),"2"]}),(0,_.jsxs)("li",{children:[(0,_.jsx)("div",{style:{display:"inline-block",width:12,height:12,marginRight:5,background:"rgb(116, 96, 239)"}}),"3"]})]})})}})}},13301:function(Pe,R,e){e.d(R,{Y:function(){return Ue},Z:function(){return Qe}});var Ce=e(16842),ee=e(81901),K=e(22786),z=e.n(K),s=e(46299),C=e.n(s),l=e(48651),a=e.n(l),O=e(86516),I=e.n(O),b=e(79685),j=e(32810),W=e.n(j),be=e(12903),Le=e.n(be),_=e(5677),te=e.n(_),Re=e(3206),De=e.n(Re),Ee=function(){function E(){var U=this;W()(this,E),te()(this,"layoutEventHandler",function(){}),te()(this,"mxInstance",void 0),te()(this,"mxGraph",null),te()(this,"getDefaultVertexStyle",function(){var m=U.mxInstance,t=m.mxConstants,L=m.mxPerimeter,c=[];return c[t.STYLE_SHAPE]=t.SHAPE_RECTANGLE,c[t.STYLE_PERIMETER]=L.RectanglePerimeter,c[t.STYLE_ALIGN]=t.ALIGN_CENTER,c[t.STYLE_VERTICAL_ALIGN]=t.ALIGN_MIDDLE,c[t.STYLE_FONTSIZE]="12",c[t.STYLE_FONTFAMILY]="PingFangSC-Regular",c[t.FONT_BOLD]="normal",c[t.STYLE_WHITE_SPACE]="nowrap",c[t.STYLE_FONTSTYLE]=1,c}),te()(this,"getDefaultEdgeStyle",function(){var m=U.mxInstance,t=m.mxConstants,L=m.mxEdgeStyle,c=[];return c[t.STYLE_SHAPE]=t.SHAPE_CONNECTOR,c[t.STYLE_STROKECOLOR]="#3f87ff",c[t.STYLE_STROKEWIDTH]=1,c[t.STYLE_ALIGN]=t.ALIGN_CENTER,c[t.STYLE_VERTICAL_ALIGN]=t.ALIGN_MIDDLE,c[t.STYLE_EDGE]=L.TopToBottom,c[t.STYLE_ENDARROW]=t.ARROW_BLOCK,c[t.STYLE_FONTSIZE]="10",c[t.STYLE_ROUNDED]=!1,c}),te()(this,"initContainerScroll",function(){var m=U.mxInstance,t=m.mxRectangle,L=m.mxPoint,c=m.mxUtils;if(U.mxGraph){var h=U.mxGraph;h.scrollTileSize=new t(0,0,200,200),h.getPagePadding=function(){return new L(Math.max(0,Math.round(h.container.offsetWidth-34)),Math.max(0,Math.round(h.container.offsetHeight-34)))},h.getPageSize=function(){return this.pageVisible?new t(0,0,this.pageFormat.width*this.pageScale,this.pageFormat.height*this.pageScale):this.scrollTileSize},h.getPageLayout=function(){var i=this.pageVisible?this.getPageSize():this.scrollTileSize,p=this.getGraphBounds();if(p.width===0||p.height===0)return new t(0,0,1,1);var Y=Math.ceil(p.x/this.view.scale-this.view.translate.x),se=Math.ceil(p.y/this.view.scale-this.view.translate.y),de=Math.floor(p.width/this.view.scale),q=Math.floor(p.height/this.view.scale),H=Math.floor(Y/i.width),S=Math.floor(se/i.height),me=Math.ceil((Y+de)/i.width)-H,ge=Math.ceil((se+q)/i.height)-S;return new t(H,S,me,ge)},h.view.getBackgroundPageBounds=function(){var i=this.graph.getPageLayout(),p=this.graph.getPageSize();return new t(this.scale*(this.translate.x+i.x*p.width),this.scale*(this.translate.y+i.y*p.height),this.scale*i.width*p.width,this.scale*i.height*p.height)},h.getPreferredPageSize=function(){var i=this.getPageLayout(),p=this.getPageSize();return new t(0,0,i.width*p.width,i.height*p.height)};var Te=h.view.validate;h.view.validate=function(){if(this.graph.container!=null&&c.hasScrollbars(this.graph.container)){var i=this.graph.getPagePadding(),p=this.graph.getPageSize();this.translate.x=i.x/this.scale-(this.x0||0)*p.width,this.translate.y=i.y/this.scale-(this.y0||0)*p.height}Te.apply(this,arguments)};var ye=h.sizeDidChange;h.sizeDidChange=function(){if(this.container!=null&&c.hasScrollbars(this.container)){var i=this.getPageLayout(),p=this.getPagePadding(),Y=this.getPageSize(),se=Math.ceil(2*p.x/this.view.scale+i.width*Y.width),de=Math.ceil(2*p.y/this.view.scale+i.height*Y.height),q=h.minimumGraphSize;(q===null||q.width!==se||q.height!==de)&&(h.minimumGraphSize=new t(0,0,se,de));var H=p.x/this.view.scale-i.x*Y.width,S=p.y/this.view.scale-i.y*Y.height;if(!this.autoTranslate&&(this.view.translate.x!==H||this.view.translate.y!==S)){this.autoTranslate=!0,this.view.x0=i.x,this.view.y0=i.y;var me=h.view.translate.x,ge=h.view.translate.y;h.view.setTranslate(H,S),h.container.scrollLeft+=(H-me)*h.view.scale,h.container.scrollTop+=(S-ge)*h.view.scale,this.autoTranslate=!1}ye.apply(this,arguments)}}}}),this.mxInstance=De()(E.config)}return Le()(E,[{key:"create",value:function(m,t){var L,c,h=this.mxInstance,Te=h.mxGraphView,ye=h.mxText,i=h.mxGraph,p=h.mxEvent,Y=h.mxConstants,se=h.mxGraphHandler,de=h.mxSvgCanvas2D,q=h.mxClient,H=h.mxPoint;de.prototype.updateStroke=function(){var d=this.state,D=String(d.strokeColor);this.node.setAttribute("stroke",D.startsWith("const")?D:D.toLowerCase()),(d.alpha<1||d.strokeAlpha<1)&&this.node.setAttribute("stroke-opacity",d.alpha*d.strokeAlpha);var Z=this.getCurrentStrokeWidth();Z!==1&&this.node.setAttribute("stroke-width",Z),this.node.nodeName==="path"&&this.updateStrokeAttributes(),d.dashed&&this.node.setAttribute("stroke-dasharray",this.createDashPattern((d.fixDash?1:d.strokeWidth)*d.scale))},de.prototype.updateFill=function(){var d=this.state;if((d.alpha<1||d.fillAlpha<1)&&this.node.setAttribute("fill-opacity",d.alpha*d.fillAlpha),d.fillColor!=null)if(d.gradientColor!=null){var D=this.getSvgGradient(String(d.fillColor),String(d.gradientColor),d.gradientFillAlpha,d.gradientAlpha,d.gradientDirection);if(!q.IS_CHROMEAPP&&!q.IS_IE&&!q.IS_IE11&&!q.IS_EDGE&&this.root.ownerDocument===document){var Z=this.getBaseUrl().replace(/([()])/g,"\\$1");this.node.setAttribute("fill","url(".concat(Z,"#").concat(D,")"))}else this.node.setAttribute("fill","url(#".concat(D,")"))}else{var $=String(d.fillColor);this.node.setAttribute("fill",$.startsWith("const")?$:$.toLowerCase())}},Te.prototype.optimizeVmlReflows=!1,ye.prototype.ignoreStringSize=!0,se.prototype.guidesEnabled=!0,p.disableContextMenu(m);var S=new i(m);this.mxGraph=S,S.setPanning(!0),S.panningHandler.useLeftButtonForPanning=!0,S.setTooltips((L=t==null?void 0:t.tooltips)!==null&&L!==void 0?L:!0),S.view.setScale(1),S.setHtmlLabels(!0),S.setAllowDanglingEdges(!1),S.setConnectable((c=t==null?void 0:t.connectable)!==null&&c!==void 0?c:!1),S.isCellsMovable=function(){var d=t==null?void 0:t.vertexMovable;if(d===!0||d===void 0){var D=S.getSelectionCell();return!(D&&D.edge)}return!1},S.isCellEditable=function(){return!1},S.isCellResizable=function(){return!1};var me=typeof(t==null?void 0:t.defaultVertexStyle)=="function"?t.defaultVertexStyle(this.mxInstance):t==null?void 0:t.defaultVertexStyle;S.getStylesheet().putDefaultVertexStyle(a()(a()({},this.getDefaultVertexStyle()),me||{}));var ge=typeof(t==null?void 0:t.defaultEdgeStyle)=="function"?t.defaultEdgeStyle(this.mxInstance):t==null?void 0:t.defaultEdgeStyle;S.getStylesheet().putDefaultEdgeStyle(a()(a()({},this.getDefaultEdgeStyle()),ge||{})),Te.prototype.updateFloatingTerminalPoint=function(d,D,Z,$){if(t!=null&&t.getPortOffset){var _e=this.getNextPoint(d,Z,$);if(!D.text)return;var je=D.text.node.getElementsByTagName("div")[1],F=D.x,Se=D.getCenterY();if(_e.x>F+D.width/2&&(F+=D.width),je!=null){var he;Se=D.getCenterY()-je.scrollTop;var n=t==null||(he=t.getPortOffset)===null||he===void 0?void 0:he.call(t,d,$);n&&(Se=ke(D,n)),d!=null&&d.absolutePoints!=null&&(_e.y=Se)}d.setAbsoluteTerminalPoint(new H(F,Se),$)}else d.setAbsoluteTerminalPoint(this.getFloatingTerminalPoint(d,D,Z,$),$)};var ke=function(D,Z){var $=Z.parentNode.parentNode.parentElement,_e=Z.offsetTop-$.offsetTop+Z.offsetHeight/2;return D.y+_e};return Y.HANDLE_FILLCOLOR="#ffffff",Y.HANDLE_STROKECOLOR="#2491F7",Y.VERTEX_SELECTION_COLOR="transparent",Y.CURSOR_MOVABLE_VERTEX="pointer",Y.STYLE_OVERFLOW="hidden",S}},{key:"createRubberBand",value:function(){var m=this.mxInstance.mxRubberband;if(!this.mxGraph)throw new Error("Please call create before createRubberBand");return new m(this.mxGraph)}},{key:"renderVertex",value:function(m){this.mxGraph&&(this.mxGraph.getLabel=function(t){return t&&t.vertex?m(t):""})}},{key:"renderTooltips",value:function(m){var t=this;this.mxGraph&&(this.mxGraph.getTooltipForCell=function(L){if(L&&L.vertex){var c=m(L);return c===void 0?t.mxGraph.getLabel(L):c}return""})}},{key:"setView",value:function(m){var t=m.scale,L=m.dx,c=m.dy;this.mxGraph&&(this.mxGraph.view.setScale(t),this.mxGraph.view.setTranslate(L,c))}},{key:"resetScrollPosition",value:function(){if(this.mxGraph&&this.mxGraph.container){var m=this.mxGraph,t=m.getGraphBounds(),L=Math.max(t.width,m.scrollTileSize.width*m.view.scale),c=Math.max(t.height,m.scrollTileSize.height*m.view.scale);m.container.scrollTop=Math.floor(Math.max(0,t.y-Math.max(20,(m.container.clientHeight-c)/2))),m.container.scrollLeft=Math.floor(Math.max(0,t.x-Math.max(0,(m.container.clientWidth-L)/2)))}}},{key:"dispose",value:function(){this.mxGraph&&this.mxGraph.destroy()}}]),E}();te()(Ee,"config",{mxImageBasePath:"images",mxLanguage:"none",mxLoadResources:!1,mxLoadStylesheets:!1}),te()(Ee,"VertexSize",{width:210,height:50});var oe=Ee,ue=e(63342),V=new oe,A=V.mxInstance,Oe=A.mxHierarchicalLayout,ne=A.mxCellHighlight,u=A.mxEvent,f=A.mxPopupMenu,y=A.mxEventObject,T=A.mxImage,M=A.mxUtils,ie=A.mxDragSource,le=A.mxGraph,we=A.mxShape,ce=A.mxConnectionConstraint,Ne=A.mxPoint,Be=A.mxPolyline,Ve=A.mxConstraintHandler,He=A.mxKeyHandler,We=A.mxClient,Ue="taier__widgets",Fe=Symbol("draggable");function Ze(E){var U=String.fromCharCode(E);if(U==="\b")return"\u232B"}function $e(E,U){var m=E.enableDrag,t=E.loading,L=t===void 0?!1:t,c=E.style,h=E.graphData,Te=E.vertexKey,ye=Te===void 0?"taskId":Te,i=E.vertexSize,p=E.config,Y=E.direction,se=E.children,de=E.onRenderCell,q=E.onRenderTooltips,H=E.onDrawVertex,S=E.onDrawEdge,me=E.onClick,ge=E.onContextMenu,ke=E.onDoubleClick,d=E.onGetSize,D=E.onRenderWidgets,Z=E.onGetPreview,$=E.onDropWidgets,_e=E.onRenderActions,je=E.onKeyDown,F=E.onCellsChanged,Se=E.onContainerChanged,he=(0,b.useRef)(null),n=(0,b.useRef)(),Ke=(0,b.useRef)([]),Xe=(0,b.useState)(null),ze=I()(Xe,2),Je=ze[0],Ye=ze[1];(0,b.useImperativeHandle)(U,function(){return{insertCell:function(r,o,g){if(n.current){var Q=(i==null?void 0:i.width)||oe.VertexSize.width,X=(i==null?void 0:i.height)||oe.VertexSize.height,J=H==null?void 0:H(r);n.current.insertVertex(n.current.getDefaultParent(),r[ye],r,o,g,Q,X,J);var N=n.current.getDefaultParent(),w=n.current.getChildVertices(N);w.length===1&&n.current.center(!0,!0,.55,.4)}},updateCell:function(r,o){if(n.current){var g=n.current.getModel().getCell(r);g&&(g.setValue(a()(a()({},g.value),o)),F==null||F(g),n.current.view.refresh())}},removeCell:function(r){if(n.current){var o=n.current.getModel().getCell(r);o&&n.current.removeCells([o],!0)}},getSelectedCell:function(){return n.current?n.current.getSelectionCell():null},getCells:function(){var r,o=((r=n.current)===null||r===void 0?void 0:r.getModel().getChildCells(n.current.getDefaultParent()))||[];return o},setCells:function(r){var o;(o=n.current)===null||o===void 0||o.addCells(r)},setView:function(r){n.current&&(n.current.view.setScale(r.scale),n.current.container&&setTimeout(function(){var o;(o=n.current)===null||o===void 0||o.container.scrollTo({top:r.scrollTop,left:r.scrollLeft})},0))}}});var qe=function(){n.current=V.create(he.current,p),V.createRubberBand(),V.renderVertex(function(r){return(de==null?void 0:de(r,n.current))||""}),V.renderTooltips(function(r){return q==null?void 0:q(r,n.current)}),V.layoutEventHandler=function(){var r=n.current.getDefaultParent();n.current.getModel().beginUpdate();try{var o=new Oe(n.current,Y||"north");o.disableEdgeStyle=!1,o.interRankCellSpacing=60,o.intraCellSpacing=80,o.execute(r)}finally{n.current.getModel().endUpdate()}},V.initContainerScroll()},et=function(){var r=document.querySelectorAll('*[class*="'.concat(Ue,'"]'));r.forEach(function(o){if(!Object.hasOwnProperty(Fe)){var g=(Z==null?void 0:Z(o))||function(){var N=document.createElement("div");return N.innerHTML='<span class="preview-title">\u65B0\u8282\u70B9</span>',N}(),Q=(i==null?void 0:i.width)||oe.VertexSize.width,X=(i==null?void 0:i.height)||oe.VertexSize.height;g.style.width="".concat(Q,"px"),g.style.height="".concat(X,"px");var J=M.makeDraggable(o,function(N){var w=u.getClientX(N),x=u.getClientY(N),v=document.elementFromPoint(w,x);return v&&M.isAncestorNode(n.current.container,v)?n.current:null},function(N,w,x,v,k){N.canImportCell(x)&&($==null||$(o,N,x,v,k))},g,void 0,void 0,n.current.autoScroll,!0);J.createPreviewElement=function(){return g},J.isGuidesEnabled=function(){return n.current.graphHandler.guidesEnabled},J.createDragElement=ie.prototype.createDragElement,Object.defineProperty(o,Fe,{value:!0,writable:!1,enumerable:!1})}})},tt=function(){if(je){var r=new He(n.current);r.getFunction=function(g){return g!==null&&!u.isAltDown(g)?this.isControlDown(g)||We.IS_MAC&&g.metaKey?u.isShiftDown(g)?this.controlShiftKeys[g.keyCode]:this.controlKeys[g.keyCode]:u.isShiftDown(g)?this.shiftKeys[g.keyCode]:this.normalKeys[g.keyCode]:null};var o=je();Ke.current=o,o.forEach(function(g){var Q=g.method,X=g.keyCode,J=g.func;r[Q](X,function(){var N;(N=n.current)!==null&&N!==void 0&&N.isEnabled()&&J()})})}},nt=function(){m&&(Ve.prototype.pointImage=new T("images/points.gif",5,5),Ve.prototype.highlightColor="#3f87ff",le.prototype.getAllConnectionConstraints=function(r){if(r!=null&&r.shape){if(r.shape.stencil)return r.shape.stencil.constraints;if(r.shape.constraints)return r.shape.constraints}return[]},we.prototype.constraints=[new ce(new Ne(.5,0),!0),new ce(new Ne(0,.5),!0),new ce(new Ne(1,.5),!0),new ce(new Ne(.5,1),!0)],Be.prototype.constraints=[],n.current.connectionHandler.isConnectableCell=function(){return!1},n.current.isValidConnection=function(r,o){if(!r.vertex||!o.vertex)return!1;var g=this.getEdgesBetween(r,o);if(g.length>0)return!1;var Q=!1;return this.traverse(o,!0,function(X){if(r.id===X.id)return Q=!0,!1}),!Q})},rt=function(){var r,o,g,Q,X,J=[];(r=n.current)===null||r===void 0||r.addListener(u.ADD_CELLS,function(w,x){var v=x.getProperty("cell");F==null||F(v)}),(o=n.current)===null||o===void 0||o.addListener(u.REMOVE_CELLS,function(w,x){var v=x.getProperty("cell");F==null||F(v)}),(g=n.current)===null||g===void 0||g.addListener(u.MOVE_END,function(w,x){var v=x.getProperty("cell");F==null||F(v)}),(Q=n.current)===null||Q===void 0||Q.addListener(u.CLICK,function(w,x){var v=x.getProperty("cell");if(Ye((v==null?void 0:v.value)||null),J.forEach(function(Me){return Me.destroy()}),(p==null?void 0:p.highlight)===!0)if(v)if(v.vertex)for(var k,re,Ae=((k=n.current)===null||k===void 0?void 0:k.getOutgoingEdges(v))||[],G=((re=n.current)===null||re===void 0?void 0:re.getIncomingEdges(v,n.current.getDefaultParent()))||[],B=Ae.concat(G),ve=0;ve<B.length;ve+=1){var fe=new ne(n.current,"#3f87ff",2),Ge=n.current.view.getState(B[ve]);fe.highlight(Ge),J.push(fe)}else{var pe=new ne(n.current,"#3f87ff",2),Ie=n.current.view.getState(v);pe.highlight(Ie),J.push(pe)}else{var ae,xe=n.current.getSelectionCells();(ae=n.current)===null||ae===void 0||ae.removeSelectionCells(xe)}v!=null&&v.vertex&&(me==null||me(v,n.current,x.getProperty("event")))}),(X=n.current)===null||X===void 0||X.addListener(u.DOUBLE_CLICK,function(w,x){var v=x.getProperty("cell");v&&v.vertex&&(ke==null||ke(v,n.current,x.getProperty("event")))});var N=f.prototype.showMenu;f.prototype.showMenu=function(){var w=this.graph.getSelectionCells()||[];if(w.length>0)N.apply(this,arguments);else return!1},n.current.popupMenuHandler.autoExpand=!0,f.prototype.popup=function(){var w=C()(z()().mark(function x(v,k,re,Ae){return z()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:if(!(this.div!=null&&this.tbody!=null&&this.factoryMethod!=null)){B.next=8;break}for(this.div.style.left="".concat(v,"px"),this.div.style.top="".concat(k,"px");this.tbody.firstChild!=null;)u.release(this.tbody.firstChild),this.tbody.removeChild(this.tbody.firstChild);return this.itemCount=0,B.next=7,this.factoryMethod(this,re,Ae);case 7:this.itemCount>0&&(this.showMenu(),this.fireEvent(new y(u.SHOW),[]));case 8:case"end":return B.stop()}},x,this)}));return function(x,v,k,re){return w.apply(this,arguments)}}(),n.current.collapsedImage=new T("",0,0),n.current.popupMenuHandler.factoryMethod=function(){var w=C()(z()().mark(function x(v,k){var re;return z()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:if(k){G.next=2;break}return G.abrupt("return");case 2:return G.next=4,ge==null?void 0:ge(k.value,k,n.current);case 4:re=G.sent,re==null||re.forEach(function(B){var ve=B.id,fe=B.title,Ge=B.disabled,pe=B.children,Ie=B.callback,ae=!!Ke.current.length&&!!ve&&Ke.current.find(function(Me){return Me.id===ve}),xe=v.addItem(ae?"".concat(fe,"(").concat(function(){switch(ae.method){case"bindControlKey":return We.IS_MAC?"\u2318":"Meta";case"bindKey":default:return""}}()," ").concat(Ze(ae.keyCode),")"):fe,void 0,function(){if(ae){ae.func();return}Ie==null||Ie()},void 0,void 0,!Ge);pe!=null&&pe.length&&pe.forEach(function(Me){v.addItem(Me.title,void 0,Me.callback,xe,void 0,!Me.disabled)})});case 6:case"end":return G.stop()}},x)}));return function(x,v){return w.apply(this,arguments)}}()},at=function(){if(h){var r;h.length===1&&Ye(h[0]);for(var o=h.map(function(Q){return{sourceOrTarget:null,data:Q}}),g=function(){var X,J,N=o.pop(),w=N.sourceOrTarget,x=N.data,v=H==null?void 0:H(x),k=d==null?void 0:d(x),re=(k==null?void 0:k.width)||(i==null?void 0:i.width)||oe.VertexSize.width,Ae=(k==null?void 0:k.height)||(i==null?void 0:i.height)||oe.VertexSize.height,G=n.current.insertVertex(n.current.getDefaultParent(),x[ye],x,0,0,re,Ae,v);if(w){var B,ve,fe=!!((B=w.value)!==null&&B!==void 0&&(ve=B.childNode)!==null&&ve!==void 0&&ve.find(function(xe){return xe[ye]===x[ye]})),Ge=fe?w:G,pe=fe?G:w,Ie=S==null?void 0:S(fe?w:G,fe?G:w);n.current.insertEdge(n.current.getDefaultParent(),null,null,Ge,pe,Ie)}else{var ae;(ae=n.current)===null||ae===void 0||ae.setSelectionCell(G)}(X=x.childNode)!==null&&X!==void 0&&X.length&&x.childNode.forEach(function(xe){o.push({sourceOrTarget:G,data:xe})}),(J=x.parentNode)!==null&&J!==void 0&&J.length&&x.parentNode.forEach(function(xe){o.push({sourceOrTarget:G,data:xe})})};o.length;)g();(r=V.layoutEventHandler)===null||r===void 0||r.call(V),ot()}},ot=function(){window.setTimeout(function(){V.resetScrollPosition()},0)};return(0,b.useEffect)(function(){return qe(),at(),rt(),nt(),et(),tt(),function(){var P;(P=n.current)===null||P===void 0||P.destroy()}},[h]),(0,b.useEffect)(function(){var P;function r(){var o;Se==null||Se({scrollTop:he.current.scrollTop,scrollLeft:he.current.scrollLeft,scale:((o=n.current)===null||o===void 0?void 0:o.getView().getScale())||-1})}return(P=he.current)===null||P===void 0||P.addEventListener("scroll",r),function(){var o;(o=he.current)===null||o===void 0||o.removeEventListener("scroll",r)}},[]),(0,ue.jsxs)("div",{className:"dtc-graph-editor",style:c,children:[(0,ue.jsx)(ee.default,{tip:"Loading...",size:"large",spinning:L,wrapperClassName:"dtc-task-graph",children:(0,ue.jsx)("div",{style:{position:"relative",overflow:"auto",width:"100%",height:"100%"},tabIndex:-1,ref:he})}),D&&(0,ue.jsx)("div",{className:"dtc-graph-widgets",onContextMenu:function(r){return r.preventDefault()},children:D==null?void 0:D()}),(0,ue.jsx)("div",{className:"dtc-graph-bottom",children:se==null?void 0:se(Je)}),(0,ue.jsx)("div",{className:"dtc-graph-toolbar",style:p==null?void 0:p.toolbarStyle,children:_e==null?void 0:_e(n.current,V.mxInstance)})]})}var Qe=(0,b.forwardRef)($e)},24425:function(){}}]);
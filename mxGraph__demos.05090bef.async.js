"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[2019,4119],{11577:function(I,_,e){e.r(_);var y=e(82548),v=e.n(y),h=e(58570),E=e(50959),o=e(9995),r=e(34393),n=e(25221),t=e(80454),f=e(51408),i=e(11527);_.default=function(){return(0,i.jsx)(t.MxGraphContainer,{style:{height:400},config:{tooltips:!0,highlight:!0},graphData:[{taskId:"test-1",taskName:"\u4F60\u597D-1",childNode:[{taskId:"test-11",taskName:"\u4F60\u597D-11",childNode:[]},{taskId:"test-12",taskName:"\u4F60\u597D-12",childNode:[{taskId:"test-21",taskName:"\u4F60\u597D-21",childNode:[{taskId:"test-31",taskName:"\u4F60\u597D-31",childNode:[]}]}]}]}],onDrawVertex:function(){return"whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;"},onRenderActions:function(m){return(0,i.jsxs)("div",{style:{display:"grid",gridGap:5,gridTemplateColumns:"15px 15px"},children:[(0,i.jsx)(h.default,{title:"\u653E\u5927",children:(0,i.jsx)(r.Z,{onClick:function(){return m.zoomIn()}})}),(0,i.jsx)(h.default,{title:"\u7F29\u5C0F",children:(0,i.jsx)(n.Z,{onClick:function(){return m.zoomOut()}})})]})},onRenderCell:function(m){if(m.vertex&&m.value){var p=m.value;if(p)return o.renderToString((0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:p.taskName}),(0,i.jsx)("br",{}),(0,i.jsx)("span",{children:p.taskId})]}))}return""},onRenderTooltips:function(m){return m.vertex&&m.value?m.value.taskName:""}})}},58156:function(I,_,e){e.r(_);var y=e(50959),v=e(9995),h=e(80454),E=e(51408),o=e(11527);_.default=function(){return(0,o.jsx)(h.MxGraphContainer,{style:{height:400},config:{tooltips:!1,highlight:!0},graphData:[{taskId:"test-1",taskName:"\u4F60\u597D-1",taskType:1,childNode:[{taskId:"test-11",taskName:"\u4F60\u597D-11",taskType:2,childNode:[]},{taskId:"test-12",taskName:"\u4F60\u597D-12",taskType:3,childNode:[{taskId:"test-21",taskName:"\u4F60\u597D-21",taskType:4,childNode:[{taskId:"test-31",taskName:"\u4F60\u597D-31",taskType:5,childNode:[]}]}]}]}],onDrawVertex:function(n){var t=["#fffbe6","#e6f6ff","#f5ffe6","#fff1f0","#e6e9f2"],f=["#fdb313","#3f87ff","#12bc6a","#fe615c","#5b6da6"];return"whiteSpace=wrap;fillColor="+t[n.taskType-1]+";strokeColor="+f[n.taskType-1]+";"},onContextMenu:function(n,t){var f=["\u6267\u884C\u4E2D","\u90E8\u7F72\u4E2D","\u53D6\u6D88\u4E2D","\u8FD0\u884C\u6210\u529F","\u8FD0\u884C\u5931\u8D25"];return t.vertex?[{id:"operation",title:f[n.taskType-1],callback:function(){alert("\u5F53\u524D vertex \u5904\u4E8E"+f[n.taskType-1])}},{id:"remove",title:"\u5220\u9664\u5F53\u524D\u8282\u70B9",callback:function(){console.log("\u5220\u9664")}}]:[{id:"remove",title:"\u5220\u9664\u8FDE\u7EBF",callback:function(){console.log("\u5220\u9664")}}]},onRenderCell:function(n){if(n.vertex&&n.value){var t=n.value;if(t)return v.renderToString((0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:t.taskName}),(0,o.jsx)("br",{}),(0,o.jsx)("span",{children:t.taskId})]}))}return""}})}},14158:function(I,_,e){e.r(_);var y=e(50959),v=e(9995),h=e(80454),E=e(51408),o=e(11527);_.default=function(){return(0,o.jsx)(h.MxGraphContainer,{enableDrag:!0,style:{height:400},config:{tooltips:!1,connectable:!0,highlight:!0},graphData:[{taskId:"test-1",taskName:"\u4F60\u597D-1",taskType:1,childNode:[{taskId:"test-11",taskName:"\u4F60\u597D-11",taskType:2,childNode:[]},{taskId:"test-12",taskName:"\u4F60\u597D-12",taskType:3,childNode:[{taskId:"test-21",taskName:"\u4F60\u597D-21",taskType:4,childNode:[{taskId:"test-31",taskName:"\u4F60\u597D-31",taskType:5,childNode:[]}]}]}]}],onDropWidgets:function(n,t,f,i,g){console.group("onDropWidgets"),console.log("node:",n),console.log("graph:",t),console.log("target:",f),console.log("x and y:",i,g),console.groupEnd();var m="randomId__"+new Date().valueOf();t.insertVertex(t.getDefaultParent(),m,{taskName:n.innerText,taskId:m},i,g,210,50,"whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;")},onCellsChanged:function(n){console.group("onCellsChanged"),console.log("cell:",n),console.groupEnd()},onDrawVertex:function(){return"whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;"},onRenderCell:function(n){if(n.vertex&&n.value){var t=n.value;if(t)return v.renderToString((0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:t.taskName}),(0,o.jsx)("br",{}),(0,o.jsx)("span",{children:t.taskId})]}))}return""},onGetPreview:function(n){var t=document.createElement("div");return t.style.width="210px",t.style.height="50px",t.style.border="1px solid #ddd",t.style.textAlign="center",t.dataset.name=n.innerText,t.innerHTML=v.renderToString((0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{children:"\u65B0\u8282\u70B9"}),(0,o.jsx)("br",{}),(0,o.jsx)("span",{children:n.innerText})]})),t},onRenderWidgets:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{style:{height:20,background:"#ddd"},children:"\u62D6\u62FD\u7EC4\u4EF6"}),(0,o.jsxs)("ul",{style:{listStyle:"none",margin:0,padding:0},children:[(0,o.jsx)("li",{className:h.WIDGETS_PREFIX+"__",style:{cursor:"move",margin:"5px 0"},children:"\u4F60\u597D1"}),(0,o.jsx)("li",{className:h.WIDGETS_PREFIX+"__",style:{cursor:"move",margin:"5px 0"},children:"\u4F60\u597D2"}),(0,o.jsx)("li",{className:h.WIDGETS_PREFIX+"__",style:{cursor:"move",margin:"5px 0"},children:"\u4F60\u597D3"}),(0,o.jsx)("li",{className:h.WIDGETS_PREFIX+"__",style:{cursor:"move",margin:"5px 0"},children:"\u4F60\u597D4"})]})]})}})}},6402:function(I,_,e){e.r(_);var y=e(50959),v=e(9995),h=e(80454),E=e(51408),o=e(11527);_.default=function(){return(0,o.jsx)(h.MxGraphContainer,{style:{height:400},config:{tooltips:!1,highlight:!0},graphData:[{taskId:"test-1",taskName:"\u4F60\u597D-1",taskType:1,childNode:[{taskId:"test-11",taskName:"\u4F60\u597D-11",taskType:2,childNode:[]},{taskId:"test-12",taskName:"\u4F60\u597D-12",taskType:3,childNode:[{taskId:"test-21",taskName:"\u4F60\u597D-21",taskType:4,childNode:[{taskId:"test-31",taskName:"\u4F60\u597D-31",taskType:5,childNode:[]}]}]}]}],onClick:function(n,t,f){console.group("onClick"),console.log("\u5F53\u524D\u70B9\u51FB\u7684 cell \u662F:",n),console.log("\u5F53\u524D\u70B9\u51FB\u7684 graph \u662F:",t),console.log("\u5F53\u524D\u70B9\u51FB\u7684 dom \u662F:",f.target),console.groupEnd()},onDoubleClick:function(n,t,f){console.group("onDoubleClick"),console.log("\u5F53\u524D\u70B9\u51FB\u7684 cell \u662F:",n),console.log("\u5F53\u524D\u70B9\u51FB\u7684 graph \u662F:",t),console.log("\u5F53\u524D\u70B9\u51FB\u7684 dom \u662F:",f.target),console.groupEnd()},onContainerChanged:function(n){console.group("onContainerChanged"),console.log(n),console.groupEnd()},onKeyDown:function(){return[{id:"remove",method:"bindControlKey",keyCode:8,func:function(){alert("\u5220\u9664")}}]},onContextMenu:function(){return[{id:"remove",title:"\u5220\u9664"}]},onDrawVertex:function(){return"whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;"},onRenderCell:function(n){if(n.vertex&&n.value){var t=n.value;if(t)return v.renderToString((0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:t.taskName}),(0,o.jsx)("br",{}),(0,o.jsx)("span",{children:t.taskId})]}))}return""}})}},71317:function(I,_,e){e.r(_);var y=e(67855),v=e.n(y),h=e(77117),E=e.n(h),o=e(21320),r=e.n(o),n=e(28152),t=e.n(n),f=e(50959),i=e(9995),g=e(80454),m=e(51408),p=e(11527);_.default=function(){var k=(0,f.useState)(!1),S=t()(k,2),s=S[0],P=S[1],b=(0,f.useState)("b"),A=t()(b,2),O=A[0],j=A[1],L=(0,f.useState)([{metaId:"1",metaInfo:{name:"tableName",type:1,list:["a","b","c","d"]},childNode:[{metaId:"2",metaInfo:{name:"tableName",type:2,list:["1-c"]}},{metaId:"3",metaInfo:{name:"tableName",type:2,list:["1-c"]}}]}]),T=t()(L,2),N=T[0],B=T[1],C=function(a){return a.metaId==="1"?{width:194,height:120}:{width:196,height:54}};return(0,p.jsx)(g.MxGraphContainer,{direction:"west",loading:s,style:{height:400},vertexSize:{width:196,height:54},config:{tooltips:!1,connectable:!1,highlight:!1,vertexMovable:!1,defaultEdgeStyle:function(a){var l,c=a.mxConstants,u=a.mxEdgeStyle;return l={},r()(l,c.STYLE_ROUNDED,1),r()(l,c.STYLE_CURVED,0),r()(l,c.STYLE_EDGE,u.EntityRelation),l},getPortOffset:function(a,l){var c=a[l?"visibleSourceState":"visibleTargetState"].text.node.querySelectorAll("div")[1],u=c.querySelector("li[data-id="+O+"]")||c.querySelector("li");return u}},vertexKey:"metaId",onClick:function(a,l,c){a.value.metaId==="1"&&(P(!0),setTimeout(function(){var u,D=[E()(E()({},N[0]),{},{childNode:[],parentNode:[]})],x=Math.random()>.5?"childNode":"parentNode",R=Math.floor(Math.random()*5+1);(u=D[0][x]).push.apply(u,v()(new Array(R).fill({}).map(function(W,U){return{metaId:"1-"+U,metaInfo:{name:"tableName",type:2,list:["1-c"]}}})));var M=c.target;j(M.dataset.id),B(D),P(!1)},300))},onGetSize:C,graphData:N,onDrawVertex:function(){return"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;"},onDrawEdge:function(){return"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;"},onRenderCell:function(a){if(a.vertex&&a.value){var l=a.value;if(l){var c=C(l);return i.renderToString((0,p.jsxs)("div",{style:{overflow:"hidden",width:c.width,height:c.height},children:[l.metaInfo.name,(0,p.jsx)("hr",{style:{borderTop:"1px solid #ddd",margin:0}}),(0,p.jsx)("div",{style:{width:"100%",overflow:"auto"},children:(0,p.jsx)("ul",{style:{listStyle:"none",margin:0,padding:0},children:l.metaInfo.list.map(function(u){return(0,p.jsx)("li",{"data-id":u,style:{height:20,borderBottom:"1px solid #ddd",background:O===u?"red":"transparent"},children:u},u)})})})]}))}}return""}})}},24065:function(I,_,e){e.r(_),e.d(_,{default:function(){return P}});var y=e(51317),v=e(96169),h=e(82548),E=e(58570),o=e(21320),r=e.n(o),n=e(67855),t=e.n(n),f=e(28152),i=e.n(f),g=e(50959),m=e(9995),p=e(80454),k=[{metaId:"test-1",metaInfo:{name:"tableName",type:1},childNode:[{metaId:"test-2",metaInfo:{name:"tableName2",type:2}},{metaId:"test-3",metaInfo:{name:"tableName3",type:2}},{metaId:"test-4",metaInfo:{name:"tableName4",type:2}},{metaId:"test-5",metaInfo:{name:"tableName5",type:2}}],parentNode:[{metaId:"test-6",metaInfo:{name:"tableName6",type:3}},{metaId:"test-7",metaInfo:{name:"tableName7",type:3}},{metaId:"test-8",metaInfo:{name:"tableName8",type:3}},{metaId:"test-9",metaInfo:{name:"tableName9",type:3}}]}],S=e(51408),s=e(11527),P=function(){var b=(0,g.useState)(!1),A=i()(b,2),O=A[0],j=A[1],L=(0,g.useState)(t()(k)),T=i()(L,2),N=T[0],B=T[1];return(0,s.jsx)(p.MxGraphContainer,{direction:"west",loading:O,style:{height:300},vertexSize:{width:196,height:54},config:{tooltips:!1,connectable:!1,highlight:!1,toolbarStyle:{bottom:100,right:0,top:"initial"},defaultEdgeStyle:function(d){var a,l=d.mxConstants,c=d.mxEdgeStyle;return a={},r()(a,l.STYLE_ROUNDED,1),r()(a,l.STYLE_CURVED,0),r()(a,l.STYLE_EDGE,c.EntityRelation),a}},vertexKey:"metaId",onContextMenu:function(d,a){return a.vertex?[{id:"insert",title:"\u63D2\u5165"},{id:"remove",title:"\u5220\u9664"}]:[]},onClick:function(d,a,l){var c=l.target;c.closest(".loadData")&&(j(!0),setTimeout(function(){B(function(u){for(var D=t()(u);D.length;){var x=D.pop();if(x.metaId===d.value.metaId){var R="randomId__"+new Date().valueOf(),M=d.value.metaInfo.type===2?"childNode":"parentNode";x[M]=x[M]||[],x[M].push({metaId:R,metaInfo:{name:R+"tableName",type:x.metaInfo.type}});break}D.push.apply(D,t()(x.childNode||[])),D.push.apply(D,t()(x.parentNode||[]))}return t()(u)}),j(!1)},300))},graphData:N,onDrawVertex:function(d){return["","whiteSpace=wrap;fillColor=#ffffff;strokeColor=#3F87FF;","whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;","whiteSpace=wrap;fillColor=#ffffff;strokeColor=#26D6AE;"][d.metaInfo.type]},onDrawEdge:function(d,a){return d.value.metaInfo.type===3?"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#26D6AE;":a.value.metaInfo.type===2?"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;":"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#3F87FF;"},onRenderActions:function(d,a){var l=a.mxOutline;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,s.jsx)("button",{onClick:function(){return d.center(!0,!0)},children:(0,s.jsx)(E.default,{title:"\u5C45\u4E2D",children:"center"})}),(0,s.jsx)("button",{onClick:function(){return v.default.success("download successfully")},children:(0,s.jsx)(E.default,{title:"\u4E0B\u8F7D",children:"download"})})]}),(0,s.jsxs)("div",{style:{marginTop:10},children:[(0,s.jsx)("button",{onClick:function(){var u=document.getElementById("outline");u.innerHTML?u.innerHTML="":new l(d,u)},children:(0,s.jsx)(E.default,{title:"\u5BFC\u822A\u5668",children:"navigator"})}),(0,s.jsx)("div",{id:"outline"})]})]})},onRenderCell:function(d){if(d.vertex&&d.value){var a=d.value;if(a){var l,c=a.metaInfo.type===3,u=c?"left":"right";return m.renderToString((0,s.jsxs)("div",{style:{position:"relative",width:196,height:54,paddingTop:10},children:[(0,s.jsx)("span",{children:a.metaInfo.name}),a.metaInfo.type!==1&&(0,s.jsx)("img",{className:"loadData",width:14,height:14,style:(l={cursor:"pointer",position:"absolute"},r()(l,u,0),r()(l,"top","50%"),r()(l,"transform","translate("+(c?"-50%":"50%")+",-50%)"),l),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IArs4c6QAAADNQTFRFAAAAscTOtr/Isb7HsLzGsL7Frr3Fr73Gr7zFr73Frr3FrrzFrrzGrrzF5+vt5+vu////mHsMmQAAAA10Uk5TABocTmtum7bZ8vP8/XH+TQkAAACASURBVCjPdVLZAoAgCMMjb8r//9oOjazcnpApzAFRg7Y+pBS81TRCucwd2aknbyIPiObOL4VfKEu//8kfzPVGRf4hnn2cHLdNQnfoFD1cq4RZk+UZwZb8nPAU5kSg1PpWQVOQ/sTaCVgKNody4QdHS9bREmwitB0PCo8WL8NsfXarIha/m4rePQAAAABJRU5ErkJggg=="})]}))}}return""},children:function(){return(0,s.jsx)("div",{children:(0,s.jsxs)("ul",{style:{listStyle:"none",display:"flex",justifyContent:"center",gap:"15px"},children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("div",{style:{display:"inline-block",width:12,height:12,marginRight:5,background:"rgb(38, 214, 174)"}}),"1"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("div",{style:{display:"inline-block",width:12,height:12,marginRight:5,background:"rgb(63, 135, 255)"}}),"2"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("div",{style:{display:"inline-block",width:12,height:12,marginRight:5,background:"rgb(116, 96, 239)"}}),"3"]})]})})}})}},51408:function(){}}]);

"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[2019],{18406:function(I,f,e){e.r(f);var y=e(82548),v=e.n(y),h=e(58570),E=e(50959),o=e(9995),r=e(3846),n=e(8950),t=e(42562),_=e(83076),d=e(11527);f.default=function(){return(0,d.jsx)(t.Z,{style:{height:400},config:{tooltips:!0,highlight:!0},graphData:[{taskId:"test-1",taskName:"\u4F60\u597D-1",childNode:[{taskId:"test-11",taskName:"\u4F60\u597D-11",childNode:[]},{taskId:"test-12",taskName:"\u4F60\u597D-12",childNode:[{taskId:"test-21",taskName:"\u4F60\u597D-21",childNode:[{taskId:"test-31",taskName:"\u4F60\u597D-31",childNode:[]}]}]}]}],onDrawVertex:function(){return"whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;"},onRenderActions:function(m){return(0,d.jsxs)("div",{style:{display:"grid",gridGap:5,gridTemplateColumns:"15px 15px"},children:[(0,d.jsx)(h.default,{title:"\u653E\u5927",children:(0,d.jsx)(r.Z,{onClick:function(){return m.zoomIn()}})}),(0,d.jsx)(h.default,{title:"\u7F29\u5C0F",children:(0,d.jsx)(n.Z,{onClick:function(){return m.zoomOut()}})})]})},onRenderCell:function(m){if(m.vertex&&m.value){var g=m.value;if(g)return o.renderToString((0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:g.taskName}),(0,d.jsx)("br",{}),(0,d.jsx)("span",{children:g.taskId})]}))}return""},onRenderTooltips:function(m){return m.vertex&&m.value?m.value.taskName:""}})}},6972:function(I,f,e){e.r(f);var y=e(50959),v=e(9995),h=e(42562),E=e(83076),o=e(11527);f.default=function(){return(0,o.jsx)(h.Z,{style:{height:400},config:{tooltips:!1,highlight:!0},graphData:[{taskId:"test-1",taskName:"\u4F60\u597D-1",taskType:1,childNode:[{taskId:"test-11",taskName:"\u4F60\u597D-11",taskType:2,childNode:[]},{taskId:"test-12",taskName:"\u4F60\u597D-12",taskType:3,childNode:[{taskId:"test-21",taskName:"\u4F60\u597D-21",taskType:4,childNode:[{taskId:"test-31",taskName:"\u4F60\u597D-31",taskType:5,childNode:[]}]}]}]}],onDrawVertex:function(n){var t=["#fffbe6","#e6f6ff","#f5ffe6","#fff1f0","#e6e9f2"],_=["#fdb313","#3f87ff","#12bc6a","#fe615c","#5b6da6"];return"whiteSpace=wrap;fillColor="+t[n.taskType-1]+";strokeColor="+_[n.taskType-1]+";"},onContextMenu:function(n,t){var _=["\u6267\u884C\u4E2D","\u90E8\u7F72\u4E2D","\u53D6\u6D88\u4E2D","\u8FD0\u884C\u6210\u529F","\u8FD0\u884C\u5931\u8D25"];return t.vertex?[{id:"operation",title:_[n.taskType-1],callback:function(){alert("\u5F53\u524D vertex \u5904\u4E8E"+_[n.taskType-1])}},{id:"remove",title:"\u5220\u9664\u5F53\u524D\u8282\u70B9",callback:function(){console.log("\u5220\u9664")}}]:[{id:"remove",title:"\u5220\u9664\u8FDE\u7EBF",callback:function(){console.log("\u5220\u9664")}}]},onRenderCell:function(n){if(n.vertex&&n.value){var t=n.value;if(t)return v.renderToString((0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:t.taskName}),(0,o.jsx)("br",{}),(0,o.jsx)("span",{children:t.taskId})]}))}return""}})}},80753:function(I,f,e){e.r(f);var y=e(50959),v=e(9995),h=e(42562),E=e(83076),o=e(11527);f.default=function(){return(0,o.jsx)(h.Z,{enableDrag:!0,style:{height:400},config:{tooltips:!1,connectable:!0,highlight:!0},graphData:[{taskId:"test-1",taskName:"\u4F60\u597D-1",taskType:1,childNode:[{taskId:"test-11",taskName:"\u4F60\u597D-11",taskType:2,childNode:[]},{taskId:"test-12",taskName:"\u4F60\u597D-12",taskType:3,childNode:[{taskId:"test-21",taskName:"\u4F60\u597D-21",taskType:4,childNode:[{taskId:"test-31",taskName:"\u4F60\u597D-31",taskType:5,childNode:[]}]}]}]}],onDropWidgets:function(n,t,_,d,p){console.group("onDropWidgets"),console.log("node:",n),console.log("graph:",t),console.log("target:",_),console.log("x and y:",d,p),console.groupEnd();var m="randomId__"+new Date().valueOf();t.insertVertex(t.getDefaultParent(),m,{taskName:n.innerText,taskId:m},d,p,210,50,"whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;")},onCellsChanged:function(n){console.group("onCellsChanged"),console.log("cell:",n),console.groupEnd()},onDrawVertex:function(){return"whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;"},onRenderCell:function(n){if(n.vertex&&n.value){var t=n.value;if(t)return v.renderToString((0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:t.taskName}),(0,o.jsx)("br",{}),(0,o.jsx)("span",{children:t.taskId})]}))}return""},onGetPreview:function(n){var t=document.createElement("div");return t.style.width="210px",t.style.height="50px",t.style.border="1px solid #ddd",t.style.textAlign="center",t.dataset.name=n.innerText,t.innerHTML=v.renderToString((0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{children:"\u65B0\u8282\u70B9"}),(0,o.jsx)("br",{}),(0,o.jsx)("span",{children:n.innerText})]})),t},onRenderWidgets:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{style:{height:20,background:"#ddd"},children:"\u62D6\u62FD\u7EC4\u4EF6"}),(0,o.jsxs)("ul",{style:{listStyle:"none",margin:0,padding:0},children:[(0,o.jsx)("li",{className:h.Y+"__",style:{cursor:"move",margin:"5px 0"},children:"\u4F60\u597D1"}),(0,o.jsx)("li",{className:h.Y+"__",style:{cursor:"move",margin:"5px 0"},children:"\u4F60\u597D2"}),(0,o.jsx)("li",{className:h.Y+"__",style:{cursor:"move",margin:"5px 0"},children:"\u4F60\u597D3"}),(0,o.jsx)("li",{className:h.Y+"__",style:{cursor:"move",margin:"5px 0"},children:"\u4F60\u597D4"})]})]})}})}},20286:function(I,f,e){e.r(f);var y=e(50959),v=e(9995),h=e(42562),E=e(83076),o=e(11527);f.default=function(){return(0,o.jsx)(h.Z,{style:{height:400},config:{tooltips:!1,highlight:!0},graphData:[{taskId:"test-1",taskName:"\u4F60\u597D-1",taskType:1,childNode:[{taskId:"test-11",taskName:"\u4F60\u597D-11",taskType:2,childNode:[]},{taskId:"test-12",taskName:"\u4F60\u597D-12",taskType:3,childNode:[{taskId:"test-21",taskName:"\u4F60\u597D-21",taskType:4,childNode:[{taskId:"test-31",taskName:"\u4F60\u597D-31",taskType:5,childNode:[]}]}]}]}],onClick:function(n,t,_){console.group("onClick"),console.log("\u5F53\u524D\u70B9\u51FB\u7684 cell \u662F:",n),console.log("\u5F53\u524D\u70B9\u51FB\u7684 graph \u662F:",t),console.log("\u5F53\u524D\u70B9\u51FB\u7684 dom \u662F:",_.target),console.groupEnd()},onDoubleClick:function(n,t,_){console.group("onDoubleClick"),console.log("\u5F53\u524D\u70B9\u51FB\u7684 cell \u662F:",n),console.log("\u5F53\u524D\u70B9\u51FB\u7684 graph \u662F:",t),console.log("\u5F53\u524D\u70B9\u51FB\u7684 dom \u662F:",_.target),console.groupEnd()},onContainerChanged:function(n){console.group("onContainerChanged"),console.log(n),console.groupEnd()},onKeyDown:function(){return[{id:"remove",method:"bindControlKey",keyCode:8,func:function(){alert("\u5220\u9664")}}]},onContextMenu:function(){return[{id:"remove",title:"\u5220\u9664"}]},onDrawVertex:function(){return"whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;"},onRenderCell:function(n){if(n.vertex&&n.value){var t=n.value;if(t)return v.renderToString((0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:t.taskName}),(0,o.jsx)("br",{}),(0,o.jsx)("span",{children:t.taskId})]}))}return""}})}},49636:function(I,f,e){e.r(f);var y=e(93525),v=e.n(y),h=e(57213),E=e.n(h),o=e(52510),r=e.n(o),n=e(54306),t=e.n(n),_=e(50959),d=e(9995),p=e(42562),m=e(83076),g=e(11527);f.default=function(){var R=(0,_.useState)(!1),S=t()(R,2),s=S[0],P=S[1],b=(0,_.useState)("b"),A=t()(b,2),O=A[0],j=A[1],U=(0,_.useState)([{metaId:"1",metaInfo:{name:"tableName",type:1,list:["a","b","c","d"]},childNode:[{metaId:"2",metaInfo:{name:"tableName",type:2,list:["1-c"]}},{metaId:"3",metaInfo:{name:"tableName",type:2,list:["1-c"]}}]}]),T=t()(U,2),N=T[0],L=T[1],D=function(a){return a.metaId==="1"?{width:194,height:120}:{width:196,height:54}};return(0,g.jsx)(p.Z,{direction:"west",loading:s,style:{height:400},vertexSize:{width:196,height:54},config:{tooltips:!1,connectable:!1,highlight:!1,vertexMovable:!1,defaultEdgeStyle:function(a){var l,u=a.mxConstants,c=a.mxEdgeStyle;return l={},r()(l,u.STYLE_ROUNDED,1),r()(l,u.STYLE_CURVED,0),r()(l,u.STYLE_EDGE,c.EntityRelation),l},getPortOffset:function(a,l){var u=a[l?"visibleSourceState":"visibleTargetState"].text.node.querySelectorAll("div")[1],c=u.querySelector("li[data-id="+O+"]")||u.querySelector("li");return c}},vertexKey:"metaId",onClick:function(a,l,u){a.value.metaId==="1"&&(P(!0),setTimeout(function(){var c,C=[E()(E()({},N[0]),{},{childNode:[],parentNode:[]})],x=Math.random()>.5?"childNode":"parentNode",k=Math.floor(Math.random()*5+1);(c=C[0][x]).push.apply(c,v()(new Array(k).fill({}).map(function(K,B){return{metaId:"1-"+B,metaInfo:{name:"tableName",type:2,list:["1-c"]}}})));var M=u.target;j(M.dataset.id),L(C),P(!1)},300))},onGetSize:D,graphData:N,onDrawVertex:function(){return"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;"},onDrawEdge:function(){return"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;"},onRenderCell:function(a){if(a.vertex&&a.value){var l=a.value;if(l){var u=D(l);return d.renderToString((0,g.jsxs)("div",{style:{overflow:"hidden",width:u.width,height:u.height},children:[l.metaInfo.name,(0,g.jsx)("hr",{style:{borderTop:"1px solid #ddd",margin:0}}),(0,g.jsx)("div",{style:{width:"100%",overflow:"auto"},children:(0,g.jsx)("ul",{style:{listStyle:"none",margin:0,padding:0},children:l.metaInfo.list.map(function(c){return(0,g.jsx)("li",{"data-id":c,style:{height:20,borderBottom:"1px solid #ddd",background:O===c?"red":"transparent"},children:c},c)})})})]}))}}return""}})}},68470:function(I,f,e){e.r(f),e.d(f,{default:function(){return P}});var y=e(51317),v=e(96169),h=e(82548),E=e(58570),o=e(52510),r=e.n(o),n=e(93525),t=e.n(n),_=e(54306),d=e.n(_),p=e(50959),m=e(9995),g=e(42562),R=[{metaId:"test-1",metaInfo:{name:"tableName",type:1},childNode:[{metaId:"test-2",metaInfo:{name:"tableName2",type:2}},{metaId:"test-3",metaInfo:{name:"tableName3",type:2}},{metaId:"test-4",metaInfo:{name:"tableName4",type:2}},{metaId:"test-5",metaInfo:{name:"tableName5",type:2}}],parentNode:[{metaId:"test-6",metaInfo:{name:"tableName6",type:3}},{metaId:"test-7",metaInfo:{name:"tableName7",type:3}},{metaId:"test-8",metaInfo:{name:"tableName8",type:3}},{metaId:"test-9",metaInfo:{name:"tableName9",type:3}}]}],S=e(83076),s=e(11527),P=function(){var b=(0,p.useState)(!1),A=d()(b,2),O=A[0],j=A[1],U=(0,p.useState)(t()(R)),T=d()(U,2),N=T[0],L=T[1];return(0,s.jsx)(g.Z,{direction:"west",loading:O,style:{height:300},vertexSize:{width:196,height:54},config:{tooltips:!1,connectable:!1,highlight:!1,toolbarStyle:{bottom:100,right:0,top:"initial"},defaultEdgeStyle:function(i){var a,l=i.mxConstants,u=i.mxEdgeStyle;return a={},r()(a,l.STYLE_ROUNDED,1),r()(a,l.STYLE_CURVED,0),r()(a,l.STYLE_EDGE,u.EntityRelation),a}},vertexKey:"metaId",onContextMenu:function(i,a){return a.vertex?[{id:"insert",title:"\u63D2\u5165"},{id:"remove",title:"\u5220\u9664"}]:[]},onClick:function(i,a,l){var u=l.target;u.closest(".loadData")&&(j(!0),setTimeout(function(){L(function(c){for(var C=t()(c);C.length;){var x=C.pop();if(x.metaId===i.value.metaId){var k="randomId__"+new Date().valueOf(),M=i.value.metaInfo.type===2?"childNode":"parentNode";x[M]=x[M]||[],x[M].push({metaId:k,metaInfo:{name:k+"tableName",type:x.metaInfo.type}});break}C.push.apply(C,t()(x.childNode||[])),C.push.apply(C,t()(x.parentNode||[]))}return t()(c)}),j(!1)},300))},graphData:N,onDrawVertex:function(i){return["","whiteSpace=wrap;fillColor=#ffffff;strokeColor=#3F87FF;","whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;","whiteSpace=wrap;fillColor=#ffffff;strokeColor=#26D6AE;"][i.metaInfo.type]},onDrawEdge:function(i,a){return i.value.metaInfo.type===3?"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#26D6AE;":a.value.metaInfo.type===2?"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;":"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#3F87FF;"},onRenderActions:function(i,a){var l=a.mxOutline;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,s.jsx)("button",{onClick:function(){return i.center(!0,!0)},children:(0,s.jsx)(E.default,{title:"\u5C45\u4E2D",children:"center"})}),(0,s.jsx)("button",{onClick:function(){return v.default.success("download successfully")},children:(0,s.jsx)(E.default,{title:"\u4E0B\u8F7D",children:"download"})})]}),(0,s.jsxs)("div",{style:{marginTop:10},children:[(0,s.jsx)("button",{onClick:function(){var c=document.getElementById("outline");c.innerHTML?c.innerHTML="":new l(i,c)},children:(0,s.jsx)(E.default,{title:"\u5BFC\u822A\u5668",children:"navigator"})}),(0,s.jsx)("div",{id:"outline"})]})]})},onRenderCell:function(i){if(i.vertex&&i.value){var a=i.value;if(a){var l,u=a.metaInfo.type===3,c=u?"left":"right";return m.renderToString((0,s.jsxs)("div",{style:{position:"relative",width:196,height:54,paddingTop:10},children:[(0,s.jsx)("span",{children:a.metaInfo.name}),a.metaInfo.type!==1&&(0,s.jsx)("img",{className:"loadData",width:14,height:14,style:(l={cursor:"pointer",position:"absolute"},r()(l,c,0),r()(l,"top","50%"),r()(l,"transform","translate("+(u?"-50%":"50%")+",-50%)"),l),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IArs4c6QAAADNQTFRFAAAAscTOtr/Isb7HsLzGsL7Frr3Fr73Gr7zFr73Frr3FrrzFrrzGrrzF5+vt5+vu////mHsMmQAAAA10Uk5TABocTmtum7bZ8vP8/XH+TQkAAACASURBVCjPdVLZAoAgCMMjb8r//9oOjazcnpApzAFRg7Y+pBS81TRCucwd2aknbyIPiObOL4VfKEu//8kfzPVGRf4hnn2cHLdNQnfoFD1cq4RZk+UZwZb8nPAU5kSg1PpWQVOQ/sTaCVgKNody4QdHS9bREmwitB0PCo8WL8NsfXarIha/m4rePQAAAABJRU5ErkJggg=="})]}))}}return""},children:function(){return(0,s.jsx)("div",{children:(0,s.jsxs)("ul",{style:{listStyle:"none",display:"flex",justifyContent:"center",gap:"15px"},children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("div",{style:{display:"inline-block",width:12,height:12,marginRight:5,background:"rgb(38, 214, 174)"}}),"1"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("div",{style:{display:"inline-block",width:12,height:12,marginRight:5,background:"rgb(63, 135, 255)"}}),"2"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("div",{style:{display:"inline-block",width:12,height:12,marginRight:5,background:"rgb(116, 96, 239)"}}),"3"]})]})})}})}},83076:function(){}}]);

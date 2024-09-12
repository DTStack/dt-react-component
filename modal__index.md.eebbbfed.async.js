"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[1735],{90748:function(C,c,t){t.r(c);var E=t(38047),h=t(47086),p=t(9700),g=t(9570),_=t(94786),x=t(20379),a=t(81133),u=t(47860),o=t(84488),P=t(79685),e=t(63342);function f(){var v=(0,o.eL)(),n=v.texts;return(0,e.jsx)(o.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"modal-\u6A21\u6001\u6846",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#modal-\u6A21\u6001\u6846",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Modal \u6A21\u6001\u6846"]}),(0,e.jsxs)("h2",{id:"\u4F55\u65F6\u4F7F\u7528",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F55\u65F6\u4F7F\u7528"]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:n[0].value}),(0,e.jsx)("li",{children:n[1].value}),(0,e.jsx)("li",{children:n[2].value})]}),(0,e.jsxs)("h2",{id:"\u793A\u4F8B",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u793A\u4F8B",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u793A\u4F8B"]})]}),(0,e.jsx)(o.Z1,{items:[{demo:{id:"modal-demo-basic"},previewerProps:{title:"\u6700\u5927\u9AD8\u5EA6\u9650\u5236",filename:"src/modal/demos/basic.tsx"}},{demo:{id:"modal-demo-size"},previewerProps:{title:"\u5C3A\u5BF8",filename:"src/modal/demos/size.tsx"}},{demo:{id:"modal-demo-banner"},previewerProps:{title:"\u652F\u6301 banner",filename:"src/modal/demos/banner.tsx"}},{demo:{id:"modal-demo-bannerprops"},previewerProps:{title:"\u652F\u6301\u4F20 banner \u7684 Props \u5C5E\u6027",filename:"src/modal/demos/bannerProps.tsx"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("h3",{id:"alertprops",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#alertprops",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"AlertProps"]}),(0,e.jsx)("p",{children:(0,e.jsx)("a",{href:"https://4x-ant-design.antgroup.com/components/alert-cn/#API",children:n[3].value})}),(0,e.jsxs)(x.Z,{children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[4].value}),(0,e.jsx)("th",{children:n[5].value}),(0,e.jsx)("th",{children:n[6].value}),(0,e.jsx)("th",{children:n[7].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[8].value}),(0,e.jsx)("td",{children:n[9].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[10].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[11].value})})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[12].value}),(0,e.jsx)("td",{children:n[13].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[14].value})}),(0,e.jsx)("td",{})]})]})]})]}),(0,e.jsx)(p.Z,{type:"info",children:(0,e.jsxs)("p",{children:[n[15].value,(0,e.jsx)("a",{href:"https://4x.ant.design/components/modal-cn/#API",children:n[16].value})]})})]})})}c.default=f},47860:function(C,c,t){t.d(c,{Z:function(){return v}});var E=t(48651),h=t.n(E),p=t(86516),g=t.n(p),_=t(79685),x=t(39395),a=t(63342),u=function(){return{height:0,opacity:0}},o=function(d){var r=d.scrollHeight;return{height:r,opacity:1}},P=function(d){var r;return{height:(r=d==null?void 0:d.offsetHeight)!==null&&r!==void 0?r:0}},e=function(d,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},f={motionName:"ant-motion-collapse",onAppearStart:u,onEnterStart:u,onAppearActive:o,onEnterActive:o,onLeaveStart:P,onLeaveActive:u,onAppearEnd:e,onEnterEnd:e,onLeaveEnd:e,motionDeadline:500};function v(n){var d=n.title,r=n.children,D=(0,_.useState)(!1),A=g()(D,2),m=A[0],M=A[1],l=(0,_.useRef)(null),s=(0,_.useRef)(void 0);(0,_.useEffect)(function(){return m&&(s.current=window.requestAnimationFrame(function(){l.current&&(l.current.open=!0)})),function(){s.current!==void 0&&window.cancelAnimationFrame(s.current)}},[m]);var O=function(i){i||(s.current!==void 0&&window.cancelAnimationFrame(s.current),s.current=window.requestAnimationFrame(function(){l.current&&(l.current.open=!1)}))};return(0,a.jsxs)("details",{ref:l,className:"dumi-builtins-details",onClick:function(i){i.preventDefault()},"data-open":m,children:[(0,a.jsx)("summary",{onClick:function(){return M(function(i){return!i})},children:d}),(0,a.jsx)(x.default,h()(h()({},f),{},{visible:m,onVisibleChanged:O,children:function(i){var y=i.className,I=i.style;return(0,a.jsx)("section",{className:"dumi-builtins-details-content ".concat(y||""),style:I,children:r})}}))]})}}}]);
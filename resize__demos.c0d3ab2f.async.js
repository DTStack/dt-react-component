"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[8281],{61715:function(D,o,e){e.r(o);var a=e(28152),r=e.n(a),t=e(50959),c=e(32794),_=e(11527);o.default=function(){var u=(0,t.useState)(window.innerWidth),n=r()(u,2),d=n[0],s=n[1],E=(0,t.useState)(window.innerHeight),l=r()(E,2),m=l[0],h=l[1],i=(0,t.useCallback)(function(){s(window.innerWidth),h(window.innerHeight)},[]);return(0,_.jsx)(c.Z,{onResize:i,children:(0,_.jsxs)("div",{children:[(0,_.jsxs)("pre",{children:["window\u9AD8\u5EA6: ",d]}),(0,_.jsxs)("pre",{children:["window\u5BBD\u5EA6: ",m]})]})})}},37061:function(D,o,e){e.r(o);var a=e(28152),r=e.n(a),t=e(50959),c=e(32794),_=e(11527);o.default=function(){var u=(0,t.useState)(0),n=r()(u,2),d=n[0],s=n[1],E=(0,t.useState)(0),l=r()(E,2),m=l[0],h=l[1],i=(0,t.useRef)(null),v=(0,t.useCallback)(function(){s(i.current.clientWidth),h(i.current.clientHeight)},[]);return(0,_.jsxs)(c.Z,{onResize:v,observerEle:i.current,children:[(0,_.jsx)("textarea",{ref:i,style:{resize:"both",maxWidth:"100%"}}),(0,_.jsxs)("pre",{children:["\u5F53\u524D\u5143\u7D20\u7684\u53EF\u89C6\u5BBD: ",d]}),(0,_.jsxs)("pre",{children:["\u5F53\u524D\u5143\u7D20\u7684\u53EF\u89C6\u5BBD: ",m]})]})}},32794:function(D,o,e){var a=e(50959),r=e(11527),t=function(_){var u=_.observerEle,n=_.onResize,d=_.children;return(0,a.useEffect)(function(){if(typeof n=="function")if(u){var s=new ResizeObserver(n);return s.observe(u),function(){s.unobserve(u)}}else return window.addEventListener("resize",n,!1),function(){window.removeEventListener("resize",n,!1)}},[n,u]),(0,r.jsx)(r.Fragment,{children:d})};o.Z=t}}]);

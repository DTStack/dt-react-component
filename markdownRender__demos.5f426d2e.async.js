"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6426],{34170:function(g,t,e){e.r(t);var l=e(86516),u=e.n(l),_=e(79685),m=e(72490),n=e(63342);t.default=function(){var d=(0,_.useState)(""),o=u()(d,2),r=o[0],a=o[1];return(0,_.useEffect)(function(){fetch("https://cdn.jsdelivr.net/npm/dt-react-component@3.0.8/CHANGELOG.md",{method:"get"}).then(function(s){return s.text()}).then(a).catch(function(s){a(s.message)})},[]),(0,n.jsx)("div",{style:{maxHeight:200,overflow:"auto",marginBottom:16},children:(0,n.jsx)(m.Z,{value:r})})}},85198:function(g,t,e){e.r(t);var l=e(86516),u=e.n(l),_=e(79685),m=e(72490),n=e(63342),d=`
\u4EE5\u4E0B\u662F\u4E00\u6BB5 sql \u8BED\u6CD5

\`\`\`sql
 select count(*) from a;
-- name sqltest 
-- type sql 
-- create time 2022-11-09 16:13:45 
-- desc


-- create table employees(name string);
insert into employees values('1111');


select * from employees
\`\`\`
`;t.default=function(){var o=(0,_.useState)(""),r=u()(o,2),a=r[0],s=r[1];return(0,_.useEffect)(function(){s(d)},[]),(0,n.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,n.jsx)(m.Z,{dark:!0,value:a})})}},10804:function(g,t,e){e.r(t);var l=e(86516),u=e.n(l),_=e(79685),m=e(72490),n=e(63342),d=`
\u4EE5\u4E0B\u662F\u4E00\u6BB5 sql \u8BED\u6CD5

\`\`\`sql
 select count(*) from a;
-- name sqltest 
-- type sql 
-- create time 2022-11-09 16:13:45 
-- desc


-- create table employees(name string);
insert into employees values('1111');


select * from employees
\`\`\`
`;t.default=function(){var o=(0,_.useState)(""),r=u()(o,2),a=r[0],s=r[1];return(0,_.useEffect)(function(){s(d)},[]),(0,n.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,n.jsx)(m.Z,{value:a})})}},72490:function(g,t,e){e.d(t,{Z:function(){return y}});var l=e(79685),u=e(68591),_=e.n(u),m=e(37664),n=e.n(m),d=e(94306),o=e.n(d),r=e(37203),a=e.n(r),s=e(45206),v=o();v.registerLanguage("sql",a());function O(){return{type:"output",filter:function(f){return n().helper.replaceRecursiveRegExp(f.replace(/&gt;/g,">").replace(/&lt;/g,"<"),function(D,h,c,p){var i=(c.match(/class=\"([^ \"]+)/)||[])[1],M=c.slice(0,18)+"hljs "+c.slice(18);return i&&v.getLanguage(i)?M+v.highlight(h,{language:i}).value+p:M+v.highlightAuto(h).value+p},"<pre><code\\b[^>]*>","</code></pre>","g")}}}var P=e(63342);function y(E){var f=E.value,D=f===void 0?"":f,h=E.className,c=E.dark,p=(0,l.useMemo)(function(){var i=new(n()).Converter({extensions:[O],emoji:!0});return i.makeHtml(D)},[D]);return(0,P.jsx)("div",{className:_()("dtc-markdown-render-body",c?"dtc-vs-dark":"dtc-vs",h),dangerouslySetInnerHTML:{__html:p}})}}}]);

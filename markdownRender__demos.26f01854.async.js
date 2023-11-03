"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6426],{40820:function(g,n,e){e.r(n);var r=e(54306),l=e.n(r),s=e(50959),o=e(77012),t=e(11527);n.default=function(){var u=(0,s.useState)(""),_=l()(u,2),a=_[0],d=_[1];return(0,s.useEffect)(function(){fetch("https://cdn.jsdelivr.net/npm/dt-react-component@3.0.8/CHANGELOG.md",{method:"get"}).then(function(m){return m.text()}).then(d)},[]),(0,t.jsx)("div",{style:{maxHeight:200,overflow:"auto",marginBottom:16},children:(0,t.jsx)(o.Z,{value:a})})}},4310:function(g,n,e){e.r(n);var r=e(54306),l=e.n(r),s=e(50959),o=e(77012),t=e(11527),u=`
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
`;n.default=function(){var _=(0,s.useState)(""),a=l()(_,2),d=a[0],m=a[1];return(0,s.useEffect)(function(){m(u)},[]),(0,t.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,t.jsx)(o.Z,{dark:!0,value:d})})}},2070:function(g,n,e){e.r(n);var r=e(54306),l=e.n(r),s=e(50959),o=e(77012),t=e(11527),u=`
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
`;n.default=function(){var _=(0,s.useState)(""),a=l()(_,2),d=a[0],m=a[1];return(0,s.useEffect)(function(){m(u)},[]),(0,t.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,t.jsx)(o.Z,{value:d})})}},77012:function(g,n,e){e.d(n,{Z:function(){return B}});var r=e(50959),l=e(84875),s=e.n(l),o=e(26132),t=e.n(o),u=e(88467),_=e.n(u),a=e(74883),d=e.n(a),m=e(7310),v=_();v.registerLanguage("sql",d());function O(){return{type:"output",filter:function(f){return t().helper.replaceRecursiveRegExp(f.replace(/&gt;/g,">").replace(/&lt;/g,"<"),function(M,D,c,h){var i=(c.match(/class=\"([^ \"]+)/)||[])[1],p=c.slice(0,18)+"hljs "+c.slice(18);return i&&v.getLanguage(i)?p+v.highlight(D,{language:i}).value+h:p+v.highlightAuto(D).value+h},"<pre><code\\b[^>]*>","</code></pre>","g")}}}var P=e(11527);function B(E){var f=E.value,M=f===void 0?"":f,D=E.className,c=E.dark,h=(0,r.useMemo)(function(){var i=new(t()).Converter({extensions:[O],emoji:!0});return i.makeHtml(M)},[M]);return(0,P.jsx)("div",{className:s()("dtc-markdown-render-body",c?"dtc-vs-dark":"dtc-vs",D),dangerouslySetInnerHTML:{__html:h}})}}}]);

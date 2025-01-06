"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6426],{84442:function(p,t,e){e.r(t);var l=e(54306),u=e.n(l),_=e(50959),m=e(60448),n=e(11527);t.default=function(){var d=(0,_.useState)(""),a=u()(d,2),o=a[0],s=a[1];return(0,_.useEffect)(function(){fetch("https://cdn.jsdelivr.net/npm/dt-react-component@3.0.8/CHANGELOG.md",{method:"get"}).then(function(r){return r.text()}).then(s).catch(function(r){s(r.message)})},[]),(0,n.jsx)("div",{style:{maxHeight:200,overflow:"auto",marginBottom:16},children:(0,n.jsx)(m.Z,{value:o})})}},26777:function(p,t,e){e.r(t);var l=e(54306),u=e.n(l),_=e(50959),m=e(60448),n=e(11527),d=`
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
`;t.default=function(){var a=(0,_.useState)(""),o=u()(a,2),s=o[0],r=o[1];return(0,_.useEffect)(function(){r(d)},[]),(0,n.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,n.jsx)(m.Z,{dark:!0,value:s})})}},52547:function(p,t,e){e.r(t);var l=e(54306),u=e.n(l),_=e(50959),m=e(60448),n=e(11527),d=`
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
`;t.default=function(){var a=(0,_.useState)(""),o=u()(a,2),s=o[0],r=o[1];return(0,_.useEffect)(function(){r(d)},[]),(0,n.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,n.jsx)(m.Z,{value:s})})}},60448:function(p,t,e){e.d(t,{Z:function(){return B}});var l=e(50959),u=e(84875),_=e.n(u),m=e(26132),n=e.n(m),d=e(88467),a=e.n(d),o=e(74883),s=e.n(o),r=e(55394),i=a();i.registerLanguage("sql",s());function g(){return{type:"output",filter:function(f){return n().helper.replaceRecursiveRegExp(f.replace(/&gt;/g,">").replace(/&lt;/g,"<"),function(O,h,v,D){var E=(v.match(/class=\"([^ \"]+)/)||[])[1],M=v.slice(0,18)+"hljs "+v.slice(18);return E&&i.getLanguage(E)?M+i.highlight(h,{language:E}).value+D:M+i.highlightAuto(h).value+D},"<pre><code\\b[^>]*>","</code></pre>","g")}}}var P=e(11527);function B(c){var f=c.value,O=f===void 0?"":f,h=c.className,v=c.style,D=c.dark,E=(0,l.useMemo)(function(){var M=new(n()).Converter({extensions:[g],emoji:!0});return M.makeHtml(O)},[O]);return(0,P.jsx)("div",{className:_()("dtc-markdown-render-body",D?"dtc-vs-dark":"dtc-vs",h),style:v,dangerouslySetInnerHTML:{__html:E}})}}}]);

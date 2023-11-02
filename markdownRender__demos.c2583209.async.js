"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6426],{84553:function(M,t,e){e.r(t);var r=e(28152),s=e.n(r),_=e(50959),l=e(89732),n=e(11527);t.default=function(){var u=(0,_.useState)(""),a=s()(u,2),o=a[0],m=a[1];return(0,_.useEffect)(function(){fetch("https://cdn.jsdelivr.net/npm/dt-react-component@3.0.8/CHANGELOG.md",{method:"get"}).then(function(d){return d.text()}).then(m)},[]),(0,n.jsx)("div",{style:{maxHeight:200,overflow:"auto",marginBottom:16},children:(0,n.jsx)(l.Z,{value:o})})}},64592:function(M,t,e){e.r(t);var r=e(28152),s=e.n(r),_=e(50959),l=e(89732),n=e(11527),u=`
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
`;t.default=function(){var a=(0,_.useState)(""),o=s()(a,2),m=o[0],d=o[1];return(0,_.useEffect)(function(){d(u)},[]),(0,n.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,n.jsx)(l.Z,{dark:!0,value:m})})}},78208:function(M,t,e){e.r(t);var r=e(28152),s=e.n(r),_=e(50959),l=e(89732),n=e(11527),u=`
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
`;t.default=function(){var a=(0,_.useState)(""),o=s()(a,2),m=o[0],d=o[1];return(0,_.useEffect)(function(){d(u)},[]),(0,n.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,n.jsx)(l.Z,{value:m})})}},89732:function(M,t,e){e.d(t,{Z:function(){return B}});var r=e(50959),s=e(84875),_=e.n(s),l=e(26132),n=e.n(l),u=e(88467),a=e.n(u),o=e(74883),m=e.n(o),d=e(32663),E=a();E.registerLanguage("sql",m());function P(){return{type:"output",filter:function(f){return n().helper.replaceRecursiveRegExp(f.replace(/&gt;/g,">").replace(/&lt;/g,"<"),function(p,h,c,D){var v=(c.match(/class=\"([^ \"]+)/)||[])[1],O=c.slice(0,18)+"hljs "+c.slice(18);return v&&E.getLanguage(v)?O+E.highlight(h,{language:v}).value+D:O+E.highlightAuto(h).value+D},"<pre><code\\b[^>]*>","</code></pre>","g")}}}var g=e(11527);function B(i){var f=i.value,p=f===void 0?"":f,h=i.className,c=i.dark,D=(0,r.useMemo)(function(){var v=new(n()).Converter({extensions:[P],emoji:!0});return v.makeHtml(p)},[p]);return(0,g.jsx)("div",{className:_()("dtc-markdown-render-body",c?"dtc-vs-dark":"dtc-vs",h),dangerouslySetInnerHTML:{__html:D}})}}}]);

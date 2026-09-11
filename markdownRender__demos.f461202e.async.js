"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[8710],{65956:(function(O,n,e){e.r(n);var u=e(55472),_=e.n(u),o=e(30758),d=e(72051),t=e(86070);n.default=(function(){var m=(0,o.useState)(""),l=_()(m,2),a=l[0],s=l[1];return(0,o.useEffect)(function(){fetch("https://cdn.jsdelivr.net/npm/dt-react-component@3.0.8/CHANGELOG.md",{method:"get"}).then(function(r){return r.text()}).then(s).catch(function(r){s(r.message)})},[]),(0,t.jsx)("div",{style:{maxHeight:200,overflow:"auto",marginBottom:16},children:(0,t.jsx)(d.A,{value:a})})}),e.dn(n.default)}),23002:(function(O,n,e){e.r(n);var u=e(55472),_=e.n(u),o=e(30758),d=e(72051),t=e(86070),m=`
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
`;n.default=(function(){var l=(0,o.useState)(""),a=_()(l,2),s=a[0],r=a[1];return(0,o.useEffect)(function(){r(m)},[]),(0,t.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,t.jsx)(d.A,{dark:!0,value:s})})}),e.dn(n.default)}),32194:(function(O,n,e){e.r(n);var u=e(55472),_=e.n(u),o=e(30758),d=e(72051),t=e(86070),m=`
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
`;n.default=(function(){var l=(0,o.useState)(""),a=_()(l,2),s=a[0],r=a[1];return(0,o.useEffect)(function(){r(m)},[]),(0,t.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,t.jsx)(d.A,{value:s})})}),e.dn(n.default)}),72051:(function(O,n,e){e.d(n,{A:function(){return B}});var u=e(30758),_=e(97500),o=e.n(_),d=e(90614),t=e.n(d),m=e(78993),l=e.n(m),a=e(15340),s=e.n(a),r=e(9039),i=l();i.registerLanguage("sql",s());function P(){return{type:"output",filter:function(f){return t().helper.replaceRecursiveRegExp(f.replace(/&gt;/g,">").replace(/&lt;/g,"<"),function(g,h,v,D){var E=(v.match(/class=\"([^ \"]+)/)||[])[1],M=v.slice(0,18)+"hljs "+v.slice(18);return E&&i.getLanguage(E)?M+i.highlight(h,{language:E}).value+D:M+i.highlightAuto(h).value+D},"<pre><code\\b[^>]*>","</code></pre>","g")}}}var A=e(86070);function B(c){var f=c.value,g=f===void 0?"":f,h=c.className,v=c.style,D=c.dark,E=(0,u.useMemo)(function(){var M=new(t()).Converter({extensions:[P],emoji:!0});return M.makeHtml(g)},[g]);return(0,A.jsx)("div",{className:o()("dtc-markdown-render-body",D?"dtc-vs-dark":"dtc-vs",h),style:v,dangerouslySetInnerHTML:{__html:E}})}})}]);

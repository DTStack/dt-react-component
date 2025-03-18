"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[4905],{42976:function(G,C,n){n.r(C),n.d(C,{default:function(){return t}});var y=n(58383),$=n.n(y),b=n(43249),B=n(54306),K=n.n(B),d=n(50959),u=n(1342),_=n(24528),o=n(11527);function t(){var p,e=u.Z.useChat(),s=(0,d.useState)(""),F=K()(s,2),M=F[0],P=F[1],g=function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:M,U=T.trim();if(!(e.loading()||!U)){P("");var m=new Date().valueOf().toString(),a=(new Date().valueOf()+1).toString();e.prompt.create({id:m,title:U}),e.message.create(m,{id:a,content:""}),(0,_.t)({message:U,onopen:function(){e.start(m,a)},onmessage:function(i){e.push(m,a,i)},onstop:function(){e.close(m,a)}})}};return(0,d.useEffect)(function(){e.conversation.create({id:new Date().valueOf().toString()})},[]),(0,o.jsx)("div",{style:{width:"100%",height:400},children:(0,o.jsxs)(u.Z,{chat:e,children:[(0,o.jsx)(u.Z.Content,{data:((p=e.conversation.get())===null||p===void 0?void 0:p.prompts)||[],placeholder:(0,o.jsxs)("h1",{children:["\u6709\u4EC0\u4E48\u53EF\u4EE5\u5E2E\u5FD9\u7684\uFF1F",(0,o.jsx)("br",{}),(0,o.jsx)(b.default,{onClick:function(){return g("\u8BF7\u544A\u8BC9\u6211\u4E00\u9996\u8BD7")},children:"\u8FD4\u56DE\u4E00\u9996\u8BD7"})]})}),(0,o.jsxs)("div",{style:{display:"flex",gap:4},children:[(0,o.jsx)(u.Z.Input,{value:M,onChange:P,onPressEnter:function(){return g()},placeholder:"\u8BF7\u8F93\u5165\u60F3\u54A8\u8BE2\u7684\u5185\u5BB9\u2026"}),(0,o.jsx)(u.Z.Button,{type:"primary",onClick:function(){return g()},disabled:e.loading()||!M,children:(0,o.jsx)(u.Z.Icon.SendIcon,{style:{fontSize:16}})})]})]})})}},88986:function(G,C,n){n.r(C),n.d(C,{default:function(){return un}});var y=n(58383),$=n.n(y),b=n(43249),B=n(85180),K=n.n(B),d=n(25753),u=n(52510),_=n.n(u),o=n(57213),t=n.n(o),p=n(63466),e=n.n(p),s=n(21140),F=n.n(s),M=n(58853),P=n.n(M),g=n(38888),D=n.n(g),T=n(93525),U=n.n(T),m=n(54306),a=n.n(m),l=n(50959),i=n(1342),h=n(66064),j=n(53874),tn=n(24528),E=n(11527);function un(){var J=(0,l.useState)([{label:"Tab 1",children:"Content of Tab 1",key:"1"}]),x=a()(J,2),v=x[0],z=x[1],Y=(0,l.useState)("1"),V=a()(Y,2),c=V[0],X=V[1],H=(0,l.useState)({}),nn=a()(H,2),en=nn[0],Q=nn[1],rn=function(){var A=new Date().valueOf().toString(),f=U()(v);f.push({label:"New Tab",children:"Content of new Tab",key:A}),z(f),X(A)},an=function(A){var f=c,W=-1;v.forEach(function(k,w){k.key===A&&(W=w-1)});var N=v.filter(function(k){return k.key!==A});N.length&&f===A&&(W>=0?f=N[W].key:f=N[0].key),z(N),X(f)},_n=(0,l.useMemo)(function(){return en[c]},[c,en]),sn=function(A){if(!_n){var f=new Date().valueOf().toString(),W=(new Date().valueOf()+1).toString(),N=(new Date().valueOf()+2).toString(),k=new(function(I){P()(r,I);var O=D()(r);function r(){return F()(this,r),O.apply(this,arguments)}return e()(r)}(h.v0))({id:W}),w=new(function(I){P()(r,I);var O=D()(r);function r(){return F()(this,r),O.apply(this,arguments)}return e()(r)}(h.NL))({id:f,title:A,messages:[k]}),ln=new(function(I){P()(r,I);var O=D()(r);function r(){return F()(this,r),O.apply(this,arguments)}return e()(r)}(h.ri))({id:N,prompts:[w]});Q(function(I){return t()(t()({},I),{},_()({},c,ln))}),(0,tn.t)({message:A,onopen:function(){Q(function(O){return t()(t()({},O),{},_()({},c,(0,j.Uy)(O[c],function(r){var L=r.prompts.find(function(S){return S.id===f}),R=L==null?void 0:L.messages.find(function(S){return S.id===W});R&&(R.status=h.rJ.GENERATING)})))})},onmessage:function(O){Q(function(r){return t()(t()({},r),{},_()({},c,(0,j.Uy)(r[c],function(L){var R=L.prompts.find(function(q){return q.id===f}),S=R==null?void 0:R.messages.find(function(q){return q.id===W});S&&(S.content+=O)})))})},onstop:function(){Q(function(O){return t()(t()({},O),{},_()({},c,(0,j.Uy)(O[c],function(r){var L=r.prompts.find(function(S){return S.id===f}),R=L==null?void 0:L.messages.find(function(S){return S.id===W});R&&(R.status=h.rJ.DONE)})))})}})}};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(d.default,{type:"editable-card",onChange:X,activeKey:c,onEdit:function(A,f){f==="add"?rn():an(A)},children:v.map(function(Z){return(0,E.jsx)(d.default.TabPane,{tab:Z.label,closable:v.length!==1},Z.key)})}),(0,E.jsx)(on,{data:_n,onSubmit:sn})]})}function on(J){var x=J.data,v=J.onSubmit,z=i.Z.useChat(),Y=(0,l.useState)(""),V=a()(Y,2),c=V[0],X=V[1];return(0,E.jsx)("div",{style:{width:"100%",height:400},children:(0,E.jsxs)(i.Z,{chat:z,children:[(0,E.jsx)(i.Z.Content,{data:(x==null?void 0:x.prompts)||[],placeholder:(0,E.jsxs)("h1",{children:["\u6709\u4EC0\u4E48\u53EF\u4EE5\u5E2E\u5FD9\u7684\uFF1F",(0,E.jsx)("br",{}),(0,E.jsx)(b.default,{onClick:function(){return v==null?void 0:v("\u8BF7\u544A\u8BC9\u6211\u4E00\u9996\u8BD7")},children:"\u8FD4\u56DE\u4E00\u9996\u8BD7"})]})}),(0,E.jsxs)("div",{style:{display:"flex",gap:4},children:[(0,E.jsx)(i.Z.Input,{value:c,onChange:X,onPressEnter:function(){return v==null?void 0:v(c)},placeholder:"\u8BF7\u8F93\u5165\u60F3\u54A8\u8BE2\u7684\u5185\u5BB9\u2026"}),(0,E.jsx)(i.Z.Button,{type:"primary",onClick:function(){return v==null?void 0:v(c)},disabled:z.loading()||!c,children:(0,E.jsx)(i.Z.Icon.SendIcon,{style:{fontSize:16}})})]})]})})}},60989:function(G,C,n){n.r(C),n.d(C,{default:function(){return p}});var y=n(58383),$=n.n(y),b=n(43249),B=n(54306),K=n.n(B),d=n(50959),u=n(49032),_=n(1342),o=n(24528),t=n(11527);function p(){var e,s=_.Z.useChat(),F=(0,d.useState)(""),M=K()(F,2),P=M[0],g=M[1],D=function(){var U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:P,m=U.trim();if(!(s.loading()||!m)){g("");var a=new Date().valueOf().toString(),l=(new Date().valueOf()+1).toString();s.prompt.create({id:a,title:m}),s.message.create(a,{id:l,content:""}),(0,o.t)({message:m,onopen:function(){s.start(a,l)},onmessage:function(h){s.push(a,l,h)},onstop:function(){s.close(a,l)}})}};return(0,d.useEffect)(function(){s.conversation.create({id:new Date().valueOf().toString()})},[]),(0,t.jsx)("div",{style:{width:"100%",height:400},children:(0,t.jsxs)(_.Z,{chat:s,messageIcons:function(){return(0,t.jsx)(u.Z,{className:"dtc__message__icon"})},children:[(0,t.jsx)(_.Z.Content,{data:((e=s.conversation.get())===null||e===void 0?void 0:e.prompts)||[],placeholder:(0,t.jsxs)("h1",{children:["\u6709\u4EC0\u4E48\u53EF\u4EE5\u5E2E\u5FD9\u7684\uFF1F",(0,t.jsx)("br",{}),(0,t.jsx)(b.default,{onClick:function(){return D("\u8BF7\u544A\u8BC9\u6211\u4E00\u9996\u8BD7")},children:"\u8FD4\u56DE\u4E00\u9996\u8BD7"})]})}),(0,t.jsxs)("div",{style:{display:"flex",gap:4},children:[(0,t.jsx)(_.Z.Input,{value:P,onChange:g,onPressEnter:function(){return D()},placeholder:"\u8BF7\u8F93\u5165\u60F3\u54A8\u8BE2\u7684\u5185\u5BB9\u2026"}),(0,t.jsx)(_.Z.Button,{type:"primary",onClick:function(){return D()},disabled:s.loading()||!P,children:(0,t.jsx)(_.Z.Icon.SendIcon,{style:{fontSize:16}})})]})]})})}},83668:function(G,C,n){n.r(C),n.d(C,{default:function(){return t}});var y=n(58383),$=n.n(y),b=n(43249),B=n(54306),K=n.n(B),d=n(50959),u=n(1342),_=n(11527),o="\n[change convert]() in the content.\n\n```sql\nselect * from table;\n```\n";function t(){var p,e=u.Z.useChat(),s=(0,d.useState)(""),F=K()(s,2),M=F[0],P=F[1],g=(0,d.useState)(!1),D=K()(g,2),T=D[0],U=D[1],m=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:M,i=l.trim();if(!(e.loading()||!i)){P("");var h=new Date().valueOf().toString(),j=(new Date().valueOf()+1).toString();e.prompt.create({id:h,title:i}),e.message.create(h,{id:j,content:""}),Promise.resolve().then(function(){e.start(h,j),e.push(h,j,o),e.close(h,j)})}};return(0,d.useEffect)(function(){e.conversation.create({id:new Date().valueOf().toString()})},[]),(0,_.jsx)("div",{style:{width:"100%",height:400},children:(0,_.jsxs)(u.Z,{chat:e,codeBlock:{convert:T},components:{a:function(l){var i=l.children;return(0,_.jsx)(b.default,{type:"primary",size:"small",ghost:!0,onClick:function(){return U(function(j){return!j})},children:i})}},children:[(0,_.jsx)(u.Z.Content,{data:((p=e.conversation.get())===null||p===void 0?void 0:p.prompts)||[],placeholder:(0,_.jsxs)("h1",{children:["\u6709\u4EC0\u4E48\u53EF\u4EE5\u5E2E\u5FD9\u7684\uFF1F",(0,_.jsx)("br",{}),(0,_.jsx)(b.default,{onClick:function(){return m("\u751F\u6210 CodeBlock")},children:"\u751F\u6210 CodeBlock"})]})}),(0,_.jsxs)("div",{style:{display:"flex",gap:4},children:[(0,_.jsx)(u.Z.Input,{value:M,onChange:P,onPressEnter:function(){return m()},placeholder:"\u8BF7\u8F93\u5165\u60F3\u54A8\u8BE2\u7684\u5185\u5BB9\u2026"}),(0,_.jsx)(u.Z.Button,{type:"primary",onClick:function(){return m()},disabled:e.loading()||!M,children:(0,_.jsx)(u.Z.Icon.SendIcon,{style:{fontSize:16}})})]})]})})}},24528:function(G,C,n){n.d(C,{t:function(){return b}});var y=[`### \u5C06\u8FDB\u9152
\u541B\u4E0D\u89C1\u9EC4\u6CB3\u4E4B\u6C34\u5929\u4E0A\u6765\uFF0C\u5954\u6D41\u5230\u6D77\u4E0D\u590D\u56DE\u3002

\u541B\u4E0D\u89C1\u9AD8\u5802\u660E\u955C\u60B2\u767D\u53D1\uFF0C\u671D\u5982\u9752\u4E1D\u66AE\u6210\u96EA\u3002

\u4EBA\u751F\u5F97\u610F\u987B\u5C3D\u6B22\uFF0C\u83AB\u4F7F\u91D1\u6A3D\u7A7A\u5BF9\u6708\u3002

\u5929\u751F\u6211\u6750\u5FC5\u6709\u7528\uFF0C\u5343\u91D1\u6563\u5C3D\u8FD8\u590D\u6765\u3002

\u70F9\u7F8A\u5BB0\u725B\u4E14\u4E3A\u4E50\uFF0C\u4F1A\u987B\u4E00\u996E\u4E09\u767E\u676F\u3002

\u5C91\u592B\u5B50\uFF0C\u4E39\u4E18\u751F\uFF0C\u5C06\u8FDB\u9152\uFF0C\u676F\u83AB\u505C\u3002

\u4E0E\u541B\u6B4C\u4E00\u66F2\uFF0C\u8BF7\u541B\u4E3A\u6211\u503E\u8033\u542C\u3002

\u949F\u9F13\u9994\u7389\u4E0D\u8DB3\u8D35\uFF0C\u4F46\u613F\u957F\u9189\u4E0D\u613F\u9192\u3002

\u53E4\u6765\u5723\u8D24\u7686\u5BC2\u5BDE\uFF0C\u60DF\u6709\u996E\u8005\u7559\u5176\u540D\u3002

\u9648\u738B\u6614\u65F6\u5BB4\u5E73\u4E50\uFF0C\u6597\u9152\u5341\u5343\u6063\u6B22\u8C11\u3002

\u4E3B\u4EBA\u4F55\u4E3A\u8A00\u5C11\u94B1\uFF0C\u5F84\u987B\u6CBD\u53D6\u5BF9\u541B\u914C\u3002

\u4E94\u82B1\u9A6C\u3001\u5343\u91D1\u88D8\uFF0C\u547C\u513F\u5C06\u51FA\u6362\u7F8E\u9152\uFF0C\u4E0E\u5C14\u540C\u9500\u4E07\u53E4\u6101\u3002
`];function $(){return Math.floor(Math.random()*10)}function b(B){var K=B.message,d=B.onopen,u=B.onmessage,_=B.onstop;if(d==null||d(),K.includes("\u8BD7"))var o=y[0],t=0,p=window.setInterval(function(){var e=$(),s=t+e;if(s>=o.length){s=o.length,window.clearInterval(p),u==null||u(o.slice(t,t+e)),_==null||_();return}u==null||u(o.slice(t,t+e)),t+=e},100);else u==null||u("\u6839\u636E\u4F60\u7684\u63CF\u8FF0\u6682\u672A\u68C0\u7D22\u76F8\u5173\u8BD7\u8BCD\u3002"),_==null||_()}}}]);

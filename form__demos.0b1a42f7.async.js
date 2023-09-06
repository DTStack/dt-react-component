"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6294,1926],{99783:function(L,l,e){e.r(l);var I=e(86366),K=e.n(I),D=e(17727),T=e(58383),P=e.n(T),i=e(43249),E=e(51317),h=e.n(E),u=e(96169),c=e(90650),y=e.n(c),a=e(35031),s=e(54306),v=e.n(s),d=e(50959),m=e(91820),g=e(8160),n=e(11527);l.default=function(){var W=m.Form.useForm(),p=v()(W,1),M=p[0],f=(0,d.useState)(!1),_=v()(f,2),t=_[0],r=_[1],C=function(){r(!0),(0,g.Z)().then(function(A){M.setFieldValue("data",A)}).finally(function(){r(!1)})},O=function(){M.validateFields().then(function(A){console.log(A)})};return(0,d.useEffect)(function(){C()},[]),(0,n.jsxs)(D.default,{direction:"vertical",size:8,align:"center",style:{marginBottom:8},children:[(0,n.jsx)(m.Form,{form:M,layout:"vertical",children:(0,n.jsx)(m.Form.Table,{name:"data",loading:t,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,n.jsx)(a.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",render:function(){return(0,n.jsx)(m.EllipsisText,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,n.jsx)(a.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,n.jsx)(a.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(A){var R=A.name;return(0,n.jsx)(i.default,{type:"link",onClick:function(){return u.default.info(JSON.stringify(M.getFieldValue(["data",R])))},children:"Configuration"})}}]})}),(0,n.jsx)(i.default,{type:"primary",onClick:O,children:"Submit"})]})}},76204:function(L,l,e){e.r(l);var I=e(90650),K=e.n(I),D=e(35031),T=e(54306),P=e.n(T),i=e(50959),E=e(91820),h=e(8160),u=e(11527);l.default=function(){var c=E.Form.useForm(),y=P()(c,1),a=y[0],s=(0,i.useState)([]),v=P()(s,2),d=v[0],m=v[1],g=(0,i.useState)(!1),n=P()(g,2),W=n[0],p=n[1],M=function(){p(!0),(0,h.Z)().then(function(t){a.setFieldValue("data",t)}).finally(function(){p(!1)})};(0,i.useEffect)(function(){M()},[]);var f=(0,i.useMemo)(function(){return d.map(function(_){var t;return(t=a.getFieldsValue().data)===null||t===void 0?void 0:t.findIndex(function(r){return r.uuid===_})})},[d]);return(0,u.jsx)(E.Form,{form:a,layout:"vertical",style:{height:400},children:(0,u.jsx)(E.Form.Table,{name:"data",loading:W,scroll:{y:280},rowSelection:{selectedRowKeys:f,onChange:function(t){m(a.getFieldsValue().data.filter(function(r,C){return t.includes(C)}).map(function(r){return r.uuid}))}},columns:[{key:"name",title:"Name",dataIndex:"name",rules:[{required:!0,message:"Please Input Name!"}],render:function(t){var r=t.name;return(0,u.jsx)(D.default,{disabled:d.includes(a.getFieldValue(["data",r,"uuid"])),placeholder:"Name"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,u.jsx)(D.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,u.jsx)(D.default,{placeholder:"Company"})}}]})})}},31213:function(L,l,e){e.r(l);var I=e(58383),K=e.n(I),D=e(43249),T=e(91225),P=e.n(T),i=e(47715),E=e(57213),h=e.n(E),u=e(54306),c=e.n(u),y=e(50959),a=e(91820),s=e(11527);l.default=function(){var v=a.Form.useForm(),d=c()(v,1),m=d[0],g=a.Form.useWatch("data",m)||[],n=(0,y.useState)(new Array(10).fill(1).map(function(f,_){return{label:"test-".concat(_),value:_}})),W=c()(n,1),p=W[0],M=(0,y.useMemo)(function(){var f=g.filter(Boolean).map(function(_){return _.name});return p.map(function(_){return h()(h()({},_),{},{disabled:f.includes(_.value)})})},[g.filter(Boolean).map(function(f){return f.name}).toString()]);return(0,s.jsx)(a.Form,{form:m,layout:"vertical",initialValues:{data:[{}]},style:{padding:18},children:(0,s.jsx)(a.Form.Table,{bordered:!0,name:"data",scroll:{y:280},columns:function(_,t){var r=t.remove;return[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,s.jsx)(i.default,{placeholder:"Name",options:M})}},{key:"op",title:"Configuration",render:function(O){var o=O.name;return(0,s.jsx)(D.default,{type:"link",onClick:function(){return r(o)},children:"delete"})}}]},size:"small",footer:function(_,t){var r=t.add;return(0,s.jsx)(D.default,{type:"link",onClick:function(){return r({})},children:"add"})}})})}},37093:function(L,l,e){e.r(l);var I=e(58383),K=e.n(I),D=e(43249),T=e(51317),P=e.n(T),i=e(96169),E=e(91225),h=e.n(E),u=e(47715),c=e(90650),y=e.n(c),a=e(35031),s=e(54306),v=e.n(s),d=e(50959),m=e(91820),g=e(8160),n=e(11527);l.default=function(){var W=m.Form.useForm(),p=v()(W,1),M=p[0],f=(0,d.useState)(!1),_=v()(f,2),t=_[0],r=_[1],C=function(){r(!0),(0,g.Z)().then(function(o){M.setFieldValue("data",o)}).finally(function(){r(!1)})};return(0,d.useEffect)(function(){C()},[]),(0,n.jsx)(m.Form,{form:M,layout:"vertical",style:{height:400},children:(0,n.jsx)(m.Form.Table,{name:"data",loading:t,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,n.jsx)(a.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",required:!0,render:function(){return(0,n.jsx)(u.default,{options:[{label:"female",value:"female"},{label:"male",value:"male"}]})}},{key:"weight",title:"weight",dataIndex:"weight",dependencies:function(o){var A=v()(o,1),R=A[0];return[["data",R,"gender"]]},render:function(o,A,R){var B,U=o.name;return(R==null||(B=R.getFieldValue)===null||B===void 0?void 0:B.call(R,["data",U,"gender"]))==="female"?"--":(0,n.jsx)(m.EllipsisText,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,n.jsx)(a.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,n.jsx)(a.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(o){var A=o.name;return(0,n.jsx)(D.default,{type:"link",onClick:function(){return i.default.info(JSON.stringify(M.getFieldValue(["data",A])))},children:"Configuration"})}}]})})}},83522:function(L,l,e){e.r(l);var I=e(58383),K=e.n(I),D=e(43249),T=e(51317),P=e.n(T),i=e(96169),E=e(90650),h=e.n(E),u=e(35031),c=e(54306),y=e.n(c),a=e(50959),s=e(91820),v=e(8160),d=e(11527);l.default=function(){var m=s.Form.useForm(),g=y()(m,1),n=g[0],W=(0,a.useState)(!1),p=y()(W,2),M=p[0],f=p[1],_=function(){f(!0),(0,v.Z)().then(function(r){n.setFieldValue("data",r)}).finally(function(){f(!1)})};return(0,a.useEffect)(function(){_()},[]),(0,d.jsx)(s.Form,{form:n,layout:"vertical",style:{height:400},children:(0,d.jsx)(s.Form.Table,{name:"data",loading:M,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,d.jsx)(u.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",render:function(){return(0,d.jsx)(s.EllipsisText,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",required:!0,rules:[function(t,r){var C=t.getFieldValue,O=y()(r,1),o=O[0];return{required:C(["data",o,"gender"])==="male",message:"address is Required for male"}}],render:function(){return(0,d.jsx)(u.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,d.jsx)(u.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(r){var C=r.name;return(0,d.jsx)(D.default,{type:"link",onClick:function(){return i.default.info(JSON.stringify(n.getFieldValue(["data",C])))},children:"Configuration"})}}]})})}},8160:function(L,l,e){e.d(l,{Z:function(){return i}});var I=e(25359),K=e.n(I),D=e(49811),T=e.n(D),P=e(87955);function i(){return E.apply(this,arguments)}function E(){return E=T()(K()().mark(function h(){return K()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",new Promise(function(y){setTimeout(function(){var a=Array.from({length:5}).map(function(){return{uuid:P.We.datatype.uuid(),name:P.We.internet.userName(),address:P.We.address.cityName(),company:P.We.company.bs(),gender:P.We.name.sex(),weight:P.We.datatype.number({max:200,min:80})}});y(a)},150)}));case 1:case"end":return c.stop()}},h)})),E.apply(this,arguments)}}}]);

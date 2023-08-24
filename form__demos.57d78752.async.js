"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6294,1926],{99783:function(K,o,e){e.r(o);var g=e(86366),R=e.n(g),c=e(17727),I=e(58383),P=e.n(I),m=e(43249),E=e(51317),U=e.n(E),s=e(96169),f=e(90650),y=e.n(f),a=e(35031),u=e(54306),v=e.n(u),l=e(50959),i=e(91820),A=e(8160),n=e(11527);o.default=function(){var h=i.Form.useForm(),T=v()(h,1),M=T[0],D=(0,l.useState)(!1),_=v()(D,2),t=_[0],r=_[1],C=function(){r(!0),(0,A.Z)().then(function(p){M.setFieldValue("data",p)}).finally(function(){r(!1)})},O=function(){M.validateFields().then(function(p){console.log(p)})};return(0,l.useEffect)(function(){C()},[]),(0,n.jsxs)(c.default,{direction:"vertical",size:8,align:"center",style:{marginBottom:8},children:[(0,n.jsx)(i.Form,{form:M,layout:"vertical",children:(0,n.jsx)(i.Form.Table,{name:"data",loading:t,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,n.jsx)(a.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",render:function(){return(0,n.jsx)(i.EllipsisText,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,n.jsx)(a.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,n.jsx)(a.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(p){var W=p.name;return(0,n.jsx)(m.default,{type:"link",onClick:function(){return s.default.info(JSON.stringify(M.getFieldValue(["data",W])))},children:"Configuration"})}}]})}),(0,n.jsx)(m.default,{type:"primary",onClick:O,children:"Submit"})]})}},76204:function(K,o,e){e.r(o);var g=e(90650),R=e.n(g),c=e(35031),I=e(54306),P=e.n(I),m=e(50959),E=e(91820),U=e(8160),s=e(11527);o.default=function(){var f=E.Form.useForm(),y=P()(f,1),a=y[0],u=(0,m.useState)([]),v=P()(u,2),l=v[0],i=v[1],A=(0,m.useState)(!1),n=P()(A,2),h=n[0],T=n[1],M=function(){T(!0),(0,U.Z)().then(function(t){a.setFieldValue("data",t)}).finally(function(){T(!1)})};(0,m.useEffect)(function(){M()},[]);var D=(0,m.useMemo)(function(){return l.map(function(_){var t;return(t=a.getFieldsValue().data)===null||t===void 0?void 0:t.findIndex(function(r){return r.uuid===_})})},[l]);return(0,s.jsx)(E.Form,{form:a,layout:"vertical",style:{height:400},children:(0,s.jsx)(E.Form.Table,{name:"data",loading:h,scroll:{y:280},rowSelection:{selectedRowKeys:D,onChange:function(t){i(a.getFieldsValue().data.filter(function(r,C){return t.includes(C)}).map(function(r){return r.uuid}))}},columns:[{key:"name",title:"Name",dataIndex:"name",rules:[{required:!0,message:"Please Input Name!"}],render:function(t){var r=t.name;return(0,s.jsx)(c.default,{disabled:l.includes(a.getFieldValue(["data",r,"uuid"])),placeholder:"Name"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,s.jsx)(c.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,s.jsx)(c.default,{placeholder:"Company"})}}]})})}},31213:function(K,o,e){e.r(o);var g=e(58383),R=e.n(g),c=e(43249),I=e(91225),P=e.n(I),m=e(47715),E=e(57213),U=e.n(E),s=e(54306),f=e.n(s),y=e(50959),a=e(91820),u=e(11527);o.default=function(){var v=a.Form.useForm(),l=f()(v,1),i=l[0],A=a.Form.useWatch("data",i)||[],n=(0,y.useState)(new Array(10).fill(1).map(function(D,_){return{label:"test-".concat(_),value:_}})),h=f()(n,1),T=h[0],M=(0,y.useMemo)(function(){var D=A.filter(Boolean).map(function(_){return _.name});return T.map(function(_){return U()(U()({},_),{},{disabled:D.includes(_.value)})})},[A.filter(Boolean).map(function(D){return D.name}).toString()]);return(0,u.jsx)(a.Form,{form:i,layout:"vertical",initialValues:{data:[{}]},style:{padding:18},children:(0,u.jsx)(a.Form.Table,{bordered:!0,name:"data",scroll:{y:280},columns:function(_,t){var r=t.remove;return[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,u.jsx)(m.default,{placeholder:"Name",options:M})}},{key:"op",title:"Configuration",render:function(O){var d=O.name;return(0,u.jsx)(c.default,{type:"link",onClick:function(){return r(d)},children:"delete"})}}]},size:"small",footer:function(_,t){var r=t.add;return(0,u.jsx)(c.default,{type:"link",onClick:function(){return r({})},children:"add"})}})})}},37093:function(K,o,e){e.r(o);var g=e(58383),R=e.n(g),c=e(43249),I=e(51317),P=e.n(I),m=e(96169),E=e(91225),U=e.n(E),s=e(47715),f=e(90650),y=e.n(f),a=e(35031),u=e(54306),v=e.n(u),l=e(50959),i=e(91820),A=e(8160),n=e(11527);o.default=function(){var h=i.Form.useForm(),T=v()(h,1),M=T[0],D=(0,l.useState)(!1),_=v()(D,2),t=_[0],r=_[1],C=function(){r(!0),(0,A.Z)().then(function(d){M.setFieldValue("data",d)}).finally(function(){r(!1)})};return(0,l.useEffect)(function(){C()},[]),(0,n.jsx)(i.Form,{form:M,layout:"vertical",style:{height:400},children:(0,n.jsx)(i.Form.Table,{name:"data",loading:t,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,n.jsx)(a.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",required:!0,render:function(){return(0,n.jsx)(s.default,{options:[{label:"female",value:"female"},{label:"male",value:"male"}]})}},{key:"weight",title:"weight",dataIndex:"weight",dependencies:function(d){var p=v()(d,1),W=p[0];return[["data",W,"gender"]]},render:function(d,p,W){var L,B=d.name;return(W==null||(L=W.getFieldValue)===null||L===void 0?void 0:L.call(W,["data",B,"gender"]))==="female"?"--":(0,n.jsx)(i.EllipsisText,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,n.jsx)(a.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,n.jsx)(a.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(d){var p=d.name;return(0,n.jsx)(c.default,{type:"link",onClick:function(){return m.default.info(JSON.stringify(M.getFieldValue(["data",p])))},children:"Configuration"})}}]})})}},83522:function(K,o,e){e.r(o);var g=e(58383),R=e.n(g),c=e(43249),I=e(51317),P=e.n(I),m=e(96169),E=e(90650),U=e.n(E),s=e(35031),f=e(54306),y=e.n(f),a=e(50959),u=e(91820),v=e(8160),l=e(11527);o.default=function(){var i=u.Form.useForm(),A=y()(i,1),n=A[0],h=(0,a.useState)(!1),T=y()(h,2),M=T[0],D=T[1],_=function(){D(!0),(0,v.Z)().then(function(r){n.setFieldValue("data",r)}).finally(function(){D(!1)})};return(0,a.useEffect)(function(){_()},[]),(0,l.jsx)(u.Form,{form:n,layout:"vertical",style:{height:400},children:(0,l.jsx)(u.Form.Table,{name:"data",loading:M,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,l.jsx)(s.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",render:function(){return(0,l.jsx)(u.EllipsisText,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",required:!0,rules:[function(t,r){var C=t.getFieldValue,O=y()(r,1),d=O[0];return{required:C(["data",d,"gender"])==="male",message:"address is Required for male"}}],render:function(){return(0,l.jsx)(s.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,l.jsx)(s.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(r){var C=r.name;return(0,l.jsx)(c.default,{type:"link",onClick:function(){return m.default.info(JSON.stringify(n.getFieldValue(["data",C])))},children:"Configuration"})}}]})})}},8160:function(K,o,e){e.d(o,{Z:function(){return m}});var g=e(25359),R=e.n(g),c=e(49811),I=e.n(c),P=e(87955);function m(){return E.apply(this,arguments)}function E(){return E=I()(R()().mark(function U(){return R()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",new Promise(function(y){setTimeout(function(){var a=Array.from({length:5}).map(function(){return{uuid:P.We.datatype.uuid(),name:P.We.internet.userName(),address:P.We.address.cityName(),company:P.We.company.bs(),gender:P.We.name.sex(),weight:P.We.datatype.number({max:200,min:80})}});y(a)},150)}));case 1:case"end":return f.stop()}},U)})),E.apply(this,arguments)}}}]);

"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[3060],{58144:function(Lt,pe,m){m.r(pe);var de=m(15810),B=m(13619),C=m(56428),ve=m(79685),je=m(68591),H=m.n(je),t=m(84047),Le=m(67594),U=ve.forwardRef(function(V,Ge){var oe,ge=V.prefixCls,_=ge===void 0?"rc-switch":ge,Ae=V.className,De=V.checked,ze=V.defaultChecked,F=V.disabled,Ye=V.loadingIcon,Xe=V.checkedChildren,Be=V.unCheckedChildren,ye=V.onClick,fe=V.onChange,Ce=V.onKeyDown,We=(0,C.Z)(V,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),Je=(0,t.Z)(!1,{value:De,defaultValue:ze}),Ke=(0,B.Z)(Je,2),ae=Ke[0],Qe=Ke[1];function Ee(K,me){var he=ae;return F||(he=K,Qe(he),fe==null||fe(he,me)),he}function Se(K){K.which===Le.Z.LEFT?Ee(!1,K):K.which===Le.Z.RIGHT&&Ee(!0,K),Ce==null||Ce(K)}function qe(K){var me=Ee(!ae,K);ye==null||ye(me,K)}var Oe=H()(_,Ae,(oe={},(0,de.Z)(oe,"".concat(_,"-checked"),ae),(0,de.Z)(oe,"".concat(_,"-disabled"),F),oe));return ve.createElement("button",Object.assign({},We,{type:"button",role:"switch","aria-checked":ae,disabled:F,className:Oe,ref:Ge,onKeyDown:Se,onClick:qe}),Ye,ve.createElement("span",{className:"".concat(_,"-inner")},ae?Xe:Be))});U.displayName="Switch",pe.default=U},28506:function(Lt,pe,m){m.r(pe),m.d(pe,{TabPane:function(){return dt},default:function(){return Ht}});var de=m(6725),B=m(15810),C=m(13619),ve=m(57329),je=m(56428),H=m(86848),t=m(79685),Le=m(68591),U=m.n(Le),V=m(86468),Ge=m(84131),oe=m(84047),ge=m(39676),_=m(1380),Ae=m(10141);function De(e){var o=(0,t.useRef)(),r=(0,t.useRef)(!1);function i(){for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];r.current||(_.Z.cancel(o.current),o.current=(0,_.Z)(function(){e.apply(void 0,n)}))}return(0,t.useEffect)(function(){return r.current=!1,function(){r.current=!0,_.Z.cancel(o.current)}},[]),i}function ze(e){var o=(0,t.useRef)([]),r=(0,t.useState)({}),i=(0,C.Z)(r,2),a=i[1],n=(0,t.useRef)(typeof e=="function"?e():e),l=De(function(){var c=n.current;o.current.forEach(function(h){c=h(c)}),o.current=[],n.current=c,a({})});function u(c){o.current.push(c),l()}return[n.current,u]}var F=m(67594);function Ye(e,o){var r,i=e.prefixCls,a=e.id,n=e.active,l=e.tab,u=l.key,c=l.tab,h=l.disabled,p=l.closeIcon,d=e.closable,g=e.renderWrapper,D=e.removeAriaLabel,S=e.editable,T=e.onClick,W=e.onRemove,O=e.onFocus,j=e.style,N="".concat(i,"-tab");t.useEffect(function(){return W},[]);var I=S&&d!==!1&&!h;function w(x){h||T(x)}function G(x){x.preventDefault(),x.stopPropagation(),S.onEdit("remove",{key:u,event:x})}var z=t.createElement("div",{key:u,ref:o,className:U()(N,(r={},(0,B.Z)(r,"".concat(N,"-with-remove"),I),(0,B.Z)(r,"".concat(N,"-active"),n),(0,B.Z)(r,"".concat(N,"-disabled"),h),r)),style:j,onClick:w},t.createElement("div",{role:"tab","aria-selected":n,id:a&&"".concat(a,"-tab-").concat(u),className:"".concat(N,"-btn"),"aria-controls":a&&"".concat(a,"-panel-").concat(u),"aria-disabled":h,tabIndex:h?null:0,onClick:function(s){s.stopPropagation(),w(s)},onKeyDown:function(s){[F.Z.SPACE,F.Z.ENTER].includes(s.which)&&(s.preventDefault(),w(s))},onFocus:O},c),I&&t.createElement("button",{type:"button","aria-label":D||"remove",tabIndex:0,className:"".concat(N,"-remove"),onClick:function(s){s.stopPropagation(),G(s)}},p||S.removeIcon||"\xD7"));return g?g(z):z}var Xe=t.forwardRef(Ye),Be={width:0,height:0,left:0,top:0};function ye(e,o,r){return(0,t.useMemo)(function(){for(var i,a=new Map,n=o.get((i=e[0])===null||i===void 0?void 0:i.key)||Be,l=n.left+n.width,u=0;u<e.length;u+=1){var c=e[u].key,h=o.get(c);if(!h){var p;h=o.get((p=e[u-1])===null||p===void 0?void 0:p.key)||Be}var d=a.get(c)||(0,H.Z)({},h);d.right=l-d.left-d.width,a.set(c,d)}return a},[e.map(function(i){return i.key}).join("_"),o,r])}var fe={width:0,height:0,left:0,top:0,right:0};function Ce(e,o,r,i,a){var n=a.tabs,l=a.tabPosition,u=a.rtl,c,h,p;["top","bottom"].includes(l)?(c="width",h=u?"right":"left",p=Math.abs(o.left)):(c="height",h="top",p=-o.top);var d=o[c],g=r[c],D=i[c],S=d;return g+D>d&&g<d&&(S=d-D),(0,t.useMemo)(function(){if(!n.length)return[0,0];for(var T=n.length,W=T,O=0;O<T;O+=1){var j=e.get(n[O].key)||fe;if(j[h]+j[c]>p+S){W=O-1;break}}for(var N=0,I=T-1;I>=0;I-=1){var w=e.get(n[I].key)||fe;if(w[h]<p){N=I+1;break}}return[N,W]},[e,p,S,l,n.map(function(T){return T.key}).join("_"),u])}var We=m(11048),Je=m(9324);function Ke(e,o){var r=e.prefixCls,i=e.editable,a=e.locale,n=e.style;return!i||i.showAdd===!1?null:t.createElement("button",{ref:o,type:"button",className:"".concat(r,"-nav-add"),style:n,"aria-label":(a==null?void 0:a.addAriaLabel)||"Add tab",onClick:function(u){i.onEdit("add",{event:u})}},i.addIcon||"+")}var ae=t.forwardRef(Ke);function Qe(e,o){var r=e.prefixCls,i=e.id,a=e.tabs,n=e.locale,l=e.mobile,u=e.moreIcon,c=u===void 0?"More":u,h=e.moreTransitionName,p=e.style,d=e.className,g=e.editable,D=e.tabBarGutter,S=e.rtl,T=e.removeAriaLabel,W=e.onTabClick,O=e.getPopupContainer,j=e.popupClassName,N=(0,t.useState)(!1),I=(0,C.Z)(N,2),w=I[0],G=I[1],z=(0,t.useState)(null),x=(0,C.Z)(z,2),s=x[0],Z=x[1],k="".concat(i,"-more-popup"),f="".concat(r,"-dropdown"),R=s!==null?"".concat(k,"-").concat(s):null,P=n==null?void 0:n.dropdownAriaLabel;function L(v,E){v.preventDefault(),v.stopPropagation(),g.onEdit("remove",{key:E,event:v})}var Q=t.createElement(We.default,{onClick:function(E){var q=E.key,Y=E.domEvent;W(q,Y),G(!1)},prefixCls:"".concat(f,"-menu"),id:k,tabIndex:-1,role:"listbox","aria-activedescendant":R,selectedKeys:[s],"aria-label":P!==void 0?P:"expanded dropdown"},a.map(function(v){var E=g&&v.closable!==!1&&!v.disabled;return t.createElement(We.MenuItem,{key:v.key,id:"".concat(k,"-").concat(v.key),role:"option","aria-controls":i&&"".concat(i,"-panel-").concat(v.key),disabled:v.disabled},t.createElement("span",null,v.tab),E&&t.createElement("button",{type:"button","aria-label":T||"remove",tabIndex:0,className:"".concat(f,"-menu-item-remove"),onClick:function(Y){Y.stopPropagation(),L(Y,v.key)}},v.closeIcon||g.removeIcon||"\xD7"))}));function be(v){for(var E=a.filter(function(ce){return!ce.disabled}),q=E.findIndex(function(ce){return ce.key===s})||0,Y=E.length,ne=0;ne<Y;ne+=1){q=(q+v+Y)%Y;var ee=E[q];if(!ee.disabled){Z(ee.key);return}}}function ie(v){var E=v.which;if(!w){[F.Z.DOWN,F.Z.SPACE,F.Z.ENTER].includes(E)&&(G(!0),v.preventDefault());return}switch(E){case F.Z.UP:be(-1),v.preventDefault();break;case F.Z.DOWN:be(1),v.preventDefault();break;case F.Z.ESC:G(!1);break;case F.Z.SPACE:case F.Z.ENTER:s!==null&&W(s,v);break}}(0,t.useEffect)(function(){var v=document.getElementById(R);v&&v.scrollIntoView&&v.scrollIntoView(!1)},[s]),(0,t.useEffect)(function(){w||Z(null)},[w]);var $=(0,B.Z)({},S?"marginRight":"marginLeft",D);a.length||($.visibility="hidden",$.order=1);var le=U()((0,B.Z)({},"".concat(f,"-rtl"),S)),Te=l?null:t.createElement(Je.default,{prefixCls:f,overlay:Q,trigger:["hover"],visible:a.length?w:!1,transitionName:h,onVisibleChange:G,overlayClassName:U()(le,j),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:O},t.createElement("button",{type:"button",className:"".concat(r,"-nav-more"),style:$,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":k,id:"".concat(i,"-more"),"aria-expanded":w,onKeyDown:ie},c));return t.createElement("div",{className:U()("".concat(r,"-nav-operations"),d),style:p,ref:o},Te,t.createElement(ae,{prefixCls:r,locale:n,editable:g}))}var Ee=t.memo(t.forwardRef(Qe),function(e,o){return o.tabMoving}),Se=(0,t.createContext)(null),qe=.1,Oe=.01,K=20,me=Math.pow(.995,K);function he(e,o){var r=(0,t.useState)(),i=(0,C.Z)(r,2),a=i[0],n=i[1],l=(0,t.useState)(0),u=(0,C.Z)(l,2),c=u[0],h=u[1],p=(0,t.useState)(0),d=(0,C.Z)(p,2),g=d[0],D=d[1],S=(0,t.useState)(),T=(0,C.Z)(S,2),W=T[0],O=T[1],j=(0,t.useRef)();function N(s){var Z=s.touches[0],k=Z.screenX,f=Z.screenY;n({x:k,y:f}),window.clearInterval(j.current)}function I(s){if(a){s.preventDefault();var Z=s.touches[0],k=Z.screenX,f=Z.screenY;n({x:k,y:f});var R=k-a.x,P=f-a.y;o(R,P);var L=Date.now();h(L),D(L-c),O({x:R,y:P})}}function w(){if(a&&(n(null),O(null),W)){var s=W.x/g,Z=W.y/g,k=Math.abs(s),f=Math.abs(Z);if(Math.max(k,f)<qe)return;var R=s,P=Z;j.current=window.setInterval(function(){if(Math.abs(R)<Oe&&Math.abs(P)<Oe){window.clearInterval(j.current);return}R*=me,P*=me,o(R*K,P*K)},K)}}var G=(0,t.useRef)();function z(s){var Z=s.deltaX,k=s.deltaY,f=0,R=Math.abs(Z),P=Math.abs(k);R===P?f=G.current==="x"?Z:k:R>P?(f=Z,G.current="x"):(f=k,G.current="y"),o(-f,-f)&&s.preventDefault()}var x=(0,t.useRef)(null);x.current={onTouchStart:N,onTouchMove:I,onTouchEnd:w,onWheel:z},t.useEffect(function(){function s(R){x.current.onTouchStart(R)}function Z(R){x.current.onTouchMove(R)}function k(R){x.current.onTouchEnd(R)}function f(R){x.current.onWheel(R)}return document.addEventListener("touchmove",Z,{passive:!1}),document.addEventListener("touchend",k,{passive:!1}),e.current.addEventListener("touchstart",s,{passive:!1}),e.current.addEventListener("wheel",f),function(){document.removeEventListener("touchmove",Z),document.removeEventListener("touchend",k)}},[])}function At(){var e=(0,t.useRef)(new Map);function o(i){return e.current.has(i)||e.current.set(i,t.createRef()),e.current.get(i)}function r(i){e.current.delete(i)}return[o,r]}function ct(e,o){var r=t.useRef(e),i=t.useState({}),a=(0,C.Z)(i,2),n=a[1];function l(u){var c=typeof u=="function"?u(r.current):u;c!==r.current&&o(c,r.current),r.current=c,n({})}return[r.current,l]}var st=function(o){var r=o.position,i=o.prefixCls,a=o.extra;if(!a)return null;var n,l={};return a&&(0,ve.Z)(a)==="object"&&!t.isValidElement(a)?l=a:l.right=a,r==="right"&&(n=l.right),r==="left"&&(n=l.left),n?t.createElement("div",{className:"".concat(i,"-extra-content")},n):null};function Dt(e,o){var r,i=t.useContext(Se),a=i.prefixCls,n=i.tabs,l=e.className,u=e.style,c=e.id,h=e.animated,p=e.activeKey,d=e.rtl,g=e.extra,D=e.editable,S=e.locale,T=e.tabPosition,W=e.tabBarGutter,O=e.children,j=e.onTabClick,N=e.onTabScroll,I=(0,t.useRef)(),w=(0,t.useRef)(),G=(0,t.useRef)(),z=(0,t.useRef)(),x=At(),s=(0,C.Z)(x,2),Z=s[0],k=s[1],f=T==="top"||T==="bottom",R=ct(0,function(y,b){f&&N&&N({direction:y>b?"left":"right"})}),P=(0,C.Z)(R,2),L=P[0],Q=P[1],be=ct(0,function(y,b){!f&&N&&N({direction:y>b?"top":"bottom"})}),ie=(0,C.Z)(be,2),$=ie[0],le=ie[1],Te=(0,t.useState)(0),v=(0,C.Z)(Te,2),E=v[0],q=v[1],Y=(0,t.useState)(0),ne=(0,C.Z)(Y,2),ee=ne[0],ce=ne[1],_e=(0,t.useState)(null),Re=(0,C.Z)(_e,2),X=Re[0],et=Re[1],xe=(0,t.useState)(null),$e=(0,C.Z)(xe,2),te=$e[0],Ze=$e[1],He=(0,t.useState)(0),M=(0,C.Z)(He,2),se=M[0],Pe=M[1],Ut=(0,t.useState)(0),mt=(0,C.Z)(Ut,2),Vt=mt[0],Ft=mt[1],jt=ze(new Map),ht=(0,C.Z)(jt,2),Gt=ht[0],zt=ht[1],Ue=ye(n,Gt,E),Yt="".concat(a,"-nav-operations-hidden"),Ie=0,ke=0;f?d?(Ie=0,ke=Math.max(0,E-X)):(Ie=Math.min(0,X-E),ke=0):(Ie=Math.min(0,te-ee),ke=0);function tt(y){return y<Ie?Ie:y>ke?ke:y}var bt=(0,t.useRef)(),Xt=(0,t.useState)(),pt=(0,C.Z)(Xt,2),Ve=pt[0],gt=pt[1];function at(){gt(Date.now())}function nt(){window.clearTimeout(bt.current)}he(I,function(y,b){function A(J,ue){J(function(Me){var lt=tt(Me+ue);return lt})}if(f){if(X>=E)return!1;A(Q,y)}else{if(te>=ee)return!1;A(le,b)}return nt(),at(),!0}),(0,t.useEffect)(function(){return nt(),Ve&&(bt.current=window.setTimeout(function(){gt(0)},100)),nt},[Ve]);function yt(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:p,b=Ue.get(y)||{width:0,height:0,left:0,right:0,top:0};if(f){var A=L;d?b.right<L?A=b.right:b.right+b.width>L+X&&(A=b.right+b.width-X):b.left<-L?A=-b.left:b.left+b.width>-L+X&&(A=-(b.left+b.width-X)),le(0),Q(tt(A))}else{var J=$;b.top<-$?J=-b.top:b.top+b.height>-$+te&&(J=-(b.top+b.height-te)),Q(0),le(tt(J))}}var Jt=Ce(Ue,{width:X,height:te,left:L,top:$},{width:E,height:ee},{width:se,height:Vt},(0,H.Z)((0,H.Z)({},e),{},{tabs:n})),Ct=(0,C.Z)(Jt,2),Qt=Ct[0],qt=Ct[1],Fe={};T==="top"||T==="bottom"?Fe[d?"marginRight":"marginLeft"]=W:Fe.marginTop=W;var Et=n.map(function(y,b){var A=y.key;return t.createElement(Xe,{id:c,prefixCls:a,key:A,tab:y,style:b===0?void 0:Fe,closable:y.closable,editable:D,active:A===p,renderWrapper:O,removeAriaLabel:S==null?void 0:S.removeAriaLabel,ref:Z(A),onClick:function(ue){j(A,ue)},onRemove:function(){k(A)},onFocus:function(){yt(A),at(),I.current&&(d||(I.current.scrollLeft=0),I.current.scrollTop=0)}})}),rt=De(function(){var y,b,A,J,ue,Me,lt=((y=I.current)===null||y===void 0?void 0:y.offsetWidth)||0,ra=((b=I.current)===null||b===void 0?void 0:b.offsetHeight)||0,kt=((A=z.current)===null||A===void 0?void 0:A.offsetWidth)||0,Nt=((J=z.current)===null||J===void 0?void 0:J.offsetHeight)||0;et(lt),Ze(ra),Pe(kt),Ft(Nt);var oa=(((ue=w.current)===null||ue===void 0?void 0:ue.offsetWidth)||0)-kt,ia=(((Me=w.current)===null||Me===void 0?void 0:Me.offsetHeight)||0)-Nt;q(oa),ce(ia),zt(function(){var Mt=new Map;return n.forEach(function(la){var wt=la.key,we=Z(wt).current;we&&Mt.set(wt,{width:we.offsetWidth,height:we.offsetHeight,left:we.offsetLeft,top:we.offsetTop})}),Mt})}),_t=n.slice(0,Qt),ea=n.slice(qt+1),St=[].concat((0,ge.Z)(_t),(0,ge.Z)(ea)),ta=(0,t.useState)(),Tt=(0,C.Z)(ta,2),aa=Tt[0],na=Tt[1],re=Ue.get(p),Rt=(0,t.useRef)();function xt(){_.Z.cancel(Rt.current)}(0,t.useEffect)(function(){var y={};return re&&(f?(d?y.right=re.right:y.left=re.left,y.width=re.width):(y.top=re.top,y.height=re.height)),xt(),Rt.current=(0,_.Z)(function(){na(y)}),xt},[re,f,d]),(0,t.useEffect)(function(){yt()},[p,re,Ue,f]),(0,t.useEffect)(function(){rt()},[d,W,p,n.map(function(y){return y.key}).join("_")]);var Zt=!!St.length,Ne="".concat(a,"-nav-wrap"),ot,it,Pt,It;return f?d?(it=L>0,ot=L+X<E):(ot=L<0,it=-L+X<E):(Pt=$<0,It=-$+te<ee),t.createElement("div",{ref:o,role:"tablist",className:U()("".concat(a,"-nav"),l),style:u,onKeyDown:function(){at()}},t.createElement(st,{position:"left",extra:g,prefixCls:a}),t.createElement(Ae.default,{onResize:rt},t.createElement("div",{className:U()(Ne,(r={},(0,B.Z)(r,"".concat(Ne,"-ping-left"),ot),(0,B.Z)(r,"".concat(Ne,"-ping-right"),it),(0,B.Z)(r,"".concat(Ne,"-ping-top"),Pt),(0,B.Z)(r,"".concat(Ne,"-ping-bottom"),It),r)),ref:I},t.createElement(Ae.default,{onResize:rt},t.createElement("div",{ref:w,className:"".concat(a,"-nav-list"),style:{transform:"translate(".concat(L,"px, ").concat($,"px)"),transition:Ve?"none":void 0}},Et,t.createElement(ae,{ref:z,prefixCls:a,locale:S,editable:D,style:(0,H.Z)((0,H.Z)({},Et.length===0?void 0:Fe),{},{visibility:Zt?"hidden":null})}),t.createElement("div",{className:U()("".concat(a,"-ink-bar"),(0,B.Z)({},"".concat(a,"-ink-bar-animated"),h.inkBar)),style:aa}))))),t.createElement(Ee,(0,de.Z)({},e,{removeAriaLabel:S==null?void 0:S.removeAriaLabel,ref:G,prefixCls:a,tabs:St,className:!Zt&&Yt,tabMoving:!!Ve})),t.createElement(st,{position:"right",extra:g,prefixCls:a}))}var ut=t.forwardRef(Dt);function Bt(e){var o=e.id,r=e.activeKey,i=e.animated,a=e.tabPosition,n=e.rtl,l=e.destroyInactiveTabPane,u=t.useContext(Se),c=u.prefixCls,h=u.tabs,p=i.tabPane,d=h.findIndex(function(g){return g.key===r});return t.createElement("div",{className:U()("".concat(c,"-content-holder"))},t.createElement("div",{className:U()("".concat(c,"-content"),"".concat(c,"-content-").concat(a),(0,B.Z)({},"".concat(c,"-content-animated"),p)),style:d&&p?(0,B.Z)({},n?"marginRight":"marginLeft","-".concat(d,"00%")):null},h.map(function(g){return t.cloneElement(g.node,{key:g.key,prefixCls:c,tabKey:g.key,id:o,animated:p,active:g.key===r,destroyInactiveTabPane:l})})))}function dt(e){var o=e.prefixCls,r=e.forceRender,i=e.className,a=e.style,n=e.id,l=e.active,u=e.animated,c=e.destroyInactiveTabPane,h=e.tabKey,p=e.children,d=t.useState(r),g=(0,C.Z)(d,2),D=g[0],S=g[1];t.useEffect(function(){l?S(!0):c&&S(!1)},[l,c]);var T={};return l||(u?(T.visibility="hidden",T.height=0,T.overflowY="hidden"):T.display="none"),t.createElement("div",{id:n&&"".concat(n,"-panel-").concat(h),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":n&&"".concat(n,"-tab-").concat(h),"aria-hidden":!l,style:(0,H.Z)((0,H.Z)({},T),a),className:U()("".concat(o,"-tabpane"),l&&"".concat(o,"-tabpane-active"),i)},(l||D||r)&&p)}var Wt=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],vt=0;function Kt(e){return(0,V.Z)(e).map(function(o){if(t.isValidElement(o)){var r=o.key!==void 0?String(o.key):void 0;return(0,H.Z)((0,H.Z)({key:r},o.props),{},{node:o})}return null}).filter(function(o){return o})}function Ot(e,o){var r,i=e.id,a=e.prefixCls,n=a===void 0?"rc-tabs":a,l=e.className,u=e.children,c=e.direction,h=e.activeKey,p=e.defaultActiveKey,d=e.editable,g=e.animated,D=g===void 0?{inkBar:!0,tabPane:!1}:g,S=e.tabPosition,T=S===void 0?"top":S,W=e.tabBarGutter,O=e.tabBarStyle,j=e.tabBarExtraContent,N=e.locale,I=e.moreIcon,w=e.moreTransitionName,G=e.destroyInactiveTabPane,z=e.renderTabBar,x=e.onChange,s=e.onTabClick,Z=e.onTabScroll,k=e.getPopupContainer,f=e.popupClassName,R=(0,je.Z)(e,Wt),P=Kt(u),L=c==="rtl",Q;D===!1?Q={inkBar:!1,tabPane:!1}:D===!0?Q={inkBar:!0,tabPane:!0}:Q=(0,H.Z)({inkBar:!0,tabPane:!1},(0,ve.Z)(D)==="object"?D:{});var be=(0,t.useState)(!1),ie=(0,C.Z)(be,2),$=ie[0],le=ie[1];(0,t.useEffect)(function(){le((0,Ge.Z)())},[]);var Te=(0,oe.Z)(function(){var M;return(M=P[0])===null||M===void 0?void 0:M.key},{value:h,defaultValue:p}),v=(0,C.Z)(Te,2),E=v[0],q=v[1],Y=(0,t.useState)(function(){return P.findIndex(function(M){return M.key===E})}),ne=(0,C.Z)(Y,2),ee=ne[0],ce=ne[1];(0,t.useEffect)(function(){var M=P.findIndex(function(Pe){return Pe.key===E});if(M===-1){var se;M=Math.max(0,Math.min(ee,P.length-1)),q((se=P[M])===null||se===void 0?void 0:se.key)}ce(M)},[P.map(function(M){return M.key}).join("_"),E,ee]);var _e=(0,oe.Z)(null,{value:i}),Re=(0,C.Z)(_e,2),X=Re[0],et=Re[1],xe=T;$&&!["left","right"].includes(T)&&(xe="top"),(0,t.useEffect)(function(){i||(et("rc-tabs-".concat(vt)),vt+=1)},[]);function $e(M,se){s==null||s(M,se);var Pe=M!==E;q(M),Pe&&(x==null||x(M))}var te={id:X,activeKey:E,animated:Q,tabPosition:xe,rtl:L,mobile:$},Ze,He=(0,H.Z)((0,H.Z)({},te),{},{editable:d,locale:N,moreIcon:I,moreTransitionName:w,tabBarGutter:W,onTabClick:$e,onTabScroll:Z,extra:j,style:O,panes:u,getPopupContainer:k,popupClassName:f});return z?Ze=z(He,ut):Ze=t.createElement(ut,He),t.createElement(Se.Provider,{value:{tabs:P,prefixCls:n}},t.createElement("div",(0,de.Z)({ref:o,id:i,className:U()(n,"".concat(n,"-").concat(xe),(r={},(0,B.Z)(r,"".concat(n,"-mobile"),$),(0,B.Z)(r,"".concat(n,"-editable"),d),(0,B.Z)(r,"".concat(n,"-rtl"),L),r),l)},R),Ze,t.createElement(Bt,(0,de.Z)({destroyInactiveTabPane:G},te,{animated:Q}))))}var ft=t.forwardRef(Ot);ft.TabPane=dt;var $t=ft,Ht=$t}}]);

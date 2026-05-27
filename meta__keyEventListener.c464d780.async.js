"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[3424],{70532:function(a,n,e){e.r(n),e.d(n,{demos:function(){return d}});var t=e(75271),d={"keyeventlistener-demo-basic":{component:t.memo(t.lazy(function(){return e.e(4334).then(e.bind(e,60559))})),asset:{type:"BLOCK",id:"keyeventlistener-demo-basic",refAtomIds:["keyEventListener"],dependencies:{"index.tsx":{type:"FILE",value:e(28712).Z},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u76D1\u542C\u4EFB\u610F\u6309\u952E"},context:void 0,renderOpts:void 0},"keyeventlistener-demo-customkey":{component:t.memo(t.lazy(function(){return e.e(4334).then(e.bind(e,30370))})),asset:{type:"BLOCK",id:"keyeventlistener-demo-customkey",refAtomIds:["keyEventListener"],dependencies:{"index.tsx":{type:"FILE",value:e(19352).Z},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u76D1\u542C\u6307\u5B9A\u6309\u952E"},context:void 0,renderOpts:void 0}}},57895:function(a,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"\u76D1\u542C\u952E\u76D8\u4E8B\u4EF6",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:6},{value:"\u8BF4\u660E",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"onKeyDown",paraId:1,tocIndex:6},{value:"\u952E\u76D8\u6309\u4E0B\u6267\u884C",paraId:1,tocIndex:6},{value:"function",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"onKeyUp",paraId:1,tocIndex:6},{value:"\u952E\u76D8\u62AC\u8D77\u6267\u884C",paraId:1,tocIndex:6},{value:"function",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"children",paraId:1,tocIndex:6},{value:"\u5B50\u7EC4\u4EF6",paraId:1,tocIndex:6},{value:"React.ReactNode",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"\u53C2\u6570",paraId:2,tocIndex:7},{value:"\u8BF4\u660E",paraId:2,tocIndex:7},{value:"\u7C7B\u578B",paraId:2,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:7},{value:"keyMap",paraId:2,tocIndex:7},{value:"\u76D1\u542C\u7684\u4E00\u7EC4 key map\uFF0Ceg: { 70: true, 91: true, 16: true } \u5219\u8868\u793A\u76D1\u542C command+shift+f \u7EC4\u5408\u952E",paraId:2,tocIndex:7},{value:"object",paraId:2,tocIndex:7},{value:"-",paraId:2,tocIndex:7},{value:"onTrigger",paraId:2,tocIndex:7},{value:"\u89E6\u53D1\u4E8B\u4EF6",paraId:2,tocIndex:7},{value:"function",paraId:2,tocIndex:7},{value:"-",paraId:2,tocIndex:7},{value:"children",paraId:2,tocIndex:7},{value:"\u5B50\u7EC4\u4EF6",paraId:2,tocIndex:7},{value:"React.ReactNode",paraId:2,tocIndex:7},{value:"-",paraId:2,tocIndex:7}]},28712:function(a,n){n.Z=`import React from 'react';
import { KeyEventListener } from 'dt-react-component';

export default () => {
    return (
        <KeyEventListener
            onKeyDown={(evt) => {
                console.log('onkeyDown', evt);
            }}
        >
            {<div>\u5C1D\u8BD5\u6309\u4E0B\u4EFB\u610F\u952E\u76D8\uFF0C\u770B\u770B\u63A7\u5236\u53F0\u6253\u5370\u7ED3\u679C</div>}
        </KeyEventListener>
    );
};
`},19352:function(a,n){n.Z=`import React from 'react';
import { KeyEventListener } from 'dt-react-component';

const { KeyCombiner } = KeyEventListener;

export default () => {
    return (
        <KeyCombiner
            onTrigger={(evt) => {
                evt.preventDefault();
                console.log('command+shift+f action');
            }}
            keyMap={{
                70: true,
                91: true,
                16: true,
            }}
        >
            <div>\u5C1D\u8BD5\u6309\u4E0B command+shift+f \u770B\u770B\u63A7\u5236\u53F0\u662F\u5426\u76D1\u542C\u4E86\u952E\u76D8\u4E8B\u4EF6</div>
        </KeyCombiner>
    );
};
`}}]);

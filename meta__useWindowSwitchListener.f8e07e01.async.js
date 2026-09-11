"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[8691],{48038:(function(d,e,n){n.r(e),n.d(e,{demos:function(){return o}});var t=n(30758),o={"usewindowswitchlistener-demo-basic":{component:t.memo(t.lazy(function(){return n.e(1246).then(n.bind(n,17580))})),asset:{type:"BLOCK",id:"usewindowswitchlistener-demo-basic",refAtomIds:["useWindowSwitchListener"],dependencies:{"index.tsx":{type:"FILE",value:n(93926).A},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528"},routeId:"components/useWindowSwitchListener/index",context:void 0,renderOpts:void 0}}}),72066:(function(d,e,n){n.r(e);const t=[{value:"\u76D1\u542C\u5F53\u524D\u7A97\u53E3\u83B7\u53D6\u7126\u70B9\u65F6\uFF0C\u6267\u884C\u67D0\u4E2A\u56DE\u8C03\u65F6\u4F7F\u7528",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:4},{value:"\u8BF4\u660E",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"onSwitch",paraId:1,tocIndex:4},{value:"\u5207\u6362\u51FD\u6570",paraId:1,tocIndex:4},{value:"Function",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4}];n.d(e,["texts",0,t])}),93926:(function(d,e){e.A=`import React, { useState } from 'react';
import { useWindowSwitchListener } from 'dt-react-component';

export default () => {
    const [msg, setMsg] = useState('hello world');
    const handleSwitch = () => {
        setMsg('window listener');
        console.log('window listener');
    };
    useWindowSwitchListener(() => {
        handleSwitch();
    });

    return (
        <div
            style={{
                height: '100%',
                width: '100%',
            }}
        >
            {msg}
        </div>
    );
};
`})}]);

"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[4502],{14793:(function(a,t,n){n.r(t),n.d(t,{demos:function(){return o}});var d=n(30758),o={"src-use-typing-demo-basic":{component:d.memo(d.lazy(function(){return Promise.all([n.e(8848),n.e(5808),n.e(1585),n.e(9495),n.e(444),n.e(3069),n.e(1073),n.e(5150),n.e(8998),n.e(5385),n.e(6217),n.e(2441),n.e(3900),n.e(7413),n.e(5619),n.e(9275),n.e(198),n.e(8578),n.e(9389),n.e(7205),n.e(411),n.e(1186),n.e(1127),n.e(8765),n.e(3501),n.e(6023),n.e(1586),n.e(9010),n.e(4401),n.e(1917)]).then(n.bind(n,74809))})),asset:{type:"BLOCK",id:"src-use-typing-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(49701).A},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.24.16"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528"},routeId:"components/useTyping/index",context:void 0,renderOpts:void 0}}}),85125:(function(a,t,n){n.r(t);const d=[{value:"\u9700\u8981\u6253\u5B57\u673A\u8F93\u5165",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:5},{value:"\u8BF4\u660E",paraId:1,tocIndex:5},{value:"\u7C7B\u578B",paraId:1,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:5},{value:"onTyping",paraId:1,tocIndex:5},{value:"\u6253\u5B57\u8F93\u5165\u4E2D\u7684\u56DE\u8C03\u51FD\u6570",paraId:1,tocIndex:5},{value:"(post:string) => void",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"\u53C2\u6570",paraId:2,tocIndex:6},{value:"\u8BF4\u660E",paraId:2,tocIndex:6},{value:"\u7C7B\u578B",paraId:2,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:6},{value:"isTyping",paraId:2,tocIndex:6},{value:"\u662F\u5426\u5728\u6253\u5B57\u4E2D",paraId:2,tocIndex:6},{value:"boolean",paraId:2,tocIndex:6},{value:"false",paraId:2,tocIndex:6},{value:"start",paraId:2,tocIndex:6},{value:"\u5F00\u542F\u6253\u5B57",paraId:2,tocIndex:6},{value:"() => void",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"push",paraId:2,tocIndex:6},{value:"\u8F93\u5165\u6587\u6848",paraId:2,tocIndex:6},{value:"(post:string) => void",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"close",paraId:2,tocIndex:6},{value:"\u5173\u95ED\u6253\u5B57",paraId:2,tocIndex:6},{value:"() => void",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"stop",paraId:2,tocIndex:6},{value:"\u7ACB\u5373\u5173\u95ED\u6253\u5B57",paraId:2,tocIndex:6},{value:"() => void",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6}];n.d(t,["texts",0,d])}),49701:(function(a,t){t.A=`import React, { useState } from 'react';
import { Button } from 'antd';
import { useTyping } from 'dt-react-component';

export default () => {
    const [text, setText] = useState('');
    const typing = useTyping({
        onTyping(post) {
            setText(post);
        },
    });

    const handleStart = () => {
        typing.start();
        typing.push('\u8FD9\u662F\u4E00\u6BB5\u6D4B\u8BD5\u6587\u5B57');
        window.setTimeout(() => {
            typing.push('\u8FD9\u662F\u4E00\u6BB5\u5EF6\u8FDF\u4E00\u79D2\u6D4B\u8BD5\u6587\u5B57');
            typing.close();
        }, 1000);
    };

    return (
        <div>
            <Button type="primary" onClick={handleStart}>
                \u5F00\u59CB\u8F93\u5165
            </Button>
            \u6253\u5B57\u4E2D\uFF1A{typing.isTyping ? '\u662F' : '\u5426'}
            <p>\u6587\u6848\uFF1A{text}</p>
        </div>
    );
};
`})}]);

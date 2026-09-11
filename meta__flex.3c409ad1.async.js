"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6395],{80974:(function(a,t,n){n.r(t),n.d(t,{demos:function(){return o}});var e=n(30758),o={"flex-demo-basic":{component:e.memo(e.lazy(function(){return Promise.all([n.e(8848),n.e(5808),n.e(1585),n.e(9495),n.e(444),n.e(3069),n.e(4314),n.e(8352),n.e(6108)]).then(n.bind(n,9010))})),asset:{type:"BLOCK",id:"flex-demo-basic",refAtomIds:["flex"],dependencies:{"index.tsx":{type:"FILE",value:n(63604).A},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.24.16"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528"},routeId:"components/flex/index",context:void 0,renderOpts:void 0},"flex-demo-align":{component:e.memo(e.lazy(function(){return Promise.all([n.e(8848),n.e(5808),n.e(1585),n.e(9495),n.e(444),n.e(3069),n.e(4314),n.e(8352),n.e(6108)]).then(n.bind(n,9591))})),asset:{type:"BLOCK",id:"flex-demo-align",refAtomIds:["flex"],dependencies:{"index.tsx":{type:"FILE",value:n(78455).A},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.24.16"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u5BF9\u9F50\u65B9\u5F0F"},routeId:"components/flex/index",context:void 0,renderOpts:void 0}}}),40842:(function(a,t,n){n.r(t);const e=[{value:"\u9700\u8981 Flex \u5E03\u5C40",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:5},{value:"\u8BF4\u660E",paraId:1,tocIndex:5},{value:"\u7C7B\u578B",paraId:1,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:5},{value:"vertical",paraId:1,tocIndex:5},{value:"flex \u4E3B\u8F74\u7684\u65B9\u5411\u662F\u5426\u5782\u76F4",paraId:1,tocIndex:5},{value:"boolean",paraId:1,tocIndex:5},{value:"false",paraId:1,tocIndex:5},{value:"wrap",paraId:1,tocIndex:5},{value:"\u4E3B\u8F74\u6362\u884C",paraId:1,tocIndex:5},{value:"flex-wrap",paraId:1,tocIndex:5},{value:"nowrap",paraId:1,tocIndex:5},{value:"justify",paraId:1,tocIndex:5},{value:"justify-content",paraId:1,tocIndex:5},{value:"justify-content",paraId:1,tocIndex:5},{value:"normal",paraId:1,tocIndex:5},{value:"align",paraId:1,tocIndex:5},{value:"align-items",paraId:1,tocIndex:5},{value:"align-items",paraId:1,tocIndex:5},{value:"normal",paraId:1,tocIndex:5},{value:"flex",paraId:1,tocIndex:5},{value:"flex",paraId:1,tocIndex:5},{value:"flex",paraId:1,tocIndex:5},{value:"normal",paraId:1,tocIndex:5},{value:"gap",paraId:1,tocIndex:5},{value:"gap",paraId:1,tocIndex:5},{value:"gap",paraId:1,tocIndex:5},{value:"0",paraId:1,tocIndex:5},{value:"children",paraId:1,tocIndex:5},{value:"\u5C55\u793A\u5185\u5BB9",paraId:1,tocIndex:5},{value:"React.ReactNode",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5}];n.d(t,["texts",0,e])}),78455:(function(a,t){t.A=`import React, { useState } from 'react';
import { Button, Segmented, Slider } from 'antd';
import { Flex } from 'dt-react-component';
import type { IFlexProps } from 'dt-react-component/flex';

const alignOptions = ['flex-start', 'center', 'flex-end'];
const justifyOptions = [
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
];

export default () => {
    const [align, setAlign] = useState<IFlexProps['align']>('center');
    const [justify, setJustify] = useState<IFlexProps['justify']>('center');
    const [vertical, setVertical] = useState<string>('false');
    const [gap, setGap] = useState<number>(4);
    return (
        <>
            <p>Select align :</p>
            <Segmented
                value={align}
                options={alignOptions}
                onChange={(val) => setAlign(val as IFlexProps['align'])}
            />
            <p>Select justify :</p>
            <Segmented
                value={justify}
                options={justifyOptions}
                onChange={(val) => setJustify(val as IFlexProps['justify'])}
            />
            <p>Select vertical :</p>
            <Segmented
                value={vertical}
                options={['true', 'false']}
                onChange={(val) => setVertical(val as string)}
            />
            <p>Select gap :</p>
            <Slider value={gap} max={20} min={0} onChange={setGap} />
            <br />
            <br />
            <Flex
                gap={gap}
                vertical={vertical === 'true'}
                align={align}
                justify={justify}
                style={{ border: '1px solid #5D9EFA', height: 200 }}
            >
                <Button>button</Button>
                <Button>button</Button>
                <Button>button</Button>
                <Button>button</Button>
            </Flex>
        </>
    );
};
`}),63604:(function(a,t){t.A=`import React from 'react';
import { Button } from 'antd';
import { Flex } from 'dt-react-component';

export default () => {
    return (
        <Flex gap={4}>
            <Button>button</Button>
            <Button>button</Button>
            <Button>button</Button>
            <Button>button</Button>
        </Flex>
    );
};
`})}]);

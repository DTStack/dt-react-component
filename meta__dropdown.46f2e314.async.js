"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[8506],{66885:function(d,e,n){n.r(e),n.d(e,{demos:function(){return o}});var t=n(75271),o={"dropdown-demo-basic":{component:t.memo(t.lazy(function(){return Promise.all([n.e(9048),n.e(4180),n.e(5385),n.e(8251),n.e(4843),n.e(6205),n.e(668),n.e(6371)]).then(n.bind(n,72759))})),asset:{type:"BLOCK",id:"dropdown-demo-basic",refAtomIds:["dropdown"],dependencies:{"index.tsx":{type:"FILE",value:n(66480).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528"},context:void 0,renderOpts:void 0},"dropdown-demo-virtual":{component:t.memo(t.lazy(function(){return Promise.all([n.e(9048),n.e(4180),n.e(5385),n.e(8251),n.e(4843),n.e(6205),n.e(668),n.e(6371)]).then(n.bind(n,20043))})),asset:{type:"BLOCK",id:"dropdown-demo-virtual",refAtomIds:["dropdown"],dependencies:{"index.tsx":{type:"FILE",value:n(37983).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u957F\u5217\u8868",description:"\u57FA\u4E8E rc-virtual-list \u5B9E\u73B0\u865A\u62DF\u6EDA\u52A8\uFF0C\u5E76\u652F\u6301\u6EDA\u52A8\u9634\u5F71"},context:void 0,renderOpts:void 0},"dropdown-demo-submit":{component:t.memo(t.lazy(function(){return Promise.all([n.e(9048),n.e(4180),n.e(5385),n.e(8251),n.e(4843),n.e(6205),n.e(668),n.e(6371)]).then(n.bind(n,50762))})),asset:{type:"BLOCK",id:"dropdown-demo-submit",refAtomIds:["dropdown"],dependencies:{"index.tsx":{type:"FILE",value:n(28201).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u63D0\u4EA4",description:"\u5173\u95ED\u5F39\u7A97\u89E6\u89E6\u53D1 onSubmit"},context:void 0,renderOpts:void 0}}},71253:function(d,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"\u652F\u6301\u5168\u9009\u6309\u94AE\u7684\u4E0B\u62C9\u83DC\u5355",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:6},{value:"\u8BF4\u660E",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"value",paraId:1,tocIndex:6},{value:"\u5F53\u524D\u9009\u4E2D\u7684\u503C",paraId:1,tocIndex:6},{value:"(string | number)[]",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"defaultValue",paraId:1,tocIndex:6},{value:"\u521D\u59CB\u503C",paraId:1,tocIndex:6},{value:"(string | number)[]",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"className",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"options",paraId:1,tocIndex:6},{value:"Checkbox \u6307\u5B9A\u53EF\u9009\u9879",paraId:1,tocIndex:6},{value:"(string | number  | Option)[]",paraId:1,tocIndex:6},{value:"[]",paraId:1,tocIndex:6},{value:"getPopupContainer",paraId:1,tocIndex:6},{value:"\u540C Dropdown \u7684 ",paraId:1,tocIndex:6},{value:"getPopupContainer",paraId:1,tocIndex:6},{value:"(triggerNode: HTMLElement) => HTMLElement",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"onChange",paraId:1,tocIndex:6},{value:"\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:1,tocIndex:6},{value:"(checkedValue) => void",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6}]},66480:function(d,e){e.Z=`import React, { useState } from 'react';
import { Button } from 'antd';
import { Dropdown } from 'dt-react-component';

export default () => {
    const [selected, setSelected] = useState<number[]>([2]);

    return (
        <Dropdown.Select
            value={selected}
            options={[
                { label: '\u9009\u9879\u4E00', value: 1 },
                { label: '\u9009\u9879\u4E8C', value: 2, disabled: true },
            ]}
            onChange={(checked) => setSelected(checked as number[])}
        >
            <Button type="link">\u6253\u5F00\u4E0B\u62C9</Button>
        </Dropdown.Select>
    );
};
`},28201:function(d,e){e.Z=`import React, { useState } from 'react';
import { Button, Spin } from 'antd';
import { Dropdown } from 'dt-react-component';

export default () => {
    const [selected, setSelected] = useState<number[]>([2]);
    const [fetching, setFetching] = useState(false);

    const fetchData = () => {
        setFetching(true);
        setTimeout(() => {
            setFetching(false);
        }, 150);
    };

    return (
        <>
            <Dropdown.Select
                value={selected}
                options={[
                    { label: '\u9009\u9879\u4E00', value: 1 },
                    { label: '\u9009\u9879\u4E8C', value: 2, disabled: true },
                ]}
                onChange={(checked) => {
                    setSelected(checked as number[]);
                    fetchData();
                }}
            >
                <Button type="link">\u6253\u5F00\u4E0B\u62C9</Button>
            </Dropdown.Select>
            <Spin spinning={fetching} />
        </>
    );
};
`},37983:function(d,e){e.Z=`import React, { useState } from 'react';
import { Button } from 'antd';
import { Dropdown } from 'dt-react-component';

export default () => {
    const [selected, setSelected] = useState<number[]>([2, 1000, 2000]);

    return (
        <Dropdown.Select
            value={selected}
            options={new Array(10000).fill('').map((_, idx) => idx)}
            onChange={(val) => {
                console.log(val);
                setSelected(val as number[]);
            }}
        >
            <Button type="link">10000 \u6761\u6570\u636E</Button>
        </Dropdown.Select>
    );
};
`}}]);

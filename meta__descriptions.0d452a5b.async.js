"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[4057],{37971:function(a,t,e){e.r(t),e.d(t,{demos:function(){return d}});var n=e(75271),d={"descriptions-demo-basic":{component:n.memo(n.lazy(function(){return Promise.all([e.e(9048),e.e(4180),e.e(5385),e.e(4877),e.e(3303),e.e(6992)]).then(e.bind(e,15147))})),asset:{type:"BLOCK",id:"descriptions-demo-basic",refAtomIds:["descriptions"],dependencies:{"index.tsx":{type:"FILE",value:e(53058).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u8BBE\u7F6E tableLayout"},context:void 0,renderOpts:void 0}}},64047:function(a,t,e){e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C55\u793A\u591A\u4E2A\u53EA\u8BFB\u5B57\u6BB5\u7684\u7EC4\u5408\u3002(\u652F\u6301\u8BBE\u7F6E table-layout \u4E3A fixed)",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:4},{value:"\u8BF4\u660E",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"tableLayout",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"'auto' | 'fixed'",paraId:1,tocIndex:4},{value:"'auto'",paraId:1,tocIndex:4},{value:"\u53C2\u8003 ",paraId:2,tocIndex:6},{value:"MDN",paraId:2,tocIndex:6},{value:" \u4E2D\u5173\u4E8E ",paraId:2,tocIndex:6},{value:"table-layout",paraId:2,tocIndex:6},{value:" \u7684\u76F8\u5173\u63CF\u8FF0\u53EF\u4EE5\u770B\u51FA\uFF0C\u5F53\u6211\u4EEC\u7684\u9700\u6C42\u662F\u7528 ",paraId:2,tocIndex:6},{value:"Descriptions",paraId:2,tocIndex:6},{value:" \u7EC4\u4EF6\u7528\u56FA\u5B9A\u6BD4\u4F8B\u5C55\u793A\u5B57\u6BB5\u4FE1\u606F\u7684\u65F6\u5019\uFF0C\u76F8\u6BD4 ",paraId:2,tocIndex:6},{value:"auto",paraId:2,tocIndex:6},{value:" \u7684\u5C5E\u6027\uFF0C\u66F4\u597D\u5730\u662F ",paraId:2,tocIndex:6},{value:"fixed",paraId:2,tocIndex:6},{value:" \u5C5E\u6027",paraId:2,tocIndex:6}]},53058:function(a,t){t.Z=`import React, { useState } from 'react';
import { Space, Switch } from 'antd';
import { Descriptions, EllipsisText } from 'dt-react-component';

export default function Basic() {
    const [fixed, setFixed] = useState(true);
    return (
        <Space size={8} direction="vertical">
            <Switch
                checkedChildren="fixed"
                unCheckedChildren="auto"
                checked={fixed}
                onChange={setFixed}
            />
            <Descriptions bordered column={2} tableLayout={fixed ? 'fixed' : 'auto'}>
                <Descriptions.Item label="\u540D\u79F0">
                    <EllipsisText value="\u6211\u662F dt-react-component \u7EC4\u4EF6\u5E93" maxWidth={120} />
                </Descriptions.Item>
                <Descriptions.Item label="\u63CF\u8FF0">
                    <div
                        style={{
                            width: 0,
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            minWidth: '100%',
                        }}
                    >
                        \u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\uFF0C\u957F\u5EA6\u751A\u81F3\u8D85\u8FC7\u4E86\u4E00\u884C
                    </div>
                </Descriptions.Item>
            </Descriptions>
        </Space>
    );
}
`}}]);

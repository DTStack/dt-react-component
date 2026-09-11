"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[9285],{16704:(function(e,t,n){n.r(t),n.d(t,{demos:function(){return d}});var o=n(30758),d={"popconfirm-demo-basic":{component:o.memo(o.lazy(function(){return Promise.all([n.e(8848),n.e(5808),n.e(1585),n.e(4896),n.e(3069),n.e(9495),n.e(5150),n.e(84),n.e(7562)]).then(n.bind(n,52408))})),asset:{type:"BLOCK",id:"popconfirm-demo-basic",refAtomIds:["popConfirm"],dependencies:{"index.tsx":{type:"FILE",value:n(28114).A},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.24.16"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u57FA\u7840"},routeId:"components/popConfirm/index",context:void 0,renderOpts:void 0},"popconfirm-demo-type":{component:o.memo(o.lazy(function(){return Promise.all([n.e(8848),n.e(5808),n.e(1585),n.e(4896),n.e(3069),n.e(9495),n.e(5150),n.e(84),n.e(7562)]).then(n.bind(n,95730))})),asset:{type:"BLOCK",id:"popconfirm-demo-type",refAtomIds:["popConfirm"],dependencies:{"index.tsx":{type:"FILE",value:n(33576).A},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.24.16"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u7C7B\u578B"},routeId:"components/popConfirm/index",context:void 0,renderOpts:void 0},"popconfirm-demo-noicon":{component:o.memo(o.lazy(function(){return Promise.all([n.e(8848),n.e(5808),n.e(1585),n.e(4896),n.e(3069),n.e(9495),n.e(5150),n.e(84),n.e(7562)]).then(n.bind(n,50332))})),asset:{type:"BLOCK",id:"popconfirm-demo-noicon",refAtomIds:["popConfirm"],dependencies:{"index.tsx":{type:"FILE",value:n(16546).A},react:{type:"NPM",value:"18.3.1"},"@dtinsight/react-icons":{type:"NPM",value:"1.68.0"},antd:{type:"NPM",value:"4.24.16"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u6CA1\u6709\u56FE\u6807"},routeId:"components/popConfirm/index",context:void 0,renderOpts:void 0}}}),21328:(function(e,t,n){n.r(t);const o=[{value:"\u5BF9\u64CD\u4F5C\u8FDB\u884C\u4E8C\u6B21\u786E\u8BA4\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u56FE\u6807\u548C\u7C7B\u578B\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1,tocIndex:5},{value:"\u8BF4\u660E",paraId:1,tocIndex:5},{value:"\u7C7B\u578B",paraId:1,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:5},{value:"showIcon",paraId:1,tocIndex:5},{value:"\u662F\u5426\u663E\u793A\u56FE\u6807",paraId:1,tocIndex:5},{value:"boolean",paraId:1,tocIndex:5},{value:"true",paraId:1,tocIndex:5},{value:"type",paraId:1,tocIndex:5},{value:"\u56FE\u6807\u7C7B\u578B",paraId:1,tocIndex:5},{value:"'primary' | 'warning' | 'danger'",paraId:1,tocIndex:5},{value:"'primary'",paraId:1,tocIndex:5},{value:"\u5176\u4F59\u5C5E\u6027\u5747\u7EE7\u627F\u81EA ",paraId:2,tocIndex:5},{value:"Popconfirm",paraId:2,tocIndex:5},{value:" \u7EC4\u4EF6\uFF0C\u53C2\u8003 ",paraId:2,tocIndex:5},{value:"Popconfirm API",paraId:2,tocIndex:5}];n.d(t,["texts",0,o])}),28114:(function(e,t){t.A=`import React from 'react';
import { Space } from 'antd';
import { Popconfirm } from 'dt-react-component';

const App: React.FC = () => (
    <Space size={12}>
        <Popconfirm title="Are you sure to delete this task?">
            <a href="#">Basic</a>
        </Popconfirm>
        <Popconfirm
            title="\u8D85\u957F\u6587\u672C\u8D85\u957F\u6587\u672C\u8D85\u957F\u6587\u672C\u8D85\u957F\u6587\u672C\u8D85\u957F\u6587\u672C\u8D85\u957F\u6587\u672C\u8D85\u957F\u6587\u672C\u8D85\u957F\u6587\u672C\u8D85\u957F\u6587\u672C\u8D85\u957F\u6587\u672C\u8D85\u957F\u6587\u672C\u8D85\u957F\u6587\u672C\u8D85\u957F\u6587\u672C"
            overlayInnerStyle={{ width: 400 }}
        >
            <a href="#">\u8D85\u957F\u6587\u672C</a>
        </Popconfirm>
    </Space>
);

export default App;
`}),16546:(function(e,t){t.A=`import React from 'react';
import { PlusCircleFilled } from '@dtinsight/react-icons';
import { Space } from 'antd';
import { Button, Popconfirm } from 'dt-react-component';

export default () => (
    <Space>
        <Popconfirm title="\u6CA1\u6709\u56FE\u6807" showIcon={false}>
            <Button>\u65E0\u56FE\u6807\u786E\u8BA4</Button>
        </Popconfirm>
        <Popconfirm title="\u8B66\u544A\u64CD\u4F5C" icon={<PlusCircleFilled />}>
            <Button type="default">\u81EA\u5B9A\u4E49icon</Button>
        </Popconfirm>
    </Space>
);
`}),33576:(function(e,t){t.A=`import React from 'react';
import { Space } from 'antd';
import { Button, Popconfirm } from 'dt-react-component';

export default () => (
    <Space>
        <Popconfirm title="\u4E3B\u64CD\u4F5C" type="primary">
            <Button type="primary">\u4E3B\u64CD\u4F5C</Button>
        </Popconfirm>
        <Popconfirm title="\u8B66\u544A\u64CD\u4F5C" type="warning">
            <Button type="default">\u8B66\u544A</Button>
        </Popconfirm>
        <Popconfirm title="\u5371\u9669\u64CD\u4F5C" type="danger">
            <Button danger>\u5371\u9669</Button>
        </Popconfirm>
    </Space>
);
`})}]);

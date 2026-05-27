"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[7056],{28168:function(e,t,n){n.r(t),n.d(t,{demos:function(){return d}});var a=n(75271),d={"tinytag-demo-basic":{component:a.memo(a.lazy(function(){return Promise.all([n.e(9048),n.e(4180),n.e(5385),n.e(8251),n.e(4877),n.e(8704),n.e(653),n.e(3028),n.e(3496),n.e(32),n.e(7402),n.e(9448),n.e(4843),n.e(7868),n.e(2643),n.e(4019),n.e(3607),n.e(497)]).then(n.bind(n,35738))})),asset:{type:"BLOCK",id:"tinytag-demo-basic",refAtomIds:["tinyTag"],dependencies:{"index.tsx":{type:"FILE",value:n(49774).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"5.0.0"},"./style.scss":{type:"FILE",value:n(61964).Z}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528"},context:void 0,renderOpts:void 0},"tinytag-demo-table":{component:a.memo(a.lazy(function(){return Promise.all([n.e(9048),n.e(4180),n.e(5385),n.e(8251),n.e(4877),n.e(8704),n.e(653),n.e(3028),n.e(3496),n.e(32),n.e(7402),n.e(9448),n.e(4843),n.e(7868),n.e(2643),n.e(4019),n.e(3607),n.e(497)]).then(n.bind(n,86032))})),asset:{type:"BLOCK",id:"tinytag-demo-table",refAtomIds:["tinyTag"],dependencies:{"index.tsx":{type:"FILE",value:n(97392).Z},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u8868\u683C\u4F7F\u7528"},context:void 0,renderOpts:void 0}}},34655:function(e,t,n){n.r(t),n.d(t,{texts:function(){return a}});const a=[{value:"TinyTag \u7EC4\u4EF6\u901A\u5E38\u7528\u4E8E\u5728\u67D0\u4E9B\u6587\u6848\u540E\u9762\uFF0C\u7528\u4E8E\u6807\u8BC6\u5F53\u524D\u884C\u6570\u636E\u7684\u5206\u7C7B",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:6},{value:"\u8BF4\u660E",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"value",paraId:1,tocIndex:6},{value:"\u6807\u7B7E\u6587\u6848",paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:"className",paraId:1,tocIndex:6},{value:"class \u540D\u79F0",paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6}]},49774:function(e,t){t.Z=`import React from 'react';
import { Space } from 'antd';
import { TinyTag } from 'dt-react-component';

import './style.scss';

export default () => {
    return (
        <Space size={6}>
            <TinyTag value="\u888B\u9F20\u4E91" />
            <TinyTag className="data-tag" value="\u6570\u636E\u9A71\u52A8" />
            <TinyTag className="ued-tag" value="UED" />
        </Space>
    );
};
`},61964:function(e,t){t.Z=`.data-tag {
    color: #D1D1D1;
    &:hover {
        color: #D56161;
    }
}

.ued-tag {
    color: #D56161;
}
`},97392:function(e,t){t.Z=`import React from 'react';
import { Table, TinyTag } from 'dt-react-component';

interface DataType {
    id: number;
    name: string;
    age: number;
    type: 0 | 1 | 2;
    address: string;
}

const dataSource = [
    { id: 1, type: 0, name: 'ZhangSan', age: 17, address: 'New York No. 1 Lake Park' },
    { id: 2, type: 1, name: 'LiSi', age: 17, address: 'Bei Jing No. 1 Lake Park' },
    { id: 3, type: 2, name: 'WangWu', age: 17, address: 'Zhe Jiang No. 1 Lake Park' },
] as DataType[];

const typpings = ['\u536B\u751F\u59D4\u5458', '\u73ED\u957F', '\u56E2\u59D4\u4E66\u8BB0'];

export default () => {
    return (
        <Table<DataType>
            rowKey="id"
            columns={[
                {
                    dataIndex: 'name',
                    title: 'Name',
                    render(text, record) {
                        return (
                            <span>
                                {text}
                                <TinyTag value={typpings[record.type]} />
                            </span>
                        );
                    },
                },
                {
                    dataIndex: 'age',
                    title: 'Age',
                },
                { dataIndex: 'address', title: 'Address' },
            ]}
            dataSource={dataSource}
            pagination={false}
            bordered
        />
    );
};
`}}]);

"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[2762],{16452:function(t,a,n){n.r(a),n.d(a,{demos:function(){return d}});var e=n(75271),d={"table-demo-basic":{component:e.memo(e.lazy(function(){return Promise.all([n.e(9048),n.e(4180),n.e(5385),n.e(8251),n.e(4877),n.e(8704),n.e(653),n.e(3028),n.e(3496),n.e(32),n.e(7402),n.e(9448),n.e(4843),n.e(7868),n.e(2643),n.e(4019),n.e(3607),n.e(1031)]).then(n.bind(n,65369))})),asset:{type:"BLOCK",id:"table-demo-basic",refAtomIds:["table"],dependencies:{"index.tsx":{type:"FILE",value:n(3983).Z},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528",description:"\u4E3A\u6807\u9898\u5934\u6DFB\u52A0tooltip"},context:void 0,renderOpts:void 0}}},95092:function(t,a,n){n.r(a),n.d(a,{texts:function(){return e}});const e=[{value:"\u7EE7\u627F\u5E76\u5B8C\u5168\u517C\u5BB9",paraId:0,tocIndex:1},{value:"antd",paraId:0,tocIndex:1},{value:"\u7684",paraId:0,tocIndex:1},{value:"Table",paraId:0,tocIndex:1},{value:"\uFF0C\u53EF\u4EE5\u76F4\u63A5\u66FF\u6362\uFF0C\u5E76\u6269\u5145\u4E86\u5176\u4ED6\u529F\u80FD",paraId:0,tocIndex:1},{value:"\u5B8C\u5168\u7EE7\u627F\u81EA",paraId:1,tocIndex:5},{value:"antd",paraId:1,tocIndex:5},{value:"\u7684",paraId:1,tocIndex:5},{value:"Table",paraId:1,tocIndex:5},{value:"\u7EC4\u4EF6\uFF0C\u53C2\u8003",paraId:1,tocIndex:5},{value:"Table",paraId:1,tocIndex:5},{value:"\u9664\u7EE7\u627F\u81EA",paraId:2,tocIndex:6},{value:"Table",paraId:2,tocIndex:6},{value:"\u7EC4\u4EF6\u7684 ColumnType \u5916\uFF0C\u8FD8\u989D\u5916\u6269\u5145\u4EE5\u4E0B\u5C5E\u6027",paraId:2,tocIndex:6},{value:"\u53C2\u6570",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"tooltip",paraId:3,tocIndex:6},{value:"\u914D\u7F6E\u8868\u683C title \u63D0\u793A\u4FE1\u606F",paraId:3,tocIndex:6},{value:"React.ReactNode",paraId:3,tocIndex:6},{value:" | ",paraId:3,tocIndex:6},{value:"TooltipProps & { icon: React.ReactNode }",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6}]},3983:function(t,a){a.Z=`import React from 'react';
import { Table } from 'dt-react-component';

import { ColumnType } from '..';

interface DataType {
    id: number;
    name: string;
    age: number;
    address: string;
}

const columns: ColumnType<DataType>[] = [
    { dataIndex: 'name', title: 'Name', tooltip: 'This is Name!' },
    {
        dataIndex: 'age',
        title: 'Age',
        tooltip: { icon: <span>\u2753</span>, title: 'This is Age!', color: 'pink' },
    },
    { dataIndex: 'address', title: 'Address' },
];

const dataSource = [
    { id: 1, name: 'ZhangSan', age: 17, address: 'New York No. 1 Lake Park' },
    { id: 2, name: 'LiSi', age: 17, address: 'Bei Jing No. 1 Lake Park' },
    { id: 3, name: 'WangWu', age: 17, address: 'Zhe Jiang No. 1 Lake Park' },
];

export default () => {
    return <Table rowKey="id" columns={columns} dataSource={dataSource} />;
};
`}}]);

"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[3078],{83977:(function(t,a,n){n.r(a),n.d(a,{demos:function(){return d}});var e=n(30758),d={"table-demo-basic":{component:e.memo(e.lazy(function(){return Promise.all([n.e(8848),n.e(5808),n.e(1585),n.e(4896),n.e(3069),n.e(9495),n.e(1073),n.e(5150),n.e(8998),n.e(5385),n.e(6217),n.e(2441),n.e(7413),n.e(5619),n.e(9275),n.e(198),n.e(8578),n.e(9389),n.e(9445)]).then(n.bind(n,2425))})),asset:{type:"BLOCK",id:"table-demo-basic",refAtomIds:["table"],dependencies:{"index.tsx":{type:"FILE",value:n(43685).A},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528",description:"\u4E3A\u6807\u9898\u5934\u6DFB\u52A0tooltip"},routeId:"components/table/index",context:void 0,renderOpts:void 0}}}),24309:(function(t,a,n){n.r(a);const e=[{value:"\u7EE7\u627F\u5E76\u5B8C\u5168\u517C\u5BB9",paraId:0,tocIndex:1},{value:"antd",paraId:0,tocIndex:1},{value:"\u7684",paraId:0,tocIndex:1},{value:"Table",paraId:0,tocIndex:1},{value:"\uFF0C\u53EF\u4EE5\u76F4\u63A5\u66FF\u6362\uFF0C\u5E76\u6269\u5145\u4E86\u5176\u4ED6\u529F\u80FD",paraId:0,tocIndex:1},{value:"\u5B8C\u5168\u7EE7\u627F\u81EA",paraId:1,tocIndex:5},{value:"antd",paraId:1,tocIndex:5},{value:"\u7684",paraId:1,tocIndex:5},{value:"Table",paraId:1,tocIndex:5},{value:"\u7EC4\u4EF6\uFF0C\u53C2\u8003",paraId:1,tocIndex:5},{value:"Table",paraId:1,tocIndex:5},{value:"\u9664\u7EE7\u627F\u81EA",paraId:2,tocIndex:6},{value:"Table",paraId:2,tocIndex:6},{value:"\u7EC4\u4EF6\u7684 ColumnType \u5916\uFF0C\u8FD8\u989D\u5916\u6269\u5145\u4EE5\u4E0B\u5C5E\u6027",paraId:2,tocIndex:6},{value:"\u53C2\u6570",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"tooltip",paraId:3,tocIndex:6},{value:"\u914D\u7F6E\u8868\u683C title \u63D0\u793A\u4FE1\u606F",paraId:3,tocIndex:6},{value:"React.ReactNode",paraId:3,tocIndex:6},{value:" | ",paraId:3,tocIndex:6},{value:"TooltipProps & { icon: React.ReactNode }",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6}];n.d(a,["texts",0,e])}),43685:(function(t,a){a.A=`import React from 'react';
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
`})}]);

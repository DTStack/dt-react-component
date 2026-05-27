"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[3725],{46640:function(t,e,a){a.r(e),a.d(e,{demos:function(){return d}});var n=a(75271),d={"contentlayout-demo-basic":{component:n.memo(n.lazy(function(){return Promise.all([a.e(9048),a.e(4180),a.e(5385),a.e(8251),a.e(4877),a.e(653),a.e(3028),a.e(3496),a.e(32),a.e(7402),a.e(9448),a.e(4843),a.e(7868),a.e(2643),a.e(4019),a.e(3607),a.e(9644)]).then(a.bind(a,57732))})),asset:{type:"BLOCK",id:"contentlayout-demo-basic",refAtomIds:["contentLayout"],dependencies:{"index.tsx":{type:"FILE",value:a(7035).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"ContentLayout \u4F7F\u7528"},context:void 0,renderOpts:void 0}}},57338:function(t,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"\u5E26\u6709\u641C\u7D22\u548C Table \u5217\u8868",paraId:0,tocIndex:1},{value:"\u540D\u5B57",paraId:1,tocIndex:4},{value:"\u8BF4\u660E",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"ContentLayout",paraId:1,tocIndex:4},{value:"\u7EC4\u4EF6(\u4EC5\u652F\u6301\u4F7F\u7528 ContentLayout.Header/ContentLayout.Table)",paraId:1,tocIndex:4},{value:"React.ReactElement",paraId:1,tocIndex:4},{value:"ContentLayout.Header",paraId:1,tocIndex:4},{value:"\u5934\u90E8\u7EC4\u4EF6",paraId:1,tocIndex:4},{value:"React.ReactElement",paraId:1,tocIndex:4},{value:"ContentLayout.Table",paraId:1,tocIndex:4},{value:"Table \u7EC4\u4EF6",paraId:1,tocIndex:4},{value:"React.ReactElement",paraId:1,tocIndex:4},{value:"\u53C2\u6570",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"height",paraId:2,tocIndex:5},{value:"\u7EC4\u4EF6\u9AD8\u5EA6(\u5185\u90E8\u7684 Table \u4F1A\u6839\u636E\u9AD8\u5EA6\u81EA\u52A8\u8BA1\u7B97)",paraId:2,tocIndex:5},{value:"string",paraId:2,tocIndex:5},{value:"--",paraId:2,tocIndex:5},{value:"style",paraId:2,tocIndex:5},{value:"\u6837\u5F0F",paraId:2,tocIndex:5},{value:"React.CSSProperties",paraId:2,tocIndex:5},{value:"--",paraId:2,tocIndex:5},{value:"className",paraId:2,tocIndex:5},{value:"\u6837\u5F0F",paraId:2,tocIndex:5},{value:"string",paraId:2,tocIndex:5},{value:"--",paraId:2,tocIndex:5},{value:"children",paraId:2,tocIndex:5},{value:"\u5B50\u5143\u7D20",paraId:2,tocIndex:5},{value:"React.ReactElement   | React.ReactElement[]",paraId:2,tocIndex:5},{value:"--",paraId:2,tocIndex:5},{value:"\u53C2\u6570",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"ref",paraId:3,tocIndex:6},{value:"React.Ref<HTMLDivElement>",paraId:3,tocIndex:6},{value:"--",paraId:3,tocIndex:6},{value:"style",paraId:3,tocIndex:6},{value:"\u6837\u5F0F",paraId:3,tocIndex:6},{value:"React.CSSProperties",paraId:3,tocIndex:6},{value:"--",paraId:3,tocIndex:6},{value:"className",paraId:3,tocIndex:6},{value:"\u6837\u5F0F",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"--",paraId:3,tocIndex:6},{value:"children",paraId:3,tocIndex:6},{value:"\u5B50\u5143\u7D20",paraId:3,tocIndex:6},{value:"React.ReactNode",paraId:3,tocIndex:6},{value:"--",paraId:3,tocIndex:6},{value:"\u53C2\u6570",paraId:4,tocIndex:7},{value:"\u8BF4\u660E",paraId:4,tocIndex:7},{value:"\u7C7B\u578B",paraId:4,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:7},{value:"height",paraId:4,tocIndex:7},{value:"\u9AD8\u5EA6",paraId:4,tocIndex:7},{value:"string",paraId:4,tocIndex:7},{value:"--",paraId:4,tocIndex:7},{value:"style",paraId:4,tocIndex:7},{value:"\u6837\u5F0F",paraId:4,tocIndex:7},{value:"React.CSSProperties",paraId:4,tocIndex:7},{value:"--",paraId:4,tocIndex:7},{value:"className",paraId:4,tocIndex:7},{value:"\u6837\u5F0F",paraId:4,tocIndex:7},{value:"string",paraId:4,tocIndex:7},{value:"--",paraId:4,tocIndex:7},{value:"\u5176\u4F59\u53C2\u6570\u7EE7\u627F antd4.x \u7684 ",paraId:5},{value:"Table",paraId:5}]},7035:function(t,e){e.Z=`import React from 'react';
import { Input } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { ContentLayout } from 'dt-react-component';

export default () => {
    const columns: ColumnsType<{
        key: string;
        name: string;
        age: number;
        address: string;
    }> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    return (
        <ContentLayout height="300px">
            <ContentLayout.Header>
                <Input.Search placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9" style={{ width: 256 }} />
            </ContentLayout.Header>
            <ContentLayout.Table
                columns={columns}
                dataSource={[
                    {
                        key: '1',
                        name: 'John Brown',
                        age: 32,
                        address: 'New York No. 1 Lake Park',
                    },
                    {
                        key: '2',
                        name: 'Jim Green',
                        age: 42,
                        address: 'London No. 1 Lake Park',
                    },
                    {
                        key: '3',
                        name: 'Joe Black',
                        age: 32,
                        address: 'Sidney No. 1 Lake Park',
                    },
                    {
                        key: '4',
                        name: 'Joe Black1',
                        age: 32,
                        address: 'Sidney No. 1 Lake Park',
                    },
                    {
                        key: '5',
                        name: 'Joe Black2',
                        age: 32,
                        address: 'Sidney No. 1 Lake Park',
                    },
                    {
                        key: '6',
                        name: 'Joe Black3',
                        age: 32,
                        address: 'Sidney No. 1 Lake Park',
                    },
                ]}
                pagination={false}
            />
        </ContentLayout>
    );
};
`}}]);

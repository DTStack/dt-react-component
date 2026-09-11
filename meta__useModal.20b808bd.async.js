"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[750],{2465:(function(o,e,n){n.r(e),n.d(e,{demos:function(){return a}});var d=n(30758),a={"src-use-modal-demo-basic":{component:d.memo(d.lazy(function(){return Promise.all([n.e(8848),n.e(5808),n.e(1585),n.e(4896),n.e(3069),n.e(9495),n.e(1073),n.e(5150),n.e(8998),n.e(5385),n.e(6217),n.e(2441),n.e(3900),n.e(7413),n.e(5619),n.e(9275),n.e(198),n.e(8578),n.e(9389),n.e(7205),n.e(411),n.e(1186),n.e(1127),n.e(8765),n.e(3501),n.e(6023),n.e(1586),n.e(9010),n.e(4401),n.e(1917)]).then(n.bind(n,91963))})),asset:{type:"BLOCK",id:"src-use-modal-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(44699).A},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.24.16"},"...ts":{type:"FILE",value:n(9392).A}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528"},routeId:"components/useModal/index",context:void 0,renderOpts:void 0}}}),82733:(function(o,e,n){n.r(e);const d=[{value:"\u4FDD\u5B58\u5F53\u524D\u6570\u636E\u5E76\u6253\u5F00\u5F39\u6846",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:5},{value:"\u8BF4\u660E",paraId:1,tocIndex:5},{value:"\u7C7B\u578B",paraId:1,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:5},{value:"visible",paraId:1,tocIndex:5},{value:"\u662F\u5426\u53EF\u89C1",paraId:1,tocIndex:5},{value:"boolean",paraId:1,tocIndex:5},{value:"false",paraId:1,tocIndex:5},{value:"record",paraId:1,tocIndex:5},{value:"\u9009\u4E2D\u6570\u636E",paraId:1,tocIndex:5},{value:"T | undefined",paraId:1,tocIndex:5},{value:"undefined",paraId:1,tocIndex:5},{value:"open",paraId:1,tocIndex:5},{value:"\u6253\u5F00",paraId:1,tocIndex:5},{value:"(record?: T) => void",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"close",paraId:1,tocIndex:5},{value:"\u5173\u95ED",paraId:1,tocIndex:5},{value:"() => void",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5}];n.d(e,["texts",0,d])}),44699:(function(o,e){e.A=`import React, { useEffect } from 'react';
import { Button, Form, Input, Modal, Table } from 'antd';
import type { ColumnType } from 'antd/lib/table';

import useModal from '../';

interface IDataSource {
    id: string;
    name: string;
    age: number;
    address: string;
}

const data: IDataSource[] = [
    {
        id: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        id: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        id: '3',
        name: 'Joe Black',
        age: 52,
        address: 'Sydney No. 1 Lake Park',
    },
    {
        id: '4',
        name: 'Jim Red',
        age: 62,
        address: 'London No. 2 Lake Park',
    },
];

export default () => {
    const modal = useModal<IDataSource>();
    const [form] = Form.useForm<IDataSource>();

    const columns: ColumnType<IDataSource>[] = [
        {
            key: 'name',
            title: 'name',
            dataIndex: 'name',
        },
        {
            key: 'age',
            title: 'age',
            dataIndex: 'age',
        },
        {
            key: 'address',
            title: 'address',
            dataIndex: 'address',
        },
        {
            key: 'operation',
            title: '\u64CD\u4F5C',
            render: (_, record) => {
                return (
                    <Button
                        type="link"
                        onClick={() => {
                            modal.open(record);
                        }}
                    >
                        \u7F16\u8F91
                    </Button>
                );
            },
        },
    ];

    useEffect(() => {
        if (modal.visible) {
            form.setFieldsValue({
                name: modal.record?.name,
                age: modal.record?.age,
                address: modal.record?.address,
            });
        } else {
            form.resetFields();
        }
    }, [modal.record, modal.visible]);

    return (
        <>
            <Table
                columns={columns}
                size="small"
                scroll={{ y: 200 }}
                dataSource={data}
                rowKey="uuid"
                bordered
            />
            <Modal title="\u4FEE\u6539\u4FE1\u606F" open={modal.visible} onOk={modal.close} onCancel={modal.close}>
                <Form form={form}>
                    <Form.Item label="\u59D3\u540D" name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="\u5E74\u9F84" name="age">
                        <Input />
                    </Form.Item>
                    <Form.Item label="\u5730\u5740" name="address">
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
`}),9392:(function(o,e){e.A=`import { useState } from 'react';

const useModal = <T>() => {
    const [visible, setVisible] = useState(false);
    const [record, setRecord] = useState<T | undefined>(undefined);

    const open = (record?: T) => {
        setRecord(record);
        setVisible(true);
    };

    const close = () => {
        setRecord(undefined);
        setVisible(false);
    };

    return { visible, record, open, close };
};

export default useModal;
`})}]);

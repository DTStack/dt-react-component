import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Table } from 'antd';
import { Modal } from 'dt-react-component';

interface FormData {
    name: string;
    age: number;
    address: string;
}

interface Data extends FormData {
    key: string;
}

const data: Data[] = [
    {
        key: '1',
        name: 'UED',
        age: 22,
        address: '袋鼠家园1号',
    },
    {
        key: '2',
        name: '数栈',
        age: 12,
        address: '袋鼠家园13号',
    },
];

const ModalForm = Modal.Form<FormData>((_props) => {
    return (
        <>
            <Form.Item label="name" name={'name'}>
                <Input />
            </Form.Item>
            <Form.Item label="age" name={'age'}>
                <InputNumber />
            </Form.Item>
            <Form.Item label="address" name={'address'}>
                <Input />
            </Form.Item>
        </>
    );
});

export default () => {
    const [visible, setVisible] = useState(false);
    const [index, setIndex] = useState<number>(0);
    const [dataSource, setDataSource] = useState<Data[]>(data);

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '操作',
            dataIndex: 'operate',
            key: 'operate',
            render: (_: void, record: Data, index: number) => {
                return (
                    <Button
                        onClick={() => {
                            changeVisible();
                            setIndex(index + 1);
                        }}
                        type="primary"
                    >
                        添加
                    </Button>
                );
            },
        },
    ];

    const onSubmit = (values: FormData) => {
        dataSource.splice(index, 0, { ...values, key: new Date() + '' });
        setDataSource([...dataSource]);

        changeVisible();
    };

    const changeVisible = () => setVisible((v) => !v);

    return (
        <>
            <Table columns={columns} dataSource={dataSource} />
            <ModalForm
                title="advanceModalForm"
                visible={visible}
                onCancel={changeVisible}
                onSubmit={onSubmit}
            />
        </>
    );
};

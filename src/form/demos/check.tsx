import React, { useEffect, useMemo, useState } from 'react';
import { Form } from 'dt-react-component';
import { Input } from 'antd';
import getMockData, { type MockData } from './data';

export default () => {
    const [form] = Form.useForm<{ data: MockData[] }>();
    const [rowKeys, setRowKeys] = useState<string[]>([]);

    const [loading, setLoading] = useState(false);

    const getData = () => {
        setLoading(true);
        getMockData()
            .then((values) => {
                form.setFieldValue('data', values);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    // 将 uuidList 转成 Form.List 所需要的 idxList
    const selectedRowKeys = useMemo(
        () => rowKeys.map((id) => form.getFieldsValue().data?.findIndex((i) => i.uuid === id)),
        [rowKeys]
    );

    return (
        <Form form={form} layout="vertical" style={{ height: 400 }}>
            <Form.Table
                name="data"
                loading={loading}
                scroll={{
                    y: 280,
                }}
                rowSelection={{
                    selectedRowKeys,
                    onChange: (keys) => {
                        setRowKeys(
                            form
                                .getFieldsValue()
                                .data.filter((_, idx) => keys.includes(idx))
                                .map((row) => row.uuid)
                        );
                    },
                }}
                columns={[
                    {
                        key: 'name',
                        title: 'Name',
                        dataIndex: 'name',
                        required: true,
                        rules: [
                            {
                                required: true,
                                message: 'Please Input Name!',
                            },
                        ],
                        render: ({ name }) => (
                            <Input
                                disabled={rowKeys.includes(
                                    form.getFieldValue(['data', name, 'uuid'])
                                )}
                                placeholder="Name"
                            />
                        ),
                    },
                    {
                        key: 'address',
                        title: 'Address',
                        dataIndex: 'address',
                        render: () => <Input placeholder="Address" />,
                    },
                    {
                        key: 'company',
                        title: 'Company',
                        dataIndex: 'company',
                        render: () => <Input placeholder="Company" />,
                    },
                ]}
            />
        </Form>
    );
};

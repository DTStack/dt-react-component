import React from 'react';
import { Button, Form, Input, Result, Select, Table } from 'antd';
import { useList } from 'dt-react-component';
import type { Fetcher } from 'dt-react-component/useList';

import getMockData, { type MockData } from './data';

const fetcher: Fetcher<MockData, { current: number; pageSize: number; search?: string }> = (
    params
) => {
    return new Promise<{
        data: MockData[];
        total: number;
    }>((resolve) => {
        setTimeout(() => {
            resolve(getMockData(params));
        }, 150);
    });
};

export default () => {
    const { error, params, loading, data, mutate } = useList(fetcher, { current: 1, pageSize: 20 });
    const [form] = Form.useForm();

    if (error) return <Result status={500} />;

    const handleSearch = async () => {
        const values = await form.validateFields();
        mutate({ ...values });
    };

    const handleReset = async () => {
        form.resetFields();
        const values = await form.validateFields();
        // 当传入值有 undefined 的时候，采用 functional 的写法。
        // 因为底层使用的 lodash 的 merge，采用赋值写法不会对 undefined 做合并
        mutate((pre) => ({ ...pre, ...values }));
    };

    return (
        <>
            <Form layout="inline" form={form}>
                <Form.Item name="search">
                    <Input.Search style={{ marginBottom: 12, width: 228 }} />
                </Form.Item>
                <Form.Item name="filters">
                    <Select style={{ width: 228 }} mode="multiple">
                        <Select.Option key="female" value="female">
                            female
                        </Select.Option>
                        <Select.Option key="male" value="male">
                            male
                        </Select.Option>
                    </Select>
                </Form.Item>
                <Button type="ghost" style={{ marginRight: 16 }} onClick={handleReset}>
                    重置
                </Button>
                <Button type="primary" onClick={handleSearch}>
                    查询
                </Button>
            </Form>
            <Table
                loading={loading}
                columns={[
                    {
                        key: 'name',
                        title: 'name',
                        dataIndex: 'name',
                    },
                    {
                        key: 'address',
                        title: 'address',
                        dataIndex: 'address',
                    },
                    {
                        key: 'company',
                        title: 'company',
                        dataIndex: 'company',
                    },
                    {
                        key: 'gender',
                        title: 'gender',
                        dataIndex: 'gender',
                    },
                    {
                        key: 'weight',
                        title: 'weight',
                        dataIndex: 'weight',
                    },
                ]}
                onChange={(pagination) =>
                    mutate({ current: pagination.current, pageSize: pagination.pageSize })
                }
                size="small"
                scroll={{ y: 200 }}
                dataSource={data}
                pagination={{
                    current: params.current,
                    pageSize: params.pageSize,
                    total: params.total,
                }}
                rowKey="uuid"
                bordered
            />
        </>
    );
};

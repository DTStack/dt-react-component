import React from 'react';
import { Input, Result, Table } from 'antd';
import { Empty, useList } from 'dt-react-component';

import getMockData, { type MockData } from './data';

export default () => {
    const { error, params, loading, data, mutate, clearData } = useList<
        MockData,
        { current: number; pageSize: number; search?: string }
    >(
        (params) => {
            return new Promise<{
                data: MockData[];
                total: number;
            }>((resolve) => {
                setTimeout(() => {
                    resolve(getMockData(params));
                }, 1000);
            });
        },
        () => ({
            current: 1,
            pageSize: 20,
        })
    );

    if (error) return <Result status={500} />;

    return (
        <>
            <Input.Search
                value={params.search}
                onChange={(e) => {
                    mutate({ search: e.target.value }, { revalidate: false });
                    clearData();
                }}
                onSearch={() => mutate()}
                style={{ marginBottom: 12 }}
            />
            <Table
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
                locale={{
                    emptyText: () =>
                        loading ? (
                            <Empty type="search" active description="搜索中" />
                        ) : (
                            <Empty type="default" />
                        ),
                }}
                rowKey="uuid"
                bordered
            />
        </>
    );
};

import React from 'react';
import { Input, Result, Table } from 'antd';
import type { SorterResult } from 'antd/lib/table/interface';
import { useList } from 'dt-react-component';
import type { Fetcher } from 'dt-react-component/useList';

import getMockData, { type MockData } from './data';

type Params = {
    current: number;
    pageSize: number;
    search?: string;
    sorter?: SorterResult<MockData>;
    filters?: Record<string, any>;
};

const convert = (p: any) => p;

const fetcher: Fetcher<MockData, Params> = (params) => {
    return new Promise<{
        data: MockData[];
        total: number;
    }>((resolve) => {
        // 统一对 params 做一些改造传给服务端
        const next = convert(params);
        setTimeout(() => {
            resolve(getMockData(next));
        }, 150);
    });
};

export default () => {
    const { error, params, loading, data, mutate } = useList(fetcher, { current: 1, pageSize: 20 });

    if (error) return <Result status={500} />;

    return (
        <>
            <Input.Search
                value={params.search}
                onChange={(e) => mutate({ search: e.target.value }, { revalidate: false })}
                onSearch={() => mutate()}
                style={{ marginBottom: 12 }}
            />
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
                        filters: [
                            {
                                text: 'male',
                                value: 'male',
                            },
                            {
                                text: 'female',
                                value: 'female',
                            },
                        ],
                        dataIndex: 'gender',
                    },
                    {
                        key: 'weight',
                        title: 'weight',
                        dataIndex: 'weight',
                        sorter: true,
                    },
                ]}
                onChange={(pagination, filters, sorter) => {
                    mutate({
                        current: pagination.current,
                        pageSize: pagination.pageSize,
                        filters,
                        sorter: sorter as SorterResult<MockData>,
                    });
                }}
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

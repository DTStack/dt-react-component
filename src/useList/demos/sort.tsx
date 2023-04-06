import React from 'react';
import { Result, Table, Input } from 'antd';
import { isEqual } from 'lodash';
import { useList } from 'dt-react-component';
import getMockData, { type MockData } from './data';
import type { Fetcher } from 'dt-react-component/useList';

type Params = {
    current: number;
    pageSize: number;
    search?: string;
    sorter?: [{ field: string; asc: boolean }];
    filters?: string[];
};

const fetcher: Fetcher<MockData, Params> = (params) => {
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
                onChange={(pagination, rawFilters, rawSorter) => {
                    const sorter = (() => {
                        if (rawSorter?.columnKey) {
                            return [
                                {
                                    field: rawSorter.columnKey,
                                    asc: rawSorter.order === 'ascend',
                                },
                            ] as Params['sorter'];
                        }

                        return undefined;
                    })();

                    const filters = (rawFilters?.gender as string[]) || undefined;

                    if (!isEqual(sorter, params.sorter)) {
                        mutate({ current: 1, sorter });
                    } else if (!isEqual(filters, params.filters)) {
                        mutate({ current: 1, filters });
                    } else {
                        mutate({ current: pagination.current, pageSize: pagination.pageSize });
                    }
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

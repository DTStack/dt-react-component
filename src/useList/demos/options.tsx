import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import { Button, Drawer, Result, Table } from 'antd';
import { useList } from 'dt-react-component';
import type { Fetcher } from 'dt-react-component/useList';

import getMockData, { type MockData } from './data';

const fetcher: Fetcher<MockData, {}> = (params) => {
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

    const {
        loading: detailLoading,
        data: detailData,
        mutate: detailMutate,
        clear,
    } = useList(
        () =>
            new Promise<{ total: number; data: { name: string }[] }>((resolve) => {
                setTimeout(() => {
                    resolve({
                        data: new Array(5).fill(1).map(() => {
                            return {
                                name: faker.internet.userName(),
                            };
                        }),
                        total: 5,
                    });
                }, 100);
            }),
        {},
        { immediate: false }
    );

    const [current, setCurrent] = useState<number | undefined>(undefined);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (current) {
            detailMutate();
        }
    }, [current]);

    if (error) return <Result status={500} />;

    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Table
                loading={loading}
                columns={[
                    {
                        key: 'name',
                        title: 'name',
                        dataIndex: 'name',
                        render(text) {
                            return (
                                <Button
                                    type="link"
                                    onClick={() => {
                                        setVisible(true);
                                        setCurrent(text);
                                    }}
                                >
                                    {text}
                                </Button>
                            );
                        },
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
            <Drawer
                open={visible}
                title="detail"
                mask={false}
                onClose={() => {
                    setVisible(false);
                }}
                afterOpenChange={(visible) => {
                    if (!visible) {
                        setCurrent(undefined);
                        clear();
                    }
                }}
                getContainer={false}
            >
                <Table
                    bordered
                    size="small"
                    loading={detailLoading}
                    columns={[{ key: 'name', title: 'name', dataIndex: 'name' }]}
                    dataSource={detailData}
                    pagination={false}
                />
            </Drawer>
        </div>
    );
};

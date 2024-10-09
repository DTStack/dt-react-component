import React from 'react';
import { render } from '@testing-library/react';
import { Pagination } from 'antd';

import ContentLayout from '..';

describe('test contentLayout', () => {
    test('should support contentLayout success render', () => {
        const wrapper = render(<ContentLayout />);
        expect(wrapper).toMatchSnapshot();
    });
    test('should support contentLayout default height', () => {
        const { container } = render(
            <ContentLayout>
                <ContentLayout.Header>Header</ContentLayout.Header>
                <ContentLayout.Table
                    rowKey={'key'}
                    columns={[
                        {
                            title: 'Age',
                            dataIndex: 'age',
                            key: 'age',
                        },
                    ]}
                    dataSource={[{ key: 1, age: 19 }]}
                />
            </ContentLayout>
        );
        expect(container.querySelector<HTMLDivElement>('.content-layout')?.style.height).toBe(
            'calc(100vh - 96px)'
        );
    });
    test('should support contentLayout custom height', () => {
        const { container } = render(
            <ContentLayout height="500px">
                <ContentLayout.Header>Header</ContentLayout.Header>
                <ContentLayout.Table
                    rowKey={'key'}
                    columns={[
                        {
                            title: 'Age',
                            dataIndex: 'age',
                            key: 'age',
                        },
                    ]}
                    dataSource={[{ key: 1, age: 19 }]}
                />
            </ContentLayout>
        );
        expect(container.querySelector<HTMLDivElement>('.content-layout')?.style.height).toBe(
            '500px'
        );
    });
    test('should support contentLayout default table height', () => {
        const { container } = render(
            <ContentLayout>
                <ContentLayout.Header>Header</ContentLayout.Header>
                <ContentLayout.Table
                    rowKey={'key'}
                    columns={[
                        {
                            title: 'Age',
                            dataIndex: 'age',
                            key: 'age',
                        },
                    ]}
                    dataSource={[{ key: 1, age: 19 }]}
                    footer={() => <Pagination />}
                />
            </ContentLayout>
        );
        expect(container.querySelector<HTMLDivElement>('.ant-table-body')?.style.maxHeight).toBe(
            'calc(calc(calc(100vh - 96px) - 0px) - 88px)'
        );
    });
    test('should support contentLayout small table height', () => {
        const { container } = render(
            <ContentLayout>
                <ContentLayout.Header>Header</ContentLayout.Header>
                <ContentLayout.Table
                    rowKey={'key'}
                    size="small"
                    className="dt-pagination-small"
                    columns={[
                        {
                            title: 'Age',
                            dataIndex: 'age',
                            key: 'age',
                        },
                    ]}
                    dataSource={[{ key: 1, age: 19 }]}
                    footer={() => <Pagination />}
                />
            </ContentLayout>
        );
        expect(container.querySelector<HTMLDivElement>('.ant-table-body')?.style.maxHeight).toBe(
            'calc(calc(calc(100vh - 96px) - 0px) - 72px)'
        );
    });
});

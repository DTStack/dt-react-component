import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, render } from '@testing-library/react';
import { Table as AntdTable } from 'antd';
import '@testing-library/jest-dom/extend-expect';

import Table from '../index';

const columns = [
    {
        dataIndex: 'name',
        title: 'Name',
        tooltip: { title: 'This is Name!', mouseEnterDelay: 0, mouseLeaveDelay: 0 },
    },
    { dataIndex: 'address', title: 'Address' },
];

const dataSource = [
    { id: 1, name: 'ZhangSan', age: 17, address: 'New York No. 1 Lake Park' },
    { id: 2, name: 'LiSi', age: 17, address: 'Bei Jing No. 1 Lake Park' },
    { id: 3, name: 'WangWu', age: 17, address: 'Zhe Jiang No. 1 Lake Park' },
];

describe('test Table', () => {
    test('should preserve antd Table static members', () => {
        expect(Table.defaultProps).toBe(AntdTable.defaultProps);
        expect(Table.SELECTION_COLUMN).toBe(AntdTable.SELECTION_COLUMN);
        expect(Table.EXPAND_COLUMN).toBe(AntdTable.EXPAND_COLUMN);
        expect(Table.SELECTION_ALL).toBe(AntdTable.SELECTION_ALL);
        expect(Table.SELECTION_INVERT).toBe(AntdTable.SELECTION_INVERT);
        expect(Table.SELECTION_NONE).toBe(AntdTable.SELECTION_NONE);
        expect(Table.Column).toBe(AntdTable.Column);
        expect(Table.ColumnGroup).toBe(AntdTable.ColumnGroup);
        expect(Table.Summary).toBe(AntdTable.Summary);
    });

    test('should support tooltip column attribute', async () => {
        jest.useFakeTimers();
        const { container } = render(
            <Table rowKey="id" columns={columns} dataSource={dataSource} />
        );
        const iconNode = container.querySelector('.dtc-table__tooltip');
        expect(iconNode).toBeInTheDocument();

        act(() => {
            fireEvent.mouseEnter(iconNode!);
            jest.runAllTimers();
        });

        expect(
            container.parentElement?.querySelector('.ant-tooltip:not(.ant-tooltip-hidden)')
        ).toBeInTheDocument();
    });

    test('should support declarative Table.Column', () => {
        const { getByText } = render(
            <Table rowKey="id" dataSource={dataSource}>
                <Table.Column title="Name" dataIndex="name" />
                <Table.Column title="Address" dataIndex="address" />
            </Table>
        );

        expect(getByText('Name')).toBeInTheDocument();
        expect(getByText('ZhangSan')).toBeInTheDocument();
    });

    test('should preserve function column title', () => {
        const title = jest.fn(() => 'Dynamic Name');
        const { getByText } = render(
            <Table rowKey="id" columns={[{ dataIndex: 'name', title }]} dataSource={dataSource} />
        );

        expect(title).toHaveBeenCalled();
        expect(getByText('Dynamic Name')).toBeInTheDocument();
    });

    test('should support tooltip in nested columns', () => {
        const columns = [
            {
                title: 'Information',
                children: [
                    {
                        dataIndex: 'name',
                        title: 'Name',
                        tooltip: 'This is Name!',
                    },
                ],
            },
        ];
        const { container } = render(
            <Table rowKey="id" columns={columns} dataSource={dataSource} />
        );

        expect(container.querySelectorAll('.dtc-table__tooltip')).toHaveLength(1);
    });
});

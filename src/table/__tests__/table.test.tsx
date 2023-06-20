import React from 'react';
import Table from '../index';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';

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
});

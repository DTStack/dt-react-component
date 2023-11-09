import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SpreadSheet from '../index';

describe('test spreadSheet ', () => {
    const columns = ['name', 'gender', 'age', 'address'];
    const data = [
        ['zhangsan', 'male', '20', 'xihu'],
        ['lisi', 'male', '18', 'yuhang'],
    ];
    test('should render SpreadSheet custom className', () => {
        const { container, getByText, unmount } = render(
            <SpreadSheet columns={columns} data={data} className="testSpreadSheet" />
        );
        expect(container.firstChild).toHaveClass('testSpreadSheet');
        expect(getByText('zhangsan')).toBeInTheDocument();
        unmount();
    });

    test('renders without data', () => {
        const { getByText, unmount } = render(<SpreadSheet data={[]} columns={columns} />);
        expect(getByText('暂无数据')).toBeInTheDocument();
        unmount();
    });

    test('copy value without header', () => {
        const { getByText, unmount } = render(<SpreadSheet data={data} columns={columns} />);
        const cell = getByText('zhangsan');
        fireEvent.contextMenu(cell);
        const copyBtn = getByText('复制');
        expect(copyBtn).toBeInTheDocument();
        fireEvent.click(copyBtn);
        unmount();
    });

    test('copy value with header', () => {
        const { getByText, unmount } = render(
            <SpreadSheet data={data} columns={columns} options={{ showCopyWithHeader: true }} />
        );
        const cell = getByText('zhangsan');
        fireEvent.contextMenu(cell);
        const copyBtn = getByText('复制值以及列名');
        expect(copyBtn).toBeInTheDocument();
        fireEvent.click(copyBtn);
        unmount();
    });

    test('should call componentDidUpdate when props are updated', () => {
        const rerenderData = [['wangwu', 'male', '18', 'yuhang']];
        jest.useFakeTimers();
        const { rerender, getByText } = render(<SpreadSheet data={data} columns={columns} />);
        rerender(<SpreadSheet data={rerenderData} columns={columns} />);
        jest.runAllTimers();
        expect(getByText('wangwu')).toBeInTheDocument();
    });
});

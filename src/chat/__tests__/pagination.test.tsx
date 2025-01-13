import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, render } from '@testing-library/react';

import Pagination from '../pagination';

describe('Test Chat Pagination', () => {
    it('Match Snapshots', () => {
        expect(
            render(<Pagination current={1} total={5} onChange={jest.fn()} />).asFragment()
        ).toMatchSnapshot('default');

        expect(
            render(<Pagination disabled current={1} total={5} onChange={jest.fn()} />).asFragment()
        ).toMatchSnapshot('disabled');
    });

    it('Should call onChange when click left/right arrow', () => {
        const onChange = jest.fn();
        const { container, rerender } = render(
            <Pagination current={1} total={5} onChange={onChange} />
        );

        act(() => {
            fireEvent.click(container.querySelector('.anticon-left')!);
        });
        expect(onChange).not.toBeCalled();

        act(() => {
            fireEvent.click(container.querySelector('.anticon-right')!);
        });
        expect(onChange).toBeCalledWith(2);

        rerender(<Pagination current={5} total={5} onChange={onChange} />);

        act(() => {
            fireEvent.click(container.querySelector('.anticon-left')!);
        });
        expect(onChange).toBeCalledWith(4);

        onChange.mockRestore();
        act(() => {
            fireEvent.click(container.querySelector('.anticon-right')!);
        });
        expect(onChange).not.toBeCalled();
    });
});

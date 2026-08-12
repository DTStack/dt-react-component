import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TinyTag from '..';

describe('test StatusTag', () => {
    beforeEach(cleanup);

    test('should match snapshot', () => {
        const { asFragment } = render(<TinyTag value="完成" className="dtc-test" />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('should support fill type', () => {
        const { asFragment } = render(
            <TinyTag value="完成" type="fill" background="#D56161" color="#fff" />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    test('should render custom color in default mode', () => {
        const { container } = render(<TinyTag value="标签" color="#1890ff" />);
        const rect = container.querySelector('rect');
        const text = container.querySelector('text');

        expect(rect).toHaveAttribute('stroke', '#1890ff');
        expect(rect).toHaveAttribute('fill', 'none');
        expect(text).toHaveAttribute('fill', '#1890ff');
    });

    test('should render correct attributes and class in fill mode', () => {
        const { container } = render(
            <TinyTag value="标签" type="fill" background="#D56161" color="#ffffff" />
        );
        const span = container.querySelector('.dtc-tinyTag');
        const rect = container.querySelector('rect');
        const text = container.querySelector('text');

        expect(span).toHaveClass('dtc-tinyTag--fill');
        expect(rect).toHaveAttribute('fill', '#D56161');
        expect(rect).toHaveAttribute('stroke', '#D56161');
        expect(text).toHaveAttribute('fill', '#ffffff');
    });

    test('should fallback colors when background and color are not specified in fill mode', () => {
        const { container } = render(<TinyTag value="标签" type="fill" />);
        const rect = container.querySelector('rect');
        const text = container.querySelector('text');

        expect(rect).toHaveAttribute('fill', 'currentColor');
        expect(rect).toHaveAttribute('stroke', 'currentColor');
        expect(text).toHaveAttribute('fill', '#fff');
    });

    test('should pass standard HTML attributes and handle events', () => {
        const handleClick = jest.fn();
        const { container } = render(
            <TinyTag
                value="点击标签"
                id="test-tag"
                data-testid="tiny-tag-test"
                onClick={handleClick}
            />
        );
        const span = container.querySelector('span');

        expect(span).toHaveAttribute('id', 'test-tag');
        expect(span).toHaveAttribute('data-testid', 'tiny-tag-test');

        if (span) {
            fireEvent.click(span);
        }
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});

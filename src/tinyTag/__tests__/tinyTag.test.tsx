import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TinyTag from '..';

describe('test StatusTag', () => {
    const svgElementPrototype = SVGElement.prototype as SVGElement & {
        getComputedTextLength?: () => number;
    };
    const getComputedTextLength = svgElementPrototype.getComputedTextLength;
    const requestAnimationFrame = window.requestAnimationFrame;
    const cancelAnimationFrame = window.cancelAnimationFrame;

    beforeEach(() => {
        cleanup();
        Object.defineProperty(svgElementPrototype, 'getComputedTextLength', {
            configurable: true,
            value: jest.fn(() => 20),
        });
        window.requestAnimationFrame = jest.fn((callback) => {
            callback(0);
            return 0;
        });
        window.cancelAnimationFrame = jest.fn();
    });

    afterEach(() => {
        cleanup();
        Object.defineProperty(svgElementPrototype, 'getComputedTextLength', {
            configurable: true,
            value: getComputedTextLength,
        });
        window.requestAnimationFrame = requestAnimationFrame;
        window.cancelAnimationFrame = cancelAnimationFrame;
        jest.useRealTimers();
    });

    test('should match snapshot', () => {
        const { asFragment } = render(<TinyTag value="完成" className="dtc-test" />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('should support fill type', () => {
        const { asFragment } = render(
            <TinyTag value="完成" type="fill" bgColor="#D56161" color="#fff" />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    test('should remeasure width after hidden render', () => {
        const measureWidth = svgElementPrototype.getComputedTextLength as jest.Mock;
        measureWidth.mockReturnValueOnce(0).mockReturnValue(24);

        const { container } = render(<TinyTag value="META" />);

        expect(container.querySelector('svg')?.getAttribute('width')).toBe('32');
        expect(container.querySelector('rect')?.getAttribute('width')).toBe('31');
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
            <TinyTag value="标签" type="fill" bgColor="#D56161" color="#ffffff" />
        );
        const rect = container.querySelector('rect');
        const text = container.querySelector('text');

        expect(rect).toHaveAttribute('fill', '#D56161');
        expect(rect).toHaveAttribute('stroke', '#D56161');
        expect(text).toHaveAttribute('fill', '#ffffff');
    });

    test('should fallback colors when bgColor and color are not specified in fill mode', () => {
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

import * as React from 'react';
import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import EllipsisText from '../index';

(global as any).document.createRange = () => ({
    selectNodeContents: jest.fn(),
    getBoundingClientRect: jest.fn(() => ({
        width: 500,
    })),
});

const defaultProps = {
    value: '我是很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的文本',
};

let wrapper: RenderResult, element;
describe('test ellipsis text if not set max width', () => {
    beforeEach(() => {
        jest.spyOn(document.documentElement, 'scrollWidth', 'get').mockImplementation(() => 100);
        jest.spyOn(document.documentElement, 'offsetWidth', 'get').mockImplementation(() => 600);
        Object.defineProperty(window, 'getComputedStyle', {
            value: jest.fn(() => ({
                paddingLeft: '0px',
                paddingRight: '0px',
                cursor: 'pointer',
            })),
        });
        document.documentElement.getBoundingClientRect = jest.fn().mockReturnValue({
            width: 600,
        });
        wrapper = render(<EllipsisText {...defaultProps} />);
    });

    afterEach(() => {
        cleanup();
        jest.restoreAllMocks();
    });

    test('render correct value in ellipsis', () => {
        const { getByText } = wrapper;
        const { value } = defaultProps;
        element = getByText(value);

        expect(element).toBeInTheDocument();
        expect(element.style.maxWidth).toBe('100px');
    });

    test('render correct hover cursor in ellipsis', () => {
        const { getByText } = wrapper;
        const { value } = defaultProps;
        element = getByText(value);

        expect(element).toBeInTheDocument();
        expect(element.style.cursor).toBe('pointer');
    });
});

describe('auto calculate ellipsis text if the parent element does not exist', () => {
    beforeEach(() => {
        Object.defineProperty(window, 'getComputedStyle', {
            value: jest.fn(() => ({
                paddingLeft: '0px',
                paddingRight: '0px',
                cursor: 'pointer',
            })),
        });

        wrapper = render(<EllipsisText {...defaultProps} />);
    });

    afterEach(() => {
        cleanup();
    });

    test('render correct value in ellipsis', () => {
        const { getByText } = wrapper;
        const { value } = defaultProps;
        element = getByText(value);

        expect(element).toBeInTheDocument();
        expect(element.style.maxWidth).toBe('120px');
    });
});

describe('test ellipsis text if set max width', () => {
    beforeEach(() => {
        Object.defineProperty(window, 'getComputedStyle', {
            value: jest.fn(() => ({
                paddingLeft: '0px',
                paddingRight: '0px',
                cursor: 'pointer',
            })),
        });
        jest.spyOn(document.documentElement, 'scrollWidth', 'get').mockImplementation(() => 100);
        jest.spyOn(document.documentElement, 'offsetWidth', 'get').mockImplementation(() => 600);
        document.documentElement.getBoundingClientRect = jest.fn().mockReturnValueOnce({
            width: 900,
        });
    });

    afterEach(() => {
        cleanup();
        jest.restoreAllMocks();
    });

    test('The maximum is a number, render correct value in ellipsis', () => {
        const { container, getByText, getAllByText } = render(
            <EllipsisText {...defaultProps} maxWidth={100} />
        );

        const { value } = defaultProps;
        element = getByText(value);

        expect(element).toBeInTheDocument();
        expect(element.style.maxWidth).toBe('100px');
        expect(element.style.cursor).toBe('pointer');

        fireEvent.mouseEnter(element);
        expect(container.querySelector('.ant-tooltip-open')).not.toBeNull();
        expect(getAllByText(value).length).toBe(2);

        fireEvent.mouseLeave(element);
        expect(container.querySelector('.ant-tooltip-open')).toBeNull();
    });

    test('The maximum is a string，render correct value in ellipsis', () => {
        const { container, getByText, getAllByText } = render(
            <EllipsisText {...defaultProps} maxWidth="1000px" />
        );
        const { value } = defaultProps;
        element = getByText(value);

        expect(element).toBeInTheDocument();
        expect(element.style.maxWidth).toBe('900px');
        expect(element.style.cursor).toBe('pointer');

        fireEvent.mouseEnter(element);
        expect(container.querySelector('.ant-tooltip-open')).toBeNull();
        expect(getAllByText(value).length).toBe(1);

        fireEvent.mouseLeave(element);
    });
    test('The maximum is a percent，render correct value in ellipsis', () => {
        const { container, getByText, getAllByText } = render(
            <EllipsisText {...defaultProps} maxWidth="90%" />
        );
        const { value } = defaultProps;
        element = getByText(value);

        expect(element).toBeInTheDocument();
        expect(element.style.maxWidth).toBe('810px');
        expect(element.style.cursor).toBe('pointer');

        fireEvent.mouseEnter(element);
        expect(container.querySelector('.ant-tooltip-open')).toBeNull();
        expect(getAllByText(value).length).toBe(1);

        fireEvent.mouseLeave(element);
    });
    test('The maximum is a relative，render correct value in ellipsis', () => {
        const { container, getAllByText, getByText } = render(
            <EllipsisText {...defaultProps} maxWidth="calc(100% - 200px)" />
        );
        const { value } = defaultProps;
        element = getByText(value);

        expect(element).toBeInTheDocument();
        expect(element.style.maxWidth).toBe('700px');
        expect(element.style.cursor).toBe('pointer');

        fireEvent.mouseEnter(element);
        expect(container.querySelector('.ant-tooltip-open')).toBeNull();
        expect(getAllByText(value).length).toBe(1);

        fireEvent.mouseLeave(element);
    });
    test('The maximum is a not comply with the rules，render correct value in ellipsis', () => {
        const { container, getByText, getAllByText } = render(
            <EllipsisText {...defaultProps} maxWidth="20.4" />
        );
        const { value } = defaultProps;
        element = getByText(value);

        expect(element).toBeInTheDocument();
        expect(element.style.maxWidth).toBe('900px');
        expect(element.style.cursor).toBe('pointer');

        fireEvent.mouseEnter(element);
        expect(container.querySelector('.ant-tooltip-open')).toBeNull();
        expect(getAllByText(value).length).toBe(1);

        fireEvent.mouseLeave(element);
    });
});

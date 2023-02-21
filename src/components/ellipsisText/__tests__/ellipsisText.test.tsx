import * as React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
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

let wrapper, element;
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
        document.documentElement.getBoundingClientRect = jest.fn().mockReturnValueOnce({
            width: 600,
        });
        wrapper = render(
            <div>
                <EllipsisText {...defaultProps} />
            </div>
        );
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
                cursor: 'default',
            })),
        });
    });

    afterEach(() => {
        cleanup();
        jest.restoreAllMocks();
    });

    test('The maximum is a number, render correct value in ellipsis', () => {
        waitFor(() => {
            wrapper = render(
                <div>
                    <EllipsisText {...defaultProps} maxWidth={100} />
                </div>
            );
        });
        const { getByText, baseElement, getAllByText } = wrapper;
        const { value } = defaultProps;
        element = getByText(value);

        expect(element).toBeInTheDocument();
        expect(element.style.maxWidth).toBe('100px');
        expect(element.style.cursor).toBe('pointer');

        jest.useFakeTimers();
        fireEvent.mouseOver(element);
        jest.runAllTimers();

        expect(baseElement.querySelector('.ant-tooltip-open')).toBeInTheDocument();
        expect(getAllByText(value).length).toBe(2);
    });

    test('The maximum is a string，render correct value in ellipsis', () => {
        waitFor(() => {
            wrapper = render(
                <div>
                    <EllipsisText {...defaultProps} maxWidth="1000px" />
                </div>
            );
        });
        const { getByText, baseElement } = wrapper;
        const { value } = defaultProps;
        element = getByText(value);

        expect(element).toBeInTheDocument();
        expect(element.style.maxWidth).toBe('1000px');
        expect(element.style.cursor).toBe('default');

        jest.useFakeTimers();
        fireEvent.mouseOver(element);
        jest.runAllTimers();

        expect(baseElement.querySelector('.ant-tooltip-open')).not.toBeInTheDocument();
    });

    test('The maximum is a percent，render correct value in ellipsis', () => {
        waitFor(() => {
            wrapper = render(
                <div>
                    <EllipsisText {...defaultProps} maxWidth="80%" />
                </div>
            );
        });
        const { getByText, baseElement, getAllByText } = wrapper;
        const { value } = defaultProps;
        element = getByText(value);

        expect(element).toBeInTheDocument();
        expect(element.style.maxWidth).toBe('80%');
        expect(element.style.cursor).toBe('pointer');

        jest.useFakeTimers();
        fireEvent.mouseOver(element);
        jest.runAllTimers();

        expect(baseElement.querySelector('.ant-tooltip-open')).toBeInTheDocument();
        expect(getAllByText(value).length).toBe(2);
    });

    test('The maximum is a relative value，render correct value in ellipsis', () => {
        waitFor(() => {
            wrapper = render(
                <div>
                    <EllipsisText {...defaultProps} maxWidth="calc(100% - 10px)" />
                </div>
            );
        });
        const { getByText, baseElement, getAllByText } = wrapper;
        const { value } = defaultProps;
        element = getByText(value);

        expect(element).toBeInTheDocument();
        expect(element.style.maxWidth).toBe('calc(100% - 10px)');
        expect(element.style.cursor).toBe('pointer');

        jest.useFakeTimers();
        fireEvent.mouseOver(element);
        jest.runAllTimers();

        expect(baseElement.querySelector('.ant-tooltip-open')).toBeInTheDocument();
        expect(getAllByText(value).length).toBe(2);
    });

    test('The maximum is a relative value view，render correct value in ellipsis', () => {
        waitFor(() => {
            wrapper = render(
                <div>
                    <EllipsisText {...defaultProps} maxWidth="calc(100vh - 10px)" />
                </div>
            );
        });
        const { getByText, baseElement, getAllByText } = wrapper;
        const { value } = defaultProps;
        element = getByText(value);

        expect(element).toBeInTheDocument();
        expect(element.style.maxWidth).toBe('calc(100vh - 10px)');
        expect(element.style.cursor).toBe('pointer');

        jest.useFakeTimers();
        fireEvent.mouseOver(element);
        jest.runAllTimers();

        expect(baseElement.querySelector('.ant-tooltip-open')).toBeInTheDocument();
        expect(getAllByText(value).length).toBe(2);
    });
});

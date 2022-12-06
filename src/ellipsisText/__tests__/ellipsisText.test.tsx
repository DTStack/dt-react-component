import * as React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EllipsisText from '../index';

(window as any).document.createRange = () => ({
    selectNodeContents: jest.fn(),
    getBoundingClientRect: jest.fn(() => ({
        width: 500,
    })),
});

const defaultProps = {
    value: '我是很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的文本',
};

let wrapper: any, element: any;
describe('test ellipsis text if not set max width', () => {
    beforeEach(() => {
        jest.spyOn(document.documentElement, 'scrollWidth', 'get').mockImplementation(() => 100);
        jest.spyOn(document.documentElement, 'offsetWidth', 'get').mockImplementation(() => 600);
        Object.defineProperty(window, 'getComputedStyle', {
            value: jest.fn(() => ({
                paddingLeft: '0px',
                paddingRight: '0px',
            })),
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
});

describe('test ellipsis text if set max width', () => {
    beforeEach(() => {
        Object.defineProperty(window, 'getComputedStyle', {
            value: () => ({
                getPropertyValue: (_prop: any) => {
                    return '';
                },
            }),
        });

        wrapper = render(
            <div>
                <EllipsisText {...defaultProps} maxWidth={100} />
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

    test('render correct prompt info if mouse hover the text ', async () => {
        const { getByText, getAllByText, container } = wrapper;
        const { value } = defaultProps;
        element = getByText(value);

        jest.useFakeTimers();
        fireEvent.mouseOver(element);
        jest.runAllTimers();

        await waitFor(() => {
            expect(container.querySelector('.ant-tooltip-open')).toBeInTheDocument();
            expect(getAllByText(value).length).toBe(2);
        });
    });
});

describe('test ellipsis text if in IE8', () => {
    beforeEach(() => {
        jest.spyOn(document.documentElement, 'scrollWidth', 'get').mockImplementation(() => 100);
        jest.spyOn(document.documentElement, 'offsetWidth', 'get').mockImplementation(() => 100);
        Object.defineProperty(document.documentElement, 'currentStyle', {
            value: {
                paddingLeft: '0px',
                paddingRight: '0px',
            },
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
        expect(element.style.maxWidth).toBe('0');
    });
});

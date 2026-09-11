import React from 'react';
import { act } from 'react-dom/test-utils';
import { UploadOutlined } from '@dtinsight/react-icons';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from '..';

describe('Button', () => {
    test('should support contentLayout success render', () => {
        const wrapper = render(<Button icon={<UploadOutlined />}>Primary</Button>);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders text correctly', () => {
        const { getByText } = render(<Button>Hello</Button>);
        expect(getByText('Hello')).toBeInTheDocument();
    });

    it('renders icon correctly', () => {
        const { container } = render(<Button icon={<UploadOutlined />} />);
        expect(container.querySelector('.dtc-button__icon')).toBeInTheDocument();
        expect(container.querySelector('.dtc-button__text')).not.toBeInTheDocument();
    });

    it('renders icon and text correctly', () => {
        const { getByText, container } = render(<Button icon={<UploadOutlined />}>Search</Button>);
        expect(getByText('Search')).toBeInTheDocument();
        expect(container.querySelector('.dtc-button__icon')).toBeInTheDocument();
    });

    it('applies custom className', () => {
        const { container } = render(<Button className="custom-class">Test</Button>);
        expect(container.firstChild).toHaveClass('custom-class');
    });

    it('applies size className', () => {
        const { container } = render(<Button size="small">Test</Button>);
        expect(container.firstChild).toHaveClass('ant-btn-sm');
    });

    it('passes other props to AntdButton', () => {
        const { getByText } = render(<Button type="primary">Primary</Button>);
        expect(getByText('Primary').parentNode).toHaveClass('ant-btn-primary');
    });

    it('applies size class to icon and text', () => {
        const { container } = render(
            <Button icon={<UploadOutlined />} size="small">
                Test
            </Button>
        );
        expect(container.querySelector('.dtc-button__icon--small')).toBeInTheDocument();
        expect(container.querySelector('.dtc-button__text--small')).toBeInTheDocument();
    });

    it('shows tooltip from ReactNode content', () => {
        jest.useFakeTimers();
        const { getByRole } = render(<Button tooltip="Upload file">Upload</Button>);

        act(() => {
            fireEvent.mouseEnter(getByRole('button'));
            jest.runAllTimers();
        });

        expect(document.body.querySelector('.ant-tooltip-inner')).toHaveTextContent('Upload file');
        jest.useRealTimers();
    });

    it('supports tooltip props', () => {
        jest.useFakeTimers();
        const { getByRole } = render(
            <Button
                tooltip={{
                    title: 'Upload file',
                    overlayClassName: 'custom-button-tooltip',
                    mouseEnterDelay: 0,
                }}
            >
                Upload
            </Button>
        );

        act(() => {
            fireEvent.mouseEnter(getByRole('button'));
            jest.runAllTimers();
        });

        expect(document.body.querySelector('.custom-button-tooltip')).toBeInTheDocument();
        jest.useRealTimers();
    });

    it('shows tooltip for a disabled button', () => {
        jest.useFakeTimers();
        const { getByRole } = render(
            <Button disabled tooltip={{ title: 'No permission', mouseEnterDelay: 0 }}>
                Delete
            </Button>
        );
        const button = getByRole('button');
        const tooltipTrigger = button.parentElement;

        expect(tooltipTrigger).toHaveClass('ant-tooltip-disabled-compatible-wrapper');
        if (!tooltipTrigger) throw new Error('Tooltip trigger should exist');
        act(() => {
            fireEvent.mouseEnter(tooltipTrigger);
            jest.runAllTimers();
        });

        expect(document.body.querySelector('.ant-tooltip-inner')).toHaveTextContent(
            'No permission'
        );
        jest.useRealTimers();
    });

    it.each([undefined, null, false, ''] as const)(
        'keeps the original structure when tooltip is %p',
        (tooltip) => {
            const { container } = render(<Button tooltip={tooltip}>Upload</Button>);

            expect(container.firstElementChild).toBe(container.querySelector('button'));
            expect(container.querySelector('button')).not.toHaveAttribute('tooltip');
        }
    );

    it('treats zero as valid tooltip content', () => {
        jest.useFakeTimers();
        const { getByRole } = render(<Button tooltip={0}>Count</Button>);

        act(() => {
            fireEvent.mouseEnter(getByRole('button'));
            jest.runAllTimers();
        });

        expect(document.body.querySelector('.ant-tooltip-inner')).toHaveTextContent('0');
        jest.useRealTimers();
    });
});

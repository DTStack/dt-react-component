import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Popconfirm from '../index';

describe('Popconfirm', () => {
    test('should render Popconfirm success render', async () => {
        render(<Popconfirm title="Are you sure?">Click me</Popconfirm>);
        fireEvent.click(screen.getByText('Click me'));
        expect(screen.getByText('Are you sure?')).toBeInTheDocument();
        await waitFor(() =>
            expect(
                document.querySelector('.ant-popover-message .ant-popover-message-icon > span')
            ).toHaveAttribute('data-mock-icon', 'InformationFilled')
        );
        await waitFor(() => expect(document.querySelector('.ant-popover')).toMatchSnapshot());
        await waitFor(() => expect(document.querySelector('.dtc-popconfirm')).toBeInTheDocument());
    });

    it('should show overlay when trigger is clicked', async () => {
        const popconfirm = render(
            <Popconfirm title="code" trigger="click" autoAdjustOverflow={false}>
                <span>show me your code</span>
            </Popconfirm>
        );

        expect(popconfirm.container.querySelector('.ant-popover')).toBe(null);

        const triggerNode = popconfirm.container.querySelectorAll('span')[0];
        fireEvent.click(triggerNode);

        await waitFor(() => expect(document.querySelector('.ant-popover')).not.toBeNull());
    });

    it('should render correctly with warning type and warning icon', async () => {
        render(
            <Popconfirm title="Warning!" type="warning">
                Click me
            </Popconfirm>
        );
        fireEvent.click(screen.getByText('Click me'));
        await waitFor(() => expect(screen.getByText('Warning!')).toBeInTheDocument());
        await waitFor(() =>
            expect(
                document.querySelector('.ant-popover-message .ant-popover-message-icon > span')
            ).toHaveAttribute('data-mock-icon', 'WarningFilled')
        );
    });

    it('should render correctly with danger type and close icon', async () => {
        render(
            <Popconfirm title="Danger!" type="danger">
                Click me
            </Popconfirm>
        );
        fireEvent.click(screen.getByText('Click me'));
        await waitFor(() => expect(screen.getByText('Danger!')).toBeInTheDocument());
    });

    it('should not render icon when showIcon is false', async () => {
        render(
            <Popconfirm title="No Icon" showIcon={false}>
                Click me
            </Popconfirm>
        );
        fireEvent.click(screen.getByText('Click me'));
        await waitFor(() => expect(screen.getByText('No Icon')).toBeInTheDocument());
        await waitFor(() =>
            expect(document.querySelector('.ant-popover-message')?.children.length).toBe(2)
        );
    });

    it('should use custom icon when provided', async () => {
        const CustomIcon = () => <div data-testid="custom-icon">Custom</div>;
        render(
            <Popconfirm title="Custom Icon" icon={<CustomIcon />}>
                Click me
            </Popconfirm>
        );
        fireEvent.click(screen.getByText('Click me'));
        await waitFor(() => expect(screen.getByTestId('custom-icon')).toBeInTheDocument());
    });

    it('should trigger onConfirm when OK button is clicked', async () => {
        const onConfirm = jest.fn();
        render(
            <Popconfirm title="Confirm?" onConfirm={onConfirm}>
                Click me
            </Popconfirm>
        );
        fireEvent.click(screen.getByText('Click me'));
        fireEvent.click(await screen.findByText('OK'));
        expect(onConfirm).toHaveBeenCalled();
    });

    it('should trigger onCancel when Cancel button is clicked', async () => {
        const onCancel = jest.fn();
        render(
            <Popconfirm title="Cancel?" onCancel={onCancel}>
                Click me
            </Popconfirm>
        );
        fireEvent.click(screen.getByText('Click me'));
        fireEvent.click(await screen.findByText('Cancel'));
        expect(onCancel).toHaveBeenCalled();
    });

    it('should apply danger style to OK button for danger type', async () => {
        render(
            <Popconfirm title="Danger!" type="danger">
                Click me
            </Popconfirm>
        );
        fireEvent.click(screen.getByText('Click me'));
        const okButton = await screen.findByText('OK');
        expect(okButton.closest('button')).toHaveClass('ant-btn-dangerous');
    });
});

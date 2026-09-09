import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Tooltip from '..';

describe('Tooltip', () => {
    it('should render tooltip with default overlay className', async () => {
        render(
            <Tooltip title="Tooltip content" visible>
                <span>Hover me</span>
            </Tooltip>
        );

        await waitFor(() => expect(screen.getByText('Tooltip content')).toBeInTheDocument());

        const tooltip = document.querySelector('.dtc-tooltip');

        expect(tooltip).toBeInTheDocument();
    });

    it('should merge custom overlayClassName', async () => {
        render(
            <Tooltip title="Tooltip content" overlayClassName="custom-tooltip" visible>
                <span>Hover me</span>
            </Tooltip>
        );

        await waitFor(() => expect(document.querySelector('.dtc-tooltip')).toBeInTheDocument());

        expect(document.querySelector('.dtc-tooltip')).toHaveClass('custom-tooltip');
    });

    it('should pass overlayInnerStyle to antd Tooltip', async () => {
        render(
            <Tooltip title="Tooltip content" overlayInnerStyle={{ color: 'red' }} visible>
                <span>Hover me</span>
            </Tooltip>
        );

        await waitFor(() =>
            expect(document.querySelector('.ant-tooltip-inner')).toBeInTheDocument()
        );

        expect(document.querySelector('.ant-tooltip-inner')).toHaveStyle({
            color: 'red',
        });
    });
});

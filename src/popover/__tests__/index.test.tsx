import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Popover from '..';

describe('Popover', () => {
    it('should render popover with default overlay className', async () => {
        render(
            <Popover title="Popover title" content="Popover content" visible>
                <span>Hover me</span>
            </Popover>
        );

        await waitFor(() => expect(screen.getByText('Popover content')).toBeInTheDocument());

        expect(document.querySelector('.dtc-popover')).toBeInTheDocument();
    });

    it('should merge custom overlayClassName', async () => {
        render(
            <Popover
                title="Popover title"
                content="Popover content"
                overlayClassName="custom-popover"
                visible
            >
                <span>Hover me</span>
            </Popover>
        );

        await waitFor(() => expect(document.querySelector('.dtc-popover')).toBeInTheDocument());

        expect(document.querySelector('.dtc-popover')).toHaveClass('custom-popover');
    });

    it('should pass overlayInnerStyle to antd Popover', async () => {
        render(
            <Popover
                title="Popover title"
                content="Popover content"
                overlayInnerStyle={{ color: 'red' }}
                visible
            >
                <span>Hover me</span>
            </Popover>
        );

        await waitFor(() =>
            expect(document.querySelector('.ant-popover-inner')).toBeInTheDocument()
        );

        expect(document.querySelector('.ant-popover-inner')).toHaveStyle({
            color: 'red',
        });
    });
});

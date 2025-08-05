import React from 'react';
import { FullscreenExitOutlined, FullscreenOutlined } from '@dtinsight/react-icons';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Fullscreen from '..';
describe('test Fullscreen', () => {
    afterEach(() => {
        cleanup();
    });
    test('should default render correctly', () => {
        const { container } = render(<Fullscreen />);
        expect(container).toMatchSnapshot();
        expect(container.querySelector('.ant-btn')?.firstChild).toHaveClass('dtc-button__icon');
        expect(container.innerHTML).toMatch('全屏');
    });
    test('should customIcon render correctly', () => {
        const customIcon = {
            fullIcon: (
                <>
                    <FullscreenOutlined />
                    全屏
                </>
            ),
            exitFullIcon: (
                <>
                    <FullscreenExitOutlined />
                    退出全屏
                </>
            ),
        };
        const { container } = render(
            <Fullscreen fullIcon={customIcon.fullIcon} exitFullIcon={customIcon.exitFullIcon} />
        );
        expect(container.firstChild).not.toHaveClass('dtc-fullscreen-icon');
    });
    test('should custom iconStyle render correctly', () => {
        const iconStyle = {
            fontSize: 20,
            marginRight: 5,
        };
        const { container } = render(<Fullscreen iconStyle={iconStyle} />);
        expect(container.querySelector('.ant-btn')?.firstChild?.firstChild).toHaveStyle(
            'font-size: 20px; margin-right: 5px;'
        );
    });
    test('button fireEvent correct', () => {
        const { container } = render(<Fullscreen />);
        expect(container.innerHTML).toMatch('全屏');
        const button = screen.getByRole('button', { name: '全屏' });
        fireEvent.click(button);
    });
    test('button props onFullscreen correct', () => {
        const callback = jest.fn();
        render(<Fullscreen onFullscreen={callback} />);
        const button = screen.getByRole('button', { name: '全屏' });
        fireEvent.click(button);
        expect(callback).toHaveBeenCalledTimes(1);
    });
});

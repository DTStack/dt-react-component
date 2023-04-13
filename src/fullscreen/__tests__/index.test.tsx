import { ArrowsAltOutlined, ShrinkOutlined } from '@ant-design/icons';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Fullscreen from '..';
describe('test Fullscreen', () => {
    afterEach(() => {
        cleanup();
    });
    test('should default render correctly', () => {
        const { container } = render(<Fullscreen />);
        expect(container.firstChild).toMatchSnapshot();
        expect(container.querySelector('.ant-btn')?.firstChild).toHaveClass('dtc-fullscreen-icon');
        expect(container.innerHTML).toMatch('全屏');
    });
    test('should customIcon render correctly', () => {
        const customIcon = {
            fullIcon: (
                <>
                    <ArrowsAltOutlined />
                    全屏
                </>
            ),
            exitFullIcon: (
                <>
                    <ShrinkOutlined />
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
            width: 12,
            height: 12,
            marginRight: 5,
        };
        render(<Fullscreen iconStyle={iconStyle} />);
        const img = screen.getByRole('img');
        screen.debug(img);
        expect(img).toHaveStyle(`width: 12px; height: 12px; margin-right: 5px;`);
    });
    test('button fireEvent correct', () => {
        const { container } = render(<Fullscreen />);
        expect(container.innerHTML).toMatch('全屏');
        const button = screen.getByRole('button', { name: '全屏' });
        fireEvent.click(button);
    });
});

import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import Copy from '..';

describe('test Copy', () => {
    const mockText = 'This is a mock text';

    afterEach(() => {
        cleanup();
    });

    it('should copy text to clipboard on click', () => {
        const user = userEvent.setup({ writeToClipboard: true });
        const mockCopy = jest.fn();
        const { container } = render(<Copy text={mockText} onCopy={(text) => mockCopy(text)} />);
        const button = container.querySelector('.dtc-copy');

        expect(button).toBeInTheDocument();

        fireEvent.click(button!);
        expect(mockCopy).toHaveBeenCalledWith(mockText);
        user.paste().then((value) => {
            expect(value).toEqual(mockText);
        });
    });

    it('should render with custom button', () => {
        const user = userEvent.setup({ writeToClipboard: true });
        const { getByText } = render(
            <Copy text={mockText} button={<button>测试复制文本</button>} />
        );
        const customButton = getByText('测试复制文本');

        expect(customButton).toBeInTheDocument();

        fireEvent.mouseEnter(customButton);
        setTimeout(() => {
            expect(document.body.querySelector('.ant-tooltip')).not.toBeInTheDocument();
        }, 0);

        fireEvent.click(customButton);
        user.paste().then((value) => {
            expect(value).toEqual(mockText);
        });
    });

    it('should render with tooltip title', () => {
        const mockCopy = jest.fn();
        render(<Copy text={mockText} onCopy={(text) => mockCopy(text)} tooltip="复制文本" />);
        setTimeout(() => {
            expect(document.body.querySelector('.ant-tooltip')).toBeInTheDocument();
            expect(document.body.querySelector('.ant-tooltip-inner')?.innerHTML).toBe('复制文本');
        }, 0);
    });

    it('should render with tooltip object', () => {
        const mockCopy = jest.fn();
        render(
            <Copy
                text={mockText}
                onCopy={(text) => mockCopy(text)}
                tooltip={{ title: '复制文本' }}
            />
        );
        setTimeout(() => {
            expect(document.body.querySelector('.ant-tooltip')).toBeInTheDocument();
            expect(document.body.querySelector('.ant-tooltip-inner')?.innerHTML).toBe('复制文本');
        }, 0);
    });
});

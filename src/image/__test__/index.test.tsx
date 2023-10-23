import React from 'react';
import { render, waitFor } from '@testing-library/react';

import Image from '..';
let originalImage: any = null;

describe('test Image', () => {
    beforeEach(() => {
        originalImage = window.Image;
        // @ts-ignore
        window.Image = class {
            constructor() {
                setTimeout(() => {
                    // @ts-ignore
                    this.onload();
                }, 100);
            }
        };
    });

    afterEach(() => {
        window.Image = originalImage;
    });

    it('renders img when src is available', async () => {
        render(<Image src="https://example.com/image.jpg" />);

        await waitFor(() => {
            // 检查是否正确渲染 img 元素
            const imgDom = document.querySelector('img');
            expect(imgDom).not.toBeNull();
            expect(imgDom).toHaveAttribute('src', 'https://example.com/image.jpg');

            // 检查模拟的 Image 对象是否被调用
            expect(window.Image).toHaveBeenCalledTimes(1);
            expect(window.Image).toHaveBeenCalledWith();
        });
    });
});

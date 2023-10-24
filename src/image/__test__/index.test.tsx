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

    it('should render correct', async () => {
        const wrapper = render(<Image src="https://example.com/image.jpg" />);
        await waitFor(() => {
            expect(wrapper).toMatchSnapshot();
        });
    });

    it('renders img when src is available', async () => {
        render(<Image src="https://example.com/image.jpg" />);
        await waitFor(() => {
            // 检查是否正确渲染 img 元素
            const imgDom = document.querySelector('img');
            expect(imgDom).not.toBeNull();
            expect(imgDom?.src).toEqual('https://example.com/image.jpg');
        });
    });

    it('renders img with correct props', async () => {
        const { container } = render(
            <Image
                src="https://example.com/image.jpg"
                height={200}
                width={100}
                className="test"
                style={{ backgroundColor: 'red' }}
            />
        );
        await waitFor(() => {
            // 检查是否正确渲染 img 元素
            const imgDom = container.querySelector('img');
            expect(imgDom).not.toBeNull();
            expect(imgDom?.height).toEqual(200);
            expect(imgDom?.width).toEqual(100);
            expect(imgDom?.className).toEqual('test');
            expect((imgDom?.style as any)._values).toEqual({ 'background-color': 'red' });
        });
    });
});

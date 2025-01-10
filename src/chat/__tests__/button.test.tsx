import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Button from '../button';

describe('Test Chat Button', () => {
    beforeEach(() => cleanup());

    it('Match the snapshot', () => {
        expect(render(<Button type="default">Default</Button>).asFragment()).toMatchSnapshot(
            'default button'
        );

        expect(render(<Button type="primary">Default</Button>).asFragment()).toMatchSnapshot(
            'primary button'
        );

        expect(render(<Button type="secondary">Default</Button>).asFragment()).toMatchSnapshot(
            'secondary button'
        );
    });

    it('expect ONLY one global gradient div', () => {
        render(
            <>
                <Button type="default">Default</Button>
                <Button type="primary">Default</Button>
                <Button type="secondary">Default</Button>
            </>
        );
        const nodeList = document.querySelectorAll<HTMLDivElement>(
            '.dtc__aigc__button__global-gradient'
        );
        expect(nodeList.length).toBe(1);
        expect(nodeList[0].style.getPropertyValue('width')).toBe('0px');
        expect(nodeList[0].style.getPropertyValue('height')).toBe('0px');
        expect(nodeList[0].innerHTML).toMatchSnapshot('global gradient');
    });
});

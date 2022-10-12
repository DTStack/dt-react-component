import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Empty, { DEFAULT_BASE64, GREY_BASE64 } from '../index';

describe('Empty', () => {
    test('should support empty success render', () => {
        const wrapper = render(<Empty />)
        expect(wrapper).toMatchSnapshot();
    })
    it('should support empty image size should change', () => {
        const { container } = render(<Empty imageStyle={{ height: 20 }} />);
        expect(
            container.querySelector<HTMLDivElement>('.ant-empty-image')?.style.height
        ).toBe('20px');
    });

    it('should support empty description can be false', () => {
        const { container } = render(<Empty description={false} />);
        expect(container.querySelector('.ant-empty-description')).toBeFalsy();
    });

    it('should support empty render correct img for default type', () => {
        const { container } = render(<Empty />);
        const srcValue = container.querySelector('img').getAttribute('src');
        expect(srcValue).toEqual(DEFAULT_BASE64);
    })

    it('should support empty render correct img for grey type', () => {
        const { container } = render(<Empty type='grey' />);
        const srcValue = container.querySelector('img').getAttribute('src');
        expect(srcValue).toEqual(GREY_BASE64);
    })

    it('should support empty render correct img when have image props', () => {
        const { container } = render(<Empty image="public/iamges/drag-drawer-icon.png" type="grey" />);
        const srcValue = container.querySelector('img').getAttribute('src');
        expect(srcValue).toEqual('public/iamges/drag-drawer-icon.png');
    })
});

import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Empty, { IMG_MAP } from '../index';

describe('Empty', () => {
    test('should support empty success render', () => {
        const wrapper = render(<Empty />);
        expect(wrapper).toMatchSnapshot();
    });
    it('should support empty image default size', () => {
        const { container } = render(<Empty />);
        expect(container.querySelector<HTMLDivElement>('.ant-empty-image')?.style.height).toBe(
            '80px'
        );
    });
    it('should support empty image size should change', () => {
        const { container } = render(<Empty imageStyle={{ height: 20 }} />);
        expect(container.querySelector<HTMLDivElement>('.ant-empty-image')?.style.height).toBe(
            '20px'
        );
    });

    it('should support empty image size from iamgeStyle', () => {
        const { container } = render(<Empty imageStyle={{ height: 40 }} height={100} />);
        expect(container.querySelector<HTMLDivElement>('.ant-empty-image')?.style.height).toBe(
            '40px'
        );
    });

    it('should support empty description can be false', () => {
        const { container } = render(<Empty description={false} />);
        expect(container.querySelector('.ant-empty-description')).toBeFalsy();
    });

    it('should support empty render correct img for default type', () => {
        const { container } = render(<Empty />);
        const srcValue = container.querySelector('img')!.getAttribute('src');
        expect(srcValue).toEqual(IMG_MAP['default']);
    });

    it('should support empty render correct img for project type', () => {
        const { container } = render(<Empty type="project" />);
        const srcValue = container.querySelector('img')!.getAttribute('src');
        expect(srcValue).toEqual(IMG_MAP['project']);
    });
});

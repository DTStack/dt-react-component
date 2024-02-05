import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Empty, { IMG_MAP } from '..';

describe('Empty', () => {
    test('should support empty success render', () => {
        const wrapper = render(<Empty />);
        expect(wrapper).toMatchSnapshot();
    });
    it('should support empty image default size', () => {
        const { container } = render(<Empty size="large" />);
        expect(container.querySelector<HTMLDivElement>('.ant-empty-image')?.style.height).toBe(
            '100px'
        );
    });
    it('should support empty image size should change', () => {
        const { container } = render(<Empty imageStyle={{ height: 20 }} />);
        expect(container.querySelector<HTMLDivElement>('.ant-empty-image')?.style.height).toBe(
            '20px'
        );
    });

    it('should support empty image size from iamgeStyle', () => {
        const { container } = render(<Empty imageStyle={{ height: 40 }} size="large" />);
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

    it('should show correct content', () => {
        const { container } = render(
            <Empty type="project" show>
                show data
            </Empty>
        );
        const value = container.querySelector('.dtc-empty')?.innerHTML;
        expect(value).toEqual('show data');
    });

    it('should not show content', () => {
        const { container } = render(
            <Empty type="project" show={false}>
                show data
            </Empty>
        );
        expect(container.querySelector('.dtc-empty')?.children[0].classList).toContain('ant-empty');
    });

    it('should show correct antd empty children', () => {
        const { container } = render(<Empty type="project" render={() => 'antd empty children'} />);
        expect(container.querySelector('.ant-empty-footer')).not.toBeNull();
        expect(container.querySelector('.ant-empty-footer')?.innerHTML).toBe('antd empty children');
    });
});

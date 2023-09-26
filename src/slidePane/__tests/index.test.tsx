import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SlidePane from '../index';

describe('test SlidePane ', () => {
    test('snapshot match', () => {
        const wrapper = render(<SlidePane visible>Hello World</SlidePane>);
        expect(wrapper).toMatchSnapshot();
    });
    test('should be invisible', () => {
        const { container } = render(<SlidePane visible={false}>Hello World</SlidePane>);
        expect(container).not.toHaveClass();
    });
    test('should render mask correct ', () => {
        const { unmount } = render(<SlidePane visible>Hello World</SlidePane>);
        const dom = document.querySelector('.dtc-slide-pane-mask');
        expect(dom).toBe(null);
        unmount();
        render(
            <SlidePane visible mask>
                Hello World
            </SlidePane>
        );
        const domMask = document.querySelector('.dtc-slide-pane-mask');
        expect(domMask).not.toBe(null);
    });
    test('should render width correct', () => {
        render(
            <SlidePane visible width={640}>
                Hello World
            </SlidePane>
        );
        expect(document.querySelector('.dtc-slide-pane-content-wrapper')).toHaveStyle({
            width: '640px',
        });
    });
    test('should render className/style correct', () => {
        const { unmount } = render(
            <SlidePane
                visible
                rootClassName="root-className"
                bodyClassName="body-className"
                rootStyle={{ color: 'red' }}
                bodyStyle={{ backgroundColor: 'forestgreen' }}
            >
                Hello World
            </SlidePane>
        );
        expect(document.querySelector('.dtc-slide-pane')).toHaveClass('root-className');
        expect(document.querySelector('.dtc-slide-pane-body')).toHaveClass('body-className');
        expect(document.querySelector('.dtc-slide-pane')).toHaveStyle({ color: 'red' });
        expect(document.querySelector('.dtc-slide-pane-body')).toHaveStyle({
            backgroundColor: 'forestgreen',
        });
        unmount();
    });
    test('should render tab correct', () => {
        const { getByText, unmount } = render(
            <SlidePane
                visible
                width={640}
                tabs={[
                    { key: '1', title: 'tab1' },
                    { key: '2', title: 'tab2' },
                ]}
            >
                {(key) => {
                    switch (key) {
                        case '1':
                            return <div>基本信息</div>;
                        case '2':
                            return <div>变更记录</div>;
                        default:
                            break;
                    }
                }}
            </SlidePane>
        );
        expect(document.querySelector('.dtc-slide-pane-tabs')).not.toBe(null);
        expect(getByText('tab1')).toBeTruthy();
        expect(getByText('基本信息')).toBeTruthy();
        unmount();

        const { getByText: getByText1 } = render(
            <SlidePane
                visible
                width={640}
                tabs={[
                    { key: '1', title: 'tab1' },
                    { key: '2', title: 'tab2' },
                ]}
                activeKey="2"
            >
                {(key) => {
                    switch (key) {
                        case '1':
                            return <div>基本信息</div>;
                        case '2':
                            return <div>变更记录</div>;
                        default:
                            break;
                    }
                }}
            </SlidePane>
        );
        expect(getByText1('变更记录')).toBeTruthy();
        expect(getByText1('tab2').parentNode).toHaveClass('ant-tabs-tab-active');
    });
    test('should callback to be called', () => {
        const fn = jest.fn();
        const { getByRole } = render(
            <SlidePane visible onClose={fn}>
                Hello World
            </SlidePane>
        );
        const oImg = getByRole('img');
        fireEvent.click(oImg);
        expect(fn).toHaveBeenCalledTimes(1);
    });
});

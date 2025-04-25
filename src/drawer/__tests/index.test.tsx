import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { alert } from 'ant-design-testing';
import '@testing-library/jest-dom/extend-expect';

import Drawer, { DrawerType } from '../index';

describe('test Drawer ', () => {
    test('snapshot match', () => {
        const wrapper = render(<Drawer open>Hello World</Drawer>);
        expect(wrapper).toMatchSnapshot();
    });
    test('should be not open', () => {
        const { container } = render(<Drawer open={false}>Hello World</Drawer>);
        expect(container).not.toHaveClass();
    });
    test('should render loading correct ', () => {
        const { unmount } = render(<Drawer open>Hello World</Drawer>);
        const dom = document.querySelector('.ant-spin-spinning');
        expect(dom).toBe(null);
        unmount();
        render(
            <Drawer open loading>
                Hello World
            </Drawer>
        );
        const domLoading = document.querySelector('.ant-spin-spinning');
        expect(domLoading).not.toBe(null);
    });
    test('should render mask/maskClosable correct', () => {
        const { unmount } = render(<Drawer open>Hello World</Drawer>);
        const dom = document.querySelector('.dtc-drawer-mask');
        expect(dom).toBe(null);
        unmount();
        const fn = jest.fn();
        render(
            <Drawer open mask maskClosable onClose={fn}>
                Hello World
            </Drawer>
        );
        const domMask = document.querySelector('.dtc-drawer-mask');
        const domIcon = document.querySelector('.dtc-drawer-header--icon');
        expect(domMask).not.toBe(null);
        expect(domIcon).toBe(null);
        fireEvent.click(domMask as Element);
        expect(fn).toHaveBeenCalledTimes(1);
    });
    test('should render width correct', () => {
        render(
            <Drawer open width={640}>
                Hello World
            </Drawer>
        );
        expect(document.querySelector('.dtc-drawer-content-wrapper')).toHaveStyle({
            width: '640px',
        });
    });
    test('should render size width correct', () => {
        render(
            <Drawer open size="large">
                Hello World
            </Drawer>
        );
        expect(document.querySelector('.dtc-drawer-content-wrapper')).toHaveStyle({
            width: `${(1256 / 1440) * 100}%`,
        });
    });
    test('should render className/style correct', () => {
        const { unmount } = render(
            <Drawer
                open
                rootClassName="root-className"
                bodyClassName="body-className"
                rootStyle={{ color: 'red' }}
                bodyStyle={{ backgroundColor: 'forestgreen' }}
            >
                Hello World
            </Drawer>
        );
        expect(document.querySelector('.dtc-drawer')).toHaveClass('root-className');
        expect(document.querySelector('.dtc-drawer-body')).toHaveClass('body-className');
        expect(document.querySelector('.dtc-drawer')).toHaveStyle({ color: 'red' });
        expect(document.querySelector('.dtc-drawer-body')).toHaveStyle({
            backgroundColor: 'forestgreen',
        });
        unmount();
    });
    test('should render tab correct', () => {
        const { getByText, unmount } = render(
            <Drawer
                open
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
            </Drawer>
        );
        expect(document.querySelector('.dtc-drawer-tabs')).not.toBe(null);
        expect(getByText('tab1')).toBeTruthy();
        expect(getByText('基本信息')).toBeTruthy();
        unmount();

        const { getByText: getByText1 } = render(
            <Drawer
                open
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
            </Drawer>
        );
        expect(getByText1('变更记录')).toBeTruthy();
        expect(getByText1('tab2').parentNode).toHaveClass('ant-tabs-tab-active');
    });
    test('Should support string banner', async () => {
        const { getByText } = render(
            <Drawer open banner="banner">
                Hello World
            </Drawer>
        );

        expect(getByText('banner')).toBeInTheDocument();
    });
    test('Should support ReactNode', async () => {
        const { getByTestId } = render(
            <Drawer open banner={<div data-testid="banner">xxxx</div>}>
                test
            </Drawer>
        );

        expect(getByTestId('banner')).toBeInTheDocument();
    });
    it('Should support AlertProps', async () => {
        const { getByText } = render(
            <Drawer open banner={{ message: 'banner', type: 'error' }}>
                test
            </Drawer>
        );

        expect(getByText('banner')).toBeInTheDocument();
        expect(alert.query(document)?.classList.contains('ant-alert-error')).toBeTruthy();
    });
    test('should callback to be called', () => {
        const fn = jest.fn();
        const { getByRole } = render(
            <Drawer open onClose={fn}>
                Hello World
            </Drawer>
        );
        const oImg = getByRole('img');
        fireEvent.click(oImg);
        expect(fn).toHaveBeenCalledTimes(1);
    });

    test('should render from type', () => {
        const fn = jest.fn();
        render(
            <Drawer open type={DrawerType.Form} title="title" onClose={fn}>
                Hello World
            </Drawer>
        );
        const mask = document.querySelector('.dtc-drawer-mask');
        expect(mask).not.toBe(null);
        const domIcon = document.querySelector('.dtc-drawer-header--icon');
        expect(domIcon).not.toBe(null);
        fireEvent.click(mask as Element);
        expect(fn).toHaveBeenCalledTimes(0);
    });
});

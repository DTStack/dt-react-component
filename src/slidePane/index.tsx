import React, { CSSProperties, useEffect, useState } from 'react';
import { Alert, AlertProps, Spin, Tabs } from 'antd';
import classNames from 'classnames';
import { omit } from 'lodash';
import RcDrawer, { DrawerProps } from 'rc-drawer';

import motionProps from './motion';
import './style.scss';

interface Tab {
    readonly key: string;
    readonly title: React.ReactNode;
}

type readOnlyTab = readonly Tab[];

type TabKey<T extends readOnlyTab> = T[number]['key'];

interface NormalSlidePane extends Omit<DrawerProps, 'placement'> {
    /** @deprecated */
    visible?: boolean;
    size?: 'small' | 'default' | 'large';
    loading?: boolean;
    bodyClassName?: string;
    title?: React.ReactNode;
    bodyStyle?: CSSProperties;
    footer?: React.ReactNode;
    banner?: AlertProps['message'] | Omit<AlertProps, 'banner'>;
}

interface TabsSlidePane<T extends readOnlyTab> extends Omit<NormalSlidePane, 'children'> {
    tabs?: T;
    activeKey?: TabKey<T>;
    children?: (key: TabKey<T>) => React.ReactNode;
}

function isFunction(props: any): props is TabsSlidePane<Tab[]> {
    return typeof props.children === 'function';
}

export type SlidePaneProps<T extends readOnlyTab> = TabsSlidePane<T> | NormalSlidePane;

const getWidthFromSize = (size: NormalSlidePane['size']) => {
    if (size === 'small') return 720;
    if (size === 'large') return 1256;
    return 1000;
};

const isValidBanner = (banner: NormalSlidePane['banner']): banner is AlertProps['message'] => {
    if (typeof banner === 'object') return React.isValidElement(banner);
    return true;
};

const SlidePane = <T extends readOnlyTab>(props: SlidePaneProps<T>) => {
    const slidePrefixCls = 'dtc-slide-pane';

    const {
        visible,
        open,
        loading = false,
        bodyClassName,
        mask = false,
        bodyStyle,
        title,
        width,
        size = 'default',
        children,
        footer,
        banner,
        onClose,
        ...rest
    } = props;

    const composeOpen = open || visible;
    const finalWidth = width ?? getWidthFromSize(size);

    const [tabKey, setTabKey] = useState('');

    useEffect(() => {
        composeOpen &&
            isFunction(props) &&
            setTabKey(props.activeKey || props.tabs?.[0]?.key || '');
    }, [open, visible]);

    const renderButton = () => {
        return (
            <img
                className={`${slidePrefixCls}-icon`}
                onClick={onClose}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAABwCAYAAAAE0LDPAAAAAXNSR0IArs4c6QAAAnlJREFUaEPtmk9IVHEQx78jufpw7ykouuEaBG6dEmrXOmRRt476VgvyEngKlNqQMu3PoSU7iCBq4CW2olNdRMRr7HasnnZb0y57WGODzUDjt/RIonbeyzfQYd51h/m8+c7395u3MOSs5Xexr4dKRLt5AhYJtbPRaNO7velo/4Bf6YhoB8B0R3vzNSLaNr8ECnBRRLTc0d583kBEAJU3J5o6HG0ZkgTs1OBATAxgqqghTIoCiPBeFABQSRggZFOxg/anC0ElYq9JlUglYhVgA9RFKhGrABugLlKJWAXYAHWRSsQqwAaoi1QiVgE2gHVRejKDUKgWQ1cvmj/XbMLfA3jA42dwVvPo7+tBd/xo8ICNzQLG7y3AskIYvz2IcEO9LwhbgcmWebGCpeUcEvEYBvrOBg8ol7cxOjaP4lYJqZEkIm2NniGeKjDZ3mQ/YPbJa7S1NiI1YntuuGeAgTx8lMHqx3XYvWdwOnHMUxW+AJufC7hzdwH1VggTt64gHLZYiC+Ayfb85QoWl3KIn+jEpeS54AHlb98xOjaHYrGEG8M2DkWaqkJ8V2CyZd86mJl7hdaWg7h5PVm14f8EMJD0zxM+ePkCuo4f+WsV/ycgm3MwMy8k0d4mp4ZtRIJusmvTxMlODNgB21T8oLlXRbK3B6cS3maDZxeJXnbudb315Wvl9AZ+XbsDpzseQ3/QA+fTRgET9wVHpvmqcNbWK6PSjEy/D9vkB+mnaLDq5D5b/L6x7+8iBbBNVolUItYDKpFKxCrABqiLVCJWATZAXaQSsQqwAeoilYhVgA1QFzESCS8wia9giS6Rma1B0TU40UU+sVVEoWXK6uugPwBjVkdxauLcgwAAAABJRU5ErkJggg=="
                alt="closeBtn"
            />
        );
    };

    return (
        <RcDrawer
            open={composeOpen}
            placement="right"
            mask={mask}
            width={finalWidth}
            prefixCls={slidePrefixCls}
            onClose={onClose}
            {...rest}
            {...motionProps}
        >
            <Spin wrapperClassName={`${slidePrefixCls}-nested-loading`} spinning={loading}>
                {!mask && renderButton()}
                {title && <div className={`${slidePrefixCls}-header`}>{title}</div>}
                {banner && (
                    <Alert
                        message={isValidBanner(banner) ? banner : banner.message}
                        banner
                        {...(isValidBanner(banner) ? {} : omit(banner, 'message'))}
                    />
                )}
                {isFunction(props) && (
                    <Tabs
                        destroyInactiveTabPane
                        activeKey={tabKey}
                        onChange={setTabKey}
                        className={`${slidePrefixCls}-tabs`}
                    >
                        {props.tabs?.map((tab: { key: string; title: React.ReactNode }) => (
                            <Tabs.TabPane tab={tab.title} key={tab.key} />
                        ))}
                    </Tabs>
                )}
                <div
                    className={classNames(`${slidePrefixCls}-body`, bodyClassName)}
                    style={bodyStyle}
                >
                    {typeof children === 'function' ? children(tabKey) : children}
                </div>
                {footer ? (
                    <div className={classNames(`${slidePrefixCls}-footer`, bodyClassName)}>
                        {footer}
                    </div>
                ) : null}
            </Spin>
        </RcDrawer>
    );
};

export default SlidePane;

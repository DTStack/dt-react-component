import React, { CSSProperties, useEffect, useState } from 'react';
import { Alert, AlertProps, Spin, Tabs } from 'antd';
import classNames from 'classnames';
import { omit } from 'lodash';
import RcDrawer, { DrawerProps as AntdDrawerProps } from 'rc-drawer';

import motionProps from './motion';
import './style.scss';

interface Tab {
    readonly key: string;
    readonly title: React.ReactNode;
}

type readOnlyTab = readonly Tab[];

type TabKey<T extends readOnlyTab> = T[number]['key'];

interface NormalDrawerProps extends Omit<AntdDrawerProps, 'placement'> {
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

interface TabsDrawerProps<T extends readOnlyTab> extends Omit<NormalDrawerProps, 'children'> {
    tabs?: T;
    defaultKey?: TabKey<T>;
    activeKey?: TabKey<T>;
    children?: (key: TabKey<T>) => React.ReactNode;
    onChange?: (key: TabKey<T>) => void;
}

function isFunction<T extends readOnlyTab>(props: DrawerProps<T>): props is TabsDrawerProps<T> {
    return typeof props.children === 'function';
}

function isTabMode<T extends readOnlyTab>(props: DrawerProps<T>): props is TabsDrawerProps<T> {
    return 'tabs' in props;
}

function isControlled<T extends readOnlyTab>(props: DrawerProps<T>): props is TabsDrawerProps<T> {
    return 'activeKey' in props;
}

export type DrawerProps<T extends readOnlyTab> = TabsDrawerProps<T> | NormalDrawerProps;

const getWidthFromSize = (size: NormalDrawerProps['size']) => {
    if (size === 'small') return 720;
    if (size === 'large') return 1256;
    return 1000;
};

const isValidBanner = (banner: NormalDrawerProps['banner']): banner is AlertProps['message'] => {
    if (typeof banner === 'object') return React.isValidElement(banner);
    return true;
};

const Drawer = <T extends readOnlyTab>(props: DrawerProps<T>) => {
    const slidePrefixCls = 'dtc-drawer';

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
        footer,
        banner,
        onClose,
        ...rest
    } = props;

    const composeOpen = open || visible;
    const finalWidth = width ?? getWidthFromSize(size);

    const [internalTabKey, setInternalTabKey] = useState('');

    useEffect(() => {
        composeOpen &&
            isTabMode(props) &&
            setInternalTabKey(props.defaultKey ?? props.tabs?.[0]?.key ?? '');
    }, [composeOpen]);

    const currentKey = isControlled(props) ? props.activeKey : internalTabKey;

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

    const handleChangeKey = (key: TabKey<T>) => {
        !isControlled(props) && setInternalTabKey(key);
        isTabMode(props) && props.onChange?.(key);
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
            {!mask && renderButton()}
            <Spin wrapperClassName={`${slidePrefixCls}-nested-loading`} spinning={loading}>
                {title && <div className={`${slidePrefixCls}-header`}>{title}</div>}
                {banner && (
                    <Alert
                        message={isValidBanner(banner) ? banner : banner.message}
                        banner
                        {...(isValidBanner(banner) ? {} : omit(banner, 'message'))}
                    />
                )}
                {isTabMode(props) && (
                    <Tabs
                        destroyInactiveTabPane
                        activeKey={currentKey}
                        onChange={handleChangeKey}
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
                    {isFunction(props) ? props.children?.(currentKey ?? '') : props.children}
                </div>
                {footer ? (
                    <div className={classNames(`${slidePrefixCls}-footer`)}>{footer}</div>
                ) : null}
            </Spin>
        </RcDrawer>
    );
};

export default Drawer;

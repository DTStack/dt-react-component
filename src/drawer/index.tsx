import React, { CSSProperties, useEffect, useState } from 'react';
import { CloseOutlined } from '@dtinsight/react-icons';
import { Alert, AlertProps, Spin, Tabs } from 'antd';
import classNames from 'classnames';
import { omit } from 'lodash-es';
import RcDrawer, { DrawerProps as AntdDrawerProps } from 'rc-drawer';

import motionProps from './motion';
import './style.scss';

interface Tab {
    readonly key: string;
    readonly title: React.ReactNode;
}

type readOnlyTab = readonly Tab[];

type TabKey<T extends readOnlyTab> = T[number]['key'];

export enum DrawerType {
    Form = 'form',
    Normal = 'normal',
}

enum DrawerSize {
    Small = 720,
    Default = 1000,
    Large = 1256,
}

interface BaseDrawerProps extends Omit<AntdDrawerProps, 'placement' | 'children'> {
    size?: 'small' | 'default' | 'large';
    loading?: boolean;
    bodyClassName?: string;
    title?: React.ReactNode;
    bodyStyle?: CSSProperties;
    footer?: React.ReactNode;
    banner?: AlertProps['message'] | Omit<AlertProps, 'banner'>;
    type?: DrawerType;
}

export interface DrawerProps<T extends readOnlyTab = any> extends BaseDrawerProps {
    tabs?: T;
    defaultKey?: TabKey<T>;
    activeKey?: TabKey<T>;
    children?: React.ReactNode | ((key: TabKey<T>) => React.ReactNode);
    onChange?: (key: TabKey<T>) => void;
}

function isFunction<T extends readOnlyTab>(
    props: DrawerProps<T>
): props is DrawerProps<T> & { children: (key: string) => React.ReactNode } {
    return typeof props.children === 'function';
}

function isTabMode<T extends readOnlyTab>(props: DrawerProps<T>): props is DrawerProps<T> {
    return 'tabs' in props;
}

function isControlled<T extends readOnlyTab>(props: DrawerProps<T>): props is DrawerProps<T> {
    return 'activeKey' in props;
}

const getWidthFromSize = (size: DrawerProps['size']) => {
    if (size === 'small') return `${(DrawerSize.Small / 1440) * 100}%`;
    if (size === 'large') return `${(DrawerSize.Large / 1440) * 100}%`;
    return `${(DrawerSize.Default / 1440) * 100}%`;
};

const isValidBanner = (banner: DrawerProps['banner']): banner is AlertProps['message'] => {
    if (typeof banner === 'object') return React.isValidElement(banner);
    return true;
};

const Drawer = <T extends readOnlyTab>(props: DrawerProps<T>) => {
    const drawerPrefixCls = 'dtc-drawer';

    const {
        open,
        loading = false,
        bodyClassName,
        mask = false,
        maskClosable = true,
        bodyStyle,
        title,
        width,
        type = DrawerType.Normal,
        size = 'default',
        footer,
        banner,
        onClose,
        ...rest
    } = props;

    const finalWidth = width ?? getWidthFromSize(size);
    const isFormType = type === DrawerType.Form;

    const [internalTabKey, setInternalTabKey] = useState<TabKey<T>>('');

    useEffect(() => {
        open &&
            isTabMode(props) &&
            setInternalTabKey(props.defaultKey ?? props.tabs?.[0]?.key ?? '');
    }, [open]);

    const currentKey = isControlled(props) ? props.activeKey : internalTabKey;

    const renderButton = () => {
        return (
            <img
                className={`${drawerPrefixCls}-icon`}
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
            open={open}
            placement="right"
            mask={isFormType ? true : mask}
            maskClosable={isFormType ? false : maskClosable}
            width={finalWidth}
            prefixCls={drawerPrefixCls}
            onClose={onClose}
            {...rest}
            {...motionProps}
        >
            {!isFormType && renderButton()}
            <Spin wrapperClassName={`${drawerPrefixCls}-nested-loading`} spinning={loading}>
                {title && (
                    <div className={`${drawerPrefixCls}-header`}>
                        {title}
                        {isFormType && (
                            <CloseOutlined
                                className={`${drawerPrefixCls}-header--icon`}
                                onClick={onClose}
                            />
                        )}
                    </div>
                )}
                {banner && (
                    <Alert
                        message={isValidBanner(banner) ? banner : (banner as any).message}
                        banner
                        {...(isValidBanner(banner) ? {} : omit(banner, 'message'))}
                    />
                )}
                {isTabMode(props) && (
                    <Tabs
                        destroyInactiveTabPane
                        activeKey={currentKey}
                        onChange={handleChangeKey}
                        className={`${drawerPrefixCls}-tabs`}
                    >
                        {props.tabs?.map((tab: { key: string; title: React.ReactNode }) => (
                            <Tabs.TabPane tab={tab.title} key={tab.key} />
                        ))}
                    </Tabs>
                )}
                <div
                    className={classNames(`${drawerPrefixCls}-body`, bodyClassName)}
                    style={bodyStyle}
                >
                    {isFunction(props)
                        ? props.children?.(currentKey ?? '')
                        : (props.children as React.ReactNode)}
                </div>
                {footer ? (
                    <div className={classNames(`${drawerPrefixCls}-footer`)}>{footer}</div>
                ) : null}
            </Spin>
        </RcDrawer>
    );
};

export default Drawer;

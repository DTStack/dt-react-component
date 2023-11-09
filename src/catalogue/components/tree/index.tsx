import * as React from 'react';
import { useCallback, useEffect, useMemo, useReducer } from 'react';
import {
    CaretDownOutlined,
    CloseOutlined,
    MenuUnfoldOutlined,
    SearchOutlined,
} from '@ant-design/icons';
import type { TreeProps } from 'antd';
import { Input, Spin, Tabs, Tree } from 'antd';
import type { TabsProps } from 'antd/es/tabs';
import type { DataNode } from 'antd/es/tree';

import type { ITreeHeaderProps } from './components/header';
import { Header } from './components';
import { getExpendKeysByQuery, loopTree } from './helpers';
import './style.scss';

export const prefixCls = 'dtTreeWrapper';

/** ContextMenu item props */
type ContextItemProps = { text: React.ReactNode; key: React.Key };

export enum ITabsStatus {
    /** 搜索态 */
    search = 'search',
    /** tab 切换态 */
    tabs = 'tabs',
}

export interface ITreeDataItem extends DataNode {
    /** Item ContextMenu 配置 */
    contextMenuConfig?: {
        data: Array<ContextItemProps>;
        onClick: (e: ContextItemProps, item: ITreeDataItem) => void;
    };
    children?: ITreeDataItem[];
}

export interface ITabsItem {
    /** 选项卡头显示文字 */
    label: React.ReactNode;
    /** 对应 activeKey */
    key: string;
    /** 禁用某一项 */
    disabled?: boolean;
    // [key: string]: any;
}

export interface ITreeProps extends TreeProps, Pick<ITreeHeaderProps, 'btnSlot'> {
    /** 是否加载中 */
    loading?: boolean;
    /** 是否展示头部组件 */
    showHeader?: boolean;
    /** 头部文案 */
    treeTitle?: React.ReactNode;
    /** 容器类名 */
    wrapperClassName?: string;
    /** 容器行内样式 */
    wrapperStyle?: React.CSSProperties;
    /** 尺寸大小，small 每一个 item 高度是 28px，middle 每一个 item 高度是 32px， large 未实现 ，默认为 small */
    size?: 'small' | 'middle';
    /** 点击搜索按钮回调 */
    onSearch?: (
        value: string,
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.MouseEvent<HTMLElement, MouseEvent>
            | React.KeyboardEvent<HTMLInputElement>
            | undefined
    ) => void;
    /** tabs 配置 */
    tabsProps?: TabsProps & {
        /** 相当于 antd >=4.23.0 时的 items，目前只实现了 label、key、disabled > */
        items: ITabsItem[];
    };
    /** 与 TreeProps['treeData'] 类型相似，只是增加了 ContextMenu 配置 */
    treeData?: ITreeDataItem[];
    /** 默认展示 tabs 还是 search，仅 items 有值时生效  */
    defaultStatus?: ITabsStatus;
    /** tabs or status 变化时的回调 */
    onStatusChange?: (
        status: ITabsStatus,
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.MouseEvent<HTMLElement, MouseEvent>
            | React.KeyboardEvent<HTMLInputElement>
            | undefined
    ) => void;
}

interface IState {
    searchStr: string | undefined;
    collapsed: boolean;
    _expandedKeys: React.Key[];
    /** 搜索状态，默认 search 状态，若 tabsItems 有值则可以改动 */
    status: ITabsStatus;
}

const initState: IState = {
    searchStr: undefined,
    collapsed: false,
    _expandedKeys: [],
    status: ITabsStatus.search,
};

enum Action {
    UPDATE = 'update',
    RESET = 'reset',
}

interface IAction {
    type: Action;
    payload: Partial<IState>;
}

const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case Action.RESET:
            return initState;
        case Action.UPDATE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

const DtTree = (props: ITreeProps) => {
    const {
        showHeader,
        treeTitle,
        wrapperClassName,
        wrapperStyle,
        onSearch,
        treeData,
        tabsProps,
        loading,
        size,
        btnSlot,
        defaultStatus,
        onStatusChange,
        ...restProps
    } = props;
    const [{ searchStr, collapsed, _expandedKeys, status }, dispatch] = useReducer(reducer, {
        ...initState,
        status: defaultStatus || initState.status,
    });

    useEffect(() => {
        dispatch({ type: Action.UPDATE, payload: { _expandedKeys: restProps.expandedKeys } });
    }, [restProps.expandedKeys]);

    const data: TreeProps['treeData'] = useMemo(
        () => loopTree(treeData, searchStr as string),
        [treeData, searchStr]
    );

    const handleSearch = useCallback(
        (
            val: string,
            e?:
                | React.ChangeEvent<HTMLInputElement>
                | React.MouseEvent<HTMLElement, MouseEvent>
                | React.KeyboardEvent<HTMLInputElement>
                | undefined
        ) => {
            const newExpandedKeys = getExpendKeysByQuery({
                tree: treeData as DataNode[],
                searchStr: val,
            });
            dispatch({
                type: Action.UPDATE,
                payload: {
                    _expandedKeys: newExpandedKeys,
                    searchStr: val,
                },
            });
            onSearch?.(val, e);
        },
        [treeData, onSearch]
    );

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
        (e) => {
            const val = e?.target?.value;
            const newKeys = getExpendKeysByQuery({ tree: treeData as DataNode[], searchStr: val });
            dispatch({
                type: Action.UPDATE,
                payload: {
                    _expandedKeys: newKeys,
                    searchStr: val,
                },
            });
        },
        [treeData]
    );

    const toggleCollapsed = useCallback((flag: boolean) => {
        dispatch({ type: Action.UPDATE, payload: { collapsed: flag } });
    }, []);

    const onExpand = useCallback((newExpandedKeys: React.Key[]) => {
        dispatch({ type: Action.UPDATE, payload: { _expandedKeys: newExpandedKeys } });
    }, []);
    const handleChangeToSearch = useCallback(
        (e: any) => {
            dispatch({
                type: Action.UPDATE,
                payload: { status: ITabsStatus.search },
            });
            onStatusChange?.(ITabsStatus.search, e);
        },
        [onStatusChange]
    );

    const handleChangeToTabs = useCallback(
        (e: any) => {
            dispatch({
                type: Action.UPDATE,
                payload: { status: ITabsStatus.tabs, searchStr: undefined },
            });
            onStatusChange?.(ITabsStatus.tabs, e);
        },
        [onStatusChange]
    );

    const renderHeader = useCallback(() => {
        if (!showHeader) return null;
        return (
            <Header
                title={treeTitle}
                collapsed={collapsed}
                onCollapsed={toggleCollapsed}
                size={size}
                btnSlot={btnSlot}
            />
        );
    }, [showHeader, treeTitle, collapsed, size, btnSlot, toggleCollapsed]);
    const renderTabsAndSearch = useCallback(() => {
        const { items, ...restTabsProps } = tabsProps || {};
        if (status === ITabsStatus.tabs && items?.length) {
            return (
                <Tabs
                    tabBarExtraContent={
                        <SearchOutlined
                            className={`${prefixCls}-icon__search`}
                            onClick={handleChangeToSearch}
                        />
                    }
                    size={size}
                    {...restTabsProps}
                >
                    {items?.map((item) => (
                        <Tabs.TabPane key={item?.key} disabled={item?.disabled} tab={item?.label} />
                    ))}
                </Tabs>
            );
        } else if (status === ITabsStatus.search || !items?.length) {
            return (
                <div className={`${prefixCls}__search`}>
                    <Input.Search
                        placeholder="搜索任务名称"
                        onSearch={handleSearch}
                        onChange={handleChange}
                        size={size}
                        onPressEnter={(e: any) => {
                            handleSearch(e?.target?.value, e);
                        }}
                    />
                    {items?.length ? (
                        <CloseOutlined
                            className={`${prefixCls}-icon__close`}
                            onClick={handleChangeToTabs}
                        />
                    ) : null}
                </div>
            );
        }
        return null;
    }, [
        handleSearch,
        handleChange,
        tabsProps,
        status,
        size,
        handleChangeToSearch,
        handleChangeToTabs,
    ]);
    if (collapsed) {
        return (
            <MenuUnfoldOutlined
                className={`${prefixCls}-icon__unfold`}
                onClick={() => {
                    toggleCollapsed(false);
                }}
            />
        );
    }
    return (
        <Spin spinning={loading}>
            <div
                className={`${prefixCls} ${wrapperClassName ?? ''} ${prefixCls}-${size}`}
                style={wrapperStyle}
            >
                {renderHeader()}
                {renderTabsAndSearch()}
                <Tree
                    treeData={data}
                    expandedKeys={_expandedKeys}
                    onExpand={onExpand}
                    {...restProps}
                />
            </div>
        </Spin>
    );
};

DtTree.defaultProps = {
    loading: false,
    size: 'middle',
    showHeader: true,
    treeTitle: '标签目录',
    collapsed: true,
    showIcon: true,
    showLine: { showLeafIcon: false },
    switcherIcon: <CaretDownOutlined />,
    defaultStatus: ITabsStatus.tabs,
} as ITreeProps;

export default DtTree;

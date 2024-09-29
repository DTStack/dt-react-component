import React, { ReactNode } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { Button, ButtonProps, Divider, Dropdown, DropDownProps, Menu } from 'antd';
import classNames from 'classnames';

import './style.scss';

type ActionItem = {
    key: React.Key;
    name: ReactNode;
    disabled?: boolean;
    render?: () => ReactNode;
};

interface ICollapsibleActionItems {
    maxCount?: number; // 最多展示数量，超出折叠到下拉菜单中
    actionItems: ActionItem[];
    className?: string;
    divider?: ReactNode; // 分隔符
    collapseIcon?: ReactNode; // 折叠菜单图标
    dropdownProps?: Partial<DropDownProps>;
    buttonProps?: Partial<ButtonProps>;
    style?: React.CSSProperties;
    onItemClick?(key: React.Key): void;
}

const CollapsibleActionItems: React.FC<ICollapsibleActionItems> = (props) => {
    const {
        actionItems,
        maxCount = 3,
        className,
        divider = <Divider type="vertical" />,
        collapseIcon = <EllipsisOutlined />,
        dropdownProps,
        buttonProps,
        style,
        onItemClick,
    } = props;
    const isOverMaxCount = actionItems.length > maxCount;
    const getActionItemNode = (item: ActionItem, isCollapse = false) => {
        const customRender = item.render ? item.render() : null;
        if (!isCollapse)
            return (
                <span
                    className="dtc-collapsibleActionItems__btn"
                    key={item.key}
                    onClick={() => !item.disabled && onItemClick?.(item.key)}
                >
                    {customRender || (
                        <Button type="link" disabled={item.disabled} {...buttonProps}>
                            {item.name}
                        </Button>
                    )}
                </span>
            );

        return (
            <Menu.Item key={item.key} disabled={item.disabled}>
                {customRender || item.name}
            </Menu.Item>
        );
    };

    // 直接展示的操作项
    const displayAction = actionItems
        .slice(0, isOverMaxCount ? maxCount - 1 : maxCount)
        .map((item) => getActionItemNode(item, false));

    // 折叠展示的下拉菜单
    const dropdownMenu = isOverMaxCount ? (
        <Menu data-testid="action-dropdown-menu" onClick={(info) => onItemClick?.(info.key)}>
            {actionItems.slice(maxCount - 1).map((item) => getActionItemNode(item, true))}
        </Menu>
    ) : null;

    return (
        <div className={classNames('dtc-collapsibleActionItems', className)} style={style}>
            {displayAction.map((actionItem, index) => {
                const showDivider = index < actionItems.length - 1;
                return (
                    <React.Fragment key={actionItem.key}>
                        {actionItem}
                        {showDivider && divider}
                    </React.Fragment>
                );
            })}
            {dropdownMenu && (
                <Dropdown
                    overlay={dropdownMenu}
                    getPopupContainer={(triggerNode) => triggerNode.parentElement ?? document.body}
                    {...dropdownProps}
                >
                    <a
                        data-testid="action-dropdown-link"
                        className="dtc-collapsibleActionItems__icon"
                    >
                        {collapseIcon}
                    </a>
                </Dropdown>
            )}
        </div>
    );
};

export default CollapsibleActionItems;

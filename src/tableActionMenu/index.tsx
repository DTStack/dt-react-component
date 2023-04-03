import React from 'react';
import { Button, ButtonProps, Divider, Dropdown, DropDownProps, Menu } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

type ActionItem = {
    key: React.Key;
    name: React.ReactNode;
    disabled?: boolean;
    render?: (isCollapse: boolean) => React.ReactNode;
    [propName: string]: any;
};

interface IProps {
    maxCount?: number; // 最多展示数量，超出折叠到下拉菜单中
    actionItems: ActionItem[];
    className?: string;
    divider?: React.ReactNode; // 分隔符
    collapseIcon?: React.ReactNode; // 折叠菜单图标
    dropdownProps?: Partial<DropDownProps>;
    buttonProps?: Partial<ButtonProps>;
    onItemClick?(key: React.Key): void;
}

const TableActionMenu: React.FC<IProps> = (props) => {
    const {
        actionItems,
        maxCount = 3,
        className,
        divider = <Divider type="vertical" />,
        collapseIcon = <EllipsisOutlined />,
        dropdownProps,
        buttonProps,
        onItemClick,
    } = props;
    const isOverMaxCount = actionItems.length > maxCount;
    const getActionItemNode = (item: ActionItem, isCollapse = false) => {
        const customRender = item.render ? item.render(isCollapse) : null;
        if (!isCollapse)
            return (
                <span
                    className="dtc-table-action-btn-wrapper"
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
        <div className={className}>
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
                    <a data-testid="action-dropdown-link">{collapseIcon}</a>
                </Dropdown>
            )}
        </div>
    );
};

export default TableActionMenu;

import React, { CSSProperties, PropsWithChildren, ReactNode } from 'react';
import { Dropdown, Menu, DropdownProps, Popconfirm, PopconfirmProps } from 'antd';
import './style.scss';

interface IMenuProps {
    /**
     * @required
     */
    key: React.Key;
    /**
     * 菜单栏的标题文案
     */
    text: ReactNode;
    /**
     * 菜单栏的样式
     */
    style?: CSSProperties;
    /**
     * 是否支持 popconfirm 的弹出
     */
    confirm?: boolean;
    /**
     * 只有设置了 `confirm` 项的情况下，该属性才会生效
     */
    confirmProps?: PopconfirmProps;
    /**
     * 菜单栏的点击事件
     */
    cb?: () => void;
}

interface IContextMenu
    extends Pick<
        DropdownProps,
        'destroyPopupOnHide' | 'getPopupContainer' | 'placement' | 'overlayClassName'
    > {
    data: IMenuProps[];
    wrapperClassName?: string;
}

export default function ContextMenu({
    data = [],
    children,
    wrapperClassName,
    ...restProps
}: PropsWithChildren<IContextMenu>) {
    const menu = (
        <Menu
            className="dtc-contextMenu-menu"
            onClick={(item) => {
                item.domEvent.stopPropagation();
                data.find((i) => i.key === item.key)?.cb?.();
            }}
        >
            {data.map((item) =>
                item.confirm ? (
                    <Menu.Item style={item.style} key={item.key}>
                        <Popconfirm key={item.key} {...item.confirmProps!}>
                            <div>{item.text}</div>
                        </Popconfirm>
                    </Menu.Item>
                ) : (
                    <Menu.Item style={item.style} key={item.key}>
                        {item.text}
                    </Menu.Item>
                )
            )}
        </Menu>
    );

    if (!data.length) return <span className={wrapperClassName}>{children}</span>;

    return (
        <Dropdown overlay={menu} trigger={['contextMenu']} {...restProps}>
            <span className={wrapperClassName}>{children}</span>
        </Dropdown>
    );
}

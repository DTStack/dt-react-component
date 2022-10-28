import React from 'react';
import { PropsWithChildren } from 'react';
import { Dropdown, Menu, DropdownProps } from 'antd';

interface IMenuProps {
    key: React.Key;
    text: string;
    cb: () => void;
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
    data,
    children,
    wrapperClassName,
    ...restProps
}: PropsWithChildren<IContextMenu>) {
    const menu = (
        <Menu
            className="dt-contextMenu-menu"
            onClick={(item) => {
                data.find((i) => i.key === item.key)?.cb();
            }}
            items={data.map((item) => ({
                label: item.text,
                key: item.key,
            }))}
        />
    );

    return (
        <Dropdown overlay={menu} trigger={['contextMenu']} destroyPopupOnHide {...restProps}>
            <span className={wrapperClassName}>{children}</span>
        </Dropdown>
    );
}

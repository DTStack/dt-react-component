import * as React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, ProfileFilled } from '@ant-design/icons';

import { IProps as DtTreeProps } from '../../';
import './style.scss';

export const prefixCls = 'dtTreeHeaderWrapper';

export const btnSlotProp = 'btnSlot';

export interface IProps {
    /** 目录标题 */
    title?: React.ReactNode;
    /** 是否收起 */
    collapsed?: boolean;
    /** 展开、收起的回调 */
    onCollapsed?: (collapsed: boolean) => void;
    /** Header 右侧按扭组插槽【建议 icon 不超过3个，超出使用更多icon，下拉显示】，showHeader 为 true 时生效 */
    btnSlot?: React.ReactElement;
    size?: DtTreeProps['size'];
}

export default (props: IProps) => {
    const { onCollapsed, btnSlot } = props;
    const handleCollapsed = (flag: boolean) => (_: any) => {
        onCollapsed?.(flag);
    };
    return (
        <div className={prefixCls}>
            <div className={`${prefixCls}-left`}>
                <ProfileFilled className={`${prefixCls}-left__catalogueIcon`} />
                <span className={`${prefixCls}-left__title`}>{props?.title ?? ''}</span>
            </div>
            <div className={`${prefixCls}-right`}>
                {btnSlot}
                {props.collapsed ? (
                    <MenuUnfoldOutlined
                        className={`${prefixCls}-menuFold`}
                        onClick={handleCollapsed(false)}
                    />
                ) : (
                    <MenuFoldOutlined
                        className={`${prefixCls}-menuFold`}
                        onClick={handleCollapsed(true)}
                    />
                )}
            </div>
        </div>
    );
};

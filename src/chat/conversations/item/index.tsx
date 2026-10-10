import React from 'react';
import { MoreOutlined } from '@dtinsight/react-icons';
import { Dropdown } from 'antd';
import classNames from 'classnames';

import EllipsisText from '../../../ellipsisText';
import { ConversationInfo, ConversationsItemProps } from '../interface';
import './index.scss';

const prefixCls = 'dtc__conversations';
const Item: React.FC<ConversationsItemProps> = (props) => {
    const { info, active, dropdown, onClick } = props;

    const { disabled } = info;
    const { triggerDom } = dropdown || {};

    const handleClick = () => {
        if (disabled || active) return;
        onClick?.(info);
    };
    const stopPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    const renderMenuTrigger = (conversation: ConversationInfo) => {
        const originTriggerNode = (
            <MoreOutlined onClick={stopPropagation} className={`${prefixCls}__menu__icon`} />
        );
        if (triggerDom) {
            return typeof triggerDom === 'function'
                ? triggerDom(conversation, { originNode: originTriggerNode })
                : triggerDom;
        }
        return originTriggerNode;
    };
    return (
        <div
            className={classNames(
                `${prefixCls}__item`,
                active && !disabled && `${prefixCls}__item--active`,
                disabled && `${prefixCls}__item--disabled`
            )}
            onClick={handleClick}
        >
            {info.icon && <div className={`${prefixCls}__item__icon`}>{info.icon}</div>}
            <div className={`${prefixCls}__item__title`}>
                <EllipsisText
                    dynamic
                    value={info.title}
                    maxWidth="100%"
                    tooltip={{ placement: 'right', destroyTooltipOnHide: true }}
                />
            </div>
            {!disabled && dropdown?.overlay && (
                <Dropdown
                    trigger={['click']}
                    placement="bottom"
                    arrow
                    overlayStyle={{ minWidth: '80px' }}
                    {...dropdown}
                    disabled={disabled}
                >
                    {renderMenuTrigger(info)}
                </Dropdown>
            )}
        </div>
    );
};

export default Item;

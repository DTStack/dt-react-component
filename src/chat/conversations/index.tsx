import React, { useEffect } from 'react';
import { Spin } from 'antd';
import classNames from 'classnames';

import Empty from '../../empty';
import useLocale from '../../locale/useLocale';
import useGroupable from './hooks/useGroupable';
import GroupTitle from './groupTitle';
import { ConversationInfo, ConversationsProps } from './interface';
import Item from './item';
import './index.scss';

const prefixCls = 'dtc-conversations';
const Conversations = (props: ConversationsProps) => {
    const {
        conversations,
        activeKey,
        defaultActiveKey,
        dropdown,
        groupable,
        className,
        style,

        loading,
        header,
        collapsed = true,
        onItemClick,
        renderItem,
        ...restProps
    } = props;
    const [value, setValue] = React.useState(activeKey || defaultActiveKey);

    const [groupList, enable] = useGroupable(groupable, conversations);
    const [isHide, setIsHide] = React.useState(false);
    const locale = useLocale('Chat');

    const handleItemClick = (info: ConversationInfo) => {
        setValue(info.id);
        onItemClick?.(info);
    };

    useEffect(() => {
        if (activeKey !== value) {
            setValue(activeKey);
        }
    }, [activeKey]);

    const renderConversations = () => {
        if (loading) {
            return <Spin className={`${prefixCls}-spin-wrapper`} />;
        }
        if (!groupList?.length) {
            return (
                <Empty
                    type="project"
                    className={`${prefixCls}--empty`}
                    description={locale.conversationEmpty}
                />
            );
        }
        return (
            <ul {...restProps} className={prefixCls}>
                {groupList.map((group) => {
                    const items = group.conversations.map((conversation) => {
                        const dropdownVal =
                            typeof dropdown === 'function' ? dropdown(conversation) : dropdown;
                        if (renderItem) {
                            return renderItem({
                                info: conversation,
                                active: conversation.id === value,
                                prefixCls,
                                onClick: handleItemClick,
                                dropdown: dropdownVal,
                            });
                        }
                        return (
                            <Item
                                key={conversation.id}
                                info={conversation}
                                active={conversation.id === value}
                                onClick={handleItemClick}
                                prefixCls={prefixCls}
                                dropdown={dropdownVal}
                            />
                        );
                    });
                    if (enable) {
                        return (
                            <li key={group.id}>
                                {group.title?.(group, { components: { GroupTitle } }) || (
                                    <GroupTitle key={group.name} prefixCls={prefixCls}>
                                        {group.name}
                                    </GroupTitle>
                                )}
                                <ul className={`${prefixCls}-list`}>{items}</ul>
                            </li>
                        );
                    }
                    return items;
                })}
            </ul>
        );
    };
    useEffect(() => {
        if (collapsed) {
            setIsHide(false);
        }
    }, [collapsed]);

    return (
        <div
            className={classNames(
                `${prefixCls}-wrapper`,
                collapsed && `${prefixCls}--collapsed`,
                isHide && !collapsed && `${prefixCls}--hide`,
                className
            )}
            style={style}
            onTransitionEnd={() => {
                if (!collapsed) setIsHide(true);
            }}
        >
            {header}
            {renderConversations()}
        </div>
    );
};

export type { ConversationInfo };

Conversations.Item = Item;
Conversations.Title = GroupTitle;

export default Conversations;

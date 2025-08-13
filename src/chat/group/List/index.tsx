import React from 'react';
import classNames from 'classnames';

import { ConversationProperties } from '../../entity';
import Item from '../Item';

export interface IChatGroupListProps {
    conversations?: ConversationProperties[];
    className?: string;
    selectId?: string;
    renderItem?: (conversation: ConversationProperties) => React.ReactNode;
    onItemClick?: (conversation: ConversationProperties) => void;
    onRename?: (conversation: ConversationProperties, value: string) => Promise<any>;
    onDelete?: (conversation: ConversationProperties) => void;
}
export default function List(props: IChatGroupListProps) {
    const { conversations, className, selectId, renderItem, onItemClick, onRename, onDelete } =
        props;

    return (
        <div className={classNames('dtc-aigc__dialog__list', className)}>
            {conversations?.map((conversation) => {
                if (renderItem) return renderItem(conversation);
                return (
                    <Item
                        key={conversation.id}
                        conversation={conversation}
                        selectId={selectId}
                        onRename={onRename}
                        onDelete={onDelete}
                        onItemClick={onItemClick}
                    />
                );
            })}
        </div>
    );
}

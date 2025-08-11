import React from 'react';
import classNames from 'classnames';

import { ConversationProperties } from '../../entity';
import Item from '../Item';

export interface IListProps {
    conversations?: ConversationProperties[];
    className?: string;
    selectId?: string;
    renderItem?: (conversation: ConversationProperties) => React.ReactNode;
    onItemClick?: (conversation: ConversationProperties) => void;
    onRename?: (conversation: ConversationProperties, value: string) => Promise<any>;
    onDelete?: (conversation: ConversationProperties) => void;
}
export default function List(props: IListProps) {
    const { conversations, className, selectId, renderItem, onItemClick, onRename, onDelete } =
        props;

    return (
        <div className={classNames('dtc-aigc-dialog-list', className)}>
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

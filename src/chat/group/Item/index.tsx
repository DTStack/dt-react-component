import React, { useState } from 'react';
import { MoreOutlined } from '@dtinsight/react-icons';
import { Dropdown, Input, Menu, message } from 'antd';
import classNames from 'classnames';

import EllipsisText from '../../../ellipsisText';
import useLocale from '../../../locale/useLocale';
import { ConversationProperties } from '../../entity';
import './index.scss';

type IItemProps = {
    conversation: ConversationProperties;
    selectId?: string;
    onRename?: (conversation: ConversationProperties, value: string) => Promise<boolean>;
    onDelete?: (conversation: ConversationProperties) => void;
    onItemClick?: (conversation: ConversationProperties) => void;
};

export default function Item({
    conversation,
    selectId,
    onRename,
    onDelete,
    onItemClick,
}: IItemProps) {
    const locale = useLocale('Chat');
    const [edit, setEdit] = useState(false);
    const handleRename = async (value: string) => {
        if (!value) {
            setEdit(false);
            message.error(locale.renameError);
            return;
        }
        const res = await onRename?.(conversation, value);
        if (res) {
            setEdit(false);
        }
    };

    const handleDelete = () => {
        onDelete?.(conversation);
    };
    const handleSelect = (conversation: ConversationProperties) => {
        if (conversation.id === selectId || edit) {
            return;
        }
        onItemClick?.(conversation);
    };

    return (
        <div
            className={classNames(
                'dtc-aigc__dialog__list__item',
                conversation.id === selectId && 'dtc-aigc__dialog__list__item--selected'
            )}
            onClick={() => handleSelect(conversation)}
        >
            {edit ? (
                <Input
                    className="dtc-aigc__dialog__list__item__input"
                    defaultValue={conversation.title}
                    maxLength={30}
                    autoFocus
                    onBlur={({ target }) => {
                        handleRename(target.value);
                    }}
                    onPressEnter={({ target, keyCode }) => {
                        if (keyCode === 13) {
                            handleRename((target as HTMLInputElement).value);
                        }
                    }}
                />
            ) : (
                <>
                    <EllipsisText
                        watchParentSizeChange
                        value={conversation.title}
                        placement="right"
                        maxWidth="100%"
                        destroyTooltipOnHide
                    />
                    <Dropdown
                        trigger={['click']}
                        placement="bottom"
                        arrow
                        overlay={
                            <Menu onClick={(e) => e.domEvent.stopPropagation()}>
                                <Menu.Item key="rename" onClick={() => setEdit(true)}>
                                    {locale.rename}
                                </Menu.Item>
                                <Menu.Item key="delete" onClick={handleDelete}>
                                    {locale.delete}
                                </Menu.Item>
                            </Menu>
                        }
                        overlayStyle={{ minWidth: '80px' }}
                    >
                        <MoreOutlined onClick={(e) => e.stopPropagation()} />
                    </Dropdown>
                </>
            )}
        </div>
    );
}

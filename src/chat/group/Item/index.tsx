import React, { useState } from 'react';
import { MoreOutlined } from '@dtinsight/react-icons';
import { Dropdown, Input, Menu, message } from 'antd';
import classNames from 'classnames';

import EllipsisText from '../../../ellipsisText';
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
    const [edit, setEdit] = useState(false);
    const handleRename = async (value: string) => {
        if (!value) {
            setEdit(false);
            message.error('请输入对话名称');
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
                'dtc-aigc-dialog-list-item',
                conversation.id === selectId && 'dtc-aigc-dialog-list-item__selected'
            )}
            onClick={() => handleSelect(conversation)}
        >
            {edit ? (
                <Input
                    className="dtc-aigc-dialog-list-item-input"
                    defaultValue={conversation.title}
                    // 指标里限制长度的交互一般是按照报错的方式来的。
                    // 由于报错的交互比较难做，所以这里直接通过 maxLength 限制用户输入。是考虑再三的无奈之举
                    maxLength={30}
                    autoFocus
                    onBlur={({ target }) => {
                        handleRename(target.value);
                    }}
                    onPressEnter={({ target, keyCode }) => {
                        // 参考：https://dtstack.yuque.com/rd-center/tqk74v/wydclfzpf96ib8cp
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
                                    重命名
                                </Menu.Item>
                                <Menu.Item key="delete" onClick={handleDelete}>
                                    删除
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

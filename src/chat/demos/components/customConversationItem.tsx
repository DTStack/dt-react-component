import React from 'react';
import { Input, message } from 'antd';
import classNames from 'classnames';

import Conversation from '../../conversations';
import { IConversationsItemProps } from '../../conversations/Item';

interface IProps extends IConversationsItemProps {
    edit?: IConversationsItemProps['info'];
    onRename?: (info: IConversationsItemProps['info'], value: string) => Promise<boolean>;
    setEdit: (edit?: IConversationsItemProps['info']) => void;
}

export default function CustomConversionItem(props: IProps) {
    const { info, prefixCls, active, edit, onRename, setEdit } = props;
    const { disabled, title } = info || {};

    const isEdit = edit?.id === info?.id;

    const handleRename = async (value: string) => {
        if (!value) {
            setEdit(undefined);
            message.error('请输入对话名称');
            return;
        }
        const res = await onRename?.(info, value);
        if (res) {
            setEdit(undefined);
        }
    };
    return isEdit ? (
        <div
            className={classNames(
                `${prefixCls}-item`,
                active && !disabled && `${prefixCls}-item-active`,
                disabled && `${prefixCls}-item-disabled`
            )}
        >
            <Input
                className="dtc-aigc-dialog-list-item-input"
                defaultValue={title}
                maxLength={30}
                autoFocus
                onBlur={({ target }) => {
                    handleRename(target.value);
                }}
                onPressEnter={({ target, key }) => {
                    if (key === 'Enter') {
                        handleRename((target as HTMLInputElement).value);
                    }
                }}
            />
        </div>
    ) : (
        <Conversation.Item {...props} />
    );
}

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ButtonProps, Spin } from 'antd';
import classNames from 'classnames';
import dayjs from 'dayjs';
import shortid from 'shortid';

import Empty from '../../empty';
import useLocale from '../../locale/useLocale';
import useMeasure from '../../useMeasure';
import Button from '../button';
import { ConversationProperties } from '../entity';
import { AddDialogIcon } from '../icon';
import Item from './Item';
import List, { IChatGroupListProps } from './List';
import './index.scss';

const GROUP_FLOAT_WIDTH = 640;
const EXPAND_KEY = 'data-expand';
export type GroupProperties = {
    id: string;
    conversations?: ConversationProperties[];
    title?: string;
};

type IConversationButtonProps = Omit<ButtonProps, 'type'>;

interface IGroupProps {
    loading?: boolean;
    children?: React.ReactNode;
    fullscreen?: boolean;
    expand?: boolean;
    className?: string;
    // 对话数据
    data?: ConversationProperties[];
    // 是否开启点击其他地方关闭
    maskClose?: boolean;
    // 添加对话按钮
    conversationButton?: React.ReactNode;
    // 添加对话按钮属性
    conversationButtonProps?: React.HTMLAttributes<HTMLDivElement> & IConversationButtonProps;
    // 列表属性
    listProps?: IChatGroupListProps;
    openFloat?: boolean;
    onExpandChange?: (expand: boolean) => void;
}
function classifyDate(date?: string | Date | number) {
    if (!date) return '';
    const input = dayjs(date).startOf('day');
    const now = dayjs().startOf('day');

    const diffDays = now.diff(input, 'days');

    if (diffDays < 1) {
        return '今天';
    } else if (diffDays < 2) {
        return '昨天';
    } else if (diffDays < 7) {
        return '近7天';
    } else if (diffDays < 15) {
        return '近15天';
    } else if (diffDays < 30) {
        return '近30天';
    } else {
        return '其他';
    }
}
function transform(data: ConversationProperties[]) {
    return data.reduce((prev, current) => {
        const group = prev.find((item) => item.title === classifyDate(current.updatedAt));

        if (group) {
            if (!group.conversations) {
                group.conversations = [];
            }
            group.conversations.push(current);
        } else {
            prev.push({
                id: `group_${shortid()}`,
                title: classifyDate(current.updatedAt),
                conversations: [current],
            });
        }
        return prev;
    }, [] as GroupProperties[]);
}
export default function Group(props: IGroupProps) {
    const {
        children,
        fullscreen,
        className,
        data = [],
        conversationButton,
        conversationButtonProps,
        expand,
        maskClose = true,
        listProps,
        loading,
        openFloat = true,
        onExpandChange,
    } = props;
    const locale = useLocale('Chat');
    const [ref, { width }] = useMeasure();

    const listRef = useRef<HTMLDivElement>(null);
    const isGroupFloat = useRef(false);
    const isExpand = useRef(expand);
    const isMaskClose = useRef(maskClose);
    const [isHide, setIsHide] = useState(true);

    // 浮动对话列表点击其他区域关闭
    const listenerClick = useCallback((event: MouseEvent | TouchEvent) => {
        if (!isMaskClose.current) return;
        // 展开和关闭按钮
        const dataExpand = (event.target as HTMLElement).closest(`[${EXPAND_KEY}]`);

        if (
            !listRef.current ||
            listRef.current.contains(event.target as Node) ||
            !isGroupFloat.current ||
            !isExpand.current ||
            dataExpand
        ) {
            return;
        }
        onExpandChange?.(false);
    }, []);
    useEffect(() => {
        document.addEventListener('mousedown', listenerClick);
        document.addEventListener('touchstart', listenerClick);
        return () => {
            document.removeEventListener('mousedown', listenerClick);
            document.removeEventListener('touchstart', listenerClick);
        };
    }, []);

    useEffect(() => {
        isExpand.current = expand;
        if (expand) {
            setIsHide(false);
        }
    }, [expand]);

    useEffect(() => {
        isMaskClose.current = maskClose;
    }, [maskClose]);

    useEffect(() => {
        isGroupFloat.current = width < GROUP_FLOAT_WIDTH && openFloat;
    }, [width]);

    const groups = useMemo(() => {
        return transform(data);
    }, [data]);

    const renderGroups = (groups: GroupProperties[]) => {
        return !groups.length ? (
            <Empty
                type="project"
                className="dtc-aigc__group__list--empty"
                description={locale.conversationEmpty}
            />
        ) : (
            groups?.map((group) => {
                if (!group.conversations?.length) return null;
                return (
                    <div key={group.title} className="dtc-aigc__group__list__item">
                        <div className="dtc-aigc__group__list__item__title">
                            {group.title || ''}
                        </div>
                        <List conversations={group.conversations} {...listProps} />
                    </div>
                );
            })
        );
    };

    return (
        <div
            ref={ref}
            className={classNames(
                'dtc-aigc__group',
                fullscreen && 'dtc-aigc__group--fullscreen',
                expand && !isHide && 'dtc-aigc__group--expand',
                className
            )}
        >
            <div
                ref={listRef}
                className={classNames(
                    'dtc-aigc__group__list',
                    width < GROUP_FLOAT_WIDTH && openFloat && 'dtc-aigc__group__list--float',
                    isHide && !expand && 'dtc-aigc__group__list--hide'
                )}
                onTransitionEnd={() => {
                    if (!expand) setIsHide(true);
                }}
            >
                {!(width < GROUP_FLOAT_WIDTH && openFloat) &&
                    (conversationButton ?? (
                        <Button
                            type="secondary"
                            icon={
                                <AddDialogIcon
                                    className="dtc-aigc__button__text"
                                    style={{ fontSize: 16 }}
                                />
                            }
                            {...conversationButtonProps}
                        >
                            {locale.createConversation}
                        </Button>
                    ))}
                <div className="dtc-aigc__group__list__wrapper">
                    {loading ? <Spin className="dtc__spin__wrapper" /> : renderGroups(groups)}
                </div>
            </div>
            <div className="dtc-aigc__group__content">{children}</div>
        </div>
    );
}

Group.List = List;
Group.Item = Item;
Group.ExpandKey = EXPAND_KEY;

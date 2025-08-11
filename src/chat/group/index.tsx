import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ButtonProps, Spin } from 'antd';
import classNames from 'classnames';
import moment from 'moment';
import shortid from 'shortid';

import Empty from '../../empty';
import useMeasure from '../../useMeasure';
import Button from '../button';
import { ConversationProperties } from '../entity';
import { AddDialogIcon } from '../icon';
import Item from './Item';
import List, { IListProps } from './List';
import './index.scss';

const GROUP_FLOAT_WIDTH = 640;
const EXPAND_KEY = 'data-expand';
export type GroupProperties = {
    id: string;
    conversations?: ConversationProperties[];
    title?: string;
};

type IDialogButtonProps = Omit<ButtonProps, 'type'>;

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
    dialogButton?: React.ReactNode;
    // 添加对话按钮属性
    dialogButtonProps?: React.HTMLAttributes<HTMLDivElement> & IDialogButtonProps;
    // 列表属性
    listProps?: IListProps;
    openFloat?: boolean;
    onExpandChange?: (expand: boolean) => void;
}
function classifyDate(date?: string | Date | number | moment.Moment) {
    if (!date) return '';
    const input = moment(date).startOf('day');
    const now = moment().startOf('day');

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
        dialogButton,
        dialogButtonProps,
        expand,
        maskClose = true,
        listProps,
        loading,
        openFloat = true,
        onExpandChange,
    } = props;
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
            <Empty type="project" className="dtc-aigc-group-list__empty" description="暂无对话" />
        ) : (
            groups?.map((group) => {
                if (!group.conversations?.length) return null;
                return (
                    <div key={group.title} className="dtc-aigc-group-list-item">
                        <div className="dtc-aigc-group-list-item-title">{group.title || ''}</div>
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
                'dtc-aigc-group',
                fullscreen && 'dtc-aigc-group__fullscreen',
                expand && !isHide && 'dtc-aigc-group__expand',
                className
            )}
        >
            <div
                ref={listRef}
                className={classNames(
                    'dtc-aigc-group-list',
                    width < GROUP_FLOAT_WIDTH && openFloat && 'dtc-aigc-group-list__float',
                    isHide && !expand && 'dtc-aigc-group-list__hide'
                )}
                onTransitionEnd={() => {
                    if (!expand) setIsHide(true);
                }}
            >
                {!(width < GROUP_FLOAT_WIDTH && openFloat) &&
                    (dialogButton ?? (
                        <Button
                            type="secondary"
                            icon={
                                <AddDialogIcon
                                    className="dtc__aigc__button__text"
                                    style={{ fontSize: 16 }}
                                />
                            }
                            {...dialogButtonProps}
                        >
                            开启新对话
                        </Button>
                    ))}
                <div className="dtc-aigc-group-list-wrapper">
                    {loading ? <Spin className="dtc-spin-wrapper" /> : renderGroups(groups)}
                </div>
            </div>
            <div className="dtc-aigc-group-content">{children}</div>
        </div>
    );
}

Group.List = List;
Group.Item = Item;
Group.ExpandKey = EXPAND_KEY;

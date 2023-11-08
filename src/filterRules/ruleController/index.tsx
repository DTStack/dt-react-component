import React from 'react';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { InternalNamePath } from 'antd/lib/form/interface';
import classnames from 'classnames';

import {
    IComponentProps,
    IFilterValue,
    ROW_PERMISSION_RELATION,
    ROW_PERMISSION_RELATION_TEXT,
} from '..';
import './index.scss';

interface IProps<T> {
    value: IFilterValue<T> | undefined;
    disabled?: boolean;
    maxLevel: number;
    component: (props: IComponentProps<T>) => React.ReactNode;
    onAddCondition: (value: { key: string; isOut?: boolean }) => void;
    onDeleteCondition: (key: string) => void;
    onChangeCondition: (key: string, type: ROW_PERMISSION_RELATION) => void;
    onChangeRowValues: (key: string, values: T) => void;
}

const ITEM_HEIGHT = 32;
const MARGIN = 16;

// 存储对象节点的高度/线条高度等信息
const weakMap = new WeakMap();

export const RulesController = <T,>(props: IProps<T>) => {
    const {
        value,
        disabled,
        maxLevel,
        component,
        onAddCondition,
        onDeleteCondition,
        onChangeCondition,
        onChangeRowValues,
    } = props;

    const isCondition = (item: IFilterValue<T>) =>
        item?.type &&
        [ROW_PERMISSION_RELATION.AND, ROW_PERMISSION_RELATION.OR].includes(item?.type);

    // 计算每个节点的高度(height)/线条高度(lineHeight)/距离底部高度(bottom)
    const calculateTreeItemHeight = (item: IFilterValue<T>, disabled: boolean) => {
        if (!item?.children)
            return weakMap.set(item, { height: ITEM_HEIGHT + MARGIN, lineHeight: ITEM_HEIGHT });
        item.children.map((child) => calculateTreeItemHeight(child, disabled));
        const isLastCondition = !item.children.some(isCondition);
        const firstNodeIsCondition = isCondition(item.children[0]);
        // 编辑模式下计算
        if (!disabled) {
            const height = item.children.reduce(
                (prev, curr) => prev + weakMap.get(curr).height,
                ITEM_HEIGHT
            );
            let lineHeight;
            // 如果当前节点是最后的判断节点
            if (isLastCondition) {
                const firstNodeLineHeight = weakMap.get(item.children[0]).height - MARGIN;
                const lastNodeHeight = ITEM_HEIGHT;
                lineHeight = height - firstNodeLineHeight / 2 - lastNodeHeight / 2;
            } else {
                const firstNodeLineHeight = firstNodeIsCondition
                    ? weakMap.get(item.children[0]).lineHeight / 2 + ITEM_HEIGHT / 2
                    : ITEM_HEIGHT / 2 + MARGIN;
                lineHeight =
                    firstNodeLineHeight +
                    item.children
                        ?.slice(1)
                        .reduce((prev, curr) => prev + weakMap.get(curr).height, ITEM_HEIGHT / 2);
            }
            weakMap.set(item, { height, lineHeight });
        } else {
            const height = item.children.reduce((prev, curr) => prev + weakMap.get(curr).height, 0);
            let lineHeight;
            let bottom;
            // 如果当前节点是最后的判断节点
            if (isLastCondition) {
                lineHeight = height - ITEM_HEIGHT - MARGIN;
            } else {
                const firstNode = item.children[0];
                const lastNode = item.children[item.children.length - 1];
                const firstNodeLineHeight =
                    weakMap.get(firstNode).height - getNodeReduceHeight(item, true);
                const lastNodeIsCondition = isCondition(lastNode);
                const reduceLastHeight = getNodeReduceHeight(item, false);
                const lastNodeLineHeight = weakMap.get(lastNode).height - MARGIN - reduceLastHeight;
                bottom = lastNodeIsCondition ? reduceLastHeight : ITEM_HEIGHT / 2;
                lineHeight =
                    firstNodeLineHeight +
                    item.children
                        ?.slice(1, -1)
                        .reduce((prev, curr) => prev + weakMap.get(curr).height, 0) +
                    lastNodeLineHeight;
            }
            weakMap.set(item, { bottom, lineHeight, height });
        }
        return item;
    };

    const getNodeReduceHeight = (item: IFilterValue<T>, isFirst: boolean): number => {
        const currentNode = isFirst
            ? item?.children?.[0]
            : item?.children?.[item?.children?.length - 1];
        if (!currentNode) return ITEM_HEIGHT / 2;
        const currentNodeIsCondition = isCondition(currentNode);
        if (currentNodeIsCondition) {
            return (
                weakMap.get(currentNode)?.lineHeight / 2 + getNodeReduceHeight(currentNode, isFirst)
            );
        }
        return ITEM_HEIGHT / 2;
    };

    const renderCondition = (
        item: IFilterValue<T>,
        namePath: InternalNamePath,
        disabled: boolean
    ) => {
        // 渲染条件节点和线条
        if (item?.children?.length) {
            const childrenPath = (index: number) => {
                const newPath = [...namePath];
                newPath.push(...['children', index, 'rowValues']);
                return newPath;
            };
            const { lineHeight, bottom } = weakMap.get(item);
            return (
                <div
                    key={item.key}
                    className={classnames('ruleController__condition', {
                        'ruleController__condition--active': item.children.length > 1,
                    })}
                >
                    <div
                        className={classnames('condition__box', {
                            disabled,
                        })}
                        style={{ height: lineHeight, bottom: bottom ?? MARGIN }}
                    >
                        <span
                            className={classnames('condition__box--name', {
                                disabled,
                            })}
                            onClick={() =>
                                onChangeCondition(item.key, item?.type as ROW_PERMISSION_RELATION)
                            }
                        >
                            {ROW_PERMISSION_RELATION_TEXT[item?.type as ROW_PERMISSION_RELATION]}
                        </span>
                        {item.children.length > 1 && (
                            <span
                                className={classnames('condition__box--line', {
                                    disabled,
                                })}
                            />
                        )}
                    </div>
                    {item.children.map((d: IFilterValue<T>, index: number) =>
                        renderCondition(d, childrenPath(index), disabled)
                    )}
                    {!disabled && (
                        <div className="condition__add">
                            <span className="condition__add--line" />
                            <PlusCircleOutlined
                                className="condition__add--icon"
                                onClick={() =>
                                    onAddCondition({
                                        key: item.key,
                                        isOut: true,
                                    })
                                }
                            />
                        </div>
                    )}
                </div>
            );
        }
        // 渲染自定义的 component
        return (
            <div className="ruleController__item" key={item.key}>
                {value?.children && (
                    <span
                        className={classnames('ruleController__item--line', {
                            disabled,
                        })}
                    />
                )}
                <div className="ruleController__item--component">
                    {component({
                        key: item.key,
                        disabled,
                        name: !namePath.length ? ['rowValues'] : namePath,
                        rowValues: item.rowValues as T,
                        onChange: onChangeRowValues,
                    })}
                </div>
                {!disabled && (
                    <div className="ruleController__item--operation">
                        {item.level === maxLevel ? null : (
                            <PlusCircleOutlined
                                className="icon"
                                onClick={() => {
                                    onAddCondition({ key: item.key });
                                }}
                            />
                        )}
                        <MinusCircleOutlined
                            className="icon"
                            onClick={() => onDeleteCondition(item.key)}
                        />
                    </div>
                )}
            </div>
        );
    };
    if (!value) return null;
    calculateTreeItemHeight(value, !!disabled);
    return <div className="ruleController">{renderCondition(value, [], !!disabled)}</div>;
};

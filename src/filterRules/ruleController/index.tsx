import React from 'react';
import { MinusCircleOutlined, PlusCircleOutlined } from '@dtinsight/react-icons';
import { InternalNamePath } from 'antd/lib/form/interface';
import classnames from 'classnames';

import useLocale from '../../locale/useLocale';
import { IComponentProps, IFilterValue, ROW_PERMISSION_RELATION } from '..';
import './index.scss';

interface IProps<T> {
    value: IFilterValue<T> | undefined; // 组件的值
    disabled?: boolean; // 编辑/查看状态
    maxLevel: number; // 节点最深层级数
    maxSize: number; // 节点最大子节点数量
    className?: string;
    style?: React.CSSProperties;
    component: (props: IComponentProps<T>) => React.ReactNode; // 自定义展示组件
    onAddCondition: (value: { key: string; isOut?: boolean }) => void; // 新增节点
    onDeleteCondition: (key: string) => void; // 删除节点
    onChangeCondition: (key: string, type: ROW_PERMISSION_RELATION) => void; // 改变条件节点的值
    onChangeRowValues: (key: string, values: T) => void; // 改变自定义组件的数据
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
        maxSize,
        className,
        style,
        component,
        onAddCondition,
        onDeleteCondition,
        onChangeCondition,
        onChangeRowValues,
    } = props;

    const locale = useLocale('FilterRules');

    const ROW_PERMISSION_RELATION_TEXT = {
        [ROW_PERMISSION_RELATION.AND]: locale.and,
        [ROW_PERMISSION_RELATION.OR]: locale.or,
    };

    const isCondition = (item: IFilterValue<T>) =>
        item?.type &&
        [ROW_PERMISSION_RELATION.AND, ROW_PERMISSION_RELATION.OR].includes(item?.type);

    // 计算每个节点的高度(height)/线条高度(lineHeight)/距离底部高度(bottom)
    const calculateTreeItemHeight = (item: IFilterValue<T>, disabled: boolean) => {
        const composeDisabled = disabled || !!item.disabled;
        if (!item?.children)
            return weakMap.set(item, { height: ITEM_HEIGHT + MARGIN, lineHeight: ITEM_HEIGHT });
        item.children.map((child) => calculateTreeItemHeight(child, composeDisabled));
        const isLastCondition = !item.children.some(isCondition);
        const firstNodeIsCondition = isCondition(item.children[0]);
        // 编辑模式下计算
        if (!composeDisabled) {
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
        const composeDisabled = disabled || !!item.disabled;

        // 渲染条件节点和线条
        if (item?.children?.length) {
            const childrenPath = (index: number) => {
                const newPath = [...namePath];
                newPath.push(...['children', index]);
                return newPath;
            };
            const { lineHeight, bottom } = weakMap.get(item);
            return (
                <div
                    key={item.key}
                    className={classnames('dtc-ruleController__condition', {
                        'dtc-ruleController__condition--active': item.children.length > 1,
                    })}
                >
                    <div
                        className={classnames('condition__box', {
                            disabled: composeDisabled,
                        })}
                        style={{ height: lineHeight, bottom: bottom ?? MARGIN }}
                    >
                        <span
                            className={classnames('condition__box--name', {
                                disabled: composeDisabled,
                            })}
                            onClick={() =>
                                !composeDisabled &&
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
                        renderCondition(d, childrenPath(index), composeDisabled)
                    )}
                    {!composeDisabled && (
                        <div className="condition__add">
                            <span className="condition__add--line" />
                            <PlusCircleOutlined
                                className={classnames(
                                    'condition__add--icon',
                                    item?.children?.length >= maxSize &&
                                        'condition__add--icon--disabled'
                                )}
                                onClick={() => {
                                    if (item?.children && item.children.length >= maxSize) return;
                                    onAddCondition({
                                        key: item.key,
                                        isOut: true,
                                    });
                                }}
                                data-testid="icon-plus"
                            />
                        </div>
                    )}
                </div>
            );
        }
        // 渲染自定义的 component
        return (
            <div className="dtc-ruleController__item" key={item.key}>
                {value?.children && (
                    <span
                        className={classnames('dtc-ruleController__item--line', {
                            disabled,
                        })}
                    />
                )}
                <div className="dtc-ruleController__item--component">
                    {component({
                        rowKey: item.key,
                        disabled: composeDisabled,
                        name: [...namePath, 'rowValues'],
                        rowValues: item.rowValues as T,
                        onChange: onChangeRowValues,
                    })}
                </div>
                {!composeDisabled && (
                    <div className="dtc-ruleController__item--operation">
                        {item.level === maxLevel ? null : (
                            <PlusCircleOutlined
                                className="icon"
                                onClick={() => onAddCondition({ key: item.key })}
                                data-testid="icon-plus"
                            />
                        )}
                        <MinusCircleOutlined
                            className="icon"
                            onClick={() => onDeleteCondition(item.key)}
                            data-testid="icon-minus"
                        />
                    </div>
                )}
            </div>
        );
    };

    if (!value) return null;

    calculateTreeItemHeight(value, !!disabled);

    return (
        <div className={classnames('dtc-ruleController', className)} style={style}>
            {renderCondition(value, [], !!disabled || !!value.disabled)}
        </div>
    );
};

import React from 'react';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { NamePath } from 'antd/lib/form/interface';
import classnames from 'classnames';
import { cloneDeep } from 'lodash';

import { IFilterValue, ROW_PERMISSION_RELATION, ROW_PERMISSION_RELATION_TEXT } from '..';
import './index.scss';

interface IProps<T> {
    disabled?: boolean; // 是否禁用
    value: IFilterValue<T> | undefined;
    isEdit?: boolean;
    name?: NamePath;
    maxLevel: number;
    component: JSX.Element;
    onAddCondition: (value: { key: string; isOut?: boolean }) => void;
    onDeleteCondition: (key: string) => void;
    onChangeCondition: (key: string, type: ROW_PERMISSION_RELATION) => void;
    onChangeFormValues: (key: string, values: T) => void;
}

const ITEM_HEIGHT = 32;
const MARGIN = 16;

export const RulesController = <T,>(props: IProps<T>) => {
    const {
        value,
        isEdit,
        maxLevel,
        component,
        onAddCondition,
        onDeleteCondition,
        onChangeCondition,
        onChangeFormValues,
    } = props;

    const isCondition = (item: IFilterValue<T>) =>
        item?.type &&
        [ROW_PERMISSION_RELATION.AND, ROW_PERMISSION_RELATION.OR].includes(item?.type);

    const calculateTreeItemHeight = (item: IFilterValue<T>, isEdit: boolean) => {
        if (!item?.children)
            return { ...item, height: ITEM_HEIGHT + MARGIN, lineHeight: ITEM_HEIGHT };
        item.children = item.children.map((child) => calculateTreeItemHeight(child, isEdit));
        const isLastCondition = !item.children.some(isCondition);
        const firstNodeIsCondition = isCondition(item.children[0]);
        if (isEdit) {
            item.height = item.children.reduce(
                (prev, curr) => prev + (curr?.height as number),
                ITEM_HEIGHT
            );
            // 如果当前节点是最后的判断节点
            if (isLastCondition) {
                const firstNodeLineHeight = (item.children[0]?.height as number) - MARGIN;
                const lastNodeHeight = ITEM_HEIGHT;
                item.lineHeight = item.height - firstNodeLineHeight / 2 - lastNodeHeight / 2;
            } else {
                const firstNodeLineHeight = firstNodeIsCondition
                    ? (item.children[0].lineHeight as number) / 2 + ITEM_HEIGHT / 2
                    : ITEM_HEIGHT / 2 + MARGIN;
                item.lineHeight =
                    firstNodeLineHeight +
                    item.children
                        ?.slice(1)
                        .reduce((prev, curr) => prev + (curr?.height as number), ITEM_HEIGHT / 2);
            }
        } else {
            item.height = item.children.reduce((prev, curr) => prev + (curr?.height as number), 0);
            // 如果当前节点是最后的判断节点
            if (isLastCondition) {
                item.lineHeight = item.height - ITEM_HEIGHT - MARGIN;
            } else {
                const firstNode = item.children[0];
                const lastNode = item.children[item.children.length - 1];
                const firstNodeLineHeight =
                    (firstNode?.height as number) - getNodeReduceHeight(item, true);
                const lastNodeIsCondition = isCondition(lastNode);
                const reduceLastHeight = getNodeReduceHeight(item, false);
                const lastNodeLineHeight = (lastNode?.height as number) - MARGIN - reduceLastHeight;
                item.bottom = lastNodeIsCondition ? reduceLastHeight : ITEM_HEIGHT / 2;
                item.lineHeight =
                    firstNodeLineHeight +
                    item.children
                        ?.slice(1, -1)
                        .reduce((prev, curr) => prev + (curr.height as number), 0) +
                    lastNodeLineHeight;
            }
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
                (currentNode?.lineHeight as number) / 2 + getNodeReduceHeight(currentNode, isFirst)
            );
        }
        return ITEM_HEIGHT / 2;
    };

    const renderCondition = (item: IFilterValue<T>, namePath: NamePath[], disabled: boolean) => {
        if (item?.children?.length) {
            const childrenPath = (index: number) => {
                const newPath = [...namePath];
                newPath.push(...['children', index, 'formValues']);
                return newPath;
            };
            return (
                <div
                    key={item.key}
                    className={classnames('ruleController__condition', {
                        'ruleController__condition--active': item.children.length > 1,
                    })}
                >
                    <div
                        className={classnames('condition__box', {
                            disabled: !isEdit,
                        })}
                        style={{ height: item.lineHeight, bottom: item?.bottom ?? MARGIN }}
                    >
                        <span
                            className={classnames('condition__box--name', {
                                disabled: !isEdit,
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
                                    disabled: !isEdit,
                                })}
                            />
                        )}
                    </div>
                    {item.children.map((d, index) =>
                        renderCondition(d, childrenPath(index), disabled)
                    )}
                    {isEdit && (
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
        return (
            <div className="ruleController__item" id={item.key}>
                {value?.children && (
                    <span
                        className={classnames('ruleController__item--line', {
                            disabled: !isEdit,
                        })}
                    />
                )}
                <div className="ruleController__item--component">
                    {React.cloneElement(component, {
                        rowKey: item.key,
                        isEdit,
                        name: namePath,
                        ...item.formValues,
                        onChange: onChangeFormValues,
                    })}
                </div>
                {isEdit && (
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
    const renderData = calculateTreeItemHeight(cloneDeep(value), !!isEdit);
    return <div className="ruleController">{renderCondition(renderData, [], !isEdit)}</div>;
};

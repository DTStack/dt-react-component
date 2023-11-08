import React from 'react';
import { message } from 'antd';
import { InternalNamePath } from 'antd/lib/form/interface';
import { clone } from 'lodash';
import shortId from 'shortid';

import { RulesController } from './ruleController';

export enum ROW_PERMISSION_RELATION {
    AND = 1,
    OR = 2,
}
export const ROW_PERMISSION_RELATION_TEXT = {
    [ROW_PERMISSION_RELATION.AND]: '且',
    [ROW_PERMISSION_RELATION.OR]: '或',
};

export interface IComponentProps<T> {
    key: string;
    disabled: boolean;
    name: InternalNamePath;
    rowValues: T;
    onChange: (key: string, values: T) => void;
}

export interface IFilterValue<T> {
    key: string;
    level?: number;
    type?: number;
    rowValues?: T;
    children?: IFilterValue<T>[];
}

interface INormalProps<T> {
    value?: IFilterValue<T>;
    disabled?: false;
    maxLevel?: number;
    initRowValues: T;
    notEmpty?: { data: boolean; message?: string };
    component: (props: IComponentProps<T>) => React.ReactNode;
    onChange?: (value: IFilterValue<T> | undefined) => void;
}

interface IDisabledProps<T> {
    value?: IFilterValue<T>;
    disabled: true;
    component: (props: IComponentProps<T>) => React.ReactNode;
}

function isDisabled<T>(props: IProps<T>): props is IDisabledProps<T> {
    return props.disabled === true;
}

export type IProps<T> = IDisabledProps<T> | INormalProps<T>;

const FilterRules = <T,>(props: IProps<T>) => {
    const { component, disabled = false, value } = props;
    const {
        maxLevel = 5,
        notEmpty = { data: true, message: '必须有一条数据' },
        initRowValues,
        onChange,
    } = (!isDisabled(props) && props) as INormalProps<T>;

    // 查找当前操作的节点
    const finRelationNode = (
        parentData: IFilterValue<T>,
        targetKey: string,
        needCurrent?: boolean
    ): IFilterValue<T> | null | undefined => {
        const parentDataTemp = parentData;
        if (parentDataTemp.key === targetKey) return parentDataTemp;
        if (!parentDataTemp.children?.length) return null;
        for (let i = 0; i < parentDataTemp.children.length; i++) {
            const current = parentDataTemp.children[i];
            if (current.key === targetKey) return needCurrent ? current : parentDataTemp;
            const node: IFilterValue<T> | null | undefined = finRelationNode(
                current,
                targetKey,
                needCurrent
            );
            if (node) return node;
        }
    };

    const handleAddCondition = (keyObj: { key: string; isOut?: boolean }) => {
        const cloneData = clone(value);
        const appendNode = finRelationNode(cloneData as IFilterValue<T>, keyObj.key, keyObj.isOut);
        addCondition(appendNode, keyObj, initRowValues as T);
        onChange?.(cloneData);
    };

    // 增加新的数据
    // 判断是在当前节点下新增或者新生成一个条件节点
    const addCondition = (
        treeNode: any,
        keyObj: { key: string; isOut?: boolean },
        initRowValue: T
    ) => {
        const key = keyObj.key;
        if (keyObj.isOut)
            return treeNode.children.push(
                Object.assign(
                    {},
                    { rowValues: initRowValue },
                    { key: shortId(), level: treeNode.level }
                )
            );
        const children = treeNode?.children;
        if (!children) {
            const newNode = {
                key: treeNode.key,
                level: treeNode.level + 1,
                type: ROW_PERMISSION_RELATION.AND,
                children: [
                    { rowValues: treeNode.rowValues, key: shortId(), level: treeNode?.level + 1 },
                    { rowValues: initRowValue, key: shortId(), level: treeNode?.level + 1 },
                ],
            };
            delete treeNode.rowValues;
            Object.assign(treeNode, newNode);
            return;
        }
        for (let i = 0; i < children.length; i += 1) {
            if (children[i].key !== key) continue;
            if (treeNode?.level <= maxLevel) {
                children[i] = {
                    key: children[i].key,
                    type: ROW_PERMISSION_RELATION.AND,
                    level: treeNode?.level + 1,
                    children: [
                        Object.assign({}, children[i], {
                            key: shortId(),
                            level: treeNode?.level + 1,
                        }),
                        Object.assign(
                            {},
                            { rowValues: initRowValue },
                            {
                                key: shortId(),
                                level: treeNode?.level + 1,
                            }
                        ),
                    ],
                };
            }
        }
    };

    const handleDeleteCondition = (key: string) => {
        const cloneData = clone(value);
        const deleteNode = finRelationNode(cloneData as IFilterValue<T>, key, false);
        if (notEmpty.data && !deleteNode?.children) return message.info(notEmpty.message);
        if (!notEmpty.data && !deleteNode?.children) {
            return onChange?.(undefined);
        }
        deleteCondition(deleteNode as IFilterValue<T>, key);
        onChange?.(cloneData);
    };

    // 删除节点
    // 删除当前节点下的一条数据或者是删除一个条件节点
    const deleteCondition = (parentData: IFilterValue<T>, key: string) => {
        let parentDataTemp = parentData;
        parentDataTemp.children = parentDataTemp?.children?.filter((item) => item.key !== key);
        if (parentDataTemp?.children?.length === 1) {
            const newChild = updateLevel(parentDataTemp.children[0]);
            const key = parentDataTemp.key;
            delete parentDataTemp.children;
            delete parentDataTemp.type;
            parentDataTemp = Object.assign(parentDataTemp, {
                ...newChild,
                key,
                level: newChild.level,
            });
        }
    };

    // 删除一个条件节点时，更新当前数据的层级
    const updateLevel = (node: IFilterValue<T>) => {
        let newChildren;
        if (node.children) newChildren = node.children.map((element) => updateLevel(element));
        const newNode: IFilterValue<T> = {
            ...node,
            children: newChildren,
            level: (node?.level as number) - 1,
        };
        return newNode;
    };

    // 更改条件节点的条件
    const handleChangeCondition = (key: string, type: ROW_PERMISSION_RELATION) => {
        const cloneData = clone(value);
        const changeNode = finRelationNode(
            cloneData as IFilterValue<T>,
            key,
            true
        ) as IFilterValue<T>;
        changeNode.type =
            type === ROW_PERMISSION_RELATION.AND
                ? ROW_PERMISSION_RELATION.OR
                : ROW_PERMISSION_RELATION.AND;
        onChange?.(cloneData);
    };

    // 改变节点的的数据
    const handleChangeRowValues = (key: string, values: T) => {
        const cloneData = clone(value);
        const changeNode = finRelationNode(
            cloneData as IFilterValue<T>,
            key,
            true
        ) as IFilterValue<T>;
        changeNode.rowValues = {
            ...(changeNode.rowValues ?? {}),
            ...values,
        };
        onChange?.(cloneData);
    };

    return (
        <RulesController<T>
            maxLevel={maxLevel}
            disabled={disabled}
            value={value}
            component={component}
            onAddCondition={handleAddCondition}
            onDeleteCondition={handleDeleteCondition}
            onChangeCondition={handleChangeCondition}
            onChangeRowValues={handleChangeRowValues}
        />
    );
};

export default FilterRules;

import React from 'react';
import { message } from 'antd';
import { InternalNamePath } from 'antd/lib/form/interface';
import { clone } from 'lodash-es';
import shortId from 'shortid';

import useLocale from '../locale/useLocale';
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
    rowKey: string; // 当前节点的唯一标识
    disabled: boolean; // 编辑/查看状态
    name: InternalNamePath; // 使用 Form.Item 时，中间的 NamePath
    rowValues: T; // 自定义钻的数据
    onChange: (key: string, values: T) => void; // 改变数据的方法
}

export interface IFilterValue<T> {
    key: string;
    level?: number; // 当前节点的层级，用于判断一些按钮的展示
    type?: number; // 当前节点的条件关系，1 | 2
    disabled?: boolean; // 当前节点禁用
    rowValues?: T; // Form 节点的相关的信息(子节点无条件节点时才有)
    children?: IFilterValue<T>[]; // 子节点的信息(子节点存在条件节点时才有)
}

interface INormalProps<T> {
    value?: IFilterValue<T>; // 组件的值
    disabled?: false; // 编辑状态
    maxLevel?: number; // 节点层级
    maxSize?: number;
    initValues: T; // 自定义组件的初始值
    notEmpty?: { data: boolean; message?: string }; // 是否保留最后一条数据
    component: (props: IComponentProps<T>) => React.ReactNode; // 自定义展示组件
    onChange?: (value: IFilterValue<T> | undefined) => void; // 改变数据的方法
}

interface IDisabledProps<T> {
    value?: IFilterValue<T>; // 组件的值
    disabled: true; // 查看状态
    component: (props: IComponentProps<T>) => React.ReactNode; // 自定义展示组件
}

function isDisabled<T>(props: IProps<T>): props is IDisabledProps<T> {
    return props.disabled === true;
}

export type IProps<T> = IDisabledProps<T> | INormalProps<T>;

const FilterRules = <T,>(props: IProps<T>) => {
    const locale = useLocale('FilterRules');
    const { component, disabled = false, value } = props;
    const {
        maxLevel = 5,
        maxSize = 100,
        notEmpty = { data: true, message: locale.message },
        initValues,
        onChange,
    } = (!isDisabled(props) && props) as INormalProps<T>;

    // 查找当前操作的节点
    const findRelationNode = (
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
            const node: IFilterValue<T> | null | undefined = findRelationNode(
                current,
                targetKey,
                needCurrent
            );
            if (node) return node;
        }
    };

    const handleAddCondition = (keyObj: { key: string; isOut?: boolean }) => {
        const cloneData = clone(value);
        const appendNode = findRelationNode(cloneData as IFilterValue<T>, keyObj.key, keyObj.isOut);
        addCondition(appendNode, keyObj, initValues as T);
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
                        Object.assign({
                            key: shortId(),
                            rowValues: initRowValue,
                            level: treeNode?.level + 1,
                        }),
                    ],
                };
            }
        }
    };

    const handleDeleteCondition = (key: string) => {
        const cloneData = clone(value);
        const deleteNode = findRelationNode(cloneData as IFilterValue<T>, key, false);
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
        const changeNode = findRelationNode(
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
        const changeNode = findRelationNode(
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
            maxSize={maxSize}
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

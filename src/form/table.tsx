import React, { useMemo } from 'react';
import { Form, Table, type FormListFieldData, type TableProps } from 'antd';
import classnames from 'classnames';
import utils from '../utils';
import type { FormInstance, FormItemProps, FormListProps } from 'antd/lib/form';
import type { NamePath } from 'antd/lib/form/interface';
import type { ColumnsType, ColumnType as TableColumnType } from 'antd/lib/table';
import './index.scss';

type NotNullRowSelection = NonNullable<TableProps<any>['rowSelection']>;

/**
 * Form.Table 组件类型
 */
export interface IFormTableProps
    extends Pick<FormListProps, 'name' | 'rules' | 'initialValue'>,
        Pick<TableProps<any>, 'scroll' | 'bordered'> {
    /**
     * 页面是否加载中
     */
    loading?: boolean;
    /**
     * 表格列的配置描述
     */
    columns?: ColumnType[];
    /**
     * Table 的 className
     */
    tableClassName?: string;
    /**
     * 表格行是否可选择
     */
    rowSelection?: Omit<NotNullRowSelection, 'getCheckboxProps'> & {
        getCheckboxProps?: (
            field: FormListFieldData
        ) => ReturnType<NonNullable<NotNullRowSelection['getCheckboxProps']>>;
    };
}

export interface ColumnType
    extends Pick<FormItemProps, 'validateTrigger'>,
        Pick<
            TableColumnType<FormListFieldData>,
            'key' | 'title' | 'width' | 'fixed' | 'filters' | 'onFilter'
        > {
    rules?: ((namePath: [number, string?]) => FormItemProps['rules']) | FormItemProps['rules'];
    dataIndex?: string;
    required?: boolean;
    // 只能是 dataIndex 的值
    dependencies?: string | string[];
    render?: (
        record: FormListFieldData,
        namePath: NamePath,
        formInstance?: Partial<FormInstance>
    ) => React.ReactElement;
}

const className = 'dtc-form__table';

export default function InternalTable({
    tableClassName,
    name,
    rules,
    initialValue,
    loading,
    columns: rawColumns,
    scroll,
    rowSelection,
    bordered,
}: IFormTableProps) {
    const columns: ColumnsType<FormListFieldData> = useMemo(() => {
        return (
            rawColumns?.map(
                ({
                    render,
                    rules: rawRules,
                    validateTrigger,
                    dependencies,
                    required,
                    title,
                    ...cols
                }) => ({
                    ...cols,
                    title: (
                        <span>
                            <>
                                {required && <span className="dtc-form__table__column--required" />}
                                {title}
                            </>
                        </span>
                    ),
                    render(_, record) {
                        const rules =
                            typeof rawRules === 'function'
                                ? rawRules([record.name, cols.dataIndex])
                                : rawRules;

                        if (dependencies) {
                            return (
                                <Form.Item
                                    noStyle
                                    dependencies={
                                        typeof dependencies === 'string'
                                            ? [['data', record.name, dependencies]]
                                            : dependencies.map((d) => ['data', record.name, d])
                                    }
                                >
                                    {(formInstance) => (
                                        <Form.Item
                                            name={
                                                [record.name, cols.dataIndex].filter(
                                                    utils.checkExist
                                                ) as string[]
                                            }
                                            rules={rules}
                                            validateTrigger={validateTrigger}
                                        >
                                            {render?.(
                                                record,
                                                [record.name, cols.dataIndex].filter(
                                                    utils.checkExist
                                                ) as string[],
                                                formInstance
                                            )}
                                        </Form.Item>
                                    )}
                                </Form.Item>
                            );
                        }

                        return (
                            <Form.Item
                                name={
                                    [record.name, cols.dataIndex].filter(
                                        utils.checkExist
                                    ) as string[]
                                }
                                rules={rules}
                            >
                                {render?.(
                                    record,
                                    [record.name, cols.dataIndex].filter(
                                        utils.checkExist
                                    ) as string[]
                                )}
                            </Form.Item>
                        );
                    },
                })
            ) || []
        );
    }, [rawColumns]);

    return (
        <Form.List name={name} rules={rules} initialValue={initialValue}>
            {(fields) => (
                <Table
                    className={classnames(className, tableClassName)}
                    rowKey="key"
                    bordered={bordered}
                    loading={loading}
                    dataSource={fields}
                    pagination={false}
                    columns={columns}
                    scroll={scroll}
                    rowSelection={rowSelection}
                />
            )}
        </Form.List>
    );
}

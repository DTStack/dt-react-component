import React, { useMemo, ReactNode } from 'react';
import { Form, Table, type FormListFieldData, type TableProps, Tooltip } from 'antd';
import classnames from 'classnames';
import utils from '../utils';
import type { FormItemProps, FormListProps, Rule, RuleObject, RuleRender } from 'antd/lib/form';
import type { LabelTooltipType, WrapperTooltipProps } from 'antd/lib/form/FormItemLabel';
import type { ColumnsType, ColumnType as TableColumnType } from 'antd/lib/table';
import { QuestionCircleOutlined } from '@ant-design/icons';
import './index.scss';

type NotNullRowSelection = NonNullable<TableProps<any>['rowSelection']>;
/**
 * Override NamePath parameters type
 */
type OverrideParameters = (string | number)[];
type RcFormInstance = Parameters<RuleRender>[0];

type RawPanelRender = NonNullable<TableProps<any>['footer']>;
/**
 * Override PanelRender type
 */
type PanelRenderFunc = (
    ...args: Parameters<FormListProps['children']>
) => ReturnType<RawPanelRender>;

/**
 * Form.Table 组件类型
 */
export interface IFormTableProps
    /**
     * Support all FormListProps except children for which is re-defined in this component
     * and prefixCls for which is not expected to be supported
     */
    extends Pick<FormListProps, 'name' | 'rules' | 'initialValue'>,
        /**
         * Support all TableProps except
         * - re-define columns and re-defined rowSelection
         * - and pagination which is expect to be not supported in Form.Table
         * - and className which is renamed to tableClassName
         * - and rowKey, dataSource for which are defined and not allowed to be modified
         * - and footer, title, summary for which are re-defined to pass form's operation
         */
        Omit<
            TableProps<any>,
            | 'columns'
            | 'rowSelection'
            | 'pagination'
            | 'className'
            | 'rowKey'
            | 'dataSource'
            | 'footer'
            | 'title'
            | 'summary'
        > {
    /**
     * 表格列的配置描述
     */
    columns?: ColumnType[] | ((...args: Parameters<FormListProps['children']>) => ColumnType[]);
    /**
     * Table 的 className
     */
    tableClassName?: TableProps<any>['className'];
    /**
     * 表格行是否可选择
     */
    rowSelection?: Omit<NotNullRowSelection, 'getCheckboxProps'> & {
        getCheckboxProps?: (
            field: FormListFieldData
        ) => ReturnType<NonNullable<NotNullRowSelection['getCheckboxProps']>>;
    };
    title?: PanelRenderFunc;
    footer?: PanelRenderFunc;
    summary?: PanelRenderFunc;
}

export interface ColumnType
    /**
     * Support all FormItemProps, and re-defined `rules` and `dependencies`
     */
    extends Omit<FormItemProps, 'rules' | 'dependencies' | 'prefixCls' | 'children'>,
        /**
         * Support all TableColumnType, and re-defined `render`
         */
        Omit<TableColumnType<FormListFieldData>, 'render'> {
    /**
     * 设置依赖字段, 支持通过回调函数获取当前字段名
     */
    dependencies?:
        | ((namePath: OverrideParameters) => FormItemProps['dependencies'])
        | FormItemProps['dependencies'];
    /**
     * 校验规则，设置字段的校验逻辑，支持通过回调函数获取当前字段名
     */
    rules?: (RuleObject | ((form: RcFormInstance, namePath: OverrideParameters) => RuleObject))[];
    /**
     * 表格title上的tooltip，使用方法与formItem中的一致
     */
    titleTooltip?: LabelTooltipType;
    /**
     * 渲染函数
     * @param formInstance 只有在设置了 `dependencies` 的情况下才有该参数
     */
    render?: (
        record: FormListFieldData,
        namePath: OverrideParameters,
        formInstance?: RcFormInstance
    ) => ReactNode;
}

const className = 'dtc-form__table';

function toTooltipProps(tooltip: LabelTooltipType): WrapperTooltipProps | null {
    if (!tooltip) {
        return null;
    }

    if (typeof tooltip === 'object' && !React.isValidElement(tooltip)) {
        return tooltip as WrapperTooltipProps;
    }

    return {
        title: tooltip,
    };
}

export default function InternalTable({
    name,
    rules,
    initialValue,
    ...tableProps
}: IFormTableProps) {
    const {
        tableClassName,
        columns: rawColumns,
        // override title, footer, summary
        title,
        footer,
        summary,
        ...restProps
    } = tableProps;

    const convertRawToTableCol = (raw?: ColumnType[]): ColumnsType<FormListFieldData> => {
        if (!raw?.length) return [];
        return raw.map(
            ({
                noStyle,
                style,
                className,
                id,
                hasFeedback,
                validateStatus,
                required,
                hidden,
                initialValue,
                messageVariables,
                tooltip,
                titleTooltip,
                dependencies,
                rules: rawRules,
                render,
                ...cols
            }) => {
                const formItemProps = {
                    noStyle,
                    style,
                    className,
                    id,
                    hasFeedback,
                    validateStatus,
                    required,
                    hidden,
                    initialValue,
                    messageVariables,
                    tooltip,
                };

                const isRequired =
                    required || rawRules?.some((rule) => typeof rule === 'object' && rule.required);

                const tooltipProps = toTooltipProps(titleTooltip);
                let tooltipNode: React.ReactNode | null = null;
                if (tooltipProps) {
                    const { icon = <QuestionCircleOutlined />, ...restTooltipProps } = tooltipProps;
                    tooltipNode = (
                        <Tooltip {...restTooltipProps}>
                            {React.cloneElement(icon, {
                                className: `dtc-form__table__tooltip ${icon.props?.className}`,
                            })}
                        </Tooltip>
                    );
                }

                return {
                    ...cols,
                    title: (
                        <>
                            {isRequired && <span className="dtc-form__table__column--required" />}
                            {cols.title}
                            {tooltipNode}
                        </>
                    ),
                    render(_, record) {
                        const currentNamePath = [record.name, cols.dataIndex]
                            .filter(utils.checkExist)
                            .flat() as OverrideParameters;

                        const rules: Rule[] | undefined = rawRules?.map((rule) =>
                            typeof rule === 'function'
                                ? (form) => rule(form, currentNamePath)
                                : rule
                        );

                        if (dependencies) {
                            return (
                                <Form.Item
                                    noStyle
                                    dependencies={
                                        typeof dependencies === 'function'
                                            ? dependencies(currentNamePath)
                                            : dependencies
                                    }
                                >
                                    {(formInstance) => (
                                        <Form.Item
                                            name={currentNamePath}
                                            rules={rules}
                                            {...formItemProps}
                                        >
                                            {render?.(record, currentNamePath, formInstance)}
                                        </Form.Item>
                                    )}
                                </Form.Item>
                            );
                        }

                        return (
                            <Form.Item name={currentNamePath} rules={rules} {...formItemProps}>
                                {render?.(record, currentNamePath)}
                            </Form.Item>
                        );
                    },
                };
            }
        );
    };

    const columns = useMemo(() => {
        if (typeof rawColumns === 'function') return rawColumns;
        return convertRawToTableCol(rawColumns);
    }, [rawColumns]);

    return (
        <Form.List name={name} rules={rules} initialValue={initialValue}>
            {(fields, ope, meta) => (
                <Table<FormListFieldData>
                    className={classnames(className, tableClassName)}
                    rowKey="key"
                    dataSource={fields}
                    pagination={false}
                    columns={
                        typeof columns === 'function'
                            ? convertRawToTableCol(columns(fields, ope, meta))
                            : columns
                    }
                    footer={footer ? () => footer(fields, ope, meta) : undefined}
                    title={title ? () => title(fields, ope, meta) : undefined}
                    summary={summary ? () => summary(fields, ope, meta) : undefined}
                    {...restProps}
                />
            )}
        </Form.List>
    );
}

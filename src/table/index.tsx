import React, { forwardRef, useMemo } from 'react';
import { QuestionOutlined } from '@dtinsight/react-icons';
import { Table as InternalTable, Tooltip } from 'antd';
import type { LabelTooltipType, WrapperTooltipProps } from 'antd/lib/form/FormItemLabel';
import type {
    ColumnGroupType as PrimitiveColumnGroupType,
    ColumnsType as PrimitiveColumnsType,
    ColumnType as PrimitiveColumnType,
    TableProps,
} from 'antd/lib/table';
import classNames from 'classnames';

import './index.scss';

const {
    SELECTION_COLUMN,
    EXPAND_COLUMN,
    SELECTION_ALL,
    SELECTION_INVERT,
    SELECTION_NONE,
    Column,
    ColumnGroup,
} = InternalTable;

export interface ColumnType<R = any> extends PrimitiveColumnType<R> {
    tooltip?: LabelTooltipType;
}

export interface ColumnGroupType<R = any> extends Omit<PrimitiveColumnGroupType<R>, 'children'> {
    tooltip?: LabelTooltipType;
    children: ColumnsType<R>;
}

export type ColumnsType<R = any> = (ColumnGroupType<R> | ColumnType<R>)[];

export interface ITableProps<R = any> extends Omit<TableProps<R>, 'columns'> {
    columns?: ColumnsType<R>;
}

export type RefTable = <R extends object = any>(
    props: React.PropsWithChildren<ITableProps<R>> & { ref?: React.Ref<HTMLDivElement> }
) => React.ReactElement;

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

function convertColumns<R>(columns?: ColumnsType<R>): PrimitiveColumnsType<R> | undefined {
    if (!columns) return undefined;

    return columns.map((col) => {
        const { tooltip, title, ...restColumn } = col;

        const tooltipProps = toTooltipProps(tooltip);
        let tooltipNode: React.ReactNode | null = null;
        if (tooltipProps) {
            const { icon = <QuestionOutlined />, ...restTooltipProps } = tooltipProps;
            tooltipNode = (
                <Tooltip {...restTooltipProps}>
                    {React.cloneElement(icon, {
                        className: `dtc-table__tooltip ${icon.props?.className || ''}`,
                    })}
                </Tooltip>
            );
        }

        const convertedTitle = tooltipNode ? (
            typeof title === 'function' ? (
                (...args: Parameters<typeof title>) => (
                    <>
                        {title(...args)}
                        {tooltipNode}
                    </>
                )
            ) : (
                <>
                    {title}
                    {tooltipNode}
                </>
            )
        ) : (
            title
        );

        if ('children' in col) {
            return {
                ...restColumn,
                title: convertedTitle,
                children: convertColumns(col.children) || [],
            } as PrimitiveColumnGroupType<R>;
        }

        return {
            ...restColumn,
            title: convertedTitle,
        } as PrimitiveColumnType<R>;
    });
}

function Table<R extends object = any>(props: ITableProps<R>, ref: React.Ref<HTMLDivElement>) {
    const { columns, className, ...reset } = props;
    const cols = useMemo(() => convertColumns(columns), [columns]);

    return (
        <InternalTable<R>
            {...reset}
            className={classNames(['dtc-table', className])}
            columns={cols}
            ref={ref}
        />
    );
}

const ForwardTable = forwardRef(Table) as unknown as RefTable & {
    defaultProps?: Partial<ITableProps<any>>;
    SELECTION_COLUMN: typeof SELECTION_COLUMN;
    EXPAND_COLUMN: typeof EXPAND_COLUMN;
    SELECTION_ALL: typeof SELECTION_ALL;
    SELECTION_INVERT: typeof SELECTION_INVERT;
    SELECTION_NONE: typeof SELECTION_NONE;
    Column: typeof Column;
    ColumnGroup: typeof ColumnGroup;
    // use InternalTable.Summary because of typescript bug(TS2742)
    Summary: typeof InternalTable.Summary;
};

ForwardTable.defaultProps = InternalTable.defaultProps as Partial<ITableProps<any>>;
ForwardTable.SELECTION_COLUMN = SELECTION_COLUMN;
ForwardTable.EXPAND_COLUMN = EXPAND_COLUMN;
ForwardTable.SELECTION_ALL = SELECTION_ALL;
ForwardTable.SELECTION_INVERT = SELECTION_INVERT;
ForwardTable.SELECTION_NONE = SELECTION_NONE;
ForwardTable.Column = Column;
ForwardTable.ColumnGroup = ColumnGroup;
ForwardTable.Summary = InternalTable.Summary;

export default ForwardTable;

import React, { forwardRef } from 'react';
import { Table as InternalTable, Tooltip } from 'antd';
import type { LabelTooltipType, WrapperTooltipProps } from 'antd/lib/form/FormItemLabel';
import type { ColumnType as PrimitiveColumnType, TableProps } from 'antd/lib/table';
import { QuestionCircleOutlined } from '@ant-design/icons';
import './index.scss';

export interface ColumnType<R = any> extends PrimitiveColumnType<R> {
    tooltip?: LabelTooltipType;
}

export interface ITableProps<R = any> extends TableProps<R> {
    columns?: ColumnType<R>[];
}

export type RefTable = <R extends object = any>(
    props: React.PropsWithChildren<TableProps<R>> & { ref?: React.Ref<HTMLDivElement> }
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

function convertColumns(columns?: ColumnType[]): PrimitiveColumnType<any>[] {
    if (!columns?.length) return [];
    return columns.map((col) => {
        const { tooltip, title } = col;

        const tooltipProps = toTooltipProps(tooltip);
        let tooltipNode: React.ReactNode | null = null;
        if (tooltipProps) {
            const { icon = <QuestionCircleOutlined />, ...restTooltipProps } = tooltipProps;
            tooltipNode = (
                <Tooltip {...restTooltipProps}>
                    {React.cloneElement(icon, {
                        className: `dtc-table__tooltip ${icon.props?.className || ''}`,
                    })}
                </Tooltip>
            );
        }

        const titleNode = (
            <>
                {title}
                {tooltipNode}
            </>
        );

        return {
            ...col,
            title: titleNode,
        };
    });
}

function Table<R extends Record<any, any> = any>(
    props: ITableProps<R>,
    ref: React.Ref<HTMLDivElement>
) {
    const { columns, className, ...reset } = props;
    const cols = convertColumns(columns);

    return (
        <InternalTable<R>
            {...reset}
            className={`.dtc-table ${className || ''}`}
            columns={cols}
            ref={ref}
        />
    );
}

const forwardTable = forwardRef(Table) as RefTable;

export default forwardTable;

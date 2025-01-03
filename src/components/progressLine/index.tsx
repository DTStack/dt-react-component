import * as React from 'react';
import { Tooltip } from 'antd';
import useLocale from '../locale/useLocale';

interface IProps {
    title?: string;
    num?: number | string;
    percent?: number | string;
    color?: string;
    className?: string;
    needTitle?: boolean;
    width?: number | string;
}

const ProgressLine = ({
    title,
    num = 0,
    percent = '0%',
    color = '#3BCEFF',
    className = '',
    needTitle = true,
    width = '280px',
}: IProps) => {
    const slidePrefixCls = 'dtc-progress-line';
    const locale = useLocale('ProgressLine');
    const label = `${title || locale.description}: ${num}`;
    return (
        <div className={`${slidePrefixCls} ${className}`}>
            {needTitle && (
                <div className={`${slidePrefixCls}-title`} style={{ width }}>
                    <Tooltip title={label}>
                        <div className={`${slidePrefixCls}-content`}>{label}</div>
                    </Tooltip>
                    <div className={`${slidePrefixCls}-content`}>{percent}</div>
                </div>
            )}
            <div className={`${slidePrefixCls}-wrap`} style={{ width }}>
                <div
                    className={`${slidePrefixCls}-line`}
                    style={{ width: percent, backgroundColor: color }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressLine;

import React from 'react';

export interface TableCellProps {
    value?: string;
    style?: React.CSSProperties;
    className?: string;
    onChange?: any;
}
export default function TableCell(props: TableCellProps) {
    const originStyle: React.CSSProperties = {
        textIndent: '5px',
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        width: '100%',
        border: 'none',
    };

    const { style, className } = props;
    const newStyle: any = { ...originStyle, ...style };

    return <textarea {...props} style={newStyle} className={className} />;
}

import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import './index.scss';

interface IPaginationProps {
    current: number;
    total: number;
    onChange: (current: number) => void;
    disabled?: boolean;
    style?: React.CSSProperties;
}

export default function Pagination({
    current,
    total,
    onChange,
    style,
    disabled,
}: IPaginationProps) {
    const disableLeft = current === 1 || disabled;
    const disableRight = current === total || disabled;

    return (
        <div className="dtc-aigc-pagination" style={style}>
            <LeftOutlined
                className={disableLeft ? 'arrow-disabled' : ''}
                onClick={() => {
                    if (disableLeft) return;
                    onChange(current - 1);
                }}
            />
            <section>
                <span>{current}</span>
                <span>/</span>
                <span>{total}</span>
            </section>
            <RightOutlined
                className={disableRight ? 'arrow-disabled' : ''}
                onClick={() => {
                    if (disableRight) return;
                    onChange(current + 1);
                }}
            />
        </div>
    );
}

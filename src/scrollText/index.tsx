import classNames from 'classnames';
import React from 'react';

export interface ScrollTextProps {
    className?: string;
    value?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

export default function scrollText(props: ScrollTextProps) {
    const style: any = {
        height: '28px',
        margin: '5px 5px 5px 0px',
        width: '100%',
        textAlign: 'left',
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        border: 'none',
    };
    const { value, className = '' } = props;
    return (
        <input
            data-testid="test-scroll-text"
            style={Object.assign({}, style, props.style || {})}
            title={value}
            readOnly
            className={classNames('cell-input', className)}
            value={value}
        />
    );
}

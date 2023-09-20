import React, { CSSProperties, ReactNode } from 'react';
import { CopyOutlined } from '@ant-design/icons';
import { message, Tooltip } from 'antd';
import classNames from 'classnames';
import useClippy from 'use-clippy';

import './style.scss';

export interface ICopyProps {
    text: string;
    title?: ReactNode;
    button?: ReactNode;
    hideTooltip?: boolean;
    style?: CSSProperties;
    className?: string;
    onCopy?: (text: string) => void;
}

const Copy: React.FC<ICopyProps> = (props) => {
    const {
        button = <CopyOutlined className="dtc-copy__default-icon" />,
        text,
        title = '复制',
        hideTooltip,
        style,
        className,
        onCopy = () => message.success('复制成功'),
    } = props;
    const [_, setClipboard] = useClippy();

    const handleCopy = () => {
        setClipboard(text);
        onCopy(text);
    };

    const renderCopyButton = () => (
        <span
            className={classNames(['dtc-copy', className])}
            style={style}
            onClick={() => handleCopy()}
        >
            {button}
        </span>
    );

    return !hideTooltip ? (
        <Tooltip placement="right" title={title}>
            {renderCopyButton()}
        </Tooltip>
    ) : (
        renderCopyButton()
    );
};

export default Copy;

import React from 'react';
import { Tooltip, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import useClippy from 'use-clippy';
import './style.scss';
import classNames from 'classnames';

export interface ICopyButtonProps {
    text: string;
    title?: React.ReactNode;
    button?: React.ReactNode;
    hideTooltip?: boolean;
    style?: React.CSSProperties;
    className?: string;
    onCopy?: (text: string) => void;
}

const CopyButton: React.FC<ICopyButtonProps> = (props) => {
    const {
        button = <CopyOutlined className="dtc-copy-button__default-icon" />,
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
            className={classNames(['dtc-copy-button', className])}
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

export default CopyButton;

import React, { CSSProperties, ReactNode } from 'react';
import { CopyOutlined } from '@ant-design/icons';
import { message, Tooltip, TooltipProps } from 'antd';
import classNames from 'classnames';
import useClippy from 'use-clippy';

import './style.scss';

function toTooltipProps(tooltip: LabelTooltipType): TooltipProps | null {
    if (!tooltip) {
        return null;
    }
    if (typeof tooltip === 'object' && !React.isValidElement(tooltip)) {
        return tooltip as TooltipProps;
    }
    return {
        title: tooltip,
    };
}

export type LabelTooltipType = TooltipProps | React.ReactNode;

export interface ICopyProps {
    text: string;
    button?: ReactNode;
    style?: CSSProperties;
    className?: string;
    tooltip?: LabelTooltipType;
    onCopy?: (text: string) => void;
}

const Copy: React.FC<ICopyProps> = (props) => {
    const {
        button = <CopyOutlined className="dtc-copy__default-icon" />,
        text,
        tooltip,
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

    const tooltipProps = toTooltipProps(tooltip);

    return tooltipProps ? (
        <Tooltip {...tooltipProps}>{renderCopyButton()}</Tooltip>
    ) : (
        renderCopyButton()
    );
};

export default Copy;

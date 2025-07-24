import React, { CSSProperties, ReactNode } from 'react';
import { CopyUtils } from '@dtinsight/dt-utils';
import { CopyOutlined } from '@dtinsight/react-icons';
import { message, Tooltip } from 'antd';
import classNames from 'classnames';

import { LabelTooltipType, toTooltipProps } from '../utils';
import './style.scss';

export interface ICopyProps {
    text: string;
    button?: ReactNode;
    style?: CSSProperties;
    className?: string;
    tooltip?: LabelTooltipType;
    disabled?: boolean;
    onCopy?: (text: string) => void;
}

const Copy: React.FC<ICopyProps> = (props) => {
    const {
        button = <CopyOutlined className="dtc-copy__default-icon" />,
        text,
        tooltip = '复制',
        style,
        className,
        disabled = false,
        onCopy = () => message.success('复制成功'),
    } = props;

    const handleCopy = () => {
        if (disabled) return;
        new CopyUtils().copy(text, () => onCopy(text));
    };

    const renderCopyButton = () => (
        <span
            className={classNames(['dtc-copy', { 'dtc-copy--disabled': disabled }, className])}
            style={style}
            onClick={() => handleCopy()}
        >
            {button}
        </span>
    );

    const tooltipProps = toTooltipProps(tooltip);

    return <Tooltip {...tooltipProps}>{renderCopyButton()}</Tooltip>;
};

export default Copy;

import React, { CSSProperties, ReactNode } from 'react';
import { CopyOutlined } from '@ant-design/icons';
import { message, Tooltip } from 'antd';
import classNames from 'classnames';
import useClippy from 'use-clippy';

import { LabelTooltipType, toTooltipProps } from '../utils';
import './style.scss';

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

    return <Tooltip {...tooltipProps}>{renderCopyButton()}</Tooltip>;
};

export default Copy;

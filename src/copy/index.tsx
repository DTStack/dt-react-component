import React, { CSSProperties, ReactNode } from 'react';
import { CopyUtils } from '@dtinsight/dt-utils';
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
    onCopy?: (text: string) => void;
}

// 后续迁移了 icon 库之后，可以直接从 icon 中引入
const CopyIcon = () => (
    <span className="dtc-copy__default-icon">
        <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
        >
            <path d="M704 96a96 96 0 0 1 96 96v16h32a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H320a96 96 0 0 1-96-96v-16h-32a96 96 0 0 1-95.936-92.4L96 704V192a96 96 0 0 1 96-96z m96 608a96 96 0 0 1-96 96H288v16a32 32 0 0 0 32 32h512a32 32 0 0 0 32-32V304a32 32 0 0 0-32-32h-32z m-96-544H192a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h512a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32z m-256 64a32 32 0 0 1 32 32v160h160a32 32 0 1 1 0 64H480v160a32 32 0 1 1-64 0V480H256a32 32 0 1 1 0-64h160V256a32 32 0 0 1 32-32z"></path>
        </svg>
    </span>
);

const Copy: React.FC<ICopyProps> = (props) => {
    const {
        button = <CopyIcon />,
        text,
        tooltip = '复制',
        style,
        className,
        onCopy = () => message.success('复制成功'),
    } = props;

    const handleCopy = () => {
        new CopyUtils().copy(text, () => onCopy(text));
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

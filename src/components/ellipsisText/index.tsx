import React from 'react'
import { Tooltip } from 'antd';
import { isEmpty } from 'lodash';
type TooltipPlacement = "top" | "left" | "right" | "bottom" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom"
interface IProps {
    placement?: TooltipPlacement;
    style?: React.CSSProperties;
    className?: string;
    value: string | number;
}

export default (props: IProps) => {
    let { value = '', className = '', style = {}, placement = undefined } = props;
    return (
        <Tooltip placement={placement} title={`${value}`}>
            <span data-testid="ellipsis_text" className={isEmpty(className) ? 'dtc-ellipsis-text' : 'dtc-ellipsis-text ' + className} style={style}>
                {`${value}`}
            </span>
        </Tooltip>
    )
}

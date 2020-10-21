import * as React from 'react';
import { Tooltip } from 'antd';
import { isEmpty } from 'lodash';

interface IProps {
    placement?: any;
    style?: any;
    className?: string;
    value: string | number;
}

export default (props: IProps) => {
    let { value = '', className = '', style = {}, placement = undefined } = props;
    return (
        <Tooltip placement={placement} title={`${value}`}>
            <div data-testid="ellipsis_text" className={isEmpty(className) ? 'dtc-ellipsis-text' : 'dtc-ellipsis-text ' + className} style={style}>
                {`${value}`}
            </div>
        </Tooltip>
    )
}

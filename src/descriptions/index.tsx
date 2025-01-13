import React from 'react';
import { Descriptions as AntdDescriptions, DescriptionsProps as AntdDescriptionsProps } from 'antd';
import classNames from 'classnames';

import './index.scss';

interface DescriptionsProps extends AntdDescriptionsProps {
    tableLayout?: 'auto' | 'fixed';
}

function Descriptions({ className, tableLayout, ...rest }: DescriptionsProps) {
    return (
        <AntdDescriptions
            className={classNames(tableLayout === 'fixed' && 'dtc-descriptions__fixed', className)}
            {...rest}
        />
    );
}

Descriptions.Item = AntdDescriptions.Item;

export default Descriptions;

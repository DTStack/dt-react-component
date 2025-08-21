import React from 'react';
import { CloseFilled, InformationFilled, WarningFilled } from '@dtinsight/react-icons';
import { Popconfirm as AntdPopconfirm, PopconfirmProps as AntdPopconfirmProps } from 'antd';
import classNames from 'classnames';

import './index.scss';

export interface PopconfirmProps extends AntdPopconfirmProps {
    showIcon?: boolean;
    type?: 'primary' | 'warning' | 'danger';
}

const Popconfirm = ({
    showIcon = true,
    type = 'primary',
    icon,
    okButtonProps,
    ...rest
}: PopconfirmProps) => {
    const generateIcon = () => {
        if (!showIcon) return <></>;
        if (icon) return icon;
        switch (type) {
            case 'primary':
                return <InformationFilled color="#1D78FF" />;
            case 'warning':
                return <WarningFilled color="#FBB310" />;
            case 'danger':
                return <CloseFilled color="#F96C5B" />;
            default:
                return <></>;
        }
    };

    return (
        <AntdPopconfirm
            overlayClassName={classNames('dtc-popconfirm')}
            icon={generateIcon()}
            okButtonProps={{ danger: type === 'danger', ...okButtonProps }}
            {...rest}
        />
    );
};

export default Popconfirm;

import React from 'react';
import { Alert, type AlertProps, Modal as AntdModal, type ModalProps } from 'antd';
import classNames from 'classnames';
import { omit } from 'lodash-es';

import './index.scss';

export interface IModalProps extends ModalProps {
    size?: 'small' | 'default' | 'middle' | 'large';
    banner?: AlertProps['message'] | Omit<AlertProps, 'banner'>;
}

const getWidthFromSize = (size: IModalProps['size']) => {
    if (size === 'small') return 400;
    if (size === 'middle') return 640;
    if (size === 'large') return 900;
    return 520;
};

const isValidBanner = (banner: IModalProps['banner']): banner is AlertProps['message'] => {
    if (typeof banner === 'object') return React.isValidElement(banner);
    return true;
};

export default function Modal({
    bodyStyle,
    banner,
    size = 'default',
    children,
    width,
    className,
    ...rest
}: IModalProps) {
    const finalWidth = width ?? getWidthFromSize(size);

    return (
        <AntdModal
            className={classNames('dtc-modal', className)}
            bodyStyle={{ padding: 0, ...bodyStyle }}
            width={finalWidth}
            {...rest}
        >
            {banner && (
                <Alert
                    message={isValidBanner(banner) ? banner : banner.message}
                    banner
                    {...(isValidBanner(banner) ? {} : omit(banner, 'message'))}
                />
            )}
            <section className="dtc-modal-body">{children}</section>
        </AntdModal>
    );
}

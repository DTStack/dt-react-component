import React from 'react';
import { Alert, AlertProps, Modal, ModalProps } from 'antd';
import { omit } from 'lodash';

import './index.scss';

export interface IModalProps extends ModalProps {
    size?: 'small' | 'default' | 'large';
    banner?: AlertProps['message'] | Omit<AlertProps, 'banner'>;
}

const getWidthFromSize = (size: IModalProps['size']) => {
    if (size === 'small') return 400;
    if (size === 'large') return 900;
    return 640;
};

const isValidBanner = (banner: IModalProps['banner']): banner is AlertProps['message'] => {
    return React.isValidElement(banner);
};

export default function InternalModal({
    bodyStyle,
    banner,
    size,
    children,
    width,
    ...rest
}: IModalProps) {
    const finalWidth = size ? getWidthFromSize(size) : width;

    return (
        <Modal
            className="dt-modal"
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
            <section className="dt-modal-body">{children}</section>
        </Modal>
    );
}

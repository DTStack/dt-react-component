import React from 'react';
import { Alert, type AlertProps, Modal as AntdModal, type ModalProps } from 'antd';
import classNames from 'classnames';
import { omit } from 'lodash-es';

import type { IFloatProps } from '../float';
import Float from '../float';
import useMergeOption from '../float/useMergeOption';
import './index.scss';

export interface IModalProps extends ModalProps {
    size?: 'small' | 'default' | 'middle' | 'large';
    banner?: AlertProps['message'] | Omit<AlertProps, 'banner'>;
    draggable?: IFloatProps['draggable'];
    position?: IFloatProps['position'];
    onPositionChange?: IFloatProps['onChange'];
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
    draggable = false,
    position,
    onPositionChange,
    modalRender,
    ...rest
}: IModalProps) {
    const finalWidth = width ?? getWidthFromSize(size);

    const mergedDraggable = useMergeOption(
        typeof draggable === 'boolean' ? draggable : { handle: '.ant-modal-header', ...draggable }
    );

    return (
        <AntdModal
            className={classNames(
                'dtc-modal',
                !mergedDraggable.disabled && 'dtc-modal__draggable',
                className
            )}
            bodyStyle={{ padding: 0, ...bodyStyle }}
            width={finalWidth}
            modalRender={(modal) =>
                mergedDraggable.disabled ? (
                    modalRender?.(modal) || modal
                ) : (
                    <Float
                        draggable={mergedDraggable.options}
                        position={position}
                        style={{ width: finalWidth }}
                        onChange={onPositionChange}
                    >
                        {modalRender?.(modal) || modal}
                    </Float>
                )
            }
            {...rest}
        >
            {banner && (
                <Alert
                    className="dtc-modal-alert"
                    message={isValidBanner(banner) ? banner : banner.message}
                    banner
                    {...(isValidBanner(banner) ? {} : omit(banner, 'message'))}
                />
            )}
            <section className="dtc-modal-body">{children}</section>
        </AntdModal>
    );
}

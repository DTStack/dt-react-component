import React from 'react';
import { CheckFilled, CloseFilled, InformationFilled, WarningFilled } from '@dtinsight/react-icons';
import { Modal as AntdModal, ModalFuncProps } from 'antd';
import { ModalFunc, ModalStaticFunctions } from 'antd/lib/modal/confirm';

import { getRunTimeLocale, ModalLocale } from './locale';
import InternalModal from './modal';

type ModalType = typeof InternalModal &
    ModalStaticFunctions & {
        useModal: typeof AntdModal.useModal;
        destroyAll: () => void;
        config: typeof AntdModal.config;
        delete: (props: ModalFuncProps) => void;
    };

const { useModal, info, success, error, warning, confirm, destroyAll, config } = AntdModal;

const getCustomProps = (
    locale: ModalLocale
): Record<
    | keyof Pick<ModalStaticFunctions, 'info' | 'success' | 'error' | 'warning' | 'confirm'>
    | 'delete',
    ModalFuncProps
> => {
    return {
        info: { icon: <InformationFilled color="#1D78FF" />, okText: locale.okText },
        success: { icon: <CheckFilled color="#11D7B2" />, okText: locale.okText },
        error: {
            icon: <CloseFilled color="#F96C5B" />,
            okText: locale.okText,
            okButtonProps: { danger: true },
        },
        warning: { icon: <WarningFilled color="#FBB310" />, okText: locale.okText },
        confirm: {
            icon: <WarningFilled color="#FBB310" />,
            okText: locale.okText,
            cancelText: locale.cancelText,
        },
        delete: {
            icon: <CloseFilled color="#F96C5B" />,
            okButtonProps: { danger: true },
            okText: locale.okText,
            cancelText: locale.notYetText,
        },
    };
};

function withCustomIcon(fn: ModalFunc, type: keyof ReturnType<typeof getCustomProps>) {
    return (props: ModalFuncProps) => {
        const locale = getRunTimeLocale();
        const customProps = getCustomProps(locale);
        return fn({ ...customProps[type], wrapClassName: 'dtc-modal', ...props });
    };
}

const Modal = InternalModal as unknown as ModalType;

Object.assign(Modal, {
    InternalModal,
    useModal,
    info: withCustomIcon(info, 'info'),
    success: withCustomIcon(success, 'success'),
    error: withCustomIcon(error, 'error'),
    warning: withCustomIcon(warning, 'warning'),
    confirm: withCustomIcon(confirm, 'confirm'),
    delete: withCustomIcon(confirm, 'delete'),
    destroyAll,
    config,
});

export type { IModalProps, RectState } from './modal';
export type { ResizeHandle } from 'react-resizable';

export default Modal;

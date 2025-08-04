import React from 'react';
import { CheckFilled, CloseFilled, InformationFilled, WarningFilled } from '@dtinsight/react-icons';
import { Modal as AntdModal, ModalFuncProps } from 'antd';
import { ModalFunc, ModalStaticFunctions } from 'antd/lib/modal/confirm';

import InternalModal from './modal';

const OK_TEXT = '确认';

type ModalType = typeof InternalModal &
    ModalStaticFunctions & {
        useModal: typeof AntdModal.useModal;
        destroyAll: () => void;
        config: typeof AntdModal.config;
        delete: (props: ModalFuncProps) => void;
    };

const { useModal, info, success, error, warning, confirm, destroyAll, config } = AntdModal;

const customProps: Record<
    | keyof Pick<ModalStaticFunctions, 'info' | 'success' | 'error' | 'warning' | 'confirm'>
    | 'delete',
    ModalFuncProps
> = {
    info: { icon: <InformationFilled color="#1D78FF" />, okText: OK_TEXT },
    success: { icon: <CheckFilled color="#11D7B2" />, okText: OK_TEXT },
    error: {
        icon: <CloseFilled color="#F96C5B" />,
        okText: OK_TEXT,
        okButtonProps: { danger: true },
    },
    warning: { icon: <WarningFilled color="#FBB310" />, okText: OK_TEXT },
    confirm: { icon: <WarningFilled color="#FBB310" />, okText: OK_TEXT, cancelText: '取消' },
    delete: {
        icon: <CloseFilled color="#F96C5B" />,
        okButtonProps: { danger: true },
        okText: OK_TEXT,
        cancelText: '暂不',
    },
};

function withCustomIcon(fn: ModalFunc, type: keyof typeof customProps) {
    return (props: ModalFuncProps) =>
        fn({ ...customProps[type], wrapClassName: 'dtc-modal', ...props });
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

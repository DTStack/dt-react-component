import { Modal as AntdModal } from 'antd';
import { ModalStaticFunctions } from 'antd/lib/modal/confirm';

import InternalModal from './modal';

type ModalType = typeof InternalModal &
    ModalStaticFunctions & {
        useModal: typeof AntdModal.useModal;
        destroyAll: () => void;
        config: typeof AntdModal.config;
    };

const { useModal, info, success, error, warning, confirm, destroyAll, config } = AntdModal;

const Modal = InternalModal as ModalType;

Object.assign(Modal, {
    useModal,
    info,
    success,
    error,
    warning,
    confirm,
    destroyAll,
    config,
});

export { IModalProps } from './modal';

export default Modal;

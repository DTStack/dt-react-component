import { Modal } from 'antd';

import InternalForm from './components/form';
import InternalModal from './components/modal';

type OriginalInterface = typeof Modal;

const WrapperModal: any = new Proxy(InternalModal, {
    get(_, key) {
        if (key in Modal) {
            return Modal[key as keyof OriginalInterface];
        } else if (key === 'Form') {
            return InternalForm;
        }
    },
});

type ModalStaticFunctionType = Pick<OriginalInterface, keyof OriginalInterface>;
type ModalInterface = typeof InternalModal &
    ModalStaticFunctionType & { Form: typeof InternalForm };

export type { IModalProps } from './components/modal';

export default WrapperModal as ModalInterface;

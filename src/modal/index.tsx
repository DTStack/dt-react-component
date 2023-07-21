import { Modal } from 'antd';

import InternalForm from './form';

type OriginalInterface = typeof Modal;
interface ModalInterface extends OriginalInterface {
    Form: typeof InternalForm;
}

const WrapperModal = Modal;
(WrapperModal as ModalInterface).Form = InternalForm;
export default WrapperModal as ModalInterface;

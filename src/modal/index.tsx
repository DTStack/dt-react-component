import { Modal } from 'antd';
import ModalWithForm from './modalWithForm';

type OriginalInterface = typeof Modal;
interface ModalInterface extends OriginalInterface {
    Form: typeof ModalWithForm;
}

const WrapperModal = Modal;
(WrapperModal as ModalInterface).Form = ModalWithForm;
export default WrapperModal as ModalInterface;

import { Dropdown } from 'antd';
import Select from './select';

type OriginalInterface = typeof Dropdown;
interface DropdownInterface extends OriginalInterface {
    Select: typeof Select;
}
const Wrapper = Dropdown;
(Wrapper as DropdownInterface).Select = Select;
export default Wrapper as DropdownInterface;

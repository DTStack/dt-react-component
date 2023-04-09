import { Dropdown } from 'antd';
import Select from './select';

type OriginalInterface = typeof Dropdown;
interface DropdownInterface extends OriginalInterface {
    Select: typeof Select;
}
const WrapperDropdown = Dropdown;
(WrapperDropdown as DropdownInterface).Select = Select;
export default WrapperDropdown as DropdownInterface;

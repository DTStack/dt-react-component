import { Form } from 'antd';
import InternalTable from './table';

type OriginFormType = typeof Form;
interface FormInterface extends OriginFormType {
    Table: typeof InternalTable;
}

const WrapperForm = Form;

(WrapperForm as FormInterface).Table = InternalTable;

export type { IFormTableProps, ColumnType } from './table';
export default WrapperForm as FormInterface;

import { Input } from 'antd';

import InternalMatch from './match';

type OriginInputType = typeof Input;
interface InputInterface extends OriginInputType {
    Match: typeof InternalMatch;
}

const WrapperInput = Input;

(WrapperInput as InputInterface).Match = InternalMatch;

export default WrapperInput as InputInterface;

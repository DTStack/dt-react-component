import InternalInput from './internalInput';
import InternalMatch from './match';

type OriginInputType = typeof InternalInput;
interface InputInterface extends OriginInputType {
    Match: typeof InternalMatch;
}

const WrapperInput = InternalInput;

(WrapperInput as InputInterface).Match = InternalMatch;

export default WrapperInput as InputInterface;

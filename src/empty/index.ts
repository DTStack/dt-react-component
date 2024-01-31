import InternalEmpty, { EmptyProps } from './empty';
import Placeholder from './placeholder';

type CompoundedComponent = React.ForwardRefExoticComponent<EmptyProps> & {
    Placeholder: typeof Placeholder;
};

const Empty = InternalEmpty as CompoundedComponent;

Empty.Placeholder = Placeholder;

export default Empty;

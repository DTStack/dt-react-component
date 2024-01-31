import React from 'react';

import Empty, { EmptyProps } from './empty';

interface IPlaceholderProps extends EmptyProps {
    show: boolean;
    children: React.ReactNode;
}

const Placeholder = (props: IPlaceholderProps) => {
    const { show = true, children, ...reset } = props;
    return <>{show ? children : <Empty {...reset} />}</>;
};

export default Placeholder;

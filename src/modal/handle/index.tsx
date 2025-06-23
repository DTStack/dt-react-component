import React from 'react';

import './index.scss';

const Handler = React.forwardRef<HTMLDivElement, any>((props, ref) => {
    const { handleAxis, ...restProps } = props;
    return (
        <div ref={ref} className={`dt-modal-resize-handle handle-${handleAxis}`} {...restProps} />
    );
});

export default Handler;

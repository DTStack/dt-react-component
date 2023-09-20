import React, { useCallback, useState } from 'react';
import { Resize } from 'dt-react-component';

export default () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [innerHeight, setInnerHeight] = useState(window.innerHeight);

    const onResize = useCallback(() => {
        setInnerWidth(window.innerWidth);
        setInnerHeight(window.innerHeight);
    }, []);

    return (
        <Resize onResize={onResize}>
            <div>
                <pre>window高度: {innerWidth}</pre>
                <pre>window宽度: {innerHeight}</pre>
            </div>
        </Resize>
    );
};

import React from 'react';
import classNames from 'classnames';

import { useScrollWithShadow } from '../../hooks';
import './index.less';

export default function SourceCode({ jsx }: { jsx: string }) {
    const [ref, shadow] = useScrollWithShadow();
    console.log('shadow:', shadow.top);

    return (
        <div className="source-code-container" ref={ref}>
            <div
                className={classNames(
                    'source-code-shadow',
                    shadow.top && 'source-code-shadow__active'
                )}
            />
            <div
                className={classNames('source-code-content')}
                dangerouslySetInnerHTML={{ __html: jsx }}
            />
        </div>
    );
}

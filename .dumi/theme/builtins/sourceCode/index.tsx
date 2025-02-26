import React from 'react';
import { useScrollWithShadow } from '../../hooks';
import classNames from 'classnames';
import './index.less';

export default function SourceCode({ jsx }: { jsx: string }) {
    const [ref, shadow] = useScrollWithShadow();

    return (
        <div className="source-code-container">
            {shadow.top && <div className="source-code-shadow" />}
            <div
                ref={ref}
                className={classNames('source-code-content')}
                dangerouslySetInnerHTML={{ __html: jsx }}
            />
        </div>
    );
}

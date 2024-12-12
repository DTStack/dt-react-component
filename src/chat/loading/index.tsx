import React, { PropsWithChildren } from 'react';

import './index.scss';

interface ILoadingProps {
    loading: boolean;
}

export default function Loading(props: PropsWithChildren<ILoadingProps>) {
    return props.loading ? (
        <div className="dtc__aigc__loading">
            <div />
            <div />
            <div />
        </div>
    ) : (
        <>{props.children}</>
    );
}

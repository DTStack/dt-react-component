declare module 'react-router-3' {
    import React from 'react';
    import { RouteProps, RouterProps } from 'react-router';

    export {
        Link,
        IndexRoute,
        createMemoryHistory,
        browserHistory,
        hashHistory,
    } from 'react-router';
    export const Router: React.ComponentClass<React.PropsWithChildren<RouterProps>>;
    export const Route: React.ComponentClass<React.PropsWithChildren<RouteProps>>;
}

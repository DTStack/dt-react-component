import * as React from 'react';

const ControllerServer = <P extends object>(Component: React.ComponentType<P>): any => {
    return class extends React.Component<P> {
        controller = new AbortController();
        componentWillUnmount() {
            this.controller.abort()
        }
        render() {
            const { signal } = this.controller;
            return <Component {...this.props} signal={signal} />;
        }
    }
}

export default ControllerServer

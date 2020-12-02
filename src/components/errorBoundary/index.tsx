import React from 'react'
import LoadError from '../loadError';

interface ErrorBoundaryProps {
    children?: React.ReactNode;
}

interface ErrorBoundaryStates {
    hasError: boolean;
}
export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryStates> {
    state = { hasError: false }
    // eslint-disable-next-line handle-callback-err
    static getDerivedStateFromError (error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch (error, errorInfo) {
        this.setState({ hasError: true });
        console.log(error);
        console.log(errorInfo);
    }

    render () {
        if (this.state.hasError) {
            return <LoadError />;
        }
        return this.props.children;
    }
}

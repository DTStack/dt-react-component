import React from 'react';
import LoadError from './loadError';

interface IErrorBoundaryProps {
    children?: React.ReactNode;
    errorPage?: React.ReactNode;
    onError?: (error: Error) => void;
}

interface IErrorBoundaryState {
    hasError: boolean;
}
export default class ErrorBoundary extends React.Component<
    IErrorBoundaryProps,
    IErrorBoundaryState
> {
    state = { hasError: false };
    static getDerivedStateFromError(_error: any) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({ hasError: true });
        this.props.onError?.(error);
        console.log(error);
        console.log(errorInfo);
    }

    render() {
        const { children, errorPage = <LoadError /> } = this.props;
        const { hasError } = this.state;

        if (hasError) {
            return errorPage;
        }
        return children;
    }
}

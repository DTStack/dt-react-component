import React, { ReactNode, Component, ErrorInfo } from 'react';
import LoadError from './loadError';

interface IErrorBoundaryProps {
    children?: ReactNode;
    errorPage?: ReactNode;
    onError?: (error: Error) => void;
}

interface IErrorBoundaryState {
    hasError: boolean;
}
export default class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
    state = { hasError: false };
    static getDerivedStateFromError(_error: any) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
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

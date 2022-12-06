import React from 'react';
import { ErrorBoundary } from 'dt-react-component';

class ThrowError extends React.Component {
    state = {
        count: 0,
    };
    render() {
        const { count } = this.state;
        if (count % 2) throw new Error('test error');
        else {
            return (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <button
                        style={{
                            border: 'none',
                            backgroundColor: '#1890ff',
                            cursor: 'pointer',
                            height: '32px',
                            borderRadius: '4px',
                        }}
                        onClick={() => this.setState({ count: count + 1 })}
                    >
                        catch error
                    </button>
                    <h2>hello, dt-react-component</h2>
                </div>
            );
        }
    }
}

export default () => {
    return (
        <ErrorBoundary>
            <ThrowError />
        </ErrorBoundary>
    );
};

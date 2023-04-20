import React, { useState } from 'react';
import { ErrorBoundary } from 'dt-react-component';
import { message } from 'antd';

const ThrowError = () => {
    const [count, setCount] = useState(0);
    if (count % 2) throw new Error('test error');
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
                onClick={() => setCount((count) => count + 1)}
            >
                触发异常
            </button>
            <h2>hello, dt-react-component</h2>
        </div>
    );
};

const ErrorPage = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>这是自定义捕获异常页面</h2>
        </div>
    );
};

export default () => {
    return (
        <ErrorBoundary
            onError={(err) => message.error('捕获到错误：' + err.message)}
            errorPage={<ErrorPage />}
        >
            <ThrowError />
        </ErrorBoundary>
    );
};

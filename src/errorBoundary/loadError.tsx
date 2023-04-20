import React from 'react';

const LoadError: React.FC = function () {
    return (
        <div className="dtc-error" data-testid="test-error">
            <div>
                
                <h2 style={{ textAlign: 'center' }} data-testid="test-error">
                    发现新版本，请
                    <a
                        onClick={() => {
                            location.reload();
                        }}
                    >
                        刷新
                    </a>
                    获取新版本。
                </h2>
                <h4 style={{ textAlign: 'center' }}>若该提示长时间存在，请联系管理员。</h4>
            </div>
        </div>
    );
};

export default LoadError;

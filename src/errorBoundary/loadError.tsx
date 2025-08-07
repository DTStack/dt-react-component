import React from 'react';

import useLocale from '../locale/useLocale';

const LoadError: React.FC = function () {
    const locale = useLocale('LoadError');
    return (
        <div className="dtc-error" data-testid="test-error">
            <div>
                <h2 style={{ textAlign: 'center' }} data-testid="test-error">
                    {locale.please}
                    <a
                        onClick={() => {
                            location.reload();
                        }}
                    >
                        {locale.refresh}
                    </a>
                    {locale.get}
                </h2>
                <h4 style={{ textAlign: 'center' }}>{locale.title}</h4>
            </div>
        </div>
    );
};

export default LoadError;

import React from 'react';
import classNames from 'classnames';

import useLocale from '../locale/useLocale';
import './style.scss';

export interface IGlobalLoadingProps {
    className?: string;
    loadingTitle?: string;
    mainBackground?: string;
    circleBackground?: string;
    titleColor?: string;
}

const GlobalLoading: React.FC<IGlobalLoadingProps> = function (props) {
    const locale = useLocale('GlobalLoading');

    const {
        loadingTitle = locale.loading,
        mainBackground = '#F2F7FA',
        circleBackground = '#1D78FF',
        titleColor = '#3D446E',
        className = '',
    } = props;
    const prefixCls = 'dtc-global-loading';

    return (
        <div
            className={classNames(`${prefixCls}-wrapper`, className)}
            style={{ background: mainBackground }}
            data-testid="test-globalLoading"
        >
            <div className={`${prefixCls}-center`}>
                <div className={`${prefixCls}-title`} style={{ color: titleColor }}>
                    {loadingTitle}
                </div>
                <div className="dtc-bouncy-wrap">
                    <div className="dtc-dot-icon dtc-dc1">
                        <div className="dtc-dot" style={{ background: circleBackground }}></div>
                    </div>
                    <div className="dtc-dot-icon dtc-dc2">
                        <div className="dtc-dot" style={{ background: circleBackground }}></div>
                    </div>
                    <div className="dtc-dot-icon dtc-dc3">
                        <div className="dtc-dot" style={{ background: circleBackground }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalLoading;

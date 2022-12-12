import classNames from 'classnames';
import React from 'react';
import './style.scss';

export interface GlobalLoadingProps {
    className?: string;
    prefix?: string;
    loadingTitle?: string;
    mainBackground?: string;
    circleBackground?: string;
    titleColor?: string;
}

export default class GlobalLoading extends React.Component<GlobalLoadingProps, any> {
    render() {
        const {
            prefix = '',
            loadingTitle = '应用加载中，请等候～',
            mainBackground = '#F2F7FA',
            circleBackground = '#1D78FF',
            titleColor = '#3D446E',
            className = '',
        } = this.props;

        return (
            <div
                className={classNames('dtc-loading-wrapper', className)}
                style={{ background: mainBackground }}
                data-testid="test-globalLoading"
            >
                <div className="dtc-loading-center">
                    <div
                        className="dtc-loading-title"
                        style={{ color: titleColor }}
                    >{`${prefix}  ${loadingTitle}`}</div>
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
    }
}

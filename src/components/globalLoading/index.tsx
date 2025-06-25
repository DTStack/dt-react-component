import classNames from 'classnames';
import React from 'react';
import useLocale, { Locale } from '../locale/useLocale';

export interface GlobalLoadingProps {
    className?: string;
    prefix?: string;
    loadingTitle?: string;
    mainBackground?: string;
    circleBackground?: string;
    titleColor?: string;
    locale?: Locale['GlobalLoading'];
}

class GlobalLoading extends React.Component<GlobalLoadingProps, any> {
    render() {
        const {
            prefix = '',
            loadingTitle,
            mainBackground = '#F2F7FA',
            circleBackground = '#1D78FF',
            titleColor = '#3D446E',
            className = '',
            locale,
        } = this.props;

        const newLoadingTitle = loadingTitle || locale.loading;

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
                    >{`${prefix}  ${newLoadingTitle}`}</div>
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

const GlobalLoadingWrapper = (props: Omit<GlobalLoadingProps, 'locale'>) => {
    const locale = useLocale('GlobalLoading');
    return <GlobalLoading {...props} locale={locale} />;
};

export default GlobalLoadingWrapper;

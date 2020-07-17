import * as React from 'react'

export interface GlobalLoadingProps {
    prefix?: string;
    loadingTitle?: string;
    mainBackground?: string;
    circleBackground?: string;
    titleColor?: string;
}

export default class GlobalLoading extends React.Component<GlobalLoadingProps, any> {
    render () {
        const {
            prefix = '',
            loadingTitle = '应用加载中，请等候～',
            mainBackground = '#2E3943',
            circleBackground = '#fff',
            titleColor = '#fff'
        } = this.props;
        return (
            <div className="dtc-loading-wrapper" style={{ background: mainBackground }} data-testid='test-globalLoading'>
                <div className="dtc-loading-center">
                    <h1 style={{ color: titleColor }}>{`${prefix}  ${loadingTitle}`}</h1>
                    <div className="dtc-bouncywrap">
                        <div className="dtc-dotcon dtc-dc1">
                            <div className="dtc-dot" style={{ background: circleBackground }}></div>
                        </div>
                        <div className="dtc-dotcon dtc-dc2">
                            <div className="dtc-dot" style={{ background: circleBackground }}></div>
                        </div>
                        <div className="dtc-dotcon dtc-dc3">
                            <div className="dtc-dot" style={{ background: circleBackground }}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

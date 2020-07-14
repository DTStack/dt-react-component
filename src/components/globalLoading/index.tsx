import * as React from 'react'
import './style.scss';

export default class GlobalLoading extends React.Component<any, any> {
    render () {
        const {
            prefix = '',
            loadingTitle = '应用加载中，请等候～',
            mainbackground = '#2E3943',
            circleBackground = '#fff',
            titleColor = '#fff'
        } = this.props;
        return (
            <div className="dtc-loading-wrapper" style={{ background: mainbackground }}>
                <div className="dtc-loading-center">
                    <h1 style={{ color: titleColor }}>{`${prefix}  ${loadingTitle}`}</h1>
                    <div className="dtc-bouncywrap">
                        <div className="dtc-dotcon dtc-dc1">
                            <div className="dtc-dot" style={{ background: circleBackground }}></div>
                        </div>
                        <div className="d t cdotcon dtc-dc2">
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

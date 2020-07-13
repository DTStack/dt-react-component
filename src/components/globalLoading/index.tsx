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
            <div className="laoding-wrapper" style={{ background: mainbackground }}>
                <div className="loading-center">
                    <h1 style={{ color: titleColor }}>{`${prefix}  ${loadingTitle}`}</h1>
                    <div className="bouncywrap">
                        <div className="dotcon dc1">
                            <div className="dot" style={{ background: circleBackground }}></div>
                        </div>
                        <div className="dotcon dc2">
                            <div className="dot" style={{ background: circleBackground }}></div>
                        </div>
                        <div className="dotcon dc3">
                            <div className="dot" style={{ background: circleBackground }}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

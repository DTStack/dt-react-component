import * as React from 'react'
import './style.scss';

declare var window: any;

export default class GlobalLoading extends React.Component<any, any> {
    render () {
        const { prefix = '', loadingTitle = '应用加载中，请等候～' } = this.props;
        return (
            <div className="laoding-wrapper">
                <div className="loading-center">
                    <h1 className="loading-title">{ `${prefix}  ${loadingTitle}` }</h1>
                    <div className="bouncywrap">
                        <div className="dotcon dc1">
                            <div className="dot"></div>
                        </div>
                        <div className="dotcon dc2">
                            <div className="dot"></div>
                        </div>
                        <div className="dotcon dc3">
                            <div className="dot"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import { assign } from 'lodash';
import React from 'react';

import classNames from 'classnames';

export interface SlidePaneProps {
    children: React.ReactNode;
    visible: boolean;
    left?: string | number;
    width?: string | number;
    className?: string;
    style?: React.CSSProperties;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onClose?<HTMLSpanElement, MouseEvent>(): void;
    [propName: string]: any;
}

class SlidePane extends React.Component<SlidePaneProps, any> {
    constructor(props: SlidePaneProps) {
        super(props);
    }

    render() {
        const { children, visible, style, className, onClose } = this.props;
        const slidePrefixCls = 'dtc-slide-pane';
        let myStyle: any = {
            top: 0,
            transform: visible ? undefined : 'translate3d(150%, 0, 0)',
        };
        const classes = classNames(slidePrefixCls, className);
        if (!visible) {
            myStyle['pointerEvents'] = 'none';
        }
        if (style) myStyle = assign(myStyle, style);

        return (
            <div className={classes} style={myStyle}>
                <div
                    className={`${slidePrefixCls}-content`}
                    data-testid="slidepane_container"
                    style={{ display: visible ? 'block' : 'none', height: '100%' }}
                >
                    {children}
                </div>
                <img
                    className={`${slidePrefixCls}-icon`}
                    data-testid="slidepane_action"
                    onClick={onClose}
                    {...{ onClick: onClose }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAABwCAYAAAAE0LDPAAAAAXNSR0IArs4c6QAAAnlJREFUaEPtmk9IVHEQx78jufpw7ykouuEaBG6dEmrXOmRRt476VgvyEngKlNqQMu3PoSU7iCBq4CW2olNdRMRr7HasnnZb0y57WGODzUDjt/RIonbeyzfQYd51h/m8+c7395u3MOSs5Xexr4dKRLt5AhYJtbPRaNO7velo/4Bf6YhoB8B0R3vzNSLaNr8ECnBRRLTc0d583kBEAJU3J5o6HG0ZkgTs1OBATAxgqqghTIoCiPBeFABQSRggZFOxg/anC0ElYq9JlUglYhVgA9RFKhGrABugLlKJWAXYAHWRSsQqwAaoi1QiVgE2gHVRejKDUKgWQ1cvmj/XbMLfA3jA42dwVvPo7+tBd/xo8ICNzQLG7y3AskIYvz2IcEO9LwhbgcmWebGCpeUcEvEYBvrOBg8ol7cxOjaP4lYJqZEkIm2NniGeKjDZ3mQ/YPbJa7S1NiI1YntuuGeAgTx8lMHqx3XYvWdwOnHMUxW+AJufC7hzdwH1VggTt64gHLZYiC+Ayfb85QoWl3KIn+jEpeS54AHlb98xOjaHYrGEG8M2DkWaqkJ8V2CyZd86mJl7hdaWg7h5PVm14f8EMJD0zxM+ePkCuo4f+WsV/ycgm3MwMy8k0d4mp4ZtRIJusmvTxMlODNgB21T8oLlXRbK3B6cS3maDZxeJXnbudb315Wvl9AZ+XbsDpzseQ3/QA+fTRgET9wVHpvmqcNbWK6PSjEy/D9vkB+mnaLDq5D5b/L6x7+8iBbBNVolUItYDKpFKxCrABqiLVCJWATZAXaQSsQqwAeoilYhVgA1QFzESCS8wia9giS6Rma1B0TU40UU+sVVEoWXK6uugPwBjVkdxauLcgwAAAABJRU5ErkJggg=="
                    alt=""
                />
            </div>
        );
    }
}

export default SlidePane;

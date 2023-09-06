import React, { CSSProperties, KeyboardEvent, MouseEvent, PropsWithChildren } from 'react';
import RcDrawer from 'rc-drawer';

import './style.scss';

export interface ISlidePaneProps {
    visible: boolean;
    wrapperClassName?: string;
    width?: number | string;
    title?: React.ReactNode;
    showRenderButton?: boolean;
    rootStyle?: CSSProperties;
    bodyStyle?: CSSProperties;
    onClose?: (e: MouseEvent | KeyboardEvent) => void;
}
const SlidePane = ({
    visible,
    wrapperClassName,
    showRenderButton = true,
    rootStyle,
    bodyStyle,
    title,
    children,
    width,
    onClose,
}: PropsWithChildren<ISlidePaneProps>) => {
    const slidePrefixCls = 'dtc-slide-pane';

    const renderButton = () => {
        return (
            <img
                className={`${slidePrefixCls}-icon`}
                onClick={onClose}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAABwCAYAAAAE0LDPAAAAAXNSR0IArs4c6QAAAnlJREFUaEPtmk9IVHEQx78jufpw7ykouuEaBG6dEmrXOmRRt476VgvyEngKlNqQMu3PoSU7iCBq4CW2olNdRMRr7HasnnZb0y57WGODzUDjt/RIonbeyzfQYd51h/m8+c7395u3MOSs5Xexr4dKRLt5AhYJtbPRaNO7velo/4Bf6YhoB8B0R3vzNSLaNr8ECnBRRLTc0d583kBEAJU3J5o6HG0ZkgTs1OBATAxgqqghTIoCiPBeFABQSRggZFOxg/anC0ElYq9JlUglYhVgA9RFKhGrABugLlKJWAXYAHWRSsQqwAaoi1QiVgE2gHVRejKDUKgWQ1cvmj/XbMLfA3jA42dwVvPo7+tBd/xo8ICNzQLG7y3AskIYvz2IcEO9LwhbgcmWebGCpeUcEvEYBvrOBg8ol7cxOjaP4lYJqZEkIm2NniGeKjDZ3mQ/YPbJa7S1NiI1YntuuGeAgTx8lMHqx3XYvWdwOnHMUxW+AJufC7hzdwH1VggTt64gHLZYiC+Ayfb85QoWl3KIn+jEpeS54AHlb98xOjaHYrGEG8M2DkWaqkJ8V2CyZd86mJl7hdaWg7h5PVm14f8EMJD0zxM+ePkCuo4f+WsV/ycgm3MwMy8k0d4mp4ZtRIJusmvTxMlODNgB21T8oLlXRbK3B6cS3maDZxeJXnbudb315Wvl9AZ+XbsDpzseQ3/QA+fTRgET9wVHpvmqcNbWK6PSjEy/D9vkB+mnaLDq5D5b/L6x7+8iBbBNVolUItYDKpFKxCrABqiLVCJWATZAXaQSsQqwAeoilYhVgA1QFzESCS8wia9giS6Rma1B0TU40UU+sVVEoWXK6uugPwBjVkdxauLcgwAAAABJRU5ErkJggg=="
                alt="closeBtn"
            />
        );
    };

    return (
        <RcDrawer
            open={visible}
            placement="right"
            prefixCls={slidePrefixCls}
            mask={!showRenderButton}
            onClose={onClose}
            rootStyle={rootStyle}
            width={width}
        >
            {showRenderButton && renderButton()}
            <div className={`${slidePrefixCls}-header`}>{title}</div>
            <div className={`${wrapperClassName} ${slidePrefixCls}-body`} style={bodyStyle}>
                {children}
            </div>
        </RcDrawer>
    );
};

export default SlidePane;

import React from 'react';
import { ArrowsAltOutlined, ShrinkOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import Fullscreen from '../fullscreen';
import './style.scss';

export interface ToolModalProps {
    visible: boolean;
    toolbox?: React.ReactNode | string;
    fullscreen?: boolean | undefined;
    [propName: string]: any;
}

export interface ToolModalStates {
    isFullscreen: boolean;
    modalStyle?: React.CSSProperties;
    className?: string;
}
const defaultModalStyle: React.CSSProperties = {
    width: 800,
    minHeight: 200,
};
export default class DTModal extends React.Component<ToolModalProps, ToolModalStates> {
    state: ToolModalStates = {
        modalStyle: defaultModalStyle,
        className: '',
        isFullscreen: false,
    };
    exChangeModalStyle = (isFullscreen: boolean) => {
        const { style, width } = this.props;
        if (!isFullscreen) {
            this.setState({
                modalStyle: {
                    ...defaultModalStyle,
                    ...style,
                    width,
                },
                className: '',
            });
        } else {
            this.setState({
                modalStyle: {
                    width: '100%',
                    height: '100%',
                    margin: 0,
                    padding: 0,
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                },
                className: 'dtc-ant-modal-control',
            });
        }
    };
    onEleFullScreen = () => {
        this.setState(
            (prevState: any) => ({
                isFullscreen: !prevState.isFullscreen,
            }),
            () => {
                this.exChangeModalStyle(this.state.isFullscreen);
            }
        );
    };

    renderToolbox = () => {
        const { toolbox, fullscreen } = this.props;
        const { isFullscreen } = this.state;
        const icon = isFullscreen ? (
            <ShrinkOutlined className="alt" onClick={this.onEleFullScreen} />
        ) : (
            <ArrowsAltOutlined className="alt" onClick={this.onEleFullScreen} />
        );
        return (
            <div className="dtc-ant-modal_icon__position">
                {toolbox}
                {fullscreen ? (
                    <Fullscreen
                        fullIcon={<ArrowsAltOutlined className="alt" />}
                        exitFullIcon={<ShrinkOutlined className="alt" />}
                        isShowTitle={false}
                        className="dtc-icon__cursor"
                        onFullscreen={this.onEleFullScreen}
                    />
                ) : (
                    icon
                )}
            </div>
        );
    };

    render() {
        const { children, style, visible } = this.props;
        const { modalStyle, className } = this.state;
        const applyStyle: any = { ...style, ...modalStyle };
        return (
            <Modal
                {...this.props}
                className={className}
                width={modalStyle.width}
                style={applyStyle}
            >
                {visible && this.renderToolbox()}
                {visible && children}
            </Modal>
        );
    }
}

import * as React from 'react';
import { Modal, Icon } from 'antd';
import FullScreen from '../fullscreen';

const defaultModalStyle: any = {
    width: 800,
    minHeight: 200
};
export default class DTModal extends React.Component<any, any> {
    state: any = {
        modalStyle: defaultModalStyle,
        className: '',
        isFullscreen: false
    }
    exChangeModalStyle = (isFullscreen: boolean) => {
        const { style, width } = this.props;
        if (!isFullscreen) {
            this.setState({
                modalStyle: {
                    ...defaultModalStyle,
                    ...style,
                    width
                },
                className: ''
            })
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
                    bottom: 0
                },
                className: 'ant-modal-control'
            })
        }
    }
    onEleFullScreen = () => {
        this.setState((prevState: any) => ({
            isFullscreen: !prevState.isFullscreen
        }), () => {
            this.exChangeModalStyle(this.state.isFullscreen)
        })
    }

    renderToolbox = () => {
        const { toolbox, fullscreen } = this.props;
        const { isFullscreen } = this.state;
        const iconType = isFullscreen ? 'shrink' : 'arrows-alt';
        return (
            <div
                className="dt-modal-toolbox ant-modal_icon__position"
            >
                { toolbox }
                {
                    fullscreen ? <FullScreen
                        fullIcon={<Icon className="alt" type="arrows-alt" />}
                        exitFullIcon={<Icon className="alt" type="shrink" />}
                        isShowTitle={false}
                        className='icon__cursor'
                        onFullscreen={this.onEleFullScreen}
                    /> : <Icon className="alt icon__cursor" type={iconType} onClick={this.onEleFullScreen} />
                }
            </div>
        )
    }

    render () {
        const { children, style, visible } = this.props;
        const { modalStyle, className } = this.state;
        const applyStyle: any = { ...style, ...modalStyle };
        return <Modal
            {...this.props}
            className={className}
            width={modalStyle.width}
            style={applyStyle}
        >
            { visible && this.renderToolbox()}
            { visible && children }
        </Modal>
    }
}

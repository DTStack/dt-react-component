
import React from 'react'
export interface SwitchWindowProps {
    onSwitch?: (evt) => void;
    style?: React.CSSProperties;
}
/**
 * 窗口切换事件监听，
 * 用法：
 * <SwitchWindow onSwitch={}></SwitchWindow>
 */
class SwitchWindow extends React.Component<SwitchWindowProps, any> {
    componentDidMount () {
        this.initEvent();
    }

    listener = (e: any) => {
        const { onSwitch } = this.props;
        console.log('switch window is focusing!', window.location)
        if (onSwitch) onSwitch(e);
    }

    componentWillUnmount () {
        window.removeEventListener('focus', this.listener);
    }

    initEvent = () => {
        window.addEventListener('focus', this.listener);
    }

    render () {
        return (
            <React.Fragment>
                {
                    this.props.children
                }
            </React.Fragment>
        )
    }
}

export default SwitchWindow

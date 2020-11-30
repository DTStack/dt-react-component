import React from 'react'

interface IProps {
    onResize?: Function;
    children: React.ReactNode;
}
export default class Resize extends React.Component<IProps, any> {
    componentDidMount () {
        window.addEventListener('resize', this.resize, false)
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.resize, false);
    }

    resize = () => {
        const { onResize } = this.props;
        if (onResize) onResize()
    }

    render () {
        return this.props.children
    }
}

import React from 'react';
import KeyCombiner from './listener';

export interface KeyEventListenerProps {
    onKeyDown?: (e: MouseEvent) => void;
    onKeyUp?: (e: MouseEvent) => void;
    children?: React.ReactNode;
}

export default class KeyEventListener extends React.Component<KeyEventListenerProps, any> {
    static KeyCombiner = KeyCombiner;
    componentDidMount() {
        addEventListener('keydown', this.bindEvent as any, false);
        addEventListener('keyup', this.bindEvent as any, false);
    }

    componentWillUnmount() {
        removeEventListener('keydown', this.bindEvent as any, false);
        removeEventListener('keyup', this.bindEvent as any, false);
    }

    bindEvent = (target: MouseEvent) => {
        const { onKeyDown, onKeyUp } = this.props;
        const isKeyDown = target.type === 'keydown';

        if (isKeyDown && onKeyDown) {
            onKeyDown(target);
        } else if (!isKeyDown && onKeyUp) {
            onKeyUp(target);
        }
    };

    render() {
        return this.props.children;
    }
}

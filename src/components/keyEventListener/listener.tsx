import React from 'react';

export interface KeyCombinerProps {
    onTrigger?: (evt) => void;
    keyMap?: {
        [key: string]: boolean;
    };
    children?: React.ReactNode;
}

export interface KeyCombinerState {
    currentKeys: {
        [propName: string]: any;
    };
}

export default class KeyCombiner extends React.Component<KeyCombinerProps, KeyCombinerState> {
    constructor(props: KeyCombinerProps) {
        super(props);
        this.state = {
            currentKeys: {},
        };
    }

    componentDidMount() {
        addEventListener('keydown', this.bindEvent, false);
        addEventListener('keyup', this.bindEvent, false);
    }

    componentWillUnmount() {
        removeEventListener('keydown', this.bindEvent, false);
        removeEventListener('keyup', this.bindEvent, false);
        this.setState({ currentKeys: {} });
    }

    bindEvent = (target: KeyboardEvent) => {
        const { onTrigger, keyMap } = this.props;

        const keyCode = target.keyCode;
        const isKeyDown = target.type === 'keydown';

        if (!isKeyDown) {
            this.setState({
                currentKeys: {},
            });
            return;
        }

        if (keyMap[keyCode] === true) {
            const currentKeys = Object.assign(this.state.currentKeys, {
                [keyCode]: isKeyDown,
            });

            this.setState({
                currentKeys,
            });

            let keyAllRight = true;
            for (const key in keyMap) {
                if (!currentKeys[key]) {
                    keyAllRight = false;
                    break;
                }
            }
            if (keyAllRight) {
                onTrigger(target);
            }
        }
    };

    render() {
        return <span data-testid="test_keyCombiner">{this.props.children}</span>;
    }
}

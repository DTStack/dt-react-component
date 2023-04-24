import React, { useEffect } from 'react';
import KeyCombiner from './listener';

export interface IKeyEventListenerProps {
    onKeyDown?: (e: KeyboardEvent) => void;
    onKeyUp?: (e: KeyboardEvent) => void;
    children?: React.ReactNode;
}
interface CompoundedComponent extends React.ForwardRefExoticComponent<IKeyEventListenerProps> {
    KeyCombiner: typeof KeyCombiner;
}

const InternalKeyEventListener = ({ onKeyDown, onKeyUp, children }: IKeyEventListenerProps) => {
    useEffect(() => {
        handleAddEventListener();
        return () => {
            handleRemoveEventListener();
        };
    }, []);

    const handleAddEventListener = () => {
        addEventListener('keydown', bindEvent, false);
        addEventListener('keyup', bindEvent, false);
    };
    const handleRemoveEventListener = () => {
        removeEventListener('keydown', bindEvent, false);
        removeEventListener('keyup', bindEvent, false);
    };
    const bindEvent = (target: KeyboardEvent) => {
        const isKeyDown = target.type === 'keydown';
        if (isKeyDown) {
            onKeyDown?.(target);
        } else {
            onKeyUp?.(target);
        }
    };
    return children;
};

const KeyEventListener = InternalKeyEventListener as CompoundedComponent;

KeyEventListener.KeyCombiner = KeyCombiner;

export default KeyEventListener;

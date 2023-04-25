import React, { useCallback, useEffect, useRef, useState } from 'react';

export interface IKeyCombinerProps {
    onTrigger?: (evt: any) => void;
    keyMap?: {
        [key: string]: boolean;
    };
    children?: React.ReactNode;
}

export default ({ onTrigger, keyMap, children }: IKeyCombinerProps) => {
    const [currentKeys, setCurrentKeys] = useState<{ [propName: string]: boolean }>({});
    const currentKeysRef = useRef(currentKeys);
    useEffect(() => {
        const eventListener = (ev: KeyboardEvent) => bindEvent(ev);
        handleAddEventListener(eventListener);
        return () => {
            handleRemoveEventListener(eventListener);
        };
    }, []);
    useEffect(() => {
        currentKeysRef.current = currentKeys;
    }, [currentKeys]);

    const handleAddEventListener = (eventListener: (ev: KeyboardEvent) => void) => {
        addEventListener('keydown', eventListener, false);
        addEventListener('keyup', eventListener, false);
    };
    const handleRemoveEventListener = (eventListener: (ev: KeyboardEvent) => void) => {
        removeEventListener('keydown', eventListener, false);
        removeEventListener('keyup', eventListener, false);
        setCurrentKeys({});
    };
    const bindEvent = useCallback(
        (target: KeyboardEvent) => {
            const keyCode = target.keyCode || target.code;
            const isKeyDown = target.type === 'keydown';

            if (!isKeyDown) {
                setCurrentKeys({});
                return;
            }

            if (keyMap?.[keyCode] === true) {
                const newCurrentKeys = Object.assign(currentKeysRef.current, {
                    [keyCode]: isKeyDown,
                });

                setCurrentKeys(newCurrentKeys);

                let keyAllRight = true;
                for (const key in keyMap) {
                    if (!newCurrentKeys[key]) {
                        keyAllRight = false;
                        break;
                    }
                }
                if (keyAllRight) {
                    onTrigger?.(target);
                }
            }
        },
        [onTrigger, keyMap]
    );

    return <span>{children}</span>;
};

import React, { useEffect, useState } from 'react';

export interface IKeyCombinerProps {
    onTrigger?: (evt: any) => void;
    keyMap?: {
        [key: string]: boolean;
    };
    children?: React.ReactNode;
}

export default ({ onTrigger, keyMap, children }: IKeyCombinerProps) => {
    const [currentKeys, setCurrentKeys] = useState<{ [propName: string]: boolean }>({});
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
        setCurrentKeys({});
    };
    const bindEvent = (target: KeyboardEvent) => {
        const keyCode = target.keyCode || target.code;
        const isKeyDown = target.type === 'keydown';

        if (!isKeyDown) {
            setCurrentKeys({});
            return;
        }

        if (keyMap?.[keyCode] === true) {
            const newCurrentKeys = Object.assign(currentKeys, {
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
    };
    return <span>{children}</span>;
};

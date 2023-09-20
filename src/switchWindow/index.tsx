import { useCallback, useEffect } from 'react';

const useWindowSwitchListener = (onSwitch: (evt: FocusEvent) => void) => {
    useEffect(() => {
        const eventListener = (e: FocusEvent) => listener(e);
        handleAddListener(eventListener);
        return () => {
            handleRemoveListener(eventListener);
        };
    }, []);
    const listener = useCallback(
        (e: FocusEvent) => {
            return onSwitch(e);
        },
        [onSwitch]
    );
    const handleAddListener = (eventListener: (e: FocusEvent) => void) => {
        window.addEventListener('focus', eventListener);
    };
    const handleRemoveListener = (eventListener: (e: FocusEvent) => void) => {
        window.removeEventListener('focus', eventListener);
    };
};

export default useWindowSwitchListener;

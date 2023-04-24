import { useEffect } from 'react';
export interface ISwitchWindowProps {
    onSwitch?: (evt: FocusEvent) => void;
}

const useWindowSwitchListener = ({ onSwitch }: ISwitchWindowProps) => {
    useEffect(() => {
        handleAddListener();
        return () => {
            handleRemoveListener();
        };
    }, []);
    const listener = (e: FocusEvent) => {
        console.log('switch window is focusing!', window.location);
        onSwitch?.(e);
    };
    const handleAddListener = () => {
        window.addEventListener('focus', listener);
    };
    const handleRemoveListener = () => {
        window.removeEventListener('focus', listener);
    };
};

export default useWindowSwitchListener;

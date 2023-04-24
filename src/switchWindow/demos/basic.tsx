import React, { useState } from 'react';
import { useWindowSwitchListener } from 'dt-react-component';

export default () => {
    const [msg, setMsg] = useState('hello world');
    const handleSwitch = () => {
        setMsg('window listener');
        console.log('window listener');
    };
    useWindowSwitchListener({ onSwitch: handleSwitch });

    return (
        <div
            style={{
                height: '100%',
                width: '100%',
            }}
        >
            {msg}
        </div>
    );
};

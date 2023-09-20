import React from 'react';
import { KeyEventListener } from 'dt-react-component';

const { KeyCombiner } = KeyEventListener;

export default () => {
    return (
        <KeyCombiner
            onTrigger={(evt) => {
                evt.preventDefault();
                console.log('command+shift+f action');
            }}
            keyMap={{
                70: true,
                91: true,
                16: true,
            }}
        >
            <div>尝试按下 command+shift+f 看看控制台是否监听了键盘事件</div>
        </KeyCombiner>
    );
};

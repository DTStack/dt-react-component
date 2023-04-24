import React from 'react';
import { KeyEventListener } from 'dt-react-component';

export default () => {
    return (
        <KeyEventListener
            onKeyDown={(evt) => {
                console.log('onkeyDown', evt);
            }}
        >
            {<div>尝试按下任意键盘，看看控制台打印结果</div>}
        </KeyEventListener>
    );
};

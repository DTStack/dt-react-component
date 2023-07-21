import React, { useState } from 'react';
import { Switch } from 'antd';
import { Fullscreen } from 'dt-react-component';

export default () => {
    const [themeDark, setThemeDark] = useState(false);
    const changeTheme = (value: boolean) => {
        setThemeDark(value);
    };
    return (
        <>
            <Switch
                checked={themeDark}
                onChange={changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
            />
            <br />
            <br />
            <Fullscreen themeDark={themeDark} />
        </>
    );
};

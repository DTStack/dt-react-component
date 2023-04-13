import { ArrowsAltOutlined, ShrinkOutlined } from '@ant-design/icons';
import { Fullscreen } from 'dt-react-component';
import React from 'react';

export default () => {
    const iconStyle = {
        width: 12,
        height: 12,
        marginRight: 5,
    };

    return (
        <Fullscreen
            iconStyle={iconStyle}
            fullIcon={
                <>
                    <ArrowsAltOutlined />
                    全屏
                </>
            }
            exitFullIcon={
                <>
                    <ShrinkOutlined />
                    退出全屏
                </>
            }
        />
    );
};

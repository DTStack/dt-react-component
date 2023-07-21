import React from 'react';
import { ArrowsAltOutlined, ShrinkOutlined } from '@ant-design/icons';
import { Fullscreen } from 'dt-react-component';

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
                <div style={{ cursor: 'pointer' }}>
                    <ArrowsAltOutlined />
                    全屏
                </div>
            }
            exitFullIcon={
                <div style={{ cursor: 'pointer' }}>
                    <ShrinkOutlined />
                    退出全屏
                </div>
            }
        />
    );
};

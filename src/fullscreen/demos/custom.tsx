import React from 'react';
import { FullscreenExitOutlined, FullscreenOutlined } from '@dtinsight/react-icons';
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
                    <FullscreenOutlined />
                    全屏
                </div>
            }
            exitFullIcon={
                <div style={{ cursor: 'pointer' }}>
                    <FullscreenExitOutlined />
                    退出全屏
                </div>
            }
        />
    );
};

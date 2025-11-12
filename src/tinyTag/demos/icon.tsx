import React from 'react';
import { Space } from 'antd';
import { TinyTag } from 'dt-react-component';

import './style.scss';

// 简单的图标组件示例
const StarIcon = () => <span style={{ fontSize: '12px' }}>⭐</span>;
const FireIcon = () => <span style={{ fontSize: '12px' }}>🔥</span>;
const CrownIcon = () => <span style={{ fontSize: '12px' }}>👑</span>;
const ThunderIcon = () => <span style={{ fontSize: '12px' }}>⚡</span>;

export default () => {
    return (
        <Space size={6} direction="vertical">
            <Space size={6}>
                <TinyTag icon={<StarIcon />} value="推荐" />
                <TinyTag icon={<FireIcon />} value="热门" />
                <TinyTag icon={<CrownIcon />} value="会员" />
                <TinyTag icon={<ThunderIcon />} value="快速" />
            </Space>
            <Space size={6}>
                <TinyTag className="data-tag" icon={<StarIcon />} value="数据驱动" />
                <TinyTag className="ued-tag" icon={<FireIcon />} value="UED" />
            </Space>
            <Space size={6}>
                <span>自定义 SVG 图标：</span>
                <TinyTag
                    icon={
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="6" cy="6" r="5" />
                        </svg>
                    }
                    value="自定义"
                />
            </Space>
        </Space>
    );
};

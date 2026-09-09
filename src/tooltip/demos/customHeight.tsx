import React from 'react';
import { Tooltip } from 'dt-react-component';

const content = Array.from({ length: 12 }, (_, index) => (
    <div key={index}>这是第 {index + 1} 行自定义高度的提示内容</div>
));

export default function CustomHeight() {
    return (
        <Tooltip
            title={<div>{content}</div>}
            overlayInnerStyle={{
                maxHeight: 160,
                overflowY: 'auto',
            }}
        >
            <span>点击查看自定义高度 Tooltip</span>
        </Tooltip>
    );
}

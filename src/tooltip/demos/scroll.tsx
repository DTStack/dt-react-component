import React from 'react';
import { Tooltip } from 'dt-react-component';

const content = Array.from({ length: 30 }, (_, index) => (
    <div key={index}>这是第 {index + 1} 行较长的提示内容</div>
));

export default function Scroll() {
    return (
        <Tooltip title={<div>{content}</div>} trigger="click">
            <span>点击查看长内容 Tooltip</span>
        </Tooltip>
    );
}

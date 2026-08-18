import React from 'react';
import { Button } from 'antd';
import { Popover } from 'dt-react-component';

const content = Array.from({ length: 30 }, (_, index) => (
    <div key={index}>这是第 {index + 1} 行较长的 Popover 内容</div>
));

export default function Scroll() {
    return (
        <Popover title="长内容" content={<div>{content}</div>} trigger="click">
            <Button>点击查看长内容 Popover</Button>
        </Popover>
    );
}

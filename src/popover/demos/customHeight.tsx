import React, { CSSProperties } from 'react';
import { Button } from 'antd';
import { Popover } from 'dt-react-component';

const content = Array.from({ length: 12 }, (_, index) => (
    <div key={index}>这是第 {index + 1} 行自定义高度的 Popover 内容</div>
));

export default function CustomHeight() {
    return (
        <Popover
            title="自定义高度"
            content={<div>{content}</div>}
            trigger="click"
            overlayStyle={{ '--max-height': '160px' } as CSSProperties}
        >
            <Button>点击查看自定义高度 Popover</Button>
        </Popover>
    );
}

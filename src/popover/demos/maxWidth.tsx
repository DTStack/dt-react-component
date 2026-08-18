import React from 'react';
import { Button } from 'antd';
import { Popover } from 'dt-react-component';

export default function MaxWidth() {
    return (
        <Popover
            title="最大宽度"
            content="这是一段非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的 Popover 内容，用于展示浮层最大宽度为 400px 时的换行效果。"
        >
            <Button>最大宽度 Popover</Button>
        </Popover>
    );
}

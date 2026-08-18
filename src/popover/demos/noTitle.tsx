import React from 'react';
import { Button } from 'antd';
import { Popover } from 'dt-react-component';

export default function NoTitle() {
    return (
        <Popover content="这是一段没有标题的 Popover 内容">
            <Button>无标题 Popover</Button>
        </Popover>
    );
}

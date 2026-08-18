import React from 'react';
import { Button } from 'antd';
import { Popover } from 'dt-react-component';

export default function Basic() {
    return (
        <Popover title="标题" content="这是一段 Popover 内容">
            <Button type="primary">Hover me</Button>
        </Popover>
    );
}

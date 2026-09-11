import React from 'react';
import { Tooltip } from 'dt-react-component';

export default function Basic() {
    return (
        <Tooltip title="这是一段简单的提示文案">
            <span>默认 Tooltip</span>
        </Tooltip>
    );
}

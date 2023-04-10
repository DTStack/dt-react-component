import React, { useState } from 'react';
import { Button } from 'antd';
import { Dropdown } from 'dt-react-component';

export default () => {
    const [selected, setSelected] = useState<number[]>([2]);

    return (
        <Dropdown.Select
            value={selected}
            options={[
                { label: '选项一', value: 1 },
                { label: '选项二', value: 2, disabled: true },
            ]}
            onChange={(checked) => setSelected(checked as number[])}
        >
            <Button type="link">打开下拉</Button>
        </Dropdown.Select>
    );
};

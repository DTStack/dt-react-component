import React, { useState } from 'react';
import { Button } from 'antd';
import { Dropdown } from 'dt-react-component';

export default () => {
    const [selected, setSelected] = useState<number[]>([2]);

    return (
        <Dropdown.Select
            value={selected}
            options={new Array(10000).fill('').map((_, idx) => idx)}
            onChange={(val) => setSelected(val as number[])}
            onSubmit={() => {
                console.log('submit');
            }}
        >
            <Button type="link">10000 条数据</Button>
        </Dropdown.Select>
    );
};

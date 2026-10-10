import React from 'react';
import { Select } from 'dt-react-component';

const options = Array.from({ length: 20 }, (_, index) => ({
    label: `选项 ${index + 1}`,
    value: index + 1,
}));

export default () => (
    <Select
        mode="multiple"
        maxRows={3}
        style={{ width: 320 }}
        defaultValue={[1, 2, 3, 4, 5, 6, 7, 8]}
        options={options}
        placeholder="请选择"
    />
);

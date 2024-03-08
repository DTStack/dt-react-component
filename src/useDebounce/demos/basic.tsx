import React, { useState } from 'react';
import { Select } from 'antd';
import { useDebounce } from 'dt-react-component';

export default () => {
    const [options, setOptions] = useState<{ label: string; value: string }[]>([]);

    const debounceSearch = useDebounce(
        (input: string) => {
            const newOptions = input ? [{ label: input, value: input }] : [];
            setOptions(newOptions);
        },
        500,
        {
            maxWait: 1000,
        }
    );

    return (
        <Select
            style={{ width: 430 }}
            showSearch
            placeholder="请输入进行搜索"
            options={options}
            onSearch={debounceSearch}
        />
    );
};

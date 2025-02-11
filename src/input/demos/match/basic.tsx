import React, { useState } from 'react';
import { Radio } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Input } from 'dt-react-component';

export default () => {
    const [size, setSize] = useState<SizeType>('middle');
    return (
        <>
            <Radio.Group
                optionType="button"
                value={size}
                options={[
                    { label: 'small', value: 'small' },
                    { label: 'middle', value: 'middle' },
                    { label: 'large', value: 'large' },
                ]}
                onChange={(e) => setSize(e.target.value)}
                style={{ marginBottom: 16 }}
            />
            <Input.Match
                size={size}
                placeholder="按名称搜索"
                onChange={(e) => console.log('e', e.target.value)}
                onTypeChange={(type) => console.log('onTypeChange:', type)}
                onSearch={(value, searchType) => console.log('onSearch:', value, searchType)}
            />
        </>
    );
};

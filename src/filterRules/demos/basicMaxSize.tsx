import React, { useState } from 'react';
import { Input, InputNumber, Space } from 'antd';
import { FilterRules } from 'dt-react-component';
import { IComponentProps } from 'dt-react-component/filterRules';

import { INIT_DATA, INIT_ROW_VALUES, IRow } from './constants';

const MyInput = ({ rowValues: { input }, rowKey, onChange }: IComponentProps<IRow>) => (
    <Input value={input} onChange={(e) => onChange?.(rowKey, { input: e.target.value })} />
);

export default () => {
    const [data, setData] = useState(INIT_DATA);
    const [maxSize, setMaxSize] = useState(2);

    return (
        <>
            <Space style={{ marginBottom: 16 }}>
                <span>最大子节点个数:</span>
                <InputNumber
                    value={maxSize}
                    min={0}
                    precision={0}
                    onChange={(value: number | null) => setMaxSize(value ?? 0)}
                />
            </Space>
            <FilterRules<IRow>
                component={(props) => <MyInput {...props} />}
                value={data}
                maxSize={maxSize}
                onChange={(value: any) => setData(value)}
                initValues={INIT_ROW_VALUES}
            />
        </>
    );
};

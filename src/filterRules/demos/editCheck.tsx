import React, { useState } from 'react';
import { Alert, Input } from 'antd';
import { FilterRules } from 'dt-react-component';
import { IComponentProps } from 'dt-react-component/filterRules';

import { INIT_CHECK_DATA, INIT_ROW_VALUES, IRow } from './constants';

const MyInput = ({ rowValues: { input }, disabled, rowKey, onChange }: IComponentProps<IRow>) => (
    <Input
        value={input}
        disabled={disabled}
        onChange={(e) => onChange?.(rowKey, { input: e.target.value })}
    />
);

export default () => {
    const [data, setData] = useState(INIT_CHECK_DATA);

    return (
        <>
            <Alert
                message="适用于部分数据禁用且可以编辑其他数据。常见业务情景：上一次保存的数据不可修改，但需要在当前基础上继续新增数据。"
                style={{ marginBottom: 16 }}
            />
            <FilterRules<IRow>
                component={(props) => <MyInput {...props} />}
                value={data}
                onChange={(value: any) => setData(value)}
                initValues={INIT_ROW_VALUES}
            />
        </>
    );
};

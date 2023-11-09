import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { FilterRules } from 'dt-react-component';
import { IComponentProps } from 'dt-react-component/filterRules';
import shortid from 'shortid';

export const INIT_ROW_VALUES = {
    input: '',
};

export const INIT_DATA = {
    key: shortid(),
    level: 0,
    rowValues: {
        ...INIT_ROW_VALUES,
    },
};

export type IRow = typeof INIT_ROW_VALUES;

const MyInput = ({ rowValues: { input }, rowKey, onChange }: IComponentProps<IRow>) => (
    <Input value={input} onChange={(e) => onChange?.(rowKey, { input: e.target.value })} />
);

export default () => {
    const [data, setData] = useState(INIT_DATA);

    return (
        <>
            <FilterRules<IRow>
                component={(props) => <MyInput {...props} />}
                value={data}
                onChange={(value: any) => setData(value)}
                initValues={INIT_ROW_VALUES}
            />

            <Button onClick={() => console.log(data)}>控制台查看数据</Button>
        </>
    );
};

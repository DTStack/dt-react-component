import React, { useState } from 'react';
import { Button, Input } from 'antd';
import shortid from 'shortid';

import FilterRules from '..';

const INIT_ROW_VALUES = {
    input: '',
};

const INIT_DATA = {
    key: shortid(),
    level: 0,
    formValues: {
        ...INIT_ROW_VALUES,
    },
};

type IRow = typeof INIT_ROW_VALUES;

const MyInput = ({
    input,
    rowKey,
    onChange,
}: {
    input?: string;
    rowKey?: string;
    onChange?: (key: string, values: Partial<IRow>) => void;
}) => <Input value={input} onChange={(e) => onChange?.(rowKey ?? '', { input: e.target.value })} />;

export default () => {
    const [data, setData] = useState(INIT_DATA);

    return (
        <>
            <FilterRules<IRow>
                component={<MyInput />}
                value={data}
                onChange={(value: any) => setData(value)}
            />

            <Button onClick={() => console.log(data)}>控制台查看数据</Button>
        </>
    );
};

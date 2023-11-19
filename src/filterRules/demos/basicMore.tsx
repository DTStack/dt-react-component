import React, { useState } from 'react';
import { Alert, Input } from 'antd';
import { FilterRules } from 'dt-react-component';
import { IComponentProps } from 'dt-react-component/filterRules';

import { INIT_ROW_VALUES, IRow, MORE_INIT_DATA } from './constants';

const MyInput = ({ rowValues: { input }, rowKey, onChange }: IComponentProps<IRow>) => (
    <Input value={input} onChange={(e) => onChange?.(rowKey, { input: e.target.value })} />
);

export default () => {
    const [data, setData] = useState(MORE_INIT_DATA);

    return (
        <>
            <Alert
                message="可以通过操作按钮增加删除数据，切换且或节点内容"
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

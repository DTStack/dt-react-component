import React from 'react';
import { EasySelect } from 'dt-react-component';

export default () => {
    return (
        <EasySelect
            style={{ width: '100%' }}
            filterLocal
            dataSource={[
                { value: 1, label: '张三' },
                { value: 2, label: '李四' },
            ]}
            onChange={(val: any, option: any) => {
                console.log(val, option);
            }}
        />
    );
};

import React from 'react';
import { EasySelect } from 'dt-react-component';

export default () => {
    return (
        <EasySelect
            style={{ width: '100%' }}
            filterLocal
            dataSource={['文案1', 234]}
            onChange={(val: any, option: any) => {
                console.log(val, option);
            }}
        />
    );
};

import React from 'react';
import { EasySelect } from 'dt-react-component';

const options: string[] = [];
for (let i = 0; i < 100; i++) {
    const value = i.toString(36);
    options.push(value);
}

export default () => {
    return (
        <EasySelect
            style={{ width: '100%' }}
            filterLocal
            dataSource={options}
            onChange={(val: any, option: any) => {
                console.log(val, option);
            }}
        />
    );
};

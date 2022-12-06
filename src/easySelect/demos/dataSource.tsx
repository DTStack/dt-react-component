import React from 'react';
import { EasySelect } from 'dt-react-component';

export default () => {
    return (
        <EasySelect
            style={{ width: '100%' }}
            dataSource={[
                { value: 1, label: '张三' },
                { value: 2, label: '李四' },
            ]}
        />
    );
};

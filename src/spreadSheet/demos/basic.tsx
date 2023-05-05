import React from 'react';
import { SpreadSheet } from 'dt-react-component';

export default () => {
    return (
        <SpreadSheet
            columns={['name', 'gender', 'age', 'address']}
            data={[
                ['zhangsan', 'male', '20', 'xihu'],
                ['lisi', 'male', '18', 'yuhang'],
            ]}
        />
    );
};

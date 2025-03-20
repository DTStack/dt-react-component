import React from 'react';
import { SpreadSheet } from 'dt-react-component';

export default () => {
    return (
        <>
            <span>右键菜单：复制值、复制列名</span>
            <SpreadSheet
                columns={['name', 'gender', 'age', 'address']}
                data={[
                    ['zhangsan', 'male', '20', 'xihu'],
                    ['lisi', 'male', '18', 'yuhang'],
                    ['   前面有空格', '后面有空格   ', '中间有  空 格', 'yuhang'],
                ]}
                options={{
                    trimWhitespace: false,
                    copyTypes: ['copyData', 'copyHeaders'],
                }}
            />

            <br />
            <span>右键菜单：复制值、复制列名、复制列名和值</span>
            <SpreadSheet
                columns={['name', 'gender', 'age', 'address']}
                data={[
                    ['zhangsan', 'male', '20', 'xihu'],
                    ['lisi', 'male', '18', 'yuhang'],
                    ['   前面有空格', '后面有空格   ', '中间有  空 格', 'yuhang'],
                ]}
                options={{
                    trimWhitespace: false,
                    copyTypes: ['copyData', 'copyHeaders', 'copyHeadersAndData'],
                }}
            />
        </>
    );
};

import React, { useRef, useState } from 'react';
import { Button } from 'antd';
import { SpreadSheet } from 'dt-react-component';

export default () => {
    const _columns = ['name', 'gender', 'age', 'address'];
    const _data = [
        ['zhangsan', 'male', '20', 'xihu'],
        ['lisi', 'male', '18', 'yuhang'],
        ['   前面有空格', '后面有空格   ', '中间有  空 格', 'yuhang'],
    ];
    const [columns, setColumns] = useState(_columns);
    const [data, setData] = useState(_data);
    const hotTableInstanceRef = useRef<any>(null);

    const handleData = () => {
        setData(data?.length === 2 ? _data : _data.slice(0, 2));
    };

    const handleColumns = () => {
        setColumns(columns?.length === 3 ? _columns : _columns.slice(0, 3));
    };

    const handleRef = () => {
        console.log(hotTableInstanceRef?.current?.hotInstance?.getData());
    };

    return (
        <>
            <Button style={{ margin: '0 12px 12px 0' }} type="primary" onClick={handleColumns}>
                改变列
            </Button>
            <Button style={{ margin: '0 12px 12px 0' }} type="primary" onClick={handleData}>
                改变数据
            </Button>
            <Button style={{ margin: '0 12px 12px 0' }} type="primary" onClick={handleRef}>
                使用 HotTable 示例（打印数据）
            </Button>

            <SpreadSheet
                ref={hotTableInstanceRef}
                columns={columns}
                data={data}
                options={{
                    trimWhitespace: false,
                    copyTypes: ['copyData', 'copyHeaders', 'copyHeadersAndData'],
                }}
            />
        </>
    );
};

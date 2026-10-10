import React, { useState } from 'react';
import { Select } from 'dt-react-component';

export default () => {
    const [keyword, setKeyword] = useState('');
    return (
        <>
            <p>最近一次搜索：{keyword || '尚未输入'}</p>
            <Select
                showSearch
                style={{ width: 320 }}
                placeholder="试试输入中文"
                options={[
                    { label: '中文搜索', value: 'chinese' },
                    { label: '数据分析', value: 'analysis' },
                ]}
                optionFilterProp="label"
                onSearch={setKeyword}
            />
        </>
    );
};

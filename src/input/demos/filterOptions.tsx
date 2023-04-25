import React from 'react';
import { Input } from 'dt-react-component';

export default () => {
    return (
        <Input.Match
            filterOptions={['front']}
            placeholder="按名称搜索"
            onChange={(e) => console.log('e', e.target.value)}
            onTypeChange={(type) => console.log('onTypeChange:', type)}
            onSearch={(value, searchType) => console.log('onSearch:', value, searchType)}
        />
    );
};

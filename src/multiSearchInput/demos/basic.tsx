import React from 'react';
import { MultiSearchInput } from 'dt-react-component';

export default () => {
    return (
        <MultiSearchInput
            placeholder="按名称搜索"
            style={{ width: '250px', height: '26px' }}
            searchType="fuzzy"
            onChange={(value: string) => {
                console.log('value', value);
            }}
            onTypeChange={(type: string) => {
                console.log(type);
            }}
            onSearch={(value, searchType) => {
                console.log(value, searchType);
            }}
        />
    );
};

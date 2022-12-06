import React, { useState } from 'react';
import { MultiSearchInput } from 'dt-react-component';

export default () => {
    const [searchType, setSearchType] = useState<any>('fuzzy');
    const [searchName, setSearchName] = useState('');

    return (
        <MultiSearchInput
            placeholder="按名称搜索"
            value={searchName}
            searchType={searchType}
            onChange={(value) => {
                setSearchName(value);
            }}
            onTypeChange={(type) => {
                setSearchType(type);
            }}
        />
    );
};

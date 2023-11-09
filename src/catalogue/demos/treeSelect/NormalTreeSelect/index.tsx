import React, { ReactNode, useState } from 'react';
import { TreeSelectProps } from 'antd';
import { Catalogue } from 'dt-react-component';

import { initTreeSelectData } from '../data';

export const NormalTreeSelect = () => {
    const [dataSource] = useState<TreeSelectProps['treeData']>(initTreeSelectData);
    const [selectedLabelList, setSelectedLabelList] = useState<ReactNode[]>([]);
    const handleChange: TreeSelectProps['onChange'] = (value, labelList, _) => {
        setSelectedLabelList(labelList);
    };
    console.log(selectedLabelList, '--selectedLabelList');
    return (
        <div style={{ display: 'flex', background: '#eee', padding: 20 }}>
            <Catalogue.TreeSelect
                treeData={dataSource}
                style={{ width: 200 }}
                showSearch
                multiple
                onChange={handleChange}
            />
            <p
                style={{
                    marginLeft: 12,
                    marginBottom: 0,
                    padding: 10,
                    flex: 1,
                    background: '#fff',
                }}
            >
                <p>
                    {selectedLabelList?.length
                        ? `选中了 ${selectedLabelList?.join?.('、')}`
                        : '未选中'}
                </p>
            </p>
        </div>
    );
};

export default NormalTreeSelect;

import React from 'react';

import { Catalogue } from 'dt-react-component';

import { initTreeSelectData } from './data';

export const NormalTreeSelect = () => {
    return <Catalogue.TreeSelect treeData={initTreeSelectData} style={{ width: 200 }} showSearch />;
};

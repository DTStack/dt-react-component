import React from 'react';

import type { IDtTreeProps } from './components/dtTree';
import { DtTree, DtTreeSelect } from './components';

export type { IDtTreeDataItem, IDtTreeProps } from './components/dtTree';
export type { IDtTreeHeaderProps } from './components/dtTree/components/header';
export { getExpendKeysByQuery, getIcon, loopTree } from './components/dtTree/helpers';

function Catalogue(props: IDtTreeProps) {
    return <DtTree {...props} />;
}

Catalogue.Tree = DtTree;
Catalogue.TreeSelect = DtTreeSelect;

export default Catalogue;

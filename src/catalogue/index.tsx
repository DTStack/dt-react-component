import React from 'react';

import type { ITreeProps } from './components/tree';
import { Tree, TreeSelect } from './components';

export type { ITreeDataItem, ITreeProps } from './components/tree';
export type { ITreeHeaderProps } from './components/tree/components/header';
export { getExpendKeysByQuery, getIcon, loopTree } from './components/tree/helpers';

function Catalogue(props: ITreeProps) {
    return <Tree {...props} />;
}

Catalogue.Tree = Tree;
Catalogue.TreeSelect = TreeSelect;

export default Catalogue;

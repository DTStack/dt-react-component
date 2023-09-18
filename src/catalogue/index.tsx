import React from 'react';
import { DtTree, DtTreeSelect } from './components';
import type { IProps } from './components/dtTree';

export type {
    IProps as ITreeProps,
    ISuperTreeDataItem as ITreeDataItem,
} from './components/dtTree';
export type { IProps as ITreeHeaderProps } from './components/dtTree/components/header';
export { getExpendKeysByQuery, getIcon, loopTree } from './components/dtTree/helpers';

function Catalogue(props: IProps) {
    return <DtTree {...props} />;
}

Catalogue.Tree = DtTree;
Catalogue.TreeSelect = DtTreeSelect;

export default Catalogue;

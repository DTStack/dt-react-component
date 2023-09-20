import React from 'react';
import type { TreeSelectProps } from 'antd';
import { TreeSelect } from 'antd';

export interface IProps extends TreeSelectProps {}

export default (props: IProps) => <TreeSelect {...props} />;

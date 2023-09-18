import type { TreeSelectProps } from 'antd';
import { TreeSelect } from 'antd';
import React from 'react';

export interface IProps extends TreeSelectProps {}

export default (props: IProps) => <TreeSelect {...props} />;

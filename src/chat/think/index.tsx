import React, { useState } from 'react';
import type { ReactMarkdownProps } from 'react-markdown/lib/complex-types';
import { UpOutlined } from '@dtinsight/react-icons';

import Flex from '../../flex';
import GradientText from '../gradientText';
import './index.scss';

export interface IThinkProps {
    data: ReactMarkdownProps;
    loading?: boolean;
}
export default function Think({ data, loading }: IThinkProps) {
    const [collapse, setCollapse] = useState(false);
    return (
        <div className="dtc__custom__think">
            <Flex
                className="dtc__custom__think__btn"
                gap={4}
                align="center"
                onClick={() => setCollapse((p) => !p)}
            >
                {loading ? <GradientText gradient>思考中...</GradientText> : '已完成深度思考'}
                <UpOutlined
                    color="#64698B"
                    size={12}
                    style={{
                        transform: collapse ? 'rotate(180deg)' : 'none',
                    }}
                />
            </Flex>
            {!collapse && (
                <div className="dtc__custom__think__content">
                    <div className="dtc__custom__think__line" />
                    <div className="dtc__custom__think__text">{data.children}</div>
                </div>
            )}
        </div>
    );
}

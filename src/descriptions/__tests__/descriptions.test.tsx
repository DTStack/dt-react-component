import React from 'react';
import { render } from '@testing-library/react';

import Descriptions from '..';

const TestDescriptions = ({ fixed }: { fixed?: boolean }) => {
    return (
        <Descriptions bordered column={2} tableLayout={fixed ? 'fixed' : 'auto'}>
            <Descriptions.Item label="名称">我是 dt-react-component 组件库</Descriptions.Item>
            <Descriptions.Item label="描述">
                <div
                    style={{
                        width: 0,
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        minWidth: '100%',
                    }}
                >
                    很长很长的描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述，长度甚至超过了一行
                </div>
            </Descriptions.Item>
        </Descriptions>
    );
};

describe('Test Descriptions', () => {
    it('match snapshot', () => {
        expect(render(<TestDescriptions />).asFragment()).toMatchSnapshot(
            "As same as antd's Descriptions"
        );

        expect(render(<TestDescriptions fixed />).asFragment()).toMatchSnapshot(
            'Fixed table layout'
        );
    });
});

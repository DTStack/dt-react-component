import React from 'react';
import { Space } from 'antd';
import { Copy } from 'dt-react-component';

const text =
    '基于 ant-design 的 React UI 组件库。 主要用于中，后台产品。我们的目标是满足更具体的业务场景组件。 当然，我们也有基于原生 javascript 实现的业务组件，例如ContextMenu，KeyEventListener等.';

export default () => {
    return (
        <Space direction="vertical">
            <div>
                <p>使用 tooltip 对象</p>
                <Copy text={text} tooltip={{ title: '复制该文本' }} />
                <p>{text}</p>
            </div>
            <div>
                <p>使用 React.ReactNode</p>
                <Copy text={text} tooltip="复制该文本" />
                <p>{text}</p>
            </div>
        </Space>
    );
};

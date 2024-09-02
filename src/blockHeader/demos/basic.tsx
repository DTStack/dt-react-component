import React, { useState } from 'react';
import { Radio, Space, Switch } from 'antd';
import { BlockHeader } from 'dt-react-component';
import { SizeType } from 'dt-react-component/blockHeader';

export default () => {
    const [size, setSize] = useState<SizeType>('middle');
    const [showBackground, setShowBackground] = useState(true);
    const [tooltip, setTooltip] = useState(true);
    const [description, setDescription] = useState(true);

    return (
        <div>
            <Space direction="vertical" size={12}>
                <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="middle">Middle</Radio.Button>
                    <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
                <Space direction="horizontal" size={12}>
                    <Switch
                        defaultChecked
                        onChange={setShowBackground}
                        checkedChildren="带背景"
                        unCheckedChildren="不带背景"
                    />
                    <Switch
                        defaultChecked
                        onChange={setTooltip}
                        checkedChildren="展示 tooltip"
                        unCheckedChildren="不展示 tooltip"
                    />
                    <Switch
                        defaultChecked
                        onChange={setDescription}
                        checkedChildren="展示说明文字"
                        unCheckedChildren="不展示说明文字"
                    />
                </Space>
            </Space>
            <br />
            <br />
            <BlockHeader
                size={size}
                title="分类标题"
                background={showBackground}
                tooltip={tooltip && '这里展示问号提示'}
                description={description && '提示说明文字'}
            />
        </div>
    );
};

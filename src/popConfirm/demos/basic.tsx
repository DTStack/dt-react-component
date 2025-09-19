import React from 'react';
import { Space } from 'antd';
import { Popconfirm } from 'dt-react-component';

const App: React.FC = () => (
    <Space size={12}>
        <Popconfirm title="Are you sure to delete this task?">
            <a href="#">Basic</a>
        </Popconfirm>
        <Popconfirm
            title="超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本"
            overlayInnerStyle={{ width: 400 }}
        >
            <a href="#">超长文本</a>
        </Popconfirm>
    </Space>
);

export default App;

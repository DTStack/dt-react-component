---
title: SearchModal 全局搜索弹框
group: 组件
toc: content
demo:
    cols: 2
---

# SearchModal 全局搜索弹框

## 何时使用

路由未匹配上的展示页

## 示例

```jsx
/**
 * title: "基础使用"
 * descriptions: "带有自定义DOM前缀"
 */
import React, { useState } from 'react';
import { SearchModal } from 'dt-react-component';
import { Button, Select } from 'antd';

const initDataSource = ['gmail.com', '163.com', 'qq.com'];
export default () => {
    const [visible, setVisible] = useState(false);
    const [dataSource, setDataSource] = useState(initDataSource);
    const [key, setKey] = useState(Math.random());

    return (
        <>
            <Button onClick={() => setVisible(true)}>点击我</Button>
            <SearchModal
                prefixRender={
                    <Select defaultValue={1} style={{ width: '100%' }}>
                        <Select.Option value={1}>任务名称</Select.Option>
                        <Select.Option value={2}>任务描述</Select.Option>
                    </Select>
                }
                key={key}
                dataSource={dataSource}
                visible={visible}
                onCancel={() => {
                    setVisible(false);
                    setKey(Math.random());
                }}
                onSelect={(value, option) => {
                    console.log('onSelect, ' + value, option);
                }}
                onChange={(value) => {
                    console.log('onChange' + value);
                    setDataSource(
                        initDataSource.filter((item: string) => item.indexOf(value) !== -1)
                    );
                }}
            />
        </>
    );
};
```

```jsx
/**
 * title: "搜索框"
 */
import React, { useState } from 'react';
import { SearchModal } from 'dt-react-component';
import { Button, Select } from 'antd';

const initDataSource = ['gmail.com', '163.com', 'qq.com'];
export default () => {
    const [visible, setVisible] = useState(false);
    const [dataSource, setDataSource] = useState(initDataSource);

    return (
        <>
            <Button onClick={() => setVisible(true)}>点击我</Button>
            <SearchModal
                dataSource={dataSource}
                closable={false}
                mask={false}
                visible={visible}
                placeholder="选中后将关闭modal"
                onSelect={(value, option) => {
                    console.log('onSelect, ' + value, option);
                    setVisible(false);
                }}
                onChange={(value) => {
                    console.log('onChange' + value);
                    setDataSource(
                        initDataSource.filter((item: string) => item.indexOf(value) !== -1)
                    );
                }}
                title={null}
            />
        </>
    );
};
```

## API

| 参数         | 说明            | 类型              | 默认值         |
| ------------ | --------------- | ----------------- | -------------- |
| title        | modal 标题      | `string`          | `'搜索并打开'` |
| dataSource   | 自定义 DOM 前缀 | `Array`           | -              |
| placeholder  | 搜索框提示信息  | `string`          | -              |
| prefixRender | 自定义 DOM 前缀 | `React.ReactNode` | -              |

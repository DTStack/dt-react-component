---
title: TableActionMenu 表格操作栏菜单
group: 组件
toc: content
demo:
    cols: 2
---

# TableActionMenu 表格操作栏菜单

## 何时使用

当表格操作项过多时，将多余的操作项展示在下拉菜单中

## 示例

```jsx
/**
 * title: "表格内使用"
 */
import React, { useState } from 'react';
import { TableActionMenu } from 'dt-react-component';
import { Table, message, Popconfirm } from 'antd';

export default () => {
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            name: '我是测试数据',
        },
        {
            id: 2,
            name: '我是样本数据',
        },
    ]);

    const handleClick = (key) => {
        switch (key) {
            case 'edit':
                message.info('编辑被点击');
                break;
            case 'close':
                message.info('关闭被点击');
                break;
            case 'open':
                message.info('开启被点击');
            default:
                break;
        }
    };

    const cols = [
        {
            title: 'id',
            dataIndex: 'id',
        },
        {
            title: '名称',
            dataIndex: 'name',
        },
        {
            title: '操作',
            dataIndex: '',
            width: 230,
            render: () => {
                const actions = [
                    { key: 'edit', name: '编辑' },
                    {
                        key: 'delete',
                        name: '删除',
                        render: (isCollapse) => (
                            <Popconfirm title="确认删除？">
                                <a style={{ color: 'red' }}>删除</a>
                            </Popconfirm>
                        ),
                    },
                    { key: 'close', name: '关闭' },
                    { key: 'open', name: '开启', disabled: true },
                ];
                return (
                    <TableActionMenu maxCount={3} actionItems={actions} onItemClick={handleClick} />
                );
            },
        },
    ];

    return <Table rowKey="id" dataSource={dataSource} columns={cols} />;
};
```

## API

### TableActionMenu

| 参数          | 说明                                                                                                  | 类型                        | 默认值                       |
| ------------- | ----------------------------------------------------------------------------------------------------- | --------------------------- | ---------------------------- |
| actionItems   | 操作项                                                                                                | [ActionItem](#actionitem)[] | []                           |
| maxCount      | 最大展示数量，超出部分会折叠至下拉菜单中                                                              | `number`                    | 3                            |
| divider       | 操作项分割符                                                                                          | `React.ReactNode`           | `<Divider type='vertical'/>` |
| collapseIcon  | 下拉菜单折叠图标                                                                                      | `React.ReactNode`           | `<EllipsisOutlined />`       |
| dropdownProps | 折叠菜单额外的 Props, 详细请参考 antd 的[Dropdown](https://ant.design/components/dropdown-cn#api)组件 | `DropDownProps`             | -                            |
| buttonProps   | 按钮额外的 Props, 详细请参考 antd 的[Button](https://ant.design/components/button-cn#api)组件         | `ButtonProps`               | -                            |
| onItemClick   | 操作项点击事件                                                                                        | `(key: React.Key) => void`  | -                            |

### ActionItem

| 参数     | 说明                                                            | 类型                                       | 默认值  |
| -------- | --------------------------------------------------------------- | ------------------------------------------ | ------- |
| key      | 唯一标识                                                        | `React.Key`                                | -       |
| name     | 显示的名称                                                      | `string`                                   | -       |
| disabled | 是否禁用                                                        | `boolean`                                  | `false` |
| render   | 自定义渲染，未折叠的操作项默认会以`link`类型的 `Button`形式展示 | `(isCollapse: boolean) => React.ReactNode` | -       |

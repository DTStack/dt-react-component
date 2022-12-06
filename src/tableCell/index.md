---
title: TableCell 表格内文本框
group: 组件
toc: content
demo:
    cols: 2
---

# TableCell 表格内文本框

## 何时使用

表格内文本区域

## 示例

```jsx
/**
 * title: "基础使用"
 */
import React from 'react';
import { TableCell } from 'dt-react-component';

export default () => {
    return <TableCell style={{ border: '1px solid #ccc' }} />;
};
```

```jsx
/**
 * title: "表格内使用"
 */
import React, { useState } from 'react';
import { TableCell } from 'dt-react-component';
import { Table } from 'antd';

export default () => {
    const [dataSource, setDataSource] = useState([
        {
            index: 1,
            textVal: '我是测试数据',
        },
        {
            index: 2,
            textVal: '我是样本数据',
        },
    ]);

    const cols = [
        {
            title: 'index',
            dataIndex: 'index',
        },
        {
            title: '文本',
            dataIndex: 'textVal',
            render: (text, record, index) => {
                return (
                    <TableCell
                        value={text}
                        onChange={(e) => {
                            setDataSource((d) => {
                                d[index].textVal = e?.target?.value;

                                return [...d];
                            });
                        }}
                    />
                );
            },
        },
    ];

    return <Table dataSource={dataSource} columns={cols} />;
};
```

## API

import React from 'react';
import { Components } from 'react-markdown';
import { Chat } from 'dt-react-component';
import rehypeRaw from 'rehype-raw';

const children = `
# 大标题
## 小标题
### 标题
#### 标题
##### 标题
###### 标题
正文
**加粗**
*斜体*
***加粗斜体***
~~删除线~~
\`行内代码\`
\`\`\` sql
SELECT * FROM table_name;
\`\`\`
[链接](https://www.baidu.com)
- 无序列表
- 无序列表
- 无序列表
1. 有序列表
2. 有序列表
3. 有序列表

---

> 引用

| 表头 | 表头 | 表头 |
| ---- | ---- | ---- |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
`;
const childrenTsx = `<customtsx>
<span class=\"command-tag-Lynton\">这是自定义的标签</span>
</customtsx>`;

export default function () {
    return (
        <Chat
            chat={{} as any}
            components={
                {
                    customtsx: ({ children }: any) => {
                        return <div className="hhhh">{children}</div>;
                    },
                } as Components
            }
            rehypePlugins={[rehypeRaw]}
        >
            <Chat.Markdown>{children}</Chat.Markdown>
            <Chat.Content
                data={[
                    {
                        messages: [
                            {
                                content: childrenTsx,
                            },
                        ],
                    },
                ]}
            />
        </Chat>
    );
}

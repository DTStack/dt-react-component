import React from 'react';
import { CopyButton } from 'dt-react-component';

const text =
    '基于 ant-design 的 React UI 组件库。 主要用于中，后台产品。我们的目标是满足更具体的业务场景组件。 当然，我们也有基于原生 javascript 实现的业务组件，例如ContextMenu，KeyEventListener等.';

export default () => {
    return (
        <div>
            <CopyButton text={text} title="复制该文本" />
            <p>{text}</p>
        </div>
    );
};

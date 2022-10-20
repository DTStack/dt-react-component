import React from 'react';
import { storiesOf } from '@storybook/react';
import { PropsTable } from './components/propsTable';
import CopyIcon from '../components/copyIcon';
import '../styles/index.scss';
import ExampleContainer from './components/exampleCode';

const text =
    '基于 ant-design 的 React UI 组件库。 主要用于中，后台产品。我们的目标是满足更具体的业务场景组件。 当然，我们也有基于原生 javascript 实现的业务组件，例如ContextMenu，KeyEventListener等.';

const stories = storiesOf('CopyIcon 复制文本', module);
const propDefinitions = [
    {
        property: 'text',
        propType: 'string',
        required: true,
        description: '复制的文本',
        defaultValue: '',
    },
    {
        property: 'title',
        propType: 'string',
        required: false,
        description: 'Tooltip 文本',
        defaultValue: '复制',
    },
    {
        property: 'style',
        propType: 'CSSProperties',
        required: false,
        description: '自定义图标样式',
        defaultValue: '',
    },
    {
        property: 'customRender',
        propType: 'ReactNode',
        required: false,
        description: '自定义图标',
        defaultValue: '',
    },
    {
        property: '其余属性',
        propType: '--',
        required: false,
        description: '继承 Antd Icon API',
        defaultValue: '',
    },
];

const otherDependencies = `import { CopyIcon } from 'dt-react-component';`;
const code = `<CopyIcon
                text="${text}"
            />`;

stories.add(
    'copyIcon',
    () => {
        return (
            <div className="story_wrapper">
                <h2>何时使用</h2>
                <p>复制文本到粘贴版</p>
                <h2>示例</h2>
                <p>点击按钮，复制文本。</p>
                <ExampleContainer
                    otherDependencies={otherDependencies}
                    code={code}
                    hasCodeSandBox
                >
                    <CopyIcon text={text} />
                    <p>{text}</p>
                </ExampleContainer>
            </div>
        );
    },
    {
        info: {
            text: `
        代码示例：
        ~~~js
        ${otherDependencies}
        ${code}
        ~~~
        `,
            TableComponent: () => PropsTable({ propDefinitions }),
        },
    }
);

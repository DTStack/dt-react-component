import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import ExampleContainer from './components/exampleCode';
import GoBack from '../components/goBack';

const { GoBackButton } = GoBack;

const stories = storiesOf('GoBack 返回', module);
stories.addDecorator(withKnobs);

const propDefinitions = [
    {
        property: 'url',
        propType: 'string',
        required: false,
        description: '返回的路由， 如不传参数，则默认返回浏览器上一级url',
        defaultValue: '',
    },
    {
        property: 'autoClose',
        propType: 'boolean',
        required: false,
        description: '是否关闭浏览器窗口',
        defaultValue: 'false',
    },
];

const propButtonDefinitions = [
    {
        property: 'title',
        propType: 'string',
        required: false,
        description: '显示文字',
        defaultValue: '返回',
    },
];

const otherDependencies = `import { GoBack } from 'dt-react-component';`;
const code = `<GoBack />`;
const buttonDependencies = `import { GoBack } from 'dt-react-component';\nconst { GoBackButton } = GoBack`;
const buttonCode = `<GoBackButton />`;

stories
    .add(
        'goBack',
        () => {
            return (
                <div className="story_wrapper">
                    <h2>何时使用</h2>
                    <p>返回匹配的路由， 默认返回浏览器上一级路由</p>
                    <h2>示例</h2>
                    <p>点击我试试看</p>
                    <ExampleContainer
                        otherDependencies={otherDependencies}
                        code={code}
                        hasCodeSandBox={true}
                    >
                        <GoBack />
                    </ExampleContainer>
                </div>
            );
        },
        {
            info: {
                text: `
                    代码示例：
                    ~~~js
                    <GoBack url='/api/manage' />
                    ~~~
                `,
                TableComponent: () => PropsTable({ propDefinitions }),
            },
        }
    )
    .add(
        'goBackButton',
        () => {
            return (
                <div className="story_wrapper">
                    <h2>何时使用</h2>
                    <p>返回匹配的路由， 默认返回浏览器上一级路由</p>
                    <h2>示例</h2>
                    <p>点击我试试看</p>
                    <ExampleContainer
                        otherDependencies={buttonDependencies}
                        code={buttonCode}
                        hasCodeSandBox={true}
                    >
                        <GoBackButton />
                    </ExampleContainer>
                </div>
            );
        },
        {
            info: {
                text: `
                    代码示例：
                    ~~~js
                    <GoBackButton title='返回上一级页面' />
                    ~~~
                `,
                TableComponent: () => PropsTable({ propDefinitions: propButtonDefinitions }),
            },
        }
    );

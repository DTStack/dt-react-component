import React from 'react';
import { storiesOf } from '@storybook/react';
import LoadError from '../components/loadError';
import ExampleContainer from './components/exampleCode';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('LoadError 组件', module);
stories.addDecorator(withKnobs);

const otherDependencies = `import { LoadError } from 'dt-react-component';`;
const code = `<LoadError />`;
stories.add(
    'LoadError',
    () => {
        return (
            <div className="story_wrapper">
                <h2>何时使用</h2>
                <p>
                    当发生错误时，错误会被componentDidCatch捕获，避免页面崩溃降低用户体验，在这时可以渲染这个组件
                </p>
                <h2>示例</h2>
                <ExampleContainer otherDependencies={otherDependencies} code={code} hasCodeSandBox>
                    <LoadError />
                </ExampleContainer>
            </div>
        );
    },
    {
        info: {
            propTablesExclude: [LoadError],
            text: `
        代码示例：
        ~~~js
        <LoadError />
        ~~~
        `,
        },
    }
);

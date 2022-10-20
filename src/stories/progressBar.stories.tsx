import React from 'react';
import { Button } from 'antd';
import { storiesOf } from '@storybook/react';
import ProgressBar from '../components/progressBar';
import ExampleContainer from './components/exampleCode';

import '../styles/index.scss';
const stories = storiesOf('ProgressBar 网络请求进度条', module);

const otherDependencies = `import { Button } from 'antd';
import { ProgressBar } from 'dt-react-component';`;

const code = `<div>
                <Button
                    onClick={() => {
                        ProgressBar.show()
                    }}
                >
                    发起请求
                </Button>
                <Button
                    style={{ marginLeft: '10px' }}
                    onClick={() => {
                        ProgressBar.hide()
                    }}
                >
                    请求结束
                </Button>
            </div>`;
stories.add(
    'progressBar',
    () => {
        return (
            <div className="story_wrapper">
                <h2>何时使用</h2>
                <p>网络请求过程提示进度条</p>
                <h2>示例</h2>
                <ExampleContainer
                    otherDependencies={otherDependencies}
                    code={code}
                    hasCodeSandBox={true}
                >
                    <Button
                        onClick={() => {
                            ProgressBar.show();
                        }}
                    >
                        发起请求
                    </Button>
                    <Button
                        style={{ marginLeft: '10px' }}
                        onClick={() => {
                            ProgressBar.hide();
                        }}
                    >
                        请求结束
                    </Button>
                </ExampleContainer>
            </div>
        );
    },
    {
        info: {
            text: `
        代码示例：
        ~~~js
        import { ProgressBar } from 'dt-react-component'
        ProgressBar.show()
        ProgressBar.hide()
        ~~~
        `,
            propTablesExclude: [Button],
        },
    }
);

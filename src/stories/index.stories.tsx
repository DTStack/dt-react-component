import React from 'react';
import { storiesOf } from '@storybook/react';
import { FaGitlab } from 'react-icons/fa';
import MarkdownRender from '../components/markdown-render';
// const html = require('./markdown/test.md');
const { name, repository, version } = require('../../package.json');
const stories = storiesOf('综述', module)
const WELCOME = `欢迎使用 dt-react-component`;
console.log(WELCOME);
stories
    .add('介绍', () => (
        <article style={{ padding: 20 }} className='story_wrapper'>
            <h1 style={{ fontSize: 40, padding: 0, margin: 0 }}>
                {name}

                <a href={repository} rel="noopener noreferrer" target='_blank' style={{ marginLeft: 20 }}>
                    <FaGitlab style={{ fontSize: 30, color: '#444' }} />
                </a>
            </h1>
            <p>
            </p>
            <p>
                <a title='npm'>
                    npm地址
                </a>
                {'  '}
                <a href='http://gitlab.prod.dtstack.cn/dt-insight-front/infrastructure/dt-react-component/issues'>
                    issues地址
                </a>
                {'  '}
            </p>

            <h2>当前版本</h2>
            <p>
                v{version}
            </p>

            <h2>在线示例</h2>
            这是一个最简单的dt-react-component 组件的在线 codesandbox 演示。
            <iframe
                src='https://codesandbox.io/embed/antd-reproduction-template-6e93z?autoresize=1&fontsize=14&hidenavigation=1&theme=dark'
                style={{
                    width: '100%',
                    height: '500px',
                    border: 0,
                    borderRadius: '4px',
                    overflow: 'hidden'
                }}
                sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
            />
            <h2>贡献</h2>
            <p>
                如有更好地意见欢迎 提
                <a rel="noopener noreferrer" target='_blank' href='http://gitlab.prod.dtstack.cn/dt-insight-front/infrastructure/dt-react-component/issues'> Issue</a> 或{' '}
                <a rel="noopener noreferrer" target='_blank' href='http://gitlab.prod.dtstack.cn/dt-insight-front/infrastructure/dt-react-component/merge_requests'>Pull Request</a>
            </p>
        </article>
    ), {
        info: {
            inline: true,
            source: false,
            propTablesExclude: [FaGitlab]
        }
    })
    .add(`更新日志`, () => (
        <div>
            <MarkdownRender
                text={`#test`}
                dark={true}
            />
        </div>
    ))

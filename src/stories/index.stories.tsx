import React from 'react';
import { storiesOf } from '@storybook/react';
import { FaGitlab } from 'react-icons/fa';
import MarkdownRender from '../components/markdown-render';
import { notShowProps } from './func';
import './style';
// const html = require('./markdown/test.md');
const { name, repository, version } = require('../../package.json');
const stories = storiesOf('综述', module)
const WELCOME = `欢迎使用 dt-react-component `;
console.log(WELCOME);
stories
    .add('介绍', () => (
        <article className='story_wrapper summary-story'>
            <h1>
                <span>{name}</span>
                <a href={repository} rel="noopener noreferrer" target='_blank'>
                    <FaGitlab/>
                </a>
            </h1>

            <h2>当前版本</h2>
            <p className='summary-story_version'>
                v{version}
            </p>

            <h2>在线示例</h2>
            <p>这是一个最简单的 dt-react-component 组件的在线 codesandbox 演示。</p>
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
                目前该项目还在初期阶段，如有更好地意见欢迎 提
                <a rel="noopener noreferrer" target='_blank' href='http://gitlab.prod.dtstack.cn/dt-insight-front/infrastructure/dt-react-component/issues'> Issue</a> 或{' '}
                <a rel="noopener noreferrer" target='_blank' href='http://gitlab.prod.dtstack.cn/dt-insight-front/infrastructure/dt-react-component/merge_requests'>Pull Request</a>
            </p>
        </article>
    ), {
        ...notShowProps(false, [FaGitlab])
    })
    .add(`更新日志`, () => (
        <div className='story_wrapper'>
            <MarkdownRender
                text={`#后面再此展示changelog`}
                dark={true}
            />
        </div>
    ), {
        ...notShowProps(false, [MarkdownRender])
    })

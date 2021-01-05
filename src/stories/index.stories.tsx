import React from 'react';
import { storiesOf } from '@storybook/react';
import { FaGitlab } from 'react-icons/fa';
import MarkdownRender from '../components/markdownRender';
import { notShowProps } from './func';
import './style';
const html = require('../../CHANGELOG.md');
const readmeHtml = require('../../README.md');
const docHtml = require('./markdown/componentDoc.md');
const devlopHtml = require('./markdown/componentDev.md');
const planHtml = require('./markdown/plan.md');
const { name, repository, version } = require('../../package.json');
const summaryComponent = require('../components/index');
const getComponentNum = (): number => {
    let componentKey = [];
    if (summaryComponent) {
        for (let key in summaryComponent) {
            if (summaryComponent.hasOwnProperty(key)) {
                componentKey.push(key);
            }
        }
    }
    return componentKey.length;
};
const isGitlab = repository.includes('gitlab');
console.log(
    '%c欢迎使用 dt-react-component\n使用过程中如有问题欢迎联系 qingyi@dtstack.com ',
    'color:#2517b1'
);
const stories = storiesOf('综述', module);
stories
    .add(
        '介绍',
        () => (
            <article className="story_wrapper summary-story">
                <h1>
                    <span>{name}</span>
                    <a href={repository} rel="noopener noreferrer" target="_blank">
                        <FaGitlab />
                    </a>
                </h1>

                <h2>当前版本</h2>
                <p className="summary-story_version">v{version}</p>
                <h2>当前组件数</h2>
                <p className="summary-story_version">{getComponentNum()} 个</p>

                <h2>在线示例</h2>
                <p>这是一个最简单的 dt-react-component 组件的在线 codesandbox 演示。</p>
                <iframe
                    src='https://codesandbox.io/s/dt-react-component-reproduction-template-0obrl'
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
                    <a rel="noopener noreferrer" target="_blank" href={`${repository}/issues`}>
                        {' '}
                        Issue
                    </a>{' '}
                    或{' '}
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={`${repository}/${isGitlab ? 'merge_requests' : 'pulls'}`}
                    >
                        Pull Request
                    </a>
                </p>
                <h2>FAQ</h2>
                <p>使用过程中如有问题欢迎沟通～～</p>
            </article>
        ),
        {
            ...notShowProps(false, [FaGitlab])
        }
    )
    .add(
        `快速上手`,
        () => {
            return (
                <div className="story_wrapper">
                    <MarkdownRender text={`${readmeHtml && readmeHtml.default}`} dark={false} />
                </div>
            );
        },
        {
            ...notShowProps(false, [MarkdownRender])
        }
    )
    .add(
        `组件文档规范`,
        () => {
            return (
                <div className="story_wrapper">
                    <MarkdownRender text={`${docHtml && docHtml.default}`} dark={false} />
                </div>
            );
        },
        {
            ...notShowProps(false, [MarkdownRender])
        }
    )
    .add(
        `组件开发`,
        () => {
            return (
                <div className="story_wrapper">
                    <MarkdownRender text={`${devlopHtml && devlopHtml.default}`} dark={false} />
                </div>
            );
        },
        {
            ...notShowProps(false, [MarkdownRender])
        }
    )
    .add(
        `Todo/Plan`,
        () => {
            return (
                <div className="story_wrapper">
                    <MarkdownRender text={`${planHtml && planHtml.default}`} dark={false} />
                </div>
            );
        },
        {
            ...notShowProps(false, [MarkdownRender])
        }
    )
    .add(
        `更新日志`,
        () => (
            <div className="story_wrapper">
                <MarkdownRender text={`${html && html.default}`} dark={false} />
            </div>
        ),
        {
            ...notShowProps(false, [MarkdownRender])
        }
    );

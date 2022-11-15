import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, select } from '@storybook/addon-knobs';
import ExampleContainer from './components/exampleCode';
import ProgressLine from '../components/progressLine';
import { PropsTable } from './components/propsTable';
import './style/index.scss';
import '../styles/index.scss';

const stories = storiesOf('ProgressLine 进度条', module);
const propDefinitions = [
    {
        property: 'className',
        propType: 'string',
        required: false,
        description: '设置组件 className',
        defaultValue: '--',
    },
    {
        property: 'needTitle',
        propType: 'boolean',
        required: false,
        description: '设置进度条头部描述是否展示，可选值为 true 或 false',
        defaultValue: 'true',
    },
    {
        property: 'title',
        propType: 'string | number',
        required: false,
        description: '设置进度条头部描述名',
        defaultValue: '暂无描述',
    },
    {
        property: 'num',
        propType: 'string | number',
        required: false,
        description: '设置进度条头部描述属性值',
        defaultValue: '0',
    },
    {
        property: 'percent',
        propType: 'string | number',
        required: false,
        description: '设置进度条头部描述属性值百分比',
        defaultValue: '0%',
    },
    {
        property: 'color',
        propType: 'string',
        required: false,
        description: '设置进度条颜色',
        defaultValue: '#3BCEFF',
    },
    {
        property: 'width',
        propType: 'string | number',
        required: false,
        description: '设置组件长度',
        defaultValue: '280px',
    },
];

const otherDependencies = `import { ProgressLine } from 'dt-react-component';`;

const code = `<div>
                <div>
                    <ProgressLine needTitle={true}></ProgressLine>&nbsp;
                </div>
            </div>`;

stories.add(
    'ProgressLine',
    () => {
        const groupId = 'progressLine';
        const defaultStyle = 'rgb(159,148,244)';
        const defaultWidth = '280px';
        const defaultTitle = '衍生标签';
        const defaultType = true;
        const options = [true, false];
        const defaultNum = 60;
        const defaultPercent = '20%';
        const needTitle = select('needTitle', options, defaultType, groupId);
        const title = object('title', defaultTitle, groupId);
        const num = object('num', defaultNum, groupId);
        const percent = object('percent', defaultPercent, groupId);
        const style = object('color', defaultStyle, groupId);
        const width = object('width', defaultWidth, groupId);
        const wrapperStyle: any = { display: 'flex', alignItems: 'center', marginBottom: '14px' };
        const labelStyle: any = { margin: '0 16px', width: '18%', textAlign: 'right' };
        return (
            <div className="story_wrapper">
                <h2>何时使用</h2>
                <p>ProgressLine 组件作用于进度条状态效果展示</p>
                <h2>示例</h2>
                <ExampleContainer otherDependencies={otherDependencies} code={code} hasCodeSandBox>
                    <div>
                        <div style={wrapperStyle}>
                            <div style={labelStyle}>禁用头部描述:</div>
                            <ProgressLine
                                needTitle={false}
                                color="#3BCEFF"
                                title="衍生标签"
                                num={20}
                                percent="20%"
                            />
                            &nbsp;
                        </div>
                        <div style={wrapperStyle}>
                            <div style={labelStyle}>默认使用:</div>
                            <ProgressLine
                                color="#3BCEFF"
                                title="衍生标签"
                                num={20}
                                percent="20%"
                                width="280px"
                            />
                            &nbsp;
                        </div>
                        <div style={wrapperStyle}>
                            <div style={labelStyle}>修改 title:</div>
                            <ProgressLine
                                color="#3BCEFF"
                                title="原子标签"
                                num={20}
                                percent="20%"
                                width="280px"
                            />
                            &nbsp;
                        </div>
                        <div style={wrapperStyle}>
                            <div style={labelStyle}>修改 color:</div>
                            <ProgressLine
                                color={defaultStyle}
                                title="原子标签"
                                num={20}
                                percent="20%"
                                width="280px"
                            />
                            &nbsp;
                        </div>
                        <div style={wrapperStyle}>
                            <div style={labelStyle}>修改 num:</div>
                            <ProgressLine
                                color="#3BCEFF"
                                title="原子标签"
                                num={45}
                                percent="45%"
                                width="280px"
                            />
                            &nbsp;
                        </div>
                        <div style={wrapperStyle}>
                            <div style={labelStyle}>修改 width:</div>
                            <ProgressLine
                                color="#3BCEFF"
                                title="原子标签"
                                num={20}
                                percent="20%"
                                width="350px"
                            />
                            &nbsp;
                        </div>
                        <div style={wrapperStyle}>
                            <div style={labelStyle}>修改 percent:</div>
                            <ProgressLine
                                color="#3BCEFF"
                                title="原子标签"
                                num={75}
                                percent="75%"
                                width="280px"
                            />
                            &nbsp;
                        </div>
                    </div>
                </ExampleContainer>
                <p style={{ marginTop: '10px' }}>通过组件的 needTitle 控制进度条描述是否展示</p>
                <div className="strory-code_border">
                    <ProgressLine
                        needTitle={needTitle}
                        color="#3BCEFF"
                        title="衍生标签"
                        num={20}
                        percent="20%"
                    />
                </div>
                <p style={{ marginTop: '10px' }}>通过自定义 title 属性控制描述属性 label</p>
                <div className="strory-code_border">
                    <ProgressLine color={style} title={title} num={35} percent="60%" />
                    &nbsp;
                </div>
                <p style={{ marginTop: '10px' }}>通过自定义 num 属性控制描述属性 value</p>
                <div className="strory-code_border">
                    <ProgressLine color={style} title={title} num={num} percent="60%" />
                    &nbsp;
                </div>
                <p style={{ marginTop: '10px' }}>通过自定义 percent 属性控制百分比</p>
                <div className="strory-code_border">
                    <ProgressLine color={style} title={title} num={num} percent={percent} />
                    &nbsp;
                </div>
                <p style={{ marginTop: '10px' }}>通过自定义 color 属性控制颜色</p>
                <div className="strory-code_border">
                    <ProgressLine color={style} title="原子标签" num={35} percent="60%" />
                    &nbsp;
                </div>
                <p style={{ marginTop: '10px' }}>通过自定义 width 属性控制长度</p>
                <div className="strory-code_border">
                    <ProgressLine
                        color={style}
                        title="原子标签"
                        num={35}
                        percent="60%"
                        width={width}
                    />
                    &nbsp;
                </div>
            </div>
        );
    },
    {
        info: {
            text: `
        代码示例：
        ~~~js
        <ProgressLine title="标签实例" num={20} percent="20%" color="#3BCEFF" width="280px"></ProgressLine>
        ~~~
        `,
            TableComponent: () => PropsTable({ propDefinitions }),
        },
    }
);

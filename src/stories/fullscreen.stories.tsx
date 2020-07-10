import * as React from 'react';
import { storiesOf } from '@storybook/react';
import FullScreenButton from '../components/fullscreen';
import { PropsTable } from './components/propsTable';
import '../styles/index.scss';

const propDefinitions = [{
    property: 'themeDark',
    propType: 'boolean',
    required: false,
    description: '是否使用暗黑主题模式',
    defaultValue: 'false'
}, {
    property: 'iconStyle',
    propType: 'CSSProperties',
    required: false,
    description: '图标元素样式',
    defaultValue: ''
}, {
    property: 'customIcon',
    propType: 'boolean',
    required: false,
    description: '是否自定义图标',
    defaultValue: 'false'
}, {
    property: 'fullIcon',
    propType: 'React.ReactNode',
    required: false,
    description: '自定义全屏图标',
    defaultValue: ''
}, {
    property: 'exitFullIcon',
    propType: 'React.ReactNode',
    required: false,
    description: '自定义退出全屏图标',
    defaultValue: ''
}]

const stories = storiesOf('FullScreenButton 全屏', module);
stories.add('fullScreenButton', () => {
    const iconStyle = {
        width: 12,
        height: 12,
        marginRight: 5
    }
    return (
        <div className='story_wrapper'>
            <h2>何时使用</h2>
            <p>全屏操作</p>
            <h2>示例</h2>
            <p>白色主题</p>
            <FullScreenButton iconStyle={iconStyle} />
            <p>暗黑主题</p>
            <FullScreenButton iconStyle={iconStyle} themeDark={true} />
        </div>
    )
}, {
    info: {
        text: `
        代码示例：
        ~~~js
        import { FullScreenButton } from 'dt-react-component';
        <FullScreenButton themeDark={true} />
        ~~~
        `,
        TableComponent: () => PropsTable({ propDefinitions })
    }
})

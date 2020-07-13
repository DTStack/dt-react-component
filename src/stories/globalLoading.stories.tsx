import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import GlobalLoading from '../components/globalLoading';

import './style/easySelect.scss';

const stories = storiesOf('GlobalLoading 等待加载页面', module);

stories.addDecorator(withKnobs);

const propDefinitions = [{
    property: 'prefix',
    propType: 'string',
    required: false,
    description: '应用前缀',
    defaultValue: '""'
}, {
    property: 'loadingTitle',
    propType: 'string',
    required: false,
    description: '应用名称',
    defaultValue: '应用加载中，请等候～'
}, {
    property: 'mainbackground',
    propType: 'string',
    required: false,
    description: '整体背景色',
    defaultValue: 'linear-gradient(to bottom, #2E3943 , #2E3943 )'
}, {
    property: 'titleColor',
    propType: 'string',
    required: false,
    description: '文案字体颜色',
    defaultValue: '#fff'
}, {
    property: 'circleBackground',
    propType: 'string',
    required: false,
    description: '等待动画cicle背景色',
    defaultValue: '#fff'
}];

stories.add('globalLoading', () => (
    <div className='story_wrapper'>
        <h2>何时使用</h2>
        <p>页面等待加载时使用，可自定义样式。</p>
        <h2>示例</h2>
        <p className="strory-dt_easy_select_p">1、传递参数prefix和loadingTitle，同时自定义样式</p>
        <div style={{ width: '100%', height: '300px' }}>
            <GlobalLoading
                prefix='DtStack'
                loadingTitle='BatchWorks · 离线开发'
                mainbackground="linear-gradient(to bottom, #1890ff , #7dbcea )"
                titleColor="#eee"
                circleBackground="#eee"
            />
        </div>
        <p className="strory-dt_easy_select_p">2、参数全部不传</p>
        <div style={{ width: '100%', height: '300px' }}>
            <GlobalLoading />
        </div>
        <p className="strory-dt_easy_select_p">3、只传递prefix</p>
        <div style={{ width: '100%', height: '300px' }}>
            <GlobalLoading prefix='DtStack' />
        </div>
        <p className="strory-dt_easy_select_p">4、只传递loadingTitle</p>
        <div style={{ width: '100%', height: '300px' }}>
            <GlobalLoading loadingTitle='BatchWorks · 离线开发' />
        </div>
        <p className="strory-dt_easy_select_p">5、只传递参数prefix和loadingTitle</p>
        <div style={{ width: '100%', height: '300px' }}>
            <GlobalLoading prefix='DtStack' loadingTitle='BatchWorks · 离线开发' />
        </div>
    </div>
), {
    info: {
        TableComponent: () => PropsTable({ propDefinitions }),
        text: `
            代码示例：
            ~~~js
            // 1、传递参数prefix和loadingTitle，同时自定义颜色
            <GlobalLoading
                prefix='DtStack'
                loadingTitle='BatchWorks · 离线开发'
                mainbackground="linear-gradient(to bottom, #1890ff , #7dbcea )"
                titleColor="#eee"
                circleBackground="#eee"
            >
            ~~~
            ~~~js
            // 2、参数全部不传
            <GlobalLoading />
            ~~~
            ~~~js
            // 3、只传递prefix
            <GlobalLoading prefix='DtStack' />
            ~~~
            ~~~js
            // 4、只传递loadingTitle
            <GlobalLoading loadingTitle='BatchWorks · 离线开发' />
            ~~~
            ~~~js
            // 5、传递参数prefix和loadingTitle
            <GlobalLoading prefix='DtStack' loadingTitle='BatchWorks · 离线开发' />
            ~~~
        `
    }
});

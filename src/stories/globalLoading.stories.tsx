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
}];

stories.add('globalLoading', () => (
    <div className='story_wrapper'>
        <h2>何时使用</h2>
        <p>页面等待加载时使用(目前主题暂定为深色主题，后续将会开放自定义颜色等功能)。</p>
        <h2>示例</h2>
        <p className="strory-dt_easy_select_p">1、参数全部不传</p>
        <div style={{ width: '100%', height: '300px' }}>
            <GlobalLoading />
        </div>
        <p className="strory-dt_easy_select_p">2、只传递prefix</p>
        <div style={{ width: '100%', height: '300px' }}>
            <GlobalLoading prefix='DtStack' />
        </div>
        <p className="strory-dt_easy_select_p">3、只传递loadingTitle</p>
        <div style={{ width: '100%', height: '300px' }}>
            <GlobalLoading loadingTitle='BatchWorks · 离线开发' />
        </div>
        <p className="strory-dt_easy_select_p">2、传递参数prefix和loadingTitle</p>
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
            // 1、参数全部不传
            <GlobalLoading />
            ~~~
            ~~~js
            // 2、只传递prefix
            <GlobalLoading prefix='DtStack' />
            ~~~
            ~~~js
            // 3、只传递loadingTitle
            <GlobalLoading loadingTitle='BatchWorks · 离线开发' />
            ~~~
            ~~~js
            // 2、传递参数prefix和loadingTitle
            <GlobalLoading prefix='DtStack' loadingTitle='BatchWorks · 离线开发' />
            ~~~
        `
    }
});

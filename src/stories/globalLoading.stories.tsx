import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import GlobalLoading from '../components/globalLoading';
import ExampleContainer from './components/exampleCode';

import './style/easySelect.scss';

const stories = storiesOf('GlobalLoading 应用加载中', module);

stories.addDecorator(withKnobs);

const propDefinitions = [
    {
        property: 'prefix',
        propType: 'string',
        required: false,
        description: '应用前缀',
        defaultValue: '""',
    },
    {
        property: 'loadingTitle',
        propType: 'string',
        required: false,
        description: '应用名称',
        defaultValue: '应用加载中，请等候～',
    },
    {
        property: 'mainBackground',
        propType: 'string',
        required: false,
        description: '整体背景色',
        defaultValue: '#F2F7FA',
    },
    {
        property: 'titleColor',
        propType: 'string',
        required: false,
        description: '文案字体颜色',
        defaultValue: '#3D446E',
    },
    {
        property: 'circleBackground',
        propType: 'string',
        required: false,
        description: '等待动画circle背景色',
        defaultValue: '#1D78FF',
    },
];
const otherDependencies = `import { GlobalLoading } from 'dt-react-component';`;
const code = `<p className="strory-dt_easy_select_p">1、传递参数prefix和loadingTitle，同时自定义样式</p>
            <div className="strory-dt_global_loading_div">
                <GlobalLoading
                    prefix='DtStack'
                    loadingTitle='BatchWorks · 离线开发'
                    mainBackground="linear-gradient(to bottom, #1890ff , #7dbcea )"
                    titleColor="#eee"
                    circleBackground="#eee"
                />
            </div>
            <p className="strory-dt_easy_select_p">2、参数全部不传，使用默认值</p>
            <div className="strory-dt_global_loading_div">
                <GlobalLoading />
            </div>
            <p className="strory-dt_easy_select_p">3、只传递prefix</p>
            <div className="strory-dt_global_loading_div">
                <GlobalLoading prefix='DtStack' />
            </div>
            <p className="strory-dt_easy_select_p">4、只传递loadingTitle</p>
            <div className="strory-dt_global_loading_div">
                <GlobalLoading loadingTitle='BatchWorks · 离线开发' />
            </div>
            <p className="strory-dt_easy_select_p">5、只传递参数prefix和loadingTitle</p>
            <div className="strory-dt_global_loading_div">
                <GlobalLoading prefix='DtStack' loadingTitle='BatchWorks · 离线开发' />
            </div>`;

stories.add(
    'globalLoading',
    () => (
        <div className="story_wrapper">
            <h2>何时使用</h2>
            <p>应用等待加载时使用，可自定义样式。(PS：宽度和高度均为100%，所以其大小基于其父级)</p>
            <h2>示例</h2>
            <ExampleContainer otherDependencies={otherDependencies} code={code} hasCodeSandBox>
                <p className="strory-dt_easy_select_p">
                    1、传递参数prefix和loadingTitle，同时自定义样式
                </p>
                <div className="strory-dt_global_loading_div">
                    <GlobalLoading
                        prefix="DtStack"
                        loadingTitle="BatchWorks · 离线开发"
                        mainBackground="linear-gradient(to bottom, #1890ff , #7dbcea )"
                        titleColor="#eee"
                        circleBackground="#eee"
                    />
                </div>
                <p className="strory-dt_easy_select_p">2、参数全部不传，使用默认值</p>
                <div className="strory-dt_global_loading_div">
                    <GlobalLoading />
                </div>
                <p className="strory-dt_easy_select_p">3、只传递prefix</p>
                <div className="strory-dt_global_loading_div">
                    <GlobalLoading prefix="DtStack" />
                </div>
                <p className="strory-dt_easy_select_p">4、只传递loadingTitle</p>
                <div className="strory-dt_global_loading_div">
                    <GlobalLoading loadingTitle="BatchWorks · 离线开发" />
                </div>
                <p className="strory-dt_easy_select_p">5、只传递参数prefix和loadingTitle</p>
                <div className="strory-dt_global_loading_div">
                    <GlobalLoading prefix="DtStack" loadingTitle="BatchWorks · 离线开发" />
                </div>
            </ExampleContainer>
        </div>
    ),
    {
        info: {
            text: `
            代码示例：
            ~~~js
            // 1、传递参数prefix和loadingTitle，同时自定义样式
            <GlobalLoading
                prefix='DtStack'
                loadingTitle='BatchWorks · 离线开发'
                mainBackground="linear-gradient(to bottom, #1890ff , #7dbcea )"
                titleColor="#eee"
                circleBackground="#eee"
            >
            // 2、参数全部不传
            <GlobalLoading />
            // 3、只传递prefix
            <GlobalLoading prefix='DtStack' />
            // 4、只传递loadingTitle
            <GlobalLoading loadingTitle='BatchWorks · 离线开发' />
            // 5、传递参数prefix和loadingTitle
            <GlobalLoading prefix='DtStack' loadingTitle='BatchWorks · 离线开发' />
            ~~~
        `,
            TableComponent: () => PropsTable({ propDefinitions }),
        },
    }
);

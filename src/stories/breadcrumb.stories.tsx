import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import BreadcrumbRender from './components/breadcrumb';

const stories = storiesOf('Breadcrumb 与路由结合', module);
stories.addDecorator(withKnobs);

const propDefinitions = [
    {
        property: 'routes',
        propType: 'array',
        required: true,
        description: 'router的路由栈信息',
        defaultValue: 'routes[]',
    },
    {
        property: 'separator',
        propType: 'ReactNode',
        required: false,
        description: '分隔符自定义',
        defaultValue: '>',
    },
    {
        property: 'style',
        propType: 'object',
        required: false,
        description: '面包屑组件样式',
        defaultValue: '--',
    },
];

stories.add(
    'Breadcrumb 面包屑',
    () => (
        <div className="story_wrapper">
            <h2>何时使用</h2>
            <p> {`routes 需要满足两级以上的层级结构并需要向上导航的路由时 `}</p>
            <h2>示例</h2>
            <BreadcrumbRender />
        </div>
    ),
    {
        info: {
            text: `
            代码示例: 
            ~~~js
            <Breadcrumb
                routes = {[{ name: 'home', path: '/home' }, { name: 'about', path: '/about' }]}
                style = {{ background: 'dedede' }}
                separator=">"
            />
            ~~~
        `,
            TableComponent: () => PropsTable({ propDefinitions }),
        },
    }
);

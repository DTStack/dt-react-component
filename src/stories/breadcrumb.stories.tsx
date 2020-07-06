import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import { createMemoryHistory, Router, Route } from 'react-router'
import { BreadcrumbRender } from '../components/breadcrumb';

const stories = storiesOf('breadcrumb与路由结合', module);
stories.addDecorator(withKnobs)

const propDefinitions = [
    {
        property: 'routes',
        propType: 'array',
        required: true,
        description: 'router的路由栈信息',
        defaultValue: 'routes[]'
    }, {
        property: 'style',
        propType: 'object',
        required: false,
        description: '面包屑组件样式',
        defaultValue: '--'
    }
]

const App = (props) => {
    return (
        <div>
            <BreadcrumbRender
                routes = {[{ name: 'home', path: '/home' }, { name: 'about', path: '/about' }]}
                style = {{ background: 'dedede' }}
            />
            {props.children}
        </div>
    )
}
const About = () => <h1>about page</h1>
const Home = () => <h1>home</h1>
const history = createMemoryHistory()

stories.add('breadcrumb 面包屑', () => (
    <div className='story_wrapper'>
        <h2>何时使用</h2>
        <p>{` 当 breadcrumb 组件与 react-router 一起使用时，默认生成的 url 路径是带有 # 的`}</p>
        <p> {` 依赖需要满足 两级以上的层级结构并需要向上导航的路由时 `}</p>
        <h2>示例</h2>
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
            </Route>
        </Router>
    </div>
), {
    info: {
        propTablesExclude: [Router],
        text: `
            代码示例：
            ~~~js
            <Breadcrumb
                routes = {[{ name: 'home', path: '/home' }, { name: 'about', path: '/about' }]}
                style = {{ background: 'dedede' }}
            />
            ~~~
        `,
        TableComponent: () => PropsTable({ propDefinitions })
    }
})

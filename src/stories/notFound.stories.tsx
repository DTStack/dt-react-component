import React from 'react'
import { storiesOf } from '@storybook/react';
import NotFound from '../components/notFound';

import '../styles/index.scss';
const stories = storiesOf('NotFound 未匹配', module);
stories.add('notFound', () => {
    return (
        <div className='story_wrapper'>
            <h2>何时使用</h2>
            <p>路由未匹配上的展示页</p>
            <h2>示例</h2>
            <NotFound/>
        </div>
    )
}, {
    info: {
        text: `
        代码示例：
        ~~~js
            import { NotFound } from 'dt-react-component'
            <Route path="/*" component={NotFound} />
        ~~~
        `
    }
})

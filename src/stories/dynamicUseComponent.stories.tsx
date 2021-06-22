import React from 'react'
import { storiesOf } from '@storybook/react';
import { Select } from 'antd';
import { State, Store } from '@sambego/storybook-state';
import DynamicUseComponent from '../components/dynamicUseComponent';
const stories = storiesOf('DynamicUseComponent 动态引入组件', module);
const Option = Select.Option
const store = new Store({
    componentUrl: 'circle1',
    componentProps: {
        type: 'waitSubmit'
    },
    componentPropsMap: {
        'circle': {
            type: 'waitSubmit'
        },
        'notFound': {},
        'chromeDownload': {

        }
    }
});
stories.add('dynamicUseComponent', () => {
    return (
        <div className='story_wrapper'>
            <h2>何时使用</h2>
            <p>动态引入组件</p>
            <h2>示例</h2>
            <h2>import函数不支持变量，通过模版字符串告知webpack对../components路径处理</h2>
            <h2>组件切换： 
                <Select 
                    onChange={(value: string) => {
                        const componentPropsMap = store.get('componentPropsMap')
                        store.set({
                            componentUrl: value,
                            componentProps: componentPropsMap[value]
                        })
                    }}
                    style={{width: 150}}
                >
                    <Option value="circle">circle</Option>
                    <Option value="notFound">notFound</Option>
                    <Option value="chromeDownload">chromeDownload</Option>
                </Select>
            </h2>
            <State store={store}>
                <DynamicUseComponent componentProps={store.get('componentProps')} dynamicComponent={() => import(`../components/${store.get('componentUrl')}`)}/>
            </State>
        </div>
    )
}, {
    info: {
        text: `
        代码示例：
        ~~~js
            import { DynamicUseComponent } from 'dt-react-component'
            const url = 'notFound'
            return (
                <div className='story_wrapper'>
                    <DynamicUseComponent dynamicComponent={() => import(\`../components/\${url}\`)}/>
                </div>
            )
        ~~~
        `
    }
})

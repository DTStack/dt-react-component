import React from 'react'
import { storiesOf } from '@storybook/react';
import MultiSearchInput from '../components/multiSearchInput';
import { PropsTable } from './components/propsTable';
import { State, Store } from '@sambego/storybook-state';
import { action } from '@storybook/addon-actions';
import '../styles/index.scss';
const store = new Store({
    searchName: '',
    searchType: 'fuzzy'
});
const propDefinitions = [{
    property: 'searchType',
    propType: 'string',
    required: false,
    description: '筛选方式(fuzzy、precise、front、 tail)',
    defaultValue: 'fuzzy'
}, {
    property: 'filterOptions',
    propType: 'Array',
    required: false,
    description: '过滤筛选项数组，若不传，则默认使用[precise, front, tail]筛选',
    defaultValue: '[precise, front, tail]'
}, {
    property: 'onTypeChange',
    propType: 'function',
    required: true,
    description: '触发筛选函数',
    defaultValue: ''
}]
const stories = storiesOf('MultiSearchInput 多功能 Input', module);
stories.add('multiSearchInput', () => {
    let searchType: any = store.get('searchType')
    return (
        <div className='story_wrapper'>
            <h2>何时使用</h2>
            <p>多功能 input （区分大小写匹配、精确匹配、头部匹配、尾部匹配）</p>
            <h2>示例</h2>
            <State store={store}>
                <MultiSearchInput
                    placeholder="按名称搜索"
                    style={{ width: '250px', height: '26px' }}
                    value={null}
                    searchType={searchType}
                    onChange={(value: string) => {
                        console.log('value', value)
                        store.set({
                            searchName: value
                        })
                    }}
                    onTypeChange={(type: string) => {
                        store.set({
                            searchType: type
                        })
                    }}
                    onSearch={action('搜索中')}
                />
            </State>
            <p style={{ marginTop: '10px' }}>在 Action 中查看过滤方式打印结果</p>
        </div>
    )
}, {
    info: {
        text: `
        代码示例：
        ~~~js
        import { MultiSearchInput } from 'dt-react-component'
        <MultiSearchInput
            placeholder="按任务名称搜索"
            value={jobName}
            searchType={searchType}
            onChange={this.changeTaskName}
            onTypeChange={this.changeSearchType}
            onSearch={this.onSearchByTaskName}
        />
        ~~~
        `,
        TableComponent: () => PropsTable({ propDefinitions }),
        propTablesExclude: [State]
    }
})

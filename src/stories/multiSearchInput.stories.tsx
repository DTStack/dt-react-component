import React from 'react'
import { storiesOf } from '@storybook/react';
import MultiSearchInput from '../components/multiSearchInput';
import { PropsTable } from './components/propsTable';
import { State, Store } from '@sambego/storybook-state';
import { action } from '@storybook/addon-actions';
import '../styles/index.scss';
import ExampleContainer from './components/exampleCode';

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

const otherDependencies = `import { MultiSearchInput } from 'dt-react-component';`
const code = `
    <MultiSearchInput
        placeholder="按名称搜索"
        style={{ width: '250px', height: '26px' }}
        value={null}
        searchType={searchType}
        onChange={(value) => {
            console.log('value', value)
            
        }}
        onTypeChange={(type) => {
            console.log(type)
        }}
        onSearch={(value, searchType) =>  {
            console.log(value, searchType)
        }}
    />
`

type SearchType = 'fuzzy' | 'precise' | 'front' | 'tail';

stories.add('multiSearchInput', () => {
    let searchType: any = store.get('searchType')

    return (
        <div className='story_wrapper'>
            <h2>何时使用</h2>
            <p>多功能 input （区分大小写匹配、精确匹配、头部匹配、尾部匹配）</p>
            <h2>示例</h2>
            <ExampleContainer otherDependencies={otherDependencies} code={code} hasCodeSandBox={true}>
                <MultiSearchInput
                    placeholder="按名称搜索"
                    style={{ width: '250px', height: '26px' }}
                    value={null}
                    searchType='fuzzy'
                    onChange={(value: string) => {
                        console.log('value', value)
                    }}
                    onTypeChange={(type: string) => {
                        console.log(type)
                    }}
                    onSearch={(value: string, searchType: SearchType) => {
                        console.log(value, searchType)
                    }}
                />

            </ExampleContainer>

            <p style={{ marginTop: '10px' }}>在 Action 中查看过滤方式打印结果</p>
            <State store={store}>
                <MultiSearchInput
                    placeholder="按名称搜索"
                    value={null}
                    searchType={searchType}
                    onChange={(value: string) => {
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

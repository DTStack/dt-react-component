import * as React from 'react';
import { storiesOf } from '@storybook/react';
import jsonp from 'fetch-jsonp';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import DtEasySelect from '../components/dt-easy-select';

const stories = storiesOf('DtEasySelect 下拉框', module);
stories.addDecorator(withKnobs)
const servise = (str: any) =>
    jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${str}`)
        .then(response => response.json())
        .then((res: any) => res.result.map((item: any[]) => ({
            label: item[0],
            value: item[1]
        })));
const propDefinitions = [
    {
        property: 'dataSource',
        propType: 'Array',
        required: false,
        description: (
            <div style={{ textAlign: 'left' }}>
                <p>{`静态数据源,支持json格式数据和普通数组格式。具体如下 :`}</p>
                <p>{`1、json格式,dataSource=[ {value: 1, label: '描述'} ], 选中后下拉框展示为对应选中项的label, 但是数据为对应value值;`}</p>
                <p>{`2、常规(String或者Number), dataSource=[ '文案1', 234 ];`}</p>
            </div>),
        defaultValue: '[]'
    },
    {
        property: 'filterLocal',
        propType: 'boolean',
        required: false,
        description: '本地模糊查询, 支持json格式和普通数组格式模糊查询, 若需自定义模糊查询函数, 请使用filterOption自行替换即可.',
        defaultValue: 'false'
    },
    {
        property: 'servise',
        propType: 'function',
        required: false,
        description: '远程数据请求(异步加载远程数据方法, 接口参数传递等操作在这里处理, 如果数据格式不合法, 可以在这里进行return处理).',
        defaultValue: '无'
    },
    {
        property: 'auto',
        propType: 'boolean',
        required: false,
        description: '是否初始化请求远程数据, 当servise存在时, 该字段才起作用, 用于组件加载时初始化数据, 否则的话将在onSearch（模糊查询）时进行请求.',
        defaultValue: 'false'
    },
    {
        property: 'autoValue',
        propType: 'any',
        required: false,
        description: '初始化时请求远程数据的默认搜索数据, 当servise存在时, 该字段才起作用, 用于组件加载时初始化数据传参, 有且仅使用这一次.',
        defaultValue: 'false'
    },
    {
        property: 'clearValueRequest',
        propType: 'boolean',
        required: false,
        description: '清空当前选项是否执行请求(默认清空当前选项不进行服务端请求).',
        defaultValue: 'false'
    }]
stories.add('dteasyselect', () => (
    <div className='story_wrapper'>
        <h2>简述</h2>
        <p>{`参考之前业务所编辑业务组件, 主要用于表单中Select下拉框组件优化, 继承AntDesign组件api文档所有属性, 将原<Select><Option>...</Option></Select>形式改为闭合标签<DtEasySelect />的形式, 同时将异步请求数据和onSearch方法结合，简化代码。`}</p>
        <h2>示例</h2>
        <h5>静态本地数据源(json格式，带本地模糊查询功能)</h5>
        <DtEasySelect
            filterLocal
            dataSource={[{ value: 1, label: '描述' }, { value: 2, label: '描述2' }]}
            onChange={(val: any) => { console.log(val) }}
        />
        <h5>静态本地数据源(普通数组格式)</h5>
        <DtEasySelect
            filterLocal
            dataSource={['文案1', 234]}
            onChange={(val: any) => { console.log(val) }}
        />
        <h5>远程获取数据（自动请求）</h5>
        <DtEasySelect
            auto
            servise={servise}
            autoValue={'111'}
            onChange={(val: any) => { console.log(val) }}
        />
        <h5>远程获取数据（非自动请求）</h5>
        <DtEasySelect
            servise={servise}
            onChange={(val: any) => { console.log(val) }}
        />
    </div>
), {
    info: {
        TableComponent: () => PropsTable({ propDefinitions }),
        text: `
            代码示例：
            ~~~js
            // 静态本地数据源(json格式，附带本地模糊查询)
            <DtEasySelect
                showSearch
                filterLocal
                dataSource={[{ value: 1, label: '描述' }, { value: 2, label: '描述2' }]}
                onChange={(val: any) => { console.log(val) }}
            />
            ~~~
            ~~~js
            // 静态本地数据源(普通数组格式)
            <DtEasySelect
                showSearch
                filterLocal
                dataSource={['文案1', 234]}
                onChange={(val: any) => { console.log(val) }}
            />
            ~~~
            ~~~js
            // 远程获取数据（自动请求）
            <DtEasySelect
                auto
                servise={(str: any) =>
                    jsonp('https://suggest.taobao.com/sug?code=utf-8&q="str"')
                        .then(response => response.json())
                        .then((res: any) => res.result.map((item: any[]) => ({
                            label: item[0],
                            value: item[1]
                    })))
                }
                autoValue={'111'}
                onChange={(val: any) => { console.log(val) }}
            />
            ~~~
            ~~~js
            // 远程获取数据（非自动请求）
            <DtEasySelect
                servise={(str: any) =>
                    jsonp('https://suggest.taobao.com/sug?code=utf-8&q="str"')
                        .then(response => response.json())
                        .then((res: any) => res.result.map((item: any[]) => ({
                            label: item[0],
                            value: item[1]
                    })))
                }
                onChange={(val: any) => { console.log(val) }}
            />
            ~~~
        `
    }
})
